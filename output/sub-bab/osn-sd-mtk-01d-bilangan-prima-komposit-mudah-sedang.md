# OSN/KSN SD — Matematika · Sub-Bab 01d: Bilangan Prima & Komposit (Tingkat Mudah-Sedang)

> **Profil**: 50 Kab + 50 Prov = 100 soal PG
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
- √97 ≈ 9,8. Cek 2, 3, 5, 7. Tidak satupun habis → **97 prima**.

### 6. Saringan Eratosthenes (Sieve)
Algoritma kuno untuk mencari semua prima ≤ N:
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

### 8. Twin Prime & Prima Berurutan
- **Twin prime (prima kembar)** = pasangan prima berselisih **2**: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73).
- **Cousin prime** = selisih 4: (3,7), (7,11), (13,17), (19,23), (37,41), (43,47).
- **Emirp** = prima yang bila angka-angkanya dibalik tetap prima (mis. 13 ↔ 31).

### 9. Faktorisasi Prima
Setiap komposit dapat dituliskan **secara unik** sebagai perkalian prima.
- 12 = 2² × 3
- 60 = 2² × 3 × 5
- 100 = 2² × 5²
- 144 = 2⁴ × 3²

### 10. Jebakan Klasik OSN
1. **1 dianggap prima** — SALAH. (1 hanya punya 1 faktor.)
2. **Semua ganjil prima** — SALAH. (9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99 semua ganjil komposit.)
3. **2 dianggap komposit karena genap** — SALAH. (2 prima.)
4. **Lupa cek pembagi 7 untuk 49, 77, 91** — sering keliru sebagai prima.
5. **Mengira semua bilangan akhiran 1, 3, 7, 9 prima** — SALAH.

---

## BAGIAN II · 100 SOAL PILIHAN GANDA

## KAB · Soal 1-50 (Tingkat Kabupaten, C2-C3)

**1.** Suatu bilangan disebut **bilangan prima** apabila ….
- A. bilangan asli lebih dari 1 yang hanya mempunyai 2 faktor: 1 dan dirinya sendiri
- B. bilangan yang berakhiran digit 1, 3, 7, atau 9
- C. bilangan asli yang nilainya lebih kecil dari 20
- D. bilangan yang tidak habis dibagi 2

**Kunci: A**
**Pembahasan:**
- **A benar** — Definisi baku: **bilangan prima** = bilangan asli > 1 dengan **tepat 2 faktor** (1 dan dirinya sendiri).
- **B salah** — Miskonsepsi pola digit akhir. Banyak komposit juga berakhiran 1, 3, 7, 9, misalnya **21** (=3×7), **27** (=3³), **49** (=7²), **91** (=7×13).
- **C salah** — Miskonsepsi ukuran. Banyak prima ≥ 20 (23, 29, 31, …), sementara tidak semua bilangan < 20 prima (9 = 3², 15 = 3×5).
- **D salah** — Miskonsepsi paritas. Tidak habis dibagi 2 tidak menjamin prima — 9, 15, 21, 25, 27 semuanya ganjil tetapi komposit.
- **Konsep kunci:** Definisi resmi bilangan prima berpatokan pada jumlah faktor, bukan pola permukaan seperti digit akhir, ukuran, atau paritas.
- **Langkah Penyelesaian:**
  1. Ingat definisi resmi: bilangan prima = tepat 2 faktor (1 dan dirinya sendiri).
  2. Uji tiap pilihan terhadap definisi ini, bukan terhadap pola permukaan angka.
  3. Simpulkan A benar karena sesuai definisi; B, C, D hanya pola yang menyesatkan.

---

**2.** **Bilangan komposit** adalah bilangan asli lebih dari 1 yang ….
- A. tepat memiliki 2 faktor
- B. hanya memiliki 1 faktor
- C. memiliki lebih dari 2 faktor
- D. selalu prima

**Kunci: C**
**Pembahasan:**
- **A salah** — Itu tepat definisi prima, bukan komposit.
- **B salah** — Hanya angka 1 yang punya 1 faktor, dan 1 bukan komposit.
- **C benar** — **Komposit** = bilangan asli > 1 dengan **lebih dari 2 faktor**. Contoh 6 punya 4 faktor (1, 2, 3, 6).
- **D salah** — Komposit dan prima saling **terpisah**; tidak mungkin sekaligus.
- **Konsep kunci:** Bilangan komposit adalah bilangan asli lebih dari 1 dengan lebih dari 2 faktor.
- **Langkah Penyelesaian:**
  1. Ingat definisi komposit (lebih dari 2 faktor) lalu cocokkan dengan pilihan C.

---

**3.** Perhatikan bilangan **0** dan **1**. Pernyataan yang **benar** tentang keduanya adalah ….
- A. keduanya termasuk bilangan prima
- B. 1 bukan prima dan bukan komposit; 0 juga tidak digolongkan prima maupun komposit
- C. 0 adalah bilangan prima terkecil
- D. 1 adalah bilangan komposit karena punya faktor 1

**Kunci: B**
**Pembahasan:**
- **A salah** — Tidak satu pun memenuhi "tepat 2 faktor": 1 hanya punya 1 faktor, dan konsep faktor tidak berlaku standar pada 0.
- **B benar** — 1 bukan prima (hanya 1 faktor) dan bukan komposit (butuh > 2 faktor); 0 juga berada di luar klasifikasi prima/komposit pada standar SD.
- **C salah** — Miskonsepsi: 0 bukan prima sama sekali, karena semua bilangan membaginya sehingga tidak memenuhi "tepat 2 faktor".
- **D salah** — Miskonsepsi: komposit butuh **lebih dari 2** faktor, sedangkan 1 hanya punya 1 faktor (dirinya sendiri).
- **Konsep kunci:** 1 dan 0 adalah dua bilangan istimewa yang berada di luar klasifikasi prima maupun komposit.
- **Langkah Penyelesaian:**
  1. Hitung faktor 1 → hanya 1 faktor saja.
  2. Cek status 0 → tidak memenuhi definisi "tepat 2 faktor" sehingga tidak diklasifikasikan.
  3. Simpulkan keduanya bukan prima maupun komposit (jawaban B).

---

**4.** Bilangan prima **terkecil** adalah ….
- A. 1
- B. 3
- C. 5
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — 1 bukan prima (hanya 1 faktor).
- **B salah** — 3 prima ke-2.
- **C salah** — 5 prima ke-3.
- **D benar** — **2** adalah prima terkecil. Faktor 2 hanya 1 dan 2 → tepat 2 faktor → prima. Sekaligus satu-satunya prima genap.
- **Konsep kunci:** Prima terkecil adalah 2, karena 1 bukan prima.
- **Langkah Penyelesaian:**
  1. Cek bilangan asli terkecil lebih dari 1 (yaitu 2): faktornya hanya 1 dan 2 → prima, jadi jawabannya 2.

---

**5.** Satu-satunya bilangan **prima genap** adalah ….
- A. 2
- B. 4
- C. 6
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — **2** adalah satu-satunya prima genap. Pembaginya hanya 1 dan 2.
- **B salah** — 4 = 2 × 2 → komposit.
- **C salah** — 6 = 2 × 3 → komposit.
- **D salah** — 8 = 2³ → komposit.
- **Konsep kunci:** 2 adalah satu-satunya bilangan yang sekaligus prima dan genap; genap lain selalu habis dibagi 2 sehingga komposit.
- **Langkah Penyelesaian:**
  1. Cek bilangan genap: semua genap > 2 pasti habis dibagi 2 (komposit), hanya 2 sendiri yang faktornya tepat 1 dan 2 → prima.

---

**6.** Berikut yang **bukan prima** adalah ….
- A. 7
- B. 21
- C. 13
- D. 19

**Kunci: B**
**Pembahasan:**
- **A salah** — 7 hanya bisa 1 × 7 → prima.
- **B benar** — **21 = 3 × 7**, punya faktor 1, 3, 7, 21 → **komposit**. Sering keliru karena 21 ganjil.
- **C salah** — 13 hanya 1 × 13 → prima.
- **D salah** — 19 hanya 1 × 19 → prima.
- **Konsep kunci:** Bilangan ganjil belum tentu prima; harus dicek faktor-faktornya.
- **Langkah Penyelesaian:**
  1. Uji empat pilihan: 7, 13, 19 hanya punya 2 faktor (prima), sedangkan 21 = 3 × 7 punya 4 faktor → bukan prima.

---

**7.** Berikut yang merupakan **bilangan komposit** adalah ….
- A. 11
- B. 23
- C. 17
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — 11 prima.
- **B salah** — 23 prima.
- **C salah** — 17 prima.
- **D benar** — **15 = 3 × 5**, punya 4 faktor (1, 3, 5, 15) → **komposit**.
- **Konsep kunci:** Bilangan komposit dapat difaktorkan menjadi dua bilangan lebih dari 1.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan: 15 = 3 × 5 (komposit), sementara 11, 17, 23 hanya 1 × dirinya (prima).

---

**8.** Banyak bilangan prima dari **1 sampai 10** adalah ….
- A. 3
- B. 5
- C. 4
- D. 6

**Kunci: C**
**Pembahasan:**
- Prima 1–10: **2, 3, 5, 7** → **4 bilangan**.
- **A salah** — Lupa 7 (sering hanya hitung 2, 3, 5).
- **B salah** — Salah hitung 1 sebagai prima.
- **C benar** — Tepat 4: {2, 3, 5, 7}.
- **D salah** — Tambah 9 (9 = 3 × 3 → komposit).
- **Konsep kunci:** Menghitung prima dalam rentang dilakukan dengan mendaftar dan menguji tiap bilangan.
- **Langkah Penyelesaian:**
  1. Daftar prima 1–10: 2, 3, 5, 7 (1 bukan prima, 9 komposit) → banyaknya 4.

---

**9.** Banyak bilangan prima dari **60 sampai 70** adalah ….
- A. 2
- B. 4
- C. 3
- D. 1

**Kunci: A**
**Pembahasan:**
- Prima 60–70: **61, 67** → **2 bilangan**.
- **A benar** — Tepat 2.
- **B salah** — Salah masukkan 63 (= 7 × 9) dan 69 (= 3 × 23) sebagai prima.
- **C salah** — Salah masukkan salah satu dari 63, 65 (= 5 × 13), atau 69 sebagai prima.
- **D salah** — Lupa salah satu dari 61 atau 67.
- **Konsep kunci:** Menghitung prima dalam rentang tertentu dengan menyaring bilangan genap lalu menguji sisa bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Coret bilangan genap 60, 62, 64, 66, 68, 70.
  2. Uji ganjil tersisa: 61, 63, 65, 67, 69 → 63 = 7×9, 65 = 5×13, 69 = 3×23 komposit; 61, 67 prima.
  3. Hitung banyaknya = 2 (jawaban A).

---

**10.** Banyak bilangan prima dari **1 sampai 30** adalah ….
- A. 9
- B. 10
- C. 11
- D. 12

**Kunci: B**
**Pembahasan:**
- Prima 1–30: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29** → **10 bilangan**.
- **A salah** — Mungkin lupa 29.
- **B benar** — Tepat 10.
- **C salah** — Salah masukkan 27 (= 3³) atau 25 (= 5²) sebagai prima.
- **D salah** — Salah hitung 21 sebagai prima (21 = 3 × 7).
- **Konsep kunci:** Menghitung banyak prima dalam rentang dengan daftar prima yang sudah dihafal.
- **Langkah Penyelesaian:**
  1. Tulis 25 prima yang dihafal, ambil yang ≤ 30: ada 10 (2 sampai 29).

---

**11.** Berikut yang merupakan **bilangan prima** adalah ….
- A. 25
- B. 33
- C. 39
- D. 29

**Kunci: D**
**Pembahasan:**
- **A salah** — 25 = 5 × 5 → komposit.
- **B salah** — 33 = 3 × 11 → komposit.
- **C salah** — 39 = 3 × 13 → komposit.
- **D benar** — **29** prima. Cek pembagi ≤ √29 ≈ 5,4 (2, 3, 5): tidak ada yang habis.
- **Konsep kunci:** Uji keprimaan dilakukan dengan mengecek pembagi sampai akar kuadrat bilangan.
- **Langkah Penyelesaian:**
  1. Cek 25, 33, 39 semuanya bisa difaktorkan (komposit), sedangkan 29 tidak habis dibagi 2, 3, 5 → prima.

---

**12.** Bilangan **27** adalah ….
- A. komposit, karena 27 = 3 × 9 = 3³
- B. prima
- C. genap
- D. bukan bilangan asli

**Kunci: A**
**Pembahasan:**
- **A benar** — **27 = 3³ = 3 × 3 × 3**. Faktor 27: 1, 3, 9, 27 → 4 faktor → **komposit**. Sering disangka prima karena ganjil.
- **B salah** — Bukan prima (punya pembagi 3).
- **C salah** — 27 ganjil.
- **D salah** — 27 jelas bilangan asli.
- **Konsep kunci:** Bilangan ganjil bisa saja komposit; 27 adalah pangkat tiga dari 3.
- **Langkah Penyelesaian:**
  1. Faktorkan 27 = 3 × 3 × 3 → punya lebih dari 2 faktor → komposit.

---

**13.** Bilangan **51** adalah ….
- A. prima
- B. genap
- C. komposit, karena 51 = 3 × 17
- D. negatif

**Kunci: C**
**Pembahasan:**
- **A salah** — Sering keliru disangka prima (akhiran 1), padahal habis ÷ 3.
- **B salah** — 51 ganjil.
- **C benar** — **51 = 3 × 17** (cek: 5 + 1 = 6, habis ÷ 3). Faktor: 1, 3, 17, 51 → komposit.
- **D salah** — 51 positif.
- **Konsep kunci:** Aturan habis dibagi 3 (jumlah digit) membantu menemukan faktor bilangan besar dengan cepat.
- **Langkah Penyelesaian:**
  1. Jumlahkan digit 51 (5 + 1 = 6, habis ÷ 3), lalu bagi 51 ÷ 3 = 17 → 51 komposit.

---

**14.** Berikut yang **bukan prima** adalah ….
- A. 31
- B. 37
- C. 43
- D. 45

**Kunci: D**
**Pembahasan:**
- **A salah** — 31 prima (tidak habis ÷ 2, 3, 5; √31 ≈ 5,6).
- **B salah** — 37 prima.
- **C salah** — 43 prima.
- **D benar** — **45 = 5 × 9 = 3² × 5** → komposit. Akhiran 5 → habis ÷ 5.
- **Konsep kunci:** Bilangan berakhiran 5 (selain 5 sendiri) pasti habis dibagi 5 sehingga komposit.
- **Langkah Penyelesaian:**
  1. Perhatikan 45 berakhiran 5 → habis dibagi 5 → komposit, sedangkan 31, 37, 43 tetap prima.

---

**15.** Banyak bilangan prima dari **30 sampai 50** adalah ….
- A. 4
- B. 5
- C. 6
- D. 3

**Kunci: B**
**Pembahasan:**
- Prima 30–50: **31, 37, 41, 43, 47** → **5 bilangan**.
- **A salah** — Lupa salah satu.
- **B benar** — Tepat 5.
- **C salah** — Salah memasukkan 39 (= 3 × 13) atau 49 (= 7²).
- **D salah** — Lupa beberapa.
- **Konsep kunci:** Menghitung prima dalam rentang tertentu dengan mendaftar dan menyaring bilangan komposit.
- **Langkah Penyelesaian:**
  1. Tulis daftar prima yang dihafal, ambil yang terletak antara 30 dan 50: 31, 37, 41, 43, 47 → 5.

---

**16.** Bilangan **49** adalah ….
- A. prima
- B. genap
- C. komposit, karena 49 = 7 × 7
- D. lebih kecil dari 20

**Kunci: C**
**Pembahasan:**
- **A salah** — Sering keliru dianggap prima karena 49 tidak habis ÷ 2, 3, 5. Belum cek 7!
- **B salah** — 49 ganjil.
- **C benar** — **49 = 7² = 7 × 7**. Faktor: 1, 7, 49 → 3 faktor → komposit.
- **D salah** — 49 > 20.
- **Konsep kunci:** Bilangan yang lolos cek 2, 3, 5 tetap harus dicek pembagi 7 sebelum disimpulkan prima.
- **Langkah Penyelesaian:**
  1. Cek 49 ÷ 7 = 7 → habis, sehingga 49 = 7 × 7 → komposit.

---

**17.** Bilangan **57** adalah ….
- A. komposit, karena 57 = 3 × 19
- B. prima
- C. genap
- D. negatif

**Kunci: A**
**Pembahasan:**
- **A benar** — **57 = 3 × 19** (5 + 7 = 12, habis ÷ 3) → komposit. Jebakan ganjil-bukan-prima klasik.
- **B salah** — Banyak yang keliru memperlakukan 57 sebagai prima.
- **C salah** — 57 ganjil.
- **D salah** — 57 positif.
- **Konsep kunci:** Aturan habis dibagi 3 (jumlah digit) mengungkap faktor bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Jumlahkan digit 57 = 12 (habis ÷ 3), bagi 57 ÷ 3 = 19 → komposit.

---

**18.** Bilangan **77** adalah ….
- A. prima
- B. genap
- C. negatif
- D. komposit, karena 77 = 7 × 11

**Kunci: D**
**Pembahasan:**
- **A salah** — Sering disangka prima karena tidak habis ÷ 2, 3, 5, padahal habis ÷ 7.
- **B salah** — 77 ganjil.
- **C salah** — 77 positif.
- **D benar** — **77 = 7 × 11** → komposit. Cek pembagi 7 wajib!
- **Konsep kunci:** Wajib mengecek pembagi 7 sebelum menyimpulkan suatu bilangan adalah prima.
- **Langkah Penyelesaian:**
  1. Cek 77 ÷ 7 = 11 → habis, sehingga 77 = 7 × 11 → komposit.

---

**19.** Berikut yang merupakan **bilangan komposit** adalah ….
- A. 59
- B. 63
- C. 61
- D. 67

**Kunci: B**
**Pembahasan:**
- **A salah** — 59 prima (cek 2, 3, 5, 7; √59 ≈ 7,7).
- **B benar** — **63 = 7 × 9 = 3² × 7** → komposit.
- **C salah** — 61 prima.
- **D salah** — 67 prima.
- **Konsep kunci:** Bilangan komposit memiliki lebih dari 2 faktor; 63 = 3² × 7 jelas memenuhinya.
- **Langkah Penyelesaian:**
  1. Faktorkan 63 = 3 × 3 × 7 → lebih dari 2 faktor → komposit, sementara 59, 61, 67 prima.

---

**20.** Banyak bilangan komposit dari **1 sampai 10** adalah ….
- A. 5
- B. 3
- C. 6
- D. 4

**Kunci: A**
**Pembahasan:**
- 1–10: 1 (bukan keduanya), prima (2, 3, 5, 7), komposit (**4, 6, 8, 9, 10**).
- **A benar** — Komposit: 4, 6, 8, 9, 10 → **5 bilangan**.
- **B salah** — Lupa 9 atau 10.
- **C salah** — Salah hitung 1 sebagai komposit.
- **D salah** — Lupa salah satu.
- **Konsep kunci:** Komposit dalam suatu rentang dicari dengan menyisihkan 1 dan bilangan prima.
- **Langkah Penyelesaian:**
  1. Dari 1–10 sisihkan 1 dan prima (2, 3, 5, 7), sisanya 4, 6, 8, 9, 10 → 5 komposit.

---

**21.** Faktor dari **12** adalah ….
- A. 1, 2, 3, 4, 6
- B. 1, 2, 3, 4, 6, 12
- C. 2, 3, 4, 6, 12
- D. 2, 3, 4, 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa 12 sendiri.
- **B benar** — **{1, 2, 3, 4, 6, 12}** = 6 faktor → 12 komposit.
- **C salah** — Lupa 1.
- **D salah** — Lupa 1 dan 12.
- **Konsep kunci:** Faktor suatu bilangan adalah semua bilangan yang membaginya habis, termasuk 1 dan dirinya sendiri.
- **Langkah Penyelesaian:**
  1. Bagi 12 dengan 1, 2, 3, 4, 6, 12 → semuanya habis, itulah faktor lengkapnya.

---

**22.** Faktor dari **18** adalah ….
- A. 2, 3, 6, 9, 18
- B. 1, 2, 3, 6, 9
- C. 1, 3, 6, 9, 18
- D. 1, 2, 3, 6, 9, 18

**Kunci: D**
**Pembahasan:**
- **A salah** — Tidak memuat 1.
- **B salah** — Tidak memuat 18.
- **C salah** — Tidak memuat 2.
- **D benar** — **18 = 1 × 18 = 2 × 9 = 3 × 6**, jadi faktor lengkapnya **{1, 2, 3, 6, 9, 18}**.
- **Konsep kunci:** Faktor dibuat berpasangan: 1–18, 2–9, 3–6.
- **Langkah Penyelesaian:**
  1. Pasangkan pembagi 18: 1×18, 2×9, 3×6 → gabungkan jadi 1, 2, 3, 6, 9, 18.

---

**23.** Berikut yang **bukan faktor dari 30** adalah ….
- A. 6
- B. 10
- C. 30
- D. 12

**Kunci: D**
**Pembahasan:**
- Faktor 30 = 2 × 3 × 5: {1, 2, 3, 5, 6, 10, 15, 30}.
- **A salah** — 6 = 2 × 3 → faktor.
- **B salah** — 10 = 2 × 5 → faktor.
- **C salah** — 30 selalu faktor dirinya.
- **D benar** — **12 = 2² × 3** mengandung 2², sedangkan 30 hanya punya satu faktor 2 → **bukan faktor** (30 ÷ 12 ≈ 2,5).
- **Konsep kunci:** Faktor suatu bilangan tidak boleh mengandung faktor prima dengan pangkat lebih besar dari pada bilangan itu.
- **Langkah Penyelesaian:**
  1. Faktorkan 30 = 2 × 3 × 5; karena 12 butuh 2² (dua buah 2) sedangkan 30 hanya punya satu → 12 bukan faktor.

---

**24.** Banyak **faktor** dari bilangan **prima** adalah ….
- A. 2
- B. 3
- C. 1
- D. 4

**Kunci: A**
**Pembahasan:**
- **A benar** — Definisi: **prima = tepat 2 faktor** (1 dan dirinya sendiri).
- **B salah** — Bilangan dengan 3 faktor (mis. 9 = 3²) sudah komposit.
- **C salah** — Hanya angka 1 yang punya 1 faktor.
- **D salah** — 4 faktor berarti sudah komposit.
- **Konsep kunci:** Definisi prima menetapkan tepat 2 faktor sebagai ciri utamanya.
- **Langkah Penyelesaian:**
  1. Ingat definisi prima: tepat 2 faktor (1 dan dirinya sendiri).

---

**25.** Untuk mengecek apakah **n** bilangan prima, cukup mengecek pembagi sampai ….
- A. n
- B. √n (akar n)
- C. n/2
- D. 2n

**Kunci: B**
**Pembahasan:**
- **A salah** — Boros, tidak perlu sejauh n.
- **B benar** — Cukup sampai **√n**. Jika n = a × b dan a ≤ b, maka a ≤ √n. Kalau tidak ada pembagi ≤ √n, pasti prima.
- **C salah** — Masih terlalu jauh.
- **D salah** — Tidak masuk akal (lebih besar dari n).
- **Konsep kunci:** Cukup mengecek pembagi sampai akar kuadrat (√n) untuk menentukan keprimaan n.
- **Langkah Penyelesaian:**
  1. Ingat sifat: jika n = a × b dan a ≤ b maka a ≤ √n, jadi cek pembagi hanya sampai √n.

---

**26.** Untuk mengecek **97** prima atau bukan, cukup cek pembagi prima ….
- A. 2, 3, 5
- B. 2, 3, 5, 7, 11
- C. 2, 3, 5, 7
- D. semua bilangan sampai 97

**Kunci: C**
**Pembahasan:**
- **A salah** — Tidak cukup; 7 juga harus dicek.
- **B salah** — Sudah melewati √97 ≈ 9,85; mubazir.
- **C benar** — √97 ≈ 9,85. Prima ≤ 9: **2, 3, 5, 7**.
- **D salah** — Boros sekali.
- **Konsep kunci:** Batas pengecekan pembagi prima ditentukan oleh akar kuadrat bilangan yang diuji.
- **Langkah Penyelesaian:**
  1. Hitung √97 ≈ 9,85 → prima ≤ 9 yang perlu dicek hanyalah 2, 3, 5, 7.

---

**27.** Bilangan **prima ke-5** (urutan: ke-1 = 2) adalah ….
- A. 7
- B. 9
- C. 13
- D. 11

**Kunci: D**
**Pembahasan:**
- Urutan: ke-1 = 2, ke-2 = 3, ke-3 = 5, ke-4 = 7, **ke-5 = 11**.
- **A salah** — 7 adalah prima ke-4.
- **B salah** — 9 bukan prima (9 = 3²).
- **C salah** — 13 adalah prima ke-6.
- **D benar** — **Prima ke-5 = 11.**
- **Konsep kunci:** Urutan bilangan prima dihitung dari yang terkecil secara berurutan.
- **Langkah Penyelesaian:**
  1. Tulis urutan 2, 3, 5, 7, 11 → yang kelima adalah 11.

---

**28.** Bilangan **prima ke-9** adalah ….
- A. 23
- B. 19
- C. 29
- D. 17

**Kunci: A**
**Pembahasan:**
- Urutan: 2, 3, 5, 7, 11, 13, 17, 19, **23**, 29, ...
- **A benar** — Prima ke-9 = **23**.
- **B salah** — 19 = prima ke-8.
- **C salah** — 29 = prima ke-10.
- **D salah** — 17 = prima ke-7.
- **Konsep kunci:** Urutan bilangan prima dihitung dari yang terkecil secara berurutan.
- **Langkah Penyelesaian:**
  1. Hitung sampai urutan ke-9 pada daftar prima: 2, 3, 5, 7, 11, 13, 17, 19, 23 → 23.

---

**29.** Total banyak bilangan prima dari **1 sampai 100** adalah ….
- A. 20
- B. 25
- C. 30
- D. 24

**Kunci: B**
**Pembahasan:**
- Prima 1–100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 → **25 bilangan**.
- **A salah** — Terlalu sedikit.
- **B benar** — **Tepat 25 prima** ≤ 100 (wajib hafal!).
- **C salah** — Terlalu banyak.
- **D salah** — Salah hitung.
- **Konsep kunci:** Total 25 bilangan prima dari 1 sampai 100 adalah fakta dasar yang wajib dihafal.
- **Langkah Penyelesaian:**
  1. Ingat daftar prima ≤ 100 yang khas 25 bilangan → jawabannya 25.

---

**30.** Bilangan prima **terbesar yang kurang dari 100** adalah ….
- A. 99
- B. 91
- C. 97
- D. 89

**Kunci: C**
**Pembahasan:**
- **A salah** — 99 = 9 × 11 = 3² × 11.
- **B salah** — 91 = 7 × 13 (komposit).
- **C benar** — **97 prima**. Tidak ada prima antara 97 dan 100 (98 genap, 99 komposit).
- **D salah** — 89 prima tapi bukan yang terbesar < 100.
- **Konsep kunci:** Bilangan dekat 100 harus dicek satu per satu untuk menemukan prima terbesar di bawahnya.
- **Langkah Penyelesaian:**
  1. Cek dari 99 ke bawah: 99 dan 98 komposit, 97 tidak habis ÷ 2, 3, 5, 7 → prima terbesar.

---

**31.** Bilangan **33** adalah ….
- A. prima
- B. genap
- C. lebih besar dari 100
- D. komposit, karena 33 = 3 × 11

**Kunci: D**
**Pembahasan:**
- **A salah** — Sering keliru; padahal 3 + 3 = 6 habis ÷ 3.
- **B salah** — 33 ganjil.
- **C salah** — 33 jauh lebih kecil dari 100.
- **D benar** — **33 = 3 × 11** → komposit.
- **Konsep kunci:** Aturan habis dibagi 3 (jumlah digit) menangkap bilangan komposit yang menyamar.
- **Langkah Penyelesaian:**
  1. Jumlahkan digit 33 = 6 (habis ÷ 3), bagi 33 ÷ 3 = 11 → komposit.

---

**32.** Berikut yang merupakan **bilangan prima** adalah ….
- A. 61
- B. 63
- C. 65
- D. 69

**Kunci: A**
**Pembahasan:**
- **A benar** — **61 prima**. Cek 2, 3, 5, 7 (√61 ≈ 7,8): tidak ada yang habis.
- **B salah** — 63 = 7 × 9 = 3² × 7.
- **C salah** — 65 = 5 × 13.
- **D salah** — 69 = 3 × 23.
- **Konsep kunci:** Uji keprimaan dilakukan dengan mengecek pembagi kecil satu per satu.
- **Langkah Penyelesaian:**
  1. Faktorkan 63, 65, 69 (semua komposit), sedangkan 61 tidak habis dibagi 2, 3, 5, 7 → prima.

---

**33.** Bilangan **119** adalah ….
- A. prima
- B. komposit, karena 119 = 7 × 17
- C. genap
- D. lebih kecil dari 100

**Kunci: B**
**Pembahasan:**
- **A salah** — JEBAKAN KLASIK OSN! 119 tidak habis ÷ 2, 3, 5, tapi belum cek 7.
- **B benar** — **119 = 7 × 17** → komposit. Wajib cek pembagi 7!
- **C salah** — 119 ganjil.
- **D salah** — 119 > 100.
- **Konsep kunci:** 119 adalah jebakan klasik OSN karena lolos cek 2, 3, 5 tapi habis dibagi 7.
- **Langkah Penyelesaian:**
  1. Cek 119 ÷ 7 = 17 → habis, sehingga 119 = 7 × 17 → komposit.

---

**34.** Banyak bilangan prima dari **40 sampai 50** adalah ….
- A. 4
- B. 5
- C. 3
- D. 2

**Kunci: C**
**Pembahasan:**
- Prima 40–50: **41, 43, 47** → **3 bilangan**.
- **A salah** — Salah hitung 49 (= 7²) sebagai prima.
- **B salah** — Tambah bilangan komposit.
- **C benar** — Tepat 3.
- **D salah** — Lupa salah satu.
- **Konsep kunci:** Menghitung prima dalam rentang sempit dengan menguji tiap kandidat ganjil.
- **Langkah Penyelesaian:**
  1. Uji bilangan ganjil 41–49: 41, 43, 47 prima; 45 (÷5) dan 49 (7²) komposit → ada 3.

---

**35.** Bilangan **2** adalah ….
- A. komposit
- B. bukan prima dan bukan komposit
- C. negatif
- D. satu-satunya prima genap

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 hanya punya 2 faktor (1 dan 2).
- **B salah** — 2 memenuhi definisi prima.
- **C salah** — 2 positif.
- **D benar** — **2 = prima** (faktor 1 dan 2) DAN **genap**. Genap lain habis ÷ 2 sehingga komposit. Jadi 2 unik.
- **Konsep kunci:** Angka 2 unik karena satu-satunya bilangan yang sekaligus prima dan genap.
- **Langkah Penyelesaian:**
  1. Cek 2: faktornya 1 dan 2 (prima) dan habis dibagi 2 (genap) → satu-satunya prima genap.

---

**36.** Jika **p** bilangan prima dan **p > 2**, maka p pasti ….
- A. ganjil
- B. genap
- C. habis dibagi 3
- D. habis dibagi 5

**Kunci: A**
**Pembahasan:**
- **A benar** — Prima > 2 pasti **ganjil**, karena kalau genap pasti habis ÷ 2 → bukan prima. (Sebaliknya tidak berlaku: banyak ganjil komposit.)
- **B salah** — Semua genap > 2 habis ÷ 2 → komposit.
- **C salah** — Hanya 3 yang habis ÷ 3 dan tetap prima.
- **D salah** — Hanya 5.
- **Konsep kunci:** Semua prima lebih dari 2 pasti ganjil karena bilangan genap lebih dari 2 selalu komposit.
- **Langkah Penyelesaian:**
  1. Andaikan p genap dan lebih dari 2 → habis dibagi 2 → komposit. Jadi prima > 2 harus ganjil.

---

**37.** Bilangan asli lebih dari 1 yang **bukan prima** disebut ….
- A. genap
- B. komposit
- C. ganjil
- D. nol

**Kunci: B**
**Pembahasan:**
- **A salah** — Genap/ganjil kategori berbeda (dasar habis ÷ 2).
- **B benar** — Definisi: bilangan asli > 1 yang **bukan prima** = **komposit**.
- **C salah** — Ganjil bisa prima maupun komposit.
- **D salah** — Nol bukan asli > 1.
- **Konsep kunci:** Setiap bilangan asli lebih dari 1 pasti prima atau komposit.
- **Langkah Penyelesaian:**
  1. Ingat pembagian kategori: asli > 1 terbagi menjadi prima dan komposit; yang bukan prima berarti komposit.

---

**38.** Banyak bilangan komposit dari **1 sampai 15** adalah ….
- A. 6
- B. 7
- C. 8
- D. 9

**Kunci: C**
**Pembahasan:**
- 1–15: 1 (bukan keduanya), prima (2, 3, 5, 7, 11, 13 → 6 buah), komposit (**4, 6, 8, 9, 10, 12, 14, 15**).
- **A salah** — Lupa beberapa.
- **B salah** — Salah hitung.
- **C benar** — Komposit: 4, 6, 8, 9, 10, 12, 14, 15 → **8 bilangan**.
- **D salah** — Salah hitung 1 sebagai komposit.
- **Konsep kunci:** Komposit = total rentang − angka 1 − banyak prima.
- **Langkah Penyelesaian:**
  1. Hitung 15 − 1 (angka 1) − 6 (prima) = 8 komposit.

---

**39.** Berikut yang merupakan **bilangan komposit** adalah ….
- A. 67
- B. 71
- C. 73
- D. 87

**Kunci: D**
**Pembahasan:**
- **A salah** — 67 prima.
- **B salah** — 71 prima.
- **C salah** — 73 prima.
- **D benar** — **87 = 3 × 29** (8 + 7 = 15, habis ÷ 3) → komposit.
- **Konsep kunci:** Aturan habis dibagi 3 membantu menemukan bilangan komposit dengan cepat.
- **Langkah Penyelesaian:**
  1. Cek 8 + 7 = 15 habis ÷ 3 → 87 = 3 × 29 → komposit, sementara 67, 71, 73 prima.

---

**40.** Banyak bilangan prima dari **50 sampai 60** adalah ….
- A. 2
- B. 3
- C. 4
- D. 1

**Kunci: A**
**Pembahasan:**
- Prima 50–60: **53, 59** → **2 bilangan**.
- **A benar** — Tepat 2.
- **B salah** — Salah masukkan 57 (= 3 × 19).
- **C salah** — Salah masukkan bilangan komposit.
- **D salah** — Lupa salah satu.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menguji tiap kandidat.
- **Langkah Penyelesaian:**
  1. Uji bilangan 51–59: hanya 53 dan 59 yang prima (51, 55, 57 komposit) → ada 2.

---

**41.** Jumlah dua bilangan **prima terkecil** adalah ….
- A. 4
- B. 5
- C. 6
- D. 7

**Kunci: B**
**Pembahasan:**
- Dua prima terkecil = **2 dan 3**. Jumlah = 2 + 3 = **5**.
- **A salah** — 2 + 2, tetapi pakai prima yang sama.
- **B benar** — **2 + 3 = 5**.
- **C salah** — 3 + 3 memakai prima yang sama.
- **D salah** — 2 + 5 bukan dua prima pertama.
- **Konsep kunci:** Dua bilangan prima terkecil adalah 2 dan 3.
- **Langkah Penyelesaian:**
  1. Ambil dua prima terkecil (2 dan 3) lalu jumlahkan → 5.

---

**42.** Pasangan berikut yang merupakan **twin prime** adalah ….
- A. (7, 11)
- B. (13, 17)
- C. (5, 7)
- D. (23, 29)

**Kunci: C**
**Pembahasan:**
- **A salah** — Selisih 4 (cousin prime), bukan twin.
- **B salah** — Selisih 4 (cousin prime).
- **C benar** — **5** dan **7** keduanya prima dan selisih = 2 → **twin prime**.
- **D salah** — Selisih 6 (sexy prime).
- **Konsep kunci:** Twin prime dikenali dengan mengecek keprimaan kedua bilangan dan selisihnya = 2.
- **Langkah Penyelesaian:**
  1. Hitung selisih tiap pasangan dan cek keprimaan: hanya (5, 7) yang selisihnya 2.

---

**43.** Faktorisasi prima dari **12** adalah ….
- A. 4 × 3
- B. 2 × 6
- C. 3 × 4
- D. 2 × 2 × 3

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 bukan prima.
- **B salah** — 6 bukan prima.
- **C salah** — Sama dengan A (4 bukan prima).
- **D benar** — **12 = 2 × 2 × 3**, semua faktornya prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali bilangan-bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Pecah 12 terus-menerus dengan prima terkecil: 12 = 2 × 6 = 2 × 2 × 3.

---

**44.** Bilangan **121** adalah ….
- A. komposit, karena 121 = 11 × 11
- B. prima
- C. genap
- D. habis dibagi 3

**Kunci: A**
**Pembahasan:**
- **A benar** — **121 = 11² = 11 × 11**. Faktor: 1, 11, 121 → 3 faktor → komposit.
- **B salah** — Punya pembagi 11.
- **C salah** — 121 ganjil.
- **D salah** — 1 + 2 + 1 = 4, tidak habis ÷ 3.
- **Konsep kunci:** Bilangan kuadrat dari suatu prima (p²) selalu komposit karena punya 3 faktor.
- **Langkah Penyelesaian:**
  1. Kenali 121 = 11² → punya faktor 11 selain 1 dan 121 → komposit.

---

**45.** Banyak bilangan prima dari **70 sampai 80** adalah ….
- A. 2
- B. 3
- C. 4
- D. 1

**Kunci: B**
**Pembahasan:**
- Cek 71, 73, 77, 79 (bilangan ganjil 70–80): **71, 73, 79 prima**; 77 = 7 × 11 (komposit).
- **A salah** — Lupa 73 atau 79.
- **B benar** — **71, 73, 79** → **3 prima**.
- **C salah** — Salah hitung 77 sebagai prima.
- **D salah** — Terlalu sedikit.
- **Konsep kunci:** Menghitung prima dalam rentang sempit dengan menguji tiap bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Uji 71, 73, 77, 79: 77 komposit, sisanya prima → ada 3.

---

**46.** Berikut yang **bukan komposit** adalah ….
- A. 25
- B. 27
- C. 29
- D. 33

**Kunci: C**
**Pembahasan:**
- **A salah** — 25 = 5².
- **B salah** — 27 = 3³.
- **C benar** — **29 prima**. Cek 2, 3, 5 (√29 ≈ 5,4): tidak ada yang habis → bukan komposit.
- **D salah** — 33 = 3 × 11.
- **Konsep kunci:** "Bukan komposit" berarti prima; uji keprimaan dengan pembagi kecil.
- **Langkah Penyelesaian:**
  1. Faktorkan 25, 27, 33 (semua komposit); 29 tidak habis dibagi 2, 3, 5 → prima.

---

**47.** Faktorisasi prima dari **60** adalah ….
- A. 2 × 30
- B. 4 × 15
- C. 6 × 10
- D. 2² × 3 × 5

**Kunci: D**
**Pembahasan:**
- **A salah** — 30 bukan prima.
- **B salah** — 4 dan 15 bukan prima.
- **C salah** — 6 dan 10 bukan prima.
- **D benar** — **60 = 2² × 3 × 5 = 4 × 3 × 5**, semua faktor prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali bilangan-bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Pecah 60: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 → 2² × 3 × 5.

---

**48.** Bilangan **35** adalah ….
- A. komposit, karena 35 = 5 × 7
- B. prima
- C. genap
- D. negatif

**Kunci: A**
**Pembahasan:**
- **A benar** — **35 = 5 × 7**, punya 4 faktor (1, 5, 7, 35) → **komposit**.
- **B salah** — Sering keliru karena ganjil; padahal punya pembagi 5.
- **C salah** — 35 ganjil.
- **D salah** — 35 positif.
- **Konsep kunci:** Akhiran 5 langsung menandakan habis dibagi 5 → komposit.
- **Langkah Penyelesaian:**
  1. 35 berakhiran 5 → habis ÷ 5, 35 ÷ 5 = 7 → komposit.

---

**49.** Banyak bilangan prima dari **10 sampai 20** adalah ….
- A. 5
- B. 4
- C. 6
- D. 3

**Kunci: B**
**Pembahasan:**
- Prima 10–20: **11, 13, 17, 19** → **4 bilangan**.
- **A salah** — Salah masukkan 15 (= 3 × 5).
- **B benar** — Tepat 4.
- **C salah** — Salah hitung 9 atau 15 sebagai prima.
- **D salah** — Lupa salah satu.
- **Konsep kunci:** Menghitung prima dalam rentang dengan mendaftar dan menyaring komposit.
- **Langkah Penyelesaian:**
  1. Cek 11, 13, 15, 17, 19: 15 komposit → prima 11, 13, 17, 19 → ada 4.

---

**50.** Berikut yang **bukan prima** adalah ….
- A. 41
- B. 43
- C. 49
- D. 47

**Kunci: C**
**Pembahasan:**
- **A salah** — 41 prima.
- **B salah** — 43 prima.
- **C benar** — **49 = 7 × 7** → komposit. Lolos cek 2, 3, 5 tapi gugur di pembagi 7.
- **D salah** — 47 prima.
- **Konsep kunci:** Selalu cek pembagi 7 untuk bilangan yang lolos cek 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Cek 41, 43, 47 tetap prima; 49 = 7 × 7 → bukan prima.

---

## PROV · Soal 51-100 (Tingkat Provinsi, C3-C4)

**51.** Bilangan **221** adalah ….
- A. komposit, karena 221 = 13 × 17
- B. prima
- C. genap
- D. lebih kecil dari 100

**Kunci: A**
**Pembahasan:**
- **A benar** — **221 = 13 × 17** (perkalian dua prima berurutan — sering muncul di OSN). Komposit.
- **B salah** — Punya pembagi 13.
- **C salah** — 221 ganjil.
- **D salah** — 221 > 100.
- **Konsep kunci:** Uji keprimaan bilangan tiga digit membutuhkan pengecekan pembagi prima sampai akar kuadratnya.
- **Langkah Penyelesaian:**
  1. Hitung √221 ≈ 14,9 dan cek pembagi prima ≤ 14: 2, 3, 5, 7, 11, 13. 221 ÷ 13 = 17 habis.
  2. Simpulkan 221 = 13 × 17 → komposit (jawaban A).

---

**52.** Bilangan **221** adalah ….
- A. prima
- B. komposit, karena 221 = 13 × 17
- C. habis dibagi 3
- D. lebih kecil dari 100

**Kunci: B**
**Pembahasan:**
- **A salah** — Sering disangka prima karena tidak habis ÷ 2, 3, 5, 7, 11.
- **B benar** — **221 = 13 × 17** → komposit (soal klasik OSN!).
- **C salah** — 2 + 2 + 1 = 5, tidak habis ÷ 3.
- **D salah** — 221 > 100.
- **Konsep kunci:** Bilangan yang lolos beberapa cek pembagi kecil tetap harus diuji sampai akar kuadratnya.
- **Langkah Penyelesaian:**
  1. Hitung √221 ≈ 14,9 dan cek pembagi prima ≤ 14: 221 ÷ 13 = 17 habis.
  2. Simpulkan 221 = 13 × 17 → komposit (jawaban B).

---

**53.** Jika **p dan q bilangan prima**, **p × q = 35**, dan p < q, maka **p + q** = ….
- A. 8
- B. 10
- C. 12
- D. 14

**Kunci: C**
**Pembahasan:**
- Faktorkan 35 = 5 × 7. Jadi {p, q} = {5, 7}.
- p + q = **5 + 7 = 12**.
- **A salah** — Salah penjumlahan.
- **B salah** — Salah faktor.
- **C benar** — **12**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Faktorisasi prima suatu bilangan dipakai untuk mencari dua prima penyusunnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 35 = 5 × 7 → p = 5, q = 7.
  2. Jumlahkan: 5 + 7 = 12 (jawaban C).

---

**54.** Banyak faktor dari **30** adalah ….
- A. 6
- B. 4
- C. 5
- D. 8

**Kunci: D**
**Pembahasan:**
- 30 = 2 × 3 × 5. Faktor: {1, 2, 3, 5, 6, 10, 15, 30}.
- **A salah** — Lupa beberapa.
- **B salah** — Terlalu sedikit.
- **C salah** — Lupa 6, 10, 15.
- **D benar** — **8 faktor**. (Rumus: (1+1)(1+1)(1+1) = 8.)
- **Konsep kunci:** Rumus banyak faktor menggunakan pangkat pada faktorisasi prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 30 = 2¹ × 3¹ × 5¹.
  2. Terapkan rumus (1+1)(1+1)(1+1) = 8 (jawaban D).

---

**55.** Bilangan asli **terkecil** yang memiliki **tepat 3 faktor** adalah ….
- A. 4
- B. 9
- C. 6
- D. 8

**Kunci: A**
**Pembahasan:**
- Tepat 3 faktor terjadi bila bilangan = p² (kuadrat prima). Faktornya: 1, p, p².
- p terkecil = 2 → bilangan = **4** (faktor 1, 2, 4).
- **A benar** — **4** = 2² punya 3 faktor.
- **B salah** — 9 = 3² punya 3 faktor, tapi 4 lebih kecil.
- **C salah** — 6 punya 4 faktor (1, 2, 3, 6).
- **D salah** — 8 = 2³ punya 4 faktor.
- **Konsep kunci:** Bilangan dengan tepat 3 faktor selalu berbentuk kuadrat dari bilangan prima (p²).
- **Langkah Penyelesaian:**
  1. Gunakan bentuk p² → faktor {1, p, p²}.
  2. Ambil prima terkecil 2 → 2² = 4 (jawaban A).

---

**56.** Jumlah semua bilangan **prima dari 1 sampai 10** adalah ….
- A. 12
- B. 17
- C. 15
- D. 19

**Kunci: B**
**Pembahasan:**
- Prima 1–10: 2, 3, 5, 7. Jumlah = 2 + 3 + 5 + 7 = **17**.
- **A salah** — Lupa 7.
- **B benar** — **17**.
- **C salah** — Salah hitung.
- **D salah** — Salah masukkan 9.
- **Konsep kunci:** Menjumlahkan seluruh bilangan prima dalam rentang tertentu.
- **Langkah Penyelesaian:**
  1. Daftar prima 1–10: 2, 3, 5, 7.
  2. Jumlahkan: 2 + 3 + 5 + 7 = 17 (jawaban B).

---

**57.** Jumlah semua bilangan **prima dari 10 sampai 20** adalah ….
- A. 48
- B. 50
- C. 60
- D. 36

**Kunci: C**
**Pembahasan:**
- Prima 10–20: 11, 13, 17, 19. Jumlah = 11 + 13 + 17 + 19 = **60**.
- **A salah** — Salah hitung.
- **B salah** — Lupa salah satu.
- **C benar** — **60**.
- **D salah** — Lupa 19 atau salah masukkan 15.
- **Konsep kunci:** Menjumlahkan seluruh bilangan prima dalam rentang tertentu.
- **Langkah Penyelesaian:**
  1. Daftar prima 10–20: 11, 13, 17, 19.
  2. Jumlahkan bertahap: 11 + 13 = 24, +17 = 41, +19 = 60 (jawaban C).

---

**58.** Jika **a × b = 77** dengan a, b bilangan prima dan a < b, maka **b − a** = ….
- A. 6
- B. 2
- C. 8
- D. 4

**Kunci: D**
**Pembahasan:**
- 77 = 7 × 11. Jadi a = 7, b = 11.
- b − a = 11 − 7 = **4**.
- **A salah** — Mungkin kira 5 × ?, keliru.
- **B salah** — Bukan twin.
- **C salah** — Bukan 8.
- **D benar** — **4**.
- **Konsep kunci:** Faktorisasi prima membantu menemukan dua bilangan prima penyusun suatu perkalian.
- **Langkah Penyelesaian:**
  1. Faktorkan 77 = 7 × 11 → a = 7, b = 11.
  2. Kurangkan: 11 − 7 = 4 (jawaban D).

---

**59.** Jumlah **prima ke-3** dan **prima ke-7** adalah ….
- A. 22
- B. 19
- C. 20
- D. 24

**Kunci: A**
**Pembahasan:**
- Urutan: 2, 3, 5, 7, 11, 13, 17, ...
- Prima ke-3 = 5; prima ke-7 = 17.
- Jumlah = 5 + 17 = **22**.
- **A benar** — **22**.
- **B salah** — Salah urutan.
- **C salah** — Salah hitung.
- **D salah** — Mungkin prima ke-8 (19) salah pilih.
- **Konsep kunci:** Mengenali urutan bilangan prima untuk menemukan prima pada posisi tertentu.
- **Langkah Penyelesaian:**
  1. Tulis urutan prima sampai ke-7: 2, 3, 5, 7, 11, 13, 17.
  2. Jumlahkan prima ke-3 (5) dan ke-7 (17) = 22 (jawaban A).

---

**60.** Banyak faktor dari **2⁵ = 32** adalah ….
- A. 5
- B. 6
- C. 7
- D. 8

**Kunci: B**
**Pembahasan:**
- 32 = 2⁵. Banyak faktor = pangkat + 1 = 5 + 1 = **6**.
- (Faktornya: 1, 2, 4, 8, 16, 32.)
- **A salah** — Lupa menambah 1 pada pangkat sebagai jumlah faktor.
- **B benar** — **6 faktor**.
- **C salah** — Salah aturan.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Banyak faktor bilangan berbentuk pangkat tunggal = pangkat + 1.
- **Langkah Penyelesaian:**
  1. Kenali 32 = 2⁵ (pangkat tunggal 5).
  2. Banyak faktor = 5 + 1 = 6 (jawaban B).

---

**61.** Faktorisasi prima dari **144** adalah ….
- A. 2³ × 3²
- B. 2² × 3³
- C. 2⁴ × 3²
- D. 2² × 3² × 4

**Kunci: C**
**Pembahasan:**
- 144 = 16 × 9 = (2⁴) × (3²).
- **A salah** — 2³ × 3² = 8 × 9 = 72, bukan 144.
- **B salah** — 2² × 3³ = 4 × 27 = 108, bukan 144.
- **C benar** — **144 = 2⁴ × 3²** (16 × 9 = 144 ✓).
- **D salah** — 4 bukan prima; 2² × 3² × 4 = 4 × 9 × 4 = 144 tapi belum faktorisasi prima.
- **Konsep kunci:** Pecah bilangan menjadi kuadrat-kuadrat sempurna lalu lanjutkan ke faktor prima.
- **Langkah Penyelesaian:**
  1. Tulis 144 = 16 × 9.
  2. Pecah 16 = 2⁴ dan 9 = 3² → 144 = 2⁴ × 3² (jawaban C).

---

**62.** Banyak faktor dari **72** (72 = 2³ × 3²) adalah ….
- A. 6
- B. 9
- C. 8
- D. 12

**Kunci: D**
**Pembahasan:**
- Banyak faktor = (3+1)(2+1) = 4 × 3 = **12**.
- **A salah** — Salah aturan.
- **B salah** — Hanya hitung satu prima.
- **C salah** — Salah perhitungan.
- **D benar** — **12**.
- **Konsep kunci:** Rumus banyak faktor dari faktorisasi prima adalah hasil kali (pangkat+1) tiap prima.
- **Langkah Penyelesaian:**
  1. Identifikasi pangkat 2³ dan 3².
  2. Hitung (3+1)(2+1) = 4 × 3 = 12 (jawaban D).

---

**63.** Banyak bilangan prima dari **20 sampai 40** adalah ….
- A. 4
- B. 3
- C. 5
- D. 2

**Kunci: A**
**Pembahasan:**
- Prima 20–40: **23, 29, 31, 37** → **4 bilangan**.
- **A benar** — Tepat 4.
- **B salah** — Lupa salah satu (sering 23 terlewat).
- **C salah** — Salah masukkan 39 (= 3 × 13).
- **D salah** — Lupa banyak.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menyaring bilangan komposit.
- **Langkah Penyelesaian:**
  1. Tulis daftar prima yang dihafal: 23, 29, 31, 37 berada di rentang 20–40.
  2. Hitung banyaknya = 4 (jawaban A).

---

**64.** Selisih antara **prima ke-9** dan **prima ke-5** adalah ….
- A. 10
- B. 12
- C. 14
- D. 16

**Kunci: B**
**Pembahasan:**
- Urutan: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...
- Prima ke-9 = 23; prima ke-5 = 11.
- Selisih = 23 − 11 = **12**.
- **A salah** — Salah urutan.
- **B benar** — **12**.
- **C salah** — Salah salah satu prima.
- **D salah** — Salah hitung.
- **Konsep kunci:** Mengurutkan bilangan prima untuk menentukan posisi, lalu menghitung selisih.
- **Langkah Penyelesaian:**
  1. Ambil prima ke-5 (11) dan ke-9 (23).
  2. Kurangkan: 23 − 11 = 12 (jawaban B).

---

**65.** Bilangan **323** adalah ….
- A. prima
- B. habis dibagi 5
- C. komposit, karena 323 = 17 × 19
- D. genap

**Kunci: C**
**Pembahasan:**
- **A salah** — Sering keliru; √323 ≈ 17,9 jadi harus cek sampai 17.
- **B salah** — Tidak berakhiran 0/5.
- **C benar** — **323 = 17 × 19** (dua twin prime!) → komposit.
- **D salah** — 323 ganjil.
- **Konsep kunci:** Uji keprimaan bilangan besar dilakukan dengan mencoba pembagi prima sampai akar kuadratnya.
- **Langkah Penyelesaian:**
  1. Hitung √323 ≈ 17,9 dan cek pembagi prima sampai 17: 323 ÷ 17 = 19 habis.
  2. Simpulkan 323 = 17 × 19 → komposit (jawaban C).

---

**66.** Banyak faktor dari **100** adalah ….
- A. 6
- B. 8
- C. 10
- D. 9

**Kunci: D**
**Pembahasan:**
- 100 = 2² × 5². Banyak faktor = (2+1)(2+1) = 3 × 3 = **9**.
- (Faktornya: 1, 2, 4, 5, 10, 20, 25, 50, 100.)
- **A salah** — Salah aturan.
- **B salah** — Lupa satu prima.
- **C salah** — Salah hitung.
- **D benar** — **9 faktor**.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) tiap prima pada faktorisasi.
- **Langkah Penyelesaian:**
  1. Faktorkan 100 = 2² × 5².
  2. Hitung (2+1)(2+1) = 9 (jawaban D).

---

**67.** Bilangan asli (> 1) **terkecil** yang memiliki **tepat 5 faktor** adalah ….
- A. 16
- B. 32
- C. 25
- D. 18

**Kunci: A**
**Pembahasan:**
- Tepat 5 faktor terjadi bila bilangan = p⁴ (faktor 1, p, p², p³, p⁴).
- p terkecil = 2 → bilangan = **2⁴ = 16**.
- **A benar** — **16 = 2⁴** punya tepat 5 faktor.
- **B salah** — 32 = 2⁵ → 6 faktor.
- **C salah** — 25 = 5² → 3 faktor.
- **D salah** — 18 = 2 × 3² → 6 faktor.
- **Konsep kunci:** Bilangan dengan tepat 5 faktor selalu berbentuk pangkat empat dari bilangan prima (p⁴).
- **Langkah Penyelesaian:**
  1. Gunakan bentuk p⁴ → faktor {1, p, p², p³, p⁴}.
  2. Ambil prima terkecil 2 → 2⁴ = 16 (jawaban A).

---

**68.** Pernyataan yang **benar** untuk dua bilangan prima ganjil yang jumlahnya **18** adalah ….
- A. 5 + 13 = 18
- B. 7 + 11 = 18
- C. 3 + 15 = 18
- D. **A dan B benar**

**Kunci: D**
**Pembahasan:**
- **A salah** — Benar, tapi belum lengkap.
- **B salah** — Benar, tapi belum lengkap.
- **C salah** — 15 bukan bilangan prima, jadi pernyataan ini salah.
- **D benar** — **5 + 13 dan 7 + 11** keduanya benar.
- **Konsep kunci:** Bisa ada lebih dari satu pasangan bilangan prima yang menjumlah ke bilangan genap yang sama (ilustrasi Goldbach).
- **Langkah Penyelesaian:**
  1. Cek tiap pasangan: 5+13 = 18 (keduanya prima), 7+11 = 18 (keduanya prima).
  2. Cek 3+15: 15 bukan prima → salah.
  3. Jadi A dan B benar (jawaban D).

---

**69.** Banyak bilangan prima dari **100 sampai 110** adalah ….
- A. 4
- B. 3
- C. 2
- D. 5

**Kunci: A**
**Pembahasan:**
- Cek tiap bilangan 100–110: 101, 103, 107, 109 prima; sisanya komposit (100 = 2²×5², 102 = 2×3×17, 104 = 2³×13, 105 = 3×5×7, 106 = 2×53, 108 = 2²×27, 110 = 2×5×11).
- **A benar** — **4 prima**: 101, 103, 107, 109.
- **B salah** — Lupa 101 atau 109.
- **C salah** — Lupa banyak.
- **D salah** — Salah hitung.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menguji tiap bilangan satu per satu.
- **Langkah Penyelesaian:**
  1. Uji bilangan genap dan kelipatan 5/3 di 100–110 → buang sebagai komposit.
  2. Sisa 101, 103, 107, 109 → 4 prima (jawaban A).

---

**70.** Faktorisasi prima dari **60** adalah ….
- A. 2 × 30
- B. 2² × 3 × 5
- C. 4 × 15
- D. 3 × 20

**Kunci: B**
**Pembahasan:**
- **A salah** — 30 bukan prima.
- **B benar** — **60 = 2² × 3 × 5** = 4 × 3 × 5, semua faktor prima.
- **C salah** — 4 dan 15 bukan prima.
- **D salah** — 20 bukan prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan hanya dengan faktor-faktor prima.
- **Langkah Penyelesaian:**
  1. Pecah 60 bertahap: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5.
  2. Gabungkan pangkat: 2² × 3 × 5 (jawaban B).

---

**71.** Nilai dari **2² + 1** adalah …. Bilangan itu termasuk **prima**.
- A. 3
- B. 4
- C. 5
- D. 6

**Kunci: C**
**Pembahasan:**
- 2² + 1 = 4 + 1 = **5**, dan 5 adalah bilangan prima.
- **A salah** — 3 = 2¹ + 1, bukan 2² + 1.
- **B salah** — 4 bukan hasilnya (dan 4 komposit).
- **C benar** — **5** (= 2² + 1) prima.
- **D salah** — 6 komposit dan bukan hasil 2² + 1.
- **Konsep kunci:** Hitung bentuk pangkat lalu uji keprimaan hasilnya.
- **Langkah Penyelesaian:**
  1. Hitung 2² + 1 = 5.
  2. Cek 5 prima (faktor 1 dan 5 saja) → jawaban C.

---

**72.** Banyak bilangan **komposit** dari **1 sampai 30** adalah ….
- A. 18
- B. 20
- C. 21
- D. 19

**Kunci: D**
**Pembahasan:**
- 1–30: 30 bilangan. Kurangi 1 (angka 1) dan 10 prima (2, 3, 5, 7, 11, 13, 17, 19, 23, 29).
- Komposit = 30 − 1 − 10 = **19**.
- **A salah** — Salah hitung prima.
- **B salah** — Salah masukkan angka 1 sebagai komposit.
- **C salah** — Lupa kurangi angka 1.
- **D benar** — **19 komposit**.
- **Konsep kunci:** Komposit = total − 1 − banyak prima dalam rentang.
- **Langkah Penyelesaian:**
  1. Hitung banyak prima 1–30 = 10 (daftar yang dihafal).
  2. Kurangkan: 30 − 1 − 10 = 19 (jawaban D).

---

**73.** Bilangan **101** adalah ….
- A. prima
- B. komposit
- C. genap
- D. habis dibagi 11

**Kunci: A**
**Pembahasan:**
- **A benar** — **101 prima**. √101 ≈ 10,05; cek 2, 3, 5, 7: tidak ada yang habis.
- **B salah** — Tidak punya pembagi prima ≤ √101.
- **C salah** — 101 ganjil.
- **D salah** — 101 ÷ 11 ≈ 9,18 (tidak habis).
- **Konsep kunci:** Uji keprimaan bilangan tiga digit cukup dengan mengecek pembagi sampai akar kuadratnya.
- **Langkah Penyelesaian:**
  1. Hitung √101 ≈ 10,05 dan cek 2, 3, 5, 7.
  2. Tidak ada yang membagi 101 habis → prima (jawaban A).

---

**74.** Banyak faktor dari **36** adalah ….
- A. 8
- B. 9
- C. 10
- D. 12

**Kunci: B**
**Pembahasan:**
- 36 = 2² × 3². Banyak faktor = (2+1)(2+1) = 3 × 3 = **9**.
- (Faktornya: 1, 2, 3, 4, 6, 9, 12, 18, 36.)
- **A salah** — Salah aturan.
- **B benar** — **9 faktor**.
- **C salah** — Salah hitung.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) tiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 36 = 2² × 3².
  2. Hitung (2+1)(2+1) = 9 (jawaban B).

---

**75.** Hasil kali dua bilangan **prima terkecil** adalah ….
- A. 5
- B. 4
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- Dua prima terkecil = 2 dan 3.
- Hasil kali = 2 × 3 = **6**.
- **A salah** — Itu jumlahnya (2 + 3).
- **B salah** — 2 × 2 memakai prima yang sama.
- **C benar** — **2 × 3 = 6**.
- **D salah** — 2 × 4, dan 4 bukan prima.
- **Konsep kunci:** Dua bilangan prima terkecil adalah 2 dan 3.
- **Langkah Penyelesaian:**
  1. Ambil dua prima terkecil: 2 dan 3.
  2. Kalikan: 2 × 3 = 6 (jawaban C).

---

**76.** Bilangan prima **terkecil yang terdiri dari dua angka** adalah ….
- A. 13
- B. 17
- C. 19
- D. 11

**Kunci: D**
**Pembahasan:**
- Bilangan dua angka dimulai dari 10. Yang pertama kali prima adalah **11**.
- **A salah** — 13 juga prima, tapi bukan terkecil.
- **B salah** — Lebih besar dari 11.
- **C salah** — Lebih besar dari 11.
- **D benar** — **11** = prima dua angka terkecil.
- **Konsep kunci:** Telusuri bilangan dua angka dari 10 ke atas sampai bertemu prima pertama.
- **Langkah Penyelesaian:**
  1. Cek 10 (komposit), 11 (prima).
  2. Jadi 11 adalah prima dua angka terkecil (jawaban D).

---

**77.** Bilangan **n = 2 × 3 × 5 + 1** adalah ….
- A. prima
- B. komposit
- C. genap
- D. negatif

**Kunci: A**
**Pembahasan:**
- n = 30 + 1 = **31**.
- Karena n − 1 = 30 habis dibagi 2, 3, 5, maka n tidak habis dibagi prima-prima itu.
- Cek √31 ≈ 5,6: pembagi 2, 3, 5 tidak ada yang membagi 31 habis → **prima**.
- **A benar** — **31 prima** (juga prima Mersenne: 2⁵ − 1).
- **B salah** — Tidak punya pembagi prima ≤ √31.
- **C salah** — 31 ganjil.
- **D salah** — 31 positif.
- **Konsep kunci:** Hasil kali beberapa prima ditambah 1 tidak habis dibagi prima-prima penyusunnya.
- **Langkah Penyelesaian:**
  1. Hitung n = 2 × 3 × 5 + 1 = 31.
  2. Cek pembagi 2, 3, 5 (√31 ≈ 5,6): tak ada yang habis → prima (jawaban A).

---

**78.** Banyak bilangan **prima ganjil** dari **1 sampai 30** adalah ….
- A. 10
- B. 9
- C. 8
- D. 11

**Kunci: B**
**Pembahasan:**
- Prima 1–30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → 10 prima.
- Yang genap hanya 2. Jadi prima ganjil = 10 − 1 = **9**.
- **A salah** — Itu total prima termasuk 2.
- **B benar** — **9 prima ganjil**.
- **C salah** — Lupa salah satu.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Prima ganjil = seluruh prima dikurangi 2 (satu-satunya prima genap).
- **Langkah Penyelesaian:**
  1. Hitung total prima 1–30 = 10.
  2. Kurangi 1 untuk 2 (prima genap) → 9 (jawaban B).

---

**79.** Pasangan **twin prime** (17, 19) berselisih ….
- A. 1
- B. 3
- C. 2
- D. 4

**Kunci: C**
**Pembahasan:**
- Selisih = 19 − 17 = **2**.
- **A salah** — 19 − 17 bukan 1.
- **B salah** — Bukan 3.
- **C benar** — **Selisih 2** = ciri twin prime.
- **D salah** — Selisih 4 adalah cousin prime.
- **Konsep kunci:** Twin prime selalu berselisih tepat 2 dan keduanya prima.
- **Langkah Penyelesaian:**
  1. Kurangkan dua bilangan: 19 − 17.
  2. Hasilnya 2, dan keduanya prima → twin prime (jawaban C).

---

**80.** Faktorisasi prima dari **200** adalah ….
- A. 2³ × 25
- B. 4 × 50
- C. 2² × 5³
- D. 2³ × 5²

**Kunci: D**
**Pembahasan:**
- 200 = 8 × 25 = (2³) × (5²).
- **A salah** — 25 bukan prima.
- **B salah** — 4 dan 50 bukan prima.
- **C salah** — 2² × 5³ = 8 × 125 = 500 ✗.
- **D benar** — **2³ × 5²** = 8 × 25 = 200 ✓.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali pangkat-pangkat prima.
- **Langkah Penyelesaian:**
  1. Tulis 200 = 8 × 25.
  2. Pecah 8 = 2³ dan 25 = 5² → 2³ × 5² (jawaban D).

---

**81.** Banyak faktor dari **24** adalah ….
- A. 8
- B. 6
- C. 10
- D. 12

**Kunci: A**
**Pembahasan:**
- 24 = 2³ × 3. Banyak faktor = (3+1)(1+1) = 4 × 2 = **8**.
- (Faktornya: 1, 2, 3, 4, 6, 8, 12, 24.)
- **A benar** — **8 faktor**.
- **B salah** — Lupa beberapa.
- **C salah** — Salah aturan.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) tiap prima.
- **Langkah Penyelesaian:**
  1. Faktorkan 24 = 2³ × 3.
  2. Hitung (3+1)(1+1) = 8 (jawaban A).

---

**82.** Di antara berikut yang merupakan **perkalian dua prima yang berbeda** adalah ….
- A. 49
- B. 35
- C. 25
- D. 27

**Kunci: B**
**Pembahasan:**
- **A salah** — 49 = 7 × 7 (prima sama).
- **B benar** — **35 = 5 × 7**, dua prima **berbeda** (semiprime).
- **C salah** — 25 = 5 × 5 (prima sama).
- **D salah** — 27 = 3³ (tiga prima sama).
- **Konsep kunci:** Semiprime dengan dua faktor prima berbeda berbeda dari bentuk kuadrat prima.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pilihan: 49 = 7², 25 = 5², 27 = 3³.
  2. Hanya 35 = 5 × 7 yang memakai dua prima berbeda (jawaban B).

---

**83.** Bilangan asli **terkecil** yang memiliki **tepat 4 faktor** adalah ….
- A. 8
- B. 12
- C. 6
- D. 10

**Kunci: C**
**Pembahasan:**
- Tepat 4 faktor bisa: p³ (faktor 1, p, p², p³) atau p × q (faktor 1, p, q, pq).
- Kandidat terkecil: 6 (= 2 × 3) dan 8 (= 2³). Keduanya punya 4 faktor.
- **6 < 8**, jadi 6 yang terkecil.
- **A salah** — 8 punya 4 faktor, tapi lebih besar dari 6.
- **B salah** — 12 punya 6 faktor.
- **C benar** — **6** punya 4 faktor.
- **D salah** — 10 = 2 × 5 punya 4 faktor, tapi 6 lebih kecil.
- **Konsep kunci:** Bilangan dengan tepat 4 faktor bisa berbentuk p³ atau p × q (dua prima berbeda).
- **Langkah Penyelesaian:**
  1. Bandingkan kandidat: 6 = 2 × 3 (4 faktor) dan 8 = 2³ (4 faktor).
  2. Ambil yang lebih kecil, yaitu 6 (jawaban C).

---

**84.** Banyak bilangan prima dari **20 sampai 30** adalah ….
- A. 1
- B. 3
- C. 4
- D. 2

**Kunci: D**
**Pembahasan:**
- Cek kandidat 20–30: **23, 29 prima**; 21 = 3 × 7, 25 = 5², 27 = 3³ (komposit).
- **A salah** — Lupa salah satu dari 23 atau 29.
- **B salah** — Salah masukkan 27 (= 3³) sebagai prima.
- **C salah** — Terlalu banyak, mungkin masukkan 21 dan 25 juga.
- **D benar** — **2 prima**: 23, 29.
- **Konsep kunci:** Menghitung prima dalam rentang tertentu dengan menyaring bilangan komposit dekat batas puluhan.
- **Langkah Penyelesaian:**
  1. Uji bilangan ganjil 21, 23, 25, 27, 29.
  2. 21 = 3×7, 25 = 5², 27 = 3³ komposit; 23 dan 29 tidak punya pembagi kecil → 2 prima (jawaban D).

---

**85.** Suatu bilangan prima disebut **emirp** jika angka-angkanya **dibalik** menjadi prima juga. Bilangan **13** dibalik menjadi **31**, dan keduanya prima. Di antara berikut yang merupakan **emirp** adalah ….
- A. 13
- B. 21
- C. 27
- D. 14

**Kunci: A**
**Pembahasan:**
- **A benar** — **13 → 31**, keduanya prima → emirp.
- **B salah** — 21 = 3 × 7 bukan prima sejak awal.
- **C salah** — 27 = 3³ bukan prima.
- **D salah** — 14 genap, bukan prima.
- **Konsep kunci:** Emirp mensyaratkan dua syarat: bilangan aslinya prima dan kebalikannya juga prima.
- **Langkah Penyelesaian:**
  1. Balikkan angka tiap pilihan: 13 ↔ 31; 21 ↔ 12; 27 ↔ 72; 14 ↔ 41.
  2. Cek keprimaan dua arah: hanya 13 dan 31 yang sama-sama prima (jawaban A).

---

**86.** Jika **p × q = 91** dengan p, q bilangan prima dan p < q, maka nilai **p** = ….
- A. 3
- B. 7
- C. 11
- D. 13

**Kunci: B**
**Pembahasan:**
- 91 = 7 × 13.
- Karena p < q, maka p = 7 dan q = 13.
- **A salah** — 91 tidak punya faktor 3.
- **B benar** — **p = 7**.
- **C salah** — 91 tidak habis dibagi 11.
- **D salah** — 13 adalah q, bukan p (p < q).
- **Konsep kunci:** Pasangan faktor prima ditentukan lalu diurutkan sesuai syarat p < q.
- **Langkah Penyelesaian:**
  1. Faktorkan 91 = 7 × 13.
  2. Susun p < q → p = 7, q = 13 (jawaban B).

---

**87.** Banyak faktor dari **2² × 3 × 5** adalah ….
- A. 10
- B. 14
- C. 12
- D. 8

**Kunci: C**
**Pembahasan:**
- Banyak faktor = (2+1)(1+1)(1+1) = 3 × 2 × 2 = **12**.
- **A salah** — Salah hitung salah satu pangkat.
- **B salah** — Salah aturan.
- **C benar** — **12 faktor**.
- **D salah** — Lupa salah satu prima.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) tiap prima penyusun.
- **Langkah Penyelesaian:**
  1. Identifikasi pangkat: 2², 3¹, 5¹.
  2. Hitung (2+1)(1+1)(1+1) = 3 × 2 × 2 = 12 (jawaban C).

---

**88.** Jumlah bilangan-bilangan **prima dua angka** dari **20 sampai 30** adalah ….
- A. 50
- B. 54
- C. 48
- D. 52

**Kunci: D**
**Pembahasan:**
- Prima 20–30: 23 dan 29.
- Jumlah = 23 + 29 = **52**.
- **A salah** — Salah hitung.
- **B salah** — Salah hitung.
- **C salah** — Mungkin lupa salah satu.
- **D benar** — **52**.
- **Konsep kunci:** Daftar prima dalam rentang lalu jumlahkan.
- **Langkah Penyelesaian:**
  1. Tentukan prima 20–30: 23, 29.
  2. Jumlahkan: 23 + 29 = 52 (jawaban D).

---

**89.** Jumlah **tiga bilangan prima pertama** adalah ….
- A. 10
- B. 15
- C. 12
- D. 9

**Kunci: A**
**Pembahasan:**
- Tiga prima pertama: 2, 3, 5.
- Jumlah = 2 + 3 + 5 = **10**.
- **A benar** — **10**.
- **B salah** — 3 + 5 + 7, itu bukan tiga prima pertama.
- **C salah** — Salah hitung.
- **D salah** — Lupa 5.
- **Konsep kunci:** Tiga bilangan prima pertama adalah 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Tulis tiga prima pertama: 2, 3, 5.
  2. Jumlahkan: 2 + 3 + 5 = 10 (jawaban A).

---

**90.** Bilangan **119** adalah ….
- A. prima
- B. komposit, karena 119 = 7 × 17
- C. genap
- D. habis dibagi 5

**Kunci: B**
**Pembahasan:**
- **A salah** — Sering keliru; belum cek pembagi 7.
- **B benar** — **119 = 7 × 17** → komposit.
- **C salah** — 119 ganjil.
- **D salah** — Tidak berakhiran 0/5.
- **Konsep kunci:** Wajib cek pembagi 7 untuk bilangan yang lolos cek 2, 3, 5.
- **Langkah Penyelesaian:**
  1. Cek 119 ÷ 7 = 17 → habis.
  2. Simpulkan 119 = 7 × 17 → komposit (jawaban B).

---

**91.** Banyak bilangan prima dari **80 sampai 90** adalah ….
- A. 3
- B. 1
- C. 2
- D. 4

**Kunci: C**
**Pembahasan:**
- Cek 83, 87, 89 (ganjil di 80–90): **83, 89 prima**; 87 = 3 × 29 (komposit).
- **A salah** — Salah masukkan 87.
- **B salah** — Lupa 83 atau 89.
- **C benar** — **2 prima**: 83, 89.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Menghitung prima dalam rentang dengan menguji tiap bilangan ganjil.
- **Langkah Penyelesaian:**
  1. Uji 83 dan 89: tidak habis dibagi 2, 3, 5, 7 → prima.
  2. 87 = 3 × 29 komposit → total 2 prima (jawaban C).

---

**92.** Selisih antara **prima ke-10** (29) dan **prima ke-6** (13) adalah ….
- A. 14
- B. 15
- C. 18
- D. 16

**Kunci: D**
**Pembahasan:**
- Urutan: 2, 3, 5, 7, 11, **13**, 17, 19, 23, **29**, ...
- Selisih = 29 − 13 = **16**.
- **A salah** — Salah salah satu prima.
- **B salah** — Salah hitung.
- **C salah** — Mungkin urutan keliru.
- **D benar** — **16**.
- **Konsep kunci:** Mengurutkan bilangan prima untuk menemukan posisi lalu menghitung selisih.
- **Langkah Penyelesaian:**
  1. Ambil prima ke-6 (13) dan ke-10 (29).
  2. Kurangkan: 29 − 13 = 16 (jawaban D).

---

**93.** Di antara berikut yang merupakan **bilangan prima** adalah ….
- A. 161
- B. 163
- C. 165
- D. 169

**Kunci: B**
**Pembahasan:**
- **A salah** — 161 = 7 × 23.
- **B benar** — **163 prima**. √163 ≈ 12,8; cek 2, 3, 5, 7, 11: tidak ada yang habis.
- **C salah** — 165 berakhiran 5 → habis dibagi 5.
- **D salah** — 169 = 13².
- **Konsep kunci:** Bilangan besar tetap harus diuji pembagi prima sampai akar kuadratnya.
- **Langkah Penyelesaian:**
  1. Faktorkan 161, 165, 169 → semua komposit.
  2. Cek 163 dengan pembagi sampai √163 ≈ 12,8: tak ada yang habis → prima (jawaban B).

---

**94.** Banyak faktor dari **540 (= 2² × 3³ × 5)** adalah ….
- A. 18
- B. 20
- C. 24
- D. 28

**Kunci: C**
**Pembahasan:**
- Banyak faktor = (2+1)(3+1)(1+1) = 3 × 4 × 2 = **24**.
- **A salah** — Salah hitung salah satu pangkat.
- **B salah** — Salah aturan.
- **C benar** — **24 faktor**.
- **D salah** — Terlalu banyak.
- **Konsep kunci:** Rumus banyak faktor = hasil kali (pangkat+1) tiap prima penyusun.
- **Langkah Penyelesaian:**
  1. Identifikasi pangkat 2², 3³, 5¹.
  2. Hitung (2+1)(3+1)(1+1) = 3 × 4 × 2 = 24 (jawaban C).

---

**95.** Faktorisasi prima dari **210** adalah ….
- A. 2 × 3 × 35
- B. 5 × 6 × 7
- C. 10 × 21
- D. 2 × 3 × 5 × 7

**Kunci: D**
**Pembahasan:**
- 210 = 21 × 10 = (3 × 7) × (2 × 5).
- **A salah** — 35 bukan prima.
- **B salah** — 6 bukan prima.
- **C salah** — 10 dan 21 bukan prima.
- **D benar** — **210 = 2 × 3 × 5 × 7**, semua faktor prima.
- **Konsep kunci:** Faktorisasi prima menuliskan bilangan sebagai hasil kali bilangan-bilangan prima saja.
- **Langkah Penyelesaian:**
  1. Pecah 210 = 21 × 10.
  2. Pecah lagi 21 = 3 × 7 dan 10 = 2 × 5 → 2 × 3 × 5 × 7 (jawaban D).

---

**96.** Bilangan **prima terbesar yang kurang dari 50** dan **jumlah angka-angkanya 7** adalah ….
- A. 43
- B. 7
- C. 47
- D. 33

**Kunci: A**
**Pembahasan:**
- Bilangan < 50 dengan jumlah digit 7 yang prima: **7** dan **43**. (34, 25 komposit; 16 genap.)
- Yang terbesar = 43.
- **A benar** — **43** (4 + 3 = 7, dan 43 prima).
- **B salah** — 7 memenuhi syarat tapi bukan terbesar.
- **C salah** — 47 prima tapi 4 + 7 = 11 ≠ 7.
- **D salah** — 33 = 3 × 11 bukan prima.
- **Konsep kunci:** Saring dengan dua syarat: jumlah digit 7 dan keprimaan.
- **Langkah Penyelesaian:**
  1. Cari kandidat < 50 berjumlah digit 7: 7, 16, 25, 34, 43.
  2. Saring yang prima: 7 dan 43; ambil terbesar = 43 (jawaban A).

---

**97.** Banyak bilangan prima dari **90 sampai 100** adalah ….
- A. 2
- B. 1
- C. 3
- D. 0

**Kunci: B**
**Pembahasan:**
- Cek 91, 93, 95, 97, 99 (ganjil 90–100): 91 = 7 × 13, 93 = 3 × 31, 95 = 5 × 19, 99 = 9 × 11 → semua komposit.
- **97** tidak habis dibagi 2, 3, 5, 7 → prima.
- **A salah** — Salah hitung 91 atau 99 sebagai prima.
- **B benar** — Hanya **97** → **1 prima**.
- **C salah** — Terlalu banyak.
- **D salah** — 97 prima.
- **Konsep kunci:** Rentang 90–100 hanya memiliki satu prima, yaitu 97.
- **Langkah Penyelesaian:**
  1. Uji bilangan ganjil 91–99: semuanya komposit.
  2. Hanya 97 yang prima → 1 prima (jawaban B).

---

**98.** Jumlah semua faktor dari **6** (termasuk dirinya sendiri) adalah ….
- A. 10
- B. 11
- C. 12
- D. 13

**Kunci: C**
**Pembahasan:**
- Faktor 6: 1, 2, 3, 6.
- Jumlah = 1 + 2 + 3 + 6 = **12**.
- **A salah** — Lupa 6 sendiri.
- **B salah** — Salah hitung.
- **C benar** — **12**.
- **D salah** — Salah hitung.
- **Konsep kunci:** Jumlah faktor = total nilai semua faktor, berbeda dengan banyak faktor.
- **Langkah Penyelesaian:**
  1. Daftar semua faktor 6: 1, 2, 3, 6.
  2. Jumlahkan: 1 + 2 + 3 + 6 = 12 (jawaban C).

---

**99.** Jika **p** bilangan prima lebih dari 2, maka **p² − 1** pasti ….
- A. genap
- B. ganjil
- C. selalu lebih kecil dari p
- D. selalu habis dibagi 5

**Kunci: A**
**Pembahasan:**
- p ganjil → p² ganjil → p² − 1 genap. (Contoh: p = 5 → 24; p = 7 → 48, semuanya genap.)
- **A benar** — **p² − 1 selalu genap** (bahkan komposit karena p²−1 = (p−1)(p+1)).
- **B salah** — Ganjil dikurangi 1 menjadi genap.
- **C salah** — Salah arah (hasilnya jauh lebih besar dari p).
- **D salah** — p = 3 → 8 tidak habis dibagi 5.
- **Konsep kunci:** Bilangan ganjil berpangkat tetap ganjil; setelah dikurangi 1 menjadi genap.
- **Langkah Penyelesaian:**
  1. p prima > 2 pasti ganjil → p² juga ganjil.
  2. Ganjil dikurangi 1 = genap → p² − 1 selalu genap (jawaban A).

---

**100.** Banyak bilangan asli dari **1 sampai 100** yang **bukan prima dan bukan komposit** adalah ….
- A. 0
- B. 1
- C. 2
- D. 24

**Kunci: B**
**Pembahasan:**
- Satu-satunya bilangan asli yang bukan prima maupun komposit adalah **1** (hanya punya 1 faktor).
- **A salah** — Menganggap 1 termasuk prima atau komposit.
- **B benar** — Hanya **angka 1**.
- **C salah** — Tidak ada bil. lain dengan sifat itu.
- **D salah** — 24 menunjuk jumlah prima 1–25 yang keliru diingat.
- **Konsep kunci:** Angka 1 tidak memenuhi syarat prima (2 faktor) maupun komposit (lebih dari 2 faktor).
- **Langkah Penyelesaian:**
  1. Ingat hanya 1 yang punya tepat 1 faktor.
  2. Semua bilangan 2–100 pasti prima atau komposit → jawabannya 1 (jawaban B).

---

## BAGIAN III · RINGKASAN & KUNCI

### Tabel Kunci Jawaban (100 soal)

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1.A  | 11.D  | 21.B  | 31.D  | 41.B  |
| 2.C  | 12.A  | 22.D  | 32.A  | 42.C  |
| 3.B  | 13.C  | 23.D  | 33.B  | 43.D  |
| 4.D  | 14.D  | 24.A  | 34.C  | 44.A  |
| 5.A  | 15.B  | 25.B  | 35.D  | 45.B  |
| 6.B  | 16.C  | 26.C  | 36.A  | 46.C  |
| 7.D  | 17.A  | 27.D  | 37.B  | 47.D  |
| 8.C  | 18.D  | 28.A  | 38.C  | 48.A  |
| 9.A  | 19.B  | 29.B  | 39.D  | 49.B  |
| 10.B | 20.A  | 30.C  | 40.A  | 50.C  |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51.A  | 61.C  | 71.C  | 81.A  | 91.C   |
| 52.B  | 62.D  | 72.D  | 82.B  | 92.D   |
| 53.C  | 63.A  | 73.A  | 83.C  | 93.B   |
| 54.D  | 64.B  | 74.B  | 84.D  | 94.C   |
| 55.A  | 65.C  | 75.C  | 85.A  | 95.D   |
| 56.B  | 66.D  | 76.D  | 86.B  | 96.A   |
| 57.C  | 67.A  | 77.A  | 87.C  | 97.B   |
| 58.D  | 68.D  | 78.B  | 88.D  | 98.C   |
| 59.A  | 69.A  | 79.C  | 89.A  | 99.A   |
| 60.B  | 70.B  | 80.D  | 90.B  | 100.B  |

## Distribusi Kunci

**A: 26 · B: 26 · C: 23 · D: 25** (total 100; semua dalam toleransi ±5 dari target 25/25/25/25 sesuai standar OSN).

## Strategi Belajar Bilangan Prima & Komposit

1. **Hafal 25 prima ≤ 100** (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97). Ini wajib.
2. **1 BUKAN prima, BUKAN komposit** — outlier istimewa.
3. **2 = satu-satunya prima genap.** Semua genap > 2 pasti komposit.
4. **Tes prima cepat:** cek pembagi prima ≤ **√n**. Untuk n ≤ 100 cukup cek 2, 3, 5, 7.
5. **Jebakan ganjil-bukan-prima:** 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99 — semua ganjil tapi **komposit**!
6. **Wajib cek pembagi 7** untuk 49, 77, 91, 119, 133, 161, 203, 217 (banyak yang lolos cek 2, 3, 5 tapi gugur di 7).
7. **Saringan Eratosthenes** — algoritma cepat mencari semua prima ≤ N.
8. **Banyak faktor n = p^a × q^b × r^c**: rumus **(a+1)(b+1)(c+1)**; bilangan dengan tepat 3 faktor berbentuk **p²**, tepat 4 faktor berbentuk **p³** atau **p × q**, tepat 5 faktor berbentuk **p⁴**.
9. **Twin prime** (selisih 2): (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73). Bilangan × dua prima berbeda disebut **semiprime**; **emirp** = dibalik tetap prima.
10. **Aplikasi**: faktorisasi prima → fondasi FPB/KPK, penyederhanaan pecahan, dan kriptografi RSA modern.

---

**Total soal**: 100 PG · **Format**: OSN/KSN SD Matematika · **Sub-bab**: 01d Bilangan Prima & Komposit · **Distribusi kunci**: A=26, B=26, C=23, D=25.

*Selesai. Sub-bab 01d - Bilangan Prima & Komposit (Mudah-Sedang).*