import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  IconServer,
  IconCode,
  IconSmartphone,
  IconDatabase,
  IconWrench,
  IconLayers,
} from './Icons';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'server':
        return <IconServer size={20} />;
      case 'code':
        return <IconCode size={20} />;
      case 'smartphone':
        return <IconSmartphone size={20} />;
      case 'database':
        return <IconDatabase size={20} />;
      case 'wrench':
        return <IconWrench size={20} />;
      default:
        return <IconLayers size={20} />;
    }
  };

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Technical Competencies</span>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-description">
            A comprehensive overview of the programming languages, enterprise frameworks, databases, and mobile technologies I utilize to engineer scalable solutions.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-nav">
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <IconLayers size={16} />
            <span>All Technologies</span>
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {displayedCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-bubble">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-subtitle">{category.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`skill-item ${skill.highlight ? 'highlighted' : ''}`}
                  >
                    <div className="skill-meta">
                      <span className="skill-name">
                        {skill.name}
                        {skill.highlight && (
                          <span className="skill-core-badge">Core</span>
                        )}
                      </span>
                      <span className="skill-level">{skill.level}</span>
                    </div>

                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlights Banner */}
        <div className="skills-highlight-banner">
          <div className="highlight-pill">
            <span className="pill-dot"></span>
            <span>ASP.NET & Entity Framework</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span>
            <span>React & TypeScript</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span>
            <span>React Native (CLI)</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span>
            <span>SQL Server Stored Procedures</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span>
            <span>Multi-Tier Commission Logic</span>
          </div>
        </div>
      </div>
    </section>
  );
};
