import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  IconArrowUpRight,
  IconCheck,
  IconGithub,
  IconLayers,
  IconSparkles,
} from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Enterprise', 'Full Stack', 'Frontend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Featured Portfolio</span>
          <h2 className="section-title">Projects & Architecture</h2>
          <p className="section-description">
            Selected real-world applications showcasing full-stack backend scalability, OTP security, financial market platforms, and reactive user interfaces.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Nav */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-category-row">
                  <span className="project-category-tag">{project.category}</span>
                  {project.isFeatured && (
                    <span className="featured-badge">
                      <IconSparkles size={12} />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <div className="project-card-body">
                <p className="project-summary">{project.summary}</p>

                <div className="project-highlights">
                  <span className="highlights-header">Key Highlights:</span>
                  <ul className="project-feature-bullets">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="feature-bullet">
                        <IconCheck size={14} className="feature-bullet-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-card-footer">
                <div className="tech-stack-row">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-pill tech-pill-more">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-card-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setActiveProject(project)}
                  >
                    <IconLayers size={15} />
                    <span>View Architecture</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <IconGithub size={18} />
                    </a>
                  )}

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <IconArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
