import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin, FiGithub, FiTwitter } from 'react-icons/fi';
import '../styles/variables.css';

const ContactInfoRow = ({ icon, label, value, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      borderRadius: '10px', 
      background: 'rgba(var(--text-primary-rgb), 0.03)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: color || 'var(--accent-green)',
      border: '1px solid var(--border-ghost)'
    }}>
      {icon}
    </div>
    <div>
      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</span>
      <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</span>
    </div>
  </div>
);

const SocialPill = ({ icon, label, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '100px',
      border: '1px solid var(--border-ghost)',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    }}
  >
    {icon} <span>{label}</span>
  </motion.a>
);

const Contact = () => {
  const [status, setStatus] = React.useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/xpqyvbby", {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="theme-black section-overlap" style={{ zIndex: 6, paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontWeight: 800, 
              color: 'var(--text-primary)', 
              letterSpacing: 'var(--ff-letter-spacing-tight)',
              fontFamily: 'var(--ff-display)',
              textTransform: 'uppercase'
            }}
          >
            Let's Connect
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}>
          
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '48px' }}>
              <ContactInfoRow icon={<FiMail />} label="Email" value="vanshikanag2003@gmail.com" color="var(--accent-green)" />
              <ContactInfoRow icon={<FiMapPin />} label="Location" value="Dehradun" color="var(--accent-blue)" />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
              <SocialPill icon={<FiGithub />} label="GitHub" href="https://github.com/nagVanshika" />
              <SocialPill icon={<FiLinkedin />} label="LinkedIn" href="https://www.linkedin.com/in/vanshika-nag-144b39253/" />
            </div>

            {/* Availability Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 20px', borderRadius: '100px', background: 'rgba(0, 229, 160, 0.05)', border: '1px solid rgba(0, 229, 160, 0.1)' }}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 10px var(--accent-green)' }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-green)', letterSpacing: '0.02em' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: 'var(--bg-card)', 
              padding: '40px', 
              borderRadius: '24px', 
              border: '1px solid var(--border-ghost)',
              position: 'relative'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="input-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    required 
                    className="contact-input"
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required 
                    className="contact-input"
                  />
                </div>
              </div>
              <div className="input-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  required 
                  rows="5" 
                  className="contact-input"
                  style={{ resize: 'none' }}
                />
              </div>
              
                <motion.button
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02, backgroundColor: status === 'success' ? '#059669' : 'var(--accent-green)', color: '#000' }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                disabled={status === 'submitting'}
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  background: status === 'success' ? '#059669' : 'transparent',
                  border: `1px solid ${status === 'success' ? '#059669' : 'var(--accent-green)'}`,
                  color: status === 'success' ? '#fff' : 'var(--accent-green)',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Error! Try Again'}
                {status === 'idle' && 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border-ghost)', marginTop: '60px', paddingTop: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Vanshika Nag • Crafted with Precision
          </p>
        </div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          padding: 16px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-ghost);
          border-radius: 12px;
          color: var(--text-primary);
          outline: none;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: var(--accent-green);
          box-shadow: 0 0 15px rgba(0, 229, 160, 0.1);
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .contact-input-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
