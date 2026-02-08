
export interface Project {
  id: string;
  missionNumber: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  iconType: 'mobile' | 'delivery';
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  font: 'marker' | 'comic';
}
