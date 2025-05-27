const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();


const LEVEL_THRESHOLDS = [25,100,500,1000,5000,10000];

// Update user level based on XP
async function updateUserLevel(userId) {
  const userRef = admin.firestore().collection('users').doc(userId);
  const userDoc = await userRef.get();
  const xp = userDoc.data().xpPoints || 0;
  
  let newLevel = 1;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      newLevel = i + 1;
      break;
    }
  }
  
  await userRef.update({ level: newLevel });
  return newLevel;
}

// When a new post is created
exports.onPostCreated = functions.firestore
  .document('posts/{postId}')
  .onCreate(async (snap, context) => {
    const post = snap.data();
    const userId = post.userId;
    
    // Add XP log
    await admin.firestore().collection('user_xp_logs').add({
      userId: userId,
      xpChange: 15, // 10 XP per post
      source: 'post',
      sourceId: context.params.postId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    // Update user XP
    const userRef = admin.firestore().collection('users').doc(userId);
    await userRef.update({
      xpPoints: admin.firestore.FieldValue.increment(10)
    });
    
    // Check level update
    await updateUserLevel(userId);
  });

// When a user is referred
exports.onUserReferred = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snap, context) => {
    const user = snap.data();
    if (!user.referredBy) return;
    
    const referrerId = user.referredBy;
    
    // Add XP log for referrer
    await admin.firestore().collection('user_xp_logs').add({
      userId: referrerId,
      xpChange: 15, //  5 for person who joins
      source: 'referral',
      sourceId: context.params.userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    // Update referrer's XP
    const referrerRef = admin.firestore().collection('users').doc(referrerId);
    await referrerRef.update({
      xpPoints: admin.firestore.FieldValue.increment(50)
    });

    //add xp for new user
    await admin.firestore().collection('user_xp_logs').add({
      userId: context.params.userId,
      xpChange: 5, // 5 for person who joins
      source: 'referral  join',
      sourceId: context.params.userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    // Update new user's XP
    const newUserRef = admin.firestore().collection('users').doc(context.params.userId);
    await newUserRef.update({
      xpPoints: admin.firestore.FieldValue.increment(5)
    });
    
    // Check level update
    await updateUserLevel(referrerId);
  });


  //GROUPS

  exports.onGroupMemberJoin = functions.firestore
  .document('groups/{groupId}')
  .onUpdate(async (change, context) => {
    const groupId = context.params.groupId;
    const beforeData = change.before.data();
    const afterData = change.after.data();
    
    // Check if a new member has been added
    if (afterData.members.length > beforeData.members.length) {
      // Find the new member
      const newMembers = afterData.members.filter(
        afterMember => !beforeData.members.some(
          beforeMember => beforeMember.uid === afterMember.uid
        )
      );
      
      if (newMembers.length === 0) return null;
      
      // Get group owner
      const ownerId = afterData.createdBy;
      const ownerRef = db.collection('users').doc(ownerId);
      const ownerDoc = await ownerRef.get();
      
      if (!ownerDoc.exists) return null;
      
      // Get owner's FCM token if available
      const ownerData = ownerDoc.data();
      const ownerFcmToken = ownerData.fcmToken;
      
      if (!ownerFcmToken) return null;
      
      // Send notification to owner
      const newMember = newMembers[0];
      const message = {
        notification: {
          title: 'New Group Member',
          body: `${newMember.name || newMember.email} has joined your group "${afterData.name}".`
        },
        token: ownerFcmToken
      };
      
      try {
        await admin.messaging().send(message);
        console.log('Notification sent to group owner');
        return null;
      } catch (error) {
        console.error('Error sending notification:', error);
        return null;
      }
    }
    
    return null;
  });

// Function to create shared trips between group members
exports.onTripShareWithGroup = functions.firestore
  .document('trips/{tripId}')
  .onUpdate(async (change, context) => {
    const tripId = context.params.tripId;
    const beforeData = change.before.data();
    const afterData = change.after.data();
    
    // Check if trip has been shared with a group
    if (!beforeData.sharedWithGroup && afterData.sharedWithGroup) {
      const groupId = afterData.groupId;
      
      // Get the group
      const groupRef = db.collection('groups').doc(groupId);
      const groupDoc = await groupRef.get();
      
      if (!groupDoc.exists) return null;
      
      const groupData = groupDoc.data();
      const members = groupData.members;
      
      // Add trip reference to each member's trips array
      const batch = db.batch();
      
      for (const member of members) {
        if (member.uid === afterData.createdBy) continue; // Skip trip creator
        
        const userRef = db.collection('users').doc(member.uid);
        batch.update(userRef, {
          trips: admin.firestore.FieldValue.arrayUnion({
            id: tripId,
            name: afterData.name,
            sharedBy: afterData.createdBy,
            sharedAt: new Date().toISOString()
          })
        });
        
        // Send notification if user has FCM token
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          if (userData.fcmToken) {
            await admin.messaging().send({
              notification: {
                title: 'New Shared Trip',
                body: `"${afterData.name}" trip has been shared with your group`
              },
              token: userData.fcmToken
            });
          }
        }
      }
      
      await batch.commit();
      console.log('Trip shared with group members');
    }
    
    return null;
  });