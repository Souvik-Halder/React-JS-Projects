import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { Link } from 'react-scroll'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Home() {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white my-2'>I am a Full Stack Developer</h2>
                <p className='my-2 mx-3 text-gray-500 py-4 max-w-md'> I have 3 years of experience building and design of software.
                    Currently ,tai I love to work on web application using technologies like
                    React, Tailwind , MongoDB , Node Js 
                </p>
                <div className=''><Link to='Portfolio' smooth duration={500} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-fit  px-6 py-4 mt-4 flex items-center rounded-md cursor-pointer my-3'>
                    Portfolio <span className='px-3 group-hover:rotate-90 duration-300'><AiOutlineArrowRight className='ml-1 ' /></span> </Link>
                    </div>
            </div>
            <div>
              <img src={HeroImage} alt="my Profile" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home