import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../styles/variables.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', type: 'scroll' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, link) => {
    if (link.type === 'scroll') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '16px 8%' : '24px 8%',
        background: isScrolled ? 'rgba(var(--text-primary-rgb), 0.05)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border-ghost)' : 'none',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s var(--ease-cinematic)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'var(--text-primary)'
      }}
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          fontFamily: 'var(--ff-display)',
          letterSpacing: '0.05em',
          cursor: 'pointer'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        VN<span style={{ color: 'var(--accent-green)' }}>.</span>
      </motion.div>

      {/* Desktop Links (Centered) */}
      <div 
        className="desktop-only"
        style={{
          display: 'flex',
          gap: '32px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            style={{
              textDecoration: 'none',
              color: 'var(--accent-green)',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-green)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* CTA Button (Solid Green) */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="desktop-only"
        style={{
          padding: '12px 32px',
          background: 'var(--accent-green)',
          borderRadius: '100px',
          color: '#000',
          fontSize: '0.95rem',
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 229, 160, 0.2)'
        }}
        whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
        whileTap={{ scale: 0.95 }}
      >
        CONTACT
      </motion.a>

      {/* Mobile Toggle */}
      <div 
        className="mobile-only"
        onClick={() => setIsMobileMenuOpen(true)}
        style={{ color: '#fff', fontSize: '2rem', cursor: 'pointer' }}
      >
        <HiMenuAlt3 />
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--bg-black)',
              zIndex: 2000,
              padding: '60px 8%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '60px' }}>
              <HiX 
                style={{ color: '#fff', fontSize: '2.5rem', cursor: 'pointer' }} 
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => handleLinkClick(e, link)}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--accent-green)',
                      fontSize: '3rem',
                      fontFamily: 'var(--ff-display)',
                      fontWeight: 400,
                      textTransform: 'uppercase'
                    }}
                  >
                    {link.name}
                  </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
