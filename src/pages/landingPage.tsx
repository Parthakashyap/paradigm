import Image from "next/image";
import ring from "../Images/landing-page.gif";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="text-center w-screen bg-black flex flex-col items-center justify-center min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <Image src={ring} alt="ring" className="w-96 p-4 mb-10" />
      </div>

      <footer className="w-full text-white text-left p-6 absolute bottom-0 mb-10">
        <div className="flex justify-between items-center w-full px-10">
          <div>
            <span className="text-zinc-300">
              <Link href={"/home"}>Aegean</Link>{" "} · <Link href={"/incubations"}>Incubations</Link> {" "}·   <Link href={"/contact"}>Contact</Link> {" "}
            </span>
            <p className="mt-4 text-zinc-300">
              Aegean is an investment firm that builds and invests in<br/>
              internet, software, and technology-enabled companies.
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-300">New Delhi, India 
</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
