import React from 'react'
import australia from "../../../assets/images/n1.jpg"
import Denmark from "../../../assets/images/n2.jpg"
import Italy from "../../../assets/images/n3.jpg"
import newzealand from "../../../assets/images/n4.jpg"



const TopPlaces = () => {
    const places = [
        {
            img: australia,
            title: "Top 10 place to visit in Australia",
            date: "15 November 2024",
        },
        {
            img: Denmark,
            title: "Top 10 place to visit in Denmark",
            date: "25 November 2024",
        },
        {
            img: Italy,
            title: "Top 10 place to visit in Italy",
            date: "22 November 2024",
        },
        {
            img: newzealand,
            title: "Top 10 place to visit in New Zealand",
            date: "5 November 2024",
        },
    ];
    return (
        <section className='py-16 bg-white w-full'>
            <div className='max-w-6xl mx-auto px-6 sm:px-8 lg:px-12'>
                <h2 className='text-blue-950 font-bold text-2xl md:text-3xl'>Exciting Travel News for You</h2>
                <p className='text-md md:text-lg mt-3 text-gray-600 font-semibold '>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-17 px-8'>
                    {places.map((place , index)=>{
                        return(
                            <div key={index} className=''>
                                <img src={place.img} alt={place.title} className='w-full h-85 object-cover transition-all duration-400 hover:-translate-y-3 rounded-lg' />
                                <h2 className='text-lg md:text-xl font-bold text-gray-800 mt-6'>{place.title}</h2>
                                <p className='text-md md:text-lg text-gray-600 font-bold mt-2'>{place.date}</p>
                            </div>

                        )
                    }) }
                </div>

            </div>

        </section>
    )
}

export default TopPlaces
