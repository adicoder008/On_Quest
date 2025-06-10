import { CreatePost } from "../components/Feed/CreatePost";
import { Post } from "../components/Feed/Post";
import { EventCard } from "../components/Feed/EventCard";
import { TravelerCard } from "../components/Feed/TravelerCard";
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from "@/components/My-Profile/profile/Navbar";
import { useEffect, useState } from "react";
import { auth } from '../lib/firebase.cjs';
import { getCurrentUserData } from '../lib/authService.cjs';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase.cjs';
import { getDoc, doc } from 'firebase/firestore';
import { FaPlus } from 'react-icons/fa'; // Correct import
import { useNavigate } from 'react-router-dom';
import CreateQuest from "../components/quest/CreateQuest";

const Feed = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [popularUsers, setPopularUsers] = useState([]);
  const navigate = useNavigate();

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
      
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  // Fetch posts from Firebase
  useEffect(() => {
    const unsubscribePosts = onSnapshot(
      query(collection(db, 'posts'), orderBy('createdAt', 'desc')),
      async (snapshot) => {
        const postsData = [];
        
        // Process each post sequentially
        for (const doc of snapshot.docs) {
          const data = doc.data();
          let authorName = 'Anonymous';
          let authorAvatar = '/default-avatar.png';
          let authorTitle = '';
          
          try {
            // Fetch author details from users collection
            const userDoc = await getDoc(doc(db, 'users', data.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              authorName = userData.displayName || authorName;
              authorAvatar = userData.photoURL || authorAvatar;
              authorTitle = userData.title || '';
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
    
          // Construct post object
          postsData.push({
            id: doc.id,
            author: {
              id: data.userId,
              name: authorName,
              avatar: authorAvatar,
              title: data.postType === 'sponsored' ? 'Sponsored' : authorTitle
            },
            content: {
              text: data.text,
              images: data.photoUrl ? [data.photoUrl] : []
            },
            metadata: {
              time: '',
              location: data.location || '',
              createdAt: data.createdAt
            },
            stats: {
              likes: data.likeCount || 0,
              comments: data.commentCount || 0,
              likedBy: data.likedBy || []
            },
            postType: data.postType,
            ...(data.eventDetails && { eventDetails: data.eventDetails }),
            ...(data.questContext && { questContext: data.questContext })
          });
        }
        
        setPosts(postsData);
      }
    );
  
    // Fetch upcoming events
    const unsubscribeEvents = onSnapshot(
      query(collection(db, 'events'), orderBy('startTime', 'asc')),
      (snapshot) => {
        const eventsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Format date for display
          formattedDate: {
            day: new Date(doc.data().startTime).getDate(),
            month: new Date(doc.data().startTime).toLocaleString('default', { month: 'short' })
          }
        }));
        setEvents(eventsData.slice(0, 5)); // Only show 5 upcoming events
      }
    );
  
    // Fetch popular travelers
    const unsubscribeUsers = onSnapshot(
      query(collection(db, 'users'), orderBy('followers', 'desc')),
      (snapshot) => {
        const usersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Ensure default avatar if none exists
          photoURL: doc.data().photoURL || '/default-avatar.png'
        }));
        setPopularUsers(usersData.slice(0, 4)); // Only show 4 popular users
      }
    );
  
    // Cleanup function
    return () => {
      unsubscribePosts();
      unsubscribeEvents();
      unsubscribeUsers();
    };
  }, []);

  // Format post time
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp.seconds * 1000);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (loading) {
    return <div className="min-h-screen bg-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="box-border flex gap-4 max-w-[1800px] mx-auto px-[67px] py-5 max-md:flex-col max-md:p-5 max-sm:p-2.5">
        {/* Left Sidebar */}
        <aside className="w-[332px] max-md:w-full">
          <div className="border bg-[#F8F9FA] mb-3 rounded-lg border-[#C5C4C7]">
            <div className="h-[76px] overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e602cf47f7f87365e5624f662b21dd3f5655dcf"
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              {user ? (
                <>
                  <img
                    src={user.photoURL || '/default-avatar.png'}
                    alt="Profile"
                    className="-mt-10 mb-2.5 w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <h2 className="text-xl mb-1">{user.displayName || 'User'}</h2>
                  <p className="text-sm text-[#8B8A8F]">
                    {userData?.title || 'Travel Enthusiast'}
                  </p>
                </>
              ) : (
                <>
                  <div className="-mt-10 mb-2.5 w-16 h-16 bg-gray-300 rounded-full"></div>
                  <h2 className="text-xl mb-1">Guest</h2>
                  <p className="text-sm text-[#8B8A8F]">Sign in to post</p>
                </>
              )}
            </div>
          </div>

          <nav className="border bg-[#F8F9FA] p-3 rounded-lg border-[#C5C4C7]">
            <div className="flex items-center gap-3 text-base p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7933 8.90908 18.3912 7.93845C17.9892 6.96782 17.3999 6.08588 16.657 5.34299C15.9141 4.6001 15.0322 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94939 2.99979 8.90908 3.20672 7.93845 3.60877C6.96782 4.01081 6.08588 4.6001 5.34299 5.34299C3.84266 6.84332 2.99979 8.87821 2.99979 11C2.99979 13.1218 3.84266 15.1567 5.34299 16.657C6.84332 18.1573 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Events</span>
            </div>
            <div className="flex items-center gap-3 text-base p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18.644L7.8 20.444C7.13333 20.7273 6.5 20.6733 5.9 20.282C5.3 19.8906 5 19.3363 5 18.619V5.64398C5 5.09398 5.196 4.62332 5.588 4.23198C5.98 3.84065 6.45067 3.64465 7 3.64398H17C17.55 3.64398 18.021 3.83998 18.413 4.23198C18.805 4.62398 19.0007 5.09465 19 5.64398V18.619C19 19.3356 18.7 19.89 18.1 20.282C17.5 20.674 16.8667 20.728 16.2 20.444L12 18.644Z"
                  fill="black"
                />
              </svg>
              <span>Saved</span>
            </div>
          </nav>
        </aside>

        {/* Main Feed */}
        <section className="w-[680px] max-md:w-full">
          {user && <CreatePost onPostCreated={() => {}} />}
            
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              metadata={{
                ...post.metadata,
                time: formatTime(post.metadata.createdAt)
              }}
              stats={post.stats}
              postType={post.postType}
              eventDetails={post.eventDetails}
              questContext={post.questContext}
            />
          ))}

          {posts.length === 0 && (
            <div className="border bg-[#F8F9FA] p-6 rounded-lg border-[#C5C4C7] text-center">
              <h3 className="text-lg font-medium mb-2">No posts yet</h3>
              <p className="text-[#8B8A8F]">
                {user ? "Be the first to share your travel experience!" : "Sign in to see posts"}
              </p>
            </div>
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="w-[332px] max-md:w-full">
          <div className="border bg-[#F8F9FA] p-4 rounded-lg border-[#C5C4C7]">
            <h2 className="text-base font-medium mb-4">Upcoming Events</h2>
            <div className="flex flex-col gap-3">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  date={{
                    day: new Date(event.startTime).getDate().toString(),
                    month: new Date(event.startTime).toLocaleString('default', { month: 'short' })
                  }}
                  title={event.title}
                  location={event.location}
                  type={event.type || 'other'}
                />
              ))}
              {events.length === 0 && (
                <p className="text-sm text-[#8B8A8F]">No upcoming events</p>
              )}
              <button className="text-blue-500 text-sm font-medium mt-2">
                Explore more
              </button>
            </div>
          </div>

          <div className="border bg-[#F8F9FA] mt-4 p-4 rounded-lg border-[#C5C4C7]">
            <h2 className="text-base font-medium mb-4">Popular Travelers</h2>
            <div className="flex flex-col gap-3">
              {popularUsers.map((user) => (
                <TravelerCard
                  key={user.id}
                  name={user.displayName}
                  title={user.title || 'Travel Enthusiast'}
                  avatar={user.photoURL || '/default-avatar.png'}
                />
              ))}
              {popularUsers.length === 0 && (
                <p className="text-sm text-[#8B8A8F]">No popular travelers yet</p>
              )}
              <button className="text-blue-500 text-sm font-medium mt-2">
                Explore more
              </button>
            </div>
          </div>
        </aside>
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
      </main>
    </div>
  );
};
export default Feed;