import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { topicIds } from './site';

const notes = defineCollection({
  // Each note is a folder (`<slug>/index.md`) so its images can sit next to it.
  loader: glob({
    base: './src/content/notes',
    pattern: '*/index.{md,mdx}',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.enum(topicIds)).default([]),
    draft: z.boolean().default(false),
    math: z.boolean().default(false),
  }),
});

export const buildStatuses = ['building', 'live', 'experiment', 'archived', 'failed', 'killed', 'abandoned'] as const;

const builds = defineCollection({
  // Files prefixed with `_` are commented out: kept in the repo but not built.
  loader: glob({ base: './src/content/builds', pattern: ['*.md', '!_*.md'] }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(buildStatuses),
    /** Leaves the status out of the build page header. It still decides the section. */
    hideStatus: z.boolean().default(false),
    date: z.coerce.date(),
    context: z.string().optional(),
    site: z.url().optional(),
    repo: z.url().optional(),
    /** Starred on /builds and kept when it's filtered to highlighted builds. Explain why in the build's own text. */
    milestone: z.boolean().default(false),
    /** Rendered after the body on the build page. */
    timeline: z
      .array(
        z.object({
          date: z.coerce.date(),
          title: z.string(),
          note: z.string().optional(),
          lesson: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const marginalia = defineCollection({
  loader: glob({ base: './src/content/marginalia', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    /** One-line TL;DR shown in the list. */
    description: z.string(),
    /** When I finished the book. */
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, builds, marginalia };
