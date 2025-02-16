import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='static h-screen w-full'>
      <div className='COLLAGE absolute pl-[-10px] bg-[#FBFBFB] w-full'>
        <img src="/yourname.jpg" className='w-[22rem] relative rounded-md top-[11rem] left-[15rem] z-10' alt="" />
        {/* <img src="/tanjiro.jpg" className='relative w-40 rounded-md top-[-9rem] left-[34rem] z-0 hidden' alt="" /> */}
        <img src="/zenitsu.jpg" className='relative h-52 rounded-md top-[-12rem] left-[5rem] ' alt="" />
        <img src="/itachi.jpg" className='relative h-52 w-80 rounded-md top-[-5rem] left-[4rem] ' alt="" />

</div>
<div className='relative top-[9rem] pl-[670px] flex flex-col text-black z-50'>
    <p className='text-5xl font-light text-[#040520]'>HOLORAINBOW ACRYLIC </p>
    <p className='text-5xl font-light text-[#040520]'>CHARMS</p>
    <p className='text-2xl font-extralight my-4 font-sans'>all anime fans gather,including gojo,geto,tenjiro etc</p>
    <button className='bg-[#FBE53A] mt-2 w-fit p-4'>JOIN NOW</button>
</div>
</div>



      
    </>
  )
}

export default Hero
