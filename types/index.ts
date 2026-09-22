export type ProjectCategory = 'All' | 'Full Stack' | 'Backend' | 'AI / ML' | 'Frontend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Backend' | 'AI / ML' | 'Frontend';
  status: 'ONGOING' | 'COMPLETED' | 'ARCHIVED';
  technologies: string[];
  documentedModules?: string[];
  architectureHighlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface SkillItem {
  name: string;
  badge?: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  status?: string;
  description: string;
  keyDeliverables: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  issueDate: string;
  description: string;
  topics: string[];
  credentialId?: string;
  image?: string;
  status: 'Verified Credential' | 'Completed';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  status?: string;
  details?: string[];
}
