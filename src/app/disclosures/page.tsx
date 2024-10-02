import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="bg-white pt-12">
        <div className="flex justify-center items-start flex-col mx-auto max-w-3xl h-full p-10 mb-20 space-y-6">
          <h1 className="text-5xl font-serif text-black">
            Important Disclosures
          </h1>

          <p className="text-black font-serif leading-relaxed">
            This Privacy Policy (“Privacy Policy” or “Policy”) applies to the
            collection and use of Personal Information by Paradigm (“Company,”
            “we,” “us,” or “our”). It describes the Company's practices
            regarding the collection, use, and disclosure of Personal
            Information. This Policy applies to your access and use of any of
            our websites (the “Site”) or online services on which we post this
            Policy, when you communicate with us via email, and when you engage
            with us offline (collectively with the Site, the “Services”). By
            accessing or otherwise using our Services, you agree to our
            collection, disclosure, and use of Personal Information as described
            herein and agree to our Terms of Use.
            <br />
            <br />
            This Policy does not apply to information we collect about
            employees, job applicants, and independent contractors. This Policy
            also does not govern the information handling practices of our
            portfolio companies.
            <br />
            <br />
            For purposes of this Policy, “Personal Information” means
            information that identifies, relates to, describes, is reasonably
            capable of being associated with, or could reasonably be linked,
            directly or indirectly, with a particular consumer or household. It
            does not include de-identified or aggregate information.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
