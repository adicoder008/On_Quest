import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase.cjs';
import { useToast } from '../hooks/use-toast';
import { useIsMobile } from '../hooks/use-mobile';
import { getGroups, createGroup, joinGroup, leaveGroup } from '../lib/groupService.cjs';
import { Header } from '../components/Feed/Header.jsx';
import { useNavigate } from 'react-router-dom';
import GroupChat from '../pages/Chats.jsx';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchGroups(currentUser.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchGroups = async (userId) => {
    try {
      setLoading(true);
      const userGroups = await getGroups(userId);
      setGroups(userGroups);
    } catch (error) {
      toast.error('Error fetching groups');
      console.error('Error fetching groups:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) {
      toast.warning('Please enter a group name');
      return;
    }

    try {
      const newGroup = await createGroup({
        name: newGroupName,
        createdBy: user.uid,
        members: [{ uid: user.uid, name: user.displayName, email: user.email }]
      });
      toast.success(`Group "${newGroupName}" created successfully!`);
      setNewGroupName('');
      fetchGroups(user.uid);
    } catch (error) {
      toast.error('Error creating group');
      console.error('Error creating group:', error);
    }
  };

  const handleJoinGroup = async (e) => {
    e.preventDefault();
    if (!groupCode.trim()) {
      toast.warning('Please enter a group code');
      return;
    }

    try {
      await joinGroup(groupCode, {
        uid: user.uid,
        name: user.displayName,
        email: user.email
      });
      toast.success('Successfully joined the group!');
      setGroupCode('');
      fetchGroups(user.uid);
    } catch (error) {
      toast.error('Error joining group');
      console.error('Error joining group:', error);
    }
  };

  const handleLeaveGroup = async (groupId) => {
    try {
      await leaveGroup(groupId, user.uid);
      toast.success('You have left the group');
      fetchGroups(user.uid);
    } catch (error) {
      toast.error('Error leaving group');
      console.error('Error leaving group:', error);
    }
  };

  const copyInviteCode = (code) => {
    navigator.clipboard.writeText(code);
    toast.success('Invite code copied to clipboard!');
  };
  
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };
  
  const handlePlanTrip = (e, groupId) => {
    e.stopPropagation(); // Prevent opening the chat
    navigate(`/trip-planner?groupId=${groupId}`);
  };
  
  const handleLeaveGroupClick = (e, groupId) => {
    e.stopPropagation(); // Prevent opening the chat
    handleLeaveGroup(groupId);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Please sign in to manage your groups</h1>
        <p>You need to be signed in to create or join groups.</p>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">
      <Header title="Groups" />
      <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold mb-8">My Trip Groups</h1>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Create a New Group</h2>
            <form onSubmit={handleCreateGroup}>
              <div className="mb-4">
                <label htmlFor="groupName" className="block text-sm font-medium mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  id="groupName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter group name"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Create Group
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Join a Group</h2>
            <form onSubmit={handleJoinGroup}>
              <div className="mb-4">
                <label htmlFor="inviteCode" className="block text-sm font-medium mb-1">
                  Invite Code
                </label>
                <input
                  type="text"
                  id="inviteCode"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={groupCode}
                  onChange={(e) => setGroupCode(e.target.value)}
                  placeholder="Enter invite code"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Join Group
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">My Groups</h2>
          {loading ? (
            <div className="text-center py-8">Loading groups...</div>
          ) : groups.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">You haven't joined any groups yet.</p>
            </div>
          ) : (
            <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
              {groups.map((group) => (
                <div 
                  key={group.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                  onClick={() => handleGroupClick(group)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{group.name}</h3>
                      {group.createdBy === user.uid && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Owner</span>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Invite Code:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded mr-2">
                            {group.inviteCode}
                          </span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent opening the chat
                              copyInviteCode(group.inviteCode);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Members ({group.members.length})</h4>
                      <ul className="max-h-32 overflow-y-auto">
                        {group.members.map((member) => (
                          <li key={member.uid} className="flex items-center py-1">
                            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                              {member.name?.charAt(0) || member.email?.charAt(0)}
                            </span>
                            <span className="text-sm">
                              {member.name || member.email}
                              {member.uid === group.createdBy && (
                                <span className="text-xs text-gray-500 ml-1">(Owner)</span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={(e) => handlePlanTrip(e, group.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                      >
                        Plan Trip
                      </button>
                      
                      {group.createdBy !== user.uid && (
                        <button
                          onClick={(e) => handleLeaveGroupClick(e, group.id)}
                          className="text-red-600 text-sm hover:text-red-800"
                        >
                          Leave Group
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Chat Modal */}
      {selectedGroup && (
        <GroupChat 
          group={selectedGroup}
          onClose={() => setSelectedGroup(null)}
        />
      )}
    </div>
  );
};

export default Groups;