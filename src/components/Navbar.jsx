import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../styles/variables.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technical stack', href: '#skills' },
    { name: 'Let\'s connect', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Special case for top of page (About section)
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ScrollSpy Logic
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -85% 0px', // Smaller window for more precise detection
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    navLinks.forEach(link => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80; // Adjust for navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isDarkSection = ['hero', 'experience'].includes(activeSection);
  const navTextColor = isDarkSection && !isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.5)';
  const navActiveTextColor = isDarkSection && !isScrolled ? '#000' : '#fff';
  const logoColor = isDarkSection && !isScrolled ? '#000' : '#fff';

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '12px 8%' : '24px 8%',
        background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.5s var(--ease-cinematic)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: navActiveTextColor
      }}
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          color: logoColor, 
          fontFamily: 'var(--ff-display)',
          letterSpacing: '0.05em',
          cursor: 'pointer',
          transition: 'color 0.5s var(--ease-cinematic)'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        VN<span style={{ color: 'var(--accent-green)' }}>.</span>
      </motion.div>

      <div 
        className="nav-links-container"
        style={{
          display: 'flex',
          gap: '8px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          background: isScrolled ? 'rgba(255, 255, 255, 0.05)' : (isDarkSection ? 'rgba(0,0,0,0.03)' : 'rgba(255, 255, 255, 0.03)'),
          padding: '6px',
          borderRadius: '100px',
          border: '1px solid rgba(var(--text-primary-rgb), 0.05)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.5s var(--ease-cinematic)'
        }}
      >
        {navLinks.map((link, i) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{
                position: 'relative',
                textDecoration: 'none',
                color: isActive ? navActiveTextColor : navTextColor,
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '100px',
                transition: 'all 0.5s var(--ease-cinematic)',
                zIndex: 1
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--accent-green)',
                    borderRadius: '100px',
                    zIndex: -1,
                    boxShadow: '0 4px 12px rgba(0, 229, 160, 0.3)'
                  }}
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span style={{ color: isActive ? '#000' : 'inherit', transition: 'color 0.5s var(--ease-cinematic)' }}>{link.name}</span>
            </motion.a>
          );
        })}
      </div>

      {/* CTA Button */}
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
          fontSize: '0.9rem',
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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      textDecoration: 'none',
                      color: activeSection === link.href.substring(1) ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.4)',
                      fontSize: '2.5rem',
                      fontFamily: 'var(--ff-display)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease'
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
        @media (max-width: 1100px) {
          .nav-links-container, .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 1101px) {
          .mobile-only { display: none !important; }
        }
        .nav-links-container a:hover span {
          color: #fff !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
