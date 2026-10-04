// Bar-chart questions present their dataset in several different shapes depending on who authored
// the JSON. This module normalises all of them into one structure so DiagramBatang can draw the
// question's own numbers instead of a generic sketch:
//
//   1. text-art rows:   Apel   : ████████   (8)
//   2. plain rows:      Kelas 5A : 30
//   3. unit rows:       Andi   : 7 kotak        (with "skala 1 kotak = 5" in the stem)
//   4. inline lists:    Sen=80, Sel=120, Rab=140, Kam=110, Jum=150
//   5. prose lists:     Senin 30 kg, Selasa 45 kg, Rabu 25 kg, Kamis 50 kg
//   6. grouped rows:    Kelas 5A : L=15, P=18   /   Mapel MTK : Kelas5=25, Kelas6=30
//
// `flattenTextBars` separately rewrites only the text-art rows for inline question rendering.

const BLOCKS = '█▇▆▅▄▃▂▁■▓';
const ART_RE = new RegExp(`^\\s*(.+?)\\s*:\\s*([${BLOCKS}]+)\\s*(?:\\(\\s*([\\d.,]+)\\s*\\))?\\s*$`);

// "1.200" = thousands dots; "7,4" = decimal comma; "30" = plain.
function parseNum(raw) {
  const s = String(raw).trim();
  if (s.includes(',')) return Number(s.replace(/\./g, '').replace(',', '.'));
  if (/^\d{1,3}(\.\d{3})+$/.test(s)) return Number(s.replace(/\./g, ''));
  return Number(s);
}

// One "Label = 30", "Label : 30", or prose "Label 30 kg" item.
function parseToken(token) {
  const t = token.trim();
  if (!t) return null;
  let m = t.match(/^(.*?)\s*=\s*([\d][\d.,]*)\s*([A-Za-z%]*)$/);
  if (m) return { label: m[1].trim(), value: parseNum(m[2]), unit: m[3] || '' };
  m = t.match(/^(.*?)\s*:\s*([\d][\d.,]*)\s*([A-Za-z%]*)$/);
  if (m) return { label: m[1].trim(), value: parseNum(m[2]), unit: m[3] || '' };
  // Prose fallback: the label must not contain digits, so "nilai 60 ada 5 anak" is rejected
  // rather than being misread as label "nilai 60 ada" = 5.
  m = t.match(/^([A-Za-z][A-Za-z .-]*?)\s+([\d][\d.,]*)\s*([A-Za-z%]*)$/);
  if (m) return { label: m[1].trim(), value: parseNum(m[2]), unit: m[3] || '' };
  return null;
}

// Like parseToken, but tolerates trailing prose after the number ("Kamis 50 kg. Total?" -> 50 kg).
// Only reachable from a comma/semicolon list, so it can't swallow a whole explanatory sentence.
function parseTokenLoose(token) {
  const m = String(token).trim().match(/^([A-Za-z][A-Za-z .-]*?)\s+([\d][\d.,]*)\s*([A-Za-z%]*)/);
  if (!m) return null;
  const label = m[1].trim();
  if (!label || label.split(/\s+/).length > 4) return null;
  return { label, value: parseNum(m[2]), unit: m[3] || '' };
}

// A comma/semicolon list of items — only accepted when every item parses, so a stray number inside
// an explanatory sentence can't masquerade as a data point.
function tokenList(str) {
  const tokens = str.split(/[;,]/).map((s) => s.trim()).filter(Boolean);
  if (tokens.length < 2) return null;
  const out = [];
  for (const token of tokens) {
    const parsed = parseToken(token) || parseTokenLoose(token);
    if (!parsed || !parsed.label) return null;
    out.push(parsed);
  }
  return out;
}

// "Kelas 5A : L=15, P=18" -> { label, entries: [{ key, value }] }
function groupedRow(line) {
  const m = line.match(/^(.+?)\s*:\s*([A-Za-z]\w*\s*=\s*[\d.,]+\s*(?:[,;]\s*[A-Za-z]\w*\s*=\s*[\d.,]+\s*)+)$/);
  if (!m) return null;
  const entries = [...m[2].matchAll(/([A-Za-z]\w*)\s*=\s*([\d.,]+)/g)].map((x) => ({ key: x[1], value: parseNum(x[2]) }));
  return entries.length >= 2 ? { label: m[1].trim(), entries } : null;
}

/**
 * @param {string} text question text
 * @returns {{
 *   bars: {label:string, value:number, unit:string, boxes:number, given:boolean}[],
 *   grouped: {label:string, pairs:Record<string,number>}[],
 *   names: string[],
 *   intro: string,
 *   scale: string|null,
 * }}
 *   `given` = the number was written out; when false `value` is the text-art box count.
 *   `grouped` is non-empty only for two-series ("ganda") charts; `names` are its legend keys.
 */
export function parseTextBars(text) {
  const src = String(text ?? '');

  let intro = (src.split('\n').find((line) => line.trim()) || '').trim();
  const colon = intro.indexOf(':');
  if (colon > 0) intro = intro.slice(0, colon);

  const scale = src.match(/skala\s*:?\s*\(?\s*(1\s*kotak\s*=\s*[^).\n]+)/i)?.[1]?.trim() ?? null;

  const bars = [];
  const grouped = [];
  const names = [];

  const pushGrouped = (label, entries) => {
    if (entries.length < 2) return false;
    const pairs = {};
    for (const { key, value } of entries) {
      pairs[key] = value;
      if (!names.includes(key)) names.push(key);
    }
    grouped.push({ label, pairs });
    return true;
  };

  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line || line === '```') continue;

    const art = line.match(ART_RE);
    if (art) {
      const boxes = [...art[2]].length;
      const given = art[3] != null;
      bars.push({ label: art[1].trim(), value: given ? parseNum(art[3]) : boxes, unit: '', boxes, given });
      continue;
    }

    const group = groupedRow(line);
    if (group && pushGrouped(group.label, group.entries)) continue;

    // One bar per line: "Kelas 5A : 30", "Ali : 4 buku", "Sen = 80".
    // "Kelas A : 18 dari 25" → nilai 18, keterangan "dari 25".
    const row = line.match(/^(.*?)\s*[=:]\s*([\d][\d.,]*)\s*(dari\s+[\d.,]+|[A-Za-z%]*)$/);
    if (row && row[1].trim() && !/[=,;]/.test(row[1])) {
      bars.push({ label: row[1].trim(), value: parseNum(row[2]), unit: row[3] || '', boxes: parseNum(row[2]), given: true });
      continue;
    }

    let list = tokenList(line);
    if (!list && line.includes(':')) list = tokenList(line.slice(line.indexOf(':') + 1));
    if (list) {
      for (const item of list) bars.push({ ...item, boxes: item.value, given: true });
      continue;
    }

    // "Q1=10/40, Q2=20/50" — two series separated by a slash, category = the label.
    const slash = [...line.matchAll(/([A-Za-z]\w*)\s*=\s*([\d.,]+)\s*\/\s*([\d.,]+)/g)];
    if (slash.length >= 2) {
      // Series names come from a note like "(Format: Sport/Sedan per kuartal)" when the stem has one.
      const hint = src.match(/format\s*:\s*([^)\n]+?)(?:\s+per\b[^)\n]*)?\)/i)?.[1].split('/').map((s) => s.trim());
      const [n1, n2] = hint?.length === 2 && hint.every(Boolean) ? hint : ['Seri 1', 'Seri 2'];
      for (const name of [n1, n2]) if (!names.includes(name)) names.push(name);
      for (const s of slash) {
        grouped.push({ label: s[1], pairs: { [n1]: parseNum(s[2]), [n2]: parseNum(s[3]) } });
      }
    }
  }

  return { bars, grouped, names, intro, scale };
}

/** Replace text-art bar rows with "Label: N" (or "Label: 4 kotak") and drop the ``` fences. */
export function flattenTextBars(text) {
  if (text == null || !/[█▇▆▅▄▃▂▁■▓]/.test(text)) return text;
  const lines = String(text).split('\n').filter((line) => line.trim() !== '```');
  const rows = lines.map((line) => line.match(new RegExp(`^\\s*(.+?)\\s*:\\s*([${BLOCKS}]+)\\s*(?:\\(\\s*([\\d.,]+)\\s*\\))?\\s*$`)));
  // Inline rendering collapses newlines, so punctuate the list to keep it readable on one line.
  return lines
    .map((line, i) => {
      const m = rows[i];
      if (!m) return line;
      const item = `${m[1].trim()}: ${m[3] != null ? m[3] : `${[...m[2]].length} kotak`}`;
      return item + (rows[i + 1] ? ',' : '.');
    })
    .join('\n');
}

/**
 * Teks soal tanpa blok ``` yang berisi data grafik. Dipakai saat datanya sudah digambar sebagai
 * diagram, supaya angka yang sama tidak muncul dua kali dan blok mentahnya tidak tampil sebagai
 * kotak hitam. Blok ``` lain (mis. gambar jaring-jaring dari [ ]) dibiarkan.
 */
export function stripDataBlocks(text) {
  return String(text ?? '')
    .replace(/```[a-z]*\n?([\s\S]*?)(?:```|$)/gi, (block, body) => {
      const p = parseTextBars(body);
      return p.bars.length >= 2 || p.grouped.length >= 2 ? '' : block;
    })
    .replace(/[ \t]*\n{2,}/g, '\n')
    .trim();
}
