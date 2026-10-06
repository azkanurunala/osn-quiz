// Publish the reviewed object images (image-results/) for use as question illustrations.
//
//   node scripts/build-objek-foto.mjs
//
// Only slots whose verdict in image-results/_review.json is "ok" are published: an unreviewed
// picture may show the wrong species or the wrong anatomy, and a wrong picture in a science
// question is worse than none. Reference photos (acuan-*) are never published — they exist only as
// Gemini input. Re-run after every review round.
//
// Output:
//   public/objek/<id>.webp                         one picture per approved object (max 640 px)
//   src/features/diagrams/objek-foto-data.js       every IPA catalog object, plus the MTK_PHOTO_IDS
//                                                  subset of catalog-mtk.mjs (id, title, kw) and the
//                                                  file of its approved picture, if any. Objects
//                                                  without a picture are kept so the matcher can
//                                                  still detect "this soal names two organisms".

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'image-prompts', '_src');
const RESULTS = join(ROOT, 'image-results');
const OUT_DIR = join(ROOT, 'public', 'objek');
const DATA_FILE = join(ROOT, 'src', 'features', 'diagrams', 'objek-foto-data.js');

const ffmpegDir = readdirSync(join(ROOT, '.tools')).find((d) => d.startsWith('ffmpeg-'));
const FFMPEG = ffmpegDir ? join(ROOT, '.tools', ffmpegDir, 'bin', 'ffmpeg.exe') : 'ffmpeg';

// Which approved slot represents the object best: a clean front illustration first (calm, readable
// at a glance in a 10 s question phase), then realistic views. Cut-open (penampang) slots are left
// out: an opened animal next to a general question is jarring and its empty callouts mean nothing
// without the labels the app has not added yet.
const SLOT_ORDER = [
  /ilustrasi-depan/, /ilustrasi-atas/, /realistis-depan/, /realistis-atas/,
  /ilustrasi-(kiri|kanan)/, /realistis-(kiri|kanan)/, /^(?!.*penampang)/,
];

// Optional extra views, published only when the object has a main picture too.
const VIEW_ORDER = {
  samping: [/ilustrasi-(kiri|kanan)/, /realistis-(kiri|kanan)/],
  penampang: [/penampang-belah/, /penampang-transparan/],
};

const review = JSON.parse(readFileSync(join(RESULTS, '_review.json'), 'utf8'));
const approved = new Map(); // id -> [slot names]
for (const [key, verdict] of Object.entries(review)) {
  if (verdict?.status !== 'ok') continue;
  const [id, slot] = key.split('/');
  if (!approved.has(id)) approved.set(id, []);
  approved.get(id).push(slot);
}

// Folder of each object inside image-results/<mapel>/<bab>/<id>.
const folderOf = new Map();
for (const mapel of ['ipa', 'mtk']) {
  for (const bab of readdirSync(join(RESULTS, mapel))) {
    for (const id of readdirSync(join(RESULTS, mapel, bab))) folderOf.set(id, join(RESULTS, mapel, bab, id));
  }
}

const catalogFiles = readdirSync(SRC).filter((f) => /^catalog-(ipa|mtk).*\.mjs$/.test(f)).sort();
const objects = [];
for (const file of catalogFiles) {
  const mod = await import(pathToFileURL(join(SRC, file)).href);
  for (const o of mod.default) objects.push(o);
}

// Most MTK catalog objects are precision math props (dice, clocks, solids...) where an exact
// count/angle/number IS the answer — Gemini can't be trusted for that (see catalog-mtk.mjs header),
// so the app draws them as SVG (src/features/diagrams/families/*.jsx) instead. Only objects whose
// picture is scene-setting flavour (soal give their numbers in the text, not the image) are safe to
// publish as photos. Widen this allowlist only after checking a candidate the same way.
const MTK_PHOTO_IDS = new Set([
  'akuarium', 'celengan', 'maket-rumah', 'kelereng-kantong', 'tandon-air',
  'benda-bangun-ruang-set', 'kendaraan-set', 'koin-peluang',
]);

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const rows = [];
let published = 0;
for (const o of objects) {
  if (!o.kw) continue;
  // Unlike IPA (every catalog entry is a real illustratable organism, so a picture-less one is
  // still kept to detect "two organisms named"), most MTK entries are shape/prop NAMES that a soal
  // about an allowed object routinely also says (an akuarium soal says "balok", a tandon-air soal
  // says "tabung"). They have no picture to unfairly favour, so keeping their kw would only make
  // the matcher wrongly see "two objects" and reject a clean single match. Leave them out entirely.
  if (o.bab?.startsWith('mtk') && !MTK_PHOTO_IDS.has(o.id)) continue;
  let file = null;
  const slots = approved.get(o.id) ?? [];
  const folder = folderOf.get(o.id);
  const pick = SLOT_ORDER.map((re) => slots.find((s) => re.test(s))).find(Boolean);
  const publish = (slot, name) => {
    const img = slot && folder && readdirSync(folder).find((f) => f.startsWith(`${slot}.`) && /\.(png|jpe?g|webp)$/i.test(f));
    if (!img) return null;
    execFileSync(FFMPEG, ['-v', 'error', '-y', '-i', join(folder, img),
      '-vf', "scale='min(640,iw)':-2", '-quality', '82', join(ROOT, 'public', 'objek', `${name}.webp`)]);
    return `objek/${name}.webp`;
  };
  file = publish(pick, o.id);
  if (file) published += 1;
  // Extra views the matcher picks per soal: a side profile (fins, lateral line) or the cut-open
  // section (heart chambers, eye layers) when the soal is about a part rather than the whole.
  const views = {};
  for (const [view, order] of Object.entries(VIEW_ORDER)) {
    const slot = order.map((re) => slots.find((s) => re.test(s))).find(Boolean);
    const f = file && publish(slot, `${o.id}-${view}`);
    if (f) views[view] = f;
  }
  rows.push({
    id: o.id,
    // "Kucing (mamalia, vivipar)" -> "Kucing": the bracketed part often states the answer.
    title: o.name.replace(/\s*\(.*$/, '').replace(/\s*\/.*$/, '').trim(),
    kw: o.kw,
    bab: o.bab,
    ...(file ? { file } : {}),
    ...(Object.keys(views).length ? { views } : {}),
    // generated on a black background (catalog bg: 'k'); the frame must match it
    ...(file && o.bg === 'k' ? { dark: true } : {}),
  });
}

writeFileSync(DATA_FILE, `// GENERATED by scripts/build-objek-foto.mjs from image-prompts/_src/catalog-ipa*.mjs and
// image-results/_review.json. Do not edit by hand: fix the catalog or the review, then re-run.
export const OBJEK_FOTO = ${JSON.stringify(rows, null, 2)};
`);

console.log(`${rows.length} objek katalog, ${published} punya gambar lolos review -> public/objek/`);
if (!existsSync(FFMPEG) && FFMPEG !== 'ffmpeg') console.warn('ffmpeg tidak ditemukan');
