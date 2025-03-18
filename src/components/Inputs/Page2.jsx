import React from 'react'
import { IoMdCalendar } from "react-icons/io";

const Page2 = () => {
  return (
    <>
    <div className="flex justify-between gap-20 w-[80vw]">
          {/* LEFT INPUT */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="font-arsenal font-[600] italic text-2xl">Select, start date</div>
            <div className="text-[0.9rem]">The date you plan to depart.</div>
    
            {/* Input with icon */}
            <div className="relative w-full">
              <IoMdCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="search"
                className="w-full pl-10 border-2 p-2 rounded-md outline-none"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
    
          {/* RIGHT INPUT */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="font-arsenal font-[600] italic text-2xl">end date</div>
            <div className="text-[0.9rem]">The date you plan to return.</div>
    
            {/* Input with icon */}
            <div className="relative w-full">
              <IoMdCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="search"
                className="w-full pl-10 border-2 p-2 rounded-md outline-none"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Page2
