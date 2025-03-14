"use client";

import React, { useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Header from "./Header";

const testimonials = [
  { id: 1, text: "This product changed my life!", author: "Alice Johnson" },
  { id: 2, text: "Absolutely amazing service!", author: "Michael Smith" },
  {
    id: 3,
    text: "I would highly recommend it to anyone!",
    author: "Emma Davis",
  },
  { id: 4, text: "Fantastic experience overall!", author: "James Brown" },
  {
    id: 5,
    text: "The best investment I've ever made!",
    author: "Sophia Wilson",
  },
];

const InfiniteTestimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const xTransform = useTransform(x, (value) => `${value}px`);

  // Start infinite scrolling
  const startScrolling = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });
  };

  // Stop scrolling on hover
  const stopScrolling = () => {
    controls.stop();
  };

  return (
    <div className="mt-10">
      <Header name="Testimonials" />
      <div className="relative w-full overflow-hidden mt-10 bg-black rounded-2xl py-10">
        <div className="flex justify-center items-center w-full">
          <motion.div
            className="flex space-x-6"
            animate={controls}
            style={{ x: xTransform }}
            onMouseEnter={() => {
              setIsHovered(true);
              stopScrolling();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              startScrolling();
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[320px] p-6 bg-white shadow-lg rounded-xl cursor-pointer"
              >
                <p className="text-lg font-medium">"{item.text}"</p>
                <p className="text-sm text-gray-500 mt-2">- {item.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteTestimonials;
