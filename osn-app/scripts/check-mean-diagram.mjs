// Self-check for parseMeanData (MeanMedianModus draws the soal's own data) + coverage over real MTK soal.
//   node scripts/check-mean-diagram.mjs
import { createServer } from 'vite';
import assert from 'assert';
import { readFileSync } from 'fs';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { parseMeanData } = await server.ssrLoadModule('/src/utils/meanData.js');
const t = (s) => parseMeanData(s);
let r = t('Mean dari 5 bilangan adalah 20. Empat bilangan di antaranya adalah 18, 22, 19, dan 21. Bilangan kelima adalah ...');
assert.deepStrictEqual([r.kind, r.mean, r.n, r.values], ['hilang', 20, 5, [18, 22, 19, 21]]);
r = t('Rata-rata uang saku 5 anak adalah Rp 8.000. Empat anak punya uang saku Rp 7.000, Rp 9.000, Rp 8.500, dan Rp 7.500. Uang saku anak kelima adalah ...');
assert.deepStrictEqual([r.kind, r.mean, r.values], ['hilang', 8000, [7000, 9000, 8500, 7500]]);
r = t('Mean dari 4 angka adalah 12,5. Tiga angka sudah diketahui: 10, 14, dan 13. Angka keempat adalah ...');
assert.deepStrictEqual([r.kind, r.mean, r.values], ['hilang', 12.5, [10, 14, 13]]);
r = t('Nilai 5 ulangan IPA: 70, 80, 60, 90, 75. Berapa rata-ratanya?');
assert.deepStrictEqual([r.kind, r.values], ['lengkap', [70, 80, 60, 90, 75]]);
r = t('Rata-rata 6 nilai siswa adalah 75. Berapa jumlah seluruh nilai?');
assert.deepStrictEqual([r.kind, r.n, r.mean], ['jumlah', 6, 75]);
r = t('Berat 4 karung beras adalah 25 kg, 30 kg, 28 kg, dan 33 kg. Berapa rata-rata berat satu karung?');
assert.deepStrictEqual([r.kind, r.values], ['lengkap', [25, 30, 28, 33]]);
assert.strictEqual(t('Data: 12, 15, x, 18, 22. Jika median data = 17, berapa nilai x?').kind, null);
assert.strictEqual(t('Data set A: 5, 7, 9, 11, 13. Data set B: 6, 8, 10. Setelah digabung, berapa median?').kind, null);
assert.strictEqual(t('Data: 12, 15, 18, 20, 22. Jika nilai 12 diganti dengan 10, berapa median baru?').changed, true);
assert.notStrictEqual(t('Rata-rata nilai 3 siswa adalah 80. Jika ditambah 2 siswa baru dengan nilai 70 dan 90, rata-rata 5 siswa adalah ...').kind, 'hilang');
assert.strictEqual(t('Tinggi badan 11 siswa kelas 6 (cm): 130, 132, 135, 128, 140, 138, 142, 130, 135, 145, 132. Berapa median-nya?').values.length, 11);
console.log('assert ok');
// coverage over real soal
const man = JSON.parse(readFileSync('public/data/_manifest.json', 'utf8'));
const { matchDiagram } = await server.ssrLoadModule('/src/features/diagrams/matchDiagram.js');
const seen = new Set(); const kinds = {}; const samples = [];
for (const p of man.items) {
  if (!p.file || p.subject !== 'mtk') continue;
  for (const q of JSON.parse(readFileSync('public/data/' + p.file, 'utf8')).questions ?? []) {
    if (matchDiagram(q, 'mtk')?.id !== 'mean-median-modus') continue;
    const k = q.question.slice(0, 90); if (seen.has(k)) continue; seen.add(k);
    const d = parseMeanData(q.question); kinds[d.kind] = (kinds[d.kind] ?? 0) + 1;
    if (samples.length < 900) samples.push(`${d.kind} n=${d.n} mean=${d.mean} [${d.values}] :: ${q.question.replace(/\s+/g, ' ').slice(0, 130)}`);
  }
}
console.log(kinds);
if (process.argv[2]) (await import('fs')).writeFileSync(process.argv[2], samples.join('\n'));
await server.close();
