"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import Products_Nav from "../(products-ui)/products-nav/page";
import Image from "next/image";

export default function Navbar() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setisOpenMenu(!isOpenMenu);
  }

  const styles = {
    position: "absolute",
    right: isOpenMenu ? 0 : "-100%",
    transition: "right 0.5s ease-in-out",
  };

  const Links = [
    { name: "Home", href: "/", index:'1' },
    { name: "Products", href: "/products", index:'2' },
    { name: "Services", href: "/services", index:'3' },
    { name: "Industries", href: "/industries", index:'4' },
    { name: "Where to Buy", href: "/industries", index:'5' },
    { name: "Quality", href: "/quality", index:'6' },
    { name: "About Us", href: "/about", index:'7' },
    { name: "Contact", href: "/contact", index:'8' },
  ];
  function toggleSearch() {
    setIsSearchClicked(!isSearchClicked);
    console.log(isSearchClicked);
  }
  return (
    <main
      className={`w-full fixed  z-20 bg-offwhite transition-all duration-500 ${
        isScrolled ? "-top-1" : "lg:pt-0 pt-18"
      } lg:border-b-2 lg:border-newgold `}
    >
      <section className="w-full">
        <div
          className={`transition-all duration-500 ${
            isScrolled ? "h-0 opacity-0" : "h-[8vh] opacity-100"
          } hidden lg:flex`}
        >
          <div className="w-full h-full flex justify-end items-center text-newbrown font-medium border-b-2 border-newgold">
            <span className="mx-4 cursor-pointer">India</span>
            <span className="mx-4">Divisions</span>
            {Links.slice(4, 7).map((item) => (
              <Link
                href={item.href}
                className="mx-4 hover:text-newgold"
                key={item.index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className=" flex items-center justify-between xl:justify-center w-[100%] h-[10vh] lg:h-[14vh] lg:pl-10 flex-row lg:border-0 border-b-2 border-newgold">
        <div className="lg:w-[22%] h-[100%] justify-start flex flex-row xl:justify-center items-center w-[80%] ">
          <Image alt="logo" height={300} width={300} src="/cew-logo.png" className="sm:w-20 w-16" />
          <span className="border border-newgold lg:min-w-[40px] mr-2 lg:mx-2 w-[30px] transform rotate-90"></span>
          <div className="w-80% flex flex-col ">
            <button className="text-center font-semibold sm:text-xl sm:tracking-[1.1rem] tracking-[0.6rem]">
              CROWN
            </button>
            <span className="sm:text-sm text-[0.6rem]">ENGINEERING WORKS</span>
          </div>
        </div>
        <div className="lg:mx-10 flex flex-col h-[100%] justify-center lg:justify-evenly w-[20%] lg:w-[60%] border-slate-950 sticky top-0">
          <div className=" text-newbrown  font-medium hidden lg:flex lg:items-center ">
            {Links.slice(0, 4).map((item) =>
              item.name === "Products" ? (
                <Products_Nav key={item.index}/>
              ) : (
                <Link
                  href={item.href}
                  className="mx-4 hover:text-newgold text-center text-[1rem] "
                  key={item.index}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center lg:border  lg:border-newgold lg:rounded-md w-[100%] justify-end lg:bg-white ">
            <input
              type="text"
              className=" lg:w-[100%] bg-transparent p-2 mr-2 lg:rounded-md focus:outline-none lg:flex hidden  "
              placeholder="Search Products"
            ></input>
            <div
              className="sm:h-12 sm:w-12 sm:mx-3 lg:h-10 lg:mx-0 ml-4 h-8 w-8 mx-1 p-1 lg:bg-newgold lg:p-1 cursor-pointer rounded-r-md "
              onClick={() => toggleSearch()}
            >
              <Search className="sm:h-10 sm:w-10 lg:h-8  " />
            </div>
            <div
              onClick={() => toggleMenu()}
              className="h-8 mr-2 lg:hidden p-1 sm:h-12 sm:w-12 sm:mx-3 "
            >
              <Menu className=" h-6 w-6 sm:h-10 sm:w-10 " />
            </div>
          </div>
        </div>
      </section>

      <input
        type="text"
        className={`w-[90%] bg-offwhite p-2 border self-center rounded-md focus:outline-none lg:hidden transition-all duration-500 absolute ${
          isSearchClicked ? "right-[5%]" : "right-[100%]"
        }`}
        placeholder="Search Products"
      ></input>
      <div
        className={`lg:hidden w-[70vw] h-[100vh] bg-offwhite flex flex-col items-center gap-10 sm:gap-8 py-5 transition-all duration-500`}
        style={styles}
      >
        {Links.map((item) => (
          <Link
            href={item.href}
            className="mx-4 "
            onClick={() => toggleMenu()}
            key={item.index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
