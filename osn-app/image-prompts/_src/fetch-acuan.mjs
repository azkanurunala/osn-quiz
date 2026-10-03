// Ambil sumber rujukan (Wikipedia EN + link ID) & unduh gambar acuan berlisensi bebas (Wikimedia Commons).
// Hasil: _src/sumber.cache.json + image-results/<mapel>/<bab>/<id>/acuan-N.<ext>
// Jalankan dari osn-app:  node image-prompts/_src/fetch-acuan.mjs [id ...] [--force]
// Hingga 5 gambar acuan per objek (acuan-1..5). Gambar acuan HANYA untuk diunggah ke Gemini sebagai rujukan akurasi — jangan dipakai langsung di video/app.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(HERE, '../..');
const CACHE = path.join(HERE, 'sumber.cache.json');
const UA = { 'User-Agent': 'osn-sd-image-refs/1.0 (educational project; nurunalaazka@gmail.com)' };
const FREE = /^(cc0|cc[ -]by(-sa)?\b|public domain|pd\b|pd-|no restrictions)/i;   // tolak fair use / non-free / NC / ND

const SUMBER = (await import('./sumber.mjs')).default;
const catalog = [];
for (const f of fs.readdirSync(HERE).filter(f => f.startsWith('catalog-')).sort()) catalog.push(...(await import('./' + f)).default);
const byId = Object.fromEntries(catalog.map(o => [o.id, o]));
const BABDIR = { 'ipa-01': 'ipa/01-makhluk-hidup', 'ipa-02': 'ipa/02-tubuh-manusia', 'ipa-03': 'ipa/03-gaya-gerak-energi', 'ipa-04': 'ipa/04-cahaya-bunyi-panas-zat', 'ipa-05': 'ipa/05-bumi-antariksa', 'ipa-06': 'ipa/06-metode-ilmiah-alat-lab', 'mtk-01': 'mtk/01-bilangan-pecahan', 'mtk-03': 'mtk/03-geometri-datar', 'mtk-04': 'mtk/04-geometri-ruang', 'mtk-05': 'mtk/05-pengukuran', 'mtk-06': 'mtk/06-aritmetika-sosial', 'mtk-07': 'mtk/07-statistika-peluang', 'mtk-08': 'mtk/08-pola-logika-aljabar' };

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.filter(a => !a.startsWith('--'));
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const strip = (h = '') => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const getJSON = async (url) => { for (let i = 0; i < 3; i++) { const r = await fetch(url, { headers: UA }); if (r.ok) return r.json(); await sleep(1500 * (i + 1)); } throw new Error('HTTP gagal ' + url); };

async function wiki(title) {
  const u = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&titles=${encodeURIComponent(title)}&prop=pageimages|extracts|langlinks|info&piprop=name&exintro=1&explaintext=1&exsentences=8&lllang=id&inprop=url`;
  const p = Object.values((await getJSON(u)).query.pages)[0];
  if (p.missing !== undefined) return { title, missing: true };
  return { title: p.title, url: p.fullurl, idUrl: p.langlinks?.[0] ? `https://id.wikipedia.org/wiki/${encodeURIComponent(p.langlinks[0]['*'].replace(/ /g, '_'))}` : null, extract: p.extract, pageimage: p.pageimage };
}

async function commons(file) {
  const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(file)}&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=1280`;
  const p = Object.values((await getJSON(u)).query.pages)[0];
  const ii = p.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata || {};
  return { file: p.title, page: ii.descriptionurl, license: strip(m.LicenseShortName?.value), licenseUrl: m.LicenseUrl?.value || null, artist: strip(m.Artist?.value) || null, thumb: ii.thumburl || ii.url, mime: ii.mime };
}

// Gambar di artikel sesuai urutan kemunculan (lebih relevan daripada urutan abjad)
async function articleImages(title) {
  const u = `https://en.wikipedia.org/w/api.php?action=parse&format=json&redirects=1&prop=images&page=${encodeURIComponent(title)}`;
  try { return ((await getJSON(u)).parse?.images || []).map(f => 'File:' + f); } catch { return []; }
}
async function commonsSearch(q, n = 10) {
  const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=${n}&srsearch=${encodeURIComponent(q + ' filetype:bitmap')}`;
  return ((await getJSON(u)).query?.search || []).map(r => r.title);
}
// Ikon, logo, peta sebaran, simbol status, dll. — bukan gambar objek
const JUNK = /(logo|icon|symbol|commons-|wiki|question.?book|edit-|pencil|padlock|lock-|oojs|flag.of|map\b|_map|range|distribution|status_iucn|iucn|audio|speaker_icon|nuvola|crystal_clear|disambig|stub|portal|increase|decrease|steady|red_x|tick|arrow|button|folder|protection|signature|coat_of_arms|stamp|banknote|coin_of)/i;
const MAX = 5;

const ids = (only.length ? only : Object.keys(SUMBER)).filter(id => SUMBER[id]);
for (const id of ids) { try {
  if (!byId[id]) { console.log('SKIP (tidak ada di katalog):', id); continue; }
  if (cache[id] && !force) continue;
  const s = SUMBER[id];
  const res = { wiki: [], img: [], note: null };
  for (const t of s.w || []) { res.wiki.push(await wiki(t)); await sleep(250); }

  // kandidat: pin (img) → gambar utama artikel pertama → gambar lain di artikel-artikel → pencarian Commons (q)
  const pins = [].concat(s.img || []);
  const cand = [...pins];
  if (!s.only) {
    if (res.wiki[0]?.pageimage) cand.push('File:' + res.wiki[0].pageimage);
    for (const w of res.wiki) if (!w.missing) { cand.push(...await articleImages(w.title)); await sleep(250); }
  }
  if (s.q) for (const q of [].concat(s.q)) cand.push(...await commonsSearch(q));
  const ex = new Set((s.ex || []).map(f => f.replace(/_/g, ' ')));
  const seen = new Set();
  const list = cand.map(f => f.replace(/_/g, ' ')).filter(f => !seen.has(f) && seen.add(f) && !ex.has(f) && (pins.map(p => p.replace(/_/g, ' ')).includes(f) || !JUNK.test(f)));

  const dir = path.join(APP, 'image-results', BABDIR[byId[id].bab], id);
  fs.mkdirSync(dir, { recursive: true });
  for (const old of fs.readdirSync(dir).filter(f => /^acuan[.-]/.test(f))) fs.rmSync(path.join(dir, old));
  const rejected = [];
  for (const file of list) {
    if (res.img.length >= MAX) break;
    const c = await commons(file);
    if (!c) continue;
    if (!FREE.test(c.license || '')) { rejected.push(`${c.file} (${c.license})`); continue; }
    if (!/\.(jpe?g|png|webp)(\?|$)/i.test(c.thumb)) continue;   // gif/tiff/pdf dilewati
    const r = await fetch(c.thumb, { headers: UA });
    if (!r.ok) continue;
    const ext = /\.png(\?|$)/i.test(c.thumb) ? 'png' : 'jpg';
    const name = `acuan-${res.img.length + 1}.${ext}`;
    fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer()));
    res.img.push({ ...c, local: `image-results/${BABDIR[byId[id].bab]}/${id}/${name}` });
    await sleep(200);
  }
  const notes = [];
  if (!res.img.length) notes.push('tidak ada gambar berlisensi bebas — isi img/q di sumber.mjs');
  if (rejected.length && res.img.length < MAX) notes.push('ditolak (lisensi): ' + rejected.slice(0, 3).join(', '));
  for (const w of res.wiki) if (w.missing) notes.push('artikel tidak ada: ' + w.title);
  res.note = notes.join('; ') || null;
  cache[id] = res;
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
  console.log(`${res.img.length}/${MAX} ${id}${res.note ? ' ⚠ ' + res.note : ''}`);
  await sleep(300);
} catch (e) { console.log('GAGAL', id, e.message); await sleep(3000); } }
