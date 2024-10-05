import Link from "next/link";
import mobileLogo from "@/Images/ai (1).png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
   <div className="px-7 mb-12">
   <Image src={mobileLogo} alt="image" className=" w-20"></Image>
   </div>
      <div className="flex flex-col font-mono lg:flex-row md:gap-96 px-8 items-start">
        {/* Logo Section */}
        <div className="hidden md:flex flex-col items-start space-y-6">
          <ul className="space-y-2 text-sm">
            <li>
            <Link href={"/terms"} className="hover:underline cursor-pointer">Terms</Link>
            </li>
            <li>
            <Link href={"/disclosures"} className="hover:underline cursor-pointer">Disclosures</Link>
            </li>
            <li>
              <Link href={"/privacy"} className="hover:underline cursor-pointer">Privacy</Link>
              </li>
            {/* <li className="hover:underline cursor-pointer">CA Privacy</li> */}
          </ul>
        </div>

        {/* Middle Nav Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-16 gap-2 md:gap-24  mt-0 lg:mt-0 text-sm">
          <div className="flex flex-col space-y-2">
            <Link href={"/about"} className="font-bold">ABOUT</Link>
            <Link href={"/portfolio"} className="font-bold">PORTFOLIO</Link>
            
          </div>

          <div className="flex flex-col space-y-2">
          <Link href={"/collaborate"} className="font-bold">COLLABORATE</Link>
            <Link href={"/careers"} className="font-bold">CARRERS</Link>
            
            
          </div>
          <div className="flex flex-col space-y-2">
          <Link href={"/contact"} className="font-bold">CONTACT</Link>
          </div>
        </div>

        <div className="md:hidden mt-10 flex flex-col items-start space-y-6">
          <ul className="space-y-2 text-sm">
            <li>
            <Link href={"/terms"} className="hover:underline cursor-pointer">Terms</Link>
            </li>
            <li>
            <Link href={"/disclosures"} className="hover:underline cursor-pointer">Disclosures</Link>
            </li>
            <li>
              <Link href={"/privacy"} className="hover:underline cursor-pointer">Privacy</Link>
              </li>
            {/* <li className="hover:underline cursor-pointer">CA Privacy</li> */}
          </ul>
        </div>

        
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 px-8 text-[.75rem] font-mono text-left">
        <p>Copyright © 2024 Aegean Operations LP All rights reserved.
          “Aegean” is a trademark, and the triangular mobius symbol is a
          registered trademark of Aegean Operations LP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
