import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    link: z.url().optional(),
    order: z.number().default(0),
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** Shorter <title> for search results when the headline exceeds MAX_TITLE_LENGTH. */
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  experience,
  projects,
  posts,
};
