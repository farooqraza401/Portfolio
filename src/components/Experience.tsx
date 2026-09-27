import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { IconBriefcase, IconCalendar, IconMapPin, IconCheck } from './Icons';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            Industry roles where I delivered production mobile apps, high-throughput enterprise backends, and automated commission platforms.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline marker with index */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  <IconBriefcase size={16} />
                </div>
                {index < EXPERIENCES.length - 1 && <div className="marker-line" />}
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="card-top-row">
                  <div>
                    <div className="experience-badges-row">
                      <span className="company-badge">{exp.company}</span>
                      {exp.badge && <span className="category-pill">{exp.badge}</span>}
                    </div>
                    <h3 className="role-title">{exp.role}</h3>
                  </div>

                  <div className="timeline-meta-box">
                    <span className="meta-item">
                      <IconCalendar size={14} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="meta-item">
                      <IconMapPin size={14} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="experience-overview">{exp.description}</p>

                <div className="responsibilities-section">
                  <h4 className="responsibilities-title">Key Contributions & Architecture:</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className="responsibility-item">
                        <span className="bullet-icon">
                          <IconCheck size={14} />
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="tech-stack-row">
                  {exp.techStack.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
