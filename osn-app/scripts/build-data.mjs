#!/usr/bin/env node
// build-data.mjs — Parse all osn-sd-*.md markdown in output/ into per-file JSON + manifest.
// Usage: node scripts/build-data.mjs [outputDir] [destDir]
//   outputDir default: ../output (relative to osn-app)
//   destDir   default: ./public/data

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, basename, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const APP_ROOT = resolve(__dirname, '..');
const ROOT = process.argv[2] || resolve(APP_ROOT, '..', 'output');
const OUT_DIR = process.argv[3] || resolve(APP_ROOT, 'public', 'data');

const TIERS = ['mudah-sedang', 'sedang-sulit', 'campur', 'mudah', 'sedang', 'sulit'];

// ---------- filename parser ----------
function parseFilename(name) {
  const m = name.match(/^osn-sd-(.+)\.md$/);
  if (!m) return null;
  const body = m[1];
  let tier = null;
  let rest = null;
  for (const t of TIERS) {
    if (body === t) { tier = t; rest = ''; break; }
    if (body.endsWith('-' + t)) { tier = t; rest = body.slice(0, -t.length - 1); break; }
  }
  if (!tier) return null;
  return parseRest(rest, tier);
}

function parseRest(rest, tier) {
  if (!rest || rest === 'komprehensif') {
    return { type: 'universal', subject: 'all', chapter: null, subBab: null, slug: 'komprehensif', tier };
  }
  const parts = rest.split('-');
  const subject = parts[0];
  if (!['ipa', 'mtk'].includes(subject)) return null;
  if (parts[1] === 'komprehensif') {
    return { type: 'subject', subject, chapter: null, subBab: null, slug: 'komprehensif', tier };
  }
  const chapPart = parts[1] || '';
  const subBabMatch = chapPart.match(/^([0-9]+)([a-z])$/);
  if (subBabMatch) {
    return {
      type: 'subbab',
      subject,
      chapter: `${subject}-${subBabMatch[1]}`,
      subBab: `${subject}-${subBabMatch[1]}${subBabMatch[2]}`,
      slug: parts.slice(2).join('-'),
      tier,
    };
  }
  if (/^[0-9]+$/.test(chapPart)) {
    return {
      type: 'chapter',
      subject,
      chapter: `${subject}-${chapPart}`,
      subBab: null,
      slug: parts.slice(2).join('-'),
      tier,
    };
  }
  return null;
}

// ---------- markdown parser ----------
function parseFormatCBlock(blockLines, level, subTopicHint) {
  // Format C: starts with **N.** text, then `- A.` options, then **Kunci: X**, then **Pembahasan:**
  const firstLine = blockLines[0];
  const numMatch = firstLine.match(/^\*\*(\d+)\.\*\*\s*(.*)$/);
  if (!numMatch) return null;
  const number = parseInt(numMatch[1], 10);

  let optionsStart = -1, kunciLine = -1, pembLine = -1;
  for (let i = 0; i < blockLines.length; i++) {
    const ln = blockLines[i];
    if (optionsStart === -1 && (/^-\s+[A-D]\.\s+/.test(ln) || /^[A-D]\.\s+/.test(ln))) optionsStart = i;
    if (kunciLine === -1 && /^\*\*Kunci:?\s*[A-D]/i.test(ln)) kunciLine = i;
    if (pembLine === -1 && /^\*\*Pembahasan:?\*\*/i.test(ln)) pembLine = i;
  }
  if (optionsStart === -1) return null;

  // Question text: first line content + subsequent lines until options
  let qText = numMatch[2].trim();
  if (optionsStart > 1) {
    const cont = blockLines.slice(1, optionsStart)
      .map(l => l.trim()).filter(l => l && l !== '---').join('\n');
    qText = (qText + (qText && cont ? '\n' : '') + cont).trim();
  }

  // Options — accept "- A. text", bare "A. text", or inline "A. x   B. y   C. z   D. w"
  const options = { A: '', B: '', C: '', D: '' };
  const optEnd = kunciLine !== -1 ? kunciLine : (pembLine !== -1 ? pembLine : blockLines.length);
  function extractInlineOptsLocal(text) {
    const re = /([A-D])\.\s+([^]+?)(?=\s{2,}[A-D]\.\s+|\s+[A-D]\.\s+|$)/g;
    const result = {};
    let m;
    while ((m = re.exec(text)) !== null) {
      const v = m[2].trim();
      if (v) result[m[1]] = v;
    }
    return Object.keys(result).length >= 2 ? result : null;
  }
  for (let i = optionsStart; i < optEnd; i++) {
    let om = blockLines[i].match(/^-\s+([A-D])\.\s+(.+)$/);
    if (!om) om = blockLines[i].match(/^([A-D])\.\s+(.+)$/);
    if (om) {
      let t = om[2].trim();
      const fb = t.match(/^\*\*(.+)\*\*(.*)$/);
      if (fb && !fb[2].trim()) t = fb[1].trim();
      const multi = extractInlineOptsLocal(`${om[1]}. ${t}`);
      if (multi && Object.keys(multi).length >= 3) {
        Object.assign(options, multi);
      } else {
        options[om[1]] = t;
      }
    }
  }

  // answerKey
  let answerKey = null;
  if (kunciLine !== -1) {
    const km = blockLines[kunciLine].match(/^\*\*Kunci:?\s*([A-D])/i);
    if (km) answerKey = km[1].toUpperCase();
  }

  // Pembahasan: bullets like "- **A salah** — text" or "- **A benar** — text"
  let concept = '';
  const analysis = { A: '', B: '', C: '', D: '' };
  let tips = '';
  const steps = [];

  if (pembLine !== -1) {
    // Multiple analysis-bullet patterns:
    //   (a) "- **A benar** — text"                  (sub-bab style)
    //   (b) "- **A. text** — BENAR. reason"         (chapter-like, with caps)
    //   (c) "- A) **BENAR**. reason"                (mtk-02f-style)
    //   (d) "- A. **BENAR**. reason"
    const patA = /^-\s+\*\*([A-D])\s+(benar|salah)\*\*\s*[—–\-]?\s*(.*)$/i;
    const patB = /^-\s+\*\*([A-D])\.\s+([^*]+)\*\*\s*[—–\-]\s*(\w+)\.?\s*(.*)$/i;
    const patC = /^-\s+([A-D])\)\s+\*\*(BENAR|SALAH|benar|salah)\*\*\.?\s*(.*)$/i;
    const patD = /^-\s+([A-D])\.\s+\*\*(BENAR|SALAH|benar|salah)\*\*\.?\s*(.*)$/i;

    for (let i = pembLine + 1; i < blockLines.length; i++) {
      const line = blockLines[i];
      const t = line.trim();
      if (t === '---') break;

      let mt;
      if ((mt = line.match(patA))) {
        const letter = mt[1], verdict = mt[2].toLowerCase();
        analysis[letter] = mt[3].trim();
        if (verdict === 'benar' && !answerKey) answerKey = letter;
        continue;
      }
      if ((mt = line.match(patB))) {
        const letter = mt[1], verdict = mt[3].toLowerCase();
        analysis[letter] = mt[4].trim();
        if (verdict === 'benar' && !answerKey) answerKey = letter;
        continue;
      }
      if ((mt = line.match(patC)) || (mt = line.match(patD))) {
        const letter = mt[1], verdict = mt[2].toLowerCase();
        analysis[letter] = mt[3].trim();
        if (verdict === 'benar' && !answerKey) answerKey = letter;
        continue;
      }
      const conceptM = line.match(/^-\s+\*\*Konsep[^*]*\*\*:?\s*(.*)$/i);
      if (conceptM) { concept = conceptM[1].trim(); continue; }
      const tipsM = line.match(/^-\s+\*\*(?:💭\s*)?Tips?[^*]*\*\*:?\s*(.*)$/i);
      if (tipsM) { tips = tipsM[1].trim(); continue; }
    }
  }

  return {
    number,
    subTopic: subTopicHint || 'Latihan',
    level,
    question: qText,
    options,
    answerKey: answerKey || 'A',
    concept,
    analysis,
    steps,
    tips,
  };
}

function parseFormatC(lines, theoryEnd) {
  // Iterate sections like `### KAB · Soal 1-50` / `### PROV · ...` / `### NAS · ...` (or full names)
  const questions = [];
  let curLevel = null;
  let curSubTopicHint = null;
  let blocks = []; // current question buffer (list of line arrays)
  let curBlock = null;

  const levelFromHeader = (header) => {
    const u = header.toUpperCase();
    if (/(^|\s|·)KAB|KABUPATEN/.test(u)) return 'Kab';
    if (/PROV|PROVINSI/.test(u)) return 'Prov';
    if (/NAS|NASIONAL/.test(u)) return 'Nas';
    return null;
  };

  const flushBlock = () => {
    if (curBlock && curBlock.length) blocks.push({ level: curLevel, hint: curSubTopicHint, lines: curBlock });
    curBlock = null;
  };

  for (let i = theoryEnd; i < lines.length; i++) {
    const ln = lines[i];
    // section heading: any ##+ heading (level 2 or 3) that's NOT a soal number marker
    if (/^#{2,3}\s/.test(ln) && !/^###\s+Soal\s/i.test(ln) && !/^\*\*\d+\.\*\*/.test(ln)) {
      flushBlock();
      const lvl = levelFromHeader(ln);
      if (lvl) curLevel = lvl;
      curSubTopicHint = ln.replace(/^#+\s+/, '').replace(/[·•・|.\-–—].*/, '').trim();
      continue;
    }
    if (/^\*\*\d+\.\*\*/.test(ln)) {
      flushBlock();
      curBlock = [ln];
      continue;
    }
    if (curBlock) curBlock.push(ln);
  }
  flushBlock();

  for (const b of blocks) {
    const q = parseFormatCBlock(b.lines, b.level || 'Kab', b.hint);
    if (q) questions.push(q);
  }
  return questions;
}

function parseMarkdown(text) {
  // Normalize line endings: CRLF / CR → LF, strip stray \r
  const lines = text.replace(/\r\n?/g, '\n').split('\n');

  let title = '';
  for (const line of lines) {
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      title = line.slice(2).trim();
      break;
    }
  }

  // Locate theory + question region markers
  let bagianISection = -1;     // theory start marker
  let bagianIISection = -1;    // questions section marker
  let firstFormatABBlock = -1; // earliest `### Soal N ·`
  let firstFormatCMarker = -1; // earliest `**N.**`
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (bagianISection === -1 && /^#{1,3}\s+(Bagian|BAGIAN)\s+I\b/.test(ln) && !/II\b/.test(ln)) bagianISection = i;
    if (bagianIISection === -1 && /^#{1,3}\s+(Bagian|BAGIAN)\s+II\b/.test(ln)) bagianIISection = i;
    if (firstFormatABBlock === -1 && /^###\s+Soal\s/i.test(ln)) firstFormatABBlock = i;
    if (firstFormatCMarker === -1 && /^\*\*\d+\.\*\*/.test(ln)) firstFormatCMarker = i;
  }

  // Theory range
  let theoryStart = -1;
  let theoryEnd = lines.length;
  if (bagianISection !== -1) {
    theoryStart = bagianISection + 1;
    const candidates = [bagianIISection, firstFormatABBlock, firstFormatCMarker].filter((x) => x !== -1);
    if (candidates.length) theoryEnd = Math.min(...candidates);
  }
  // Region after theory where questions live
  const questionsRegionStart = [bagianIISection, firstFormatABBlock, firstFormatCMarker].filter((x) => x !== -1).sort((a, b) => a - b)[0];
  const firstSoalLine = firstFormatABBlock !== -1 ? firstFormatABBlock : (questionsRegionStart ?? -1);

  // Parse theory into [{title, content}] by ## or ### headings
  const theory = [];
  if (theoryStart !== -1 && theoryStart < theoryEnd) {
    let curTitle = null;
    let curBuf = [];
    const flush = () => {
      if (curTitle !== null) {
        const content = curBuf.join('\n').trim();
        if (content) theory.push({ title: curTitle, content });
      }
    };
    for (let i = theoryStart; i < theoryEnd; i++) {
      const line = lines[i];
      if (/^##\s+[^#]/.test(line) || /^###\s+[^#]/.test(line)) {
        flush();
        curTitle = line.replace(/^#+\s+/, '').trim();
        curBuf = [];
      } else if (/^#\s+[^#]/.test(line)) {
        flush();
        curTitle = null;
        curBuf = [];
      } else {
        if (curTitle !== null) curBuf.push(line);
      }
    }
    flush();
  }

  // Parse question blocks (format A/B: ### Soal N · ...)
  let questions = [];
  if (firstSoalLine !== -1) {
    let curBlock = [];
    const flush = () => {
      if (curBlock.length) {
        const q = parseQuestionBlock(curBlock);
        if (q) questions.push(q);
      }
    };
    for (let i = firstSoalLine; i < lines.length; i++) {
      const line = lines[i];
      if (/^###\s+Soal\s/i.test(line)) { flush(); curBlock = [line]; }
      else curBlock.push(line);
    }
    flush();
  }

  // Fallback to format C if no questions detected via format A/B headers
  if (questions.length === 0) {
    const cStart = (firstFormatCMarker !== -1)
      ? (questionsRegionStart ?? firstFormatCMarker)
      : theoryEnd;
    questions = parseFormatC(lines, cStart);
  }

  return { title, theory, questions };
}

function normLevel(raw) {
  const s = String(raw || '').trim().toLowerCase();
  if (s.startsWith('kab')) return 'Kab';
  if (s.startsWith('prov')) return 'Prov';
  if (s.startsWith('nas')) return 'Nas';
  return raw;
}

function parseQuestionBlock(lines) {
  const header = lines[0];
  // Accept any of: · (U+00B7) • (U+2022) ・ (U+30FB) . (period) | - – —
  const SEP = '[·•・|.\\-–—]';
  const m = header.match(new RegExp(`^###\\s+Soal\\s+(\\d+)\\s*${SEP}\\s*(.+?)\\s*${SEP}\\s*(.+)$`));
  if (!m) return null;
  const number = parseInt(m[1], 10);
  const subTopic = m[2].trim();
  const level = normLevel(m[3].trim());

  // Detect format by presence of structured markers
  const blockText = lines.join('\n');
  const hasStructured = /\*\*\(\d+\)\s*(Soal|Pilihan|Jawaban|Pembahasan)/i.test(blockText);

  // Locate key section starts
  let soalMarkerLine = -1, pilihanMarkerLine = -1, jawabanMarkerLine = -1, pembahasanLine = -1;
  let firstDashOptionLine = -1, firstBareOptionLine = -1;
  for (let i = 1; i < lines.length; i++) {
    const ln = lines[i];
    if (soalMarkerLine === -1 && /^\*\*(?:\(1\)\s*)?Soal:?\*\*/i.test(ln)) soalMarkerLine = i;
    if (pilihanMarkerLine === -1 && /^\*\*(?:\(2\)\s*)?Pilihan(?:\s+Jawaban)?:?\*\*/i.test(ln)) pilihanMarkerLine = i;
    if (jawabanMarkerLine === -1 && /^\*\*(?:\(3\)\s*)?Jawaban:?\*\*/i.test(ln)) jawabanMarkerLine = i;
    if (pembahasanLine === -1 && /\*\*[📖🔍]?\s*(?:\(\d+\)\s*)?Pembahasan/i.test(ln)) pembahasanLine = i;
    if (firstDashOptionLine === -1 && /^-\s+[A-D]\.\s+/.test(ln)) firstDashOptionLine = i;
    if (firstBareOptionLine === -1 && /^[A-D]\.\s+/.test(ln)) firstBareOptionLine = i;
  }

  // ----- Question text -----
  // Support both multi-line ("**(1) Soal:**\nText") and inline ("**(1) Soal:** Text").
  let questionLines;
  let inlineQ = '';
  if (soalMarkerLine !== -1) {
    const inlineMatch = lines[soalMarkerLine].match(/^\*\*(?:\(1\)\s*)?Soal:?\*\*\s*(.+)$/i);
    if (inlineMatch && inlineMatch[1].trim()) inlineQ = inlineMatch[1].trim();
    const end = pilihanMarkerLine !== -1 ? pilihanMarkerLine : (pembahasanLine !== -1 ? pembahasanLine : lines.length);
    questionLines = lines.slice(soalMarkerLine + 1, end);
  } else {
    const end = firstDashOptionLine !== -1 ? firstDashOptionLine : (firstBareOptionLine !== -1 ? firstBareOptionLine : (pembahasanLine !== -1 ? pembahasanLine : lines.length));
    questionLines = lines.slice(1, end);
  }
  const continuation = questionLines
    .map(l => l.replace(/^\s+/, '').replace(/\s+$/, ''))
    .filter(l => l && l !== '---')
    .join('\n').trim();
  const questionText = (inlineQ && continuation) ? `${inlineQ}\n${continuation}` : (inlineQ || continuation);

  // ----- Options -----
  // Support 3 layouts:
  //   (a) "- A. text" per line (sub-bab style)
  //   (b) "A. text" per line (bare)
  //   (c) inline on pilihanMarker / single line: "A. x   B. y   C. z   D. w"
  const options = { A: '', B: '', C: '', D: '' };
  let answerFromBold = null;

  function extractInlineOptions(text) {
    // Greedy left-to-right scan; capture text after each [A-D]. up to next [A-D]. or EOL.
    const re = /([A-D])\.\s+([^]+?)(?=\s{2,}[A-D]\.\s+|\s+[A-D]\.\s+|$)/g;
    const result = {};
    let m;
    while ((m = re.exec(text)) !== null) {
      const txt = m[2].trim();
      if (txt) result[m[1]] = txt;
    }
    return Object.keys(result).length >= 2 ? result : null;
  }

  // (c) Inline options on pilihanMarker line itself
  if (pilihanMarkerLine !== -1) {
    const pl = lines[pilihanMarkerLine].replace(/^\*\*(?:\(2\)\s*)?Pilihan(?:\s+Jawaban)?:?\*\*\s*/i, '');
    if (pl.trim()) {
      const inline = extractInlineOptions(pl);
      if (inline) Object.assign(options, inline);
    }
  }

  // (a)/(b) Per-line options
  const optionsStart = firstDashOptionLine !== -1 ? firstDashOptionLine : firstBareOptionLine;
  if (optionsStart !== -1) {
    const optionsEnd = jawabanMarkerLine !== -1 ? jawabanMarkerLine : (pembahasanLine !== -1 ? pembahasanLine : lines.length);
    for (let i = optionsStart; i < optionsEnd; i++) {
      const ln = lines[i];
      let om = ln.match(/^-\s+([A-D])\.\s+(.+)$/);
      if (!om) om = ln.match(/^([A-D])\.\s+(.+)$/);
      if (om) {
        let text = om[2].trim();
        const fullyBold = text.match(/^\*\*(.+)\*\*(.*)$/);
        if (fullyBold && !fullyBold[2].trim()) {
          text = fullyBold[1].trim();
          if (!answerFromBold) answerFromBold = om[1];
        }
        // Single-line multi-options? e.g. "A. 79 cm²    B. 120 cm²    C. ..."
        const multi = extractInlineOptions(`${om[1]}. ${text}`);
        if (multi && Object.keys(multi).length >= 3) {
          Object.assign(options, multi);
        } else {
          options[om[1]] = text;
        }
      }
    }
  }

  // Bail if still no options at all
  if (!options.A && !options.B && !options.C && !options.D) return null;

  // ----- Explicit jawaban marker -----
  let answerFromMarker = null;
  if (jawabanMarkerLine !== -1) {
    const jl = lines[jawabanMarkerLine];
    // Match a wide range:
    //   "**(3) Jawaban:** **C. text**"
    //   "**Jawaban:** **B**"
    //   "Jawaban: C"
    //   "**(3) Jawaban:** **C · text**"
    const jm = jl.match(/Jawaban:?\*?\*?[:\s]*\*?\*?([A-D])\s*(?:[.·•・)*\s]|$)/i);
    if (jm) answerFromMarker = jm[1].toUpperCase();
  }

  const pembahasanStart = pembahasanLine;

  // Parse pembahasan
  let answerKey = null;
  let concept = '';
  const analysis = { A: '', B: '', C: '', D: '' };
  let tips = '';
  const steps = [];

  if (pembahasanStart !== -1) {
    const pem = lines.slice(pembahasanStart + 1);
    let mode = null;
    let curLetter = null;
    let modeBuf = [];

    const flushMode = () => {
      if (mode === 'concept' && modeBuf.length) {
        concept = (concept + '\n' + modeBuf.join('\n')).trim();
      } else if (mode === 'tips' && modeBuf.length) {
        tips = (tips + '\n' + modeBuf.join('\n')).trim();
      } else if (mode === 'analysis-item' && curLetter && modeBuf.length) {
        analysis[curLetter] = (analysis[curLetter] + ' ' + modeBuf.join(' ')).trim();
      }
      modeBuf = [];
    };

    // Match analysis sub-bullets in either format (allow with or without leading whitespace):
    //   - **A benar:** text                (sub-bab; also seen top-level in some files)
    //   - **A salah — tag:** text
    //   - **A. opt text** — Benar/Salah. Reason  (chapter)
    const analysisItemRe1 = /^\s*-\s+\*\*([A-D])\s+(benar|salah)([^*]*?)\*\*:?\s*(.*)$/i;
    const analysisItemRe2 = /^\s*-\s+\*\*([A-D])\.\s+([^*]+)\*\*\s*[—–\-]\s*(\w+)\.?\s*(.*)$/i;

    const tryAnalysisItem = (line) => {
      let mt = line.match(analysisItemRe1);
      if (mt) {
        const verdict = mt[2].toLowerCase();
        const tag = (mt[3] || '').replace(/^\s*[—–\-]\s*/, '').trim();
        const rest = (mt[4] || '').trim();
        return { letter: mt[1], verdict, text: (tag ? `(${tag}) ` : '') + rest };
      }
      mt = line.match(analysisItemRe2);
      if (mt) {
        const verdict = mt[3].toLowerCase();
        const rest = (mt[4] || '').trim();
        return { letter: mt[1], verdict, text: rest };
      }
      return null;
    };

    for (let i = 0; i < pem.length; i++) {
      const line = pem[i];
      const trimmed = line.trim();
      if (trimmed === '---') break;

      // top-level sections (- **Label:** ...)
      const conceptMatch = line.match(/^-\s+\*\*Konsep(?:\s+kunci|\s+yang\s+diuji)?:?\*\*[:\s]*(.*)$/i);
      const analysisHeader = line.match(/^-\s+\*\*Analisis\s+(?:tiap|Setiap)\s+(?:opsi|Pilihan(?:\s+Jawaban)?):?\*\*/i);
      const stepsHeader = line.match(/^-\s+\*\*Langkah(?:\s+Penyelesaian)?(?:\s*\([^)]+\))?:?\*\*/i);
      const tipsMatch = line.match(/^-\s+\*\*(?:💭\s*)?Tips?(?:\s+transfer)?:?\*\*[:\s]*(.*)$/i);
      const hasilMatch = line.match(/^-\s+\*\*Hasil\s+akhir:?\*\*/i);

      if (conceptMatch) { flushMode(); mode = 'concept'; curLetter = null; const r = conceptMatch[1].trim(); if (r) modeBuf.push(r); continue; }
      if (analysisHeader) { flushMode(); mode = 'analysis'; curLetter = null; continue; }
      if (stepsHeader) { flushMode(); mode = 'steps'; curLetter = null; continue; }
      if (tipsMatch) { flushMode(); mode = 'tips'; curLetter = null; const r = tipsMatch[1].trim(); if (r) modeBuf.push(r); continue; }
      if (hasilMatch) { flushMode(); mode = null; curLetter = null; continue; }

      // Try analysis-item match regardless of mode — some files omit
      // the "Analisis tiap opsi:" header and put analysis bullets at top-level.
      const item = tryAnalysisItem(line);
      if (item) {
        flushMode();
        curLetter = item.letter;
        modeBuf = item.text ? [item.text] : [];
        if (item.verdict === 'benar' && !answerKey) answerKey = curLetter;
        mode = 'analysis-item';
        continue;
      }
      if (mode === 'analysis-item' && /^\s{2,}/.test(line) && trimmed && !line.startsWith('---')) {
        modeBuf.push(trimmed);
      } else if (mode === 'concept') {
        if (trimmed === '') continue;
        if (/^\s+/.test(line) && !line.startsWith('-')) modeBuf.push(trimmed);
        else if (!line.startsWith('-') && !line.startsWith('#')) modeBuf.push(trimmed);
      } else if (mode === 'tips') {
        if (trimmed === '') continue;
        if (/^\s+/.test(line) && !line.startsWith('-')) modeBuf.push(trimmed);
        else if (!line.startsWith('-') && !line.startsWith('#')) modeBuf.push(trimmed);
      } else if (mode === 'steps') {
        const sm = line.match(/^\s+\d+\.\s+(.+)$/) || line.match(/^\s+-\s+(.+)$/);
        if (sm) steps.push(sm[1].trim());
      }
    }
    flushMode();
  }

  if (!answerKey) answerKey = answerFromMarker || answerFromBold || 'A';
  void hasStructured;

  return {
    number, subTopic, level,
    question: questionText,
    options, answerKey,
    concept, analysis, steps, tips,
  };
}

// ---------- walk + main ----------
function walk(dir) {
  const out = [];
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, f.name);
    if (f.isDirectory()) {
      if (f.name === 'archive-v1') continue;
      out.push(...walk(p));
    } else if (f.name.endsWith('.md') && f.name.startsWith('osn-sd-')) {
      out.push(p);
    }
  }
  return out;
}

function main() {
  console.log(`Source: ${ROOT}`);
  console.log(`Dest:   ${OUT_DIR}\n`);

  if (existsSync(OUT_DIR)) {
    // wipe stale json before regenerate
    for (const f of readdirSync(OUT_DIR)) {
      if (f.endsWith('.json')) rmSync(join(OUT_DIR, f));
    }
  } else {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = walk(ROOT);
  const manifest = { version: 1, buildTime: new Date().toISOString(), items: [], errors: [] };

  let ok = 0, skipped = 0;
  for (const path of files) {
    const name = basename(path);
    const meta = parseFilename(name);
    if (!meta) {
      manifest.errors.push({ file: name, reason: 'unparsable filename' });
      skipped++; continue;
    }

    let parsed;
    try { parsed = parseMarkdown(readFileSync(path, 'utf-8')); }
    catch (e) {
      manifest.errors.push({ file: name, reason: `parse error: ${e.message}` });
      skipped++; continue;
    }

    if (parsed.questions.length === 0) {
      manifest.errors.push({ file: name, reason: 'no questions parsed' });
      skipped++; continue;
    }

    const id = name.replace(/^osn-sd-/, '').replace(/\.md$/, '');
    writeFileSync(
      join(OUT_DIR, `${id}.json`),
      JSON.stringify({ id, ...meta, title: parsed.title, theory: parsed.theory, questions: parsed.questions })
    );
    manifest.items.push({
      id, ...meta,
      title: parsed.title,
      questionCount: parsed.questions.length,
      theorySectionCount: parsed.theory.length,
      file: `${id}.json`,
    });
    ok++;
  }

  writeFileSync(join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 2));

  console.log(`\n✓ ${ok} files parsed, ${skipped} skipped`);
  if (manifest.errors.length) {
    console.log(`\nErrors (${manifest.errors.length}):`);
    for (const e of manifest.errors.slice(0, 20)) console.log(`  • ${e.file}: ${e.reason}`);
    if (manifest.errors.length > 20) console.log(`  ... and ${manifest.errors.length - 20} more`);
  }
}

main();
