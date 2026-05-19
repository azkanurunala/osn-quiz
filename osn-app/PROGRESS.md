# OSN-SD App — Progress Tracker

> Tujuan: catat status implementasi & cara melanjutkan di chat baru. **Update saat ada perubahan signifikan.**

Last updated: **2026-05-19** (Round 10 / Deep parser audit + 218/218 coverage, 21,747 soal validated).

---

## Status singkat

| Aspek | Status | Catatan |
|---|---|---|
| Konten teori + soal | **218/218 file masuk** | Semua `output/*.md` + `output/sub-bab/*.md` terkonversi |
| Total soal | **21,747** | Hasil aktual hitung |
| Total section teori | 1,782 | Hasil aktual hitung |
| Coverage | 100% file, 0 error | Per `node scripts/validate-data.mjs` |
| Bundle JS gzip | **~115 KB** | Stabil, tidak menyimpan paket soal di-bundle |
| Data folder (lazy-loaded) | 18 MB | `public/data/*.json`, dilayani Vite + browser cache |
| Build | ✅ Pass | `npm run build` clean (1 warning canvas-confetti, kosmetik) |
| Dev | http://localhost:5173/ | `npm run dev` |
| Visual test browser | ⚠️ Belum di-pass | Banyak komponen ditambah otomatis tanpa di-cek di mata manusia |
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
5. **i18n migration incomplete.** Hanya nav strings (Roadmap/Tryout/Analitik), tagline, dan streak chip yang pakai `t()`. Sisanya hardcoded Bahasa Indonesia.
6. **OnboardingTour muncul untuk SEMUA user pertama kali**. Sudah ada tombol "Buka Ulang Tur" di Settings, tapi UX awalan mungkin agresif untuk user existing.
7. **Tryout cross-subBab fetch 4 file paralel** = 300KB+ network setiap kali user buka tab Tryout. Service Worker akan caching setelah PWA aktif (production only).
8. **Parser warning kosmetik:** canvas-confetti di-import dynamic di milestones.js tapi juga static di PracticeArea/QuickQuiz/bookmarks → tidak bisa di-chunk-split. Bisa diperbaiki dengan ubah milestones.js ke static import.

---

## Next steps (saran prioritas untuk chat lanjutan)

1. **Visual browser test** dari Dashboard → Practice → Tryout → Analytics, mobile + desktop. Capture screenshots, identifikasi layout glitches.
2. **Fix BookmarksPanel cross-subBab** — refactor jadi fetch-on-demand.
3. **Migrate sisa hardcoded strings ke `useT()`** — Dashboard welcome card, Practice action buttons, Analytics tabs, Tryout instructions.
4. **Kosmetik UI cleanup di Dashboard** — banyak card (DailyChallenge + Welcome + Stats + Achievements row + Roadmap × 2 + ActivityHeatmap + QuickQuiz modal). Bisa di-collapse jadi tabs/accordion atau dipindah ke Analytics.
5. **Tier-aware selection di Practice** — Settings tambah preferensi tier (mudah/sedang/sulit) → manifest pickFile pilih sesuai.

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

---

**Reminder**: setiap kali edit konten `output/`, jalankan `node scripts/build-data.mjs` untuk regenerate JSON. Lalu `npm run build` untuk verifikasi.
