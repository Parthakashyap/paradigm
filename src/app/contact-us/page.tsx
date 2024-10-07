import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="md:pt-20">
        <div className="flex  flex-col lg:flex-row items-start lg:items-start h-auto lg:h-screen p-6 lg:p-10 pt-20">
          {/* Left Section - Contact Title */}
          <div className="text-left text-black/20 font-serif text-3xl lg:text-4xl lg:pr-56 mb-10 lg:mb-0">
            Contact
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-10 w-full lg:w-auto">
            {/* Information Section */}
            <div className="text-black">
              <div className="text-xs lg:text-sm font-mono">Information</div>
              <div className="text-2xl lg:text-4xl py-2 font-serif">
                info@Aegean.xyz
              </div>
            </div>

            {/* Press Inquiries Section */}
            <div className="text-black">
              <div className="text-xs lg:text-sm uppercase font-mono">
                Press Inquiries
              </div>
              <div className="text-2xl lg:text-4xl py-2 font-serif">
                press@Aegean.xyz
              </div>
            </div>

            {/* Investor Inquiries Section */}
            <div className="text-black">
              <div className="text-xs lg:text-sm uppercase font-mono">
                Investor Inquiries
              </div>
              <div className="text-2xl lg:text-4xl py-2 font-serif">
                inv_inquiries@Aegean.xyz
              </div>
              {/* Divider Line */}
              <div className="border-t border-gray-300 mt-5"></div>

              <div className="pt-8">
                <div className="text-xs lg:text-sm uppercase text-black font-mono">
                  Socials
                </div>
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

            {/* Socials Section */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
