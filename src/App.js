// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs"; // Create AboutUs.js similarly
import Doctors from "./components/Doctors"; // Create Doctors.js similarly
import Services from "./components/Services"; // Create Services.js similarly
import ContactUs from "./components/ContactUs"; // Create ContactUs.js similarly
import TopBar from "./components/TopBar";
import AuthPage from "./components/AuthPage";
import UploadScreen from "./View/ImageCroper";
import ResultScreen from "./View/ResultSreen";
import LogSign from "./components/Auth/LogSign"
function App() {
  return (
    <>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LogSign />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </>
  );
}

export default App;
