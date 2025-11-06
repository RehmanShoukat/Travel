import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-10">
      {/* ====== Top Grid Section ====== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Company */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Company</h3>
          <ul className="space-y-3 text-base md:text-lg font-semibold text-gray-800/90">
            <li><a href="#" className="hover:text-blue-950 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Support</h3>
          <ul className="space-y-3 text-base md:text-lg font-semibold text-gray-800/90">
            <li><a href="#" className="hover:text-blue-950 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Legal Notice</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Sitemap</a></li>
          </ul>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Other Services</h3>
          <ul className="space-y-3 text-base md:text-lg font-semibold text-gray-800/90">
            <li><a href="#" className="hover:text-blue-950 transition-colors">Car Hire</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Activity Finder</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Tour List</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Flight Finder</a></li>
            <li><a href="#" className="hover:text-blue-950 transition-colors">Travel Agents</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Contact Us</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm md:text-base text-gray-600">Our Mobile Number</p>
              <h3 className="text-blue-950 font-bold text-base md:text-lg mt-1">+012 345 6788</h3>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-600">Our Email</p>
              <h3 className="text-blue-950 font-bold text-base md:text-lg mt-1">example@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Bottom Section ====== */}
      <div className="border-t border-gray-300 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 px-6 sm:px-10 lg:px-16 text-center sm:text-left">
          
          <p className="text-gray-700 font-medium text-sm md:text-base">
            &copy; {new Date().getFullYear()} All Rights Reserved by <span className="font-bold text-blue-950">TRIPI</span>
          </p>

          <div className="flex items-center gap-4 text-gray-700 font-bold">
            <span>Social:</span>
            <a
              href="#"
              className="bg-blue-950 w-9 h-9 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 border-2 border-transparent hover:border-blue-950 transition-all duration-300 rounded-lg"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-950 w-9 h-9 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 border-2 border-transparent hover:border-blue-950 transition-all duration-300 rounded-lg"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-950 w-9 h-9 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 border-2 border-transparent hover:border-blue-950 transition-all duration-300 rounded-lg"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
