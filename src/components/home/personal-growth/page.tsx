"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PersonalGrowth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="flex gap-5 py-3 transition-all"
        animate={isInView ? { opacity: 0.2 } : { opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery1.png"
            alt="q"
            width={700}
            height={200}
          />
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery2.png"
            alt="q"
            width={700}
            height={200}
          />
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery3.png"
            alt="q"
            width={700}
            height={200}
          />
        </div>
        <div className="relative">
          {!isInView && (
            <Image
              className="w-full h-[150px] object-cover rounded-3xl py-3"
              src="/assets/gallery2/gallery4.png"
              alt="q"
              width={700}
              height={200}
            />
          )}
          <motion.div
            initial={{ width: "100%", height: "450px" }}
            animate={
              isInView
                ? { width: "100vw", height: "100vh" } 
                : { width: "100%", height: "450px" }
            }
            transition={{ duration: 1 }}
            className={`overflow-hidden rounded-3xl relative ${
              isInView ? "fixed top-0 left-0 z-50" : ""
            }`}
          >
            <Image
              className="w-full h-full object-cover"
              src="/assets/gallery2/gallery3.png"
              alt="q"
              width={1920}
              height={1080}
            />
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-xl font-extrabold bg-black/60 px-8 text-center py-4 rounded-2xl shadow-lg ">
                  Personal Growth
                </h2>
                <h2 className="text-white text-6xl text-center font-extrabold bg-black/60 px-8 py-4 rounded-2xl shadow-lg opacity-1">
                 AI that understands <br/> your emotions
                </h2>
                </div>
              </motion.div>
            )}
          </motion.div>
          {!isInView && (
            <Image
              className="w-full h-[150px] object-cover rounded-3xl py-3"
              src="/assets/gallery2/gallery8.png"
              alt="q"
              width={700}
              height={200}
            />
          )}
        </div>
        <div>
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery6.png"
            alt="q"
            width={700}
            height={200}
          />
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery7.png"
            alt="q"
            width={700}
            height={200}
          />
          <Image
            className="w-full h-[250px] object-cover rounded-3xl py-3"
            src="/assets/gallery2/gallery1.png"
            alt="q"
            width={700}
            height={200}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalGrowth;
