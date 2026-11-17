export type PortfolioCategory =
  | 'Todos'
  | 'Residencial'
  | 'Comercial'
  | 'Painéis Ripados';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  location: string;
  year: string;
  areaSqm: string;
  material: string;
  lighting: string;
  summary: string;
  memorial: string;
  image: string;
  imageAlt: string;
  featuredSpan?: 'wide' | 'standard';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface StudioMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
}

export interface AestheticPillar {
  title: string;
  description: string;
}
