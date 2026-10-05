// Self-check for src/utils/mtkParse.js (+ how many real MTK soal each reader understands).
//   node scripts/check-mtk-parse.mjs [samples.txt]
import assert from 'assert';
import { readFileSync, writeFileSync } from 'fs';
import { parseInequality, parseRounding, parsePercent, parseExpression, simpleIntegerSum, parseLinePoints } from '../src/utils/mtkParse.js';

const ineq = (s) => { const r = parseInequality(s); return r && `x ${r.op} ${r.bound}`; };
assert.strictEqual(ineq('Tentukan penyelesaian dari x + 5 > 9.'), 'x > 4');
assert.strictEqual(ineq('Tentukan penyelesaian dari x − 3 < 7.'), 'x < 10');
assert.strictEqual(ineq('Tentukan penyelesaian dari 2x ≥ 10.'), 'x ≥ 5');
assert.strictEqual(ineq('Tentukan penyelesaian dari 3x − 2 ≥ 7.'), 'x ≥ 3');

const rnd = (s) => { const r = parseRounding(s); return r && [r.lower, r.upper, r.result].map((v) => +v.toFixed(4)); };
assert.deepStrictEqual(rnd('Hasil pembulatan bilangan **47** ke puluhan terdekat adalah ...'), [40, 50, 50]);
assert.deepStrictEqual(rnd('Hasil pembulatan bilangan **3,4** ke satuan terdekat adalah ...'), [3, 4, 3]);
assert.deepStrictEqual(rnd('Hasil pembulatan **1.567** ke ratusan terdekat adalah ...'), [1500, 1600, 1600]);
assert.deepStrictEqual(rnd('Pembulatan **3,478** ke 1 angka desimal adalah ...'), [3.4, 3.5, 3.5]);
assert.deepStrictEqual(rnd('Hasil pembulatan **45** ke puluhan terdekat adalah ...'), [40, 50, 50]);

const pct = (s) => { const r = parsePercent(s); return r && [r.kind, +r.p.toFixed(2), r.whole, +r.part.toFixed(2)]; };
assert.deepStrictEqual(pct('25% dari 80 sama dengan ...'), ['dari', 25, 80, 20]);
assert.deepStrictEqual(pct('Berapa persen 15 dari 60?'), ['berapa', 25, 60, 15]);
assert.deepStrictEqual(pct('10% dari 500 adalah ...'), ['dari', 10, 500, 50]);

const ex = (s) => parseExpression(s)?.result;
assert.strictEqual(ex('Hitunglah: `5 + 3 × 2 = ....`'), 11);
assert.strictEqual(ex('Hitunglah: `20 ÷ (5 − 1) = ....`'), 5);
assert.strictEqual(ex('Hitunglah: `2³ + 4 = ....`'), 12);
assert.strictEqual(ex('Hitunglah: (−4) × (−6) = ....'), 24);
assert.strictEqual(ex('Hitunglah: 10 − (−4) = ....'), 14);
assert.strictEqual(ex('Hasil dari 9² + 2² adalah …'), 85);
assert.strictEqual(ex('Nilai dari √49 adalah …'), 7);
assert.strictEqual(ex('Hitunglah: 36 ÷ (−9) = ....'), -4);
assert.deepStrictEqual(parseExpression('Hitunglah: `(6 + 4) × 3 = ....`').lines, ['(6 + 4) × 3', '10 × 3', '30']);
assert.strictEqual(parseExpression('Hasil dari 1/2 + 1/3 adalah'), null);
assert.deepStrictEqual(simpleIntegerSum('Hitunglah: −8 + 5 = ....'), { a: -8, op: '+', b: 5, end: -3 });
assert.deepStrictEqual(simpleIntegerSum('Hitunglah: 7 + (−12) = ....'), { a: 7, op: '+', b: -12, end: -5 });
assert.strictEqual(parseExpression('Hasil dari −1 + 2 − 3 + 4 − ... − 19 + 20 adalah ....'), null);
assert.strictEqual(parseExpression('Hitunglah: `−2² + (−3)² × 2 = ....`'), null);
assert.strictEqual(parseExpression('Jumlah angka pada hasil 25² adalah …'), null);
assert.strictEqual(parseExpression('Hasil 2 × 3 × 5 = 30. Banyak faktor dari 30 adalah ...'), null);
const lp = (s) => parseLinePoints(s)?.map((p) => `${p.label}=${p.value}`).join(' ');
assert.strictEqual(lp('Diagram garis tinggi tanaman selama 4 minggu: minggu 1 = 5 cm, minggu 2 = 8 cm, minggu 3 = 12 cm, minggu 4 = 15 cm. Pada minggu keberapa?'), 'minggu 1=5 minggu 2=8 minggu 3=12 minggu 4=15');
assert.strictEqual(lp('Diagram garis suhu kota A selama 5 hari: Senin 28°C, Selasa 30°C, Rabu 27°C, Kamis 32°C, Jumat 29°C.'), 'Senin=28 Selasa=30 Rabu=27 Kamis=32 Jumat=29');
assert.strictEqual(lp('Diagram garis suhu badan Andi (°C): - Senin: 37, Selasa: 38, Rabu: 39, Kamis: 38, Jumat: 37.'), 'Senin=37 Selasa=38 Rabu=39 Kamis=38 Jumat=37');
assert.strictEqual(lp('Diagram garis tinggi badan Budi (cm): - Umur 6: 110, Umur 7: 115, Umur 8: 120, Umur 9: 128, Umur 10: 135.'), 'Umur 6=110 Umur 7=115 Umur 8=120 Umur 9=128 Umur 10=135');
assert.strictEqual(parseInequality('Penyelesaian dari 2x − 5 ≤ 11 adalah...')?.bound, 8);
assert.strictEqual(lp('Diagram garis pengunjung museum: Sn 100, Sl 120, Rb 90, Km 110, Jm 130. Pada hari apa?'), 'Sn=100 Sl=120 Rb=90 Km=110 Jm=130');
console.log('assert ok');

// coverage over real MTK soal (unique stems)
const man = JSON.parse(readFileSync('public/data/_manifest.json', 'utf8'));
const seen = new Set(); const cnt = { ineq: 0, rnd: 0, pct: 0, expr: 0, sum: 0 }; const samples = [];
for (const p of man.items) {
  if (!p.file || p.subject !== 'mtk') continue;
  for (const q of JSON.parse(readFileSync('public/data/' + p.file, 'utf8')).questions ?? []) {
    const k = q.question.slice(0, 90); if (seen.has(k)) continue; seen.add(k);
    const r = { ineq: parseInequality(q.question), rnd: parseRounding(q.question), pct: parsePercent(q.question), expr: parseExpression(q.question), sum: simpleIntegerSum(q.question) };
    for (const [name, v] of Object.entries(r)) if (v) {
      cnt[name] += 1;
      samples.push(`${name} ${JSON.stringify(name === 'expr' ? v.lines : v)} :: ${q.options?.[q.answerKey]} :: ${q.question.replace(/\s+/g, ' ').slice(0, 120)}`);
    }
  }
}
console.log(cnt);
if (process.argv[2]) writeFileSync(process.argv[2], samples.join('\n'));

// konversi
const { parseConversion } = await import('../src/utils/mtkParse.js');
const cv = (s) => parseConversion(s)?.result;
assert.strictEqual(cv('Hasil konversi **2 cm** ke mm adalah ...'), 20);
assert.strictEqual(cv('Hasil konversi **1.500 m** ke km adalah ...'), 1.5);
assert.strictEqual(cv('3 m² = ... cm²'), 30000);
assert.strictEqual(cv('2,5 liter = ... ml'), 2500);
assert.strictEqual(cv('5 ha = ... m²'), 50000);
assert.strictEqual(cv('4 liter = ... cm³'), 4000);
assert.strictEqual(cv('3 ons = ... gram'), 300);
console.log('konversi ok');
const seen2 = new Set(); let okc = 0; const badc = [];
const numk = (s) => { const x = String(s).replace(/[−–]/g, '-').replace(/\.(?=\d{3})/g, '').replace(',', '.').match(/-?\d+(\.\d+)?/); return x ? Number(x[0]) : null; };
for (const p of man.items) {
  if (!p.file || p.subject !== 'mtk') continue;
  for (const q of JSON.parse(readFileSync('public/data/' + p.file, 'utf8')).questions ?? []) {
    const k = q.question.slice(0, 90); if (seen2.has(k)) continue; seen2.add(k);
    const r = parseConversion(q.question); if (!r) continue;
    const key = numk(q.options?.[q.answerKey]);
    if (key != null && Math.abs(key - r.result) < 1e-6 * Math.max(1, Math.abs(r.result))) okc += 1; else badc.push(`${r.result} vs ${q.options?.[q.answerKey]} :: ${q.question.replace(/\s+/g, ' ').slice(0, 120)}`);
  }
}
console.log('konversi vs kunci: cocok', okc, 'beda', badc.length); console.log(badc.slice(0, 25).join('\n'));

const { parseFactorTask, factorPairs, isPrime } = await import('../src/utils/mtkParse.js');
assert.deepStrictEqual(parseFactorTask('Faktor dari 18 adalah ...'), { kind: 'faktor', n: 18 });
assert.deepStrictEqual(parseFactorTask('Banyaknya faktor dari 12 adalah ...'), { kind: 'faktor', n: 12 });
assert.deepStrictEqual(parseFactorTask('Tiga kelipatan pertama dari 5 adalah ...'), { kind: 'kelipatan', n: 5 });
assert.deepStrictEqual(parseFactorTask('Bilangan prima terkecil adalah ….'), { kind: 'prima', upto: 50 });
assert.strictEqual(parseFactorTask('Banyak bilangan asli dari 1 sampai 100 yang merupakan kelipatan 6 atau kelipatan 15 adalah'), null);
assert.strictEqual(parseFactorTask('FPB dari 12 dan 18 adalah'), null);
assert.deepStrictEqual(factorPairs(18), [[1, 18], [2, 9], [3, 6]]);
assert.deepStrictEqual([1, 2, 9, 11, 49].map(isPrime), [false, true, false, true, false]);
console.log('faktor ok');
