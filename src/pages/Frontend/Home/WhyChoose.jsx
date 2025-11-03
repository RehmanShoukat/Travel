import React from 'react'
import shield from "../../../assets/images/c1.svg"
import phone from "../../../assets/images/c2.svg"
import support from "../../../assets/images/c3.svg"
import AOS from "aos";
import "aos/dist/aos.css";



const WhyChoose = () => {
    const features = [
        {
            img: shield,
            title: "Best Price Guarantee",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        },
        {
            img: phone,
            title: "Easy & Quick Booking",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        },
        {
            img: support,
            title: "Customer Care 24/7",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        },
    ];

    AOS.init({
            duration: 1000, // 1.5 seconds
            easing: "ease-in-out", // smoother curve
            once: true, // sirf ek baar animation chalay
        });

    return (
        <section className='py-18 w-full'>
            <div className='max-w-6xl mx-auto px-6 sm:px-6 md:px-8 xl:px-12 '>
                <h2 className='text-blue-950 font-bold text-2xl md:text-3xl'>Why Choose Us</h2>
                <p className='text-md md:text-lg mt-2 font-semibold text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 px-8'>
                {features.map((why, index) => {
                    return (
                        <div key={index} className='text-center' data-aos="fade-up" data-aos-delay={index * 300}>
                            <img src={why.img} alt={why.title} className='w-16 h-16 mx-auto mb-6 ' />
                            <h2 className='text-lg md:text-xl font-semibold text-black/90 mb-4 '>{why.title}</h2>
                            <p className='text-sm md:text-md text-gray-800 leading-relaxed'>{why.desc}</p>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default WhyChoose
