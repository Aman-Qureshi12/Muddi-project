import React from "react";
import { services } from "../Constants/Constant";
import Image from "next/image";

const Service = () => {
  return (
    <section className="mt-10">
      <div className="xl:mx-32 grid md:grid-cols-2 gap-6 xl:gap-12 max-sm:mx-5 sm:mx-10">
        {services?.map((service, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 px-4 mt-10">
              <h1 className="text-offwhite  max-galaxyFold:text-base relative text-lg lg:text-2xl z-10 items-center px-4">
                {service.name}
              </h1>
              <p className="text-offwhite mt-6 relative  max-galaxyFold:text-base text-lg  z-10 items-center px-4">
                {service.detail}
              </p>
            </div>
            <div className="w-full h-full">
              <Image
                width={700}
                height={700}
                src={service.image}
                alt={service.alt}
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

export default Service;
