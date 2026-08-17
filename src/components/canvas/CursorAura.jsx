import React, { useEffect, useState } from 'react';

export default function CursorAura() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-35 bg-gradient-to-r from-[#ff003c] via-[#dc2626] to-[#991b1b]"
        style={{
          left: `${pos.x - 225}px`,
          top: `${pos.y - 225}px`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
