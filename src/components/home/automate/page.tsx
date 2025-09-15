"use client"
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
const breakpoints = {
  320: { 
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: { 
    slidesPerView: 1,
    spaceBetween: 15,
  },
  1024: { 
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1280: { 
    slidesPerView: 3,
    spaceBetween: 25,
  },
};

const Automate = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-5 ">
        <div className="w-[355px] md:w-[350px] lg:w-[550px]">
          <Image className="h-[475px] rounded-3xl"
            src="/assets/automate/automate1.png"
            width={600}
            height={800}
            alt="redy"
          />
        </div>

        <div className="w-[355px] md:w-[350px] lg:w-[550px]">
          <div className="bg-[#edf0f2] lg:px-16 py-8 md:w-[350px] w-[560px] lg:w-[550px]">
            <button className="bg-[#1313130f] px-5 py-2 rounded-full">
              Ready to automate?
            </button> 
            <p className="text-4xl font-bold">
              Stay on top of your <br /> recurring payments <br /> with ease
            </p>
          </div>

          <div className="py-5">
            <Swiper
              breakpoints={breakpoints}
              autoplay={{
                delay:1000, 
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper "
            >
              <SwiperSlide >
                <Image
                  className="w-full h-[230px] object-cover rounded-3xl"
                  src="/assets/automate/automate2.png"
                  alt="q"
                  width={700}
                  height={200}
                />
              </SwiperSlide>
              <SwiperSlide >
                <Image
                  className="w-full h-[230px] object-cover rounded-3xl"
                  src="/assets/automate/automate3.png"
                  alt="qwww"
                  width={700}
                  height={200}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="w-[400px]  h-[230px] object-cover rounded-3xl"
                  src="/assets/automate/automate4.png"
                  alt="qeww"
                  width={300}
                  height={200}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="w-full h-[230px] object-cover rounded-3xl"
                  src="/assets/automate/automate5.png"
                  alt="qwe"
                  width={300}
                  height={200}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate;
