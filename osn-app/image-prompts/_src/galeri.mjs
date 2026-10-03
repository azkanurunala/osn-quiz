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
const sections = objs.map(({ dir, imgs }) => {
  const id = path.basename(dir);
  const rel = path.relative(RES, dir).split(path.sep).join('/');
  const cards = imgs.map((f) => {
    n++;
    const r = review[`${id}/${f.replace(/\.\w+$/, '')}`];
    const [txt, col] = r ? BADGE[r.status] || [r.status, '#64748b'] : ['belum direview', '#64748b'];
    return `<figure><a href="${esc(rel + '/' + f)}" target="_blank"><img loading="lazy" src="${esc(rel + '/' + f)}" alt="${esc(id + ' ' + f)}"></a>
<figcaption><b>${esc(f.replace(/\.\w+$/, ''))}</b> <span style="background:${col}">${txt}</span>${r?.catatan ? `<small>${esc(r.catatan)}</small>` : ''}</figcaption></figure>`;
  }).join('');
  return `<section><h2>${esc(id)} <em>${esc(rel)}</em></h2><div class="grid">${cards}</div></section>`;
}).join('');
fs.writeFileSync(path.join(RES, '_galeri.html'), `<!doctype html><meta charset="utf-8"><title>Galeri gambar OSN SD</title>
<style>body{font:14px system-ui,sans-serif;margin:24px;background:#f8fafc;color:#0f172a}h1{margin:0 0 4px}h2{margin:28px 0 8px;font-size:18px}h2 em{font-weight:400;color:#64748b;font-size:13px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}figure{margin:0;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}
img{width:100%;aspect-ratio:1;object-fit:contain;background:#fff;display:block}figcaption{padding:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
figcaption span{color:#fff;border-radius:99px;padding:1px 8px;font-size:12px}small{display:block;width:100%;color:#475569;line-height:1.35}</style>
<h1>Galeri gambar OSN SD</h1><p>${n} gambar dari ${objs.length} objek · klik gambar untuk ukuran penuh · muat ulang halaman ini untuk melihat gambar terbaru (setelah menjalankan galeri.mjs lagi)</p>${sections}`);
console.log(`${n} gambar, ${objs.length} objek → image-results/_galeri.html`);
