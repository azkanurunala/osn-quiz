// Read-right-before-write merge of review verdicts. Usage: node _tmp-verdict.mjs <json-file>
import fs from 'node:fs';
const p = 'image-results/_review.json';
const updates = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const r = JSON.parse(fs.readFileSync(p, 'utf8'));
for (const [k, v] of Object.entries(updates)) r[k] = v;
fs.writeFileSync(p, JSON.stringify(r, null, 2));
const check = JSON.parse(fs.readFileSync(p, 'utf8'));
const missing = Object.keys(updates).filter((k) => check[k]?.status !== updates[k].status);
console.log('wrote', Object.keys(updates).length, '| verified missing:', missing.length, missing.join(' '));
