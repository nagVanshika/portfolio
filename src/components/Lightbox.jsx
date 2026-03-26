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
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ 
              maxWidth: '92vw', 
              maxHeight: '85vh', 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'grab'
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              const swipeThreshold = 50;
              if (swipe < -swipeThreshold) {
                onNext();
              } else if (swipe > swipeThreshold) {
                onPrev();
              }
            }}
            whileTap={{ cursor: 'grabbing' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[currentIndex]} 
              alt={`Project screenshot ${currentIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                pointerEvents: 'none' // Prevent image from interfering with drag
              }}
            />
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
