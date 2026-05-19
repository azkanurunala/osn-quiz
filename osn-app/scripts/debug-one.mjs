#!/usr/bin/env node
// Debug parser on a single file. Usage: node scripts/debug-one.mjs <path>
import { readFileSync } from 'fs';

const target = process.argv[2] || 'c:/Prospects/osn-sd/output/osn-sd-ipa-komprehensif-sulit.md';
const text = readFileSync(target, 'utf-8').replace(/\r\n?/g, '\n');
const lines = text.split('\n');

const SEP_CLASS = '[·•・|.\\-–—]';
const headerRe = new RegExp(`^###\\s+Soal\\s+(\\d+)\\s*${SEP_CLASS}\\s*(.+?)\\s*${SEP_CLASS}\\s*(.+)$`);

const headers = lines.map((l, i) => ({ l, i })).filter(({ l }) => /^###\s+Soal\s/i.test(l));
console.log('Total ### Soal headers:', headers.length);
let matched = 0, failed = 0;
for (const { l, i } of headers) {
  const m = l.match(headerRe);
  if (m) {
    matched++;
    if (matched <= 3) console.log(`L${i}  MATCH: n=${m[1]}  topic=${JSON.stringify(m[2])}  level=${JSON.stringify(m[3])}`);
  } else {
    failed++;
    if (failed <= 5) console.log(`L${i}  NO MATCH: ${l.slice(0, 80)}`);
  }
}
console.log(`\n${matched} matched / ${failed} failed`);
