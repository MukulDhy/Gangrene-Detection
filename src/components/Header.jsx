import React, { useState } from "react";
import MyCanvasComponent from "./BgCanvasVirus";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "react-modal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      <MyCanvasComponent
        classes={"w-full h-[600px] absolute -top-16 rounded-3xl rounded-b-full"}
      ></MyCanvasComponent>
      <div className="text-center text-white py-16 pt-0 z-10 font-effect-neon">
        <h1 className="text-4xl md:text-6xl font-bold px-4">
          Gangrene: A Global Health Concern
        </h1>
        <p className="text-lg md:text-2xl mt-2 px-4">
          Gangrene is a condition where the blood supply to a part of the body
          is cut off, causing the tissue to die.
        </p>
        <p className="text-lg md:text-2xl px-4">
          It can affect any part of the body, but it is most common in the
          fingers, toes, and feet.
        </p>
        <Link to={"/upload"}>
          <button
            id="trigger"
            className="btn btn-lg btn-secondary translate-y-8 text-2xl font-bold border-4 p-3 border-white mr-3"
          >
            Try it Now
          </button>
        </Link>

        {/* <Link to={"/upload"}> */}
        <button
          id="trigger"
          onClick={openModal}
          className="btn btn-lg btn-secondary translate-y-8 text-2xl font-bold border-4 p-3 border-white ml-3"
        >
          Reasearch Paper
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="text-black my-6">
            <h2>Full-Screen Pop-Up</h2>
            <p>This is your full-screen pop-up content.</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
