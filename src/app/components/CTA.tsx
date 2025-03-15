"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import HeroImg from "../../../public/image.png";

const CTA = () => {
  return (
    <motion.div
      id="about"
      className="w-[1300px] m-auto h-[300px] border-2 border-black flex gap-10 rounded-2xl mt-10 p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true }}
    >
      {/* Left Side (Text Content) */}
      <motion.div
        className="left flex flex-1 gap-6 flex-col"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.4 },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-bold text-2xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          Let’s make things happen
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
          }}
        >
          Nemo tempora adipisci et. Error earum id quam. Tenetur quidem optio tempora est qui eius
          tempore laudantium est magnam dicta. Nam provident enim rem et consequuntur qui error
          doloremque aut.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
          }}
        >
          <Button
            name="Start Practicing Now!"
            width="200px"
            height="40px"
            backgroundColor="black"
            textColor="white"
            borderRadius="16px"
          />
        </motion.div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        className="flex flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <Image src={HeroImg} alt="hero" />
      </motion.div>
    </motion.div>
  );
};

export default CTA;
