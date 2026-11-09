import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../site';
import { getNotes } from './content';

export async function feed(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: `${site.name} · Notes`,
    description: site.description,
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      categories: note.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
