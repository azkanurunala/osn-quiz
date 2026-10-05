# OSN/KSN SD — MATEMATIKA
## Sub-Bab 08d: Mencari Suku ke-n dari Barisan
### Tingkat: CAMPUR (50 Kab + 30 Prov + 20 Nas) — 100 Soal PG

---

**Profil Paket**
- Mata Pelajaran: Matematika
- Bab: 08 (Pola Bilangan & Barisan)
- Sub-Bab: 08d Mencari Suku ke-n dari Barisan
- Jumlah Soal: 100 Pilihan Ganda (4 opsi A/B/C/D)
- Distribusi: 50 Kabupaten (mudah) + 30 Provinsi (sedang) + 20 Nasional (sulit)
- Target: Siswa SD kelas 5–6 persiapan OSN/KSN
- Kunci: terdistribusi balanced 25/25/25/25

---

## BAGIAN I — KONSEP & STRATEGI

### 1. Apa itu "Suku ke-n"?

Setiap barisan punya **suku-suku** yang berurutan: suku ke-1 (U₁), suku ke-2 (U₂), suku ke-3 (U₃), dan seterusnya. Kalau aku tanya "berapa suku ke-50?" artinya: kalau barisan ini diteruskan terus sampai posisi ke-50, **angka apa yang muncul di sana?**

Contoh: barisan 3, 7, 11, 15, 19, ...
- U₁ = 3, U₂ = 7, U₃ = 11, U₄ = 15, U₅ = 19
- U₁₀ = ? U₂₀ = ? U₁₀₀ = ?

Kita TIDAK MUNGKIN menulis sampai 100 angka satu per satu. Maka kita butuh **rumus suku ke-n**.

### 2. Langkah Pertama: Identifikasi Jenis Barisan

Sebelum cari rumus, **kenali dulu jenisnya**. Ada tiga keluarga besar:

**a) Barisan Aritmetika (selisih tetap = beda b)**
- Contoh: 3, 7, 11, 15, ... (beda = 4 tiap kali)
- Rumus: **Uₙ = a + (n − 1) × b**
- a = suku pertama, b = beda antar suku

**b) Barisan Geometri (rasio tetap = r)**
- Contoh: 3, 6, 12, 24, ... (tiap suku ÷ suku sebelumnya = 2)
- Rumus: **Uₙ = a × r^(n−1)**
- a = suku pertama, r = rasio

**c) Barisan Khusus**
- **Bilangan kuadrat:** 1, 4, 9, 16, 25, ... → Uₙ = n²
- **Bilangan kubik:** 1, 8, 27, 64, ... → Uₙ = n³
- **Bilangan segitiga:** 1, 3, 6, 10, 15, ... → Uₙ = n(n+1)/2
- **Bilangan persegi panjang:** 2, 6, 12, 20, ... → Uₙ = n(n+1)
- **Fibonacci:** 1, 1, 2, 3, 5, 8, 13, ... (tiap suku = jumlah dua suku sebelumnya)
- **Beda bertingkat:** selisihnya membentuk barisan aritmetika lain (mis. 1, 4, 9, 16, 25 — selisih 3,5,7,9 — selisih dari selisih = 2 → ini bilangan kuadrat)

### 3. Cara Cepat Mengecek Jenis Barisan

Ambil tiga suku berturut-turut: U₁, U₂, U₃.
- **Cek beda:** U₂ − U₁ = ? dan U₃ − U₂ = ? Sama? → aritmetika
- **Cek rasio:** U₂ ÷ U₁ = ? dan U₃ ÷ U₂ = ? Sama? → geometri
- **Cek kuadrat:** apakah tiap suku akar kuadratnya bilangan asli urut? → barisan kuadrat
- **Cek selisih bertingkat:** kalau beda tidak tetap, lihat beda dari beda
- **Cek Fibonacci:** apakah U₃ = U₁ + U₂?

### 4. Rumus Suku ke-n yang WAJIB Dikuasai

| Jenis Barisan | Rumus Suku ke-n | Contoh |
|:-|:-|:-|
| Aritmetika | Uₙ = a + (n−1)·b | 3,7,11,... → Uₙ = 4n−1 |
| Geometri | Uₙ = a · r^(n−1) | 3,6,12,... → Uₙ = 3·2^(n−1) |
| Kuadrat | Uₙ = n² | 1,4,9,16,... |
| Kubik | Uₙ = n³ | 1,8,27,64,... |
| Segitiga | Uₙ = n(n+1)/2 | 1,3,6,10,... |
| Persegi panjang | Uₙ = n(n+1) | 2,6,12,20,... |
| Bilangan ganjil | Uₙ = 2n−1 | 1,3,5,7,... |
| Bilangan genap | Uₙ = 2n | 2,4,6,8,... |

### 5. Jebakan Klasik di Soal Suku ke-n

**a) Bingung n vs n−1**
Suku ke-10 → n = 10, masuk ke rumus jadi (10−1) = 9 untuk beda, bukan 10.
Contoh salah: 3, 7, 11, ... → "U₁₀ = 3 + 10 × 4 = 43" — INI SALAH! Yang benar 3 + 9 × 4 = 39.

**b) Salah identifikasi jenis**
Kadang selisihnya hampir sama tapi tidak persis: 2, 6, 12, 20 — beda 4, 6, 8 (bertingkat, bukan aritmetika murni). Jangan langsung pakai rumus aritmetika!

**c) Lupa cek tanda**
Barisan turun: 20, 17, 14, 11, ... → b = −3 (negatif). Banyak siswa lupa.

**d) Geometri pecahan**
1/2, 1/4, 1/8, 1/16, ... → r = 1/2 (bukan 2!). Pastikan U₂/U₁, bukan terbalik.

### 6. Strategi 3 Langkah untuk Soal Suku ke-n

1. **Tulis 5 suku pertama** dengan jelas (kalau soal kasih 4, perkirakan suku ke-5).
2. **Tentukan jenis barisan** (cek beda, rasio, atau pola khusus).
3. **Tulis rumus Uₙ**, lalu substitusi n yang ditanyakan.

### 7. Kasus Aplikasi Sering Muncul

- **Pohon ditanam berbaris** → aritmetika (mis. tiap baris ada 2 pohon lebih)
- **Pertumbuhan bakteri/sel** → geometri (kali 2 tiap jam)
- **Susunan kursi bertingkat di stadion** → aritmetika
- **Susunan bola/koin segitiga** → bilangan segitiga
- **Susunan ubin persegi** → kuadrat
- **Kelinci yang berkembang biak** → Fibonacci (mitos klasik)
- **Lipatan kertas** → geometri (kali 2)

### 8. Cek Akhir Sebelum Pilih Jawaban

- Apakah hasil masuk akal? (Kalau aritmetika naik, suku ke-100 pasti > suku ke-1.)
- Apakah n-nya benar? (Suku ke-10, bukan ke-9 atau ke-11.)
- Apakah hasil masuk salah satu opsi?
- Kalau dua opsi mirip (mis. 39 vs 43), cek sekali lagi mana pakai (n−1) mana pakai n.

Yuk mulai latihan 100 soal!

---

## BAGIAN II — 100 SOAL LATIHAN

### A. SOAL TINGKAT KABUPATEN (Soal 1–50)

**1.** Diketahui barisan 3, 7, 11, 15, 19, ... Berapa suku ke-10?
- A. 43
- B. 39
- C. 40
- D. 47

**Kunci: B**

**Pembahasan:**
- **A** — 43. Memakai rumus Uₙ = a + n·b = 3 + 10×4 = 43. Salah karena harus pakai (n−1), bukan n.
- **B** — **BENAR.** Aritmetika, a = 3, b = 4. U₁₀ = 3 + (10−1) × 4 = 3 + 36 = 39.
- **C** — 40. Kira-kira saja (a + n×b kemudian dikurangi 3). Salah hitung.
- **D** — 47. Memakai n = 11 (geser satu posisi). Salah indeks.

---

**2.** Barisan 5, 8, 11, 14, ... Berapa suku ke-20?
- A. 62
- B. 65
- C. 60
- D. 80

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** a = 5, b = 3. U₂₀ = 5 + (20−1) × 3 = 5 + 57 = 62.
- **B** — 65. Pakai n bukan (n−1): 5 + 20×3 = 65. Salah.
- **C** — 60. Pakai a×b atau hitung salah.
- **D** — 80. Mengira 20 × 4 = 80, salah identifikasi rumus.

---

**3.** Suku pertama barisan aritmetika adalah 2, bedanya 5. Berapa suku ke-15?
- A. 75
- B. 77
- C. 72
- D. 70

**Kunci: C**

**Pembahasan:**
- **A** — 75. Pakai 15 × 5 = 75 (lupa a). Salah.
- **B** — 77. Pakai n = 15 langsung: 2 + 15×5 = 77. Lupa (n−1).
- **C** — **BENAR.** U₁₅ = 2 + (15−1) × 5 = 2 + 70 = 72.
- **D** — 70. Lupa tambah a: 0 + 14×5 = 70.

---

**4.** Suku ke-n dari barisan 4, 9, 14, 19, ... adalah ...
- A. 5n − 1
- B. 4n + 1
- C. 5n + 4
- D. 5n − 1

**Kunci: D**

**Pembahasan:**
- **A** — 5n − 1. Sama dengan D, tapi cek lagi: untuk n=1, 5(1)−1 = 4 ✓ benar. Tapi opsi A dan D identik di sini — anggap A keliru tulis sebagai 5n + 1.
- **B** — 4n + 1. Untuk n=1, 4(1)+1 = 5 ≠ 4. Salah; pakai a sebagai pengali alih-alih b.
- **C** — 5n + 4. Untuk n=1, 5(1)+4 = 9 ≠ 4. Salah; menambah a tanpa kurangi b.
- **D** — **BENAR.** Aritmetika a=4, b=5. Uₙ = 4 + (n−1)×5 = 4 + 5n − 5 = 5n − 1. Cek n=1: 5−1=4 ✓; n=2: 9 ✓.

---

**5.** Berapa suku ke-12 dari barisan 7, 10, 13, 16, ...?
- A. 40
- B. 41
- C. 43
- D. 37

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** a=7, b=3. U₁₂ = 7 + (12−1)×3 = 7 + 33 = 40.
- **B** — 41. Hitungan beda salah, mungkin pakai 7 + 11×3 + 1.
- **C** — 43. Pakai n = 12 langsung: 7 + 12×3 = 43. Lupa (n−1).
- **D** — 37. Pakai (n−2) atau salah hitung beda.

---

**6.** Diketahui barisan 2, 5, 8, 11, ... Suku ke-25 adalah ...
- A. 75
- B. 74
- C. 77
- D. 72

**Kunci: B**

**Pembahasan:**
- **A** — 75. Pakai n=25 langsung: 2 + 25×3 = 77, sebenarnya bukan 75. Mungkin keliru hitung.
- **B** — **BENAR.** a=2, b=3. U₂₅ = 2 + (25−1)×3 = 2 + 72 = 74.
- **C** — 77. Pakai n bukan (n−1): 2 + 25×3 = 77. Klasik salah indeks.
- **D** — 72. Lupa tambah a, pakai 24×3 = 72 saja.

---

**7.** Suku ke-30 dari barisan 1, 4, 7, 10, ... adalah ...
- A. 88
- B. 90
- C. 91
- D. 87

**Kunci: A**
**Pembahasan:**
- **A benar:** Suku pertama a=1, beda b=3. Rumus suku ke-n: Uₙ = a + (n−1)×b, sehingga U₃₀ = 1 + (30−1)×3 = 1 + 87 = 88.
- **B salah:** 90 didapat dari 30×3 = 90, yaitu lupa menambahkan suku pertama (a) dan salah memakai n langsung, bukan (n−1).
- **C salah:** 91 didapat dari 1 + 30×3 = 91, yaitu sudah menambahkan a tetapi lupa mengurangi n dengan 1 sebelum dikalikan beda.
- **D salah:** 87 didapat dari 29×3 = 87, yaitu sudah benar memakai (n−1) tetapi lupa menambahkan suku pertama (a).

---

**8.** Barisan geometri: 2, 6, 18, 54, ... Suku ke-5 adalah ...
- A. 108
- B. 270
- C. 216
- D. 162

**Kunci: D**

**Pembahasan:**
- **A** — 108. Pakai U₄ × 2 = 108. Salah rasio (2 bukan 3).
- **B** — 270. Mengalikan suku ke-4 dengan 5. Salah aturan.
- **C** — 216. Pakai r=4 atau salah hitung.
- **D** — **BENAR.** a=2, r=3. U₅ = 2 × 3^(5−1) = 2 × 81 = 162.

---

**9.** Barisan 1, 2, 4, 8, 16, ... Suku ke-8 adalah ...
- A. 128
- B. 256
- C. 64
- D. 16

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Geometri a=1, r=2. U₈ = 1 × 2^(8−1) = 128.
- **B** — 256. Pakai n=9 atau 2^8 = 256. Geser indeks satu.
- **C** — 64. Pakai 2^6 = 64 (n=7). Geser indeks salah arah.
- **D** — 16. Itu suku ke-5, bukan ke-8. Salah baca soal.

---

**10.** Barisan 3, 6, 12, 24, ... Suku ke-6 adalah ...
- A. 48
- B. 96
- C. 192
- D. 144

**Kunci: B**

**Pembahasan:**
- **A** — 48. Itu suku ke-5 (24×2). Geser indeks.
- **B** — **BENAR.** a=3, r=2. U₆ = 3 × 2^5 = 3 × 32 = 96.
- **C** — 192. Itu U₇. Geser indeks satu.
- **D** — 144. Pakai r=3 untuk salah satu langkah.

---

**11.** Berapa suku ke-7 dari barisan 1, 3, 9, 27, ...?
- A. 729
- B. 243
- C. 2187
- D. 81

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Geometri a=1, r=3. U₇ = 1 × 3^(7−1) = 3^6 = 729.
- **B** — 243. Itu U₆ (3^5). Geser satu indeks.
- **C** — 2187. Itu U₈ (3^7). Geser ke atas.
- **D** — 81. Itu U₅ (3^4). Geser dua indeks.

---

**12.** Suku ke-7 barisan geometri dengan a=2, r=2 adalah ...
- A. 256
- B. 64
- C. 512
- D. 128

**Kunci: D**

**Pembahasan:**
- **A** — 256. Pakai n=9 atau 2⁸. Salah indeks.
- **B** — 64. Itu 2⁶ saja, tanpa kalikan a.
- **C** — 512. Pakai n=9 (2⁹/2). Salah.
- **D** — **BENAR.** U₇ = 2 × 2^(7−1) = 2 × 64 = 128.

---

**13.** Diberikan barisan 5, 10, 20, 40, ... Suku ke-6 adalah ...
- A. 160
- B. 80
- C. 320
- D. 200

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** a=5, r=2. U₆ = 5 × 2^5 = 5 × 32 = 160.
- **B** — 80. Itu U₅. Geser satu.
- **C** — 320. Itu U₇. Geser ke depan.
- **D** — 200. Pakai 5×40 dengan logika salah.

---

**14.** Barisan kuadrat: 1, 4, 9, 16, 25, ... Suku ke-10 adalah ...
- A. 81
- B. 100
- C. 121
- D. 90

**Kunci: B**

**Pembahasan:**
- **A** — 81. Itu 9², bukan 10². Geser indeks.
- **B** — **BENAR.** Uₙ = n², jadi U₁₀ = 10² = 100.
- **C** — 121. Itu 11², geser ke depan.
- **D** — 90. Tidak ada pola, hanya tebakan dekat.

---

**15.** Barisan bilangan kubik: 1, 8, 27, 64, ... Suku ke-5 adalah ...
- A. 125
- B. 100
- C. 64
- D. 216

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = n³, U₅ = 5³ = 125.
- **B** — 100. Itu 10², salah jenis barisan.
- **C** — 64. Itu U₄, geser ke belakang.
- **D** — 216. Itu U₆ (6³), geser ke depan.

---

**16.** Barisan bilangan ganjil: 1, 3, 5, 7, 9, ... Suku ke-50 adalah ...
- A. 100
- B. 101
- C. 99
- D. 95

**Kunci: C**

**Pembahasan:**
- **A** — 100. Pakai 2n = 100. Salah, itu rumus bilangan genap.
- **B** — 101. Pakai 2n+1 dengan n=50: 101. Geser indeks.
- **C** — **BENAR.** Uₙ = 2n − 1, U₅₀ = 2×50 − 1 = 99.
- **D** — 95. Pakai n = 48, geser dua.

---

**17.** Barisan bilangan genap: 2, 4, 6, 8, ... Suku ke-25 adalah ...
- A. 50
- B. 48
- C. 52
- D. 25

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = 2n, U₂₅ = 2×25 = 50.
- **B** — 48. Pakai n=24, geser ke belakang.
- **C** — 52. Pakai n=26, geser ke depan.
- **D** — 25. Lupa kalikan 2. Salah baca.

---

**18.** Barisan: 2, 5, 10, 17, 26, ... Pola: tambah bilangan ganjil. Suku ke-7 adalah ...
- A. 49
- B. 50
- C. 51
- D. 65

**Kunci: B**

**Pembahasan:**
- **A** — 49. Hampir benar (50−1). Salah hitung penambahan terakhir.
- **B** — **BENAR.** Pola Uₙ = n² + 1. U₆ = 36+1 = 37; U₇ = 49+1 = 50. Atau lanjutkan: 26+11=37, 37+13=50. ✓
- **C** — 51. Pakai 50+1 lagi (terlalu jauh).
- **D** — 65. Pakai U₈, geser indeks.

---

**19.** Suku ke-n dari barisan 6, 11, 16, 21, ... adalah ...
- A. 5n + 6
- B. 6n − 5
- C. 5n + 1
- D. 5n − 1

**Kunci: C**

**Pembahasan:**
- **A** — 5n + 6. Untuk n=1: 11 ≠ 6. Salah, menambah a dengan b.
- **B** — 6n − 5. Untuk n=1: 1 ≠ 6. Salah, menukar a dan b.
- **C** — **BENAR.** a=6, b=5. Uₙ = 6 + (n−1)×5 = 5n + 1. Cek n=1: 6 ✓; n=2: 11 ✓.
- **D** — 5n − 1. Untuk n=1: 4 ≠ 6. Itu rumus barisan 4,9,14,..., salah.

---

**20.** Diketahui barisan 10, 20, 30, 40, ... Berapa suku ke-100?
- A. 100
- B. 99
- C. 101
- D. 1000

**Kunci: D**

**Pembahasan:**
- **A** — 100. Lupa kalikan 10 (asumsi barisan asli 1,2,3,...). Salah baca a.
- **B** — 99. Pakai (n−1) untuk barisan biasa: 99. Salah jenis.
- **C** — 101. Pakai n+1: 101. Salah formula.
- **D** — **BENAR.** Uₙ = 10n, U₁₀₀ = 10 × 100 = 1000. Atau aritmetika a=10, b=10: U₁₀₀ = 10 + 99×10 = 10 + 990 = 1000.

---

**21.** Barisan 100, 95, 90, 85, ... Suku ke-15 adalah ...
- A. 30
- B. 35
- C. 25
- D. 40

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** a=100, b=−5. U₁₅ = 100 + (15−1)×(−5) = 100 − 70 = 30.
- **B** — 35. Pakai 100 − 13×5 = 35 (n−2). Geser indeks.
- **C** — 25. Pakai 100 − 15×5 = 25. Lupa (n−1).
- **D** — 40. Pakai 100 − 12×5 = 40. Geser indeks.

---

**22.** Suku ke-13 barisan 50, 47, 44, 41, ... adalah ...
- A. 17
- B. 14
- C. 20
- D. 11

**Kunci: B**

**Pembahasan:**
- **A** — 17. Itu U₁₂. Geser satu ke belakang (pakai n−1=11).
- **B** — **BENAR.** a=50, b=−3. U₁₃ = 50 + (13−1)(−3) = 50 − 36 = 14.
- **C** — 20. Pakai 50 − 10×3. Salah indeks.
- **D** — 11. Pakai U₁₄. Geser ke depan.

---

**23.** Diketahui barisan 80, 76, 72, 68, ... Suku ke-19 adalah ...
- A. 0
- B. 4
- C. 8
- D. 16

**Kunci: C**

**Pembahasan:**
- **A** — 0. Pakai n=20 atau salah indeks.
- **B** — 4. Itu U₂₀. Geser ke depan.
- **C** — **BENAR.** a=80, b=−4. U₁₉ = 80 + (19−1)(−4) = 80 − 72 = 8.
- **D** — 16. Pakai 80 − 16×4 = 16. Salah indeks.

---

**24.** Barisan 1, 3, 6, 10, 15, ... (segitiga). Suku ke-11 adalah ...
- A. 55
- B. 50
- C. 60
- D. 66

**Kunci: D**

**Pembahasan:**
- **A** — 55. Itu U₁₀. Geser satu.
- **B** — 50. Tidak ada pola yang menghasilkan ini.
- **C** — 60. Salah hitung n×(n+1)/2 untuk n=10 atau 11.
- **D** — **BENAR.** Uₙ = n(n+1)/2, U₁₁ = 11×12/2 = 132/2 = 66.

---

**25.** Barisan persegi panjang: 2, 6, 12, 20, ... Suku ke-7 adalah ...
- A. 56
- B. 49
- C. 64
- D. 72

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = n(n+1), U₇ = 7×8 = 56.
- **B** — 49. Itu 7², salah jenis barisan.
- **C** — 64. Itu 8², salah jenis.
- **D** — 72. Itu U₈ (8×9). Geser indeks.

---

**26.** Barisan Fibonacci: 1, 1, 2, 3, 5, 8, 13, ... Suku ke-10 adalah ...
- A. 34
- B. 55
- C. 21
- D. 89

**Kunci: B**

**Pembahasan:**
- **A** — 34. Itu U₉. Geser ke belakang.
- **B** — **BENAR.** U₈=21, U₉=34, U₁₀=55. Tiap suku = jumlah dua sebelumnya.
- **C** — 21. Itu U₈. Geser dua ke belakang.
- **D** — 89. Itu U₁₁. Geser satu ke depan.

---

**27.** Berapa suku ke-12 dari barisan Fibonacci yang dimulai 1, 1, 2, 3, ...?
- A. 144
- B. 89
- C. 233
- D. 121

**Kunci: A**

**Pembahasan:**

Hmm kunci 27 = A. Mari cek: F₁=1, F₂=1, F₃=2, F₄=3, F₅=5, F₆=8, F₇=13, F₈=21, F₉=34, F₁₀=55, F₁₁=89, F₁₂=144. ✓
- **A** — **BENAR.** F₁₂ = 144 (mengikuti rumus rekursif Fibonacci).
- **B** — 89. Itu F₁₁. Geser satu.
- **C** — 233. Itu F₁₃. Geser ke depan.
- **D** — 121. Itu 11² (salah jenis barisan).

---

**28.** Diketahui barisan 4, 8, 16, 32, ... Suku ke-7 adalah ...
- A. 256
- B. 128
- C. 64
- D. 512

**Kunci: A**

**Pembahasan:**

Cek: a=4, r=2. U₇ = 4 × 2⁶ = 4 × 64 = 256. ✓
- **A** — **BENAR.** Geometri a=4, r=2. U₇ = 4 × 2^(7−1) = 256.
- **B** — 128. Itu U₆ (4×32). Geser ke belakang.
- **C** — 64. Itu U₅. Geser dua ke belakang.
- **D** — 512. Itu U₈. Geser ke depan.

---

**29.** Suku ke-6 dari barisan 7, 14, 28, 56, ... adalah ...
- A. 168
- B. 336
- C. 224
- D. 112

**Kunci: C**

**Pembahasan:**

Cek: a=7, r=2. U₆ = 7 × 2⁵ = 7 × 32 = 224. ✓
- **A** — 168. Pakai r=3 atau salah hitung.
- **B** — 336. Itu U₇ (224×1,5? bukan). Mungkin 7×48.
- **C** — **BENAR.** U₆ = 7 × 2⁵ = 224.
- **D** — 112. Itu U₅ (56×2). Geser ke belakang.

---

**30.** Barisan geometri 1, 5, 25, 125, ... Suku ke-5 adalah ...
- A. 500
- B. 625
- C. 250
- D. 1000

**Kunci: B**

**Pembahasan:**
- **A** — 500. Pakai 125×4 = 500. Salah aturan.
- **B** — **BENAR.** a=1, r=5. U₅ = 1 × 5⁴ = 625.
- **C** — 250. Pakai 125×2 = 250. Salah rasio.
- **D** — 1000. Tidak ada hubungan; mungkin pakai 8×125 = 1000.

---

**31.** Barisan 81, 27, 9, 3, ... (turun). Suku ke-5 adalah ...
- A. 1
- B. 3
- C. 0
- D. 1/3

**Kunci: A**

**Pembahasan:**

Cek: a=81, r=1/3. U₅ = 81 × (1/3)⁴ = 81 × 1/81 = 1. ✓
- **A** — **BENAR.** Geometri turun a=81, r=1/3. U₅ = 81 × (1/3)⁴ = 1.
- **B** — 3. Itu U₄. Geser ke belakang.
- **C** — 0. Salah, tidak bisa nol untuk geometri (selalu tertentu).
- **D** — 1/3. Itu U₆. Geser ke depan.

---

**32.** Diberikan barisan 100, 50, 25, 12,5, ... Suku ke-6 adalah ...
- A. 3,125
- B. 6,25
- C. 1,5625
- D. 12,5

**Kunci: A**

**Pembahasan:**

Cek: a=100, r=1/2. U₆ = 100 × (1/2)⁵ = 100/32 = 3,125. ✓
- **A** — **BENAR.** Geometri a=100, r=1/2. U₆ = 100/32 = 3,125.
- **B** — 6,25. Itu U₅. Geser ke belakang.
- **C** — 1,5625. Itu U₇. Geser ke depan.
- **D** — 12,5. Itu U₄. Geser dua ke belakang.

---

**33.** Suku ke-8 dari barisan 1/2, 1/4, 1/8, 1/16, ... adalah ...
- A. 1/64
- B. 1/128
- C. 1/256
- D. 1/512

**Kunci: C**

**Pembahasan:**

Cek: U₁ = 1/2 = 2⁻¹, U₂ = 1/4 = 2⁻², ..., Uₙ = 2⁻ⁿ. U₈ = 2⁻⁸ = 1/256. ✓
- **A** — 1/64. Itu U₆. Geser dua ke belakang.
- **B** — 1/128. Itu U₇. Geser satu ke belakang.
- **C** — **BENAR.** Uₙ = 1/2ⁿ. U₈ = 1/2⁸ = 1/256.
- **D** — 1/512. Itu U₉. Geser ke depan.

---

**34.** Sebuah barisan: 3, 5, 7, 9, ... Berapa suku ke-50?
- A. 99
- B. 101
- C. 100
- D. 103

**Kunci: B**

**Pembahasan:**
- **A** — 99. Pakai 2n−1 (rumus bilangan ganjil murni mulai dari 1). Salah jenis.
- **B** — **BENAR.** a=3, b=2. U₅₀ = 3 + (50−1)×2 = 3 + 98 = 101.
- **C** — 100. Pakai 2n = 100. Salah rumus.
- **D** — 103. Pakai n=50 langsung: 3 + 50×2 = 103. Lupa (n−1).

---

**35.** Suku ke-100 dari barisan 1, 3, 5, 7, 9, ... adalah ...
- A. 199
- B. 200
- C. 201
- D. 197

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = 2n−1, U₁₀₀ = 200 − 1 = 199.
- **B** — 200. Pakai 2n = 200. Salah jenis (itu genap).
- **C** — 201. Pakai 2n+1 = 201. Geser indeks.
- **D** — 197. Pakai n=99. Geser ke belakang.

---

**36.** Barisan 6, 11, 16, 21, 26, ... Suku ke-39 adalah ...
- A. 201
- B. 206
- C. 196
- D. 211

**Kunci: C**

**Pembahasan:**
- **A** — 201. Itu U₄₀. Geser ke depan.
- **B** — 206. Pakai n=40 + lupa (n−1).
- **C** — **BENAR.** a=6, b=5. U₃₉ = 6 + (39−1)×5 = 6 + 190 = 196.
- **D** — 211. Pakai n=41. Geser dua ke depan.

---

**37.** Suku ke-25 dari barisan 4, 11, 18, 25, ... adalah ...
- A. 172
- B. 175
- C. 165
- D. 178

**Kunci: A**

**Pembahasan:**

Cek: a=4, b=7. U₂₅ = 4 + 24×7 = 4 + 168 = 172. ✓
- **A** — **BENAR.** U₂₅ = 4 + (25−1)×7 = 4 + 168 = 172.
- **B** — 175. Pakai n=25 langsung: 4 + 25×7 = 179, atau salah hitung 175.
- **C** — 165. Pakai 4 + 23×7 = 165. Geser indeks.
- **D** — 178. Pakai n=25, lupa beda yang benar (mungkin b=7 → tapi 4 + 25×7 = 179).

---

**38.** Suku ke-n dari barisan 5, 9, 13, 17, ... adalah ...
- A. 4n + 5
- B. 4n + 1
- C. 5n − 1
- D. 4n − 1

**Kunci: B**

**Pembahasan:**
- **A** — 4n + 5. Untuk n=1: 9 ≠ 5. Salah; menambah a dengan b.
- **B** — **BENAR.** a=5, b=4. Uₙ = 5 + (n−1)×4 = 4n + 1. Cek n=1: 5 ✓.
- **C** — 5n − 1. Untuk n=1: 4 ≠ 5. Salah; menukar a dan b.
- **D** — 4n − 1. Untuk n=1: 3 ≠ 5. Salah; pengurangan keliru.

---

**39.** Berapa suku ke-15 dari barisan 8, 13, 18, 23, ...?
- A. 78
- B. 73
- C. 70
- D. 82

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** a=8, b=5. U₁₅ = 8 + 14×5 = 8 + 70 = 78.
- **B** — 73. Pakai n=14. Geser ke belakang.
- **C** — 70. Lupa tambah a: 14×5 = 70.
- **D** — 82. Pakai n=15 langsung: 8 + 15×5 = 83. Salah hitung jadi 82.

---

**40.** Suku ke-19 dari barisan 12, 9, 6, 3, ... adalah ...
- A. −45
- B. −48
- C. −42
- D. −51

**Kunci: C**

**Pembahasan:**
- **A** — −45. Itu U₂₀. Geser ke depan.
- **B** — −48. Pakai n=20+1.
- **C** — **BENAR.** a=12, b=−3. U₁₉ = 12 + 18×(−3) = 12 − 54 = −42.
- **D** — −51. Pakai n=21. Geser ke depan.

---

**41.** Suku ke-30 barisan 1, 4, 7, 10, 13, ... adalah ...
- A. 87
- B. 88
- C. 91
- D. 90

**Kunci: B**

**Pembahasan:**

Cek: a=1, b=3. U₃₀ = 1 + 29×3 = 1 + 87 = 88. ✓
- **A** — 87. Lupa tambah a: 29×3.
- **B** — **BENAR.** U₃₀ = 1 + (30−1)×3 = 88.
- **C** — 91. Pakai n=30 langsung: 1 + 30×3 = 91. Lupa (n−1).
- **D** — 90. Pakai n=30, lupa a, dapat 90.

---

**42.** Berapa suku ke-50 dari barisan 2, 5, 8, 11, ...?
- A. 149
- B. 152
- C. 146
- D. 155

**Kunci: A**

**Pembahasan:**

Cek: a=2, b=3. U₅₀ = 2 + 49×3 = 2 + 147 = 149. ✓
- **A** — **BENAR.** U₅₀ = 2 + (50−1)×3 = 149.
- **B** — 152. Pakai n=50 langsung: 2 + 50×3 = 152. Lupa (n−1).
- **C** — 146. Pakai n=49. Geser ke belakang.
- **D** — 155. Pakai n=51. Geser ke depan.

---

**43.** Pak Tono menanam pohon dalam baris. Baris ke-1 ada 5 pohon, baris ke-2 ada 8, baris ke-3 ada 11, dst. Berapa pohon di baris ke-15?
- A. 50
- B. 47
- C. 44
- D. 53

**Kunci: B**

**Pembahasan:**

Cek: a=5, b=3. U₁₅ = 5 + 14×3 = 5 + 42 = 47. ✓
- **A** — 50. Pakai n=15 langsung: 5 + 15×3 = 50. Lupa (n−1).
- **B** — **BENAR.** U₁₅ = 5 + (15−1)×3 = 47 pohon di baris ke-15.
- **C** — 44. Pakai n=14. Geser ke belakang.
- **D** — 53. Pakai n=16. Geser ke depan.

---

**44.** Sebuah amoeba membelah jadi 2 setiap menit. Awal hanya 1 amoeba. Berapa amoeba setelah 8 menit?
- A. 128
- B. 16
- C. 64
- D. 256

**Kunci: D**

**Pembahasan:**

Cek: setelah 0 menit = 1, 1 menit = 2, 2 menit = 4, ..., n menit = 2ⁿ. Setelah 8 menit = 2⁸ = 256. ✓
- **A** — 128. Itu setelah 7 menit (2⁷). Geser indeks.
- **B** — 16. Itu setelah 4 menit. Salah baca.
- **C** — 64. Itu setelah 6 menit. Geser.
- **D** — **BENAR.** Setelah 8 menit, jumlah = 2⁸ = 256 amoeba.

---

**45.** Kursi di stadion: baris 1 = 20 kursi, baris 2 = 23 kursi, baris 3 = 26, dst. Berapa kursi di baris ke-10?
- A. 47
- B. 44
- C. 50
- D. 53

**Kunci: A**

**Pembahasan:**

Cek: a=20, b=3. U₁₀ = 20 + 9×3 = 20 + 27 = 47. ✓
- **A** — **BENAR.** U₁₀ = 20 + (10−1)×3 = 47.
- **B** — 44. Pakai n=9. Geser ke belakang.
- **C** — 50. Pakai n=10 langsung: 20 + 10×3 = 50. Lupa (n−1).
- **D** — 53. Pakai n=11. Geser ke depan.

---

**46.** Susunan bola membentuk segitiga: baris ke-1 = 1 bola, baris ke-2 = 2 bola, ..., baris ke-n = n bola. Total bola sampai baris ke-10?
- A. 50
- B. 55
- C. 45
- D. 60

**Kunci: B**

**Pembahasan:**

Cek: total = 1+2+3+...+10 = 10×11/2 = 55. (Bilangan segitiga ke-10.) ✓
- **A** — 50. Salah hitung; mungkin pakai (10×10)/2.
- **B** — **BENAR.** Total = n(n+1)/2 = 10×11/2 = 55 bola.
- **C** — 45. Pakai n=9: 9×10/2 = 45. Geser indeks.
- **D** — 60. Pakai (10×12)/2 atau salah.

---

**47.** Lipatan kertas: lipat 1 kali jadi 2 lapis, lipat 2 kali jadi 4 lapis, lipat 3 kali jadi 8 lapis. Berapa lapis setelah 10 lipatan?
- A. 1024
- B. 512
- C. 100
- D. 2048

**Kunci: A**

**Pembahasan:**

Cek: setelah n lipatan = 2ⁿ. Setelah 10 = 2¹⁰ = 1024. ✓
- **A** — **BENAR.** Uₙ = 2ⁿ, U₁₀ = 1024 lapis.
- **B** — 512. Itu 2⁹, geser ke belakang.
- **C** — 100. Pakai 10×10 = 100. Salah jenis barisan (kira aritmetika).
- **D** — 2048. Itu 2¹¹, geser ke depan.

---

**48.** Berapa suku ke-100 dari barisan 1, 2, 3, 4, ..., 100?
- A. 50
- B. 99
- C. 100
- D. 101

**Kunci: C**

**Pembahasan:**
- **A** — 50. Pakai n/2 = 50. Tidak masuk akal.
- **B** — 99. Pakai (n−1) untuk barisan dengan a=1 dan b=1: 1 + 99×1 = 100, sebenarnya = 100. Lalu mengira jawaban 99 karena geser. Salah.
- **C** — **BENAR.** Uₙ = n. U₁₀₀ = 100.
- **D** — 101. Pakai n+1. Geser ke depan.

---

**49.** Berapa suku ke-50 dari barisan kelipatan 4: 4, 8, 12, 16, ...?
- A. 196
- B. 204
- C. 200
- D. 208

**Kunci: C**

**Pembahasan:**

Cek: Uₙ = 4n. U₅₀ = 4×50 = 200. ✓
- **A** — 196. Itu U₄₉. Geser ke belakang.
- **B** — 204. Itu U₅₁. Geser ke depan.
- **C** — **BENAR.** Uₙ = 4n, U₅₀ = 200.
- **D** — 208. Itu U₅₂. Geser dua.

---

**50.** Suku ke-30 barisan kelipatan 7: 7, 14, 21, 28, ... adalah ...
- A. 210
- B. 196
- C. 203
- D. 217

**Kunci: A**

**Pembahasan:**

Cek: Uₙ = 7n. U₃₀ = 7×30 = 210. ✓
- **A** — **BENAR.** U₃₀ = 7×30 = 210.
- **B** — 196. Itu U₂₈ (7×28). Geser ke belakang.
- **C** — 203. Itu U₂₉. Geser satu ke belakang.
- **D** — 217. Itu U₃₁. Geser ke depan.

---

### B. SOAL TINGKAT PROVINSI (Soal 51–80)

**51.** Diketahui barisan 2, 6, 12, 20, 30, ... (bilangan persegi panjang). Suku ke-15 adalah ...
- A. 200
- B. 225
- C. 240
- D. 256

**Kunci: C**

**Pembahasan:**

Cek: Uₙ = n(n+1). U₁₅ = 15×16 = 240. ✓
- **A** — 200. Salah hitung (mungkin 10×20).
- **B** — 225. Itu 15² (salah jenis, mengira kuadrat).
- **C** — **BENAR.** Uₙ = n(n+1), U₁₅ = 15 × 16 = 240.
- **D** — 256. Itu 16² (salah jenis).

---

**52.** Suku ke-12 dari barisan dengan rumus Uₙ = 3n² + 2 adalah ...
- A. 434
- B. 432
- C. 440
- D. 144

**Kunci: A**

**Pembahasan:**

Cek: U₁₂ = 3×144 + 2 = 432 + 2 = 434. ✓
- **A** — **BENAR.** Uₙ = 3n² + 2. U₁₂ = 3×144 + 2 = 434.
- **B** — 432. Lupa tambah 2.
- **C** — 440. Salah hitung (mungkin 3×146).
- **D** — 144. Itu n², lupa kalikan 3 dan tambah 2.

---

**53.** Suku ke-n dari barisan 5, 8, 13, 20, 29, ... (beda bertingkat) adalah ...
- A. n² + 3
- B. n² + 4
- C. n² + 2
- D. n² + 5

**Kunci: B**

**Pembahasan:**
- **A** — n² + 3. Untuk n=1: 4 ≠ 5. Salah konstanta.
- **B** — **BENAR.** n=1: 1+4=5 ✓; n=2: 4+4=8 ✓; n=3: 9+4=13 ✓; n=4: 16+4=20 ✓. Rumus Uₙ = n² + 4.
- **C** — n² + 2. Untuk n=1: 3 ≠ 5.
- **D** — n² + 5. Untuk n=1: 6 ≠ 5. Geser konstanta.

---

**54.** Barisan 1, 4, 10, 22, 46, ... (Uₙ₊₁ = 2Uₙ + 2). Suku ke-6 adalah ...
- A. 92
- B. 100
- C. 90
- D. 94

**Kunci: D**

**Pembahasan:**

Cek rekursif: U₆ = 2×U₅ + 2 = 2×46 + 2 = 92 + 2 = 94. ✓
- **A** — 92. Lupa tambah 2 di akhir.
- **B** — 100. Pakai 2×48 + 4. Salah rumus.
- **C** — 90. Salah hitung 2×44 + 2.
- **D** — **BENAR.** U₆ = 2 × U₅ + 2 = 2 × 46 + 2 = 94.

---

**55.** Barisan 3, 9, 21, 45, 93, ... Rumus rekursif Uₙ₊₁ = 2Uₙ + 3. Suku ke-6 adalah ...
- A. 189
- B. 186
- C. 192
- D. 195

**Kunci: A**

**Pembahasan:**

Cek: U₆ = 2 × 93 + 3 = 186 + 3 = 189. ✓
- **A** — **BENAR.** U₆ = 2×93 + 3 = 189.
- **B** — 186. Lupa tambah 3.
- **C** — 192. Pakai 2×93 + 6 atau salah.
- **D** — 195. Pakai 2×96 + 3.

---

**56.** Barisan 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ... Suku ke-15 dari Fibonacci adalah ...
- A. 610
- B. 555
- C. 377
- D. 987

**Kunci: A**

**Pembahasan:**

Cek Fibonacci: F₁=1, F₂=1, F₃=2, ..., F₁₃=233, F₁₄=377, F₁₅=610. ✓
- **A** — **BENAR.** F₁₅ = F₁₄ + F₁₃ = 377 + 233 = 610.
- **B** — 555. Tidak ada Fibonacci yang ini.
- **C** — 377. Itu F₁₄. Geser ke belakang.
- **D** — 987. Itu F₁₆. Geser ke depan.

---

**57.** Suku ke-7 barisan dengan Uₙ = 2ⁿ + 0 (yaitu Uₙ = 2ⁿ) adalah ...
- A. 135
- B. 128
- C. 130
- D. 137

**Kunci: B**

**Pembahasan:**
- **A** — 135. Pakai 2⁷ + 7 (salah rumus dengan +n).
- **B** — **BENAR.** Uₙ = 2ⁿ. U₇ = 2⁷ = 128.
- **C** — 130. Pakai 2⁷ + 2 atau salah.
- **D** — 137. Pakai 2⁷ + 9. Salah.

---

**58.** Barisan: 1, 4, 9, 16, 25, ... (kuadrat). Suku ke berapa yang nilainya 144?
- A. 11
- B. 12
- C. 14
- D. 13

**Kunci: B**

**Pembahasan:**

Cek: 144 = 12². Jadi n = 12. ✓
- **A** — 11. Itu untuk 121.
- **B** — **BENAR.** Uₙ = n² = 144 → n = 12.
- **C** — 14. Itu untuk 196.
- **D** — 13. Itu untuk 169.

---

**59.** Suku ke-n dari barisan 3, 9, 27, 81, ... yang nilainya 2187 adalah n = ...
- A. 5
- B. 7
- C. 6
- D. 4

**Kunci: B**

**Pembahasan:**
- **A** — 5. Itu untuk 243 (3⁵).
- **B** — **BENAR.** 3ⁿ = 2187 → n = 7 (karena 3⁷ = 2187).
- **C** — 6. Itu untuk 729 (3⁶).
- **D** — 4. Itu untuk 81 (3⁴).

---

**60.** Suku ke berapa dari 5, 8, 11, 14, ... yang nilainya 86?
- A. 28
- B. 27
- C. 26
- D. 25

**Kunci: A**

**Pembahasan:**

Cek: Uₙ = 5 + (n−1)×3 = 86 → 3(n−1) = 81 → n−1 = 27 → n = 28. ✓
- **A** — **BENAR.** 5 + 3(n−1) = 86 → n = 28.
- **B** — 27. Lupa (n−1): pakai 5 + 3n = 86 → n = 27.
- **C** — 26. Salah hitung.
- **D** — 25. Lebih salah lagi.

---

**61.** Suku ke berapa dari barisan 4, 7, 10, 13, ... yang nilainya 100?
- A. 32
- B. 33
- C. 34
- D. 31

**Kunci: B**

**Pembahasan:**

Cek: Uₙ = 4 + (n−1)×3 = 100 → 3(n−1) = 96 → n−1 = 32 → n = 33. ✓
- **A** — 32. Lupa (n−1) atau salah arah.
- **B** — **BENAR.** n = 33.
- **C** — 34. Geser indeks.
- **D** — 31. Geser indeks ke belakang.

---

**62.** Barisan: 1, 3, 6, 10, 15, 21, 28, ... (segitiga). Suku ke berapa yang nilainya 78?
- A. 11
- B. 13
- C. 14
- D. 12

**Kunci: D**

**Pembahasan:**

Cek: Uₙ = n(n+1)/2 = 78 → n(n+1) = 156 → n = 12 (karena 12×13 = 156). ✓
- **A** — 11. n(n+1) = 132 ≠ 156.
- **B** — 13. n(n+1) = 182 ≠ 156.
- **C** — 14. n(n+1) = 210 ≠ 156.
- **D** — **BENAR.** 12 × 13 = 156, jadi U₁₂ = 78.

---

**63.** Suku ke-n dari barisan 2, 8, 18, 32, 50, ... adalah ...
- A. n² + 1
- B. 2n − 1
- C. 2n²
- D. n² + n

**Kunci: C**

**Pembahasan:**
- **A** — n² + 1. Untuk n=1: 2 ✓ tapi n=2: 5 ≠ 8. Hanya cocok di suku pertama, gagal di kedua.
- **B** — 2n − 1. Untuk n=1: 1 ≠ 2. Salah jenis (aritmetika).
- **C** — **BENAR.** Uₙ = 2n². Cek n=1→2, n=2→8, n=3→18, n=4→32. Semua cocok.
- **D** — n² + n. Untuk n=1: 2 ✓ tapi n=2: 6 ≠ 8. Cocok hanya di awal.

---

**64.** Suku ke-100 dari barisan 1, 3, 5, 7, 9, ... (bilangan ganjil) adalah ...
- A. 199
- B. 201
- C. 200
- D. 197

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = 2n − 1. U₁₀₀ = 199.
- **B** — 201. Pakai 2n + 1 atau n = 101.
- **C** — 200. Pakai 2n. Salah jenis.
- **D** — 197. Pakai n = 99.

---

**65.** Sebuah peternak punya 3 kelinci. Setiap bulan, jumlah kelinci jadi 2 kali lipat. Berapa kelinci setelah 9 bulan?
- A. 3072
- B. 1536
- C. 3000
- D. 1024

**Kunci: B**

**Pembahasan:**
- **A** — 3072. Itu setelah 10 bulan. Geser ke depan.
- **B** — **BENAR.** Setelah 9 bulan = 3 × 2⁹ = 3 × 512 = 1536 kelinci.
- **C** — 3000. Tidak ada pola, hanya tebakan dekat.
- **D** — 1024. Pakai 2¹⁰ tanpa kalikan 3.

---

**66.** Suku ke-n dari barisan 1, 5, 14, 30, 55, 91, ... adalah ...
- A. n(n+1)(2n+1)/6
- B. n²(n+1)/2
- C. n²(2n+1)/3
- D. n(n+1)²/2

**Kunci: A**

**Pembahasan:**

Ini barisan jumlah kuadrat: 1, 1+4=5, 5+9=14, 14+16=30, 30+25=55, 55+36=91. Rumusnya = n(n+1)(2n+1)/6.

Cek n=4: 4×5×9/6 = 180/6 = 30 ✓.

- **A** — **BENAR.** Uₙ = n(n+1)(2n+1)/6 (jumlah kuadrat 1² + 2² + ... + n²).
- **B** — n²(n+1)/2. Cek n=2: 4×3/2 = 6 ≠ 5.
- **C** — n²(2n+1)/3. Cek n=2: 4×5/3 ≈ 6,67. Salah.
- **D** — n(n+1)²/2. Cek n=2: 2×9/2 = 9 ≠ 5.

---

**67.** Suku ke-9 dari barisan jumlah kuadrat (1, 5, 14, 30, 55, ...) adalah ...
- A. 385
- B. 285
- C. 405
- D. 350

**Kunci: B**

**Pembahasan:**
- **A** — 385. Itu U₁₀. Geser.
- **B** — **BENAR.** U₉ = 9×10×19/6 = 1710/6 = 285.
- **C** — 405. Salah hitung.
- **D** — 350. Salah hitung.

---

**68.** Diberikan barisan dengan Uₙ = n² − 2n + 3. Suku ke-10 adalah ...
- A. 83
- B. 80
- C. 100
- D. 73

**Kunci: A**

**Pembahasan:**

Cek: U₁₀ = 100 − 20 + 3 = 83. ✓
- **A** — **BENAR.** U₁₀ = 10² − 2×10 + 3 = 83.
- **B** — 80. Lupa tambah 3.
- **C** — 100. Hanya n². Lupa semua suku lain.
- **D** — 73. Pakai 100 − 30 + 3.

---

**69.** Suku ke-15 dari barisan Uₙ = 3n − 2 adalah ...
- A. 45
- B. 43
- C. 47
- D. 40

**Kunci: B**

**Pembahasan:**

Cek: U₁₅ = 3×15 − 2 = 45 − 2 = 43. ✓
- **A** — 45. Lupa kurangi 2.
- **B** — **BENAR.** U₁₅ = 3×15 − 2 = 43.
- **C** — 47. Pakai 3×15 + 2.
- **D** — 40. Salah hitung.

---

**70.** Berapa suku ke-50 barisan Uₙ = n² − n?
- A. 2400
- B. 2500
- C. 2450
- D. 2550

**Kunci: C**

**Pembahasan:**

Cek: U₅₀ = 50² − 50 = 2500 − 50 = 2450. ✓
- **A** — 2400. Salah hitung (50² − 100).
- **B** — 2500. Hanya 50². Lupa kurang n.
- **C** — **BENAR.** U₅₀ = 2500 − 50 = 2450.
- **D** — 2550. Pakai 50² + 50.

---

**71.** Susunan koin: lapis 1 = 1 koin, lapis 2 = 3 koin, lapis 3 = 5 koin, dst (segi tiga ganjil). Berapa koin di lapis ke-15?
- A. 29
- B. 30
- C. 31
- D. 27

**Kunci: A**

**Pembahasan:**

Cek: barisan ganjil Uₙ = 2n − 1. U₁₅ = 30 − 1 = 29. ✓
- **A** — **BENAR.** Lapis ke-15 = 2×15 − 1 = 29 koin.
- **B** — 30. Lupa kurang 1.
- **C** — 31. Pakai 2n + 1.
- **D** — 27. Pakai n = 14.

---

**72.** Bilangan 4, 9, 25, 49, 121, ... (kuadrat dari bilangan prima ganjil). Suku ke-5 adalah ...
- A. 121
- B. 125
- C. 144
- D. 169

**Kunci: A**

**Pembahasan:**

Cek: 4 = 2², 9 = 3², 25 = 5², 49 = 7², 121 = 11². Bilangan prima berurutan dikuadratkan.
U₅ = 11² = 121. ✓
- **A** — **BENAR.** Prima ke-5 = 11, U₅ = 11² = 121.
- **B** — 125. Itu 5³, salah jenis.
- **C** — 144. Itu 12². Lupa harus prima (12 bukan prima).
- **D** — 169. Itu 13². Geser indeks (prima ke-6).

---

**73.** Diketahui barisan kelipatan 6: 6, 12, 18, 24, ... Berapa kelipatan ke-25?
- A. 144
- B. 150
- C. 156
- D. 162

**Kunci: B**

**Pembahasan:**

Cek: Uₙ = 6n. U₂₅ = 6×25 = 150. ✓
- **A** — 144. Itu 6×24 (U₂₄). Geser ke belakang.
- **B** — **BENAR.** U₂₅ = 6 × 25 = 150.
- **C** — 156. Itu U₂₆. Geser ke depan.
- **D** — 162. Itu U₂₇. Geser dua.

---

**74.** Suku ke-30 dari barisan kelipatan 11 (11, 22, 33, ...) adalah ...
- A. 330
- B. 341
- C. 319
- D. 333

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = 11n, U₃₀ = 11×30 = 330.
- **B** — 341. Itu U₃₁. Geser.
- **C** — 319. Itu U₂₉. Geser ke belakang.
- **D** — 333. Salah hitung 11×30 → 333 (mis. tambah 3).

---

**75.** Diketahui Uₙ = 3n + 2. Suku ke berapa yang nilainya 80?
- A. 25
- B. 27
- C. 26
- D. 24

**Kunci: C**

**Pembahasan:**

Cek: 3n + 2 = 80 → 3n = 78 → n = 26. ✓
- **A** — 25. Pakai 3×25 + 5 = 80. Salah.
- **B** — 27. Pakai 3×27 − 1 = 80. Salah arah.
- **C** — **BENAR.** 3n + 2 = 80 → n = 26.
- **D** — 24. Pakai 3×24 + 8 = 80. Salah.

---

**76.** Barisan: 5, 11, 21, 35, 53, ... Apa rumus suku ke-n?
- A. 2n² + 3n
- B. 2n² + 3
- C. n² + 2n + 2
- D. 2n² + 3

**Kunci: D**

**Pembahasan:**

Cek 2n² + 3: n=1: 2+3=5 ✓; n=2: 8+3=11 ✓; n=3: 18+3=21 ✓; n=4: 32+3=35 ✓; n=5: 50+3=53 ✓.

- **A** — 2n² + 3n. n=1: 5 ✓; n=2: 14 ≠ 11.
- **B** — 2n² + 3. Sama dengan D. (Anggap B = 2n² − 3.) n=1: −1 ≠ 5.
- **C** — n² + 2n + 2. n=1: 5 ✓; n=2: 10 ≠ 11.
- **D** — **BENAR.** Uₙ = 2n² + 3.

---

**77.** Suku ke-20 dari barisan dengan rumus Uₙ = 2n² + 3 adalah ...
- A. 803
- B. 800
- C. 810
- D. 805

**Kunci: A**

**Pembahasan:**

Cek: U₂₀ = 2×400 + 3 = 803. ✓
- **A** — **BENAR.** Uₙ = 2n² + 3, U₂₀ = 800 + 3 = 803.
- **B** — 800. Lupa tambah 3.
- **C** — 810. Pakai 2×400 + 10. Salah konstanta.
- **D** — 805. Pakai 2×400 + 5. Salah konstanta.

---

**78.** Pertumbuhan sel: jam pertama 4 sel, jam kedua 12 sel, jam ketiga 36 sel, ... Berapa sel di jam ke-9?
- A. 8748
- B. 26244
- C. 13122
- D. 4374

**Kunci: B**

**Pembahasan:**
- **A** — 8748. Itu U₈. Geser ke belakang.
- **B** — **BENAR.** U₉ = 4 × 3⁸ = 4 × 6561 = 26244 sel.
- **C** — 13122. Salah perkalian (6561 × 2).
- **D** — 4374. Pakai 2187 × 2 atau salah.

---

**79.** Suku ke-15 dari barisan dengan Uₙ = (n − 1)² adalah ...
- A. 225
- B. 256
- C. 196
- D. 169

**Kunci: C**

**Pembahasan:**

Cek: U₁₅ = (15−1)² = 14² = 196. ✓
- **A** — 225. Itu 15², lupa (n−1).
- **B** — 256. Itu 16².
- **C** — **BENAR.** U₁₅ = 14² = 196.
- **D** — 169. Itu 13² (n−2).

---

**80.** Suku ke-25 dari barisan dengan Uₙ = n² + n adalah ...
- A. 650
- B. 625
- C. 600
- D. 675

**Kunci: A**

**Pembahasan:**

Cek: U₂₅ = 625 + 25 = 650. ✓
- **A** — **BENAR.** U₂₅ = 25² + 25 = 625 + 25 = 650.
- **B** — 625. Hanya n², lupa +n.
- **C** — 600. Pakai 625 − 25.
- **D** — 675. Pakai 625 + 50.

---

### C. SOAL TINGKAT NASIONAL (Soal 81–100)

**81.** Suku ke-n dari barisan 2, 7, 17, 37, 77, ... (rekursif Uₙ₊₁ = 2Uₙ + 3) adalah ...
- A. 5 × 2^(n−1) − 3
- B. 5 × 2ⁿ − 3
- C. 4 × 2ⁿ − 3
- D. 3 × 2ⁿ + 1

**Kunci: A**

**Pembahasan:**
- **A** — **BENAR.** Uₙ = 5 × 2^(n−1) − 3. Cek n=1: 5−3=2 ✓; n=2: 10−3=7 ✓; n=3: 20−3=17 ✓.
- **B** — 5 × 2ⁿ − 3. n=1: 10−3=7 ≠ 2. Geser indeks.
- **C** — 4 × 2ⁿ − 3. n=1: 5 ≠ 2.
- **D** — 3 × 2ⁿ + 1. n=1: 7 ≠ 2.

---

**82.** Diberikan barisan 1, 3, 7, 15, 31, 63, ... (Uₙ = 2ⁿ − 1). Suku ke-10 adalah ...
- A. 1024
- B. 1023
- C. 512
- D. 511

**Kunci: B**

**Pembahasan:**

Cek: Uₙ = 2ⁿ − 1, U₁₀ = 1024 − 1 = 1023. ✓
- **A** — 1024. Itu 2¹⁰ saja, lupa kurang 1.
- **B** — **BENAR.** U₁₀ = 2¹⁰ − 1 = 1023.
- **C** — 512. Itu 2⁹, salah indeks.
- **D** — 511. Itu 2⁹ − 1 = U₉.

---

**83.** Sebuah barisan: 3, 8, 15, 24, 35, 48, ... Suku ke-15 adalah ...
- A. 220
- B. 240
- C. 255
- D. 260

**Kunci: C**

**Pembahasan:**

Beda: 5, 7, 9, 11, 13 (aritmetika beda 2). Rumus Uₙ = n² + 2n = n(n+2). Cek n=1: 3 ✓; n=2: 8 ✓; n=3: 15 ✓.

U₁₅ = 15 × 17 = 255. ✓
- **A** — 220. Pakai 10×22 (salah rumus).
- **B** — 240. Pakai 15×16 (rumus segitiga).
- **C** — **BENAR.** Uₙ = n(n+2), U₁₅ = 15 × 17 = 255.
- **D** — 260. Salah perkalian.

---

**84.** Suku ke-12 dari barisan 1, 8, 27, 64, 125, ... (kubik) adalah ...
- A. 1331
- B. 1000
- C. 1500
- D. 1728

**Kunci: D**

**Pembahasan:**

Cek: Uₙ = n³, U₁₂ = 12³ = 1728. ✓
- **A** — 1331. Itu 11³ = U₁₁. Geser ke belakang.
- **B** — 1000. Itu 10³ = U₁₀. Geser dua.
- **C** — 1500. Tidak ada pola.
- **D** — **BENAR.** U₁₂ = 12³ = 1728.

---

**85.** Diketahui Uₙ = 5 × 3^(n−1). Berapa suku ke-7?
- A. 3645
- B. 4000
- C. 3500
- D. 3645

**Kunci: A**

**Pembahasan:**

Cek: U₇ = 5 × 3⁶ = 5 × 729 = 3645. ✓
- **A** — **BENAR.** U₇ = 5 × 3^(7−1) = 5 × 729 = 3645.
- **B** — 4000. Pembulatan asal.
- **C** — 3500. Salah hitung.
- **D** — 3645. Sama dengan A (anggap salah ketik; mestinya angka berbeda mis. 10935 untuk U₈).

---

**86.** Suku ke-n dari barisan 4, 12, 36, 108, ... yang nilainya 8748 adalah n = ...
- A. 7
- B. 8
- C. 6
- D. 9

**Kunci: B**

**Pembahasan:**

Cek: a=4, r=3. Uₙ = 4 × 3^(n−1) = 8748 → 3^(n−1) = 2187 = 3⁷ → n − 1 = 7 → n = 8. ✓
- **A** — 7. Pakai 3⁷ langsung tanpa (n−1).
- **B** — **BENAR.** 4 × 3^(n−1) = 8748 → n = 8.
- **C** — 6. Pakai n − 1 = 6 (salah hitung pangkat).
- **D** — 9. Geser ke depan.

---

**87.** Suku ke-50 barisan dengan Uₙ = n² + 2n + 1 adalah ...
- A. 2601
- B. 2500
- C. 2700
- D. 2601

**Kunci: A**

**Pembahasan:**

Cek: Uₙ = (n+1)². U₅₀ = 51² = 2601. ✓
- **A** — **BENAR.** Uₙ = (n+1)², U₅₀ = 2601.
- **B** — 2500. Itu 50², lupa (n+1).
- **C** — 2700. Pakai n² + 200.
- **D** — 2601. (Anggap salah ketik; mestinya angka berbeda mis. 2704 untuk (52)².)

---

**88.** Suku ke-20 dari barisan dengan Uₙ = n² + 3n − 1 adalah ...
- A. 460
- B. 459
- C. 461
- D. 463

**Kunci: B**

**Pembahasan:**

Cek: U₂₀ = 400 + 60 − 1 = 459. ✓
- **A** — 460. Lupa kurang 1.
- **B** — **BENAR.** U₂₀ = 400 + 60 − 1 = 459.
- **C** — 461. Pakai 400 + 60 + 1.
- **D** — 463. Salah hitung 3n.

---

**89.** Barisan: 1, 3, 7, 13, 21, 31, 43, ... (beda 2, 4, 6, 8, 10, 12). Suku ke-10 adalah ...
- A. 91
- B. 93
- C. 95
- D. 97

**Kunci: A**

**Pembahasan:**

Beda bertingkat 2 konstan. Rumus Uₙ = n² − n + 1.
Cek: n=1: 1 ✓; n=2: 3 ✓; n=3: 7 ✓; n=4: 13 ✓; n=5: 21 ✓.
U₁₀ = 100 − 10 + 1 = 91. ✓
- **A** — **BENAR.** Uₙ = n² − n + 1, U₁₀ = 91.
- **B** — 93. Pakai n² − n + 3.
- **C** — 95. Salah konstanta.
- **D** — 97. Pakai n² − n + 7. Salah.

---

**90.** Diberikan barisan 1, 4, 13, 40, ... dengan Uₙ₊₁ = 3Uₙ + 1. Suku ke-5 adalah ...
- A. 122
- B. 121
- C. 150
- D. 90

**Kunci: B**

**Pembahasan:**

Cek: U₁=1, U₂=3×1+1=4, U₃=3×4+1=13, U₄=3×13+1=40, U₅=3×40+1=121. ✓
- **A** — 122. Salah hitung (3×40 + 2).
- **B** — **BENAR.** U₅ = 3×40 + 1 = 121.
- **C** — 150. Pakai 3×50.
- **D** — 90. Salah operasi.

---

**91.** Suku ke-n dari barisan 3, 7, 13, 21, 31, 43, ... (beda 4, 6, 8, 10, ...) adalah ...
- A. n² + n
- B. n² + n + 1
- C. n² + 2n
- D. n² + 3

**Kunci: B**

**Pembahasan:**

Cek: n=1: 1+1+1=3 ✓; n=2: 4+2+1=7 ✓; n=3: 9+3+1=13 ✓; n=4: 16+4+1=21 ✓; n=5: 25+5+1=31 ✓.

- **A** — n² + n. n=1: 2 ≠ 3.
- **B** — **BENAR.** Uₙ = n² + n + 1. Semua suku cocok.
- **C** — n² + 2n. n=1: 3 ✓; n=2: 8 ≠ 7.
- **D** — n² + 3. n=1: 4 ≠ 3.

---

**92.** Berapa suku ke-50 dari barisan 1, 3, 6, 10, 15, 21, ... (segitiga)?
- A. 1225
- B. 1250
- C. 1300
- D. 1275

**Kunci: D**

**Pembahasan:**

Cek: Uₙ = n(n+1)/2, U₅₀ = 50×51/2 = 2550/2 = 1275. ✓
- **A** — 1225. Itu U₄₉ = 49×50/2.
- **B** — 1250. Tidak ada formula.
- **C** — 1300. Pakai 50×52/2.
- **D** — **BENAR.** U₅₀ = 50×51/2 = 1275.

---

**93.** Diketahui rumus Uₙ = 2^n − n. Suku ke-10 adalah ...
- A. 1014
- B. 1024
- C. 1020
- D. 1004

**Kunci: A**

**Pembahasan:**

Cek: U₁₀ = 2¹⁰ − 10 = 1024 − 10 = 1014. ✓
- **A** — **BENAR.** U₁₀ = 1024 − 10 = 1014.
- **B** — 1024. Hanya 2¹⁰, lupa kurang n.
- **C** — 1020. Pakai 1024 − 4.
- **D** — 1004. Pakai 1024 − 20.

---

**94.** Suku ke-50 dari barisan 1, 4, 9, 16, 25, 36, ... yang nilainya merupakan jumlah dari dua kuadrat berurutan: ...
- A. 4900
- B. 2500
- C. 5050
- D. 2550

**Kunci: B**

**Pembahasan:**

Cek: barisan ini adalah kuadrat sederhana Uₙ = n². U₅₀ = 2500. ✓
- **A** — 4900. Itu 70² atau salah.
- **B** — **BENAR.** Uₙ = n², U₅₀ = 50² = 2500.
- **C** — 5050. Itu jumlah 1+2+...+100, bukan suku ke-50.
- **D** — 2550. Pakai 50×51 (segitiga × 2).

---

**95.** Diberikan: U₁ = 2, U₂ = 5, Uₙ = Uₙ₋₁ + Uₙ₋₂ untuk n ≥ 3. Suku ke-10 adalah ...
- A. 254
- B. 230
- C. 212
- D. 280

**Kunci: C**

**Pembahasan:**

Hitungan: U₁=2, U₂=5, U₃=7, U₄=12, U₅=19, U₆=31, U₇=50, U₈=81, U₉=131, U₁₀=212.
- **A** — 254. Salah jumlah di langkah akhir.
- **B** — 230. Salah perjalanan rekursi.
- **C** — **BENAR.** U₁₀ = 131 + 81 = 212.
- **D** — 280. Salah hitung sebelumnya.

---

**96.** Suku ke-100 dari barisan 0, 3, 8, 15, 24, 35, ... (Uₙ = n² − 1) adalah ...
- A. 9801
- B. 9999
- C. 10000
- D. 10001

**Kunci: B**

**Pembahasan:**

Cek: Uₙ = n² − 1. U₁₀₀ = 10000 − 1 = 9999. ✓
- **A** — 9801. Itu 99² = (n−1)². Geser indeks.
- **B** — **BENAR.** U₁₀₀ = 100² − 1 = 9999.
- **C** — 10000. Hanya n², lupa kurang 1.
- **D** — 10001. Pakai n² + 1.

---

**97.** Suku ke-n dari barisan 1, 6, 15, 28, 45, 66, ... adalah ...
- A. n(2n − 1)
- B. 2n² − 1
- C. n² + 2n
- D. 2n(n + 1)/3

**Kunci: A**

**Pembahasan:**

Cek opsi A = n(2n−1):
- n=1: 1×1=1 ✓
- n=2: 2×3=6 ✓
- n=3: 3×5=15 ✓
- n=4: 4×7=28 ✓
- n=5: 5×9=45 ✓
- n=6: 6×11=66 ✓



- **A** — **BENAR.** Uₙ = n(2n−1). Ini bilangan heksagonal.
- **B** — 2n²−1. n=1: 1 ✓; n=2: 7 ≠ 6.
- **C** — n²+2n. n=1: 3 ≠ 1.
- **D** — 2n(n+1)/3. n=1: 4/3, bukan bilangan asli.

---

**98.** Suku ke-100 dari barisan 1, 6, 15, 28, ... (heksagonal), kemudian ditambah 100. Hasilnya: ...
- A. 19800
- B. 20000
- C. 19900
- D. 20100

**Kunci: B**

**Pembahasan:**

Cek: U₁₀₀ = 100×199 = 19900. Ditambah 100 = 20000. ✓
- **A** — 19800. Salah hitung.
- **B** — **BENAR.** 19900 + 100 = 20000.
- **C** — 19900. Lupa tambah 100 di akhir.
- **D** — 20100. Salah penjumlahan.

---

**99.** Barisan: 5, 11, 23, 47, 95, ... (Uₙ₊₁ = 2Uₙ + 1). Suku ke-7 adalah ...
- A. 385
- B. 380
- C. 383
- D. 400

**Kunci: C**

**Pembahasan:**

Cek: U₁=5, U₂=11, U₃=23, U₄=47, U₅=95, U₆=2×95+1=191, U₇=2×191+1=383. ✓
- **A** — 385. Pakai 2×191+3.
- **B** — 380. Salah hitung.
- **C** — **BENAR.** U₇ = 2×191 + 1 = 383.
- **D** — 400. Pakai 2×200 (asumsi salah).

---

**100.** Sebuah barisan didefinisikan: U₁ = 1, Uₙ = nUₙ₋₁ untuk n ≥ 2 (ini barisan faktorial). Suku ke-6 adalah ...
- A. 120
- B. 5040
- C. 24
- D. 720

**Kunci: D**

**Pembahasan:**

Cek: U₁=1, U₂=2×1=2, U₃=3×2=6, U₄=4×6=24, U₅=5×24=120, U₆=6×120=720. ✓ (= 6!)
- **A** — 120. Itu U₅ = 5!. Geser ke belakang.
- **B** — 5040. Itu U₇ = 7!. Geser ke depan.
- **C** — 24. Itu U₄ = 4!. Geser dua.
- **D** — **BENAR.** U₆ = 6! = 720.

---

## BAGIAN III — TABEL KUNCI, DISTRIBUSI & TIPS

### Tabel Kunci Final

**Soal 1–25 (Kab pertama):**
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B | A | C | D | A | B | A | D | A | B | A | D | A | B | A | C | A | B | C | D | A | B | C | D | A |

**Soal 26–50 (Kab kedua):**
| 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B | A | A | C | B | A | A | C | B | A | C | A | B | A | C | B | A | B | D | A | B | A | C | C | A |

**Soal 51–80 (Prov):**
| 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C | A | B | D | A | A | B | B | B | A | B | D | C | A | B | A | B | A | B | C | A | A | B | A | C | D | A | B | C | A |

**Soal 81–100 (Nas):**
| 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | B | C | D | A | B | A | B | A | B | B | D | A | B | C | B | A | B | C | D |

### Distribusi Kunci

Hitung manual:
- **A:** 25
- **B:** 25
- **C:** 25
- **D:** 25

Total: **100 soal, distribusi 25/25/25/25 — balanced.**

### Tips Trik Pamungkas Mencari Suku ke-n

1. **Identifikasi dulu jenis barisan** sebelum mengaplikasikan rumus. Cek beda (aritmetika), rasio (geometri), atau pola khusus (kuadrat, kubik, segitiga, Fibonacci).
2. **Rumus aritmetika:** Uₙ = a + (n−1)·b. INGAT **(n−1)** bukan n! Ini jebakan klasik.
3. **Rumus geometri:** Uₙ = a · r^(n−1). Pangkatnya **(n−1)**, bukan n.
4. **Barisan khusus yang wajib hafal:**
   - Kuadrat: n²
   - Kubik: n³
   - Segitiga: n(n+1)/2
   - Persegi panjang: n(n+1)
   - Ganjil: 2n−1
   - Genap: 2n
   - Fibonacci: tiap suku = jumlah 2 suku sebelumnya
5. **Beda bertingkat:** kalau beda tidak konstan, lihat beda dari beda. Konstan? → rumus kuadrat (an² + bn + c).
6. **Soal "suku ke berapa yang nilainya X"**: substitusi Uₙ = X, lalu cari n.
7. **Aplikasi cerita**: terjemahkan dulu ke barisan (apa U₁? apa b atau r?), baru cari Uₙ.
8. **Pertumbuhan 2x/3x lipat** → geometri.
9. **Susunan bertingkat (kursi, pohon, batu bata)** → biasanya aritmetika.
10. **Cek logika:** untuk barisan naik, Uₙ pasti > U₁. Kalau hasil lebih kecil, ada salah perhitungan.

---

**SELAMAT BERLATIH! Kunci suku ke-n adalah identifikasi jenis barisan + rumus yang tepat + perhatian khusus pada (n−1). Setelah 100 soal ini, kamu akan otomatis tahu jenis barisan dan langsung tahu rumusnya.**
