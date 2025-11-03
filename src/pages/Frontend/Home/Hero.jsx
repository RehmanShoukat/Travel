import React, { useState } from "react";
import bgvideo from "../../../assets/images/hero1.mp4";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <section className="relative  w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-36 sm:pt-40 md:pt-0 pb-25 md:pb-0 px-4 sm:px-6">
      <video
        src={bgvideo}
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-[2] flex flex-col items-center text-center px-4 gap-4 -mt-12 " >
        <h1 className="text-4xl md:text-5xl text-white font-bold tracking-widest" >
          LET'S ENJOY THE NATURE
        </h1>
        <p className="text-lg md:text-xl text-white">
          Get the best prices on{" "}
          <span className="font-semibold">2,000,000+</span> properties worldwide
        </p>
      </div>

      <div className="relative z-[2] w-full max-w-6xl mt-8 bg-white/90 backdrop-blur-md p-4 md:p-6 shadow-lg 
                      rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 mx-6 sm:mx-6 md:mx-auto">

        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-lg mb-1">Location</label>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-bold flex items-center gap-2 text-lg mb-1">
            <FaCalendarAlt className="text-blue-400" /> Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select start date"
            className="w-full p-3 text-left rounded-xl border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            calendarClassName="rounded-2xl shadow-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white 
                       [&_.react-datepicker__header]:bg-white/10 
                       [&_.react-datepicker__header]:border-b 
                       [&_.react-datepicker__header]:border-white/20 
                       [&_.react-datepicker__day]:text-white 
                       [&_.react-datepicker__day:hover]:bg-blue-500/40 
                       [&_.react-datepicker__day--selected]:bg-rose-500 
                       [&_.react-datepicker__day--keyboard-selected]:bg-rose-400/70 
                       [&_.react-datepicker__current-month]:text-white 
                       [&_.react-datepicker__triangle]:hidden"
            popperPlacement="bottom"
            popperClassName="!left-1/2 !transform !-translate-x-1/2"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-bold flex items-center gap-2 text-lg mb-1">
            <FaCalendarAlt className="text-blue-400" /> End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Select end date"
            className="w-full p-3 text-left rounded-xl border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            calendarClassName="rounded-2xl shadow-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white 
                       [&_.react-datepicker__header]:bg-white/10 
                       [&_.react-datepicker__header]:border-b 
                       [&_.react-datepicker__header]:border-white/20 
                       [&_.react-datepicker__day]:text-white 
                       [&_.react-datepicker__day:hover]:bg-blue-500/40 
                       [&_.react-datepicker__day--selected]:bg-rose-500 
                       [&_.react-datepicker__day--keyboard-selected]:bg-rose-400/70 
                       [&_.react-datepicker__current-month]:text-white 
                       [&_.react-datepicker__triangle]:hidden"
            popperPlacement="bottom"
            popperClassName="!left-1/2 !transform !-translate-x-1/2"
          />
        </div>
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
        <div className="absolute left-1/2 -bottom-7 transform -translate-x-1/2">
          <button className="bg-rose-600 duration-300 hover:bg-rose-700 transition-all hover:scale-110 py-1 px-17 md:py-1.5 md:px-28 border focus:outline-none focus:outline-rose-500 focus:ring-2 hover:ring-rose-500 border-rose-500 rounded text-xl font-bold text-white">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
