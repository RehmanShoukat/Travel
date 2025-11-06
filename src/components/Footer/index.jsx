import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white text-gray-700 '>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-13'>
        <div>
          <h3 className='text-md md:text-xl font-bold mb-3 text-black'>Company</h3>
          <ul className='space-y-3 cursor-pointer font-bold'>
            <li ><a href="#" className='hover:text-blue-950'>About Us</a></li>
            <li ><a href="#" className='hover:text-blue-950'>Careers</a></li>
            <li ><a href="#" className='hover:text-blue-950'>Blogs</a></li>
            <li ><a href="#" className='hover:text-blue-950'>Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-md md:text-xl font-bold mb-3 text-black'>Support</h3>
          <ul className='space-y-3 cursor-pointer font-bold'>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Legal Notice</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-md md:text-xl font-bold mb-3 text-black'>Other Services</h3>
          <ul className='space-y-3 cursor-pointer font-bold'>
            <li><a href="#">Car hire</a></li>
            <li><a href="#">Activity Finder</a></li>
            <li><a href="#">Tour List</a></li>
            <li><a href="#">Flight Finder</a></li>
            <li><a href="#">Travel Agents</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-md md:text-xl font-bold mb-3 text-black'>Contact Us</h3>
          <div className='mt-7 flex flex-col justify-center'>
            <p className='text-sm md:text-md text-gray-700'>Our Mobile Number</p>
            <h3 className='text-blue-950 font-bold text-md md:text-lg '>+012 345 6788</h3>
          </div>
          <div className='mt-7 flex flex-col justify-center'>
            <p className='text-sm md:text-md text-gray-700'>Our Email</p>
            <h3 className='text-blue-950 font-bold text-md md:text-lg '>example@gmail.com</h3>
          </div>

        </div>

      </div>
      <div className='border-t border-gray-400 text-center mt-12 pt-8 pb-8 flex items-center justify-between px-6 sm:px-8 md:px-16 lg:px-27'>
        <p className='text-gray-700 font-medium [word-spacing:2px] '>&copy; {new Date().getFullYear()} AllRight Reserved By TRIPI</p>
        <p className='flex items-center justify-center gap-4 text-gray-700 font-bold'>Social :
          <a href="#" className='bg-blue-950 w-8 h-8 flex items-center justify-center text-white hover:bg-white border-1 hover:border-blue-950 hover:text-blue-950 hover:ring-1 transition duration-300 rounded-lg'><Facebook size={16} /></a>
          <a href="#" className='bg-blue-950 w-8 h-8 flex items-center justify-center text-white hover:bg-white border-1 hover:border-blue-950 hover:text-blue-950 hover:ring-1 transition duration-300 rounded-lg'><Instagram size={16} /></a>
          <a href="#" className='bg-blue-950 w-8 h-8 flex items-center justify-center text-white hover:bg-white border-1 hover:border-blue-950 hover:text-blue-950 hover:ring-1 transition duration-300 rounded-lg'><Twitter size={16} /></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
