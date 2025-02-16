// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [images,setImages]=useState([]); //we make this first

//   const clicked=async()=>{
//     const response= await fetch("https://picsum.photos/200/300");
//     console.log(response);
//     console.log(response.url); 
//     //by doing this we are updating the state with a state (url) ,but it expects an array and hence the unexpected behaviour
//     setImages([response.url]);//resposne is an object-->hence its wrong to do this
//     //this will create an array of repsonse.url and hence it can be ietrated over easily using map    
//   }

//   return (
//     <>
//     <div className='bg-red-400'>
//       <button onClick={clicked}>Get Images</button>
//       <div className='p-10 '>
//         {images.map((ele,i)=>{ //images array ke har element ke url kp access karne ka tareeka
//           return <img key={i} src={ele} alt="" /> //add a key to each to avoid react warnings
//         })}

//       </div>
//     </div>
//     </>
//   )
// }

// export default App


//......................................................................................

// import React, { Children } from 'react'
// import { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// const App = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [mainTask, setMainTask] = useState([]);//to store data in the form of arrays

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setMainTask([...mainTask, { title, desc }]);
//     setTitle("");
//     setDesc("");
//   }

//   const deleteHandler=(i)=>{ //WHAT WAS THE NEED TO MAKE A SHALLOW COPY, WHY COULDNT WE DIRECTLY DELETE FROM THE mainTask arr
//     let copytask=[...mainTask];
//     copytask.splice(i,1);
//     setMainTask(copytask);
//   }
//   //React relies on detecting changes in state by comparing the previous and current state.
//   //  If the state is mutated directly, React may not detect the change.

//   const notify = () => 
//     toast.warn('🦄 Wow so easy!', {
//       position: "top-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });

//   let renderTask = <h1>nothing available</h1>;

//   if(mainTask.length>0){
//   renderTask = mainTask.map((t, i) => {//key is important for react to know the diff and for re rendering
//     return  <li key={i}> 
//             <div className='flex justify-around'>
//              <h1 className='text-2xl font-bold m-2'>{t.title}</h1>
//               <h1 className='text-2xl font-bold m-2'>{t.desc}</h1>
//               <button className='bg-red-600 text-white text-2xl px-2 py-1 rounded-md ' onClick={() => deleteHandler(i)}>DELETE</button>
//             </div>
//             </li>

//   }) 
// };

//   return (
//     <>
//       <div>
//         <div className='NAVBAR bg-black flex text-white text-4xl p-2 justify-center'>
//           <h1 >TO DO</h1>
//         </div>

//         <form className='flex justify-around py-3'>
//           <div>
//             <label htmlFor="">TASK: </label>
//             <input placeholder=' Enter task here' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className='border border-black' />
//           </div>

//           <div>
//             <label htmlFor="">DESCRIPTION: </label>
//             <input placeholder=' Enter description here' type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className='border border-black w-[400px]' />
//           </div>

//           <button className='bg-green-400 px-2 py-1 rounded-md' onClick={submitHandler}>Add task</button>
//         </form>

//         <hr />

//         <div>{renderTask}</div>

//         <div>
//         <button onClick={notify}>Notify!</button>
//         <ToastContainer />
//       </div>
//       </div>
//     </>
//   )
// }

// export default App


/////////////..todo app.../////////////////

// import React from 'react'

// import Foreground from './components/Foreground'

// const App = () => {
//   return (
//     <>
//     <div className='absolute bg-zinc-800 w-full h-screen text-gray-500 '>
//       <Background/>
//       <Foreground/>
//     </div>
    
//     </>
//   )
// }

// export default App

//.............................................................
import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Hero from './components/Hero'
import Signin from './components/Signin'
const App = () => {
  return (
    <>    
        <Background/>
        <Hero/>
        <Signin/>
    </>
  )
}

export default App

