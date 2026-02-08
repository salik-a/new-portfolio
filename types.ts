
export interface Project {
  id: string;
  missionNumber: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  iconType: 'mobile' | 'delivery';
  technologies: string;
  features: string;
  appStore?: string;
  playStore?: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  color: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  duration?: string;
}

export interface NavItem {
  label: string;
  href: string;
  font: 'marker' | 'comic';
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'other';
}

export interface Contact {
  type: 'email' | 'linkedin' | 'github';
  value: string;
  url?: string;
}
