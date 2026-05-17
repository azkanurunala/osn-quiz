# Road to Chess Grandmaster — MASTER SUB-BAB INDEX

> Pemecahan lanjutan dari [_MASTER-INDEX.md](_MASTER-INDEX.md) — setiap bab dibedah jadi sub-bab,
> setiap sub-bab × 6 tingkat = 1 paket drill 100 soal terfokus pada satu sub-topik.
>
> **289 sub-bab × 6 tingkat = 1.734 file × 100 soal PG = 173.400 soal terfokus**
>
> Setiap file: 100 soal PG dengan analisis 4 opsi (sama standar mutu dengan MASTER-INDEX),
> tapi 100% materinya digali di satu sub-bab → drill mendalam per sub-topik (mis. *seluruh* 100 soal di file `…tak-03b-knight-fork-klasik-…` membahas Knight Fork klasik — bukan Fork umum).

---

## Konvensi Penamaan File

```
chess-gm-{pilar}-{kodeBab}{kodeSubbab}-{slug}-{tingkat}.md
```

- `pilar` = `tak` · `str` · `end` · `buk`
- `kodeBab` = `01`–`10` (TAK) · `01`–`08` (STR) · `01`–`07` (END) · `01`–`04` (BUK)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `l` (urutan sesuai taksonomi)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `chess-gm-tak-03b-knight-fork-klasik-sulit.md` = TAK Bab 03 sub-bab b (Knight Fork — Pola Klasik), 100 soal tingkat Master+ saja.

Untuk konvensi tingkat (komposisi soal Pemula/Klub/Master), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-bab, **seluruh 100 soal harus pada sub-topik tunggal** itu — bukan campur lintas sub-bab. Variasi diciptakan melalui ragam posisi (FEN unik), ragam buah yang terlibat, ragam pola pengenalan, dan ragam sumber (game master klasik, komposisi studi, posisi pelatihan) untuk sub-topik tersebut.

---

## ⛔ Aturan Anti-Duplikasi (WAJIB)

Karena seluruh 100 soal per file berada di satu sub-topik yang sama, **risiko duplikasi sangat tinggi** dan harus dicegah secara aktif.

1. **Tetap 100 soal per file** — tidak boleh dipotong jadi 50/75/dsb untuk "menghindari pengulangan". Kalau sub-topik kelihatan sempit, perluas dengan ragam posisi/buah/konteks — bukan dengan mengurangi jumlah.
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — bukan hanya posisi (FEN), tapi juga **kombinasi (FEN + pertanyaan + jawaban + 4 opsi)** harus berbeda. Reword saja ≠ soal baru. Posisi mirror/refleksi yang menghasilkan jawaban identik juga dihitung duplikat.
3. **Tidak boleh sama persis dengan soal di file sub-bab tingkat lain** (mis. soal nomor 12 di `…-mudah.md` tidak boleh sama persis dengan soal nomor 12 di `…-campur.md`).
4. **Diversifikasi via 5 sumbu** — kombinasikan agar 100 soal terasa beda:
   - **Posisi (FEN)**: gunakan posisi unik untuk tiap soal. Setiap posisi minimal berbeda 1 buah penting (bukan sekadar geser bidak h2-h3 tanpa pengaruh).
   - **Sumber posisi**: game master klasik (Morphy, Capablanca, Alekhine, Tal, Fischer, Karpov, Kasparov, Carlsen), komposisi studi (Troitsky, Réti, dst.), Lichess/Chess.com puzzles, posisi pelatihan asli.
   - **Buah yang terlibat**: variasikan buah penyerang dan target (mis. di Pin: kombinasi B-Q-K vs R-Q-K vs Q-R-K vs B-N-K).
   - **Fase permainan**: pembukaan (move 5–15), middlegame (move 15–35), endgame (move 35+) — tiap fase memberi tekstur soal berbeda.
   - **Sudut tanya**: "Langkah terbaik untuk Putih?", "Apa ancaman utama Hitam setelah 1…X?", "Berapa banyak material yang Putih menangkan?", "Mengapa langkah Y kalah/menang?", "Identifikasi tema taktis pada posisi ini", "Hitung mate dalam berapa langkah?".
5. **Tipe soal khas catur boleh diulang** — yang dilarang adalah **soal identik**.
6. **Verifikasi sebelum save** — scan ulang 100 soal: cek duplikasi FEN, cek duplikasi pola, cek sebaran fase permainan (jangan 100 soal semuanya middlegame).
7. **Lintas-tingkat per sub-bab** — 6 file tingkat membentuk **600 soal yang semuanya unik**. Saat generate file ke-2 dst, **baca file sub-bab tingkat sebelumnya dulu** untuk memastikan tidak ada soal yang persis sama (FEN bisa diperiksa hash-nya).

---

## A · Taktik Per Sub-Bab (102 sub-bab × 6 = 612 file)

Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik tersebut menurut bobot kompetitif — bukan jumlah soal. **Setiap file sub-bab tetap 100 soal**, apa pun tag fokusnya.

### TAK-01 · Pengantar Taktik & Visualisasi Papan (11 sub-bab)

**TAK-01a · Notasi Aljabar (Algebraic Notation: SAN, LAN, FEN)** (fokus Pemula)
- [ ] `chess-gm-tak-01a-notasi-aljabar-campur.md`
- [ ] `chess-gm-tak-01a-notasi-aljabar-mudah.md`
- [ ] `chess-gm-tak-01a-notasi-aljabar-sedang.md`
- [ ] `chess-gm-tak-01a-notasi-aljabar-sulit.md`
- [ ] `chess-gm-tak-01a-notasi-aljabar-mudah-sedang.md`
- [ ] `chess-gm-tak-01a-notasi-aljabar-sedang-sulit.md`

**TAK-01b · Koordinat Petak, Warna & Diagonal** (fokus Pemula)
- [ ] `chess-gm-tak-01b-koordinat-petak-campur.md`
- [ ] `chess-gm-tak-01b-koordinat-petak-mudah.md`
- [ ] `chess-gm-tak-01b-koordinat-petak-sedang.md`
- [ ] `chess-gm-tak-01b-koordinat-petak-sulit.md`
- [ ] `chess-gm-tak-01b-koordinat-petak-mudah-sedang.md`
- [ ] `chess-gm-tak-01b-koordinat-petak-sedang-sulit.md`

**TAK-01c · Visualisasi Tanpa Papan (Blindfold Basics)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-campur.md`
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-mudah.md`
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-sedang.md`
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-sulit.md`
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-mudah-sedang.md`
- [ ] `chess-gm-tak-01c-visualisasi-blindfold-sedang-sulit.md`

**TAK-01d · Hitungan Material Standar (1-3-3-5-9, Konversi Nilai)** (fokus Pemula)
- [ ] `chess-gm-tak-01d-hitung-material-campur.md`
- [ ] `chess-gm-tak-01d-hitung-material-mudah.md`
- [ ] `chess-gm-tak-01d-hitung-material-sedang.md`
- [ ] `chess-gm-tak-01d-hitung-material-sulit.md`
- [ ] `chess-gm-tak-01d-hitung-material-mudah-sedang.md`
- [ ] `chess-gm-tak-01d-hitung-material-sedang-sulit.md`

**TAK-01e · Mate, Check, Stalemate (Pengenalan & Pembedaan)** (fokus Pemula)
- [ ] `chess-gm-tak-01e-mate-check-stalemate-campur.md`
- [ ] `chess-gm-tak-01e-mate-check-stalemate-mudah.md`
- [ ] `chess-gm-tak-01e-mate-check-stalemate-sedang.md`
- [ ] `chess-gm-tak-01e-mate-check-stalemate-sulit.md`
- [ ] `chess-gm-tak-01e-mate-check-stalemate-mudah-sedang.md`
- [ ] `chess-gm-tak-01e-mate-check-stalemate-sedang-sulit.md`

**TAK-01f · Hanging Piece / Loose Piece (Buah Menganggur)** (fokus Pemula)
- [ ] `chess-gm-tak-01f-hanging-piece-campur.md`
- [ ] `chess-gm-tak-01f-hanging-piece-mudah.md`
- [ ] `chess-gm-tak-01f-hanging-piece-sedang.md`
- [ ] `chess-gm-tak-01f-hanging-piece-sulit.md`
- [ ] `chess-gm-tak-01f-hanging-piece-mudah-sedang.md`
- [ ] `chess-gm-tak-01f-hanging-piece-sedang-sulit.md`

**TAK-01g · Counting Attackers vs Defenders (SEE Dasar)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-01g-counting-attackers-campur.md`
- [ ] `chess-gm-tak-01g-counting-attackers-mudah.md`
- [ ] `chess-gm-tak-01g-counting-attackers-sedang.md`
- [ ] `chess-gm-tak-01g-counting-attackers-sulit.md`
- [ ] `chess-gm-tak-01g-counting-attackers-mudah-sedang.md`
- [ ] `chess-gm-tak-01g-counting-attackers-sedang-sulit.md`

**TAK-01h · Blunder Check (Pre-Move Safety Check)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-01h-blunder-check-campur.md`
- [ ] `chess-gm-tak-01h-blunder-check-mudah.md`
- [ ] `chess-gm-tak-01h-blunder-check-sedang.md`
- [ ] `chess-gm-tak-01h-blunder-check-sulit.md`
- [ ] `chess-gm-tak-01h-blunder-check-mudah-sedang.md`
- [ ] `chess-gm-tak-01h-blunder-check-sedang-sulit.md`

**TAK-01i · Pola Pikir CCT (Checks, Captures, Threats)** (fokus Klub)
- [ ] `chess-gm-tak-01i-pola-cct-campur.md`
- [ ] `chess-gm-tak-01i-pola-cct-mudah.md`
- [ ] `chess-gm-tak-01i-pola-cct-sedang.md`
- [ ] `chess-gm-tak-01i-pola-cct-sulit.md`
- [ ] `chess-gm-tak-01i-pola-cct-mudah-sedang.md`
- [ ] `chess-gm-tak-01i-pola-cct-sedang-sulit.md`

**TAK-01j · Visualisasi 2–3 Langkah ke Depan** (fokus Klub)
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-campur.md`
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-mudah.md`
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-sedang.md`
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-sulit.md`
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-mudah-sedang.md`
- [ ] `chess-gm-tak-01j-visualisasi-2-3-langkah-sedang-sulit.md`

**TAK-01k · Visualisasi Multi-Langkah (4+ ply)** (fokus Klub–Master)
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-campur.md`
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-mudah.md`
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-sedang.md`
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-sulit.md`
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-mudah-sedang.md`
- [ ] `chess-gm-tak-01k-visualisasi-multi-langkah-sedang-sulit.md`

### TAK-02 · Pin / Pasak (10 sub-bab)

**TAK-02a · Pengertian Pin (Absolute vs Relative)** (fokus Pemula)
- [ ] `chess-gm-tak-02a-pengertian-pin-campur.md`
- [ ] `chess-gm-tak-02a-pengertian-pin-mudah.md`
- [ ] `chess-gm-tak-02a-pengertian-pin-sedang.md`
- [ ] `chess-gm-tak-02a-pengertian-pin-sulit.md`
- [ ] `chess-gm-tak-02a-pengertian-pin-mudah-sedang.md`
- [ ] `chess-gm-tak-02a-pengertian-pin-sedang-sulit.md`

**TAK-02b · Pin oleh Bishop pada Diagonal** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-campur.md`
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-mudah.md`
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-sedang.md`
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-sulit.md`
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-mudah-sedang.md`
- [ ] `chess-gm-tak-02b-pin-bishop-diagonal-sedang-sulit.md`

**TAK-02c · Pin oleh Rook pada File** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-02c-pin-rook-file-campur.md`
- [ ] `chess-gm-tak-02c-pin-rook-file-mudah.md`
- [ ] `chess-gm-tak-02c-pin-rook-file-sedang.md`
- [ ] `chess-gm-tak-02c-pin-rook-file-sulit.md`
- [ ] `chess-gm-tak-02c-pin-rook-file-mudah-sedang.md`
- [ ] `chess-gm-tak-02c-pin-rook-file-sedang-sulit.md`

**TAK-02d · Pin oleh Rook pada Rank (Horizontal)** (fokus Klub)
- [ ] `chess-gm-tak-02d-pin-rook-rank-campur.md`
- [ ] `chess-gm-tak-02d-pin-rook-rank-mudah.md`
- [ ] `chess-gm-tak-02d-pin-rook-rank-sedang.md`
- [ ] `chess-gm-tak-02d-pin-rook-rank-sulit.md`
- [ ] `chess-gm-tak-02d-pin-rook-rank-mudah-sedang.md`
- [ ] `chess-gm-tak-02d-pin-rook-rank-sedang-sulit.md`

**TAK-02e · Pin oleh Queen (Diagonal, File, Rank)** (fokus Klub)
- [ ] `chess-gm-tak-02e-pin-queen-campur.md`
- [ ] `chess-gm-tak-02e-pin-queen-mudah.md`
- [ ] `chess-gm-tak-02e-pin-queen-sedang.md`
- [ ] `chess-gm-tak-02e-pin-queen-sulit.md`
- [ ] `chess-gm-tak-02e-pin-queen-mudah-sedang.md`
- [ ] `chess-gm-tak-02e-pin-queen-sedang-sulit.md`

**TAK-02f · Pin Mutlak ke Raja (Pinned Piece Cannot Move)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-campur.md`
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-mudah.md`
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-sedang.md`
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-sulit.md`
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-mudah-sedang.md`
- [ ] `chess-gm-tak-02f-pin-mutlak-raja-sedang-sulit.md`

**TAK-02g · Pin Relatif ke Buah Bernilai Tinggi** (fokus Klub)
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-campur.md`
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-mudah.md`
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-sedang.md`
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-sulit.md`
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-mudah-sedang.md`
- [ ] `chess-gm-tak-02g-pin-relatif-buah-mahal-sedang-sulit.md`

**TAK-02h · Memperkuat Tekanan pada Buah yang di-Pin (Piling On)** (fokus Klub–Master)
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-campur.md`
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-mudah.md`
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-sedang.md`
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-sulit.md`
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-mudah-sedang.md`
- [ ] `chess-gm-tak-02h-tekanan-pin-piling-sedang-sulit.md`

**TAK-02i · Mematahkan / Memutus Pin (Defending Against Pin)** (fokus Klub)
- [ ] `chess-gm-tak-02i-mematahkan-pin-campur.md`
- [ ] `chess-gm-tak-02i-mematahkan-pin-mudah.md`
- [ ] `chess-gm-tak-02i-mematahkan-pin-sedang.md`
- [ ] `chess-gm-tak-02i-mematahkan-pin-sulit.md`
- [ ] `chess-gm-tak-02i-mematahkan-pin-mudah-sedang.md`
- [ ] `chess-gm-tak-02i-mematahkan-pin-sedang-sulit.md`

**TAK-02j · Kombinasi Pin + Taktik Lain (Pin → Fork / Pin → Sacrifice)** (fokus Master)
- [ ] `chess-gm-tak-02j-pin-kombinasi-campur.md`
- [ ] `chess-gm-tak-02j-pin-kombinasi-mudah.md`
- [ ] `chess-gm-tak-02j-pin-kombinasi-sedang.md`
- [ ] `chess-gm-tak-02j-pin-kombinasi-sulit.md`
- [ ] `chess-gm-tak-02j-pin-kombinasi-mudah-sedang.md`
- [ ] `chess-gm-tak-02j-pin-kombinasi-sedang-sulit.md`

### TAK-03 · Fork / Garpu (10 sub-bab)

**TAK-03a · Pengertian Fork & Family/Royal Fork** (fokus Pemula)
- [ ] `chess-gm-tak-03a-pengertian-fork-campur.md`
- [ ] `chess-gm-tak-03a-pengertian-fork-mudah.md`
- [ ] `chess-gm-tak-03a-pengertian-fork-sedang.md`
- [ ] `chess-gm-tak-03a-pengertian-fork-sulit.md`
- [ ] `chess-gm-tak-03a-pengertian-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03a-pengertian-fork-sedang-sulit.md`

**TAK-03b · Knight Fork — Pola Klasik (Family Fork, Royal Fork)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-03b-knight-fork-klasik-campur.md`
- [ ] `chess-gm-tak-03b-knight-fork-klasik-mudah.md`
- [ ] `chess-gm-tak-03b-knight-fork-klasik-sedang.md`
- [ ] `chess-gm-tak-03b-knight-fork-klasik-sulit.md`
- [ ] `chess-gm-tak-03b-knight-fork-klasik-mudah-sedang.md`
- [ ] `chess-gm-tak-03b-knight-fork-klasik-sedang-sulit.md`

**TAK-03c · Knight Fork — Pola Smothered (Petak Sudut, f7/f2)** (fokus Klub)
- [ ] `chess-gm-tak-03c-knight-fork-smothered-campur.md`
- [ ] `chess-gm-tak-03c-knight-fork-smothered-mudah.md`
- [ ] `chess-gm-tak-03c-knight-fork-smothered-sedang.md`
- [ ] `chess-gm-tak-03c-knight-fork-smothered-sulit.md`
- [ ] `chess-gm-tak-03c-knight-fork-smothered-mudah-sedang.md`
- [ ] `chess-gm-tak-03c-knight-fork-smothered-sedang-sulit.md`

**TAK-03d · Pawn Fork (Garpu Bidak)** (fokus Pemula)
- [ ] `chess-gm-tak-03d-pawn-fork-campur.md`
- [ ] `chess-gm-tak-03d-pawn-fork-mudah.md`
- [ ] `chess-gm-tak-03d-pawn-fork-sedang.md`
- [ ] `chess-gm-tak-03d-pawn-fork-sulit.md`
- [ ] `chess-gm-tak-03d-pawn-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03d-pawn-fork-sedang-sulit.md`

**TAK-03e · Bishop Fork (Diagonal Ganda)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-03e-bishop-fork-campur.md`
- [ ] `chess-gm-tak-03e-bishop-fork-mudah.md`
- [ ] `chess-gm-tak-03e-bishop-fork-sedang.md`
- [ ] `chess-gm-tak-03e-bishop-fork-sulit.md`
- [ ] `chess-gm-tak-03e-bishop-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03e-bishop-fork-sedang-sulit.md`

**TAK-03f · Rook Fork (File/Rank Ganda)** (fokus Klub)
- [ ] `chess-gm-tak-03f-rook-fork-campur.md`
- [ ] `chess-gm-tak-03f-rook-fork-mudah.md`
- [ ] `chess-gm-tak-03f-rook-fork-sedang.md`
- [ ] `chess-gm-tak-03f-rook-fork-sulit.md`
- [ ] `chess-gm-tak-03f-rook-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03f-rook-fork-sedang-sulit.md`

**TAK-03g · Queen Fork (Serangan Banyak Arah)** (fokus Klub)
- [ ] `chess-gm-tak-03g-queen-fork-campur.md`
- [ ] `chess-gm-tak-03g-queen-fork-mudah.md`
- [ ] `chess-gm-tak-03g-queen-fork-sedang.md`
- [ ] `chess-gm-tak-03g-queen-fork-sulit.md`
- [ ] `chess-gm-tak-03g-queen-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03g-queen-fork-sedang-sulit.md`

**TAK-03h · King Fork (Endgame: Raja Menyerang 2 Buah)** (fokus Klub–Master)
- [ ] `chess-gm-tak-03h-king-fork-endgame-campur.md`
- [ ] `chess-gm-tak-03h-king-fork-endgame-mudah.md`
- [ ] `chess-gm-tak-03h-king-fork-endgame-sedang.md`
- [ ] `chess-gm-tak-03h-king-fork-endgame-sulit.md`
- [ ] `chess-gm-tak-03h-king-fork-endgame-mudah-sedang.md`
- [ ] `chess-gm-tak-03h-king-fork-endgame-sedang-sulit.md`

**TAK-03i · Setup Multi-Langkah untuk Menciptakan Fork (Forced Sequence)** (fokus Master)
- [ ] `chess-gm-tak-03i-setup-fork-multi-campur.md`
- [ ] `chess-gm-tak-03i-setup-fork-multi-mudah.md`
- [ ] `chess-gm-tak-03i-setup-fork-multi-sedang.md`
- [ ] `chess-gm-tak-03i-setup-fork-multi-sulit.md`
- [ ] `chess-gm-tak-03i-setup-fork-multi-mudah-sedang.md`
- [ ] `chess-gm-tak-03i-setup-fork-multi-sedang-sulit.md`

**TAK-03j · Pertahanan Terhadap Fork (Menghindari Hilangnya Material)** (fokus Klub)
- [ ] `chess-gm-tak-03j-pertahanan-fork-campur.md`
- [ ] `chess-gm-tak-03j-pertahanan-fork-mudah.md`
- [ ] `chess-gm-tak-03j-pertahanan-fork-sedang.md`
- [ ] `chess-gm-tak-03j-pertahanan-fork-sulit.md`
- [ ] `chess-gm-tak-03j-pertahanan-fork-mudah-sedang.md`
- [ ] `chess-gm-tak-03j-pertahanan-fork-sedang-sulit.md`

### TAK-04 · Skewer / Tusuk Sate (9 sub-bab)

**TAK-04a · Pengertian Skewer (Anti-Pin)** (fokus Pemula)
- [ ] `chess-gm-tak-04a-pengertian-skewer-campur.md`
- [ ] `chess-gm-tak-04a-pengertian-skewer-mudah.md`
- [ ] `chess-gm-tak-04a-pengertian-skewer-sedang.md`
- [ ] `chess-gm-tak-04a-pengertian-skewer-sulit.md`
- [ ] `chess-gm-tak-04a-pengertian-skewer-mudah-sedang.md`
- [ ] `chess-gm-tak-04a-pengertian-skewer-sedang-sulit.md`

**TAK-04b · Skewer Vertikal (Sepanjang File)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-04b-skewer-vertikal-campur.md`
- [ ] `chess-gm-tak-04b-skewer-vertikal-mudah.md`
- [ ] `chess-gm-tak-04b-skewer-vertikal-sedang.md`
- [ ] `chess-gm-tak-04b-skewer-vertikal-sulit.md`
- [ ] `chess-gm-tak-04b-skewer-vertikal-mudah-sedang.md`
- [ ] `chess-gm-tak-04b-skewer-vertikal-sedang-sulit.md`

**TAK-04c · Skewer Horizontal (Sepanjang Rank)** (fokus Klub)
- [ ] `chess-gm-tak-04c-skewer-horizontal-campur.md`
- [ ] `chess-gm-tak-04c-skewer-horizontal-mudah.md`
- [ ] `chess-gm-tak-04c-skewer-horizontal-sedang.md`
- [ ] `chess-gm-tak-04c-skewer-horizontal-sulit.md`
- [ ] `chess-gm-tak-04c-skewer-horizontal-mudah-sedang.md`
- [ ] `chess-gm-tak-04c-skewer-horizontal-sedang-sulit.md`

**TAK-04d · Skewer Diagonal (oleh Bishop / Queen)** (fokus Klub)
- [ ] `chess-gm-tak-04d-skewer-diagonal-campur.md`
- [ ] `chess-gm-tak-04d-skewer-diagonal-mudah.md`
- [ ] `chess-gm-tak-04d-skewer-diagonal-sedang.md`
- [ ] `chess-gm-tak-04d-skewer-diagonal-sulit.md`
- [ ] `chess-gm-tak-04d-skewer-diagonal-mudah-sedang.md`
- [ ] `chess-gm-tak-04d-skewer-diagonal-sedang-sulit.md`

**TAK-04e · Skewer Mutlak (vs Raja, Raja Wajib Pindah)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-04e-skewer-mutlak-campur.md`
- [ ] `chess-gm-tak-04e-skewer-mutlak-mudah.md`
- [ ] `chess-gm-tak-04e-skewer-mutlak-sedang.md`
- [ ] `chess-gm-tak-04e-skewer-mutlak-sulit.md`
- [ ] `chess-gm-tak-04e-skewer-mutlak-mudah-sedang.md`
- [ ] `chess-gm-tak-04e-skewer-mutlak-sedang-sulit.md`

**TAK-04f · Skewer Relatif (vs Buah Berharga)** (fokus Klub)
- [ ] `chess-gm-tak-04f-skewer-relatif-campur.md`
- [ ] `chess-gm-tak-04f-skewer-relatif-mudah.md`
- [ ] `chess-gm-tak-04f-skewer-relatif-sedang.md`
- [ ] `chess-gm-tak-04f-skewer-relatif-sulit.md`
- [ ] `chess-gm-tak-04f-skewer-relatif-mudah-sedang.md`
- [ ] `chess-gm-tak-04f-skewer-relatif-sedang-sulit.md`

**TAK-04g · Membedakan Pin vs Skewer (Pattern Recognition)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-04g-pin-vs-skewer-campur.md`
- [ ] `chess-gm-tak-04g-pin-vs-skewer-mudah.md`
- [ ] `chess-gm-tak-04g-pin-vs-skewer-sedang.md`
- [ ] `chess-gm-tak-04g-pin-vs-skewer-sulit.md`
- [ ] `chess-gm-tak-04g-pin-vs-skewer-mudah-sedang.md`
- [ ] `chess-gm-tak-04g-pin-vs-skewer-sedang-sulit.md`

**TAK-04h · Setup Skewer Lewat Pertukaran / Pemaksaan** (fokus Klub–Master)
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-campur.md`
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-mudah.md`
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-sedang.md`
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-sulit.md`
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-mudah-sedang.md`
- [ ] `chess-gm-tak-04h-setup-skewer-pertukaran-sedang-sulit.md`

**TAK-04i · Skewer dalam Rook Endgame** (fokus Master)
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-campur.md`
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-mudah.md`
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-sedang.md`
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-sulit.md`
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-mudah-sedang.md`
- [ ] `chess-gm-tak-04i-skewer-rook-endgame-sedang-sulit.md`

### TAK-05 · Discovered Attack & Discovered Check (10 sub-bab)

**TAK-05a · Pengertian Discovered Attack (Buah Penutup & Buah Penyerang)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-05a-pengertian-discovered-campur.md`
- [ ] `chess-gm-tak-05a-pengertian-discovered-mudah.md`
- [ ] `chess-gm-tak-05a-pengertian-discovered-sedang.md`
- [ ] `chess-gm-tak-05a-pengertian-discovered-sulit.md`
- [ ] `chess-gm-tak-05a-pengertian-discovered-mudah-sedang.md`
- [ ] `chess-gm-tak-05a-pengertian-discovered-sedang-sulit.md`

**TAK-05b · Discovered Check oleh Bishop** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-05b-disc-check-bishop-campur.md`
- [ ] `chess-gm-tak-05b-disc-check-bishop-mudah.md`
- [ ] `chess-gm-tak-05b-disc-check-bishop-sedang.md`
- [ ] `chess-gm-tak-05b-disc-check-bishop-sulit.md`
- [ ] `chess-gm-tak-05b-disc-check-bishop-mudah-sedang.md`
- [ ] `chess-gm-tak-05b-disc-check-bishop-sedang-sulit.md`

**TAK-05c · Discovered Check oleh Rook** (fokus Klub)
- [ ] `chess-gm-tak-05c-disc-check-rook-campur.md`
- [ ] `chess-gm-tak-05c-disc-check-rook-mudah.md`
- [ ] `chess-gm-tak-05c-disc-check-rook-sedang.md`
- [ ] `chess-gm-tak-05c-disc-check-rook-sulit.md`
- [ ] `chess-gm-tak-05c-disc-check-rook-mudah-sedang.md`
- [ ] `chess-gm-tak-05c-disc-check-rook-sedang-sulit.md`

**TAK-05d · Discovered Check oleh Queen (lewat Knight/Pawn/Bishop)** (fokus Klub)
- [ ] `chess-gm-tak-05d-disc-check-queen-campur.md`
- [ ] `chess-gm-tak-05d-disc-check-queen-mudah.md`
- [ ] `chess-gm-tak-05d-disc-check-queen-sedang.md`
- [ ] `chess-gm-tak-05d-disc-check-queen-sulit.md`
- [ ] `chess-gm-tak-05d-disc-check-queen-mudah-sedang.md`
- [ ] `chess-gm-tak-05d-disc-check-queen-sedang-sulit.md`

**TAK-05e · Double Check (Dua Skak Sekaligus — Raja Wajib Pindah)** (fokus Klub–Master)
- [ ] `chess-gm-tak-05e-double-check-campur.md`
- [ ] `chess-gm-tak-05e-double-check-mudah.md`
- [ ] `chess-gm-tak-05e-double-check-sedang.md`
- [ ] `chess-gm-tak-05e-double-check-sulit.md`
- [ ] `chess-gm-tak-05e-double-check-mudah-sedang.md`
- [ ] `chess-gm-tak-05e-double-check-sedang-sulit.md`

**TAK-05f · Discovered Attack pada Buah Berharga (Bukan Skak)** (fokus Klub)
- [ ] `chess-gm-tak-05f-disc-attack-material-campur.md`
- [ ] `chess-gm-tak-05f-disc-attack-material-mudah.md`
- [ ] `chess-gm-tak-05f-disc-attack-material-sedang.md`
- [ ] `chess-gm-tak-05f-disc-attack-material-sulit.md`
- [ ] `chess-gm-tak-05f-disc-attack-material-mudah-sedang.md`
- [ ] `chess-gm-tak-05f-disc-attack-material-sedang-sulit.md`

**TAK-05g · Pemilihan Petak Tujuan Buah Penutup (Maksimalisasi Ganda)** (fokus Master)
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-campur.md`
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-mudah.md`
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-sedang.md`
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-sulit.md`
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-mudah-sedang.md`
- [ ] `chess-gm-tak-05g-pemilihan-petak-penutup-sedang-sulit.md`

**TAK-05h · Setup Discovered Attack (Persiapan Multi-Langkah)** (fokus Master)
- [ ] `chess-gm-tak-05h-setup-discovered-multi-campur.md`
- [ ] `chess-gm-tak-05h-setup-discovered-multi-mudah.md`
- [ ] `chess-gm-tak-05h-setup-discovered-multi-sedang.md`
- [ ] `chess-gm-tak-05h-setup-discovered-multi-sulit.md`
- [ ] `chess-gm-tak-05h-setup-discovered-multi-mudah-sedang.md`
- [ ] `chess-gm-tak-05h-setup-discovered-multi-sedang-sulit.md`

**TAK-05i · Battery (Susunan Q+B / Q+R / R+R sebelum Discovered)** (fokus Klub–Master)
- [ ] `chess-gm-tak-05i-battery-campur.md`
- [ ] `chess-gm-tak-05i-battery-mudah.md`
- [ ] `chess-gm-tak-05i-battery-sedang.md`
- [ ] `chess-gm-tak-05i-battery-sulit.md`
- [ ] `chess-gm-tak-05i-battery-mudah-sedang.md`
- [ ] `chess-gm-tak-05i-battery-sedang-sulit.md`

**TAK-05j · Soal Cerita & Posisi Klasik Discovered Attack** (fokus Klub–Master)
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-campur.md`
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-mudah.md`
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-sedang.md`
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-sulit.md`
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-mudah-sedang.md`
- [ ] `chess-gm-tak-05j-soal-cerita-discovered-sedang-sulit.md`

### TAK-06 · Double Attack, Double Threat & Zwischenzug (10 sub-bab)

**TAK-06a · Pengertian Double Attack (Beda dari Fork)** (fokus Klub)
- [ ] `chess-gm-tak-06a-pengertian-double-attack-campur.md`
- [ ] `chess-gm-tak-06a-pengertian-double-attack-mudah.md`
- [ ] `chess-gm-tak-06a-pengertian-double-attack-sedang.md`
- [ ] `chess-gm-tak-06a-pengertian-double-attack-sulit.md`
- [ ] `chess-gm-tak-06a-pengertian-double-attack-mudah-sedang.md`
- [ ] `chess-gm-tak-06a-pengertian-double-attack-sedang-sulit.md`

**TAK-06b · Threat to Mate + Threat to Win Material** (fokus Klub)
- [ ] `chess-gm-tak-06b-mate-plus-material-campur.md`
- [ ] `chess-gm-tak-06b-mate-plus-material-mudah.md`
- [ ] `chess-gm-tak-06b-mate-plus-material-sedang.md`
- [ ] `chess-gm-tak-06b-mate-plus-material-sulit.md`
- [ ] `chess-gm-tak-06b-mate-plus-material-mudah-sedang.md`
- [ ] `chess-gm-tak-06b-mate-plus-material-sedang-sulit.md`

**TAK-06c · Dual Threat with Quiet Move (Ancaman Ganda Tanpa Check)** (fokus Master)
- [ ] `chess-gm-tak-06c-quiet-dual-threat-campur.md`
- [ ] `chess-gm-tak-06c-quiet-dual-threat-mudah.md`
- [ ] `chess-gm-tak-06c-quiet-dual-threat-sedang.md`
- [ ] `chess-gm-tak-06c-quiet-dual-threat-sulit.md`
- [ ] `chess-gm-tak-06c-quiet-dual-threat-mudah-sedang.md`
- [ ] `chess-gm-tak-06c-quiet-dual-threat-sedang-sulit.md`

**TAK-06d · Double Attack via Sacrifice** (fokus Master)
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-campur.md`
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-mudah.md`
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-sedang.md`
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-sulit.md`
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-06d-double-attack-sacrifice-sedang-sulit.md`

**TAK-06e · Zwischenzug / Intermezzo (Gerakan Penyela)** (fokus Klub–Master)
- [ ] `chess-gm-tak-06e-zwischenzug-campur.md`
- [ ] `chess-gm-tak-06e-zwischenzug-mudah.md`
- [ ] `chess-gm-tak-06e-zwischenzug-sedang.md`
- [ ] `chess-gm-tak-06e-zwischenzug-sulit.md`
- [ ] `chess-gm-tak-06e-zwischenzug-mudah-sedang.md`
- [ ] `chess-gm-tak-06e-zwischenzug-sedang-sulit.md`

**TAK-06f · Desperado Piece (Buah Nekat sebelum Tangkap)** (fokus Klub–Master)
- [ ] `chess-gm-tak-06f-desperado-campur.md`
- [ ] `chess-gm-tak-06f-desperado-mudah.md`
- [ ] `chess-gm-tak-06f-desperado-sedang.md`
- [ ] `chess-gm-tak-06f-desperado-sulit.md`
- [ ] `chess-gm-tak-06f-desperado-mudah-sedang.md`
- [ ] `chess-gm-tak-06f-desperado-sedang-sulit.md`

**TAK-06g · X-Ray Attack (Serangan Tembus Buah Sendiri/Lawan)** (fokus Klub–Master)
- [ ] `chess-gm-tak-06g-xray-attack-campur.md`
- [ ] `chess-gm-tak-06g-xray-attack-mudah.md`
- [ ] `chess-gm-tak-06g-xray-attack-sedang.md`
- [ ] `chess-gm-tak-06g-xray-attack-sulit.md`
- [ ] `chess-gm-tak-06g-xray-attack-mudah-sedang.md`
- [ ] `chess-gm-tak-06g-xray-attack-sedang-sulit.md`

**TAK-06h · Tempo Move dengan Ancaman Ganda** (fokus Master)
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-campur.md`
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-mudah.md`
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-sedang.md`
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-sulit.md`
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-mudah-sedang.md`
- [ ] `chess-gm-tak-06h-tempo-ancaman-ganda-sedang-sulit.md`

**TAK-06i · Trapping a Piece (Memburu Buah ke Sudut/Tepi)** (fokus Klub)
- [ ] `chess-gm-tak-06i-trapping-piece-campur.md`
- [ ] `chess-gm-tak-06i-trapping-piece-mudah.md`
- [ ] `chess-gm-tak-06i-trapping-piece-sedang.md`
- [ ] `chess-gm-tak-06i-trapping-piece-sulit.md`
- [ ] `chess-gm-tak-06i-trapping-piece-mudah-sedang.md`
- [ ] `chess-gm-tak-06i-trapping-piece-sedang-sulit.md`

**TAK-06j · Soal Cerita Double Attack (dari Game Klasik)** (fokus Klub–Master)
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-campur.md`
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-mudah.md`
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-sedang.md`
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-sulit.md`
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-mudah-sedang.md`
- [ ] `chess-gm-tak-06j-soal-cerita-double-attack-sedang-sulit.md`

### TAK-07 · Removal of the Defender, Deflection, Decoy, Overload, Interference (10 sub-bab)

**TAK-07a · Pengertian Removing the Defender** (fokus Klub)
- [ ] `chess-gm-tak-07a-pengertian-removal-campur.md`
- [ ] `chess-gm-tak-07a-pengertian-removal-mudah.md`
- [ ] `chess-gm-tak-07a-pengertian-removal-sedang.md`
- [ ] `chess-gm-tak-07a-pengertian-removal-sulit.md`
- [ ] `chess-gm-tak-07a-pengertian-removal-mudah-sedang.md`
- [ ] `chess-gm-tak-07a-pengertian-removal-sedang-sulit.md`

**TAK-07b · Capture the Defender (Menangkap Pelindung Langsung)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-07b-capture-defender-campur.md`
- [ ] `chess-gm-tak-07b-capture-defender-mudah.md`
- [ ] `chess-gm-tak-07b-capture-defender-sedang.md`
- [ ] `chess-gm-tak-07b-capture-defender-sulit.md`
- [ ] `chess-gm-tak-07b-capture-defender-mudah-sedang.md`
- [ ] `chess-gm-tak-07b-capture-defender-sedang-sulit.md`

**TAK-07c · Deflection (Memaksa Pelindung Menjauh)** (fokus Klub)
- [ ] `chess-gm-tak-07c-deflection-campur.md`
- [ ] `chess-gm-tak-07c-deflection-mudah.md`
- [ ] `chess-gm-tak-07c-deflection-sedang.md`
- [ ] `chess-gm-tak-07c-deflection-sulit.md`
- [ ] `chess-gm-tak-07c-deflection-mudah-sedang.md`
- [ ] `chess-gm-tak-07c-deflection-sedang-sulit.md`

**TAK-07d · Decoy / Attraction (Memancing Buah ke Petak Buruk)** (fokus Klub–Master)
- [ ] `chess-gm-tak-07d-decoy-attraction-campur.md`
- [ ] `chess-gm-tak-07d-decoy-attraction-mudah.md`
- [ ] `chess-gm-tak-07d-decoy-attraction-sedang.md`
- [ ] `chess-gm-tak-07d-decoy-attraction-sulit.md`
- [ ] `chess-gm-tak-07d-decoy-attraction-mudah-sedang.md`
- [ ] `chess-gm-tak-07d-decoy-attraction-sedang-sulit.md`

**TAK-07e · Overloaded Piece (Buah dengan Tugas Pertahanan Ganda)** (fokus Klub–Master)
- [ ] `chess-gm-tak-07e-overloaded-piece-campur.md`
- [ ] `chess-gm-tak-07e-overloaded-piece-mudah.md`
- [ ] `chess-gm-tak-07e-overloaded-piece-sedang.md`
- [ ] `chess-gm-tak-07e-overloaded-piece-sulit.md`
- [ ] `chess-gm-tak-07e-overloaded-piece-mudah-sedang.md`
- [ ] `chess-gm-tak-07e-overloaded-piece-sedang-sulit.md`

**TAK-07f · Interference (Memutus Garis Pertahanan)** (fokus Master)
- [ ] `chess-gm-tak-07f-interference-campur.md`
- [ ] `chess-gm-tak-07f-interference-mudah.md`
- [ ] `chess-gm-tak-07f-interference-sedang.md`
- [ ] `chess-gm-tak-07f-interference-sulit.md`
- [ ] `chess-gm-tak-07f-interference-mudah-sedang.md`
- [ ] `chess-gm-tak-07f-interference-sedang-sulit.md`

**TAK-07g · Clearance Sacrifice (Pengorbanan Mengosongkan Jalur)** (fokus Master)
- [ ] `chess-gm-tak-07g-clearance-sacrifice-campur.md`
- [ ] `chess-gm-tak-07g-clearance-sacrifice-mudah.md`
- [ ] `chess-gm-tak-07g-clearance-sacrifice-sedang.md`
- [ ] `chess-gm-tak-07g-clearance-sacrifice-sulit.md`
- [ ] `chess-gm-tak-07g-clearance-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-07g-clearance-sacrifice-sedang-sulit.md`

**TAK-07h · Line-Opening Sacrifice (Pengorbanan Membuka File/Diagonal)** (fokus Master)
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-campur.md`
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-mudah.md`
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-sedang.md`
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-sulit.md`
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-07h-line-opening-sacrifice-sedang-sulit.md`

**TAK-07i · Kombinasi Multi-Layer Removal (Deflection → Fork, dst.)** (fokus Master)
- [ ] `chess-gm-tak-07i-multi-layer-removal-campur.md`
- [ ] `chess-gm-tak-07i-multi-layer-removal-mudah.md`
- [ ] `chess-gm-tak-07i-multi-layer-removal-sedang.md`
- [ ] `chess-gm-tak-07i-multi-layer-removal-sulit.md`
- [ ] `chess-gm-tak-07i-multi-layer-removal-mudah-sedang.md`
- [ ] `chess-gm-tak-07i-multi-layer-removal-sedang-sulit.md`

**TAK-07j · Soal Cerita Removal Defender (dari Praktik)** (fokus Klub–Master)
- [ ] `chess-gm-tak-07j-soal-cerita-removal-campur.md`
- [ ] `chess-gm-tak-07j-soal-cerita-removal-mudah.md`
- [ ] `chess-gm-tak-07j-soal-cerita-removal-sedang.md`
- [ ] `chess-gm-tak-07j-soal-cerita-removal-sulit.md`
- [ ] `chess-gm-tak-07j-soal-cerita-removal-mudah-sedang.md`
- [ ] `chess-gm-tak-07j-soal-cerita-removal-sedang-sulit.md`

### TAK-08 · Pengorbanan (Sacrifice) Taktis (11 sub-bab)

**TAK-08a · Konsep Sacrifice — Real vs Sham (Stockfish vs Tal-style)** (fokus Klub)
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-campur.md`
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08a-konsep-real-sham-sacrifice-sedang-sulit.md`

**TAK-08b · Pawn Sacrifice (Pengorbanan Bidak — Gambit-style)** (fokus Klub)
- [ ] `chess-gm-tak-08b-pawn-sacrifice-campur.md`
- [ ] `chess-gm-tak-08b-pawn-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08b-pawn-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08b-pawn-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08b-pawn-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08b-pawn-sacrifice-sedang-sulit.md`

**TAK-08c · Knight Sacrifice (Pengorbanan Kuda)** (fokus Klub–Master)
- [ ] `chess-gm-tak-08c-knight-sacrifice-campur.md`
- [ ] `chess-gm-tak-08c-knight-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08c-knight-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08c-knight-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08c-knight-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08c-knight-sacrifice-sedang-sulit.md`

**TAK-08d · Bishop Sacrifice (Pengorbanan Gajah)** (fokus Klub–Master)
- [ ] `chess-gm-tak-08d-bishop-sacrifice-campur.md`
- [ ] `chess-gm-tak-08d-bishop-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08d-bishop-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08d-bishop-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08d-bishop-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08d-bishop-sacrifice-sedang-sulit.md`

**TAK-08e · Exchange Sacrifice (Rook for Minor Piece)** (fokus Master)
- [ ] `chess-gm-tak-08e-exchange-sacrifice-campur.md`
- [ ] `chess-gm-tak-08e-exchange-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08e-exchange-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08e-exchange-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08e-exchange-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08e-exchange-sacrifice-sedang-sulit.md`

**TAK-08f · Queen Sacrifice (Pengorbanan Menteri)** (fokus Master)
- [ ] `chess-gm-tak-08f-queen-sacrifice-campur.md`
- [ ] `chess-gm-tak-08f-queen-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08f-queen-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08f-queen-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08f-queen-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08f-queen-sacrifice-sedang-sulit.md`

**TAK-08g · Greek Gift (Bxh7+/Bxh2+ Classical Bishop Sacrifice)** (fokus Klub–Master)
- [ ] `chess-gm-tak-08g-greek-gift-campur.md`
- [ ] `chess-gm-tak-08g-greek-gift-mudah.md`
- [ ] `chess-gm-tak-08g-greek-gift-sedang.md`
- [ ] `chess-gm-tak-08g-greek-gift-sulit.md`
- [ ] `chess-gm-tak-08g-greek-gift-mudah-sedang.md`
- [ ] `chess-gm-tak-08g-greek-gift-sedang-sulit.md`

**TAK-08h · Pengorbanan h6/h3 untuk Membuka Raja (Sham Pawn Storm)** (fokus Master)
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-campur.md`
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-mudah.md`
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-sedang.md`
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-sulit.md`
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-mudah-sedang.md`
- [ ] `chess-gm-tak-08h-sacrifice-h6-h3-sedang-sulit.md`

**TAK-08i · Pengorbanan Penghancur Struktur Bidak Raja (Nxg7, Bxh6)** (fokus Master)
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-campur.md`
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-mudah.md`
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-sedang.md`
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-sulit.md`
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-mudah-sedang.md`
- [ ] `chess-gm-tak-08i-penghancur-bidak-raja-sedang-sulit.md`

**TAK-08j · Positional Sacrifice (Pengorbanan Demi Posisi, Bukan Mate)** (fokus Master)
- [ ] `chess-gm-tak-08j-positional-sacrifice-campur.md`
- [ ] `chess-gm-tak-08j-positional-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08j-positional-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08j-positional-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08j-positional-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08j-positional-sacrifice-sedang-sulit.md`

**TAK-08k · Soal Cerita & Evaluasi Sacrifice (Hitung Kompensasi)** (fokus Klub–Master)
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-campur.md`
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-mudah.md`
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-sedang.md`
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-sulit.md`
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-08k-soal-cerita-evaluasi-sacrifice-sedang-sulit.md`

### TAK-09 · Kombinasi Multi-Langkah & Mating Net (10 sub-bab)

**TAK-09a · Forcing Moves (Checks, Captures, Threats Sequence)** (fokus Klub)
- [ ] `chess-gm-tak-09a-forcing-moves-campur.md`
- [ ] `chess-gm-tak-09a-forcing-moves-mudah.md`
- [ ] `chess-gm-tak-09a-forcing-moves-sedang.md`
- [ ] `chess-gm-tak-09a-forcing-moves-sulit.md`
- [ ] `chess-gm-tak-09a-forcing-moves-mudah-sedang.md`
- [ ] `chess-gm-tak-09a-forcing-moves-sedang-sulit.md`

**TAK-09b · Calculation Tree (Pohon Variasi — Cabang Utama vs Side Line)** (fokus Klub–Master)
- [ ] `chess-gm-tak-09b-calculation-tree-campur.md`
- [ ] `chess-gm-tak-09b-calculation-tree-mudah.md`
- [ ] `chess-gm-tak-09b-calculation-tree-sedang.md`
- [ ] `chess-gm-tak-09b-calculation-tree-sulit.md`
- [ ] `chess-gm-tak-09b-calculation-tree-mudah-sedang.md`
- [ ] `chess-gm-tak-09b-calculation-tree-sedang-sulit.md`

**TAK-09c · Quiet Move dalam Kombinasi (Stillsitzen / Waiting Move)** (fokus Master)
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-campur.md`
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-mudah.md`
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-sedang.md`
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-sulit.md`
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-mudah-sedang.md`
- [ ] `chess-gm-tak-09c-quiet-move-kombinasi-sedang-sulit.md`

**TAK-09d · In-Between Moves Lanjutan (Zwischenzug Multi-Layer)** (fokus Master)
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-campur.md`
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-mudah.md`
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-sedang.md`
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-sulit.md`
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-mudah-sedang.md`
- [ ] `chess-gm-tak-09d-zwischenzug-lanjutan-sedang-sulit.md`

**TAK-09e · Mating Net — Restricting King's Escape Squares** (fokus Klub–Master)
- [ ] `chess-gm-tak-09e-mating-net-restrict-campur.md`
- [ ] `chess-gm-tak-09e-mating-net-restrict-mudah.md`
- [ ] `chess-gm-tak-09e-mating-net-restrict-sedang.md`
- [ ] `chess-gm-tak-09e-mating-net-restrict-sulit.md`
- [ ] `chess-gm-tak-09e-mating-net-restrict-mudah-sedang.md`
- [ ] `chess-gm-tak-09e-mating-net-restrict-sedang-sulit.md`

**TAK-09f · Mate in 2 (Pelajaran Pola)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-09f-mate-in-2-campur.md`
- [ ] `chess-gm-tak-09f-mate-in-2-mudah.md`
- [ ] `chess-gm-tak-09f-mate-in-2-sedang.md`
- [ ] `chess-gm-tak-09f-mate-in-2-sulit.md`
- [ ] `chess-gm-tak-09f-mate-in-2-mudah-sedang.md`
- [ ] `chess-gm-tak-09f-mate-in-2-sedang-sulit.md`

**TAK-09g · Mate in 3** (fokus Klub)
- [ ] `chess-gm-tak-09g-mate-in-3-campur.md`
- [ ] `chess-gm-tak-09g-mate-in-3-mudah.md`
- [ ] `chess-gm-tak-09g-mate-in-3-sedang.md`
- [ ] `chess-gm-tak-09g-mate-in-3-sulit.md`
- [ ] `chess-gm-tak-09g-mate-in-3-mudah-sedang.md`
- [ ] `chess-gm-tak-09g-mate-in-3-sedang-sulit.md`

**TAK-09h · Mate in 4+ (Lanjutan, Multi-Variasi)** (fokus Master)
- [ ] `chess-gm-tak-09h-mate-in-4-plus-campur.md`
- [ ] `chess-gm-tak-09h-mate-in-4-plus-mudah.md`
- [ ] `chess-gm-tak-09h-mate-in-4-plus-sedang.md`
- [ ] `chess-gm-tak-09h-mate-in-4-plus-sulit.md`
- [ ] `chess-gm-tak-09h-mate-in-4-plus-mudah-sedang.md`
- [ ] `chess-gm-tak-09h-mate-in-4-plus-sedang-sulit.md`

**TAK-09i · Kombinasi dengan Pengorbanan Beruntun (Cascade Sacrifice)** (fokus Master)
- [ ] `chess-gm-tak-09i-cascade-sacrifice-campur.md`
- [ ] `chess-gm-tak-09i-cascade-sacrifice-mudah.md`
- [ ] `chess-gm-tak-09i-cascade-sacrifice-sedang.md`
- [ ] `chess-gm-tak-09i-cascade-sacrifice-sulit.md`
- [ ] `chess-gm-tak-09i-cascade-sacrifice-mudah-sedang.md`
- [ ] `chess-gm-tak-09i-cascade-sacrifice-sedang-sulit.md`

**TAK-09j · Studi Kombinasi Klasik (Troitsky, Réti, Loyd, Saavedra)** (fokus Master)
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-campur.md`
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-mudah.md`
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-sedang.md`
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-sulit.md`
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-mudah-sedang.md`
- [ ] `chess-gm-tak-09j-studi-klasik-kombinasi-sedang-sulit.md`

### TAK-10 · Pola Mate Klasik & Mate Lanjutan (11 sub-bab)

**TAK-10a · Back Rank Mate (Mate Petak Belakang)** (fokus Pemula–Klub)
- [ ] `chess-gm-tak-10a-back-rank-mate-campur.md`
- [ ] `chess-gm-tak-10a-back-rank-mate-mudah.md`
- [ ] `chess-gm-tak-10a-back-rank-mate-sedang.md`
- [ ] `chess-gm-tak-10a-back-rank-mate-sulit.md`
- [ ] `chess-gm-tak-10a-back-rank-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10a-back-rank-mate-sedang-sulit.md`

**TAK-10b · Smothered Mate (Mate dengan Buah Lawan Memblokir Raja)** (fokus Klub)
- [ ] `chess-gm-tak-10b-smothered-mate-campur.md`
- [ ] `chess-gm-tak-10b-smothered-mate-mudah.md`
- [ ] `chess-gm-tak-10b-smothered-mate-sedang.md`
- [ ] `chess-gm-tak-10b-smothered-mate-sulit.md`
- [ ] `chess-gm-tak-10b-smothered-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10b-smothered-mate-sedang-sulit.md`

**TAK-10c · Anastasia's Mate (Kuda + Benteng pada Tepi)** (fokus Klub)
- [ ] `chess-gm-tak-10c-anastasia-mate-campur.md`
- [ ] `chess-gm-tak-10c-anastasia-mate-mudah.md`
- [ ] `chess-gm-tak-10c-anastasia-mate-sedang.md`
- [ ] `chess-gm-tak-10c-anastasia-mate-sulit.md`
- [ ] `chess-gm-tak-10c-anastasia-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10c-anastasia-mate-sedang-sulit.md`

**TAK-10d · Arabian Mate (Kuda + Benteng di Sudut)** (fokus Klub)
- [ ] `chess-gm-tak-10d-arabian-mate-campur.md`
- [ ] `chess-gm-tak-10d-arabian-mate-mudah.md`
- [ ] `chess-gm-tak-10d-arabian-mate-sedang.md`
- [ ] `chess-gm-tak-10d-arabian-mate-sulit.md`
- [ ] `chess-gm-tak-10d-arabian-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10d-arabian-mate-sedang-sulit.md`

**TAK-10e · Boden's Mate (Dua Gajah Mencerai)** (fokus Klub–Master)
- [ ] `chess-gm-tak-10e-boden-mate-campur.md`
- [ ] `chess-gm-tak-10e-boden-mate-mudah.md`
- [ ] `chess-gm-tak-10e-boden-mate-sedang.md`
- [ ] `chess-gm-tak-10e-boden-mate-sulit.md`
- [ ] `chess-gm-tak-10e-boden-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10e-boden-mate-sedang-sulit.md`

**TAK-10f · Légal's Mate (Pengorbanan Menteri Pembukaan)** (fokus Klub)
- [ ] `chess-gm-tak-10f-legal-mate-campur.md`
- [ ] `chess-gm-tak-10f-legal-mate-mudah.md`
- [ ] `chess-gm-tak-10f-legal-mate-sedang.md`
- [ ] `chess-gm-tak-10f-legal-mate-sulit.md`
- [ ] `chess-gm-tak-10f-legal-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10f-legal-mate-sedang-sulit.md`

**TAK-10g · Morphy's / Pillsbury's Mate (Bishop+Rook Diagonal)** (fokus Klub–Master)
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-campur.md`
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-mudah.md`
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-sedang.md`
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-sulit.md`
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10g-morphy-pillsbury-mate-sedang-sulit.md`

**TAK-10h · Damiano's Mate (Pengorbanan Benteng h-file)** (fokus Klub–Master)
- [ ] `chess-gm-tak-10h-damiano-mate-campur.md`
- [ ] `chess-gm-tak-10h-damiano-mate-mudah.md`
- [ ] `chess-gm-tak-10h-damiano-mate-sedang.md`
- [ ] `chess-gm-tak-10h-damiano-mate-sulit.md`
- [ ] `chess-gm-tak-10h-damiano-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10h-damiano-mate-sedang-sulit.md`

**TAK-10i · Lolli's Mate (Bidak h7 + Menteri)** (fokus Master)
- [ ] `chess-gm-tak-10i-lolli-mate-campur.md`
- [ ] `chess-gm-tak-10i-lolli-mate-mudah.md`
- [ ] `chess-gm-tak-10i-lolli-mate-sedang.md`
- [ ] `chess-gm-tak-10i-lolli-mate-sulit.md`
- [ ] `chess-gm-tak-10i-lolli-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10i-lolli-mate-sedang-sulit.md`

**TAK-10j · Mate dengan Dua Bishop / Knight+Bishop (Endgame Mate)** (fokus Master)
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-campur.md`
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-mudah.md`
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-sedang.md`
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-sulit.md`
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-mudah-sedang.md`
- [ ] `chess-gm-tak-10j-mate-dua-bishop-kn-sedang-sulit.md`

**TAK-10k · Soal Pattern Recognition Pola Mate Campur (Identifikasi Cepat)** (fokus Klub–Master)
- [ ] `chess-gm-tak-10k-pattern-recog-mate-campur.md`
- [ ] `chess-gm-tak-10k-pattern-recog-mate-mudah.md`
- [ ] `chess-gm-tak-10k-pattern-recog-mate-sedang.md`
- [ ] `chess-gm-tak-10k-pattern-recog-mate-sulit.md`
- [ ] `chess-gm-tak-10k-pattern-recog-mate-mudah-sedang.md`
- [ ] `chess-gm-tak-10k-pattern-recog-mate-sedang-sulit.md`

---

> **Belum dijabarkan di file ini:** sub-bab untuk pilar **STR (Strategi & Posisional, ~80 sub-bab)**, **END (Endgame, ~70 sub-bab)**, dan **BUK (Pembukaan, ~37 sub-bab)** — total target keseluruhan 289 sub-bab × 6 tingkat = 1.734 file. Bagian-bagian itu akan ditambahkan secara bertahap (mengikuti pola yang sama: nama sub-bab + tag fokus ELO + 6 checkbox tingkat). Saat ini, eksekusi diprioritaskan ke **Bab A (TAK Per Sub-Bab, 102 sub-bab × 6 = 612 file)** karena Taktik adalah fondasi paling padat di kurikulum Road to Grandmaster.
