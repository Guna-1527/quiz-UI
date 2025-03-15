"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

interface ModelType {
  name: string;
  description: string;
  background: string;
}

const Model = ({ name, description, background }: ModelType) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      style={{ backgroundColor: background }}
      className="w-[600px] h-[210px] rounded-2xl flex flex-col justify-between p-6 border-2 border-black transition-all mb-10"
    >
      <h1 className="font-bold text-[24px]">{name}</h1>
      <p>{description}</p>
      <div><Button name="Learn more" width="120px" height="35px" backgroundColor="black" textColor="white" borderRadius="8px"/> </div>
    </motion.div>
  );
};

export default Model;
