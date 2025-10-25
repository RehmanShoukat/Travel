import React from 'react'
import bgvideo from "../../../assets/images/hero1.mp4"
import { FaCalendarAlt, FaUserFriends } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative w-full h-[99vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        src={bgvideo}
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-[2] flex flex-col items-center text-center px-4 gap-4 -mt-12">
        <h1 className="text-4xl md:text-5xl text-white font-bold tracking-widest">
          LET'S ENJOY THE NATURE
        </h1>
        <p className="text-lg md:text-xl text-white">
          Get the best prices on <span className="font-semibold">2,000,000+</span> properties worldwide
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative z-[2] w-full max-w-6xl mt-8 bg-white/90 backdrop-blur-md p-4 md:p-6 shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Location */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-lg mb-1">Location</label>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-bold flex items-center gap-2 text-lg mb-1">
            <FaCalendarAlt className="text-blue-400" /> Start Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-bold flex items-center gap-2 text-lg mb-1">
            <FaCalendarAlt className="text-blue-400" /> End Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-lg flex items-center gap-2 mb-1">
            <FaUserFriends className="text-blue-500" /> Guest
          </label>
          <input
            type="text"
            placeholder="1 Guest 1 Room"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='absolute left-1/2 -bottom-7 transform -translate-x-1/2'>
          <button className='bg-rose-600 duration-300 hover:bg-rose-700 transition-all hover:scale-110 py-1.5 px-28 border focus:outline-none focus:outline-rose-500 focus:ring-2  hover:ring-rose-500 border-rose-500 rounded text-xl font-bold text-white'>
            Search
          </button>
        </div>
      </div>

    </section>
  )
}

export default Hero
