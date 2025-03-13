import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='FOOTER flex flex-col'>
        <div className=' flex justify-around sm:justify-between'>
            <div className='LEFT-HALF flex items-center flex-col sm:flex-row '>
                <img src="/Light.png" className='h-[18vh]' alt="" />
                <div className='flex flex-col px-[4vw] py-[3vw]'>
                    <div className='font-semibold text-2xl'>Stay Updated!</div>
                    <div className='w-[25vw]'>Join our community for the latest events and offers.</div>
                    <button className='w-fit'>Join Now</button>

                </div>
            </div>
            <div className='RIGHT-HALF flex flex-col items-center justify-center sm:flex-row'>
            <div className='flex flex-col pl-[4vw] py-[3vw]'>
                    <div>EXPLORE</div>
                    <ul>Home</ul>
                    <ul>Trip Planner</ul>
                    <ul>Events</ul>
                    <ul>About Us</ul>
                    <ul>Contact Us</ul>
                    

                </div>
                <div className='flex flex-col px-[4vw] py-[3vw]'>
                    <div>LEGAL</div>
                    <ul>Privacy Policy</ul>
                    <ul>Terms of service</ul>

                </div>
            </div>

        </div>
        <div className='flex flex-col'>
            <div className='flex gap-4 items-center justify-center'>
                <ul><FaSquareInstagram size={30}/></ul>
                <ul><FaLinkedin size={30}/></ul>
                <ul><FaFacebookSquare size={30}/></ul>
                <ul><FaSquareXTwitter size={30}/></ul>
            </div>
            <div className='p-5 text-center'>© 2025 OnQuest. All rights reserved. The content, trademarks, and intellectual property on this platform are owned by OnQuest and are protected under applicable copyright laws.</div>
            
        </div>

    </div>
      
    </>
  )
}

export default Footer
