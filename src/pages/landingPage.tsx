"use client";
import Image from "next/image";
import ring from "../Images/landing-page.gif";
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

  return (
    // <ColorModeProvider>
      <div className="text-center bg-black h-full fixed flex flex-col items-center justify-center p-10 overflow-hidden">
        {/* New Delhi, India visible only on mobile */}
        
        <div className="flex gap-2 justify-between md:w-[10%] items-center mt-7">
          <h1>{dateTime.time}</h1>
          <p className="hidden md:block">{dateTime.date}</p>
        </div>
        
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* Display date and time */}
          <Image
            src={image}
            alt="ring"
            className="w-96 md:w-[41rem] p-4 md:mb-0 mb-10"
          />
        </div>
        <Link href={"/info"} className="text-lg mb-8">Aegean Capital</Link>
      </div>
    // </ColorModeProvider>
  );
};

export default LandingPage;
