import React, { useState, useEffect } from 'react';
import { ThemeSelector } from './ThemeSelector';
import { IconMenu, IconX, IconDownload } from './Icons';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand">
          <span className="brand-badge">&lt;MF /&gt;</span>
          <div className="brand-text">
            <span className="brand-name">{PROFILE.name}</span>
            <span className="brand-title">Full Stack Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Switcher & Resume */}
        <div className="navbar-actions">
          <ThemeSelector />

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohammad_Farooq_Resume.pdf"
            className="btn btn-outline btn-resume-desktop"
            title="Download Mohammad Farooq's Resume"
          >
            <IconDownload size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-nav-divider" />
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohammad_Farooq_Resume.pdf"
              className="btn btn-primary mobile-resume-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IconDownload size={18} />
              <span>Download CV (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
