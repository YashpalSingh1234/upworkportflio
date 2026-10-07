export interface Project {
  id: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  flow: string[];
  stack: string[];
  features: string[];
  hasLiveDemo: boolean;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface ProcessStep extends TitledItem {
  step: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
