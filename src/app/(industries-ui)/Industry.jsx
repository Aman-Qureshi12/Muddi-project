import React from "react";
import { industries } from "./../Constants/Constant";
import Image from "next/image";

const Industry = () => {
  return (
    <section className="mt-10">
      <div className="xl:mx-32 grid md:grid-cols-2 gap-6 xl:gap-12 max-sm:mx-5 sm:mx-10">
        {industries?.map((industry, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-offwhite flex text-center justify-center max-galaxyFold:text-base text-lg lg:text-2xl z-10 items-center px-4">
                {industry.name}
              </h1>
            </div>
            <div className="w-full h-full">
              <Image
                width={700}
                height={700}
                src={industry.image}
                alt={industry.alt}
                className=" object-cover shadow-lg rounded-md md:w-full md:h-full "
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industry;
