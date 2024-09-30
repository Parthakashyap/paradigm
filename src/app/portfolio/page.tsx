import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Portfolio = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="bg-white">
        <div className="flex justify-center items-start flex-col mx-auto max-w-3xl h-full p-10 mb-20 space-y-6">
          <h1 className="text-4xl font-serif text-black leading-tight">
            Aegean believes that intelligent software will power the future of
            the world.
          </h1>
          <p className="text-black leading-relaxed">
          Aegean’s portfolio showcases an emerging array of technology companies that are at the forefront of artificial intelligence, machine learning, and software development. These companies are united by a common thread of disrupting the future. From AI-driven platforms that transform industries to sophisticated software systems that power global enterprises, our investments reflect a commitment to backing category-defining technologies. 
          </p>
          <p className="text-black leading-relaxed">
          Each company in our portfolio represents a unique solution to a significant market need. Some are creating the AI tools that businesses rely on to predict market trends or optimize operations, while others are building software products that redefine user experiences and enterprise efficiencies. Whether it's a startup mitigating climate crisis with leveraging carbon credits or a company revolutionising enterprise workflows with innovative software, we invest in visionary founders who share our belief in the transformational power of technology.    
          </p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
