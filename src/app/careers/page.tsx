"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";

const Careers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

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
      company: "Symbiotic",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Middle Golang Engineer",
      company: "Symbiotic",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Head of Developer Relations",
      company: "Symbiotic",
      image:
        "https://cdn.getro.com/companies/6a066a37-437b-5543-95e7-0e9d8c882b88-1725192904",
    },
    {
      title: "Content Marketing",
      company: "Succinct",
      image:
        "https://cdn.getro.com/companies/07d96a89-f147-5ee7-b688-3a2b6199ac34",
      location: "San Francisco, CA, USA",
    },
    {
      title: "UI/UX Engineer",
      company: "MetaDAO",
      image:
        "https://cdn.getro.com/companies/0abe0730-55da-5e46-bfb4-07e78c2b45ae-1724249105",
      location: "San Francisco, CA, USA",
    },
    {
      title: "Founding Engineer",
      company: "MetaDAO",
      image:
        "https://cdn.getro.com/companies/0abe0730-55da-5e46-bfb4-07e78c2b45ae-1724249105",
      location: "San Francisco, CA, USA",
    },
    {
      title: "Designer Brand & Marketing",
      company: "Conduit",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "BD & Growth Lead",
      company: "Succint",
      image:
        "https://cdn.getro.com/companies/07d96a89-f147-5ee7-b688-3a2b6199ac34",
    },
    {
      title: "Senior/Staff Fullstack Developer",
      company: "Privy",
      image:
        "https://cdn.getro.com/companies/b17eed59-4cc2-5c86-86c9-5071008a3543",
    },
    {
      title: "Founding Engineer - Full Stack",
      company: "Shadow",
      image:
        "https://cdn.getro.com/companies/4a296f64-868a-57c0-a6f0-c40bca6b785a",
    },
    {
      title: "Senior Software Engineer",
      company: "Ellipsis Labs",
      image:
        "https://cdn.getro.com/companies/6104d42c-cc40-5e82-bc85-7f199a499e60",
    },
    {
      title: "Software Engineer Full stack",
      company: "Conduit",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "Software Engineer, SRE/DEVOPS",
      company: "Conduit",
      image:
        "https://cdn.getro.com/companies/40d67ff1-6195-5d22-b4c8-f3d6fc21ac3a-1726402513",
    },
    {
      title: "Senior Backend Developer",
      company: "Fireblocks",
      image:
        "https://cdn.getro.com/companies/22717ee0-86c4-5e51-a11d-ffb9ad0eccb0",
    },
    {
      title: "Talent Acquisition Lead",
      company: "MatrixPort",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Sales Busisness Development Manager",
      company: "MatrixPort",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Cyber Security Engineer ",
      company: "MatrixPort",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Product Manger ",
      company: "MatrixPort",
      image:
        "https://cdn.getro.com/companies/db7bc878-869c-59c6-bcc6-cb28cba69cf9",
    },
    {
      title: "Product Marketing Manger",
      company: "Bitso",
      image:
        "https://cdn.getro.com/companies/75e9d07f-a052-52dd-85c3-868d31d10c97",
    },
    {
      title: "Investigation Specialist",
      company: "Bitso",
      image:
        "https://cdn.getro.com/companies/75e9d07f-a052-52dd-85c3-868d31d10c97",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-2 md:pt-24 pt-10 bg-white min-h-screen font-mono">
        {/* Left Sidebar for large screens */}
        {!isMobile && (
          <div className="w-full lg:w-1/4 p-4">{/* Sidebar content */}</div>
        )}

        {/* Right Content Section */}
        <div className="w-full lg:w-3/4  md:p-8 pl-0 lg:pl-32">
          <h2 className=" text-black -mt-4 md:hidden font-bold mb-2">
            Careers
          </h2>
          <p className="text-[.9rem] font-bold md:hidden  text-black mb-4">
            Browse through careers and opportunities in the Aegean Capital
            universe.
          </p>

          {/* Filter By Button for mobile */}
          {isMobile && (
            <div className="relative mb-6 w-full">
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
                  {/* Dropdown content */}
                </div>
              )}
            </div>
          )}

          {/* Job Listings */}
          <ul>
            {currentJobs.map((job, index) => (
              <li key={index} className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 flex justify-center items-center mr-4">
                  <img src={job.image} alt={job.title} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="flex text-black items-center gap-2">
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
          </div>

          <div className="mb-48"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
