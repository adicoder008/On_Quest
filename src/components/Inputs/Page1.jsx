// import React from 'react'
// import { CiSearch } from "react-icons/ci";

// const Page1 = () => {
//   return (
//     <>
//       <div className="flex justify-between gap-20 w-[80vw]">
//         <div className="RIGHT-HALF w-1/2 flex flex-col gap-2 ">
//             <div className="font-arsenal font-[600] italic text-2xl">From</div>
//             <div className="text-[0.8rem]">we 'll recommend best transportation options for you</div>
//             <input type="search" className="border-2 p-2 rounded-md" placeholder="Enter starting city or town"/>
//         </div>
//         <div className="RIGHT-HALF w-1/2 flex flex-col gap-2 ">
//             <div className="font-arsenal font-[600] italic text-2xl">Where do you want to go ?</div>
//             <div className="text-[0.8rem]">Get personalized recommendations to plan your itinerary.</div>
//             <input type="search" className="border-2 p-2 rounded-md" placeholder="Enter destination city or town"/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Page1

import React from "react";
import { CiSearch } from "react-icons/ci"; // Import search icon

const Page1 = () => {
  return (
    <div className="flex justify-between gap-20 w-[80vw]">
      {/* LEFT INPUT */}
      <div className="w-1/2 flex flex-col gap-4">
        <div className="font-arsenal font-[600] italic text-2xl">From</div>
        <div className="text-[0.9rem]">We'll recommend the best transportation options for you</div>

        {/* Input with icon */}
        <div className="relative w-full">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search"
            className="w-full pl-10 border-2 p-2 rounded-md outline-none"
            placeholder="Enter starting city or town"
          />
        </div>
      </div>

      {/* RIGHT INPUT */}
      <div className="w-1/2 flex flex-col gap-4">
        <div className="font-arsenal font-[600] italic text-2xl">Where do you want to go?</div>
        <div className="text-[0.9rem]">Get personalized recommendations to plan your itinerary.</div>

        {/* Input with icon */}
        <div className="relative w-full">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search"
            className="w-full pl-10 border-2 p-2 rounded-md outline-none"
            placeholder="Enter destination city or town"
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;

