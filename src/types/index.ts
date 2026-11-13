export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  role: string;
  problem: string;
  solution: string;
  candidateContribution: string[];
  outcome: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Leadership' | 'Full-Time';
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gradeOrStatus?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: 'Software & Web' | 'Programming' | 'Security & Systems' | 'Data & Emerging Tech' | 'Communication';
  badgeLabel?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}
