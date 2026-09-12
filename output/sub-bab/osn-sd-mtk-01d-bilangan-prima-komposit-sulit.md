# OSN/KSN SD — MTK · Sub-Bab 01d: Bilangan Prima & Komposit (Tingkat Sulit)

> **Profil**: 100 Nas = 100 soal PG
> **Fokus**: Rumus banyak/jumlah faktor dari faktorisasi prima, bilangan sempurna/berlimpah/kurang, prima Mersenne (termasuk jebakannya), konstruksi Euclid, semiprima tersembunyi, faktorisasi bilangan besar, rumus Legendre (pangkat prima dalam faktorial & angka nol di akhir), Konjektur Goldbach, twin/cousin/sexy prime, celah (gap) antar prima, banyak faktor prima berbeda, kuadrat sempurna via faktorisasi, polinomial Euler, FPB/KPK lewat faktorisasi prima, dan Postulat Bertrand.
> **Target**: SD kelas 5–6 persiapan OSN/KSN
> **Estimasi waktu**: 6–9 jam (boleh dibagi beberapa sesi)

---

## 📋 Daftar Isi

- **Bagian I — Konsep & Strategi** — rumus dan trik tingkat lanjut yang menjadi dasar seluruh soal Nasional di file ini.
- **Bagian II — 100 Soal PG** — 100 Nas (C4–C5), lengkap dengan pembahasan analisis 4 opsi.
- **Bagian III — Kunci & Distribusi** — tabel kunci, distribusi A/B/C/D, dan strategi belajar.

---

# Bagian I — Konsep & Strategi

Konsep dasar (definisi prima/komposit, daftar 25 prima ≤ 100, tes keprimaan dengan √n, saringan Eratosthenes) sudah dibahas tuntas di file `osn-sd-mtk-01d-bilangan-prima-komposit-campur.md`. Bagian ini fokus pada rumus dan pola **tingkat Nasional** yang jadi dasar 100 soal berikut.

## 1. Rumus Banyak Faktor dari Faktorisasi Prima

Jika **n = p^a × q^b × r^c × …** (p, q, r prima berbeda), maka **banyak faktor (pembagi) dari n** adalah:

**τ(n) = (a + 1)(b + 1)(c + 1)…**

Contoh: 360 = 2³ × 3² × 5¹ → τ(360) = (3+1)(2+1)(1+1) = 4 × 3 × 2 = **24 faktor**.

**Mencari bilangan terkecil dengan tepat k faktor**: uraikan k sebagai hasil kali bilangan bulat > 1 dengan berbagai cara, lalu kurangi 1 dari tiap faktor untuk jadi pangkat, pasangkan **pangkat terbesar ke prima terkecil** (2), lalu bandingkan semua kemungkinan dan ambil yang terkecil.

- k = 3 → hanya 3 = 3 → pangkat (2) → bentuk **p²** → terkecil = 2² = 4.
- k = 4 → 4 = 4 atau 2×2 → bentuk **p³** (2³=8) atau **p×q** (2×3=6) → terkecil = **6**.
- k = 12 → 12 = 12, 6×2, 4×3, 3×2×2 → bentuk p¹¹, p⁵q, p³q², p²qr → terkecil dari p²qr = 2²×3×5 = **60**.

**Jebakan klasik**: banyak siswa lupa membandingkan SEMUA bentuk penguraian k, sehingga menjawab bentuk yang "kelihatan pertama" padahal bukan yang terkecil.

## 2. Rumus Jumlah Faktor (Sigma)

**Jumlah SEMUA faktor** (termasuk 1 dan n sendiri) dari n = p^a × q^b × … adalah:

**σ(n) = (1 + p + p² + … + p^a)(1 + q + q² + … + q^b)…**

Contoh: 36 = 2² × 3² → σ(36) = (1+2+4)(1+3+9) = 7 × 13 = **91**.

## 3. Bilangan Sempurna, Berlimpah, dan Kurang

Bandingkan **jumlah faktor SEJATI** (semua faktor KECUALI dirinya sendiri) dengan bilangan itu sendiri:

- **Sempurna (perfect)**: jumlah faktor sejati **= n**. Contoh: 6 (1+2+3=6), 28 (1+2+4+7+14=28), 496, 8128.
- **Berlimpah (abundant)**: jumlah faktor sejati **> n**. Contoh: 12 (1+2+3+4+6=16>12), 18, 20, 24.
- **Kurang (deficient)**: jumlah faktor sejati **< n**. Contoh: 10 (1+2+5=8<10), 14, 15, 16, 22. Semua bilangan prima otomatis kurang (faktor sejatinya cuma 1).

## 4. Prima Mersenne — dan Jebakannya

Bentuk **2^p − 1** dengan p prima **kadang** menghasilkan prima (disebut prima Mersenne): 3, 7, 31, 127, 8191, 131071, …

**JEBAKAN OSN PENTING**: tidak semua 2^p − 1 dengan p prima otomatis prima!
- p = 11 → 2¹¹ − 1 = 2047 = **23 × 89** (komposit!)
- p = 23 → 2²³ − 1 = 8.388.607 = **47 × 178.481** (komposit!)

Jadi p prima hanyalah SYARAT PERLU, bukan syarat cukup, untuk 2^p − 1 menjadi prima.

## 5. Konstruksi Euclid (Bukti Tak Hingga Banyaknya Prima) — dan Jebakannya

Euclid membuktikan prima tak hingga banyaknya dengan ide: kalikan beberapa prima pertama, tambah 1. Hasilnya **tidak habis dibagi** prima-prima yang dikalikan tadi (karena sisa baginya selalu 1) — TAPI ini **tidak berarti hasilnya otomatis prima**! Bisa saja hasilnya komposit dari prima-prima LAIN yang lebih besar.

**Contoh termasyhur**: 2×3×5×7×11×13 + 1 = 30.031 = **59 × 509** (komposit — bukan prima baru, meski tidak habis oleh 2, 3, 5, 7, 11, 13).

## 6. Semiprima Tersembunyi

**Semiprima** = hasil kali tepat dua bilangan prima (boleh sama atau beda). Banyak bilangan ganjil 3 digit yang lolos tes 2, 3, 5, 7 secara "kelihatan" tapi sebenarnya semiprima dengan dua faktor prima berukuran sedang (11–31), misalnya 221 = 13×17, 391 = 17×23, 667 = 23×29. **Wajib cek pembagi prima sampai √n**, jangan berhenti di 7 untuk bilangan tiga digit ke atas.

## 7. Rumus Legendre — Pangkat Prima dalam Faktorial

**Pangkat prima p dalam n!** dihitung dengan:

**eₚ(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + …** (dijumlah sampai hasil bagi menjadi 0)

Contoh: pangkat 5 dalam 100! = ⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ = 20 + 4 + 0 = **24**.

**Aplikasi banyak angka nol di akhir n!** = pangkat 5 dalam n! (karena pangkat 2 selalu jauh lebih besar dari pangkat 5, jadi 5 yang membatasi jumlah pasangan 2×5=10).

## 8. Konjektur Goldbach

**Setiap bilangan genap > 2 dapat ditulis sebagai jumlah dua bilangan prima** (belum terbukti secara umum, tapi diverifikasi untuk bilangan sangat besar). Soal OSN sering meminta **menghitung berapa PASANGAN** prima p ≤ q yang memenuhi p + q = suatu bilangan genap tertentu — jawabannya bisa lebih dari satu pasangan.

## 9. Twin, Cousin, dan Sexy Prime

- **Twin prime**: selisih **2**. Contoh: (59,61), (101,103), (107,109), (137,139), (179,181).
- **Cousin prime**: selisih **4**. Contoh: (67,71), (97,101), (109,113), (163,167), (193,197).
- **Sexy prime**: selisih **6**. Contoh: (53,59), (61,67), (131,137), (151,157), (191,197).

## 10. Celah (Gap) Antar Prima Berurutan

Semakin besar bilangannya, semakin lebar potensi jarak antara dua prima berurutan. Contoh celah lebar: antara 113 dan 127 (celah 14), antara 199 dan 211 (celah 12). **Postulat Bertrand** menjamin: untuk setiap n > 1, **selalu ada minimal satu prima** di antara n dan 2n.

## 11. Banyak Faktor Prima Berbeda

Jangan tertukar antara **banyak faktor** (semua pembagi) dengan **banyak faktor prima berbeda** (banyak jenis prima penyusun). Contoh: 60 = 2² × 3 × 5 punya 12 faktor TOTAL, tapi hanya **3 faktor prima berbeda** (2, 3, 5).

## 12. Kuadrat Sempurna via Faktorisasi Prima

n adalah **kuadrat sempurna** jika dan hanya jika **SEMUA pangkat pada faktorisasi primanya genap**. Contoh: 196 = 2² × 7² (semua pangkat genap) → 196 = 14² ✓. Sebaliknya, 180 = 2² × 3² × 5¹ (pangkat 5 ganjil) → BUKAN kuadrat sempurna.

## 13. Polinomial Penghasil Prima (Euler)

Rumus **n² + n + 41** menghasilkan bilangan prima untuk n = 0, 1, 2, …, 39 (40 nilai berturut-turut!) — tapi **gagal pertama kali di n = 40**, karena 40² + 40 + 41 = 1681 = **41²** (komposit). Pelajaran: pola yang benar untuk banyak nilai TIDAK menjamin berlaku selamanya.

## 14. FPB & KPK Lewat Faktorisasi Prima (Bilangan Besar)

- **FPB** = kalikan tiap prima bersama dengan **pangkat TERKECIL**.
- **KPK** = kalikan tiap prima yang muncul dengan **pangkat TERBESAR**.

Contoh: 84 = 2²×3×7, 126 = 2×3²×7 → FPB = 2¹×3¹×7¹ = 42; KPK = 2²×3²×7¹ = 252.

---

# Bagian II — 100 Soal PG

## NAS · Soal 1-100 (Tingkat Nasional, C4-C5)

Bagian ini berisi soal tingkat nasional: rumus banyak/jumlah faktor, bilangan sempurna, prima Mersenne dan jebakannya, konstruksi Euclid, semiprima tersembunyi, faktorisasi bilangan besar, rumus Legendre, Goldbach, twin/cousin/sexy prime, celah prima, kuadrat sempurna, polinomial Euler, FPB/KPK, dan Postulat Bertrand. Setiap soal membutuhkan 3–5 langkah berpikir.

---

**1.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **3 faktor** adalah ….
- A. 8
- B. 9
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- **A salah** — 8 = 2³, faktor {1, 2, 4, 8} = 4 faktor, bukan 3.
- **B salah** — 9 = 3², faktor {1, 3, 9} = tepat 3 faktor (polanya benar, bentuk p²), TAPI bukan yang **terkecil** — 4 lebih kecil dan juga berbentuk p².
- **C salah** — 6 = 2×3, faktor {1, 2, 3, 6} = 4 faktor.
- **D benar** — Tepat 3 faktor hanya terjadi pada bentuk **p²** (kuadrat prima): faktornya pasti 1, p, p². Prima terkecil = 2 → 2² = **4**, faktor {1, 2, 4}.
- **Konsep kunci:** Tepat 3 faktor ⟺ bentuk p² (kuadrat bilangan prima), karena faktornya selalu 1, p, dan p².
- **Langkah Penyelesaian:**
  1. Ingat pola: tepat 3 faktor hanya dari bentuk p².
  2. Ambil prima terkecil p = 2 → 2² = 4.
  3. Cek faktor 4 = {1, 2, 4}, tepat 3 (jawaban D).

---

**2.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **4 faktor** adalah ….
- A. 6
- B. 8
- C. 4
- D. 10

**Kunci: A**
**Pembahasan:**
- **A benar** — Tepat 4 faktor terjadi pada bentuk **p³** (terkecil 2³=8) atau **p×q** (terkecil 2×3=6). Bandingkan: 6 < 8, jadi terkecil = **6**, faktor {1, 2, 3, 6}.
- **B salah** — 8 = 2³ memang punya 4 faktor {1,2,4,8}, tapi bukan yang terkecil.
- **C salah** — 4 = 2² hanya punya 3 faktor {1,2,4}.
- **D salah** — 10 = 2×5 punya 4 faktor {1,2,5,10}, tapi lebih besar dari 6.
- **Konsep kunci:** Tepat 4 faktor bisa dari bentuk p³ atau p×q; bandingkan semua bentuk untuk menemukan yang terkecil.
- **Langkah Penyelesaian:**
  1. Uraikan 4 = 4 (→ p³) atau 4 = 2×2 (→ p×q).
  2. Hitung p³ terkecil = 8; p×q terkecil = 2×3 = 6.
  3. Bandingkan: 6 < 8, jawaban A.

---

**3.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **7 faktor** adalah ….
- A. 32
- B. 128
- C. 64
- D. 36

**Kunci: C**
**Pembahasan:**
- **A salah** — 32 = 2⁵, τ(32) = 5+1 = 6 faktor, bukan 7.
- **B salah** — 128 = 2⁷, τ(128) = 7+1 = 8 faktor, bukan 7.
- **C benar** — Karena 7 adalah bilangan prima, satu-satunya cara menguraikannya adalah 7 = 7, sehingga bentuknya harus **p⁶**. Prima terkecil = 2 → 2⁶ = **64**, τ(64) = 6+1 = 7 ✓.
- **D salah** — 36 = 2²×3², τ(36) = 3×3 = 9 faktor, bukan 7.
- **Konsep kunci:** Karena k = 7 prima, bentuk satu-satunya untuk tepat 7 faktor adalah p⁶.
- **Langkah Penyelesaian:**
  1. Karena 7 prima, hanya ada satu penguraian: 7 = 7 → bentuk p⁶.
  2. Ambil prima terkecil p = 2 → 2⁶ = 64.
  3. Cek τ(64) = 7 (jawaban C).

---

**4.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **9 faktor** adalah ….
- A. 256
- B. 36
- C. 100
- D. 16

**Kunci: B**
**Pembahasan:**
- **A salah** — 256 = 2⁸, τ(256) = 8+1 = 9 faktor (benar polanya, bentuk p⁸), tapi jauh lebih besar dari kemungkinan lain.
- **B benar** — 9 = 9 (→ p⁸) atau 9 = 3×3 (→ p²q²). Bentuk p²q² terkecil = 2²×3² = **36**, τ(36) = 3×3 = 9 ✓. Bandingkan 36 < 256.
- **C salah** — 100 = 2²×5² juga punya 9 faktor (bentuk p²q² dengan q=5), tapi lebih besar dari 36 (q seharusnya prima berikutnya yaitu 3, bukan 5).
- **D salah** — 16 = 2⁴, τ(16) = 4+1 = 5 faktor, bukan 9.
- **Konsep kunci:** Tepat 9 faktor bisa dari bentuk p⁸ atau p²q²; pilih prima terkecil berpasangan (2 dan 3) untuk hasil paling kecil.
- **Langkah Penyelesaian:**
  1. Uraikan 9 = 9 (→ p⁸) atau 3×3 (→ p²q²).
  2. Hitung p⁸ terkecil = 256; p²q² terkecil = 2²×3² = 36.
  3. Bandingkan: 36 < 256, jawaban B.

---

**5.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **10 faktor** adalah ….
- A. 512
- B. 80
- C. 36
- D. 48

**Kunci: D**
**Pembahasan:**
- **A salah** — 512 = 2⁹, τ(512) = 9+1 = 10 faktor (bentuk p⁹ benar), tapi jauh lebih besar dari kemungkinan lain.
- **B salah** — 80 = 2⁴×5, τ(80) = 5×2 = 10 faktor (bentuk p⁴q benar), tapi lebih besar dari 48 karena memakai q = 5, bukan 3.
- **C salah** — 36 = 2²×3², τ(36) = 9 faktor, bukan 10.
- **D benar** — 10 = 10 (→ p⁹) atau 10 = 5×2 (→ p⁴q). Bentuk p⁴q terkecil = 2⁴×3 = **48**, τ(48) = 5×2 = 10 ✓. Ini yang paling kecil di antara semua kemungkinan.
- **Konsep kunci:** Tepat 10 faktor bisa dari p⁹ atau p⁴q; pasangkan pangkat terbesar dengan prima terkecil untuk hasil paling minimal.
- **Langkah Penyelesaian:**
  1. Uraikan 10 = 10 (→ p⁹) atau 5×2 (→ p⁴q).
  2. Hitung p⁴q terkecil: 2⁴×3 = 48 (lebih kecil dari 2⁴×5=80 dan dari 2⁹=512).
  3. Jawaban D (48).

---

**6.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **11 faktor** adalah ….
- A. 512
- B. 2048
- C. 1024
- D. 256

**Kunci: C**
**Pembahasan:**
- **A salah** — 512 = 2⁹, τ(512) = 9+1 = 10 faktor, bukan 11.
- **B salah** — 2048 = 2¹¹, τ(2048) = 11+1 = 12 faktor, bukan 11.
- **C benar** — Karena 11 prima, satu-satunya bentuk adalah **p¹⁰**. Prima terkecil = 2 → 2¹⁰ = **1024**, τ(1024) = 10+1 = 11 ✓.
- **D salah** — 256 = 2⁸, τ(256) = 8+1 = 9 faktor, bukan 11.
- **Konsep kunci:** Karena 11 prima, tepat 11 faktor hanya mungkin dari bentuk p¹⁰.
- **Langkah Penyelesaian:**
  1. Karena 11 prima, bentuknya harus p¹⁰.
  2. Ambil p = 2 → 2¹⁰ = 1024.
  3. Cek τ(1024) = 11 (jawaban C).

---

**7.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **12 faktor** adalah ….
- A. 60
- B. 72
- C. 96
- D. 48

**Kunci: A**
**Pembahasan:**
- **A benar** — 12 = 3×2×2 (→ **p²qr**). Bentuk p²qr terkecil = 2²×3×5 = **60**, τ(60) = 3×2×2 = 12 ✓. Ini paling kecil di antara semua bentuk (p¹¹, p⁵q=96, p³q²=72, p²qr=60).
- **B salah** — 72 = 2³×3², τ(72) = 4×3 = 12 faktor (bentuk p³q² benar), tapi 72 > 60.
- **C salah** — 96 = 2⁵×3, τ(96) = 6×2 = 12 faktor (bentuk p⁵q benar), tapi 96 > 60.
- **D salah** — 48 = 2⁴×3, τ(48) = 5×2 = 10 faktor, bukan 12.
- **Konsep kunci:** Tepat 12 faktor punya beberapa bentuk (p¹¹, p⁵q, p³q², p²qr); bentuk dengan tiga prima berbeda (p²qr) biasanya menghasilkan angka paling kecil.
- **Langkah Penyelesaian:**
  1. Uraikan 12 = 12, 6×2, 4×3, 3×2×2 → empat bentuk berbeda.
  2. Hitung tiap bentuk terkecil: p¹¹ (besar), p⁵q=96, p³q²=72, p²qr=60.
  3. Bandingkan semuanya: terkecil = 60 (jawaban A).

---

**8.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **14 faktor** adalah ….
- A. 128
- B. 192
- C. 144
- D. 96

**Kunci: B**
**Pembahasan:**
- **A salah** — 128 = 2⁷, τ(128) = 7+1 = 8 faktor, bukan 14.
- **B benar** — 14 = 7×2 (→ **p⁶q**). Bentuk p⁶q terkecil = 2⁶×3 = **192**, τ(192) = 7×2 = 14 ✓. (Bentuk p¹³ jauh lebih besar.)
- **C salah** — 144 = 2⁴×3², τ(144) = 5×3 = 15 faktor, bukan 14.
- **D salah** — 96 = 2⁵×3, τ(96) = 6×2 = 12 faktor, bukan 14.
- **Konsep kunci:** Tepat 14 faktor (14 = 7×2, keduanya prima) hanya punya dua bentuk: p¹³ atau p⁶q; p⁶q jauh lebih kecil.
- **Langkah Penyelesaian:**
  1. Uraikan 14 = 14 (→ p¹³, sangat besar) atau 7×2 (→ p⁶q).
  2. Hitung p⁶q terkecil: 2⁶×3 = 192.
  3. Jawaban B.

---

**9.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **15 faktor** adalah ….
- A. 128
- B. 192
- C. 96
- D. 144

**Kunci: D**
**Pembahasan:**
- **A salah** — 128 = 2⁷, τ(128) = 8 faktor, bukan 15.
- **B salah** — 192 = 2⁶×3, τ(192) = 7×2 = 14 faktor, bukan 15.
- **C salah** — 96 = 2⁵×3, τ(96) = 6×2 = 12 faktor, bukan 15.
- **D benar** — 15 = 5×3 (→ **p⁴q²**). Bentuk p⁴q² terkecil = 2⁴×3² = **144**, τ(144) = 5×3 = 15 ✓.
- **Konsep kunci:** Tepat 15 faktor (15 = 5×3) berbentuk p¹⁴ (sangat besar) atau p⁴q²; pasangkan pangkat besar (4) dengan prima kecil (2).
- **Langkah Penyelesaian:**
  1. Uraikan 15 = 15 (→ p¹⁴) atau 5×3 (→ p⁴q²).
  2. Hitung p⁴q² terkecil: 2⁴×3² = 144.
  3. Jawaban D.

---

**10.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **16 faktor** adalah ….
- A. 120
- B. 210
- C. 144
- D. 216

**Kunci: A**
**Pembahasan:**
- **A benar** — 16 = 4×2×2 (→ **p³qr**). Bentuk p³qr terkecil = 2³×3×5 = **120**, τ(120) = 4×2×2 = 16 ✓. Ini yang paling kecil dari semua bentuk 16 (p¹⁵, p⁷q=384, p³q³=216, p³qr=120, pqrs=210).
- **B salah** — 210 = 2×3×5×7, τ(210) = 2×2×2×2 = 16 faktor (bentuk pqrs benar), tapi 210 > 120.
- **C salah** — 144 = 2⁴×3², τ(144) = 5×3 = 15 faktor, bukan 16.
- **D salah** — 216 = 2³×3³, τ(216) = 4×4 = 16 faktor (bentuk p³q³ benar), tapi 216 > 120.
- **Konsep kunci:** Tepat 16 faktor punya banyak bentuk; bentuk dengan pangkat besar di prima terkecil (p³qr) biasanya paling kecil.
- **Langkah Penyelesaian:**
  1. Uraikan 16 = 16, 8×2, 4×4, 4×2×2, 2×2×2×2.
  2. Hitung tiap bentuk terkecil: p⁷q=384, p³q³=216, p³qr=120, pqrs=210.
  3. Terkecil = 120 (jawaban A).

---

**11.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **18 faktor** adalah ….
- A. 120
- B. 180
- C. 240
- D. 144

**Kunci: B**
**Pembahasan:**
- **A salah** — 120 = 2³×3×5, τ(120) = 4×2×2 = 16 faktor, bukan 18.
- **B benar** — 18 = 3×3×2 (→ **p²q²r**). Bentuk p²q²r terkecil = 2²×3²×5 = **180**, τ(180) = 3×3×2 = 18 ✓.
- **C salah** — 240 = 2⁴×3×5, τ(240) = 5×2×2 = 20 faktor, bukan 18.
- **D salah** — 144 = 2⁴×3², τ(144) = 5×3 = 15 faktor, bukan 18.
- **Konsep kunci:** Tepat 18 faktor (18 = 3×3×2 atau 9×2 atau 18) paling kecil dari bentuk p²q²r dengan pangkat besar di dua prima terkecil.
- **Langkah Penyelesaian:**
  1. Uraikan 18 = 18, 9×2, 3×3×2 → tiga bentuk.
  2. Hitung terkecil tiap bentuk: p⁸q=768, p⁵q²=288, p²q²r=180.
  3. Terkecil = 180 (jawaban B).

---

**12.** Bilangan asli terkecil lebih dari 1 yang memiliki tepat **20 faktor** adalah ….
- A. 180
- B. 120
- C. 240
- D. 360

**Kunci: C**
**Pembahasan:**
- **A salah** — 180 = 2²×3²×5, τ(180) = 3×3×2 = 18 faktor, bukan 20.
- **B salah** — 120 = 2³×3×5, τ(120) = 4×2×2 = 16 faktor, bukan 20.
- **C benar** — 20 = 4×5 atau 5×2×2 (→ **p⁴qr**). Bentuk p⁴qr terkecil = 2⁴×3×5 = **240**, τ(240) = 5×2×2 = 20 ✓.
- **D salah** — 360 = 2³×3²×5, τ(360) = 4×3×2 = 24 faktor, bukan 20.
- **Konsep kunci:** Tepat 20 faktor (20 = 5×4 atau 5×2×2) paling kecil dari bentuk p⁴qr.
- **Langkah Penyelesaian:**
  1. Uraikan 20 = 20, 10×2, 5×4, 5×2×2.
  2. Hitung terkecil tiap bentuk: p⁴q³=432, p⁴qr=240.
  3. Terkecil = 240 (jawaban C).

---

**13.** Di antara bilangan berikut, yang merupakan **bilangan sempurna** (jumlah faktor sejatinya sama dengan bilangan itu sendiri) adalah ….
- A. 6
- B. 12
- C. 10
- D. 15

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor sejati 6 (selain dirinya): 1, 2, 3. Jumlah = 1+2+3 = **6** = bilangan itu sendiri → **sempurna**.
- **B salah** — Faktor sejati 12: 1, 2, 3, 4, 6. Jumlah = 16 > 12 → **berlimpah** (abundant), bukan sempurna.
- **C salah** — Faktor sejati 10: 1, 2, 5. Jumlah = 8 < 10 → **kurang** (deficient).
- **D salah** — Faktor sejati 15: 1, 3, 5. Jumlah = 9 < 15 → **kurang** (deficient).
- **Konsep kunci:** Bilangan sempurna adalah bilangan yang jumlah faktor sejatinya (tanpa dirinya) sama persis dengan bilangan itu.
- **Langkah Penyelesaian:**
  1. Cari faktor sejati tiap pilihan (tanpa dirinya sendiri).
  2. Jumlahkan faktor sejati tiap bilangan.
  3. 6 → 1+2+3=6 (sama dengan 6) → sempurna, jawaban A.

---

**14.** Bilangan sempurna **kedua** (setelah 6) adalah ….
- A. 10
- B. 12
- C. 20
- D. 28

**Kunci: D**
**Pembahasan:**
- **A salah** — Faktor sejati 10: 1, 2, 5 → jumlah 8 < 10 → kurang.
- **B salah** — Faktor sejati 12: 1, 2, 3, 4, 6 → jumlah 16 > 12 → berlimpah.
- **C salah** — Faktor sejati 20: 1, 2, 4, 5, 10 → jumlah 22 > 20 → berlimpah.
- **D benar** — Faktor sejati 28: 1, 2, 4, 7, 14 → jumlah = 1+2+4+7+14 = **28** = dirinya sendiri → **sempurna**. Ini bilangan sempurna kedua setelah 6.
- **Konsep kunci:** Bilangan sempurna sangat langka; urutan pertamanya adalah 6, 28, 496, 8128.
- **Langkah Penyelesaian:**
  1. Cek faktor sejati tiap pilihan dan jumlahkan.
  2. Hanya 28 yang jumlah faktor sejatinya sama dengan dirinya.
  3. Jawaban D.

---

**15.** Di antara bilangan berikut, yang merupakan **bilangan berlimpah** (abundant, jumlah faktor sejati lebih besar dari bilangan itu) adalah ….
- A. 10
- B. 18
- C. 14
- D. 22

**Kunci: B**
**Pembahasan:**
- **A salah** — Faktor sejati 10: 1,2,5 → jumlah 8 < 10 → kurang.
- **B benar** — Faktor sejati 18: 1, 2, 3, 6, 9 → jumlah = 21 > 18 → **berlimpah**.
- **C salah** — Faktor sejati 14: 1, 2, 7 → jumlah 10 < 14 → kurang.
- **D salah** — Faktor sejati 22: 1, 2, 11 → jumlah 14 < 22 → kurang.
- **Konsep kunci:** Bilangan berlimpah punya jumlah faktor sejati yang MELEBIHI dirinya sendiri; biasanya bilangan genap dengan banyak faktor kecil.
- **Langkah Penyelesaian:**
  1. Hitung faktor sejati dan jumlahnya untuk tiap pilihan.
  2. Bandingkan jumlah dengan bilangan asalnya.
  3. Hanya 18 (jumlah 21) yang melebihi dirinya, jawaban B.

---

**16.** Di antara bilangan berikut, yang merupakan **bilangan kurang** (deficient, jumlah faktor sejati lebih kecil dari bilangan itu) adalah ….
- A. 12
- B. 18
- C. 16
- D. 20

**Kunci: C**
**Pembahasan:**
- **A salah** — Faktor sejati 12: 1,2,3,4,6 → jumlah 16 > 12 → berlimpah.
- **B salah** — Faktor sejati 18: 1,2,3,6,9 → jumlah 21 > 18 → berlimpah.
- **C benar** — Faktor sejati 16: 1, 2, 4, 8 → jumlah = 15 < 16 → **kurang**.
- **D salah** — Faktor sejati 20: 1,2,4,5,10 → jumlah 22 > 20 → berlimpah.
- **Konsep kunci:** Bilangan berbentuk pangkat murni satu prima (seperti 16 = 2⁴) cenderung kurang, karena faktornya sedikit dan kecil-kecil.
- **Langkah Penyelesaian:**
  1. Hitung faktor sejati dan jumlahnya tiap pilihan.
  2. Bandingkan dengan bilangan asalnya.
  3. Hanya 16 (jumlah 15) lebih kecil dari dirinya, jawaban C.

---

**17.** Jumlah **SEMUA faktor** (termasuk 1 dan dirinya sendiri) dari **100** adalah ….
- A. 200
- B. 217
- C. 156
- D. 180

**Kunci: B**
**Pembahasan:**
- Faktorisasi: 100 = 2² × 5². Rumus: σ(100) = (1+2+4)(1+5+25) = 7 × 31 = **217**.
- **A salah** — Menduga hasilnya kelipatan bulat dari 100 tanpa menghitung rumus sigma.
- **B benar** — Cek manual: 1+2+4+5+10+20+25+50+100 = **217** ✓.
- **C salah** — Lupa memasukkan faktor 100 sendiri dalam penjumlahan.
- **D salah** — Salah mengalikan (1+2+4) dengan (1+5+25); tertukar salah satu suku.
- **Konsep kunci:** Rumus sigma σ(n) = hasil kali jumlah deret pangkat tiap prima penyusun.
- **Langkah Penyelesaian:**
  1. Faktorkan 100 = 2² × 5².
  2. Hitung σ(100) = (1+2+4)(1+5+25) = 7 × 31.
  3. Hasil = 217 (jawaban B).

---

**18.** Jumlah **SEMUA faktor** (termasuk 1 dan dirinya sendiri) dari **36** adalah ….
- A. 55
- B. 78
- C. 72
- D. 91

**Kunci: D**
**Pembahasan:**
- Faktorisasi: 36 = 2² × 3². Rumus: σ(36) = (1+2+4)(1+3+9) = 7 × 13 = **91**.
- **A salah** — Hanya menjumlahkan sebagian faktor, lupa beberapa suku.
- **B salah** — Salah kalikan 7 × 13 menjadi 78 (kesalahan perkalian).
- **C salah** — Menjumlahkan faktor sejati (tanpa 36) lalu salah tambah, bukan σ penuh.
- **D benar** — Cek manual: 1+2+3+4+6+9+12+18+36 = **91** ✓.
- **Konsep kunci:** Jumlah SEMUA faktor termasuk dirinya (sigma) berbeda dengan jumlah faktor sejati (untuk cek bilangan sempurna/berlimpah).
- **Langkah Penyelesaian:**
  1. Faktorkan 36 = 2² × 3².
  2. Hitung σ(36) = (1+2+4)(1+3+9) = 7 × 13.
  3. Hasil = 91 (jawaban D).

---

**19.** Banyak bilangan **prima** dari **100 sampai 150** adalah ….
- A. 8
- B. 9
- C. 10
- D. 12

**Kunci: C**
**Pembahasan:**
- Prima 100–150: 101, 103, 107, 109, 113, 127, 131, 137, 139, 149 → **10 bilangan**.
- **A salah** — Lupa beberapa prima (mungkin 137, 139).
- **B salah** — Lupa satu prima.
- **C benar** — Tepat 10.
- **D salah** — Salah masukkan bilangan komposit seperti 121 (=11²) atau 133 (=7×19).
- **Konsep kunci:** Menghitung prima dalam rentang tiga digit tetap dilakukan dengan mendaftar dan menguji tiap bilangan ganjil, waspada semiprima seperti 121 dan 133.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 101–149, coret kelipatan 3, 5, 7, 11.
  2. Sisa yang prima: 101, 103, 107, 109, 113, 127, 131, 137, 139, 149.
  3. Hitung banyaknya = 10 (jawaban C).

---

**20.** Banyak bilangan **prima** dari **150 sampai 200** adalah ….
- A. 11
- B. 9
- C. 13
- D. 10

**Kunci: A**
**Pembahasan:**
- Prima 150–200: 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 → **11 bilangan**.
- **A benar** — Tepat 11.
- **B salah** — Lupa dua prima (mungkin 191, 193).
- **C salah** — Salah masukkan bilangan komposit seperti 187 (=11×17) atau 169 (=13²).
- **D salah** — Lupa satu prima.
- **Konsep kunci:** Rentang 150–200 memuat banyak semiprima tersembunyi (169=13², 187=11×17) yang mudah salah dianggap prima.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 151–199, waspadai 169 dan 187.
  2. Sisa yang prima: 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199.
  3. Hitung banyaknya = 11 (jawaban A).

---

**21.** Banyak bilangan **prima** dari **200 sampai 250** adalah ….
- A. 6
- B. 8
- C. 7
- D. 9

**Kunci: C**
**Pembahasan:**
- Prima 200–250: 211, 223, 227, 229, 233, 239, 241 → **7 bilangan**.
- **A salah** — Lupa satu prima.
- **B salah** — Salah masukkan komposit seperti 221 (=13×17) atau 247 (=13×19, sebenarnya di luar rentang tapi sering tertukar).
- **C benar** — Tepat 7.
- **D salah** — Salah masukkan dua bilangan komposit.
- **Konsep kunci:** Bilangan 221 = 13×17 adalah semiprima tersembunyi klasik yang sering keliru dianggap prima di rentang ini.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 201–249, waspadai 221 (=13×17).
  2. Sisa yang prima: 211, 223, 227, 229, 233, 239, 241.
  3. Hitung banyaknya = 7 (jawaban C).

---

**22.** Banyak bilangan **prima** dari **250 sampai 300** adalah ….
- A. 8
- B. 9
- C. 10
- D. 7

**Kunci: B**
**Pembahasan:**
- Prima 250–300: 251, 257, 263, 269, 271, 277, 281, 283, 293 → **9 bilangan**.
- **A salah** — Lupa satu prima.
- **B benar** — Tepat 9.
- **C salah** — Salah masukkan komposit seperti 299 (=13×23).
- **D salah** — Lupa dua prima.
- **Konsep kunci:** 299 = 13×23 adalah jebakan semiprima klasik di rentang ini, sering disangka prima karena ganjil.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 251–299, waspadai 299 (=13×23).
  2. Sisa yang prima: 251, 257, 263, 269, 271, 277, 281, 283, 293.
  3. Hitung banyaknya = 9 (jawaban B).

---

**23.** Banyak bilangan **prima** dari **300 sampai 350** adalah ….
- A. 6
- B. 7
- C. 9
- D. 8

**Kunci: D**
**Pembahasan:**
- Prima 300–350: 307, 311, 313, 317, 331, 337, 347, 349 → **8 bilangan**.
- **A salah** — Lupa dua prima.
- **B salah** — Lupa satu prima.
- **C salah** — Salah masukkan komposit seperti 323 (=17×19).
- **D benar** — Tepat 8.
- **Konsep kunci:** 323 = 17×19 adalah semiprima tersembunyi lain yang sering tertukar prima di rentang tiga digit.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 301–349, waspadai 323 (=17×19).
  2. Sisa yang prima: 307, 311, 313, 317, 331, 337, 347, 349.
  3. Hitung banyaknya = 8 (jawaban D).

---

**24.** Banyak bilangan **prima** dari **110 sampai 130** adalah ….
- A. 2
- B. 3
- C. 1
- D. 4

**Kunci: A**
**Pembahasan:**
- Prima 110–130: 113, 127 → **2 bilangan**.
- **A benar** — Tepat 2.
- **B salah** — Salah masukkan komposit (mis. 119=7×17, 121=11²).
- **C salah** — Lupa satu prima.
- **D salah** — Salah masukkan dua bilangan komposit.
- **Konsep kunci:** Rentang sempit sekalipun harus tetap dicek satu per satu; 121=11² dan 119=7×17 adalah jebakan umum.
- **Langkah Penyelesaian:**
  1. Cek satu per satu 110 sampai 130.
  2. Hanya 113 dan 127 yang prima.
  3. Hitung banyaknya = 2 (jawaban A).

---

**25.** Banyak bilangan **prima** dari **60 sampai 70** adalah ….
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: C**
**Pembahasan:**
- Prima 60–70: 61, 67 → **2 bilangan**.
- **A salah** — Lupa satu prima.
- **B salah** — Salah masukkan komposit seperti 63 (=7×9) atau 69 (=3×23).
- **C benar** — Tepat 2.
- **D salah** — Salah masukkan dua bilangan komposit.
- **Konsep kunci:** Menghitung prima dalam rentang pendek tetap memerlukan pengecekan tiap bilangan satu per satu.
- **Langkah Penyelesaian:**
  1. Cek 60 sampai 70 satu per satu.
  2. Hanya 61 dan 67 prima.
  3. Hitung banyaknya = 2 (jawaban C).

---

**26.** Banyak bilangan **prima** dari **70 sampai 90** adalah ….
- A. 4
- B. 6
- C. 3
- D. 5

**Kunci: D**
**Pembahasan:**
- Prima 70–90: 71, 73, 79, 83, 89 → **5 bilangan**.
- **A salah** — Lupa satu prima.
- **B salah** — Salah masukkan komposit seperti 77 (=7×11) atau 87 (=3×29).
- **C salah** — Lupa dua prima.
- **D benar** — Tepat 5.
- **Konsep kunci:** Rentang ini memuat 77=7×11 dan 91-adjacent traps yang wajib diwaspadai.
- **Langkah Penyelesaian:**
  1. Cek 70 sampai 90 satu per satu.
  2. Prima yang ditemukan: 71, 73, 79, 83, 89.
  3. Hitung banyaknya = 5 (jawaban D).

---

**27.** Banyak bilangan **prima** dari **90 sampai 110** adalah ….
- A. 4
- B. 5
- C. 6
- D. 3

**Kunci: B**
**Pembahasan:**
- Prima 90–110: 97, 101, 103, 107, 109 → **5 bilangan**.
- **A salah** — Lupa satu prima.
- **B benar** — Tepat 5.
- **C salah** — Salah masukkan komposit seperti 91 (=7×13, jebakan klasik).
- **D salah** — Lupa dua prima.
- **Konsep kunci:** 91 = 7×13 adalah jebakan paling klasik di rentang ini — lolos cek 2, 3, 5 tapi gugur di 7.
- **Langkah Penyelesaian:**
  1. Cek 90 sampai 110 satu per satu, waspadai 91.
  2. Prima yang ditemukan: 97, 101, 103, 107, 109.
  3. Hitung banyaknya = 5 (jawaban B).

---

**28.** Banyak bilangan **prima** dari **130 sampai 150** adalah ….
- A. 4
- B. 5
- C. 3
- D. 6

**Kunci: A**
**Pembahasan:**
- Prima 130–150: 131, 137, 139, 149 → **4 bilangan**.
- **A benar** — Tepat 4.
- **B salah** — Salah masukkan komposit seperti 143 (=11×13).
- **C salah** — Lupa satu prima.
- **D salah** — Salah masukkan dua bilangan komposit.
- **Konsep kunci:** 143 = 11×13 adalah semiprima tersembunyi lain yang sering keliru dianggap prima.
- **Langkah Penyelesaian:**
  1. Cek 130 sampai 150 satu per satu, waspadai 143.
  2. Prima yang ditemukan: 131, 137, 139, 149.
  3. Hitung banyaknya = 4 (jawaban A).

---

**29.** Pasangan berikut yang merupakan **twin prime** (selisih 2) adalah ….
- A. (53, 59)
- B. (61, 67)
- C. (59, 61)
- D. (67, 71)

**Kunci: C**
**Pembahasan:**
- **A salah** — 53 dan 59 keduanya prima, tapi selisihnya 6 → sexy prime, bukan twin.
- **B salah** — 61 dan 67 keduanya prima, selisih 6 → sexy prime.
- **C benar** — **59 dan 61** keduanya prima, selisih = 2 → **twin prime**.
- **D salah** — 67 dan 71 keduanya prima, selisih 4 → cousin prime.
- **Konsep kunci:** Twin prime harus berselisih TEPAT 2; kategori lain (cousin=4, sexy=6) sering tertukar.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (53,59)=6; (61,67)=6; (59,61)=2; (67,71)=4.
  2. Cek keduanya prima.
  3. Pasangan berselisih 2 adalah (59,61), jawaban C.

---

**30.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (89, 97)
- B. (97, 101)
- C. (103, 107)
- D. (101, 103)

**Kunci: D**
**Pembahasan:**
- **A salah** — Selisih 89 dan 97 = 8, bukan kategori khusus (dan bukan twin).
- **B salah** — Selisih 97 dan 101 = 4 → cousin prime.
- **C salah** — Selisih 103 dan 107 = 4 → cousin prime.
- **D benar** — **101 dan 103** keduanya prima, selisih = 2 → **twin prime**.
- **Konsep kunci:** Twin prime ditemukan dengan menghitung selisih dua prima berurutan dan memastikan hasilnya tepat 2.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (89,97)=8; (97,101)=4; (103,107)=4; (101,103)=2.
  2. Cek keduanya prima.
  3. Pasangan berselisih 2 adalah (101,103), jawaban D.

---

**31.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (107, 109)
- B. (109, 113)
- C. (103, 107)
- D. (113, 127)

**Kunci: A**
**Pembahasan:**
- **A benar** — **107 dan 109** keduanya prima, selisih = 2 → **twin prime**.
- **B salah** — Selisih 109 dan 113 = 4 → cousin prime.
- **C salah** — Selisih 103 dan 107 = 4 → cousin prime.
- **D salah** — Selisih 113 dan 127 = 14, celah lebar, bukan twin.
- **Konsep kunci:** Twin prime tetap harus dicek dua syarat: keduanya prima DAN selisihnya tepat 2.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (107,109)=2; (109,113)=4; (103,107)=4; (113,127)=14.
  2. Cek keduanya prima untuk selisih 2.
  3. Jawaban A.

---

**32.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (131, 137)
- B. (137, 139)
- C. (139, 149)
- D. (151, 157)

**Kunci: B**
**Pembahasan:**
- **A salah** — Selisih 131 dan 137 = 6 → sexy prime.
- **B benar** — **137 dan 139** keduanya prima, selisih = 2 → **twin prime**.
- **C salah** — Selisih 139 dan 149 = 10, bukan kategori khusus.
- **D salah** — Selisih 151 dan 157 = 6 → sexy prime.
- **Konsep kunci:** Perhatikan selisih dengan cermat — 6 (sexy) dan 2 (twin) mudah tertukar jika tidak dihitung langsung.
- **Langkah Penyelesaian:**
  1. Hitung selisih: (131,137)=6; (137,139)=2; (139,149)=10; (151,157)=6.
  2. Cek keduanya prima untuk selisih 2.
  3. Jawaban B.

---

**33.** Pasangan berikut yang merupakan **cousin prime** (selisih 4) adalah ….
- A. (59, 61)
- B. (71, 73)
- C. (101, 103)
- D. (97, 101)

**Kunci: D**
**Pembahasan:**
- **A salah** — Selisih 59 dan 61 = 2 → twin prime, bukan cousin.
- **B salah** — Selisih 71 dan 73 = 2 → twin prime.
- **C salah** — Selisih 101 dan 103 = 2 → twin prime.
- **D benar** — **97 dan 101** keduanya prima, selisih = 4 → **cousin prime**.
- **Konsep kunci:** Cousin prime berselisih tepat 4; jangan tertukar dengan twin prime (selisih 2) yang lebih sering muncul.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (59,61)=2; (71,73)=2; (101,103)=2; (97,101)=4.
  2. Cek keduanya prima untuk selisih 4.
  3. Jawaban D.

---

**34.** Pasangan berikut yang merupakan **cousin prime** adalah ….
- A. (151, 157)
- B. (157, 163)
- C. (163, 167)
- D. (167, 173)

**Kunci: C**
**Pembahasan:**
- **A salah** — Selisih 151 dan 157 = 6 → sexy prime.
- **B salah** — Selisih 157 dan 163 = 6 → sexy prime.
- **C benar** — **163 dan 167** keduanya prima, selisih = 4 → **cousin prime**.
- **D salah** — Selisih 167 dan 173 = 6 → sexy prime.
- **Konsep kunci:** Dalam satu deretan bilangan, kategori selisih (twin, cousin, sexy) bisa bercampur; hitung tiap pasangan secara terpisah.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: 6, 6, 4, 6.
  2. Pasangan berselisih 4 dan keduanya prima adalah (163,167).
  3. Jawaban C.

---

**35.** Pasangan berikut yang merupakan **sexy prime** (selisih 6) adalah ….
- A. (157, 163)
- B. (163, 167)
- C. (179, 181)
- D. (181, 191)

**Kunci: A**
**Pembahasan:**
- **A benar** — **157 dan 163** keduanya prima, selisih = 6 → **sexy prime**.
- **B salah** — Selisih 163 dan 167 = 4 → cousin prime.
- **C salah** — Selisih 179 dan 181 = 2 → twin prime.
- **D salah** — Selisih 181 dan 191 = 10, bukan kategori khusus.
- **Konsep kunci:** Sexy prime berselisih tepat 6 (istilah berasal dari kata Latin "sex" = enam), bukan diambil dari makna lain.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: 6, 4, 2, 10.
  2. Pasangan berselisih 6 dan keduanya prima adalah (157,163).
  3. Jawaban A.

---

**36.** Pasangan berikut yang merupakan **sexy prime** adalah ….
- A. (191, 193)
- B. (191, 197)
- C. (193, 197)
- D. (197, 199)

**Kunci: B**
**Pembahasan:**
- **A salah** — Selisih 191 dan 193 = 2 → twin prime.
- **B benar** — **191 dan 197** keduanya prima, selisih = 6 → **sexy prime**.
- **C salah** — Selisih 193 dan 197 = 4 → cousin prime.
- **D salah** — Selisih 197 dan 199 = 2 → twin prime.
- **Konsep kunci:** Dalam rentang 191–199 terdapat lima prima berdekatan (191,193,197,199) yang membentuk kombinasi twin, cousin, DAN sexy sekaligus.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: 2, 6, 4, 2.
  2. Pasangan berselisih 6 adalah (191,197).
  3. Jawaban B.

---

**37.** Bilangan **2⁷ − 1 = 127** adalah ….
- A. 126, komposit
- B. 127, komposit
- C. 128, prima
- D. 127, prima Mersenne

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung 2⁷ = 128, sehingga 2⁷−1 dihitung 126 (salah kurang).
- **B salah** — Nilai 127 benar, tapi keliru menyimpulkan komposit — padahal 127 tidak habis dibagi 2, 3, 5, 7 (√127 ≈ 11,3, cukup cek sampai 11), jadi prima.
- **C salah** — Salah menghitung 2⁷−1 sebagai 128 (lupa dikurangi 1).
- **D benar** — 2⁷ = 128, jadi 2⁷−1 = **127**. Karena p=7 prima dan 127 juga prima → **prima Mersenne**.
- **Konsep kunci:** Prima Mersenne berbentuk 2^p−1 dengan p prima DAN hasilnya juga harus diuji keprimaannya sendiri.
- **Langkah Penyelesaian:**
  1. Hitung 2⁷ = 128, maka 2⁷−1 = 127.
  2. Uji keprimaan 127: cek pembagi ≤ √127≈11,3 (2,3,5,7,11) → tidak ada yang habis.
  3. Simpulkan 127 prima Mersenne (jawaban D).

---

**38.** Bilangan **2¹³ − 1 = 8191** adalah ….
- A. komposit (=7×1170)
- B. genap
- C. prima Mersenne
- D. habis dibagi 3

**Kunci: C**
**Pembahasan:**
- **A salah** — 8191 ÷ 7 = 1170,14... (tidak habis); 8191 BUKAN komposit dari 7.
- **B salah** — 8191 berakhiran 1, ganjil.
- **C benar** — 13 prima, dan setelah diuji sampai √8191 ≈ 90,5 (cek semua prima ≤ 90), **8191 tidak punya pembagi** → **prima**, sehingga disebut **prima Mersenne**.
- **D salah** — Jumlah digit 8+1+9+1 = 19, tidak habis dibagi 3.
- **Konsep kunci:** Semakin besar p, semakin sulit menguji 2^p−1 secara manual, tapi aturan tes keprimaan (cek pembagi ≤ √n) tetap berlaku.
- **Langkah Penyelesaian:**
  1. Hitung 2¹³ = 8192, maka 2¹³−1 = 8191.
  2. Uji keprimaan sampai √8191 ≈ 90,5 — tidak ada pembagi prima yang habis.
  3. Simpulkan 8191 prima Mersenne (jawaban C).

---

**39.** Bilangan **2¹⁷ − 1 = 131.071** adalah ….
- A. komposit
- B. prima Mersenne
- C. habis dibagi 7
- D. genap

**Kunci: B**
**Pembahasan:**
- **A salah** — Meskipun bilangannya besar, 131.071 ternyata TIDAK punya pembagi prima sampai √131.071 ≈ 362.
- **B benar** — 17 prima, dan 131.071 setelah diuji ternyata **prima** juga → **prima Mersenne** (Mersenne ke-6).
- **C salah** — 131.071 ÷ 7 = 18.724,4... (tidak habis).
- **D salah** — 131.071 berakhiran 1, ganjil.
- **Konsep kunci:** Prima Mersenne semakin jarang ditemukan seiring p membesar, tapi p=17 termasuk salah satu yang berhasil.
- **Langkah Penyelesaian:**
  1. Hitung 2¹⁷ = 131.072, maka 2¹⁷−1 = 131.071.
  2. Ketahui dari fakta matematika bahwa bilangan ini telah terbukti tidak punya pembagi prima ≤ √131.071.
  3. Simpulkan 131.071 prima Mersenne (jawaban B).

---

**40.** Meskipun **23 adalah bilangan prima**, bilangan **2²³ − 1 = 8.388.607** ternyata ….
- A. komposit (= 47 × 178.481)
- B. prima Mersenne
- C. genap
- D. habis dibagi 3

**Kunci: A**
**Pembahasan:**
- **A benar** — **JEBAKAN PENTING**: walau p=23 prima, 2²³−1 = 8.388.607 = **47 × 178.481** → **komposit**, BUKAN prima Mersenne. Ini bukti bahwa p prima hanyalah syarat perlu, bukan syarat cukup.
- **B salah** — Ini justru contoh KEGAGALAN membentuk prima Mersenne meski p prima.
- **C salah** — 8.388.607 berakhiran 7, ganjil.
- **D salah** — Jumlah digit 8+3+8+8+6+0+7 = 40, tidak habis dibagi 3.
- **Konsep kunci:** Tidak semua 2^p−1 dengan p prima menghasilkan prima Mersenne — p=11 dan p=23 adalah dua contoh kegagalan termasyhur.
- **Langkah Penyelesaian:**
  1. Ingat bahwa p prima adalah syarat PERLU, bukan CUKUP, untuk 2^p−1 prima.
  2. Cek fakta: 8.388.607 = 47 × 178.481 (dapat dibuktikan dengan pembagian bersusun panjang).
  3. Simpulkan komposit (jawaban A), meski p=23 prima.

---

**41.** Pasangan (p, hasil 2^p − 1) berikut yang **BENAR keduanya menghasilkan prima Mersenne** adalah ….
- A. (p=5, 31)
- B. (p=11, 2047)
- C. (p=23, 8.388.607)
- D. (p=29, komposit tapi dianggap prima)

**Kunci: A**
**Pembahasan:**
- **A benar** — p=5 prima, 2⁵−1 = **31**, dan 31 memang prima → prima Mersenne SAH.
- **B salah** — p=11 prima, tapi 2¹¹−1 = 2047 = **23 × 89** → KOMPOSIT, bukan prima Mersenne (jebakan klasik).
- **C salah** — p=23 prima, tapi 2²³−1 = 8.388.607 = **47 × 178.481** → komposit juga.
- **D salah** — Pernyataan ini kontradiktif dari definisinya sendiri — jika komposit, tidak bisa disebut prima.
- **Konsep kunci:** Selalu verifikasi keprimaan HASIL 2^p−1, jangan berasumsi otomatis prima hanya karena p-nya prima.
- **Langkah Penyelesaian:**
  1. Hitung 2^p−1 untuk tiap p yang diberikan.
  2. Uji keprimaan tiap hasil (2047=23×89, 8.388.607=47×178.481, keduanya komposit).
  3. Hanya (5,31) yang benar-benar prima Mersenne, jawaban A.

---

**42.** Bilangan **n = 2×3×5 + 1 = 31**. Bilangan n adalah ….
- A. komposit
- B. genap
- C. habis dibagi 5
- D. prima

**Kunci: D**
**Pembahasan:**
- **A salah** — 31 tidak habis dibagi 2, 3, atau 5 (karena n−1=30 yang habis oleh ketiganya, sehingga n pasti tidak habis).
- **B salah** — 31 berakhiran 1, ganjil.
- **C salah** — 31 ÷ 5 = 6,2 (tidak habis).
- **D benar** — Cek pembagi sampai √31 ≈ 5,6 (2, 3, 5) — tidak ada yang habis → **31 prima**. Ini mengilustrasikan ide dasar bukti Euclid: hasil kali beberapa prima + 1 tidak habis oleh prima-prima itu.
- **Konsep kunci:** Jika n−1 habis dibagi sekumpulan prima, maka n pasti TIDAK habis oleh prima-prima itu (sisa bagi selalu 1).
- **Langkah Penyelesaian:**
  1. Hitung n = 2×3×5+1 = 31.
  2. Cek pembagi prima ≤ √31: 2, 3, 5 — tidak ada yang habis.
  3. Simpulkan 31 prima (jawaban D).

---

**43.** Bilangan **n = 2×3×11 + 1 = 67**. Bilangan n adalah ….
- A. komposit
- B. prima
- C. genap
- D. habis dibagi 11

**Kunci: B**
**Pembahasan:**
- **A salah** — 67 tidak habis dibagi 2, 3, atau 11 (n−1=66 habis oleh ketiganya, jadi n pasti tidak).
- **B benar** — Cek pembagi sampai √67 ≈ 8,2 (2, 3, 5, 7) — tidak ada yang habis → **67 prima**.
- **C salah** — 67 berakhiran 7, ganjil.
- **D salah** — 67 ÷ 11 ≈ 6,09 (tidak habis).
- **Konsep kunci:** Konstruksi n = (hasil kali beberapa prima) + 1 selalu menghasilkan bilangan yang tidak habis oleh prima-prima penyusunnya, tapi keprimaan n sendiri harus tetap diuji.
- **Langkah Penyelesaian:**
  1. Hitung n = 2×3×11+1 = 67.
  2. Cek pembagi prima ≤ √67: 2, 3, 5, 7 — tidak ada yang habis.
  3. Simpulkan 67 prima (jawaban B).

---

**44.** Bilangan **n = 2×3×5×7×11×13 + 1 = 30.031**. Bilangan n adalah ….
- A. prima, karena tidak habis dibagi 2, 3, 5, 7, 11, atau 13
- B. genap
- C. komposit, karena 30.031 = 59 × 509
- D. habis dibagi 13

**Kunci: C**
**Pembahasan:**
- **A salah** — **JEBAKAN PENTING**: memang benar 30.031 tidak habis oleh 2, 3, 5, 7, 11, 13 (sesuai konstruksi Euclid), TAPI itu tidak menjamin 30.031 prima — bisa saja habis oleh prima LAIN yang lebih besar.
- **B salah** — 30.031 berakhiran 1, ganjil.
- **C benar** — Faktanya, **30.031 = 59 × 509**, keduanya prima → 30.031 **komposit**. Ini contoh termasyhur bahwa konstruksi Euclid tidak selalu menghasilkan prima baru.
- **D salah** — 30.031 ÷ 13 ≈ 2310,08 (tidak habis, sesuai konstruksi n−1 habis dibagi 13).
- **Konsep kunci:** Konstruksi Euclid membuktikan prima tak hingga banyaknya, tapi TIDAK berarti setiap hasil "hasil kali prima + 1" otomatis prima.
- **Langkah Penyelesaian:**
  1. Hitung n = 2×3×5×7×11×13+1 = 30.030+1 = 30.031.
  2. Ketahui n tidak habis oleh 2,3,5,7,11,13 (sesuai konstruksinya), tapi tetap perlu dicek pembagi lain.
  3. Fakta: 30.031 = 59 × 509 → komposit (jawaban C).

---

**45.** Bilangan **n = 2×5×7 + 1 = 71**. Bilangan n adalah ….
- A. prima
- B. komposit
- C. genap
- D. habis dibagi 7

**Kunci: A**
**Pembahasan:**
- **A benar** — Cek pembagi sampai √71 ≈ 8,4 (2, 3, 5, 7) — tidak ada yang habis → **71 prima**.
- **B salah** — Tidak ada pembagi yang ditemukan pada rentang uji, sehingga bukan komposit.
- **C salah** — 71 berakhiran 1, ganjil.
- **D salah** — 71 ÷ 7 ≈ 10,14 (tidak habis; sesuai konstruksi n−1=70 yang habis dibagi 7, sehingga n pasti tidak).
- **Konsep kunci:** Setiap konstruksi "hasil kali prima + 1" harus diuji keprimaannya sendiri, tidak bisa disimpulkan otomatis.
- **Langkah Penyelesaian:**
  1. Hitung n = 2×5×7+1 = 71.
  2. Cek pembagi prima ≤ √71: 2, 3, 5, 7 — tidak ada yang habis.
  3. Simpulkan 71 prima (jawaban A).

---

**46.** Bilangan **221** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena 221 = 13 × 17

**Kunci: D**
**Pembahasan:**
- **A salah** — JEBAKAN: 221 lolos cek 2, 3, 5, 7, tapi belum dicek 11 dan 13.
- **B salah** — 221 berakhiran 1, ganjil.
- **C salah** — Jumlah digit 2+2+1 = 5, tidak habis dibagi 3.
- **D benar** — **221 = 13 × 17** (semiprima). Cek: √221 ≈ 14,9, jadi harus cek pembagi sampai 13 — banyak yang berhenti di 11 dan menyimpulkan prima secara keliru.
- **Konsep kunci:** Untuk bilangan tiga digit, tes keprimaan harus dilanjutkan sampai SEMUA prima ≤ √n, jangan berhenti di 7 atau 11.
- **Langkah Penyelesaian:**
  1. Cek 221 tidak habis dibagi 2, 3, 5, 7, 11.
  2. Cek pembagi 13: 221 ÷ 13 = 17 → habis.
  3. Simpulkan 221 = 13×17 komposit (jawaban D).

---

**47.** Bilangan **247** adalah ….
- A. prima
- B. genap
- C. komposit, karena 247 = 13 × 19
- D. habis dibagi 3

**Kunci: C**
**Pembahasan:**
- **A salah** — 247 lolos cek 2, 3, 5, 7, 11, tapi belum dicek 13.
- **B salah** — 247 berakhiran 7, ganjil.
- **C benar** — **247 = 13 × 19**. √247 ≈ 15,7, jadi harus cek sampai 13.
- **D salah** — Jumlah digit 2+4+7 = 13, tidak habis dibagi 3.
- **Konsep kunci:** Bilangan yang lolos banyak tes pembagi kecil tetap wajib dicek sampai batas √n sebelum disimpulkan prima.
- **Langkah Penyelesaian:**
  1. Cek 247 tidak habis dibagi 2, 3, 5, 7, 11.
  2. Cek pembagi 13: 247 ÷ 13 = 19 → habis.
  3. Simpulkan 247 = 13×19 komposit (jawaban C).

---

**48.** Bilangan **299** adalah ….
- A. prima
- B. komposit, karena 299 = 13 × 23
- C. genap
- D. habis dibagi 7

**Kunci: B**
**Pembahasan:**
- **A salah** — 299 lolos cek 2, 3, 5, 7, 11, tapi belum dicek 13.
- **B benar** — **299 = 13 × 23**. √299 ≈ 17,3, jadi harus cek sampai 17.
- **C salah** — 299 berakhiran 9, ganjil.
- **D salah** — 299 ÷ 7 ≈ 42,71 (tidak habis).
- **Konsep kunci:** Semiprima dengan dua faktor sedang (13 dan 23) sangat sulit dikenali tanpa pengujian sistematis sampai √n.
- **Langkah Penyelesaian:**
  1. Cek 299 tidak habis dibagi 2, 3, 5, 7, 11.
  2. Cek pembagi 13: 299 ÷ 13 = 23 → habis.
  3. Simpulkan 299 = 13×23 komposit (jawaban B).

---

**49.** Bilangan **323** adalah ….
- A. komposit, karena 323 = 17 × 19
- B. prima
- C. genap
- D. habis dibagi 3

**Kunci: A**
**Pembahasan:**
- **A benar** — **323 = 17 × 19**. √323 ≈ 18, jadi harus cek sampai 17.
- **B salah** — 323 lolos cek 2, 3, 5, 7, 11, 13, tapi belum dicek 17.
- **C salah** — 323 berakhiran 3, ganjil.
- **D salah** — Jumlah digit 3+2+3 = 8, tidak habis dibagi 3.
- **Konsep kunci:** Semakin dekat kedua faktor prima ke √n, semakin sulit ditemukan tanpa cek sistematis sampai batas atas.
- **Langkah Penyelesaian:**
  1. Cek 323 tidak habis dibagi 2, 3, 5, 7, 11, 13.
  2. Cek pembagi 17: 323 ÷ 17 = 19 → habis.
  3. Simpulkan 323 = 17×19 komposit (jawaban A).

---

**50.** Bilangan **391** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena 391 = 17 × 23

**Kunci: D**
**Pembahasan:**
- **A salah** — 391 lolos cek 2, 3, 5, 7, 11, 13, tapi belum dicek 17.
- **B salah** — 391 berakhiran 1, ganjil.
- **C salah** — Jumlah digit 3+9+1 = 13, tidak habis dibagi 3.
- **D benar** — **391 = 17 × 23**. √391 ≈ 19,8, jadi harus cek sampai 19.
- **Konsep kunci:** Cek keprimaan bilangan tiga digit harus dilanjutkan sampai prima terakhir ≤ √n, tidak boleh berhenti di tengah jalan.
- **Langkah Penyelesaian:**
  1. Cek 391 tidak habis dibagi 2, 3, 5, 7, 11, 13.
  2. Cek pembagi 17: 391 ÷ 17 = 23 → habis.
  3. Simpulkan 391 = 17×23 komposit (jawaban D).

---

**51.** Bilangan **437** adalah ….
- A. prima
- B. genap
- C. komposit, karena 437 = 19 × 23
- D. habis dibagi 7

**Kunci: C**
**Pembahasan:**
- **A salah** — 437 lolos cek 2, 3, 5, 7, 11, 13, 17, tapi belum dicek 19.
- **B salah** — 437 berakhiran 7, ganjil.
- **C benar** — **437 = 19 × 23**. √437 ≈ 20,9, jadi harus cek sampai 19.
- **D salah** — 437 ÷ 7 = 62,43 (tidak habis).
- **Konsep kunci:** Semiprima dengan kedua faktor mendekati √n adalah kasus tersulit yang harus diuji sampai batas atas penuh.
- **Langkah Penyelesaian:**
  1. Cek 437 tidak habis dibagi 2, 3, 5, 7, 11, 13, 17.
  2. Cek pembagi 19: 437 ÷ 19 = 23 → habis.
  3. Simpulkan 437 = 19×23 komposit (jawaban C).

---

**52.** Bilangan **667** adalah ….
- A. prima
- B. komposit, karena 667 = 23 × 29
- C. genap
- D. habis dibagi 3

**Kunci: B**
**Pembahasan:**
- **A salah** — 667 lolos cek 2, 3, 5, 7, 11, 13, 17, 19, tapi belum dicek 23.
- **B benar** — **667 = 23 × 29**. √667 ≈ 25,8, jadi harus cek sampai 23.
- **C salah** — 667 berakhiran 7, ganjil.
- **D salah** — Jumlah digit 6+6+7 = 19, tidak habis dibagi 3.
- **Konsep kunci:** Bilangan tiga digit yang tidak habis oleh banyak prima kecil masih bisa komposit — jangan berhenti sebelum mencapai √n penuh.
- **Langkah Penyelesaian:**
  1. Cek 667 tidak habis dibagi 2 sampai 19.
  2. Cek pembagi 23: 667 ÷ 23 = 29 → habis.
  3. Simpulkan 667 = 23×29 komposit (jawaban B).

---

**53.** Bilangan **899** adalah ….
- A. komposit, karena 899 = 29 × 31
- B. prima
- C. genap
- D. habis dibagi 7

**Kunci: A**
**Pembahasan:**
- **A benar** — **899 = 29 × 31**. √899 ≈ 30, jadi harus cek sampai 29.
- **B salah** — 899 lolos cek 2 sampai 23, tapi belum dicek 29.
- **C salah** — 899 berakhiran 9, ganjil.
- **D salah** — 899 ÷ 7 ≈ 128,43 (tidak habis).
- **Konsep kunci:** Semakin besar bilangannya, semakin panjang daftar prima yang harus dicek sampai √n sebelum menyimpulkan prima.
- **Langkah Penyelesaian:**
  1. Cek 899 tidak habis dibagi 2 sampai 23.
  2. Cek pembagi 29: 899 ÷ 29 = 31 → habis.
  3. Simpulkan 899 = 29×31 komposit (jawaban A).

---

**54.** Faktorisasi prima dari **1001** adalah ….
- A. 7 × 11 × 12
- B. 7 × 143
- C. 11 × 91
- D. 7 × 11 × 13

**Kunci: D**
**Pembahasan:**
- **A salah** — 12 bukan bilangan prima.
- **B salah** — 143 belum difaktorkan tuntas (143 = 11×13, bukan prima).
- **C salah** — 91 belum difaktorkan tuntas (91 = 7×13, bukan prima).
- **D benar** — 1001 = 7 × 143 = 7 × 11 × 13. Semua faktor sudah prima.
- **Konsep kunci:** Faktorisasi prima harus dilanjutkan sampai SEMUA faktor benar-benar prima, tidak boleh berhenti di faktor komposit menengah.
- **Langkah Penyelesaian:**
  1. Bagi 1001 dengan 7: 1001 ÷ 7 = 143.
  2. Faktorkan 143 = 11 × 13 (keduanya prima).
  3. Gabungkan: 1001 = 7 × 11 × 13 (jawaban D).

---

**55.** Faktorisasi prima dari **1155** adalah ….
- A. 3 × 5 × 77
- B. 3 × 5 × 7 × 11
- C. 5 × 231
- D. 3 × 385

**Kunci: B**
**Pembahasan:**
- **A salah** — 77 belum difaktorkan tuntas (77 = 7×11).
- **B benar** — 1155 = 3 × 5 × 7 × 11. Semua faktor prima.
- **C salah** — 231 belum difaktorkan tuntas (231 = 3×7×11).
- **D salah** — 385 belum difaktorkan tuntas (385 = 5×7×11).
- **Konsep kunci:** Bilangan hasil kali empat prima berbeda sering ditulis berhenti di tengah, padahal harus dipecah tuntas.
- **Langkah Penyelesaian:**
  1. Bagi 1155 dengan 3: 1155 ÷ 3 = 385.
  2. Bagi 385 dengan 5: 385 ÷ 5 = 77 = 7 × 11.
  3. Gabungkan: 1155 = 3 × 5 × 7 × 11 (jawaban B).

---

**56.** Faktorisasi prima dari **2310** adalah ….
- A. 2 × 3 × 385
- B. 2 × 1155
- C. 2 × 3 × 5 × 7 × 11
- D. 5 × 462

**Kunci: C**
**Pembahasan:**
- **A salah** — 385 belum difaktorkan tuntas.
- **B salah** — 1155 belum difaktorkan tuntas.
- **C benar** — 2310 = 2 × 3 × 5 × 7 × 11 (hasil kali lima prima pertama, disebut juga "primorial" ke-5). Semua faktor sudah prima.
- **D salah** — 462 belum difaktorkan tuntas.
- **Konsep kunci:** 2310 adalah hasil kali lima prima pertama berurutan (2×3×5×7×11) — pola khusus yang sering muncul di soal OSN.
- **Langkah Penyelesaian:**
  1. Bagi 2310 berulang dengan prima kecil: 2310÷2=1155; 1155÷3=385; 385÷5=77.
  2. Faktorkan 77 = 7×11.
  3. Gabungkan: 2310 = 2×3×5×7×11 (jawaban C).

---

**57.** Faktorisasi prima dari **5005** adalah ….
- A. 5 × 7 × 143
- B. 5 × 1001
- C. 11 × 455
- D. 5 × 7 × 11 × 13

**Kunci: D**
**Pembahasan:**
- **A salah** — 143 belum difaktorkan tuntas (143 = 11×13).
- **B salah** — 1001 belum difaktorkan tuntas.
- **C salah** — 455 belum difaktorkan tuntas.
- **D benar** — 5005 = 5 × 7 × 11 × 13. Semua faktor sudah prima.
- **Konsep kunci:** Bilangan dengan pola hampir sama dengan 1001 (=7×11×13) sering muncul dengan satu prima tambahan.
- **Langkah Penyelesaian:**
  1. Bagi 5005 dengan 5: 5005 ÷ 5 = 1001.
  2. Faktorkan 1001 = 7 × 11 × 13 (sudah diketahui dari soal sebelumnya).
  3. Gabungkan: 5005 = 5×7×11×13 (jawaban D).

---

**58.** Faktorisasi prima dari **7429** adalah ….
- A. 17 × 19 × 23
- B. 7429 adalah bilangan prima
- C. 17 × 437
- D. 19 × 391

**Kunci: A**
**Pembahasan:**
- **A benar** — 7429 = 17 × 437 = 17 × 19 × 23. Semua faktor sudah prima.
- **B salah** — 7429 bukan prima; terbukti bisa difaktorkan menjadi 17×19×23.
- **C salah** — 437 belum difaktorkan tuntas (437 = 19×23).
- **D salah** — 391 belum difaktorkan tuntas (391 = 17×23).
- **Konsep kunci:** Bilangan besar tetap bisa merupakan hasil kali tiga prima berturutan (17, 19, 23) yang berdekatan nilainya.
- **Langkah Penyelesaian:**
  1. Bagi 7429 dengan 17: 7429 ÷ 17 = 437.
  2. Faktorkan 437 = 19 × 23 (dari soal sebelumnya).
  3. Gabungkan: 7429 = 17×19×23 (jawaban A).

---

**59.** Bilangan **1729** (dikenal sebagai bilangan taxicab Hardy–Ramanujan) memiliki faktorisasi prima ….
- A. 7 × 13 × 20
- B. 13 × 133
- C. 7 × 13 × 19
- D. 1729 adalah bilangan prima

**Kunci: C**
**Pembahasan:**
- **A salah** — 20 bukan bilangan prima.
- **B salah** — 133 belum difaktorkan tuntas (133 = 7×19).
- **C benar** — 1729 = 7 × 13 × 19. Semua faktor sudah prima.
- **D salah** — 1729 bukan prima, karena bisa difaktorkan.
- **Konsep kunci:** 1729 terkenal sebagai bilangan terkecil yang bisa ditulis sebagai jumlah dua kubik dalam dua cara berbeda (1³+12³ = 9³+10³); faktorisasi primanya tetap wajib dihitung seperti biasa.
- **Langkah Penyelesaian:**
  1. Bagi 1729 dengan 7: 1729 ÷ 7 = 247.
  2. Faktorkan 247 = 13 × 19.
  3. Gabungkan: 1729 = 7×13×19 (jawaban C).

---

**60.** Faktorisasi prima dari **3003** adalah ….
- A. 3 × 7 × 143
- B. 3 × 7 × 11 × 13
- C. 7 × 429
- D. 3003 adalah bilangan prima

**Kunci: B**
**Pembahasan:**
- **A salah** — 143 belum difaktorkan tuntas.
- **B benar** — 3003 = 3 × 1001 = 3 × 7 × 11 × 13. Semua faktor sudah prima.
- **C salah** — 429 belum difaktorkan tuntas (429 = 3×11×13).
- **D salah** — 3003 bukan prima; jelas bisa difaktorkan.
- **Konsep kunci:** 3003 adalah 3 dikalikan pola 1001 (=7×11×13) yang sudah dikenal, mempercepat proses faktorisasi.
- **Langkah Penyelesaian:**
  1. Bagi 3003 dengan 3: 3003 ÷ 3 = 1001.
  2. Faktorkan 1001 = 7 × 11 × 13.
  3. Gabungkan: 3003 = 3×7×11×13 (jawaban B).

---

**61.** Faktorisasi prima dari **4199** adalah ….
- A. 13 × 17 × 18
- B. 13 × 17 × 19
- C. 4199 adalah bilangan prima
- D. 17 × 247

**Kunci: B**
**Pembahasan:**
- **A salah** — 18 bukan bilangan prima.
- **B benar** — 4199 = 13 × 17 × 19. Semua faktor sudah prima.
- **C salah** — 4199 bukan prima; bisa difaktorkan menjadi tiga prima berturutan.
- **D salah** — 247 belum difaktorkan tuntas (247 = 13×19).
- **Konsep kunci:** Hasil kali tiga prima berturutan (13, 17, 19) menghasilkan bilangan empat digit yang sekilas sulit difaktorkan tanpa pengujian sistematis.
- **Langkah Penyelesaian:**
  1. Bagi 4199 dengan 13: 4199 ÷ 13 = 323.
  2. Faktorkan 323 = 17 × 19 (dari soal sebelumnya).
  3. Gabungkan: 4199 = 13×17×19 (jawaban B).

---

**62.** Banyak faktor **5** yang terkandung dalam **100!** (100 faktorial) adalah ….
- A. 20
- B. 25
- C. 24
- D. 30

**Kunci: C**
**Pembahasan:**
- Rumus Legendre: e₅(100!) = ⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ = 20 + 4 + 0 = **24**.
- **A salah** — Hanya menghitung ⌊100/5⌋ = 20, lupa menambahkan kelipatan 25.
- **B salah** — Salah menjumlahkan (20+4 dihitung 25).
- **C benar** — 20 + 4 = 24.
- **D salah** — Salah taksir tanpa menghitung rumus dengan benar.
- **Konsep kunci:** Kelipatan 25 (=5²) menyumbang faktor 5 EKSTRA (dua kali), sehingga harus dihitung terpisah dari kelipatan 5 biasa.
- **Langkah Penyelesaian:**
  1. Hitung ⌊100/5⌋ = 20 (bilangan kelipatan 5 sampai 100).
  2. Hitung ⌊100/25⌋ = 4 (kelipatan 25 menyumbang faktor 5 tambahan).
  3. Jumlahkan: 20 + 4 = 24 (jawaban C).

---

**63.** Banyak angka nol di akhir (trailing zero) dari **50!** adalah ….
- A. 12
- B. 10
- C. 8
- D. 15

**Kunci: A**
**Pembahasan:**
- Banyak angka nol di akhir n! = banyak faktor 5 dalam n! (karena faktor 2 selalu lebih banyak).
- e₅(50!) = ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = **12**.
- **A benar** — Tepat 12.
- **B salah** — Hanya menghitung ⌊50/5⌋=10, lupa kelipatan 25.
- **C salah** — Salah hitung, kekurangan.
- **D salah** — Salah menjumlahkan atau menambah komponen yang tidak perlu.
- **Konsep kunci:** Angka nol di akhir faktorial ditentukan oleh pasangan faktor 2 dan 5; karena faktor 2 jauh lebih banyak, banyaknya faktor 5 yang menentukan.
- **Langkah Penyelesaian:**
  1. Hitung ⌊50/5⌋ = 10.
  2. Hitung ⌊50/25⌋ = 2.
  3. Jumlahkan: 10 + 2 = 12 (jawaban A).

---

**64.** Banyak faktor **3** yang terkandung dalam **50!** adalah ….
- A. 16
- B. 18
- C. 20
- D. 22

**Kunci: D**
**Pembahasan:**
- e₃(50!) = ⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ = 16 + 5 + 1 = **22**.
- **A salah** — Hanya menghitung ⌊50/3⌋=16, lupa kelipatan 9 dan 27.
- **B salah** — Hanya menjumlahkan sebagian (16+5 dihitung salah jadi 18... atau lupa satu suku).
- **C salah** — Lupa suku ketiga (⌊50/27⌋=1).
- **D benar** — 16 + 5 + 1 = 22.
- **Konsep kunci:** Rumus Legendre dijumlahkan terus sampai hasil bagi bulat menjadi 0, tidak boleh berhenti di suku pertama saja.
- **Langkah Penyelesaian:**
  1. Hitung ⌊50/3⌋=16, ⌊50/9⌋=5, ⌊50/27⌋=1, ⌊50/81⌋=0 (berhenti).
  2. Jumlahkan semua suku: 16+5+1=22.
  3. Jawaban D.

---

**65.** Banyak faktor **2** yang terkandung dalam **20!** adalah ….
- A. 15
- B. 18
- C. 20
- D. 10

**Kunci: B**
**Pembahasan:**
- e₂(20!) = ⌊20/2⌋ + ⌊20/4⌋ + ⌊20/8⌋ + ⌊20/16⌋ = 10 + 5 + 2 + 1 = **18**.
- **A salah** — Lupa satu suku dalam penjumlahan.
- **B benar** — 10+5+2+1 = 18.
- **C salah** — Menduga sama dengan 20 (jumlah bilangan), padahal harus dihitung rumus Legendre.
- **D salah** — Hanya menghitung suku pertama ⌊20/2⌋=10.
- **Konsep kunci:** Karena banyak kelipatan pangkat dua (2,4,8,16) di bawah 20, faktor 2 dalam 20! menjadi jauh lebih banyak daripada faktor 5.
- **Langkah Penyelesaian:**
  1. Hitung ⌊20/2⌋=10, ⌊20/4⌋=5, ⌊20/8⌋=2, ⌊20/16⌋=1, ⌊20/32⌋=0 (berhenti).
  2. Jumlahkan: 10+5+2+1=18.
  3. Jawaban B.

---

**66.** Banyak angka nol di akhir dari **100!** adalah ….
- A. 20
- B. 22
- C. 24
- D. 26

**Kunci: C**
**Pembahasan:**
- Banyak angka nol = banyak faktor 5 dalam 100! (sudah dihitung di soal 62) = **24**.
- **A salah** — Hanya menghitung ⌊100/5⌋=20, lupa kelipatan 25.
- **B salah** — Salah menjumlahkan komponen.
- **C benar** — 20 + 4 = 24 (sama seperti perhitungan faktor 5).
- **D salah** — Menambahkan komponen yang tidak perlu, seperti ikut menghitung faktor 2.
- **Konsep kunci:** Banyak angka nol di akhir faktorial sama dengan banyak faktor 5 (bukan faktor 2), karena faktor 2 selalu jauh lebih melimpah.
- **Langkah Penyelesaian:**
  1. Ingat: trailing zero = banyak faktor 5 dalam n!.
  2. Gunakan hasil dari soal 62: e₅(100!) = 24.
  3. Jawaban C.

---

**67.** Banyak faktor **2** yang terkandung dalam **30!** adalah ….
- A. 20
- B. 22
- C. 24
- D. 26

**Kunci: D**
**Pembahasan:**
- e₂(30!) = ⌊30/2⌋ + ⌊30/4⌋ + ⌊30/8⌋ + ⌊30/16⌋ = 15 + 7 + 3 + 1 = **26**.
- **A salah** — Lupa dua suku terakhir.
- **B salah** — Lupa satu suku terakhir.
- **C salah** — Salah menjumlahkan (15+7+3 dihitung 24 tanpa suku terakhir).
- **D benar** — 15+7+3+1 = 26.
- **Konsep kunci:** Semakin besar n, semakin banyak suku dalam rumus Legendre yang harus dijumlahkan sampai hasil bagi menjadi 0.
- **Langkah Penyelesaian:**
  1. Hitung ⌊30/2⌋=15, ⌊30/4⌋=7, ⌊30/8⌋=3, ⌊30/16⌋=1, ⌊30/32⌋=0 (berhenti).
  2. Jumlahkan semua suku: 15+7+3+1=26.
  3. Jawaban D.

---

**68.** Bilangan **187** adalah ….
- A. komposit, karena 187 = 11 × 17
- B. prima
- C. genap
- D. habis dibagi 7

**Kunci: A**
**Pembahasan:**
- **A benar** — **187 = 11 × 17**. √187 ≈ 13,7, jadi harus cek sampai 13.
- **B salah** — 187 lolos cek 2, 3, 5, 7, tapi belum dicek 11.
- **C salah** — 187 berakhiran 7, ganjil.
- **D salah** — 187 ÷ 7 ≈ 26,71 (tidak habis).
- **Konsep kunci:** Bilangan berakhiran 7 sering disangka prima, padahal tetap harus diuji pembagi 11 dan 13.
- **Langkah Penyelesaian:**
  1. Cek 187 tidak habis dibagi 2, 3, 5, 7.
  2. Cek pembagi 11: 187 ÷ 11 = 17 → habis.
  3. Simpulkan 187 = 11×17 komposit (jawaban A).

---

**69.** Bilangan **209** adalah ….
- A. prima
- B. komposit, karena 209 = 11 × 19
- C. genap
- D. habis dibagi 3

**Kunci: B**
**Pembahasan:**
- **A salah** — 209 lolos cek 2, 3, 5, 7, tapi belum dicek 11.
- **B benar** — **209 = 11 × 19**. √209 ≈ 14,5, jadi harus cek sampai 13.
- **C salah** — 209 berakhiran 9, ganjil.
- **D salah** — Jumlah digit 2+0+9 = 11, tidak habis dibagi 3.
- **Konsep kunci:** Uji pembagi 11 sangat penting untuk bilangan dua-tiga digit yang lolos cek 2, 3, 5, 7.
- **Langkah Penyelesaian:**
  1. Cek 209 tidak habis dibagi 2, 3, 5, 7.
  2. Cek pembagi 11: 209 ÷ 11 = 19 → habis.
  3. Simpulkan 209 = 11×19 komposit (jawaban B).

---

**70.** Bilangan **253** adalah ….
- A. prima
- B. genap
- C. komposit, karena 253 = 11 × 23
- D. habis dibagi 7

**Kunci: C**
**Pembahasan:**
- **A salah** — 253 lolos cek 2, 3, 5, 7, tapi belum dicek 11.
- **B salah** — 253 berakhiran 3, ganjil.
- **C benar** — **253 = 11 × 23**. √253 ≈ 15,9, jadi harus cek sampai 13.
- **D salah** — 253 ÷ 7 ≈ 36,14 (tidak habis).
- **Konsep kunci:** Aturan habis dibagi 11 (selisih bergantian digit) bisa digunakan untuk mempercepat pengecekan: 2−5+3=0, habis dibagi 11.
- **Langkah Penyelesaian:**
  1. Cek 253 tidak habis dibagi 2, 3, 5, 7.
  2. Cek pembagi 11 (pakai aturan selisih bergantian digit: 2−5+3=0, habis 11): 253 ÷ 11 = 23.
  3. Simpulkan 253 = 11×23 komposit (jawaban C).

---

**71.** Bilangan **341** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena 341 = 11 × 31

**Kunci: D**
**Pembahasan:**
- **A salah** — 341 lolos cek 2, 3, 5, 7, tapi belum dicek 11.
- **B salah** — 341 berakhiran 1, ganjil.
- **C salah** — Jumlah digit 3+4+1 = 8, tidak habis dibagi 3.
- **D benar** — **341 = 11 × 31**. √341 ≈ 18,5, jadi harus cek sampai 17.
- **Konsep kunci:** Cek aturan habis dibagi 11 (selisih bergantian digit: 3−4+1=0) sangat membantu menemukan faktor 11 dengan cepat.
- **Langkah Penyelesaian:**
  1. Cek 341 tidak habis dibagi 2, 3, 5, 7.
  2. Cek pembagi 11 (selisih bergantian digit = 0, habis 11): 341 ÷ 11 = 31.
  3. Simpulkan 341 = 11×31 komposit (jawaban D).

---

**72.** Bilangan **401** adalah ….
- A. prima
- B. komposit, karena 401 habis dibagi 11
- C. komposit, karena 401 habis dibagi 3
- D. komposit, karena 401 habis dibagi 7

**Kunci: A**
**Pembahasan:**
- **A benar** — Cek pembagi sampai √401 ≈ 20,02 (2,3,5,7,11,13,17,19) — tidak satu pun habis → **401 prima**.
- **B salah** — 401 ÷ 11 ≈ 36,45 (tidak habis; klaim ini salah).
- **C salah** — Jumlah digit 4+0+1 = 5, tidak habis dibagi 3 (klaim ini salah).
- **D salah** — 401 ÷ 7 ≈ 57,29 (tidak habis; klaim ini salah).
- **Konsep kunci:** Klaim "habis dibagi X" harus diverifikasi dengan pembagian aktual, bukan sekadar diasumsikan benar.
- **Langkah Penyelesaian:**
  1. Hitung √401 ≈ 20,02, cek semua prima ≤ 20: 2,3,5,7,11,13,17,19.
  2. Uji satu per satu: tidak ada yang membagi habis 401.
  3. Simpulkan 401 prima (jawaban A).

---

**73.** Bilangan **481** adalah ….
- A. prima
- B. genap
- C. komposit, karena 481 = 13 × 37
- D. habis dibagi 3

**Kunci: C**
**Pembahasan:**
- **A salah** — 481 lolos cek 2, 3, 5, 7, 11, tapi belum dicek 13.
- **B salah** — 481 berakhiran 1, ganjil.
- **C benar** — **481 = 13 × 37**. √481 ≈ 21,9, jadi harus cek sampai 19.
- **D salah** — Jumlah digit 4+8+1 = 13, tidak habis dibagi 3.
- **Konsep kunci:** Bilangan yang lolos hampir semua tes pembagi kecil tetap bisa komposit dari dua prima berukuran sedang-besar.
- **Langkah Penyelesaian:**
  1. Cek 481 tidak habis dibagi 2, 3, 5, 7, 11.
  2. Cek pembagi 13: 481 ÷ 13 = 37 → habis.
  3. Simpulkan 481 = 13×37 komposit (jawaban C).

---

**74.** Bilangan **493** adalah ….
- A. prima
- B. komposit, karena 493 = 17 × 29
- C. genap
- D. habis dibagi 3

**Kunci: B**
**Pembahasan:**
- **A salah** — 493 lolos cek 2, 3, 5, 7, 11, 13, tapi belum dicek 17.
- **B benar** — **493 = 17 × 29**. √493 ≈ 22,2, jadi harus cek sampai 19.
- **C salah** — 493 berakhiran 3, ganjil.
- **D salah** — Jumlah digit 4+9+3 = 16, tidak habis dibagi 3.
- **Konsep kunci:** Terus lanjutkan uji pembagi sampai batas √n meski sudah lolos banyak prima kecil.
- **Langkah Penyelesaian:**
  1. Cek 493 tidak habis dibagi 2, 3, 5, 7, 11, 13.
  2. Cek pembagi 17: 493 ÷ 17 = 29 → habis.
  3. Simpulkan 493 = 17×29 komposit (jawaban B).

---

**75.** Bilangan **529** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena 529 = 23² (bukan prima meskipun ganjil dan berakhiran 9)

**Kunci: D**
**Pembahasan:**
- **A salah** — 529 lolos cek 2, 3, 5, 7, 11, 13, 17, 19, tapi belum dicek 23.
- **B salah** — 529 berakhiran 9, ganjil.
- **C salah** — Jumlah digit 5+2+9 = 16, tidak habis dibagi 3.
- **D benar** — **529 = 23²** (kuadrat sempurna dari prima 23) → komposit. √529 = 23 tepat, jadi 23 adalah pembagi persis di batas atas.
- **Konsep kunci:** Kuadrat dari suatu bilangan prima (p²) selalu tepat berada di batas √n = p, sehingga wajib diuji sampai batas paling akhir.
- **Langkah Penyelesaian:**
  1. Cek 529 tidak habis dibagi 2 sampai 19.
  2. Cek pembagi 23: 529 ÷ 23 = 23 → habis tepat.
  3. Simpulkan 529 = 23² komposit (jawaban D).

---

**76.** Bilangan **551** adalah ….
- A. komposit, karena 551 = 19 × 29
- B. prima
- C. genap
- D. habis dibagi 3

**Kunci: A**
**Pembahasan:**
- **A benar** — **551 = 19 × 29**. √551 ≈ 23,5, jadi harus cek sampai 23.
- **B salah** — 551 lolos cek 2, 3, 5, 7, 11, 13, 17, tapi belum dicek 19.
- **C salah** — 551 berakhiran 1, ganjil.
- **D salah** — Jumlah digit 5+5+1 = 11, tidak habis dibagi 3.
- **Konsep kunci:** Semiprima berukuran ratusan sering punya faktor prima yang berdekatan (19 dan 29), sehingga wajib uji tuntas sampai √n.
- **Langkah Penyelesaian:**
  1. Cek 551 tidak habis dibagi 2 sampai 17.
  2. Cek pembagi 19: 551 ÷ 19 = 29 → habis.
  3. Simpulkan 551 = 19×29 komposit (jawaban A).

---

**77.** Banyak pasangan bilangan prima (p ≤ q) yang berjumlah **30** adalah ….
- A. 2
- B. 3
- C. 4
- D. 5

**Kunci: B**
**Pembahasan:**
- Cek p prima ≤ 15: 7+23=30 ✓; 11+19=30 ✓; 13+17=30 ✓. (3+27 dan lainnya tidak memenuhi karena 27 komposit.)
- **A salah** — Hanya menemukan 2 dari 3 pasangan.
- **B benar** — Tepat **3 pasangan**: (7,23), (11,19), (13,17).
- **C salah** — Menghitung satu pasangan palsu (mis. 3+27, padahal 27 komposit).
- **D salah** — Menghitung dua pasangan palsu.
- **Konsep kunci:** Konjektur Goldbach bisa dibuktikan konkret dengan mendaftar semua pasangan prima p≤q yang berjumlah suatu bilangan genap tertentu.
- **Langkah Penyelesaian:**
  1. Cek tiap prima p ≤ 15, tentukan apakah 30−p juga prima.
  2. Catat pasangan yang memenuhi: (7,23), (11,19), (13,17).
  3. Hitung banyaknya = 3 (jawaban B).

---

**78.** Banyak pasangan bilangan prima (p ≤ q) yang berjumlah **40** adalah ….
- A. 2
- B. 4
- C. 3
- D. 5

**Kunci: C**
**Pembahasan:**
- Cek p prima ≤ 20: 3+37=40 ✓; 11+29=40 ✓; 17+23=40 ✓.
- **A salah** — Hanya menemukan 2 dari 3 pasangan.
- **B salah** — Menghitung satu pasangan palsu.
- **C benar** — Tepat **3 pasangan**: (3,37), (11,29), (17,23).
- **D salah** — Menghitung dua pasangan palsu.
- **Konsep kunci:** Selalu cek SEMUA prima p ≤ n/2 untuk memastikan tidak ada pasangan yang terlewat atau tertambah palsu.
- **Langkah Penyelesaian:**
  1. Cek tiap prima p ≤ 20, tentukan apakah 40−p juga prima.
  2. Catat pasangan yang memenuhi: (3,37), (11,29), (17,23).
  3. Hitung banyaknya = 3 (jawaban C).

---

**79.** Banyak pasangan bilangan prima (p ≤ q) yang berjumlah **50** adalah ….
- A. 3
- B. 5
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- Cek p prima ≤ 25: 3+47=50 ✓; 7+43=50 ✓; 13+37=50 ✓; 19+31=50 ✓.
- **A salah** — Hanya menemukan 3 dari 4 pasangan.
- **B salah** — Menghitung satu pasangan palsu.
- **C salah** — Menghitung dua pasangan palsu.
- **D benar** — Tepat **4 pasangan**: (3,47), (7,43), (13,37), (19,31).
- **Konsep kunci:** Bilangan genap yang lebih besar cenderung punya lebih banyak pasangan prima penjumlah, tapi tetap harus diverifikasi satu per satu.
- **Langkah Penyelesaian:**
  1. Cek tiap prima p ≤ 25, tentukan apakah 50−p juga prima.
  2. Catat pasangan yang memenuhi: (3,47), (7,43), (13,37), (19,31).
  3. Hitung banyaknya = 4 (jawaban D).

---

**80.** Banyak pasangan bilangan prima (p ≤ q) yang berjumlah **60** adalah ….
- A. 6
- B. 5
- C. 7
- D. 4

**Kunci: A**
**Pembahasan:**
- Cek p prima ≤ 30: 7+53=60 ✓; 13+47=60 ✓; 17+43=60 ✓; 19+41=60 ✓; 23+37=60 ✓; 29+31=60 ✓.
- **A benar** — Tepat **6 pasangan**.
- **B salah** — Hanya menemukan 5 dari 6 pasangan.
- **C salah** — Menghitung satu pasangan palsu.
- **D salah** — Hanya menemukan 4 dari 6 pasangan.
- **Konsep kunci:** 60 memiliki lebih banyak pasangan prima penjumlah dibanding 30, 40, atau 50 — menunjukkan tidak ada pola tetap jumlah pasangan untuk tiap bilangan genap.
- **Langkah Penyelesaian:**
  1. Cek tiap prima p ≤ 30, tentukan apakah 60−p juga prima.
  2. Catat pasangan yang memenuhi: (7,53), (13,47), (17,43), (19,41), (23,37), (29,31).
  3. Hitung banyaknya = 6 (jawaban A).

---

**81.** Banyak pasangan bilangan prima (p ≤ q) yang berjumlah **80** adalah ….
- A. 3
- B. 5
- C. 4
- D. 6

**Kunci: C**
**Pembahasan:**
- Cek p prima ≤ 40: 7+73=80 ✓; 13+67=80 ✓; 19+61=80 ✓; 37+43=80 ✓.
- **A salah** — Hanya menemukan 3 dari 4 pasangan.
- **B salah** — Menghitung satu pasangan palsu.
- **C benar** — Tepat **4 pasangan**: (7,73), (13,67), (19,61), (37,43).
- **D salah** — Menghitung dua pasangan palsu.
- **Konsep kunci:** Verifikasi tiap pasangan dengan uji keprimaan kedua bilangan, jangan hanya menebak dari pola sebelumnya.
- **Langkah Penyelesaian:**
  1. Cek tiap prima p ≤ 40, tentukan apakah 80−p juga prima.
  2. Catat pasangan yang memenuhi: (7,73), (13,67), (19,61), (37,43).
  3. Hitung banyaknya = 4 (jawaban C).

---

**82.** Selisih terbesar antara dua bilangan prima berurutan dalam rentang **100–130** adalah ….
- A. 8
- B. 6
- C. 10
- D. 14

**Kunci: D**
**Pembahasan:**
- Prima dalam rentang: 101, 103, 107, 109, 113, 127. Selisih berurutan: 2, 4, 2, 4, **14**.
- **A salah** — Bukan selisih terbesar di rentang ini.
- **B salah** — Bukan selisih terbesar.
- **C salah** — Tidak ada selisih 10 di rentang ini.
- **D benar** — Celah terbesar adalah antara **113 dan 127** (selisih 14), karena 114–126 semuanya komposit.
- **Konsep kunci:** Celah (gap) antar prima berurutan bisa melebar jauh melebihi 2 meski masih di rentang tiga digit awal.
- **Langkah Penyelesaian:**
  1. Daftar prima 100–130: 101, 103, 107, 109, 113, 127.
  2. Hitung tiap selisih berurutan: 2, 4, 2, 4, 14.
  3. Selisih terbesar = 14 (jawaban D).

---

**83.** Selisih terbesar antara dua bilangan prima berurutan dalam rentang **190–215** adalah ….
- A. 12
- B. 8
- C. 6
- D. 10

**Kunci: A**
**Pembahasan:**
- Prima dalam rentang: 191, 193, 197, 199, 211. Selisih berurutan: 2, 4, 2, **12**.
- **A benar** — Celah terbesar antara **199 dan 211**, karena 200–210 semuanya komposit.
- **B salah** — Bukan selisih terbesar.
- **C salah** — Bukan selisih terbesar.
- **D salah** — Tidak ada selisih 10 di rentang ini.
- **Konsep kunci:** Celah lebar sering muncul tepat setelah kelompok prima yang berdekatan (seperti 191–199).
- **Langkah Penyelesaian:**
  1. Daftar prima 190–215: 191, 193, 197, 199, 211.
  2. Hitung tiap selisih berurutan: 2, 4, 2, 12.
  3. Selisih terbesar = 12 (jawaban A).

---

**84.** Selisih terbesar antara dua bilangan prima berurutan dalam rentang **80–100** adalah ….
- A. 6
- B. 8
- C. 4
- D. 10

**Kunci: B**
**Pembahasan:**
- Prima dalam rentang: 83, 89, 97. Selisih berurutan: 6, **8**.
- **A salah** — Bukan selisih terbesar.
- **B benar** — Celah terbesar antara **89 dan 97**, karena 90–96 semuanya komposit.
- **C salah** — Tidak ada selisih 4 di rentang ini.
- **D salah** — Tidak ada selisih 10 di rentang ini.
- **Konsep kunci:** Rentang pendek pun bisa memuat celah prima yang cukup lebar dibanding jaraknya sendiri.
- **Langkah Penyelesaian:**
  1. Daftar prima 80–100: 83, 89, 97.
  2. Hitung selisih berurutan: 6, 8.
  3. Selisih terbesar = 8 (jawaban B).

---

**85.** Selisih terbesar antara dua bilangan prima berurutan dalam rentang **150–180** adalah ….
- A. 4
- B. 8
- C. 6
- D. 10

**Kunci: C**
**Pembahasan:**
- Prima dalam rentang: 151, 157, 163, 167, 173, 179. Selisih berurutan: 6, 6, 4, 6, **6**.
- **A salah** — Bukan selisih terbesar.
- **B salah** — Tidak ada selisih 8 di rentang ini.
- **C benar** — Semua celah maksimal di rentang ini adalah **6**, muncul beberapa kali.
- **D salah** — Tidak ada selisih 10 di rentang ini.
- **Konsep kunci:** Tidak setiap rentang punya satu celah dominan — kadang celah maksimalnya justru berulang beberapa kali.
- **Langkah Penyelesaian:**
  1. Daftar prima 150–180: 151, 157, 163, 167, 173, 179.
  2. Hitung tiap selisih berurutan: 6, 6, 4, 6, 6.
  3. Selisih terbesar = 6 (jawaban C).

---

**86.** Bilangan berikut yang memiliki tepat **3 faktor prima berbeda** adalah ….
- A. 100
- B. 16
- C. 49
- D. 30

**Kunci: D**
**Pembahasan:**
- **A salah** — 100 = 2² × 5², hanya **2** faktor prima berbeda (2 dan 5).
- **B salah** — 16 = 2⁴, hanya **1** faktor prima berbeda (2).
- **C salah** — 49 = 7², hanya **1** faktor prima berbeda (7).
- **D benar** — **30 = 2 × 3 × 5**, tepat **3** faktor prima berbeda.
- **Konsep kunci:** Banyak faktor prima BERBEDA dihitung dari banyak jenis prima penyusun, bukan dari pangkatnya atau total banyak faktor.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Hitung banyak JENIS prima berbeda pada tiap faktorisasi.
  3. Hanya 30 (=2×3×5) yang punya tepat 3 jenis, jawaban D.

---

**87.** Bilangan berikut yang memiliki tepat **4 faktor prima berbeda** adalah ….
- A. 210
- B. 60
- C. 90
- D. 72

**Kunci: A**
**Pembahasan:**
- **A benar** — **210 = 2 × 3 × 5 × 7**, tepat **4** faktor prima berbeda.
- **B salah** — 60 = 2² × 3 × 5, hanya **3** faktor prima berbeda.
- **C salah** — 90 = 2 × 3² × 5, hanya **3** faktor prima berbeda.
- **D salah** — 72 = 2³ × 3², hanya **2** faktor prima berbeda.
- **Konsep kunci:** 210 adalah hasil kali empat prima pertama (2,3,5,7) — pola "primorial" yang sering dijadikan contoh soal.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Hitung banyak jenis prima berbeda pada tiap faktorisasi.
  3. Hanya 210 yang punya tepat 4 jenis, jawaban A.

---

**88.** Bilangan berikut yang memiliki tepat **2 faktor prima berbeda** adalah ….
- A. 105
- B. 45
- C. 60
- D. 210

**Kunci: B**
**Pembahasan:**
- **A salah** — 105 = 3 × 5 × 7, punya **3** faktor prima berbeda.
- **B benar** — **45 = 3² × 5**, tepat **2** faktor prima berbeda (3 dan 5).
- **C salah** — 60 = 2² × 3 × 5, punya **3** faktor prima berbeda.
- **D salah** — 210 = 2×3×5×7, punya **4** faktor prima berbeda.
- **Konsep kunci:** Pangkat tinggi pada satu prima (seperti 3² pada 45) tidak menambah banyak JENIS prima berbeda.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Hitung banyak jenis prima berbeda pada tiap faktorisasi.
  3. Hanya 45 yang punya tepat 2 jenis, jawaban B.

---

**89.** Bilangan berikut yang hanya memiliki **satu jenis faktor prima** (berbentuk pangkat murni satu prima) adalah ….
- A. 60
- B. 90
- C. 81
- D. 30

**Kunci: C**
**Pembahasan:**
- **A salah** — 60 = 2² × 3 × 5, ada **3** jenis prima.
- **B salah** — 90 = 2 × 3² × 5, ada **3** jenis prima.
- **C benar** — **81 = 3⁴**, hanya **1** jenis prima (3), berbentuk pangkat murni.
- **D salah** — 30 = 2 × 3 × 5, ada **3** jenis prima.
- **Konsep kunci:** Bilangan berbentuk pangkat murni satu prima (pⁿ) selalu hanya punya satu jenis faktor prima, berapa pun besar pangkatnya.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Cari yang hanya tersusun dari SATU jenis prima.
  3. Hanya 81 = 3⁴ yang memenuhi, jawaban C.

---

**90.** Bilangan berikut yang merupakan **kuadrat sempurna** (semua pangkat pada faktorisasi primanya genap) adalah ….
- A. 180
- B. 150
- C. 108
- D. 196

**Kunci: D**
**Pembahasan:**
- **A salah** — 180 = 2² × 3² × 5¹, pangkat pada 5 = 1 (ganjil) → BUKAN kuadrat sempurna.
- **B salah** — 150 = 2¹ × 3¹ × 5², pangkat pada 2 dan 3 = 1 (ganjil) → bukan kuadrat sempurna.
- **C salah** — 108 = 2² × 3³, pangkat pada 3 = 3 (ganjil) → bukan kuadrat sempurna.
- **D benar** — **196 = 2² × 7²**, SEMUA pangkat genap → kuadrat sempurna, yaitu 14².
- **Konsep kunci:** Kuadrat sempurna terjadi jika dan hanya jika seluruh pangkat pada faktorisasi prima berjumlah genap.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Cek apakah SEMUA pangkatnya genap.
  3. Hanya 196 (=2²×7²=14²) memenuhi, jawaban D.

---

**91.** Bilangan berikut yang merupakan **kuadrat sempurna** adalah ….
- A. 225
- B. 245
- C. 288
- D. 242

**Kunci: A**
**Pembahasan:**
- **A benar** — **225 = 3² × 5²**, SEMUA pangkat genap → kuadrat sempurna, yaitu 15².
- **B salah** — 245 = 5 × 7², pangkat pada 5 = 1 (ganjil) → bukan kuadrat sempurna.
- **C salah** — 288 = 2⁵ × 3², pangkat pada 2 = 5 (ganjil) → bukan kuadrat sempurna.
- **D salah** — 242 = 2 × 11², pangkat pada 2 = 1 (ganjil) → bukan kuadrat sempurna.
- **Konsep kunci:** Satu saja pangkat ganjil dalam faktorisasi prima sudah cukup membatalkan status kuadrat sempurna.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Cek apakah semua pangkatnya genap.
  3. Hanya 225 (=3²×5²=15²) memenuhi, jawaban A.

---

**92.** Bilangan berikut yang merupakan **kuadrat sempurna** adalah ….
- A. 360
- B. 324
- C. 294
- D. 198

**Kunci: B**
**Pembahasan:**
- **A salah** — 360 = 2³ × 3² × 5, pangkat pada 2 dan 5 ganjil → bukan kuadrat sempurna.
- **B benar** — **324 = 2² × 3⁴**, SEMUA pangkat genap → kuadrat sempurna, yaitu 18².
- **C salah** — 294 = 2 × 3 × 7², pangkat pada 2 dan 3 ganjil → bukan kuadrat sempurna.
- **D salah** — 198 = 2 × 3² × 11, pangkat pada 2 dan 11 ganjil → bukan kuadrat sempurna.
- **Konsep kunci:** Pengecekan kuadrat sempurna via faktorisasi prima jauh lebih cepat daripada mencoba akar kuadrat satu per satu untuk bilangan besar.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan secara prima.
  2. Cek apakah semua pangkatnya genap.
  3. Hanya 324 (=2²×3⁴=18²) memenuhi, jawaban B.

---

**93.** Rumus **n² + n + 41** menghasilkan bilangan prima untuk banyak nilai n. Untuk **n = 3**, hasilnya adalah ….
- A. 51
- B. 49
- C. 55
- D. 53

**Kunci: D**
**Pembahasan:**
- Hitung: 3² + 3 + 41 = 9 + 3 + 41 = **53**.
- **A salah** — Salah menjumlahkan (kekurangan 2).
- **B salah** — 49 = 7², bukan hasil rumus untuk n=3.
- **C salah** — Salah menjumlahkan (kelebihan 2).
- **D benar** — 9 + 3 + 41 = 53, dan 53 memang bilangan prima (sesuai sifat rumus Euler untuk n kecil).
- **Konsep kunci:** Rumus n²+n+41 (polinomial Euler) menghasilkan prima untuk banyak nilai n kecil berturut-turut.
- **Langkah Penyelesaian:**
  1. Substitusi n=3: 3²=9.
  2. Hitung 9 + 3 + 41.
  3. Hasil = 53 (jawaban D).

---

**94.** Rumus **n² + n + 41** PERTAMA KALI GAGAL menghasilkan bilangan prima (yakni menghasilkan komposit) pada **n = ….**
- A. 41
- B. 39
- C. 40
- D. 38

**Kunci: C**
**Pembahasan:**
- **A salah** — Untuk n=41: 41²+41+41 = 41(41+1+1) = 41×43, memang komposit, tapi bukan kegagalan PERTAMA.
- **B salah** — Untuk n=39: 39²+39+41 = 1521+39+41 = 1601, ternyata masih prima (belum gagal).
- **C benar** — Untuk n=40: 40²+40+41 = 1600+40+41 = **1681 = 41²**, komposit — ini kegagalan PERTAMA setelah 40 nilai berturut-turut (n=0 sampai 39) menghasilkan prima.
- **D salah** — Untuk n=38: 38²+38+41 = 1444+38+41 = 1523, masih prima.
- **Konsep kunci:** Polinomial Euler n²+n+41 istimewa karena sukses untuk 40 nilai n berturut-turut (0 sampai 39) sebelum akhirnya gagal di n=40.
- **Langkah Penyelesaian:**
  1. Ingat fakta: rumus ini terbukti prima untuk n=0 sampai 39.
  2. Uji n=40: 1600+40+41=1681=41² (komposit).
  3. Jawaban C (kegagalan pertama di n=40).

---

**95.** Untuk **n = 40** pada rumus n² + n + 41, hasilnya adalah **1681 = 41²**. Ini menunjukkan bahwa 1681 adalah ….
- A. komposit, karena 1681 = 41 × 41
- B. prima
- C. bilangan prima Mersenne
- D. bukan bilangan asli

**Kunci: A**
**Pembahasan:**
- **A benar** — **1681 = 41 × 41 = 41²**, memiliki faktor selain 1 dan dirinya (yaitu 41) → **komposit**.
- **B salah** — 1681 punya lebih dari 2 faktor (1, 41, 1681), jadi bukan prima.
- **C salah** — Prima Mersenne berbentuk 2^p−1, sama sekali tidak berkaitan dengan bentuk p².
- **D salah** — 1681 jelas bilangan asli (bulat positif).
- **Konsep kunci:** Bentuk p² (kuadrat dari bilangan prima) selalu komposit, karena selalu punya faktor tambahan p selain 1 dan dirinya.
- **Langkah Penyelesaian:**
  1. Tulis 1681 = 41 × 41 = 41².
  2. Hitung faktor: 1, 41, 1681 — lebih dari 2 faktor.
  3. Simpulkan 1681 komposit (jawaban A).

---

**96.** FPB dari **84** dan **126** menggunakan faktorisasi prima (84 = 2² × 3 × 7, 126 = 2 × 3² × 7) adalah ….
- A. 21
- B. 42
- C. 63
- D. 14

**Kunci: B**
**Pembahasan:**
- FPB = kalikan tiap prima bersama dengan pangkat TERKECIL: 2^min(2,1) × 3^min(1,2) × 7^min(1,1) = 2¹ × 3¹ × 7¹ = **42**.
- **A salah** — Lupa mengalikan dengan faktor 2 (hanya 3×7=21).
- **B benar** — 2 × 3 × 7 = 42.
- **C salah** — Salah memilih pangkat terbesar bukan terkecil untuk 3 (3²×7=63).
- **D salah** — Lupa mengalikan dengan faktor 3 (hanya 2×7=14).
- **Konsep kunci:** FPB diambil dari pangkat TERKECIL tiap prima yang muncul di KEDUA bilangan.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat tiap prima: 2 (min 1), 3 (min 1), 7 (min 1).
  2. Kalikan: 2¹ × 3¹ × 7¹.
  3. Hasil = 42 (jawaban B).

---

**97.** KPK dari **36** dan **60** menggunakan faktorisasi prima (36 = 2² × 3², 60 = 2² × 3 × 5) adalah ….
- A. 120
- B. 90
- C. 360
- D. 180

**Kunci: D**
**Pembahasan:**
- KPK = kalikan tiap prima yang muncul dengan pangkat TERBESAR: 2^max(2,2) × 3^max(2,1) × 5^max(0,1) = 2² × 3² × 5 = **180**.
- **A salah** — Lupa memakai pangkat terbesar untuk 3 (hanya 3¹).
- **B salah** — Lupa memakai pangkat terbesar untuk 2 (hanya 2¹).
- **C salah** — Salah mengalikan pangkat kedua bilangan tanpa mengambil maksimum (2²×3²×2²×3×5, dobel hitung).
- **D benar** — 4 × 9 × 5 = 180.
- **Konsep kunci:** KPK diambil dari pangkat TERBESAR tiap prima yang muncul di SALAH SATU bilangan.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat tiap prima: 2 (max 2), 3 (max 2), 5 (max 1).
  2. Kalikan: 2² × 3² × 5.
  3. Hasil = 180 (jawaban D).

---

**98.** FPB dari **90** dan **150** menggunakan faktorisasi prima (90 = 2 × 3² × 5, 150 = 2 × 3 × 5²) adalah ….
- A. 15
- B. 45
- C. 30
- D. 60

**Kunci: C**
**Pembahasan:**
- FPB = kalikan tiap prima dengan pangkat TERKECIL: 2^min(1,1) × 3^min(2,1) × 5^min(1,2) = 2¹ × 3¹ × 5¹ = **30**.
- **A salah** — Lupa mengalikan dengan faktor 2 (hanya 3×5=15).
- **B salah** — Salah memilih pangkat terbesar untuk 3 (3²×5=45).
- **C benar** — 2 × 3 × 5 = 30.
- **D salah** — Salah memilih pangkat terbesar untuk 5 (2×3×5²=150, lalu salah bagi jadi 60).
- **Konsep kunci:** Selalu bandingkan pangkat prima yang sama antara dua bilangan dan ambil yang TERKECIL untuk FPB.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat tiap prima: 2 (min 1), 3 (min 1), 5 (min 1).
  2. Kalikan: 2¹ × 3¹ × 5¹.
  3. Hasil = 30 (jawaban C).

---

**99.** Menurut **Postulat Bertrand**, di antara suatu bilangan n dan 2n (n > 1) SELALU terdapat ….
- A. paling sedikit satu bilangan prima
- B. tepat satu bilangan prima
- C. tidak ada bilangan prima
- D. paling banyak satu bilangan prima

**Kunci: A**
**Pembahasan:**
- **A benar** — Postulat Bertrand menjamin **paling sedikit SATU** bilangan prima di antara n dan 2n untuk setiap n>1 (bisa lebih dari satu, tidak dibatasi maksimalnya).
- **B salah** — Bisa ada LEBIH dari satu prima di antara n dan 2n (mis. antara 10 dan 20 ada 11,13,17,19 — empat prima).
- **C salah** — Justru sebaliknya, selalu ADA minimal satu prima.
- **D salah** — Postulat ini tidak membatasi jumlah maksimal, hanya menjamin minimal satu.
- **Konsep kunci:** Postulat Bertrand adalah jaminan keberadaan (minimal satu), bukan jaminan jumlah pasti atau batas atas.
- **Langkah Penyelesaian:**
  1. Ingat bunyi Postulat Bertrand: untuk n>1, ada prima p dengan n<p<2n.
  2. Bandingkan dengan tiap pilihan jawaban.
  3. Pernyataan yang tepat adalah "paling sedikit satu" (jawaban A).

---

**100.** Berdasarkan Postulat Bertrand, di antara **50 dan 100** pasti terdapat sedikitnya satu bilangan prima. Contoh bilangan prima di rentang tersebut adalah ….
- A. 51
- B. 53
- C. 55
- D. 57

**Kunci: B**
**Pembahasan:**
- **A salah** — 51 = 3 × 17, komposit.
- **B benar** — **53** prima (tidak habis dibagi 2, 3, 5, 7; √53 ≈ 7,3).
- **C salah** — 55 = 5 × 11, komposit.
- **D salah** — 57 = 3 × 19, komposit.
- **Konsep kunci:** Postulat Bertrand menjamin keberadaan prima di rentang (n, 2n); rentang 50–100 memuat banyak prima seperti 53, 59, 61, 67, dst.
- **Langkah Penyelesaian:**
  1. Ingat Postulat Bertrand menjamin ada prima antara 50 dan 100.
  2. Uji tiap pilihan: 51=3×17, 53 prima, 55=5×11, 57=3×19.
  3. Jawaban B (53).

---

# Bagian III — Kunci & Distribusi

## Tabel Kunci 100 Soal

| 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|------|-------|-------|-------|-------|
| 1. D | 11. B | 21. C | 31. A | 41. A |
| 2. A | 12. C | 22. B | 32. B | 42. D |
| 3. C | 13. A | 23. D | 33. D | 43. B |
| 4. B | 14. D | 24. A | 34. C | 44. C |
| 5. D | 15. B | 25. C | 35. A | 45. A |
| 6. C | 16. C | 26. D | 36. B | 46. D |
| 7. A | 17. B | 27. B | 37. D | 47. C |
| 8. B | 18. D | 28. A | 38. C | 48. B |
| 9. D | 19. C | 29. C | 39. B | 49. A |
| 10. A | 20. A | 30. D | 40. A | 50. D |

| 51-60 | 61-70 | 71-80 | 81-90 | 91-100 |
|-------|-------|-------|-------|--------|
| 51. C | 61. B | 71. D | 81. C | 91. A |
| 52. B | 62. C | 72. A | 82. D | 92. B |
| 53. A | 63. A | 73. C | 83. A | 93. D |
| 54. D | 64. D | 74. B | 84. B | 94. C |
| 55. B | 65. B | 75. D | 85. C | 95. A |
| 56. C | 66. C | 76. A | 86. D | 96. B |
| 57. D | 67. D | 77. B | 87. A | 97. D |
| 58. A | 68. A | 78. C | 88. B | 98. C |
| 59. C | 69. B | 79. D | 89. C | 99. A |
| 60. B | 70. C | 80. A | 90. D | 100. B |

## Distribusi Kunci

Penghitungan per huruf (dirancang sejak awal agar seimbang sempurna, dicocokkan langsung dengan Tabel Kunci di atas):

- **A** (25 soal): 2, 7, 10, 13, 20, 24, 28, 31, 35, 40, 41, 45, 49, 53, 58, 63, 68, 72, 76, 80, 83, 87, 91, 95, 99
- **B** (25 soal): 4, 8, 11, 15, 17, 22, 27, 32, 36, 39, 43, 48, 52, 55, 60, 61, 65, 69, 74, 77, 84, 88, 92, 96, 100
- **C** (25 soal): 3, 6, 12, 16, 19, 21, 25, 29, 34, 38, 44, 47, 51, 56, 59, 62, 66, 70, 73, 78, 81, 85, 89, 94, 98
- **D** (25 soal): 1, 5, 9, 14, 18, 23, 26, 30, 33, 37, 42, 46, 50, 54, 57, 64, 67, 71, 75, 79, 82, 86, 90, 93, 97

**Distribusi A: 25 · B: 25 · C: 25 · D: 25** — seimbang sempurna di angka ideal 25 per huruf. Kunci tersebar acak antar blok 10 soal sehingga tidak ada pola "semua A" atau "semua D berurutan" yang bisa ditebak siswa.

---

## Strategi Belajar Bilangan Prima & Komposit (Tingkat Sulit)

1. **Hafal rumus banyak faktor**: τ(n) = (a+1)(b+1)(c+1)… dari faktorisasi prima n = p^a×q^b×r^c. Untuk mencari bilangan TERKECIL dengan tepat k faktor, uraikan k dengan SEMUA cara yang mungkin, lalu bandingkan hasilnya — jangan berhenti di penguraian pertama.
2. **Hafal rumus jumlah faktor (sigma)**: σ(n) = (1+p+…+p^a)(1+q+…+q^b)…, dan bedakan dengan jumlah faktor SEJATI (tanpa n sendiri) yang dipakai untuk menentukan bilangan sempurna/berlimpah/kurang.
3. **Prima Mersenne butuh DUA syarat**: p harus prima DAN 2^p−1 harus diuji sendiri keprimaannya. p=11 (→2047=23×89) dan p=23 (→8.388.607=47×178.481) adalah jebakan klasik.
4. **Konstruksi Euclid (hasil kali prima + 1) tidak menjamin prima baru** — contoh termasyhur 2×3×5×7×11×13+1 = 30.031 = 59×509, tetap komposit.
5. **Semiprima tersembunyi** (hasil kali dua prima berukuran sedang seperti 13×17, 17×19, 19×23, 23×29, 29×31) sering lolos cek 2, 3, 5, 7 — WAJIB lanjutkan pengujian sampai prima ≤ √n.
6. **Rumus Legendre** eₚ(n!) = ⌊n/p⌋+⌊n/p²⌋+⌊n/p³⌋+… dipakai untuk menghitung pangkat suatu prima dalam faktorial, dan banyak angka nol di akhir n! = pangkat 5 dalam n! (karena pangkat 2 selalu lebih banyak).
7. **Konjektur Goldbach**: bilangan genap yang sama bisa punya LEBIH dari satu pasangan prima penjumlah — selalu cek semua prima p ≤ n/2, jangan berhenti di pasangan pertama yang ditemukan.
8. **Kenali tiga kategori pasangan prima**: twin (selisih 2), cousin (selisih 4), sexy (selisih 6) — hitung selisihnya langsung, jangan menebak dari "kelihatan berdekatan".
9. **Kuadrat sempurna via faktorisasi prima**: semua pangkat pada faktorisasi harus GENAP. Satu pangkat ganjil saja sudah membatalkan status kuadrat sempurna.
10. **FPB pakai pangkat TERKECIL, KPK pakai pangkat TERBESAR** dari tiap prima yang muncul — hafalkan perbedaan ini agar tidak tertukar saat mengerjakan bilangan besar.

---

*Selesai. Sub-bab 01d - Bilangan Prima & Komposit (Tingkat Sulit).*
