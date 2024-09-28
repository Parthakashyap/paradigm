import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Contact = () => {
    return (
        <div className="w-full h-screen bg-white">
            <Navbar />
            <div className="flex items-start h-screen p-10 pt-20">
                {/* Left Section - Contact Title */}
                <div className="text-left text-black/20 font-serif text-4xl pr-56">
                    Contact
                </div>

                {/* Right Section - Contact Info */}
                <div className="space-y-10">
                    {/* Information Section */}
                    <div className="text-black">
                        <div className="text-sm font-mono">Information</div>
                        <div className="text-4xl py-2 font-serif">info@paradigm.xyz</div>
                    </div>

                    {/* Press Inquiries Section */}
                    <div className="text-black">
                        <div className="text-sm uppercase font-mono">Press Inquiries</div>
                        <div className="text-4xl py-2 font-serif">press@paradigm.xyz</div>
                    </div>

                    {/* Investor Inquiries Section */}
                    <div className="text-black">
                        <div className="text-sm uppercase font-mono">Investor Inquiries</div>
                        <div className="text-4xl py-2 font-serif">inv_inquiries@paradigm.xyz</div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-gray-300 my-4"></div>

                    {/* Socials Section */}
                    <div className="pt-8 ">
                        <div className="text-sm uppercase text-black font-mono">Socials</div>
                        <div className="space-x-4 pt-2 text-[.7rem]">
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
            <Footer />
        </div>
    );
};

export default Contact;
