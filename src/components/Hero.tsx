import React from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  IconArrowRight,
  IconDownload,
  IconMail,
  IconGithub,
  IconLinkedin,
  IconShieldCheck,
  IconTerminal,
} from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-glow glow-top-left" />
        <div className="hero-glow glow-bottom-right" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span className="status-text">{PROFILE.availability}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{PROFILE.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <IconTerminal size={22} className="role-icon" />
            <h2 className="hero-subtitle">{PROFILE.role}</h2>
          </div>

          <p className="hero-bio">{PROFILE.bio}</p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <IconArrowRight size={18} />
            </a>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohammad_Farooq_Resume.pdf"
              className="btn btn-secondary"
            >
              <IconDownload size={18} />
              <span>Download CV</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <IconMail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-socials">
            <span className="social-label">Find me on:</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <IconGithub size={20} />
              <span>github/{PROFILE.githubHandle}</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedin size={20} />
              <span>linkedin/{PROFILE.linkedinHandle}</span>
            </a>
          </div>
        </div>

        {/* Hero Visual / Avatar Card */}
        <div className="hero-visual">
          <div className="avatar-frame-outer">
            <div className="avatar-frame-inner">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="hero-avatar-img"
                loading="eager"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="floating-badge badge-experience">
              <div className="floating-badge-icon">
                <IconShieldCheck size={20} />
              </div>
              <div className="floating-badge-text">
                <span className="badge-value">3+ Years</span>
                <span className="badge-sub">Industry Exp.</span>
              </div>
            </div>

            {/* Floating Stack Badge */}
            <div className="floating-badge badge-stack">
              <div className="floating-badge-icon">
                <span className="stack-dot-live"></span>
              </div>
              <div className="floating-badge-text">
                <span className="badge-value">Web + Mobile</span>
                <span className="badge-sub">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="hero-stats-ribbon">
        <div className="stats-container">
          {PROFILE.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
