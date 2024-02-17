"use client";
import HeroMain from "./(hero-ui)/hero-main/page";
import HeroSubMain from "./(hero-ui)/hero-submain/page";
import { Products_Card } from "./(products-ui)/products-card/page";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ]);
  function HandleCard() {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2 ">
        {data.slice(0, 8).map((item) => (
          <Card
            className="w-[300px] h-[400px] rounded-sm hover:shadow-xl  bg-offwhite "
            key={item.id}
          >
            {/* <img src='/cew-mainlogo.png' className=" object-fill " /> */}
            <Image
              alt="Product Image"
              src="/product2.PNG"
              width={300}
              height={300}
              className="h-[40%] object-cover w-[100%] rounded-tr-sm rounded-tl-sm  "
            />
            <CardHeader className="mt-2">
              <CardTitle className="text-[1rem]">
                CORRUGATED STAINLESS STEEL
              </CardTitle>
              <CardDescription>
                CORRUGATED STAINLESS STEEL HOSE WITH BRAID: A 100 SERIES & A 200
                SERIES
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center ">
              {/* <Button variant="link">Cancel</Button> */}
              <Button variant="goldbtn" className="w-[60%]">
                Explore
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <main className="w-full lg:pt-0 pt-16 relative">
      <section className="w-full relative">
        <HeroMain />
        <HeroSubMain />
        <div className="lg:pt-12 pt-16 flex justify-center">
          <HandleCard />
        </div>
      </section>
      <section className="h-[100vh] w-full flex justify-center mt-10">
        <div className="bg-offwhite w-[80%] lg:w-[50%] h-[80vh] border flex justify-center items-center rounded-md shadow-xl text-gray-700 font-medium">
          <span>Testimonials Coming soon...!!!</span>
        </div>
      </section>
    </main>
  );
}
