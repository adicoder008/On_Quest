// import React from 'react'
// import { FiPlus } from "react-icons/fi";
// import Card from './Card';
// import { useSpring } from 'framer-motion';

// import { div } from "framer-motion/client";

// const Background = () => {

//   // const [cards,setcards]=useState([]);     NO

//   // const newtodo=()=>{  NO
//   //   setcards([...cards,<Card key={cards.length}/>]);//passing a new key NO
//   // }   NO

//   return (
//     <>
//     <div className='absolute flex w-full justify-between z-10'>
//       <div className='text-white text-2xl'>My ToDo list</div>
//         <button className='text-red-600 px-3' ><FiPlus size={48} /></button>
//       </div>
//     <div className='absolute bg-zinc-800 w-full h-screen flex justify-center items-center'>
//       <div className='text-gray-500 text-[200px] '>DOCS</div>
//     </div>
//     </>
//   )
// }

// export default Background



//................
import React from 'react'
import Foreground from './Foreground'

const Background = () => {
  return (
    <>
      <div className="relative bg-[url('/manga.jpg')] bg-cover bg-center h-screen w-full">
        <Foreground/>
        </div>
      
    </>
  )
}

export default Background

