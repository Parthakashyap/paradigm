import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const collaborate = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="bg-white pt-12">
        <div className="flex justify-center min-h-screen items-start flex-col mx-auto max-w-3xl h-full p-10 mb-20 space-y-6">
          <h1 className="text-4xl font-serif text-black leading-tight">
            Aegean is a research- driven ai investment firm.
          </h1>
          <p className="text-black leading-relaxed">
            We live on the frontier and believe in progress through technology.
          </p>
          <p className="text-black leading-relaxed">
            We invest in ai companies and protocols from the earliest
            stages, often when there's no more than an idea.
          </p>
          <p className="text-black leading-relaxed">
            We're builders, not just investors. Many of us have worked on tools,
            protocols, and companies that are now some of the most used in
            ai. We build software, much of it open source, that aims to
            advance the frontier of ai for everyone.
          </p>
          <p className="text-black leading-relaxed">
            Research is at the core of everything we do. We believe depth is a
            prerequisite for invention, and that real progress happens at the
            frontier, not in the boardroom or the ivory tower. We are as likely
            to collaborate on a research paper or ship code as we are to advise
            on product or business strategy.
          </p>
          <p className="text-black leading-relaxed">
            If you're building something ambitious at the frontier, come build
            with us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default collaborate;
