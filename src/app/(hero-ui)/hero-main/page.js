import Image from "next/image";
import React from "react";

export default function HeroMain() {
  return (
    <div className="relative w-full h-96 lg:h-[100vh] overflow-hidden">
      <Image
        height={800}
        width={800}
        src="/hero-bg.jpeg"
        className="w-full h-full object-cover shadow-md"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white text-center">
        <h2 className="text-2xl lg:text-6xl font-bold">
        Pioneer&apos;s in Flexible solutions

        </h2>
      </div>
    </div>
  );
}
