# Road to Chess Grandmaster — MASTER INDEX 198 File

> Roadmap lengkap paket pembinaan Catur "Road to Grandmaster" — **198 file × 100 soal PG = 19.800 soal**
>
> Setiap file: 100 soal Pilihan Ganda dengan pembahasan komprehensif (analisis A/B/C/D).
> Format: 100% PG · Bahasa Indonesia · Semua usia (anak–dewasa, pemula s/d kandidat GM) · Pembahasan analisis 4 opsi (kenapa langkah/jawaban kuat atau lemah).

---

## Pilar Materi Road to Grandmaster

Berdasarkan kurikulum standar pelatihan catur kompetitif (FIDE Trainer Syllabus, Silman's Reassess, Yusupov Build-Up Series), materi dipisah menjadi **4 pilar utama**:

1. **Taktik (TAK)** — pin, fork, skewer, discovered attack, double attack, sacrifice, kombinasi, mating pattern.
2. **Strategi & Posisional (STR)** — prinsip pembukaan, struktur bidak, petak lemah, file terbuka, aktivitas buah, evaluasi posisi & rencana.
3. **Endgame (END)** — mate dasar, K+P, rook endgame, minor piece, queen endgame, promosi bidak & passed pawn race.
4. **Pembukaan (BUK)** — repertoar 1.e4, 1.d4, 1.c4/1.Nf3, dan pertahanan klasik untuk hitam.

---

## Konvensi Tingkat Kesulitan (ELO Map)

| Kode | Nama | Komposisi |
|------|------|-----------|
| `campur` | Campuran | 50 Pemula + 30 Klub + 20 Master (default Road to GM) |
| `mudah` | Pemula | 100% ELO 800–1400 (rapid pattern recognition, 1–2 langkah) |
| `sedang` | Klub/Expert | 100% ELO 1400–1900 (kalkulasi 3–5 langkah, evaluasi posisi) |
| `sulit` | Master+ | 100% ELO 1900–2500+ (CM/FM/IM/GM-level, kombinasi dalam, studi klasik) |
| `mudah-sedang` | Pemula & Klub | 50 Pemula + 50 Klub |
| `sedang-sulit` | Klub & Master | 50 Klub + 50 Master |

> Pemetaan ELO bersifat kalibrasi pedagogis (bukan rating resmi). Soal Pemula = pola 1–2 langkah & material count. Klub = kalkulasi 3–5 langkah, evaluasi posisi, prinsip endgame. Master = kombinasi 6+ langkah, sacrifice posisional, studi endgame klasik, pertimbangan profilaksis.

---

## ♟ Format Soal Wajib — Diagram & Notasi (WAJIB untuk Semua Soal Chess GM)

Berbeda dari paket OSN/KSN tekstual, **setiap soal Road to Chess Grandmaster WAJIB mengandung diagram posisi**. Istilah baku: **"diagram"** (sesuai konvensi FIDE, Informant, ChessBase, dan literatur catur internasional). Istilah lain yang valid: "diagram catur", "diagram posisi". Hindari kata "gambar papan" — itu non-baku.

### Sumber kebenaran tunggal: FEN (Forsyth–Edwards Notation)

Setiap soal **harus** menyertakan minimum 4 field metadata berikut:

| Field | Wajib? | Contoh | Catatan |
|-------|--------|--------|---------|
| `diagram_id` | Wajib | `D-012` | Nomor diagram per file (D-001 s/d D-100) |
| `fen` | Wajib | `r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4` | Sumber kebenaran tunggal — engine pakai ini untuk render |
| `giliran` | Wajib | `Putih` atau `Hitam` | Redundan dgn FEN tapi membantu pembaca pemula |
| `konteks_pgn` | Opsional | `1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6` | Daftar langkah pembuka jika posisi datang dari opening klasik / game master |

### Notasi langkah dalam soal & pembahasan

- **Wajib SAN (Standard Algebraic Notation)** — gunakan `Nxe5`, `Qh5+`, `O-O`, `O-O-O`, `e8=Q`, `exd5 e.p.` — bukan koordinat lama (`e2-e4`) dan bukan deskriptif (`P-K4`).
- **Notasi figurine boleh** untuk file `.html` (♘×e5, ♕h5+), tapi versi `.md` tetap pakai huruf SAN (N, B, R, Q, K) supaya plain-text-friendly.
- Setiap opsi A/B/C/D = 1 langkah SAN (atau 1 urutan langkah jika kombinasi).
- Pembahasan menjelaskan tiap opsi dengan SAN + alasan posisional/taktis.

### Pipeline render: FEN → Diagram (Hybrid 2-Track, WAJIB)

Paket Road to Chess GM punya dua format output (sama seperti OSN SMP yang punya `.md` & `.html`). Tiap format pakai pipeline render yang berbeda — **FEN string tetap satu-satunya sumber kebenaran yang ditulis manual** saat generate soal. Gambar/diagram dihasilkan otomatis dari FEN.

#### Track A · Versi `.md` → embed Lichess Board Image API

Untuk file markdown statis (mau dibuka di GitHub, VS Code, Obsidian, converter md manapun). **Cara render = embed `<img>`/markdown image dari Lichess URL** yang deterministik dari FEN.

Template URL:
```
https://lichess1.org/export/fen.gif?fen=<URL-ENCODED-FEN>&color=<white|black>&theme=brown&piece=cburnett
```

Parameter:
- `fen` — FEN string (wajib URL-encode: spasi → `%20` atau `+`, `/` boleh dibiarkan, tapi aman jika di-encode jadi `%2F`)
- `color` — orientasi bawah papan: `white` (default, sudut h1 kanan-bawah) atau `black` (flip)
- `theme` — `brown` (default), `blue`, `green`, `wood`, `marble`, dst.
- `piece` — `cburnett` (default), `merida`, `alpha`, `chess7`, dst.

Contoh embed di markdown:
```markdown
![Diagram D-012](https://lichess1.org/export/fen.gif?fen=r1bqkb1r%2Fpppp1ppp%2F2n2n2%2F4p3%2F2B1P3%2F5N2%2FPPPP1PPP%2FRNBQK2R%20w%20KQkq%20-%204%204&color=white&theme=brown&piece=cburnett)
```

Pro: zero-setup, langsung kelihatan tanpa install apa-apa. Con: butuh internet di waktu baca (mitigasi: build step optional pre-fetch & cache ke `diagrams/D-NNN.gif` lokal).

#### Track B · Versi `.html` interaktif → chessboard.js + FEN data

Untuk file HTML interaktif (analog `template-html-interaktif.md` di OSN). Render real chess board: bidak bisa di-drag, animasi langkah jawaban bisa play setelah user klik opsi, ada arrow/highlight untuk pembahasan.

Setup minimal:
```html
<link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>

<div id="diagram-D-012" style="width: 400px"></div>
<script>
  Chessboard('diagram-D-012', {
    position: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R',
    orientation: 'white',
    showNotation: true
  });
</script>
```

`SOAL_DATA` array (analog OSN HTML template) berisi 100 obyek dengan field `{diagram_id, fen, giliran, konteks_pgn, opsi: ['Ng5', 'd3', 'O-O', 'Nc3'], jawaban: 'B', pembahasan: {...}}`.

Pro: UX premium, bidak nyata, animasi langkah jawaban, navigable. Con: butuh JS + asset (CDN sudah cukup, tidak perlu npm install).

#### Track C (opsional, offline only) · python-chess pre-render

Hanya kalau internet tidak boleh sama sekali. `python-chess` + `cairosvg`:
```python
import chess, chess.svg, cairosvg
board = chess.Board("r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4")
svg = chess.svg.board(board, size=400, orientation=chess.WHITE)
cairosvg.svg2png(bytestring=svg.encode(), write_to="diagrams/D-012.png")
```

Pre-render 100 diagram saat build → file `.md` reference asset lokal `![](./diagrams/D-012.png)`. Hanya pakai ini kalau Track A tidak feasible.

### Contoh blok soal lengkap (format markdown referensi)

```markdown
**Soal 12.** Italian Game, posisi setelah 3...Nf6. Putih giliran. Manakah langkah terbaik?

**Diagram D-012**

![D-012](https://lichess1.org/export/fen.gif?fen=r1bqkb1r%2Fpppp1ppp%2F2n2n2%2F4p3%2F2B1P3%2F5N2%2FPPPP1PPP%2FRNBQK2R%20w%20KQkq%20-%204%204&color=white&theme=brown&piece=cburnett)

- **FEN:** `r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
- **Giliran:** Putih
- **Konteks:** 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6

A. Ng5
B. d3
C. O-O
D. Nc3

**Pembahasan:**
- **A. Ng5** — Fried Liver Attack. Mengincar f7 tapi setelah 4...d5 5.exd5 Na5 Hitam aman. Kuat di blitz, tapi di klasik tidak optimal untuk tingkat Master.
- **B. d3** — Italian klasik (Giuoco Pianissimo). Sound, fleksibel, mempertahankan ketegangan.
- **C. O-O** — Castle dulu, prinsip raja aman. Bagus tapi mengundang ...Nxe4 jika d3 belum dimainkan (Hitam bisa tukar bidak tengah).
- **D. Nc3** — Four Knights setup. Solid tapi pasif untuk Putih, melepas inisiatif.

**Jawaban: B**. Di tingkat Master, d3 dipilih untuk struktur pawn yang fleksibel sebelum komit.
```

> **Catatan FEN→PGN:** PGN adalah list langkah seluruh game, bukan 1 posisi. Tidak ada konversi langsung "PGN → 1 PNG" — alurnya **PGN → ekstrak FEN pada ply N → render FEN ke PNG**. Untuk paket ini, semua soal dimulai dari FEN posisi target; PGN (kalau ada) hanya jadi konteks teks di field `konteks_pgn` untuk membantu pemain mengerti asal-usul posisi.

Aturan ini **berlaku untuk seluruh 198 file + 1.734 file sub-bab** di paket Road to Chess Grandmaster.

---

## Kategori File (33 kategori × 6 tingkat = 198 file)

### Kategori A · Komprehensif Lintas Pilar (6 file)
Distribusi 40 TAK + 35 STR/END (20 STR + 15 END) + 25 BUK campur lintas 29 bab.

- [ ] `chess-gm-komprehensif-campur.md` + `.html` *(DRAFT v1 — kompak, perlu rewrite ke standar studi kasus + validasi engine. File terisi tapi belum production-ready.)*
- [ ] `chess-gm-komprehensif-mudah.md`
- [ ] `chess-gm-komprehensif-sedang.md`
- [ ] `chess-gm-komprehensif-sulit.md`
- [ ] `chess-gm-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-komprehensif-sedang-sulit.md`

### Kategori B · Taktik Komprehensif (6 file)
100 soal TAK campur 10 bab. Distribusi proporsional ~10 soal per bab.

- [ ] `chess-gm-tak-komprehensif-campur.md`
- [ ] `chess-gm-tak-komprehensif-mudah.md`
- [ ] `chess-gm-tak-komprehensif-sedang.md`
- [ ] `chess-gm-tak-komprehensif-sulit.md`
- [ ] `chess-gm-tak-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-tak-komprehensif-sedang-sulit.md`

### Kategori C · Strategi + Endgame Komprehensif (6 file)
100 soal campur Strategi (~55 soal) + Endgame (~45 soal) lintas 15 bab.

- [ ] `chess-gm-stren-komprehensif-campur.md`
- [ ] `chess-gm-stren-komprehensif-mudah.md`
- [ ] `chess-gm-stren-komprehensif-sedang.md`
- [ ] `chess-gm-stren-komprehensif-sulit.md`
- [ ] `chess-gm-stren-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-stren-komprehensif-sedang-sulit.md`

### Kategori D · Strategi Komprehensif (6 file)
100 soal Strategi & Posisional campur 8 bab. Distribusi proporsional ~12–13 soal per bab.

- [ ] `chess-gm-str-komprehensif-campur.md`
- [ ] `chess-gm-str-komprehensif-mudah.md`
- [ ] `chess-gm-str-komprehensif-sedang.md`
- [ ] `chess-gm-str-komprehensif-sulit.md`
- [ ] `chess-gm-str-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-str-komprehensif-sedang-sulit.md`

### Kategori E · Endgame Komprehensif (6 file)
100 soal Endgame campur 7 bab. Distribusi proporsional ~14–15 soal per bab.

- [ ] `chess-gm-end-komprehensif-campur.md`
- [ ] `chess-gm-end-komprehensif-mudah.md`
- [ ] `chess-gm-end-komprehensif-sedang.md`
- [ ] `chess-gm-end-komprehensif-sulit.md`
- [ ] `chess-gm-end-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-end-komprehensif-sedang-sulit.md`

### Kategori F · Pembukaan Komprehensif (6 file)
100 soal Pembukaan campur 4 bab. Distribusi proporsional ~25 soal per bab.

- [ ] `chess-gm-buk-komprehensif-campur.md`
- [ ] `chess-gm-buk-komprehensif-mudah.md`
- [ ] `chess-gm-buk-komprehensif-sedang.md`
- [ ] `chess-gm-buk-komprehensif-sulit.md`
- [ ] `chess-gm-buk-komprehensif-mudah-sedang.md`
- [ ] `chess-gm-buk-komprehensif-sedang-sulit.md`

### Kategori G · Taktik Per-Materi (10 bab × 6 tingkat = 60 file)
Setiap bab TAK + Bagian I Materi (teori 6 sub-bagian A–F) + 100 soal.

**TAK-01 · Pengantar Taktik & Visualisasi Papan (Notasi, Counting, Blunder Check)**
- [ ] `chess-gm-tak-01-pengantar-visualisasi-campur.md`
- [ ] `chess-gm-tak-01-pengantar-visualisasi-mudah.md`
- [ ] `chess-gm-tak-01-pengantar-visualisasi-sedang.md`
- [ ] `chess-gm-tak-01-pengantar-visualisasi-sulit.md`
- [ ] `chess-gm-tak-01-pengantar-visualisasi-mudah-sedang.md`
- [ ] `chess-gm-tak-01-pengantar-visualisasi-sedang-sulit.md`

**TAK-02 · Pin (Pasak: Absolute, Relative, Pin Diagonal & File)**
- [ ] `chess-gm-tak-02-pin-campur.md`
- [ ] `chess-gm-tak-02-pin-mudah.md`
- [ ] `chess-gm-tak-02-pin-sedang.md`
- [ ] `chess-gm-tak-02-pin-sulit.md`
- [ ] `chess-gm-tak-02-pin-mudah-sedang.md`
- [ ] `chess-gm-tak-02-pin-sedang-sulit.md`

**TAK-03 · Fork (Garpu: Knight Fork, Family Fork, Royal Fork, Pawn/Bishop/Rook/Queen Fork)**
- [ ] `chess-gm-tak-03-fork-campur.md`
- [ ] `chess-gm-tak-03-fork-mudah.md`
- [ ] `chess-gm-tak-03-fork-sedang.md`
- [ ] `chess-gm-tak-03-fork-sulit.md`
- [ ] `chess-gm-tak-03-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03-fork-sedang-sulit.md`

**TAK-04 · Skewer (Tusuk Sate: Absolute, Relative, Diagonal/File/Rank)**
- [ ] `chess-gm-tak-04-skewer-campur.md`
- [ ] `chess-gm-tak-04-skewer-mudah.md`
- [ ] `chess-gm-tak-04-skewer-sedang.md`
- [ ] `chess-gm-tak-04-skewer-sulit.md`
- [ ] `chess-gm-tak-04-skewer-mudah-sedang.md`
- [ ] `chess-gm-tak-04-skewer-sedang-sulit.md`

**TAK-05 · Discovered Attack & Discovered Check (termasuk Double Check, Battery)**
- [ ] `chess-gm-tak-05-discovered-attack-campur.md`
- [ ] `chess-gm-tak-05-discovered-attack-mudah.md`
- [ ] `chess-gm-tak-05-discovered-attack-sedang.md`
- [ ] `chess-gm-tak-05-discovered-attack-sulit.md`
- [ ] `chess-gm-tak-05-discovered-attack-mudah-sedang.md`
- [ ] `chess-gm-tak-05-discovered-attack-sedang-sulit.md`

**TAK-06 · Double Attack, Double Threat & Zwischenzug**
- [ ] `chess-gm-tak-06-double-attack-campur.md`
- [ ] `chess-gm-tak-06-double-attack-mudah.md`
- [ ] `chess-gm-tak-06-double-attack-sedang.md`
- [ ] `chess-gm-tak-06-double-attack-sulit.md`
- [ ] `chess-gm-tak-06-double-attack-mudah-sedang.md`
- [ ] `chess-gm-tak-06-double-attack-sedang-sulit.md`

**TAK-07 · Removal of the Defender, Deflection, Decoy, Overloaded Piece, Interference**
- [ ] `chess-gm-tak-07-removal-defender-campur.md`
- [ ] `chess-gm-tak-07-removal-defender-mudah.md`
- [ ] `chess-gm-tak-07-removal-defender-sedang.md`
- [ ] `chess-gm-tak-07-removal-defender-sulit.md`
- [ ] `chess-gm-tak-07-removal-defender-mudah-sedang.md`
- [ ] `chess-gm-tak-07-removal-defender-sedang-sulit.md`

**TAK-08 · Pengorbanan (Sacrifice) Taktis (Pawn, Knight, Bishop, Rook, Queen, Greek Gift)**
- [ ] `chess-gm-tak-08-sacrifice-campur.md`
- [ ] `chess-gm-tak-08-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08-sacrifice-sedang-sulit.md`

**TAK-09 · Kombinasi Multi-Langkah & Mating Net (Forcing Moves, Quiet Moves, Mate-in-N)**
- [ ] `chess-gm-tak-09-kombinasi-mating-net-campur.md`
- [ ] `chess-gm-tak-09-kombinasi-mating-net-mudah.md`
- [ ] `chess-gm-tak-09-kombinasi-mating-net-sedang.md`
- [ ] `chess-gm-tak-09-kombinasi-mating-net-sulit.md`
- [ ] `chess-gm-tak-09-kombinasi-mating-net-mudah-sedang.md`
- [ ] `chess-gm-tak-09-kombinasi-mating-net-sedang-sulit.md`

**TAK-10 · Pola Mate Klasik (Back Rank, Smothered, Anastasia, Arabian, Boden, Légal, Damiano, Lolli)**
- [ ] `chess-gm-tak-10-pola-mate-klasik-campur.md`
- [ ] `chess-gm-tak-10-pola-mate-klasik-mudah.md`
- [ ] `chess-gm-tak-10-pola-mate-klasik-sedang.md`
- [ ] `chess-gm-tak-10-pola-mate-klasik-sulit.md`
- [ ] `chess-gm-tak-10-pola-mate-klasik-mudah-sedang.md`
- [ ] `chess-gm-tak-10-pola-mate-klasik-sedang-sulit.md`

### Kategori H · Strategi Per-Materi (8 bab × 6 tingkat = 48 file)
Setiap bab STR + Bagian I Materi (teori 6 sub-bagian A–F) + 100 soal.

**STR-01 · Prinsip Pembukaan & Pengendalian Pusat (Development, Tempo, Castling)**
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-campur.md`
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-mudah.md`
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-sedang.md`
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-sulit.md`
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-mudah-sedang.md`
- [ ] `chess-gm-str-01-prinsip-pembukaan-pusat-sedang-sulit.md`

**STR-02 · Struktur Bidak (Isolani, Doubled, Backward, Hanging Pawns, IQP)**
- [ ] `chess-gm-str-02-struktur-bidak-campur.md`
- [ ] `chess-gm-str-02-struktur-bidak-mudah.md`
- [ ] `chess-gm-str-02-struktur-bidak-sedang.md`
- [ ] `chess-gm-str-02-struktur-bidak-sulit.md`
- [ ] `chess-gm-str-02-struktur-bidak-mudah-sedang.md`
- [ ] `chess-gm-str-02-struktur-bidak-sedang-sulit.md`

**STR-03 · Petak Lemah, Outpost & Hole (Weak Squares, Color Complex)**
- [ ] `chess-gm-str-03-outpost-petak-lemah-campur.md`
- [ ] `chess-gm-str-03-outpost-petak-lemah-mudah.md`
- [ ] `chess-gm-str-03-outpost-petak-lemah-sedang.md`
- [ ] `chess-gm-str-03-outpost-petak-lemah-sulit.md`
- [ ] `chess-gm-str-03-outpost-petak-lemah-mudah-sedang.md`
- [ ] `chess-gm-str-03-outpost-petak-lemah-sedang-sulit.md`

**STR-04 · Open & Half-Open Files, Diagonal Panjang & Rook Activity**
- [ ] `chess-gm-str-04-file-diagonal-campur.md`
- [ ] `chess-gm-str-04-file-diagonal-mudah.md`
- [ ] `chess-gm-str-04-file-diagonal-sedang.md`
- [ ] `chess-gm-str-04-file-diagonal-sulit.md`
- [ ] `chess-gm-str-04-file-diagonal-mudah-sedang.md`
- [ ] `chess-gm-str-04-file-diagonal-sedang-sulit.md`

**STR-05 · Aktivitas Buah, Koordinasi & Tempo (Piece Activity, Initiative)**
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-campur.md`
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-mudah.md`
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-sedang.md`
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-sulit.md`
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-mudah-sedang.md`
- [ ] `chess-gm-str-05-aktivitas-buah-tempo-sedang-sulit.md`

**STR-06 · Bishop vs Knight, Bishop Pair & Good/Bad Bishop (Imbalances)**
- [ ] `chess-gm-str-06-bishop-knight-imbalance-campur.md`
- [ ] `chess-gm-str-06-bishop-knight-imbalance-mudah.md`
- [ ] `chess-gm-str-06-bishop-knight-imbalance-sedang.md`
- [ ] `chess-gm-str-06-bishop-knight-imbalance-sulit.md`
- [ ] `chess-gm-str-06-bishop-knight-imbalance-mudah-sedang.md`
- [ ] `chess-gm-str-06-bishop-knight-imbalance-sedang-sulit.md`

**STR-07 · King Safety & King Attack (Pawn Storm, Pieces vs Castle, Profilaksis)**
- [ ] `chess-gm-str-07-keamanan-serangan-raja-campur.md`
- [ ] `chess-gm-str-07-keamanan-serangan-raja-mudah.md`
- [ ] `chess-gm-str-07-keamanan-serangan-raja-sedang.md`
- [ ] `chess-gm-str-07-keamanan-serangan-raja-sulit.md`
- [ ] `chess-gm-str-07-keamanan-serangan-raja-mudah-sedang.md`
- [ ] `chess-gm-str-07-keamanan-serangan-raja-sedang-sulit.md`

**STR-08 · Evaluasi Posisi & Pembuatan Rencana (Silman's Imbalances, Candidate Moves)**
- [ ] `chess-gm-str-08-evaluasi-rencana-campur.md`
- [ ] `chess-gm-str-08-evaluasi-rencana-mudah.md`
- [ ] `chess-gm-str-08-evaluasi-rencana-sedang.md`
- [ ] `chess-gm-str-08-evaluasi-rencana-sulit.md`
- [ ] `chess-gm-str-08-evaluasi-rencana-mudah-sedang.md`
- [ ] `chess-gm-str-08-evaluasi-rencana-sedang-sulit.md`

### Kategori I · Endgame Per-Materi (7 bab × 6 tingkat = 42 file)
Setiap bab END + Bagian I Materi (teori 6 sub-bagian A–F) + 100 soal.

**END-01 · Mate Dasar (KQ-K, KR-K, KBB-K, KBN-K, K+2P-K)**
- [ ] `chess-gm-end-01-mate-dasar-campur.md`
- [ ] `chess-gm-end-01-mate-dasar-mudah.md`
- [ ] `chess-gm-end-01-mate-dasar-sedang.md`
- [ ] `chess-gm-end-01-mate-dasar-sulit.md`
- [ ] `chess-gm-end-01-mate-dasar-mudah-sedang.md`
- [ ] `chess-gm-end-01-mate-dasar-sedang-sulit.md`

**END-02 · King & Pawn Endgame (Opposition, Triangulation, Key Squares, Zugzwang)**
- [ ] `chess-gm-end-02-king-pawn-campur.md`
- [ ] `chess-gm-end-02-king-pawn-mudah.md`
- [ ] `chess-gm-end-02-king-pawn-sedang.md`
- [ ] `chess-gm-end-02-king-pawn-sulit.md`
- [ ] `chess-gm-end-02-king-pawn-mudah-sedang.md`
- [ ] `chess-gm-end-02-king-pawn-sedang-sulit.md`

**END-03 · Rook Endgame (Lucena, Philidor, Vancura, Rook+Pawn vs Rook)**
- [ ] `chess-gm-end-03-rook-endgame-campur.md`
- [ ] `chess-gm-end-03-rook-endgame-mudah.md`
- [ ] `chess-gm-end-03-rook-endgame-sedang.md`
- [ ] `chess-gm-end-03-rook-endgame-sulit.md`
- [ ] `chess-gm-end-03-rook-endgame-mudah-sedang.md`
- [ ] `chess-gm-end-03-rook-endgame-sedang-sulit.md`

**END-04 · Minor Piece Endgame (Bishop Endgame, Knight Endgame, B vs N)**
- [ ] `chess-gm-end-04-minor-piece-endgame-campur.md`
- [ ] `chess-gm-end-04-minor-piece-endgame-mudah.md`
- [ ] `chess-gm-end-04-minor-piece-endgame-sedang.md`
- [ ] `chess-gm-end-04-minor-piece-endgame-sulit.md`
- [ ] `chess-gm-end-04-minor-piece-endgame-mudah-sedang.md`
- [ ] `chess-gm-end-04-minor-piece-endgame-sedang-sulit.md`

**END-05 · Queen Endgame (Q vs P promo, Q vs R, Q+P vs Q, Q vs Q)**
- [ ] `chess-gm-end-05-queen-endgame-campur.md`
- [ ] `chess-gm-end-05-queen-endgame-mudah.md`
- [ ] `chess-gm-end-05-queen-endgame-sedang.md`
- [ ] `chess-gm-end-05-queen-endgame-sulit.md`
- [ ] `chess-gm-end-05-queen-endgame-mudah-sedang.md`
- [ ] `chess-gm-end-05-queen-endgame-sedang-sulit.md`

**END-06 · Endgame Buah Campuran (R+B vs R+N, Q vs 2R, Materi Tak Seimbang)**
- [ ] `chess-gm-end-06-buah-campuran-campur.md`
- [ ] `chess-gm-end-06-buah-campuran-mudah.md`
- [ ] `chess-gm-end-06-buah-campuran-sedang.md`
- [ ] `chess-gm-end-06-buah-campuran-sulit.md`
- [ ] `chess-gm-end-06-buah-campuran-mudah-sedang.md`
- [ ] `chess-gm-end-06-buah-campuran-sedang-sulit.md`

**END-07 · Promosi Bidak, Passed Pawn & Race Endgame (Outside Passer, Breakthrough)**
- [ ] `chess-gm-end-07-promosi-passed-pawn-campur.md`
- [ ] `chess-gm-end-07-promosi-passed-pawn-mudah.md`
- [ ] `chess-gm-end-07-promosi-passed-pawn-sedang.md`
- [ ] `chess-gm-end-07-promosi-passed-pawn-sulit.md`
- [ ] `chess-gm-end-07-promosi-passed-pawn-mudah-sedang.md`
- [ ] `chess-gm-end-07-promosi-passed-pawn-sedang-sulit.md`

### Kategori J · Pembukaan Per-Materi (4 bab × 6 tingkat = 24 file)
Setiap bab BUK + Bagian I Materi (teori 6 sub-bagian A–F: ide, varian utama, jebakan, transposisi, rencana middlegame, statistik DB) + 100 soal.

**BUK-01 · Pembukaan Bidak Raja 1.e4 (Italian, Spanish/Ruy Lopez, Scotch, King's Gambit, Vienna)**
- [ ] `chess-gm-buk-01-pembukaan-e4-campur.md`
- [ ] `chess-gm-buk-01-pembukaan-e4-mudah.md`
- [ ] `chess-gm-buk-01-pembukaan-e4-sedang.md`
- [ ] `chess-gm-buk-01-pembukaan-e4-sulit.md`
- [ ] `chess-gm-buk-01-pembukaan-e4-mudah-sedang.md`
- [ ] `chess-gm-buk-01-pembukaan-e4-sedang-sulit.md`

**BUK-02 · Pembukaan Bidak Menteri 1.d4 (Queen's Gambit, Slav, Nimzo/QID/KID, London System)**
- [ ] `chess-gm-buk-02-pembukaan-d4-campur.md`
- [ ] `chess-gm-buk-02-pembukaan-d4-mudah.md`
- [ ] `chess-gm-buk-02-pembukaan-d4-sedang.md`
- [ ] `chess-gm-buk-02-pembukaan-d4-sulit.md`
- [ ] `chess-gm-buk-02-pembukaan-d4-mudah-sedang.md`
- [ ] `chess-gm-buk-02-pembukaan-d4-sedang-sulit.md`

**BUK-03 · Pembukaan Fleksibel & Sayap (English 1.c4, Reti 1.Nf3, Larsen 1.b3, Bird 1.f4)**
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-campur.md`
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-mudah.md`
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-sedang.md`
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-sulit.md`
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-mudah-sedang.md`
- [ ] `chess-gm-buk-03-pembukaan-fleksibel-sayap-sedang-sulit.md`

**BUK-04 · Pertahanan Klasik untuk Hitam (Sicilian, French, Caro-Kann, Pirc/Modern, Scandinavian)**
- [ ] `chess-gm-buk-04-pertahanan-hitam-campur.md`
- [ ] `chess-gm-buk-04-pertahanan-hitam-mudah.md`
- [ ] `chess-gm-buk-04-pertahanan-hitam-sedang.md`
- [ ] `chess-gm-buk-04-pertahanan-hitam-sulit.md`
- [ ] `chess-gm-buk-04-pertahanan-hitam-mudah-sedang.md`
- [ ] `chess-gm-buk-04-pertahanan-hitam-sedang-sulit.md`

---

## Rekap Statistik

| Kategori | Bab | Tingkat | File | Soal |
|----------|-----|---------|------|------|
| A · Komprehensif Lintas Pilar | 29 (campur) | 6 | 6 | 600 |
| B · Taktik Komprehensif | 10 (campur TAK) | 6 | 6 | 600 |
| C · Strategi+Endgame Komprehensif | 15 (STR+END) | 6 | 6 | 600 |
| D · Strategi Komprehensif | 8 (campur STR) | 6 | 6 | 600 |
| E · Endgame Komprehensif | 7 (campur END) | 6 | 6 | 600 |
| F · Pembukaan Komprehensif | 4 (campur BUK) | 6 | 6 | 600 |
| G · Taktik Per-Materi | 10 bab | 6 | 60 | 6.000 |
| H · Strategi Per-Materi | 8 bab | 6 | 48 | 4.800 |
| I · Endgame Per-Materi | 7 bab | 6 | 42 | 4.200 |
| J · Pembukaan Per-Materi | 4 bab | 6 | 24 | 2.400 |
| **TOTAL** | | | **198** | **19.800** |

---

## Catatan Eksekusi

- Generation dilakukan **progresif 1 file per turn** (estimasi 60K tokens output per file).
- Status `[ ]` = belum di-generate, `[x]` = sudah selesai.
- Update centang di file ini setelah setiap file selesai.
- Urutan default: Kategori A → B → C → D → E → F → G → H → I → J (komprehensif dulu, per-materi belakangan).
- Untuk Road to GM, **Strategi + Endgame disajikan terintegrasi** pada Kategori C (analog dengan IPA terpadu pada SMP), karena evaluasi posisi sering memerlukan visualisasi posisi endgame.
- Tingkat kognitif: Pemula (C2–C3, pattern recognition 1–2 langkah), Klub (C3–C4, kalkulasi 3–5 langkah), Master (C4–C5, kombinasi dalam, sacrifice posisional, studi endgame, profilaksis).
- Setiap soal **wajib** menyertakan **diagram** posisi (lihat seksi "♟ Format Soal Wajib — Diagram & Notasi"): FEN sebagai sumber kebenaran + giliran (Putih/Hitam) + opsional konteks PGN. Render hybrid 2-track: **Track A (`.md`)** = embed Lichess Board Image API (URL deterministik dari FEN, zero setup), **Track B (`.html`)** = chessboard.js interaktif dengan FEN data inline. Track C (python-chess offline) opsional kalau internet tidak feasible.
- Setiap opsi A/B/C/D **wajib** ditulis dalam SAN (Standard Algebraic Notation: `Nxe5`, `Qh5+`, `O-O`, `e8=Q`) — bukan koordinat (`e2-e4`) dan bukan deskriptif lama (`P-K4`).
- Pembahasan menganalisis 4 opsi (A/B/C/D — alasan kuat/lemah pedagogis, bukan sekedar "salah").
- User boleh redirect urutan kapan saja.
