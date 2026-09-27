import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemeId, ThemeOption } from '../types';
import { THEME_OPTIONS } from '../data/portfolioData';

interface ThemeContextType {
  currentTheme: ThemeId;
  themeConfig: ThemeOption;
  availableThemes: ThemeOption[];
  setTheme: (theme: ThemeId) => void;
  cycleTheme: () => void;
}

const STORAGE_KEY = 'farooq_portfolio_theme';
const DEFAULT_THEME: ThemeId = 'cyber';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return DEFAULT_THEME;
  });

  const themeConfig =
    THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  useEffect(() => {
    // Apply theme to documentElement
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem(STORAGE_KEY, currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme]);

  const setTheme = (theme: ThemeId) => {
    setCurrentThemeState(theme);
  };

  const cycleTheme = () => {
    const currentIndex = THEME_OPTIONS.findIndex((t) => t.id === currentTheme);
    const nextIndex = (currentIndex + 1) % THEME_OPTIONS.length;
    setCurrentThemeState(THEME_OPTIONS[nextIndex].id);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeConfig,
        availableThemes: THEME_OPTIONS,
        setTheme,
        cycleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
