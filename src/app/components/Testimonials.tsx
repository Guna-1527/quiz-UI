"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "./Header";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { id: 1, text: "This product changed my life!", author: "Alice Johnson" },
  { id: 2, text: "Absolutely amazing service!", author: "Michael Smith" },
  { id: 3, text: "I would highly recommend it to anyone!", author: "Emma Davis" },
  { id: 4, text: "Fantastic experience overall!", author: "James Brown" },
  { id: 5, text: "The best investment I've ever made!", author: "Sophia Wilson" },
];

const InfiniteTestimonials = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-100%"],
        transition: { repeat: Infinity, duration: 30, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div id="contact" className="mt-10 mb-10 px-6 lg:px-16">
      <Header name="What People Say" />
      <div className="relative w-full overflow-hidden mt-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl py-14 text-white shadow-xl">
        <div className="absolute top-[-20px] left-[-10px] text-white text-6xl opacity-20">
          <FaQuoteLeft />
        </div>
        <div className="flex justify-center items-center w-full">
          <motion.div
            className="flex space-x-8"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[340px] p-8 bg-white text-gray-800 shadow-lg rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-xl font-semibold">"{item.text}"</p>
                <p className="text-sm text-gray-500 mt-4">- {item.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteTestimonials;
