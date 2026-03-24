import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import '../styles/variables.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 20, stiffness: 200, restDelta: 0.001 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  
  const ringX = useSpring(0, { damping: 15, stiffness: 100 });
  const ringY = useSpring(0, { damping: 15, stiffness: 100 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0)',
          borderColor: isHovering ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255, 255, 255, 0.2)',
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
};

export default CustomCursor;
