import React, { useState } from 'react'
import city1 from "../../../assets/images/d1.jpg"
import city2 from "../../../assets/images/d1.jpg"
import city3 from "../../../assets/images/d1.jpg"
import city4 from "../../../assets/images/d1.jpg"
import city5 from "../../../assets/images/d1.jpg"
import city6 from "../../../assets/images/d1.jpg"
import city7 from "../../../assets/images/d1.jpg"
import city8 from "../../../assets/images/d1.jpg"
import { FaArrowLeft } from 'react-icons/fa'

const Destination = () => {


  const destinations = [
    { image: city1, name: "New York", travels: "1,500,000" },
    { image: city2, name: "Chicago", travels: "2,600,000" },
    { image: city3, name: "Los Angeles", travels: "1,200,000" },
    { image: city4, name: "San Francisco", travels: "900,000" },
    { image: city5, name: "Malta", travels: "700,000" },
    { image: city6, name: "Denmark", travels: "300,000" },
    { image: city7, name: "Finland", travels: "200,000" },
    { image: city8, name: "Manchester", travels: "600,000" },
  ];


  const [current, setCurrent] = useState(0)
  const length = destinations.length;

  const nextSlide = (() => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  })

  const prevSlides = (() => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  })

  return (
    <section className='w-full py-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto'>

      <div className='text-left '>
        <h2 className='text-blue-950 font-bold text-2xl md:text-3xl '>
          Exploring Popular Destination
        </h2>
        <p className='text-gray-800 text-sm md:text-lg font-bold  mt-4'>
          Lorem ipsum dolor sit amet consectetur.
        </p>

      </div>
      <div className='relative'>
        <button onClick={prevSlides}
        className='absolute left-4 bg-black/50 opacity-70 hover:bg-black transition text-white p-3 rounded-full '>
          <FaArrowLeft />
        </button>

      </div>

    </section>
  )
}

export default Destination
