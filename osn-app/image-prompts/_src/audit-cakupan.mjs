// node image-prompts/_src/audit-cakupan.mjs   (dari osn-app/)
// Cek setiap soal di setiap video (recordings-final/) punya padanan ilustrasi:
//   foto   = gambar objek yang sudah lolos review dipakai aplikasi (matchObjekFoto)
//   objek  = katalog image-prompts punya objek yang disebut soal, tapi gambarnya belum lolos/ dipakai
//   diagram= diagram SVG aplikasi (matchDiagram)
//   tidak  = tidak ada sama sekali
// Hasil: image-prompts/_CAKUPAN.md (ringkasan per video) + _src/cakupan.json (detail per soal).
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createServer } from 'vite';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(HERE, '../..');
process.chdir(APP);

const catalog = [];
for (const f of fs.readdirSync(HERE).filter(f => f.startsWith('catalog-')).sort()) {
  const mod = await import(pathToFileURL(path.join(HERE, f)));
  for (const v of Object.values(mod)) if (Array.isArray(v)) catalog.push(...v.filter(o => o && o.id && o.kw));
}
const kwRe = (o) => new RegExp('(?<!\\p{L})(?:' + o.kw + ')(?:nya|an|kan)?(?!\\p{L})', 'iu');
const kwList = catalog.map(o => [o.id, kwRe(o)]);

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { matchObjekFoto } = await server.ssrLoadModule('/src/features/diagrams/objekFoto.js');
const { matchDiagram } = await server.ssrLoadModule('/src/features/diagrams/matchDiagram.js');
const { DIAGRAM_BY_ID } = await server.ssrLoadModule('/src/features/diagrams/registry.js');
// a family may decline a soal it cannot draw honestly (usable() === false): then nothing is shown
const shown = (d, q) => { const C = d && DIAGRAM_BY_ID[d.id]?.component; return C && (!C.usable || C.usable(q)) ? d : null; };

// nomor video = urutan stabil yang sama dengan scripts/record-videos.mjs
const man = JSON.parse(fs.readFileSync('public/data/_manifest.json', 'utf8'));
const all = man.items.filter(it => it.type === 'subbab' || it.type === 'chapter')
  .sort((a, b) => (a.subBab || a.chapter || '').localeCompare(b.subBab || b.chapter || ''));
const videos = fs.readdirSync('recordings-final').filter(f => f.endsWith('.webm'));
const byNum = new Map(all.map((it, i) => [i + 1, it]));

const rows = [], perVideo = [];
for (const v of videos.sort()) {
  const pkg = byNum.get(Number(v.slice(0, 3)));
  if (!pkg?.file) { perVideo.push({ v, err: 'paket tidak ditemukan' }); continue; }
  const d = JSON.parse(fs.readFileSync('public/data/' + pkg.file, 'utf8'));
  const c = { foto: 0, objek: 0, diagram: 0, tidak: 0 };
  for (const q of d.questions ?? []) {
    const stem = String(q.question ?? '');
    let jenis, ref = null;
    const foto = matchObjekFoto(q, d.subject);
    const dia = !foto && shown(matchDiagram(q, d.subject), q);
    const obj = kwList.filter(([, re]) => re.test(stem)).map(([id]) => id);
    if (foto) { jenis = 'foto'; ref = foto.objek?.id; }
    else if (dia) { jenis = 'diagram'; ref = dia.id; }
    else if (obj.length) { jenis = 'objek'; ref = obj.join(','); }
    else jenis = 'tidak';
    c[jenis]++;
    rows.push({ video: v.slice(0, 3), pkg: pkg.id, subject: d.subject, n: q.number, jenis, ref, subTopic: q.subTopic, stem: stem.replace(/\s+/g, ' ').slice(0, 220) });
  }
  perVideo.push({ v, pkg: pkg.id, total: d.questions?.length ?? 0, ...c });
}
await server.close();

fs.writeFileSync(path.join(HERE, 'cakupan.json'), JSON.stringify(rows, null, 1));
const sum = (k) => perVideo.reduce((s, p) => s + (p[k] || 0), 0);
const md = [`# Cakupan ilustrasi per soal (video di recordings-final/)`, '',
  `Di-generate oleh \`_src/audit-cakupan.mjs\`. ${perVideo.length} video, ${sum('total')} soal.`, '',
  `| | Jumlah soal |`, `|---|---:|`,
  `| Foto objek lolos review (tampil di app) | ${sum('foto')} |`, `| Diagram SVG app | ${sum('diagram')} |`,
  `| Objek ada di katalog, foto belum lolos/dipakai | ${sum('objek')} |`, `| Tanpa ilustrasi | ${sum('tidak')} |`, '',
  `| Video | Paket | Soal | Foto | Diagram | Objek | Tanpa |`, `|---|---|---:|---:|---:|---:|---:|`,
  ...perVideo.map(p => p.err ? `| ${p.v} | ❌ ${p.err} | | | | | |` : `| ${p.v.slice(0, 3)} | ${p.pkg} | ${p.total} | ${p.foto} | ${p.diagram} | ${p.objek} | ${p.tidak} |`)];
fs.writeFileSync(path.join(APP, 'image-prompts', '_CAKUPAN.md'), md.join('\n') + '\n');
console.log(`${perVideo.length} video, ${sum('total')} soal · foto ${sum('foto')} · diagram ${sum('diagram')} · objek ${sum('objek')} · tanpa ${sum('tidak')}`);
