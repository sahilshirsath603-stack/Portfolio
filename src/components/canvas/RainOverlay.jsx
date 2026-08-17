import React, { useEffect, useRef } from 'react';

export default function RainOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const rainCount = 140;
    const drops = [];

    for (let i = 0; i < rainCount; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 22 + 10,
        speed: Math.random() * 10 + 12,
        opacity: Math.random() * 0.35 + 0.1,
        // Pure Crimson Red Rain
        color: Math.random() > 0.3 ? 'rgba(255, 0, 60,' : 'rgba(220, 38, 38,',
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < rainCount; i++) {
        const d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.length * 0.2, d.y + d.length);
        ctx.strokeStyle = `${d.color}${d.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        d.y += d.speed;
        d.x -= d.speed * 0.2;

        if (d.y > height) {
          d.y = -d.length;
          d.x = Math.random() * width;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
}
