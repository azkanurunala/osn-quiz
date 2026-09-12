# OSN/KSN SD — Matematika · Sub-Bab 01d: Bilangan Prima & Komposit (Tingkat Sedang)

> **Profil**: 100 Prov = 100 soal PG
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

Pengelompokan praktis:
- Prima < 10: **2, 3, 5, 7** (4 prima)
- Prima 10–20: **11, 13, 17, 19** (4)
- Prima 20–30: **23, 29** (2)
- Prima 30–40: **31, 37** (2)
- Prima 40–50: **41, 43, 47** (3)
- Prima 50–60: **53, 59** (2)
- Prima 60–70: **61, 67** (2)
- Prima 70–80: **71, 73, 79** (3)
- Prima 80–90: **83, 89** (2)
- Prima 90–100: **97** (1)

### 5. Tes Keprimaan Cepat (Cek prima atau bukan?)
Untuk cek apakah **n prima**:
1. Cari **√n** (taksir).
2. Cek apakah n habis dibagi prima 2, 3, 5, 7, 11, … sampai **prima ≤ √n**.
3. Jika **tidak ada** pembagi prima yang membaginya habis → **n prima**.
4. Jika **ada satu saja** pembagi → **n komposit**.

**Contoh:** Apakah 91 prima?
- √91 ≈ 9,5. Cek prima ≤ 9: **2, 3, 5, 7**.
- 91 ÷ 2 = 45,5 ✗; 91 ÷ 3 = 30,33 ✗; 91 ÷ 5 = 18,2 ✗; **91 ÷ 7 = 13 ✓**.
- 91 = 7 × 13 → **komposit** (jebakan umum: banyak kira 91 prima!).

**Contoh:** Apakah 97 prima?
- √97 ≈ 9,8. Cek 2, 3, 5, 7. Tidak satupun habis. → **97 prima**.

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
- Habis ÷ 11: **selisih bergantian digit habis ÷ 11**.

Kalau lulus salah satu aturan di atas (selain dirinya sendiri) → **komposit**.

### 8. Pasangan Prima Istimewa
- **Twin prime (prima kembar)** = selisih 2: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73).
- **Cousin prime** = selisih 4: (3,7), (7,11), (13,17), (19,23), (37,41), (43,47).
- **Sexy prime** = selisih 6: (5,11), (7,13), (11,17), (13,19), (17,23), (23,29), (31,37), (37,43), (41,47), (47,53).
- **Mersenne prime** = bentuk 2^p − 1: 3, 7, 31, 127, 8191, …

### 9. Faktorisasi Prima
Setiap komposit dapat dituliskan **secara unik** sebagai perkalian prima (Teorema Aritmetika Dasar).
- 12 = 2² × 3
- 60 = 2² × 3 × 5
- 100 = 2² × 5²
- 360 = 2³ × 3² × 5

### 10. Aplikasi
- **FPB & KPK** — pakai faktorisasi prima.
- **Kriptografi RSA** — keamanan internet berbasis sulitnya memfaktorkan perkalian dua prima besar.
- **Penyederhanaan pecahan** — bagi pembilang & penyebut dengan FPB.
- **Konjektur Goldbach** — setiap genap > 2 = jumlah dua prima (belum dibuktikan, tapi diverifikasi sampai bilangan sangat besar).

### 11. Jebakan Klasik OSN
1. **1 dianggap prima** — SALAH. (1 hanya punya 1 faktor.)
2. **Semua ganjil prima** — SALAH. (9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99 semua ganjil komposit.)
3. **2 dianggap komposit karena genap** — SALAH. (2 prima.)
4. **Lupa cek pembagi 7 untuk 49, 77, 91** — sering keliru sebagai prima.
5. **Mengira semua bilangan akhiran 1, 3, 7, 9 prima** — SALAH (lihat 21, 33, 27, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 99).

---

## BAGIAN II · 100 SOAL PILIHAN GANDA

## PROV · Soal 1-100 (Tingkat Provinsi, C3-C4)

**1.** Bilangan prima terkecil yang **lebih besar dari 20** adalah ….
- A. 23
- B. 21
- C. 25
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — **23 prima**. Cek pembagi prima ≤ √23 ≈ 4,8, yaitu 2 dan 3 (5 sudah > √23): 23 ganjil (tidak habis ÷ 2), 2+3=5 (tidak habis ÷ 3). → prima.
- **B salah** — 21 = 3 × 7 → komposit.
- **C salah** — 25 = 5 × 5 → komposit.
- **D salah** — 22 genap > 2 → habis dibagi 2 → komposit.
- **Konsep kunci:** Untuk mencari prima setelah suatu batas, coret dulu bilangan genap, kelipatan 5, dan kelipatan 3, lalu uji sisanya dengan pembagi prima ≤ √n.
- **Langkah Penyelesaian:**
  1. Coret 21 (= 3×7), 22 (genap), 24 (genap), 25 (= 5²) karena jelas komposit.
  2. Uji 23 dengan pembagi prima ≤ √23 ≈ 4,8: 2 dan 3 tidak ada yang membagi habis.
  3. Simpulkan 23 prima (jawaban A).

---

**2.** Banyak bilangan prima **antara 10 dan 20** adalah ….
- A. 3
- B. 4
- C. 5
- D. 6

**Kunci: B**
**Pembahasan:**
- Prima 11–19: **11, 13, 17, 19** → **4 bilangan**.
- **A salah** — Lupa 17 atau 19.
- **B benar** — Tepat **4 prima**.
- **C salah** — Salah masukkan 15 (= 3×5) sebagai prima.
- **D salah** — Salah hitung (dihitung kelipatan 5 misalnya).
- **Konsep kunci:** Menghitung prima dalam rentang kecil dilakukan dengan mendaftar dan menguji tiap bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Daftar bilangan ganjil 11–19: 11, 13, 15, 17, 19.
  2. Uji tiap bilangan: 15 = 3×5 komposit, sisanya prima.
  3. Hitung banyaknya = 4 (jawaban B).

---

**3.** Pasangan bilangan prima (29, 31) disebut ….
- A. twin prime
- B. cousin prime
- C. sexy prime
- D. Mersenne prime

**Kunci: A**
**Pembahasan:**
- **A benar** — **31 − 29 = 2**, dan keduanya prima → **twin prime (prima kembar)**.
- **B salah** — Cousin prime berselisih 4 (contoh: 37 dan 41).
- **C salah** — Sexy prime berselisih 6 (contoh: 5 dan 11).
- **D salah** — Mersenne prime berbentuk 2^p − 1 (contoh: 3, 7, 31), bukan pasangan.
- **Konsep kunci:** Nama pasangan prima ditentukan oleh selisihnya: selisih 2 (twin), 4 (cousin), 6 (sexy).
- **Langkah Penyelesaian:**
  1. Hitung selisih 31 − 29 = 2.
  2. Cocokkan dengan definisi twin prime (selisih 2).
  3. Jawaban A.

---

**4.** Faktorisasi prima dari **90** adalah ….
- A. 2 × 45
- B. 2 × 3² × 5
- C. 3 × 30
- D. 6 × 15

**Kunci: B**
**Pembahasan:**
- 90 = 9 × 10 = 3² × 2 × 5 = **2 × 3² × 5**.
- **A salah** — 45 bukan bilangan prima.
- **B benar** — 2, 3, 5 semuanya prima dan 2 × 9 × 5 = 90 ✓.
- **C salah** — 30 bukan bilangan prima.
- **D salah** — 6 dan 15 bukan bilangan prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali bilangan-bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Pecah 90 = 9 × 10.
  2. Faktorkan lebih lanjut: 9 = 3² dan 10 = 2 × 5.
  3. Susun ulang menjadi 2 × 3² × 5 (jawaban B).

---

**5.** Banyak faktor dari **48** adalah ….
- A. 8
- B. 6
- C. 10
- D. 12

**Kunci: C**
**Pembahasan:**
- 48 = 2⁴ × 3 → banyak faktor = (4+1)(1+1) = **10**.
- **A salah** — Lupa menambahkan 1 pada pangkat.
- **B salah** — Hanya menghitung kemungkinan pangkat 2 saja.
- **C benar** — Faktor 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 → **10 faktor**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Banyak faktor n = p^a × q^b dihitung dengan rumus (a+1)(b+1).
- **Langkah Penyelesaian:**
  1. Faktorkan 48 = 2⁴ × 3.
  2. Terapkan rumus (4+1)(1+1) = 5 × 2.
  3. Hasilnya 10 (jawaban C).

---

**6.** Bilangan berikut yang **BUKAN bilangan prima** adalah ….
- A. 53
- B. 59
- C. 61
- D. 57

**Kunci: D**
**Pembahasan:**
- **A salah** — 53 prima (√53 ≈ 7,3; cek 2, 3, 5, 7 → tidak habis).
- **B salah** — 59 prima.
- **C salah** — 61 prima.
- **D benar** — **57 = 3 × 19** (jumlah digit 5+7=12 habis ÷ 3) → **komposit**. Jebakan ganjil-bukan-prima klasik.
- **Konsep kunci:** Bilangan ganjil tidak otomatis prima; gunakan aturan habis dibagi 3 untuk memeriksa.
- **Langkah Penyelesaian:**
  1. Cek A, B, C (53, 59, 61): tidak habis dibagi 2, 3, 5, 7 → prima.
  2. Cek D (57): 5+7 = 12 habis dibagi 3, dan 57 ÷ 3 = 19.
  3. Simpulkan 57 komposit (jawaban D).

---

**7.** Jika **p** dan **q** bilangan prima serta **p × q = 55**, maka **p + q** = ….
- A. 12
- B. 16
- C. 18
- D. 20

**Kunci: B**
**Pembahasan:**
- 55 = 5 × 11, keduanya prima → {p, q} = {5, 11}.
- **A salah** — Penjumlahan keliru.
- **B benar** — **5 + 11 = 16**.
- **C salah** — Salah hitung.
- **D salah** — Salah faktor atau salah jumlah.
- **Konsep kunci:** Faktorisasi prima memecah suatu bilangan menjadi dua prima penyusunnya sehingga jumlahnya langsung terlihat.
- **Langkah Penyelesaian:**
  1. Faktorkan 55 = 5 × 11.
  2. Keduanya prima sehingga p = 5 dan q = 11.
  3. Hitung p + q = 16 (jawaban B).

---

**8.** Untuk memastikan **97** bilangan prima, cukup mengecek habis tidaknya dengan pembagi prima ….
- A. 2, 3, 5, 7
- B. 2, 3, 5
- C. 2, 3, 5, 7, 11
- D. semua bilangan ganjil

**Kunci: A**
**Pembahasan:**
- √97 ≈ 9,8. Prima ≤ 9,8: **2, 3, 5, 7** — cukup.
- **A benar** — Jika tidak ada yang membagi 97 habis, maka 97 prima.
- **B salah** — Kurang 7; tanpa mengecek 7 kita belum yakin (contoh 49, 77, 91 gugur di 7).
- **C salah** — 11 > √97 sehingga sudah tidak perlu (mubazir).
- **D salah** — Boros dan salah konsep (cukup primanya).
- **Konsep kunci:** Uji keprimaan n cukup sampai pembagi prima ≤ √n.
- **Langkah Penyelesaian:**
  1. Hitung √97 ≈ 9,8.
  2. Ambil bilangan prima yang ≤ 9,8: 2, 3, 5, 7.
  3. Cek satu per satu; tidak ada yang membagi habis → 97 prima (jawaban A).

---

**9.** Banyak bilangan prima dari **51 sampai 59** adalah ….
- A. 2
- B. 3
- C. 4
- D. 1

**Kunci: A**
**Pembahasan:**
- Kandidat ganjil: 51, 53, 55, 57, 59.
- 51 = 3×17; 55 = 5×11; 57 = 3×19 → komposit. Sisa: **53, 59** → **2 prima**.
- **A benar** — Tepat 2.
- **B salah** — Salah masukkan 57 atau 51 sebagai prima.
- **C salah** — Salah hitung.
- **D salah** — Lupa salah satu.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menyaring kelipatan 3 dan 5 terlebih dahulu.
- **Langkah Penyelesaian:**
  1. Tulis kandidat ganjil: 51, 53, 55, 57, 59.
  2. Coret yang habis ÷ 3 (51, 57) dan habis ÷ 5 (55).
  3. Uji sisa 53, 59 → keduanya prima, jadi banyaknya 2 (jawaban A).

---

**10.** Jumlah dua bilangan prima **terkecil yang berbeda** adalah ….
- A. 4
- B. 5
- C. 6
- D. 7

**Kunci: B**
**Pembahasan:**
- Dua prima terkecil dan berbeda: **2 dan 3** (karena kalau "sama" 2 + 2 = 4).
- **A salah** — 2 + 2, tapi ini menggunakan bilangan yang sama.
- **B benar** — **2 + 3 = 5**.
- **C salah** — 3 + 3, bilangan sama.
- **D salah** — 2 + 5 (5 bukan prima kedua terkecil).
- **Konsep kunci:** Dua bilangan prima terkecil yang berbeda adalah 2 dan 3.
- **Langkah Penyelesaian:**
  1. Tentukan bilangan prima terkecil: 2, lalu berikutnya 3.
  2. Jumlahkan 2 + 3.
  3. Hasilnya 5 (jawaban B).

---

**11.** Bilangan **119** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena **119 = 7 × 17**

**Kunci: D**
**Pembahasan:**
- √119 ≈ 10,9. Cek 2, 3, 5, 7: 2 ✗, 1+1+9 = 11 ✗, akhiran 9 ✗, **119 ÷ 7 = 17 ✓**.
- **A salah** — JEBAKAN: lolos cek 2, 3, 5 tapi gugur di 7.
- **B salah** — 119 ganjil.
- **C salah** — Jumlah digit 11 tidak habis dibagi 3.
- **D benar** — **119 = 7 × 17** → komposit.
- **Konsep kunci:** Selalu periksa pembagi 7 pada bilangan yang lolos cek 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Cek 119 ganjil, tidak habis ÷ 3, tidak ÷ 5.
  2. Cek pembagi 7: 119 ÷ 7 = 17 → habis.
  3. Simpulkan 119 = 7 × 17 komposit (jawaban D).

---

**12.** Banyak faktor dari **30** adalah ….
- A. 6
- B. 7
- C. 8
- D. 10

**Kunci: C**
**Pembahasan:**
- 30 = 2 × 3 × 5 → banyak faktor = (1+1)(1+1)(1+1) = **8**.
- **A salah** — Lupa 6 atau 15.
- **B salah** — Salah hitung.
- **C benar** — Faktor 30: 1, 2, 3, 5, 6, 10, 15, 30 → **8 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Tiga faktor prima berbeda masing-masing pangkat 1 → jumlah faktor = 2 × 2 × 2.
- **Langkah Penyelesaian:**
  1. Faktorkan 30 = 2 × 3 × 5.
  2. Terapkan rumus (1+1)(1+1)(1+1).
  3. Hasilnya 8 (jawaban C).

---

**13.** Bilangan **prima ke-8** adalah ….
- A. 19
- B. 17
- C. 21
- D. 23

**Kunci: A**
**Pembahasan:**
- Urutan prima: 2, 3, 5, 7, 11, 13, 17, **19**, 23, …
- **A benar** — **Prima ke-8 = 19**.
- **B salah** — 17 adalah prima ke-7.
- **C salah** — 21 = 3 × 7, bukan prima.
- **D salah** — 23 adalah prima ke-9.
- **Konsep kunci:** Urutan bilangan prima dihitung berurutan dari yang terkecil.
- **Langkah Penyelesaian:**
  1. Tulis urutan prima dari 2: 2, 3, 5, 7, 11, 13, 17, 19.
  2. Hitung posisi kedelapan.
  3. Prima ke-8 = 19 (jawaban A).

---

**14.** Faktorisasi prima dari **72** adalah ….
- A. 8 × 9
- B. 2³ × 3²
- C. 2 × 3 × 12
- D. 2² × 3³

**Kunci: B**
**Pembahasan:**
- 72 = 8 × 9 = **2³ × 3²**.
- **A salah** — 8 dan 9 bukan bilangan prima.
- **B benar** — 2³ × 3² = 8 × 9 = 72 ✓, semua faktor prima.
- **C salah** — 12 bukan bilangan prima.
- **D salah** — 2² × 3³ = 4 × 27 = 108 ≠ 72.
- **Konsep kunci:** Faktorisasi prima menghasilkan bentuk pangkat dengan basis bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Pecah 72 = 8 × 9.
  2. Tulis 8 = 2³ dan 9 = 3².
  3. Gabungkan menjadi 2³ × 3² (jawaban B).

---

**15.** Bilangan asli **terkecil** yang memiliki **tepat 3 faktor** adalah ….
- A. 6
- B. 8
- C. 4
- D. 9

**Kunci: C**
**Pembahasan:**
- Tepat 3 faktor bila bilangan berbentuk **p²** (faktor: 1, p, p²).
- **A salah** — 6 punya 4 faktor (1, 2, 3, 6).
- **B salah** — 8 = 2³ punya 4 faktor (1, 2, 4, 8).
- **C benar** — **4 = 2²** → faktor 1, 2, 4 (3 faktor). p terkecil = 2.
- **D salah** — 9 = 3² juga punya 3 faktor, tapi 4 lebih kecil.
- **Konsep kunci:** Bilangan dengan tepat 3 faktor selalu berbentuk kuadrat bilangan prima (p²).
- **Langkah Penyelesaian:**
  1. Ingat bentuk p² menghasilkan 3 faktor (1, p, p²).
  2. Ambil p terkecil = 2, maka bilangan = 2² = 4.
  3. Jawaban C.

---

**16.** Bilangan berikut yang **komposit** adalah ….
- A. 67
- B. 71
- C. 73
- D. 77

**Kunci: D**
**Pembahasan:**
- **A salah** — 67 prima.
- **B salah** — 71 prima.
- **C salah** — 73 prima.
- **D benar** — **77 = 7 × 11** → punya 4 faktor (1, 7, 11, 77) → **komposit**. (Jebakan: lolos cek 2, 3, 5 tapi gugur di 7.)
- **Konsep kunci:** Bilangan yang habis dibagi bilangan prima kecil selain dirinya adalah komposit.
- **Langkah Penyelesaian:**
  1. Cek 67, 71, 73: tidak habis dibagi 2, 3, 5, 7 → prima.
  2. Cek 77: 77 ÷ 7 = 11 → habis.
  3. Simpulkan 77 = 7 × 11 komposit (jawaban D).

---

**17.** Jumlah semua bilangan prima dari **1 sampai 10** adalah ….
- A. 17
- B. 15
- C. 18
- D. 16

**Kunci: A**
**Pembahasan:**
- Prima 1–10: 2, 3, 5, 7.
- **A benar** — **2 + 3 + 5 + 7 = 17**.
- **B salah** — Lupa 7 atau salah jumlah.
- **C salah** — Salah masukkan 9 (= 3², bukan prima).
- **D salah** — Salah hitung.
- **Konsep kunci:** Menjumlahkan semua prima dalam rentang dilakukan dengan mendaftar primanya dulu.
- **Langkah Penyelesaian:**
  1. Daftar prima 1–10: 2, 3, 5, 7.
  2. Jumlahkan semuanya.
  3. Hasilnya 17 (jawaban A).

---

**18.** Banyak bilangan prima dari **31 sampai 39** adalah ….
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: B**
**Pembahasan:**
- Kandidat ganjil: 31, 33, 35, 37, 39.
- 33 = 3×11; 35 = 5×7; 39 = 3×13 → komposit.
- **A salah** — Lupa 37 atau 31.
- **B benar** — **31 dan 37** → **2 prima**.
- **C salah** — Salah masukkan 35 sebagai prima.
- **D salah** — Salah hitung.
- **Konsep kunci:** Menghitung prima dalam rentang sempit dengan menyaring kelipatan 3 dan 5.
- **Langkah Penyelesaian:**
  1. Tulis kandidat ganjil: 31, 33, 35, 37, 39.
  2. Coret 33 (= 3×11), 35 (= 5×7), 39 (= 3×13).
  3. Sisa 31 dan 37 (2 prima), jawaban B.

---

**19.** Diketahui **8 × 12 = 96**. Faktorisasi prima dari **96** adalah ….
- A. 2⁴ × 6
- B. 2³ × 12
- C. 2⁵ × 3
- D. 4 × 24

**Kunci: C**
**Pembahasan:**
- 96 = 8 × 12 = 2³ × (2² × 3) = **2⁵ × 3**.
- **A salah** — 6 bukan bilangan prima.
- **B salah** — 12 bukan bilangan prima (faktorisasi belum selesai).
- **C benar** — 2⁵ × 3 = 32 × 3 = 96 ✓, semua prima.
- **D salah** — 4 dan 24 bukan prima.
- **Konsep kunci:** Faktorisasi prima menuntut semua pengali berupa bilangan prima.
- **Langkah Penyelesaian:**
  1. Tulis 96 = 8 × 12.
  2. Pecah 8 = 2³ dan 12 = 2² × 3.
  3. Gabungkan pangkat 2: 2³ × 2² = 2⁵, sehingga 2⁵ × 3 (jawaban C).

---

**20.** Bilangan **91** adalah ….
- A. prima
- B. habis dibagi 5
- C. genap
- D. komposit, karena **91 = 7 × 13**

**Kunci: D**
**Pembahasan:**
- **A salah** — JEBAKAN KLASIK: 91 tidak habis ÷ 2, 3, 5, tapi habis ÷ 7.
- **B salah** — Akhiran 1, tidak berakhiran 0/5.
- **C salah** — 91 ganjil.
- **D benar** — **91 = 7 × 13** → komposit (wajib cek pembagi 7!).
- **Konsep kunci:** 91 adalah jebakan klasik karena lolos cek 2, 3, 5 namun gugur di pembagi 7.
- **Langkah Penyelesaian:**
  1. Cek 91: ganjil, 9+1 = 10 (+ bukan kelipatan 3), akhiran 1 (bukan kelipatan 5).
  2. Cek pembagi 7: 91 ÷ 7 = 13 → habis.
  3. Simpulkan 91 = 7 × 13 komposit (jawaban D).

---

**21.** Bilangan prima **terbesar yang kurang dari 50** adalah ….
- A. 47
- B. 49
- C. 43
- D. 45

**Kunci: A**
**Pembahasan:**
- Cek dari 49 ke bawah: 49 = 7², 48 genap, 47 prima.
- **A benar** — **47 prima** dan < 50.
- **B salah** — 49 = 7 × 7 → komposit.
- **C salah** — 43 prima tapi lebih kecil dari 47.
- **D salah** — 45 = 5 × 9 → komposit.
- **Konsep kunci:** Mencari prima terbesar di bawah batas dengan memeriksa bilangan terbesar terlebih dahulu.
- **Langkah Penyelesaian:**
  1. Periksa 49 = 7² (komposit), 48 genap.
  2. Periksa 47: tidak habis dibagi 2, 3, 5, 7 (√47 ≈ 6,9) → prima.
  3. Simpulkan 47 (jawaban A).

---

**22.** Jumlah dua bilangan prima kembar **3 dan 5** adalah ….
- A. 6
- B. 8
- C. 10
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — 3 + 3 (bilangan sama, bukan pasangan kembar 3 dan 5).
- **B benar** — **3 + 5 = 8**.
- **C salah** — 5 + 5 (bilangan sama).
- **D salah** — 5 + 7 (pasangan kembar lain, tapi bukan 3 dan 5).
- **Konsep kunci:** Menjumlahkan dua bilangan dari pasangan twin prime dengan penjumlahan biasa.
- **Langkah Penyelesaian:**
  1. Ambil dua bilangan kembar: 3 dan 5.
  2. Jumlahkan 3 + 5.
  3. Hasilnya 8 (jawaban B).

---

**23.** Banyak faktor dari **42** adalah ….
- A. 6
- B. 7
- C. 8
- D. 9

**Kunci: C**
**Pembahasan:**
- 42 = 2 × 3 × 7 → banyak faktor = (1+1)(1+1)(1+1) = **8**.
- **A salah** — Lupa 6 atau 14.
- **B salah** — Salah hitung.
- **C benar** — Faktor 42: 1, 2, 3, 6, 7, 14, 21, 42 → **8 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Tiga faktor prima berbeda → jumlah faktor = 2 × 2 × 2 = 8.
- **Langkah Penyelesaian:**
  1. Faktorkan 42 = 2 × 3 × 7.
  2. Hitung (1+1)(1+1)(1+1).
  3. Hasilnya 8 (jawaban C).

---

**24.** Bilangan berikut yang **BUKAN prima** adalah ….
- A. 83
- B. 89
- C. 97
- D. 91

**Kunci: D**
**Pembahasan:**
- **A salah** — 83 prima.
- **B salah** — 89 prima.
- **C salah** — 97 prima.
- **D benar** — **91 = 7 × 13** → komposit. (Jebakan: keliru dianggap prima karena tidak habis ÷ 2, 3, 5.)
- **Konsep kunci:** Bilangan yang lolos cek 2, 3, 5 tetap harus dicek pembagi 7.
- **Langkah Penyelesaian:**
  1. Cek 83, 89, 97: tidak habis dibagi 2, 3, 5, 7 → prima.
  2. Cek 91: 91 ÷ 7 = 13 → habis.
  3. Simpulkan 91 komposit (jawaban D).

---

**25.** Bilangan **prima ke-12** adalah ….
- A. 37
- B. 41
- C. 31
- D. 43

**Kunci: A**
**Pembahasan:**
- Urutan prima: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, **37**, …
- **A benar** — **Prima ke-12 = 37**.
- **B salah** — 41 = prima ke-13.
- **C salah** — 31 = prima ke-11.
- **D salah** — 43 = prima ke-14.
- **Konsep kunci:** Urutan bilangan prima dibaca berurutan dari yang terkecil.
- **Langkah Penyelesaian:**
  1. Tulis urutan sampai prima ke-12: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37.
  2. Ambil angka pada posisi ke-12.
  3. Jawabannya 37 (jawaban A).

---

**26.** Faktorisasi prima dari **144** adalah ….
- A. 2³ × 3³
- B. 2⁴ × 3²
- C. 12²
- D. 4 × 36

**Kunci: B**
**Pembahasan:**
- 144 = 12 × 12 = (2² × 3)(2² × 3) = **2⁴ × 3²**.
- **A salah** — 2³ × 3³ = 8 × 27 = 216 ≠ 144.
- **B benar** — 2⁴ × 3² = 16 × 9 = 144 ✓.
- **C salah** — 12² belum merupakan faktorisasi prima (12 bukan prima).
- **D salah** — 4 dan 36 bukan prima.
- **Konsep kunci:** Faktorisasi prima suatu kuadrat menggandakan pangkat faktor prima basisnya.
- **Langkah Penyelesaian:**
  1. Tulis 144 = 12².
  2. Faktorkan 12 = 2² × 3, sehingga 12² = (2² × 3)².
  3. Kalikan pangkat: 2⁴ × 3² (jawaban B).

---

**27.** Bilangan asli **terkecil** yang memiliki **tepat 6 faktor** adalah ….
- A. 16
- B. 18
- C. 12
- D. 24

**Kunci: C**
**Pembahasan:**
- Tepat 6 faktor: bentuk p⁵ (terkecil 32) atau p² × q (terkecil 2² × 3 = 12).
- **A salah** — 16 = 2⁴ → 5 faktor.
- **B salah** — 18 = 2 × 3² → 6 faktor, tapi 12 lebih kecil.
- **C benar** — **12 = 2² × 3** → (2+1)(1+1) = 6 faktor (1, 2, 3, 4, 6, 12).
- **D salah** — 24 = 2³ × 3 → 8 faktor.
- **Konsep kunci:** Bilangan dengan 6 faktor dapat berbentuk p⁵, p²×q, atau p×q²; ambil yang terkecil.
- **Langkah Penyelesaian:**
  1. Hitung kandidat terkecil tiap bentuk: 2⁵ = 32; 2²×3 = 12; 2×3² = 18.
  2. Bandingkan: 12 < 18 < 32.
  3. Jawaban C (12).

---

**28.** Jumlah semua bilangan prima **sampai 20** adalah ….
- A. 70
- B. 72
- C. 75
- D. 77

**Kunci: D**
**Pembahasan:**
- Prima ≤ 20: 2, 3, 5, 7, 11, 13, 17, 19.
- **A salah** — Salah jumlah.
- **B salah** — Salah hitung.
- **C salah** — Lupa salah satu prima.
- **D benar** — 2+3+5+7+11+13+17+19 = **77**. (Cara cepat: (2+19)+(3+17)+(5+13)+(7+11) = 21+20+18+18 = 77.)
- **Konsep kunci:** Menjumlahkan semua prima dalam rentang, dapat dikelompokkan berpasangan agar mudah.
- **Langkah Penyelesaian:**
  1. Daftar prima ≤ 20: 2, 3, 5, 7, 11, 13, 17, 19.
  2. Jumlahkan (bisa berpasangan agar lebih cepat).
  3. Hasilnya 77 (jawaban D).

---

**29.** Faktor-faktor **prima** dari **100** adalah ….
- A. 2 dan 5
- B. 2, 4, dan 5
- C. 4 dan 25
- D. 2 dan 10

**Kunci: A**
**Pembahasan:**
- 100 = 2² × 5² → faktor prima: **2 dan 5**.
- **A benar** — Tepat 2 dan 5.
- **B salah** — 4 bukan bilangan prima.
- **C salah** — 4 dan 25 bukan prima.
- **D salah** — 10 bukan bilangan prima.
- **Konsep kunci:** Faktor prima adalah basis-basis prima pada faktorisasi prima, tanpa mempedulikan pangkatnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 100 = 2² × 5².
  2. Ambil basis primanya: 2 dan 5.
  3. Jawaban A.

---

**30.** Bilangan **143** adalah ….
- A. prima
- B. komposit, karena **143 = 11 × 13**
- C. genap
- D. lebih kecil dari 100

**Kunci: B**
**Pembahasan:**
- √143 ≈ 11,96. Cek 2, 3, 5, 7, 11: **143 ÷ 11 = 13 ✓**.
- **A salah** — Sering disangka prima karena tidak habis ÷ 2, 3, 5, 7.
- **B benar** — **143 = 11 × 13** (perkalian dua prima berurutan) → komposit.
- **C salah** — 143 ganjil.
- **D salah** — 143 > 100.
- **Konsep kunci:** Uji keprimaan bilangan tiga digit memerlukan pengecekan pembagi prima sampai √n.
- **Langkah Penyelesaian:**
  1. Hitung √143 ≈ 11,96 → cek prima 2, 3, 5, 7, 11.
  2. Cek 143 ÷ 11 = 13 → habis.
  3. Simpulkan 143 = 11 × 13 komposit (jawaban B).

---

**31.** Banyak faktor dari **60** adalah ….
- A. 8
- B. 10
- C. 12
- D. 14

**Kunci: C**
**Pembahasan:**
- 60 = 2² × 3 × 5 → banyak faktor = (2+1)(1+1)(1+1) = **12**.
- **A salah** — Lupa rumus tambah 1.
- **B salah** — Salah hitung.
- **C benar** — Faktor 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 → **12 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) setiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 60 = 2² × 3 × 5.
  2. Hitung (2+1)(1+1)(1+1) = 3 × 2 × 2.
  3. Hasilnya 12 (jawaban C).

---

**32.** Bilangan **221** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena **221 = 13 × 17**

**Kunci: D**
**Pembahasan:**
- √221 ≈ 14,87. Cek 2, 3, 5, 7, 11, 13: **221 ÷ 13 = 17 ✓**.
- **A salah** — JEBAKAN: lolos cek 2, 3, 5, 7, 11, tapi gugur di 13.
- **B salah** — 221 ganjil.
- **C salah** — 2+2+1 = 5, tidak habis dibagi 3.
- **D benar** — **221 = 13 × 17** → komposit.
- **Konsep kunci:** Bilangan yang lolos banyak cek pembagi kecil tetap harus diuji sampai √n.
- **Langkah Penyelesaian:**
  1. Hitung √221 ≈ 14,87 → cek prima ≤ 13: 2, 3, 5, 7, 11, 13.
  2. Cek 221 ÷ 13 = 17 → habis.
  3. Simpulkan 221 = 13 × 17 komposit (jawaban D).

---

**33.** Dua bilangan prima **lebih kecil dari 10** yang jumlahnya **12** adalah ….
- A. 5 dan 7
- B. 3 dan 9
- C. 2 dan 10
- D. 1 dan 11

**Kunci: A**
**Pembahasan:**
- Pasangan prima < 10: (2,3), (2,5), (2,7), (3,5), (3,7), (5,7).
- Jumlah 12: **5 + 7 = 12**.
- **A benar** — 5 dan 7 keduanya prima, jumlahnya 12.
- **B salah** — 9 bukan prima (9 = 3²).
- **C salah** — 10 bukan prima.
- **D salah** — 1 bukan prima, dan 11 > 10.
- **Konsep kunci:** Memilih pasangan dari kumpulan prima kecil berdasarkan jumlah tertentu.
- **Langkah Penyelesaian:**
  1. Daftar pasangan prima < 10 yang mungkin.
  2. Cek jumlah tiap pasangan.
  3. Hanya 5 + 7 = 12 yang memenuhi (jawaban A).

---

**34.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (7, 11)
- B. (17, 19)
- C. (13, 17)
- D. (2, 3)

**Kunci: B**
**Pembahasan:**
- **A salah** — Selisih 4 → cousin prime.
- **B benar** — **17 dan 19** keduanya prima, selisih = 2 → **twin prime**.
- **C salah** — Selisih 4 → cousin prime.
- **D salah** — (2, 3) selisih 1, bukan twin prime.
- **Konsep kunci:** Twin prime = pasangan prima dengan selisih tepat 2.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (7,11)=4; (17,19)=2; (13,17)=4; (2,3)=1.
  2. Pastikan pasangan berselisih 2 keduanya prima.
  3. Jawaban B (17, 19).

---

**35.** Banyak faktor dari **54** adalah ….
- A. 6
- B. 7
- C. 8
- D. 9

**Kunci: C**
**Pembahasan:**
- 54 = 2 × 3³ → banyak faktor = (1+1)(3+1) = **8**.
- **A salah** — Lupa menambahkan 1 pada pangkat 3.
- **B salah** — Salah hitung.
- **C benar** — Faktor 54: 1, 2, 3, 6, 9, 18, 27, 54 → **8 faktor**.
- **D salah** — Salah aturan.
- **Konsep kunci:** Pangkat prima yang tinggi tetap dihitung dengan rumus (pangkat+1).
- **Langkah Penyelesaian:**
  1. Faktorkan 54 = 2 × 3³.
  2. Hitung (1+1)(3+1) = 2 × 4.
  3. Hasilnya 8 (jawaban C).

---

**36.** Bilangan berikut yang **BUKAN komposit** (berarti prima) adalah ….
- A. 39
- B. 49
- C. 51
- D. 47

**Kunci: D**
**Pembahasan:**
- **A salah** — 39 = 3 × 13 → komposit.
- **B salah** — 49 = 7 × 7 → komposit.
- **C salah** — 51 = 3 × 17 → komposit.
- **D benar** — **47 prima** (tidak habis dibagi 2, 3, 5; 7 > √47 ≈ 6,9).
- **Konsep kunci:** Prima dan komposit bersifat saling meniadakan; bukan komposit artinya prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 39, 49, 51 → semuanya merupakan hasil kali dua prima kecil.
  2. Uji 47: cek pembagi 2, 3, 5 (√47 ≈ 6,9) → tidak ada yang habis.
  3. Simpulkan 47 prima (jawaban D).

---

**37.** Jumlah semua bilangan prima dari **21 sampai 29** adalah ….
- A. 52
- B. 48
- C. 50
- D. 54

**Kunci: A**
**Pembahasan:**
- Prima 21–29: **23 dan 29** (21 = 3×7; 25 = 5²; 27 = 3³).
- **A benar** — **23 + 29 = 52**.
- **B salah** — Salah hitung.
- **C salah** — Salah jumlah.
- **D salah** — Salah masukkan bilangan komposit.
- **Konsep kunci:** Menyaring bilangan komposit dahulu, baru menjumlahkan prima yang tersisa.
- **Langkah Penyelesaian:**
  1. Coret 21 (= 3×7), 25 (= 5²), 27 (= 3³) dari rentang 21–29.
  2. Tersisa prima 23 dan 29.
  3. Jumlahkan 23 + 29 = 52 (jawaban A).

---

**38.** Faktorisasi prima dari **108** adalah ….
- A. 2³ × 3²
- B. 2² × 3³
- C. 3 × 36
- D. 6 × 18

**Kunci: B**
**Pembahasan:**
- 108 = 4 × 27 = **2² × 3³**.
- **A salah** — 2³ × 3² = 8 × 9 = 72 ≠ 108.
- **B benar** — 2² × 3³ = 4 × 27 = 108 ✓.
- **C salah** — 36 bukan prima.
- **D salah** — 6 dan 18 bukan prima.
- **Konsep kunci:** Membagi berulang dengan bilangan prima menghasilkan bentuk pangkat yang benar.
- **Langkah Penyelesaian:**
  1. Bagi 108 dengan 2 sampai tidak habis: 108 = 2² × 27.
  2. Bagi 27 = 3³.
  3. Gabungkan: 2² × 3³ (jawaban B).

---

**39.** Bilangan asli **terkecil** yang memiliki **tepat 4 faktor** adalah ….
- A. 4
- B. 8
- C. 6
- D. 12

**Kunci: C**
**Pembahasan:**
- Tepat 4 faktor: bentuk p³ (terkecil 8) atau p × q (terkecil 2 × 3 = 6).
- **A salah** — 4 = 2² → 3 faktor.
- **B salah** — 8 = 2³ → 4 faktor, tapi 6 lebih kecil.
- **C benar** — **6 = 2 × 3** → faktor 1, 2, 3, 6 (4 faktor).
- **D salah** — 12 punya 6 faktor.
- **Konsep kunci:** Bilangan dengan 4 faktor dapat berbentuk p³ atau p×q (dua prima berbeda).
- **Langkah Penyelesaian:**
  1. Bandingkan kandidat: 6 = 2×3 (4 faktor) dan 8 = 2³ (4 faktor).
  2. Ambil yang lebih kecil.
  3. Jawaban C (6).

---

**40.** Bilangan prima **terkecil yang lebih besar dari 30** adalah ….
- A. 33
- B. 37
- C. 35
- D. 31

**Kunci: D**
**Pembahasan:**
- **A salah** — 33 = 3 × 11 → komposit.
- **B salah** — 37 prima tapi bukan yang terkecil > 30.
- **C salah** — 35 = 5 × 7 → komposit.
- **D benar** — **31 prima**, dan 31 < 33 < 35 < 37.
- **Konsep kunci:** Urutkan bilangan ganjil setelah batas, lalu temukan bilangan prima pertama.
- **Langkah Penyelesaian:**
  1. Daftar bilangan ganjil setelah 30: 31, 33, 35, 37.
  2. Uji urut: 31 tidak habis dibagi 2, 3, 5 (√31 ≈ 5,6) → prima.
  3. Jadi prima terkecil > 30 adalah 31 (jawaban D).

---

**41.** Selisih antara **prima ke-10** dan **prima ke-8** adalah ….
- A. 10
- B. 9
- C. 8
- D. 11

**Kunci: A**
**Pembahasan:**
- Prima ke-8 = 19; prima ke-10 = 29.
- **A benar** — **29 − 19 = 10**.
- **B salah** — Salah hitung.
- **C salah** — Salah ambil prima.
- **D salah** — Salah urutan.
- **Konsep kunci:** Menentukan prima berdasarkan posisi urutan, lalu menghitung selisihnya.
- **Langkah Penyelesaian:**
  1. Tulis urutan sampai ke-10: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
  2. Ambil prima ke-8 (19) dan ke-10 (29).
  3. Hitung 29 − 19 = 10 (jawaban A).

---

**42.** Banyaknya **faktor prima yang berbeda** dari **84** adalah ….
- A. 4
- B. 3
- C. 6
- D. 5

**Kunci: B**
**Pembahasan:**
- 84 = 2² × 3 × 7 → faktor prima berbeda: 2, 3, 7.
- **A salah** — Salah hitung.
- **B benar** — **3 faktor prima berbeda**.
- **C salah** — Mungkin menghitung banyak faktor total 84 (yaitu 12).
- **D salah** — Salah hitung.
- **Konsep kunci:** "Faktor prima berbeda" menghitung basis primanya saja, tanpa pangkat.
- **Langkah Penyelesaian:**
  1. Faktorkan 84 = 2² × 3 × 7.
  2. Ambil basis prima: 2, 3, 7.
  3. Jumlahnya 3 (jawaban B).

---

**43.** Jumlah seluruh **faktor** dari **12** adalah ….
- A. 24
- B. 26
- C. 28
- D. 30

**Kunci: C**
**Pembahasan:**
- Faktor 12: 1, 2, 3, 4, 6, 12.
- **A salah** — Salah jumlah.
- **B salah** — Lupa 12 atau salah hitung.
- **C benar** — **1 + 2 + 3 + 4 + 6 + 12 = 28**.
- **D salah** — Salah jumlah.
- **Konsep kunci:** Menjumlahkan faktor berarti menjumlahkan nilai tiap faktor, bukan banyaknya.
- **Langkah Penyelesaian:**
  1. Daftar semua faktor 12: 1, 2, 3, 4, 6, 12.
  2. Jumlahkan semuanya.
  3. Hasilnya 28 (jawaban C).

---

**44.** Hasil kali dua bilangan **prima kembar** yang benar adalah ….
- A. 21
- B. 77
- C. 39
- D. 143

**Kunci: D**
**Pembahasan:**
- **A salah** — 21 = 3 × 7 (selisih 4, bukan kembar).
- **B salah** — 77 = 7 × 11 (selisih 4).
- **C salah** — 39 = 3 × 13 (selisih 10).
- **D benar** — **143 = 11 × 13**, dan 13 − 11 = 2 → dua prima kembar.
- **Konsep kunci:** Prima kembar (twin) berselisih 2; hasil kalinya disebut bilangan semiprime kembar.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan menjadi dua prima.
  2. Ukur selisih kedua primanya.
  3. Hanya 143 = 11 × 13 yang berselisih 2 (jawaban D).

---

**45.** Banyak bilangan prima dari **61 sampai 70** (termasuk batasnya) adalah ….
- A. 2
- B. 3
- C. 1
- D. 4

**Kunci: A**
**Pembahasan:**
- 62, 64, 66, 68, 70 genap; 63 = 7×9; 65 = 5×13; 69 = 3×23 → semua komposit.
- **A benar** — **61 dan 67** → **2 prima**.
- **B salah** — Salah masukkan bilangan genap.
- **C salah** — Lupa 61 atau 67.
- **D salah** — Salah hitung.
- **Konsep kunci:** Dalam rentang 10 angka, genap, kelipatan 3, dan kelipatan 5 langsung dicoret.
- **Langkah Penyelesaian:**
  1. Coret bilangan genap (62, 64, 66, 68, 70) dan kelipatan 5 (65).
  2. Coret 63 (= 7×9) dan 69 (= 3×23).
  3. Sisa 61, 67 = 2 prima (jawaban A).

---

**46.** Faktorisasi prima dari **162** adalah ….
- A. 2 × 3³
- B. 2 × 3⁴
- C. 6 × 27
- D. 3⁵

**Kunci: B**
**Pembahasan:**
- 162 = 2 × 81 = **2 × 3⁴**.
- **A salah** — 2 × 3³ = 2 × 27 = 54 ≠ 162.
- **B benar** — 2 × 3⁴ = 2 × 81 = 162 ✓.
- **C salah** — 6 dan 27 bukan prima.
- **D salah** — 3⁵ = 243 ≠ 162.
- **Konsep kunci:** Pembagian berulang dengan 3 mengungkap pangkat tinggi pada faktorisasi.
- **Langkah Penyelesaian:**
  1. Bagi 162 dengan 2: 162 = 2 × 81.
  2. Tulis 81 = 3⁴.
  3. Gabungkan: 2 × 3⁴ (jawaban B).

---

**47.** Bilangan asli **terkecil** yang memiliki **tepat 5 faktor** adalah ….
- A. 25
- B. 32
- C. 16
- D. 24

**Kunci: C**
**Pembahasan:**
- Tepat 5 faktor bila berbentuk **p⁴** (faktor: 1, p, p², p³, p⁴).
- **A salah** — 25 = 5² → hanya 3 faktor.
- **B salah** — 32 = 2⁵ → 6 faktor.
- **C benar** — **16 = 2⁴** → faktor 1, 2, 4, 8, 16 (5 faktor).
- **D salah** — 24 = 2³ × 3 → 8 faktor.
- **Konsep kunci:** Bilangan dengan 5 faktor selalu berbentuk pangkat empat dari bilangan prima.
- **Langkah Penyelesaian:**
  1. Ingat bentuk p⁴ menghasilkan faktor 1, p, p², p³, p⁴ = 5 faktor.
  2. Ambil p terkecil = 2, maka 2⁴ = 16.
  3. Jawaban C.

---

**48.** Jumlah semua bilangan prima dari **31 sampai 37** adalah ….
- A. 62
- B. 64
- C. 66
- D. 68

**Kunci: D**
**Pembahasan:**
- Prima 31–39: 31, 37 (33, 35, 39 komposit).
- **A salah** — Salah hitung.
- **B salah** — Lupa salah satu.
- **C salah** — Salah jumlah.
- **D benar** — **31 + 37 = 68**.
- **Konsep kunci:** Menjumlahkan prima dalam rentang pendek setelah menyaring komposit.
- **Langkah Penyelesaian:**
  1. Saring 33 (= 3×11), 35 (= 5×7), 39 (= 3×13).
  2. Tersisa 31 dan 37.
  3. Jumlahkan 31 + 37 = 68 (jawaban D).

---

**49.** Faktor-faktor **prima** dari **90** adalah ….
- A. 2, 3, dan 5
- B. 2, 3, dan 6
- C. 3, 5, dan 9
- D. 2, 5, dan 15

**Kunci: A**
**Pembahasan:**
- 90 = 2 × 3² × 5 → faktor prima: **2, 3, 5**.
- **A benar** — Tepat 2, 3, 5.
- **B salah** — 6 bukan prima.
- **C salah** — 9 bukan prima.
- **D salah** — 15 bukan prima.
- **Konsep kunci:** Faktor prima suatu bilangan adalah basis primanya saja.
- **Langkah Penyelesaian:**
  1. Faktorkan 90 = 2 × 3² × 5.
  2. Ambil basis prima: 2, 3, 5.
  3. Jawaban A.

---

**50.** Bilangan **103** adalah ….
- A. komposit
- B. prima
- C. habis dibagi 3
- D. habis dibagi 5

**Kunci: B**
**Pembahasan:**
- √103 ≈ 10,2. Cek 2, 3, 5, 7: 103 ganjil ✗; 1+0+3=4 ✗; akhiran 3 ✗; 103 ÷ 7 ≈ 14,7 ✗.
- **A salah** — Tidak ada pembagi prima ≤ √103.
- **B benar** — **103 prima**.
- **C salah** — Jumlah digit 4, tidak habis dibagi 3.
- **D salah** — Akhiran 3, bukan 0/5.
- **Konsep kunci:** Bilangan tiga digit tetap diuji hingga pembagi ≤ √n sebelum disimpulkan prima.
- **Langkah Penyelesaian:**
  1. Hitung √103 ≈ 10,2 → cek prima 2, 3, 5, 7.
  2. Tidak ada yang membagi 103 habis.
  3. Simpulkan 103 prima (jawaban B).

---

**51.** Bilangan berikut yang **prima** adalah ….
- A. 121
- B. 133
- C. 131
- D. 143

**Kunci: C**
**Pembahasan:**
- **A salah** — 121 = 11 × 11 = 11² → komposit.
- **B salah** — 133 = 7 × 19 → komposit.
- **C benar** — **131 prima**. Cek √131 ≈ 11,4 → pembagi prima 2, 3, 5, 7, 11: 131 ÷ 11 ≈ 11,9 ✗ → tidak ada yang habis.
- **D salah** — 143 = 11 × 13 → komposit.
- **Konsep kunci:** Bilangan tiga digit tetap harus diuji sampai pembagi prima ≤ √n sebelum disimpulkan prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 121 = 11², 133 = 7 × 19, 143 = 11 × 13 → semua komposit.
  2. Uji 131 dengan pembagi prima ≤ √131 ≈ 11,4: 2, 3, 5, 7, 11.
  3. Tidak ada yang membagi 131 habis → 131 prima (jawaban C).

---

**52.** Banyaknya **faktor prima yang berbeda** dari **210** adalah ….
- A. 3
- B. 5
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- 210 = 2 × 3 × 5 × 7 → basis prisma: 2, 3, 5, 7.
- **A salah** — Lupa 7.
- **B salah** — Salah hitung.
- **C salah** — Jumlah faktor 210 = 16, bukan 6.
- **D benar** — **4 faktor prima berbeda**.
- **Konsep kunci:** "Faktor prima berbeda" dihitung dari banyak basis prima, bukan dari pangkatnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 210 = 2 × 3 × 5 × 7.
  2. Ambil basis primanya satu per satu.
  3. Jumlahnya 4 (jawaban D).

---

**53.** Jumlah semua **faktor prima** dari **30** adalah ….
- A. 10
- B. 8
- C. 12
- D. 11

**Kunci: A**
**Pembahasan:**
- 30 = 2 × 3 × 5 → 2 + 3 + 5.
- **A benar** — **2 + 3 + 5 = 10**.
- **B salah** — Lupa 5 (2 + 3 = 5, bukan 8).
- **C salah** — Salah jumlah.
- **D salah** — Salah hitung.
- **Konsep kunci:** "Jumlah faktor prima" menjumlahkan nilai basis primanya (tanpa pangkat).
- **Langkah Penyelesaian:**
  1. Faktorkan 30 = 2 × 3 × 5.
  2. Jumlahkan 2 + 3 + 5.
  3. Hasilnya 10 (jawaban A).

---

**54.** Bilangan **149** adalah ….
- A. komposit
- B. prima
- C. genap
- D. habis dibagi 7

**Kunci: B**
**Pembahasan:**
- √149 ≈ 12,2. Cek prima ≤ 12: 2, 3, 5, 7, 11 → 149 ganjil ✗, 1+4+9=14 ✗, akhiran 9 ✗, 149 ÷ 7 ≈ 21,3 ✗, 149 ÷ 11 ≈ 13,5 ✗.
- **A salah** — Tidak ada pembagi prima ≤ √149.
- **B benar** — **149 prima**.
- **C salah** — 149 ganjil.
- **D salah** — 149 ÷ 7 ≈ 21,3, tidak habis.
- **Konsep kunci:** Bilangan yang lolos cek 2, 3, 5, 7, 11 tetap perlu diuji sampai akarnya.
- **Langkah Penyelesaian:**
  1. Hitung √149 ≈ 12,2 → cek 2, 3, 5, 7, 11.
  2. Tidak ada yang membagi 149 habis.
  3. Simpulkan 149 prima (jawaban B).

---

**55.** Banyak faktor dari **96** adalah ….
- A. 10
- B. 11
- C. 12
- D. 14

**Kunci: C**
**Pembahasan:**
- 96 = 2⁵ × 3 → (5+1)(1+1) = 6 × 2 = **12**.
- **A salah** — Salah pangkat.
- **B salah** — Lupa menambahkan 1.
- **C benar** — **12 faktor**.
- **D salah** — Salah aturan.
- **Konsep kunci:** Banyak faktor dibaca langsung dari pangkat pada faktorisasi prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 96 = 2⁵ × 3.
  2. Hitung (5+1)(1+1) = 12.
  3. Jawaban C.

---

**56.** Bilangan berikut yang **BUKAN prima** adalah ….
- A. 113
- B. 127
- C. 131
- D. 119

**Kunci: D**
**Pembahasan:**
- **A salah** — 113 prima (√113 ≈ 10,6; cek 2, 3, 5, 7 → tidak habis).
- **B salah** — 127 prima.
- **C salah** — 131 prima.
- **D benar** — **119 = 7 × 17** → komposit. (Jebakan: lolos cek 2, 3, 5, gugur di 7.)
- **Konsep kunci:** Untuk bilangan 11x–13x wajib memeriksa pembagi 7 sebelum menyimpulkan prima.
- **Langkah Penyelesaian:**
  1. Cek 113, 127, 131 dengan pembagi 2, 3, 5, 7 → semua prima.
  2. Cek 119: 119 ÷ 7 = 17 → habis.
  3. Simpulkan 119 komposit (jawaban D).

---

**57.** Jumlah dua bilangan **prima terbesar yang kurang dari 20** adalah ….
- A. 36
- B. 34
- C. 38
- D. 32

**Kunci: A**
**Pembahasan:**
- Dua prima terbesar < 20: **17 dan 19**.
- **A benar** — **17 + 19 = 36**.
- **B salah** — Lupa 19 atau salah jumlah.
- **C salah** — Salah hitung.
- **D salah** — Salah ambil prima.
- **Konsep kunci:** Mencari dua prima terbesar dalam batas, lalu menjumlahkannya.
- **Langkah Penyelesaian:**
  1. Prima terbesar < 20 = 19, kedua terbesar = 17.
  2. Jumlahkan 17 + 19.
  3. Hasilnya 36 (jawaban A).

---

**58.** Faktorisasi prima dari **196** adalah ….
- A. 4 × 49
- B. 2² × 7²
- C. 2 × 7²
- D. 2⁴ × 7²

**Kunci: B**
**Pembahasan:**
- 196 = 14² = (2 × 7)² = **2² × 7²**.
- **A salah** — 4 dan 49 bukan bilangan prima.
- **B benar** — 2² × 7² = 4 × 49 = 196 ✓.
- **C salah** — 2 × 49 = 98 ≠ 196.
- **D salah** — 2⁴ × 7² = 16 × 49 = 784 ≠ 196.
- **Konsep kunci:** Kuadrat hasil kali dua prima sama dengan hasil kali kuadrat masing-masing primanya.
- **Langkah Penyelesaian:**
  1. Tulis 196 = 14².
  2. Pecah 14 = 2 × 7, sehingga 14² = (2 × 7)².
  3. Ubah menjadi 2² × 7² (jawaban B).

---

**59.** Bilangan asli **terkecil** yang memiliki **tepat 8 faktor** adalah ….
- A. 16
- B. 30
- C. 24
- D. 42

**Kunci: C**
**Pembahasan:**
- Tepat 8 faktor: bentuk p⁷ (terkecil 2⁷ = 128), p³ × q (terkecil 2³ × 3 = 24), atau p × q × r (terkecil 2 × 3 × 5 = 30).
- **A salah** — 16 = 2⁴ → 5 faktor.
- **B salah** — 30 punya 8 faktor, tapi 24 lebih kecil.
- **C benar** — **24 = 2³ × 3** → (3+1)(1+1) = 8 faktor.
- **D salah** — 42 = 2×3×7 punya 8 faktor, tapi lebih besar dari 24.
- **Konsep kunci:** Bilangan dengan 8 faktor bisa berbentuk p⁷, p³×q, atau p×q×r; bandingkan kandidat terkecilnya.
- **Langkah Penyelesaian:**
  1. Hitung kandidat terkecil tiap bentuk: 2⁷ = 128, 2³×3 = 24, 2×3×5 = 30.
  2. Bandingkan: 24 < 30 < 128.
  3. Jawaban C (24).

---

**60.** Jumlah **tiga bilangan prima pertama** adalah ….
- A. 9
- B. 11
- C. 12
- D. 10

**Kunci: D**
**Pembahasan:**
- Tiga prima pertama: 2, 3, 5.
- **A salah** — 2 + 3 + 4 (4 bukan prima).
- **B salah** — Salah jumlah.
- **C salah** — 3 + 4 + 5 (4 bukan prima).
- **D benar** — **2 + 3 + 5 = 10**.
- **Konsep kunci:** Tiga bilangan prima pertama adalah 2, 3, dan 5 (ingat 2 adalah prima genap).
- **Langkah Penyelesaian:**
  1. Tentukan tiga prima pertama: 2, 3, 5.
  2. Jumlahkan semuanya.
  3. Hasilnya 10 (jawaban D).

---

**61.** Banyak bilangan **prima ganjil** yang kurang dari **30** adalah ….
- A. 9
- B. 8
- C. 10
- D. 7

**Kunci: A**
**Pembahasan:**
- Prima < 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → 10 prima.
- **A benar** — Yang ganjil = 10 − 1 (buang 2, satu-satunya prima genap) = **9**.
- **B salah** — Lupa salah satu.
- **C salah** — Itu total prima termasuk 2.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Mengurangi satu-satunya prima genap (2) dari total prima menghasilkan banyak prima ganjil.
- **Langkah Penyelesaian:**
  1. Daftar prima < 30: total 10.
  2. Sisihkan 2 (prima genap).
  3. Banyak prima ganjil = 9 (jawaban A).

---

**62.** Bilangan **151** adalah ….
- A. komposit
- B. prima
- C. habis dibagi 3
- D. habis dibagi 7

**Kunci: B**
**Pembahasan:**
- √151 ≈ 12,3. Cek 2, 3, 5, 7, 11: 151 ganjil ✗, 1+5+1 = 7 ✗, akhiran 1 ✗, 151 ÷ 7 ≈ 21,6 ✗, 151 ÷ 11 ≈ 13,7 ✗.
- **A salah** — Tidak ada pembagi prima ≤ √151.
- **B benar** — **151 prima**.
- **C salah** — Jumlah digit 7, tidak habis dibagi 3.
- **D salah** — 151 ÷ 7 ≈ 21,6.
- **Konsep kunci:** Uji keprimaan bilangan 15x memerlukan pembagi prima sampai akarnya.
- **Langkah Penyelesaian:**
  1. Hitung √151 ≈ 12,3 → cek 2, 3, 5, 7, 11.
  2. Tidak ada yang membagi 151 habis.
  3. Simpulkan 151 prima (jawaban B).

---

**63.** Faktorisasi prima dari **200** adalah ….
- A. 2² × 5³
- B. 2² × 5²
- C. 2³ × 5²
- D. 20 × 10

**Kunci: C**
**Pembahasan:**
- 200 = 8 × 25 = **2³ × 5²**.
- **A salah** — 2² × 5³ = 4 × 125 = 500 ≠ 200.
- **B salah** — 2² × 5² = 4 × 25 = 100 ≠ 200.
- **C benar** — 2³ × 5² = 8 × 25 = 200 ✓.
- **D salah** — 20 dan 10 bukan bilangan prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali pangkat bilangan-bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Tulis 200 = 8 × 25.
  2. Uraikan 8 = 2³ dan 25 = 5².
  3. Gabungkan menjadi 2³ × 5² (jawaban C).

---

**64.** Bilangan **161** adalah ….
- A. prima
- B. genap
- C. habis dibagi 3
- D. komposit, karena **161 = 7 × 23**

**Kunci: D**
**Pembahasan:**
- √161 ≈ 12,7. Cek 2, 3, 5, 7, 11: **161 ÷ 7 = 23 ✓**.
- **A salah** — JEBAKAN: lolos cek 2, 3, 5 tapi gugur di 7.
- **B salah** — 161 ganjil.
- **C salah** — 1+6+1 = 8, tidak habis dibagi 3.
- **D benar** — **161 = 7 × 23** → komposit.
- **Konsep kunci:** Bilangan 1xx wajib diperiksa pembagi 7 sebelum disimpulkan prima.
- **Langkah Penyelesaian:**
  1. Cek 161 tidak habis dibagi 2, 3, 5.
  2. Cek pembagi 7: 161 ÷ 7 = 23 → habis.
  3. Simpulkan 161 = 7 × 23 komposit (jawaban D).

---

**65.** Jumlah semua bilangan prima dari **51 sampai 59** adalah ….
- A. 112
- B. 110
- C. 114
- D. 108

**Kunci: A**
**Pembahasan:**
- Prima 51–59: 53, 59 (51 = 3×17; 55 = 5×11; 57 = 3×19).
- **A benar** — **53 + 59 = 112**.
- **B salah** — Lupa salah satu.
- **C salah** — Salah jumlah.
- **D salah** — Lupa prima.
- **Konsep kunci:** Menyaring komposit dalam rentang, lalu menjumlahkan prima yang tersisa.
- **Langkah Penyelesaian:**
  1. Coret 51 (= 3×17), 55 (= 5×11), 57 (= 3×19).
  2. Tersisa 53 dan 59.
  3. Jumlahkan 53 + 59 = 112 (jawaban A).

---

**66.** Bilangan prima **terkecil yang lebih besar dari 40** adalah ….
- A. 43
- B. 41
- C. 47
- D. 45

**Kunci: B**
**Pembahasan:**
- Periksa urut dari 41: **41 prima**; 43 juga prima tetapi lebih besar.
- **A salah** — 43 prima tapi bukan yang terkecil.
- **B benar** — **41 prima** dan 41 < 43 < 47.
- **C salah** — 47 prima tapi bukan yang terkecil.
- **D salah** — 45 = 5 × 9 → komposit.
- **Konsep kunci:** Memeriksa bilangan ganjil satu per satu dari batas ke atas sampai ditemukan prima.
- **Langkah Penyelesaian:**
  1. Daftar kandidat setelah 40: 41, 43, 45, 47.
  2. Uji 41: tidak habis dibagi 2, 3, 5, 7 → prima.
  3. Jadi prima terkecil > 40 adalah 41 (jawaban B).

---

**67.** Selisih dua bilangan prima **83 dan 89** adalah ….
- A. 4
- B. 5
- C. 6
- D. 7

**Kunci: C**
**Pembahasan:**
- **A salah** — Selisih 4 mencirikan cousin prime (bukan pasangan ini).
- **B salah** — Salah hitung.
- **C benar** — **89 − 83 = 6**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Selisih dua bilangan dihitung dengan pengurangan langsung.
- **Langkah Penyelesaian:**
  1. Kurangkan 89 − 83.
  2. Hasilnya 6.
  3. Jawaban C.

---

**68.** Bilangan **2 × 3 × 5 + 1 = 31** adalah ….
- A. komposit
- B. genap
- C. lebih kecil dari 20
- D. bilangan prima

**Kunci: D**
**Pembahasan:**
- 2 × 3 × 5 = 30, maka 30 + 1 = 31.
- Karena 31 − 1 habis dibagi 2, 3, 5, maka **31 tidak habis dibagi** 2, 3, 5. Cek 7: 31 ÷ 7 > √31 ≈ 5,6 dan tidak membagi → prima.
- **A salah** — Tidak ada pembagi prima.
- **B salah** — 31 ganjil.
- **C salah** — 31 > 20.
- **D benar** — **31 prima** (sekaligus prima Mersenne karena 2⁵ − 1 = 31).
- **Konsep kunci:** Hasil kali beberapa prima ditambah 1 tidak habis dibagi prima-prima penyusunnya (ide bukti Euclid).
- **Langkah Penyelesaian:**
  1. Hitung 2 × 3 × 5 + 1 = 31.
  2. Sadari 31 tidak habis dibagi 2, 3, 5 (karena n−1 habis).
  3. Tidak ada pembagi prima lain ≤ √31 ≈ 5,6 → 31 prima (jawaban D).

---

**69.** Banyak bilangan prima **kurang dari 100** adalah ….
- A. 25
- B. 24
- C. 26
- D. 23

**Kunci: A**
**Pembahasan:**
- Prima < 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
- **A benar** — **Tepat 25 prima** < 100 (wajib hafal).
- **B salah** — Lupa salah satu.
- **C salah** — Salah hitung.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Banyak prima < 100 adalah 25; hafalkan daftarnya.
- **Langkah Penyelesaian:**
  1. Hafal daftar 25 prima ≤ 97.
  2. Hitung jumlahnya.
  3. Jawaban A (25).

---

**70.** Faktorisasi prima dari **132** adalah ….
- A. 2 × 3 × 22
- B. 2² × 3 × 11
- C. 2² × 11²
- D. 2³ × 3 × 11

**Kunci: B**
**Pembahasan:**
- 132 = 4 × 33 = **2² × 3 × 11**.
- **A salah** — 22 bukan bilangan prima.
- **B benar** — 4 × 3 × 11 = 132 ✓.
- **C salah** — 2² × 11² = 4 × 121 = 484 ≠ 132.
- **D salah** — 2³ × 3 × 11 = 8 × 33 = 264 ≠ 132.
- **Konsep kunci:** Pecah hingga semua pengali berupa bilangan prima dan pangkatnya tepat.
- **Langkah Penyelesaian:**
  1. Bagi 132 dengan 4: 132 = 4 × 33.
  2. Uraikan 4 = 2² dan 33 = 3 × 11.
  3. Gabungkan: 2² × 3 × 11 (jawaban B).

---

**71.** Banyak faktor dari **75** adalah ….
- A. 5
- B. 7
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- 75 = 3 × 5² → (1+1)(2+1) = 2 × 3 = **6**.
- **A salah** — Lupa 15, 25, atau 75.
- **B salah** — Salah hitung.
- **C benar** — Faktor 75: 1, 3, 5, 15, 25, 75 → **6 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor dengan satu pangkat lebih tinggi dari 1.
- **Langkah Penyelesaian:**
  1. Faktorkan 75 = 3 × 5².
  2. Hitung (1+1)(2+1) = 6.
  3. Jawaban C.

---

**72.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (7, 11)
- B. (13, 17)
- C. (19, 23)
- D. (41, 43)

**Kunci: D**
**Pembahasan:**
- **A salah** — Selisih 4 (cousin prime).
- **B salah** — Selisih 4 (cousin prime).
- **C salah** — Selisih 4 (cousin prime).
- **D benar** — **43 − 41 = 2** dan keduanya prima → **twin prime**.
- **Konsep kunci:** Twin prime dikenali dari selisih tepat 2 antara dua bilangan prima.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan: (7,11)=4; (13,17)=4; (19,23)=4; (41,43)=2.
  2. Pastikan keduanya prima.
  3. Jawaban D (41, 43).

---

**73.** Dua bilangan prima yang **keduanya lebih dari 5** dan jumlahnya **20** adalah ….
- A. 7 dan 13
- B. 3 dan 17
- C. 5 dan 15
- D. 9 dan 11

**Kunci: A**
**Pembahasan:**
- Pasangan prima berjumlah 20: (3, 17) dan (7, 13).
- **A benar** — 7 dan 13 keduanya > 5 → memenuhi.
- **B salah** — 3 < 5, tidak memenuhi syarat.
- **C salah** — 15 bukan prima (15 = 3 × 5).
- **D salah** — 9 bukan prima (9 = 3²).
- **Konsep kunci:** Mendaftar semua pasangan prima yang jumlahnya sesuai, lalu menerapkan syarat tambahan.
- **Langkah Penyelesaian:**
  1. Cari pasangan prima berjumlah 20: (3,17) dan (7,13).
  2. Saring yang kedua anggotanya > 5.
  3. Tinggal 7 dan 13 (jawaban A).

---

**74.** Bilangan **179** adalah ….
- A. komposit
- B. prima
- C. genap
- D. habis dibagi 7

**Kunci: B**
**Pembahasan:**
- √179 ≈ 13,4. Cek 2, 3, 5, 7, 11, 13: 179 ganjil ✗, 1+7+9 = 17 ✗, akhiran 9 ✗, 179 ÷ 7 ≈ 25,6 ✗, 179 ÷ 11 ≈ 16,3 ✗, 179 ÷ 13 ≈ 13,8 ✗.
- **A salah** — Tidak ada pembagi prima ≤ √179.
- **B benar** — **179 prima**.
- **C salah** — 179 ganjil.
- **D salah** — 179 ÷ 7 ≈ 25,6, tidak habis.
- **Konsep kunci:** Bilangan 17x diuji sampai pembagi prima ≤ √n ≈ 13,4.
- **Langkah Penyelesaian:**
  1. Hitung √179 ≈ 13,4 → cek 2, 3, 5, 7, 11, 13.
  2. Tidak ada yang membagi 179 habis.
  3. Simpulkan 179 prima (jawaban B).

---

**75.** Banyak faktor dari **100** adalah ….
- A. 7
- B. 8
- C. 9
- D. 10

**Kunci: C**
**Pembahasan:**
- 100 = 2² × 5² → (2+1)(2+1) = **9**.
- **A salah** — Terlalu sedikit.
- **B salah** — Lupa salah satu faktor.
- **C benar** — Faktor 100: 1, 2, 4, 5, 10, 20, 25, 50, 100 → **9 faktor**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Bilangan kuadrat prima (p²q²) memiliki banyak faktor ganjil karena (2+1)(2+1).
- **Langkah Penyelesaian:**
  1. Faktorkan 100 = 2² × 5².
  2. Hitung (2+1)(2+1) = 9.
  3. Jawaban C.

---

**76.** Bilangan berikut yang **komposit dan habis dibagi 3** adalah ….
- A. 23
- B. 25
- C. 29
- D. 27

**Kunci: D**
**Pembahasan:**
- **A salah** — 23 prima (dan tidak habis dibagi 3).
- **B salah** — 25 komposit tetapi tidak habis dibagi 3 (2+5 = 7).
- **C salah** — 29 prima.
- **D benar** — **27 = 3³**, habis dibagi 3 (2+7 = 9) dan komposit.
- **Konsep kunci:** Bilangan yang habis dibagi 3 dan lebih dari 3 otomatis komposit.
- **Langkah Penyelesaian:**
  1. Cek habis dibagi 3 via jumlah digit: 27 → 2+7 = 9 ✓.
  2. Cek komposit: 27 = 3 × 9 = 3³.
  3. Jawaban D.

---

**77.** Jumlah semua bilangan prima yang **kurang dari 12** adalah ….
- A. 28
- B. 26
- C. 30
- D. 24

**Kunci: A**
**Pembahasan:**
- Prima < 12: 2, 3, 5, 7, 11.
- **A benar** — **2 + 3 + 5 + 7 + 11 = 28**.
- **B salah** — Lupa 2 (bilangan genap sering terlewat).
- **C salah** — Salah jumlah.
- **D salah** — Lupa 11.
- **Konsep kunci:** Jangan lupa memasukkan 2 ketika menjumlahkan prima dalam rentang.
- **Langkah Penyelesaian:**
  1. Daftar prima < 12: 2, 3, 5, 7, 11.
  2. Jumlahkan semuanya.
  3. Hasilnya 28 (jawaban A).

---

**78.** Faktorisasi prima dari **180** adalah ….
- A. 2² × 3 × 5²
- B. 2² × 3² × 5
- C. 2³ × 3² × 5
- D. 4 × 45

**Kunci: B**
**Pembahasan:**
- 180 = 18 × 10 = (2 × 3²)(2 × 5) = **2² × 3² × 5**.
- **A salah** — 2² × 3 × 5² = 4 × 3 × 25 = 300 ≠ 180.
- **B benar** — 2² × 3² × 5 = 4 × 9 × 5 = 180 ✓.
- **C salah** — 2³ × 3² × 5 = 8 × 9 × 5 = 360 ≠ 180.
- **D salah** — 4 dan 45 bukan bilangan prima.
- **Konsep kunci:** Gabungkan pangkat dari prima yang sama saat mengalikan dua faktorisasi.
- **Langkah Penyelesaian:**
  1. Pecah 180 = 18 × 10.
  2. Uraikan 18 = 2 × 3² dan 10 = 2 × 5.
  3. Gabungkan 2 × 2 = 2², hasil 2² × 3² × 5 (jawaban B).

---

**79.** Bilangan asli **n terkecil** (lebih dari 1) sehingga **n + 3 juga bilangan prima** adalah ….
- A. 4
- B. 3
- C. 2
- D. 5

**Kunci: C**
**Pembahasan:**
- n = 2 → 2 + 3 = 5 (prima).
- n = 3 → 3 + 3 = 6 (komposit).
- n = 4 → 4 + 3 = 7 (prima, tapi n lebih besar dari 2).
- **A salah** — 7 prima, tapi n = 2 lebih kecil.
- **B salah** — n = 3 memberi 6 yang komposit.
- **C benar** — **n = 2 memberikan 5 (prima)**.
- **D salah** — n = 5 memberi 8 yang komposit.
- **Konsep kunci:** Substitusi nilai n naik satu per satu dan uji hasilnya sampai menemukan yang prima.
- **Langkah Penyelesaian:**
  1. Cek n = 2: 2 + 3 = 5 prima ✓.
  2. Nilai n yang lebih kecil dari 2 tidak ada (n > 1).
  3. Jadi n terkecil = 2 (jawaban C).

---

**80.** Banyak faktor dari **169 = 13²** adalah ….
- A. 2
- B. 4
- C. 13
- D. 3

**Kunci: D**
**Pembahasan:**
- 169 = 13² → banyak faktor = (2+1) = **3** (faktor: 1, 13, 169).
- **A salah** — Lupa 13 sebagai faktor.
- **B salah** — Salah hitung.
- **C salah** — Banyak faktor bukan bilangan tersebut.
- **D benar** — Tepat 3 faktor.
- **Konsep kunci:** Kuadrat dari bilangan prima (p²) selalu punya tepat 3 faktor.
- **Langkah Penyelesaian:**
  1. Tulis 169 = 13².
  2. Terapkan rumus banyak faktor = (2+1).
  3. Hasilnya 3 (jawaban D).

---

**81.** Jumlah semua bilangan prima dari **11 sampai 19** adalah ….
- A. 60
- B. 58
- C. 62
- D. 56

**Kunci: A**
**Pembahasan:**
- Prima 11–19: 11, 13, 17, 19.
- **A benar** — **11 + 13 + 17 + 19 = 60**.
- **B salah** — Lupa salah satu.
- **C salah** — Salah jumlah.
- **D salah** — Salah hitung.
- **Konsep kunci:** Penjumlahan empat bilangan prima berurutan.
- **Langkah Penyelesaian:**
  1. Daftar prima 11, 13, 17, 19.
  2. Jumlahkan semuanya.
  3. Hasilnya 60 (jawaban A).

---

**82.** Bilangan ganjil yang **berakhiran 5** (selain 5 sendiri) adalah ….
- A. selalu prima
- B. selalu komposit
- C. selalu prima kembar
- D. selalu genap

**Kunci: B**
**Pembahasan:**
- Setiap bilangan berakhiran 5 habis dibagi 5 → punya faktor 5 selain 1 dan dirinya → **komposit**.
- **A salah** — Contoh 15, 25, 35 semuanya komposit.
- **B benar** — Benar untuk semua bilangan berakhiran 5 yang lebih besar dari 5.
- **C salah** — Tidak ada hubungan dengan prima kembar.
- **D salah** — Berakhiran 5 berarti ganjil, bukan genap.
- **Konsep kunci:** Aturan habis dibagi 5 mengakibatkan semua kelipatan 5 (selain 5) komposit.
- **Langkah Penyelesaian:**
  1. Ambil contoh 25 = 5 × 5 dan 35 = 5 × 7.
  2. Semuanya habis dibagi 5.
  3. Karena punya faktor 5, semua komposit (jawaban B).

---

**83.** Banyak faktor dari **2⁷ × 3² = 1152** adalah ….
- A. 14
- B. 18
- C. 24
- D. 26

**Kunci: C**
**Pembahasan:**
- Banyak faktor = (7+1)(2+1) = 8 × 3 = **24**.
- **A salah** — Salah hitung pangkat.
- **B salah** — Lupa salah satu pangkat.
- **C benar** — 24 faktor.
- **D salah** — Salah aturan.
- **Konsep kunci:** Rumus banyak faktor diterapkan langsung pada pangkat yang diberikan.
- **Langkah Penyelesaian:**
  1. Baca pangkat: 7 (dari 2⁷) dan 2 (dari 3²).
  2. Hitung (7+1)(2+1) = 8 × 3.
  3. Hasilnya 24 (jawaban C).

---

**84.** Dua **faktor prima** dari **210** yang jumlahnya **12** adalah ….
- A. 2 dan 10
- B. 3 dan 9
- C. 4 dan 8
- D. 5 dan 7

**Kunci: D**
**Pembahasan:**
- 210 = 2 × 3 × 5 × 7 → faktor prima: 2, 3, 5, 7.
- **A salah** — 10 bukan bilangan prima.
- **B salah** — 9 bukan bilangan prima.
- **C salah** — 4 dan 8 bukan bilangan prima.
- **D benar** — **5 + 7 = 12**, keduanya faktor prima dari 210.
- **Konsep kunci:** Mengambil dua basis prima dari faktorisasi lalu memeriksa jumlahnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 210 = 2 × 3 × 5 × 7.
  2. Coba pasangan basis prima: 5 + 7 = 12.
  3. Jawaban D.

---

**85.** Jumlah semua bilangan prima dari **61 sampai 69** adalah ….
- A. 128
- B. 126
- C. 130
- D. 124

**Kunci: A**
**Pembahasan:**
- Prima 61–69: 61, 67 (62 genap; 63 = 7×9; 65 = 5×13; 69 = 3×23).
- **A benar** — **61 + 67 = 128**.
- **B salah** — Lupa salah satu.
- **C salah** — Salah jumlah.
- **D salah** — Salah hitung.
- **Konsep kunci:** Menyaring komposit dengan aturan habis dibagi sebelum menjumlahkan.
- **Langkah Penyelesaian:**
  1. Coret 62, 64, 66, 68 (genap), 63, 69 (÷3), 65 (÷5).
  2. Tersisa 61 dan 67.
  3. Jumlahkan 61 + 67 = 128 (jawaban A).

---

**86.** Bilangan **233** adalah ….
- A. komposit
- B. prima
- C. habis dibagi 3
- D. habis dibagi 7

**Kunci: B**
**Pembahasan:**
- √233 ≈ 15,3. Cek 2, 3, 5, 7, 11, 13: 233 ganjil ✗, 2+3+3 = 8 ✗, akhiran 3 ✗, 233 ÷ 7 ≈ 33,3 ✗, ÷ 11 ≈ 21,2 ✗, ÷ 13 ≈ 17,9 ✗.
- **A salah** — Tidak ada pembagi prima.
- **B benar** — **233 prima**.
- **C salah** — Jumlah digit 8, tidak habis dibagi 3.
- **D salah** — 233 ÷ 7 ≈ 33,3.
- **Konsep kunci:** Bilangan dua ratusan diuji dengan pembagi prima sampai √n ≈ 15,3.
- **Langkah Penyelesaian:**
  1. Hitung √233 ≈ 15,3 → cek 2, 3, 5, 7, 11, 13.
  2. Tidak ada yang membagi 233 habis.
  3. Simpulkan 233 prima (jawaban B).

---

**87.** Banyak faktor dari **98** adalah ….
- A. 4
- B. 5
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- 98 = 2 × 7² → (1+1)(2+1) = 2 × 3 = **6**.
- **A salah** — Lupa 14 atau 49.
- **B salah** — Salah hitung.
- **C benar** — Faktor 98: 1, 2, 7, 14, 49, 98 → **6 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor untuk bentuk prima × kuadrat prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 98 = 2 × 7².
  2. Hitung (1+1)(2+1) = 6.
  3. Jawaban C.

---

**88.** Bilangan **3, 7, dan 31** adalah bilangan prima berbentuk ….
- A. n² + 1
- B. n³ − 1
- C. 2n + 1
- D. 2ⁿ − 1

**Kunci: D**
**Pembahasan:**
- 3 = 2² − 1; 7 = 2³ − 1; 31 = 2⁵ − 1 → semuanya berbentuk **2ⁿ − 1** (n prima).
- **A salah** — 2² + 1 = 5, bukan 3.
- **B salah** — n³ − 1 = (n−1)(n²+n+1) selalu komposit untuk n ≥ 2.
- **C salah** — Hanya rumus bilangan ganjil biasa, tidak khas untuk 3, 7, 31.
- **D benar** — Bentuk **Mersenne**: 2ⁿ − 1.
- **Konsep kunci:** Prima Mersenne berbentuk 2ⁿ − 1 dengan n prima dan hasilnya prima.
- **Langkah Penyelesaian:**
  1. Tulis 3 = 2²−1, 7 = 2³−1, 31 = 2⁵−1.
  2. Kenali pola 2ⁿ − 1.
  3. Jawaban D.

---

**89.** Jumlah semua bilangan prima dari **71 sampai 79** adalah ….
- A. 223
- B. 219
- C. 221
- D. 225

**Kunci: A**
**Pembahasan:**
- Prima 71–79: 71, 73, 79 (77 = 7 × 11 komposit; sisanya genap atau kelipatan 5).
- **A benar** — **71 + 73 + 79 = 223**.
- **B salah** — Lupa salah satu.
- **C salah** — Salah jumlah.
- **D salah** — Salah masukkan 77.
- **Konsep kunci:** Wajib menyaring 77 (jebakan kelipatan 7) dalam rentang 70-an.
- **Langkah Penyelesaian:**
  1. Coret 77 = 7 × 11 dan bilangan genap/berakhiran 5.
  2. Tersisa 71, 73, 79.
  3. Jumlahkan 71 + 73 + 79 = 223 (jawaban A).

---

**90.** Faktorisasi prima dari **98** adalah ….
- A. 7 × 14
- B. 2 × 7²
- C. 2² × 7
- D. 4 × 49

**Kunci: B**
**Pembahasan:**
- 98 = 2 × 49 = **2 × 7²**.
- **A salah** — 14 bukan bilangan prima.
- **B benar** — 2 × 7² = 2 × 49 = 98 ✓.
- **C salah** — 2² × 7 = 4 × 7 = 28 ≠ 98.
- **D salah** — 4 dan 49 bukan prima (dan faktorisasi belum terselesaikan).
- **Konsep kunci:** Faktorisasi prima harus menghasilkan semua pengali berupa bilangan prima.
- **Langkah Penyelesaian:**
  1. Bagi 98 dengan 2 → 98 = 2 × 49.
  2. Uraikan 49 = 7².
  3. Gabungkan menjadi 2 × 7² (jawaban B).

---

**91.** Banyak bilangan prima dari **21 sampai 39** adalah ….
- A. 5
- B. 3
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- 21, 27, 33, 39 habis ÷ 3; 25 habis ÷ 5; 35 = 5 × 7 → komposit.
- **A salah** — Salah masukkan bilangan komposit.
- **B salah** — Lupa 31.
- **C salah** — Salah hitung.
- **D benar** — **23, 29, 31, 37** → **4 prima**.
- **Konsep kunci:** Menyaring rentang panjang dengan aturan habis dibagi, lalu menguji sisa.
- **Langkah Penyelesaian:**
  1. Coret kelipatan 3 (21, 27, 33, 39) dan kelipatan 5 (25, 35).
  2. Uji sisa 23, 29, 31, 37 → semuanya prima.
  3. Banyaknya 4 (jawaban D).

---

**92.** Faktor **prima persekutuan** dari **12 dan 30** adalah ….
- A. 2, 3, dan 5
- B. 3 dan 5
- C. 2 dan 3
- D. 5 saja

**Kunci: C**
**Pembahasan:**
- 12 = 2² × 3; 30 = 2 × 3 × 5.
- **A salah** — 5 ada di 30 tetapi tidak ada di 12.
- **B salah** — 5 tidak ada di 12.
- **C benar** — Persekutuan basis prima: **{2, 3}**.
- **D salah** — 5 bukan faktor dari 12.
- **Konsep kunci:** Faktor prima persekutuan = irisan himpunan basis prima kedua bilangan.
- **Langkah Penyelesaian:**
  1. Faktorkan 12 = 2² × 3 dan 30 = 2 × 3 × 5.
  2. Iriskan basis primanya.
  3. Hasilnya {2, 3} (jawaban C).

---

**93.** Jika **a = 2² × 3 × 7**, banyak faktor dari **a** adalah ….
- A. 12
- B. 10
- C. 8
- D. 14

**Kunci: A**
**Pembahasan:**
- a = 84; banyak faktor = (2+1)(1+1)(1+1) = 3 × 2 × 2 = **12**.
- **A benar** — 12 faktor.
- **B salah** — Salah hitung.
- **C salah** — Lupa menambahkan 1.
- **D salah** — Salah aturan.
- **Konsep kunci:** Rumus (a+1)(b+1)(c+1) untuk tiga prima penyusun.
- **Langkah Penyelesaian:**
  1. Baca pangkat: 2, 1, 1.
  2. Hitung (2+1)(1+1)(1+1) = 3 × 2 × 2.
  3. Hasilnya 12 (jawaban A).

---

**94.** Jika **a = 2³ × 5**, banyak faktor dari **a** adalah ….
- A. 6
- B. 8
- C. 10
- D. 12

**Kunci: B**
**Pembahasan:**
- Banyak faktor = (3+1)(1+1) = 4 × 2 = **8**.
- **A salah** — Lupa menambahkan 1.
- **B benar** — 8 faktor.
- **C salah** — Salah hitung.
- **D salah** — Salah aturan.
- **Konsep kunci:** Rumus (a+1)(b+1) untuk dua prima penyusun.
- **Langkah Penyelesaian:**
  1. Baca pangkat: 3 dan 1.
  2. Hitung (3+1)(1+1) = 4 × 2.
  3. Hasilnya 8 (jawaban B).

---

**95.** Bilangan **215 = 5 × 43** memiliki faktor sebanyak ….
- A. 3
- B. 8
- C. 4
- D. 6

**Kunci: C**
**Pembahasan:**
- 215 = 5 × 43 (dua prima berbeda) → (1+1)(1+1) = **4**.
- **A salah** — Lupa 215 sendiri.
- **B salah** — Salah aturan.
- **C benar** — Faktor: 1, 5, 43, 215 → **4 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Hasil kali dua prima berbeda (semiprime) selalu punya tepat 4 faktor.
- **Langkah Penyelesaian:**
  1. Tulis 215 = 5 × 43 dengan kedua pengali prima.
  2. Terapkan (1+1)(1+1).
  3. Hasilnya 4 (jawaban C).

---

**96.** Jumlah semua **faktor prima yang berbeda** dari **84** adalah ….
- A. 10
- B. 11
- C. 13
- D. 12

**Kunci: D**
**Pembahasan:**
- 84 = 2² × 3 × 7 → faktor prima berbeda: 2, 3, 7.
- **A salah** — Salah hitung (mis. lupa 7).
- **B salah** — Salah hitung.
- **C salah** — Salah hitung.
- **D benar** — **2 + 3 + 7 = 12**.
- **Konsep kunci:** "Jumlah faktor prima berbeda" menjumlahkan basis primanya (pangkat tidak dipakai).
- **Langkah Penyelesaian:**
  1. Faktorkan 84 = 2² × 3 × 7.
  2. Ambil basis prima 2, 3, 7.
  3. Jumlahkan 2 + 3 + 7 = 12 (jawaban D).

---

**97.** Bilangan prima **p < 20** yang memenuhi **p + 4 juga prima** adalah ….
- A. 3, 7, 13, dan 19
- B. 2, 5, dan 11
- C. 5 dan 17
- D. 11 saja

**Kunci: A**
**Pembahasan:**
- Uji tiap p: 3 → 7 ✓; 7 → 11 ✓; 13 → 17 ✓; 19 → 23 ✓.
- p = 2 → 6 ✗; 5 → 9 ✗; 11 → 15 ✗; 17 → 21 ✗.
- **A benar** — {3, 7, 13, 19} semuanya memenuhi.
- **B salah** — 5 memberi 9, 11 memberi 15, keduanya komposit.
- **C salah** — 17 memberi 21 = 3 × 7.
- **D salah** — 11 memberi 15 yang komposit.
- **Konsep kunci:** Cousin prime menuntut p dan p + 4 keduanya prima.
- **Langkah Penyelesaian:**
  1. Untuk setiap p < 20, hitung p + 4.
  2. Cek keprimaan hasilnya satu per satu.
  3. Yang memenuhi: 3, 7, 13, 19 (jawaban A).

---

**98.** Bilangan prima **terkecil yang lebih besar dari 200** adalah ….
- A. 203
- B. 211
- C. 207
- D. 209

**Kunci: B**
**Pembahasan:**
- 201 = 3 × 67; 202 genap; 203 = 7 × 29; 204 genap; 205 = 5 × 41; 206 genap; 207 = 9 × 23; 208 genap; 209 = 11 × 19; 210 genap; **211** prima.
- **A salah** — 203 = 7 × 29.
- **B benar** — **211 prima** (√211 ≈ 14,5; cek 2, 3, 5, 7, 11, 13 → tidak ada yang habis).
- **C salah** — 207 = 9 × 23 = 3² × 23.
- **D salah** — 209 = 11 × 19.
- **Konsep kunci:** Mencari prima terkecil di atas batas dengan menguji bilangan berurutan satu per satu.
- **Langkah Penyelesaian:**
  1. Periksa 201 sampai 210: semuanya komposit.
  2. Cek 211 dengan pembagi prima ≤ √211 ≈ 14,5.
  3. Tidak ada yang membagi habis → 211 prima (jawaban B).

---

**99.** Banyak faktor dari **120** adalah ….
- A. 12
- B. 14
- C. 16
- D. 18

**Kunci: C**
**Pembahasan:**
- 120 = 2³ × 3 × 5 → (3+1)(1+1)(1+1) = 4 × 2 × 2 = **16**.
- **A salah** — Lupa menambahkan 1.
- **B salah** — Salah hitung.
- **C benar** — 16 faktor.
- **D salah** — Salah aturan.
- **Konsep kunci:** Banyak faktor untuk bentuk pangkat × dua prima sederhana.
- **Langkah Penyelesaian:**
  1. Faktorkan 120 = 2³ × 3 × 5.
  2. Hitung (3+1)(1+1)(1+1) = 16.
  3. Jawaban C.

---

**100.** Jumlah dua bilangan **prima kembar terbesar** yang kurang dari **50** adalah ….
- A. 80
- B. 82
- C. 86
- D. 84

**Kunci: D**
**Pembahasan:**
- Twin prime < 50: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43).
- **A salah** — Salah pasangan.
- **B salah** — Salah hitung.
- **C salah** — Salah pasangan.
- **D benar** — Pasangan terbesar **(41, 43)** → **41 + 43 = 84**.
- **Konsep kunci:** Daftar twin prime, pilih yang terbesar dalam batas, lalu jumlahkan anggotanya.
- **Langkah Penyelesaian:**
  1. Tulis pasangan twin prime < 50.
  2. Ambil pasangan terbesar: (41, 43).
  3. Jumlahkan 41 + 43 = 84 (jawaban D).

---

## BAGIAN III · RINGKASAN & KUNCI

### Tabel Kunci Jawaban (100 soal)

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1.A  | 11.D  | 21.A  | 31.C  | 41.A  |
| 2.B  | 12.C  | 22.B  | 32.D  | 42.B  |
| 3.A  | 13.A  | 23.C  | 33.A  | 43.C  |
| 4.B  | 14.B  | 24.D  | 34.B  | 44.D  |
| 5.C  | 15.C  | 25.A  | 35.C  | 45.A  |
| 6.D  | 16.D  | 26.B  | 36.D  | 46.B  |
| 7.B  | 17.A  | 27.C  | 37.A  | 47.C  |
| 8.A  | 18.B  | 28.D  | 38.B  | 48.D  |
| 9.A  | 19.C  | 29.A  | 39.C  | 49.A  |
| 10.B | 20.D  | 30.B  | 40.D  | 50.B  |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51.C  | 61.A  | 71.C  | 81.A  | 91.D   |
| 52.D  | 62.B  | 72.D  | 82.B  | 92.C   |
| 53.A  | 63.C  | 73.A  | 83.C  | 93.A   |
| 54.B  | 64.D  | 74.B  | 84.D  | 94.B   |
| 55.C  | 65.A  | 75.C  | 85.A  | 95.C   |
| 56.D  | 66.B  | 76.D  | 86.B  | 96.D   |
| 57.A  | 67.C  | 77.A  | 87.C  | 97.A   |
| 58.B  | 68.D  | 78.B  | 88.D  | 98.B   |
| 59.C  | 69.A  | 79.C  | 89.A  | 99.C   |
| 60.D  | 70.B  | 80.D  | 90.B  | 100.D  |

## Distribusi Kunci

**A: 26 · B: 26 · C: 24 · D: 24** (total 100; semua dalam toleransi ±5 dari target 25/25/25/25 sesuai standar OSN).

## Strategi Belajar Bilangan Prima & Komposit

1. **Hafal 25 prima ≤ 100** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97). Ini wajib.
2. **1 BUKAN prima, BUKAN komposit** — outlier istimewa.
3. **2 = satu-satunya prima genap.** Semua genap > 2 pasti komposit.
4. **Tes prima cepat:** cek pembagi prima ≤ **√n**. Untuk n ≤ 100 cukup cek 2, 3, 5, 7; untuk n tiga digit tambahkan 11, 13 bila perlu.
5. **Jebakan ganjil-bukan-prima:** 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95, 99 — semua ganjil tapi **komposit**!
6. **Wajib cek pembagi 7** untuk 49, 77, 91, 119, 133, 161, 203, 217, 259, 287, 301, 329, 343, 371, 391 (banyak yang lolos cek 2, 3, 5 tapi gugur di 7).
7. **Saringan Eratosthenes** — algoritma cepat cari semua prima ≤ N.
8. **Banyak faktor n = p^a × q^b × r^c**: rumus **(a+1)(b+1)(c+1)**. Jangan tertukar dengan jumlah nilai faktor.
9. **Twin prime**: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73). **Cousin (selisih 4)**: (3,7), (7,11), (13,17), (19,23), (37,41), (43,47). **Mersenne prime**: 3, 7, 31, 127, 8191.
10. **Faktorisasi prima** → fondasi FPB/KPK, penyederhanaan pecahan, dan kriptografi RSA modern.

---

*Selesai. Sub-bab 01d - Bilangan Prima & Komposit (Sedang).*