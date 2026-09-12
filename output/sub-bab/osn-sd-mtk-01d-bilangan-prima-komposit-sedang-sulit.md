# OSN/KSN SD — Matematika · Sub-Bab 01d: Bilangan Prima & Komposit (Tingkat Sedang-Sulit)

> **Profil**: 50 Prov + 50 Nas = 100 soal PG
> **Fokus**: Definisi prima vs komposit, status angka 1, prima tunggal genap (2), tes keprimaan dengan √n, saringan Eratosthenes, banyak prima dalam rentang, faktor prima dasar, twin/Mersenne, aplikasi FPB/KPK & kriptografi
> **Target audiens**: SD kelas 5–6 siap OSN/KSN

---

## BAGIAN I · TEORI ESENSIAL

### 1. Definisi Inti
**Bilangan prima** = bilangan asli **lebih dari 1** yang **tepat memiliki 2 faktor**, yaitu **1 dan dirinya sendiri**.
- Contoh: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...

**Bilangan komposit** = bilangan asli **lebih dari 1** yang memiliki **lebih dari 2 faktor**.
- Contoh: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ...

### 2. Catatan Khusus Angka 1 & 0
- **1 BUKAN prima dan BUKAN komposit** — hanya punya 1 faktor (dirinya sendiri).
- **0 tidak diklasifikasikan** — bukan termasuk bilangan asli pada definisi standar SD.
- Mulai dari 2, setiap bilangan asli pasti **prima ATAU komposit** (tidak keduanya).

### 3. Prima Istimewa: Angka 2
- **2 = satu-satunya prima genap.**
- Semua bilangan genap lain (4, 6, 8, 10, …) habis dibagi 2 → punya minimal 3 faktor → **komposit**.
- Semua prima > 2 pasti ganjil. **Tetapi tidak semua ganjil adalah prima** (contoh: 9, 15, 21, 25, 27, 33, 35, …).

### 4. Daftar Prima ≤ 100 (wajib hafal)
**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97** → **25 prima**.

Perluasan wajib untuk tingkat Prov–Nas:
- Prima 101–200: **101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199** → **21 prima**.
- Pare-periode dekat 100 yang BUKAN prima: **121 = 11², 133 = 7×19, 143 = 11×13, 147 = 3×7², 161 = 7×23, 169 = 13², 187 = 11×17, 209 = 11×19, 221 = 13×17, 247 = 13×19, 289 = 17², 299 = 13×23, 323 = 17×19, 361 = 19², 391 = 17×23, 403 = 13×31, 437 = 19×23, 493 = 17×29, 527 = 17×31, 551 = 19×29, 667 = 23×29**.

### 5. Tes Keprimaan Cepat (Cek prima atau bukan?)
Untuk cek apakah **n prima**:
1. Cari **√n** (taksir).
2. Cek apakah n habis dibagi prima 2, 3, 5, 7, 11, … sampai **prima ≤ √n**.
3. Jika **tidak ada** pembagi prima yang membaginya habis → **n prima**.
4. Jika **ada satu saja** pembagi → **n komposit**.

**Contoh:** Apakah 119 prima?
- √119 ≈ 10,9. Cek prima ≤ 10: **2, 3, 5, 7**.
- 119 ÷ 2 = 59,5 ✗; 119 ÷ 3 = 39,67 ✗; 119 ÷ 5 = 23,8 ✗; **119 ÷ 7 = 17 ✓**.
- 119 = 7 × 17 → **komposit** (jebakan klasik: banyak kira 119 prima!).

**Contoh:** Apakah 137 prima?
- √137 ≈ 11,7. Cek 2, 3, 5, 7, 11. Tidak satupun habis. → **137 prima**.

### 6. Saringan Eratosthenes (Sieve)
Algoritma kuno (200 SM) untuk mencari semua prima ≤ N:
1. Tulis 2 sampai N.
2. Lingkari **2** (prima pertama), coret semua kelipatan 2 yang lain (4, 6, 8, …).
3. Lingkari bilangan terkecil yang belum dicoret: **3**, coret kelipatan 3 (6, 9, 12, …).
4. Lanjut: **5**, coret 10, 15, 20, …
5. **7**, coret 14, 21, 28, …
6. Berhenti saat bilangan yang dilingkari > √N. **Sisa yang tidak dicoret = prima.**

### 7. Aturan Habis Dibagi (untuk cek komposit cepat)
- Habis ÷ 2: digit satuan **genap** (0, 2, 4, 6, 8).
- Habis ÷ 3: **jumlah digit habis ÷ 3** (mis. 123 → 1+2+3=6 ÷ 3 ✓).
- Habis ÷ 5: digit satuan **0 atau 5**.
- Habis ÷ 9: **jumlah digit habis ÷ 9**.
- Habis ÷ 11: **selisih bergantian digit habis ÷ 11** (mis. 143 → 1 − 4 + 3 = 0 ✓).

Kalau lulus salah satu aturan di atas (selain dirinya sendiri) → **komposit**.

### 8. Pasangan Prima Istimewa
- **Twin prime (prima kembar)** = selisih 2: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73), (101,103), (107,109), (137,139), (149,151), (179,181), (191,193), (197,199).
- **Cousin prime** = selisih 4: (3,7), (7,11), (13,17), (19,23), (37,41), (43,47), (103,107), (109,113).
- **Sexy prime** = selisih 6: (5,11), (7,13), (11,17), (13,19), (17,23), (23,29), (31,37), (37,43), (41,47), (47,53).
- **Mersenne prime** = bentuk 2^p − 1: 3, 7, 31, 127, 8191, … **TETAPI tidak semua p prima menghasilkan prima!** Contoh: 2¹¹ − 1 = 2047 = 23 × 89 (komposit).

### 9. Faktorisasi Prima
Setiap komposit dapat dituliskan **secara unik** sebagai perkalian prima (Teorema Aritmetika Dasar).
- 12 = 2² × 3
- 60 = 2² × 3 × 5
- 200 = 2³ × 5²
- 360 = 2³ × 3² × 5
- 720 = 2⁴ × 3² × 5

### 10. Rumus Banyak Faktor, Jumlah Faktor, Hasil Kali Faktor
Untuk n = **p^a × q^b × r^c**:
- **Banyak faktor** = (a+1)(b+1)(c+1).
  - Contoh 72 = 2³ × 3² → (3+1)(2+1) = 12 faktor.
- **Jumlah faktor** = (p⁰+p¹+…+p^a)(q⁰+q¹+…+q^b)(r⁰+r¹+…+r^c).
  - Contoh 200 = 2³ × 5² → (1+2+4+8)(1+5+25) = 15 × 31 = 465.
- **Hasil kali faktor** = n^(banyak faktor / 2).
  - Contoh 12 → 12^(6/2) = 12³ = 1728.

### 11. Isu FPB/KPK TERSEMBUNYI (jebakan khas Prov–Nas)
1. **Beberapa "banyak faktor" adalah soal FPB/KPK tersamar** — " banyak faktor persekutuan" = banyak faktor dari **FPB**.
   - Contoh: fpb(36, 48) = 12, banyak faktor persekutuan = faktor dari 12 = 6.
2. **Hubungan emas**: **a × b = FPB(a,b) × KPK(a,b)**.
   - Contoh: jika a×b = 84 dan KPK = 28, maka FPB = 84 ÷ 28 = 3.
3. **Bilangan ditulis dengan FPB ditentukan**: a = f·m, b = f·n dengan FPB(m,n) = 1.
   - Soal "FPB(x,y) = 6 dan x×y = 216" → x = 6m, y = 6n, m×n = 216 ÷ 36 = 6.
4. **Kelipatan yang habis dibagi dua bilangan sekaligus** = soal KPK.
   - "Pembagi 720 yang kelipatan 12" → tulis d = 12·k, k membagi 720 ÷ 12 = 60.

### 12. Aplikasi
- **FPB & KPK** — pakai faktorisasi prima.
- **Kriptografi RSA** — keamanan internet berbasis sulitnya memfaktorkan perkalian dua prima besar.
- **Penyederhanaan pecahan** — bagi pembilang & penyebut dengan FPB.
- **Konjektur Goldbach** — setiap genap > 2 = jumlah dua prima (belum dibuktikan, tapi diverifikasi sampai bilangan sangat besar).

### 13. Jebakan Klasik OSN
1. **1 dianggap prima** — SALAH. (1 hanya punya 1 faktor.)
2. **Semua ganjil prima** — SALAH. (9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99 semua ganjil komposit.)
3. **2 dianggap komposit karena genap** — SALAH. (2 prima.)
4. **Lupa cek pembagi 7 untuk 49, 77, 91, 119, 133, 217, 301** — sering keliru sebagai prima.
5. **Mengira semua bilangan akhiran 1, 3, 7, 9 prima** — SALAH (lihat 21, 33, 27, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 99).
6. **Mengira 2^p − 1 selalu prima bila p prima** — SALAH (2047 = 2¹¹ − 1 = 23 × 89).

---

## BAGIAN II · 100 SOAL PILIHAN GANDA

## PROV · Soal 1-50 (Tingkat Provinsi, C3-C4)

**1.** Bilangan **119** adalah ….
- A. komposit, karena 119 = 7 × 17
- B. prima
- C. genap
- D. lebih kecil dari 50

**Kunci: A**
**Pembahasan:**
- **A benar** — **119 = 7 × 17** (cek: √119 ≈ 10,9, coba pembagi 7 → habis). Komposit.
- **B salah** — Punya pembagi 7, jadi bukan prima.
- **C salah** — 119 ganjil (akhiran 9).
- **D salah** — 119 > 50.
- **Konsep kunci:** Uji keprimaan bilangan tiga digit dilakukan dengan mengecek pembagi prima sampai akar kuadratnya; 119 gugur karena habis dibagi 7.
- **Langkah Penyelesaian:**
  1. Hitung √119 ≈ 10,9 dan cek pembagi prima 2, 3, 5, 7.
  2. Temukan 119 ÷ 7 = 17 → 119 = 7 × 17 → komposit (jawaban A).

---

**2.** Bilangan **133** adalah ….
- A. prima
- B. komposit, karena 133 = 7 × 19
- C. genap
- D. habis dibagi 5

**Kunci: B**
**Pembahasan:**
- **A salah** — Sering disangka prima karena tidak habis dibagi 2, 3, 5, 11.
- **B benar** — **133 = 7 × 19** (√133 ≈ 11,5; cek 7 → habis). Komposit.
- **C salah** — 133 ganjil.
- **D salah** — Akhiran 3, tidak habis dibagi 5.
- **Konsep kunci:** Wajib cek pembagi 7 untuk bilangan seperti 133 yang lolos cek 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Cek 133 tidak habis dibagi 2, 3, 5, 11.
  2. Cek pembagi 7: 133 ÷ 7 = 19 → habis → 133 = 7 × 19 komposit (jawaban B).

---

**3.** Bilangan asli **terkecil yang memiliki tepat 7 faktor** adalah ….
- A. 36
- B. 64
- C. 48
- D. 72

**Kunci: B**
**Pembahasan:**
- **A salah** — 36 = 2² × 3² → (2+1)(2+1) = 9 faktor.
- **B benar** — Tepat 7 faktor terjadi untuk **p⁶**. p terkecil = 2 → **2⁶ = 64** (faktor: 1, 2, 4, 8, 16, 32, 64).
- **C salah** — 48 = 2⁴ × 3 → 5 × 2 = 10 faktor.
- **D salah** — 72 = 2³ × 3² → 4 × 3 = 12 faktor.
- **Konsep kunci:** Bilangan dengan tepat 7 faktor selalu berbentuk pangkat enam dari satu bilangan prima (p⁶).
- **Langkah Penyelesaian:**
  1. Ingat bentuk p⁶ menghasilkan 7 faktor (1, p, …, p⁶).
  2. Ambil p terkecil (2) → 2⁶ = 64 (jawaban B).

---

**4.** Banyak faktor dari **144** adalah ….
- A. 12
- B. 18
- C. 15
- D. 16

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah faktorisasi atau salah rumus.
- **B salah** — Salah pangkat.
- **C benar** — **144 = 2⁴ × 3²** → banyak faktor = (4+1)(2+1) = 5 × 3 = **15**.
- **D salah** — Salah kalikan (mungkin 4 × 4).
- **Konsep kunci:** Rumus banyak faktor diterapkan pada faktorisasi prima: hasil kali (pangkat+1) tiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 144 = 2⁴ × 3².
  2. Hitung (4+1)(2+1) = 5 × 3 = 15 (jawaban C).

---

**5.** Di antara berikut, yang **bukan prima** adalah ….
- A. 103
- B. 107
- C. 109
- D. 121

**Kunci: D**
**Pembahasan:**
- **A salah** — 103 prima (cek 2, 3, 5, 7; √103 ≈ 10,1).
- **B salah** — 107 prima.
- **C salah** — 109 prima.
- **D benar** — **121 = 11²**, punya faktor 1, 11, 121 → 3 faktor → **komposit**. Sering keliru karena ganjil dan bukan kelipatan 2, 3, 5, 7.
- **Konsep kunci:** Kuadrat dari suatu prima selalu komposit karena memiliki minimal 3 faktor.
- **Langkah Penyelesaian:**
  1. Uji 103, 107, 109 dengan pembagi ≤ √bilangan → ketiganya prima.
  2. Cek 121: 121 = 11² → bukan prima (jawaban D).

---

**6.** Di antara berikut, yang **prima** adalah ….
- A. 91
- B. 93
- C. 97
- D. 95

**Kunci: C**
**Pembahasan:**
- **A salah** — 91 = 7 × 13 (jebakan klasik, wajib cek pembagi 7).
- **B salah** — 93 = 3 × 31 (jumlah digit 12 habis ÷ 3).
- **C benar** — **97 prima** (√97 ≈ 9,8; cek 2, 3, 5, 7 semuanya tidak habis).
- **D salah** — 95 = 5 × 19 (akhiran 5).
- **Konsep kunci:** Menguji tiap kandidat: 91 dan 93 gugur karena punya pembagi 7 dan 3.
- **Langkah Penyelesaian:**
  1. Coret 91 (7×13), 93 (3×31), 95 (5×19).
  2. Uji sisa kandidat 97 → tidak ada pembagi ≤ √97 → prima (jawaban C).

---

**7.** Di antara berikut, yang **komposit** adalah ….
- A. 87
- B. 89
- C. 83
- D. 79

**Kunci: A**
**Pembahasan:**
- **A benar** — **87 = 3 × 29** (jumlah digit 8+7 = 15 habis ÷ 3) → komposit.
- **B salah** — 89 prima.
- **C salah** — 83 prima.
- **D salah** — 79 prima.
- **Konsep kunci:** Aturan habis dibagi 3 (jumlah digit) langsung menjatuhkan 87.
- **Langkah Penyelesaian:**
  1. Cek 83, 89, 79: tidak habis dibagi 2, 3, 5, 7 → prima.
  2. Jumlah digit 87 = 15, habis dibagi 3 → 87 komposit (jawaban A).

---

**8.** Banyak faktor dari **36** adalah ….
- A. 8
- B. 10
- C. 6
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Salah kategori (36 bukan 2⁴ × 3).
- **C salah** — Terlalu sedikit.
- **D benar** — **36 = 2² × 3²** → (2+1)(2+1) = 3 × 3 = **9** (faktor: 1, 2, 3, 4, 6, 9, 12, 18, 36).
- **Konsep kunci:** Faktorisasi prima 36 memuat dua pangkat 2, sehingga banyak faktornya 9.
- **Langkah Penyelesaian:**
  1. Faktorkan 36 = 2² × 3².
  2. Hitung (2+1)(2+1) = 9 (jawaban D).

---

**9.** Banyak faktor dari **40** adalah ….
- A. 6
- B. 12
- C. 8
- D. 10

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Terlalu banyak.
- **C benar** — **40 = 2³ × 5** → (3+1)(1+1) = 4 × 2 = **8**.
- **D salah** — Salah rumus.
- **Konsep kunci:** Rumus banyak faktor (pangkat+1) dikalikan untuk setiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 40 = 2³ × 5.
  2. Hitung (3+1)(1+1) = 8 (jawaban C).

---

**10.** Banyak faktor dari **48** adalah ….
- A. 9
- B. 10
- C. 12
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — Banyak faktor 48 = 10, bukan 9.
- **B benar** — **48 = 2⁴ × 3** → (4+1)(1+1) = 5 × 2 = **10**.
- **C salah** — Salah pangkat.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Penerapan rumus banyak faktor pada 2⁴ × 3.
- **Langkah Penyelesaian:**
  1. Faktorkan 48 = 2⁴ × 3.
  2. Hitung (4+1)(1+1) = 10 (jawaban B).

---

**11.** Bilangan asli **terkecil yang memiliki tepat 12 faktor** adalah ….
- A. 60
- B. 96
- C. 72
- D. 84

**Kunci: A**
**Pembahasan:**
- **A benar** — **60 = 2² × 3 × 5** → (2+1)(1+1)(1+1) = 3 × 2 × 2 = **12 faktor**, dan 60 adalah yang terkecil di antara semua pilihan.
- **B salah** — 96 = 2⁵ × 3 → 6 × 2 = 12 faktor, tapi 96 > 60.
- **C salah** — 72 = 2³ × 3² → 4 × 3 = 12 faktor, tapi 72 > 60.
- **D salah** — 84 = 2² × 3 × 7 → 12 faktor, tapi 84 > 60.
- **Konsep kunci:** Beberapa bilangan bisa memiliki jumlah faktor yang sama; yang terkecil dipilih dengan membandingkan nilainya.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan dan hitung banyak faktornya.
  2. Semua pilihan kecuali kandidat kecil memiliki 12 faktor; pilih nilai terkecil = 60 (jawaban A).

---

**12.** Banyak bilangan asli **dari 1 sampai 20** yang **bukan prima dan bukan komposit** adalah ….
- A. 0
- B. 2
- C. 3
- D. 1

**Kunci: D**
**Pembahasan:**
- **A salah** — Ada satu bilangan yang berstatus khusus.
- **B salah** — Hanya 1 yang bukan keduanya.
- **C salah** — Terlalu banyak.
- **D benar** — Hanya **1** yang "bukan prima dan bukan komposit"; semua bilangan 2–20 pasti prima atau komposit.
- **Konsep kunci:** Angka 1 adalah satu-satunya bilangan asli yang bukan prima dan bukan komposit.
- **Langkah Penyelesaian:**
  1. Ingat 1 hanya punya 1 faktor → bukan prima (butuh 2 faktor) dan bukan komposit (butuh > 2 faktor).
  2. Hitung dalam rentang 1–20 → hanya ada satu, yaitu 1 (jawaban D).

---

**13.** Banyak **faktor prima yang berbeda** dari **90** adalah ….
- A. 2
- B. 4
- C. 3
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa salah satu faktor prima.
- **B salah** — Terlalu banyak.
- **C benar** — **90 = 2 × 3² × 5** → faktor prima yang berbeda: **{2, 3, 5}** = **3** faktor prima.
- **D salah** — Salah hitung.
- **Konsep kunci:** "Faktor prima yang berbeda" menghitung jenis prima, bukan pangkatnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 90 = 2 × 3 × 3 × 5.
  2. Hitung prima berbeda yang muncul: 2, 3, 5 → 3 (jawaban C).

---

**14.** Bilangan komposit **terkecil yang merupakan hasil kali dua prima berbeda** adalah ….
- A. 4
- B. 6
- C. 9
- D. 10

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 = 2 × 2 (dua prima SAMA, bukan berbeda).
- **B benar** — **6 = 2 × 3**, dua prima berbeda paling kecil. (Disebut **semiprime**.)
- **C salah** — 9 = 3 × 3 (sama).
- **D salah** — 10 = 2 × 5 benar tapi 10 > 6.
- **Konsep kunci:** Hasil kali dua prima berbeda terkecil dibuat dari dua prima terkecil, yaitu 2 dan 3.
- **Langkah Penyelesaian:**
  1. Ambil dua prima terkecil: 2 dan 3.
  2. Kalikan: 2 × 3 = 6, yang memang bilangan terkecil (jawaban B).

---

**15.** Di antara berikut, yang **prima** adalah ….
- A. 137
- B. 143
- C. 147
- D. 161

**Kunci: A**
**Pembahasan:**
- **A benar** — **137 prima**: √137 ≈ 11,7; cek 2, 3, 5, 7, 11 semuanya tidak habis.
- **B salah** — 143 = 11 × 13 (komposit).
- **C salah** — 147 = 3 × 7² (komposit).
- **D salah** — 161 = 7 × 23 (komposit).
- **Konsep kunci:** Tiga kandidat lebih besar dari 100 ternyata komposit karena punya pembagi kecil; benar-benar harus diuji.
- **Langkah Penyelesaian:**
  1. Faktorkan 143 (11×13), 147 (3×49), 161 (7×23) → semuanya komposit.
  2. Cek 137: tidak ada pembagi ≤ √137 → prima (jawaban A).

---

**16.** Di antara berikut, yang **bukan prima** adalah ….
- A. 173
- B. 179
- C. 181
- D. 187

**Kunci: D**
**Pembahasan:**
- **A salah** — 173 prima.
- **B salah** — 179 prima.
- **C salah** — 181 prima.
- **D benar** — **187 = 11 × 17** (√187 ≈ 13,7; 187 ÷ 11 = 17) → komposit.
- **Konsep kunci:** 187 lolos cek 2, 3, 5, 7 tetapi habis dibagi 11 — selalu tuntaskan sampai √n.
- **Langkah Penyelesaian:**
  1. Uji 173, 179, 181: tidak habis dibagi 2, 3, 5, 7, 11, 13 → prima.
  2. Cek 187 ÷ 11 = 17 → habis → komposit (jawaban D).

---

**17.** **FPB** dari **36 dan 48** adalah ….
- A. 6
- B. 12
- C. 24
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — 6 hanya FPB dari 36 dan 42, bukan ini.
- **B benar** — **36 = 2² × 3²**, **48 = 2⁴ × 3** → FPB = 2² × 3 = **12** (ambil pangkat terkecil).
- **C salah** — 24 = 2³ × 3 — FPB harus ambil pangkat terkecil 2².
- **D salah** — 8 bukan kelipatan 3, padahal 36 habis dibagi 3.
- **Konsep kunci:** FPB diambil dari faktor prima yang sama dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. Faktorkan: 36 = 2² × 3² dan 48 = 2⁴ × 3.
  2. Ambil pangkat terkecil: 2² dan 3 → FPB = 12 (jawaban B).

---

**18.** **KPK** dari **12 dan 18** adalah ….
- A. 36
- B. 24
- C. 18
- D. 72

**Kunci: A**
**Pembahasan:**
- **A benar** — **12 = 2² × 3**, **18 = 2 × 3²** → KPK = 2² × 3² = **36** (ambil pangkat terbesar).
- **B salah** — 24 = 2³ × 3 tidak cukup (bukan kelipatan 18).
- **C salah** — 18 = KPK dari 9 dan 18, bukan yang ini.
- **D salah** — 72 kelipatan valid tapi bukan yang terkecil.
- **Konsep kunci:** KPK diambil dari semua prima dengan pangkat terbesar.
- **Langkah Penyelesaian:**
  1. Faktorkan 12 = 2² × 3 dan 18 = 2 × 3².
  2. Pinggirkan pangkat terbesar: 2² dan 3² → KPK = 36 (jawaban A).

---

**19.** Banyak faktor dari **60** adalah ….
- A. 10
- B. 14
- C. 12
- D. 16

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Salah pangkat.
- **C benar** — **60 = 2² × 3 × 5** → (2+1)(1+1)(1+1) = 3 × 2 × 2 = **12**.
- **D salah** — Salah rumus.
- **Konsep kunci:** Tiga prima berbeda pada 60 menghasilkan 12 faktor.
- **Langkah Penyelesaian:**
  1. Faktorkan 60 = 2² × 3 × 5.
  2. Hitung (2+1)(1+1)(1+1) = 12 (jawaban C).

---

**20.** Jumlah seluruh **faktor positif** dari **6** adalah ….
- A. 6
- B. 8
- C. 10
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — 6 hanya bilangannya tanpa faktor lain.
- **B salah** — Salah jumlah.
- **C salah** — Lupa 6 sendiri.
- **D benar** — Faktor 6 = {1, 2, 3, 6}; jumlah = **1 + 2 + 3 + 6 = 12**.
- **Konsep kunci:** Jumlah faktor = total nilai semua faktor, termasuk 1 dan bilangan itu sendiri.
- **Langkah Penyelesaian:**
  1. Daftar faktor 6: 1, 2, 3, 6.
  2. Jumlahkan: 1 + 2 + 3 + 6 = 12 (jawaban D).

---

**21.** Pasangan **twin prime** dengan **59** adalah ….
- A. 61
- B. 53
- C. 57
- D. 67

**Kunci: A**
**Pembahasan:**
- **A benar** — 61 − 59 = 2 dan 61 prima → **(59, 61)** adalah twin prime.
- **B salah** — 59 − 53 = 6 (sexy prime).
- **C salah** — 57 = 3 × 19, bukan prima.
- **D salah** — 67 − 59 = 8, bukan pasangan twin.
- **Konsep kunci:** Twin prime adalah dua prima berselisih 2; pasangan (59, 61) ada dalam daftar baku.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pilihan dengan 59.
  2. Pilih yang berselisih 2 dan keduanya prima → 61 (jawaban A).

---

**22.** Untuk menguji apakah **29** bilangan prima, pembagi prima yang perlu dicek cukup ….
- A. 2 dan 3 saja
- B. 2, 3, dan 5
- C. 2, 3, 5, dan 7
- D. semua bilangan dari 2 sampai 28

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 dan 3 tidak cukup karena harus dicek sampai √29 ≈ 5,4; pembagi 5 belum dicek.
- **B benar** — √29 ≈ 5,4; prima ≤ 5 adalah **2, 3, 5**.
- **C salah** — 7 > 5 > √29, mubazir.
- **D salah** — Boros sekali, tidak perlu.
- **Konsep kunci:** Batas pengecekan pembagi prima adalah akar kuadrat bilangan yang diuji.
- **Langkah Penyelesaian:**
  1. Hitung √29 ≈ 5,4.
  2. Daftar prima ≤ 5,4 → 2, 3, 5 (jawaban B).

---

**23.** Banyak bilangan prima dari **80 sampai 90** adalah ….
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa salah satu prima.
- **B salah** — Terlalu banyak.
- **C benar** — Bilangan ganjil di rentang 80–90: 81, 83, 85, 87, 89. 81 = 3⁴, 85 = 5 × 17, 87 = 3 × 29 → komposit. **Prima: 83 dan 89** = **2**.
- **D salah** — Salah masukkan 85 atau 87.
- **Konsep kunci:** Menyaring bilangan ganjil komposit dalam rentang sempit.
- **Langkah Penyelesaian:**
  1. Coret 81, 85, 87 (komposit).
  2. Tersisa 83 dan 89, keduanya prima → 2 (jawaban C).

---

**24.** Bilangan **209** adalah ….
- A. prima
- B. genap
- C. lebih kecil dari 100
- D. komposit, karena 209 = 11 × 19

**Kunci: D**
**Pembahasan:**
- **A salah** — 209 lolos cek 2, 3, 5, 7 tapi habis dibagi 11.
- **B salah** — 209 ganjil.
- **C salah** — 209 > 100.
- **D benar** — **209 = 11 × 19** (√209 ≈ 14,5; 209 ÷ 11 = 19). Komposit.
- **Konsep kunci:** Perkalian dua prima berurutan (11 dan 19) menghasilkan 209; wajib cek pembagi 11.
- **Langkah Penyelesaian:**
  1. Cek 209 tidak habis dibagi 2, 3, 5, 7.
  2. Cek pembagi 11: 209 ÷ 11 = 19 → habis → 209 komposit (jawaban D).

---

**25.** Banyak faktor dari **2⁶ × 3³** adalah ….
- A. 28
- B. 18
- C. 21
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — 2⁶ × 3³ = 1728; banyak faktor = (6+1)(3+1) = **7 × 4 = 28**.
- **B salah** — Salah jumlahkan pangkat (misal 6+3+1).
- **C salah** — Salah satu pangkat (misal 6+1 dan 3−1).
- **D salah** — Salah hitung.
- **Konsep kunci:** Banyak faktor = hasil kali (pangkat + 1); pangkat 6 dan 3 → 7 × 4.
- **Langkah Penyelesaian:**
  1. Identifikasi pangkat: 6 (untuk prima 2) dan 3 (untuk prima 3).
  2. Hitung (6+1)(3+1) = 28 (jawaban A).

---

**26.** Jumlah seluruh **faktor positif** dari **8** adalah ….
- A. 12
- B. 15
- C. 16
- D. 14

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah jumlah.
- **B benar** — Faktor 8 = {1, 2, 4, 8}; jumlah = **1 + 2 + 4 + 8 = 15**.
- **C salah** — Lupa 1 atau 2.
- **D salah** — Salah hitung.
- **Konsep kunci:** 8 = 2³; jumlah faktor = 2⁴ − 1 = 15 (rumus deret pangkat dua).
- **Langkah Penyelesaian:**
  1. Daftar faktor 8: 1, 2, 4, 8.
  2. Jumlahkan: 15 (jawaban B).

---

**27.** Banyak **faktor persekutuan** dari **36 dan 48** adalah ….
- A. 4
- B. 8
- C. 6
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Terlalu banyak.
- **C benar** — **FPB(36, 48) = 12**; banyak faktor persekutuan = banyak faktor dari 12 = (2+1)(1+1) = **6** (1, 2, 3, 4, 6, 12).
- **D salah** — Lupa salah satu faktor.
- **Konsep kunci:** Faktor persekutuan dua bilangan = faktor-faktor dari FPB keduanya.
- **Langkah Penyelesaian:**
  1. Hitung FPB(36, 48) = 12.
  2. Hitung banyak faktor dari 12 = 6 (jawaban C).

---

**28.** Banyak bilangan **prima genap** yang ada adalah ….
- A. 0
- B. 2
- C. tak terhingga
- D. 1

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 itu genap dan prima.
- **B salah** — Hanya satu, bukan dua.
- **C salah** — Semua genap > 2 komposit.
- **D benar** — Satu-satunya prima genap adalah **2**; bilangan genap lain selalu habis dibagi 2.
- **Konsep kunci:** 2 adalah satu-satunya bilangan yang sekaligus prima dan genap.
- **Langkah Penyelesaian:**
  1. Sadari semua bilangan genap > 2 punya faktor 2 → komposit.
  2. Periksa 2 sendiri: hanya punya faktor 1 dan 2 → prima → total 1 (jawaban D).

---

**29.** Bilangan asli **terkecil yang memiliki tepat 2 faktor** adalah ….
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 punya 1 faktor saja.
- **B benar** — Faktor 2 hanya {1, 2} → tepat 2 faktor → **2** adalah bilangan terkecil paling kecil dengan sifat ini.
- **C salah** — 3 juga memenuhi tapi lebih besar dari 2.
- **D salah** — 4 = 2² punya 3 faktor.
- **Konsep kunci:** Bilangan prima terkecil (2) otomatis menjadi bilangan asli terkecil dengan tepat 2 faktor.
- **Langkah Penyelesaian:**
  1. Cek bilangan asli dari 1: 1 → 1 faktor (gagal).
  2. Cek 2 → faktor {1, 2} → memenuhi (jawaban B).

---

**30.** Hasil kali semua **faktor prima yang berbeda** dari **84** adalah ….
- A. 42
- B. 84
- C. 21
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — **84 = 2² × 3 × 7**; perkalian prima berbeda = **2 × 3 × 7 = 42**.
- **B salah** — 84 adalah bilangan aslinya, bukan hasil kali primanya.
- **C salah** — Lupa faktor 2.
- **D salah** — Salah faktorisasi.
- **Konsep kunci:** Prima berbeda diambil masing-masing satu kali, tanpa memperhatikan pangkatnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 84 = 2 × 2 × 3 × 7.
  2. Kalikan sekali tiap prima berbeda: 2 × 3 × 7 = 42 (jawaban A).

---

**31.** Banyak bilangan **komposit dari 1 sampai 30** adalah ….
- A. 18
- B. 20
- C. 19
- D. 21

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Terlalu banyak.
- **C benar** — Total 30 − (1 yang bukan keduanya) − (10 prima) = 30 − 1 − 10 = **19 komposit**.
- **D salah** — Salah hitung prima.
- **Konsep kunci:** Banyak komposit = total bilangan − 1 − banyak prima dalam rentang.
- **Langkah Penyelesaian:**
  1. Hitung prima 1–30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → 10.
  2. Komposit = 30 − 1 − 10 = 19 (jawaban C).

---

**32.** Jumlah dua bilangan **prima kembar terkecil** adalah ….
- A. 5
- B. 6
- C. 7
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 + 3 = 5, tapi (2, 3) bukan twin prime (selisih 1).
- **B salah** — 3 + 3, tapi memakai prima yang sama.
- **C salah** — 2 + 5 = 7, bukan twin.
- **D benar** — Twin prime terkecil = **(3, 5)**; jumlah = **3 + 5 = 8**.
- **Konsep kunci:** Pasangan twin pertama yang benar adalah (3, 5) karena selisihnya tepat 2.
- **Langkah Penyelesaian:**
  1. Ingat twin prime terkecil: (3, 5).
  2. Jumlahkan: 3 + 5 = 8 (jawaban D).

---

**33.** Bilangan prima **terkecil yang lebih besar dari 40** adalah ….
- A. 41
- B. 43
- C. 47
- D. 37

**Kunci: A**
**Pembahasan:**
- **A benar** — Bilangan ganjil setelah 40 adalah 41; **41 prima** (cek 2, 3, 5; √41 ≈ 6,4).
- **B salah** — 43 juga prima tapi bukan yang terkecil.
- **C salah** — 47 > 43.
- **D salah** — 37 malah kurang dari 40.
- **Konsep kunci:** Periksa bilangan ganjil berurutan mulai dari 41 sampai ditemukan prima.
- **Langkah Penyelesaian:**
  1. Cek 41: tidak habis dibagi 2, 3, 5 (√41 ≈ 6,4) → prima.
  2. Tidak ada bilangan di antara 40 dan 41 → 41 jawabannya (jawaban A).

---

**34.** Banyak pasangan **twin prime di bawah 50** adalah ….
- A. 5
- B. 6
- C. 4
- D. 7

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa satu pasangan.
- **B benar** — Pasangan twin < 50: **(3,5), (5,7), (11,13), (17,19), (29,31), (41,43)** → **6 pasang**.
- **C salah** — Terlalu sedikit.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Menghitung pasangan prima berselisih 2 dalam rentang tertentu dengan mendaftar.
- **Langkah Penyelesaian:**
  1. Daftar prima < 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
  2. Kelompokkan yang berselisih 2 → 6 pasang (jawaban B).

---

**35.** **FPB** dari **2³ × 3 × 5** dan **2² × 3² × 7** adalah ….
- A. 8
- B. 6
- C. 12
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — 8 hanya dari pangkat 2, lupa faktor 3.
- **B salah** — Lupa faktor 2² (mungkin hanya ambil 2 × 3).
- **C benar** — Prima bersama: 2 dan 3. Pangkat terkecil: 2² dan 3 → FPB = **2² × 3 = 12**.
- **D salah** — Mengambil pangkat terbesar (itu KPK sebagian).
- **Konsep kunci:** FPB memakai pangkat TERKECIL dari prima yang dimiliki kedua bilangan.
- **Langkah Penyelesaian:**
  1. Cari prima yang muncul di keduanya: 2 dan 3.
  2. Ambil pangkat terkecil: 2² dan 3 → FPB = 12 (jawaban C).

---

**36.** Hasil dari **2⁰ + 2¹ + 2² = 7** merupakan bilangan ….
- A. komposit
- B. genap
- C. lebih besar dari 10
- D. prima

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 hanya punya 2 faktor.
- **B salah** — 7 ganjil.
- **C salah** — 7 < 10.
- **D benar** — **7** hanya bisa ditulis 1 × 7 → **prima**.
- **Konsep kunci:** Menghitung nilai bentuk pangkat lalu menguji keprimaan hasilnya.
- **Langkah Penyelesaian:**
  1. Hitung 1 + 2 + 4 = 7.
  2. Cek faktor 7: hanya 1 dan 7 → prima (jawaban D).

---

**37.** Bilangan **301** adalah ….
- A. komposit, karena 301 = 7 × 43
- B. prima
- C. genap
- D. lebih kecil dari 150

**Kunci: A**
**Pembahasan:**
- **A benar** — **301 = 7 × 43** (√301 ≈ 17,3; cek 7 → habis). Komposit.
- **B salah** — Punya pembagi 7.
- **C salah** — 301 ganjil.
- **D salah** — 301 > 150.
- **Konsep kunci:** 301 termasuk bilangan yang wajib dicek pembagi 7; sering keliru dianggap prima.
- **Langkah Penyelesaian:**
  1. Cek 301 tidak habis dibagi 2, 3, 5, 11, 13.
  2. Cek pembagi 7: 301 ÷ 7 = 43 → habis → komposit (jawaban A).

---

**38.** Banyak faktor dari **200** adalah ….
- A. 9
- B. 12
- C. 10
- D. 15

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B benar** — **200 = 2³ × 5²** → (3+1)(2+1) = **4 × 3 = 12**.
- **C salah** — Salah rumus.
- **D salah** — Salah pangkat.
- **Konsep kunci:** Faktorisasi 200 memuat pangkat 3 dan 2 → 12 faktor.
- **Langkah Penyelesaian:**
  1. Faktorkan 200 = 2³ × 5².
  2. Hitung (3+1)(2+1) = 12 (jawaban B).

---

**39.** Bilangan asli **terkecil yang memiliki tepat 3 faktor** adalah ….
- A. 6
- B. 8
- C. 4
- D. 9

**Kunci: C**
**Pembahasan:**
- **A salah** — 6 = 2 × 3 → 4 faktor.
- **B salah** — 8 = 2³ → 4 faktor.
- **C benar** — Tepat 3 faktor terjadi untuk **p²**; p terkecil = 2 → **2² = 4** (faktor 1, 2, 4).
- **D salah** — 9 = 3² juga punya 3 faktor tapi 4 lebih kecil.
- **Konsep kunci:** Kuadrat dari bilangan prima menghasilkan tepat 3 faktor (1, p, p²).
- **Langkah Penyelesaian:**
  1. Ingat bentuk p² → 3 faktor.
  2. Ambil p terkecil (2) → 2² = 4 (jawaban C).

---

**40.** Selisih antara **prima ke-9 dan prima ke-6** adalah ….
- A. 8
- B. 12
- C. 9
- D. 10

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah urutan.
- **B salah** — Salah hitung salah satu prima.
- **C salah** — Salah urutan.
- **D benar** — Urutan: 2, 3, 5, 7, 11 (ke-5), 13 (ke-6), 17 (ke-7), 19 (ke-8), 23 (ke-9). Selisih = **23 − 13 = 10**.
- **Konsep kunci:** Mengurutkan prima untuk menemukan prima pada posisi tertentu, lalu menghitung selisih.
- **Langkah Penyelesaian:**
  1. Tulis 9 prima pertama.
  2. Ambil ke-6 (13) dan ke-9 (23), selisih = 10 (jawaban D).

---

**41.** Banyak bilangan prima dari **100 sampai 120** adalah ….
- A. 5
- B. 4
- C. 6
- D. 7

**Kunci: A**
**Pembahasan:**
- **A benar** — **101, 103, 107, 109, 113** → **5 prima**. (111 = 3 × 37, 115 = 5 × 23, 119 = 7 × 17 → komposit.)
- **B salah** — Lupa salah satu.
- **C salah** — Salah masukkan 111 atau 119.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menguji tiap bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Daftar kandidat ganjil 101–119 dan coret yang komposit.
  2. Sisa: 101, 103, 107, 109, 113 → 5 (jawaban A).

---

**42.** Bilangan prima **terkecil yang lebih besar dari 130** adalah ….
- A. 137
- B. 131
- C. 133
- D. 139

**Kunci: B**
**Pembahasan:**
- **A salah** — 137 prima, tapi masih ada yang lebih kecil.
- **B benar** — **131** prima (cek 2, 3, 5, 7, 11; √131 ≈ 11,4; tidak ada yang habis).
- **C salah** — 133 = 7 × 19, komposit.
- **D salah** — 139 > 131.
- **Konsep kunci:** Periksa bilangan berurutan setelah 130; 131 langsung memenuhi.
- **Langkah Penyelesaian:**
  1. Cek 131: tidak habis dibagi 2, 3, 5, 7, 11 → prima.
  2. Bandingkan dengan 133 (komposit) dan 137, 139 (lebih besar) → jawaban B.

---

**43.** Hasil bagi **KPK dengan FPB** dari **12 dan 18** adalah ….
- A. 4
- B. 5
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Salah hitung.
- **C benar** — KPK(12, 18) = 36, FPB(12, 18) = 6 → hasil bagi = **36 ÷ 6 = 6**.
- **D salah** — Salah hitung.
- **Konsep kunci:** KPK dan FPB dihitung dulu dari faktorisasi, lalu dibagi.
- **Langkah Penyelesaian:**
  1. Hitung KPK = 36 dan FPB = 6.
  2. Bagi: 36 ÷ 6 = 6 (jawaban C).

---

**44.** Banyak faktor dari **75** adalah ….
- A. 4
- B. 5
- C. 8
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Terlalu sedikit.
- **C salah** — Salah rumus.
- **D benar** — **75 = 3 × 5²** → (1+1)(2+1) = **2 × 3 = 6**.
- **Konsep kunci:** Fakorisasi 3 × 5² memberikan 6 faktor.
- **Langkah Penyelesaian:**
  1. Faktorkan 75 = 3 × 5².
  2. Hitung (1+1)(2+1) = 6 (jawaban D).

---

**45.** Jumlah semua bilangan **prima yang kurang dari 15** adalah ….
- A. 41
- B. 39
- C. 43
- D. 37

**Kunci: A**
**Pembahasan:**
- **A benar** — Prima < 15: 2, 3, 5, 7, 11, 13 → jumlah = **2 + 3 + 5 + 7 + 11 + 13 = 41**.
- **B salah** — Lupa 2 atau salah hitung.
- **C salah** — Salah angkat.
- **D salah** — Salah hitung.
- **Konsep kunci:** Mendaftar prima kecil lalu menjumlahkannya.
- **Langkah Penyelesaian:**
  1. Daftar prima < 15: 2, 3, 5, 7, 11, 13.
  2. Jumlahkan → 41 (jawaban A).

---

**46.** Jika **a = 2³ × 5** dan **b = 2 × 5²**, maka **FPB(a, b)** = ….
- A. 20
- B. 40
- C. 10
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — 20 = 2² × 5, bukan pangkat terkecil (a hanya punya 2¹).
- **B salah** — 40 = 2³ × 5 — pangkat 2 salah.
- **C benar** — Prima bersama: 2 dan 5; pangkat terkecil 2¹ dan 5¹ → FPB = **2 × 5 = 10**.
- **D salah** — Lupa faktor 2.
- **Konsep kunci:** FPB mengambil pangkat terkecil dari setiap prima yang sama pada kedua bilangan.
- **Langkah Penyelesaian:**
  1. Ambil prima yang muncul di a dan b: 2 dan 5.
  2. Ambil pangkat terkecil: 2¹ × 5¹ = 10 (jawaban C).

---

**47.** Jika **a = 2³ × 5** dan **b = 2 × 5²**, maka **KPK(a, b)** = ….
- A. 40
- B. 200
- C. 80
- D. 1000

**Kunci: B**
**Pembahasan:**
- **A salah** — 40 = 2³ × 5, lupa 5².
- **B benar** — Ambil pangkat terbesar tiap prima: 2³ dan 5² → KPK = **8 × 25 = 200**.
- **C salah** — 80 = 2⁴ × 5, bukan.
- **D salah** — 1000 = 2³ × 5³, pangkat 5 salah.
- **Konsep kunci:** KPK mengambil pangkat terbesar dari setiap prima.
- **Langkah Penyelesaian:**
  1. Ambil semua prima: 2 dan 5.
  2. Ambil pangkat terbesar: 2³ × 5² = 200 (jawaban B).

---

**48.** Banyak **faktor persekutuan** dari **60 dan 96** adalah ….
- A. 4
- B. 8
- C. 10
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Terlalu banyak.
- **C salah** — Terlalu banyak.
- **D benar** — **FPB(60, 96) = 12** (60 = 2²×3×5, 96 = 2⁵×3) → banyak faktor 12 = (2+1)(1+1) = **6**.
- **Konsep kunci:** Faktor persekutuan dua bilangan adalah faktor dari FPB-nya.
- **Langkah Penyelesaian:**
  1. Hitung FPB(60, 96) = 2² × 3 = 12.
  2. Banyak faktor 12 = 3 × 2 = 6 (jawaban D).

---

**49.** Jumlah seluruh **faktor positif** dari **15** adalah ….
- A. 24
- B. 20
- C. 22
- D. 26

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 15 = {1, 3, 5, 15}; jumlah = **1 + 3 + 5 + 15 = 24**.
- **B salah** — Lupa 15 sendiri.
- **C salah** — Salah hitung.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Jumlah faktor = total semua faktor, termasuk bilangan itu sendiri.
- **Langkah Penyelesaian:**
  1. Daftar faktor 15: 1, 3, 5, 15.
  2. Jumlahkan → 24 (jawaban A).

---

**50.** Bilangan **komposit ganjil terkecil yang kurang dari 30** adalah ….
- A. 15
- B. 9
- C. 21
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — 15 = 3 × 5 komposit, tapi 9 lebih kecil.
- **B benar** — **9 = 3²**, komposit ganjil paling kecil. (3, 5, 7 prima; 9 langsung komposit.)
- **C salah** — 21 = 3 × 7, lebih besar dari 9.
- **D salah** — 25 = 5², lebih besar.
- **Konsep kunci:** Bilangan ganjil komposit terkecil adalah 9 karena 3, 5, 7 masih prima.
- **Langkah Penyelesaian:**
  1. Cek bilangan ganjil dari 3: 3, 5, 7 prima.
  2. Cek 9 = 3 × 3 → komposit pertama → 9 (jawaban B).

---

## NAS · Soal 51-100 (Tingkat Nasional, C4-C5)

**51.** Banyak pasangan bilangan asli **(a, b)** dengan **a < b**, **a × b = 12**, dan **FPB(a, b) = 1** adalah ….
- A. 4
- B. 3
- C. 1
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Terlalu banyak; pasangan (2, 6) tidak valid karena FPB-nya 2.
- **B salah** — Salah hitung pasangan valid.
- **C salah** — Lupa pasangan (3, 4).
- **D benar** — Pasangan a×b = 12: (1, 12), (2, 6), (3, 4). FPB yang = 1: **(1, 12)** dan **(3, 4)** → **2 pasang**. (Pasangan (2, 6) gugur karena FPB(2, 6) = 2.)
- **Konsep kunci:** Pasangan dengan FPB 1 dicari dengan memfilter seluruh faktorisasi dua bilangan dari hasil kalinya.
- **Langkah Penyelesaian:**
  1. Daftar semua pasangan (a, b) positif dengan a×b = 12 dan a < b.
  2. Hitung FPB tiap pasangan dan sisihkan yang FPB-nya bukan 1.
  3. Tersisa (1, 12) dan (3, 4) → 2 pasang (jawaban D).

---

**52.** Bilangan asli **terkecil yang memiliki tepat 15 faktor** adalah ….
- A. 144
- B. 128
- C. 160
- D. 121

**Kunci: A**
**Pembahasan:**
- **A benar** — Tepat 15 faktor bisa dari (p+1)(q+1) = 15 → pangkat (4, 2): **2⁴ × 3² = 144**, banyak faktor (4+1)(2+1) = 15.
- **B salah** — 128 = 2⁷ → hanya 8 faktor.
- **C salah** — 160 = 2⁵ × 5 → (5+1)(1+1) = 12 faktor.
- **D salah** — 121 = 11² → hanya 3 faktor.
- **Konsep kunci:** Banyak faktor 15 hanya bisa dari bentuk p¹⁴ atau p⁴ × q²; yang terkecil adalah 2⁴ × 3².
- **Langkah Penyelesaian:**
  1. Cari pola pangkat yang hasil kalinya 15: (4 + 1)(2 + 1) = 15.
  2. Pakai dua prima terkecil dengan pangkat terbesar pada 2: 2⁴ × 3² = 144 (lebih kecil dari 2¹⁴).
  3. Periksa pilihan lain → jawaban A.

---

**53.** Banyak **pembagi dari 210 yang merupakan bilangan prima** adalah ….
- A. 3
- B. 4
- C. 5
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa salah satu faktor prima.
- **B benar** — **210 = 2 × 3 × 5 × 7**; pembagi yang prima adalah **2, 3, 5, 7** → **4**.
- **C salah** — Terlalu banyak.
- **D salah** — Salah hitung.
- **Konsep kunci:** Pembagi yang prima dari sebuah bilangan tidak lain adalah faktor-faktor primanya.
- **Langkah Penyelesaian:**
  1. Faktorkan 210 = 2 × 3 × 5 × 7.
  2. Setiap faktor prima sekaligus pembagi prima dari 210.
  3. Ada 4 buah: 2, 3, 5, 7 (jawaban B).

---

**54.** Jika **KPK(24, 40) = 120**, maka **banyak faktor dari 120** adalah ….
- A. 12
- B. 14
- C. 16
- D. 18

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung pangkat.
- **B salah** — Salah satu prima terlewat.
- **C benar** — **120 = 2³ × 3 × 5** → banyak faktor = (3+1)(1+1)(1+1) = **4 × 2 × 2 = 16**.
- **D salah** — Salah aturan.
- **Konsep kunci:** KPK dua bilangan diubah ke faktorisasi prima lalu banyak faktornya dihitung dengan rumus (pangkat+1).
- **Langkah Penyelesaian:**
  1. Periksa 120 = 2³ × 3 × 5.
  2. Terapkan rumus banyak faktor: (3+1)(1+1)(1+1).
  3. Hasilnya 16 (jawaban C).

---

**55.** Banyak pasangan **(a, b)** bilangan asli dengan **FPB(a, b) = 6**, **a × b = 216**, dan **a < b** adalah ….
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa pasangan (12, 18).
- **B benar** — Tulis a = 6m, b = 6n dengan FPB(m, n) = 1. Maka 36mn = 216 → mn = 6. Pasangan (m, n) koprima: (1, 6) dan (2, 3) → (a, b) = **(6, 36)** dan **(12, 18)** → **2**.
- **C salah** — Salah menghitung mn.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Bilangan dengan FPB ditentukan ditulis sebagai kelipatan FPB, lalu sisa faktornya harus saling prima.
- **Langkah Penyelesaian:**
  1. Tulis a = 6m, b = 6n dengan FPB(m, n) = 1.
  2. Gunakan a×b = 216 → mn = 216 ÷ 36 = 6.
  3. Pasangan koprima (m, n): (1, 6) dan (2, 3) → 2 pasang (jawaban B).

---

**56.** Bilangan asli **terkecil yang memiliki tepat 20 faktor** adalah ….
- A. 240
- B. 432
- C. 144
- D. 180

**Kunci: A**
**Pembahasan:**
- **A benar** — 20 = 5 × 2 × 2 → pangkat (4, 1, 1): **2⁴ × 3 × 5 = 240**, banyak faktor (4+1)(1+1)(1+1) = 20. Kandidat terkecil.
- **B salah** — 432 = 2⁴ × 3³ → (4+1)(3+1) = 20 faktor, tapi 432 > 240.
- **C salah** — 144 = 2⁴ × 3² → hanya 15 faktor.
- **D salah** — 180 = 2² × 3² × 5 → 3 × 3 × 2 = 18 faktor.
- **Konsep kunci:** Menyusun kombinasi pangkat (a+1)(b+1)(c+1) = 20 dengan prima terkecil agar nilai bilangan minim.
- **Langkah Penyelesaian:**
  1. Cari pembagian 20 menjadi faktor > 1: 20, 10×2, 5×4, 5×2×2.
  2. Bentuk kandidat: 2⁹×3 = 1536, 2⁴×3³ = 432, 2¹⁹ (raksasa), 2⁴×3×5 = 240.
  3. Bandingkan → 240 terkecil (jawaban A).

---

**57.** Banyak bilangan **1 sampai 60 yang habis dibagi 2 ATAU 5** adalah ….
- A. 30
- B. 33
- C. 36
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — Hanya menghitung kelipatan 2, lupa kelipatan 5.
- **B salah** — Salah hitung irisan.
- **C benar** — Kelipatan 2 = 30; kelipatan 5 = 12; kelipatan 10 (irisan) = 6. Total = 30 + 12 − 6 = **36** (prinsip inklusi-eksklusi).
- **D salah** — Menjumlahkan tanpa mengurangi irisan.
- **Konsep kunci:** Gabungan dua himpunan dihitung dengan inklusi-eksklusi agar bilangan yang terhitung dobel dikurangi.
- **Langkah Penyelesaian:**
  1. Hitung banyak kelipatan 2 = 60 ÷ 2 = 30.
  2. Hitung banyak kelipatan 5 = 12, dan irisan kelipatan 10 = 6.
  3. 30 + 12 − 6 = 36 (jawaban C).

---

**58.** Banyak bilangan **komposit dari 1 sampai 50** adalah ….
- A. 35
- B. 33
- C. 32
- D. 34

**Kunci: D**
**Pembahasan:**
- **A salah** — Terlalu banyak; 2 tidak dihitung sebagai komposit.
- **B salah** — Salah menghapus 1.
- **C salah** — Kelebihan satu prima.
- **D benar** — Total 50 − **1** (bukan keduanya) − **15 prima** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47) = **34 komposit**.
- **Konsep kunci:** Komposit = total bilangan − 1 − banyak prima dalam rentang.
- **Langkah Penyelesaian:**
  1. Hitung banyak prima ≤ 50 = 15.
  2. Kurangi dari 50: 50 − 15 − 1 (angka 1) = 34 (jawaban D).

---

**59.** Jika **n = p² × q³** dengan **p, q bilangan prima yang berbeda**, maka banyak faktor dari **n** adalah ….
- A. 12
- B. 8
- C. 15
- D. 6

**Kunci: A**
**Pembahasan:**
- **A benar** — Banyak faktor = (2+1)(3+1) = **3 × 4 = 12**.
- **B salah** — Menjumlahkan pangkat (2 + 3) padahal harus dikalikan bentuk (pangkat+1).
- **C salah** — Salah hitung.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Untuk n = p^a × q^b, banyak faktor = (a+1)(b+1), tidak peduli nilai konkret p dan q.
- **Langkah Penyelesaian:**
  1. Ambil pangkat a = 2 dan b = 3.
  2. Hitung (2+1)(3+1) = 12 (jawaban A).

---

**60.** Jumlah seluruh **faktor positif** dari **28** adalah ….
- A. 48
- B. 42
- C. 52
- D. 56

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Lupa faktor terbesar.
- **C salah** — Salah hitung.
- **D benar** — **28 = 2² × 7**; jumlah faktor = (1+2+4)(1+7) = **7 × 8 = 56**. (Faktor 1, 2, 4, 7, 14, 28; totalnya 56.)
- **Konsep kunci:** Jumlah faktor dihitung dengan rumus deret per prima, atau dengan langsung menjumlahkan seluruh faktor.
- **Langkah Penyelesaian:**
  1. Faktorkan 28 = 2² × 7.
  2. Terapkan rumus jumlah faktor: (1+2+4)(1+7).
  3. 7 × 8 = 56 (jawaban D).

---

**61.** Banyak **pembagi dari 10⁶ yang merupakan perpangkatan 10** (termasuk 1 dan 10⁶) adalah ….
- A. 6
- B. 7
- C. 8
- D. 5

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa 1 = 10⁰.
- **B benar** — 10⁶ = 2⁶ × 5⁶. Pembagi yang perpangkatan 10 adalah 10⁰, 10¹, 10², 10³, 10⁴, 10⁵, 10⁶ → **7**.
- **C salah** — Terlalu banyak.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Pembagi berbentuk 10^k terbentuk bila pangkat 2 dan 5 sama besar (k ≤ 6).
- **Langkah Penyelesaian:**
  1. Tulis 10⁶ = (2×5)⁶ = 2⁶ × 5⁶.
  2. Pembagi berbentuk 10^k memerlukan pangkat 2 dan 5 sama → k = 0, 1, …, 6.
  3. Ada 7 nilai k (jawaban B).

---

**62.** Bilangan asli **terkecil yang lebih besar dari 100 dan memiliki tepat 3 faktor** adalah ….
- A. 105
- B. 169
- C. 121
- D. 144

**Kunci: C**
**Pembahasan:**
- **A salah** — 105 = 3 × 5 × 7 → 8 faktor.
- **B salah** — 169 = 13² punya 3 faktor, tapi lebih besar dari 121.
- **C benar** — Tepat 3 faktor berarti berbentuk **p²**. p² > 100 → p ≥ 11 → **11² = 121** (faktor 1, 11, 121).
- **D salah** — 144 = 2⁴ × 3² → 15 faktor.
- **Konsep kunci:** Bilangan dengan tepat 3 faktor adalah kuadrat prima; ambil kuadrat prima terkecil yang > 100.
- **Langkah Penyelesaian:**
  1. Ingat bentuk p² menghasilkan 3 faktor.
  2. Cari p terkecil dengan p² > 100: p = 11.
  3. 11² = 121 (jawaban C).

---

**63.** Banyak pasangan **(p, q)** bilangan prima dengan **p ≤ q** dan **p + q = 20** adalah ….
- A. 1
- B. 3
- C. 4
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa pasangan satunya.
- **B salah** — Salah hitung.
- **C salah** — Salah hitung.
- **D benar** — Cek p prima ≤ 10: p = 2 → 18 (bukan prima); p = 3 → 17 ✓; p = 5 → 15 ✗; p = 7 → 13 ✓. Jadi **(3, 17)** dan **(7, 13)** → **2 pasang**.
- **Konsep kunci:** Konjektur Goldbach diverifikasi dengan mendaftar semua pasangan prima yang berjumlah genap 20.
- **Langkah Penyelesaian:**
  1. Coba setiap p prima ≤ 10, hitung q = 20 − p.
  2. Periksa apakah q prima.
  3. Hanya (3, 17) dan (7, 13) yang valid → 2 (jawaban D).

---

**64.** Jumlah seluruh **faktor positif** dari **200** adalah ….
- A. 465
- B. 400
- C. 484
- D. 425

**Kunci: A**
**Pembahasan:**
- **A benar** — **200 = 2³ × 5²**; jumlah faktor = (1+2+4+8)(1+5+25) = **15 × 31 = 465**.
- **B salah** — Hasil kali pembulatan, bukan jumlah faktor.
- **C salah** — Salah hitung deret.
- **D salah** — Salah hitung.
- **Konsep kunci:** Jumlah faktor memakai rumus perkalian deret pangkat tiap prima penyusun.
- **Langkah Penyelesaian:**
  1. Faktorkan 200 = 2³ × 5².
  2. Hitung (1+2+4+8)(1+5+25).
  3. 15 × 31 = 465 (jawaban A).

---

**65.** Bilangan prima **terkecil yang lebih besar dari 1000** adalah ….
- A. 1001
- B. 1009
- C. 1007
- D. 1013

**Kunci: B**
**Pembahasan:**
- **A salah** — 1001 = 7 × 11 × 13, komposit.
- **B benar** — 1002–1008 semuanya komposit (1003 = 17×59, 1007 = 19×53, dsb); **1009** prima: √1009 ≈ 31,8, tidak ada pembagi prima ≤ 31.
- **C salah** — 1007 = 19 × 53.
- **D salah** — 1013 memang prima, tapi 1009 lebih kecil.
- **Konsep kunci:** Mencari prima di atas batas dengan menguji bilangan berurutan dan memfaktorkan yang gagal.
- **Langkah Penyelesaian:**
  1. Uji 1001 sampai 1008 satu per satu; semua komposit.
  2. Cek 1009: habis dibagi 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31? Tidak ada.
  3. Simpulkan 1009 prima (jawaban B).

---

**66.** Banyak bilangan prima dari **200 sampai 230** adalah ….
- A. 2
- B. 3
- C. 4
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa sebagian besar.
- **B salah** — Lupa satu prima.
- **C benar** — Bilangan prima pada rentang: **211, 223, 227, 229** → **4**. (201 = 3×67, 203 = 7×29, 209 = 11×19, 217 = 7×31, 219 = 3×73, 221 = 13×17 → komposit.)
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Menyaring semua bilangan ganjil dalam rentang dan menguji kandidat yang tersisa.
- **Langkah Penyelesaian:**
  1. Coret bilangan genap dan yang jelas komposit (kelipatan 3, 5, 7, 11, 13).
  2. Uji kandidat tersisa: 211, 223, 227, 229.
  3. Hitung → 4 (jawaban C).

---

**67.** Hasil kali seluruh **faktor positif** dari **12** adalah ….
- A. 144
- B. 576
- C. 20736
- D. 1728

**Kunci: D**
**Pembahasan:**
- **A salah** — Itu 12², bukan hasil kali semua faktor.
- **B salah** — Salah hitung.
- **C salah** — 12⁴, terlalu besar.
- **D benar** — Hasil kali faktor = **n^(banyak faktor / 2)**. 12 punya 6 faktor → **12³ = 1728**. (Faktor 1, 2, 3, 4, 6, 12; hasil kalinya 1728.)
- **Konsep kunci:** Faktor berpasangan sehingga hasil kali seluruh faktor = n pangkat setengah dari banyak faktor.
- **Langkah Penyelesaian:**
  1. Hitung banyak faktor 12 = 6.
  2. Kalikan faktor berpasangan: (1×12)(2×6)(3×4) = 12 × 12 × 12.
  3. 12³ = 1728 (jawaban D).

---

**68.** Banyak pasangan **(a, b)** bilangan asli dengan **FPB(a, b) = 8**, **a + b = 40**, dan **a < b** adalah ….
- A. 2
- B. 1
- C. 3
- D. 4

**Kunci: A**
**Pembahasan:**
- **A benar** — Karena FPB = 8, tulis a = 8m, b = 8n dengan FPB(m, n) = 1. Maka 8(m+n) = 40 → m + n = 5; pasangan koprima: (1, 4) dan (2, 3) → (a, b) = **(8, 32)** dan **(16, 24)** → **2**.
- **B salah** — Lupa pasangan (16, 24).
- **C salah** — Terlalu banyak.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Menulis a dan b sebagai kelipatan FPB lalu memegang syarat sisa saling prima.
- **Langkah Penyelesaian:**
  1. Tulis a = 8m, b = 8n, FPB(m, n) = 1.
  2. Dari 8m + 8n = 40 diperoleh m + n = 5.
  3. Pasangan koprima (1, 4), (2, 3) → 2 pasang (jawaban A).

---

**69.** Banyak **faktor persekutuan** dari **72 dan 108** adalah ….
- A. 8
- B. 9
- C. 6
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B benar** — **FPB(72, 108) = 36** (72 = 2³×3², 108 = 2²×3³ → 2²×3²). Banyak faktor 36 = (2+1)(2+1) = **9**.
- **C salah** — Lupa satu prima.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Banyak faktor persekutuan dua bilangan = banyak faktor dari FPB-nya.
- **Langkah Penyelesaian:**
  1. Faktorkan dan cari FPB(72, 108) = 2² × 3² = 36.
  2. Hitung banyak faktor 36 = (2+1)(2+1).
  3. 3 × 3 = 9 (jawaban B).

---

**70.** Banyak pasangan **terurut (a, b)** bilangan asli dengan **a + b = 12** dan **FPB(a, b) = 2** adalah ….
- A. 4
- B. 3
- C. 1
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Terlalu banyak; (4, 8) punya FPB 4.
- **B salah** — Salah hitung.
- **C salah** — Lupa pasangan terbaliknya.
- **D benar** — Pasangan positif berjumlah 12: (1, 11), (2, 10), (3, 9), (4, 8), (5, 7), (6, 6), … Hanya yang FPB-nya 2: **(2, 10)** dan **(10, 2)** → **2 pasang terurut**.
- **Konsep kunci:** Di antara semua pasangan penjumlah, hanya pasangan dengan kedua bilangan kelipatan 2 tetapi bukan kelipatan 4 yang FPB-nya 2.
- **Langkah Penyelesaian:**
  1. Daftar pasangan (a, b) positif dengan jumlah 12.
  2. Hitung FPB tiap pasangan.
  3. Yang FPB-nya 2 hanya (2, 10) dan (10, 2) → 2 (jawaban D).

---

**71.** Banyak bilangan asli **1 sampai 100 yang memiliki tepat 2 faktor** adalah ….
- A. 25
- B. 24
- C. 26
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Tepat 2 faktor berarti **prima**; banyak prima ≤ 100 = **25**.
- **B salah** — Lupa satu prima.
- **C salah** — Salah hitung 1 sebagai prima.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Bilangan dengan tepat 2 faktor identik dengan bilangan prima.
- **Langkah Penyelesaian:**
  1. Ingat fakta baku: ada 25 prima ≤ 100.
  2. Hubungkan dengan definisi "tepat 2 faktor".
  3. Jawaban A (25).

---

**72.** Selisih antara **bilangan komposit terbesar di bawah 100** dan **bilangan prima terbesar di bawah 100** adalah ….
- A. 0
- B. 1
- C. 2
- D. 3

**Kunci: C**
**Pembahasan:**
- **A salah** — Keduanya tidak sama.
- **B salah** — Salah hitung.
- **C benar** — Komposit terbesar < 100 = **99** (98 juga, tapi 99 lebih besar). Prima terbesar < 100 = **97**. Selisih = 99 − 97 = **2**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Memilih ekstrem dua kategori berbeda pada batas yang sama lalu mengurangkannya.
- **Langkah Penyelesaian:**
  1. Tentukan komposit terbesar di bawah 100 = 99.
  2. Tentukan prima terbesar di bawah 100 = 97.
  3. 99 − 97 = 2 (jawaban C).

---

**73.** Banyak bilangan **1 sampai 100 yang habis dibagi 2 ATAU 3** (atau keduanya) adalah ….
- A. 66
- B. 68
- C. 65
- D. 67

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung irisan.
- **B salah** — Salah hitung.
- **C salah** — Salah hitung.
- **D benar** — Kelipatan 2 = 50; kelipatan 3 = 33; kelipatan 6 (irisan) = 16. Inklusi-eksklusi: **50 + 33 − 16 = 67**.
- **Konsep kunci:** Gabungan himpunan kelipatan memakai inklusi-eksklusi agar kelipatan 6 tidak terhitung dua kali.
- **Langkah Penyelesaian:**
  1. Hitung banyak kelipatan 2 (50), 3 (33), dan 6 (16) dalam 1–100.
  2. Terapkan 50 + 33 − 16.
  3. Hasilnya 67 (jawaban D).

---

**74.** Banyak pasangan **(p, q)** bilangan prima dengan **p ≤ q** dan **p × q = 143** adalah ….
- A. 2
- B. 1
- C. 3
- D. 0

**Kunci: B**
**Pembahasan:**
- **A salah** — Terlalu banyak.
- **B benar** — **143 = 11 × 13**, keduanya prima. Dengan p ≤ q hanya ada satu pasangan: **(11, 13)**.
- **C salah** — Terlalu banyak.
- **D salah** — Ada, yaitu (11, 13).
- **Konsep kunci:** Jika hasil kali dua prima diketahui, bilangan itu difaktorkan dan pasangan penyusunnya tunggal.
- **Langkah Penyelesaian:**
  1. Faktorkan 143 = 11 × 13.
  2. Cek 11 dan 13 keduanya prima.
  3. Dengan p ≤ q → 1 pasangan (jawaban B).

---

**75.** Pernyataan berikut yang **SALAH** adalah ….
- A. 2⁷ − 1 = 127 dan 127 bilangan prima
- B. 3⁵ = 243 dan 243 bilangan komposit
- C. 2¹¹ − 1 = 2047 dan 2047 bilangan prima
- D. 101 bilangan prima

**Kunci: C**
**Pembahasan:**
- **A benar** — 127 = 2⁷ − 1 memang prima (prima Mersenne).
- **B benar** — 3⁵ = 243 = 3⁵ → komposit.
- **C salah** — **2047 = 23 × 89**, bukan prima! Ini jebakan klasik: p = 11 prima tidak menjamin 2^p − 1 prima.
- **D benar** — 101 prima.
- **Konsep kunci:** Tidak semua bentuk 2^p − 1 dengan p prima menghasilkan prima Mersenne.
- **Langkah Penyelesaian:**
  1. Verifikasi A, B, D → semuanya benar.
  2. Faktorkan 2047 = 23 × 89.
  3. Pernyataan C salah (jawaban C).

---

**76.** Jika **a = 2² × 3³ × 5** dan **b = 2³ × 3 × 5²**, maka **FPB(a, b)** = ….
- A. 30
- B. 90
- C. 120
- D. 60

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa salah satu prima.
- **B salah** — Pangkat 3 salah.
- **C salah** — Pangkat tertinggi (itu KPK sebagian).
- **D benar** — Prima bersama: 2, 3, 5; pangkat terkecil: 2², 3, 5 → FPB = **4 × 3 × 5 = 60**.
- **Konsep kunci:** FPB mengambil pangkat terkecil dari tiap prima yang sama pada kedua faktorisasi.
- **Langkah Penyelesaian:**
  1. Identifikasi prima yang muncul di keduanya: 2, 3, 5.
  2. Ambil pangkat terkecil: 2², 3¹, 5¹.
  3. 4 × 3 × 5 = 60 (jawaban D).

---

**77.** Jika **a = 2² × 3³ × 5** dan **b = 2³ × 3 × 5²**, maka **KPK(a, b)** = ….
- A. 5400
- B. 10800
- C. 2700
- D. 3600

**Kunci: A**
**Pembahasan:**
- **A benar** — Ambil pangkat terbesar: 2³, 3³, 5² → KPK = **8 × 27 × 25 = 5400**.
- **B salah** — Pangkat berlebih.
- **C salah** — Lupa pangkat tertinggi 2.
- **D salah** — Pangkat 3 salah.
- **Konsep kunci:** KPK mengambil pangkat terbesar dari setiap prima yang muncul pada kedua bilangan.
- **Langkah Penyelesaian:**
  1. Kumpulkan semua prima: 2, 3, 5.
  2. Pakai pangkat terbesar: 2³, 3³, 5².
  3. 8 × 27 × 25 = 5400 (jawaban A).

---

**78.** Banyak **pembagi dari 12⁴ yang bukan pembagi dari 12³** adalah ….
- A. 16
- B. 17
- C. 15
- D. 18

**Kunci: B**
**Pembahasan:**
- **A salah** — Selisih yang salah.
- **B benar** — 12 = 2² × 3. **12³ = 2⁶ × 3³** → (6+1)(3+1) = 28 pembagi. **12⁴ = 2⁸ × 3⁴** → (8+1)(4+1) = 45 pembagi. Selisih = **45 − 28 = 17**.
- **C salah** — Salah hitung banyak pembagi 12³.
- **D salah** — Salah hitung.
- **Konsep kunci:** Himpunan pembagi 12³ termuat dalam pembagi 12⁴, jadi banyak yang baru adalah selisih banyak pembaginya.
- **Langkah Penyelesaian:**
  1. Faktorkan 12³ = 2⁶ × 3³ dan 12⁴ = 2⁸ × 3⁴.
  2. Hitung banyak pembagi: 28 dan 45.
  3. 45 − 28 = 17 (jawaban B).

---

**79.** Bilangan asli **terkecil yang memiliki tepat 8 faktor dan berupa bilangan GANJIL** adalah ….
- A. 120
- B. 135
- C. 105
- D. 165

**Kunci: C**
**Pembahasan:**
- **A salah** — 120 = 2³ × 3 × 5 genap, tidak boleh karena harus ganjil.
- **B salah** — 135 = 3³ × 5 punya (3+1)(1+1) = 8 faktor, tapi 135 > 105.
- **C benar** — 8 = 2 × 2 × 2 → pangkat (1,1,1): **3 × 5 × 7 = 105**, banyak faktor 2×2×2 = 8. Ganjil dan terkecil.
- **D salah** — 165 = 3 × 5 × 11 → 8 faktor, tapi 165 > 105.
- **Konsep kunci:** Untuk hasil ganjil semua faktor prima harus ganjil, jadi gunakan 3, 5, 7 sebagai pembangun terkecil.
- **Langkah Penyelesaian:**
  1. Ingat bentuk p×q×r menghasilkan 8 faktor.
  2. Ambil tiga prima ganjil terkecil: 3, 5, 7.
  3. 3 × 5 × 7 = 105 (jawaban C).

---

**80.** Banyak pasangan **terurut (a, b)** bilangan asli dengan **KPK(a, b) = 24** dan **FPB(a, b) = 2** adalah ….
- A. 2
- B. 6
- C. 8
- D. 4

**Kunci: D**
**Pembahasan:**
- **A salah** — Menghitung pasangan tak terurut.
- **B salah** — Terlalu banyak.
- **C salah** — Terlalu banyak.
- **D benar** — a = 2m, b = 2n, FPB(m,n) = 1, dan KPK = 2mn = 24 → mn = 12. Pasangan koprima (m,n): (1,12), (12,1), (3,4), (4,3) → **4 pasang terurut**.
- **Konsep kunci:** Gabungkan a = f·m dengan rumus hubungan KPK·FPB untuk mencari mn.
- **Langkah Penyelesaian:**
  1. Tulis a = 2m, b = 2n dengan FPB(m, n) = 1.
  2. KPK(a, b) = 2mn = 24 → mn = 12.
  3. Pasangan koprima ada 4: (1,12), (12,1), (3,4), (4,3) (jawaban D).

---

**81.** Banyak bilangan **1 sampai 100 yang TIDAK habis dibagi 2 maupun 3** adalah ….
- A. 34
- B. 33
- C. 32
- D. 35

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung komplemen.
- **B benar** — Banyak yang habis dibagi 2 atau 3 = 50 + 33 − 16 = 67. Komplemennya = 100 − 67 = **33**.
- **C salah** — Salah hitung.
- **D salah** — Salah hitung.
- **Konsep kunci:** Komplemen dari gabungan = total − banyak gabungan (inklusi-eksklusi).
- **Langkah Penyelesaian:**
  1. Hitung kelipatan 2 (50), 3 (33), dan 6 (16).
  2. Gabungan = 50 + 33 − 16 = 67.
  3. 100 − 67 = 33 (jawaban B).

---

**82.** Bilangan **361** adalah ….
- A. prima
- B. genap
- C. komposit, karena 361 = 19²
- D. lebih kecil dari 300

**Kunci: C**
**Pembahasan:**
- **A salah** — 361 lolos cek 2, 3, 5, 7, 11, 13, 17 tapi habis dibagi 19.
- **B salah** — 361 ganjil.
- **C benar** — **361 = 19²** (19 × 19 = 361) → punya 3 faktor (1, 19, 361) → komposit.
- **D salah** — 361 > 300.
- **Konsep kunci:** Kuadrat prima wajib diuji sampai √361 = 19; sekaligus contoh lolosnya cek pembagi kecil.
- **Langkah Penyelesaian:**
  1. Hitung √361 = 19.
  2. Cek pembagi sampai 19 → temukan 361 ÷ 19 = 19.
  3. 361 = 19² → komposit (jawaban C).

---

**83.** Banyak **pembagi dari 720 yang merupakan kelipatan 12** adalah ….
- A. 8
- B. 10
- C. 16
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Salah hitung.
- **C salah** — Itu banyak pembagi 720 seluruhnya.
- **D benar** — 720 = 2⁴ × 3² × 5; 12 = 2² × 3. Tulis d = 12k, maka k membagi 720 ÷ 12 = 60 = 2² × 3 × 5, banyak pembagi 60 = (2+1)(1+1)(1+1) = **12**.
- **Konsep kunci:** Pembagi kelipatan 12 dihitung dengan memfaktorkan 12 dari 720 lalu menghitung banyak pembagi sisanya.
- **Langkah Penyelesaian:**
  1. Faktorkan 720 = 2⁴ × 3² × 5.
  2. Bagi dengan 12: 720 ÷ 12 = 60.
  3. Banyak pembagi 60 = 3 × 2 × 2 = 12 (jawaban D).

---

**84.** Banyak bilangan prima **kurang dari 30 yang jika ditambah 2 juga prima** adalah ….
- A. 5
- B. 4
- C. 6
- D. 3

**Kunci: A**
**Pembahasan:**
- **A benar** — Cek prima < 30: 3→5 ✓; 5→7 ✓; 11→13 ✓; 17→19 ✓; 29→31 ✓. (2→4 ✗; 7→9 ✗; 13→15 ✗; 19→21 ✗; 23→25 ✗.) → **5 bilangan**.
- **B salah** — Lupa 29.
- **C salah** — Terlalu banyak.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Ini sama dengan mencari pasangan twin prime yang anggota kecilnya di bawah 30.
- **Langkah Penyelesaian:**
  1. Daftar semua prima < 30.
  2. Uji tiap p: apakah p + 2 juga prima.
  3. Yang memenuhi: 3, 5, 11, 17, 29 → 5 (jawaban A).

---

**85.** Bilangan asli **terkecil yang memiliki tepat 9 faktor** adalah ….
- A. 64
- B. 36
- C. 100
- D. 48

**Kunci: B**
**Pembahasan:**
- **A salah** — 64 = 2⁶ → 7 faktor.
- **B benar** — 9 = 3 × 3 → pangkat (2, 2): **2² × 3² = 36**, banyak faktor (2+1)(2+1) = 9.
- **C salah** — 100 = 2² × 5² juga 9 faktor, tapi 100 > 36.
- **D salah** — 48 = 2⁴ × 3 → 10 faktor.
- **Konsep kunci:** Banyak faktor 9 terjadi pada bentuk p⁸ atau p² × q²; yang terkecil memakai prima 2 dan 3.
- **Langkah Penyelesaian:**
  1. Perhatikan 9 = (2+1)(2+1) → pangkat (2, 2).
  2. Susun 2² × 3² = 36 (bandingkan dengan 2⁸ = 256).
  3. Jawaban B.

---

**86.** Jika hasil kali dua bilangan adalah **84** dan **KPK-nya 28**, maka **FPB** kedua bilangan itu adalah ….
- A. 7
- B. 2
- C. 3
- D. 4

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Salah hitung.
- **C benar** — Hubungan emas: **a × b = FPB × KPK** → 84 = FPB × 28 → FPB = **84 ÷ 28 = 3**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Hasil kali dua bilangan selalu sama dengan hasil kali FPB dan KPK-nya.
- **Langkah Penyelesaian:**
  1. Tulis rumus a×b = FPB×KPK.
  2. Masukkan 84 = FPB × 28.
  3. FPB = 3 (jawaban C).

---

**87.** Banyak pasangan **(a, b)** bilangan asli dengan **FPB(a, b) = 4**, **a × b = 160**, dan **a < b** adalah ….
- A. 1
- B. 3
- C. 4
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa pasangan (8, 20).
- **B salah** — Terlalu banyak.
- **C salah** — Terlalu banyak.
- **D benar** — a = 4m, b = 4n, FPB(m,n) = 1 → 16mn = 160 → mn = 10. Pasangan koprima: (1, 10) dan (2, 5) → (a, b) = **(4, 40)** dan **(8, 20)** → **2**.
- **Konsep kunci:** Tulis bilangan sebagai kelipatan FPB lalu gunakan hasil kali untuk menentukan sisa faktor.
- **Langkah Penyelesaian:**
  1. Tulis a = 4m, b = 4n dengan FPB(m, n) = 1.
  2. Dari 16mn = 160 → mn = 10.
  3. Pasangan koprima (1, 10) dan (2, 5) → 2 (jawaban D).

---

**88.** Bilangan **1001** adalah ….
- A. komposit, karena 1001 = 7 × 11 × 13
- B. prima
- C. genap
- D. kelipatan 5

**Kunci: A**
**Pembahasan:**
- **A benar** — **1001 = 7 × 11 × 13** (√1001 ≈ 31,6; cek 7 → 143, lalu 143 = 11 × 13). Komposit.
- **B salah** — Punya pembagi 7.
- **C salah** — 1001 ganjil.
- **D salah** — Akhiran 1, bukan 0 atau 5.
- **Konsep kunci:** 1001 adalah "prima palsu" klasik karena habis dibagi 7 padahal lolos cek 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Cek 1001 ÷ 7 = 143 → habis.
  2. Lanjutkan 143 = 11 × 13.
  3. 1001 = 7 × 11 × 13 → komposit (jawaban A).

---

**89.** Banyak bilangan **1 sampai 120 yang TIDAK habis dibagi 2, 3, maupun 5** adalah ….
- A. 30
- B. 32
- C. 34
- D. 28

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B benar** — Gabungan kelipatan 2/3/5 = 60 + 40 + 24 − (20 + 12 + 8) + 4 = **88**. Komplemen = 120 − 88 = **32**.
- **C salah** — Salah hitung.
- **D salah** — Salah hitung.
- **Konsep kunci:** Prinsip inklusi-eksklusi penuh untuk tiga himpunan kelipatan, lalu ambil komplemennya.
- **Langkah Penyelesaian:**
  1. Hitung kelipatan 2, 3, 5: 60, 40, 24.
  2. Kurangi irisan berpasangan (6, 10, 15): 20, 12, 8; tambah irisan tiga (30): 4.
  3. Gabungan = 88 → 120 − 88 = 32 (jawaban B).

---

**90.** Bilangan prima **terbesar yang masih lebih kecil dari 200** adalah ….
- A. 197
- B. 191
- C. 199
- D. 193

**Kunci: C**
**Pembahasan:**
- **A salah** — 197 prima, tapi lebih kecil dari 199.
- **B salah** — 191 < 199.
- **C benar** — **199 prima** (√199 ≈ 14,1; tidak habis dibagi 2, 3, 5, 7, 11, 13), dan 198, 197, dst lebih kecil.
- **D salah** — 193 < 199.
- **Konsep kunci:** Keempat pilihan prima; pilih yang terbesar, tetapi verifikasi dulu 199 memang prima.
- **Langkah Penyelesaian:**
  1. Cek bilangan terdekat di bawah 200: 199, 198, 197.
  2. 199 tidak habis dibagi 2, 3, 5, 7, 11, 13 → prima.
  3. 199 > 197 → jawaban C.

---

**91.** Jumlah seluruh **faktor positif** dari **100** adalah ….
- A. 200
- B. 210
- C. 224
- D. 217

**Kunci: D**
**Pembahasan:**
- **A salah** — 200 hanya bilangannya, bukan jumlah faktor.
- **B salah** — Salah hitung.
- **C salah** — Salah hitung.
- **D benar** — **100 = 2² × 5²**; jumlah faktor = (1+2+4)(1+5+25) = **7 × 31 = 217**.
- **Konsep kunci:** Jumlah faktor memakai perkalian deret pangkat tiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 100 = 2² × 5².
  2. Hitung (1+2+4)(1+5+25).
  3. 7 × 31 = 217 (jawaban D).

---

**92.** Bilangan asli **terkecil yang memiliki tepat 16 faktor** adalah ….
- A. 120
- B. 96
- C. 132
- D. 144

**Kunci: A**
**Pembahasan:**
- **A benar** — 16 = 4 × 2 × 2 → pangkat (3, 1, 1): **2³ × 3 × 5 = 120**, banyak faktor (3+1)(1+1)(1+1) = 16.
- **B salah** — 96 = 2⁵ × 3 → (5+1)(1+1) = 12 faktor.
- **C salah** — 132 = 2² × 3 × 11 → 3 × 2 × 2 = 12 faktor.
- **D salah** — 144 = 2⁴ × 3² → 15 faktor.
- **Konsep kunci:** Menyusun pangkat (a+1)(b+1)(c+1) = 16 dengan prima sekecil mungkin agar bilangannya minimal.
- **Langkah Penyelesaian:**
  1. Cari bentuk pangkat: (3+1)(1+1)(1+1) = 16 → (3, 1, 1).
  2. Susun 2³ × 3 × 5 = 120.
  3. Bandingkan dengan kandidat lain → 120 terkecil (jawaban A).

---

**93.** Banyak **pembagi dari 48 yang berupa bilangan genap** adalah ….
- A. 6
- B. 8
- C. 9
- D. 7

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B benar** — **48 = 2⁴ × 3** → total pembagi (4+1)(1+1) = 10. Pembagi ganjil = {1, 3} = 2. Pembagi genap = **10 − 2 = 8**.
- **C salah** — Itu total pembaji tanpa dikurangi ganjil, keliru.
- **D salah** — Salah hitung.
- **Konsep kunci:** Pembagi genap = total pembagi − pembagi ganjil (yang hanya memakai faktor 3).
- **Langkah Penyelesaian:**
  1. Hitung total pembagi 48 = 10.
  2. Hitung pembagi ganjil (tanpa faktor 2) = 2.
  3. 10 − 2 = 8 (jawaban B).

---

**94.** Dua bilangan **prima kembar p dan p + 2** memiliki **hasil kali 323**. Jumlah kedua bilangan itu adalah ….
- A. 34
- B. 38
- C. 36
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — 34 = 17 + 17, bukan dari p dan p+2.
- **B salah** — Salah faktorisasi.
- **C benar** — Faktorkan 323 = 17 × 19. Keduanya prima dan berselisih 2 (twin). Jumlah = **17 + 19 = 36**.
- **D salah** — Salah faktorisasi.
- **Konsep kunci:** Hasil kali dua prima kembar difaktorkan langsung; pasangannya unik karena keduanya prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 323 = 17 × 19.
  2. Periksa 19 − 17 = 2 → pasangan twin.
  3. Jumlah = 17 + 19 = 36 (jawaban C).

---

**95.** Banyak pasangan **terurut (x, y)** bilangan asli dengan **FPB(x, y) = 5** dan **KPK(x, y) = 100** adalah ….
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa pasangan terbalik dan pasangan lainnya.
- **B salah** — Hanya menghitung tak terurut.
- **C salah** — Salah hitung.
- **D benar** — x = 5m, y = 5n, FPB(m, n) = 1, KPK = 5mn = 100 → mn = 20. Pasangan koprima: (1, 20), (20, 1), (4, 5), (5, 4) → **4 pasang terurut**.
- **Konsep kunci:** Memakai hubungan KPK·FPB dan aturan FPB tetap pada bilangan bersama.
- **Langkah Penyelesaian:**
  1. Tulis x = 5m, y = 5n dengan FPB(m, n) = 1.
  2. Dari 5mn = 100 → mn = 20.
  3. Empat pasangan koprima → 4 pasang terurut (jawaban D).

---

**96.** Bilangan komposit **terkecil yang lebih besar dari 100 dan tidak habis dibagi 2, 3, maupun 5** adalah ….
- A. 119
- B. 121
- C. 113
- D. 127

**Kunci: A**
**Pembahasan:**
- **A benar** — 101, 103, 107, 109, 113, 127 prima; 105, 111, 115, 117 habis dibagi 3 atau 5. Yang pertama komposit dan lolos syarat: **119 = 7 × 17**.
- **B salah** — 121 = 11² memang memenuhi syarat, tapi 119 lebih kecil.
- **C salah** — 113 prima.
- **D salah** — 127 prima.
- **Konsep kunci:** Menyaring kandidat di atas 100: coret prima dan kelipatan 2/3/5, ambil komposit terkecil tersisa.
- **Langkah Penyelesaian:**
  1. Uji bilangan 101 ke atas satu per satu.
  2. Coret yang prima (101, 103, 107, 109, 113, 127) dan yang habis dibagi 2/3/5 (105, 111, 115, 117).
  3. Yang memenuhi pertama: 119 (jawaban A).

---

**97.** Banyak bilangan asli **kurang dari 50 yang memiliki tepat 2 faktor** adalah ….
- A. 14
- B. 15
- C. 16
- D. 13

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa satu prima.
- **B benar** — Tepat 2 faktor = prima < 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 → **15**.
- **C salah** — Terlalu banyak (mungkin salah hitung 1).
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Menghitung banyak prima dalam rentang dengan daftar prima yang dihafal.
- **Langkah Penyelesaian:**
  1. Daftar semua prima di bawah 50.
  2. Hitung satu per satu.
  3. Ada 15 (jawaban B).

---

**98.** Di antara berikut, yang **prima** adalah ….
- A. 2⁴ + 3² = 25
- B. 2² × 3² = 36
- C. 2⁴ + 3³ = 43
- D. 3³ + 5² = 52

**Kunci: C**
**Pembahasan:**
- **A salah** — 2⁴ + 3² = 16 + 9 = 25 = 5² → komposit.
- **B salah** — 36 = 2² × 3² → komposit.
- **C benar** — **2⁴ + 3³ = 16 + 27 = 43**, prima (cek 2, 3, 5; √43 ≈ 6,5).
- **D salah** — 3³ + 5² = 27 + 25 = 52 = 2² × 13 → komposit.
- **Konsep kunci:** Menghitung nilai bentuk pangkat lalu menguji keprimaan hasilnya sebelum memilih.
- **Langkah Penyelesaian:**
  1. Hitung tiap ekspresi: 25, 36, 43, 52.
  2. Uji keprimaan tiap hasil.
  3. Hanya 43 yang prima (jawaban C).

---

**99.** Jika **KPK(a, b) = 60** dan **FPB(a, b) = 6**, maka **a × b** = ….
- A. 10
- B. 60
- C. 3600
- D. 360

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung.
- **B salah** — Itu nilai KPK-nya saja.
- **C salah** — Mengalikan KPK dan FPB dengan cara salah (60 × 60).
- **D benar** — Hubungan emas: **a × b = FPB × KPK = 6 × 60 = 360**.
- **Konsep kunci:** Hasil kali dua bilangan selalu sama dengan hasil kali FPB dan KPK-nya.
- **Langkah Penyelesaian:**
  1. Tulis a × b = FPB(a, b) × KPK(a, b).
  2. Masukkan 6 dan 60.
  3. 6 × 60 = 360 (jawaban D).

---

**100.** Bilangan asli **terkecil yang memiliki tepat 10 faktor dan berupa bilangan GANJIL** adalah ….
- A. 405
- B. 400
- C. 375
- D. 495

**Kunci: A**
**Pembahasan:**
- **A benar** — 10 = 5 × 2 → pangkat (4, 1): **3⁴ × 5 = 405**, banyak faktor (4+1)(1+1) = 10. Ganjil karena semua prima ganjil, dan terkecil.
- **B salah** — 400 = 2⁴ × 5² → 5 × 3 = 15 faktor, apalagi genap (tidak boleh).
- **C salah** — 375 = 3 × 5³ → 2 × 4 = 8 faktor.
- **D salah** — 495 = 3² × 5 × 11 → 3 × 2 × 2 = 12 faktor.
- **Konsep kunci:** Bilangan ganjil hanya punya faktor prima ganjil; gunakan 3 dan 5 agar nilainya minimal.
- **Langkah Penyelesaian:**
  1. Susun pangkat (a+1)(b+1) = 10 → (4, 1).
  2. Susun dengan prima ganjil terkecil: 3⁴ × 5.
  3. 81 × 5 = 405 (jawaban A).

---

## BAGIAN III · RINGKASAN & KUNCI

### Tabel Kunci Jawaban (100 soal)

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1.A  | 11.A  | 21.A  | 31.C  | 41.A  |
| 2.B  | 12.D  | 22.B  | 32.D  | 42.B  |
| 3.B  | 13.C  | 23.C  | 33.A  | 43.C  |
| 4.C  | 14.B  | 24.D  | 34.B  | 44.D  |
| 5.D  | 15.A  | 25.A  | 35.C  | 45.A  |
| 6.C  | 16.D  | 26.B  | 36.D  | 46.C  |
| 7.A  | 17.B  | 27.C  | 37.A  | 47.B  |
| 8.D  | 18.A  | 28.D  | 38.B  | 48.D  |
| 9.C  | 19.C  | 29.B  | 39.C  | 49.A  |
| 10.B | 20.D  | 30.A  | 40.D  | 50.B  |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51.D  | 61.B  | 71.A  | 81.B  | 91.D   |
| 52.A  | 62.C  | 72.C  | 82.C  | 92.A   |
| 53.B  | 63.D  | 73.D  | 83.D  | 93.B   |
| 54.C  | 64.A  | 74.B  | 84.A  | 94.C   |
| 55.B  | 65.B  | 75.C  | 85.B  | 95.D   |
| 56.A  | 66.C  | 76.D  | 86.C  | 96.A   |
| 57.C  | 67.D  | 77.A  | 87.D  | 97.B   |
| 58.D  | 68.A  | 78.B  | 88.A  | 98.C   |
| 59.A  | 69.B  | 79.C  | 89.B  | 99.D   |
| 60.D  | 70.D  | 80.D  | 90.C  | 100.A  |

### Distribusi Kunci

**A: 25 · B: 25 · C: 24 · D: 26** (total 100; semua dalam toleransi ±5 dari target 25/25/25/25 sesuai standar OSN).

### Strategi Belajar Bilangan Prima & Komposit

1. **Hafal 25 prima ≤ 100** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97). Perluas sampai 200 untuk OSN Nasional: 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199.
2. **1 BUKAN prima, BUKAN komposit** — outlier istimewa.
3. **2 = satu-satunya prima genap.** Semua genap > 2 pasti komposit.
4. **Tes prima cepat:** cek pembagi prima ≤ **√n**. Untuk n ≤ 100 cukup cek 2, 3, 5, 7; untuk n ≈ 200–1200 cek sampai 11, 13, 17, …, 31.
5. **Jebakan ganjil-bukan-prima:** 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95, 99 — semua ganjil tapi **komposit**!
6. **Wajib cek pembagi 7 dan 11** untuk bilangan seperti 49, 77, 91, 119, 133, 143, 161, 187, 209, 221, 247, 301, 323, 1001 — banyak yang lolos cek 2, 3, 5 tapi gugur di 7 atau 11.
7. **Saringan Eratosthenes** — algoritma cepat cari semua prima ≤ N.
8. **Banyak faktor n = p^a × q^b × r^c**: rumus **(a+1)(b+1)(c+1)**. Jumlah faktor pakai perkalian deret (1+p+…+p^a); hasil kali faktor = n^(banyak faktor / 2).
9. **FPB/KPK tersembunyi:** "banyak faktor persekutuan" = banyak faktor dari **FPB**; **a×b = FPB×KPK**; tulis a = FPB·m dan b = FPB·n dengan FPB(m, n) = 1.
10. **Twin prime**: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73), (101,103), (107,109), (137,139), (149,151), (179,181), (191,193), (197,199). **Mersenne prime**: 3, 7, 31, 127, 8191 — tapi **2¹¹ − 1 = 2047 = 23 × 89 bukan prima**. **Goldbach**: setiap genap > 2 = jumlah 2 prima.
11. **Aplikasi**: faktorisasi prima → fondasi FPB/KPK, penyederhanaan pecahan, dan kriptografi RSA modern.

---

*Selesai. Sub-bab 01d - Bilangan Prima & Komposit (Sedang-Sulit).*