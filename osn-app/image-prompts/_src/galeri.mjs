// Galeri lokal semua gambar hasil: node image-prompts/_src/galeri.mjs  → image-results/_galeri.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const RES = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../image-results');
const review = fs.existsSync(path.join(RES, '_review.json')) ? JSON.parse(fs.readFileSync(path.join(RES, '_review.json'), 'utf8')) : {};
const BADGE = { ok: ['lolos', '#16a34a'], revisi: ['revisi', '#d97706'], salah: ['salah', '#dc2626'] };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const objs = [];
(function walk(d) {
  const imgs = fs.readdirSync(d).filter((f) => /^p\d\d-[a-z-]+\.(png|jpe?g|webp)$/.test(f)).sort();
  if (imgs.length) objs.push({ dir: d, imgs });
  for (const f of fs.readdirSync(d)) if (fs.statSync(path.join(d, f)).isDirectory()) walk(path.join(d, f));
})(RES);
let n = 0;
// kelompokkan per mapel (ipa/mtk) lalu per bab, untuk tab
const mapelMap = new Map();
for (const { dir, imgs } of objs) {
  const id = path.basename(dir);
  const rel = path.relative(RES, dir).split(path.sep).join('/');
  const [mapel, bab] = rel.split('/');
  const cards = imgs.map((f) => {
    n++;
    const r = review[`${id}/${f.replace(/\.\w+$/, '')}`];
    const [txt, col] = r ? BADGE[r.status] || [r.status, '#64748b'] : ['belum direview', '#64748b'];
    return `<figure><a href="${esc(rel + '/' + f)}" target="_blank"><img loading="lazy" src="${esc(rel + '/' + f)}" alt="${esc(id + ' ' + f)}"></a>
<figcaption><b>${esc(f.replace(/\.\w+$/, ''))}</b> <span style="background:${col}">${txt}</span>${r?.catatan ? `<small>${esc(r.catatan)}</small>` : ''}</figcaption></figure>`;
  }).join('');
  const section = `<section><h2>${esc(id)} <em>${esc(rel)}</em></h2><div class="grid">${cards}</div></section>`;
  if (!mapelMap.has(mapel)) mapelMap.set(mapel, new Map());
  const babMap = mapelMap.get(mapel);
  if (!babMap.has(bab)) babMap.set(bab, []);
  babMap.get(bab).push(section);
}

const mapelTabs = [...mapelMap.keys()].map((m, i) => `<button class="tab-mapel${i === 0 ? ' active' : ''}" data-mapel="${esc(m)}">${esc(m.toUpperCase())}</button>`).join('');
const mapelPanels = [...mapelMap.entries()].map(([mapel, babMap], mi) => {
  const babTabs = [...babMap.keys()].map((b, i) => `<button class="tab-bab${i === 0 ? ' active' : ''}" data-bab="${esc(b)}">${esc(b)}</button>`).join('');
  const babPanels = [...babMap.entries()].map(([bab, secs], bi) => `<div class="panel-bab" data-bab="${esc(bab)}" ${bi === 0 ? '' : 'hidden'}>${secs.join('')}</div>`).join('');
  return `<div class="panel-mapel" data-mapel="${esc(mapel)}" ${mi === 0 ? '' : 'hidden'}>
<nav class="tabs tabs-bab">${babTabs}</nav>
${babPanels}
</div>`;
}).join('');

fs.writeFileSync(path.join(RES, '_galeri.html'), `<!doctype html><meta charset="utf-8"><title>Galeri gambar OSN SD</title>
<style>body{font:14px system-ui,sans-serif;margin:24px;background:#f8fafc;color:#0f172a}h1{margin:0 0 4px}h2{margin:28px 0 8px;font-size:18px}h2 em{font-weight:400;color:#64748b;font-size:13px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}figure{margin:0;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}
img{width:100%;aspect-ratio:1;object-fit:contain;background:#fff;display:block}figcaption{padding:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
figcaption span{color:#fff;border-radius:99px;padding:1px 8px;font-size:12px}small{display:block;width:100%;color:#475569;line-height:1.35}
.tabs{display:flex;gap:6px;overflow-x:auto;white-space:nowrap;padding-bottom:6px;scrollbar-width:thin}
.tabs button{flex:0 0 auto;border:1px solid #e2e8f0;background:#fff;color:#334155;padding:6px 14px;border-radius:99px;font:inherit;cursor:pointer}
.tabs button.active{background:#0f172a;color:#fff;border-color:#0f172a}
.tabs-mapel button{font-weight:600}
.tabs-bab{margin-top:12px}</style>
<h1>Galeri gambar OSN SD</h1><p>${n} gambar dari ${objs.length} objek · klik gambar untuk ukuran penuh · muat ulang halaman ini untuk melihat gambar terbaru (setelah menjalankan galeri.mjs lagi)</p>
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
const counts = { ok: 0, revisi: 0, salah: 0, belum: 0 };
for (const { dir, imgs } of objs) {
  const id = path.basename(dir);
  for (const f of imgs) {
    const r = review[`${id}/${f.replace(/\.\w+$/, '')}`];
    counts[r?.status in counts ? r.status : 'belum']++;
  }
}
console.log(`${n} gambar, ${objs.length} objek → image-results/_galeri.html`);
console.log(`lolos: ${counts.ok} · revisi: ${counts.revisi} · salah: ${counts.salah} · belum direview: ${counts.belum}`);
