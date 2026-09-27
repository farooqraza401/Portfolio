export type ThemeId = 'cyber' | 'luxury' | 'nordic' | 'emerald' | 'sunset';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  subtitle: string;
  isDark: boolean;
  colors: {
    primary: string;
    bg: string;
    accent: string;
    surface: string;
  };
}

export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Mobile' | 'Enterprise' | 'Frontend';
  tagline: string;
  summary: string;
  features: string[];
  architecture: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  details?: string;
}
