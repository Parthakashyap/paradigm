"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";

const Careers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-2 pt-10 bg-white min-h-screen font-mono">
        {/* Left Sidebar for large screens */}
        {!isMobile && (
          <div className="w-full lg:w-1/4 p-4">
            <h2 className="text-sm font-semibold text-black">CAREERS</h2>
            <p className="text-[.7rem] w-60 text-black mb-4">
              Browse through careers and opportunities in the Paradigm universe.
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
              <input type="checkbox" id="careersParadigm" className="mr-2" />
              <label htmlFor="careersParadigm" className="text-[.7rem] text-black">
                Careers at Paradigm
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
        <div className="w-full lg:w-3/4 p-8 pl-0 lg:pl-32">
          {/* Filter By Button for mobile */}
          {isMobile && (
            <div className="relative mb-6">
              <button
                onClick={toggleDropdown}
                className="w-full bg-gray-100 border border-gray-300 text-black p-3 flex justify-between items-center"
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
                      <input type="checkbox" id="careersParadigm" className="mr-2" />
                      <label htmlFor="careersParadigm" className="text-sm text-black">
                        Careers at Paradigm
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
            {[
              { title: "Senior React Engineer", company: "Symbiotic" },
              { title: "Middle Golang Engineer", company: "Symbiotic" },
              { title: "Head of Developer Relations", company: "Symbiotic" },
              {
                title: "Content Marketing",
                company: "Succinct",
                location: "San Francisco, CA, USA",
              },
              {
                title: "UI/UX Engineer",
                company: "MetaDAO",
                location: "San Francisco, CA, USA",
              },
              {
                title: "Founding Engineer",
                company: "MetaDAO",
                location: "San Francisco, CA, USA",
              },
              { title: "Senior React Engineer", company: "Symbiotic" },
              { title: "Middle Golang Engineer", company: "Symbiotic" },
              { title: "Head of Developer Relations", company: "Symbiotic" },
              {
                title: "Content Marketing",
                company: "Succinct",
                location: "San Francisco, CA, USA",
              },
              {
                title: "UI/UX Engineer",
                company: "MetaDAO",
                location: "San Francisco, CA, USA",
              },
              {
                title: "Founding Engineer",
                company: "MetaDAO",
                location: "San Francisco, CA, USA",
              },
            ].map((job, index) => (
              <li key={index} className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 flex justify-center items-center mr-4">
                  <div className="w-12 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">{job.title}</h4>
                  <p className="text-sm text-gray-600">
                    {job.company} {job.location && `| ${job.location}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
