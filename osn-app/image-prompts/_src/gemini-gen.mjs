// Generate gambar otomatis lewat Gemini API dari file prompt + gambar acuan, simpan ke image-results/.
// Jalankan dari osn-app:
//   node image-prompts/_src/gemini-gen.mjs --models                 daftar model gambar yang tersedia untuk key ini
//   node image-prompts/_src/gemini-gen.mjs --dry-run komodo jantung  cek rencana tanpa memanggil API
//   node image-prompts/_src/gemini-gen.mjs komodo jantung            generate (slot yang sudah ada gambarnya dilewati)
// Opsi: --slots p01,p02  hanya slot tertentu · --force  timpa gambar lama · --model <nama>  ganti model
// API key dibaca dari env GEMINI_API_KEY (jangan ditulis di file mana pun).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(HERE, '../..');
const API = 'https://generativelanguage.googleapis.com/v1beta';
if (!process.env.GEMINI_API_KEY && fs.existsSync(path.join(APP, '.env'))) process.loadEnvFile(path.join(APP, '.env'));   // osn-app/.env (di-.gitignore)
const KEY = process.env.GEMINI_API_KEY;

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };
const valueFlags = new Set(['--slots', '--model']);
const ids = args.filter((a, i) => !a.startsWith('--') && !valueFlags.has(args[i - 1]));
const DRY = flag('--dry-run');
const FORCE = flag('--force');
const SLOTS = opt('--slots')?.split(',');
// --hemat: per objek hanya 1 ilustrasi tampak depan/atas + penampang dibelah (kalau ada), model termurah
const HEMAT = flag('--hemat');
const HEMAT_RE = /p\d+-(ilustrasi-(depan|atas)|penampang-belah)\.png$/;
const MODEL = opt('--model') || process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// --vertex: lewat Vertex AI (login gcloud, tanpa API key). Bisa memakai kredit Google Cloud, tidak seperti Gemini API.
// Project & konfigurasi gcloud: env VERTEX_PROJECT / GCLOUD_CONFIG, default project OSN di bawah.
const VERTEX = flag('--vertex');
const V_PROJECT = process.env.VERTEX_PROJECT || 'project-a087bc92-937b-4ba3-859';
const V_CONFIG = process.env.GCLOUD_CONFIG || 'osn-sd';
const V_URL = (model) => `https://aiplatform.googleapis.com/v1/projects/${V_PROJECT}/locations/global/publishers/google/models/${model}:generateContent`;
let vToken = null, vTokenAt = 0;
async function authHeaders() {
  if (!VERTEX) return { 'x-goog-api-key': KEY };
  if (!vToken || Date.now() - vTokenAt > 40 * 60 * 1000) {   // token gcloud berlaku ±60 menit
    const { execSync } = await import('node:child_process');
    vToken = execSync('gcloud auth print-access-token', { env: { ...process.env, CLOUDSDK_ACTIVE_CONFIG_NAME: V_CONFIG }, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    vTokenAt = Date.now();
  }
  return { authorization: `Bearer ${vToken}` };
}

async function call(url, body) {
  for (let i = 0; i < 6; i++) {
    const r = await fetch(url, { method: body ? 'POST' : 'GET', headers: { ...(await authHeaders()), 'content-type': 'application/json' }, body: body && JSON.stringify(body) });
    if (r.ok) return r.json();
    const t = await r.text();
    if (r.status === 429 && /free_tier[^\n]*limit: 0|limit: 0[^\n]*free_tier/.test(t)) {
      console.error('✗ Kuota tier GRATIS untuk model ini = 0. Model gambar Gemini hanya bisa dipakai setelah billing diaktifkan di Google AI Studio (https://aistudio.google.com → Billing).');
      process.exit(2);
    }
    if (r.status === 429 || r.status >= 500) { const w = 15000 * (i + 1); console.log(`  ⏳ HTTP ${r.status}, tunggu ${w / 1000}s`); await sleep(w); continue; }
    throw new Error(`HTTP ${r.status}: ${t.slice(0, 400)}`);
  }
  throw new Error('gagal setelah 6 percobaan (rate limit / server)');
}

// ---- biaya: harga resmi paid tier (USD per 1 juta token), cek ulang di https://ai.google.dev/gemini-api/docs/pricing ----
const PRICE = {
  'gemini-3-pro-image': { in: 2.00, out: 120.00, think: 12.00 },
  'gemini-3-pro-image-preview': { in: 2.00, out: 120.00, think: 12.00 },
  'gemini-3.1-flash-image': { in: 0.50, out: 60.00, think: 3.00 },
  'gemini-3.1-flash-image-preview': { in: 0.50, out: 60.00, think: 3.00 },
  'gemini-2.5-flash-image': { in: 0.30, out: 30.00, think: 2.50 },
};
const USAGE = path.join(APP, 'image-results', '_usage.jsonl');
const cost = (model, u = {}) => {
  const p = PRICE[model]; if (!p) return null;
  const thinking = u.thoughtsTokenCount || 0;
  return ((u.promptTokenCount || 0) * p.in + ((u.candidatesTokenCount || 0)) * p.out + thinking * p.think) / 1e6;
};
if (flag('--biaya')) {
  if (!fs.existsSync(USAGE)) { console.log('Belum ada catatan pemakaian (_usage.jsonl).'); process.exit(0); }
  const rows = fs.readFileSync(USAGE, 'utf8').trim().split('\n').map(l => JSON.parse(l));
  const by = {};
  for (const r of rows) { const k = r.model; by[k] ||= { n: 0, img: 0, usd: 0 }; by[k].n++; by[k].img += r.ok ? 1 : 0; by[k].usd += cost(r.model, r.usage) || 0; }
  let tot = 0;
  for (const [m, v] of Object.entries(by)) { tot += v.usd; console.log(`${m}: ${v.img} gambar dari ${v.n} panggilan ≈ $${v.usd.toFixed(3)}`); }
  console.log(`TOTAL ≈ $${tot.toFixed(2)} (perkiraan dari token yang dilaporkan API; angka resmi: Google Cloud Billing)`);
  process.exit(0);
}

if (flag('--models')) {
  if (!KEY) throw new Error('GEMINI_API_KEY belum di-set');
  const d = await call(`${API}/models?pageSize=200`);
  for (const m of d.models.filter(m => /image/i.test(m.name))) console.log(m.name.replace('models/', ''), '—', m.displayName);
  process.exit(0);
}

// ---- baca prompt .md → daftar slot {n, file, text, followUp} ----
function findMd(id) {
  for (const mapel of ['ipa', 'mtk']) for (const bab of fs.readdirSync(path.join(APP, 'image-prompts', mapel))) {
    const p = path.join(APP, 'image-prompts', mapel, bab, id + '.md');
    if (fs.existsSync(p)) return p;
  }
  throw new Error('prompt tidak ditemukan: ' + id);
}
function parse(id) {
  const md = fs.readFileSync(findMd(id), 'utf8');
  const acuanLine = md.match(/^ {2}`(Use the attached reference images ONLY[^`]*)`$/m)?.[1] || null;
  const acuan = [...md.matchAll(/^ {2}- `(image-results\/[^`]+\/acuan-\d+\.(?:jpg|png))`/gm)].map(m => path.join(APP, m[1]));
  const slots = [];
  const re = /### Prompt (\d+) — [^\n]*\n\n\*\*Simpan hasil sebagai:\*\* `([^`]+)`\n\n```text\n([\s\S]*?)\n```/g;
  for (const m of md.matchAll(re)) slots.push({ n: +m[1], out: path.join(APP, m[2]), text: m[3], followUp: m[3].startsWith('Using the exact same') });
  return { acuanLine, acuan, slots };
}

// sesi: slot mandiri memulai sesi baru; slot follow-up melanjutkan sesi sebelumnya (supaya objeknya konsisten)
function sessions(slots) {
  const out = [];
  for (const s of slots) (s.followUp && out.length ? out[out.length - 1] : (out.push([]), out[out.length - 1])).push(s);
  return out;
}

const exists = (p) => ['.png', '.jpg', '.jpeg', '.webp'].some(e => fs.existsSync(p.replace(/\.png$/, e)));
const mime = (p) => p.endsWith('.png') ? 'image/png' : 'image/jpeg';

if (!ids.length) { console.log('Sebutkan id objek, mis.: node image-prompts/_src/gemini-gen.mjs komodo'); process.exit(1); }
if (!DRY && !VERTEX && !KEY) throw new Error('GEMINI_API_KEY belum di-set (lihat README bagian "Generate otomatis")');

let made = 0, skipped = 0, failed = 0;
for (const id of ids) {
  const { acuanLine, acuan, slots } = parse(id);
  console.log(`\n■ ${id} — ${slots.length} slot, ${acuan.length} acuan, model ${MODEL}`);
  for (const sess of sessions(slots)) {
    const want = sess.filter(s => (!SLOTS || SLOTS.includes(`p${String(s.n).padStart(2, '0')}`)) && (!HEMAT || HEMAT_RE.test(s.out)));
    if (!want.length) continue;
    if (!FORCE && want.every(s => exists(s.out))) { skipped += want.length; console.log(`  ↷ lewati ${want.map(s => 'p' + s.n).join(',')} (sudah ada)`); continue; }
    // follow-up butuh gambar depan di sesi yang sama → kalau slot follow-up diminta, jalankan seluruh sesinya
    const run = want.some(s => s.followUp) ? sess : want;
    const history = [];
    for (const s of run) {
      const parts = [];
      if (!s.followUp && acuan.length) {
        for (const a of acuan) parts.push({ inline_data: { mime_type: mime(a), data: fs.readFileSync(a).toString('base64') } });
        if (acuanLine) parts.push({ text: acuanLine });
      }
      parts.push({ text: s.text });
      const tag = `p${String(s.n).padStart(2, '0')}`;
      if (DRY) { console.log(`  • ${tag}${s.followUp ? ' (lanjutan sesi)' : ''} → ${path.relative(APP, s.out)} [${parts.length - 1} lampiran]`); continue; }
      history.push({ role: 'user', parts });
      try {
        const imageConfig = { aspectRatio: /TURNAROUND/.test(s.text) ? '16:9' : '1:1' };
        const d = await call(VERTEX ? V_URL(MODEL) : `${API}/models/${MODEL}:generateContent`, { contents: history, generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig } });
        const cand = d.candidates?.[0];
        const img = cand?.content?.parts?.find(p => p.inlineData || p.inline_data);
        fs.appendFileSync(USAGE, JSON.stringify({ t: new Date().toISOString(), id, slot: tag, model: MODEL, ok: !!img, usage: d.usageMetadata || null }) + '\n');
        if (!img) throw new Error('tidak ada gambar di respons: ' + (cand?.finishReason || JSON.stringify(d.promptFeedback || {})));
        history.push({ role: 'model', parts: cand.content.parts });   // simpan utuh (termasuk thought signature) untuk langkah lanjutan
        const data = (img.inlineData || img.inline_data).data;
        fs.writeFileSync(s.out, Buffer.from(data, 'base64'));
        const ph = s.out.replace(/\.png$/, '.svg'); if (fs.existsSync(ph)) fs.rmSync(ph);
        made++; console.log(`  ✓ ${tag} → ${path.relative(APP, s.out)}`);
      } catch (e) {
        failed++; console.log(`  ✗ ${tag} gagal: ${e.message}`);
        if (!s.followUp) break;        // tanpa gambar depan, lanjutan sesi tidak bermakna
        history.pop();
      }
      await sleep(4000);
    }
  }
}
console.log(`\nSelesai: ${made} dibuat, ${skipped} dilewati, ${failed} gagal.${made ? ' Jalankan node image-prompts/_src/gen.mjs lalu minta Claude "cek gambar".' : ''}`);
