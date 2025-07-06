// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import 'animate.css';
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import treatmentImage from '../assets/doctors.png';

function HomePage() {
  const [runningNumber, setRunningNumber] = useState(100000);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Start fade-in animation after a short delay
    setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // Increment the running number
    const interval = setInterval(() => {
      setRunningNumber((prevNumber) => prevNumber + 1);
    }, 100);

    // Stop the interval after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={`relative ${fadeIn ? 'animate-fade-in' : ''}`}>
      {/* <TopBar /> */}
      <div className="text-blue-500 font-bold p-4 absolute -translate-y-16 translate-x-6 text-4xl">
        Your Health, Our Priority.
      </div>
      <div className="text-6xl font-bold text-left pl-[200px] mt-24">
        <div>Take World's</div>
        <div className="ml-5 pl-20">Best Quality</div>
        <div className="pl-56 ">Treatment</div>
        <div className="mb-9 ml-[560px] -mt-[200px] text-lg text-gray-700">
          <div>
            Gangrene is a serious condition causing the death of body tissue,
          </div>
          <div>
            often due to a lack of blood flow or a bacterial infection. Early
          </div>
          <div>
            detection and proper medical care are crucial for effective
            treatment.
          </div>
        </div>
        <div className="mt-3 ml-[550px]">
          <img
            src={treatmentImage}
            alt="Treatment"
            className="w-[660px] h-[390px]"
          />
        </div>
        <div className="-mt-40 ml-[20px] mr-[884px] mb-20 p-4 h-[300px] bg-blue-950 text-white animate__animated animate__slideInUp">
          <p className="text-4xl ml-36 mt-10">{runningNumber}</p>
          <p className="text-2xl ml-24">Gangrene Patients</p>
          <p className="text-4xl ml-40 mt-10"> 100+</p>
          <p className="text-2xl ml-24">Quality Doctors</p>
        </div>
        <div className="-mt-52 ml-[620px] mb-9 text-blue-500 text-8xl animate__animated animate__fadeIn">
          Try It Now
        </div>
      </div>
      {/* Add other components/content here */}
    </div>
  );
}

export default HomePage;
