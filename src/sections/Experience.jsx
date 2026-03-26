import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiBarChart2, FiCalendar, FiUsers, FiShield, FiShoppingBag, FiSettings } from 'react-icons/fi';
import '../styles/variables.css';

const Experience = () => {

  const contributions = [
    {
      title: "Startup Execution",
      desc: "Delivered production-ready features in a fast-paced startup, meeting tight deadlines while collaborating with cross-functional stakeholders to ensure timely releases.",
      icon: <FiSettings />,
      color: "var(--bg-emerald)",
      id: "01"
    },
    {
      title: "AI-Driven Development",
      desc: "Accelerated development cycles by leveraging AI tools for research, automation, and rapid prototyping, reducing time-to-build and improving efficiency.",
      icon: <FiShield />,
      color: "var(--bg-emerald)",
      id: "02"
    },
    {
      title: "Platform Engineering",
      desc: "Developed and deployed internal platforms (admin dashboards, company websites, financial systems) supporting daily business operations and improving workflow efficiency.",
      icon: <FiBarChart2 />,
      color: "var(--bg-emerald)",
      id: "03"
    },
    {
      title: "Scalable Dashboard Design",
      desc: "Built scalable dashboards for bookings, services, users, and support, enabling data-driven decision-making through real-time analytics and reporting.",
      icon: <FiCalendar />,
      color: "var(--bg-emerald)",
      id: "04"
    },
    {
      title: "Requirement Translation",
      desc: "Transformed business requirements into robust full-stack solutions, enhancing system usability and aligning technical delivery with business goals.",
      icon: <FiUsers />,
      color: "var(--bg-emerald)",
      id: "05"
    }
  ];

  const techTags = ["React", "Next.js", "Node.js", "MERN Stack", "Dashboards", "REST APIs"];


  return (
    <section id="experience" className="theme-white section-overlap" style={{ zIndex: 3 }}>
      <div className="container" style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ position: 'relative', paddingBottom: '40px', borderBottom: '1px solid var(--border-ghost)', marginBottom: '80px' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
          >
            Work History
          </motion.span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)', fontFamily: 'var(--ff-display)', color: 'var(--accent-green)', margin: 0, lineHeight: 0.9 }}
            >
              EXPERIENCE
            </motion.h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="exp-scroll-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: '80px', alignItems: 'start' }}>

          {/* Left Column (Sticky) */}
          <div className="exp-left" style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)', alignSelf: 'start' }}>
            {/* Pulsing Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(0, 229, 160, 0.1)', border: '1px solid rgba(0, 229, 160, 0.2)', borderRadius: '100px', marginBottom: '32px' }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '0.05em' }}>CURRENT ROLE</span>
            </div>

            <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontFamily: 'var(--ff-display)', color: 'var(--accent-green)', lineHeight: '1', marginBottom: '16px', textTransform: 'uppercase' }}>
              WEB DEVELOPER
            </h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '8px' }}>Carmaa Technologies Pvt Ltd</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px' }}>July,25 — Present </p>

            <div style={{ borderLeft: '4px solid var(--accent-green)', paddingLeft: '24px', marginBottom: '40px' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Contributing to production-grade platforms including admin dashboards, financial systems, and customer-facing websites.
              </p>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '60px' }}>
              {techTags.map(tag => (
                <span key={tag} style={{ padding: '6px 14px', background: 'var(--bg-card)', border: '1px solid var(--border-ghost)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column (Scroll Stack) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i % 3 * 0.08 }}
                className="exp-card"
                style={{
                  background: item.color,
                  backgroundImage: 'radial-gradient(circle at top right, rgba(0, 229, 160, 0.05) 0%, transparent 70%)',
                  borderRadius: '24px',
                  padding: 'clamp(20px, 4vw, 32px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(16px, 4vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 229, 160, 0.05)',
                  boxShadow: `0 10px 30px -10px rgba(0, 66, 58, 0.4)`
                }}
                whileHover={{
                  x: 5,
                  scale: 1.01,
                  filter: 'brightness(1.1)',
                  boxShadow: `0 20px 40px -10px rgba(0, 66, 58, 0.6)`
                }}
              >
                {/* Icon Badge */}
                <div style={{
                  width: 'clamp(48px, 12vw, 64px)',
                  height: 'clamp(48px, 12vw, 64px)',
                  minWidth: 'clamp(48px, 12vw, 64px)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
                  backdropFilter: 'blur(4px)'
                }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--ff-display)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.5, fontWeight: 500 }}>{item.desc}</p>
                </div>

                {/* Number Overlay */}
                <div style={{
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  fontFamily: 'var(--ff-display)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                  marginLeft: 'auto'
                }}>
                  {item.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .exp-card h4, .exp-card p {
          color: #ffffff !important;
        }
        .pulse-dot {
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
        @media (max-width: 1024px) {
          .exp-scroll-wrap { grid-template-columns: 1fr !important; gap: 48px !important; }
          .exp-left { position: relative !important; top: 0 !important; margin-bottom: 48px; text-align: center; }
          .exp-left div[style*="display: inline-flex"] { margin-bottom: 24px; }
          .exp-left div[style*="borderLeft"] { border-left: none !important; border-top: 2px solid var(--accent-green); padding-left: 0 !important; padding-top: 16px; margin-bottom: 24px; }
          .exp-left div[style*="display: flex; flexWrap: wrap"] { justify-content: center; margin-bottom: 40px; }
        }
        @media (max-width: 640px) {
          .exp-card { flex-direction: column; text-align: center; align-items: center; }
          .exp-card div[style*="marginLeft: auto"] { margin-left: unset !important; position: absolute; top: 20px; right: 20px; font-size: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
