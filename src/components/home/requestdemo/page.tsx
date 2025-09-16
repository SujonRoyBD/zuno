"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function RequestDem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const images = Array(12).fill("/assets/gallery/gallery1.png");

  const radius = 200; 
  const gap = 90; 

  return (
    <div className="h-[50vh] flex justify-center items-start pt-10">
      <div ref={ref} className="relative w-[600px] h-[1200px]">
        {images.map((src, i) => {
          const angle = (i / images.length) * 2 * Math.PI;
          const rowX = i * gap - ((images.length - 1) * gap) / 2;
          const rowY = 0;
          const circleX = radius * Math.cos(angle);
          const circleY = radius * Math.sin(angle);
          const x = useTransform(scrollYProgress, [0, 1], [rowX, circleX]);
          const y = useTransform(scrollYProgress, [0, 1], [rowY, circleY]);

          return (
            <motion.div
              key={i}
              style={{ x, y }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <Image
                src={src}
                alt={`img-${i}`}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
