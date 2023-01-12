import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Home() {
  return (
    <div>
        <div>
            <div>
                <h2>I am a Full Stack Developer</h2>
                <p> I have 3 years of experience building and design of software.
                    Currently , I love to work on web application using technologies like
                    React, Tailwind , MongoDB , Node Js 
                </p>
                <div><button>
                    Portfolio <span><AiOutlineArrowRight/></span> </button></div>
            </div>
        </div>
    </div>
  )
}

export default Home