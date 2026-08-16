export interface Project {
  id: string;
  title: string;
  category: 'data-engineering' | 'data-analytics' | 'machine-learning' | 'ai-engineering';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecture?: string[];
  externalUrl?: string;
  embeddedPowerBiUrl?: string;
  linkedInPostUrl?: string;
  sampleCode?: {
    language: string;
    filename: string;
    code: string;
  };
  hasInteractiveDemo?: boolean;
  demoType?: 'sql-runner' | 'bi-dashboard' | 'pipeline-dag';
}

export interface SkillItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'cleansing' | 'visualization' | 'exploration' | 'pipeline' | 'warehouse' | 'modeling' | 'cdc' | 'ai' | 'infrastructure';
  tools: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  /** One-line framing of what the role actually was, shown above the bullets. */
  summary?: string;
  /** Short headline figures rendered as stat chips. */
  metrics?: { label: string; value: string }[];
  /** Themed groups of bullets, e.g. "Ingestion & CDC". Falls back to `description`. */
  highlights?: { area: string; points: string[] }[];
  description: string[];
  technologies: string[];
}

export interface Certification {
  id?: string;
  name: string;
  issuer?: string;
  date?: string;
  expires?: string;
  credentialId?: string;
  category?: 'ai' | 'cloud' | 'data-engineering' | 'analytics' | 'programming';
  skills?: string[];
  verificationUrl?: string;
  badgeType?: 'oracle' | 'azure' | 'google' | 'datacamp' | 'anthropic' | 'upgrad' | 'coding-ninjas' | 'codebasics' | 'coss' | 'general';
  isFeatured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  grade?: string;
  period: string;
  description?: string;
}

export interface DashboardItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl: string;
  linkedInUrl: string;
  embedUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  category: string;
  content: string;
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  tagline: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  pswVisaInfo: string;
  /** Large banner background image. */
  photoUrl?: string;
  /** Circular profile photo shown on the banner card. Falls back to initials. */
  avatarUrl?: string;
}
