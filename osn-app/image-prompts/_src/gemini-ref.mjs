// Redraw a flat vector/schematic as a photoreal picture with Gemini, keeping the schematic's camera angle, pose and part counts.
// For views Gemini keeps getting wrong (rear / underside / left lateral): our vector drawing fixes the geometry,
// an approved realistic front picture of the same object supplies appearance and style.
//
//   node image-prompts/_src/gemini-ref.mjs --vertex --guide <schematic.png> [--species <front-photo.png>] \
//        --subject "<what must be visible>" --out <dir> [--name kecoak-p03] [--n 2] [--model gemini-3-pro-image]
//
// Output: <dir>/<name>-<k>.png candidates. Nothing is written into image-results/: review a candidate first,
// then install it by hand (archive the old slot as *.lamaN.png and its verdict as "<key>.lamaN").
// Auth: Vertex AI through the separate gcloud configuration "osn-sd" (never the default configuration), no API key.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (f, d = null) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const guide = opt('--guide'); const species = opt('--species'); const subject = opt('--subject'); const out = opt('--out');
const guideDesc = opt('--guide-desc'); const speciesDesc = opt('--species-desc'); const name = opt('--name', 'kandidat'); const N = Number(opt('--n', 2)); const MODEL = opt('--model', 'gemini-3-pro-image');
if (!args.includes('--vertex') || !guide || !subject || !out) { console.error('usage: --vertex --guide <png> [--species <png>] --subject "<text>" --out <dir> [--name x] [--n 2] [--model m]'); process.exit(1); }
const V_PROJECT = process.env.VERTEX_PROJECT || 'project-a087bc92-937b-4ba3-859';
const V_CONFIG = process.env.GCLOUD_CONFIG || 'osn-sd';
const ENDPOINT = `https://aiplatform.googleapis.com/v1/projects/${V_PROJECT}/locations/global/publishers/google/models/${MODEL}:generateContent`;
const USAGE = path.join(process.cwd(), 'image-results', '_usage.jsonl');   // run from osn-app/
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const token = () => execSync('gcloud auth print-access-token', { env: { ...process.env, CLOUDSDK_ACTIVE_CONFIG_NAME: V_CONFIG }, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
const part = (p) => ({ inline_data: { mime_type: /\.png$/i.test(p) ? 'image/png' : 'image/jpeg', data: fs.readFileSync(p).toString('base64') } });

const text = [
  guideDesc || 'Image 1 is a flat schematic. It fixes the exact camera angle, pose, composition and the exact number and arrangement of parts (legs, limbs, antennae, wings, vessels) of the subject.',
  species ? (speciesDesc || 'Image 2 is a photograph of the same subject from the front. It fixes the real appearance: colors, surface texture, proportions, lighting and photographic style.') : '',
  `Produce ONE photorealistic photograph of the subject laid out exactly as in Image 1 (same viewpoint, same pose, same position in the frame, same part counts), rendered with the realistic look of ${species ? 'Image 2' : 'a real specimen'}.`,
  `The subject: ${subject}`,
  'Pure flat white background (#FFFFFF), nothing else in the frame, the whole subject fully visible with a margin on all sides, a faint contact shadow at most. ZERO text, letters, numbers, labels, arrows or logos. Exactly ONE copy of the subject: never a grid, collage, turnaround or multi-view sheet. Do not copy the flat colors or outlines of the schematic: it is a layout guide only.',
].filter(Boolean).join('\n');

fs.mkdirSync(out, { recursive: true });
const parts = [part(guide), ...(species ? [part(species)] : []), { text }];
let made = 0;
for (let k = 1; k <= N; k++) {
  let img = null; let d;
  for (let t = 0; t < 3 && !img; t++) {
    const r = await fetch(ENDPOINT, { method: 'POST', headers: { authorization: `Bearer ${token()}`, 'content-type': 'application/json' }, body: JSON.stringify({ contents: [{ role: 'user', parts }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: '1:1' } } }) });
    if (!r.ok) { const body = await r.text(); if (r.status === 429 || r.status >= 500) { console.log(`  HTTP ${r.status}, wait`); await sleep(20000 * (t + 1)); continue; } throw new Error(`HTTP ${r.status}: ${body.slice(0, 300)}`); }
    d = await r.json();
    img = d.candidates?.[0]?.content?.parts?.find((p) => p.inlineData || p.inline_data);
    fs.appendFileSync(USAGE, JSON.stringify({ t: new Date().toISOString(), id: name, slot: 'ref', model: MODEL, ok: !!img, usage: d.usageMetadata || null }) + '\n');
    if (!img) { console.log('  no image:', d.candidates?.[0]?.finishReason); await sleep(5000); }
  }
  if (!img) { console.log(`candidate ${k}: failed`); continue; }
  const file = path.join(out, `${name}-${k}.png`);
  fs.writeFileSync(file, Buffer.from((img.inlineData || img.inline_data).data, 'base64'));
  made++; console.log('wrote', file);
}
console.log(`${made}/${N} candidates -> ${out}`);
