import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The service exceeded my expectations. The team was professional, and I couldn't be happier with the results. Highly recommended to everyone!",
    name: "John Doe",
    role: "Web Developer",
    img: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing experience! Fast, reliable and super professional. Would definitely work with them again!",
    name: "Sarah Smith",
    role: "UI Designer",
    img: "https://i.pravatar.cc/100?img=2",
    rating: 5,
  },
  {
    id: 3,
    text: "Top-notch support and delivery. My project was handled with great care and expertise.",
    name: "Alex Johnson",
    role: "Project Manager",
    img: "https://i.pravatar.cc/100?img=3",
    rating: 4,
  },
  {
    id: 4,
    text: "Loved working with this team! They were on time, communicative and highly skilled.",
    name: "Michael Lee",
    role: "Software Engineer",
    img: "https://i.pravatar.cc/100?img=4",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -100 || info.offset.x > 100) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const getCardStyle = (i) => {
    const position = i - index;
    if (position < 0) return { opacity: 0, scale: 0.9, x: 0, zIndex: 0 };
    if (position === 0) return { opacity: 1, scale: 1, x: 0, zIndex: 3 }; 
    if (position === 1) return { opacity: 1, scale: 0.95, x: 40, zIndex: 2 }; // right
    if (position === 2) return { opacity: 0.9, scale: 0.9, x: -40, zIndex: 1 }; // left
    return { opacity: 0, scale: 0.9, x: 0, zIndex: 0 };
  };

  return (
    <div className="bg-blue-900 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Left Section */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What our customers are saying us?
        </h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          nesciunt fugiat praesentium dolores facilis delectus modi culpa
          aliquid deserunt ad!
        </p>
        <div>
          <p className="text-4xl font-bold">4.88</p>
          <p className="text-lg text-gray-300 mb-2">Overall Rating</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={20} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Swipe Stack */}
      <div className="relative w-full md:w-1/2 h-[360px] flex items-center justify-center">
        {testimonials.map((t, i) => {
          const style = getCardStyle(i);
          return (
            <AnimatePresence key={t.id}>
              {i >= index && i < index + 3 && (
                <motion.div
                  key={t.id}
                  className="absolute w-full bg-white text-black p-8 rounded-3xl shadow-xl cursor-grab active:cursor-grabbing"
                  drag={i === index ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, scale: 0.9, x: 0 }}
                  animate={{
                    opacity: style.opacity,
                    scale: style.scale,
                    x: style.x,
                    zIndex: style.zIndex,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg font-semibold mb-6">{t.text}</p>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-lg">{t.name}</p>
                      <p className="text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
