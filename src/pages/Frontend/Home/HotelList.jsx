import React from 'react'

import hotel1 from "../../../assets/images/h1.jpg"
import hotel2 from "../../../assets/images/h2.jpg"
import hotel3 from "../../../assets/images/h3.jpg"
import hotel4 from "../../../assets/images/h4.jpg"
import { Heart } from 'lucide-react'

const HotelList = () => {
    const hotels = [
        {
            name: "The Grand London Resort and Spa",
            location: "Westminster, London",
            rating: 4.6,
            reviews: "2,345 Reviews",
            price: 72,
            image: hotel1,
        },
        {
            name: "Barcelona City Suites Deluxe Hotel",
            location: "Ciutat Vella, Barcelona",
            rating: 4.7,
            reviews: "1,912 Reviews",
            price: 85,
            image: hotel2,
        },
        {
            name: "Times Square Premium Stay Hotel",
            location: "Manhattan, New York",
            rating: 4.9,
            reviews: "3,420 Reviews",
            price: 95,
            image: hotel3,
        },
        {
            name: "Hilton Roma Luxury Hotel Palace",
            location: "Vaticano Prati, Rome",
            rating: 4.5,
            reviews: "2,876 Reviews",
            price: 68,
            image: hotel4,
        },
    ];
    return (
        <section className='py-12 px-6 sm:px-6 lg:px-12 max-w-6xl mx-auto'>
            <div className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl font-bold text-blue-950 '>Recommended Hotels</h2>
                <p className='text-md md:text-xl text-gray-800 font-semibold mt-2 '>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                {hotels.map((items, index) => (
                    <div key={index} className="relative overflow-hidden rounded-2xl group">
                        <img
                            src={items.image}
                            alt={items.name}
                            className="w-full h-70 object-cover object-fit rounded-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2"
                        />

                        <button className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300">
                            <Heart className="w-5 h-5 text-gray-800" />
                        </button>

                        <div className="mt-3 space-y-2">
                            <h3 className="text-lg md:text-xl font-bold text-blue-950 hover:text-black/80 transition duration-300">
                                {items.name}
                            </h3>
                            <p className="text-sm md:text-base font-semibold text-gray-500">
                                {items.location}
                            </p>
                            <div className="flex items-center gap-1  mt-1">
                                <span className="bg-blue-950 px-3 py-2 rounded-md text-white font-bold text-sm">
                                    {items.rating}
                                </span>
                                <span className="text-gray-800 mx-2 text-md font-bold md:text-lg">Exceptional</span>
                                <span className="text-black/80 text-sm font-bold ">{items.reviews}</span>
                            </div>
                            <p className='text-gray-600 text-lg md:text-xl font-bold mt-2 ml-2'>Starting from <span className='text-blue-800 text-lg md:text-xl font-bold'>US${items.price}</span> </p>
                            
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default HotelList
