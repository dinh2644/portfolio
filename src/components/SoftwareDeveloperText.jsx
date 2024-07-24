import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const SoftwareDeveloperText = () => {
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      textRef.current.style.setProperty('--x', `${x}px`);
      textRef.current.style.setProperty('--y', `${y}px`);
    };

    const element = textRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div 
      className="text-center sweCaption sparkle-effect"
      ref={textRef}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      Software Developer
    </div>
  );
};

export default SoftwareDeveloperText;