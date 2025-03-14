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
          <p className="font-bold">Get Started</p>
          <h1 className="text-[60px]">
            We help you to grow your business to the{" "}
            <span className="relative inline-block overflow-hidden">
              {/* Background Animation (Expanding from left to right) */}
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }} // Fast start, slow end
                className="absolute left-0 top-0 h-full bg-[#B9FF67]"
              />
              {/* Text Animation (Move from bottom to top) */}
              <motion.span
                initial={{ y: 30, opacity: 0 }} // Start 30px below
                animate={{ y: 0, opacity: 1 }} // Move up to position
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }} // Delay until background is done
                className="relative px-2 inline-block"
              >
                next level
              </motion.span>
            </span>
          </h1>
          <p className="text-[20px]">
            Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.
          </p>
          <div>
            <Button
              name="Get Started"
              width="130px"
              height="60px"
              backgroundColor="white"
              textColor="black"
              borderRadius="16px"
            />
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex flex-1">
        <Image src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
