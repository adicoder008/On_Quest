import React from 'react'

const PhoneSection = () => {
  return (
    <>
     <div className='bg-[#F86F0A] py-10 px-4 bg-opacity-10 '>
      <div className='text-5xl pb-10 text-center font-arsenal font-[400] italic '> Plan, Explore, Share <span className='text-[#EA6100] font-[600]'>: The OnQuest Way</span></div>
      <div className='flex flex-col justify-centre items-center xs:flex-row pl-14 '>
            <div><img className=' rounded-xl' src="/phone1.svg" alt="" /></div>
            <div><img className=' rounded-xl  translate-y-16 z-10' src="/phone4.svg" alt="" /></div>
            <div><img className=' rounded-xl' src="/phone3.svg" alt="" /></div>    
      </div>
      </div>
    </>
  )
}

export default PhoneSection
