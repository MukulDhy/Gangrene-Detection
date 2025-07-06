import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

class GlobeComponent extends Component {
  componentDidMount() {
    this.initScene();
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
    // Additional cleanup if needed
  }

  initScene = () => {
    // ... initialize your scene here, similar to your provided JS code
    // Make sure to use this.canvas3D, this.canvas2D, this.popupEl instead of query selectors
  };

  // ... other methods like createOrbitControls, createGlobe, etc.

  render() {
    return (
      <div className="page">
        <div className="title">click to add a pointer</div>
        <div className="globe-wrapper">
          <canvas ref={(el) => (this.canvas3D = el)} id="globe-3d"></canvas>
          <canvas
            ref={(el) => (this.canvas2D = el)}
            id="globe-2d-overlay"
          ></canvas>
          <div ref={(el) => (this.popupEl = el)} id="globe-popup-overlay">
            <div className="globe-popup"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobeComponent;
