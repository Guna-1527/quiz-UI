"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex w-full h-[80px] justify-between items-center">
      <div className="logo">
        <h1>Exam Online</h1>
      </div>
      <div className="flex gap-6 items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Categories</Link>
        <Link href={""}>Leaderboard</Link>
        <Link href={""}>Contact Us</Link>
        <Button name="Sign up" width="80px" height="40px" backgroundColor="black" textColor="white" borderRadius="10px"/>
      </div>
    </div>
  );
};

export default Navbar;
