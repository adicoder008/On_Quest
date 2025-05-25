import { db, storage } from './firebase.cjs';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

// Post types
export const POST_TYPES = {
  REGULAR: 'regular',
  EVENT: 'event',
  SPONSORED: 'sponsored',
  QUEST_COMPLETION: 'quest_completion'
};

// Create a new post
export const createPost = async (postData) => {
  try {
    // Upload image if exists
    let imageUrl = '';
    if (postData.imageFile) {
      const storageRef = ref(storage, `posts/${Date.now()}_${postData.imageFile.name}`);
      await uploadBytes(storageRef, postData.imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    const post = {
      userId: postData.userId,
      userName: postData.userName,
      userProfilePic: postData.userProfilePic,
      text: postData.text,
      photoUrl: imageUrl,
      postType: postData.postType || POST_TYPES.REGULAR,
      location: postData.location || null,
      topics: postData.topics || [],
      taggedUsers: postData.taggedUsers || [],
      createdAt: serverTimestamp(),
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      ...(postData.questContext && { questContext: postData.questContext })
    };

    const docRef = await addDoc(collection(db, 'posts'), {
      ...postData,
      authorName: postData.userName,
      authorAvatar: postData.userPhoto,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...post };
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Get real-time posts updates
export const subscribeToPosts = (callback) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    callback(posts);
  });

  return unsubscribe;
};