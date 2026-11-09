import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;
export type Build = CollectionEntry<'builds'>;
export type Book = CollectionEntry<'marginalia'>;

export async function getNotes(): Promise<Note[]> {
  const notes = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getBuilds(): Promise<Build[]> {
  const builds = await getCollection('builds');
  return builds.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getBooks(): Promise<Book[]> {
  const books = await getCollection('marginalia', ({ data }) => import.meta.env.DEV || !data.draft);
  return books.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

type BuildStatus = Build['data']['status'];

export const graveyardStatuses = ['failed', 'killed', 'abandoned'] as const satisfies readonly BuildStatus[];

export const isPostmortem = (build: Build) => graveyardStatuses.some((status) => status === build.data.status);

/** Sections of /builds. Graveyard statuses live on /graveyard instead. */
export const buildGroups = [
  {
    id: 'building',
    label: 'building',
    statuses: ['building'],
  },
  {
    id: 'shipped',
    label: 'shipped',
    statuses: ['live', 'experiment', 'archived'],
  },
] as const satisfies readonly { id: string; label: string; statuses: readonly BuildStatus[] }[];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "08 Sep 2022". Formatted in UTC so build machines in other timezones agree. */
export function formatDate(date: Date): string {
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${day} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** "Sep 2022". */
export const formatMonth = (date: Date) => `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

/** "Sep 08". */
export const formatDay = (date: Date) =>
  `${MONTHS[date.getUTCMonth()]} ${String(date.getUTCDate()).padStart(2, '0')}`;

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
