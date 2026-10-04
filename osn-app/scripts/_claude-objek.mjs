import { readFileSync } from 'fs';
import { createServer } from 'vite';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { matchObjekFoto } = await server.ssrLoadModule('/src/features/diagrams/objekFoto.js');
const man = JSON.parse(readFileSync('public/data/_manifest.json', 'utf8'));
const seen = new Set(); const per = {};
for (const p of man.items) {
  if (!p.file || p.subject !== 'ipa') continue;
  const d = JSON.parse(readFileSync('public/data/' + p.file, 'utf8'));
  (d.questions ?? []).forEach((q, i) => {
    const m = matchObjekFoto(q, 'ipa'); if (!m) return;
    const key = q.question.slice(0, 80); if (seen.has(key)) return; seen.add(key);
    per[m.objek.id] = (per[m.objek.id] ?? 0) + 1;
    console.log(`[${m.objek.id}] ${p.subBab ?? p.id}#${i + 1}: ${q.question.replace(/\s+/g, ' ').slice(0, 170)}`);
  });
}
console.log(JSON.stringify(per));
await server.close();
