import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="flex flex-col font-mono lg:flex-row md:gap-96 items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-6">
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Disclosures</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">CA Privacy</li>
          </ul>
        </div>

        {/* Middle Nav Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-16 gap-12 md:gap-24  mt-8 lg:mt-0 text-sm">
          <div className="flex flex-col space-y-2">
            <p className="font-bold">ABOUT</p>
            <p className="hover:underline cursor-pointer">Team</p>
            <p className="hover:underline cursor-pointer">Twitter</p>
            <Link href={"/contact"} className="hover:underline cursor-pointer">Contact</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="font-bold">PORTFOLIO</p>
            <p className="hover:underline cursor-pointer">Writing</p>
            <p className="hover:underline cursor-pointer">LinkedIn</p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="font-bold">OPEN SOURCE</p>
            <p className="hover:underline cursor-pointer">Careers</p>
            <p className="hover:underline cursor-pointer">Warpcast</p>
          </div>
        </div>

        
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-xs text-center">
        <p>Copyright © 2024 Paradigm Operations LP All rights reserved.</p>
        <p>
          “Paradigm” is a trademark, and the triangular mobius symbol is a
          registered trademark of Paradigm Operations LP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
