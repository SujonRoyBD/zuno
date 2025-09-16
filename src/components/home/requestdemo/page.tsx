"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ---- Props Type ----
type MotionImageProps = {
  src: string;
  i: number;
  total: number;
  radius: number;
  gap: number;
  scrollYProgress: MotionValue<number>;
};

// ---- Child Component ----
function MotionImage({
  src,
  i,
  scrollYProgress,
  total,
  radius,
  gap,
}: MotionImageProps) {
  const angle = (i / total) * 2 * Math.PI;

  // Row layout (top এ থাকবে)
  const rowX = i * gap - ((total - 1) * gap) / 2;
  const rowY = -250;

  // Circle layout (center এ)
  const circleX = radius * Math.cos(angle);
  const circleY = radius * Math.sin(angle);

  const x = useTransform(scrollYProgress, [0, 1], [rowX, circleX]);
  const y = useTransform(scrollYProgress, [0, 1], [rowY, circleY]);

  return (
    <motion.div
      style={{ x, y }}
      className="absolute left-1/2 -translate-x-1/2 mt-[200px]"
    >
      <Image
        src={src}
        alt={`img-${i}`}
        width={91}
        height={90}
        className="rounded-lg object-cover border shadow-md"
      />
    </motion.div>
  );
}

// ---- Main Component ----
export default function RequestDem() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"], 
  });

  // ১২টা আলাদা ইমেজ
  const images = [
    "/assets/gallery/gallery1.png",
    "/assets/gallery/gallery2 (1) (1).png",
    "/assets/gallery/gallery3.png",
    "/assets/gallery/gallery4.png",
    "/assets/gallery/gallery5.png",
    "/assets/gallery/gallery2 (1).png",
    "/assets/gallery2/gallery4.png",
    "/assets/automate/automate3.png",
    "/assets/gallery/gallery4.png",
    "/assets/automate/automate5.png",
  ];

  const radius = 200;
  const gap = 110;

  return (
    <div className="h-[100vh] flex justify-center items-start pt-20">
      <div ref={ref} className="relative w-[600px] h-[600px] border">
        {images.map((src, i) => (
          <MotionImage
            key={i}
            src={src}
            i={i}
            total={images.length}
            scrollYProgress={scrollYProgress}
            radius={radius}
            gap={gap}
          />
        ))}
      </div>
    </div>
  );
}
