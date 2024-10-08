"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/Images/ai (1).png";
import Image from "next/image";
import mobileLogo from "@/Images/ai (1).png";
import {Roboto} from "next/font/google"
const robotoFont = Roboto({subsets: ["latin"], weight: "700"});
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isOpen ? "bg-white" : "bg-white"
      } transition-colors duration-300 relative mb-20`}
    >
      <nav className={`text-white  md:text-black`}>
        {/* Wrapper */}
        <div className="flex bg-white justify-between items-center px-6  py-4 fixed top-0 left-0 right-0 z-50">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <div className="flex gap-0 justify-center items-center">
              <div className="flex items-center gap-2">
                <Image alt="logo" src={logo} className=" w-14 md:w-12 " />
              </div>

              <span className="relative flex items-center mr-">
                {/* First Letter */}
                <span
                  className={`font-serif text-4xl ${
                    isOpen ? "text-white" : "text-black"
                  } font-semibold tracking-wide`}
                ></span>
                {/* Rest of the text */}
                <span
                  className={`uppercase tracking-wide font-[900] md:text-4xl text-2xl ${robotoFont.className} ${
                    isOpen ? "text-white" : "text-black"
                  } font-light tracking-tight transition-transform duration-300`}
                  style={{
                    transform: `translateX(${
                      scrollPosition > 50 ? "-2rem" : "0"
                    })`,
                    opacity: scrollPosition > 50 ? 0 : 1,
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                    position: "absolute",
                  }}
                >
                  
                </span>
              </span>
            </div>
          </Link>

          {/* Text "Aegean" on top right */}
          <div className="hidden md:block text-white text-2xl font-mono absolute top-2 right-8">
            Aegean
          </div>

          {/* Hamburger Icon (visible on small screens) */}
          <div className="md:hidden z-50 mt-[0.3rem]">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <div className="space-y-[.37rem] scale-90 opacity-25">
                <span
                  className={`block w-6 h-0.5 ${
                    isOpen ? "bg-white" : "bg-black"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 ${
                    isOpen ? "bg-white" : "bg-black"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 ${
                    isOpen ? "bg-white" : "bg-black"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Links (hidden on small screens, visible on larger screens) */}
          <div className="hidden bg-white border-black/10 shadow-black/10 shadow-md p-4 rounded-md md:flex space-x-10 mr-[40rem] text-sm font-mono">
            <Link href="/about" className="hover:underline transition">
              About
            </Link>
            <Link href="/portfolio" className="hover:underline transition">
              Portfolio
            </Link>
            <Link href="/collaborate" className="hover:underline transition">
              Collaborate
            </Link>
            <Link href="/all-careers" className="hover:underline transition">
              Careers
            </Link>
            <Link href="/contact-us" className="hover:underline transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Collapsible Mobile Menu (visible on small screens) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col  items-start bg-black text-white w-full h-full transition-all duration-300">
            <div className="flex gap-0 items-center py-[1.31rem] px-[1.6rem]">
              <Image src={mobileLogo} alt="mobilelogo" className=" w-14"></Image>
              {/* <Link
                href="/home"
                className={`top-6 ${robotoFont.className} left-12 text-white text-2xl uppercase  md:text-4xl`}
              >
                Aegean
              </Link> */}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-7 scale-75 right-6 text-white text-3xl"
            >
              &#10005;
            </button>
            <div className="flex flex-col space-y-8 text-2xl font-mono p-8 mt-32">
              <Link
                href="/about"
                className="hover:underline transition"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/portfolio"
                className="hover:underline transition"
                onClick={() => setIsOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link
                href="/collaborate"
                className="hover:underline transition"
                onClick={() => setIsOpen(false)}
              >
                COLLABORATE
              </Link>
              <Link
                href="/all-careers"
                className="hover:underline transition"
                onClick={() => setIsOpen(false)}
              >
                CAREERS
              </Link>
              <Link
                href="/contact-us"
                className="hover:underline transition"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
