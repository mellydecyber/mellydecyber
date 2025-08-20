import { z } from 'zod';

export const projectSchema = z.object({
  slug: z.string(),
  name: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  year: z.number(),
  pinned: z.boolean(),
  impact: z.object({
    users: z.number(),
    cost_savings_pct: z.number()
  }),
  cover: z.string(),
  links: z.object({
    repo: z.string().optional(),
    demo: z.string().optional()
  }),
  case_study_mdx: z.string()
});

export const dataSchema = z.object({
  profile: z.object({
    name: z.string(),
    headline: z.string(),
    location: z.string(),
    avatar: z.string(),
    bio_md: z.string(),
    socials: z.object({
      github: z.string(),
      linkedin: z.string(),
      x: z.string(),
      email: z.string()
    })
  }),
  stats: z.object({
    years_experience: z.number(),
    projects_shipped: z.number(),
    oss_contributions: z.number()
  }),
  skills: z.array(
    z.object({ name: z.string(), level: z.number(), category: z.string() })
  ),
  experiences: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      start: z.string(),
      end: z.string().nullable(),
      location: z.string(),
      stack: z.array(z.string()),
      highlights: z.array(z.string())
    })
  ),
  projects: z.array(projectSchema),
  blog: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
      excerpt: z.string(),
      mdx: z.string()
    })
  ),
  contributions: z.object({
    year: z.number(),
    heatmap: z.array(
      z.object({
        date: z.string(),
        count: z.number()
      })
    )
  })
});

export type SiteData = z.infer<typeof dataSchema>;
