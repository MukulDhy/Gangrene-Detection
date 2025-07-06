import React from "react";
import "./loder.css";
const AnimatedSpinner = () => {
  return (
    <>
      <div class="animated-spinner">
        <div class="out animated-spinner">
          <div class="fade-in">
            <div class="container">
              <div class="one common"></div>
              <div class="two common"></div>
              <div class="three common"></div>
              <div class="four common"></div>
              <div class="five common"></div>
              <div class="six common"></div>
              <div class="seven common"></div>
              <div class="eight common"></div>
            </div>
            <div class="bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedSpinner;
