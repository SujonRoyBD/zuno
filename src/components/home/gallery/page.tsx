"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top
        setScrollY(-top)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const images = [
    '/assets/gallery/gallery1.png',
    '/assets/gallery/gallery2 (1) (1).png',
    '/assets/gallery/gallery3.png',
    '/assets/gallery/gallery4.png',
    '/assets/gallery/gallery5.png',
  ]

  return (
    <div ref={containerRef} className="container mx-auto py-10 sm:py-16 md:py-20 lg:py-24 flex flex-col md:flex-row gap-6 md:gap-10 px-4 sm:px-6 md:px-10">
      <div className="w-full md:w-2/4 sticky top-20 h-[250px] sm:h-[300px] md:h-[400px] rounded-3xl">
        <Image
          src={images[0]}
          alt="main"
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-2/4 flex flex-row overflow-x-auto gap-4 md:gap-10 mt-6 md:mt-0">
        {images.slice(1).map((src, index) => {
          const delay = index * 50
          const translateX = Math.min(scrollY - delay, 0)
          const opacity = Math.min(scrollY / 200 - index * 0.1, 1)

          return (
            <div
              key={index}
              className="relative flex-shrink-0 transition-transform duration-500"
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: opacity < 0 ? 0 : opacity,
                width: '200px',
                height: '250px',
              }}
            >
              <Image
                src={src}
                alt={`img-${index}`}
                width={700}
                height={350}
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
