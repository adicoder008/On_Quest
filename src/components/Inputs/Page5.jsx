import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Page5 = () => {
  return (
    <>
    <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <div className=' font-arsenal font-[600] italic text-3xl text-center'>Tell us what you’re interested in</div>
                <div className='text-center text-[#8B8A8F]'>select all that applies</div>
            </div>
            <div className='flex gap-3 w-[62vw] justify-center flex-wrap align-middle' >
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Nightlife</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Must-See Attractions</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Exotic Cuisine</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Tour And Experiences</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Hidden gems</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>skydiving</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Exploration</button>
                <button className='bg-[#F8F9FA] rounded-full px-3 py-2 border-[1px] text-[0.88rem] text-[#8B8A8F]'>Water-sports</button>
                
               
            </div>
            <div className=' flex justify-center'>
            <button className=' w-fit flex justify-center gap-2 items-center rounded-full px-4 py-2 text-[0.88rem] border-[1px] border-black'>Add Interest   <FaPlus size={12}/></button></div>
                
    
        </div>
      
    </>
  )
}

export default Page5
