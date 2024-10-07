import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Open_Sans, Tinos } from "next/font/google";
const openSans = Open_Sans({weight: "600" , subsets:["latin-ext"] })
const TinoFont = Tinos({weight : "400" , subsets:["latin-ext"]})
const About = () => {
  return (
    // Changed `h-screen` to `min-h-screen` to allow the page to grow naturally based on content size
    // Added `flex flex-col justify-between` to ensure proper layout with footer at the bottom
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      
      <Navbar />

      {/* Added `flex-grow` to make the content take available vertical space */}
      <div className="bg-white pt-4 flex-grow">
        <div className="flex justify-center items-start flex-col mx-auto w-full md:max-w-3xl p-4 md:p-10 space-y-6">
          <h1 className={` text-[1.5rem]  md:text-4xl font-serif text-black leading-tight ${openSans.className}`}>
            Aegean is a research-driven technology investment firm.
          </h1>
          <p className="text-black text-sm md:text-lg leading-relaxed">
            We focus on artificial intelligence and machine learning related
            technologies at the frontier. We invest in, build, and contribute to
            companies and ideas by writing cheques ranging from $100,000 to $25M.
            We often get involved at the earliest stage of innovation and continue
            to support our portfolio companies over time.
          </p>
          <p className="text-black text-sm md:text-lg leading-relaxed">
            Aegean invests primarily in technology and software companies and
            takes an approach to help companies reach their full growth potential
            from the technical (mechanism, design, security, engineering) to the
            operational (recruiting, go-to-market strategy, legal, and regulatory
            strategy).
          </p>
          <p className="text-black text-sm md:text-lg leading-relaxed">
            Aegean only invests in early-stage technology companies that have
            demonstrated product-market fit and are ready to transition from
            founder-led growth to go-to-market machine. We partner with founders
            who are not only building innovative products but also paving the way
            for a more intelligent, automated, and data-driven world. We recognize
            that the power of technology lies not just in its capacity to improve
            but in its potential to disrupt and redefine industries at every level
            of the supply chain. Aegean partners with its portfolio companies to
            deliver strategic insights, capital, and industry expertise along with
            an extensive network to generate value and catalyze disruptive growth.
          </p>
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

export default About;
