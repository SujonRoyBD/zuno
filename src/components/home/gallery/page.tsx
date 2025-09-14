"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top
        setScrollY(-top)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const images = [
    "/assets/automate/images (2).jpg",
    "/assets/automate/images (2).jpg",
    "/assets/automate/images (2).jpg",
    "/assets/automate/images (2).jpg",
    "/assets/automate/images (2).jpg",
  ]

  return (
    <div ref={containerRef} className="container mx-auto py-20 flex gap-10">
      {/* Left Sticky Image */}
      <div className="w-2/4 sticky top-20 h-[400px]">
        <Image
          src={images[0]}
          alt="main"
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Images */}
      <div className="w-2/4 flex flex-row gap-10">
        {images.slice(1).map((src, index) => {
          const delay = index * 50
          const translateX = Math.min(scrollY - delay, 0) // slide from right to left
          const opacity = Math.min(scrollY / 200 - index * 10, 1) // fade-in effect

          return (
            <div
              key={index}
              className="h-[250px] relative transition-transform duration-500 "
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: opacity < 0 ? 5 : opacity,
              }}
            >
              <Image
                src={src}
                alt={`img-${index}`}
                width={700}
                height={350}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
