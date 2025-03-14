"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../../public/image.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center px-10">
      {/* Left Content */}
      <div className="flex flex-1 flex-col justify-start">
        <div className="flex flex-col gap-2">
          {/* Get Started Text */}
          <motion.p
            className="font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get Started
          </motion.p>
          
          {/* Heading with Animated Span */}
          <motion.h1
            className="text-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We help you to grow your business to the{" "}
            <span className="relative inline-block overflow-hidden">
              {/* Background Animation (Expanding from left to right) */}
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
                className="absolute left-0 top-0 h-full bg-[#B9FF67]"
              />
              {/* Text Animation (Move from bottom to top) */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                className="relative px-2 inline-block"
              >
                next level
              </motion.span>
            </span>
          </motion.h1>
          
          {/* Description Text */}
          <motion.p
            className="text-[20px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.
          </motion.p>
          
          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          >
            <Button
              name="Get Started"
              width="130px"
              height="60px"
              backgroundColor="white"
              textColor="black"
              borderRadius="16px"
            />
          </motion.div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex flex-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <Image src={HeroImg} alt="hero" />
      </motion.div>
    </div>
  );
};

export default Hero;