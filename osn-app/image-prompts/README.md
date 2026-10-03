# Prompt Gambar Gemini — OSN SD

Kumpulan prompt untuk membuat gambar **super realistis, hanya objek, tanpa background** di Gemini, untuk semua objek visual yang muncul di soal & materi OSN SD (IPA + MTK).

- Daftar lengkap + jumlah soal yang memakai tiap objek: **[_INDEX.md](_INDEX.md)**
- Satu file `.md` = satu objek, dikelompokkan per mapel/bab: `ipa/<bab>/`, `mtk/<bab>/`

## Kenapa per objek, bukan per soal?

Data app berisi ±31.600 soal. Sebagian besar soal menyebut objek yang sama (mis. "kupu-kupu" dipakai di ratusan soal), dan mayoritas soal MTK adalah hitungan murni tanpa objek visual. Jadi prompt dibuat **sekali per objek**, lalu gambarnya dipakai ulang oleh semua soal yang terkait (tercatat di bagian "Soal terkait" tiap file).

Sengaja **tidak** dibuat:
- **Diagram, grafik, tabel, diagram sinar, rangkaian skematik.** Gemini sering salah menulis angka dan label, jadi tetap pakai SVG di app.
- **Adegan/proses** (gerhana, siklus air, rantai makanan). Ini bukan objek tunggal. Yang dibuat adalah objek penyusunnya (Matahari, Bumi, Bulan, hewan-hewan rantai makanan), lalu disusun di app.
- **Uang kertas/logam Rupiah realistis**, karena berisiko pemalsuan dan Gemini akan menolak. Diganti koin generik fiktif.

## Isi tiap file

Tiap file punya **2 versi** dengan urutan prompt yang sama:

- **A. Realistis**: fotorealistis (foto studio, model anatomi, render sains/NASA).
- **B. Ilustrasi**: gaya buku pelajaran SD, dengan outline tegas, cel shading lembut, dan warna cerah tapi tetap akurat. Tidak chibi atau karikatur.
- **C. Penampang** (94 objek yang bagian dalamnya penting: organ, sel, mikroba, jaringan, tumbuhan, anatomi dalam hewan, mekanisme alat, lapisan Bumi/Matahari/planet). Isinya dua prompt skematik:
  - **Dibelah**: bagian dalam terlihat, tiap area punya warna sendiri, batas antar-area berupa garis putus-putus, dan ada garis penunjuk berujung lingkaran kosong untuk label yang ditambahkan nanti di app.
  - **Transparan**: kulit luar tembus pandang, bagian dalam terlihat tanpa dibelah.
  - Daftar bagian dan warnanya ada di `_src/penampang.mjs`. Contoh: jantung dengan serambi kanan, serambi kiri, bilik kanan, dan bilik kiri.

| Jenis objek | Prompt per versi |
|---|---|
| **4 tampak** (hewan, organ, alat, planet, bangun ruang) | lembar 4 tampak sekaligus (turnaround) · DEPAN · BELAKANG · KIRI · KANAN |
| **1 tampak** (objek datar/simetris, set beberapa benda, alat percobaan) | tampak lurus dari depan (atau dari atas untuk objek datar) |

**Aturan untuk semua prompt:** harus **full body** (seluruh objek termasuk kaki, ekor, antena, akar, dan kabel masuk frame, tidak ada yang terpotong) dan **tidak memakai sudut 3/4**. Hanya tampak lurus: depan, belakang, kiri 90°, kanan 90°, atau atas.

Prompt ditulis dalam **bahasa Inggris** karena generator gambar Gemini lebih patuh pada detail anatomi, material, dan pencahayaan jika diberi prompt berbahasa Inggris. Judul dan catatan tetap berbahasa Indonesia.

## Sumber rujukan & gambar acuan

Setiap objek diverifikasi dengan sumber web: artikel Wikipedia (EN, plus link versi ID) dan satu **gambar acuan** berlisensi bebas dari Wikimedia Commons (CC0, CC BY, CC BY-SA, atau domain publik). Semuanya tercatat di bagian "Sumber rujukan" di tiap file. Kolom "Sumber & acuan" di `_INDEX.md` menunjukkan objek mana yang sudah diverifikasi.

- File gambar acuan: `image-results/<mapel>/<bab>/<id>/acuan.jpg`.
- **Saat generate di Gemini:** unggah `acuan.jpg` bersama prompt, lalu tempel kalimat yang tertulis di file prompt di awal prompt. Kalimat itu memberi tahu Gemini bahwa acuan hanya untuk akurasi bentuk, bukan untuk ditiru komposisinya. Hasilnya jauh lebih akurat daripada prompt tanpa acuan.
- **Gambar acuan jangan dipakai langsung di app atau video.** Lisensi CC BY/BY-SA mewajibkan atribusi, dan BY-SA bisa mewajibkan karya turunannya ikut berlisensi sama. Yang dipakai hanya hasil Gemini.

## Generate otomatis (Gemini API)

Skrip `_src/gemini-gen.mjs` menjalankan semua langkah di bawah ini secara otomatis:
- mengunggah gambar acuan bersama prompt;
- memakai satu sesi untuk depan → belakang → kiri → kanan, supaya objeknya konsisten;
- menyimpan hasil langsung ke slot di `image-results/`.

1. Buat API key di Google AI Studio, lalu simpan **hanya di environment**. Jangan tulis di file atau chat:
   ```powershell
   [Environment]::SetEnvironmentVariable('GEMINI_API_KEY', '<key>', 'User')   # lalu buka terminal baru
   ```
2. Dari folder `osn-app`:
   ```bash
   node image-prompts/_src/gemini-gen.mjs --models            # cek nama model gambar yang tersedia
   node image-prompts/_src/gemini-gen.mjs --dry-run komodo    # lihat rencana tanpa biaya
   node image-prompts/_src/gemini-gen.mjs komodo jantung      # generate (slot yang sudah terisi dilewati)
   node image-prompts/_src/gemini-gen.mjs akar-tunggang-serabut-set --slots p03,p04 --force   # ulangi slot tertentu
   ```
   Model default adalah `gemini-2.5-flash-image`. Untuk model lain, pakai `--model <nama>` atau env `GEMINI_IMAGE_MODEL`.
3. Setelah selesai, jalankan `node image-prompts/_src/gen.mjs`, lalu minta Claude **"cek gambar"**. Review tetap wajib.

Biaya dihitung per gambar. Cek harga terbaru di Google AI Studio. Mulailah dari beberapa objek dulu sebelum menjalankan semuanya.

## Cara pakai di Gemini (manual)

1. Buka Gemini, pilih mode buat gambar (Imagen / "Nano Banana").
2. Pilih versi (A atau B). **Jangan campur versi dalam satu chat**, karena gayanya akan ikut tercampur.
3. **Cara cepat:** tempel prompt turnaround (Prompt 1 atau Prompt 6). Hasilnya satu gambar lebar berisi 4 tampak, lalu potong jadi 4.
4. **Cara kualitas maksimal:** di **satu chat yang sama**, kirim prompt DEPAN (Prompt 2 atau 7). Setelah gambarnya jadi, kirim prompt BELAKANG, lalu KIRI, lalu KANAN. Prompt lanjutan merujuk "previous image", jadi Gemini mempertahankan objek yang sama. **Jangan buka chat baru di tengah proses.**
5. Kalau hasil meleset (misalnya ada meja, bayangan, atau bagian objek terpotong), balas: *"Show the full body, nothing cropped. Remove everything except the object. Pure solid white background, no shadow."*

## Cek akurasi hasil (wajib sebelum dipakai di app)

Prompt sudah diaudit agar akurat secara ilmiah. Tapi **generator gambar tetap sering salah**, sebagus apa pun promptnya. Jangan pakai gambar sebelum lolos cek berikut. Gambar yang salah jangan diperbaiki dengan edit manual. Generate ulang, atau balas di chat yang sama dengan koreksi spesifik (misalnya *"The insect must have exactly 6 legs, 3 on each side"*).

| Kategori | Yang paling sering salah |
|---|---|
| **Serangga** | Kaki harus 6 (3 pasang, menempel di toraks), tubuh 3 bagian, antena 2. Nyamuk betina berantena tipis, bukan lebat. |
| **Laba-laba** | Kaki 8, tubuh 2 bagian, tanpa antena. |
| **Vertebrata** | Jumlah jari (katak: 4 jari depan, 5 jari belakang berselaput), posisi mata, jumlah sirip ikan, celah insang hiu (5). |
| **Tumbuhan** | Tulang daun sesuai jenis (sejajar pada monokotil, menyirip/menjari pada dikotil), akar tunggang vs serabut, jumlah kelopak/mahkota. |
| **Organ** | **Kiri/kanan sering tertukar.** Tampak depan: apeks jantung dan lambung ada di sisi KANAN gambar, hati di sisi KIRI gambar. Paru kanan 3 lobus, paru kiri 2 lobus. Jantung 4 ruang, dinding bilik kiri paling tebal. |
| **Kerangka** | Tulang rusuk 12 pasang, lengkung S tulang belakang, jumlah jari 5. |
| **Sel & mikroba** | Sel tumbuhan punya dinding sel, kloroplas, dan vakuola besar, tanpa sentriol. Bakteri tanpa inti sel. |
| **Planet** | Urutan dan ukuran relatif, cincin Saturnus, sumbu Uranus yang rebah, fase Bulan (fase bertambah terang di sisi kanan). |
| **Bangun ruang** | Hitung rusuk & titik sudut (kubus 12/8, prisma segitiga 9/6, limas segiempat 8/5). |
| **Alat & percobaan** | Aliran air kondensor masuk dari bawah, titik tinta kromatografi di atas permukaan air, jumlah bohlam dan susunan seri/paralel. |
| **Semua** | Tidak boleh ada teks/angka palsu, merek, tangan, atau bagian yang terpotong. |

Sebaiknya gambar organ, sel, dan bab lain yang dipakai untuk soal dicek sekali oleh guru IPA sebelum rilis.

## Menghapus background (wajib)

Gemini **tidak bisa** menghasilkan PNG transparan. Karena itu semua prompt meminta background **putih polos #FFFFFF**, atau **hitam polos #000000** untuk objek yang putih/bercahaya (jalak Bali, ubur-ubur, planet, api, kabut dry ice), supaya pemisahannya mudah. Setelah itu:

- **Canva**: tombol *BG Remover*
- **remove.bg** / **Photoshop** (*Remove Background*)
- Otomatis massal: `pip install rembg` → `rembg p input/ output/`

## Menyimpan & review hasil

Simpan setiap hasil (sebaiknya PNG yang background-nya sudah dihapus) di **`osn-app/image-results/`**, di path yang tertulis di bawah setiap prompt ("Simpan hasil sebagai"). Contohnya `image-results/ipa/01-makhluk-hidup/komodo/p02-realistis-depan.png`. Folder dan placeholder `.svg` untuk semua slot sudah disiapkan.

Setelah gambar disimpan, minta Claude: **"cek/review gambar"**. Claude akan:

1. Membuka setiap gambar baru.
2. Memeriksa akurasi sains (jumlah bagian, posisi kiri/kanan, warna, proporsi) dan kepatuhan pada prompt.
3. Mencatat hasilnya di `image-results/_review.json`.
4. Memperbarui `image-results/_STATUS.md` (✅ lolos · ⚠️ revisi · ❌ salah, lengkap dengan prompt koreksi untuk Gemini).

Prosedur lengkapnya tertulis di `CLAUDE.md` root repo.

## Mengubah atau menambah objek

Jangan edit file `.md` hasil generate. Edit katalog di `_src/catalog-*.mjs` (data objek) atau `_src/penampang.mjs` (bagian dalam untuk versi C), lalu jalankan dari folder `osn-app`:

```bash
node image-prompts/_src/gen.mjs
```

Field katalog: `id`, `name` (nama Indonesia), `bab`, `sub` (sub-bab), `en` (nama objek dalam bahasa Inggris), `d` (detail visual), `kw` (regex kata kunci untuk mencari soal terkait), `s` (gaya foto: `photo`/`bio`/`anat`/`micro`/`space`), `v: 1` (satu tampak), `set: true` (beberapa benda dalam satu gambar), `bg: 'k'` (background hitam), `f` (definisi depan/belakang/kiri/kanan), `top: true` (tampak lurus dari atas).
