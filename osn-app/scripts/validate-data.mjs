#!/usr/bin/env node
// validate-data.mjs — Sanity check semua paket JSON hasil build-data.mjs
import { readdirSync, readFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, '..', 'public', 'data');

const ISSUES = [];
function log(file, sev, msg) { ISSUES.push({ file, sev, msg }); }

function validatePacket(file, j) {
  if (!j.title) log(file, 'warn', 'title kosong');
  if (!Array.isArray(j.questions)) { log(file, 'error', 'questions bukan array'); return; }
  if (j.questions.length === 0) { log(file, 'error', '0 soal'); return; }
  if (j.questions.length < 50) log(file, 'warn', `${j.questions.length} soal (<50)`);
  let blankQ = 0, blankOpt = 0, badKey = 0, missingAnalysis = 0;
  for (const q of j.questions) {
    if (!q.question || !q.question.trim()) blankQ++;
    const opts = q.options || {};
    if (!opts.A || !opts.B || !opts.C || !opts.D) blankOpt++;
    if (!['A','B','C','D'].includes(q.answerKey)) badKey++;
    const an = q.analysis || {};
    if (!an[q.answerKey] || !an[q.answerKey].trim()) missingAnalysis++;
  }
  if (blankQ) log(file, 'warn', `${blankQ} soal dengan question text kosong`);
  if (blankOpt) log(file, 'warn', `${blankOpt} soal dengan opsi A/B/C/D kosong`);
  if (badKey) log(file, 'error', `${badKey} soal dengan answerKey invalid`);
  if (missingAnalysis) log(file, 'warn', `${missingAnalysis} soal tanpa analysis untuk kunci jawaban`);
}

const files = readdirSync(DATA_DIR).filter(f => f.endsWith('.json') && f !== '_manifest.json');
console.log(`Validasi ${files.length} paket di ${DATA_DIR}\n`);

let totalQ = 0, totalTheorySect = 0;
for (const f of files) {
  try {
    const j = JSON.parse(readFileSync(join(DATA_DIR, f), 'utf-8'));
    validatePacket(f, j);
    totalQ += (j.questions || []).length;
    totalTheorySect += (j.theory || []).length;
  } catch (e) { log(f, 'error', `JSON parse: ${e.message}`); }
}

const errs = ISSUES.filter(i => i.sev === 'error');
const warns = ISSUES.filter(i => i.sev === 'warn');

console.log(`✓ ${files.length} file divalidasi`);
console.log(`  Total soal: ${totalQ.toLocaleString()}`);
console.log(`  Total seksi teori: ${totalTheorySect.toLocaleString()}`);
console.log(`  Errors: ${errs.length}   Warnings: ${warns.length}`);

if (errs.length) {
  console.log(`\n=== ERRORS ===`);
  for (const i of errs.slice(0, 30)) console.log(`  [E] ${i.file}: ${i.msg}`);
  if (errs.length > 30) console.log(`  ... ${errs.length - 30} more`);
}
if (warns.length) {
  console.log(`\n=== WARNINGS ===`);
  const byMsg = {};
  warns.forEach(w => { const k = w.msg.replace(/\d+/g, 'N'); (byMsg[k] = byMsg[k] || []).push(w); });
  for (const [k, list] of Object.entries(byMsg).sort((a,b) => b[1].length - a[1].length)) {
    console.log(`  [${list.length}×] ${k}`);
    for (const w of list.slice(0, 3)) console.log(`        └─ ${w.file}: ${w.msg}`);
    if (list.length > 3) console.log(`        ... ${list.length - 3} lainnya`);
  }
}

process.exit(errs.length ? 1 : 0);
