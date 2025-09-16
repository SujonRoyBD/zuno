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
  const rowX = i * gap - ((total - 1) * gap) / 2;
  const rowY = 0;
  const circleX = radius * Math.cos(angle);
  const circleY = radius * Math.sin(angle);

  // ✅ Safe use of hooks
  const x = useTransform(scrollYProgress, [0, 1], [rowX, circleX]);
  const y = useTransform(scrollYProgress, [0, 1], [rowY, circleY]);

  return (
    <motion.div
      style={{ x, y }}
      className="absolute top-0 left-1/2 -translate-x-1/2"
    >
      <Image
        src={src}
        alt={`img-${i}`}
        width={81}
        height={80}
        className="rounded-lg object-cover"
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

  const images = Array(12).fill("/assets/gallery/gallery1.png");
  const radius = 200;
  const gap = 90;

  return (
    <div className="h-[50vh] flex justify-center items-start pt-10">
      <div ref={ref} className="relative w-[600px] h-[1200px]">
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
