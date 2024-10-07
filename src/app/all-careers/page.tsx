import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
const openSans = Open_Sans({ weight: "600", subsets: ["latin-ext"] });
const page = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      {/* Added `flex-grow` to make the content take available vertical space */}
      <div className="bg-white pt-4 flex-grow">
        <div className="flex justify-center items-start flex-col mx-auto w-full md:max-w-3xl p-4 md:p-10 space-y-6">
          <h1
            className={` text-[1.2rem]  md:text-4xl font-serif text-black leading-tight ${openSans.className}`}
          >
            Let’s work together to build the future of the world by leveraging
            technology
          </h1>
          <p className="text-black text-md leading-relaxed">
            We are actively shaping the future of the world by developing
            software products that will disrupt industries and revolutionise
            supply chains. Our commitment to excellence and innovation propels
            us to seek out the best talent from around the globe.
          </p>
          <p className="text-black leading-relaxed">
            Browse through careers and opportunities in the Aegean universe and
            discover how you can generate an impact on the global world. We have
            built a community of the best of global talent where your skills and
            ambitions can flourish, supported by a culture that values
            operational excellence, integrity, and continuous improvement.
          </p>
        </div>

        <div className="p-3 w-full md:w-64 m-auto font-bold">
          <Link
            href="/careers"
            className=" justify-center items-center flex text-black/90 duration-200 hover:bg-black hover:text-white cursor-pointer border-black/40 border-2 p-2"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Divider line below the text */}
      {/* <div className="flex items-center justify-center mb-10">
    <div className="w-96  pb-10 border-t-2 border-gray-300"></div>
    </div> */}
      {/* Added `mt-6` to create space between the divider and the footer */}

      <div className=" mt-48">
        <Footer />
      </div>
    </div>
  );
};

export default page;
