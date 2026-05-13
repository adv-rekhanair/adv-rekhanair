export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  caseType?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
