import Image from "next/image";
import React from "react";

const Aboutus = () => {
  return (
    <div className="grid grid-cols-2 mt-52 mx-32 mb-20">
      <div>
        <h1 className="text-3xl font-semibold">About us</h1>
        <p className="mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero velit
          dignissimos distinctio nobis, sed minus enim impedit quo. Quibusdam
          similique non repellat atque, facere accusamus minus dolorum dolore
          consequatur perferendis?
        </p>
      </div>
      <div>
        <Image
          height={800}
          width={800}
          src="/hero-bg.jpeg"
          className=" object-cover shadow-lg rounded-md"
          alt="Hero Background"
        />
      </div>
    </div>
  );
};

export default Aboutus;
