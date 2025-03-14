"use client";

import React from "react";
import { motion } from "framer-motion";
import Model from "./Model";
import Header from "./Header";

const categories = [
  {
    id: 1,
    name: "General Knowledge",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "#B9FF67",
  },
  {
    id: 2,
    name: "Database & Algorithm",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "white",
  },
  {
    id: 3,
    name: "Current Affair",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "white",
  },
  {
    id: 4,
    name: "Science & Technology",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "#B9FF67",
  },
];

const Service = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20">
      {/* Smoothly Appearing Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Smooth easing
        viewport={{ once: true }}
      >
        <Header name="Categories" />
      </motion.div>

      {/* Animated Grid Container */}
      <motion.div
        className="grid grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4, ease: [0.25, 1, 0.5, 1] }, // Slower stagger
          },
        }}
        viewport={{ once: true }}
      >
        {categories.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <Model name={item.name} description={item.description} background={item.background} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
