// Galeri lokal semua slot gambar: node image-prompts/_src/galeri.mjs  → image-results/_galeri.html
// Menampilkan total slot yang SEHARUSNYA ada (gambar + placeholder .svg yang belum di-generate), bukan hanya yang sudah terisi.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const RES = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../image-results');
const review = fs.existsSync(path.join(RES, '_review.json')) ? JSON.parse(fs.readFileSync(path.join(RES, '_review.json'), 'utf8')) : {};
const BADGE = { ok: ['lolos', '#16a34a'], revisi: ['revisi', '#d97706'], salah: ['salah', '#dc2626'] };
const SLOT = /^(p\d\d-[a-z-]+)\.(png|jpe?g|webp|svg)$/;   // slot utama; *.lama.png (arsip) tidak cocok
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

// satu objek = satu folder yang punya slot; slot terisi = ada png/jpg/webp, kosong = hanya placeholder .svg
const objs = [];
(function walk(d) {
  const slots = new Map();
  for (const f of fs.readdirSync(d)) {
    const m = SLOT.exec(f);
    if (!m) continue;
    const s = slots.get(m[1]) ?? { name: m[1], img: null };
    if (m[2] !== 'svg') s.img = f;
    slots.set(m[1], s);
  }
  if (slots.size) objs.push({ dir: d, slots: [...slots.values()].sort((a, b) => a.name.localeCompare(b.name)) });
  for (const f of fs.readdirSync(d)) if (fs.statSync(path.join(d, f)).isDirectory()) walk(path.join(d, f));
})(RES);

const zero = () => ({ total: 0, terisi: 0, kosong: 0, ok: 0, revisi: 0, salah: 0, belum: 0 });
const tally = (st, s, r) => {
  st.total++;
  if (!s.img) { st.kosong++; return; }
  st.terisi++;
  st[r?.status in st ? r.status : 'belum']++;
};
const all = zero();
const mapelMap = new Map();   // mapel -> Map(bab -> { secs, st })
const mapelStat = new Map();
for (const { dir, slots } of objs) {
  const id = path.basename(dir);
  const rel = path.relative(RES, dir).split(path.sep).join('/');
  const [mapel, bab] = rel.split('/');
  const objSt = zero();
  const cards = slots.map((s) => {
    const r = review[`${id}/${s.name}`];
    tally(objSt, s, r); tally(all, s, r);
    if (!s.img) {
      const antre = review[`${id}/${s.name}.lama`];
      return `<figure class="kosong"><div class="ph">belum di-generate</div>
<figcaption><b>${esc(s.name)}</b> <span style="background:#94a3b8">belum di-generate</span>${antre?.catatan ? `<small>${esc(antre.catatan)}</small>` : ''}</figcaption></figure>`;
    }
    const [txt, col] = r ? BADGE[r.status] || [r.status, '#64748b'] : ['belum direview', '#64748b'];
    return `<figure><a href="${esc(rel + '/' + s.img)}" target="_blank"><img loading="lazy" src="${esc(rel + '/' + s.img)}" alt="${esc(id + ' ' + s.name)}"></a>
<figcaption><b>${esc(s.name)}</b> <span style="background:${col}">${txt}</span>${r?.catatan ? `<small>${esc(r.catatan)}</small>` : ''}</figcaption></figure>`;
  }).join('');
  const section = `<section><h2>${esc(id)} <em>${esc(rel)}</em> <span class="cnt">${objSt.terisi}/${objSt.total} terisi</span></h2><div class="grid">${cards}</div></section>`;
  if (!mapelMap.has(mapel)) { mapelMap.set(mapel, new Map()); mapelStat.set(mapel, zero()); }
  const babMap = mapelMap.get(mapel);
  if (!babMap.has(bab)) babMap.set(bab, { secs: [], st: zero() });
  const b = babMap.get(bab);
  b.secs.push(section);
  for (const k of Object.keys(objSt)) { b.st[k] += objSt[k]; mapelStat.get(mapel)[k] += objSt[k]; }
}

const pct = (a, b) => (b ? Math.round((1000 * a) / b) / 10 : 0);
const mapelTabs = [...mapelMap.keys()].map((m, i) => {
  const st = mapelStat.get(m);
  return `<button class="tab-mapel${i === 0 ? ' active' : ''}" data-mapel="${esc(m)}">${esc(m.toUpperCase())} <small>${st.terisi}/${st.total}</small></button>`;
}).join('');
const mapelPanels = [...mapelMap.entries()].map(([mapel, babMap], mi) => {
  const babTabs = [...babMap.entries()].map(([b, { st }], i) => `<button class="tab-bab${i === 0 ? ' active' : ''}" data-bab="${esc(b)}">${esc(b)} <small>${st.terisi}/${st.total}</small></button>`).join('');
  const babPanels = [...babMap.entries()].map(([bab, { secs }], bi) => `<div class="panel-bab" data-bab="${esc(bab)}" ${bi === 0 ? '' : 'hidden'}>${secs.join('')}</div>`).join('');
  return `<div class="panel-mapel" data-mapel="${esc(mapel)}" ${mi === 0 ? '' : 'hidden'}>
<nav class="tabs tabs-bab">${babTabs}</nav>
${babPanels}
</div>`;
}).join('');

const ringkas = `${all.total} slot seharusnya ada · ${all.terisi} terisi · ${all.kosong} belum di-generate (${pct(all.terisi, all.total)}% terisi) · ${objs.length} objek`;
const status = `lolos: ${all.ok} · revisi: ${all.revisi} · salah: ${all.salah} · belum direview: ${all.belum}`;

fs.writeFileSync(path.join(RES, '_galeri.html'), `<!doctype html><meta charset="utf-8"><title>Galeri gambar OSN SD</title>
<style>body{font:14px system-ui,sans-serif;margin:24px;background:#f8fafc;color:#0f172a}h1{margin:0 0 4px}h2{margin:28px 0 8px;font-size:18px}h2 em{font-weight:400;color:#64748b;font-size:13px}
.cnt{font-weight:400;font-size:12px;color:#475569;background:#e2e8f0;border-radius:99px;padding:1px 8px;margin-left:6px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}figure{margin:0;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}
figure.kosong{border-style:dashed;background:#f1f5f9}.ph{aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:13px}
img{width:100%;aspect-ratio:1;object-fit:contain;background:#fff;display:block}figcaption{padding:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
figcaption span{color:#fff;border-radius:99px;padding:1px 8px;font-size:12px}small{display:block;width:100%;color:#475569;line-height:1.35}
.tabs{display:flex;gap:6px;overflow-x:auto;white-space:nowrap;padding-bottom:6px;scrollbar-width:thin}
.tabs button{flex:0 0 auto;border:1px solid #e2e8f0;background:#fff;color:#334155;padding:6px 14px;border-radius:99px;font:inherit;cursor:pointer}
.tabs button small{display:inline;width:auto;color:inherit;opacity:.7;margin-left:4px}
.tabs button.active{background:#0f172a;color:#fff;border-color:#0f172a}
.tabs-mapel button{font-weight:600}
.tabs-bab{margin-top:12px}
.ringkas{margin:6px 0 14px;font-size:15px}.ringkas b{font-weight:700}</style>
<h1>Galeri gambar OSN SD</h1>
<p class="ringkas"><b>${esc(ringkas)}</b><br>${esc(status)}</p>
<p>klik gambar untuk ukuran penuh · kotak putus-putus = slot yang seharusnya ada tetapi belum di-generate · muat ulang halaman ini setelah menjalankan galeri.mjs lagi</p>
<nav class="tabs tabs-mapel">${mapelTabs}</nav>
${mapelPanels}
<script>
document.querySelector('.tabs-mapel').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-mapel]'); if (!btn) return;
  document.querySelectorAll('.tabs-mapel button').forEach((b) => b.classList.toggle('active', b === btn));
  document.querySelectorAll('.panel-mapel').forEach((p) => p.hidden = p.dataset.mapel !== btn.dataset.mapel);
});
document.querySelectorAll('.panel-mapel').forEach((panel) => {
  panel.querySelector('.tabs-bab')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-bab]'); if (!btn) return;
    panel.querySelectorAll('.tab-bab').forEach((b) => b.classList.toggle('active', b === btn));
    panel.querySelectorAll('.panel-bab').forEach((p) => p.hidden = p.dataset.bab !== btn.dataset.bab);
  });
});
</script>`);

console.log(`${all.total} slot seharusnya ada · ${all.terisi} terisi · ${all.kosong} belum di-generate (${pct(all.terisi, all.total)}% terisi) · ${objs.length} objek → image-results/_galeri.html`);
console.log(`lolos: ${all.ok} · revisi: ${all.revisi} · salah: ${all.salah} · belum direview: ${all.belum}`);
