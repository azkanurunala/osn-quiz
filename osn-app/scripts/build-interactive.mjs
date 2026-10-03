#!/usr/bin/env node
// build-interactive.mjs — generates the data layer for public/interaktif/ (the interactive
// explainer pages), WITHOUT touching anything the video pipeline reads or writes.
//
// Why a generator at all: the hub page has to list all 201 recorded topics, and each entry
// must carry the exact video number the recorder used, so a student can match "Video #054"
// in recordings-final/ with the interactive page for the same sub-bab. That numbering is
// derived from the manifest sort order inside record-videos.mjs — duplicating the algorithm
// here is the only way to keep the two in sync without importing a script that launches a
// browser on require.
//
// Inputs : public/data/_manifest.json, public/interaktif/topics/<id>.js, public/interaktif/assets/scenes/*.js
// Outputs: public/interaktif/data/hub.json   (hub listing)
//          console report                   (topic scripts found / missing / broken scene refs)
//
// Usage: node scripts/build-interactive.mjs [--check]
//   --check = validate only, never write (for CI / pre-commit habits).

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = resolve(__dirname, '..');
const IX = join(APP_ROOT, 'public', 'interaktif');
const DATA = join(APP_ROOT, 'public', 'data');
const CHECK_ONLY = process.argv.includes('--check');

const manifest = JSON.parse(readFileSync(join(DATA, '_manifest.json'), 'utf8'));

// Same filter + sort as record-videos.mjs's `allSubbab`, restricted to the tier that was
// actually recorded (campur). If either changes there, change it here too.
const allSubbab = manifest.items
  .filter((it) => it.type === 'subbab' || it.type === 'chapter')
  .sort((a, b) => (a.subBab || a.chapter || '').localeCompare(b.subBab || b.chapter || ''));
const indexOf = new Map(allSubbab.map((it, i) => [it.id, i + 1]));
const pad = allSubbab.length.toString().length;

const recorded = allSubbab.filter((it) => it.tier === 'campur');

// --- title cleanup -------------------------------------------------------------
// Recorded filenames carry the raw app title ("OSN SD · IPA · Sub-bab IPA-03d · ...").
// Cards read better with just the topic, so strip the product/subject/sub-bab noise.
const ACRONYMS = { fpb: 'FPB', kpk: 'KPK', plsv: 'PLSV', ppn: 'PPN', mph: 'MPH', rpm: 'RPM', tbc: 'TBC' };

function fromSlug(slug) {
  return String(slug)
    .split('-')
    .filter(Boolean)
    .map((w) => ACRONYMS[w.toLowerCase()] || w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function shortTitle(title, slug) {
  let t = String(title)
    .replace(/\(\s*Tingkat\s+Campur\s*\)/gi, '')
    .replace(/[-–—·]?\s*Tingkat\s+Campur\s*$/i, '')
    .trim();
  t = t.replace(/^OSN[\s/]*KSN?\s*SD\s*[·–—-]\s*/i, '');
  const sub = t.match(/Sub-?\s*bab\s+[0-9a-z]+\s*[:·–—-]\s*/i);
  if (sub) t = t.replace(sub[0], '');
  t = t.replace(/^[A-Z\s]*\b(IPA|MTK)\b\s*[·–—-]\s*/i, '');
  t = t.replace(/^\s*(IPA|MTK|Matematika)\s*[·–—-]\s*/i, '');
  t = t.replace(/\s*[·–—-]\s*$/, '').trim();
  // ~19 source packages carry a placeholder title ("OSN SD — MATEMATIKA"), so fall back to
  // the parser's slug rather than showing nineteen cards that all read "MATEMATIKA".
  if (t.length < 4 || /^(OSN|KSN|SD|IPA|MTK|MATEMATIKA|MATEMATIK)\b/i.test(t)) return fromSlug(slug);
  return t;
}

// --- topic scripts + scene registry ------------------------------------------
function listTopicScripts() {
  const dir = join(IX, 'topics');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.replace(/\.js$/, ''));
}

function knownSceneNames() {
  const dir = join(IX, 'assets', 'scenes');
  const names = new Set();
  if (!existsSync(dir)) return names;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.js')) continue;
    const src = readFileSync(join(dir, f), 'utf8');
    for (const m of src.matchAll(/register\(\s*'([A-Za-z0-9_-]+)'/g)) names.add(m[1]);
  }
  return names;
}

const scenes = knownSceneNames();
const topics = new Map(listTopicScripts().map((id) => [id, readFileSync(join(IX, 'topics', `${id}.js`), 'utf8')]));

// A topic script may only reference scene ids that exist, and must declare scenes + copy.
// Undefined behaviour otherwise (the player would render an empty stage), so fail loudly.
const problems = [];
for (const [id, src] of topics) {
  const refs = [...src.matchAll(/scene:\s*'([A-Za-z0-9_-]+)'/g)].map((m) => m[1]);
  if (!refs.length) problems.push(`${id}.js — tidak punya scene`);
  if (!/title\s*:/.test(src)) problems.push(`${id}.js — tidak punya title`);
  for (const r of refs) if (!scenes.has(r)) problems.push(`${id}.js — scene '${r}' belum ada di assets/scenes/`);
  for (const q of ['scenes', 'hotspots?']) if (!new RegExp(`\\b${q}\\b`).test(src)) problems.push(`${id}.js — belum punya blok '${q.replace('?', '')}'`);

  // The quizzes are not declared here: player.js reads both the mini and the full
  // 100-soal quiz from public/data/<id>.json, so that package is the real dependency.
  const pkgFile = join(DATA, `${id}.json`);
  if (!existsSync(pkgFile)) {
    problems.push(`${id}.js — paket data public/data/${id}.json tidak ada`);
  } else {
    const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'));
    if (!Array.isArray(pkg.questions) || !pkg.questions.length) problems.push(`public/data/${id}.json — tidak punya soal`);
  }
}

// --- assemble -----------------------------------------------------------------
const babs = [];
const babIndex = new Map();
for (const it of recorded) {
  const code = it.chapter || it.subBab;
  if (!babIndex.has(code)) {
    const entry = { code, subject: it.subject, title: '', items: [] };
    babIndex.set(code, entry);
    babs.push(entry);
  }
  const bab = babIndex.get(code);
  if (!bab.title && it.type === 'chapter') bab.title = shortTitle(it.title, it.slug);
  bab.items.push({
    n: String(indexOf.get(it.id)).padStart(pad, '0'),
    id: it.id,
    title: shortTitle(it.title, it.slug),
    fullTitle: it.title,
    slug: it.slug,
    subject: it.subject,
    chapter: it.chapter,
    subBab: it.subBab,
    isChapter: it.type === 'chapter',
    questionCount: it.questionCount,
    theorySectionCount: it.theorySectionCount,
    dataFile: it.file,
    hasScenes: topics.has(it.id),
  });
}
for (const bab of babs) if (!bab.title) bab.title = bab.items[0]?.title || bab.code;
babs.sort((a, b) => a.code.localeCompare(b.code));

const hub = {
  generatedAt: new Date().toISOString(),
  pad,
  total: babs.reduce((n, b) => n + b.items.length, 0),
  withScenes: recorded.filter((it) => topics.has(it.id)).length,
  videoDir: 'recordings-final',
  babs,
};

const out = join(IX, 'data', 'hub.json');
if (CHECK_ONLY) {
  console.log(`check: ${problems.length} problem(s), ${hub.withScenes}/${hub.total} topik punya scenes`);
} else {
  mkdirSync(join(IX, 'data'), { recursive: true });
  writeFileSync(out, JSON.stringify(hub, null, 2));
  console.log(`wrote ${out}`);
}
for (const p of problems) console.error(`  ! ${p}`);

console.log(
  `\n${hub.total} topik ter/video · ${hub.withScenes} punya scenes · ${babs.length} bab · ` +
  `${scenes.size} scene terdaftar`,
);
const missing = recorded.filter((it) => !topics.has(it.id));
if (missing.length) console.log(`belum ada script: ${missing.length} topik (${missing.slice(0, 3).map((m) => m.id).join(', ')}…)`);
process.exit(problems.length ? 1 : 0);