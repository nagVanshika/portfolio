import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  RiJavascriptFill, RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiNodejsFill, 
  RiGitBranchFill, RiGithubFill, RiCloudFill, RiCommandLine
} from 'react-icons/ri';
import { 
  SiNextdotjs, SiExpress, SiMysql, SiMongodb, SiTensorflow, SiPytorch, 
  SiFramer, SiVite, SiTailwindcss, SiMui
} from 'react-icons/si';
import { FiCode, FiCpu, FiDatabase, FiLayers, FiZap, FiMousePointer, FiActivity } from 'react-icons/fi';
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: <RiJavascriptFill color="#f7df1e" /> },
      { name: "React.js", icon: <RiReactjsFill color="#61dafb" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
      { name: "React Native", icon: <TbBrandReactNative color="#61dafb" /> },
      { name: "HTML", icon: <RiHtml5Fill color="#e34f26" /> },
      { name: "CSS", icon: <RiCss3Fill color="#1572b6" /> }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <RiNodejsFill color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#fff" /> }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "LSTM", icon: <FiActivity color="#ff6f00" /> }
    ]
  },
  {
    category: "Tools & AI",
    skills: [
      { name: "Git", icon: <RiGitBranchFill color="#f05032" /> },
      { name: "GitHub", icon: <RiGithubFill color="#fff" /> },
      { name: "Anti-Gravity", icon: <FiZap color="#ff9f43" /> },
      { name: "Codex", icon: <FiCode color="#4fb8ff" /> },
      { name: "Lovable", icon: <FiLayers color="#7b5ff5" /> },
      { name: "Cursor", icon: <FiMousePointer color="#00e5a0" /> },
      { name: "Open Code", icon: <RiCommandLine color="#fff" /> },
      { name: "Emergent", icon: <FiCpu color="#00e5a0" /> },
      { name: "Cloud", icon: <RiCloudFill color="#4fb8ff" /> }
    ]
  }
];

const SkillPill = ({ name, icon }) => (
  <motion.div
    whileHover={{ 
      borderColor: 'var(--accent-green)', 
      color: 'var(--accent-green)',
      boxShadow: '0 0 15px rgba(0, 229, 160, 0.2)',
      y: -5
    }}
    style={{
      padding: '10px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.9)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      cursor: 'default',
      transition: 'all 0.3s var(--ease-cinematic)'
    }}
  >
    <span style={{ fontSize: '1.2rem', display: 'flex' }}>{icon}</span>
    {name}
  </motion.div>
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
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 15vw, 160px) 0',
        background: 'var(--bg-emerald)', // Deep green background
        zIndex: 5,
        overflow: 'hidden',
        position: 'relative' // Remove sticky for better visibility of scrolling content
      }}
    >
      <motion.div 
        className="container" 
        style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          width: '90%',
          padding: '40px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '40px',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
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
              fontSize: 'clamp(4rem, 12vw, 9rem)', 
              fontWeight: 800, 
              color: 'transparent',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--ff-display)',
              textTransform: 'uppercase',
              lineHeight: 0.9
            }}
          >
            Technical<br/>Stack
          </motion.h2>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: 'clamp(24px, 5vw, 40px)', 
          padding: '0 clamp(10px, 4vw, 20px)',
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
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px',
                gridColumn: cat.category === "Tools & AI" ? '1 / -1' : 'auto'
              }}
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
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {cat.skills.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 0 !important;
          }
          .skills-grid > div {
            gap: 12px !important;
          }
          /* Make pills slightly more compact on mobile */
          div[style*="padding: 10px 18px"] {
            padding: 8px 12px !important;
            font-size: 0.8rem !important;
            gap: 8px !important;
          }
          div[style*="font-size: 1.2rem"] {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
