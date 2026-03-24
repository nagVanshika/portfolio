import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/variables.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      style={{
        width: 'var(--card-width, 340px)',
        height: 'var(--card-height, 460px)',
        padding: 'var(--card-padding, 40px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        background: 'var(--bg-surface-low)',
        border: '1px solid var(--border-ghost)',
        borderRadius: '24px',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.6s var(--ease-cinematic)'
      }}
      className="project-card-responsive"
    >
      {/* Dynamic Ambient Glow on Hover */}
      <div className="hover-glow" style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle at center, ${project.accentColor}10 0%, transparent 70%)`,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.6s var(--ease-cinematic)',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <span className="label-sm" style={{ fontStyle: 'italic', opacity: 0.5 }}>
            {project.number}
          </span>
          <span className="label-sm" style={{
            fontSize: '0.625rem',
            padding: '6px 12px',
            backgroundColor: 'var(--bg-surface-high)',
            borderRadius: '100px',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-ghost)'
          }}>
            {project.category}
          </span>
        </div>

        <h3 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
          color: '#fff', 
          marginBottom: '16px',
          fontFamily: 'var(--ff-display)',
          letterSpacing: 'var(--ff-letter-spacing-tight)'
        }}>{project.title}</h3>
        <p style={{ 
          fontSize: '0.9375rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.6,
          fontWeight: 400
        }}>{project.teaser}</p>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              fontSize: '0.625rem',
              color: 'var(--text-secondary)',
              padding: '4px 12px',
              background: 'var(--bg-surface-high)',
              borderRadius: '100px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/project/${project.id}`} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: '#fff', 
          fontWeight: 700, 
          fontSize: '0.875rem',
          transition: 'gap 0.3s var(--ease-cinematic)'
        }} className="view-link">
          View Project <FiArrowRight style={{ transition: 'transform 0.3s var(--ease-cinematic)' }} />
        </Link>
      </div>

      <style>{`
        .project-card-responsive {
          --card-width: 400px;
          --card-height: 520px;
          --card-padding: 40px;
        }
        @media (max-width: 768px) {
          .project-card-responsive {
            --card-width: 320px;
            --card-height: 460px;
            --card-padding: 28px;
          }
        }
        .project-card-responsive:hover {
          background: var(--bg-surface) !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .project-card-responsive:hover .hover-glow {
          opacity: 1;
        }
        .project-card-responsive:hover .view-link {
          gap: 12px !important;
        }
        .project-card-responsive:hover .view-link svg {
          transform: translateX(4px);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
