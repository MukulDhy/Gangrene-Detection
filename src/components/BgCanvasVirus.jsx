import React, { useEffect, useRef } from "react";

const MyCanvasComponent = ({ classes }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const walkers = [];
    const colors = [
      "rgba(48, 137, 94, .1)",
      "rgba(86, 180, 255, .02)",
      "rgba(255, 0, 126, .1)",
      "rgba(255, 165, 20, .1)",
    ];

    function rand(max) {
      return Math.floor(max * Math.random());
    }

    class Walker {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
      }

      update(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    function setup() {
      const x = Math.floor(window.innerWidth / 2);
      const y = Math.floor(window.innerHeight / 2);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.lineWidth = 1;

      for (let i = 0; i < 500; i++) {
        walkers.push(new Walker(x, y, colors[rand(4)]));
      }
    }

    function drawEach(walker) {
      let x = walker.x,
        y = walker.y;

      switch (rand(4)) {
        case 0:
          if (walker.x < canvas.width) x += 5;
          break;
        case 1:
          if (walker.x > 0) x -= 5;
          break;
        case 2:
          if (walker.y < canvas.height) y += 5;
          break;
        case 3:
          if (walker.y > 0) y -= 5;
          break;
        default:
          break;
      }

      ctx.strokeStyle = walker.color;
      ctx.beginPath();
      ctx.moveTo(walker.x, walker.y);
      ctx.lineTo(x, y);
      ctx.stroke();

      walker.update(x, y);
    }

    function draw() {
      walkers.forEach(drawEach);
      requestAnimationFrame(draw);
    }

    setup();
    draw();
  }, []);

  return <canvas ref={canvasRef} className={classes} />;
};

export default MyCanvasComponent;
