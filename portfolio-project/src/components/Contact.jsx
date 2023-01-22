import React from 'react'

function Contact() {
  return (
    <div  className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white' name='Contact'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>


        <div  className='flex justify-center items-center'>
            <form action="https://getform.io/f/05a1a0a4-5d5a-4f3c-8316-a1fe41699257" method='post' className='flex flex-col w-full md:w-1/2'>
        <input type="text" name="name" id="" placeholder='Enter Your Name Here' className='p-2 text-white focus:outline-none bg-transparent border-2'/>
        <input type="text" name="email" id="" placeholder='Enter Your Email Here' className='p-2 text-white my-4 focus:outline-none bg-transparent border-2'/>

        <textarea name="message" id="" rows="10"  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter Your message here'></textarea>

        <button className='text-white bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
