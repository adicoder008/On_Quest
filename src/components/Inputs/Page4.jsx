import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const Page4 = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
        <div className=' font-arsenal font-[600] text-3xl text-center'>How would you like to travel</div>
        <div className='text-center'>select one</div>
        <div className='flex gap-2' >
            <div className='w-[14vw] bg-[#F8F9FA] shadow-xl h-28 border-2 rounded-lg flex flex-col justify-center gap-2 px-3 '>
            <div>
                <IoMdPerson size={28}/>
                <SiTicktick size={16} className='hidden'/>
            </div>
            <div>Solo trip</div>
            </div>
            <div className='w-[14vw] bg-[#F8F9FA] shadow-xl h-28 border-2 rounded-lg flex flex-col justify-center gap-2 px-3 '>
            <div>
                <FaHeart size={20}/>
                <SiTicktick size={16} className='hidden'/>
            </div>
            <div>Partner trip</div>
            </div>
            <div className='w-[14vw] bg-[#F8F9FA] shadow-xl h-28 border-2 rounded-lg flex flex-col justify-center gap-2 px-3 '>
            <div>
                <FaUserFriends size={26}/>
                <SiTicktick size={16} className='hidden'/>
            </div>
            <div>Friends trip</div>
            </div>
            <div className='w-[14vw] bg-[#F8F9FA] shadow-xl h-28 border-2 rounded-lg flex flex-col justify-center gap-2 px-3 '>
            <div>
                <MdFamilyRestroom size={30}/>
                <SiTicktick size={16} className='hidden'/>
            </div>
            <div>Family trip</div>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Page4
