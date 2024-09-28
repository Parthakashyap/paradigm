import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const About = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="bg-white">
      <div className="flex justify-center items-start flex-col mx-auto max-w-3xl h-full p-10 mb-20 space-y-6">
        <h1 className="text-4xl font-serif text-black leading-tight">
          Aegean is a research-driven technology investment firm.
        </h1>
        <p className="text-black leading-relaxed">
          We focus on artificial intelligence and machine learning related
          technologies at the frontier. We invest in, build, and contribute to
          companies and ideas by writing cheques ranging from $100,000 to $25M.
          We often get involved at the earliest stage of innovation and continue
          to support our portfolio companies over time.
        </p>
        <p className="text-black leading-relaxed">
          Aegean invests primarily in technology and software companies and
          takes an approach to help companies reach their full growth potential
          from the technical (mechanism, design, security, engineering) to the
          operational (recruiting, go-to-market strategy, legal, and regulatory
          strategy).
        </p>
        <p className="text-black leading-relaxed">
          Aegean only invests in early-stage technology companies that have
          demonstrated product-market fit and are ready to transition from
          founder-led growth to go-to-market machine. We partner with founders
          who are not only building innovative products but also paving the way
          for a more intelligent, automated, and data-driven world. We recognize
          that the power of technology lies not just in its capacity to improve
          but in its potential to disrupt and redefine industries at every level
          of the supply chain. Aegean partners with its portfolio companies to
          deliver strategic insights, capital, and industry expertise along with
          an extensive network to generate value and catalyze disruptive growth.
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
