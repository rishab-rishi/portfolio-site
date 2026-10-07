// types.ts - Shared TypeScript interfaces

export interface HeroData {
  name: string;
  title: string;
  description: string;
  available: boolean;
}

export interface ProjectImage {
  src: string;
  srcSmall: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  link: string;
  caseStudy?: string;
  image: ProjectImage;
  featured?: boolean;
}

export interface Proof {
  heading: string;
  text: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface AboutData {
  paragraphs: string[];
  facts: Fact[];
}

export interface ExperienceItem {
  role: string;
  period?: string;
  summary: string;
  points: string[];
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface ContactData {
  email: string;
  github: string;
  linkedin?: string;
}

export interface PortfolioData {
  hero: HeroData;
  projects: Project[];
  proof: Proof[];
  about: AboutData;
  experience: ExperienceItem[];
  stack: StackGroup[];
  alsoFamiliar: string[];
  contact: ContactData;
}
