import React, { useEffect, useRef } from "react";

const Rain = ({ children }: { children?: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Set initial canvas size
    resizeCanvas();


    // Procedural Rain
    const numDrops = 300;
    const drops: { x: number; y: number; length: number; speed: number }[] = [];

    const createDrop = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 15 + 5,
      speed: Math.random() * 15 + 5,
    });

    for (let i = 0; i < numDrops; i++) {
      drops.push(createDrop());
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);


      drops.forEach((drop, index) => {
        context.fillStyle = "#5d9afc";
        context.fillRect(drop.x, drop.y, 0.75, drop.length);

        drop.y += drop.speed;

        if (drop.y - drop.length > canvas.height) {
          drops[index] = createDrop();
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <canvas ref={canvasRef} />
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="h-[95vh]"/>
    </>
  );
};


export default Rain;