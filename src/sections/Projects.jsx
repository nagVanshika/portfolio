import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import '../styles/variables.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: "Caarmaa Admin Dashboard",
      desc: "Comprehensive admin panel for a mobility platform managing operations, users, and real-time services.",
      tags: ["React", "Node.js", "MongoDB"],
      id: "01"
    },
    {
      title: "Caarmaa Car Care Website",
      desc: "Customer-facing service website with highly refined UI, advanced interactions, and full responsiveness.",
      tags: ["React", "CSS", "Lovable"],
      id: "02"
    },
    {
      title: "Caarmaa Tech Corporate Website",
      desc: "Official corporate website for Caarmaa Technologies Pvt. Ltd., showcasing innovation and solutions.",
      tags: ["React", "Lovable", "Responsive Design"],
      id: "03"
    },
    {
      title: "Caarmaa Billing Dashboard",
      desc: "Internal finance dashboard tracking revenue, expenses, and cash flow with detailed analytical views.",
      tags: ["React", "Node.js", "MongoDB"],
      id: "04"
    },
    {
      title: "Med Inventory System",
      desc: "Real-time medical inventory system with ML-powered demand forecasting using LSTM.",
      tags: ["MERN Stack", "LSTM", "Python"],
      id: "05"
    }
  ];

  return (
    <section id="projects" className="theme-black section-overlap" style={{ zIndex: 4 }}>
      <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>
        
        {/* Two Column Layout */}
        <div className="proj-scroll-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: '80px', alignItems: 'start' }}>
          
          {/* Left Column (Sticky) */}
          <div className="proj-left" style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)', alignSelf: 'start' }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
            >
              Selected Work
            </motion.span>
            
            <h3 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', fontFamily: 'var(--ff-display)', color: '#fff', lineHeight: '0.9', marginBottom: '24px', textTransform: 'uppercase' }}>
              FEATURED<br/>PROJECTS
            </h3>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '60px', maxWidth: '400px' }}>
              A collection of production-grade projects built at Carmaa Technologies and beyond, focusing on scalability and user experience.
            </p>
          </div>

          {/* Right Column (Scroll Stack) */}
          <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={i}
                data-index={i + 1}
                ref={el => projectRefs.current[i] = el}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i % 2 * 0.08 }}
                className="project-card"
                style={{
                  background: '#0f0f0f',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: '32px',
                  padding: '2px', // Gap for outline
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  zIndex: 1
                }}
                whileHover={{ 
                  y: -8,
                  x: 5,
                  scale: 1.01,
                  boxShadow: '0 20px 40px -20px rgba(0, 229, 160, 0.2)'
                }}
              >
                {/* Opaque Inner Shield for Readability */}
                <div style={{
                  background: '#0f0f0f',
                  borderRadius: '31px',
                  padding: 'clamp(24px, 6vw, 46px)',
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'background 0.3s ease'
                }}>
                  {/* Header Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(24px, 5vw, 40px)' }}>
                    <span style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontFamily: 'var(--ff-display)', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>{project.id}</span>
                    <div style={{ padding: '6px 14px', background: 'rgba(0, 229, 160, 0.1)', border: '1px solid rgba(0, 229, 160, 0.2)', borderRadius: '100px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-green)', letterSpacing: '0.1em' }}>PRODUCTION</span>
                    </div>
                  </div>

                {/* Main Content */}
                <h4 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontFamily: 'var(--ff-display)', color: '#fff', marginBottom: '16px', textTransform: 'uppercase' }}>{project.title}</h4>
                <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>{project.desc}</p>

                  {/* Footer Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-ghost)', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/project/${project.id === "01" ? "caarmaa-admin" : project.id === "02" ? "caarmaa-car-care" : project.id === "03" ? "caarmaa-tech" : project.id === "04" ? "caarmaa-billing" : "med-inventory"}`}
                      className="view-project-btn"
                      style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginLeft: 'auto' }}
                    >
                      View Details <FiExternalLink />
                    </Link>
                  </div>
                </div>

                {/* Subtle Background Accent */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-10%', 
                  right: '-10%', 
                  width: '300px', 
                  height: '300px', 
                  background: 'radial-gradient(circle, rgba(123, 95, 245, 0.03), transparent 70%)',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            ))}
          </div>

          <div className="mobile-swipe-hint" style={{ 
            display: 'none', 
            textAlign: 'center', 
            marginTop: '-10px', 
            marginBottom: '40px',
            color: 'var(--accent-green)', 
            fontSize: '0.8rem', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em' 
          }}>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Swipe to see more <FiArrowRight />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .project-card::before {
          content: '';
          position: absolute;
          inset: -1.5px;
          background: linear-gradient(90deg, #00e5a0, #7b5ff5, #4fb8ff, #ff9f43, #00e5a0);
          background-size: 300% 300%;
          z-index: -1;
          border-radius: 33px;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: gradient-move 4s linear infinite;
        }
        .project-card:hover::before {
          opacity: 1;
        }
        .project-card:hover .project-card-inner {
          background: #0a0a0a; /* Darker background on hover for contrast */
        }
        .project-card:hover h4,
        .project-card:hover p,
        .project-card:hover a {
          color: #ffffff; /* Ensure text is white on hover */
        }
        .project-card:hover span[style*="WebkitTextStroke"] {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); /* Boost stroke contrast */
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 1024px) {
          .proj-scroll-wrap { grid-template-columns: 1fr !important; gap: 48px !important; }
          .proj-left { position: relative !important; top: 0 !important; margin-bottom: 48px; text-align: center; }
          .proj-left p { margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 640px) {
          .projects-list {
            flex-direction: row !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 20px !important;
            margin: 0 -20px !important;
            padding: 40px 20px !important;
            scrollbar-width: none;
            overflow-y: visible !important;
          }
          .projects-list::-webkit-scrollbar {
            display: none;
          }
          .mobile-swipe-hint {
            display: block !important;
          }
          .project-card { 
            width: 100% !important; 
            min-width: calc(100vw - 48px) !important;
            scroll-snap-align: center !important;
          }
          .view-project-btn { width: 100%; justify-content: center; padding: 12px; border: 1px solid rgba(255,255,255,0.1); borderRadius: 12px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
