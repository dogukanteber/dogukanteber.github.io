import type { APIRoute, GetStaticPaths } from 'astro';
import { formatDate, getNotes, type Note } from '../../../lib/content';
import { renderOgImage } from '../../../lib/og';
import { site } from '../../../site';

export const getStaticPaths = (async () => {
  const notes = await getNotes();
  return notes.map((note) => ({ params: { slug: note.id }, props: { note } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ note: Note }> = ({ props: { note } }) =>
  renderOgImage({
    eyebrow: 'dogukanteber.github.io/notes',
    title: note.data.title,
    description: note.data.description,
    footer: `${site.name} · ${formatDate(note.data.date)}`,
  });
