import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
function Navbar() {
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Portofolio'
        },
        {
            id:4,
            link:'Experience'
        },
        {
            id:5,
            link:'Contact'
        }
    ]
    const [nav,setNav]=useState(false);
  return (
  <div className='flex justify-between items-center w-full h-20 text-white px-6 bg-black fixed'>
    <div>
        <h1 className='text-2xl font-signature ml-2'>Souvik</h1>
    </div>
    <ul className='hidden md:flex'>

    {links.map(({id,link})=>(
         <li
         key={id}
         className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
       >
        {link}
        </li>
    ))}

    </ul>

    <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden">
     {
        nav?<FaTimes size={30}/>:<FaBars size={30}/>
     }
    </div>

    {/* if the nav is true than show the icons */}
   {/* For mobile view */}
     {nav &&(  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 h-screen '>

{links.map(({id,link})=>(
   <li key={id} className='px-4 cursor-pointer capitalize py-6 hover:scale-105 duration-200'>{link}</li>
))}

   <li className='px-4 cursor-pointer capitalize py-6 hover:scale-105 duration-200'>home</li>
  
</ul>)}

  
   

  </div>
  )
}

export default Navbar