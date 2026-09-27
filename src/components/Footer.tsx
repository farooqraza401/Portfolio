import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconChevronDown,
  IconSparkles,
} from './Icons';

export const Footer: React.FC = () => {
  const { themeConfig, cycleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-info">
            <a href="#hero" className="footer-logo">
              <span className="brand-badge">&lt;MF /&gt;</span>
              <span className="footer-name">{PROFILE.name}</span>
            </a>
            <p className="footer-bio">
              Full Stack Web & Mobile Developer specializing in ASP.NET, React, React Native (CLI), and SQL Server 2022. Crafting enterprise solutions with high reliability and performance.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Tech</a></li>
              <li><a href="#experience">Work Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-theme-col">
            <h4 className="footer-nav-title">Active Theme</h4>
            <div className="footer-theme-card">
              <div className="footer-theme-info">
                <span
                  className="footer-theme-indicator"
                  style={{ background: themeConfig.colors.primary }}
                />
                <span className="footer-theme-name">{themeConfig.name}</span>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-xs"
                onClick={cycleTheme}
                title="Single click to cycle theme"
              >
                <IconSparkles size={13} />
                <span>Next Theme</span>
              </button>
            </div>
            <div className="footer-social-row">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="GitHub"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={18} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="footer-social-link"
                title="Email"
                aria-label="Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript & Global CSS Theming.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <span className="rotate-180">
              <IconChevronDown size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
