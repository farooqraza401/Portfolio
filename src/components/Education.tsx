import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { IconGraduationCap, IconCalendar, IconMapPin, IconCheck } from './Icons';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Academic Credentials</span>
          <h2 className="section-title">Education & Degrees</h2>
          <p className="section-description">
            Strong computer applications foundation spanning postgraduate MCA and undergraduate BCA with specialized computer science training.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="education-grid">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-icon-box">
                  <IconGraduationCap size={22} />
                </div>
                <div className="education-period-badge">
                  <IconCalendar size={13} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="education-body">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-field">{edu.field}</h4>

                <div className="education-institution">
                  <span className="inst-name">{edu.institution}</span>
                  <div className="inst-location">
                    <IconMapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="education-desc">{edu.description}</p>

                {edu.details && (
                  <div className="education-highlight">
                    <IconCheck size={14} className="highlight-icon" />
                    <span>{edu.details}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
