import Image from "next/image";
import ring from "../Images/landing-page.gif";
import Link from "next/link";
import image from "@/Images/ai (1).png"
import ColorModeProvider from "@/components/provider";
const LandingPage = () => {
  return (
    <ColorModeProvider>
    <div className="text-center w-screen text-black h-screen overflow-hidden flex flex-col items-center justify-center fixed">
      
      {/* New Delhi, India visible only on mobile */}
      <div className="text-black dark:text-zinc-300 mt-6 mb-6 md:hidden">
        <p>New Delhi, India</p>
      </div>

      <div className="flex-grow flex  items-center justify-center">
        <Image src={image} alt="ring" className="w-36 md:w-[41rem]  md:mb-0 mb-[13rem]" />

        {/* <h1 className=" text-[15rem] lg:text-[30rem] text-red-600 font-bold flex track tracking-[-5rem] items-center gap-[-8rem]">A<span className="-rotate-[8deg]">\</span></h1> */}
      </div>

      <footer className="w-full text-white text-left p-4 absolute bottom-0 mb-24">
        <div className="flex justify-between items-center w-full px-4">
          
          <div className="text-center md:text-left">
            <span className="dark:text-zinc-300 text-black">
              <Link href={"/home"}>Aegean</Link> {" "}·{" "}
              <Link href={"/incubations"}>Incubations</Link> {" "}·{" "}
              <Link href={"/contact"}>Contact</Link>
            </span>
            <div className="md:w-[27.5rem] w-full">
            <p className="mt-4 dark:text-zinc-300 text-black">
              Aegean is an investment firm that builds and invests in
              internet, software, and technology-enabled companies.
            </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="dark:text-zinc-300 text-black">New Delhi, India</p>
          </div>
        </div>
      </footer>
    </div>
    </ColorModeProvider>
  );
};

export default LandingPage;
