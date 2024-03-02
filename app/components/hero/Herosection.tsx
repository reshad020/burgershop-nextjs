"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Burger1 from "@/public/images/b1.png";
import Burger2 from "@/public/images/b2.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const Herosection = () => {
  return (
    <Carousel
      arrows={false}
      additionalTransfrom={0}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      itemClass="item"
    >
      <div className="h-[50vh] md:h-[88vh] w-[100vw] bg-blue-950  flex flex-col md:flex-row items-center justify-center clip_path">
        <Image src={Burger1} alt="burger" className="w-[250px] md:w-[40vw]" />
        <h1 className="text-2xl md:text-6xl font-semibold text-white ">
          Best Burger <br /> in town!
        </h1>
      </div>
      <div className="h-[50vh] md:h-[88vh] w-[100vw] bg-orange-950 clip_path flex flex-col md:flex-row items-center justify-center mx-auto">
        <Image src={Burger2} alt="burger" className="w-[250px] md:w-[40vw]" />
        <h1 className="text-2xl md:text-6xl font-semibold text-white ">
          Best Burger <br /> in town!
        </h1>
      </div>
    </Carousel>
  );
};
