import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  IconMapPin,
  IconGraduationCap,
  IconMail,
  IconPhone,
  IconCopy,
  IconCheck,
  IconShieldCheck,
  IconServer,
  IconSmartphone,
} from './Icons';

export const About: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const highlights = [
    {
      icon: <IconServer size={24} />,
      title: 'Enterprise Backend & DB Mastery',
      description:
        'Proven expertise in ASP.NET, C#, and SQL Server 2022. Expert in writing high-efficiency stored procedures and scalable multi-tier architectures.',
    },
    {
      icon: <IconSmartphone size={24} />,
      title: 'Mobile & Web Convergence',
      description:
        'Building seamless, fluid cross-platform mobile apps with React Native CLI alongside modern, responsive React.js web interfaces.',
    },
    {
      icon: <IconShieldCheck size={24} />,
      title: 'Security & Transactional Integrity',
      description:
        'Hands-on experience architecting trading platforms and MLM payout workflows where data consistency, OTP security, and regulatory compliance are essential.',
    },
  ];

  const quickDetails = [
    { label: 'Location', value: PROFILE.location, icon: <IconMapPin size={18} /> },
    { label: 'Degree', value: 'MCA (GGSIPU Delhi)', icon: <IconGraduationCap size={18} /> },
    { label: 'Undergrad', value: 'BCA (MJP Rohilkhand Univ.)', icon: <IconGraduationCap size={18} /> },
    { label: 'Languages', value: PROFILE.languages.join(', '), icon: <IconCheck size={18} /> },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Details */}
          <div className="about-narrative">
            <h3 className="about-heading">
              Hi there! I'm <span className="text-highlight">Mohammad Farooq</span>, a dedicated Full Stack Web and Mobile Application Developer based in Delhi, India.
            </h3>

            <p className="about-paragraph">
              With a <strong>Master of Computer Applications (MCA)</strong> from Tecnia Institute of Advanced Studies (GGSIPU, Delhi) and a <strong>Bachelor of Computer Applications (BCA)</strong>, I have cultivated a deep theoretical and practical mastery of software engineering.
            </p>

            <p className="about-paragraph">
              My hands-on professional journey includes engineering mission-critical <strong>Multi-Level Marketing (MLM) enterprise software</strong> at Reliwell Technologies—optimizing complex SQL Server stored procedures and automated multi-tier payout engines—and building modern <strong>React Native mobile applications</strong> at Shelfex LLC from the ground up to production deployment.
            </p>

            {/* Quick Details Cards */}
            <div className="quick-details-grid">
              {quickDetails.map((detail, index) => (
                <div key={index} className="quick-detail-card">
                  <div className="quick-detail-icon">{detail.icon}</div>
                  <div className="quick-detail-content">
                    <span className="quick-detail-label">{detail.label}</span>
                    <span className="quick-detail-value">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact & Copy Bar */}
            <div className="about-contact-bar">
              <div className="contact-chip">
                <IconMail size={16} />
                <span className="chip-text">{PROFILE.email}</span>
                <button
                  type="button"
                  className="chip-copy-btn"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? <IconCheck size={14} className="text-success" /> : <IconCopy size={14} />}
                </button>
              </div>

              <div className="contact-chip">
                <IconPhone size={16} />
                <span className="chip-text">{PROFILE.phoneDisplay}</span>
                <button
                  type="button"
                  className="chip-copy-btn"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? <IconCheck size={14} className="text-success" /> : <IconCopy size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars / Capabilities */}
          <div className="about-pillars">
            <h4 className="pillars-title">Core Engineering Values</h4>
            <div className="pillars-list">
              {highlights.map((pillar, index) => (
                <div key={index} className="pillar-card">
                  <div className="pillar-icon-wrapper">{pillar.icon}</div>
                  <div className="pillar-content">
                    <h5 className="pillar-name">{pillar.title}</h5>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
