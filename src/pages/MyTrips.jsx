import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "@/lib/firebase.cjs";
import { FaTrash } from "react-icons/fa";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        if (!auth.currentUser) {
          navigate("/");
          return;
        }

        const userId = auth.currentUser.uid;
        const tripsRef = collection(db, "users", userId, "trips");
        const querySnapshot = await getDocs(tripsRef);

        const tripsData = [];
        querySnapshot.forEach((doc) => {
          const tripData = doc.data();
          tripsData.push({
            id: doc.id,
            ...tripData,
            destination: tripData.destination,
            startDate: tripData.startDate,
            endDate: tripData.endDate,
            days: tripData.itinerary?.days || []
          });
        });

        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [navigate, auth]);

  const handleTripClick = (tripId) => {
    navigate(`/trip/${tripId}`);
  };

  const handleDeleteTrip = async (tripId, e) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      setDeletingId(tripId);
      const userId = auth.currentUser.uid;
      const tripRef = doc(db, "users", userId, "trips", tripId);
      await deleteDoc(tripRef);
      
      // Update local state to remove the deleted trip
      setTrips(trips.filter(trip => trip.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
      alert("Failed to delete trip. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl">Loading your trips...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-arsenal font-bold mb-8">My Trips</h1>
      
      {trips.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">You haven't created any trips yet.</p>
          <button 
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Plan a New Trip
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => {
            const firstDay = trip.days?.[0];
            const firstActivity = firstDay?.activities?.[0];
            
            return (
              <div 
                key={trip.id} 
                className="border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden relative"
                onClick={() => handleTripClick(trip.id)}
              >
                {/* Delete button */}
                <button
                  onClick={(e) => handleDeleteTrip(trip.id, e)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition-colors z-10"
                  disabled={deletingId === trip.id}
                  aria-label="Delete trip"
                >
                  {deletingId === trip.id ? (
                    <span className="text-gray-500">...</span>
                  ) : (
                    <FaTrash className="text-red-500" />
                  )}
                </button>
                
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {firstActivity?.imageUrl ? (
                    <img 
                      src={firstActivity.imageUrl} 
                      alt="Trip" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500">No image available</div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">
                    {trip.destination || "Unnamed Trip"}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {firstActivity?.location?.split(" to ")?.[1] || trip.destination || "No destination info"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {trip.days?.length || 0} {trip.days?.length === 1 ? "day" : "days"} · 
                    {trip.startDate ? ` ${formatDate(trip.startDate)}` : ""}
                    {trip.endDate ? ` - ${formatDate(trip.endDate)}` : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyTrips;