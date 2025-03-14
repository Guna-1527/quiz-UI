"use client";

import Link from "next/link";
import logo from "../../../public/logo.png"
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed bg-white border-b-2 z-30 border-black w-full">
      <div className="flex w-[1300px] m-auto z-20 h-[80px] justify-between items-center ">
        <div className="flex items-center">
          <h1 className="text-3xl bg-black text-white p-2 rounded-tl-2xl rounded-br-2xl font-bold ">Quizify</h1>
        </div>
        <div className="flex gap-6 items-center">
          <Link href={""}>Home</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Categories</Link>
          <Link href={""}>Leaderboard</Link>
          <Link href={""}>Contact Us</Link>
          <Button
            name="Sign up"
            width="80px"
            height="40px"
            backgroundColor="white"
            textColor="black"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
