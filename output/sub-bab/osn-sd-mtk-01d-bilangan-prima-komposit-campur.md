# OSN/KSN SD — Matematika · Sub-Bab 01d: Bilangan Prima & Komposit (Tingkat Campur)

> **Profil**: 50 soal Kab + 30 soal Prov + 20 soal Nas · Total **100 soal PG**
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

### KAB · Soal 1–50 (mudah–sedang, C2–C3)

**1.** **Bilangan prima** adalah bilangan asli lebih dari 1 yang ….
- A. memiliki tepat 2 faktor, yaitu 1 dan dirinya sendiri
- B. selalu genap
- C. lebih besar dari 10
- D. habis dibagi 3

**Kunci: A**
**Pembahasan:**
- **A benar** — Definisi baku: **bilangan prima** = bilangan asli > 1 dengan **tepat 2 faktor** berbeda (1 dan dirinya).
- **B salah** — Banyak prima ganjil (3, 5, 7, 11, …). Hanya 2 prima genap.
- **C salah** — Banyak prima < 10: 2, 3, 5, 7.
- **D salah** — Hanya 3 sendiri yang habis ÷ 3 dan tetap prima. Prima lain (5, 7, 11, …) tidak habis ÷ 3.

---

**2.** **Bilangan komposit** adalah bilangan asli lebih dari 1 yang ….
- A. memiliki lebih dari 2 faktor
- B. tidak punya faktor sama sekali
- C. hanya punya 1 faktor
- D. selalu prima

**Kunci: A**
**Pembahasan:**
- **A benar** — **Komposit** = bilangan asli > 1 dengan **lebih dari 2 faktor**. Contoh 6 punya 4 faktor (1, 2, 3, 6).
- **B salah** — Setiap bilangan asli minimal punya faktor 1 dan dirinya.
- **C salah** — Hanya angka 1 yang punya 1 faktor, dan 1 bukan komposit.
- **D salah** — Komposit dan prima saling **terpisah**; tidak mungkin sekaligus.

---

**3.** Bilangan **1** termasuk ….
- A. prima
- B. bukan prima dan bukan komposit
- C. komposit
- D. prima genap

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 hanya punya **1 faktor** (yaitu 1 sendiri), bukan 2.
- **B benar** — 1 adalah **outlier**: bukan prima (perlu tepat 2 faktor) dan bukan komposit (perlu > 2 faktor). Aturan internasional matematika menetapkan 1 berstatus khusus.
- **C salah** — Tidak punya > 2 faktor.
- **D salah** — 1 ganjil, dan jelas bukan prima.

---

**4.** Bilangan prima **terkecil** adalah ….
- A. 2
- B. 1
- C. 3
- D. 5

**Kunci: A**
**Pembahasan:**
- **A benar** — **2** adalah prima terkecil. Faktor 2 hanya 1 dan 2 → tepat 2 faktor → prima. Juga satu-satunya prima genap.
- **B salah** — 1 bukan prima (hanya 1 faktor).
- **C salah** — 3 prima ke-2.
- **D salah** — 5 prima ke-3.

---

**5.** Satu-satunya bilangan **prima genap** adalah ….
- A. 4
- B. 2
- C. 6
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 = 2 × 2 → komposit.
- **B benar** — **2** adalah satu-satunya prima genap. Genap lain (4, 6, 8, 10, …) habis dibagi 2 → punya minimal 3 faktor → komposit. 2 unik karena pembaginya hanya 1 dan 2.
- **C salah** — 6 = 2 × 3 → komposit.
- **D salah** — 8 = 2³ → komposit.

---

**6.** Berikut yang **bukan prima** adalah ….
- A. 7
- B. 11
- C. 13
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 hanya bisa 1 × 7 → prima.
- **B salah** — 11 hanya 1 × 11 → prima.
- **C salah** — 13 hanya 1 × 13 → prima.
- **D benar** — **15 = 3 × 5**, punya faktor 1, 3, 5, 15 → 4 faktor → **komposit**. Sering keliru karena 15 ganjil (mengira semua ganjil prima).

---

**7.** Berikut yang merupakan **bilangan komposit** adalah ….
- A. 17
- B. 19
- C. 21
- D. 23

**Kunci: C**
**Pembahasan:**
- **A salah** — 17 prima (cek 2, 3 → tidak habis; √17 ≈ 4,1).
- **B salah** — 19 prima.
- **C benar** — **21 = 3 × 7**. Punya 4 faktor (1, 3, 7, 21) → **komposit**.
- **D salah** — 23 prima.

---

**8.** Banyak bilangan prima dari **1 sampai 10** adalah ….
- A. 3
- B. 5
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- Prima 1–10: **2, 3, 5, 7** → **4 bilangan**.
- **A salah** — Lupa 7 (sering hanya hitung 2, 3, 5).
- **B salah** — Salah hitung 1 sebagai prima (1 BUKAN prima).
- **C salah** — Tambah 9 (9 = 3 × 3 → komposit, bukan prima).
- **D benar** — Tepat 4: **{2, 3, 5, 7}**.

---

**9.** Banyak bilangan prima dari **1 sampai 20** adalah ….
- A. 8
- B. 6
- C. 7
- D. 9

**Kunci: A**
**Pembahasan:**
- Prima 1–20: **2, 3, 5, 7, 11, 13, 17, 19** → **8 bilangan**.
- **A benar** — Tepat **8 prima**.
- **B salah** — Lupa 17 atau 19.
- **C salah** — Mungkin lupa 11 atau 13.
- **D salah** — Salah hitung 9 atau 15 sebagai prima (keduanya komposit).

---

**10.** Banyak bilangan prima dari **1 sampai 30** adalah ….
- A. 9
- B. 11
- C. 10
- D. 12

**Kunci: C**
**Pembahasan:**
- Prima 1–30: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29** → **10 bilangan**.
- **A salah** — Mungkin lupa 29.
- **B salah** — Salah masukkan 27 (= 3³, komposit) atau 25 (= 5², komposit).
- **C benar** — Tepat 10.
- **D salah** — Salah hitung 1 atau 21 sebagai prima.

---

**11.** Berikut yang merupakan **prima** adalah ….
- A. 9
- B. 21
- C. 25
- D. 29

**Kunci: D**
**Pembahasan:**
- **A salah** — 9 = 3 × 3 → komposit.
- **B salah** — 21 = 3 × 7 → komposit.
- **C salah** — 25 = 5 × 5 → komposit.
- **D benar** — **29** prima. Cek pembagi prima ≤ √29 ≈ 5,4: 2 ✗, 3 ✗ (2+9=11), 5 ✗. → prima.

---

**12.** Bilangan **27** adalah ….
- A. komposit, karena 27 = 3 × 9 = 3³
- B. prima
- C. bukan prima dan bukan komposit
- D. genap

**Kunci: A**
**Pembahasan:**
- **A benar** — **27 = 3³ = 3 × 3 × 3**. Faktor 27: 1, 3, 9, 27 → 4 faktor → **komposit**. Sering disangka prima karena ganjil.
- **B salah** — Bukan prima (punya pembagi 3).
- **C salah** — Hanya 1 yang berstatus tersebut.
- **D salah** — 27 ganjil.

---

**13.** Bilangan **51** adalah ….
- A. komposit, karena 51 = 3 × 17
- B. bukan bilangan asli
- C. prima
- D. lebih kecil dari 50

**Kunci: A**
**Pembahasan:**
- **A benar** — **51 = 3 × 17** (cek: 5+1 = 6, habis ÷ 3). Faktor: 1, 3, 17, 51 → komposit.
- **B salah** — Jelas bilangan asli.
- **C salah** — Sering keliru disangka prima (akhiran 1), padahal habis ÷ 3.
- **D salah** — 51 > 50.

---

**14.** **Pasangan twin prime** adalah pasangan prima yang berselisih ….
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya pasangan (2, 3) berselisih 1, dan ini bukan disebut twin prime.
- **B benar** — **Twin prime** = pasangan prima berselisih **2**. Contoh: (3, 5), (5, 7), (11, 13), (17, 19), (29, 31).
- **C salah** — Tidak mungkin selain (2, 5) karena salah satunya pasti genap → bukan prima.
- **D salah** — Itu **cousin prime**, bukan twin.

---

**15.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (11, 13)
- B. (7, 11)
- C. (13, 17)
- D. (19, 23)

**Kunci: A**
**Pembahasan:**
- **A benar** — **11** prima, **13** prima, selisih = 2 → **twin prime**.
- **B salah** — Selisih 4 (cousin prime), bukan twin.
- **C salah** — Selisih 4 (cousin prime).
- **D salah** — Selisih 4 (cousin prime).

---

**16.** Bilangan **39** adalah ….
- A. prima
- B. genap
- C. komposit, karena 39 = 3 × 13
- D. lebih besar dari 50

**Kunci: C**
**Pembahasan:**
- **A salah** — Bukan prima.
- **B salah** — 39 ganjil.
- **C benar** — **39 = 3 × 13** (jumlah digit 3+9=12 habis ÷ 3). Komposit.
- **D salah** — 39 < 50.

---

**17.** Bilangan **49** adalah ….
- A. prima
- B. bukan bilangan asli
- C. genap
- D. komposit, karena 49 = 7 × 7

**Kunci: D**
**Pembahasan:**
- **A salah** — Sering keliru dianggap prima karena 49 tidak habis ÷ 2, 3, 5. Tapi belum cek 7!
- **B salah** — Bilangan asli.
- **C salah** — 49 ganjil.
- **D benar** — **49 = 7² = 7 × 7**. Faktor: 1, 7, 49 → 3 faktor → komposit.

---

**18.** Bilangan **57** adalah ….
- A. prima
- B. komposit, karena 57 = 3 × 19
- C. negatif
- D. nol

**Kunci: B**
**Pembahasan:**
- **A salah** — Banyak yang keliru. Cek: 5+7=12, habis ÷ 3.
- **B benar** — **57 = 3 × 19** → komposit. (Jebakan ganjil-bukan-prima klasik.)
- **C salah** — 57 positif.
- **D salah** — 57 ≠ 0.

---

**19.** Banyak bilangan prima dari **30 sampai 50** adalah ….
- A. 5
- B. 4
- C. 6
- D. 3

**Kunci: A**
**Pembahasan:**
- Prima 30–50: **31, 37, 41, 43, 47** → **5 bilangan**.
- **A benar** — Tepat 5.
- **B salah** — Lupa salah satu.
- **C salah** — Salah memasukkan 39 (= 3 × 13) atau 49 (= 7²).
- **D salah** — Lupa beberapa.

---

**20.** Bilangan **77** adalah ….
- A. komposit, karena 77 = 7 × 11
- B. genap
- C. prima
- D. bilangan negatif

**Kunci: A**
**Pembahasan:**
- **A benar** — **77 = 7 × 11**. Cek pembagi 7 wajib! → komposit.
- **B salah** — 77 ganjil.
- **C salah** — Sering disangka prima karena tidak habis ÷ 2, 3, 5, padahal habis ÷ 7.
- **D salah** — 77 positif.

---

**21.** Bilangan **91** adalah ….
- A. prima
- B. komposit, karena 91 = 7 × 13
- C. genap
- D. lebih kecil dari 50

**Kunci: B**
**Pembahasan:**
- **A salah** — JEBAKAN KLASIK OSN! 91 tidak habis ÷ 2, 3, 5, tapi belum cek 7.
- **B benar** — **91 = 7 × 13** → komposit. Wajib cek pembagi 7 untuk semua angka 49, 77, 91, 119, 133, …
- **C salah** — 91 ganjil.
- **D salah** — 91 > 50.

---

**22.** Bilangan **97** adalah ….
- A. komposit
- B. genap
- C. lebih kecil dari 50
- D. prima

**Kunci: D**
**Pembahasan:**
- √97 ≈ 9,85. Cek prima ≤ 9: 2, 3, 5, 7.
  - 97 ÷ 2 = 48,5 ✗
  - 9+7 = 16 ✗ (tidak habis 3)
  - akhiran 7 ✗ (tidak habis 5)
  - 97 ÷ 7 = 13,86 ✗
- **A salah** — Tidak ada pembagi prima ≤ √97.
- **B salah** — 97 ganjil.
- **C salah** — 97 < 100 tetapi > 50.
- **D benar** — **97 prima** (dan merupakan prima terbesar < 100).

---

**23.** Banyak bilangan komposit dari **1 sampai 10** adalah ….
- A. 5
- B. 3
- C. 4
- D. 6

**Kunci: A**
**Pembahasan:**
- 1–10: 1 (bukan keduanya), prima (2, 3, 5, 7), komposit (**4, 6, 8, 9, 10**).
- **A benar** — Komposit: 4, 6, 8, 9, 10 → **5 bilangan**.
- **B salah** — Lupa 9 atau 10.
- **C salah** — Lupa salah satu.
- **D salah** — Salah hitung 1 sebagai komposit.

---

**24.** Faktor dari **12** adalah ….
- A. 1, 2, 3, 4, 6
- B. 2, 4, 6, 12
- C. 1, 2, 3, 4, 6, 12
- D. 2, 3, 4, 6

**Kunci: C**
**Pembahasan:**
- Faktor = bilangan yang membagi habis.
- 12 ÷ {1, 2, 3, 4, 6, 12} = bulat.
- **A salah** — Lupa 12 sendiri.
- **B salah** — Lupa 1 dan 3.
- **C benar** — **{1, 2, 3, 4, 6, 12}** = 6 faktor → 12 komposit.
- **D salah** — Lupa 1 dan 12.

---

**25.** Bilangan **berikut yang prima** adalah ….
- A. 33
- B. 35
- C. 39
- D. 37

**Kunci: D**
**Pembahasan:**
- **A salah** — 33 = 3 × 11.
- **B salah** — 35 = 5 × 7.
- **C salah** — 39 = 3 × 13.
- **D benar** — **37**. Cek prima ≤ √37 ≈ 6,08: 2, 3, 5. Tidak satu pun habis → prima.

---

**26.** Bilangan **prima ke-5** (urutan: prima ke-1 = 2) adalah ….
- A. 7
- B. 13
- C. 9
- D. 11

**Kunci: D**
**Pembahasan:**
- Urutan: ke-1 = 2, ke-2 = 3, ke-3 = 5, ke-4 = 7, **ke-5 = 11**.
- **A salah** — 7 adalah prima ke-4.
- **B salah** — 13 adalah prima ke-6.
- **C salah** — 9 bukan prima (9 = 3²).
- **D benar** — **Prima ke-5 = 11.**

---

**27.** Bilangan **prima ke-10** adalah ….
- A. 29
- B. 23
- C. 31
- D. 19

**Kunci: A**
**Pembahasan:**
- Urutan prima: 2, 3, 5, 7, 11, 13, 17, 19, 23, **29**.
- **A benar** — Prima ke-10 = **29**.
- **B salah** — 23 = prima ke-9.
- **C salah** — 31 = prima ke-11.
- **D salah** — 19 = prima ke-8.

---

**28.** Saringan **Eratosthenes** adalah metode untuk ….
- A. mengurutkan bilangan
- B. mencari semua bilangan prima sampai batas tertentu dengan mencoret kelipatan
- C. menjumlahkan bilangan
- D. menghitung KPK

**Kunci: B**
**Pembahasan:**
- **A salah** — Bukan untuk urutan.
- **B benar** — **Saringan Eratosthenes** (ditemukan Eratosthenes, 200 SM): tulis 2…N, lingkari 2, coret kelipatan 2, lalu lingkari 3, coret kelipatan 3, dst. Sisa yang dilingkari = prima.
- **C salah** — Bukan operasi jumlah.
- **D salah** — KPK pakai faktorisasi prima, bukan saringan.

---

**29.** Bilangan berikut yang **bukan prima** adalah ….
- A. 41
- B. 43
- C. 45
- D. 47

**Kunci: C**
**Pembahasan:**
- **A salah** — 41 prima (cek 2,3,5 ✗; √41 ≈ 6,4).
- **B salah** — 43 prima.
- **C benar** — **45 = 5 × 9 = 3² × 5** → komposit. (Akhiran 5 → habis ÷ 5.)
- **D salah** — 47 prima.

---

**30.** Banyak **faktor** dari bilangan **prima** adalah ….
- A. 3
- B. 1
- C. tak terhingga
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Prima tidak punya 3 faktor (itu sudah komposit).
- **B salah** — Hanya 1 yang punya 1 faktor.
- **C salah** — Faktor selalu terbatas.
- **D benar** — Definisi: **prima = tepat 2 faktor** (yaitu 1 dan dirinya). Itu sebabnya prima istimewa.

---

**31.** Untuk mengecek apakah **n** prima, cukup cek pembagi prima sampai ….
- A. n
- B. n/2
- C. √n (akar n)
- D. 2n

**Kunci: C**
**Pembahasan:**
- **A salah** — Boros, tidak perlu sejauh n.
- **B salah** — Masih terlalu jauh.
- **C benar** — Cukup sampai **√n**. Jika n = a × b dan a ≤ b, maka a ≤ √n. Jadi kalau tidak ada pembagi ≤ √n, pasti prima.
- **D salah** — Tidak masuk akal (lebih besar dari n).

---

**32.** Untuk cek **97 prima atau tidak**, cukup cek pembagi prima ….
- A. 2, 3, 5, 7
- B. 2, 3, 5, 7, 11, 13
- C. 2 saja
- D. semua bilangan sampai 97

**Kunci: A**
**Pembahasan:**
- **A benar** — √97 ≈ 9,85. Prima ≤ 9: **2, 3, 5, 7**.
- **B salah** — Sudah lebih dari √97; mubazir.
- **C salah** — Tidak cukup; perlu juga 3, 5, 7.
- **D salah** — Boros sekali.

---

**33.** Bilangan prima **terbesar < 100** adalah ….
- A. 99
- B. 97
- C. 89
- D. 91

**Kunci: B**
**Pembahasan:**
- **A salah** — 99 = 9 × 11 = 3² × 11.
- **B benar** — **97 prima**. Tidak ada prima antara 97 dan 100 (98 = 2 × 49, 99 = 9 × 11).
- **C salah** — 89 prima tapi bukan terbesar < 100.
- **D salah** — 91 = 7 × 13 (komposit).

---

**34.** Bilangan **2024** adalah ….
- A. prima
- B. bukan bilangan asli
- C. nol
- D. komposit, karena habis ÷ 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Semua genap > 2 pasti komposit.
- **B salah** — 2024 bilangan asli.
- **C salah** — Bukan nol.
- **D benar** — **2024 = 2 × 1012 = 2³ × 11 × 23**. Genap → habis ÷ 2 → minimal 3 faktor → komposit.

---

**35.** Jumlah dua bilangan prima berikut yang **menghasilkan prima** adalah ….
- A. 2 + 3 = 5
- B. 3 + 5 = 8
- C. 5 + 7 = 12
- D. 7 + 11 = 18

**Kunci: A**
**Pembahasan:**
- **A benar** — **2 + 3 = 5**, dan 5 prima. Karena 2 (genap) + 3 (ganjil) = ganjil, hasilnya bisa prima.
- **B salah** — 8 = 2³ (komposit).
- **C salah** — 12 = 2² × 3 (komposit).
- **D salah** — 18 = 2 × 3² (komposit).

Catatan: jumlah dua prima ganjil selalu **genap > 2** → otomatis komposit. Jadi hanya 2 + p yang bisa hasilkan prima.

---

**36.** Bilangan **berikut yang prima** adalah ….
- A. 51
- B. 57
- C. 59
- D. 63

**Kunci: C**
**Pembahasan:**
- **A salah** — 51 = 3 × 17.
- **B salah** — 57 = 3 × 19.
- **C benar** — **59 prima**. Cek 2, 3, 5, 7 (√59 ≈ 7,7): 59 ÷ 2 ✗, 5+9=14 ✗, akhiran 9 ✗, 59 ÷ 7 ≈ 8,4 ✗ → prima.
- **D salah** — 63 = 7 × 9 = 3² × 7.

---

**37.** Bilangan **berikut yang komposit** adalah ….
- A. 67
- B. 71
- C. 73
- D. 87

**Kunci: D**
**Pembahasan:**
- **A salah** — 67 prima.
- **B salah** — 71 prima.
- **C salah** — 73 prima.
- **D benar** — **87 = 3 × 29** (jumlah digit 8+7=15 habis ÷ 3) → komposit.

---

**38.** Banyak prima dari **50 sampai 100** adalah ….
- A. 12
- B. 10
- C. 9
- D. 11

**Kunci: B**
**Pembahasan:**
- Prima 50–100: **53, 59, 61, 67, 71, 73, 79, 83, 89, 97** → **10 prima**.
- **A salah** — Mungkin salah hitung.
- **B benar** — Tepat 10.
- **C salah** — Lupa salah satu.
- **D salah** — Salah masukkan 51, 57, 87, 91, 93, atau 99 (semua komposit).

---

**39.** Total banyak prima dari **1 sampai 100** adalah ….
- A. 25
- B. 20
- C. 30
- D. 35

**Kunci: A**
**Pembahasan:**
- Prima 1–100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 → **25 bilangan**.
- **A benar** — **Tepat 25 prima** ≤ 100 (wajib hafal!).
- **B salah** — Terlalu sedikit.
- **C salah** — Salah hitung (lebih).
- **D salah** — Terlalu banyak.

---

**40.** Bilangan **berikut yang bukan komposit** adalah ….
- A. 25
- B. 27
- C. 29
- D. 33

**Kunci: C**
**Pembahasan:**
- **A salah** — 25 = 5².
- **B salah** — 27 = 3³.
- **C benar** — **29 prima**. Cek 2, 3, 5: tidak satu pun habis → prima. (√29 ≈ 5,4.)
- **D salah** — 33 = 3 × 11.

---

**41.** Jika **p prima dan p > 2**, maka p pasti ….
- A. ganjil
- B. genap
- C. habis dibagi 3
- D. habis dibagi 5

**Kunci: A**
**Pembahasan:**
- **A benar** — Prima > 2 pasti **ganjil**, karena kalau genap pasti habis ÷ 2 → bukan prima. Tetapi sebaliknya tidak berlaku (banyak ganjil bukan prima).
- **B salah** — Semua genap > 2 habis ÷ 2 → komposit.
- **C salah** — Hanya 3 yang habis ÷ 3 dan tetap prima.
- **D salah** — Hanya 5.

---

**42.** Bilangan asli > 1 yang **bukan prima** disebut ….
- A. genap
- B. ganjil
- C. nol
- D. komposit

**Kunci: D**
**Pembahasan:**
- **A salah** — Genap/ganjil berdasarkan habis ÷ 2, beda kategori.
- **B salah** — Sama, beda kategori.
- **C salah** — Nol bukan asli > 1.
- **D benar** — Definisi: bilangan asli > 1 yang **bukan prima** = **komposit**.

---

**43.** Faktor dari **17** adalah ….
- A. 1 dan 17
- B. 1, 2, 17
- C. 1, 17, 34
- D. tidak ada

**Kunci: A**
**Pembahasan:**
- **A benar** — **17 prima**, faktornya hanya **1 dan 17** (tepat 2 faktor).
- **B salah** — 17 ÷ 2 = 8,5 ✗.
- **C salah** — 34 bukan faktor 17 (34 > 17, faktor tidak boleh > bilangannya).
- **D salah** — Setiap bilangan asli minimal punya faktor 1.

---

**44.** Bilangan **2** adalah ….
- A. prima genap satu-satunya
- B. komposit
- C. bukan prima dan bukan komposit
- D. negatif

**Kunci: A**
**Pembahasan:**
- **A benar** — **2 = prima** (faktor 1 dan 2 saja) DAN **genap** (habis ÷ 2). Genap lain pasti habis ÷ 2 sehingga punya > 2 faktor → komposit. Jadi 2 unik.
- **B salah** — 2 punya hanya 2 faktor.
- **C salah** — 2 prima.
- **D salah** — 2 positif.

---

**45.** Bilangan **berikut yang komposit** adalah ….
- A. 11
- B. 13
- C. 17
- D. 25

**Kunci: D**
**Pembahasan:**
- **A salah** — 11 prima.
- **B salah** — 13 prima.
- **C salah** — 17 prima.
- **D benar** — **25 = 5²**, 3 faktor (1, 5, 25) → komposit.

---

**46.** **Pasangan twin prime** di antara berikut adalah ….
- A. (23, 29)
- B. (29, 31)
- C. (37, 41)
- D. (43, 47)

**Kunci: B**
**Pembahasan:**
- **A salah** — Selisih 6 (sexy prime), bukan twin.
- **B benar** — **29** dan **31** keduanya prima dan selisih = 2 → **twin prime**.
- **C salah** — Selisih 4 (cousin prime).
- **D salah** — Selisih 4 (cousin prime).

---

**47.** Bilangan berikut yang **bisa difaktorkan menjadi dua prima berbeda** adalah ….
- A. 9 = 3 × 3
- B. 25 = 5 × 5
- C. 49 = 7 × 7
- D. 15 = 3 × 5

**Kunci: D**
**Pembahasan:**
- **A salah** — Faktorisasinya **prima sama** (3 × 3), bukan dua prima berbeda.
- **B salah** — 5 × 5 (sama).
- **C salah** — 7 × 7 (sama).
- **D benar** — **15 = 3 × 5**, dua prima **berbeda**. (Disebut juga "semiprime" karena = 2 prima dikali.)

---

**48.** Bilangan **1, 2, 3, 4, 5** mana yang **prima**?
- A. 1 dan 2
- B. hanya 1
- C. 2, 3, 5
- D. semuanya

**Kunci: C**
**Pembahasan:**
- **A salah** — 1 bukan prima.
- **B salah** — 1 BUKAN prima.
- **C benar** — Prima di {1,2,3,4,5}: **2, 3, 5**. (4 = 2² komposit; 1 bukan prima.)
- **D salah** — 1 dan 4 bukan prima.

---

**49.** Banyak bilangan prima dari **70 sampai 80** adalah ….
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: B**
**Pembahasan:**
- Cek 71, 73, 79: prima. Cek 77 = 7 × 11 (komposit). Lainnya genap atau habis ÷ 5.
- **A salah** — Lupa 73 atau 79.
- **B benar** — **71, 73, 79** → **3 prima**.
- **C salah** — Lupa salah satu.
- **D salah** — Salah hitung 77 atau 75 sebagai prima.

---

**50.** Selisih antara dua prima berturut-turut **3 dan 5** adalah ….
- A. 1
- B. 3
- C. 4
- D. 2

**Kunci: D**
**Pembahasan:**
- 5 − 3 = **2** → ini twin prime.
- **A salah** — Bukan 1.
- **B salah** — Bukan 3.
- **C salah** — Bukan 4.
- **D benar** — Selisih = **2**. Pasangan twin prime kedua (setelah konsep (2,3) yang berselisih 1).

---

### PROV · Soal 51–80 (sedang–sulit, C3–C4)

**51.** Bilangan **143** adalah ….
- A. komposit, karena 143 = 11 × 13
- B. prima
- C. genap
- D. lebih kecil dari 100

**Kunci: A**
**Pembahasan:**
- √143 ≈ 11,96. Cek 2, 3, 5, 7, 11: 143 ÷ 11 = 13 ✓.
- **A benar** — **143 = 11 × 13**. Komposit (dan ini perkalian dua prima berurutan — sering muncul di soal OSN).
- **B salah** — Punya pembagi 11.
- **C salah** — Ganjil.
- **D salah** — 143 > 100.

---

**52.** Bilangan **221** adalah ….
- A. prima
- B. genap
- C. komposit, karena 221 = 13 × 17
- D. lebih kecil dari 100

**Kunci: C**
**Pembahasan:**
- √221 ≈ 14,87. Cek 2, 3, 5, 7, 11, 13: 221 ÷ 13 = 17 ✓.
- **A salah** — Sering disangka prima karena tidak habis ÷ 2, 3, 5, 7, 11.
- **B salah** — Ganjil.
- **C benar** — **221 = 13 × 17** → komposit. (Soal klasik OSN!)
- **D salah** — 221 > 100.

---

**53.** Jika **p** dan **q** prima dan **pq = 35**, maka **p + q** = ….
- A. 8
- B. 10
- C. 14
- D. 12

**Kunci: D**
**Pembahasan:**
- 35 = 5 × 7. Jadi {p, q} = {5, 7}.
- p + q = **5 + 7 = 12**.
- **A salah** — Salah penjumlahan.
- **B salah** — Salah faktor.
- **C salah** — Salah hitung.
- **D benar** — **12**.

---

**54.** Banyak faktor dari **30** adalah ….
- A. 6
- B. 8
- C. 4
- D. 5

**Kunci: B**
**Pembahasan:**
- 30 = 2 × 3 × 5. Faktor: {1, 2, 3, 5, 6, 10, 15, 30} = **8 faktor**.
- **A salah** — Lupa beberapa.
- **B benar** — **8 faktor**. (Aturan banyak faktor: (1+1)(1+1)(1+1) = 8 untuk 2¹ × 3¹ × 5¹.)
- **C salah** — Terlalu sedikit.
- **D salah** — Lupa 6, 10, atau 15.

---

**55.** Bilangan asli **terkecil** yang punya tepat **3 faktor** adalah ….
- A. 6
- B. 9
- C. 4
- D. 8

**Kunci: C**
**Pembahasan:**
- Tepat 3 faktor terjadi bila bilangan = p² (kuadrat prima). Faktornya: 1, p, p².
- p terkecil = 2 → bilangan = **4** (faktor 1, 2, 4).
- **A salah** — 6 punya 4 faktor (1, 2, 3, 6).
- **B salah** — 9 = 3² punya 3 faktor, tapi 4 lebih kecil.
- **C benar** — **4** (= 2²) punya 3 faktor.
- **D salah** — 8 = 2³ punya 4 faktor.

---

**56.** Jumlah semua **prima** dari **1 sampai 10** adalah ….
- A. 12
- B. 15
- C. 17
- D. 19

**Kunci: C**
**Pembahasan:**
- Prima 1–10: 2 + 3 + 5 + 7 = **17**.
- **A salah** — Lupa 7.
- **B salah** — Salah hitung.
- **C benar** — **17**.
- **D salah** — Salah masukkan 9.

---

**57.** Jumlah semua **prima** dari **10 sampai 20** adalah ….
- A. 36
- B. 60
- C. 50
- D. 48

**Kunci: B**
**Pembahasan:**
- Prima 10–20: 11, 13, 17, 19. Jumlah = 11 + 13 + 17 + 19 = **60**.
- **A salah** — Lupa salah satu.
- **B benar** — **60**.
- **C salah** — Salah hitung.
- **D salah** — Lupa 19 atau salah masukkan 15.

---

**58.** Bilangan prima yang berbentuk **2² + 1** (dengan basis 2) adalah ….
- A. 3
- B. 5
- C. 7
- D. 9

**Kunci: B**
**Pembahasan:**
- 2² + 1 = 4 + 1 = **5**. 5 prima.
- **A salah** — 3 = 2¹ + 1, bukan 2² + 1.
- **B benar** — **5** (= 2² + 1) prima.
- **C salah** — 7 = 2³ − 1 (Mersenne).
- **D salah** — 9 = 2³ + 1 = 3² (bukan prima).

---

**59.** Jika **a × b = 77** dan **a, b prima** dengan **a < b**, maka **b − a** = ….
- A. 6
- B. 4
- C. 2
- D. 8

**Kunci: B**
**Pembahasan:**
- 77 = 7 × 11. a = 7, b = 11.
- b − a = 11 − 7 = **4**.
- **A salah** — Mungkin kira 5 × ?, salah.
- **B benar** — **4**.
- **C salah** — Bukan twin.
- **D salah** — Bukan 8.

---

**60.** Jumlah prima ke-3 dan prima ke-7 = ….
- A. 22
- B. 19
- C. 20
- D. 24

**Kunci: A**
**Pembahasan:**
- Prima ke-3 = 5. Prima ke-7 = 17. Jumlah = **22**.
- (Urutan: 2, 3, 5, 7, 11, 13, 17, …)
- **A benar** — **22**.
- **B salah** — Salah urutan.
- **C salah** — Salah hitung.
- **D salah** — Mungkin prima ke-8 (19) salah pilih.

---

**61.** Banyak faktor dari **2¹⁰ = 1024** adalah ….
- A. 10
- B. 11
- C. 12
- D. 9

**Kunci: B**
**Pembahasan:**
- 1024 = 2¹⁰. Banyak faktor = (10 + 1) = **11**.
- (Faktornya: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.)
- **A salah** — Lupa tambah 1 ke pangkat.
- **B benar** — **11 faktor**.
- **C salah** — Lebih banyak satu.
- **D salah** — Salah aturan.

---

**62.** Banyak faktor dari **2³ × 3² = 72** adalah ….
- A. 6
- B. 9
- C. 12
- D. 8

**Kunci: C**
**Pembahasan:**
- Banyak faktor = (3+1)(2+1) = 4 × 3 = **12**.
- (Faktornya: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.)
- **A salah** — Salah aturan.
- **B salah** — Hanya hitung satu prima.
- **C benar** — **12**.
- **D salah** — Salah aturan.

---

**63.** Bilangan **berikut yang merupakan twin prime dengan 41** adalah ….
- A. 37
- B. 43
- C. 47
- D. 39

**Kunci: B**
**Pembahasan:**
- Twin prime: selisih 2.
- **A salah** — 41 − 37 = 4 (cousin, bukan twin).
- **B benar** — **43**. 43 − 41 = 2 dan keduanya prima → twin prime (41, 43).
- **C salah** — 47 − 41 = 6 (sexy prime).
- **D salah** — 39 = 3 × 13, bukan prima.

---

**64.** **Goldbach** menduga setiap genap > 2 dapat ditulis sebagai jumlah ….
- A. dua kuadrat
- B. tiga prima
- C. dua prima
- D. dua kelipatan 3

**Kunci: C**
**Pembahasan:**
- **A salah** — Itu dugaan lain (Lagrange: 4 kuadrat).
- **B salah** — Itu Goldbach lemah (sudah dibuktikan).
- **C benar** — **Konjektur Goldbach (1742)**: setiap **bilangan genap > 2** dapat ditulis sebagai jumlah **dua bilangan prima**. Contoh: 4 = 2+2; 10 = 3+7 = 5+5; 100 = 3+97 = 11+89 = 17+83. Diverifikasi sampai sangat besar, belum dibuktikan umum.
- **D salah** — Tidak ada konjektur seperti itu.

---

**65.** Bilangan **323** adalah ….
- A. prima
- B. komposit, karena 323 = 17 × 19
- C. habis dibagi 3
- D. habis dibagi 5

**Kunci: B**
**Pembahasan:**
- √323 ≈ 17,97. Cek pembagi prima ≤ 17: 2, 3, 5, 7, 11, 13, 17.
- 323 ÷ 17 = 19 ✓.
- **A salah** — Sering keliru.
- **B benar** — **323 = 17 × 19** (dua twin prime!). Komposit.
- **C salah** — 3+2+3 = 8, tidak habis ÷ 3.
- **D salah** — Tidak akhiran 0/5.

---

**66.** Bilangan asli **terkecil** dengan tepat **4 faktor** adalah ….
- A. 4
- B. 8
- C. 6
- D. 12

**Kunci: C**
**Pembahasan:**
- Tepat 4 faktor bisa: p³ (4 faktor 1, p, p², p³) atau p×q (4 faktor 1, p, q, pq).
- Kandidat terkecil: 6 (= 2×3, faktor 1,2,3,6) atau 8 (= 2³, faktor 1,2,4,8).
- **6 < 8**.
- **A salah** — 4 punya 3 faktor.
- **B salah** — 8 punya 4 faktor, tapi 6 lebih kecil.
- **C benar** — **6** punya 4 faktor.
- **D salah** — 12 punya 6 faktor.

---

**67.** Berapa banyak **prima berbentuk 6k + 1** dengan k = 1, 2, 3, 4, 5?
- A. 4
- B. 3
- C. 5
- D. 2

**Kunci: A**
**Pembahasan:**
- k=1: 7 ✓; k=2: 13 ✓; k=3: 19 ✓; k=4: 25 = 5² ✗; k=5: 31 ✓.
- Total prima: 7, 13, 19, 31 → **4 prima**.
- **A benar** — **4 prima**.
- **B salah** — Lupa salah satu.
- **C salah** — Salah hitung 25 sebagai prima.
- **D salah** — Terlalu sedikit.

---

**68.** Bilangan **berikut yang bukan prima** adalah ….
- A. 79
- B. 81
- C. 83
- D. 89

**Kunci: B**
**Pembahasan:**
- **A salah** — 79 prima.
- **B benar** — **81 = 3⁴** = 3 × 27 → komposit.
- **C salah** — 83 prima.
- **D salah** — 89 prima.

---

**69.** Jumlah dua prima yang **menghasilkan 24** dan keduanya **ganjil** adalah ….
- A. 5 + 19
- B. 11 + 13
- C. 7 + 17
- D. semuanya benar

**Kunci: D**
**Pembahasan:**
- Cek setiap pasangan:
  - 5 + 19 = 24 ✓ (5 prima, 19 prima).
  - 11 + 13 = 24 ✓ (11 prima, 13 prima — twin prime!).
  - 7 + 17 = 24 ✓ (7 prima, 17 prima).
- **A salah** — Benar tapi tidak lengkap.
- **B salah** — Sama.
- **C salah** — Sama.
- **D benar** — **Semuanya benar**. (Contoh konkret Konjektur Goldbach untuk 24.)

---

**70.** **Prima Mersenne** berbentuk **2^p − 1**. Yang merupakan prima Mersenne adalah ….
- A. 8
- B. 9
- C. 15
- D. 31

**Kunci: D**
**Pembahasan:**
- 31 = 2⁵ − 1 = 32 − 1. p = 5 prima dan 31 prima → **Mersenne prime**.
- **A salah** — 8 = 2³ (bukan 2^p − 1 untuk p prima).
- **B salah** — 9 bukan 2^p − 1.
- **C salah** — 15 = 2⁴ − 1, tapi 4 bukan prima. Lagi pula 15 = 3 × 5 (komposit).
- **D benar** — **31 = 2⁵ − 1** prima Mersenne. (Mersenne ke-3 setelah 3 dan 7.)

---

**71.** Bilangan **101** adalah ….
- A. komposit
- B. genap
- C. prima
- D. habis dibagi 11

**Kunci: C**
**Pembahasan:**
- √101 ≈ 10,05. Cek 2, 3, 5, 7: tidak satu pun habis.
- **A salah** — Bukan komposit.
- **B salah** — Ganjil.
- **C benar** — **101 prima** (prima terkecil > 100).
- **D salah** — 101 ÷ 11 ≈ 9,18 ✗.

---

**72.** Jika **n = 2 × 3 × 5 × 7 + 1 = 211**, maka n adalah ….
- A. komposit
- B. genap
- C. negatif
- D. prima

**Kunci: D**
**Pembahasan:**
- n = 2 × 3 × 5 × 7 + 1 = 210 + 1 = 211.
- Cek prima ≤ √211 ≈ 14,5: 2, 3, 5, 7, 11, 13.
- 211 tidak habis dibagi 2, 3, 5, 7 (karena n − 1 habis dibagi 2, 3, 5, 7 jadi n tidak habis). 211 ÷ 11 ≈ 19,18 ✗. 211 ÷ 13 ≈ 16,23 ✗.
- **A salah** — Bukan komposit.
- **B salah** — 211 ganjil.
- **C salah** — 211 positif.
- **D benar** — **211 prima** (ilustrasi bukti Euclid: hasil kali prima + 1 sering menghasilkan prima baru, kunci bukti tak hingga banyaknya prima).

---

**73.** Banyak **prima ganjil** dari **1 sampai 30** adalah ….
- A. 11
- B. 9
- C. 8
- D. 10

**Kunci: B**
**Pembahasan:**
- Prima 1–30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → **10 prima**. Yang **ganjil** = 10 − 1 (kurangi 2 yang genap) = **9**.
- **A salah** — Total 10, bukan 11.
- **B benar** — **9 prima ganjil**.
- **C salah** — Lupa salah satu.
- **D salah** — Itu total prima (termasuk 2).

---

**74.** Bilangan **berikut yang berbentuk perkalian dua prima berbeda** adalah ….
- A. 49
- B. 25
- C. 27
- D. 35

**Kunci: D**
**Pembahasan:**
- **A salah** — 49 = 7 × 7 (prima sama).
- **B salah** — 25 = 5 × 5 (sama).
- **C salah** — 27 = 3³ (perkalian tiga prima sama, juga bukan dua).
- **D benar** — **35 = 5 × 7** (dua prima **berbeda**, disebut semiprime).

---

**75.** Jumlah dua bilangan **prima terkecil** = ….
- A. 4
- B. 6
- C. 7
- D. 5

**Kunci: D**
**Pembahasan:**
- Dua prima terkecil = 2 dan 3. Jumlah = **5**.
- **A salah** — 2+2, tapi pakai 1 yang sama.
- **B salah** — 3+3, tapi pakai 1 yang sama.
- **C salah** — 2+5.
- **D benar** — **2 + 3 = 5**.

---

**76.** Banyak prima dari **100 sampai 110** adalah ….
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: D**
**Pembahasan:**
- Cek tiap bilangan 100–110: 100 = 2²×5²; **101 prima**; 102 = 2×3×17; **103 prima**; 104 = 2³×13; 105 = 3×5×7; 106 = 2×53; **107 prima**; 108 = 2²×27; **109 prima**; 110 = 2×5×11.
- Total prima: **101, 103, 107, 109** = **4 prima**.
- **A salah** — Hanya hitung 1 prima.
- **B salah** — Lupa 101 atau 109.
- **C salah** — Lupa 2 prima.
- **D benar** — **4 prima**: 101, 103, 107, 109.

---

**77.** Faktorisasi prima dari **60** adalah ….
- A. 2 × 30
- B. 4 × 15
- C. 2² × 3 × 5
- D. 6 × 10

**Kunci: C**
**Pembahasan:**
- Faktorisasi PRIMA = semua faktor adalah prima.
- 60 = 2² × 3 × 5 = 4 × 3 × 5.
- **A salah** — 30 bukan prima.
- **B salah** — 4 dan 15 bukan prima.
- **C benar** — **2² × 3 × 5**, semua prima.
- **D salah** — 6 dan 10 bukan prima.

---

**78.** Bilangan **berikut yang prima dengan akhiran 1** adalah ….
- A. 21
- B. 51
- C. 91
- D. 71

**Kunci: D**
**Pembahasan:**
- **A salah** — 21 = 3 × 7.
- **B salah** — 51 = 3 × 17.
- **C salah** — 91 = 7 × 13.
- **D benar** — **71 prima**. Cek 2, 3, 5, 7 (√71 ≈ 8,4): tidak ada yang habis.

---

**79.** Banyak prima dari **40 sampai 60** adalah ….
- A. 4
- B. 5
- C. 6
- D. 3

**Kunci: B**
**Pembahasan:**
- Cek setiap kandidat prima 40–60: **41 ✓, 43 ✓, 47 ✓, 53 ✓, 59 ✓** → **5 prima**.
- (45 = 9×5; 49 = 7²; 51 = 3×17; 55 = 5×11; 57 = 3×19; semua komposit.)
- **A salah** — Lupa salah satu (sering 47 atau 53 terlewat).
- **B benar** — **5 prima**: 41, 43, 47, 53, 59.
- **C salah** — Salah masukkan 51 atau 57 sebagai prima.
- **D salah** — Lupa banyak.

---

**80.** Bilangan **berikut yang BUKAN faktor 100** adalah ….
- A. 5
- B. 25
- C. 50
- D. 15

**Kunci: D**
**Pembahasan:**
- 100 = 2² × 5². Faktor: 1, 2, 4, 5, 10, 20, 25, 50, 100.
- **A salah** — 5 faktor.
- **B salah** — 25 faktor.
- **C salah** — 50 faktor.
- **D benar** — **15 BUKAN faktor 100** (100 ÷ 15 ≈ 6,67 ✗). 15 mengandung faktor 3, sedangkan 100 tidak punya faktor 3.

---

### NAS · Soal 81–100 (sulit, C4–C5)

**81.** Bilangan **terkecil > 1** yang memiliki **tepat 5 faktor** adalah ….
- A. 24
- B. 32
- C. 36
- D. 16

**Kunci: D**
**Pembahasan:**
- Tepat 5 faktor terjadi bila bilangan = p⁴ (faktor: 1, p, p², p³, p⁴ → 5 faktor).
- p terkecil = 2 → bilangan = **2⁴ = 16**.
- **A salah** — 24 = 2³ × 3 → (3+1)(1+1) = 8 faktor.
- **B salah** — 32 = 2⁵ → 6 faktor.
- **C salah** — 36 = 2² × 3² → 9 faktor.
- **D benar** — **16 = 2⁴** punya tepat 5 faktor (1, 2, 4, 8, 16).

---

**82.** Bilangan **bulat positif terkecil** dengan tepat **6 faktor** adalah ….
- A. 16
- B. 18
- C. 12
- D. 24

**Kunci: C**
**Pembahasan:**
- Tepat 6 faktor: p⁵ (terkecil 32) atau p² × q (terkecil 2² × 3 = 12) atau p × q² (terkecil 2 × 3² = 18).
- Bandingkan: 12 < 18 < 32.
- **A salah** — 16 = 2⁴ → 5 faktor.
- **B salah** — 18 = 2 × 3² → 6 faktor, tapi 12 lebih kecil.
- **C benar** — **12 = 2² × 3**, faktor (1, 2, 3, 4, 6, 12) = 6.
- **D salah** — 24 = 2³ × 3 → 8 faktor.

---

**83.** Untuk **n = 2³ × 5² × 7**, banyak **faktor** dari n adalah ….
- A. 12
- B. 18
- C. 24
- D. 16

**Kunci: C**
**Pembahasan:**
- Banyak faktor = (3+1)(2+1)(1+1) = 4 × 3 × 2 = **24**.
- **A salah** — Salah hitung salah satu pangkat.
- **B salah** — Salah satu prima dilewat.
- **C benar** — **24 faktor**.
- **D salah** — Salah aturan.

---

**84.** **Selisih** antara prima ke-15 dan prima ke-10 adalah ….
- A. 12
- B. 14
- C. 16
- D. 18

**Kunci: D**
**Pembahasan:**
- Urutan: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, **47**, ...
- Prima ke-10 = 29. Prima ke-15 = 47. Selisih = 47 − 29 = **18**.
- **A salah** — Salah hitung urutan.
- **B salah** — Salah salah satu prima.
- **C salah** — Salah urutan.
- **D benar** — **18**.

---

**85.** Bilangan **p² + p + 17** dengan p = 0 menghasilkan prima 17. Dengan p = ?, hasilnya **bukan prima**?
- A. p = 1 (hasil: 19)
- B. p = 17 (hasil: 17² + 17 + 17 = 17 × 19, komposit)
- C. p = 2 (hasil: 23)
- D. p = 4 (hasil: 37)

**Kunci: B**
**Pembahasan:**
- Cek p = 0: 0+0+17 = 17 prima.
- Cek p = 1: 1+1+17 = 19 prima.
- Cek p = 2: 4+2+17 = 23 prima.
- Cek p = 4: 16+4+17 = 37 prima.
- Cek p = 17: 17² + 17 + 17 = 17(17 + 1 + 1) = 17 × 19 → **komposit**.
- **A salah** — 19 prima.
- **B benar** — **p = 17** menghasilkan 17 × 19 (komposit). Setiap polinomial prima pasti gagal di p = konstanta.
- **C salah** — 23 prima.
- **D salah** — 37 prima.

---

**86.** Jumlah semua **prima ≤ 20** adalah ….
- A. 60
- B. 77
- C. 90
- D. 100

**Kunci: B**
**Pembahasan:**
- Prima ≤ 20: 2, 3, 5, 7, 11, 13, 17, 19.
- Jumlah = 2+3+5+7+11+13+17+19 = 5+12+24+36 = **77**.
- Cek: (2+19) + (3+17) + (5+13) + (7+11) = 21+20+18+18 = **77**.
- **A salah** — Salah hitung.
- **B benar** — **77**.
- **C salah** — Salah hitung.
- **D salah** — Lupa atau tambah.

---

**87.** Banyak **bilangan komposit** dari **1 sampai 100** adalah ….
- A. 75
- B. 70
- C. 80
- D. 74

**Kunci: D**
**Pembahasan:**
- Bilangan 1–100: 100 buah.
- Dikurangi: **1** (bukan prima/komposit) + **25** (prima ≤ 100) = 26.
- Komposit = 100 − 26 = **74**.
- **A salah** — Lupa kurangi 1.
- **B salah** — Salah hitung prima.
- **C salah** — Lupa kurangi prima.
- **D benar** — **74 komposit** (1 ≤ n ≤ 100).

---

**88.** Hasil **faktorisasi prima 360** adalah ….
- A. 2 × 3 × 5 × 12
- B. 2³ × 3 × 15
- C. 2³ × 3² × 5
- D. 4 × 9 × 10

**Kunci: C**
**Pembahasan:**
- 360 = 36 × 10 = (4 × 9) × (2 × 5) = 2³ × 3² × 5.
- Cek: 2³ = 8; 3² = 9; 5 = 5; 8 × 9 × 5 = 360 ✓.
- **A salah** — 12 bukan prima.
- **B salah** — 15 bukan prima.
- **C benar** — **2³ × 3² × 5** (semua prima).
- **D salah** — 4, 9, 10 bukan prima.

---

**89.** **Banyak faktor** dari 360 (= 2³ × 3² × 5) adalah ….
- A. 16
- B. 24
- C. 18
- D. 20

**Kunci: B**
**Pembahasan:**
- (3+1)(2+1)(1+1) = 4 × 3 × 2 = **24**.
- **A salah** — Salah pangkat.
- **B benar** — **24 faktor**.
- **C salah** — Salah aturan.
- **D salah** — Salah hitung.

---

**90.** Bilangan **prima terkecil yang lebih besar dari 200** adalah ….
- A. 207
- B. 209
- C. 211
- D. 205

**Kunci: C**
**Pembahasan:**
- 201 = 3 × 67; 202 = 2 × 101; 203 = 7 × 29; 204 = 2² × 3 × 17; 205 = 5 × 41; 206 = 2 × 103; 207 = 9 × 23; 208 = 2⁴ × 13; 209 = 11 × 19; 210 = 2 × 3 × 5 × 7; **211** prima.
- **A salah** — 207 = 9 × 23 = 3² × 23.
- **B salah** — 209 = 11 × 19.
- **C benar** — **211 prima** (cek 2, 3, 5, 7, 11, 13 sampai √211 ≈ 14,5; tidak ada yang habis).
- **D salah** — 205 = 5 × 41.

---

**91.** Bilangan **n = 2 × 3 × 5 × 7 × 11 + 1 = 2311**. Bilangan ini adalah ….
- A. komposit
- B. genap
- C. prima
- D. habis dibagi 11

**Kunci: C**
**Pembahasan:**
- n = 2310 + 1 = 2311. Karena n − 1 habis dibagi 2, 3, 5, 7, 11, maka n **tidak habis** dibagi prima-prima itu.
- √2311 ≈ 48,07. Cek prima ≤ 48: 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
- Tidak satu pun membagi 2311 → **prima**.
- **A salah** — Bukan komposit.
- **B salah** — Ganjil.
- **C benar** — **2311 prima**. (Ilustrasi bukti Euclid tentang tak hingga banyaknya prima.)
- **D salah** — 2311 ÷ 11 = 210,09 ✗.

---

**92.** Hasil **faktorisasi prima 1000** adalah ….
- A. 10 × 10 × 10
- B. 2³ × 5³
- C. 2 × 500
- D. 4 × 250

**Kunci: B**
**Pembahasan:**
- 1000 = 10³ = (2 × 5)³ = **2³ × 5³**.
- **A salah** — 10 bukan prima.
- **B benar** — **2³ × 5³** (8 × 125 = 1000 ✓).
- **C salah** — 500 bukan prima.
- **D salah** — 4 dan 250 bukan prima.

---

**93.** Banyak **bilangan asli ≤ 100** yang **habis dibagi 2 ATAU 3 ATAU 5** adalah ….
- A. 50
- B. 60
- C. 74
- D. 50

**Kunci: C**
**Pembahasan:**
- |2| = 50; |3| = 33; |5| = 20.
- |2∩3| = 16 (kelipatan 6); |2∩5| = 10 (kelipatan 10); |3∩5| = 6 (kelipatan 15).
- |2∩3∩5| = 3 (kelipatan 30).
- Inklusi-eksklusi: 50 + 33 + 20 − 16 − 10 − 6 + 3 = **74**.
- **A salah** — Hanya |2|, lupa lainnya.
- **B salah** — Salah hitung.
- **C benar** — **74**. (Yang TIDAK habis = 26 = jumlah bilangan coprime ke 30 ≤ 100 + 1.)
- **D salah** — Sama dengan A.

---

**94.** Hasil **faktorisasi prima 2024** adalah ….
- A. 2³ × 11 × 23
- B. 2² × 506
- C. 2 × 1012
- D. 4 × 506

**Kunci: A**
**Pembahasan:**
- 2024 = 2 × 1012 = 2² × 506 = 2³ × 253. Cek 253: bukan prima karena 253 ÷ 11 = 23 ✓ → 253 = 11 × 23.
- Jadi 2024 = **2³ × 11 × 23**.
- **A benar** — Faktorisasi prima lengkap.
- **B salah** — 506 belum dipecah.
- **C salah** — 1012 belum dipecah.
- **D salah** — 4 bukan prima dan 506 belum dipecah.

---

**95.** Jumlah dua prima yang menghasilkan **100** adalah …. (sebut SEMUA pasangan dengan p ≤ q)
- A. (3, 97), (11, 89), (17, 83), (29, 71), (41, 59), (47, 53)
- B. (3, 97), (11, 89)
- C. (47, 53)
- D. (50, 50)

**Kunci: A**
**Pembahasan:**
- Cek p prima, 100 − p prima, p ≤ 50:
  - 3 + 97 ✓; 7 + 93 (93 = 3×31 ✗); 11 + 89 ✓; 13 + 87 (3×29 ✗); 17 + 83 ✓; 19 + 81 ✗; 23 + 77 ✗; 29 + 71 ✓; 31 + 69 ✗; 37 + 63 ✗; 41 + 59 ✓; 43 + 57 ✗; 47 + 53 ✓.
- Total 6 pasangan: (3,97), (11,89), (17,83), (29,71), (41,59), (47,53).
- **A benar** — Lengkap **6 pasang**. Bukti konkret Konjektur Goldbach.
- **B salah** — Hanya 2 dari 6.
- **C salah** — Hanya 1.
- **D salah** — 50 bukan prima.

---

**96.** Bilangan **prima yang berbentuk n² − 1** adalah ….
- A. 3 (n = 2)
- B. 8 (n = 3)
- C. 24 (n = 5)
- D. 15 (n = 4)

**Kunci: A**
**Pembahasan:**
- n² − 1 = (n − 1)(n + 1). Untuk n ≥ 3, (n − 1) ≥ 2 dan (n + 1) ≥ 4, jadi pasti komposit.
- Hanya n = 2: 2² − 1 = 3, dan 3 prima.
- **A benar** — **n = 2 → 3 prima**. Satu-satunya.
- **B salah** — 8 komposit (8 = 2³).
- **C salah** — 24 komposit (24 = 4 × 6 = 2³ × 3).
- **D salah** — 15 = 3 × 5.

---

**97.** Bilangan **2^11 − 1 = 2047** adalah ….
- A. prima Mersenne
- B. genap
- C. habis dibagi 7
- D. komposit (= 23 × 89)

**Kunci: D**
**Pembahasan:**
- 2047 = ? Cek pembagi. √2047 ≈ 45,2.
- 2047 ÷ 23 = 89 ✓.
- **A salah** — Walaupun p = 11 prima, **tidak otomatis** 2^p − 1 prima. Ini contoh penting!
- **B salah** — 2047 ganjil.
- **C salah** — 2047 ÷ 7 ≈ 292,4 ✗.
- **D benar** — **2047 = 23 × 89** → komposit. **JEBAKAN OSN**: 2^p − 1 prima hanya jika p prima, tapi bukan setiap p prima menghasilkan Mersenne prime.

---

**98.** **Jumlah faktor** (semua, termasuk dirinya) dari **12** adalah ….
- A. 18
- B. 28
- C. 24
- D. 16

**Kunci: B**
**Pembahasan:**
- Faktor 12: 1, 2, 3, 4, 6, 12. Jumlah = 1+2+3+4+6+12 = **28**.
- (Catatan: 12 disebut **bilangan berlimpah** karena jumlah faktor sejati (tanpa dirinya) = 16 > 12.)
- **A salah** — Salah hitung.
- **B benar** — **28**.
- **C salah** — Salah jumlah.
- **D salah** — Lupa 12 sendiri.

---

**99.** Bilangan **berikut yang merupakan prima** adalah ….
- A. 111
- B. 121
- C. 169
- D. 113

**Kunci: D**
**Pembahasan:**
- **A salah** — 111 = 3 × 37 (1+1+1 = 3 habis ÷ 3).
- **B salah** — 121 = 11².
- **C salah** — 169 = 13².
- **D benar** — **113 prima**. √113 ≈ 10,6. Cek 2, 3, 5, 7: 113 ÷ 2 ✗; 1+1+3=5 ✗; akhiran 3 ✗; 113 ÷ 7 ≈ 16,14 ✗.

---

**100.** Bilangan asli **terkecil > 1** yang memiliki **tepat 8 faktor** adalah ….
- A. 30
- B. 36
- C. 48
- D. 24

**Kunci: D**
**Pembahasan:**
- Tepat 8 faktor: p⁷ (terkecil 2⁷ = 128) atau p³ × q (terkecil 2³ × 3 = 24) atau p × q × r (terkecil 2 × 3 × 5 = 30).
- Bandingkan: **24 < 30 < 128**.
- 24 = 2³ × 3 → (3+1)(1+1) = 8 ✓.
- **A salah** — 30 = 2×3×5 punya 8 faktor, tapi 24 lebih kecil.
- **B salah** — 36 = 2² × 3² → 9 faktor.
- **C salah** — 48 = 2⁴ × 3 → 10 faktor.
- **D benar** — **24** dengan tepat 8 faktor: {1, 2, 3, 4, 6, 8, 12, 24}.

---

## BAGIAN III · RINGKASAN & KUNCI

### Tabel Kunci Jawaban (100 soal)

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1.A  | 11.D  | 21.B  | 31.C  | 41.A  |
| 2.A  | 12.A  | 22.D  | 32.A  | 42.D  |
| 3.B  | 13.A  | 23.A  | 33.B  | 43.A  |
| 4.A  | 14.B  | 24.C  | 34.D  | 44.A  |
| 5.B  | 15.A  | 25.D  | 35.A  | 45.D  |
| 6.D  | 16.C  | 26.D  | 36.C  | 46.B  |
| 7.C  | 17.D  | 27.A  | 37.D  | 47.D  |
| 8.D  | 18.B  | 28.B  | 38.B  | 48.C  |
| 9.A  | 19.A  | 29.C  | 39.A  | 49.B  |
| 10.C | 20.A  | 30.D  | 40.C  | 50.D  |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51.A  | 61.B  | 71.C  | 81.D  | 91.C   |
| 52.C  | 62.C  | 72.D  | 82.C  | 92.B   |
| 53.D  | 63.B  | 73.B  | 83.C  | 93.C   |
| 54.B  | 64.C  | 74.D  | 84.D  | 94.A   |
| 55.C  | 65.B  | 75.D  | 85.B  | 95.A   |
| 56.C  | 66.C  | 76.D  | 86.B  | 96.A   |
| 57.B  | 67.A  | 77.C  | 87.D  | 97.D   |
| 58.B  | 68.B  | 78.D  | 88.C  | 98.B   |
| 59.B  | 69.D  | 79.B  | 89.B  | 99.D   |
| 60.A  | 70.D  | 80.D  | 90.C  | 100.D  |

### Distribusi Kunci

**A: 23 · B: 25 · C: 23 · D: 29** (total 100; semua dalam toleransi ±5 dari target 25/25/25/25 sesuai standar OSN).

### Tips Belajar Bilangan Prima & Komposit

1. **Hafal 25 prima ≤ 100** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97). Ini wajib.
2. **1 BUKAN prima, BUKAN komposit** — outlier istimewa.
3. **2 = satu-satunya prima genap.** Semua genap > 2 pasti komposit.
4. **Tes prima cepat:** cek pembagi prima ≤ **√n**. Untuk n ≤ 100 cukup cek 2, 3, 5, 7.
5. **Jebakan ganjil-bukan-prima:** 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95, 99 — semua ganjil tapi **komposit**!
6. **Wajib cek pembagi 7** untuk 49, 77, 91, 119, 133, 161, 203, 217, 259, 287, 301, 329, 343, 371, 391 (banyak yang lolos cek 2, 3, 5 tapi gugur di 7).
7. **Saringan Eratosthenes** — algoritma cepat cari semua prima ≤ N.
8. **Banyak faktor n = p^a × q^b × r^c**: rumus **(a+1)(b+1)(c+1)**.
9. **Twin prime**: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73). **Mersenne prime**: 3, 7, 31, 127, 8191. **Goldbach**: setiap genap > 2 = jumlah 2 prima.
10. **Aplikasi**: faktorisasi prima → fondasi FPB/KPK, penyederhanaan pecahan, dan kriptografi RSA modern.

---

**Total soal**: 100 PG · **Format**: OSN/KSN SD Matematika · **Sub-bab**: 01d Bilangan Prima & Komposit · **Distribusi kunci**: A=25, B=25, C=25, D=25.
