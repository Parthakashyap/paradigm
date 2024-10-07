import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="bg-white pt-12">
        <div className="flex justify-center items-start flex-col mx-auto max-w-3xl h-full p-4 md:p-10 mb-20 space-y-6">
          <h1 className="text-[2rem] font-serif text-black">
          Privacy Policy
          </h1>
          
          <p className="text-black font-serif leading-relaxed">
            This website (the “Website”) is intended solely to provide general
            information about Aegean Capital Operations LP (together with its
            affiliates, “Aegean Capital,” “we,” “our,” or “us”), its services to
            entrepreneurs and management teams, and its personnel.
            <br /><br/>
            Nothing on the Website is directed at or should be relied upon by
            any investors or prospective investors in any vehicle managed by
            Aegean Capital. Aegean Capital does not intend to solicit or make its investment
            advisory services available to the general public. Under no
            circumstances should any information provided on this Website be
            considered as an offer soliciting the purchase or sale of any
            security or interest in any pooled investment vehicle sponsored by
            Aegean Capital nor should it be construed as an offer to provide
            investment advisory services. Such offers or solicitations will be
            made separately and only by means of the confidential offering
            documents of the specific pooled investment vehicles which should be
            read in their entirety, and only to those who, among other
            requirements, meet certain qualifications under federal securities
            laws.
            <br />
            <br />
            Nothing on this Website constitutes investment, accounting, tax or
            legal advice or is a recommendation that you purchase, sell or hold
            any security or other investment or that you pursue any investment
            style or strategy. Views expressed in “posts” by any individuals
            (including any podcasts, videos, and social media) are those of the
            individual quoted therein and are not the views of Aegean Capital. Any
            opinions expressed on this Website are subject to change.
            <br />
            <br />
            Any investments or portfolio companies described or referred to on
            this Website are not representative of all investments made by funds
            managed by Aegean Capital and there can be no assurance that the
            investments described are, or will be, profitable or that other
            investments made in the future will have similar character or
            results.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
