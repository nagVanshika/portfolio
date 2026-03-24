import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiLayers, FiZap, FiCode, FiSmartphone } from 'react-icons/fi';
import '../styles/variables.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cards = [
    { title: "CS Student & Dev", desc: "Computer Science student with hands-on startup experience", icon: <FiLayers />, color: "var(--bg-emerald)" },
    { title: "Startup Intern", desc: "Web Developer Intern at Carmaa Technologies — production-grade platforms", icon: <FiCode />, color: "var(--bg-emerald)" },
    { title: "Full Stack Proficiency", desc: "React, Next.js, Node.js & MERN — dashboards & real-time systems", icon: <FiZap />, color: "var(--bg-emerald)" },
    { title: "AI-Accelerated Dev", desc: "Leveraging AI tools to optimize performance & deliver quality solutions", icon: <FiSmartphone />, color: "var(--bg-emerald)" }
  ];

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="theme-white" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: 'var(--section-padding)',
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
        background: 'var(--bg-white)',
        zIndex: 0
      }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          width: '100%',
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          alignItems: 'center',
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale
        }}
        className="hero-grid"
      >
        {/* Left Column */}
        <div>
          {/* Status Pill */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(0, 229, 160, 0.1)',
              border: '1px solid rgba(0, 229, 160, 0.2)',
              borderRadius: '100px',
              marginBottom: '32px'
            }}
          >
            <span className="glow-dot"></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '0.05em' }}>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name Display */}
          <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
            <h1 style={{ 
              fontSize: 'clamp(5rem, 10vw, 9rem)', 
              lineHeight: '1', 
              fontFamily: 'var(--ff-display)',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              margin: 0
            }}>
              VANSHIKA
            </h1>
            <h1 style={{ 
              fontSize: 'clamp(5rem, 10vw, 9rem)', 
              lineHeight: '1.1', 
              fontFamily: 'var(--ff-display)',
              color: 'transparent',
              WebkitTextStroke: '2px var(--text-primary)',
              textTransform: 'uppercase',
              margin: 0
            }}>
              NAG
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              maxWidth: '500px',
              marginBottom: '48px',
              fontWeight: 500
            }}
          >
            Full-stack developer student at Carmaa Tech. Dedicated to crafting pixel-perfect, performance-driven digital experiences with modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px' }}>
            <motion.a
              href="#projects"
              style={{
                padding: '18px 40px',
                background: 'var(--gradient-purple-blue)',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 20px -5px rgba(123, 95, 245, 0.3)'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(123, 95, 245, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Work <FiArrowUpRight fontSize="1.2rem" />
            </motion.a>
            <motion.a
              href="#contact"
              style={{
                padding: '18px 40px',
                background: 'transparent',
                border: '2px solid var(--text-primary)',
                borderRadius: '100px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
              whileHover={{ background: 'var(--text-primary)', color: 'var(--bg-white)' }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Grid Layout Container */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(250px, 1fr) minmax(250px, 1fr)',
            gap: '24px' 
          }}>
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="hero-card"
                style={{
                  background: card.color,
                  borderRadius: '32px',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  border: '1px solid rgba(0, 229, 160, 0.05)',
                  boxShadow: `0 10px 30px -10px rgba(0, 66, 58, 0.4)`,
                  transition: 'all 0.4s var(--ease-cinematic)'
                }}
                whileHover={{ 
                  y: -12, 
                  boxShadow: `0 30px 60px -15px rgba(0, 66, 58, 0.6)`,
                  filter: 'brightness(1.1)',
                  borderColor: 'rgba(0, 229, 160, 0.2)'
                }}
              >
                {/* Decorative background glow */}
                <div style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  filter: 'blur(60px)',
                  pointerEvents: 'none'
                }} />

                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '18px', 
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.5rem',
                  marginBottom: '8px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {card.icon}
                </div>
                
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: '#fff', 
                    marginBottom: '12px',
                    fontFamily: 'var(--ff-display)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6',
                    fontWeight: 500
                  }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .hero-card h3, .hero-card p {
          color: #ffffff !important;
        }
        .glow-dot {
          width: 8px;
          height: 8px;
          background: #00e5a0;
          border-radius: 50%;
          box-shadow: 0 0 10px #00e5a0;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-grid div { align-items: center; }
          div[style*="flexDirection: column"] { align-items: center !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
