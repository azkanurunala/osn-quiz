// Audit how questions map to diagrams.
//
//   node scripts/audit-matches.mjs                 # coverage + per-diagram match counts
//   node scripts/audit-matches.mjs tuas magnet     # print 10 sample questions per diagram
//
// Reads the same packages the recorder uses (IPA, all tiers except campur). Use the per-diagram
// sample dump to spot false positives after editing keywords in diagram-data.js.

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  // matchFigure = what the app shows: a reviewed object picture first, else the concept diagram.
  const { matchFigure } = await server.ssrLoadModule('/src/features/diagrams/objekFoto.js');
  const man = JSON.parse(readFileSync(`${ROOT}/public/data/_manifest.json`, 'utf8'));
  const args = process.argv.slice(2);
  const allSubjects = args.includes('--all');
  const want = args.filter((a) => !a.startsWith('--'));
  const items = man.items.filter((x) => (allSubjects || x.subject === 'ipa') && x.tier !== 'campur'
    && (x.type === 'subbab' || x.type === 'chapter'));

  const byId = {};
  const perChapter = {};
  let total = 0;
  let hit = 0;
  for (const it of items) {
    const pkg = JSON.parse(readFileSync(`${ROOT}/public/data/${it.file}`, 'utf8'));
    const c = (perChapter[it.chapter] ??= { q: 0, hit: 0 });
    for (const q of pkg.questions) {
      total += 1;
      c.q += 1;
      const d = matchFigure(q, it.subject);
      if (d) { hit += 1; c.hit += 1; (byId[d.id] ??= []).push(q); }
    }
  }

  if (want.length) {
    for (const id of want) {
      const list = byId[id] || [];
      console.log(`\n${'#'.repeat(80)}\n# ${id}  (${list.length} soal)\n${'#'.repeat(80)}`);
      for (const q of list.slice(0, 10)) {
        console.log(`  ST: ${q.subTopic || '-'} | LEVEL: ${q.level || '-'}`);
        console.log(`  Q : ${String(q.question).replace(/\s+/g, ' ').slice(0, 190)}`);
        console.log(`  C : ${String(q.concept || '-').replace(/\s+/g, ' ').slice(0, 130)}\n`);
      }
    }
  } else {
    console.log(`TOTAL  ${hit}/${total}  (${((hit / total) * 100).toFixed(1)}%)\n`);
    for (const [ch, c] of Object.entries(perChapter).sort()) {
      console.log(`  ${ch.padEnd(8)} ${String(c.hit).padStart(4)}/${String(c.q).padEnd(4)}  (${((c.hit / c.q) * 100).toFixed(1)}%)`);
    }
    console.log('\nper diagram:');
    for (const [id, list] of Object.entries(byId).sort((a, b) => b[1].length - a[1].length)) {
      console.log(`  ${String(list.length).padStart(4)}  ${id}`);
    }
  }
} finally {
  await server.close();
}
