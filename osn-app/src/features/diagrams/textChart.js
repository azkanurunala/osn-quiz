// Soal statistika menulis datanya sebagai teks di dalam blok ``` :
//   Apel   : ████████   (8)        ← batang teks, angka di dalam kurung
//   Kelas 5A : 30                   ← label : angka (boleh ada satuan, mis. "4 buku")
//   Kelas A : 18 dari 25            ← angka + keterangan
//   Kelas 6A : L=18, P=12           ← data ganda (dua seri)
//   Kelas 1 : 12 ; Kelas 2 : 18     ← satu baris dipisah titik koma
// Ditampilkan mentah, blok ini muncul sebagai kotak hitam dan tanda ``` di tengah kalimat. Di sini
// datanya diangkat jadi grafik sungguhan, dan bloknya dibuang dari teks soal.

// Blok yang lupa ditutup (```...akhir teks) tetap dianggap blok.
const FENCE_RE = /```[a-z]*\n?([\s\S]*?)(?:```|$)/gi;
const BAR_CHARS = '█▓▒░■▇▆▅▄▃▂▁';
const NUM = '(-?\\d+(?:[.,]\\d+)?)';
// label :/= [batang teks opsional] (angka) [keterangan]
const ROW_RE = new RegExp(`^\\s*(.+?)\\s*[:=]\\s*[${BAR_CHARS}\\s]*\\(?\\s*${NUM}\\s*\\)?\\s*([^${BAR_CHARS}]*?)\\s*$`);
// label : L=18, P=12   (dua seri bernama)
const GROUP_RE = /^\s*(.+?)\s*:\s*((?:[^=,;:]+=\s*-?\d+(?:[.,]\d+)?\s*,?\s*){2,})$/;
// label = 10/40   (dua seri, nama seri di teks soal: "Format: Sport/Sedan")
const SLASH_RE = /^\s*(.+?)\s*[:=]\s*(\d+(?:\s*\/\s*\d+)+)\s*$/;
const num = (s) => Number(String(s).replace(',', '.'));

// "A=75, B=85, C=70" atau "2020 = 80 ; 2021 = 120" dalam satu baris → satu item per baris.
function itemsOf(block) {
  const lines = String(block ?? '').split('\n').filter((l) => l.trim());
  if (lines.length !== 1) return lines;
  const line = lines[0];
  if (line.includes(';')) return line.split(';').filter((l) => l.trim());
  if ((line.match(/=/g) || []).length >= 2) return line.split(',').filter((l) => l.trim());
  return lines;
}

/** Pecah teks soal menjadi potongan teks biasa dan blok kode. */
export function splitFences(text) {
  const s = String(text ?? '');
  const out = [];
  let last = 0;
  for (const m of s.matchAll(FENCE_RE)) {
    if (!m[0]) break;
    if (m.index > last) out.push({ type: 'text', value: s.slice(last, m.index) });
    out.push({ type: 'code', value: m[1].replace(/\s+$/, '') });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ type: 'text', value: s.slice(last) });
  return out;
}

/**
 * Baris data. null kalau ada satu saja baris yang bukan data.
 * @returns {null | { series: string[]|null, rows: {label:string, value:number, values?:number[], note:string}[] }}
 */
export function parseRows(block, seriesHint = null) {
  const lines = itemsOf(block);
  if (lines.length < 2) return null;

  const slashed = lines.map((l) => l.match(SLASH_RE));
  if (slashed.every(Boolean)) {
    const rows = slashed.map((m) => {
      const values = m[2].split('/').map((v) => num(v.trim()));
      return { label: m[1].trim(), value: values.reduce((a, b) => a + b, 0), values, note: '' };
    });
    const n = rows[0].values.length;
    if (rows.every((r) => r.values.length === n)) {
      const series = seriesHint?.length === n ? seriesHint : Array.from({ length: n }, (_, i) => `Seri ${i + 1}`);
      return { series, rows };
    }
  }

  const grouped = lines.map((l) => l.match(GROUP_RE));
  if (grouped.every(Boolean)) {
    const series = [...grouped[0][2].matchAll(/([^=,;:]+?)\s*=/g)].map((m) => m[1].trim());
    const rows = grouped.map((m) => {
      const values = [...m[2].matchAll(/=\s*(-?\d+(?:[.,]\d+)?)/g)].map((v) => num(v[1]));
      return { label: m[1].trim(), value: values.reduce((a, b) => a + b, 0), values, note: '' };
    });
    if (rows.every((r) => r.values.length === series.length)) return { series, rows };
  }

  const rows = [];
  for (const line of lines) {
    const m = line.match(ROW_RE);
    if (!m) return null;
    rows.push({ label: m[1].trim(), value: num(m[2]), note: m[3].trim() });
  }
  return { series: null, rows };
}

// Judul grafik = kalimat terakhir sebelum blok data, tanpa titik dua, tanpa awalan "Diagram batang".
function titleFrom(before) {
  const plain = before.replace(/\*\*/g, '').trim();
  const sentence = plain.split(/(?<=[.?!])\s+/).pop() || '';
  return sentence
    .replace(/:\s*$/, '')
    .replace(/\s*—.*$/, '')
    .replace(/^(diagram|grafik)\s+batang\s*/i, '')
    .replace(/^(menunjukkan|tentang|berikut|data)\s+/i, '')
    .trim();
}

/**
 * Ambil grafik batang dari teks soal.
 * @returns {{ stem: string, chart: null | {
 *   type: 'bar', title: string, unit: string, series: string[]|null,
 *   rows: {label:string, value:number, values?:number[], note:string}[] } }}
 *   stem = teks soal tanpa blok data (blok kode lain tetap ada, dirender monospace oleh QuestionText).
 */
export function extractChart(question) {
  const text = String(question?.question ?? '');
  const parts = splitFences(text);
  // Nama seri untuk data "10/40": "(Format: Sport/Sedan per kuartal)" di mana pun dalam soal.
  const seriesHint = text.match(/format\s*:\s*([^)\n]+?)(?:\s+per\b[^)\n]*)?\)/i)?.[1].split('/').map((s) => s.trim()) || null;
  const at = parts.findIndex((p) => p.type === 'code' && parseRows(p.value, seriesHint));
  if (at === -1) return { stem: text, chart: null };

  const { series, rows } = parseRows(parts[at].value, seriesHint);
  const before = parts.slice(0, at).filter((p) => p.type === 'text').map((p) => p.value).join(' ');
  // Satuan: sama di semua baris ("4 buku") → pakai itu; kalau tidak, ambil dari kurung di judul,
  // tapi hanya kalau isinya memang satuan ("(kg)", "(dalam kuintal)", "(unit)"), bukan keterangan.
  const notes = [...new Set(rows.map((r) => r.note).filter(Boolean))];
  const unitInTitle = before.match(/\((?:dalam\s+)?([a-zA-Z]{1,12})\)\s*:?\s*$/)?.[1]
    || before.match(/\((?:dalam\s+)?([a-zA-Z]{1,12})\)/)?.[1] || '';
  const sharedUnit = notes.length === 1 && rows.every((r) => r.note === notes[0]) ? notes[0] : '';
  const chart = {
    type: 'bar',
    title: titleFrom(before) || 'Diagram batang',
    unit: sharedUnit || unitInTitle,
    series,
    rows: rows.map((r) => ({ ...r, note: sharedUnit ? '' : r.note })),
  };
  const stem = parts
    .filter((_, i) => i !== at)
    .map((p) => (p.type === 'code' ? '```\n' + p.value + '\n```' : p.value))
    .join('')
    .replace(/[ \t]*\n{2,}/g, '\n')
    .trim();
  return { stem, chart };
}
