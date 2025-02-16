import React from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { FaAmazonPay } from "react-icons/fa";
import { LiaShareSquare } from "react-icons/lia";

const Signin = () => {
  return (
    <>
      <div className='relative flex w-full h-[110vh] mt-10'>
        <img src="/gojoo.jpg" className='h-[110vh] object-cover ' alt="gojo" />
        <div className='SIGN_IN_BOX p-10 flex flex-col gap-7 w-3/4'>
          <div className='text-4xl text-black z-50 '>OUR DEAR ANGEL</div>
          <div className='text-2xl'>RS. 900/-</div>
          <div className='text-2xl'>SIZE</div>
          <div className='flex gap-10'>
            <button className='bg-[#6b4d8b] text-white p-3'>Miniprint (5 x 7)</button>
            <button className='bg-[#6b4d8b] text-white p-3'>RGB Poster(11 x 14)</button>
            </div>
          <div className='flex gap-10 text-xl'>
            <div className='items-center text-center'><GoPlusCircle size-40 /></div>
            <div className='items-center text-center'>1</div>
            <div className='items-center text-center'><FiMinusCircle size-40 /></div>
            <button className='border border-black p-3'>ADD TO CART</button>
            
            </div>
            <button className='flex items-center justify-center gap-2 bg-slate-400'>BUY  WITH  AMAZON <span className='relative top-[3px]'><FaAmazonPay size={34} /></span></button>
            <div className='flex text-xl'><span className=' mr-2'><LiaShareSquare size={30} /></span> share</div>
            <hr />
            <div className='text-1xl'>  VIEW FULL DETAILS</div>
            <hr />

          
        </div>
        
      </div>
    </>
  )
}

export default Signin
