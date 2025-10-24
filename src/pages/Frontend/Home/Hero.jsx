import React from 'react'
import bgvideo from "../../../assets/images/hero1.mp4"


const Hero = () => {
    return (
        <section className='relative w-full h-[100vh] flex items-center justify-center overflow-hidden'>
            <video src={bgvideo}
                loop
                muted
                autoPlay
                playsInline
                className='absolute inset-0 w-full h-full object-cover '>
            </video>
            <div className='absolute inset-0 bg-black/50'></div>

        </section>
    )
}

export default Hero
