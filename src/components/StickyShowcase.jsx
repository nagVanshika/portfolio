import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyShowcase = ({ items }) => {
  return (
    <div style={{ position: 'relative' }}>
      {items.map((item, index) => (
        <ShowcaseItem key={index} item={item} index={index} total={items.length} />
      ))}
    </div>
  );
};

const ShowcaseItem = ({ item, index, total }) => {
  const { scrollYProgress } = useScroll();
  
  // Calculate relative progress for this specific item
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3]);

  return (
    <div style={{ height: '100vh', display: 'flex', gap: '80px', alignItems: 'center' }}>
      <motion.div 
        style={{ flex: 1, opacity: textOpacity }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {item.category}
        </span>
        <h3 style={{ fontSize: '3rem', color: '#fff', marginTop: '16px', marginBottom: '8px', letterSpacing: '-0.04em' }}>
          {item.title}
        </h3>
        {item.company && (
          <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '24px', opacity: 0.8 }}>
            {item.company}
          </div>
        )}
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {item.description}
        </p>
      </motion.div>

      <div style={{ flex: 1.5, position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity,
            scale
          }}
        >
          {item.visual}
        </motion.div>
      </div>
    </div>
  );
};

export default StickyShowcase;
