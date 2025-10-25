import React, { useState, useEffect } from "react";
import { TbAirBalloon } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [bg, setBg] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setBg(true);
      else setBg(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        bg ? "bg-blue-950 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-[12vh]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-rose-500 flex items-center justify-center h-12 w-12 rounded-full text-2xl text-white">
            <TbAirBalloon />
          </div>
          <h1 className="text-white font-bold text-2xl tracking-wide">TRIPI</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
          {["Home", "About", "Destination", "Blog", "Dashboard", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="relative group cursor-pointer"
              >
                <span className="hover:text-rose-400 transition-colors duration-200">
                  {item}
                </span>
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Book Now Button */}
        <button className="hidden md:block bg-white text-black font-medium px-6 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
          Book Now
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-blue-950 text-white flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Home", "About", "Destination", "Blog", "Dashboard", "Contact"].map(
          (item) => (
            <li
              key={item}
              className="list-none relative group cursor-pointer"
              onClick={() => setNav(false)}
            >
              <span className="hover:text-rose-400 transition-colors duration-200">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          )
        )}
        <button className="bg-white text-black font-medium px-6 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
          Book Now
        </button>

        {/* Close icon for extra clarity */}
        <div
          className="absolute top-6 right-6 text-3xl text-white cursor-pointer"
          onClick={() => setNav(false)}
        >
          <FaTimes />
        </div>
      </div>
    </nav>
  );
};

export default Header;
