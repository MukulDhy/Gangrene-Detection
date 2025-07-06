// AboutUs.js

import React, { useState } from "react";

const AboutUs = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [consultationBlockOpen, setConsultationBlockOpen] = useState(false);
  const [secondBlockOpen, setSecondBlockOpen] = useState(false);
  const [thirdBlockOpen, setThirdBlockOpen] = useState(false);

  const handleBlockClick = (blockNumber) => {
    setSelectedBlock(blockNumber);
  };

  return (
    <div className="flex max-w-3xl mx-auto px-8 gap-10">
      <div className="w-[640px] mt-40 -ml-80 ">
        <img
          src="https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/Layer-1200.png"
          alt="Your Alt Text"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-1/2">
        {/* Content for the right side of the page */}
        <h1 className="text-5xl font-bold mb-4 mt-16 ml-1 text-black">
          About Us
        </h1>
        <p className="text-lg text-blue-500 ml-2">Professional Care</p>
        <p className="text-lg text-gray-700 mt-4 ml-1 -mr-36">
          At our healthcare center, we are committed to providing professional
          care and leveraging advanced technologies to combat health challenges.
          Gangrene, a serious condition involving tissue death, is one of the
          issues we address through personalized treatments and innovative
          solutions.
        </p>

        {/* Consultation Block */}
        <div
          className={`mb-4 w-[345px] ${
            selectedBlock === 1 ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          <button
            className="flex items-center text-black p-5 rounded-md mt-10"
            onClick={() => {
              setConsultationBlockOpen(!consultationBlockOpen);
              setSecondBlockOpen(false);
              setThirdBlockOpen(false);
              handleBlockClick(1);
            }}
          >
            Gangrene Identification {consultationBlockOpen ? "▼" : "▼"}
          </button>
          {consultationBlockOpen && (
            <div className="ml-4 text-gray-700">
              "Our website quickly spots gangrene by looking at pictures you
              upload or take. It makes identifying it easy and fast."
            </div>
          )}
        </div>

        {/* Second Block */}
        <div
          className={`mb-4 w-[345px] ${
            selectedBlock === 2 ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          <button
            className="flex items-center text-black p-5 rounded-md mt-4"
            onClick={() => {
              setSecondBlockOpen(!secondBlockOpen);
              setConsultationBlockOpen(false);
              setThirdBlockOpen(false);
              handleBlockClick(2);
            }}
          >
            Medical Report {secondBlockOpen ? "▼" : "▼"}
          </button>
          {secondBlockOpen && (
            <div className="ml-4 text-gray-700">
              "Create medical reports effortlessly on our platform, and easily
              share them with your doctor for professional consultations."
            </div>
          )}
        </div>

        {/* Third Block (For demonstration) */}
        <div
          className={`mb-4 w-[345px] ${
            selectedBlock === 3 ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          <button
            className="flex items-center text-black p-5 rounded-md mt-4"
            onClick={() => {
              setThirdBlockOpen(!thirdBlockOpen);
              setSecondBlockOpen(false);
              setConsultationBlockOpen(false);
              handleBlockClick(3);
            }}
          >
            Find the Right Doctor {thirdBlockOpen ? "▼" : "▼"}
          </button>
          {thirdBlockOpen && (
            <div className="ml-4 text-gray-700 p-2">
              "Connect patients with the right doctor for their specific issue,
              making the search simple and effective."
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;
