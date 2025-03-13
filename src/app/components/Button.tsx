"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  name: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  width = 'auto',
  height = 'auto',
  backgroundColor = '#f3f4f6',
  textColor = '#000',
  borderRadius = '6px', // Default border radius
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className="border-2 border-gray-800 cursor-pointer"
      style={{
        width,
        height,
        backgroundColor,
        color: textColor,
        borderRadius, // Apply dynamic border radius
      }}
    >
      {name}
    </motion.button>
  );
};

export default Button;
