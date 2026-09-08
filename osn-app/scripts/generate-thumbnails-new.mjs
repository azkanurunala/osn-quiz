#!/usr/bin/env node
// generate-thumbnails-new.mjs — Generate "Quiz OSN / KSN" YouTube thumbnails (1280x720 PNG)
// replicating the reference design: deep space blue radial gradient, yellow/white Poppins title,
// dark translucent quiz card, character + plant, and a teal "MULAI KUIS!" button.
//
// Usage: node scripts/generate-thumbnails-new.mjs [--only=001,002] [--force]

import { chromium } from 'playwright';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, dirname, parse } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = resolve(__dirname, '..');
const SRC_DIR = join(APP_ROOT, 'recordings-final');
const OUT_DIR = join(APP_ROOT, 'new-thumbnails');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
  })
);
const ONLY = args.only ? new Set(args.only.split(',')) : null;
const FORCE = !!args.force;

const TITLES = {
  'ipa-01a': 'Ciri-ciri Makhluk Hidup',
  'ipa-01b': 'Klasifikasi Hewan',
  'ipa-01c': 'Klasifikasi Tumbuhan',
  'ipa-01d': 'Struktur & Fungsi Bagian Tumbuhan',
  'ipa-01e': 'Reproduksi Tumbuhan',
  'ipa-01f': 'Reproduksi Hewan',
  'ipa-01g': 'Daur Hidup & Metamorfosis',
  'ipa-01h': 'Adaptasi Hewan',
  'ipa-01i': 'Adaptasi Tumbuhan',
  'ipa-01j': 'Ekosistem & Komponennya',
  'ipa-01k': 'Rantai & Jaring-jaring Makanan',
  'ipa-01l': 'Simbiosis',
  'ipa-01m': 'Pelestarian Makhluk Hidup',
  'ipa-02a': 'Sistem Pencernaan',
  'ipa-02b': 'Sistem Pernapasan',
  'ipa-02c': 'Sistem Peredaran Darah',
  'ipa-02d': 'Sistem Ekskresi',
  'ipa-02e': 'Sistem Saraf & Indera',
  'ipa-02f': 'Sistem Rangka & Otot',
  'ipa-02g': 'Sistem Reproduksi Manusia',
  'ipa-02h': 'Pubertas & Perubahan Tubuh',
  'ipa-02i': 'Gizi Seimbang',
  'ipa-02j': 'Penyakit Menular',
  'ipa-02k': 'Penyakit Tidak Menular',
  'ipa-02l': 'Kebersihan Diri & Lingkungan',
  'ipa-02m': 'Gejala → Diagnosis',
  'ipa-03a': 'Pengertian & Jenis Gaya',
  'ipa-03b': 'Gerak Benda',
  'ipa-03c': 'Pengaruh Gaya pada Benda',
  'ipa-03d': 'Pesawat Sederhana: Tuas',
  'ipa-03e': 'Pesawat Sederhana: Katrol',
  'ipa-03f': 'Pesawat Sederhana: Bidang Miring',
  'ipa-03g': 'Pesawat Sederhana: Roda Berporos',
  'ipa-03h': 'Energi & Bentuk-bentuknya',
  'ipa-03i': 'Perubahan Energi',
  'ipa-03j': 'Listrik: Rangkaian Seri & Paralel',
  'ipa-03k': 'Konduktor & Isolator',
  'ipa-03l': 'Magnet',
  'ipa-04a': 'Sifat-sifat Cahaya',
  'ipa-04b': 'Cermin',
  'ipa-04c': 'Lensa & Pembiasan',
  'ipa-04d': 'Penguraian Cahaya',
  'ipa-04e': 'Sifat-sifat Bunyi',
  'ipa-04f': 'Pemantulan Bunyi',
  'ipa-04g': 'Perambatan Bunyi',
  'ipa-04h': 'Suhu & Termometer',
  'ipa-04i': 'Perpindahan Panas',
  'ipa-04j': 'Wujud Zat',
  'ipa-04k': 'Perubahan Wujud Zat',
  'ipa-04l': 'Sifat Fisika & Kimia',
  'ipa-04m': 'Pemisahan Campuran',
  'ipa-04n': 'Larutan, Koloid, Suspensi',
  'ipa-05a': 'Sistem Tata Surya & 8 Planet',
  'ipa-05b': 'Bumi: Bentuk & Lapisan',
  'ipa-05c': 'Rotasi & Revolusi Bumi',
  'ipa-05d': 'Bulan: Fase & Gerakan',
  'ipa-05e': 'Gerhana Matahari & Bulan',
  'ipa-05f': 'Cuaca, Iklim & Musim',
  'ipa-05g': 'Batuan: Beku, Sedimen, Metamorf',
  'ipa-05h': 'Tanah: Jenis & Manfaat',
  'ipa-05i': 'Sumber Daya Alam',
  'ipa-05j': 'Siklus Air',
  'ipa-05k': 'Atmosfer',
  'ipa-05l': 'Pelestarian Lingkungan',
  'ipa-05m': 'Pemanasan Global',
  'ipa-05n': 'Bencana Alam',
  'mtk-01a': 'Operasi Hitung Bilangan Bulat',
  'mtk-01b': 'Urutan Operasi',
  'mtk-01c': 'Faktor & Kelipatan',
  'mtk-01d': 'Bilangan Prima & Komposit',
  'mtk-01e': 'Faktorisasi Prima',
  'mtk-01f': 'FPB',
  'mtk-01g': 'KPK',
  'mtk-01h': 'Bilangan Kuadrat & Akar',
  'mtk-01i': 'Bilangan Kubik & Akar',
  'mtk-01j': 'Sifat Operasi Hitung',
  'mtk-01k': 'Soal Cerita FPB & KPK',
  'mtk-02a': 'Pecahan Senilai',
  'mtk-02b': 'Membandingkan Pecahan',
  'mtk-02c': 'Operasi Pecahan',
  'mtk-02d': 'Pecahan Campuran',
  'mtk-02e': 'Konversi Pecahan-Desimal-Persen',
  'mtk-02f': 'Operasi Desimal',
  'mtk-02g': 'Pembulatan Desimal',
  'mtk-02h': 'Persen dari Bagian',
  'mtk-02i': 'Bilangan Asal dari Persen',
  'mtk-02j': 'Soal Cerita Pecahan',
  'mtk-02k': 'Soal Cerita Persen',
  'mtk-03a': 'Jenis Bangun Datar',
  'mtk-03b': 'Keliling Persegi & Persegi Panjang',
  'mtk-03c': 'Keliling Segitiga',
  'mtk-03d': 'Keliling Jajar Genjang & Trapesium',
  'mtk-03e': 'Keliling Lingkaran',
  'mtk-03f': 'Luas Persegi & Persegi Panjang',
  'mtk-03g': 'Luas Segitiga',
  'mtk-03h': 'Luas Jajar Genjang, Trapesium, Layang-Layang',
  'mtk-03i': 'Luas Lingkaran',
  'mtk-03j': 'Bangun Gabungan',
  'mtk-03k': 'Luas Daerah Arsiran',
  'mtk-03l': 'Jenis-jenis Sudut',
  'mtk-03m': 'Jumlah Sudut Bangun Datar',
  'mtk-04a': 'Elemen Bangun Ruang',
  'mtk-04b': 'Volume Kubus',
  'mtk-04c': 'Volume Balok',
  'mtk-04d': 'Volume Prisma & Limas',
  'mtk-04e': 'Volume Tabung',
  'mtk-04f': 'Volume Kerucut & Bola',
  'mtk-04g': 'Luas Permukaan Kubus',
  'mtk-04h': 'Luas Permukaan Balok',
  'mtk-04i': 'Luas Permukaan Prisma & Limas',
  'mtk-04j': 'Luas Permukaan Tabung',
  'mtk-04k': 'Jaring-jaring Bangun Ruang',
  'mtk-04l': 'Bangun Ruang Gabungan',
  'mtk-04m': 'Kapasitas Bangun Ruang',
  'mtk-05a': 'Konversi Satuan Panjang',
  'mtk-05b': 'Konversi Satuan Berat',
  'mtk-05c': 'Konversi Satuan Luas',
};

const SUBJECT = {
  ipa: { label: 'IPA', quiz: 'QUIZ SAINS OSN', optA: 'Tumbuh, peka terhadap rangsang, makan', optB: 'Bergerak, bernapas, berkembang biak', icon: '🔬' },
  mtk: { label: 'Matematika', quiz: 'QUIZ MATEMATIKA OSN', optA: 'Hitung, ukur, dan pola', optB: 'Logika, bilangan, dan bangun', icon: '🧮' },
};

// Representative big icons per topic code (1 main + up to 2 accents).
const TOPIC_ICONS = {
  'ipa-01a': ['🌱', '🐾', '💧'],
  'ipa-01b': ['🦁', '🦋', '🐠'],
  'ipa-01c': ['🌳', '🌺', '🌾'],
  'ipa-01d': ['🌱', '🌿', '🌸'],
  'ipa-01e': ['🌻', '🌸', '🌰'],
  'ipa-01f': ['🐣', '🥚', '🐄'],
  'ipa-01g': ['🦋', '🐸', '🐛'],
  'ipa-01h': ['🦊', '🐧', '🐫'],
  'ipa-01i': ['🌵', '🌿', '🍀'],
  'ipa-01j': ['🌍', '🌳', '🐾'],
  'ipa-01k': ['🦁', '🐇', '🌱'],
  'ipa-01l': ['🤝', '🐟', '🦈'],
  'ipa-01m': ['🛡️', '🐼', '🌳'],
  'ipa-02a': ['🍽️', '🍎', '💧'],
  'ipa-02b': ['🫁', '🌀', '💨'],
  'ipa-02c': ['🫀', '🩸', '💓'],
  'ipa-02d': ['💧', '🫁', '🩸'],
  'ipa-02e': ['🧠', '👁️', '👂'],
  'ipa-02f': ['🦴', '💪', '🦾'],
  'ipa-02g': ['👶', '🤰', '❤️'],
  'ipa-02h': ['🧒', '📈', '🕰️'],
  'ipa-02i': ['🍎', '🥛', '🥦'],
  'ipa-02j': ['🦠', '😷', '🤒'],
  'ipa-02k': ['🫀', '🍬', '🚭'],
  'ipa-02l': ['🧼', '🦠', '🚿'],
  'ipa-02m': ['🩺', '💊', '🩹'],
  'ipa-03a': ['💪', '🧲', '🎈'],
  'ipa-03b': ['🏃', '🚗', '🌀'],
  'ipa-03c': ['🚲', '🎾', '🧱'],
  'ipa-03d': ['⚖️', '🌀', '🔧'],
  'ipa-03e': ['🛗', '🔗', '🪢'],
  'ipa-03f': ['🛝', '⛰️', '💪'],
  'ipa-03g': ['⚙️', '⭕', '🚲'],
  'ipa-03h': ['⚡', '🔥', '💡'],
  'ipa-03i': ['💡', '⚡', '🔋'],
  'ipa-03j': ['💡', '🔌', '⚡'],
  'ipa-03k': ['🔌', '🧤', '⚡'],
  'ipa-03l': ['🧲', '🧭', '📎'],
  'ipa-04a': ['💡', '☀️', '🌈'],
  'ipa-04b': ['🪞', '🔍', '💡'],
  'ipa-04c': ['🔍', '🕶️', '💧'],
  'ipa-04d': ['🌈', '💧', '🔦'],
  'ipa-04e': ['🔊', '🎵', '🗣️'],
  'ipa-04f': ['🔊', '🗣️', '🏔️'],
  'ipa-04g': ['🎵', '💨', '📢'],
  'ipa-04h': ['🌡️', '🔥', '❄️'],
  'ipa-04i': ['🔥', '♨️', '🥄'],
  'ipa-04j': ['🧊', '💧', '💨'],
  'ipa-04k': ['🧊', '🔥', '💦'],
  'ipa-04l': ['🧪', '⚗️', '🔬'],
  'ipa-04m': ['⚗️', '🧂', '💧'],
  'ipa-04n': ['🥤', '🧪', '💧'],
  'ipa-05a': ['🌞', '🪐', '🌍'],
  'ipa-05b': ['🌍', '🔥', '⛰️'],
  'ipa-05c': ['🌍', '🔄', '🌙'],
  'ipa-05d': ['🌙', '🌕', '🌏'],
  'ipa-05e': ['🌘', '🌑', '🔆'],
  'ipa-05f': ['🌦️', '🌈', '⛈️'],
  'ipa-05g': ['🪨', '⛰️', '💎'],
  'ipa-05h': ['🌱', '🪴', '🪱'],
  'ipa-05i': ['🌳', '⛽', '💧'],
  'ipa-05j': ['💧', '☁️', '🌧️'],
  'ipa-05k': ['☁️', '🪂', '🌍'],
  'ipa-05l': ['♻️', '🌳', '🐋'],
  'ipa-05m': ['🌡️', '🔥', '🏭'],
  'ipa-05n': ['🌋', '🌊', '🌀'],
  'mtk-01a': ['🔢', '➕', '➖'],
  'mtk-01b': ['🧮', '➗', '✖️'],
  'mtk-01c': ['🔗', '🔢', '✖️'],
  'mtk-01d': ['🔢', '💎', '✳️'],
  'mtk-01e': ['🔢', '🔣', '✖️'],
  'mtk-01f': ['🤝', '🔢', '✖️'],
  'mtk-01g': ['⏰', '🔢', '➕'],
  'mtk-01h': ['🔢', '🔳', '📐'],
  'mtk-01i': ['🧊', '🔢', '📦'],
  'mtk-01j': ['🔄', '🔢', '🧮'],
  'mtk-01k': ['📖', '📝', '🔢'],
  'mtk-02a': ['🍕', '➗', '🔢'],
  'mtk-02b': ['⚖️', '🍕', '🔢'],
  'mtk-02c': ['🍕', '➕', '✖️'],
  'mtk-02d': ['🍰', '🔢', '➗'],
  'mtk-02e': ['🔄', '🍕', '💯'],
  'mtk-02f': ['💯', '➕', '💰'],
  'mtk-02g': ['🔢', '🪙', '➗'],
  'mtk-02h': ['💯', '🍕', '📊'],
  'mtk-02i': ['💯', '❓', '🔢'],
  'mtk-02j': ['🍕', '📝', '🧮'],
  'mtk-02k': ['💰', '📝', '💯'],
  'mtk-03a': ['🔺', '⬛', '⭕'],
  'mtk-03b': ['⬛', '📏', '🔲'],
  'mtk-03c': ['🔺', '📏', '📐'],
  'mtk-03d': ['📏', '🔺', '🟨'],
  'mtk-03e': ['⭕', '📏', '🌀'],
  'mtk-03f': ['🟩', '📐', '⬛'],
  'mtk-03g': ['📐', '🔺', '🟦'],
  'mtk-03h': ['📐', '🟨', '🔶'],
  'mtk-03i': ['⭕', '📐', '🔵'],
  'mtk-03j': ['🧩', '🔺', '⬛'],
  'mtk-03k': ['🌀', '➖', '🟩'],
  'mtk-03l': ['📐', '↗️', '🔻'],
  'mtk-03m': ['🔺', '🔢', '➗'],
  'mtk-04a': ['🧊', '🔷', '⬛'],
  'mtk-04b': ['🧊', '📦', '➗'],
  'mtk-04c': ['📦', '📏', '🧱'],
  'mtk-04d': ['🔷', '⛺', '📐'],
  'mtk-04e': ['🥫', '📏', '🌀'],
  'mtk-04f': ['🍦', '⚽', '🔻'],
  'mtk-04g': ['🧊', '📐', '🎁'],
  'mtk-04h': ['📦', '📐', '🎁'],
  'mtk-04i': ['🔷', '📐', '⛺'],
  'mtk-04j': ['🥫', '📐', '📏'],
  'mtk-04k': ['📦', '✂️', '📄'],
  'mtk-04l': ['🧩', '🧊', '📦'],
  'mtk-04m': ['🪣', '💧', '📦'],
  'mtk-05a': ['📏', '📐', '🦶'],
  'mtk-05b': ['⚖️', '🏋️', '🧱'],
  'mtk-05c': ['📐', '🟩', '🌾'],
};

function subbabCode(name) {
  const m = name.match(/\b(ipa|mtk)-(\d{2})([a-z])/i);
  if (m) return `${m[1].toLowerCase()}-${m[2]}${m[3].toLowerCase()}`;
  const s = name.match(/bab[\s-]*(\d{2})([a-z])/i);
  if (s) {
    const subj = /matematika|mtk/i.test(name) ? 'mtk' : 'ipa';
    return `${subj}-${s[1]}${s[2].toLowerCase()}`;
  }
  return null;
}

function firstName(name) {
  const m = name.match(/^(\d+)/);
  return m ? m[1] : name;
}

// wrap a title into 2-3 short lines preserving word order
function wrapTitle(text, maxLen = 18) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxLen && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function thumbnailHtml(title, code) {
  const subj = code.startsWith('mtk') ? 'mtk' : 'ipa';
  const S = SUBJECT[subj];
  const icons = TOPIC_ICONS[code] || [S.icon, S.icon, S.icon];
  const lines = wrapTitle(title.toUpperCase());
  const titleHtml = lines.map((l) => `<div class="t-line">${l.replace(/&/g, '&amp;')}</div>`).join('');

  const stars = [
    { top: '6%', left: '8%', s: 26, rot: 20 },
    { top: '78%', left: '4%', s: 30, rot: -14 },
    { top: '10%', left: '72%', s: 22, rot: 10 },
    { top: '84%', left: '40%', s: 34, rot: 12 },
    { top: '20%', left: '46%', s: 20, rot: -18 },
    { top: '70%', left: '88%', s: 26, rot: 15 },
  ].map((p) => `<div class="icon" style="top:${p.top};left:${p.left};font-size:${p.s}px;transform:rotate(${p.rot}deg)">${p.s % 2 ? '🧪' : '⚡'}</div>`).join('\n');

  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1280px;height:720px;overflow:hidden;position:relative;font-family:'Inter',sans-serif;
    background:radial-gradient(circle at 50% 100%,#3b4a8a 0%,#151630 70%);}
  .glow-dot{position:absolute;border-radius:50%;background:#FFFFF0;filter:blur(1px)}
  .glow-dot.g1{width:5px;height:5px;top:14%;right:22%;opacity:.8}
  .glow-dot.g2{width:4px;height:4px;top:32%;left:16%;opacity:.7}
  .glow-dot.g3{width:6px;height:6px;bottom:20%;right:32%;opacity:.9}
  .glow-dot.g4{width:3px;height:3px;top:50%;left:52%;opacity:.6}
  .glow-dot.g5{width:5px;height:5px;top:12%;left:28%;opacity:.7}
  .icon{position:absolute;opacity:.55;filter:drop-shadow(0 0 8px rgba(255,255,255,.25));z-index:0}
  .layout{position:relative;z-index:2;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;
    padding:40px 44px;gap:30px}
  /* ---------- LEFT: big title ---------- */
  .left{flex:1.1;max-width:640px}
  .chap{font-family:'Poppins',sans-serif;font-weight:800;font-size:96px;line-height:1;color:#FFFF00;
    text-shadow:2px 2px 4px rgba(0,0,0,0.8);letter-spacing:.5px}
  .title{font-family:'Poppins',sans-serif;font-weight:800;font-size:81px;line-height:1.04;color:#FFFFFF;
    text-transform:uppercase;text-shadow:2px 2px 4px rgba(0,0,0,0.8);margin-top:8px}
  .badge-row{margin-top:18px;display:flex;gap:10px}
  .badge{font-family:'Inter',sans-serif;font-weight:600;font-size:22px;color:#c5c9d6;
    background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:10px 20px}
  .badge b{color:#FFFF00;font-weight:600}
  /* ---------- RIGHT: big topic icons + shocked emoji ---------- */
  .hero{flex:1;max-width:520px;position:relative;height:100%;display:flex;align-items:center;justify-content:center}
  .hero::before{content:'';position:absolute;inset:6% 0;border-radius:12px;
    background:rgba(27,33,56,0.6);border:1px solid rgba(255,255,255,0.1);
    box-shadow:0 4px 15px rgba(0,0,0,0.4)}
  .hero .big{font-size:280px;line-height:1;filter:drop-shadow(0 18px 24px rgba(0,0,0,0.45));
    transform:rotate(-6deg);position:relative;z-index:1}
  .hero .side{position:absolute;font-size:150px;line-height:1;z-index:1;
    filter:drop-shadow(0 12px 16px rgba(0,0,0,0.4))}
  .hero .s1{top:12%;right:6%;transform:rotate(12deg)}
  .hero .s2{bottom:12%;left:4%;transform:rotate(-10deg)}
  .shock{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.05);
    font-size:285px;line-height:1;z-index:-1;opacity:.5;
    filter:drop-shadow(0 12px 20px rgba(0,0,0,0.55))}
</style></head><body>
  <div class="glow-dot g1"></div><div class="glow-dot g2"></div><div class="glow-dot g3"></div>
  <div class="glow-dot g4"></div><div class="glow-dot g5"></div>
  ${stars}
  <div class="layout">
    <div class="left">
      <div class="chap">OSN SD ${S.label}</div>
      <div class="title">${titleHtml}</div>
      <div class="badge-row">
        <div class="badge"><b>${lines.length} TOPIK</b> · 100 SOAL</div>
        <div class="badge">PEMBAHASAN LENGKAP</div>
      </div>
    </div>
    <div class="hero">
      <div class="big">${icons[0]}</div>
      <div class="side s1">${icons[1]}</div>
      <div class="side s2">${icons[2]}</div>
    </div>
  </div>
  <div class="shock">😱</div>
</body></html>`;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const files = readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith('.webm')).sort();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  let ok = 0, skipped = 0, missing = 0;
  for (const file of files) {
    const num = firstName(file);
    if (ONLY && !ONLY.has(num)) continue;
    const base = parse(file).name;
    const code = subbabCode(file);
    const outPath = join(OUT_DIR, `${base}.png`);
    if (!FORCE && existsSync(outPath)) { skipped++; continue; }
    if (!code || !TITLES[code]) {
      console.log(`  [skip] no topic code for: ${file}`);
      missing++;
      continue;
    }
    await page.setContent(thumbnailHtml(TITLES[code], code), { waitUntil: 'networkidle' });
    await page.screenshot({ path: outPath });
    ok++;
    if (ok % 10 === 0 || ok === 1) console.log(`  ${ok} done... (${num})`);
  }

  await browser.close();
  console.log(`\nDone. Generated ${ok}, skipped ${skipped}, missing-code ${missing}.`);
  console.log(`Output: ${OUT_DIR}`);
}

main();
