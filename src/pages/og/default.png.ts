import type { APIRoute } from 'astro';
import { renderOgImage } from '../../lib/og';
import { site } from '../../site';

export const GET: APIRoute = () =>
  renderOgImage({
    eyebrow: 'dogukanteber.github.io',
    title: `Hi, I’m ${site.firstName}.`,
    description: site.description,
    footer: site.name,
  });
