// GlowingButton.jsx
import React from 'react';
import './GlowingButton.css'; // Import custom CSS for styles that can't be handled by Tailwind
import { Link } from 'react-router-dom';

const GlowingButton = ({ text, onClick }) => {
  return (
    <Link to={"/dwd"} className="relative inline-block px-6 py-3 my-10 mx-auto text-lg font-bold uppercase transition-all duration-500 overflow-hidden text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-black focus:outline-none">
      <span className="absolute block w-full h-0.5 bg-gradient-to-r from-transparent to-blue-400"></span>
      <span className="absolute block w-0.5 h-full bg-gradient-to-t from-transparent to-blue-400"></span>
      <span className="absolute bottom-0 right-0 block w-full h-0.5 bg-gradient-to-l from-transparent to-blue-400"></span>
      <span className="absolute bottom-0 left-0 block w-0.5 h-full bg-gradient-to-b from-transparent to-blue-400"></span>
      {text}
    </Link>
  );
};

export default GlowingButton;
