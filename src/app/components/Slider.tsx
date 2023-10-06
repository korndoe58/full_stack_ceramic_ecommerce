"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Crafting ceramic wonders, one artful touch at a time.",
    image: "/slide1.JPG",
  },
  {
    id: 2,
    title: "Elevating clay to a canvas of fine craftsmanship.",
    image: "/slide2.JPG",
  },
  {
    id: 3,
    title: "Where passion meets clay, and artistry shapes every piece.",
    image: "/slide3.JPEG",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] lg:flex-row bg-[#393646]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-[#F4EEE0] font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-[#6D5D6E] text-[#F4EEE0] py-4 px-8 rounded ">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, "
        />
      </div>
    </div>
  );
};

export default Slider;