// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const hugoPosts = [
  'use-ai-to-avoid-typing-not-thinking',
  'how-to-set-goals',
  'lfx-mentorship',
  'genetic-algorithm',
  'univariate_linear_regression',
  'parallel-openfoam',
  'domain-decomposition',
];
const hugoGraveyard = ['biruni' /* , 'linea', 'calendar-agent', 'fluent', 'gif-ai' */];

export default defineConfig({
  site: 'https://dogukanteber.github.io',
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  image: {
    layout: 'constrained',
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
    },
  },
  // Old Hugo URLs. GitHub Pages can't send real 301s, so these become meta-refresh pages.
  redirects: {
    '/about': '/',
    '/contact': '/#contact',
    '/posts': '/notes/',
    '/projects': '/builds/',
    '/tags': '/notes/',
    '/categories': '/notes/',
    ...Object.fromEntries(hugoPosts.map((slug) => [`/posts/${slug}`, `/notes/${slug}/`])),
    ...Object.fromEntries(hugoGraveyard.map((slug) => [`/graveyard/${slug}`, `/builds/${slug}/`])),
  },
});
