export interface Project {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  year: number;
  pinned: boolean;
  impact: { users: number; cost_savings_pct: number };
  cover: string;
  links: { repo?: string; demo?: string };
  case_study_mdx: string;
}
