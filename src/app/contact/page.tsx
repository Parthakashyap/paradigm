import Image from "next/image";
import logo from "@/Images/ai (1).png";
import Link from "next/link";
const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-white">
        <Link href={"/home"} className=" gap-0 items-center px-[1.6rem] hidden md:block">
        <Image alt="logo" src={logo} className="  w-14 md:w-12 " />
        </Link>
        <div className="md:pt-20">
        <Link href={"/home"} className="flex gap-0 items-center px-[1.6rem] md:hidden">
        <Image alt="logo" src={logo} className=" w-14   " />
        </Link>
        <div className="flex  flex-col lg:flex-row items-start lg:items-start h-auto lg:h-screen p-6 lg:p-10  pt-10">
            {/* Left Section - Contact Title */}
            <div className="text-left text-black/20 font-serif text-3xl lg:text-4xl lg:pr-56 mb-10 lg:mb-0">
                Contact
            </div>

            {/* Right Section - Contact Info */}
            <div className="space-y-5 w-full lg:w-auto">
                {/* Information Section */}
                <div className="text-black">
                    <div className="text-xs lg:text-sm font-mono">Information</div>
                    <div className="text-2xl lg:text-4xl py-2 font-serif">info@Aegean.xyz</div>
                </div>

                {/* Press Inquiries Section */}
                <div className="text-black">
                    <div className="text-xs lg:text-sm uppercase font-mono">Press Inquiries</div>
                    <div className="text-2xl lg:text-4xl py-2 font-serif">press@Aegean.xyz</div>
                </div>

                {/* Investor Inquiries Section */}
                <div className="text-black">
                    <div className="text-xs lg:text-sm uppercase font-mono">Investor Inquiries</div>
                    <div className="text-2xl lg:text-4xl py-2 font-serif">inv_inquiries@Aegean.xyz</div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Socials Section */}
                <div className="">
                    <div className="text-xs lg:text-sm uppercase text-black font-mono">Socials</div>
                    <div className="flex flex-wrap space-x-2 lg:space-x-4 pt-2 text-[.7rem]">
                        <button className="bg-gray-200 font-mono text-black py-1 px-3 rounded-md">
                            Twitter
                        </button>
                        <button className="bg-gray-200 font-mono text-black py-1 px-3 rounded-md">
                            LinkedIn
                        </button>
                        <button className="bg-gray-200 font-mono text-black py-1 px-3 rounded-md">
                            Warpcast
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Contact;
