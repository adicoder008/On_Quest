// src/pages/Quest.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, increment } from 'firebase/firestore';
import { db, auth } from '../lib/firebase.cjs';
import { onAuthStateChanged } from 'firebase/auth';
import { getCurrentUserData } from '../lib/authService.cjs';
import QuestHeader from '../components/quest/QuestHeader';
import FlowCards from '../components/quest/FlowCards';
import InteractiveMap from '../components/quest/InteractiveMap';
import EngagementSection from '../components/quest/EngagementSection';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { toast } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';


const Quest = () => {
  const { questId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [quest, setQuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  // Handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const userDetails = await getCurrentUserData();
          setUserData(userDetails);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
    });
    
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchQuest();
  }, [questId, user]);

  useEffect(() => {
    if (quest && user) {
      setIsLiked(quest.likes?.includes(user.uid) || false);
      setIsSaved(quest.saves?.includes(user.uid) || false);
      setIsFollowing(quest.followers?.includes(user.uid) || false);
    }
  }, [quest, user]);

  const fetchQuest = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if questId exists
      //if (!questId) {
       // setError('Invalid quest ID');
        //return;
      //}
  
      const questDoc = await getDoc(doc(db, 'quest', questId));
      
      if (!questDoc.exists()) {
        setError('Quest not found');
        return;
      }
  
      const questData = { id: questDoc.id, ...questDoc.data() };
      
      // Initialize missing arrays if they don't exist
      questData.coOwners = questData.coOwners || [];
      questData.likes = questData.likes || [];
      questData.saves = questData.saves || [];
      questData.followers = questData.followers || [];
      
      // Check if quest is private and user has access
      if (questData.privacy === 'private') {
        if (!user) {
          setError('Please sign in to view this private quest');
          return;
        }
        
        const isOwner = questData.createdBy === user.uid;
        const isCoOwner = questData.coOwners.includes(user.uid);
        
        if (!isOwner && !isCoOwner) {
          setError('You don\'t have permission to view this quest');
          return;
        }
      }
  
      setQuest(questData);
      
      // Increment view count if user is viewing someone else's quest
      if (user && questData.createdBy !== user.uid) {
        try {
          await updateDoc(doc(db, 'quest', questId), {
            views: increment(1)
          });
        } catch (updateError) {
          console.error('Error updating view count:', updateError);
        }
      }
    } catch (err) {
      console.error('Error fetching quest:', err);
      setError('Failed to load quest. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const handleLike = async () => {
    if (!user) {
      toast.error('Please sign in to like quests');
      return;
    }

    try {
      const questRef = doc(db, 'quest', questId);
      const userRef = doc(db, 'users', user.uid);
      
      if (isLiked) {
        await Promise.all([
          updateDoc(questRef, {
            likes: arrayRemove(user.uid),
            likesCount: increment(-1)
          }),
          updateDoc(userRef, {
            likedQuests: arrayRemove(questId)
          })
        ]);
        setIsLiked(false);
      } else {
        await Promise.all([
          updateDoc(questRef, {
            likes: arrayUnion(user.uid),
            likesCount: increment(1)
          }),
          updateDoc(userRef, {
            likedQuests: arrayUnion(questId)
          })
        ]);
        setIsLiked(true);
      }
    } catch (err) {
      console.error('Error updating like:', err);
      toast.error('Failed to update like');
    }
  };

  const handleSave = async () => {
    if (!user) {
      toast.error('Please sign in to save quests');
      return;
    }

    try {
      const questRef = doc(db, 'quest', questId);
      const userRef = doc(db, 'users', user.uid);
      
      if (isSaved) {
        await Promise.all([
          updateDoc(questRef, {
            saves: arrayRemove(user.uid),
            savesCount: increment(-1)
          }),
          updateDoc(userRef, {
            savedQuests: arrayRemove(questId)
          })
        ]);
        setIsSaved(false);
        toast.success('Quest removed from saved');
      } else {
        await Promise.all([
          updateDoc(questRef, {
            saves: arrayUnion(user.uid),
            savesCount: increment(1)
          }),
          updateDoc(userRef, {
            savedQuests: arrayUnion(questId)
          })
        ]);
        setIsSaved(true);
        toast.success('Quest saved!');
      }
    } catch (err) {
      console.error('Error updating save:', err);
      toast.error('Failed to update save');
    }
  };

  const handleFollow = async () => {
    if (!user) {
      toast.error('Please sign in to follow quests');
      return;
    }

    try {
      const questRef = doc(db, 'quest', questId);
      const userRef = doc(db, 'users', user.uid);
      
      if (isFollowing) {
        await Promise.all([
          updateDoc(questRef, {
            followers: arrayRemove(user.uid),
            followersCount: increment(-1)
          }),
          updateDoc(userRef, {
            followingQuests: arrayRemove(questId)
          })
        ]);
        setIsFollowing(false);
        toast.success('Unfollowed quest');
      } else {
        await Promise.all([
          updateDoc(questRef, {
            followers: arrayUnion(user.uid),
            followersCount: increment(1)
          }),
          updateDoc(userRef, {
            followingQuests: arrayUnion(questId)
          })
        ]);
        setIsFollowing(true);
        toast.success('Following quest!');
      }
    } catch (err) {
      console.error('Error updating follow:', err);
      toast.error('Failed to update follow');
    }
  };

  const handleDuplicate = async () => {
    if (!user) {
      toast.error('Please sign in to duplicate quests');
      return;
    }

    try {
      // Implementation depends on your trip creation service
      const newQuestRef = doc(collection(db, 'quest'));
      const newQuestData = {
        ...quest,
        createdBy: user.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes: [],
        saves: [],
        followers: [],
        views: 0,
        privacy: 'draft',
        originalQuestId: questId
      };

      await setDoc(newQuestRef, newQuestData);
      await updateDoc(doc(db, 'users', user.uid), {
        draftQuests: arrayUnion(newQuestRef.id)
      });

      toast.success('Quest duplicated to your drafts!');
      navigate(`/edit-quest/${newQuestRef.id}`);
    } catch (err) {
      console.error('Error duplicating quest:', err);
      toast.error('Failed to duplicate quest');
    }
  };

  const handleCardFocus = (index) => {
    setActiveCardIndex(index);
  };

  const handleMapPinClick = (index) => {
    setActiveCardIndex(index);
    const cardElement = document.getElementById(`flow-card-${index}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!quest) return <ErrorMessage message="Quest not found" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <QuestHeader 
        quest={quest}
        isLiked={isLiked}
        isSaved={isSaved}
        isFollowing={isFollowing}
        onLike={handleLike}
        onSave={handleSave}
        onFollow={handleFollow}
        onDuplicate={handleDuplicate}
        currentUser={user}
        userData={userData}
        onCreateQuest={() => navigate('/create-quest')} // Pass this prop to header

      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <FlowCards 
              flowCards={quest.flowCards || []}
              activeIndex={activeCardIndex}
              onCardFocus={handleCardFocus}
              questId={questId}
              canEdit={user && (quest.createdBy === user.uid || quest.coOwners?.includes(user.uid))}
            />
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-6">
              <InteractiveMap 
                flowCards={quest.flowCards || []}
                activeIndex={activeCardIndex}
                onPinClick={handleMapPinClick}
              />
              
              <div className="mt-6">
                <EngagementSection 
                  questId={questId}
                  quest={quest}
                  currentUser={user}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {user && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => navigate('/create-quest')}
            className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Create new quest"
          >
            <FaPlus className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Quest;