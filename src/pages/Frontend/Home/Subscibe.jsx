import { Mail } from 'lucide-react'
import React from 'react'

const Subscibe = () => {
  return (
    <section className='bg-black py-16 px-4 sm:px-6 lg:px-8 text-white'>
        <div className='max-w-lg mx-auto text-center'>
            <div className='flex justify-center text-center'>
                <Mail size={60} className='text-white'/> 
            </div>
            <h2 className='text-xl mt-2 font-bold md:text-3xl'>Your Travel Journey Starts Here</h2>
            <p className='text-md md:text-md font-semibold mt-3'>Sign up and we'll send the best deals to you</p>
            <form className=''>
                <input type="email" className='w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-white text-black mt-5 font-bold ' placeholder='Email'  />
                <button className=' w-full py-3 px-6 hover:bg-blue-800 text-white font-medium transition-all duration-300 rounded-lg mt-3 bg-blue-950'>Subscribe</button>
            </form>
        </div>
      
    </section>
  )
}

export default Subscibe
