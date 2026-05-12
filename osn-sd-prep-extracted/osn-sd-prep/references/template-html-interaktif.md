# Template HTML Interaktif — OSN SD Prep

File ini berisi template lengkap untuk output HTML interaktif: struktur, CSS Velo CT, JS interaktivitas, plus library SVG diagrams. **WAJIB dibaca sebelum generate output HTML.**

---

## Daftar Isi

- [A. Overview & Cara Pakai](#a-overview)
- [B. SOAL_DATA Schema](#b-soal-data-schema)
- [C. Full HTML Template](#c-full-html-template)
- [D. SVG Diagram Library](#d-svg-diagram-library)
- [E. Tips Generation](#e-tips-generation)

---

## A. Overview

Strategi generation HTML interaktif:

1. **Generate 100 soal data dulu** dalam struktur JS object literal (lihat SOAL_DATA schema di bawah)
2. **Copy template HTML** dari section C, sisipkan SOAL_DATA ke variabel `const SOAL_DATA = [...]`
3. **Untuk soal yang butuh diagram**, sisipkan SVG di field `diagram` (lihat SVG library di section D)
4. **Save** ke `/mnt/user-data/outputs/osn-sd-[mapel]-[bab-slug]-lengkap.html`
5. **present_files**

Template ini sudah include:
- Velo CT design system (DM Sans + IBM Plex Sans, glassmorphism light, red CTA)
- Interaktivitas: pilih opsi → cek jawaban → lihat pembahasan → navigasi
- Progress bar & skor real-time
- Mobile responsive
- Lucide icons via CDN

---

## B. SOAL_DATA Schema

Setiap soal adalah object dengan field-field berikut:

```javascript
{
  id: 1,                                    // Nomor soal (1-100)
  subTopik: "Geometri Datar — Luas Trapesium",  // Tag sub-topik
  tingkat: "Kab",                           // "Kab" | "Prov" | "Nas"
  soal: "Sebuah trapesium memiliki...",     // Pertanyaan (string, max 3 kalimat)
  diagram: `<svg>...</svg>`,                // SVG inline, atau null kalau tidak butuh
  diagramCaption: "Trapesium dengan...",    // Caption di bawah diagram, atau null
  pilihan: [                                 // Array 4 opsi
    { letter: "A", text: "104 cm²" },
    { letter: "B", text: "120 cm²" },
    { letter: "C", text: "144 cm²" },
    { letter: "D", text: "240 cm²" }
  ],
  jawaban: "B",                              // Huruf opsi yang benar
  konsep: "Luas trapesium = ½ × (a+b) × t", // Konsep yang diuji (1 kalimat)
  opsiAnalysis: [                            // Analisis 4 opsi — WAJIB
    { letter: "A", status: "salah", text: "<strong>104 cm²</strong> — Salah. ..." },
    { letter: "B", status: "benar", text: "<strong>120 cm²</strong> — Benar. ..." },
    { letter: "C", status: "salah", text: "<strong>144 cm²</strong> — Salah. ..." },
    { letter: "D", status: "salah", text: "<strong>240 cm²</strong> — Salah. ..." }
  ],
  langkah: [                                 // Array of strings — langkah penyelesaian
    "Identifikasi rumus: <strong>Luas = ½ × (a+b) × t</strong>",
    "Substitusi: ½ × (12+18) × 8 = ½ × 30 × 8",
    "Hitung: 15 × 8 = <strong>120 cm²</strong>"
  ],
  tips: "Rumus trapesium WAJIB dibagi 2..."  // String, satu paragraf
}
```

### Aturan SOAL_DATA

- **opsiAnalysis WAJIB 4 entri** — bahas A, B, C, D semua.
- `status` hanya 2 nilai: `"benar"` atau `"salah"`.
- HTML tags diperbolehkan di field text (akan di-render sebagai HTML): `<strong>`, `<em>`, `<br>`.
- `diagram` adalah string SVG mentah (full `<svg>...</svg>` markup), atau `null` kalau soal tidak butuh visual.
- `langkah` adalah array string, akan di-render sebagai numbered list (ol).
- Total soal: 100 entries per file Mode Per-Materi atau Komprehensif.

---

## C. Full HTML Template

Copy template di bawah persis. Cari komentar `// === INSERT SOAL_DATA HERE ===` dan ganti dengan array 100 soal.

```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OSN SD — [JUDUL BAB DI SINI]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<style>
  :root {
    --vc-navy:#0F1628; --vc-blue:#003DA3; --vc-electric:#00A8FF;
    --vc-red:#E53935; --vc-red-dark:#C62828; --vc-gold:#FDB813; --vc-green:#2E7D32;
    --vc-text:#0F1628; --vc-text-soft:#4A5468; --vc-text-muted:#8B95A8;
    --page-bg:#F8F9FB;
    --glass-1:rgba(255,255,255,0.55); --glass-2:rgba(255,255,255,0.68); --glass-3:rgba(255,255,255,0.82);
    --blur-sm:blur(12px); --blur-md:blur(20px); --blur-lg:blur(32px);
    --shadow-sm:0 1px 2px rgba(15,22,40,0.04),0 2px 8px rgba(15,22,40,0.04);
    --shadow-md:0 4px 12px rgba(15,22,40,0.06),0 8px 24px rgba(15,22,40,0.06);
    --shadow-lg:0 12px 24px rgba(15,22,40,0.08),0 24px 48px rgba(15,22,40,0.08);
    --radius:16px;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{font-family:'IBM Plex Sans',system-ui,sans-serif;color:var(--vc-text);background:var(--page-bg);line-height:1.6;min-height:100vh;overflow-x:hidden;}
  body::before{content:'';position:fixed;inset:0;background:radial-gradient(circle at 15% 20%,rgba(0,168,255,0.10) 0%,transparent 40%),radial-gradient(circle at 85% 80%,rgba(229,57,53,0.08) 0%,transparent 40%),radial-gradient(circle at 50% 50%,rgba(253,184,19,0.06) 0%,transparent 35%);z-index:-1;pointer-events:none;}
  h1,h2,h3,h4{font-family:'DM Sans',sans-serif;font-weight:700;color:var(--vc-navy);letter-spacing:-0.01em;}
  .nav-pill{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100;display:flex;align-items:center;gap:16px;padding:10px 18px;background:var(--glass-3);backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);border:1px solid rgba(255,255,255,0.6);border-radius:999px;box-shadow:var(--shadow-md);max-width:92%;}
  .nav-logo{display:flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-weight:700;font-size:15px;color:var(--vc-navy);}
  .nav-logo-icon{width:28px;height:28px;background:var(--vc-red);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;}
  .nav-stats{display:flex;gap:14px;font-size:13px;color:var(--vc-text-soft);font-weight:500;}
  .nav-stat-value{color:var(--vc-navy);font-weight:700;}
  .container{max-width:820px;margin:0 auto;padding:100px 20px 120px;}
  .header-card{padding:28px;background:var(--glass-2);backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);border:1px solid rgba(255,255,255,0.6);border-radius:var(--radius);box-shadow:var(--shadow-md);margin-bottom:24px;}
  .header-title{font-size:24px;margin-bottom:8px;}
  .header-sub{font-size:14px;color:var(--vc-text-soft);margin-bottom:16px;}
  .meta-row{display:flex;flex-wrap:wrap;gap:10px;}
  .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:rgba(0,61,163,0.08);color:var(--vc-blue);border-radius:999px;font-size:12px;font-weight:500;}
  .chip.kab{background:rgba(46,125,50,0.10);color:var(--vc-green);}
  .chip.prov{background:rgba(0,168,255,0.10);color:var(--vc-blue);}
  .chip.nas{background:rgba(229,57,53,0.10);color:var(--vc-red);}
  .soal-card{padding:28px;background:var(--glass-3);backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);border:1px solid rgba(255,255,255,0.7);border-radius:var(--radius);box-shadow:var(--shadow-md);margin-bottom:20px;position:relative;isolation:isolate;}
  .soal-card::before{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(0,168,255,0.12) 0%,transparent 70%);border-radius:50%;filter:blur(40px);opacity:0.5;z-index:-1;}
  .soal-num{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;}
  .soal-num-badge{font-family:'DM Sans',sans-serif;font-weight:700;font-size:14px;color:var(--vc-navy);}
  .soal-tags{display:flex;gap:6px;flex-wrap:wrap;}
  .tag{padding:4px 10px;font-size:11px;font-weight:500;border-radius:999px;background:rgba(15,22,40,0.06);color:var(--vc-text-soft);}
  .soal-text{font-size:16px;line-height:1.7;color:var(--vc-text);margin-bottom:20px;}
  .diagram-box{margin:20px 0;padding:24px;background:rgba(255,255,255,0.6);border:1px solid rgba(15,22,40,0.08);border-radius:12px;display:flex;justify-content:center;align-items:center;}
  .diagram-box svg{max-width:100%;height:auto;}
  .diagram-caption{font-size:12px;color:var(--vc-text-muted);text-align:center;margin-top:8px;font-style:italic;}
  .options{display:flex;flex-direction:column;gap:10px;margin-bottom:24px;}
  .option{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:rgba(255,255,255,0.55);border:1.5px solid rgba(15,22,40,0.08);border-radius:12px;cursor:pointer;transition:all 0.15s ease;font-size:15px;}
  .option:hover{border-color:var(--vc-electric);background:rgba(0,168,255,0.04);}
  .option.selected{border-color:var(--vc-blue);background:rgba(0,61,163,0.06);}
  .option.correct{border-color:var(--vc-green);background:rgba(46,125,50,0.08);}
  .option.wrong{border-color:var(--vc-red);background:rgba(229,57,53,0.06);}
  .option-letter{width:28px;height:28px;flex-shrink:0;border-radius:50%;background:rgba(15,22,40,0.08);color:var(--vc-text-soft);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;font-family:'DM Sans',sans-serif;}
  .option.selected .option-letter{background:var(--vc-blue);color:#fff;}
  .option.correct .option-letter{background:var(--vc-green);color:#fff;}
  .option.wrong .option-letter{background:var(--vc-red);color:#fff;}
  .option.disabled{cursor:default;pointer-events:none;}
  .btn-action{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--vc-red);color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;cursor:pointer;transition:all 0.15s ease;box-shadow:0 2px 8px rgba(229,57,53,0.25);}
  .btn-action:hover:not(:disabled){background:var(--vc-red-dark);transform:translateY(-1px);box-shadow:0 4px 12px rgba(229,57,53,0.35);}
  .btn-action:disabled{background:var(--vc-text-muted);cursor:not-allowed;box-shadow:none;}
  .btn-secondary{background:rgba(15,22,40,0.08);color:var(--vc-navy);box-shadow:none;}
  .btn-secondary:hover:not(:disabled){background:rgba(15,22,40,0.12);box-shadow:none;}
  .feedback{display:none;margin-top:16px;padding:14px 18px;border-radius:12px;font-size:14px;font-weight:500;align-items:center;gap:10px;}
  .feedback.show{display:flex;}
  .feedback.correct{background:rgba(46,125,50,0.10);color:var(--vc-green);border:1px solid rgba(46,125,50,0.2);}
  .feedback.wrong{background:rgba(229,57,53,0.08);color:var(--vc-red);border:1px solid rgba(229,57,53,0.2);}
  .pembahasan{display:none;margin-top:20px;padding:22px;background:rgba(0,61,163,0.04);border:1px solid rgba(0,61,163,0.12);border-radius:14px;}
  .pembahasan.show{display:block;}
  .pembahasan-title{display:flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-weight:700;font-size:15px;color:var(--vc-blue);margin-bottom:14px;}
  .pembahasan-section{margin-bottom:16px;}
  .pembahasan-section:last-child{margin-bottom:0;}
  .pembahasan-section-title{font-family:'DM Sans',sans-serif;font-weight:600;font-size:13px;color:var(--vc-navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.04em;}
  .pembahasan-section p,.pembahasan-section li{font-size:14px;line-height:1.65;color:var(--vc-text);}
  .pembahasan-section ol,.pembahasan-section ul{padding-left:20px;}
  .pembahasan-section ol li,.pembahasan-section ul li{margin-bottom:6px;}
  .opsi-analysis{display:grid;gap:10px;margin-top:4px;}
  .opsi-row{display:grid;grid-template-columns:28px 1fr;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.6);font-size:14px;line-height:1.55;}
  .opsi-row.benar{background:rgba(46,125,50,0.08);border-left:3px solid var(--vc-green);}
  .opsi-row.salah{background:rgba(229,57,53,0.04);}
  .opsi-row-letter{font-family:'DM Sans',sans-serif;font-weight:700;color:var(--vc-navy);}
  .opsi-row.benar .opsi-row-letter{color:var(--vc-green);}
  .tips-box{margin-top:14px;padding:12px 16px;background:rgba(253,184,19,0.10);border-left:3px solid var(--vc-gold);border-radius:8px;font-size:13px;line-height:1.6;}
  .tips-box strong{color:var(--vc-navy);font-weight:600;}
  .nav-row{display:flex;justify-content:space-between;gap:12px;margin-top:24px;}
  .nav-row .btn-action{flex:1;justify-content:center;}
  .progress-bar-wrap{position:fixed;bottom:0;left:0;right:0;height:6px;background:rgba(15,22,40,0.05);z-index:50;}
  .progress-bar-fill{height:100%;background:linear-gradient(90deg,var(--vc-electric),var(--vc-blue));transition:width 0.3s ease;}
  .hasil-card{padding:36px 28px;background:var(--glass-3);backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);border:1px solid rgba(255,255,255,0.7);border-radius:var(--radius);box-shadow:var(--shadow-lg);text-align:center;}
  .hasil-score{font-family:'DM Sans',sans-serif;font-weight:700;font-size:56px;color:var(--vc-navy);line-height:1;margin:16px 0;}
  .hasil-score-max{color:var(--vc-text-muted);font-size:28px;}
  @media (max-width:640px){.container{padding:90px 14px 100px;}.header-card{padding:20px;}.soal-card{padding:20px;}.header-title{font-size:20px;}.soal-text{font-size:15px;}.nav-pill{padding:8px 14px;gap:12px;}.nav-stats{gap:10px;font-size:12px;}.pembahasan{padding:18px;}}
  .hidden{display:none !important;}
</style>
</head>
<body>

<nav class="nav-pill">
  <div class="nav-logo">
    <div class="nav-logo-icon">O</div>
    OSN SD Prep
  </div>
  <div class="nav-stats">
    <span>Soal <span class="nav-stat-value" id="navCurrent">1</span>/<span class="nav-stat-value" id="navTotal">100</span></span>
    <span>Skor <span class="nav-stat-value" id="navScore">0</span></span>
  </div>
</nav>

<div class="container">
  <div class="header-card">
    <h1 class="header-title">[JUDUL BAB DI SINI — mis. "MTK-02 · Pecahan, Desimal, dan Persen"]</h1>
    <p class="header-sub">100 soal Pilihan Ganda dengan pembahasan komprehensif analisis 4 opsi · Distribusi tingkat 50 Kab + 30 Prov + 20 Nas</p>
    <div class="meta-row">
      <span class="chip">📚 100 Soal</span>
      <span class="chip kab">Campur Tingkat</span>
      <span class="chip">Kelas 5–6 SD</span>
    </div>
  </div>

  <div id="soalContainer"></div>

  <div class="hasil-card hidden" id="hasilCard">
    <h2>🎉 Selesai!</h2>
    <div class="hasil-score"><span id="finalScore">0</span><span class="hasil-score-max">/100</span></div>
    <p id="hasilFeedback" style="color:var(--vc-text-soft);margin-bottom:20px;"></p>
    <button class="btn-action" onclick="restart()">
      <i data-lucide="rotate-cw" style="width:16px;height:16px;"></i>
      Ulangi Latihan
    </button>
  </div>
</div>

<div class="progress-bar-wrap"><div class="progress-bar-fill" id="progressBar" style="width:0%;"></div></div>

<script>
// === INSERT SOAL_DATA HERE ===
const SOAL_DATA = [
  // Array 100 soal — substitusi sesuai schema di Section B
];

let currentSoal = 0;
let answers = new Array(SOAL_DATA.length).fill(null);
let revealed = new Array(SOAL_DATA.length).fill(false);

function renderSoal(idx) {
  const data = SOAL_DATA[idx];
  const userAnswer = answers[idx];
  const isRevealed = revealed[idx];
  const container = document.getElementById('soalContainer');
  container.innerHTML = `
    <div class="soal-card">
      <div class="soal-num">
        <div class="soal-num-badge">Soal ${idx + 1} / ${SOAL_DATA.length}</div>
        <div class="soal-tags">
          <span class="tag">${data.subTopik}</span>
          <span class="tag chip ${data.tingkat.toLowerCase()}">${data.tingkat === 'Kab' ? 'Kabupaten' : data.tingkat === 'Prov' ? 'Provinsi' : 'Nasional'}</span>
        </div>
      </div>
      <p class="soal-text">${data.soal}</p>
      ${data.diagram ? `<div class="diagram-box">${data.diagram}</div>${data.diagramCaption ? `<p class="diagram-caption">${data.diagramCaption}</p>` : ''}` : ''}
      <div class="options">
        ${data.pilihan.map(p => `
          <div class="option ${userAnswer === p.letter ? 'selected' : ''} ${isRevealed ? 'disabled' : ''} ${isRevealed && p.letter === data.jawaban ? 'correct' : ''} ${isRevealed && userAnswer === p.letter && p.letter !== data.jawaban ? 'wrong' : ''}" onclick="selectOption(${idx}, '${p.letter}')">
            <div class="option-letter">${p.letter}</div>
            <div>${p.text}</div>
          </div>
        `).join('')}
      </div>
      ${!isRevealed ? `<button class="btn-action" onclick="cekJawaban(${idx})" ${userAnswer === null ? 'disabled' : ''}><i data-lucide="check-circle" style="width:16px;height:16px;"></i>Cek Jawaban</button>` : ''}
      <div class="feedback ${isRevealed ? 'show' : ''} ${userAnswer === data.jawaban ? 'correct' : 'wrong'}">
        ${userAnswer === data.jawaban ? '<i data-lucide="check-circle-2" style="width:18px;height:18px;"></i> Benar! Jawaban yang tepat adalah ' + data.jawaban + '.' : '<i data-lucide="x-circle" style="width:18px;height:18px;"></i> Belum tepat. Jawaban benar adalah ' + data.jawaban + '. Lihat pembahasan di bawah.'}
      </div>
      <div class="pembahasan ${isRevealed ? 'show' : ''}">
        <div class="pembahasan-title"><i data-lucide="lightbulb" style="width:18px;height:18px;"></i>Pembahasan Komprehensif</div>
        <div class="pembahasan-section">
          <div class="pembahasan-section-title">Konsep yang diuji</div>
          <p>${data.konsep}</p>
        </div>
        <div class="pembahasan-section">
          <div class="pembahasan-section-title">Analisis setiap pilihan</div>
          <div class="opsi-analysis">
            ${data.opsiAnalysis.map(o => `<div class="opsi-row ${o.status === 'benar' ? 'benar' : 'salah'}"><div class="opsi-row-letter">${o.letter}.</div><div>${o.text}</div></div>`).join('')}
          </div>
        </div>
        <div class="pembahasan-section">
          <div class="pembahasan-section-title">Langkah penyelesaian (cara benar)</div>
          <ol>${data.langkah.map(l => `<li>${l}</li>`).join('')}</ol>
        </div>
        <div class="tips-box"><strong>💭 Tips:</strong> ${data.tips}</div>
      </div>
      <div class="nav-row">
        <button class="btn-action btn-secondary" onclick="navSoal(-1)" ${idx === 0 ? 'disabled' : ''}><i data-lucide="arrow-left" style="width:16px;height:16px;"></i>Sebelumnya</button>
        <button class="btn-action" onclick="navSoal(1)" ${!isRevealed ? 'disabled' : ''}>${idx === SOAL_DATA.length - 1 ? 'Lihat Hasil' : 'Berikutnya'}<i data-lucide="arrow-right" style="width:16px;height:16px;"></i></button>
      </div>
    </div>
  `;
  updateProgress();
  if (window.lucide) lucide.createIcons();
}

function selectOption(idx, letter){if(revealed[idx])return;answers[idx]=letter;renderSoal(idx);}
function cekJawaban(idx){if(answers[idx]===null)return;revealed[idx]=true;renderSoal(idx);}
function navSoal(delta){const newIdx=currentSoal+delta;if(newIdx<0)return;if(newIdx>=SOAL_DATA.length){showHasil();return;}currentSoal=newIdx;renderSoal(currentSoal);window.scrollTo({top:0,behavior:'smooth'});}
function updateProgress(){const correctCount=answers.filter((a,i)=>a===SOAL_DATA[i].jawaban&&revealed[i]).length;const revealedCount=revealed.filter(r=>r).length;document.getElementById('progressBar').style.width=(revealedCount/SOAL_DATA.length*100)+'%';document.getElementById('navScore').textContent=correctCount;document.getElementById('navCurrent').textContent=currentSoal+1;document.getElementById('navTotal').textContent=SOAL_DATA.length;}
function showHasil(){document.getElementById('soalContainer').classList.add('hidden');document.getElementById('hasilCard').classList.remove('hidden');const correctCount=answers.filter((a,i)=>a===SOAL_DATA[i].jawaban).length;document.getElementById('finalScore').textContent=correctCount;const pct=correctCount/SOAL_DATA.length*100;let feedback='';if(pct>=90)feedback='🏆 Luar biasa! Penguasaan konsep sangat kuat.';else if(pct>=75)feedback='👍 Bagus! Beberapa konsep masih bisa diperdalam.';else if(pct>=60)feedback='💪 Cukup baik. Baca ulang pembahasan untuk perbaikan.';else feedback='📚 Tetap semangat — fokus pada pembahasan tiap soal untuk pemahaman lebih dalam.';document.getElementById('hasilFeedback').textContent=feedback;if(window.lucide)lucide.createIcons();}
function restart(){currentSoal=0;answers=new Array(SOAL_DATA.length).fill(null);revealed=new Array(SOAL_DATA.length).fill(false);document.getElementById('hasilCard').classList.add('hidden');document.getElementById('soalContainer').classList.remove('hidden');renderSoal(0);window.scrollTo({top:0,behavior:'smooth'});}

document.addEventListener('DOMContentLoaded',()=>{renderSoal(0);if(window.lucide)lucide.createIcons();});
</script>
</body>
</html>
```

---

## D. SVG Diagram Library

Daftar pola SVG yang sering dibutuhkan. **Copy-pasteable**. Sesuaikan label, ukuran, dan koordinat sesuai kebutuhan soal.

### Geometri Datar

#### Persegi Panjang dengan label

```html
<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="50" width="200" height="100" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <text x="140" y="42" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" fill="#0F1628" font-weight="500">[panjang] cm</text>
  <text x="252" y="105" font-family="IBM Plex Sans" font-size="13" fill="#0F1628" font-weight="500">[lebar] cm</text>
</svg>
```

#### Segitiga Siku-siku dengan tinggi

```html
<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,160 200,160 40,40" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <rect x="40" y="150" width="10" height="10" fill="none" stroke="#003DA3" stroke-width="1"/>
  <text x="120" y="178" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" fill="#0F1628">[alas] cm</text>
  <text x="26" y="105" font-family="IBM Plex Sans" font-size="13" fill="#0F1628" text-anchor="end">[tinggi] cm</text>
</svg>
```

#### Trapesium

```html
<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="80,40 200,40 240,140 40,140" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <text x="140" y="30" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" fill="#0F1628">[a] cm</text>
  <text x="140" y="160" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" fill="#0F1628">[b] cm</text>
  <line x1="255" y1="40" x2="255" y2="140" stroke="#E53935" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="263" y="95" font-family="IBM Plex Sans" font-size="13" fill="#E53935" font-weight="600">[t] cm</text>
</svg>
```

#### Lingkaran dengan jari-jari

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="70" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#0F1628"/>
  <line x1="100" y1="100" x2="170" y2="100" stroke="#E53935" stroke-width="1.5"/>
  <text x="135" y="94" font-family="IBM Plex Sans" font-size="13" fill="#E53935" font-weight="600">r = [r] cm</text>
</svg>
```

#### Bangun Gabungan (persegi panjang + setengah lingkaran)

```html
<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 40 60 L 200 60 A 50 50 0 0 1 200 160 L 40 160 Z" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <text x="120" y="50" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" fill="#0F1628">[p] cm</text>
  <text x="26" y="115" font-family="IBM Plex Sans" font-size="13" fill="#0F1628" text-anchor="end">[ℓ] cm</text>
  <text x="230" y="115" font-family="IBM Plex Sans" font-size="12" fill="#E53935" font-weight="600">r = [r]</text>
</svg>
```

### Geometri Ruang (wireframe)

#### Kubus

```html
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
  <path d="M 40 80 L 120 60 L 200 80 L 200 180 L 120 200 L 40 180 Z" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <path d="M 40 80 L 120 100 L 200 80 M 120 100 L 120 200" stroke="#003DA3" stroke-width="2" fill="none" stroke-dasharray="4,3"/>
  <text x="80" y="200" font-family="IBM Plex Sans" font-size="13" fill="#0F1628" font-weight="500">[s] cm</text>
</svg>
```

#### Balok

```html
<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 30 80 L 130 50 L 230 80 L 230 160 L 130 190 L 30 160 Z" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <path d="M 30 80 L 130 110 L 230 80 M 130 110 L 130 190" stroke="#003DA3" stroke-width="2" fill="none" stroke-dasharray="4,3"/>
  <text x="80" y="180" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">p</text>
  <text x="180" y="180" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">ℓ</text>
  <text x="240" y="125" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">t</text>
</svg>
```

#### Tabung

```html
<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="40" rx="60" ry="15" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <path d="M 40 40 L 40 200 A 60 15 0 0 0 160 200 L 160 40" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <ellipse cx="100" cy="200" rx="60" ry="15" fill="none" stroke="#003DA3" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="100" y="34" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="#E53935" font-weight="600">r</text>
  <text x="170" y="125" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">t</text>
</svg>
```

### Rangkaian Listrik

#### Rangkaian Seri 3 Lampu

```html
<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="80" width="14" height="40" fill="#FDB813" stroke="#0F1628" stroke-width="1.5"/>
  <rect x="34" y="90" width="6" height="20" fill="#0F1628"/>
  <path d="M 40 100 L 60 100" stroke="#0F1628" stroke-width="2" fill="none"/>
  <circle cx="80" cy="100" r="20" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="80" y="105" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L1</text>
  <path d="M 100 100 L 130 100" stroke="#0F1628" stroke-width="2" fill="none"/>
  <circle cx="150" cy="100" r="20" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="150" y="105" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L2</text>
  <path d="M 170 100 L 200 100" stroke="#0F1628" stroke-width="2" fill="none"/>
  <circle cx="220" cy="100" r="20" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="220" y="105" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L3</text>
  <path d="M 240 100 L 270 100 L 270 40 L 27 40 L 27 80" stroke="#0F1628" stroke-width="2" fill="none"/>
</svg>
```

#### Rangkaian Paralel 3 Lampu

```html
<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="110" width="14" height="40" fill="#FDB813" stroke="#0F1628" stroke-width="1.5"/>
  <rect x="34" y="120" width="6" height="20" fill="#0F1628"/>
  <path d="M 40 130 L 80 130" stroke="#0F1628" stroke-width="2"/>
  <path d="M 80 130 L 80 50 L 280 50 L 280 130" stroke="#0F1628" stroke-width="2" fill="none"/>
  <path d="M 80 130 L 80 130 L 280 130" stroke="#0F1628" stroke-width="2" fill="none" stroke-dasharray="0"/>
  <path d="M 80 130 L 80 210 L 280 210 L 280 130" stroke="#0F1628" stroke-width="2" fill="none"/>
  <circle cx="180" cy="50" r="18" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="180" y="55" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L1</text>
  <circle cx="180" cy="130" r="18" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="180" y="135" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L2</text>
  <circle cx="180" cy="210" r="18" fill="#FFF8E1" stroke="#0F1628" stroke-width="1.5"/>
  <text x="180" y="215" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="#0F1628" font-weight="600">L3</text>
  <path d="M 280 130 L 300 130" stroke="#0F1628" stroke-width="2"/>
</svg>
```

### Sudut

#### Sudut Lancip / Siku / Tumpul

```html
<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="120" x2="160" y2="120" stroke="#0F1628" stroke-width="2"/>
  <line x1="40" y1="120" x2="140" y2="40" stroke="#0F1628" stroke-width="2"/>
  <path d="M 70 120 A 30 30 0 0 1 70 105" fill="none" stroke="#E53935" stroke-width="1.5"/>
  <text x="78" y="105" font-family="IBM Plex Sans" font-size="13" fill="#E53935" font-weight="600">[X]°</text>
</svg>
```

### Pesawat Sederhana

#### Tuas (jenis 1 — tumpu di tengah)

```html
<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="80" width="220" height="6" fill="#0F1628"/>
  <polygon points="130,86 150,86 140,120" fill="#0F1628"/>
  <rect x="40" y="50" width="30" height="30" fill="#FDB813" stroke="#0F1628" stroke-width="1.5"/>
  <text x="55" y="70" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628" font-weight="700">B</text>
  <rect x="210" y="60" width="20" height="20" fill="#00A8FF" stroke="#0F1628" stroke-width="1.5"/>
  <text x="220" y="74" text-anchor="middle" font-family="IBM Plex Sans" font-size="10" fill="#fff" font-weight="700">K</text>
  <text x="55" y="40" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Beban</text>
  <text x="220" y="50" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Kuasa</text>
  <text x="140" y="148" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Tumpu</text>
</svg>
```

#### Bidang Miring

```html
<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,150 240,150 240,50" fill="rgba(0,168,255,0.08)" stroke="#003DA3" stroke-width="2"/>
  <rect x="160" y="80" width="30" height="20" fill="#FDB813" stroke="#0F1628" stroke-width="1.5"/>
  <text x="120" y="170" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">[panjang bidang]</text>
  <text x="252" y="105" font-family="IBM Plex Sans" font-size="12" fill="#0F1628">[tinggi]</text>
</svg>
```

### Statistika

#### Diagram Batang

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="170" stroke="#0F1628" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="280" y2="170" stroke="#0F1628" stroke-width="1.5"/>
  <rect x="60" y="100" width="30" height="70" fill="#003DA3"/>
  <rect x="110" y="60" width="30" height="110" fill="#00A8FF"/>
  <rect x="160" y="80" width="30" height="90" fill="#FDB813"/>
  <rect x="210" y="40" width="30" height="130" fill="#E53935"/>
  <text x="75" y="185" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">A</text>
  <text x="125" y="185" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">B</text>
  <text x="175" y="185" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">C</text>
  <text x="225" y="185" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">D</text>
  <text x="75" y="95" text-anchor="middle" font-family="IBM Plex Sans" font-size="10" fill="#0F1628">[X]</text>
  <text x="125" y="55" text-anchor="middle" font-family="IBM Plex Sans" font-size="10" fill="#0F1628">[X]</text>
  <text x="175" y="75" text-anchor="middle" font-family="IBM Plex Sans" font-size="10" fill="#0F1628">[X]</text>
  <text x="225" y="35" text-anchor="middle" font-family="IBM Plex Sans" font-size="10" fill="#0F1628">[X]</text>
</svg>
```

#### Diagram Lingkaran (4 segmen)

```html
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
  <path d="M 120 120 L 120 20 A 100 100 0 0 1 220 120 Z" fill="#003DA3"/>
  <path d="M 120 120 L 220 120 A 100 100 0 0 1 120 220 Z" fill="#00A8FF"/>
  <path d="M 120 120 L 120 220 A 100 100 0 0 1 20 120 Z" fill="#FDB813"/>
  <path d="M 120 120 L 20 120 A 100 100 0 0 1 120 20 Z" fill="#E53935"/>
  <text x="170" y="60" font-family="IBM Plex Sans" font-size="12" fill="#fff" font-weight="600">A [25%]</text>
  <text x="170" y="190" font-family="IBM Plex Sans" font-size="12" fill="#fff" font-weight="600">B [25%]</text>
  <text x="40" y="190" font-family="IBM Plex Sans" font-size="12" fill="#0F1628" font-weight="600">C [25%]</text>
  <text x="40" y="60" font-family="IBM Plex Sans" font-size="12" fill="#fff" font-weight="600">D [25%]</text>
</svg>
```

### Pola Gambar (Sequence)

#### Pola titik bertambah

```html
<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(20,50)">
    <circle cx="0" cy="0" r="8" fill="#003DA3"/>
    <text x="0" y="35" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Pola 1</text>
  </g>
  <g transform="translate(90,50)">
    <circle cx="-10" cy="-10" r="8" fill="#003DA3"/>
    <circle cx="10" cy="-10" r="8" fill="#003DA3"/>
    <circle cx="0" cy="10" r="8" fill="#003DA3"/>
    <text x="0" y="35" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Pola 2</text>
  </g>
  <g transform="translate(180,50)">
    <circle cx="-20" cy="-15" r="8" fill="#003DA3"/>
    <circle cx="0" cy="-15" r="8" fill="#003DA3"/>
    <circle cx="20" cy="-15" r="8" fill="#003DA3"/>
    <circle cx="-10" cy="5" r="8" fill="#003DA3"/>
    <circle cx="10" cy="5" r="8" fill="#003DA3"/>
    <circle cx="0" cy="25" r="8" fill="#003DA3"/>
    <text x="0" y="50" text-anchor="middle" font-family="IBM Plex Sans" font-size="11" fill="#0F1628">Pola 3</text>
  </g>
  <text x="320" y="50" font-family="DM Sans" font-size="24" fill="#E53935" font-weight="700">...?</text>
</svg>
```

---

## E. Tips Generation

### Konversi Markdown → HTML SOAL_DATA

Jika sudah punya draft soal markdown, konversi ke SOAL_DATA dengan pola berikut:

| Markdown | HTML SOAL_DATA |
|----------|----------------|
| `**(1) Soal:** [text]` | `soal: "[text]"` |
| `A. opsi1\nB. opsi2\n...` | `pilihan: [{letter:"A",text:"opsi1"}, ...]` |
| `**(3) Jawaban:** **B. ...**` | `jawaban: "B"` |
| `**Konsep yang diuji:** X` | `konsep: "X"` |
| Bullet analisis 4 opsi | `opsiAnalysis: [{letter:"A",status:"salah",text:"..."}, ...]` |
| Numbered list langkah | `langkah: ["langkah 1", "langkah 2"]` |
| Bullet 💭 Tips | `tips: "..."` |

### Format Field di SOAL_DATA

- **HTML inline OK**: `<strong>`, `<em>`, `<br>`, `<sup>`, `<sub>` di semua field text
- **Escape quotes**: gunakan backticks ` `` ` untuk SVG strings panjang (multi-line)
- **Math symbols**: pakai entitas atau Unicode langsung — × (kali), ÷ (bagi), ² (kuadrat), ³ (kubik), π (pi), √ (akar), ½ ⅓ ¼ (pecahan)
- **Strings panjang**: pecah dengan template literal backticks

### Estimasi Token

- HTML template kosong: ~12.000 tokens
- 100 soal data lengkap (rata-rata 250 kata per soal × 100): ~50.000 tokens
- **Total estimasi: 60.000–70.000 tokens output untuk file HTML lengkap**

Strategi efisien:
1. Generate 100 soal data dulu dalam memori
2. Gabungkan dengan template HTML
3. Tulis ke file sekaligus

### Mobile Responsiveness

Template sudah mobile-friendly. Saat menyusun SVG, perhatikan:
- Pakai `viewBox` (bukan width/height fixed) → otomatis scale
- Font size dalam SVG: minimal 11px supaya readable di mobile
- Hindari diagram yang terlalu lebar (>320px) — akan mengecil di HP

### Validasi Output

Sebelum save, cek:
- [ ] SOAL_DATA berisi tepat 100 entri (atau jumlah yang diminta user)
- [ ] Setiap soal punya `opsiAnalysis` dengan 4 entri (A, B, C, D)
- [ ] Setiap `pilihan` punya 4 opsi dengan `letter` "A"/"B"/"C"/"D"
- [ ] `jawaban` ada di salah satu letter di `pilihan`
- [ ] Distribusi `tingkat` sesuai (50 "Kab" + 30 "Prov" + 20 "Nas" kalau campur)
- [ ] SVG diagrams valid (cek render dengan satu test soal dulu kalau memungkinkan)
- [ ] Variasi `subTopik` merata (tidak ada sub-topik yang >25% dari total)
