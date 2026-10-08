export interface Project {
  id: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  flow: string[];
  stack: string[];
  features: string[];
  /** Live demo URL. Button is hidden when empty. */
  liveUrl?: string;
  /** This project's own repository URL. Button is hidden when empty. */
  githubUrl?: string;
  /** Shows a "View Architecture" button that opens the CVKing architecture modal. */
  hasArchitecture?: boolean;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface ProcessStep extends TitledItem {
  step: string;
}

export interface SocialLinks {
  githubProfileUrl: string;
  linkedin: string;
  email: string;
}
