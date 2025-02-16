// import React, { useRef } from 'react'
// import Card from './Card'
// import { useState } from 'react';
// import { FiPlus } from "react-icons/fi";

// //hence it is a static array
// let arr=[//moving it outside the below component ensures that it is not re-rendered everytime the component re-renders
//     {
//       title:"Homework",
//       desc:"complete your homework"
//     },{
//       title:"Laundry",
//       desc:"pickup laundry"
//     },{
//       title:"meow meow",
//       desc:"cat"
//     }
//   ]

//   let a=1;//again outside the component so that it doesnt re-render

// const Foreground = () => {
//     let ref=useRef(null);
  
//   const [cards,setcards]=useState([]);

//   const newtodo=()=>{
//     let idx=a++;
//     const cardData=arr[idx];
//     if(cardData){
//     setcards([...cards,<Card reference={ref} key={cards.length} title={cardData.title} desc={cardData.desc}/>]);//passing a new key for telling rect to do a re-render
//   }
//   }

//   return (

  
//     <>
//     <div className='absolute flex w-full justify-between z-10'>
//           <div className='text-white text-2xl'>My ToDo list</div>
//             <button onClick={newtodo} className='text-red-600 px-3' ><FiPlus size={48} /></button>
//           </div>
//     <div ref={ref} className='fixed top-0 left-0 h-full w-full'>
//       {cards}
//         {/* <Card /> */}
//         {/* <Card reference={ref}/> */}
//     </div>
      
//     </>
//   )
// }

// export default Foreground

import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { GiAncientSword } from "react-icons/gi";
import { div } from 'framer-motion/client';
{/* <GiAncientSword size={65}/> */}
const Foreground = () => {
  return (
    <>
    <div className='absolute'>
      <div className='HEADER absolute flex justify-between z-50 text-white w-full p-3 px-10'>
        <div className='flex'>
          <img src="/anime_icon.png" className='h-16 pr-2 pt-1' alt="" />
          <div className='flex flex-col leading-none'>
          <div className='text-4xl font-extrabold'>HAIKEI</div>
          <div className='text-2xl '>Comic Artist</div>
          </div>
        </div>
        <div><IoIosSearch size={35}/></div>
      </div>

      <div className='relative top-24 flex gap-10 text-white z-50 pl-10'>
        {["HOME","CATALOG","CONTACT","REVIEW"].map((item,index)=>{
          return <a href="" key={index}>{item}</a>
        })}
      </div>

      <div className='relative top-52 pl-10'>
        {["FROM ANIME","TO HOLLYWOOD"].map((item,index)=>{
          return <div className='text-[80px] leading-none text-white' key={index}>{item}</div>
        })}
        <button className='rounded-md bg-white p-3 mt-3'>ADD A REVIEW</button>
      </div>
      </div>
    </>
  )
}

export default Foreground

