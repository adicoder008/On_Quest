import React from 'react'

const Page3 = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
        <div className=' font-arsenal font-[600] italic text-3xl text-center'>How would you like to travel</div>
        <div className='text-center'>select one</div>
        <div className='flex gap-2'>
            <img src="/Flight1.svg " className='w-[14vw]' alt="" />
            <img src="/train.svg " className='w-[14vw]' alt="" />
            <img src="/bus1.svg " className='w-[14vw]' alt="" />
            <img src="/ship1.svg " className='w-[14vw]' alt="" />
            <img src="/pv1.svg " className='w-[14vw]' alt="" />
        </div>

    </div>
      
    </>
  )
}

export default Page3
