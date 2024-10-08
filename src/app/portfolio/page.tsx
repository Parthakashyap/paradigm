import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ weight: "600", subsets: ["latin-ext"] });
const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      {/* Added `flex-grow` to make the content take available vertical space */}
      <div className="bg-white pt-4 flex-grow">
        <div className="flex justify-center items-start flex-col mx-auto w-full md:max-w-3xl p-7 md:p-10 space-y-6">
          <h1
            className={` text-4xl  md:text-4xl font-serif text-black leading-tight `}
          >
            Aegean believes that intelligent software will power the future of
            the world.
          </h1>
          <p className="text-black text-lg leading-relaxed">
            Aegean’s portfolio showcases an emerging array of technology
            companies that are at the forefront of artificial intelligence,
            machine learning, and software development. These companies are
            united by a common thread of disrupting the future. From AI-driven
            platforms that transform industries to sophisticated software
            systems that power global enterprises, our investments reflect a
            commitment to backing category-defining technologies.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Each company in our portfolio represents a unique solution to a
            significant market need. Some are creating the AI tools that
            businesses rely on to predict market trends or optimize operations,
            while others are building software products that redefine user
            experiences and enterprise efficiencies. Whether it's a startup
            mitigating climate crisis with leveraging carbon credits or a
            company revolutionising enterprise workflows with innovative
            software, we invest in visionary founders who share our belief in
            the transformational power of technology.
          </p>
        </div>

        <div className="mt-12">
        <div className=" w-full mt-16 relative overflow-hidden">
          <div className="slider-track">
            <div className="slider-content">
              <span className="slider-item">Wave</span>
              <span className="slider-item">Affinidi</span>
              <span className="slider-item">Succinct</span>
              <span className="slider-item">Axiom</span>
              <span className="slider-item">Yield</span>
              <span className="slider-item">StackWare</span>
              <span className="slider-item">Vault</span>
              {/* Duplicate for seamless scrolling */}
              <span className="slider-item">Wave</span>
              <span className="slider-item">Affinidi</span>
              <span className="slider-item">Succinct</span>
              <span className="slider-item">Axiom</span>
              <span className="slider-item">Yield</span>
              <span className="slider-item">StackWare</span>
              <span className="slider-item">Vault</span>
            </div>
          </div>
        </div>
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

export default Portfolio;
