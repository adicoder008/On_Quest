import React, { useEffect, useState } from 'react'
import { FaFileAlt } from "react-icons/fa"
import { motion } from "motion/react"
import { MdCancel } from "react-icons/md";


const colorsArr = ["green", "yellow", "red", "blue", "orange", "purple"];

const Card = ({reference,title,desc}) => {
  const [color,setColor]=useState(colorsArr[Math.floor(Math.random()*colorsArr.length)]);
  const [no,setno]=useState(0);
  
  // deleteHandler=()=>{

  // }

  const data = new Date().toLocaleString();//lets consider this date as deadline for now

  return (
    <>
      <motion.div drag dragConstraints={reference} className='absolute top-[5px] left-[580px] h-[220px] w-[180px] bg-zinc-900 rounded-[50px] overflow-hidden'>
        
        <div className='flex justify-between pt-4'>
          <div className='pl-5 text-white'> <FaFileAlt size={20}/></div>
        <button className='pr-5'><MdCancel size={20} /></button>
          </div>
          <div>{title}</div>
          <div>{desc}</div>

        <div className='TAG absolute top-40 h-20 w-full flex justify-center ' style={{ backgroundColor: `${color}` }} >
          <div className='text-white px-3'>Deadline: </div>
          <div className='text-white '>{data}</div>
          
        </div>
      </motion.div>
    </>
  )
}

export default Card
