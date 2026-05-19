# OSN/KSN SD — MATEMATIKA
## Sub-Bab 08b: Pola Geometri (Barisan dengan Rasio Tetap)
### Tingkat: CAMPUR (50 Kab + 30 Prov + 20 Nas) — 100 Soal PG

---

**Profil Paket**
- Mata Pelajaran: Matematika
- Bab: 08 (Pola Bilangan)
- Sub-Bab: 08b Pola Geometri (Barisan Geometri)
- Jumlah Soal: 100 Pilihan Ganda (4 opsi A/B/C/D)
- Distribusi: 50 Kabupaten (mudah) + 30 Provinsi (sedang) + 20 Nasional (sulit)
- Target: Siswa SD kelas 5–6 persiapan OSN/KSN
- Kunci: terdistribusi balanced 25/25/25/25

---

## BAGIAN I — KONSEP & STRATEGI

### 1. Apa Itu Barisan Geometri?

Coba lihat barisan ini: **2, 6, 18, 54, 162, ...**

Bagaimana cara naiknya? Bukan +4 atau +12, tetapi setiap suku dikalikan dengan **3**. Inilah ciri **barisan geometri**: setiap suku diperoleh dengan mengalikan suku sebelumnya dengan bilangan tetap. Bilangan tetap ini disebut **rasio (r)**.

Bandingkan dengan **barisan aritmetika** yang naiknya dengan **menambah** bilangan tetap (beda, b):
- Aritmetika: 2, 5, 8, 11, 14, ... (selalu **+3**)
- Geometri: 2, 6, 18, 54, 162, ... (selalu **×3**)

Kalau kamu mau tahu apakah barisan itu geometri, **bagilah suku ke-2 dengan suku ke-1**, lalu suku ke-3 dengan suku ke-2. Kalau hasil baginya **sama**, itu barisan geometri.

### 2. Notasi Penting

- **U₁ atau a**: suku pertama
- **U₂**: suku kedua
- **Uₙ**: suku ke-n
- **r**: rasio (hasil bagi suku berurutan)
- **n**: nomor urut suku

Cara mencari rasio:
> **r = U₂ ÷ U₁ = U₃ ÷ U₂ = U₄ ÷ U₃ = ... = Uₙ ÷ Uₙ₋₁**

Contoh: 4, 12, 36, 108, ...
- r = 12 ÷ 4 = 3
- Cek: 36 ÷ 12 = 3 ✓ ; 108 ÷ 36 = 3 ✓

### 3. Rumus Utama: Uₙ = U₁ × r^(n−1)

Ini rumus paling sering keluar OSN. **Hafalkan!**

> **Uₙ = U₁ × r^(n − 1)**

Pangkatnya **(n − 1)**, bukan n. Kenapa? Karena U₁ belum dikali rasio sama sekali. Lihat pola pangkat:
- U₁ = U₁ × r⁰ = U₁ × 1 (pangkat 0)
- U₂ = U₁ × r¹ (sekali kali)
- U₃ = U₁ × r² (dua kali kali)
- U₄ = U₁ × r³ (tiga kali kali)
- U₁₀ = U₁ × r⁹

**Rumus mudah ingat:** "Pangkat selalu **satu lebih kecil** dari nomor sukunya."

### 4. Mencari Suku Tertentu — Contoh

**Soal:** Barisan 3, 6, 12, 24, ... Tentukan U₈.
- U₁ = 3 ; r = 6 ÷ 3 = 2 ; n = 8
- U₈ = 3 × 2^(8−1) = 3 × 2⁷ = 3 × 128 = **384**

Kalau dihitung manual: 3, 6, 12, 24, 48, 96, 192, **384** ✓

### 5. Mencari Rasio Jika Tahu Dua Suku Tak Berdekatan

**Soal:** U₂ = 6 dan U₅ = 162. Tentukan r dan U₁.
- U₅ ÷ U₂ = r^(5−2) = r³
- r³ = 162 ÷ 6 = 27 → r = ∛27 = **3**
- U₁ = U₂ ÷ r = 6 ÷ 3 = **2**

Triknya: **kurangi nomor sukunya** untuk dapat pangkat r. (5−2 = 3, jadi r³.)

### 6. Aplikasi: Pertumbuhan Ganda & Peluruhan

Barisan geometri sering muncul di soal cerita:

**(a) Pertumbuhan ganda (r > 1):**
- Sel membelah jadi 2 setiap 20 menit (r = 2)
- Populasi kelinci naik 3 kali setiap bulan (r = 3)
- Investasi naik 2× tiap tahun (r = 2)

**(b) Peluruhan (0 < r < 1):**
- Bola memantul, tiap pantulan tingginya jadi ½ sebelumnya (r = ½)
- Obat dalam tubuh berkurang ⅓ tiap jam (r = ⅔)
- Air menguap, volumenya jadi 0,8× tiap jam (r = 0,8)

**Trik penting untuk soal cerita:**
- Kalau ditanya "setelah n jam/menit/hari" dan kondisi awal adalah saat **t=0** atau **awalnya**, maka **U₁ = nilai awal** dan jumlah suku = **n + 1** (karena U₁ untuk t=0, U₂ untuk t=1, dst.).
- Tapi kalau soal bilang "**di jam ke-1** ada X", berarti **U₁ = X** dan jumlah suku langsung = n untuk "jam ke-n".

Baca soal pelan-pelan!

### 7. Bunga Majemuk Sederhana

Bunga majemuk = bunga dihitung dari saldo termasuk bunga sebelumnya, jadi tumbuh secara geometri.

**Rumus:** Saldo akhir = Saldo awal × (1 + bunga)^n

Contoh: Tabungan Rp1.000.000, bunga 10% per tahun (majemuk). Saldo setelah 3 tahun?
- Saldo = 1.000.000 × 1,1³ = 1.000.000 × 1,331 = **Rp1.331.000**

Kalau aritmetika (bunga tunggal), saldo = 1.000.000 + 3 × 100.000 = Rp1.300.000. Bedanya kecil di 3 tahun, tapi makin besar tahun-tahun berikutnya — itu kekuatan geometri.

### 8. Strategi Cepat di Soal

1. **Cek dulu:** ini geometri atau aritmetika? Hitung U₂ − U₁ dan U₂ ÷ U₁. Yang konsisten itulah jenisnya.
2. **Tulis r jelas-jelas** sebelum lanjut. r positif/negatif/pecahan/bulat?
3. **Pangkat = n − 1**, bukan n. Cek dua suku awal untuk yakin.
4. **Untuk r pecahan (0 < r < 1)**, suku akan mengecil — jangan kaget kalau hasil kecil.
5. **Cek logika:** kalikan-bagi mundur dari jawaban, harus kembali ke suku awal.

### 9. Anti-Jebakan Klasik

- **Tukar dengan aritmetika:** menambah rasio bukan mengalikan. Soal: 2, 6, 18, ... lalu menjawab "suku ke-5 = 18 + 6 + 6 = 30" (salah! Yang benar 18 × 3 = 54, dst.).
- **Salah pangkat n:** memakai r^n bukannya r^(n−1). Soal U₁ = 2, r = 3, mencari U₅ → menjawab 2 × 3⁵ = 486 (salah! Harusnya 2 × 3⁴ = 162).
- **Salah rasio:** kalau diberi U₁ = 2, U₃ = 18, langsung menulis r = (18−2)/2 = 8 (itu cara aritmetika!). Yang benar: U₃ = U₁ × r² → 18 = 2 × r² → r² = 9 → r = 3.
- **Salah hitung pangkat:** 3⁴ ditulis 12 (3×4) bukan 81.
- **Konteks salah:** soal "di akhir hari ke-3" dianggap n=3 padahal harus dihitung U₄ kalau hari awal (hari ke-0) sudah dihitung.

Yuk mulai latihan 100 soal! Soal berurutan dari yang ringan ke berat.

---

## BAGIAN II — 100 SOAL LATIHAN

### A. SOAL TINGKAT KABUPATEN (Soal 1–50)

**1.** Perhatikan barisan: 2, 6, 18, 54, .... Rasio barisan tersebut adalah ....
- A. 2
- B. 3
- C. 4
- D. 12

**Kunci: B**

**Pembahasan:**
- Rasio = U₂ ÷ U₁ = 6 ÷ 2 = **3**. Cek: 18 ÷ 6 = 3 ✓ ; 54 ÷ 18 = 3 ✓.
- **A. 2** → salah; ini ide bahwa beda awal "2" adalah rasio. Tertukar dengan U₁.
- **B. 3** → BENAR.
- **C. 4** → salah; mungkin dikira beda 6−2 = 4, padahal itu cara aritmetika.
- **D. 12** → salah; 6 × 2 = 12 dianggap rasio, jelas keliru.

---

**2.** Suku ke-5 dari barisan 3, 6, 12, 24, ... adalah ....
- A. 36
- B. 42
- C. 47
- D. 48

**Kunci: D**

**Pembahasan:**
- Rasio = 2. U₅ = 3 × 2^(5−1) = 3 × 16 = **48**. Atau dilanjutkan: 3, 6, 12, 24, **48**.
- **A. 36** → salah; menambah 12 (beda terakhir terlihat) ke 24, cara aritmetika.
- **B. 42** → salah; menambah 18 ke 24 (rata-rata beda).
- **C. 47** → tebakan numerik tanpa logika.
- **D. 48** → BENAR.

---

**3.** Suku pertama barisan geometri adalah 5 dan rasionya 2. Suku ke-4 barisan tersebut adalah ....
- A. 40
- B. 30
- C. 80
- D. 11

**Kunci: A**

**Pembahasan:**
- U₄ = 5 × 2^(4−1) = 5 × 2³ = 5 × 8 = **40**. Cek: 5, 10, 20, **40**.
- **A. 40** → BENAR.
- **B. 30** → salah; mengira aritmetika 5 + 3·(?), atau 5×2×3 = 30 (salah perhitungan pangkat).
- **C. 80** → salah; memakai pangkat n bukan n−1: 5 × 2⁴ = 80.
- **D. 11** → salah; mengira aritmetika dengan beda 2: 5 + 3×2 = 11.

---

**4.** Diketahui barisan 4, 8, 16, 32, .... Suku ke-6 adalah ....
- A. 96
- B. 64
- C. 128
- D. 256

**Kunci: C**

**Pembahasan:**
- r = 2. U₆ = 4 × 2⁵ = 4 × 32 = **128**. Cek: 4, 8, 16, 32, 64, **128**.
- **A. 96** → salah; menambah 32 lalu 32 lagi (aritmetika sesat).
- **B. 64** → salah; itu U₅, satu langkah kurang.
- **C. 128** → BENAR.
- **D. 256** → salah; itu U₇, pangkat n bukan n−1: 4 × 2⁶ = 256.

---

**5.** Rasio barisan 81, 27, 9, 3, ... adalah ....
- A. 1/2
- B. 1/3
- C. 3
- D. −3

**Kunci: B**

**Pembahasan:**
- r = 27 ÷ 81 = **1/3**. Suku-suku turun, rasio harus pecahan < 1.
- **A. 1/2** → salah; tebakan pecahan tetapi 81 × ½ = 40,5 ≠ 27.
- **B. 1/3** → BENAR.
- **C. 3** → salah; ini rasio jika barisan dibalik (3, 9, 27, 81).
- **D. −3** → salah; tidak ada tanda berganti.

---

**6.** Sebuah barisan geometri: U₁ = 2, U₂ = 10. Suku ke-3 adalah ....
- A. 50
- B. 18
- C. 25
- D. 100

**Kunci: A**

**Pembahasan:**
- r = 10 ÷ 2 = 5. U₃ = 10 × 5 = **50** (atau 2 × 5² = 50).
- **A. 50** → BENAR.
- **B. 18** → salah; aritmetika: beda 8, jadi 10 + 8 = 18.
- **C. 25** → salah; mengira 5² saja tanpa kalikan U₁.
- **D. 100** → salah; U₃ = U₂ × r × r = 10 × 5 × 2 ... bingung pangkat.

---

**7.** Pada barisan 1, 2, 4, 8, ..., suku ke-7 adalah ....
- A. 32
- B. 48
- C. 56
- D. 64

**Kunci: D**

**Pembahasan:**
- r = 2. U₇ = 1 × 2⁶ = **64**. Cek: 1, 2, 4, 8, 16, 32, **64**.
- **A. 32** → salah; itu U₆.
- **B. 48** → salah; 32 + 16, tetapi 16 bukan rasio.
- **C. 56** → tebakan tengah, tidak konsisten.
- **D. 64** → BENAR.

---

**8.** Suku ke-5 dari barisan 1, 3, 9, 27, ... adalah ....
- A. 64
- B. 99
- C. 81
- D. 243

**Kunci: C**

**Pembahasan:**
- r = 3. U₅ = 1 × 3⁴ = **81**.
- **A. 64** → tebakan, tidak konsisten dengan pola.
- **B. 99** → salah; menambah 72 (rata-rata) ke 27.
- **C. 81** → BENAR.
- **D. 243** → salah; itu U₆ (pangkat n bukan n−1).

---

**9.** Barisan 2, 4, 8, 16, .... Suku ke berapa yang nilainya 256?
- A. 7
- B. 8
- C. 9
- D. 10

**Kunci: B**

**Pembahasan:**
- 2, 4, 8, 16, 32, 64, 128, **256**. Ini suku ke-**8**. Atau: 256 = 2 × 2^(n−1) → 128 = 2^(n−1) → n−1 = 7 → n = **8**.
- **A. 7** → salah; jika dimulai 2 = 2¹ disangka U₁ pangkat 0 (off-by-one).
- **B. 8** → BENAR.
- **C. 9** → salah; menghitung berlebih satu langkah.
- **D. 10** → terlalu jauh.

---

**10.** Diketahui U₁ = 4, r = 3. Tentukan U₃!
- A. 36
- B. 30
- C. 12
- D. 108

**Kunci: A**

**Pembahasan:**
- U₃ = 4 × 3² = 4 × 9 = **36**.
- **A. 36** → BENAR.
- **B. 30** → salah; aritmetika 4 + 2×13? tidak konsisten.
- **C. 12** → salah; mengira U₃ = U₁ × r (hanya 1×).
- **D. 108** → salah; itu U₄ (4 × 27 = 108), salah pangkat n bukan n−1.

---

**11.** Tiga suku pertama suatu barisan geometri adalah 5, 15, 45. Suku ke-4 adalah ....
- A. 75
- B. 90
- C. 135
- D. 225

**Kunci: C**

**Pembahasan:**
- r = 15 ÷ 5 = 3. U₄ = 45 × 3 = **135**.
- **A. 75** → salah; aritmetika dengan beda 30 (45+30).
- **B. 90** → salah; 45 × 2 (salah rasio).
- **C. 135** → BENAR.
- **D. 225** → salah; 45 × 5 (mengambil U₁ sebagai rasio).

---

**12.** Suku ke-6 barisan 100, 50, 25, 12,5, ... adalah ....
- A. 6
- B. 7,5
- C. 5
- D. 3,125

**Kunci: D**

**Pembahasan:**
- r = ½. U₆ = 100 × (½)⁵ = 100 ÷ 32 = **3,125**. Cek: 100, 50, 25, 12,5, 6,25, **3,125**.
- **A. 6** → salah; mengira aritmetika 12,5 − 6,5 lalu kurang 6,5.
- **B. 7,5** → salah; setengah dari 12,5 lalu ÷ kira-kira.
- **C. 5** → salah; ¼ dari 25 = 6,25; tebakan dibulatkan.
- **D. 3,125** → BENAR.

---

**13.** U₁ = 2 dan r = −2. U₄ = ....
- A. −16
- B. 16
- C. −8
- D. 8

**Kunci: A**

**Pembahasan:**
- U₄ = 2 × (−2)³ = 2 × (−8) = **−16**. Cek: 2, −4, 8, **−16**.
- **A. −16** → BENAR.
- **B. 16** → salah; lupa tanda (−2)³ = −8, bukan 8.
- **C. −8** → salah; itu (−2)³ tanpa kalikan U₁ = 2.
- **D. 8** → salah; itu U₃ (2 × (−2)² = 8).

---

**14.** Tentukan U₅ dari barisan 1, 5, 25, 125, ....
- A. 500
- B. 625
- C. 1.250
- D. 750

**Kunci: B**

**Pembahasan:**
- r = 5. U₅ = 1 × 5⁴ = **625**. Cek: 1, 5, 25, 125, **625**.
- **A. 500** → salah; 125 × 4 (mengira rasio bertambah ke 4).
- **B. 625** → BENAR.
- **C. 1.250** → salah; 125 × 10, atau dikira pakai r = 10.
- **D. 750** → tebakan tengah.

---

**15.** Pada barisan geometri, U₂ = 12 dan U₄ = 108. Tentukan rasio (positif)!
- A. 2
- B. 6
- C. 9
- D. 3

**Kunci: D**

**Pembahasan:**
- U₄ ÷ U₂ = r² = 108 ÷ 12 = 9 → r = **3**.
- **A. 2** → salah; mengira r² = 108−12 = 96, lalu akarnya kira-kira 2.
- **B. 6** → salah; mengambil rata-rata 12 dan 108 dibagi (?).
- **C. 9** → salah; itu r², lupa diakarkan.
- **D. 3** → BENAR.

---

**16.** Bakteri membelah jadi 2 setiap 30 menit. Mula-mula ada 4 bakteri. Setelah 2 jam ada berapa?
- A. 16
- B. 32
- C. 8
- D. 64

**Kunci: D**

**Pembahasan:**
- 2 jam = 4 × 30 menit, jadi terjadi 4 kali pembelahan. r = 2. Awalnya 4 (anggap U₁ = 4 untuk t=0). Setelah pembelahan ke-4 → U₅ = 4 × 2⁴ = **64**.
- Atau hitung: t=0 ada 4 → t=30 ada 8 → t=60 ada 16 → t=90 ada 32 → t=120 ada **64**.
- **A. 16** → salah; hanya menghitung 2 pembelahan.
- **B. 32** → salah; menghitung 3 pembelahan, lupa pembelahan terakhir.
- **C. 8** → salah; hanya 1 pembelahan.
- **D. 64** → BENAR.

---

**17.** Suku pertama barisan 6, 18, 54, ... jika r = 3 maka U₆ = ....
- A. 1.458
- B. 486
- C. 729
- D. 162

**Kunci: A**

**Pembahasan:**
- U₆ = 6 × 3⁵ = 6 × 243 = **1.458**. Cek: 6, 18, 54, 162, 486, **1.458**.
- **A. 1.458** → BENAR.
- **B. 486** → salah; itu U₅.
- **C. 729** → salah; 3⁶ = 729, tetapi tanpa dikali 6.
- **D. 162** → salah; itu U₄.

---

**18.** Diketahui U₁ = 64 dan r = ½. Suku ke-5 adalah ....
- A. 8
- B. 4
- C. 16
- D. 2

**Kunci: B**

**Pembahasan:**
- U₅ = 64 × (½)⁴ = 64 ÷ 16 = **4**. Cek: 64, 32, 16, 8, **4**.
- **A. 8** → salah; itu U₄.
- **B. 4** → BENAR.
- **C. 16** → salah; itu U₃.
- **D. 2** → salah; itu U₆.

---

**19.** Suku ke-3 barisan geometri adalah 18 dan rasionya 3. Suku pertamanya adalah ....
- A. 6
- B. 9
- C. 2
- D. 1

**Kunci: C**

**Pembahasan:**
- U₃ = U₁ × r² → 18 = U₁ × 9 → U₁ = **2**.
- **A. 6** → salah; U₁ = U₃ ÷ r = 18 ÷ 3 = 6 (lupa pangkat 2).
- **B. 9** → salah; 18 ÷ 2 (asal bagi 2).
- **C. 2** → BENAR.
- **D. 1** → salah; tebakan kecil.

---

**20.** Dalam barisan 7, 14, 28, 56, ..., berapakah U₅?
- A. 84
- B. 100
- C. 112
- D. 224

**Kunci: C**

**Pembahasan:**
- r = 2. U₅ = 7 × 2⁴ = **112**. Cek: 7, 14, 28, 56, **112**.
- **A. 84** → salah; 56 + 28 (aritmetika).
- **B. 100** → tebakan bulat.
- **C. 112** → BENAR.
- **D. 224** → salah; itu U₆.

---

**21.** Rasio pada barisan 1, 4, 16, 64, ... adalah ....
- A. 3
- B. 4
- C. 5
- D. 16

**Kunci: B**

**Pembahasan:**
- r = 4 ÷ 1 = **4**.
- **A. 3** → salah; selisih 4 − 1 = 3 (aritmetika).
- **B. 4** → BENAR.
- **C. 5** → tebakan; selisih 16 − 4 − 4 − 1 ... salah hitung.
- **D. 16** → salah; itu U₃ atau hasil 4².

---

**22.** Suatu populasi bakteri membelah jadi 3 kali setiap jam. Jika awalnya 5 bakteri, setelah 4 jam ada berapa?
- A. 405
- B. 200
- C. 135
- D. 1.215

**Kunci: A**

**Pembahasan:**
- Setelah 4 jam → 4 pembelahan dari kondisi awal. Jumlah = 5 × 3⁴ = 5 × 81 = **405**.
- Cek: jam 0 = 5, jam 1 = 15, jam 2 = 45, jam 3 = 135, jam 4 = **405**.
- **A. 405** → BENAR.
- **B. 200** → tebakan bulat.
- **C. 135** → salah; itu setelah 3 jam (U₄ dengan U₁ = 5).
- **D. 1.215** → salah; pangkat berlebih 5 × 3⁵.

---

**23.** Hasil U₆ dari barisan 1, 2, 4, 8, ... adalah ....
- A. 16
- B. 24
- C. 64
- D. 32

**Kunci: D**

**Pembahasan:**
- r = 2. U₆ = 1 × 2⁵ = **32**. Cek: 1, 2, 4, 8, 16, **32**.
- **A. 16** → salah; itu U₅.
- **B. 24** → salah; aritmetika dengan beda 8.
- **C. 64** → salah; itu U₇.
- **D. 32** → BENAR.

---

**24.** Diketahui barisan geometri: 3, 9, 27, ..., U₇ = ....
- A. 729
- B. 243
- C. 2.187
- D. 6.561

**Kunci: C**

**Pembahasan:**
- r = 3. U₇ = 3 × 3⁶ = 3⁷ = **2.187**. Cek: 3, 9, 27, 81, 243, 729, **2.187**.
- **A. 729** → salah; itu U₆.
- **B. 243** → salah; itu U₅.
- **C. 2.187** → BENAR.
- **D. 6.561** → salah; itu U₈ atau pangkat n.

---

**25.** Suku pertama 4, U₃ = 100. Maka rasio (positif) adalah ....
- A. 5
- B. 4
- C. 25
- D. 10

**Kunci: A**

**Pembahasan:**
- U₃ = U₁ × r² → 100 = 4 × r² → r² = 25 → r = **5**.
- **A. 5** → BENAR.
- **B. 4** → salah; tebakan dari U₁ = 4.
- **C. 25** → salah; itu r² (lupa akar).
- **D. 10** → salah; setengah dari 20 tebakan.

---

**26.** Sebuah bola dijatuhkan dari ketinggian 80 cm. Tiap memantul tingginya menjadi ½ dari sebelumnya. Tinggi bola setelah pantulan ke-3 adalah ....
- A. 40 cm
- B. 10 cm
- C. 20 cm
- D. 5 cm

**Kunci: B**

**Pembahasan:**
- U₁ (sebelum pantul) = 80; setelah pantulan ke-1 = 40; ke-2 = 20; ke-3 = **10 cm**.
- Atau pakai rumus: tinggi setelah pantul ke-n = 80 × (½)ⁿ = 80 × (½)³ = 80 ÷ 8 = 10.
- **A. 40 cm** → salah; setelah pantulan ke-1.
- **B. 10 cm** → BENAR.
- **C. 20 cm** → salah; setelah pantulan ke-2.
- **D. 5 cm** → salah; setelah pantulan ke-4.

---

**27.** U₃ = 8 dan U₅ = 32. Rasio (positif) adalah ....
- A. 4
- B. 16
- C. 8
- D. 2

**Kunci: D**

**Pembahasan:**
- U₅ ÷ U₃ = r² = 32 ÷ 8 = 4 → r = **2**.
- **A. 4** → salah; itu r².
- **B. 16** → salah; mengira rasio dari 32−8 = 24, atau 32+8 = 40 / 2.
- **C. 8** → salah; itu U₃.
- **D. 2** → BENAR.

---

**28.** Suku ke-4 dari 2, 6, 18, 54, ... adalah ....
- A. 162
- B. 108
- C. 54
- D. 27

**Kunci: C**

**Pembahasan:**
- Suku-sukunya sudah ditampilkan: 2, 6, 18, **54**. Suku ke-4 = **54**.
- **A. 162** → salah; itu U₅.
- **B. 108** → salah; 54 × 2 (rasio salah).
- **C. 54** → BENAR.
- **D. 27** → salah; setengah dari 54.

---

**29.** Pada barisan geometri, U₁ = 1, U₄ = 64. Maka rasio positif adalah ....
- A. 4
- B. 16
- C. 2
- D. 8

**Kunci: A**

**Pembahasan:**
- U₄ = U₁ × r³ → 64 = 1 × r³ → r³ = 64 → r = ∛64 = **4**.
- **A. 4** → BENAR.
- **B. 16** → salah; itu r² jika dipikirkan U₃.
- **C. 2** → salah; r³ = 64 disangka r⁶ = 64 dengan r=2.
- **D. 8** → salah; akar 64 (akar kuadrat, bukan kubik).

---

**30.** Dalam barisan 3, 6, 12, 24, 48, ..., suku ke-8 adalah ....
- A. 96
- B. 384
- C. 192
- D. 768

**Kunci: B**

**Pembahasan:**
- r = 2. U₈ = 3 × 2⁷ = 3 × 128 = **384**. Cek lanjut: ..., 48, 96, 192, **384**.
- **A. 96** → salah; itu U₆.
- **B. 384** → BENAR.
- **C. 192** → salah; itu U₇.
- **D. 768** → salah; itu U₉.

---

**31.** Suatu sel membelah tiap 20 menit. Mula-mula 1 sel. Setelah 1 jam ada berapa sel?
- A. 3
- B. 4
- C. 16
- D. 8

**Kunci: D**

**Pembahasan:**
- 1 jam = 60 menit = 3 × 20 menit, jadi 3 pembelahan. Jumlah = 1 × 2³ = **8**.
- Cek: t=0: 1; t=20: 2; t=40: 4; t=60: **8**.
- **A. 3** → salah; mengira penambahan aritmetika (+1 tiap 20 menit).
- **B. 4** → salah; menghitung 2 pembelahan saja.
- **C. 16** → salah; menghitung 4 pembelahan (pangkat n bukan n−1 jika hitung salah).
- **D. 8** → BENAR.

---

**32.** Suku U₂ = 6, U₄ = 24. Rasio (positif) = ....
- A. 2
- B. 4
- C. 6
- D. 3

**Kunci: A**

**Pembahasan:**
- U₄ ÷ U₂ = r² = 24 ÷ 6 = 4 → r = **2**.
- **A. 2** → BENAR.
- **B. 4** → salah; itu r².
- **C. 6** → salah; itu U₂.
- **D. 3** → salah; setengah dari 6 atau tebakan.

---

**33.** Diketahui U₁ = 5, r = 4. Maka U₃ adalah ....
- A. 20
- B. 60
- C. 80
- D. 320

**Kunci: C**

**Pembahasan:**
- U₃ = 5 × 4² = 5 × 16 = **80**.
- **A. 20** → salah; itu U₂ (5 × 4).
- **B. 60** → tebakan tengah.
- **C. 80** → BENAR.
- **D. 320** → salah; itu U₄ atau pangkat berlebih (5 × 4³).

---

**34.** Suku ke-5 dari barisan 1.000, 100, 10, 1, ... adalah ....
- A. 0,2
- B. 0,1
- C. 0,5
- D. 0,01

**Kunci: B**

**Pembahasan:**
- r = 1/10. U₅ = 1.000 × (1/10)⁴ = 1.000 ÷ 10.000 = **0,1**. Cek: 1.000, 100, 10, 1, **0,1**.
- **A. 0,2** → salah; tebakan pecahan.
- **B. 0,1** → BENAR.
- **C. 0,5** → salah; setengah dari 1.
- **D. 0,01** → salah; itu U₆.

---

**35.** Pada barisan 5, 10, 20, 40, ..., suku berapa yang nilainya 320?
- A. 5
- B. 8
- C. 6
- D. 7

**Kunci: D**

**Pembahasan:**
- r = 2. U₁ = 5. Cek: 5, 10, 20, 40, 80, 160, **320**. Suku ke-**7**.
- Atau: 320 = 5 × 2^(n−1) → 64 = 2^(n−1) → n−1 = 6 → n = **7**.
- **A. 5** → salah; mengira pangkat = 5.
- **B. 8** → salah; menghitung lebih satu (off-by-one).
- **C. 6** → salah; menghitung kurang satu.
- **D. 7** → BENAR.

---

**36.** U₁ = 3, r = 3. U₅ = ....
- A. 81
- B. 27
- C. 243
- D. 729

**Kunci: C**

**Pembahasan:**
- U₅ = 3 × 3⁴ = 3⁵ = **243**.
- **A. 81** → salah; itu U₄.
- **B. 27** → salah; itu U₃.
- **C. 243** → BENAR.
- **D. 729** → salah; itu U₆ (pangkat n bukan n−1).

---

**37.** Dari barisan 2, 8, 32, ..., U₄ = ....
- A. 64
- B. 128
- C. 96
- D. 256

**Kunci: B**

**Pembahasan:**
- r = 8 ÷ 2 = 4. U₄ = 32 × 4 = **128**. Atau 2 × 4³ = 128.
- **A. 64** → salah; rasio 2, 32 × 2 = 64.
- **B. 128** → BENAR.
- **C. 96** → tebakan; 32 + 64 = 96 (aritmetika).
- **D. 256** → salah; itu U₅.

---

**38.** Suku ke-4 barisan geometri = 54 dan U₁ = 2. Rasio positif = ....
- A. 3
- B. 9
- C. 27
- D. 6

**Kunci: A**

**Pembahasan:**
- U₄ = U₁ × r³ → 54 = 2 × r³ → r³ = 27 → r = **3**.
- **A. 3** → BENAR.
- **B. 9** → salah; itu r².
- **C. 27** → salah; itu r³ (lupa akar kubik).
- **D. 6** → salah; tebakan rata 3 dan 9.

---

**39.** Suku ke-6 dari barisan 1, ½, ¼, ⅛, ... adalah ....
- A. 1/16
- B. 1/8
- C. 1/64
- D. 1/32

**Kunci: D**

**Pembahasan:**
- r = ½. U₆ = 1 × (½)⁵ = **1/32**. Cek: 1, ½, ¼, ⅛, 1/16, **1/32**.
- **A. 1/16** → salah; itu U₅.
- **B. 1/8** → salah; itu U₄.
- **C. 1/64** → salah; itu U₇.
- **D. 1/32** → BENAR.

---

**40.** Diketahui U₁ = 7, U₂ = 21. Maka U₄ = ....
- A. 84
- B. 63
- C. 189
- D. 567

**Kunci: C**

**Pembahasan:**
- r = 21 ÷ 7 = 3. U₄ = 7 × 3³ = 7 × 27 = **189**. Cek: 7, 21, 63, **189**.
- **A. 84** → salah; aritmetika 21 + (3×21).
- **B. 63** → salah; itu U₃.
- **C. 189** → BENAR.
- **D. 567** → salah; itu U₅.

---

**41.** Sebuah tabungan ditambah 2 kali lipat setiap tahun. Jika tahun ke-1 tabungannya Rp1.000, maka tahun ke-5 tabungannya ....
- A. Rp16.000
- B. Rp10.000
- C. Rp8.000
- D. Rp32.000

**Kunci: A**

**Pembahasan:**
- Anggap U₁ = 1.000 untuk tahun ke-1. Tahun ke-5 = U₅ = 1.000 × 2⁴ = **Rp16.000**.
- Cek: thn1 = 1.000, thn2 = 2.000, thn3 = 4.000, thn4 = 8.000, thn5 = **16.000**.
- **A. Rp16.000** → BENAR.
- **B. Rp10.000** → salah; aritmetika kelipatan 2.000.
- **C. Rp8.000** → salah; itu tahun ke-4.
- **D. Rp32.000** → salah; itu tahun ke-6, pangkat n bukan n−1.

---

**42.** Rasio barisan 1, ⅓, 1/9, ... adalah ....
- A. 3
- B. 1/3
- C. 1/9
- D. −3

**Kunci: B**

**Pembahasan:**
- r = ⅓ ÷ 1 = **1/3**. Cek: 1 × ⅓ = ⅓ ✓ ; ⅓ × ⅓ = 1/9 ✓.
- **A. 3** → salah; arah terbalik (jika 1/9, ⅓, 1 maka r = 3).
- **B. 1/3** → BENAR.
- **C. 1/9** → salah; itu U₃.
- **D. −3** → salah; tidak ada tanda berganti.

---

**43.** Suku U₃ dari barisan 2, −6, 18, −54, ... adalah ....
- A. −18
- B. 6
- C. 18
- D. −6

**Kunci: C**

**Pembahasan:**
- Suku ke-3 ditampilkan langsung: 2, −6, **18**, −54.
- **A. −18** → salah; lupa lihat barisan langsung, salah tanda.
- **B. 6** → salah; lupa tanda lalu salah suku.
- **C. 18** → BENAR.
- **D. −6** → salah; itu U₂.

---

**44.** Pada barisan geometri, U₂ = 4 dan U₆ = 64. Tentukan U₁ (untuk r positif)!
- A. 1
- B. 4
- C. 8
- D. 2

**Kunci: D**

**Pembahasan:**
- U₆ ÷ U₂ = r⁴ = 16 → r = 2.
- U₁ = U₂ ÷ r = 4 ÷ 2 = **2**.
- **A. 1** → salah; jika r dianggap 4.
- **B. 4** → salah; itu U₂ langsung.
- **C. 8** → salah; tebakan tengah.
- **D. 2** → BENAR.

---

**45.** Suku ke-5 dari 5, 15, 45, 135, ... adalah ....
- A. 270
- B. 405
- C. 540
- D. 1.215

**Kunci: B**

**Pembahasan:**
- r = 3. U₅ = 135 × 3 = **405**.
- **A. 270** → salah; 135 × 2.
- **B. 405** → BENAR.
- **C. 540** → tebakan.
- **D. 1.215** → salah; itu U₆.

---

**46.** Jika U₁ = 10 dan r = 1, maka barisan 10, 10, 10, 10, ... U₈ = ....
- A. 10
- B. 80
- C. 1
- D. 100

**Kunci: A**

**Pembahasan:**
- Rasio 1 berarti semua suku sama dengan U₁. U₈ = **10**.
- **A. 10** → BENAR.
- **B. 80** → salah; aritmetika 10 × 8.
- **C. 1** → salah; mengira rasio = nilai akhir.
- **D. 100** → salah; mengira pangkat dilipat.

---

**47.** Suku U₁ = 64 dan r = ½. Suku ke-7 = ....
- A. 4
- B. 2
- C. 1
- D. 1/2

**Kunci: C**

**Pembahasan:**
- U₇ = 64 × (½)⁶ = 64 ÷ 64 = **1**. Cek: 64, 32, 16, 8, 4, 2, **1**.
- **A. 4** → salah; itu U₅.
- **B. 2** → salah; itu U₆.
- **C. 1** → BENAR.
- **D. 1/2** → salah; itu U₈.

---

**48.** Suatu obat dalam tubuh berkurang setengah setiap 4 jam. Jika awal ada 800 mg, setelah 12 jam tersisa ....
- A. 200 mg
- B. 50 mg
- C. 400 mg
- D. 100 mg

**Kunci: D**

**Pembahasan:**
- 12 jam = 3 × 4 jam → 3 kali peluruhan. Sisa = 800 × (½)³ = 800 ÷ 8 = **100 mg**.
- Cek: 0 jam = 800; 4 jam = 400; 8 jam = 200; 12 jam = **100**.
- **A. 200 mg** → salah; setelah 8 jam.
- **B. 50 mg** → salah; setelah 16 jam (1 peluruhan berlebih).
- **C. 400 mg** → salah; setelah 4 jam saja.
- **D. 100 mg** → BENAR.

---

**49.** U₃ = 12 dan U₅ = 48. Maka U₁ (untuk r positif) = ....
- A. 4
- B. 3
- C. 6
- D. 2

**Kunci: B**

**Pembahasan:**
- U₅ ÷ U₃ = r² = 4 → r = 2.
- U₁ = U₃ ÷ r² = 12 ÷ 4 = **3**.
- **A. 4** → salah; mengira r².
- **B. 3** → BENAR.
- **C. 6** → salah; U₂ = U₃ ÷ r = 6 (salah turun satu).
- **D. 2** → salah; r-nya, bukan U₁.

---

**50.** Suku ke-4 dari barisan 1, 7, 49, ... adalah ....
- A. 343
- B. 196
- C. 392
- D. 2.401

**Kunci: A**

**Pembahasan:**
- r = 7. U₄ = 1 × 7³ = **343**.
- **A. 343** → BENAR.
- **B. 196** → salah; 49 × 4.
- **C. 392** → tebakan; 49 × 8.
- **D. 2.401** → salah; itu U₅ (7⁴).

---

### B. SOAL TINGKAT PROVINSI (Soal 51–80)

**51.** Diketahui U₂ = 12 dan U₅ = 324 pada barisan geometri. U₈ adalah ....
- A. 729
- B. 2.916
- C. 8.748
- D. 26.244

**Kunci: C**

**Pembahasan:**
- U₅ ÷ U₂ = r³ = 27 → r = 3.
- U₁ = U₂ ÷ r = 12 ÷ 3 = 4.
- U₈ = 4 × 3⁷ = 4 × 2.187 = **8.748**.
- **A. 729** → salah; itu 3⁶.
- **B. 2.916** → salah; itu U₇ (4 × 3⁶ ÷ 3 ... atau salah index).
- **C. 8.748** → BENAR.
- **D. 26.244** → salah; itu U₉.

---

**52.** Penduduk sebuah kota tahun 2020 adalah 50.000 jiwa. Penduduk bertambah 25% tiap 5 tahun (geometris). Penduduk tahun 2030 ≈ ....
- A. 78.125
- B. 62.500
- C. 75.000
- D. 100.000

**Kunci: A**

**Pembahasan:**
- 2030 − 2020 = 10 tahun = 2 periode pertumbuhan. r = 1,25.
- Penduduk 2030 = 50.000 × (1,25)² = 50.000 × 1,5625 = **78.125**.
- **A. 78.125** → BENAR.
- **B. 62.500** → salah; cuma 1 periode (50.000 × 1,25).
- **C. 75.000** → salah; bunga sederhana 50.000 + 25.000.
- **D. 100.000** → salah; mengira berlipat 2× setiap periode.

---

**53.** Pada barisan 4, 12, 36, 108, ..., suku ke berapa yang nilainya 8.748?
- A. 6
- B. 5
- C. 7
- D. 8

**Kunci: D**

**Pembahasan:**
- r = 3. U₁ = 4. 8.748 = 4 × 3^(n−1) → 3^(n−1) = 2.187 = 3⁷ → n−1 = 7 → n = **8**.
- Cek: 4, 12, 36, 108, 324, 972, 2.916, **8.748**.
- **A. 6** → salah; itu nilai 972.
- **B. 5** → salah; nilai 324.
- **C. 7** → salah; nilai 2.916 (off-by-one).
- **D. 8** → BENAR.

---

**54.** Tiga suku berurutan barisan geometri membentuk 5x, 15x, 45x. Jika U₅ = 405, maka x = ....
- A. 3
- B. 1
- C. 5
- D. 9

**Kunci: B**

**Pembahasan:**
- r = 15x ÷ 5x = 3. U₁ = 5x.
- U₅ = 5x × 3⁴ = 5x × 81 = 405x. 405x = 405 → x = **1**.
- **A. 3** → salah; mengira x = r.
- **B. 1** → BENAR.
- **C. 5** → salah; mengira x = U₁.
- **D. 9** → salah; tebakan dari 3² atau 81÷9.

---

**55.** Suku tengah barisan geometri 3 suku adalah 18. Jika rasio = 3, suku pertama dan ketiga adalah ....
- A. 5 dan 60
- B. 9 dan 36
- C. 6 dan 54
- D. 3 dan 108

**Kunci: C**

**Pembahasan:**
- U₂ = 18, r = 3. U₁ = U₂ ÷ r = 18 ÷ 3 = **6**. U₃ = U₂ × r = 18 × 3 = **54**.
- Cek: 6, 18, 54 — rasio 3 ✓.
- **A. 5 dan 60** → salah; aritmetika ngawur.
- **B. 9 dan 36** → salah; bagi/kali dengan 2 bukan 3.
- **C. 6 dan 54** → BENAR.
- **D. 3 dan 108** → salah; bagi/kali dengan 6 (kuadratnya).

---

**56.** Bola dijatuhkan dari ketinggian h dan tiap pantulan tingginya jadi ⅗ sebelumnya. Setelah pantulan ke-3, bola mencapai 27 cm. Tinggi semula (h) = ....
- A. 100 cm
- B. 75 cm
- C. 200 cm
- D. 125 cm

**Kunci: D**

**Pembahasan:**
- Tinggi setelah pantul ke-3 = h × (⅗)³ = h × 27/125 = 27 → h = 27 × 125/27 = **125 cm**.
- Cek: 125 → 75 → 45 → **27** ✓.
- **A. 100 cm** → salah; tebakan bulat.
- **B. 75 cm** → salah; setelah 1 pantulan saja.
- **C. 200 cm** → salah; tebakan dengan rasio ½.
- **D. 125 cm** → BENAR.

---

**57.** Diketahui U₁ + U₃ = 50 dan rasio = 3. Tentukan U₁!
- A. 5
- B. 10
- C. 25
- D. 2

**Kunci: A**

**Pembahasan:**
- U₃ = U₁ × r² = 9U₁. Jadi U₁ + 9U₁ = 10U₁ = 50 → U₁ = **5**.
- **A. 5** → BENAR.
- **B. 10** → salah; mengira U₁ × 2 + U₁ × 3 = 5U₁.
- **C. 25** → salah; setengah dari 50 langsung.
- **D. 2** → salah; tebakan kecil dari 50 ÷ 25.

---

**58.** Suku ke-3 dan ke-7 berbanding 1 : 16. Berapa rasio (positif) barisan tersebut?
- A. 4
- B. √2
- C. 16
- D. 2

**Kunci: B**

**Pembahasan:**
- U₇ ÷ U₃ = r⁴ = 16 → r = ∜16 = **2**... tunggu, ∜16 = 2. Tapi opsi B = √2 dan D = 2. r = **2**.

Maaf, perbaikan: U₇/U₃ = r^(7−3) = r⁴ = 16 → r⁴ = 16 → r = 2.

- **A. 4** → salah; r² = 16 jika dipikir hanya 2 langkah.
- **B. √2** → salah; jika dipikir r⁸ = 16.
- **C. 16** → salah; r itu sendiri 16 (lupa pangkat).
- **D. 2** → BENAR (r⁴ = 16 → r = 2).

**Kunci diperbarui: D** ... Mohon maaf, ini kesalahan. Untuk konsistensi balanced, soal **58** kuncinya **D**, tetapi rencana awal saya menetapkan B di posisi 58. Saya akan ubah pembahasan agar pertanyaan menghasilkan B = 2.

Versi final soal **58:**

**58.** Suku ke-3 dan ke-7 berbanding 1 : 16. Berapa rasio (positif) barisan tersebut?
- A. 4
- B. 2
- C. 16
- D. √2

**Kunci: B**

**Pembahasan:**
- U₇ ÷ U₃ = r⁴ = 16 → r = ∜16 = **2**.
- **A. 4** → salah; mengira r² = 16.
- **B. 2** → BENAR.
- **C. 16** → salah; menganggap rasio = perbandingan langsung.
- **D. √2** → salah; mengira r⁸ = 16.

---

**59.** Tiga bilangan membentuk barisan geometri. Jumlahnya 26 dan hasil kalinya 216. Bilangan terkecil = ....
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: C**

**Pembahasan:**
- Misalkan bilangan a/r, a, a × r. Hasil kali = a³ = 216 → a = 6. Jumlah = a/r + a + ar = 26.
- 6/r + 6 + 6r = 26 → 6/r + 6r = 20 → 6 + 6r² = 20r → 6r² − 20r + 6 = 0 → 3r² − 10r + 3 = 0.
- r = [10 ± √(100−36)] / 6 = [10 ± 8]/6 → r = 3 atau r = 1/3.
- Untuk r = 3: bilangannya **2, 6, 18**. Untuk r = 1/3: bilangannya 18, 6, 2 (sama, urutan terbalik).
- Bilangan terkecil = **2**.
- **A. 1** → salah; tebakan.
- **B. 3** → salah; itu rasio.
- **C. 2** → BENAR.
- **D. 4** → salah; tebakan.

---

**60.** U₁ = 5, r = 2. Suku ke berapa yang nilainya pertama kali melebihi 1.000?
- A. 9
- B. 8
- C. 10
- D. 11

**Kunci: A**

**Pembahasan:**
- Cek: 5, 10, 20, 40, 80, 160, 320, 640, **1.280**, 2.560.
- Suku ke-9 = 1.280 > 1.000. Suku ke-8 = 640 < 1.000.
- Jadi **n = 9**.
- **A. 9** → BENAR.
- **B. 8** → salah; nilai masih 640.
- **C. 10** → salah; sudah berlebih.
- **D. 11** → salah; jauh berlebih.

---

**61.** Suku ke-2 dan ke-5 berbeda 56. Jika r = 3 dan U₁ positif, maka U₁ = ....
- A. 1
- B. 2
- C. 3
- D. 7/12

**Kunci: D**

**Pembahasan:**
- U₅ − U₂ = U₁ × r⁴ − U₁ × r = U₁(81 − 3) = 78 U₁ = 56 → U₁ = 56/78 = **28/39**.

Hmm 28/39 tidak ada di opsi. Mari perbaiki: dengan r = 3 dan U₁ harus bilangan bulat sederhana, pilih beda yang pas. Saya akan revisi: ganti beda jadi 78 supaya U₁ = 1.

Versi final soal **61:**

**61.** Suku ke-2 dan ke-5 berbeda 78. Jika r = 3, maka U₁ positif adalah ....
- A. 2
- B. 3
- C. 7
- D. 1

**Kunci: D**

**Pembahasan:**
- U₅ − U₂ = U₁(r⁴ − r) = U₁(81 − 3) = 78 U₁ = 78 → U₁ = **1**.
- Cek: 1, 3, 9, 27, 81. Beda U₅ − U₂ = 81 − 3 = 78 ✓.
- **A. 2** → salah; tebakan.
- **B. 3** → salah; itu rasio.
- **C. 7** → salah; tebakan.
- **D. 1** → BENAR.

---

**62.** Dalam barisan geometri, U₃ = 18 dan U₇ = 1.458. Rasio positifnya = ....
- A. 9
- B. 3
- C. 81
- D. 27

**Kunci: B**

**Pembahasan:**
- U₇ ÷ U₃ = r⁴ = 1.458 ÷ 18 = 81 → r = ∜81 = **3**.
- **A. 9** → salah; itu r².
- **B. 3** → BENAR.
- **C. 81** → salah; itu r⁴.
- **D. 27** → salah; itu r³.

---

**63.** Tabungan Ahmad Rp2.000.000 dibungakan majemuk 10% per tahun. Saldo setelah 3 tahun = ....
- A. Rp2.600.000
- B. Rp2.420.000
- C. Rp2.662.000
- D. Rp3.000.000

**Kunci: C**

**Pembahasan:**
- Saldo = 2.000.000 × 1,1³ = 2.000.000 × 1,331 = **Rp2.662.000**.
- Cek: thn1 = 2.200.000; thn2 = 2.420.000; thn3 = **2.662.000**.
- **A. Rp2.600.000** → salah; bunga sederhana 3 × 200.000.
- **B. Rp2.420.000** → salah; setelah 2 tahun.
- **C. Rp2.662.000** → BENAR.
- **D. Rp3.000.000** → salah; tebakan bulat.

---

**64.** Diketahui U₂ + U₄ = 30 dan rasio = 2. U₁ = ....
- A. 3
- B. 5
- C. 6
- D. 1

**Kunci: A**

**Pembahasan:**
- U₂ = 2 U₁ ; U₄ = 8 U₁. Jumlah = 10 U₁ = 30 → U₁ = **3**.
- Cek: 3, 6, 12, 24. U₂ + U₄ = 6 + 24 = 30 ✓.
- **A. 3** → BENAR.
- **B. 5** → salah; tebakan dari (30 ÷ 6).
- **C. 6** → salah; itu U₂.
- **D. 1** → salah; tebakan kecil.

---

**65.** Suatu barisan geometri tak hingga: 4, 2, 1, ½, ... Suku ke-10 adalah ....
- A. 1/256
- B. 1/128
- C. 1/512
- D. 1/64

**Kunci: B**

**Pembahasan:**
- r = ½. U₁₀ = 4 × (½)⁹ = 4 ÷ 512 = **1/128**.
- **A. 1/256** → salah; 4 × (½)¹⁰ = 1/256 (off-by-one, pakai n bukan n−1).
- **B. 1/128** → BENAR.
- **C. 1/512** → salah; (½)⁹ tanpa kalikan 4.
- **D. 1/64** → salah; itu U₉.

---

**66.** Pada barisan geometri, U₄ : U₂ = 9 : 1. Jika U₁ = 5, maka U₆ = ....
- A. 1.215
- B. 729
- C. 135
- D. 405

**Kunci: D**

**Pembahasan:**
- U₄ ÷ U₂ = r² = 9 → r = 3 (positif).
- U₆ = U₁ × r⁵ = 5 × 243 = **1.215**.

Tunggu, kunci ditetapkan D di posisi ini. 1.215 tidak D. Mari perbaiki opsi atau soalnya.

Versi final soal **66:**

**66.** Pada barisan geometri, U₄ : U₂ = 9 : 1. Jika U₁ = 5, maka U₅ = ....
- A. 1.215
- B. 729
- C. 135
- D. 405

**Kunci: D**

**Pembahasan:**
- U₄ ÷ U₂ = r² = 9 → r = 3.
- U₅ = U₁ × r⁴ = 5 × 81 = **405**.
- **A. 1.215** → salah; itu U₆.
- **B. 729** → salah; itu 3⁶ tanpa kalikan 5.
- **C. 135** → salah; itu U₄.
- **D. 405** → BENAR.

---

**67.** Barisan geometri memiliki U₂ × U₄ = 144 dan rasio 2. Maka U₃ = ....
- A. 12
- B. 6
- C. 24
- D. 8

**Kunci: A**

**Pembahasan:**
- Di barisan geometri, U₂ × U₄ = U₃² (sifat suku tengah).
- U₃² = 144 → U₃ = **12** (positif).
- Cek: r = 2, U₃ = 12 → U₂ = 6, U₄ = 24. 6 × 24 = 144 ✓.
- **A. 12** → BENAR.
- **B. 6** → salah; itu U₂.
- **C. 24** → salah; itu U₄.
- **D. 8** → salah; tebakan akar lain.

---

**68.** Suatu barisan geometri 7 suku, U₁ = 2 dan U₇ = 128. Tentukan U₄!
- A. 8
- B. 32
- C. 16
- D. 64

**Kunci: C**

**Pembahasan:**
- U₇ = U₁ × r⁶ → 128 = 2 × r⁶ → r⁶ = 64 → r = 2.
- U₄ = U₁ × r³ = 2 × 8 = **16**.
- Cek: 2, 4, 8, 16, 32, 64, 128 ✓.
- **A. 8** → salah; itu U₃.
- **B. 32** → salah; itu U₅.
- **C. 16** → BENAR.
- **D. 64** → salah; itu U₆.

---

**69.** Sebuah perusahaan mempekerjakan 100 karyawan, tambah 20% per tahun (geometri). Setelah 2 tahun, jumlah karyawan = ....
- A. 140
- B. 120
- C. 200
- D. 144

**Kunci: D**

**Pembahasan:**
- Karyawan setelah 2 tahun = 100 × (1,2)² = 100 × 1,44 = **144**.
- Cek: thn0 = 100; thn1 = 120; thn2 = **144**.
- **A. 140** → salah; bunga sederhana 100 + 2 × 20 = 140.
- **B. 120** → salah; setelah 1 tahun saja.
- **C. 200** → salah; mengira 2× lipat.
- **D. 144** → BENAR.

---

**70.** Diketahui barisan 2, 6, 18, ..., 4.374. Banyak suku barisan tersebut adalah ....
- A. 6
- B. 8
- C. 7
- D. 9

**Kunci: B**

**Pembahasan:**
- r = 3. Uₙ = 2 × 3^(n−1) = 4.374 → 3^(n−1) = 2.187 = 3⁷ → n−1 = 7 → n = **8**.
- Cek: 2, 6, 18, 54, 162, 486, 1.458, **4.374**.
- **A. 6** → salah; itu nilai 486.
- **B. 8** → BENAR.
- **C. 7** → salah; off-by-one.
- **D. 9** → salah; berlebih.

---

**71.** Tiga bilangan a, b, c membentuk barisan geometri. Jika a + b + c = 14 dan b = 4, maka a = (a < c) ....
- A. 2
- B. 8
- C. 6
- D. 1

**Kunci: A**

**Pembahasan:**
- a + 4 + c = 14 → a + c = 10. Sifat geometri: ac = b² = 16.
- a dan c akar persamaan x² − 10x + 16 = 0 → x = (10 ± 6)/2 → x = 8 atau 2.
- Karena a < c: a = **2**, c = 8. Rasio = 2.
- **A. 2** → BENAR.
- **B. 8** → salah; itu c.
- **C. 6** → salah; setengah dari 12, tebakan.
- **D. 1** → salah; tebakan kecil.

---

**72.** Sebuah bola memantul dari 80 cm dengan rasio pantul ¾. Total tinggi setelah pantulan ke-1, 2, dan 3 dijumlahkan = ....
- A. 105 cm
- B. 60 cm
- C. 135 cm
- D. 142,5 cm

**Kunci: D**

**Pembahasan:**
- Pantul 1 = 80 × ¾ = 60 ; Pantul 2 = 60 × ¾ = 45 ; Pantul 3 = 45 × ¾ = 33,75.
- Jumlah = 60 + 45 + 33,75 = **138,75**.

Hmm 138,75 tidak D. Ada error. Mari periksa: 80 × ¾ = 60. 60 × ¾ = 45. 45 × ¾ = 33,75. Total = 138,75. Mari perbaiki opsi:

Versi final soal **72:**

**72.** Sebuah bola memantul dari 80 cm dengan rasio pantul ¾. Total tinggi setelah pantulan ke-1, 2, dan 3 dijumlahkan = ....
- A. 105 cm
- B. 60 cm
- C. 135 cm
- D. 138,75 cm

**Kunci: D**

**Pembahasan:**
- Pantul 1 = 80 × ¾ = 60 cm. Pantul 2 = 60 × ¾ = 45 cm. Pantul 3 = 45 × ¾ = 33,75 cm.
- Jumlah = 60 + 45 + 33,75 = **138,75 cm**.
- **A. 105 cm** → salah; hanya menjumlah dua pantul terakhir + asal-asalan.
- **B. 60 cm** → salah; pantul 1 saja.
- **C. 135 cm** → salah; lupa pecahan 33,75 dibulatkan jadi 30.
- **D. 138,75 cm** → BENAR.

---

**73.** Pada barisan geometri, hasil kali suku ke-1, ke-3, dan ke-5 adalah 1.000. Suku ke-3 adalah ....
- A. 5
- B. 100
- C. 10
- D. 50

**Kunci: C**

**Pembahasan:**
- U₁ × U₃ × U₅ = (U₁ × r²)³ jika ditata = U₃³ (karena U₁ × U₅ = U₃² berdasarkan sifat suku tengah).
- Jadi U₃³ = 1.000 → U₃ = ∛1.000 = **10**.
- **A. 5** → salah; setengah dari 10, tebakan.
- **B. 100** → salah; itu U₃² atau salah akar.
- **C. 10** → BENAR.
- **D. 50** → salah; 100 ÷ 2 tebakan.

---

**74.** Penduduk kota A = 81.000 ; penduduk berkurang ⅓ tiap 10 tahun. Setelah 30 tahun, penduduknya = ....
- A. 27.000
- B. 24.000
- C. 9.000
- D. 18.000

**Kunci: B**

**Pembahasan:**
- "Berkurang ⅓" berarti tersisa ⅔. Setelah 30 tahun = 3 × 10 tahun = 3 periode.
- Sisa = 81.000 × (⅔)³ = 81.000 × 8/27 = **24.000**.
- Cek: 81.000 × ⅔ = 54.000; 54.000 × ⅔ = 36.000; 36.000 × ⅔ = **24.000**.
- **A. 27.000** → salah; mengira tersisa ⅓ tiap periode: 81.000 × (⅓)¹ = 27.000.
- **B. 24.000** → BENAR.
- **C. 9.000** → salah; 81.000 × (⅓)² = 9.000 (salah arti "berkurang").
- **D. 18.000** → salah; setengah dari 36.000 tebakan.

---

**75.** Diketahui U₁ + U₂ = 6 dan U₃ + U₄ = 24 dalam barisan geometri. Rasio positifnya = ....
- A. 3
- B. 4
- C. 2
- D. 6

**Kunci: C**

**Pembahasan:**
- U₃ + U₄ = U₁ × r² + U₂ × r² = (U₁ + U₂) × r² = 6r² = 24 → r² = 4 → r = **2**.
- **A. 3** → salah; mengira 6 × 3² = 54.
- **B. 4** → salah; itu r².
- **C. 2** → BENAR.
- **D. 6** → salah; tebakan dari U₁ + U₂.

---

**76.** Pada barisan geometri, U₁ = 3 dan U₆ − U₁ = 93. Maka rasio (bilangan bulat) = ....
- A. 2
- B. 3
- C. 4
- D. 5

**Kunci: A**

**Pembahasan:**
- U₆ = U₁ × r⁵ = 3 r⁵. U₆ − U₁ = 3(r⁵ − 1) = 93 → r⁵ − 1 = 31 → r⁵ = 32 → r = **2**.
- Cek: 3, 6, 12, 24, 48, 96. U₆ − U₁ = 96 − 3 = 93 ✓.
- **A. 2** → BENAR.
- **B. 3** → salah; 3⁵ = 243, jelas terlalu besar.
- **C. 4** → salah; 4⁵ = 1.024, terlalu besar.
- **D. 5** → salah; jauh berlebih.

---

**77.** Empat suku berurutan barisan geometri adalah p, q, r, 24 dengan p = 3. Maka q × r = ....
- A. 144
- B. 36
- C. 12
- D. 72

**Kunci: D**

**Pembahasan:**
- U₁ = 3, U₄ = 24. r³ = 24/3 = 8 → r = 2.
- q = U₂ = 6 ; r-suku = U₃ = 12. q × r = 6 × 12 = **72**.
- **A. 144** → salah; itu q × r-suku × 2 (tebakan).
- **B. 36** → salah; mengalikan 6 dengan rasio (6 × 6).
- **C. 12** → salah; itu U₃.
- **D. 72** → BENAR.

---

**78.** Diketahui dalam barisan geometri, U₃ = 18 dan jumlah U₁ + U₂ = 8. Rasio positif barisan ini = ....
- A. 4
- B. 3
- C. 2
- D. 6

**Kunci: B**

**Pembahasan:**
- U₃ = U₁ × r² = 18, dan U₁(1 + r) = 8.
- U₁ = 18/r². Substitusi: 18/r² × (1 + r) = 8 → 18(1+r) = 8r² → 8r² − 18r − 18 = 0 → 4r² − 9r − 9 = 0.
- r = (9 ± √(81 + 144))/8 = (9 ± 15)/8 → r = 3 atau r = −¾. Positif: r = **3**.
- Cek: r = 3, U₁ = 18/9 = 2; U₁ + U₂ = 2 + 6 = 8 ✓.
- **A. 4** → salah; tebakan dari 8/2.
- **B. 3** → BENAR.
- **C. 2** → salah; itu U₁.
- **D. 6** → salah; itu U₂.

---

**79.** Diketahui U₁ × U₃ × U₅ × U₇ × U₉ = 32. Maka U₅ = ....
- A. 2
- B. 4
- C. 8
- D. ∛32

**Kunci: A**

**Pembahasan:**
- Sifat: U₁ × U₉ = U₃ × U₇ = U₅² (suku tengah). Jadi hasil kali = U₅⁵ = 32 → U₅ = ⁵√32 = **2**.
- **A. 2** → BENAR.
- **B. 4** → salah; ⁵√32 disangka 4 (kuadrat dari 2).
- **C. 8** → salah; setengah dari 16.
- **D. ∛32** → salah; akar pangkat 3, harusnya pangkat 5.

---

**80.** Suatu barisan geometri positif dengan U₂ = 6 dan U₅ = 162. Berapa nilai U₁ + U₃?
- A. 24
- B. 12
- C. 20
- D. 30

**Kunci: C**

**Pembahasan:**
- U₅ ÷ U₂ = r³ = 27 → r = 3.
- U₁ = U₂/r = 6/3 = 2 ; U₃ = U₂ × r = 6 × 3 = 18.
- U₁ + U₃ = 2 + 18 = **20**.
- **A. 24** → salah; U₂ + U₃ = 6 + 18 = 24.
- **B. 12** → salah; mengira r = 2.
- **C. 20** → BENAR.
- **D. 30** → salah; salah pangkat.

---

### C. SOAL TINGKAT NASIONAL (Soal 81–100)

**81.** Tiga bilangan a, b, c membentuk barisan aritmetika dengan jumlah 24. Jika ditambah 1, 4, 9 ke masing-masing maka jadi barisan geometri. Tentukan nilai b!
- A. 6
- B. 7
- C. 9
- D. 8

**Kunci: D**

**Pembahasan:**
- Karena aritmetika: a + b + c = 24 dan b adalah rata-rata, b = 8. a + c = 16.
- Setelah ditambah: (a+1), (b+4), (c+9) = (a+1), 12, (c+9).
- Sifat geometri: 12² = (a+1)(c+9) → 144 = ac + 9a + c + 9.
- Karena aritmetika dengan b = 8: a = 8 − d, c = 8 + d. ac = 64 − d² ; 9a + c = 72 − 9d + 8 + d = 80 − 8d.
- 144 = 64 − d² + 80 − 8d + 9 = 153 − d² − 8d → d² + 8d − 9 = 0 → (d + 9)(d − 1) = 0 → d = 1 atau d = −9.
- Untuk d = 1: a = 7, b = **8**, c = 9. Tambah 1, 4, 9 → 8, 12, 18. Cek geometri: 12² = 144 ; 8 × 18 = 144 ✓.
- **A. 6** → salah; tebakan tengah.
- **B. 7** → salah; itu a.
- **C. 9** → salah; itu c.
- **D. 8** → BENAR.

---

**82.** Sebuah investasi tumbuh secara geometri. Setelah 2 tahun nilainya Rp4.840.000 ; setelah 4 tahun Rp5.856.400. Berapa nilai awalnya?
- A. Rp3.500.000
- B. Rp4.000.000
- C. Rp4.500.000
- D. Rp4.400.000

**Kunci: B**

**Pembahasan:**
- Misal U₁ = nilai awal (tahun 0), r = (1+bunga). U₃ = 4.840.000 (tahun 2 = setelah 2 tahun → 2 periode → U₃ dengan U₁ awal).
- U₅ = 5.856.400. r² = U₅/U₃ = 5.856.400/4.840.000 = 1,21 → r = 1,1.
- U₁ = U₃/r² = 4.840.000/1,21 = **4.000.000**.
- **A. Rp3.500.000** → salah; tebakan.
- **B. Rp4.000.000** → BENAR.
- **C. Rp4.500.000** → salah; bunga sederhana keliru.
- **D. Rp4.400.000** → salah; itu setelah 1 tahun.

---

**83.** Diberikan barisan geometri positif: U₂ = 6 ; U₅ + U₆ + U₇ = 4.374. Maka rasionya = ....
- A. 3
- B. 2
- C. 4
- D. 9

**Kunci: A**

**Pembahasan:**
- U₅ + U₆ + U₇ = U₅(1 + r + r²) = U₁ × r⁴ × (1 + r + r²) = 4.374.
- U₁ = U₂/r = 6/r. Maka (6/r) × r⁴ × (1+r+r²) = 6 r³ (1+r+r²) = 4.374 → r³(1+r+r²) = 729.
- Coba r = 3: 27 × (1+3+9) = 27 × 13 = 351. Tidak cocok.
- Coba lagi: r³ (1 + r + r²) = r³ + r⁴ + r⁵.
- r = 3: 27 + 81 + 243 = 351. Tidak 729.
- Mari hitung U₅, U₆, U₇ dengan r = 3, U₁ = 2: U₅ = 2 × 81 = 162; U₆ = 486; U₇ = 1.458. Jumlah = 2.106. Bukan 4.374.
- Coba r = 3, U₂ = 6, U₁ = 2 lebih spesifik. Hitung U₆+U₇+U₈: 486 + 1.458 + 4.374 = 6.318. Bukan.
- Coba r = 3 dengan soal "U₅+U₆+U₇" = 4.374. Hmm, 4.374 = 2 × 2.187 = 2 × 3⁷. Jika U₇ = 4.374 sendiri, U₁ = 2.

Mari saya sesuaikan soal. Sederhana: cukup minta U₂ = 6 dan U₇ = 4.374. r dipilih sehingga balanced.

Versi final soal **83:**

**83.** Diberikan barisan geometri positif: U₂ = 6 dan U₇ = 1.458. Tentukan rasionya!
- A. 3
- B. 6
- C. 2
- D. 9

**Kunci: A**

**Pembahasan:**
- U₇ ÷ U₂ = r⁵ = 1.458 ÷ 6 = 243 = 3⁵ → r = **3**.
- Cek: U₁ = 2, r = 3 → 2, 6, 18, 54, 162, 486, **1.458** ✓.
- **A. 3** → BENAR.
- **B. 6** → salah; itu U₂.
- **C. 2** → salah; itu U₁.
- **D. 9** → salah; itu r².

---

**84.** Tiga bilangan positif yang berbeda membentuk barisan geometri. Jumlah ketiganya adalah 21 dan hasil kalinya 216. Jumlah kuadrat ketiganya = ....
- A. 189
- B. 147
- C. 189
- D. 153

**Kunci: C**

**Pembahasan:**
- Misal: a/r, a, ar. Hasil kali = a³ = 216 → a = 6. Jumlah: 6/r + 6 + 6r = 21 → 6/r + 6r = 15 → 6 + 6r² = 15r → 2r² − 5r + 2 = 0 → r = 2 atau r = ½.
- Untuk r = 2: bilangannya 3, 6, 12. Jumlah kuadrat = 9 + 36 + 144 = **189**.
- Untuk r = ½: bilangannya 12, 6, 3 (sama, urutan terbalik) → 189.
- **A. 189** → BENAR (duplikat dengan C, opsi salah ketik).
- **B. 147** → salah; lupa kuadrat suku tengah.
- **C. 189** → BENAR.
- **D. 153** → salah; lupa salah satu suku.

Catatan: A dan C sama-sama 189 (typo intentional → memperjelas bahwa A dan C identik, jawaban C yang dipilih sebagai kunci).

**Revisi opsi untuk menghindari duplikat:**

**84.** Tiga bilangan positif yang berbeda membentuk barisan geometri. Jumlah ketiganya adalah 21 dan hasil kalinya 216. Jumlah kuadrat ketiganya = ....
- A. 441
- B. 147
- C. 189
- D. 153

**Kunci: C**

**Pembahasan:**
- Bilangannya 3, 6, 12 (dengan r = 2). Jumlah kuadrat = 9 + 36 + 144 = **189**.
- **A. 441** → salah; itu 21² (kuadrat dari jumlah).
- **B. 147** → salah; lupa 144 ditulis 100.
- **C. 189** → BENAR.
- **D. 153** → salah; 9 + 144 = 153, lupa 36.

---

**85.** Suatu barisan geometri memiliki U₃ = 12 dan U₆ = 96. Total U₁ + U₂ + U₃ + ... + U₈ = ....
- A. 750
- B. 765
- C. 758
- D. 762

**Kunci: D**

**Pembahasan:**
- r³ = 96/12 = 8 → r = 2. U₁ = U₃/r² = 12/4 = 3.
- Barisan: 3, 6, 12, 24, 48, 96, 192, 384.
- Jumlah = 3 + 6 + 12 + 24 + 48 + 96 + 192 + 384 = **765**.

Tunggu, kunci ditetapkan D di posisi 85. Mari periksa: 3+6=9 ; 9+12=21 ; 21+24=45 ; 45+48=93 ; 93+96=189 ; 189+192=381 ; 381+384=**765**. Jawaban tepatnya 765 = B.

Mari sesuaikan: rumus jumlah barisan geometri Sₙ = U₁(rⁿ−1)/(r−1) = 3(256−1)/1 = 765.

Untuk mempertahankan kunci D, mari ubah soal sedikit.

Versi final soal **85:**

**85.** Suatu barisan geometri memiliki U₃ = 12 dan U₆ = 96. Total U₁ + U₂ + ... + U₇ = ....
- A. 372
- B. 750
- C. 765
- D. 381

**Kunci: D**

**Pembahasan:**
- r³ = 96/12 = 8 → r = 2. U₁ = 12/4 = 3.
- Barisan 7 suku: 3, 6, 12, 24, 48, 96, 192.
- Jumlah = 3(2⁷ − 1)/(2−1) = 3 × 127 = **381**.
- **A. 372** → salah; lupa salah satu suku.
- **B. 750** → salah; tebakan 8 suku.
- **C. 765** → salah; jumlah 8 suku.
- **D. 381** → BENAR.

---

**86.** Dalam barisan geometri positif, U₁ + U₂ = 12 dan U₃ + U₄ = 108. Maka U₅ = ....
- A. 81
- B. 243
- C. 162
- D. 729

**Kunci: B**

**Pembahasan:**
- U₃ + U₄ = (U₁ + U₂) × r² = 12 r² = 108 → r² = 9 → r = 3.
- U₁(1 + r) = 12 → U₁ × 4 = 12 → U₁ = 3.
- U₅ = U₁ × r⁴ = 3 × 81 = **243**.
- **A. 81** → salah; itu 3⁴ tanpa kalikan U₁.
- **B. 243** → BENAR.
- **C. 162** → salah; 2 × 81 tebakan.
- **D. 729** → salah; itu U₆.

---

**87.** Diketahui barisan a, ar, ar², ar³, ... Jika a + ar = 4 dan ar² + ar³ = 36, maka rasio positifnya = ....
- A. 2
- B. 4
- C. 3
- D. 9

**Kunci: C**

**Pembahasan:**
- ar² + ar³ = r² (a + ar) = 4 r² = 36 → r² = 9 → r = **3**.
- **A. 2** → salah; tebakan dari (4/2).
- **B. 4** → salah; mengira r² = 4 (jumlah pertama).
- **C. 3** → BENAR.
- **D. 9** → salah; itu r².

---

**88.** Sebuah balon awalnya berisi 1.000 mL gas. Tiap jam volume berkurang 20%. Berapa volume sisa setelah 4 jam (dibulatkan 1 desimal)?
- A. 409,6 mL
- B. 200 mL
- C. 512 mL
- D. 640 mL

**Kunci: A**

**Pembahasan:**
- Tersisa 80% tiap jam, r = 0,8. Volume = 1.000 × 0,8⁴ = 1.000 × 0,4096 = **409,6 mL**.
- Cek: 1.000 → 800 → 640 → 512 → **409,6** ✓.
- **A. 409,6 mL** → BENAR.
- **B. 200 mL** → salah; bunga sederhana 1.000 − 4 × 200.
- **C. 512 mL** → salah; setelah 3 jam.
- **D. 640 mL** → salah; setelah 2 jam.

---

**89.** Diketahui dua barisan: barisan aritmetika a, b, c (jumlah 15) dan barisan geometri a, b−1, c−4. Tentukan c!
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- Aritmetika: a + b + c = 15 dan b = 5 (rata-rata). a + c = 10.
- Geometri: (b−1)² = a(c−4) → 4² = 16 = a(c−4).
- Misal a = 5 − d, c = 5 + d. a(c−4) = (5−d)(1+d) = 5 + 5d − d − d² = 5 + 4d − d² = 16 → d² − 4d + 11 = 0... diskriminan negatif.
- Coba ulang: 5 + 4d − d² = 16 → −d² + 4d − 11 = 0 → d² − 4d + 11 = 0. Diskriminan = 16 − 44 < 0.

Saya akan ubah parameter agar soal layak.

Versi final soal **89:**

**89.** Diketahui dua barisan: barisan aritmetika a, b, c (jumlah 15) dan barisan geometri a, b, c+6. Tentukan c!
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- Aritmetika: b = 5 (rata-rata), a + c = 10.
- Geometri: b² = a(c+6) → 25 = a(c+6).
- a = 10 − c. 25 = (10−c)(c+6) = 60 + 4c − c². → c² − 4c + 25 − 60 = 0 → c² − 4c − 35 = 0.
- Diskriminan = 16 + 140 = 156. Tidak sempurna. Hmm.

Saya ganti ke contoh klasik yang berfungsi:

**89.** Tiga bilangan membentuk barisan aritmetika dengan jumlah 15. Jika bilangan terakhir ditambah 1, ketiganya membentuk barisan geometri. Bilangan terbesar (asli) adalah ....
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- a + b + c = 15 → b = 5 dan a + c = 10. Misal a = 5 − d, c = 5 + d.
- Setelah c ditambah 1: c' = 6 + d. Geometri: b² = a × c' → 25 = (5−d)(6+d) = 30 + 5d − 6d − d² = 30 − d − d².
- d² + d + 25 − 30 = 0 → d² + d − 5 = 0. Hmm, akar tidak bagus.

OK, mari pakai versi standar yang umum keluar.

**89.** Tiga bilangan a, b, c membentuk barisan aritmetika dengan jumlah 21. Jika bilangan kedua dan ketiga ditambah 2, ketiganya jadi barisan geometri. Nilai c terbesar = ....
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- a + b + c = 21 → b = 7, a + c = 14. Misal a = 7−d, c = 7+d.
- Setelah b dan c ditambah 2: (a, b+2, c+2) = (7−d, 9, 9+d). Geometri: 9² = (7−d)(9+d) → 81 = 63 + 7d − 9d − d² = 63 − 2d − d² → d² + 2d + 18 = 0. Negatif.

OK, saya pakai versi standar yang jelas berfungsi.

**89.** Tiga bilangan membentuk barisan aritmetika dengan jumlah 21. Bila bilangan tengah dikurangi 4, ketiganya jadi barisan geometri. Bilangan terbesarnya = ....
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- a + b + c = 21 → b = 7, a + c = 14. Misal a = 7−d, c = 7+d.
- Setelah b dikurangi 4: b' = 3. Geometri (a, b', c): b'² = a × c → 9 = (7−d)(7+d) = 49 − d² → d² = 40. d = √40, tidak rapi.

Saya akhirnya pakai contoh yang tepat:

**89.** Tiga bilangan membentuk barisan aritmetika dengan jumlah 15. Jika bilangan terakhir dikurangi 1, ketiganya jadi barisan geometri. Bilangan terbesar (asli) adalah ....
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- a + b + c = 15 → b = 5, a + c = 10. Misal a = 5−d, c = 5+d.
- Setelah c dikurangi 1: (5−d, 5, 4+d). Geometri: 5² = (5−d)(4+d) = 20 + d − d² → d² − d + 5 = 0. Hmm.

Versi yang **DIJAMIN** berfungsi (klasik):

**89.** Tiga bilangan membentuk barisan aritmetika dengan jumlah 18. Jika bilangan ketiga ditambah 3, ketiganya jadi barisan geometri. Bilangan ketiga (terbesar) asli adalah ....
- A. 4
- B. 11
- C. 7
- D. 9

**Kunci: D**

**Pembahasan:**
- a + b + c = 18 → b = 6, a + c = 12. Misal a = 6−d, c = 6+d.
- Geometri: (a, b, c+3) → b² = a(c+3) → 36 = (6−d)(9+d) = 54 + 6d − 9d − d² = 54 − 3d − d².
- d² + 3d − 18 = 0 → (d+6)(d−3) = 0 → d = 3 atau d = −6.
- Untuk d = 3: a = 3, b = 6, c = **9**. Cek geometri (3, 6, 12) → 6² = 36 = 3 × 12 ✓.
- **A. 4** → salah; tebakan.
- **B. 11** → salah; tebakan.
- **C. 7** → salah; itu b + 1 atau jumlah salah.
- **D. 9** → BENAR.

---

**90.** Pada barisan geometri tak hingga 1 + ½ + ¼ + ⅛ + ... jumlah suku-suku barisan tersebut adalah ....
- A. 1,5
- B. 2
- C. 1,75
- D. tak hingga

**Kunci: B**

**Pembahasan:**
- Rumus jumlah deret geometri tak hingga: S∞ = a/(1−r) = 1/(1−½) = 1/½ = **2**.
- Cek visual: 1 + ½ + ¼ + ⅛ + ... mendekati 2.
- **A. 1,5** → salah; jumlah dua suku awal.
- **B. 2** → BENAR.
- **C. 1,75** → salah; jumlah tiga suku awal.
- **D. tak hingga** → salah; hanya divergen jika |r| ≥ 1, di sini |r| < 1 jadi konvergen.

---

**91.** Pada suatu barisan geometri, suku ke-4 dan suku ke-7 berbanding 1 : 64. Suku ke-10 dengan U₁ = 5 adalah ....
- A. 2.560
- B. 1.280
- C. 5.120
- D. 320

**Kunci: A**

**Pembahasan:**
- U₇ ÷ U₄ = r³ = 64 → r = 4.
- U₁₀ = U₁ × r⁹ = 5 × 4⁹ = 5 × 262.144 = **1.310.720**.

Itu terlalu besar, tidak ada di opsi. Mari sesuaikan rasio.

Versi final soal **91:**

**91.** Pada suatu barisan geometri, suku ke-4 dan suku ke-6 berbanding 1 : 4. Suku ke-10 dengan U₁ = 5 adalah ....
- A. 2.560
- B. 1.280
- C. 5.120
- D. 320

**Kunci: A**

**Pembahasan:**
- U₆ ÷ U₄ = r² = 4 → r = 2.
- U₁₀ = U₁ × r⁹ = 5 × 512 = **2.560**.
- **A. 2.560** → BENAR.
- **B. 1.280** → salah; itu U₉.
- **C. 5.120** → salah; itu U₁₁.
- **D. 320** → salah; itu U₇.

---

**92.** Dalam suatu kontes, peserta diberi 3 koin pada hari ke-1, kemudian setiap hari berikutnya jumlah koin yang diberikan dilipat 2 dari hari sebelumnya. Pada hari ke berapa total koin yang dikumpulkan mencapai 765?
- A. 7
- B. 9
- C. 8
- D. 10

**Kunci: C**

**Pembahasan:**
- Koin hari ke-n = 3 × 2^(n−1). Total Sₙ = 3(2ⁿ − 1)/(2−1) = 3(2ⁿ − 1).
- 3(2ⁿ − 1) = 765 → 2ⁿ − 1 = 255 → 2ⁿ = 256 → n = **8**.
- Cek: hari 1 = 3, total 3. Hari 2 = 6, total 9. Hari 3 = 12, total 21. ... Hari 8 = 384, total = 3(256−1) = 765 ✓.
- **A. 7** → salah; total = 3(128−1) = 381.
- **B. 9** → salah; total = 3(512−1) = 1.533, sudah lewat.
- **C. 8** → BENAR.
- **D. 10** → salah; jauh berlebih.

---

**93.** Suatu barisan geometri memiliki U₃ × U₇ = 144. Maka U₅ (positif) = ....
- A. 6
- B. 12
- C. 8
- D. 144

**Kunci: B**

**Pembahasan:**
- Sifat: U₃ × U₇ = U₅² (sifat suku tengah karena indeks rata-rata 5).
- U₅² = 144 → U₅ = **12**.
- **A. 6** → salah; setengah dari 12.
- **B. 12** → BENAR.
- **C. 8** → salah; akar lain (8² = 64).
- **D. 144** → salah; itu U₅².

---

**94.** Pada hari ke-1 seorang murid menghafal 2 kosakata. Tiap hari berikutnya, jumlah kosakata yang ia hafal jadi 3 kali kemarin. Pada hari ke-7, dia hafal berapa kosakata?
- A. 486
- B. 729
- C. 162
- D. 1.458

**Kunci: D**

**Pembahasan:**
- Hari ke-n hafal: Uₙ = 2 × 3^(n−1). Hari 7: U₇ = 2 × 3⁶ = 2 × 729 = **1.458**.
- **A. 486** → salah; itu U₆.
- **B. 729** → salah; 3⁶ tanpa kalikan 2.
- **C. 162** → salah; itu U₅.
- **D. 1.458** → BENAR.

---

**95.** Tiga bilangan x, y, z membentuk barisan geometri positif. Jika x = 3, dan z − x = 9, maka y = ....
- A. 6
- B. 5
- C. 9
- D. 7,5

**Kunci: A**

**Pembahasan:**
- z = x × r² = 3r². z − x = 9 → 3r² − 3 = 9 → r² = 4 → r = 2.
- y = x × r = 3 × 2 = **6**. Cek: 3, 6, 12 — selisih 12 − 3 = 9 ✓.
- **A. 6** → BENAR.
- **B. 5** → salah; tebakan aritmetika dengan beda 2.
- **C. 9** → salah; itu z − x.
- **D. 7,5** → salah; rata-rata 3 dan 12.

---

**96.** Pada barisan geometri, suku ke-n diberikan oleh Uₙ = 5 × 3^(n−1). Jumlah 5 suku pertama = ....
- A. 600
- B. 720
- C. 605
- D. 1.215

**Kunci: C**

**Pembahasan:**
- U₁ = 5, r = 3. S₅ = 5(3⁵ − 1)/(3−1) = 5 × 242/2 = 5 × 121 = **605**.
- Cek: 5 + 15 + 45 + 135 + 405 = **605** ✓.
- **A. 600** → salah; pembulatan keliru.
- **B. 720** → salah; jumlah 6 suku awal yang salah hitung.
- **C. 605** → BENAR.
- **D. 1.215** → salah; itu jumlah 5 suku × 2 atau U₆ × 3.

---

**97.** Sebuah bola dijatuhkan dari ketinggian 12 m. Tiap memantul tingginya jadi ⅔ kali sebelumnya. Tinggi total seluruh lintasan bola (turun + naik + turun + naik + ...) = ....
- A. 36 m
- B. 60 m
- C. 48 m
- D. 30 m

**Kunci: B**

**Pembahasan:**
- Turun pertama: 12 m. Naik 1 = 8, turun 2 = 8, naik 2 = 16/3, turun 3 = 16/3, ...
- Total = 12 + 2 × (8 + 16/3 + 32/9 + ...) = 12 + 2 × 8/(1−⅔) = 12 + 2 × 24 = 12 + 48 = **60 m**.
- **A. 36 m** → salah; 12 × 3.
- **B. 60 m** → BENAR.
- **C. 48 m** → salah; 12 × 4.
- **D. 30 m** → salah; tebakan tengah.

---

**98.** Suatu populasi serangga pada hari ke-3 ada 45 ekor, dan pada hari ke-6 ada 1.215 ekor. Pada hari ke-1 jumlah serangga = ....
- A. 3
- B. 9
- C. 15
- D. 5

**Kunci: D**

**Pembahasan:**
- U₆ ÷ U₃ = r³ = 27 → r = 3.
- U₁ = U₃ ÷ r² = 45 ÷ 9 = **5**.
- Cek: 5, 15, 45, 135, 405, 1.215 ✓.
- **A. 3** → salah; itu rasio.
- **B. 9** → salah; r² = 9.
- **C. 15** → salah; itu U₂.
- **D. 5** → BENAR.

---

**99.** Suatu barisan geometri positif memiliki Uₙ = 3 × 2^(n−1). Berapa suku terbesar yang masih ≤ 200?
- A. 192
- B. 384
- C. 96
- D. 96 dan 192

**Kunci: D**

**Pembahasan:**
- Uₙ = 3, 6, 12, 24, 48, 96, 192, 384.
- Suku ≤ 200: ..., 96, 192. Suku terbesar yang masih ≤ 200 adalah **192**.

Tunggu, kunci ditetapkan D. Saya akan revisi pertanyaan agar D = 192:

Versi final soal **99:**

**99.** Suatu barisan geometri positif memiliki Uₙ = 3 × 2^(n−1). Suku terbesar yang masih ≤ 200 adalah ....
- A. 96
- B. 384
- C. 100
- D. 192

**Kunci: D**

**Pembahasan:**
- Uₙ: 3, 6, 12, 24, 48, 96, 192, 384. Yang ≤ 200: hingga 192 (U₇). Suku terbesar = **192**.
- **A. 96** → salah; itu U₆ (terlewat U₇).
- **B. 384** → salah; sudah > 200.
- **C. 100** → salah; bukan anggota barisan.
- **D. 192** → BENAR.

---

**100.** Suatu sel membelah 2 kali setiap 30 menit (dari 1 jadi 3). Jika awalnya 4 sel, setelah 2 jam jumlah sel = ....
- A. 36
- B. 108
- C. 324
- D. 12

**Kunci: C**

**Pembahasan:**
- "Membelah 2 kali" = setiap sel jadi 3 sel. Jadi r = 3 setiap 30 menit. 2 jam = 4 × 30 menit = 4 pembelahan.
- Jumlah = 4 × 3⁴ = 4 × 81 = **324**.
- Cek: t=0: 4; t=30: 12; t=60: 36; t=90: 108; t=120: **324** ✓.
- **A. 36** → salah; setelah 1 jam saja.
- **B. 108** → salah; setelah 1,5 jam.
- **C. 324** → BENAR.
- **D. 12** → salah; setelah 30 menit pertama saja.

---

## BAGIAN III — KUNCI JAWABAN (Ringkas)

| No | Kunci | No | Kunci | No | Kunci | No | Kunci |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | B | 26 | B | 51 | C | 76 | A |
| 2 | D | 27 | D | 52 | A | 77 | D |
| 3 | A | 28 | C | 53 | D | 78 | B |
| 4 | C | 29 | A | 54 | B | 79 | A |
| 5 | B | 30 | B | 55 | C | 80 | C |
| 6 | A | 31 | D | 56 | D | 81 | D |
| 7 | D | 32 | A | 57 | A | 82 | B |
| 8 | C | 33 | C | 58 | B | 83 | A |
| 9 | B | 34 | B | 59 | C | 84 | C |
| 10 | A | 35 | D | 60 | A | 85 | D |
| 11 | C | 36 | C | 61 | D | 86 | B |
| 12 | D | 37 | B | 62 | B | 87 | C |
| 13 | A | 38 | A | 63 | C | 88 | A |
| 14 | B | 39 | D | 64 | A | 89 | D |
| 15 | D | 40 | C | 65 | B | 90 | B |
| 16 | D | 41 | A | 66 | D | 91 | A |
| 17 | A | 42 | B | 67 | A | 92 | C |
| 18 | B | 43 | C | 68 | C | 93 | B |
| 19 | C | 44 | D | 69 | D | 94 | D |
| 20 | C | 45 | B | 70 | B | 95 | A |
| 21 | B | 46 | A | 71 | A | 96 | C |
| 22 | A | 47 | C | 72 | D | 97 | B |
| 23 | D | 48 | D | 73 | C | 98 | D |
| 24 | C | 49 | B | 74 | B | 99 | D |
| 25 | A | 50 | A | 75 | C | 100 | C |

**Rekapitulasi distribusi kunci:**
- A: 25 soal (3, 6, 10, 13, 17, 22, 25, 29, 32, 38, 41, 46, 50, 52, 57, 60, 64, 67, 71, 76, 79, 83, 88, 91, 95)
- B: 25 soal (1, 5, 9, 14, 18, 21, 26, 30, 34, 37, 42, 45, 49, 54, 58, 62, 65, 70, 74, 78, 82, 86, 90, 93, 97)
- C: 25 soal (4, 8, 11, 19, 20, 24, 28, 33, 36, 40, 43, 47, 51, 55, 59, 63, 68, 73, 75, 80, 84, 87, 92, 96, 100)
- D: 25 soal (2, 7, 12, 15, 16, 23, 27, 31, 35, 39, 44, 48, 53, 56, 61, 66, 69, 72, 77, 81, 85, 89, 94, 98, 99)

**Total: 100 soal | Balanced 25/25/25/25 ✓**

---

**Selesai — 100 soal Sub-Bab 08b Pola Geometri (Barisan dengan Rasio Tetap)**

Semoga bermanfaat untuk persiapan OSN/KSN SD Matematika 2026!
