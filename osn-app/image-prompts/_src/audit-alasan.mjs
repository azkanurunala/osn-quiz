// node image-prompts/_src/audit-alasan.mjs <out.json>   (dari osn-app/)
// Per soal in every package of the manifest: which object picture / diagram the app would show, and
// for a soal that names exactly one catalog object but gets no picture, the rule that rejected it
// (matchObjekFoto's `why`: require, not-for, di-opsi, daftar-koma, ...). Use it after changing
// REQUIRE / NOT_FOR in src/features/diagrams/objekFoto.js: diff two runs to see which pairs appear or vanish.
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; import { createServer } from 'vite';
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'); process.chdir(APP);
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { matchObjekFoto } = await server.ssrLoadModule('/src/features/diagrams/objekFoto.js');
const { matchDiagram } = await server.ssrLoadModule('/src/features/diagrams/matchDiagram.js');
const { DIAGRAM_BY_ID } = await server.ssrLoadModule('/src/features/diagrams/registry.js');
const shownDia = (d, q) => { const C = d && DIAGRAM_BY_ID[d.id]?.component; return C && (!C.usable || C.usable(q)) ? d : null; };
const man = JSON.parse(fs.readFileSync('public/data/_manifest.json', 'utf8'));
const pkgs = man.items.filter((it) => (it.type === 'subbab' || it.type === 'chapter') && it.file);
const rows = [];
for (const it of pkgs) {
  const d = JSON.parse(fs.readFileSync('public/data/' + it.file, 'utf8'));
  for (const q of d.questions ?? []) {
    const why = {};
    const m = matchObjekFoto(q, d.subject, { anyPicture: true, why });
    const dia = shownDia(matchDiagram(q, d.subject), q);
    const mtk = String(d.subject).toLowerCase() === 'mtk';
    rows.push({
      pkg: it.id ?? it.file, subject: d.subject, n: q.number,
      foto: m && m.objek.file ? m.objek.id : null, fotoNoFile: m && !m.objek.file ? m.objek.id : null,
      dia: dia?.id ?? null, reason: m ? null : why.code ?? null, obj: why.id ?? null,
      // what the app would really show for this soal
      shows: mtk ? (dia ? 'diagram' : m && m.objek.file ? 'foto' : null) : (m && m.objek.file ? 'foto' : dia ? 'diagram' : null),
      stem: String(q.question ?? '').replace(/\s+/g, ' ').slice(0, 260),
    });
  }
}
await server.close();
fs.writeFileSync(process.argv[2], JSON.stringify(rows));
console.log(rows.length, 'soal');
