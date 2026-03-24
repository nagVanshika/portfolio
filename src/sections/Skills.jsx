import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/variables.css';

const skillCategories = [
  {
    category: "Frontend",
    skills: ["JavaScript", "React.js", "Next.js", "React Native", "HTML", "CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    category: "Machine Learning",
    skills: ["LSTM"]
  },
  {
    category: "Tools & AI",
    skills: ["Git", "GitHub", "Anti-Gravity", "Codex", "Lovable", "Cursor", "Open Code", "Emergent", "Cloud"]
  }
];

const SkillPill = ({ skill }) => (
  <motion.span
    whileHover={{ 
      borderColor: 'var(--accent-green)', 
      color: 'var(--accent-green)',
      boxShadow: '0 0 10px rgba(0, 229, 160, 0.1)'
    }}
    style={{
      padding: '6px 14px',
      fontSize: '0.8rem',
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.9)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      cursor: 'default',
      transition: 'all 0.3s ease'
    }}
  >
    {skill}
  </motion.span>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-overlap" 
      style={{ 
        position: 'sticky',
        top: 0,
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-emerald)', // Deep green background
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      <motion.div 
        className="container" 
        style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          width: '100%',
          y,
          opacity,
          scale
        }}
      >
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
          >
            Core Skills
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontWeight: 800, 
              color: '#fff', 
              letterSpacing: 'var(--ff-letter-spacing-tight)',
              fontFamily: 'var(--ff-display)',
              textTransform: 'uppercase'
            }}
          >
            Technical Stack
          </motion.h2>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '24px 40px', /* Reduced gap */
          padding: '0 20px', /* Reduced padding */
          position: 'relative'
        }}>
          {/* Background Depth Gradient */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(0, 229, 160, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: -1
          }} />
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '3px', height: '12px', background: 'var(--accent-green)', borderRadius: '100px' }} />
                <h3 style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--accent-green)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em' 
                }}>
                  {cat.category}
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {cat.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
