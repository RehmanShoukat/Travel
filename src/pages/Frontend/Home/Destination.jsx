import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import city1 from "../../../assets/images/d1.jpg";
import city2 from "../../../assets/images/d2.jpg";
import city3 from "../../../assets/images/d3.jpg";
import city4 from "../../../assets/images/d4.jpg";
import city5 from "../../../assets/images/d5.jpg";
import city6 from "../../../assets/images/d6.jpg";
import city7 from "../../../assets/images/d7.jpg";
import city8 from "../../../assets/images/d8.jpg";

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
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedDestinations = [...destinations, ...destinations, ...destinations];

  useEffect(() => {
    if (sliderRef.current && currentIndex === 0) {
      const slideWidth = sliderRef.current.offsetWidth / 2;
      sliderRef.current.scrollTo({
        left: destinations.length * slideWidth,
        behavior: "auto",
      });
      setCurrentIndex(destinations.length);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / 2;

      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });

      if (currentIndex >= destinations.length * 2) {
        setTimeout(() => {
          sliderRef.current.scrollTo({
            left: destinations.length * slideWidth,
            behavior: "auto",
          });
          setCurrentIndex(destinations.length);
        }, 500);
      } else if (currentIndex < destinations.length) {
        setTimeout(() => {
          sliderRef.current.scrollTo({
            left: destinations.length * slideWidth,
            behavior: "auto",
          });
          setCurrentIndex(destinations.length);
        }, 500);
      }
    }
  }, [currentIndex]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-left mb-12">
        <h2 className="text-[#1a1f4d] font-bold text-3xl md:text-4xl mb-2">
          Exploring Popular Destination
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-7 top-1/2 transform -translate-y-1/2 bg-black/50  hover:bg-black text-gray-300 p-3 duration-300 rounded-full z-10 shadow-lg transition-all"
          style={{ marginTop: '-40px' }}
        >
          <ChevronLeft size={28} />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-hidden w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedDestinations.map((dest, index) => (
            <div key={index} className="w-1/2 flex-shrink-0 px-3">
              <div className="overflow-hidden transition-transform duration-300">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-[380px] object-cover rounded-2xl"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#1a1f4d]">
                    {dest.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {dest.travels} Travelers
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-7 top-1/2 transform -translate-y-1/2 bg-black/50  hover:bg-black/80 text-gray-300 p-3 rounded-full z-10 shadow-lg duration-300 transition-all"
          style={{ marginTop: '-40px' }}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Destination;