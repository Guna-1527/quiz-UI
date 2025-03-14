"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault(); // Prevent default anchor behavior

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <div className="fixed bg-white border-b-2 z-30 border-black w-full">
      <div className="flex w-[1300px] m-auto z-20 h-[80px] justify-between items-center ">
        <div className="flex items-center">
          <h1 className="text-3xl bg-black text-white p-2 rounded-tl-2xl rounded-br-2xl font-bold ">Quizify</h1>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="#" onClick={(e) => handleScroll(e, "hero")}>Home</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "categories")}>Categories</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "about")}>About Us</Link>
          <Link href="#" onClick={(e) => handleScroll(e, "contact")}>Contact Us</Link>
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
