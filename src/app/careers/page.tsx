"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";

const Careers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const jobsPerPage = 30;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen size
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const jobs = [
    {
      title: "Senior React Engineer",
      company: "Wave",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Middle Golang Engineer",
      company: "Affinidi",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Head of Developer Relations",
      company: "Succinct",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Content Marketing",
      company: "Axiom",
      image:
        "https://cdn.getro.com/companies/07d96a89-f147-5ee7-b688-3a2b6199ac34",
      location: "San Francisco, CA, USA",
    },
    {
      title: "UI/UX Engineer",
      company: "Yield",
      image:
        "https://cdn.getro.com/companies/0abe0730-55da-5e46-bfb4-07e78c2b45ae-1724249105",
      location: "San Francisco, CA, USA",
    },
    {
      title: "Founding Engineer",
      company: "StackWare",
      image:
        "https://cdn.getro.com/companies/0abe0730-55da-5e46-bfb4-07e78c2b45ae-1724249105",
      location: "San Francisco, CA, USA",
    },
    {
      title: "Designer Brand & Marketing",
      company: "Vault",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "BD & Growth Lead",
      company: "Yield",
      image:
        "https://cdn.getro.com/companies/07d96a89-f147-5ee7-b688-3a2b6199ac34",
    },
    {
      title: "Senior/Staff Fullstack Developer",
      company: "Vault",
      image:
        "https://cdn.getro.com/companies/b17eed59-4cc2-5c86-86c9-5071008a3543",
    },
    {
      title: "Founding Engineer - Full Stack",
      company: "Succinct",
      image:
        "https://cdn.getro.com/companies/4a296f64-868a-57c0-a6f0-c40bca6b785a",
    },
    {
      title: "Senior Software Engineer",
      company: "Affinidi",
      image:
        "https://cdn.getro.com/companies/6104d42c-cc40-5e82-bc85-7f199a499e60",
    },
    {
      title: "Software Engineer Full stack",
      company: "Wave",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "Software Engineer, SRE/DEVOPS",
      company: "Succinct",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "Senior Backend Developer",
      company: "StackWare",
      image:
        "https://cdn.getro.com/companies/22717ee0-86c4-5e51-a11d-ffb9ad0eccb0",
    },
    {
      title: "Talent Acquisition Lead",
      company: "Affinidi",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Sales Busisness Development Manager",
      company: "Vault",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Cyber Security Engineer ",
      company: "Affinidi",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Product Manger ",
      company: "Wave",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Product Marketing Manger",
      company: "Axiom",
      image:
        "https://cdn.getro.com/companies/75e9d07f-a052-52dd-85c3-868d31d10c97",
    },
    {
      title: "Investigation Specialist",
      company: "Wave",
      image:
        "https://cdn.getro.com/companies/75e9d07f-a052-52dd-85c3-868d31d10c97",
    },
  ];




  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-2 md:pt-24 pt-10 px-7 bg-white min-h-screen font-mono">
        {/* Left Sidebar for large screens */}
        {!isMobile && (
          <div className="w-full lg:w-1/4 p-4">
            <h2 className="text-sm font-semibold text-black">CAREERS</h2>
            <p className="text-[.7rem] w-60 text-black mb-4">
              Browse through careers and opportunities in the Aegean Capital
              universe.
            </p>
            <input
              type="text"
              placeholder="Title or Company"
              className="w-48 h-6 mt-2 mb-2 border border-gray-300 p-2 text-[.7rem] font-mono text-black"
            />
            <input
              type="text"
              placeholder="Locations"
              className="w-48 h-6 mb-4 border border-gray-300 p-2 text-[.7rem] font-mono text-black"
            />
            <div className="mb-4">
              <input
                type="checkbox"
                id="careersAegean Capital"
                className="mr-2"
              />
              <label
                htmlFor="careersAegean Capital"
                className="text-[.7rem] text-black"
              >
                Careers at Aegean Capital
              </label>
            </div>

            {/* Roles Section */}
            <h3 className=" text-[.7rem] text-black mb-2">Roles</h3>
            <ul className="text-[.7rem]">
              {[
                "Accounting & Finance",
                "Administration",
                "Customer Service",
                "Data Science",
                "Design",
                "IT",
                "Legal",
                "Marketing & Communications",
                "Operations",
                "Other Engineering",
                "People & HR",
                "Product",
                "Quality Assurance",
                "Sales & Business Development",
                "Software Engineering",
              ].map((role, index) => (
                <li key={index} className="mb-2">
                  <input type="checkbox" id={role} className="mr-2" />
                  <label htmlFor={role} className="text-black">
                    {role}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Right Content Section */}
        <div className="w-full lg:w-3/4  md:p-8 pl-0 lg:pl-32">
          <h2 className=" text-black -mt-4 md:hidden font-bold mb-2">
            Careers
          </h2>
          <p className="text-[.9rem] font-normal md:hidden  text-black mb-4">
            Browse through careers and opportunities in the Aegean universe.
          </p>

          {/* Filter By Button for mobile */}
          {isMobile && (
            <div className="relative mb-6 w-full mt-8">
              <button
                onClick={toggleDropdown}
                className="w-full bg-gray-100  border border-gray-300 text-black p-3 flex justify-between items-center"
              >
                FILTER BY
                <span className="ml-2">&#9662;</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 shadow-lg z-10 max-h-48 overflow-y-scroll">
                  <ul className="text-sm text-black">
                    {/* Mobile Sidebar Options in Dropdown */}
                    <li className="p-2 font-bold">Title or Company</li>
                    <li className="p-2">
                      <input
                        type="text"
                        placeholder="Title or Company"
                        className="w-full border border-gray-300 p-2 text-sm font-mono text-black"
                      />
                    </li>
                    <li className="p-2 font-bold">Locations</li>
                    <li className="p-2">
                      <input
                        type="text"
                        placeholder="Locations"
                        className="w-full border border-gray-300 p-2 text-sm font-mono text-black"
                      />
                    </li>
                    <li className="p-2">
                      <input
                        type="checkbox"
                        id="careersAegean Capital"
                        className="mr-2"
                      />
                      <label
                        htmlFor="careersAegean Capital"
                        className="text-sm text-black"
                      >
                        Careers at Aegean Capital
                      </label>
                    </li>

                    <li className="p-2 font-bold">Roles</li>
                    {[
                      "Accounting & Finance",
                      "Administration",
                      "Customer Service",
                      "Data Science",
                      "Design",
                      "IT",
                      "Legal",
                      "Marketing & Communications",
                      "Operations",
                      "Other Engineering",
                      "People & HR",
                      "Product",
                      "Quality Assurance",
                      "Sales & Business Development",
                      "Software Engineering",
                    ].map((role, index) => (
                      <li key={index} className="p-2">
                        <input type="checkbox" id={role} className="mr-2" />
                        <label htmlFor={role} className="text-sm text-black">
                          {role}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Job Listings */}
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className="flex justify-between w-full  items-center  mb-6">
                <div className="flex flex-col">
                  <h4 className=" text-lg text-black">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <div className="w-16 h-16 bg-gray-200 flex justify-center items-center">
                  <img src={job.image} alt={job.title} />
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          {/* <div className="flex text-black items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-black"
                } text-xs p-1 px-2 rounded-md`}
              >
                {index + 1}
              </button>
            ))}
          </div> */}

          <div className="mb-48"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
