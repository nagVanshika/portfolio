import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/variables.css';

const educationData = [
  {
    institution: 'Graphic Era University, Dehradun',
    degree: 'B.Tech in Computer Science',
    duration: 'Sept 2022 – Present',
    badge: 'Current'
  },
  {
    institution: 'Lucknow Public School',
    degree: 'CBSE Class 12th',
    duration: '2021'
  },
  {
    institution: 'Lucknow Public School',
    degree: 'CBSE Class 10th',
    duration: '2019'
  }
];

const TimelineNode = ({ item }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    }}
    whileHover={{ y: -8, transition: { duration: 0.4 } }}
    style={{
      flex: 1,
      minWidth: 'min(100%, 320px)',
      padding: 'clamp(24px, 5vw, 40px)',
      background: 'var(--bg-base)',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      transition: 'transform 0.4s var(--ease-cinematic)'
    }}
  >
    {/* Animated Gradient Border Overlay */}
    <div className="gradient-border-mask"></div>
    <div className="gradient-border-animation"></div>
    
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', gap: '8px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700, lineHeight: 1.2, fontFamily: 'var(--ff-display)', letterSpacing: 'var(--ff-letter-spacing-tight)' }}>{item.institution}</h3>
        {item.badge && (
          <span className="label-sm" style={{
            padding: '6px 12px',
            background: 'rgba(74, 222, 128, 0.05)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            color: '#4ade80',
            borderRadius: '100px',
          }}>
            {item.badge}
          </span>
        )}
      </div>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 400 }}>{item.degree}</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', position: 'relative', zIndex: 2 }}>
      <span className="label-sm" style={{ color: 'var(--text-muted)' }}>{item.duration}</span>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="section-padding theme-black section-overlap" style={{ zIndex: 2 }}>
      <div className="container" style={{ maxWidth: 'var(--container-max-width)' }}>
        <motion.div 
          style={{ marginBottom: '64px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-sm" style={{ marginBottom: '16px', display: 'block' }}>Academic Journey</span>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            letterSpacing: 'var(--ff-letter-spacing-tight)',
            fontFamily: 'var(--ff-display)' 
          }}>
            Education
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {educationData.map((item, index) => (
            <TimelineNode key={index} item={item} />
          ))}
        </motion.div>

        {/* Animated Doodle */}
        <motion.img
          src="/images/doodle1.png"
          alt="Doodle"
          className="education-doodle"
          initial={{ rotate: 0, y: 0 }}
          animate={{ 
            rotate: [0, 15, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '4%',
            width: 'clamp(140px, 25vw, 280px)',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 1,
            transformOrigin: 'bottom center'
          }}
        />
      </div>
    </section>
  );
};

const styles = `
  .gradient-border-animation {
    position: absolute;
    inset: -50%;
    background: conic-gradient(
      from 0deg,
      transparent,
      var(--accent-green),
      var(--accent-blue),
      var(--accent-purple),
      var(--accent-green),
      transparent
    );
    animation: rotate-gradient 4s linear infinite;
    z-index: 0;
    opacity: 0.4;
    filter: blur(20px);
  }

  .gradient-border-mask {
    position: absolute;
    inset: 1px;
    background: var(--bg-base);
    border-radius: 23px;
    z-index: 1;
  }

  @keyframes rotate-gradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .theme-black .gradient-border-mask {
    background: #0a0a0a;
  }

  @media (max-width: 768px) {
    .education-doodle {
      display: none !important;
    }
  }
`;

const EducationWithStyles = () => (
  <>
    <style>{styles}</style>
    <Education />
  </>
);

export default EducationWithStyles;
