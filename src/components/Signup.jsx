import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="bg-cover w-screen h-[87vh] bg-[url('/boat.jpg')] flex justify-center items-center">
        <div className='flex flex-col justify-center items-center'>
        <div className='text-center text-white text-6xl font-arsenal italic'>Ready to Make Your <span className='font-[500]'>Next</span> Trip <span className='font-[500]'>Unforgettable</span>?</div>
        <div className='flex justify-center'><button className='items-center w-fit bg-[#F86F0A] text-[1rem] rounded-3xl px-4 py-3 text-black mt-4'>Sign Up & start planning</button></div>
        </div>
        
    </div>
    <div className='p-3 w-full bg-[#210D0D] text-white flex items-center justify-around'>
    <div className='font-semibold'>List your business </div>   
    <div className='font-[300]'>Got a business? Partner and get your business listed on OnQuest</div>
    <div className='flex justify-center'><button className='items-center w-fit bg-[#F86F0A] text-[0.8rem] rounded-3xl px-2 py-1 text-black '>Contact us</button></div>
    </div>
      
    </>
  )
}

export default Signup
