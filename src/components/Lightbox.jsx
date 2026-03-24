import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import '../styles/variables.css';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 7, 14, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            padding: '40px'
          }}
          onClick={onClose}
        >
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', fontSize: '2.5rem', zIndex: 2001 }}
          >
            <HiX />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            style={{ position: 'absolute', left: '2rem', color: '#fff', fontSize: '3rem', zIndex: 2001 }}
          >
            <HiChevronLeft />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder Image in Lightbox */}
            <div style={{
              width: '1200px',
              maxWidth: '90vw',
              aspectRatio: '16/9',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--ff-display)' }}>Screenshot {currentIndex + 1}</span>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{/* Replace with actual screenshot */}</p>
              </div>
            </div>
          </motion.div>

          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            style={{ position: 'absolute', right: '2rem', color: '#fff', fontSize: '3rem', zIndex: 2001 }}
          >
            <HiChevronRight />
          </button>

          <div style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
