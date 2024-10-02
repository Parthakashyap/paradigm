"use client";
import React, { useEffect, useState } from "react";

const ColorModeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    // Get the current time in IST (Indian Standard Time)
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const currentHour = new Date(currentTime).getHours();

    // Set to daytime if the hour is between 6 AM (06:00) and 6 PM (18:00)
    if (currentHour >= 6 && currentHour < 18) {
      setIsDayTime(true); // Daytime
    } else {
      setIsDayTime(false); // Nighttime
    }

    console.log("Current time:", currentTime);
    console.log("isDayTime:", isDayTime);
  }, []);

  return (
    <div className={isDayTime ? "bg-white text-white" : "bg-black text-white"}>
      {children}
    </div>
  );
};

export default ColorModeProvider;
