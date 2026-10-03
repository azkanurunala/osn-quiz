# AGENTS.md — OSN-SD App

Panduan untuk agent AI apa pun (Claude Code, Cursor, Codex, opencode, …) yang melanjutkan repo ini.

## Mulai dari sini
1. Baca **`PROGRESS.md`** — khususnya seksi **"HANDOFF — posisi pekerjaan saat ini"** di paling atas. Di situ ada status, yang belum selesai, dan next steps.
2. Baca juga `../CLAUDE.md` (aturan repo induk: skill OSN, image-prompts, konvensi output).

## Ringkas proyek
Vite + React 19 + Tailwind v4 + `lucide-react`. UI Bahasa Indonesia. Aplikasi latihan OSN/KSN SD: paket soal + teori dimuat lazy dari `public/data/*.json` via `_manifest.json`. Ada pipeline rekam video (Playwright, 1920×1080) + ilustrasi SVG per soal. **PIVOT (2026-10-03):** ilustrasi SVG untuk **IPA** akan diganti gambar asli hasil generate **Vertex AI** (`image-prompts/` → `image-results/`); SVG tetap untuk MTK.

## Perintah penting
```bash
npm install
npm run dev                       # http://localhost:5173 (audit & rekam butuh ini)
npm run build                     # verifikasi build
npx eslint src/features/diagrams src/components/PracticeArea.jsx

node scripts/validate-data.mjs    # validasi shape semua paket JSON
node scripts/audit-render.mjs     # render 53 diagram (2 fase) tanpa browser — cek throw/NaN
node scripts/audit-matches.mjs [--all] [id...]   # coverage + sampel match per diagram (--all = IPA+MTK)
node scripts/audit-diagrams.mjs <paket...>   # audit figure/animasi di browser (dev server harus jalan)
node scripts/record-videos.mjs --only <id> --tier campur   # rekam video

node image-prompts/_src/gemini-gen.mjs --vertex --model gemini-3-pro-image <ids...>  # generate gambar IPA (Vertex akun osn-sd)
node image-prompts/_src/gen.mjs    # refresh image-results/_STATUS.md
node image-prompts/_src/gemini-gen.mjs --biaya   # total biaya dari _usage.jsonl
```

## Kondisi saat ini (2026-10-03)
- **PIVOT:** SVG IPA → gambar asli Vertex AI. Pipeline: 262 objek IPA (1776 slot, 33 terisi; MTK 184 slot). Pilot `paru-paru` FLASH vs PRO selesai (~$0.76). Model **HYBRID** (PRO anatomi/penampang, FLASH sisanya). **Blokir: user cek billing Vertex** sebelum batch besar. Detail + bridging: PROGRESS.md seksi PIVOT.
- **53 diagram SVG** di `src/features/diagrams/` — **34 IPA** (families: tubuh, fisika, bumi, sains, mekanika, listrik, ekologi; akan diganti Vertex) + **19 MTK** (families: bilangan, geometri-datar, geometri-ruang, pengukuran, statistika, aljabar). Entri MTK ditandai `subject: 'mtk'` di `diagram-data.js`; tanpa `subject` = IPA default. Matcher di `matchDiagram.js`.
- Audit presisi matcher: `node scripts/audit-matches.mjs <id...>` (sampel soal per diagram) — **selesai untuk 34 IPA + 19 MTK**. Render tanpa browser: `node scripts/audit-render.mjs` (106 render lolos).
- Coverage ilustrasi `--all` = **45.2%** (IPA 35 paket 46.1%; MTK per bab mtk-01 26.5% … mtk-04 85.4%; lihat PROGRESS.md).
- **Gate subject (SELESAI):** `matchDiagram(question, packageSubject)` + `subjectOf()`; diagram tanpa `subject` = IPA. Paket MTK hanya cocok diagram `subject: 'mtk'` — bug diagram IPA muncul di soal MTK sudah beres (wiring di `PracticeArea.jsx:107` + `PembahasanContent`, dan `audit-matches.mjs`).

## Aturan / larangan
- **Jangan ubah** `recordings-final/` (201 video final tervalidasi).
- **Jangan commit** kecuali diminta.
- Model tidak bisa melihat gambar: akurasi visual harus ditinjau **model ber-vision (Claude) atau manusia** (screenshot di `C:\Users\nurun\AppData\Local\Temp\opencode\shots\`). opencode/Codex tidak bisa review gambar.
- Generate gambar **wajib** `--vertex` (gcloud config `osn-sd` = `azukanurunara94@gmail.com`, project `project-a087bc92-937b-4ba3-859`). Jangan sentuh config gcloud `default` (klien lain). Gambar `acuan-*` hanya referensi — jangan dipakai langsung di app/video.
- Precision > coverage: diagram yang salah mengajarkan sains yang salah; lebih baik tidak ada gambar daripada gambar keliru.
- Skrip audit permanen ada di `scripts/audit-*.mjs`; jangan buat `scripts/_tmp-*.mjs` baru kecuali sementara — hapus setelah selesai.
