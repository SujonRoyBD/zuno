"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center py-4">
        <button className="bg-gray-200 px-5 py-2 rounded-full">
          Personal Growth
        </button>
      </div>
      <div className="text-center items-center mx-auto text-8xl font-bold">Feel more <br /> human every day</div>
      <div className="flex justify-center items-center py-6 mx-auto ">
        <button className="px-6 py-3 bg-[#d2f0a3] rounded-full ">
          Request Demo
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
