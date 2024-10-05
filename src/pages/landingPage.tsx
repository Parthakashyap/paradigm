"use client";
import Image from "next/image";
import Link from "next/link";
import image from "@/Images/ai_w (1).png";
import { useEffect, useState } from "react";
import ColorModeProvider from "@/components/provider";

const LandingPage = () => {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata", // For IST
    }).replace(/(AM|PM)/, '').trim(),
    date: new Date().toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }).replace(/\//g, ' '),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata", // For IST
        }).replace(/(AM|PM)/, '').trim(),
        date: new Date().toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        }).replace(/\//g, ' '),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="text-center text-white bg-black w-screen min-h-screen fixed flex flex-col items-center justify-center px-10 py-5 overflow-hidden">
      {/* Time and Date Display */}
      <div className="flex gap-2 justify-between md:w-[10%] mt-2 items-center">
        <h1>{dateTime.time}</h1>
        <p className="hidden md:block">{dateTime.date}</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Image Display */}
        <Image
          src={image}
          alt="ring"
          className=" w-44 md:w-[41rem] p-4 md:mb-0 mb-10"
        />
      </div>

      <Link href={"/info"} className="text-lg mb-24">
        Aegean Capital
      </Link>
    </div>
  );
};

export default LandingPage;