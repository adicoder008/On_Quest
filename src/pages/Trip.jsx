import React from "react";

import { TripHeader } from "../components/trip-planner/TripHeader";
import { FlightDetails } from "../components/trip-planner/FlightDetails";
import { DayItinerary } from "../components/trip-planner/DayItinerary";
import { TripSidebar } from "../components/trip-planner/TripSidebar";
import { InfoButton } from "../components/trip-planner/InfoButton";
import Navbar from "../components/Navbar";

const Trip = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="flex flex-col">
        <div className="container mx-auto">
          <TripHeader />
        </div>
        

        <div className="w-full max-md:mt-10">
          <div className="container mx-auto ">
            
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch ">
            {/* <div className=" flex flex-col ">
              <div></div> */}
              <div className="w-3/5 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col  items-stretch max-md:max-w-full">
                  <div className=" flex flex-col gap-10">
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
                  

                  <DayItinerary
                    dayNumber={1}
                    date="March 15"
                    description="Arrival & North Goa Exploration"
                  />

                  <DayItinerary
                    dayNumber={2}
                    date="March 16"
                    description="South Goa Exploration"
                  />

                  <div className="flex w-[249px] max-w-full items-stretch gap-[15px] text-base font-medium mr-[25px] mt-3 mb-8 max-md:mr-2.5">
                    <button className="self-stretch bg-white border gap-2.5 text-black px-4 py-2.5 rounded-lg border-[rgba(197,196,199,1)] border-solid">
                      View on map
                    </button>
                    <button className="self-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[#EA6100] gap-2.5 text-white px-4 py-2.5 rounded-lg">
                      Save Trip
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="w-2/5 max-md:w-full">
                <TripSidebar />
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