import React, { useEffect } from 'react';
import type { ProjectItem } from '../types';
import { IconX, IconCheck, IconLayers, IconServer, IconGithub, IconExternalLink } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <span className="modal-category-badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close details"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-summary-text">{project.summary}</p>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">Key Capabilities & Features</h4>
            <ul className="modal-features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <IconCheck size={16} className="modal-check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <IconLayers size={18} className="modal-title-icon" />
                Technical Architecture & Implementation
              </h4>
              <div className="modal-architecture-grid">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="arch-card">
                    <IconServer size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="modal-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <IconGithub size={18} />
              <span>Source Repository</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Live Demonstration</span>
              <IconExternalLink size={18} />
            </a>
          )}
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
