import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#080808',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Subtle Grid with Radial Fade */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--border-ghost) 1px, transparent 1px), linear-gradient(90deg, var(--border-ghost) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
        opacity: 0.15
      }} />

      {/* Large Purple Glow (Top-Right) */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(123, 95, 245, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      {/* Large Green Glow (Bottom-Left) */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(0, 229, 160, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      {/* Cinematic Texture Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
        opacity: 'var(--noise-opacity)',
        mixBlendMode: 'overlay',
        zIndex: 1
      }} />
    </div>
  );
};

export default BackgroundEffect;
