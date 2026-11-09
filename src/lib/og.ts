import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

// Satori can't read woff2, so this uses the .woff files fontsource ships alongside them.
const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

let fonts: Promise<Parameters<typeof satori>[1]['fonts']> | undefined;

function loadFonts() {
  fonts ??= Promise.all([
    fontFile('source-serif-4', 'source-serif-4-latin-600-normal.woff'),
    fontFile('source-serif-4', 'source-serif-4-latin-ext-600-normal.woff'),
    fontFile('source-serif-4', 'source-serif-4-latin-400-normal.woff'),
    fontFile('source-serif-4', 'source-serif-4-latin-ext-400-normal.woff'),
    fontFile('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff'),
    fontFile('ibm-plex-mono', 'ibm-plex-mono-latin-ext-400-normal.woff'),
  ]).then(([serif600, serif600ext, serif400, serif400ext, mono, monoExt]) => [
    { name: 'Serif', data: serif600, weight: 600, style: 'normal' },
    { name: 'Serif', data: serif400, weight: 400, style: 'normal' },
    { name: 'SerifExt', data: serif600ext, weight: 600, style: 'normal' },
    { name: 'SerifExt', data: serif400ext, weight: 400, style: 'normal' },
    { name: 'Mono', data: mono, weight: 400, style: 'normal' },
    { name: 'MonoExt', data: monoExt, weight: 400, style: 'normal' },
  ]);
  return fonts;
}

// Satori only falls back across differently named families, so "ğ" needs the -Ext subset listed.
const SERIF = 'Serif, SerifExt';
const MONO = 'Mono, MonoExt';

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

interface OgOptions {
  eyebrow: string;
  title: string;
  description?: string;
  footer: string;
}

export async function renderOgImage({ eyebrow, title, description, footer }: OgOptions) {
  const svg = await satori(
    el(
      'div',
      {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: '#fbfaf7',
        color: '#1d1c1a',
        fontFamily: SERIF,
      },
      [
        el('div', { fontFamily: MONO, fontSize: 26, color: '#a3401c' }, eyebrow),
        el('div', { display: 'flex', flexDirection: 'column' }, [
          el('div', { fontSize: title.length > 60 ? 56 : 68, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.01em' }, title),
          description
            ? el('div', { marginTop: 28, fontSize: 30, lineHeight: 1.4, color: '#6b6760' }, description)
            : null,
        ]),
        el('div', { fontFamily: MONO, fontSize: 24, color: '#6b6760' }, footer),
      ],
    ) as Parameters<typeof satori>[0],
    { width: 1200, height: 630, fonts: await loadFonts() },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
