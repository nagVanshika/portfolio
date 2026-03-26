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
  }, [id]);

  if (!project) {
    return (
      <div style={{ padding: '160px 8%', backgroundColor: '#000', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', marginBottom: '24px' }}>Project Not Found</h1>
        <Link to="/" style={{ color: 'var(--accent-green)', textDecoration: 'none', fontWeight: 600 }}>Back to Portfolio</Link>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ padding: 'clamp(100px, 15vw, 160px) var(--container-px) 100px', minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="container" style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>
        <Link to="/#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }} className="hover-white">
          <FiArrowLeft /> Back to Portfolio
        </Link>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'start' }}>
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 24px)', marginBottom: '40px', flexWrap: 'wrap' }}>
              <span style={{ 
                fontFamily: 'var(--ff-display)', 
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', 
                fontStyle: 'italic', 
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                lineHeight: 1
              }}>{project.number}</span>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
                color: '#fff', 
                fontFamily: 'var(--ff-display)',
                letterSpacing: 'var(--ff-letter-spacing-tight)',
                lineHeight: 1.1,
                margin: 0
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
                {project.tags?.map(tag => (
                  <span key={tag} className="label-sm" style={{ color: 'var(--accent-green)', border: '1px solid rgba(0, 229, 160, 0.2)', padding: '4px 12px', borderRadius: '4px', background: 'rgba(0, 229, 160, 0.05)' }}>#{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: 'var(--accent-green)', marginBottom: '24px' }}>Overview</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.overview}</p>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: 'var(--accent-green)', marginBottom: '24px' }}>Tech Specs</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.technicalDetails}</p>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: 'var(--accent-green)', marginBottom: '24px' }}>The Build</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.details}</p>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <h3 className="label-sm" style={{ color: 'var(--accent-green)', marginBottom: '24px' }}>Key Features</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
                {project.features?.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * i) }}
                    style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                  >
                    <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontStyle: 'italic', fontFamily: 'var(--ff-display)' }}>{i + 1}</span> 
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {project.hasLiveLink && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '18px 32px',
                  background: 'var(--accent-gradient)',
                  color: '#fff',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(182, 160, 255, 0.2)',
                  width: 'fit-content'
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
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="label-sm" style={{ color: '#fff', marginBottom: '40px' }}>{project.isLiveProject ? 'Live Preview' : 'Visual Gallery'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {project.isLiveProject && project.liveUrl ? (
                <div style={{
                  backgroundColor: 'var(--bg-surface-low)',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: '24px',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  position: 'relative',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                }}>
                  <iframe 
                    src={project.liveUrl} 
                    title={`${project.title} live preview`}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                  {/* Subtle overlay to prevent interaction issues while scrolling the page */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
                    pointerEvents: 'none',
                    zIndex: 10
                  }} />
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      right: '24px',
                      padding: '10px 20px',
                      background: 'var(--accent-green)',
                      color: '#000',
                      borderRadius: '100px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      zIndex: 20,
                      boxShadow: '0 4px 15px rgba(0, 229, 160, 0.3)'
                    }}
                  >
                    Open Full Site
                  </a>
                </div>
              ) : project.images && project.images.length > 0 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(0)}
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
                    transition: 'border-color 0.3s'
                  }}
                  className="gallery-item featured"
                >
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} featured screenshot`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {/* Overlay for multiple images */}
                  {project.images.length > 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '24px',
                      right: '24px',
                      padding: '12px 20px',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>View Gallery</span>
                      <span style={{ opacity: 0.6 }}>({project.images.length} images)</span>
                    </div>
                  )}

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
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        images={project.images || []} 
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((p) => (p > 0 ? p - 1 : (project.images?.length || 1) - 1))}
        onNext={() => setCurrentImageIndex((p) => (p < (project.images?.length || 1) - 1 ? p + 1 : 0))}
      />

      <style>{`
        .hover-white:hover { color: #fff !important; }
        .gallery-item:hover { border-color: rgba(255,255,255,0.2); }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetail;
