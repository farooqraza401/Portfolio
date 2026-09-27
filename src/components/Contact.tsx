import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconGithub,
  IconLinkedin,
  IconCopy,
  IconCheck,
  IconArrowRight,
  IconSparkles,
} from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate send feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Interested in collaborating, hiring for full-stack/mobile roles, or discussing a project? Feel free to reach out directly.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-subheading">
              Available for full-time software engineering roles, mobile development contracts, and architectural consulting.
            </p>

            <div className="contact-cards-list">
              {/* Email Card */}
              <div className="contact-method-card">
                <div className="method-icon-box">
                  <IconMail size={22} />
                </div>
                <div className="method-content">
                  <span className="method-label">Email Address</span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="method-link"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="method-copy-btn"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <span className="copied-tag">
                      <IconCheck size={14} /> Copied!
                    </span>
                  ) : (
                    <IconCopy size={16} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-method-card">
                <div className="method-icon-box">
                  <IconPhone size={22} />
                </div>
                <div className="method-content">
                  <span className="method-label">Phone & WhatsApp</span>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="method-link"
                  >
                    {PROFILE.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  className="method-copy-btn"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <span className="copied-tag">
                      <IconCheck size={14} /> Copied!
                    </span>
                  ) : (
                    <IconCopy size={16} />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-method-card">
                <div className="method-icon-box">
                  <IconMapPin size={22} />
                </div>
                <div className="method-content">
                  <span className="method-label">Location</span>
                  <span className="method-text">{PROFILE.location}</span>
                </div>
              </div>
            </div>

            {/* Social Connect Bar */}
            <div className="contact-social-section">
              <span className="social-section-title">Profiles & Portals:</span>
              <div className="social-links-grid">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <IconGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <IconLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill in the form below and I'll get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-box">
                    <IconCheck size={28} />
                  </div>
                  <h4 className="success-title">Message Received!</h4>
                  <p className="success-desc">
                    Thank you for reaching out, Mohammad Farooq will respond to you shortly at <strong>{formData.email || 'your email'}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="interactive-contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your requirements, project scope, or opportunity..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-submit-form"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <IconSparkles size={18} />
                        <span>Send Message</span>
                        <IconArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
