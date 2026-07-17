// types.ts - Shared TypeScript interfaces

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  description: string;
}

export interface AboutData {
  text: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: Skill[];
  projects: Project[];
  contact: ContactData;
}

export type SectionVisibility = Record<string, boolean>;
