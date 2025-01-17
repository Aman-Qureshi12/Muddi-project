import Image from "next/image";
import React from "react";

const MissionVision = () => {
  return (
    <>
      <div className="bg-offwhite">
        <div className="grid lg:grid-cols-2 mt-16 gap-10 mx-5 md:mx-20 xl:mx-32  ">
          <div className="max-lg:order-2 ">
            <Image
              height={800}
              width={800}
              src="/hero-bg.jpeg"
              className=" object-cover shadow-lg rounded-md w-full h-full "
              alt="Hero Background"
            />
          </div>
          <div className="flex flex-col justify-center lg:max-xl:my-3">
            <h1 className="text-3xl font-semibold text-newgold">Our Mission</h1>
            <p className="max-galaxyFold:text-xs max-sm:text-sm mt-6">
              Our mission is to deliver holistic fluid solutions, encompassing
              hose assembly, flexible solutions, and advanced hydraulic systems.
              Committed to precision, innovation, and client satisfaction, we
              strive to exceed expectations by providing comprehensive services
              and superior products. Our dedication to quality extends to every
              facet of fluid dynamics, ensuring reliability and efficiency
              across diverse applications.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-16 gap-10 mx-5 md:mx-20 xl:mx-32 pb-20 ">
          <div className="flex flex-col justify-center lg:max-xl:my-3">
            <h1 className="text-3xl font-semibold text-newgold"> Our Vision</h1>
            <p className="max-galaxyFold:text-xs max-sm:text-sm mt-6">
              At Crown Engineering Works, our vision is to stand as a
              trailblazer in comprehensive Flexible solutions. We aim to
              redefine industry norms by setting new standards in hose assembly,
              flexible solutions, and hydraulic systems. Through cutting-edge
              products and unparalleled services, we aspire to make a lasting
              impact on global industries, fostering sustainability, and
              engineering excellence for generations to come.
            </p>
          </div>
          <div className="w-full h-full ">
            <Image
              height={800}
              width={800}
              src="/hero-bg.jpeg"
              className=" object-cover shadow-lg rounded-md w-full h-full "
              alt="Hero Background"
            />
          </div>
        </div>
      </div>
      <Image
        height={800}
        width={800}
        src="/Waves.png"
        className="w-full rounded-md"
        alt="Hero Background"
      />
    </>
  );
};

export default MissionVision;
