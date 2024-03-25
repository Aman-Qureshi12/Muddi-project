import Industry from "@/app/(industries-ui)/Industry";
import React from "react";

export default function Industries() {
  return (
    <main className="mt-60">
      <div className="flex justify-center items-center flex-col xl:mx-32 max-sm:mx-5 sm:mx-10">
        <h1 className="text-center font-semibold xl:text-4xl text-3xl text-newgold">
          Industries We Serve
        </h1>
        <p className="max-galaxyFold:text-xs max-sm:text-sm text-lg text-center mt-6">
          Crown Engineering Works is a versatile provider of precision flexible
          solutions, catering to a diverse array of industries. Our commitment
          to quality, innovation, and client satisfaction positions us as a
          trusted partner in critical applications. Explore how our flexible
          solutions enhance efficiency and reliability across various sectors
        </p>
      </div>
      <Industry />
    </main>
  );
}
