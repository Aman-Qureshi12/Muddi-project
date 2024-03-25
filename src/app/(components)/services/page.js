import Service from "@/app/(service-ui)/service";
import React from "react";

export default function Services() {
  return (
    <main className="mt-60">
      <div className="flex justify-center items-center flex-col xl:mx-32 max-sm:mx-5 sm:mx-10">
        <h1 className="text-center font-semibold xl:text-4xl text-3xl text-newgold">
          Quality Testing at Crown Engineering Works
        </h1>
        <p className="max-galaxyFold:text-xs max-sm:text-sm text-lg text-center mt-6">
          Discover the comprehensive range of fluid engineering services
          provided by Crown Engineering Works. Our commitment to excellence
          extends across various aspects of the flexible solutions we offer.
        </p>
      </div>
      <Service />
    </main>
  );
}
