
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { db } from "../lib/firebase.cjs";
// import { TripHeader } from "../components/trip-planner/TripHeader";
// import { FlightDetails } from "../components/trip-planner/transport/FlightDetails";
// import { DayItinerary } from "../components/trip-planner/DayItinerary";
// import { TripSidebar } from "../components/trip-planner/TripSidebar";
// import { InfoButton } from "../components/trip-planner/InfoButton";

// import TransportOptionsDisplay from "@/components/trip-planner/transport/transportOptions";
// import Navbar from "../components/Navbar";

// const Trip = () => {
//   const [trip, setTrip] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeDay, setActiveDay] = useState(0);
//   const { tripId } = useParams();
//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchTrip = async () => {
//       try {
//         setLoading(true);
        
//         if (!auth.currentUser) {
//           navigate("/login");
//           return;
//         }

//         const userId = auth.currentUser.uid;
//         const tripRef = doc(db, "users", userId, "trips", tripId);
//         const tripSnap = await getDoc(tripRef);

//         if (tripSnap.exists()) {
//           setTrip({ id: tripSnap.id, ...tripSnap.data() });
//         } else {
//           navigate("/my-trips");
//         }
//       } catch (error) {
//         console.error("Error fetching trip:", error);
//         navigate("/my-trips");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrip();
//   }, [tripId, navigate, auth]);

//   const handleSaveTrip = () => {
//     // Implement save functionality here
//     alert("Trip saved successfully!");
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center">
//         <p className="text-xl">Loading trip details...</p>
//       </div>
//     );
//   }

//   if (!trip) {
//     return (
//       <div className="container mx-auto p-6 text-center">
//         <p className="text-xl">Trip not found</p>
//         <button 
//           onClick={() => navigate("/my-trips")}
//           className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
//         >
//           Back to My Trips
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       <Navbar />
//       <main className="flex flex-col">
//         <div className="container mx-auto">
//           <TripHeader 
//             title={trip.days?.[0]?.title || "Trip Details"} 
//             destination={trip.days?.[0]?.activities?.[0]?.location?.split(" to ")?.[1] || ""}
//           />
//         </div>
        

//         <div className="w-full max-md:mt-10">
//           <div className="container mx-auto ">
            
//             <div className="gap-5 flex max-md:flex-col max-md:items-stretch ">
//             {/* <div className=" flex flex-col ">
//               <div></div> */}
//               <div className="w-3/5 max-md:w-full max-md:ml-0">

//                 <div className="flex w-full flex-col items-stretch max-md:max-w-full">
//                   {/* Day selector - only shown if trip has days */}
//                   {trip.days && trip.days.length > 0 && (
//                     <div className="flex overflow-x-auto mb-6 pb-2">
//                       {trip.days.map((day, index) => (
//                         <button
//                           key={index}
//                           className={`px-4 py-2 mr-2 rounded-md whitespace-nowrap flex-shrink-0 ${activeDay === index ? 'bg-[#EA6100] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                           onClick={() => setActiveDay(index)}
//                         >
//                           Day {day.day}: {day.title.length > 20 ? `${day.title.substring(0, 20)}...` : day.title}
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                 <div className="flex w-full flex-col  items-stretch max-md:max-w-full">
//                   <div className=" flex flex-col gap-10">
//                     <div>
//                       <p className="gap-2 text-base text-black mt-4 max-md:max-w-full">
//           Here's a well-planned{" "}
//           <span className="font-medium">Delhi to Goa solo trip</span> itinerary{" "}
//           <span className="font-medium">(March 15–18)</span> under a budget of{" "}
//           <span className="font-medium">
//             ₹2500 per night (excluding flight costs)
//           </span>
//           .
//         </p>
//         </div>
//                   <FlightDetails />
//                   </div>
                  


//                   <FlightDetails />

//                   {/* Dynamic itinerary days */}
//                   {trip.itinerary?.days && trip.itinerary.days.length > 0 ? (
//                   <DayItinerary
//                     tripId={tripId}
//                     userId={auth.currentUser?.uid}
//                     dayNumber={trip.itinerary.days[activeDay].day}
//                     date={trip.itinerary.days[activeDay].date}
//                     title={trip.itinerary.days[activeDay].title}
//                     description={trip.itinerary.days[activeDay].description}
//                     activities={trip.itinerary.days[activeDay].activities || []}
//                   />
//                 ) : (
//                   <>
//                     <DayItinerary
//                       dayNumber={1}
//                       date="March 15"
//                       description="Arrival & Exploration"
//                       activities={[]}
//                     />
//                     <DayItinerary
//                       dayNumber={2}
//                       date="March 16"
//                       description="Full Day Exploration"
//                       activities={[]}
//                     />
//                   </>
//                 )}

//                   <div className="flex w-[249px] max-w-full items-stretch gap-[15px] text-base font-medium mr-[25px] mt-3 mb-8 max-md:mr-2.5">
//                     <button className="self-stretch bg-white border gap-2.5 text-black px-4 py-2.5 rounded-lg border-[rgba(197,196,199,1)] border-solid">
//                       View on map
//                     </button>
//                     <button 
//                       className="self-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[#EA6100] gap-2.5 text-white px-4 py-2.5 rounded-lg"
//                       onClick={handleSaveTrip}
//                     >
//                       Save Trip
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="w-2/5 max-md:w-full">
//                 <TripSidebar tripData={trip} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
      
//       <InfoButton />
//     </div>
    
  
  
// ;

// export default Trip;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../lib/firebase.cjs";
import { TripHeader } from "../components/trip-planner/TripHeader";
import { FlightDetails } from "../components/trip-planner/transport/FlightDetails";
import { DayItinerary } from "../components/trip-planner/DayItinerary";
import { TripSidebar } from "../components/trip-planner/TripSidebar";
import { InfoButton } from "../components/trip-planner/InfoButton";

import TransportOptionsDisplay from "@/components/trip-planner/transport/transportOptions";
import Navbar from "../components/Navbar";

const Trip = () => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState(0);
  const { tripId } = useParams();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        setLoading(true);
        
        if (!auth.currentUser) {
          navigate("/login");
          return;
        }

        const userId = auth.currentUser.uid;
        const tripRef = doc(db, "users", userId, "trips", tripId);
        const tripSnap = await getDoc(tripRef);

        if (tripSnap.exists()) {
          setTrip({ id: tripSnap.id, ...tripSnap.data() });
        } else {
          navigate("/my-trips");
        }
      } catch (error) {
        console.error("Error fetching trip:", error);
        navigate("/my-trips");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [tripId, navigate, auth]);

  const handleSaveTrip = () => {
    // Implement save functionality here
    alert("Trip saved successfully!");
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl">Loading trip details...</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-xl">Trip not found</p>
        <button 
          onClick={() => navigate("/my-trips")}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Back to My Trips
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="flex flex-col">
        <div className="container mx-auto">
          <TripHeader 
            title={trip.days?.[0]?.title || "Trip Details"} 
            destination={trip.days?.[0]?.activities?.[0]?.location?.split(" to ")?.[1] || ""}
          />
        </div>
        
        <div className="w-full max-md:mt-10">
          <div className="container mx-auto">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-3/5 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col items-stretch max-md:max-w-full">
                  {/* Day selector - only shown if trip has days */}
                  {trip.days && trip.days.length > 0 && (
                    <div className="flex overflow-x-auto mb-6 pb-2">
                      {trip.days.map((day, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 mr-2 rounded-md whitespace-nowrap flex-shrink-0 ${activeDay === index ? 'bg-[#EA6100] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                          onClick={() => setActiveDay(index)}
                        >
                          Day {day.day}: {day.title.length > 20 ? `${day.title.substring(0, 20)}...` : day.title}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex w-full flex-col items-stretch max-md:max-w-full">
                    <div className="flex flex-col gap-10">
                      <div>
                        <p className="gap-2 text-base text-black mt-4 max-md:max-w-full">
                          Here's a well-planned{" "}
                          <span className="font-medium">Delhi to Goa solo trip</span> itinerary{" "}
                          <span className="font-medium">(March 15–18)</span> under a budget of{" "}
                          <span className="font-medium">
                            ₹2500 per night (excluding flight costs)
                          </span>
                          .
                        </p>
                      </div>
                      <FlightDetails />
                    </div>
                    
                    <FlightDetails />

                    {/* Dynamic itinerary days */}
                    {trip.itinerary?.days && trip.itinerary.days.length > 0 ? (
                      <DayItinerary
                        tripId={tripId}
                        userId={auth.currentUser?.uid}
                        dayNumber={trip.itinerary.days[activeDay].day}
                        date={trip.itinerary.days[activeDay].date}
                        title={trip.itinerary.days[activeDay].title}
                        description={trip.itinerary.days[activeDay].description}
                        activities={trip.itinerary.days[activeDay].activities || []}
                      />
                    ) : (
                      <>
                        <DayItinerary
                          dayNumber={1}
                          date="March 15"
                          description="Arrival & Exploration"
                          activities={[]}
                        />
                        <DayItinerary
                          dayNumber={2}
                          date="March 16"
                          description="Full Day Exploration"
                          activities={[]}
                        />
                      </>
                    )}

                    <div className="flex w-[249px] max-w-full items-stretch gap-[15px] text-base font-medium mr-[25px] mt-3 mb-8 max-md:mr-2.5">
                      <button className="self-stretch bg-white border gap-2.5 text-black px-4 py-2.5 rounded-lg border-[rgba(197,196,199,1)] border-solid">
                        View on map
                      </button>
                      <button 
                        className="self-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[#EA6100] gap-2.5 text-white px-4 py-2.5 rounded-lg"
                        onClick={handleSaveTrip}
                      >
                        Save Trip
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-2/5 max-md:w-full">
                <TripSidebar tripData={trip} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
      
      <InfoButton />
    </div>
    
  );
};

export default Trip;