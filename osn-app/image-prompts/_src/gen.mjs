// Generator prompt gambar Gemini: baca katalog objek → tulis 1 file .md per objek + _INDEX.md.
// Jalankan dari folder osn-app: node image-prompts/_src/gen.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(HERE, '..');
const DATA = path.resolve(HERE, '../../public/data');

const X = (await import('./penampang.mjs')).default;
const SRC = fs.existsSync(path.join(HERE, 'sumber.cache.json')) ? JSON.parse(fs.readFileSync(path.join(HERE, 'sumber.cache.json'), 'utf8')) : {};
const ACUAN_LINE = 'Use the attached reference images ONLY to check the scientific accuracy of shape, proportions, colors, and anatomy of the subject. Do NOT copy their backgrounds, poses, framing, composition, labels, or any text — follow the prompt below for everything else.';
function sumberMd(o) {
  const r = SRC[o.id];
  if (!r) return '- **Sumber rujukan:** _belum diverifikasi dengan sumber web_\n';
  let s = '- **Sumber rujukan:**\n' + r.wiki.filter(w => !w.missing).map(w => `  - [${w.title} — Wikipedia EN](${w.url})${w.idUrl ? ` · [versi ID](${w.idUrl})` : ''}`).join('\n') + '\n';
  if (r.x?.length) s += r.x.map(([t, u]) => `  - [${t}](${u})`).join('\n') + '\n';
  const imgs = [].concat(r.img || []);
  if (imgs.length) s += `- **Gambar acuan (${imgs.length}):** unggah semuanya ke Gemini bersama prompt, lalu tempel kalimat ini di awal prompt:\n  \`${ACUAN_LINE}\`\n` + imgs.map(i => `  - \`${i.local}\` — [${i.file.replace(/^File:/, '')}](${i.page}), ${i.artist ? i.artist.slice(0, 80) + ', ' : ''}${i.license}`).join('\n') + '\n  - ⚠️ Gambar acuan hanya rujukan — jangan dipakai langsung di app/video.\n';
  if (r.note) s += `- **Catatan sumber:** ${r.note}\n`;
  return s;
}
const RES = path.resolve(HERE, '../../image-results');
const catalog = [];
for (const f of fs.readdirSync(HERE).filter(f => f.startsWith('catalog-')).sort()) {
  catalog.push(...(await import('./' + f)).default);
}

const BAB = {
  'ipa-01': ['ipa', '01-makhluk-hidup', 'IPA 01 · Makhluk Hidup & Lingkungan'],
  'ipa-02': ['ipa', '02-tubuh-manusia', 'IPA 02 · Tubuh Manusia & Kesehatan'],
  'ipa-03': ['ipa', '03-gaya-gerak-energi', 'IPA 03 · Gaya, Gerak, Energi, Listrik & Magnet'],
  'ipa-04': ['ipa', '04-cahaya-bunyi-panas-zat', 'IPA 04 · Cahaya, Bunyi, Panas & Zat'],
  'ipa-05': ['ipa', '05-bumi-antariksa', 'IPA 05 · Bumi, Antariksa & Lingkungan'],
  'ipa-06': ['ipa', '06-metode-ilmiah-alat-lab', 'IPA 06 · Metode Ilmiah & Alat Laboratorium'],
  'mtk-01': ['mtk', '01-bilangan-pecahan', 'MTK 01–02 · Bilangan, Pecahan, Desimal, Persen'],
  'mtk-03': ['mtk', '03-geometri-datar', 'MTK 03 · Geometri Datar & Sudut'],
  'mtk-04': ['mtk', '04-geometri-ruang', 'MTK 04 · Geometri Ruang'],
  'mtk-05': ['mtk', '05-pengukuran', 'MTK 05 · Pengukuran (Panjang, Berat, Volume, Waktu, Kecepatan, Debit)'],
  'mtk-06': ['mtk', '06-aritmetika-sosial', 'MTK 06 · Aritmetika Sosial & Skala'],
  'mtk-07': ['mtk', '07-statistika-peluang', 'MTK 07 · Statistika & Peluang'],
  'mtk-08': ['mtk', '08-pola-logika-aljabar', 'MTK 08 · Pola, Logika & Aljabar'],
};

const STYLE = {
  photo: 'studio product photograph',
  bio: 'natural-history studio photograph of a real, living specimen',
  anat: 'photograph of a museum-grade medical anatomical model with lifelike realistic tissue colors and textures, clean and bloodless, appropriate for elementary-school students',
  micro: 'photorealistic scientific 3D visualization (high-end biomedical render, electron-microscope-inspired realism, but in natural textbook colors)',
  space: 'photorealistic NASA-quality 3D render based on real spacecraft imagery',
};

const BG = {
  w: ['white', '#FFFFFF'],
  k: ['black', '#000000'],
};

// ---- index soal: berapa soal menyebut kata kunci objek ----
const files = fs.readdirSync(DATA).filter(f => f.endsWith('.json') && !f.startsWith('_'));
const qs = [];
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));
  for (const q of d.questions || []) {
    qs.push({ f: f.replace('.json', ''), n: q.number, t: [q.question, ...Object.values(q.options || {}), q.concept || ''].join(' ') });
  }
}

// kata utuh + akhiran umum Indonesia (-nya/-an/-kan), supaya 'ban' tidak cocok dengan 'jawaban'
const kwRe = (o) => new RegExp('(?<!\\p{L})(?:' + o.kw + ')(?:nya|an|kan)?(?!\\p{L})', 'iu');

// Dua gaya: 'real' (fotorealistis) & 'illus' (ilustrasi edukasi). Semua prompt wajib full body, tanpa tampak 3/4.
const FULL = (o) => o.set
  ? 'FULL VIEW: every listed item shown completely from its topmost to bottommost point, including all extremities (legs, tails, antennae, wings, roots, stems, cables, handles) — nothing cropped, nothing hidden behind another item, items not overlapping.'
  : 'FULL BODY: the entire object shown completely from its topmost to bottommost point, including all extremities (legs, tail, antennae, wingtips, fins, roots, stems, cables, handles) — nothing cropped, nothing cut off by the frame edge.';

// Versi ilustrasi organ menggambar organnya langsung, bukan maket plastik
const illusEn = (o) => o.s !== 'anat' ? o.en : o.en
  .replace(/^a (medical|museum-grade)? ?(anatomical )?model of /i, '')
  .replace(/ (anatomical )?models\b/gi, 's')
  .replace(/ (medical )?(anatomical )?model\b/gi, '');

function base(o, bg, mode) {
  const kid = o.s === 'bio' ? '\nChild-appropriate (students aged 10–12): in any rear or back view the tail hangs down naturally and covers the rear; no anus or genitals visible.' : '';
  const anat = o.s === 'anat' ? `\nAnatomical correctness: follow standard human anatomy exactly (Gray's Anatomy / Netter reference). Anatomical left/right = the PERSON'S left/right, so in the FRONT (anterior) view the person's left side appears on the viewer's RIGHT. Correct number of lobes, chambers, vessels, and bones; correct relative size and position of every part.` : '';
  const comp = `Composition: ONLY this single object${o.set ? ' set (exactly the items listed, nothing else)' : ''}, centered, about 10% empty margin on every side.
${FULL(o)}
Background: isolated on a pure, flat, solid ${bg[0]} background (${bg[1]}) — absolutely no scene, no environment, no floor, no table, no cast shadow, no reflection, no gradient, no vignette.`;

  if (mode === 'real') return `Ultra-photorealistic, hyper-detailed ${STYLE[o.s || 'photo']} of ${o.en}. ${o.d}
Accuracy: scientifically correct, true-to-life proportions, colors, and surface textures, as it would appear in a premium educational reference catalog. Every fine detail (texture, pores, grain, fibers, seams, veins, scratches) must be visible and physically plausible.
Lighting: soft, even, diffused three-point studio lighting — large softbox key light from front-left at 45°, gentle fill light from the right, subtle rim light from behind to separate the edges — no harsh shadows, no blown-out highlights.
Camera: 100mm lens at f/11, entire object in crisp focus from front to back, 8K resolution, ultra-sharp micro-detail, neutral true-to-life color grading.${anat}${kid}
${comp}
Exclude: text, labels, letters, numbers, arrows, watermark, logo, brand names, human hands, extra objects, blood, gore, cartoon or illustration style, CGI plastic look.`;

  return `High-quality, highly detailed educational illustration of ${illusEn(o)}${ILLUS_NOTE[o.s] || ''}. ${o.d}
Style: clean modern children's science-textbook illustration for elementary-school students (age 10–12) — crisp confident dark outlines with varied line weight, smooth soft cel shading (2–3 tone steps) plus gentle gradients, bright but true-to-life colors, simplified but anatomically and scientifically accurate shapes, every important part clearly readable. Friendly, clear, and appealing — not cute-chibi, not caricature, no exaggerated eyes or facial expressions.
Accuracy: correct proportions, colors, number of parts (legs, fins, petals, segments, etc.), and structure exactly as in the real ${same(o)}.
Lighting: one soft light source from the upper-left, consistent simple highlights and core shadows on the object only.
Rendering: vector-like clean edges, high resolution, sharp, suitable for printing and for use as a cut-out sticker.${anat}${kid}
${comp}
Exclude: text, labels, letters, numbers, arrows, watermark, logo, brand names, human hands, extra objects, blood, gore, photorealism, photographic textures, 3D render look, sketchy or messy lines, paper texture.`;
}

const ILLUS_NOTE = {
  anat: ', drawn as a clean, bloodless, textbook anatomical illustration (only the named structure, isolated — no surrounding skin, body outline, or other organs)',
  micro: ', drawn as a magnified textbook science illustration',
  space: ', drawn as an astronomy textbook illustration',
};

const same = (o) => o.en.replace(/^(an?|the|one|two|three|four) /i, '').split(/,| with | arranged/)[0];
const FRONT_DEF = 'FRONT = the side normally shown in textbooks';

// ---- slot gambar: 1 prompt = 1 file hasil di image-results/<mapel>/<bab>/<id>/pNN-<nama>.png ----
const VIEWS4 = ['turnaround', 'depan', 'belakang', 'kiri', 'kanan'];
function slots(o) {
  const views = o.v === 1 ? [o.top ? 'atas' : 'depan'] : VIEWS4;
  const s = [];
  for (const mode of ['realistis', 'ilustrasi']) for (const v of views) s.push(`${mode}-${v}`);
  if (X[o.id]) s.push('penampang-belah', 'penampang-transparan');
  return s.map((name, i) => ({ n: i + 1, file: `p${String(i + 1).padStart(2, '0')}-${name}` }));
}
const resDir = (o) => { const [mapel, dir] = BAB[o.bab]; return `image-results/${mapel}/${dir}/${o.id}`; };
const sv = (o, n) => `**Simpan hasil sebagai:** \`${resDir(o)}/${slots(o)[n - 1].file}.png\``;

function penampang(o, bg, n0) {
  const x = X[o.id];
  const code = (s) => '```text\n' + s + '\n```';
  const anat = o.s === 'anat' ? `\nAnatomical correctness: follow standard human anatomy exactly (Gray's Anatomy / Netter reference). Anatomical left/right = the PERSON'S left/right, so in the FRONT view the person's left side appears on the viewer's RIGHT.` : '';
  const common = `Internal parts — draw EVERY one of these as its own clearly separated region, in exactly these colors: ${x.p.replace(/.$/, "")}.
Schematic style: clean modern science-textbook SCHEMATIC for elementary-school students (age 10–12) — each region filled with its own distinct, harmonious, attractive flat color with soft cel shading, the boundary between neighboring regions traced with a crisp DASHED line (like a textbook diagram), the outer outline of the whole object solid and bold. Simplified but scientifically accurate shapes, positions, proportions, number of parts, and colors.${anat}
Composition: ONLY this object, centered, about 12% empty margin on every side. ${FULL(o)}
Background: pure, flat, solid ${bg[0]} background (${bg[1]}) — no scene, no floor, no shadow, no gradient.
ZERO TEXT: absolutely no words, titles, captions, labels, letters, or numbers anywhere in the image.${o.set ? ' Each item keeps its own separate section drawn directly beside it; do not reuse the same section for different items.' : ''}
Exclude: text, labels, letters, numbers, arrows, legend, watermark, logo, blood, gore, photorealism, messy or sketchy lines, glass spheres or bubbles around parts.`;
  return `
### Prompt ${n0} — Penampang dibelah (skematik, garis putus-putus)

${sv(o, n0)}

${code(`Educational SCHEMATIC CROSS-SECTION illustration of ${illusEn(o)}. Section: ${x.c}. The cut surface is flat and clean so all internal parts are fully visible.
${common}
Callouts: from each region draw one thin straight leader line ending in a small EMPTY circle (thin dark outline, white inside) placed outside the object (anchors for labels that will be added later) — the circles must stay completely empty, no text or numbers.
View: straight-on, orthographic, no three-quarter angle.`)}

### Prompt ${n0 + 1} — Transparan / tembus pandang (skematik)

${sv(o, n0 + 1)}

${code(`Educational SCHEMATIC SEE-THROUGH illustration of ${illusEn(o)}. The object's own outer surface (its real casing, wall, skin, or body parts — exactly its true outline) is drawn semi-transparent (about 25% opacity) so the internal parts are visible inside in their correct positions without cutting. Never add an extra enclosing shell, bottle, dome, or container around the object; open-frame parts stay open. Reference section for what must be visible: ${x.c}.
${common}
No leader lines, no circles.
View: straight-on FRONT view, orthographic, no three-quarter angle.`)}
`;
}

function prompts(o, bg, mode, n0) {
  const b = base(o, bg, mode);
  const orient = o.f || FRONT_DEF;
  const keep = mode === 'real'
    ? 'same object, same proportions, colors, textures, lighting, scale, and camera height'
    : 'same object, same illustration style, line weight, shading, colors, proportions, and scale';
  // objects with their own orientation (f) repeat it in the follow-ups; ONE copy of the object per image
  const tail = `${o.f ? `Orientation for this object: ${o.f}. ` : ''}Exactly ONE copy of the object — not a multi-view sheet. Full body — nothing cropped. Same pure solid ${bg[0]} background (${bg[1]}), no shadow, no text, nothing else in the frame.`;
  const code = (s) => '```text\n' + s + '\n```';

  if (o.v === 1) {
    return `
### Prompt ${n0} — Tampak ${o.top ? 'atas (lurus dari atas)' : 'depan (lurus)'}, full body

${sv(o, n0)}

${code(`${b}
View: perfectly straight-on ${o.top ? "top-down (bird's-eye, camera directly above)" : 'front'} view, orthographic, no perspective distortion, no three-quarter angle, object square to the camera.`)}
`;
  }

  return `
### Prompt ${n0} — Lembar 4 tampak sekaligus (turnaround)

${sv(o, n0)}

${code(`${b}
Layout: TURNAROUND REFERENCE SHEET — one wide image (16:9) showing EXACTLY FOUR copies of the object (not three, not five) side by side in ONE single horizontal row (never two rows), equal size, same scale, all standing on the same invisible baseline: [1] FRONT view, [2] BACK view, [3] LEFT side view, [4] RIGHT side view. Orientation: ${orient}. Every panel shows the full body, nothing cropped. It must be the exact same ${same(o)} in all four panels — identical ${mode === 'real' ? 'colors, proportions, markings, and details' : 'illustration style, colors, proportions, markings, and details'} — like a professional turnaround sheet. Straight-on, orthographic, no three-quarter angles. No text labels, no panel borders, no dividing lines; the whole sheet sits on one continuous pure ${bg[0]} background.`)}

### Prompt ${n0 + 1} — Tampak DEPAN (full body)

${sv(o, n0 + 1)}

${code(`${b}
View: strict FRONT view, full body. Orientation: ${orient}. The object faces the camera squarely: its centerline points straight at the lens and its left and right halves look symmetrical. Camera at mid-height, straight-on, orthographic, absolutely no three-quarter or angled pose.`)}

### Prompt ${n0 + 2} — Tampak BELAKANG (kirim di chat yang sama setelah Prompt ${n0 + 1})

${sv(o, n0 + 2)}

${code(`Using the exact same ${same(o)} from the previous image, rotate it 180° and show the strict BACK view. Keep everything identical: ${keep}. ${tail}`)}

### Prompt ${n0 + 3} — Tampak KIRI

${sv(o, n0 + 3)}

${code(`Using the exact same ${same(o)} from the previous images, rotate it to show the strict LEFT side profile (the object's own left side, exactly 90° from the front view, not three-quarter): the front/head of the object points to the LEFT edge of the image, pure side silhouette, head not turned toward the camera. Keep everything identical: ${keep}. ${tail}`)}

### Prompt ${n0 + 4} — Tampak KANAN

${sv(o, n0 + 4)}

${code(`Using the exact same ${same(o)} from the previous images, rotate it to show the strict RIGHT side profile (the object's own right side, exactly 90° from the front view): the front/head of the object points to the RIGHT edge of the image (mirror of the left view), pure side silhouette, head not turned toward the camera. Keep everything identical: ${keep}. ${tail}`)}
`;
}

function render(o, hits) {
  const [, , babTitle] = BAB[o.bab];
  const bg = BG[o.bg || 'w'];
  const byFile = {};
  for (const h of hits) byFile[h.f] = (byFile[h.f] || 0) + 1;
  const top = Object.entries(byFile).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const per = o.v === 1 ? 1 : 5;

  return `# ${o.id} — ${o.name}

- **Bab:** ${babTitle}${o.sub ? `\n- **Sub-bab:** ${o.sub}` : ''}
- **Objek (EN):** ${o.en}
- **Soal terkait:** ${hits.length} soal di ${Object.keys(byFile).length} file${top.length ? '\n' + top.map(([f, c]) => `  - \`${f}\` (${c})`).join('\n') : ''}
- **Tampak:** ${o.v === 1 ? (o.set ? 'satu gambar berisi beberapa benda (set), lurus, full body' : `satu tampak lurus ${o.top ? 'dari atas' : 'dari depan'}, full body (objek datar/simetris/percobaan)`) : 'depan · belakang · kiri · kanan, semua full body'}
- **Versi:** A. Realistis (prompt 1${per > 1 ? `–${per}` : ''}) · B. Ilustrasi (prompt ${per + 1}${per > 1 ? `–${per * 2}` : ''})${X[o.id] ? ` · C. Penampang skematik (prompt ${per * 2 + 1}–${per * 2 + 2})` : ''}
- **Folder hasil:** \`${resDir(o)}/\`
- **Background:** solid ${bg[0]} ${bg[1]} → hapus setelah generate (lihat README)
${o.note ? `- **Catatan:** ${o.note}\n` : ''}${sumberMd(o)}
---

## A. Versi Realistis (fotorealistis)
${prompts(o, bg, 'real', 1)}
---

## B. Versi Ilustrasi (gaya buku pelajaran)
${prompts(o, bg, 'illus', per + 1)}${X[o.id] ? `
---

## C. Versi Penampang (skematik, bagian dalam terlihat)
${penampang(o, bg, per * 2 + 1)}` : ''}`;
}

// ---- tulis ----
const ids = new Set();
const index = {};
for (const o of catalog) {
  if (ids.has(o.id)) throw new Error('duplicate id ' + o.id);
  if (!BAB[o.bab]) throw new Error('bab tidak dikenal ' + o.bab + ' @ ' + o.id);
  for (const k of ['id', 'name', 'en', 'd', 'kw']) if (!o[k]) throw new Error(`field ${k} kosong @ ${o.id}`);
  ids.add(o.id);
  const re = kwRe(o);
  const hits = qs.filter(q => re.test(q.t));
  const [mapel, dir] = BAB[o.bab];
  const rel = `${mapel}/${dir}/${o.id}.md`;
  fs.mkdirSync(path.join(OUT, mapel, dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, rel), render(o, hits));
  (index[o.bab] ||= []).push({ o, rel, n: hits.length });
}

let idx = `# Index Prompt Gambar — OSN SD

Total **${catalog.length} objek**. Kolom "Soal" = jumlah soal (dari ${qs.length} soal di ${files.length} file data) yang menyebut objek tersebut. File di-generate otomatis oleh \`_src/gen.mjs\` — edit katalog di \`_src/catalog-*.mjs\`, jangan edit file .md langsung.

`;
for (const bab of Object.keys(BAB)) {
  if (!index[bab]) continue;
  idx += `## ${BAB[bab][2]}\n\n| Objek | Tampak | Soal | Sumber & acuan | File |\n|---|---|---:|:---:|---|\n`;
  for (const { o, rel, n } of index[bab]) idx += `| ${o.name} | ${o.v === 1 ? '1' : '4'} | ${n} | ${[].concat(SRC[o.id]?.img || []).length ? '✅ ' + [].concat(SRC[o.id].img).length : SRC[o.id] ? '⚠️' : '—'} | [${o.id}](${rel}) |\n`;
  idx += '\n';
}
fs.writeFileSync(path.join(OUT, '_INDEX.md'), idx);

for (const id of Object.keys(X)) if (!ids.has(id)) throw new Error('penampang.mjs: id tidak ada di katalog: ' + id);

// ---- image-results: placeholder per slot + _STATUS.md (gabung hasil review dari _review.json) ----
const IMG = ['.png', '.jpg', '.jpeg', '.webp'];
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const placeholder = (o, f) => `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
<rect width="1024" height="1024" fill="#f3f4f6"/>
<rect x="24" y="24" width="976" height="976" fill="none" stroke="#9ca3af" stroke-width="6" stroke-dasharray="24 16"/>
<text x="512" y="440" font-family="sans-serif" font-size="48" font-weight="700" fill="#6b7280" text-anchor="middle">BELUM ADA GAMBAR</text>
<text x="512" y="520" font-family="sans-serif" font-size="36" fill="#6b7280" text-anchor="middle">${esc(o.name)}</text>
<text x="512" y="580" font-family="monospace" font-size="30" fill="#9ca3af" text-anchor="middle">${esc(f)}.png</text>
</svg>
`;
const reviewPath = path.join(RES, '_review.json');
const review = fs.existsSync(reviewPath) ? JSON.parse(fs.readFileSync(reviewPath, 'utf8')) : {};
const BADGE = { ok: '✅ lolos', revisi: '⚠️ revisi', salah: '❌ salah' };
let status = `# Status Gambar — OSN SD

Di-generate oleh \`image-prompts/_src/gen.mjs\`. Jangan edit manual. Hasil review disimpan di \`_review.json\`.
Keterangan: ⬜ belum ada gambar · 🔍 ada gambar, belum direview · ✅ lolos · ⚠️ perlu revisi · ❌ salah (generate ulang)

`;
let tot = { slot: 0, ada: 0, ok: 0 };
for (const bab of Object.keys(BAB)) {
  if (!index[bab]) continue;
  status += `## ${BAB[bab][2]}\n\n| Objek | Terisi | Lolos | Catatan review |\n|---|---:|---:|---|\n`;
  for (const { o } of index[bab]) {
    const dir = path.resolve(HERE, '../..', resDir(o));
    fs.mkdirSync(dir, { recursive: true });
    let ada = 0, ok = 0; const notes = [];
    for (const { file } of slots(o)) {
      const img = IMG.find(ext => fs.existsSync(path.join(dir, file + ext)));
      const ph = path.join(dir, file + '.svg');
      if (img) { ada++; if (fs.existsSync(ph)) fs.rmSync(ph); }
      else fs.writeFileSync(ph, placeholder(o, file));
      const r = review[`${o.id}/${file}`];
      if (r?.status === 'ok') ok++;
      if (r && r.status !== 'ok') notes.push(`${file}: ${BADGE[r.status] || r.status} — ${r.catatan || ''}`);
      else if (img && !r) notes.push(`${file}: 🔍 belum direview`);
    }
    const n = slots(o).length;
    tot.slot += n; tot.ada += ada; tot.ok += ok;
    status += `| [${o.name}](${resDir(o).replace('image-results/', '')}/) | ${ada ? ada : '⬜ 0'}/${n} | ${ok}/${n} | ${notes.join('<br>')} |\n`;
  }
  status += '\n';
}
status = status.replace('\n\n## ', `\n**Total:** ${tot.ada}/${tot.slot} slot terisi · ${tot.ok}/${tot.slot} lolos review\n\n## `);
fs.writeFileSync(path.join(RES, '_STATUS.md'), status);

const zero = catalog.filter(o => !qs.some(q => kwRe(o).test(q.t)));
console.log(`${catalog.length} objek ditulis. ${zero.length} tanpa soal terkait: ${zero.map(o => o.id).join(', ')}`);
