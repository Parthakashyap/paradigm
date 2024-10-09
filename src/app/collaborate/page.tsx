import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ weight: "600", subsets: ["latin-ext"] });
const collaborate = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      {/* Added `flex-grow` to make the content take avAIlable vertical space */}
      <div className="bg-white pt-4 flex-grow">
        <div className="flex justify-center items-start flex-col mx-auto w-full md:max-w-3xl p-7 md:p-10 space-y-6">
          <h1
            className={` text-4xl  md:text-4xl  text-black leading-tight font-serif`}
          >
            Aegean is a research- driven AI investment firm.
          </h1>
          <p className="text-black text-lg leading-relaxed">
            We live on the frontier and believe in progress through technology.
          </p>
          <p className="text-black text-lg leading-relaxed">
            We invest in AI companies and protocols from the earliest stages,
            often when there's no more than an idea.
          </p>
          <p className="text-black text-lg leading-relaxed">
            We're builders, not just investors. Many of us have worked on tools,
            protocols, and companies that are now some of the most used in AI.
            We build software, much of it open source, that AIms to advance the
            frontier of AI for everyone.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Research is at the core of everything we do. We believe depth is a
            prerequisite for invention, and that real progress happens at the
            frontier, not in the boardroom or the ivory tower. We are as likely
            to collaborate on a research paper or ship code as we are to advise
            on product or business strategy.
          </p>
          <p className="text-black text-lg leading-relaxed">
            If you're building something ambitious at the frontier, come build
            with us.
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

export default collaborate;
