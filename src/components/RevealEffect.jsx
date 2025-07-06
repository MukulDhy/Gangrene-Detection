// RevealEffect.js

import React, { useEffect } from "react";
import { TweenMax, Power1 } from "gsap";
import * as THREE from "three";

import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const RevealEffect = () => {
  let renderer, scene, camera;
  const objectWidth = 12;

  
  const init = () => {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
      );
    camera.position.z = 75;

    scene = new THREE.Scene();

    document
      .getElementById("trigger")
      .addEventListener("click", startTransition);

      initScene();
      animate();
    };
    
    const initScene = () => {
    initLights();
    initObjects();
  };

  const initLights = () => {
    scene.add(new THREE.AmbientLight(0x808080));
    const light = new THREE.PointLight(0xffffff);
    light.position.z = 100;
    scene.add(light);
  };

  const initObjects = () => {
    const geometry = new THREE.BoxGeometry(objectWidth, objectWidth, 3);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
};

useEffect(() => {
  init();
}, []);
  const startTransition = () => {
    TweenMax.to(camera.position, 1, {
      z: 150,
      ease: Power1.easeInOut,
      onComplete: goToNextScreen,
    });
  };

  const goToNextScreen = () => {
    // Add your code to navigate to the next screen here
    console.log("Navigate to the next screen");
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  return (
    <div className="text-center">
      <div className="cover-container mx-auto">
        <main className="inner cover">
          <h1 className="cover-heading">Simple 3D Reveal Effect</h1>
          <p className="lead">
            This simple effect is made with ThreeJS and TweenMax.
          </p>
          <p className="lead">
            <button id="trigger" className="btn btn-lg btn-secondary">
              Trigger
            </button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default RevealEffect;
