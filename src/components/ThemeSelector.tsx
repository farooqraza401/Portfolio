import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconPalette, IconCheck, IconSparkles } from './Icons';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, themeConfig, availableThemes, setTheme, cycleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-selector-container" ref={dropdownRef}>
      {/* Direct 1-Click Quick Cycle Button */}
      <button
        type="button"
        className="theme-quick-btn"
        onClick={cycleTheme}
        title={`Current: ${themeConfig.name} - Click to switch theme`}
        aria-label="Switch theme with single click"
      >
        <span className="theme-color-indicator" style={{ background: themeConfig.colors.primary }} />
        <IconSparkles size={16} className="theme-quick-icon" />
        <span className="theme-btn-label">{themeConfig.name}</span>
      </button>

      {/* Palette trigger to open multi-theme picker menu */}
      <button
        type="button"
        className={`theme-palette-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Open Theme Palette"
        aria-label="Open Theme Palette"
        aria-expanded={isOpen}
      >
        <IconPalette size={18} />
      </button>

      {/* Dropdown Menu for all themes */}
      {isOpen && (
        <div className="theme-dropdown-menu" role="menu">
          <div className="theme-dropdown-header">
            <span className="theme-dropdown-title">Choose Color Theme</span>
            <span className="theme-dropdown-badge">1-Click Apply</span>
          </div>

          <div className="theme-options-grid">
            {availableThemes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="menuitem"
                  className={`theme-option-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="theme-preview-dots">
                    <span
                      className="preview-dot"
                      style={{ background: theme.colors.bg, border: '1px solid rgba(255,255,255,0.2)' }}
                    />
                    <span
                      className="preview-dot"
                      style={{ background: theme.colors.primary }}
                    />
                    <span
                      className="preview-dot"
                      style={{ background: theme.colors.accent }}
                    />
                  </div>

                  <div className="theme-option-text">
                    <span className="theme-option-name">{theme.name}</span>
                    <span className="theme-option-sub">{theme.subtitle}</span>
                  </div>

                  {isSelected && (
                    <span className="theme-check-icon">
                      <IconCheck size={16} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
