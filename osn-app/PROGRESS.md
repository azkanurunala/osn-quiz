# OSN-SD App — Progress Tracker

> Tujuan: catat status implementasi & cara melanjutkan di chat/model baru. **Update saat ada perubahan signifikan.**

Last updated: **2026-10-03** (PIVOT: ilustrasi IPA akan diganti gambar asli Vertex AI; pilot `paru-paru` selesai; menunggu cek billing. **Baru:** 19 diagram SVG MTK dibangun + gate subject matcher diperbaiki + presisi keyword MTK di-tuning).

---

## HANDOFF — posisi pekerjaan saat ini (baca ini dulu)

### ⚠️ PIVOT (2026-10-03) — baca dulu sebelum lanjut
Keputusan user: **ilustrasi SVG tidak relevan/akurat untuk IPA → semua SVG IPA akan diganti ilustrasi asli yang digenerate dari Vertex AI.** SVG MTK boleh tetap. Pipeline-nya SUDAH ADA di repo ini (`image-prompts/` + `image-results/` + `image-prompts/_src/gemini-gen.mjs`); tinggal digen → direview → diintegrasikan ke app.

**Akun/project Vertex (WAJIB ini):** gcloud config `osn-sd` = `azukanurunara94@gmail.com`, project `project-a087bc92-937b-4ba3-859`. Pakai `node image-prompts/_src/gemini-gen.mjs --vertex <ids…>` (tanpa API key; token dari `gcloud auth print-access-token`). Jangan sentuh config `default` (milik klien lain). Sudah diverifikasi bekerja 2026-10-03.

**Kendala penting:** opencode TIDAK bisa melihat gambar (no image input). Review akurasi visual HARUS dilakukan model ber-vision (Claude) atau manusia. Progress ini ditulis sebagai *bridging* agar Claude bisa melanjutkan review + generate.

**Status pipeline gambar:** total slot IPA **1776** (33 terisi / 1743 kosong), MTK **184** (0 terisi). `image-results/_STATUS.md` & `_review.json` = source of truth review.

**Pilot `paru-paru` (2026-10-03):** p07 (ilustrasi depan) + p11 (penampang belah) digen pakai FLASH dan PRO; 4 gambar perbandingan di `C:\Users\nurun\AppData\Local\Temp\opencode\shots\PARU-p07/11-*-FLASH|PRO.png`. Biaya pilot ≈ **$0.76** (`--biaya`: flash ~$0.47 / pro ~$0.29). Slot `paru-paru/p07` & `/p11` saat ini berisi versi **PRO** (belum direview).

**Keputusan model (user): HYBRID** — FLASH `gemini-2.5-flash-image` (~$0.039/gbr) untuk subjek sederhana (hewan, tumbuhan, benda, antariksa); PRO `gemini-3-pro-image` (~$0.134/gbr) untuk anatomi & penampang skematik.

**BLOKER: menunggu cek billing.** User cek di Google Cloud Billing → Reports (kredit free-trial kabarnya tidak berlaku untuk image-gen). **Jangan jalankan batch besar sebelum billing dikonfirmasi.**

### Tujuan besar
Ganti ilustrasi IPA di app dengan gambar asli Vertex AI (pipeline `image-prompts` → `image-results` → review → wiring app). SVG IPA = sementara; SVG MTK tetap.

### Rekam video (status)
Percobaan rekam `ipa-02a` (42 menit) **diabort** 2026-10-03 karena SVG IPA sudah diputuskan tidak dipakai. Catatan akar masalah yang sempat menghambat: stall rekam ~20 menit BUKAN bug app — recorder headless tidak menjalankan `MediaRecorder` app; stall dipicu kontensi server `@playwright/mcp` + RAM rendah. Setelah proses MCP dibunuh, smoke `--limit=10` sukses (260s). Musik `audio/osn-1.mp3`. `--music-out` default `recordings-final` → **wajib override** agar tak menimpa 201 video final.

### Yang sudah selesai
- **34 diagram SVG** di `src/features/diagrams/` (13 lama + 21 baru):
  - `families/tubuh.jsx` (5): saluran-pencernaan, penyerapan-nutrisi, organ-ekskresi, pernapasan-paru, peredaran-darah → ipa-02
  - `families/fisika.jsx` (6): perambatan-cahaya, pemantulan-cahaya, pembiasan-cahaya, perpindahan-panas, pemantulan-bunyi, pemisahan-campuran → ipa-04
  - `families/bumi.jsx` (6): tata-surya, rotasi-revolusi, gerhana, fase-bulan, lapisan-atmosfer, siklus-batu → ipa-05
  - `families/sains.jsx` (4): keanekaragaman-hayati, variabel-penelitian, alat-pengukuran, metode-ilmiah → ipa-06
  - lama: `mekanika.jsx` (5), `listrik.jsx` (4), `ekologi.jsx` (4)
- Terdaftar di `registry.js` + `diagram-data.js`. **Smoke test render `node scripts/audit-render.mjs`** (SSR, tanpa browser): 68 render (34 diagram × 2 fase) lolos, tanpa warning React/NaN.
- **Bug diperbaiki**:
  - `components/PracticeArea.jsx`: `<QuestionFigure isSplitActive />` (JSX shorthand = `true`) → `isSplitActive={isSplitActive}`. Figure fase soal sempat 260px, bukan 520px.
  - `features/diagrams/DiagramFrame.jsx`: `maxWidth` → `width` + `maxWidth:'100%'` agar flex-item tidak kolaps.
  - `families/tubuh.jsx` saluran-pencernaan: connector `xs[i+1]` pada organ terakhir → `undefined-34 = NaN`; diperbaiki `organs.slice(0,-1)`.
- **Matcher topik** `features/diagrams/matchDiagram.js`: `topicOf()` = `subTopic` non-junk + segmen tengah `level`; haystack = `topicOf` + `concept` + `question`. `MIN_SCORE=6`, `MIN_MARGIN=4`, guard negasi. **Audit presisi Stream A (2026-10-03)**: ke-34 diagram ditinjau via `node scripts/audit-matches.mjs <id>`; keyword generik yang mencuri soal lintas topik dibuang: `percobaan, kesimpulan, observasi, varietas, endemik, satuan, penggaris, usus, perut, mulut, gizi, enzim, habitat, lingkungan hidup, berputar pada, mengukur, prisma, terurai, bayangan, sifat cahaya, berkas cahaya, pantulan, memantul, bercabang, penghantar, mengangkat beban, dimakan, empedu, gugur darah, oksigen, karbon dioksida, pertukaran gas, lereng, tangga, jantung, disaring, zat sisa, membeku, uap air`. Contoh FP yang diperbaiki: MTK prisma→pembiasan-cahaya, ular lidah bercabang→rangkaian-paralel, bola memantul→pemantulan-bunyi, fotosintesis→pernapasan-paru, es mencair "penyerapan kalor"→penyerapan-nutrisi, tuas "mengangkat beban"→katrol, "rumah tangga"/soal daya/erosi lereng→bidang-miring, "otot jantung"/batang otak→peredaran-darah, "air membeku"→siklus-batu, "uap air" perubahan wujud→siklus-air, "udara disaring" hidung→pemisahan-campuran.
- **Coverage 35 paket IPA = 1589/3445 (46.1%)** (audit presisi penuh; presisi lebih penting). Per bab: ipa-01 24.4% · ipa-02 45.4% · ipa-03 40.4% · ipa-04 50.6% · ipa-05 57.4% · ipa-06 52.6%.
- `npm run build` ✅ (~19s). `npx eslint src/features/diagrams` ✅ bersih (19 problem tersisa = baseline lama di `PracticeArea.jsx`).
- **19 diagram SVG MTK dibangun** (family baru) — pasangan SVG yang tetap dipakai setelah pivot (IPA → Vertex):
  - `families/bilangan.jsx` (3): pohon-faktor, garis-bilangan, pola-bilangan
  - `families/geometri-datar.jsx` (3): bangun-datar, lingkaran-unsur, sudut
  - `families/geometri-ruang.jsx` (3): bangun-ruang, jaring-jaring, bangun-ruang-gabungan
  - `families/pengukuran.jsx` (4): tangga-satuan, kecepatan-jarak-waktu, debit, skala-peta
  - `families/statistika.jsx` (4): diagram-batang, diagram-lingkaran, mean-median-modus, peluang-dadu
  - `families/aljabar.jsx` (2): diskon-ppn, timbangan-aljabar
  - Terdaftar di `registry.js` + `diagram-data.js` dengan `subject: 'mtk'`. **Total sekarang 53 diagram** (34 IPA + 19 MTK).
  - Verifikasi: `npx eslint src/features/diagrams` ✅ bersih; `node scripts/audit-render.mjs` = **106 render (53 × 2 fase) lolos** (warning `<animateMotion />` casing pre-existing, bukan dari MTK).
- **Gate subject matcher (bug MTK) DIPERBAIKI:** `matchDiagram(question, packageSubject)` + helper `subjectOf()`; diagram tanpa `subject` = IPA default. Wiring: `PracticeArea.jsx` (`matchDiagram(currentQuestion, questionsData?.subject)` ~107) + `PembahasanContent({q, subject})` (2 call site); `scripts/audit-matches.mjs` pass `it.subject`. Paket MTK tak lagi memunculkan diagram IPA.
- **Presisi keyword MTK di-tuning** (audit sampel via `node scripts/audit-matches.mjs --all <id>`). FP yang dibuang: `garis-bilangan` menangkap aritmetika negatif (kini 2 soal, keduanya garis bilangan asli); `pola-bilangan` menangkap soal mean (via `selisih tetap`); `diagram-batang` menangkap persen/modul (hapus `banyak siswa`,`nilai ulangan`,`frekuensi`); `bangun-ruang-gabungan` menangkap gabungan **2D** (kini hanya frasa `bangun ruang gabungan`); `kecepatan-jarak-waktu` menangkap work-rate/debit & selisih waktu (hapus `kecepatan` telanjang, `jarak yang ditempuh`, `lama perjalanan`); `debit` menangkap volume-cair & pecahan (kini 64 soal debit asli); `diagram-lingkaran` menangkap konversi pecahan→persen (hapus `derajat`,`dalam persen`); `timbangan-aljabar` menangkap KPK/FPB bervariabel (hapus `variabel`). `mean-median-modus` dapat `frekuensi tertinggi` (modus). Sisa borderline: ~5 soal *konversi kecepatan* tetap ke `kecepatan-jarak-waktu` (masih konteks kecepatan, bukan sains salah).
- **Coverage `--all` = 4721/10435 (45.2%)**. Per bab MTK: mtk-01 26.5% · mtk-02 12.8% · mtk-03 81.8% · mtk-04 85.4% · mtk-05 57.6% · mtk-06 64.8% · mtk-07 68.6% · mtk-08 70.6%. Diagram MTK teratas: pohon-faktor 806, bangun-datar 358, bangun-ruang 381, diskon-ppn 314, timbangan-aljabar 230, pola-bilangan 200, peluang-dadu 179, kecepatan-jarak-waktu 176, lingkaran-unsur 96, mean-median-modus 81, tangga-satuan 73, debit 64, skala-peta 49, diagram-batang 41, diagram-lingkaran 39, bangun-ruang-gabungan 23, jaring-jaring 11, sudut 9, garis-bilangan 2.

### Yang belum selesai (lanjutkan dari sini)

**A. Pipeline gambar Vertex (PRIORITAS BARU — tunggu konfirmasi billing dulu)**
1. **USER: cek billing** di Google Cloud Billing → Reports untuk project `project-a087bc92-937b-4ba3-859`. Lanjut/batal batch berdasarkan hasil.
2. **CLAUDE (ber-vision): review 4 gambar pilot `paru-paru`** — bandingkan FLASH vs PRO di `C:\Users\nurun\AppData\Local\Temp\opencode\shots\PARU-*.png`; tentukan apakah FLASH cukup untuk non-anatomi & PRO perlu untuk anatomi. Tulis verdict ke `image-results/_review.json` (format contoh sudah ada di file itu), lalu `node image-prompts/_src/gen.mjs` untuk refresh `_STATUS.md`.
3. **Tentukan routing HYBRID** (daftar id PRO vs FLASH). Usul: PRO = semua `image-prompts/ipa/02-tubuh-manusia/*` **dan** tiap objek yang punya slot `-penampang*`; sisanya FLASH. Jalankan **satu bab dulu** (`ipa-02`, 55 objek) end-to-end (gen → review → integrasi), baru perbesar. Perintah: `node image-prompts/_src/gemini-gen.mjs --vertex --model <flash|pro> <ids…>`; `--hemat` = 1 ilustrasi + penampang/objek (~510 gambar IPA total); `--biaya` = total biaya dari `_usage.jsonl`.
4. **Integrasi ke app (belum ada kode sama sekali):** `grep` di `src/` tak menemukan referensi `image-results`. Perlu: (a) ekspos gambar lolos ke app (copy ke `public/` lewat skrip, atau `import.meta.glob` Vite), (b) ubah `QuestionFigure`/`matchDiagram` untuk IPA agar render `<img>` hasil map objek→slot, (c) biarkan SVG untuk MTK.

**B. Pekerjaan SVG/matcher (MTK aktif; IPA diarsip selama SVG diganti Vertex)**
1. **Bug produk MTK (SELESAI 2026-10-03):** matcher dipanggil untuk semua mapel tanpa gate subject → paket MTK memunculkan diagram sains IPA yang salah. Kini `matchDiagram(question, packageSubject)` + `subjectOf()`; diagram tanpa `subject` = IPA default; paket MTK hanya cocok diagram `subject: 'mtk'`. Wiring di `PracticeArea.jsx` (~107 + 2 call site) & `audit-matches.mjs`.
2. **Audit presisi matcher — selesai** untuk 34 diagram IPA (Stream A) **dan 19 diagram MTK** (2026-10-03); hanya ~3 (IPA) + ~5 (MTK konversi-kecepatan) borderline tak berbahaya. Script `node scripts/audit-matches.mjs <diagram-id>` (`--all` untuk semua subject; lihat sampel soal).
3. **Audit browser** `node scripts/audit-diagrams.mjs <paket> ...` (butuh dev server `:5173`). Catatan: `node scripts/audit-render.mjs` sempat memunculkan peringatan React 19 `<animateMotion /> incorrect casing` dari `families/bumi.jsx:25,182` — cek animasi Bulan/Bumi tetap jalan.

### Cara melanjutkan di model lain (handoff)
1. Buka folder `C:\Products\osn-sd\osn-app` di tool apa pun (Claude Code, Cursor, Codex, dsb.).
2. Model akan otomatis membaca `AGENTS.md` (dan `..\CLAUDE.md`). Perintah cukup: **"Baca `osn-app/PROGRESS.md`, lalu lanjutkan dari bagian 'Yang belum selesai'."**
3. **Review/generate gambar Vertex → pakai model BER-VISION (Claude).** opencode/Codex tak bisa melihat gambar. Bridging: `node image-prompts/_src/gen.mjs` (refresh `_STATUS.md`) lalu "cek gambar" mengikuti `..\CLAUDE.md` §Reviewing images → tulis verdict ke `image-results/_review.json`.
4. Prasyarat: `npm install`; `npm run dev` (audit Playwright butuh dev server `http://localhost:5173`). Generate gambar: `node image-prompts/_src/gemini-gen.mjs --vertex <ids…>` (akun/project Vertex di atas).
5. Jangan ubah `recordings-final/` (201 video final sudah tervalidasi). Jangan commit tanpa diminta.

**Prompt siap tempel ke Claude (bridging gambar, model ber-vision):**
```
Saya lanjutkan OSN-SD app di C:\Products\osn-sd\osn-app. Baca PROGRESS.md (seksi PIVOT) + ..\CLAUDE.md.
Tugas: (1) review 4 gambar pilot paru-paru di C:\Users\nurun\AppData\Local\Temp\opencode\shots\PARU-*.png (FLASH vs PRO), tulis verdict ke image-results/_review.json; (2) setelah billing Vertex dikonfirmasi, generate bab ipa-02 dengan routing HYBRID — PRO (gemini-3-pro-image) untuk anatomi/penampang, FLASH (gemini-2.5-flash-image) sisanya — via `node image-prompts/_src/gemini-gen.mjs --vertex --model <model> <ids...>`; (3) review hasil & refresh _STATUS.md via node image-prompts/_src/gen.mjs.
```

### Next steps (prioritas)
1. **USER** konfirmasi billing Vertex untuk project `project-a087bc92-937b-4ba3-859`.
2. **CLAUDE (ber-vision)** review 4 gambar pilot `paru-paru` (FLASH vs PRO) → verdict di `image-results/_review.json`; refresh `_STATUS.md` lewat `node image-prompts/_src/gen.mjs`.
3. Setelah billing OK: generate **bab `ipa-02` (55 objek)** routing HYBRID (PRO anatomi/penampang, FLASH sisanya) `--hemat` → review → integrasi app; baru perbesar ke seluruh IPA.
4. (Opsional) Review visual 19 diagram MTK di browser (`node scripts/audit-diagrams.mjs <paket-mtk>` + screenshot) oleh manusia/ber-vision.
5. (Arsip) Audit browser + review visual SVG IPA sisa; rekam video IPA **ditunda** sampai ilustrasi IPA beres.

---

## Status singkat (per Round 12 — arsip)

| Aspek | Status | Catatan |
|---|---|---|
| Konten teori + soal | **256/256 file masuk** | Semua `output/*.md` + `output/sub-bab/*.md` terkonversi |
| Total soal | **25,667** | Hasil aktual hitung (218→256 file, +3,920 soal sejak round 10) |
| Total section teori | 2,160 | Hasil aktual hitung |
| Coverage | 100% file, 0 error | Per `node scripts/validate-data.mjs` |
| Tier preference (Setting) | ✅ End-to-end | `osn-settings.tierPreference` → useSubBabData → Practice & Tryout |
| Bundle JS gzip | **~115 KB** | Stabil, tidak menyimpan paket soal di-bundle |
| Data folder (lazy-loaded) | 18 MB | `public/data/*.json`, dilayani Vite + browser cache |
| Build | ✅ Pass | `npm run build` clean (1 warning canvas-confetti, kosmetik) |
| Dev | http://localhost:5173/ | `npm run dev` |
| Video production | 🔄 Batch jalan | `record-videos.mjs` (Playwright, 1920×1080) → `recordings/*.webm`; resume 43 paket MTK 05d→08k + re-record 117 v1 (rantai `scripts/batch-rerecord.ps1`) |
| Visual test browser | ⚠️ Belum di-pass | Banyak komponen ditambah otomatis tanpa di-cek di mata manusia; frame audit tersimpan di `visual-pass/` |
| PWA | Manifest + SW ready | Aktif hanya di production build |

### Validator (`node scripts/validate-data.mjs`)
- **0 errors** (semua JSON valid, semua soal punya question text & options & answerKey)
- **121 files dengan minor warning**: ada beberapa soal yang `analysis[answerKey]` kosong (parser tidak nangkap analisis untuk kunci jawaban; cosmetic — answerKey tetap benar, analysis option lain biasanya tetap ada)
- **1 file lebih sedikit dari 50 soal**: `ipa-04-cahaya-bunyi-panas-sulit` punya 45 soal (memang segitu di source, bukan bug)

---

## Cara melanjutkan di chat baru

Drop 4 baris ini di chat baru untuk konteks ringkas:

```
Saya melanjutkan OSN-SD app di c:\Prospects\osn-sd\osn-app.
Stack: Vite + React 19 + Tailwind v4 + lucide-react. UI Bahasa Indonesia.
Konten: 216 paket soal (~21,600 soal) di public/data/, manifest-driven.
Baca PROGRESS.md untuk status lengkap, lalu lanjut dari "Next steps" di akhir dokumen.
```

Lalu paste tujuan baru. Claude akan baca PROGRESS.md dan menyambung.

---

## Arsitektur data (paling penting buat onboarding)

### Sumber kebenaran
- `c:\Prospects\osn-sd\output\*.md` — paket level chapter & komprehensif (96 file, 6 tier per chapter)
- `c:\Prospects\osn-sd\output\sub-bab\*.md` — paket level sub-bab (120 file, sebagian besar `campur`)
- `c:\Prospects\osn-sd\output\archive-v1\` — versi lama, **diskip** oleh parser

### Pipeline konversi
```
output/*.md  →  node scripts/build-data.mjs  →  osn-app/public/data/{id}.json
                                              +  osn-app/public/data/_manifest.json
```

Run kapan saja:
```bash
cd c:\Prospects\osn-sd\osn-app
node scripts/build-data.mjs
```

### Parser ([scripts/build-data.mjs](scripts/build-data.mjs))
Mengenali **4 format markdown** + banyak varian:

| Format | Marker khas | Contoh file |
|---|---|---|
| **A** (chapter, multi-line) | `### Soal N · subTopic · Level` + `**(1) Soal:** \n Text \n **(2) Pilihan Jawaban:** \n A. \n B. ...` | `osn-sd-ipa-01-makhluk-hidup-campur.md` |
| **A-inline** (chapter, compact) | `**(1) Soal:** Text inline` + `**(2) Pilihan Jawaban:** A. x B. y C. z D. w` (semua di satu baris) | `osn-sd-ipa-komprehensif-sulit.md` (soal 3+) |
| **A-short** (no parenthesis) | `**Soal:** Text` + `**Pilihan:**` + `**Jawaban:** **B**` | `osn-sd-ipa-01-makhluk-hidup-sedang-sulit.md` |
| **C** (compact) | `## SOAL ...` atau `## BAGIAN ...` + `**N.**` + `**Kunci: X**` + `**Pembahasan:**` | `osn-sd-mtk-02f-operasi-desimal-campur.md` |
| **C-bare** | `A. text` tanpa `- ` prefix + verdict `**BENAR**/**SALAH**` (caps OK) | `osn-sd-mtk-03a-jenis-bangun-datar-campur.md` |
| **C-multi-on-line** | `A. x   B. y   C. z   D. w` (4 opsi 1 baris) | `osn-sd-mtk-04i-lp-prisma-limas-campur.md` |

Parser tahan terhadap:
- CRLF (`\r\n`) line endings dinormalisasi
- Separator header soal: `· • ・ . | - – —`
- Soal header dengan 4 segment (mis. `### Soal 1 · IPA-01 · subTopic · Level`) — parser memilih subTopic & level secara graceful
- Verdict caps/lowercase: `Benar/Salah`, `BENAR/SALAH`, `benar/salah`
- Options dengan atau tanpa leading `- ` prefix
- `**(1)`, `**(2)`, `**(3)`, `**(4)` prefix opsional di marker Soal/Pilihan/Jawaban/Pembahasan
- Analysis bullet bisa top-level (no indent) atau nested di bawah "Analisis tiap opsi:"
- `**Jawaban:** **B**` (letter only) atau `**(3) Jawaban:** **C · text**` (letter+text)
- Inline Soal text: `**Soal:** Text on same line`
- Inline options: `**(2) Pilihan Jawaban:** A. x B. y C. z D. w`

### JSON shape per paket
```json
{
  "id": "ipa-04b-cermin-campur",
  "type": "subbab",                // "subbab" | "chapter" | "subject" | "universal"
  "subject": "ipa",                // "ipa" | "mtk" | "all"
  "chapter": "ipa-04",             // null untuk komprehensif universal
  "subBab": "ipa-04b",             // null jika bukan sub-bab
  "slug": "cermin",
  "tier": "campur",                // "campur" | "mudah" | "sedang" | "sulit" | "mudah-sedang" | "sedang-sulit"
  "title": "OSN SD — IPA — Sub-Bab 04b: Cermin (...)",
  "theory": [{ "title": "A. ...", "content": "markdown..." }],
  "questions": [{
    "number": 1, "subTopic": "...", "level": "Kab" | "Prov" | "Nas",
    "question": "...",
    "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
    "answerKey": "C",
    "concept": "...",
    "analysis": { "A": "...", "B": "...", "C": "...", "D": "..." },
    "steps": ["..."],
    "tips": "..."
  }]
}
```

### Manifest shape
`public/data/_manifest.json`:
```json
{
  "version": 1,
  "buildTime": "ISO date",
  "items": [
    { "id": "ipa-04b-cermin-campur", "type": "subbab", "subject": "ipa",
      "chapter": "ipa-04", "subBab": "ipa-04b", "slug": "cermin", "tier": "campur",
      "title": "...", "questionCount": 100, "theorySectionCount": 6,
      "file": "ipa-04b-cermin-campur.json" }
  ],
  "errors": []
}
```

App di-runtime memakai manifest untuk:
- Bangun roadmap (Dashboard) — semua sub-bab + chapter yang tersedia
- Cross-subBab Tryout sampling
- Lazy-fetch paket saat user pilih sub-bab

---

## Stack komponen yang sudah masuk app

### Core (sebelum round 1)
- `App.jsx` — root, tabs (dashboard/practice/tryout/analytics), state global
- `Dashboard.jsx` — roadmap + welcome card + medali
- `PracticeArea.jsx` — soal viewer + Video Producer Studio + Clean Mode rekam
- `TryoutArea.jsx` — simulasi 10 soal, timer 10 menit, medal logic
- `Analytics.jsx` — skill mastery, parent/teacher tabs, recap

### Round 1 (persistence + theory + markdown)
- `hooks/usePersistedState.js` — useState + localStorage wrapper
- `utils/streak.js` — daily streak (todayKey + tickStreak)
- `utils/markdown.jsx` — proper renderer (headings, tables, lists, bold/italic/code/HR)

### Round 2 (mobile + filter + reset)
- Mobile bottom nav di App.jsx
- Filter chips di Practice (Semua / Belum Dijawab / Salah)
- Reset progres affordance di Analytics

### Round 3-5 (polish)
- Pomodoro position fix (z-index + bottom-20 mobile)
- QuickQuiz entry button di Dashboard welcome card
- i18n nav strings via `useT()`
- `fireMedalUnlock()` di Tryout (replace inline confetti)
- `<EmptyState variant="no-progress">` di Analytics
- `fireMilestone(25/50/75/100)` di Practice recordAnswer
- `fireLevelUp()` di App.handleAddXp (lewat kelipatan 250 XP)

### Round 6 (multi-content fundament)
- `scripts/build-data.mjs` — parser MD → JSON (3 format)
- `hooks/useSubBabData.js` — `useManifest()` + `useSubBabData(id, manifest)` + `buildRoadmap()` + `labelOf()`
- App.jsx pakai lazy-fetch berdasarkan manifest
- Dashboard pakai `buildRoadmap(manifest)` (bukan list hardcoded)
- Loading state untuk Practice ("Memuat materi…")

### Round 7 (UX leverage manifest)
- TryoutArea cross-subBab sampling — fetch 4 random sub-bab × campur paralel, sample 10 dari pool
- Dashboard search input — filter sub-bab by name/id

### Round 8 (100% coverage)
- CRLF normalization di parser
- Bare options + verdict variants (caps BENAR/SALAH)
- `## ` section heading di format C
- Hasil: 196 → 216/216 files (semua selalu)

### Round 9 (settings + unlock all)
- `components/SettingsPanel.jsx` — modal lengkap
- localStorage `osn-settings`:
  - `unlockAll: true` (default)
  - `videoProduction: { timerEnabled, autoPilot, layoutSplit, isMuted, volume, showIntro }` — **semua ON default per request user**
- Gear icon di App header (kiri LanguageToggle)
- Setting di-feed ke `PracticeArea` sebagai initial state Video Producer toggles
- Tombol "Buka Ulang Tur Onboarding" — hapus flag `osn-onboarding-done`
- Reset progress affordance dipindah/duplicate ke Settings

### Komponen lain dari 20-agent batch (round masuk tapi belum di-wire)
Hidup di codebase, siap dipakai:
- `components/SkeletonLoader.jsx` — placeholder loading state
- `utils/mathRender.jsx` — render `$...$` (frac/sqrt/exponent) tanpa KaTeX
- `features/bookmarks.jsx` — `useBookmarks()`, `<BookmarkButton>`, `<BookmarksPanel>`. **Bookmark button sudah dipasang di Practice header**, tapi `BookmarksPanel` di Analytics hanya menampilkan bookmark dari sub-bab yang sedang di-load — belum lintas sub-bab.

---

## Roadmap localStorage keys

| Key | Shape | Owner | Catatan |
|---|---|---|---|
| `osn-stats` | `{xp, streak, lastActiveDate, medals:{gold,silver,bronze}}` | App | XP, streak, medali |
| `osn-progress` | `{[subBabId]: {lastIndex, answered:{idx:'A'}, correct, completed}}` | App | Progress per sub-bab |
| `osn-settings` | `{unlockAll, videoProduction:{...}}` | App | Settings global |
| `osn-bookmarks` | `string[]` (`"subBabId:qIndex"`) | bookmarks feature | Star soal |
| `osn-activity` | `{[YYYY-MM-DD]: count}` | activityLog | Heatmap aktivitas |
| `osn-srs` | `{[key]: {ease, interval, dueAt, reps}}` | spacedRepetition | SM-2 review queue |
| `osn-onboarding-done` | `"true"` | OnboardingTour | First-visit flag |
| `osn-locale` | `"id" | "en"` | i18n | Language preference |
| `osn-pomodoro` | `{mode, timeLeft, isRunning, sessionCount, collapsed}` | PomodoroTimer | Timer state |
| `osn-daily-{YYYY-MM-DD}` | `{completed, correct, perItem}` | DailyChallenge | Tantangan harian |

`handleResetProgress()` di App.jsx menghapus `osn-stats` + `osn-progress` only. Settings tidak ikut di-reset.

---

## Cara build & run

```bash
cd c:\Prospects\osn-sd\osn-app
npm install                    # one-time
node scripts/build-data.mjs    # generate JSON dari output/*.md (jalankan setelah edit MD)
node scripts/validate-data.mjs # validasi shape semua paket JSON
npm run dev                    # localhost:5173
npm run build                  # production → dist/
```

### Workflow tambah/edit konten
1. Edit/tambah file `output/<…>.md` atau `output/sub-bab/<…>.md`
2. `node scripts/build-data.mjs` → regenerate semua `public/data/*.json`
3. `node scripts/validate-data.mjs` → cek tidak ada regression
4. `npm run build` → confirm build masih pass

Output Vite build:
- `dist/assets/index-*.js` ~115 KB gz
- `dist/assets/index-*.css` ~13 KB gz
- `dist/data/*.json` (lazy-loaded oleh app)

---

## Known issues / nice-to-haves

1. **Belum visual-test di browser pasca round 2+**. Banyak komponen ditumpuk di Dashboard + Analytics — kemungkinan layout sumpek di mobile. Perlu pass manual.
2. **`BookmarksPanel` tidak lintas sub-bab.** Hanya tampilkan bookmark dari sub-bab yang sedang di-load. Solusi: lazy-fetch tiap bookmarked sub-bab on demand.
3. **MathRender belum dipakai.** Konten matematika di output/ kebanyakan plain text (tidak pakai `$...$`). Bisa pasang `<MathText>` di markdown.jsx kalau konten future pakai LaTeX.
4. **SkeletonLoader belum dipakai.** Loading state di Practice hanya text "Memuat materi…". Bisa di-replace dengan skeleton card kalau mau.
5. **i18n migration completed.** Semua strings penting di Dashboard welcome card, Practice action buttons, Analytics tabs/roles, dan Tryout instructions sudah dimigrasikan menggunakan `t()`.
6. **OnboardingTour muncul untuk SEMUA user pertama kali**. Sudah ada tombol "Buka Ulang Tur" di Settings, tapi UX awalan mungkin agresif untuk user existing.
7. **Tryout cross-subBab fetch 4 file paralel** = 300KB+ network setiap kali user buka tab Tryout. Service Worker akan caching setelah PWA aktif (production only).
8. **Parser warning kosmetik:** canvas-confetti di-import dynamic di milestones.js tapi juga static di PracticeArea/QuickQuiz/bookmarks → tidak bisa di-chunk-split. Bisa diperbaiki dengan ubah milestones.js ke static import.

---

## Next steps (saran prioritas untuk chat lanjutan)

1. **Visual browser test** dari Dashboard → Practice → Tryout → Analytics, mobile + desktop. Capture screenshots, identifikasi layout glitches.
2. **Fix BookmarksPanel cross-subBab** — refactor jadi fetch-on-demand.
3. **Kosmetik UI cleanup di Dashboard** — banyak card (DailyChallenge + Welcome + Stats + Achievements row + Roadmap × 2 + ActivityHeatmap + QuickQuiz modal). Bisa di-collapse jadi tabs/accordion atau dipindah ke Analytics.
4. **Tier-aware selection di Practice** — Settings tambah preferensi tier (mudah/sedang/sulit) → manifest pickFile pilih sesuai.

---

## File map (paling penting)

```
osn-app/
├── PROGRESS.md                          ← dokumen ini
├── package.json
├── vite.config.js
├── index.html
├── scripts/
│   └── build-data.mjs                  ← parser MD → JSON
├── public/
│   ├── manifest.webmanifest            ← PWA
│   ├── sw.js                           ← service worker
│   ├── icon-192.svg / icon-512.svg
│   └── data/                           ← 216 paket + 1 manifest, lazy-loaded
│       ├── _manifest.json
│       └── {subBabId}-{slug}-{tier}.json × 216
└── src/
    ├── main.jsx                         ← entry, registerSW + I18nProvider
    ├── App.jsx                          ← root, manifest+selected lazy-fetch
    ├── index.css                        ← Tailwind v4 + design tokens
    ├── data/questions.json              ← legacy, tidak di-import lagi
    ├── i18n/index.jsx                   ← I18nProvider + useT() + LanguageToggle
    ├── pwa.js                           ← registerSW helper
    ├── hooks/
    │   ├── usePersistedState.js
    │   └── useSubBabData.js             ← useManifest + useSubBabData + buildRoadmap
    ├── utils/
    │   ├── markdown.jsx
    │   ├── streak.js
    │   ├── milestones.js
    │   ├── activityLog.js
    │   ├── spacedRepetition.js
    │   ├── mathRender.jsx               ← belum dipakai
    │   ├── exportProgress.js
    │   └── importProgress.js
    ├── features/
    │   └── bookmarks.jsx                ← useBookmarks + BookmarkButton + BookmarksPanel
    └── components/
        ├── Dashboard.jsx
        ├── PracticeArea.jsx
        ├── TryoutArea.jsx
        ├── Analytics.jsx
        ├── SettingsPanel.jsx            ← round 9
        ├── OnboardingTour.jsx
        ├── ShortcutHelp.jsx
        ├── SplashScreen.jsx
        ├── PomodoroTimer.jsx
        ├── DailyChallenge.jsx
        ├── ActivityHeatmap.jsx
        ├── LevelAccuracyChart.jsx
        ├── Achievements.jsx
        ├── ReviewQueueWidget.jsx
        ├── QuickQuiz.jsx
        ├── ShareResultCard.jsx
        ├── ExportProgressButton.jsx
        ├── ImportProgressButton.jsx
        ├── SkeletonLoader.jsx           ← belum dipakai
        └── EmptyState.jsx
```

---

## Riwayat round (untuk konteks)

| Round | Fokus | Hasil utama |
|---|---|---|
| 1 | Persistence + Theory + Markdown | localStorage utils, theory tab, real markdown renderer |
| 2 | Mobile + Filter + Reset | mobile bottom nav, filter chips di Practice, reset di Analytics |
| 3 | Mini polish | Pomodoro fix, QuickQuiz entry, i18n nav |
| 4 | Milestones helper + EmptyState | TryoutArea pakai fireMedalUnlock, EmptyState di Analytics |
| 5 | Level-up celebration | fireMilestone di Practice, fireLevelUp di App |
| 6 | **Multi-content fundament** | Parser MD → JSON, manifest-driven roadmap, lazy-fetch (190/196 berhasil) |
| 7 | UX manifest leverage | Cross-subBab Tryout, Dashboard search |
| 8 | **100% coverage** | CRLF + format variants → 216/216 file |
| 9 | **Settings + Unlock all** | SettingsPanel, default Video Production ON, gear icon |
| 10 | **Deep parser audit + validator** | `validate-data.mjs` baru; menemukan 4 critical bug (question/options kosong); 3 format varian baru di-handle (A-inline, A-short, C-multi-on-line); 218/218 file, 21,747 soal validated, 0 error |
| 11 | **Tier preference + auto-scale to 256 file** | User tambah 38 file MD baru → parser handle tanpa perubahan (256/256, 25,667 soal). `tierPreference` (Settings) di-wire end-to-end: `App.jsx → useSubBabData(preferredTier) → pickFile(preferredTier)` dan `TryoutArea` sampling pakai tier yang dipilih (fallback campur, lalu apa adanya). `pickFile()` fallback chain: exact tier → campur → sedang → mudah → sulit → any. |
| 11 | **Sticky Explanation + i18n useT() Complete** | sticky explanation title/subtitle in Video Producer Studio, full bilingual localizations for Dashboard, PracticeArea, and Analytics |
| 12 | **Video-mode re-design + batch record pipeline** | Split pembahasan 30:70 (grid-10: soal `col-span-3`, pembahasan `col-span-7`, clean + interactive). Compact split: font soal 16px, opsi/badge mini, nav ramping, `min-w-0` + `break-words` (no overflow). Font pembahasan clean-mode ×0.8 (45→36 / 27→21.6 / 4xl→28.8 / 2xl→19.2). Kartu soal tricentered (`justify-center`; `justify-[safe_center]` invalid → divet). Audit numerik Playwright: no-overflow & no text-clip di 1080p/720p. Pipeline: resume 43 paket tersisa + re-record seluruh 160 (v1 diarsip ke `recordings-v1-old/`) via `scripts/batch-rerecord.ps1`. |

### Round 12 detail
- **`src/components/PracticeArea.jsx`** — split layout diganti grid-cols-10 (soal 30% / pembahasan 70%) di clean & interactive; kelas compact kondisional `isSplitActive` (timer, badge, soal, opsi, nav); teks opsi `break-words`.
- **Aktif split**: soal `text-base`, opsi `text-base` + badge `8×8`, kartu `p-4`.
- **Pembahasan clean-mode**: judul 36px, label 21.6px, isi 28.8px, badge langkah 19.2px.
- **Verifikasi**: `docScroll == viewport` (1920 & 1280), rasio 576:1344 = 3:7, kartu soal centered (center 540).
- **Frame audit**: `visual-pass/` (fase tanya, split-top, split-scroll, soal-berikutnya; 1080p & 720p).

---

**Reminder**: setiap kali edit konten `output/`, jalankan `node scripts/build-data.mjs` untuk regenerate JSON. Lalu `npm run build` untuk verifikasi.
