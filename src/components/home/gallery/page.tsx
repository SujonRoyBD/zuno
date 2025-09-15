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
    "/assets/gallery/gallery1.png",
    "/assets/gallery/gallery2 (1) (1).png",
    "/assets/gallery/gallery3.png",
    "/assets/gallery/gallery4.png",
    "/assets/gallery/gallery5.png",
  ]

  return (
    <div ref={containerRef} className="container mx-auto py-20 flex gap-10">
      <div className="w-2/4 sticky top-20 h-[400px] rounded-3xl">
        <Image
          src={images[0]}
          alt="main"
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
      </div>
      <div className="w-2/4 flex flex-row gap-10">
        {images.slice(1).map((src, index) => {
          const delay = index * 50
          const translateX = Math.min(scrollY - delay, 0) 
          const opacity = Math.min(scrollY / 200 - index * 10, 1)

          return (
            <div
              key={index}
              className="h-[250px] gap-6 relative transition-transform duration-500 "
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
                className="w-full h-[400px] object-cover rounded-3xl shadow-md"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
