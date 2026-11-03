export type ProjectCategory = 'All' | 'Full Stack' | 'Backend' | 'AI / ML' | 'Frontend' | 'Mobile';

export interface Project {
  id: string;
  title: string;
  /** Compact name for the project picker; the full title stays the accessible name. */
  shortTitle?: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Backend' | 'AI / ML' | 'Frontend' | 'Mobile';
  status: 'ONGOING' | 'COMPLETED' | 'ARCHIVED';
  technologies: string[];
  documentedModules?: string[];
  architectureHighlights?: string[];
  githubUrl?: string;
  /** 'profile' when githubUrl points to the GitHub profile rather than a repository. */
  githubLinkType?: 'repository' | 'profile';
  liveUrl?: string;
  featured: boolean;
  /** Real screenshot path (kept for later use; the project section currently shows no images). */
  image?: string;
  /** Specific alt text for `image`; defaults to "Screenshot of {title}". */
  imageAlt?: string;
  /** Short visible caption under `image` in the detail view (e.g. demo-data notice). */
  imageCaption?: string;
  specs?: { label: string; value: string }[];
  specsNote?: string;
  /** Short context shown as a chip, e.g. "Team project · …" for collaborative work. */
  context?: string;
  /** Individual contributions, shown under "My Contributions" (for team projects). */
  contributions?: string[];
  /** Further contribution groups with their own headings (e.g. later personal additions). */
  additionalContributions?: { heading: string; items: string[] }[];
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
  /** Omitted when the source (the CV) gives no location. */
  location?: string;
  /** Display text, "Start – End" (End may be "Present"). */
  period: string;
  /** ISO date or month (YYYY-MM-DD or YYYY-MM). */
  startDate: string;
  /** Omitted for a current role. */
  endDate?: string;
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
  /** Illustrative artwork, not the issued certificate; never shown as one. */
  image?: string;
  /** Image of the issued certificate, shown in the details dialog. */
  scan?: { src: string; width: number; height: number; alt: string };
  /** The issued certificate as a PDF, linked from the details dialog. */
  pdf?: string;
  status: 'Verified Credential' | 'Completed';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  year?: string;
  status?: string;
  details?: string[];
}

export interface TrainingItem {
  title: string;
  provider: string;
  location?: string;
  /** Display text, e.g. "Aug 2023 – May 2024", or a duration such as "7 months". */
  period: string;
  /** YYYY-MM; set both only when the exact months are known. */
  startDate?: string;
  endDate?: string;
}
