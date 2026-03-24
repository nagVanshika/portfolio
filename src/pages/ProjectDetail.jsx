import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import Lightbox from '../components/Lightbox';
import '../styles/variables.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) navigate('/');
  }, [project, navigate]);

  if (!project) return null;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'var(--ease-cinematic)' }}
      style={{ padding: '160px 8% 100px', minHeight: '100vh', backgroundColor: 'var(--bg-base)' }}
    >
      <div className="container" style={{ maxWidth: 'var(--container-max-width)' }}>
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '12px', 
          color: 'var(--text-muted)', 
          marginBottom: '48px', 
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'color 0.3s var(--ease-cinematic)'
        }} className="hover-white">
          <FiArrowLeft /> Back to Portfolio
        </Link>

        <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'inherit' }}>Portfolio</Link> 
          <span style={{ opacity: 0.3 }}>/</span> 
          <span>Projects</span> 
          <span style={{ opacity: 0.3 }}>/</span> 
          <span style={{ color: 'var(--text-primary)' }}>{project.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '100px', alignItems: 'start' }}>
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'var(--ease-cinematic)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
              <span style={{ 
                fontFamily: 'var(--ff-display)', 
                fontSize: '3.5rem', 
                fontStyle: 'italic', 
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                lineHeight: 1
              }}>{project.number}</span>
              <h1 style={{ 
                fontSize: 'clamp(3rem, 6vw, 5rem)', 
                color: '#fff', 
                fontFamily: 'var(--ff-display)',
                letterSpacing: 'var(--ff-letter-spacing-tight)',
                lineHeight: 1.1
              }}>{project.title}</h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
              <span className="label-sm" style={{ 
                padding: '6px 14px', 
                backgroundColor: 'var(--bg-surface-high)', 
                border: '1px solid var(--border-ghost)',
                borderRadius: '8px', 
                color: 'var(--text-secondary)' 
              }}>{project.status}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="label-sm" style={{ color: 'var(--primary)' }}>#{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: '#fff', marginBottom: '24px' }}>Overview</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 400 }}>{project.overview}</p>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: '#fff', marginBottom: '24px' }}>What Was Built</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.details}</p>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: '#fff', marginBottom: '24px' }}>Key Features</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {project.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * i), ease: 'var(--ease-cinematic)' }}
                    style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 700, fontStyle: 'italic', fontFamily: 'var(--ff-display)' }}>{i + 1}</span> 
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {project.hasLiveLink && (
              <motion.a
                href={project.liveUrl}
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 40px',
                  background: 'var(--accent-gradient)',
                  color: '#fff',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: '0 10px 30px rgba(182, 160, 255, 0.2)'
                }}
              >
                Launch Project <FiExternalLink />
              </motion.a>
            )}
          </motion.div>

          {/* Right Column: Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'var(--ease-cinematic)' }}
          >
            <h3 className="label-sm" style={{ color: '#fff', marginBottom: '40px' }}>Visual Gallery</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {Array.from({ length: project.screenshotCount }).map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                  style={{
                    backgroundColor: 'var(--bg-surface-low)',
                    border: '1px solid var(--border-ghost)',
                    borderRadius: '24px',
                    aspectRatio: '16/10',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    transition: 'border-color 0.3s var(--ease-cinematic)'
                  }}
                  className="gallery-item"
                >
                  <div style={{ textAlign: 'center', zIndex: 1 }}>
                    <span className="label-sm" style={{ color: 'var(--text-muted)' }}>Shot {index + 1}</span>
                  </div>
                  {/* Subtle Shimmer/Gradient Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        images={Array(project.screenshotCount).fill(null)} 
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.screenshotCount - 1))}
        onNext={() => setCurrentImageIndex((prev) => (prev < project.screenshotCount - 1 ? prev + 1 : 0))}
      />

      <style>{`
        .hover-white:hover { color: #fff !important; }
        .gallery-item:hover { border-color: rgba(255,255,255,0.2); }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetail;
