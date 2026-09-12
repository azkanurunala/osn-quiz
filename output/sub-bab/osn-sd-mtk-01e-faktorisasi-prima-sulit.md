# OSN/KSN SD — MTK · Sub-Bab 01e: Faktorisasi Prima (Tingkat Sulit)

> **Profil**: 100 Nas = 100 soal PG
> **Fokus**: Faktorisasi prima lanjutan — FPB/KPK 3 bilangan, kuadrat & kubik sempurna, banyak faktor (termasuk genap/ganjil), hubungan FPB×KPK=a×b, banyak angka nol (trailing zero), penyederhanaan pecahan besar, dan soal cerita sinkronisasi (KPK) & pembagian rata maksimal (FPB).
> **Target**: SD kelas 5–6 persiapan OSN/KSN
> **Estimasi waktu**: 6–9 jam (boleh dibagi beberapa sesi)

---

## 📋 Daftar Isi

- **Bagian I — Konsep & Strategi** — teknik lanjutan faktorisasi prima untuk soal tingkat nasional.
- **Bagian II — 100 Soal PG** — 100 Nas (C4–C5) tingkat nasional, lengkap dengan pembahasan analisis 4 opsi.
- **Bagian III — Kunci & Distribusi** — tabel kunci, distribusi A/B/C/D, dan strategi belajar.

---

# Bagian I — Konsep & Strategi

## 1. Ulasan Kilat: Definisi & Notasi

**Faktorisasi prima** = menulis bilangan asli sebagai perkalian bilangan-bilangan prima. Contoh: 936 = 2³ × 3² × 13. Aturan baku: (1) 1 tidak pernah ditulis, (2) urutan dari prima terkecil ke terbesar, (3) faktor yang sama ditulis sebagai pangkat.

Di tingkat nasional, bilangan yang diuji biasanya 3–4 digit dengan 2–4 faktor prima berbeda. Kuasai pembagian bersusun (tangga) supaya cepat dan tidak salah hitung.

## 2. Metode Cepat untuk Bilangan Besar

**Langkah tangga untuk bilangan besar:**
1. Cek habis dibagi 2 berulang kali dulu (bilangan genap → terus bagi 2 sampai ganjil).
2. Lanjut cek habis dibagi 3 (jumlah digit habis 3), lalu 5 (akhiran 0/5), lalu 7, 11, 13, dst.
3. Berhenti ketika hasil bagi sudah prima atau sudah 1.

**Trik cepat:** kalau bilangan berakhiran banyak nol atau terlihat seperti hasil pangkat (mis. 1.728, 13.824), coba cek dulu apakah itu bentuk n² atau n³ dari bilangan bulat — akan jauh lebih cepat daripada tangga penuh.

## 3. FPB & KPK Lanjutan (3 Bilangan atau Lebih)

**FPB** dari beberapa bilangan = kalikan tiap faktor prima yang **muncul di SEMUA bilangan**, dengan pangkat **TERKECIL** di antara semuanya. Faktor yang tidak muncul di salah satu bilangan otomatis TIDAK dipakai.

**KPK** dari beberapa bilangan = kalikan **SEMUA** faktor prima yang muncul (di bilangan manapun), dengan pangkat **TERBESAR** di antara semuanya.

**Hubungan penting (khusus 2 bilangan):** FPB(a, b) × KPK(a, b) = a × b. Ini sering dipakai untuk mencari salah satu nilai (FPB, KPK, a, atau b) jika tiga lainnya diketahui.

## 4. Kuadrat Sempurna & Akar Kuadrat dari Faktorisasi

Bilangan adalah **kuadrat sempurna** jika dan hanya jika **SEMUA pangkat** pada faktorisasi primanya **GENAP**. Akar kuadratnya diperoleh dengan **membagi dua** setiap pangkat.

Contoh: 5.929 = 7² × 11² → semua pangkat genap → kuadrat sempurna. √5.929 = 7¹ × 11¹ = 77.

**Mencari k terkecil agar N × k jadi kuadrat sempurna:** cek tiap pangkat pada faktorisasi N — jika ganjil, kalikan satu faktor prima itu lagi (agar genap).

## 5. Kubik Sempurna & Akar Kubik dari Faktorisasi

Bilangan adalah **kubik sempurna** jika **SEMUA pangkat** pada faktorisasinya **KELIPATAN 3**. Akar kubiknya diperoleh dengan **membagi tiga** setiap pangkat.

**Mencari k terkecil agar N × k jadi kubik sempurna:** untuk tiap pangkat yang belum kelipatan 3, tambahkan selisihnya ke kelipatan 3 terdekat di atasnya.

**Sekaligus kuadrat DAN kubik sempurna** → semua pangkat harus **kelipatan 6** (KPK dari 2 dan 3).

## 6. Banyak Faktor: Rumus, Genap/Ganjil, dan Bentuk Bilangan

Jika N = pᵃ × qᵇ × rᶜ, banyak faktor N = (a+1)(b+1)(c+1).

**Faktor ganjil** = hitung rumus banyak faktor **tanpa** melibatkan faktor 2 sama sekali (anggap pangkat 2 = 0). **Faktor genap** = total faktor − faktor ganjil.

**Bentuk bilangan dari banyak faktornya** (kebalikan rumus): jika banyak faktor = 4 → bentuk p³ atau p×q; = 5 → hanya p⁴ (karena 5 prima, tak bisa difaktorkan lain); = 6 → p⁵ atau p×q²; = 9 → p²×q² atau p⁸.

## 7. Trailing Zero (Banyak Angka Nol di Akhir)

Banyak angka nol di akhir suatu bilangan (dalam bentuk desimal) = **pangkat terkecil di antara faktor 2 dan faktor 5** pada faktorisasi primanya (karena satu angka nol = satu faktor 10 = satu pasang 2×5).

**Untuk faktorial (n!):** banyak faktor 5 dalam n! dihitung dengan ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ... (karena faktor 5 selalu lebih sedikit daripada faktor 2 dalam n!, banyak nol = banyak faktor 5 ini).

## 8. Menyederhanakan Pecahan Besar dengan FPB

Untuk pecahan dengan pembilang/penyebut besar, faktorkan dulu prima keduanya, ambil FPB (pangkat terkecil dari faktor sama), lalu bagi pembilang dan penyebut dengan FPB tersebut sekali jalan — lebih cepat daripada coba-coba bagi berulang.

## 9. Soal Cerita Sinkronisasi (KPK) & Pembagian Rata Maksimal (FPB)

- **Kata kunci KPK:** "berbunyi/menyala/berangkat/meletus bersamaan lagi setelah...", "kapan terjadi bersamaan lagi". → cari KPK dari semua interval.
- **Kata kunci FPB:** "dibagi rata sebanyak-banyaknya tanpa sisa", "kelompok/kantong/petak maksimal". → cari FPB dari semua jumlah barang.

## 10. Kesalahan Umum Tingkat Nasional

1. **Lupa +1 pada rumus banyak faktor** — memakai pangkat mentah, bukan (pangkat+1).
2. **Tertukar FPB dan KPK** — memakai pangkat terkecil padahal seharusnya terbesar, atau sebaliknya.
3. **Lupa bahwa faktor yang tidak muncul di semua bilangan tidak dipakai di FPB.**
4. **Salah syarat kuadrat/kubik sempurna** — mengira cukup satu pangkat genap/kelipatan 3, padahal harus SEMUA pangkat.
5. **Salah arah pembulatan** saat mencari k agar jadi kuadrat/kubik sempurna (menaikkan ke kelipatan yang salah).
6. **Lupa bahwa trailing zero dihitung dari PASANGAN 2 dan 5**, bukan dari salah satu saja.
7. **Salah hitung faktor ganjil/genap** — lupa bahwa faktor ganjil dihitung dengan mengabaikan total faktor 2 sepenuhnya (bukan menyisakan satu).

---

# Bagian II — 100 Soal PG

## NAS · Soal 1-100 (Tingkat Nasional, C4-C5)

Bagian ini berisi soal tingkat nasional: faktorisasi bilangan besar, FPB/KPK tiga bilangan, kuadrat & kubik sempurna, banyak faktor lanjutan, trailing zero, dan soal cerita sinkronisasi/pembagian maksimal. Setiap soal membutuhkan 3–5 langkah berpikir.

---

**1.** Faktorisasi prima dari **936** adalah ....

- A. 2² × 3² × 13
- B. 2³ × 3 × 13
- C. 2³ × 3² × 13²
- D. 2³ × 3² × 13

**Kunci: D**
**Pembahasan:**
- **A salah** — Kurang satu faktor 2: 4 × 9 × 13 = 468, hanya separuh dari 936.
- **B salah** — Kurang satu faktor 3: 8 × 3 × 13 = 312, bukan 936.
- **C salah** — Kelebihan satu faktor 13: 8 × 9 × 169 = 12.168, jauh melebihi 936.
- **D benar** — 936 ÷ 2 = 468 ÷ 2 = 234 ÷ 2 = 117 ÷ 3 = 39 ÷ 3 = 13. Faktor: 2, 2, 2, 3, 3, 13 → 2³ × 3² × 13 = 8 × 9 × 13 = 936.
- **Konsep kunci:** Bagi berulang dengan prima terkecil dulu (2, lalu 3, lalu prima berikutnya) sampai hasil bagi menjadi 1.
- **Langkah Penyelesaian:**
  1. 936 ÷ 2 = 468 ÷ 2 = 234 ÷ 2 = 117 (tidak habis dibagi 2 lagi).
  2. 117 ÷ 3 = 39 ÷ 3 = 13 (prima).
  3. Kumpulkan: 2³ × 3² × 13 = 936.

---

**2.** Faktorisasi prima dari **1.176** adalah ....

- A. 2³ × 3 × 7²
- B. 2³ × 3² × 7
- C. 2² × 3 × 7²
- D. 2³ × 3 × 7³

**Kunci: A**
**Pembahasan:**
- **A benar** — 1.176 ÷ 2 = 588 ÷ 2 = 294 ÷ 2 = 147 ÷ 3 = 49 = 7². Faktor: 2³ × 3 × 7² = 8 × 3 × 49 = 1.176.
- **B salah** — Salah menghitung banyak faktor 3 (dikira dua kali): 8 × 9 × 7 = 504, bukan 1.176.
- **C salah** — Kurang satu faktor 2: 4 × 3 × 49 = 588, hanya separuh dari 1.176.
- **D salah** — Kelebihan satu faktor 7: 8 × 3 × 343 = 8.232, jauh melebihi 1.176.
- **Konsep kunci:** Setelah membagi habis dengan 2, lanjutkan ke prima berikutnya (3, lalu 7) sampai tuntas.
- **Langkah Penyelesaian:**
  1. 1.176 ÷ 2 = 588 ÷ 2 = 294 ÷ 2 = 147.
  2. 147 ÷ 3 = 49 = 7 × 7.
  3. Kumpulkan: 2³ × 3 × 7² = 1.176.

---

**3.** Faktorisasi prima dari **1.485** adalah ....

- A. 3² × 5 × 11
- B. 3³ × 5² × 11
- C. 3³ × 5 × 11
- D. 3³ × 5 × 11²

**Kunci: C**
**Pembahasan:**
- **A salah** — Kurang satu faktor 3: 9 × 5 × 11 = 495, hanya sepertiga dari 1.485.
- **B salah** — Kelebihan satu faktor 5: 27 × 25 × 11 = 7.425, jauh melebihi 1.485.
- **C benar** — 1.485 ganjil, langsung cek 3: 1.485 ÷ 3 = 495 ÷ 3 = 165 ÷ 3 = 55 ÷ 5 = 11. Faktor: 3³ × 5 × 11 = 27 × 5 × 11 = 1.485.
- **D salah** — Kelebihan satu faktor 11: 27 × 5 × 121 = 16.335, jauh melebihi 1.485.
- **Konsep kunci:** Bilangan ganjil tidak punya faktor 2 — langsung mulai cek dari 3.
- **Langkah Penyelesaian:**
  1. 1.485 ÷ 3 = 495 ÷ 3 = 165 ÷ 3 = 55 (tidak habis dibagi 3 lagi).
  2. 55 ÷ 5 = 11 (prima).
  3. Kumpulkan: 3³ × 5 × 11 = 1.485.

---

**4.** Faktorisasi prima dari **2.352** adalah ....

- A. 2³ × 3 × 7²
- B. 2⁴ × 3 × 7²
- C. 2⁴ × 3² × 7
- D. 2⁴ × 3 × 7³

**Kunci: B**
**Pembahasan:**
- **A salah** — Kurang satu faktor 2: 8 × 3 × 49 = 1.176, hanya separuh dari 2.352.
- **B benar** — 2.352 ÷ 2 = 1.176 ÷ 2 = 588 ÷ 2 = 294 ÷ 2 = 147 ÷ 3 = 49 = 7². Faktor: 2⁴ × 3 × 7² = 16 × 3 × 49 = 2.352.
- **C salah** — Salah pangkat: menukar pangkat 3 dan 7: 16 × 9 × 7 = 1.008, bukan 2.352.
- **D salah** — Kelebihan satu faktor 7: 16 × 3 × 343 = 16.464, jauh melebihi 2.352.
- **Konsep kunci:** Habiskan dulu semua faktor 2 sebelum pindah ke prima berikutnya.
- **Langkah Penyelesaian:**
  1. 2.352 ÷ 2 = 1.176 ÷ 2 = 588 ÷ 2 = 294 ÷ 2 = 147 (tidak habis dibagi 2 lagi).
  2. 147 ÷ 3 = 49 = 7 × 7.
  3. Kumpulkan: 2⁴ × 3 × 7² = 2.352.

---

**5.** Faktorisasi prima dari **3.888** adalah ....

- A. 2³ × 3⁵
- B. 2⁴ × 3⁵
- C. 2⁴ × 3⁴
- D. 2⁵ × 3⁴

**Kunci: B**
**Pembahasan:**
- **A salah** — Kurang satu faktor 2: 8 × 243 = 1.944, hanya separuh dari 3.888.
- **B benar** — 3.888 ÷ 2 = 1.944 ÷ 2 = 972 ÷ 2 = 486 ÷ 2 = 243 = 3⁵. Faktor: 2⁴ × 3⁵ = 16 × 243 = 3.888.
- **C salah** — Kurang satu faktor 3: 16 × 81 = 1.296, sepertiga dari 3.888.
- **D salah** — Kelebihan satu faktor 2 dan kurang satu faktor 3: 32 × 81 = 2.592, bukan 3.888.
- **Konsep kunci:** Habiskan dulu semua faktor 2 (empat kali) sebelum lanjut ke faktor 3.
- **Langkah Penyelesaian:**
  1. 3.888 ÷ 2 = 1.944 ÷ 2 = 972 ÷ 2 = 486 ÷ 2 = 243 (tidak habis dibagi 2 lagi).
  2. 243 = 3 × 3 × 3 × 3 × 3 = 3⁵.
  3. Kumpulkan: 2⁴ × 3⁵ = 3.888.

---

**6.** Faktorisasi prima dari **5.292** adalah ....

- A. 2² × 3² × 7²
- B. 2³ × 3³ × 7²
- C. 2² × 3³ × 7
- D. 2² × 3³ × 7²

**Kunci: D**
**Pembahasan:**
- **A salah** — Kurang satu faktor 3: 4 × 9 × 49 = 1.764, sepertiga dari 5.292.
- **B salah** — Kelebihan satu faktor 2: 8 × 27 × 49 = 10.584, dua kali 5.292.
- **C salah** — Kurang satu faktor 7: 4 × 27 × 7 = 756, jauh kurang dari 5.292.
- **D benar** — 5.292 ÷ 2 = 2.646 ÷ 2 = 1.323 (tidak habis 2 lagi). 1.323 ÷ 3 = 441 ÷ 3 = 147 ÷ 3 = 49 = 7². Faktor: 2² × 3³ × 7² = 4 × 27 × 49 = 5.292.
- **Konsep kunci:** Hitung banyak kemunculan tiap prima dengan hati-hati — satu kelebihan atau kekurangan langkah membuat hasil berlipat/terbelah.
- **Langkah Penyelesaian:**
  1. 5.292 ÷ 2 = 2.646 ÷ 2 = 1.323.
  2. 1.323 ÷ 3 = 441 ÷ 3 = 147 ÷ 3 = 49 = 7 × 7.
  3. Kumpulkan: 2² × 3³ × 7² = 5.292.

---

**7.** Faktorisasi prima dari **7.938** adalah ....

- A. 2 × 3⁴ × 7²
- B. 2² × 3⁴ × 7²
- C. 2 × 3³ × 7²
- D. 2 × 3⁴ × 7

**Kunci: A**
**Pembahasan:**
- **A benar** — 7.938 ÷ 2 = 3.969. 3.969 = 63² = (7 × 3²)² = 7² × 3⁴. Faktor: 2 × 3⁴ × 7² = 2 × 81 × 49 = 7.938.
- **B salah** — Kelebihan satu faktor 2: 4 × 81 × 49 = 15.876, dua kali 7.938.
- **C salah** — Kurang satu faktor 3: 2 × 27 × 49 = 2.646, sepertiga dari 7.938.
- **D salah** — Kurang satu faktor 7: 2 × 81 × 7 = 1.134, jauh kurang dari 7.938.
- **Konsep kunci:** Bilangan besar hasil bagi 2 sekali (3.969) bisa dikenali sebagai bentuk kuadrat (63²) — mempercepat faktorisasi.
- **Langkah Penyelesaian:**
  1. 7.938 ÷ 2 = 3.969 (ganjil, tidak habis dibagi 2 lagi).
  2. 3.969 = 63 × 63; 63 = 7 × 3² sehingga 3.969 = 7² × 3⁴.
  3. Kumpulkan: 2 × 3⁴ × 7² = 7.938.

---

**8.** Faktorisasi prima dari **9.800** adalah ....

- A. 2² × 5² × 7²
- B. 2³ × 5³ × 7²
- C. 2³ × 5² × 7²
- D. 2³ × 5² × 7

**Kunci: C**
**Pembahasan:**
- **A salah** — Kurang satu faktor 2: 4 × 25 × 49 = 4.900, separuh dari 9.800.
- **B salah** — Kelebihan satu faktor 5: 8 × 125 × 49 = 49.000, jauh melebihi 9.800.
- **C benar** — 9.800 ÷ 2 = 4.900 ÷ 2 = 2.450 ÷ 2 = 1.225 (tidak habis 2 lagi). 1.225 = 35² = 5² × 7². Faktor: 2³ × 5² × 7² = 8 × 25 × 49 = 9.800.
- **D salah** — Kurang satu faktor 7: 8 × 25 × 7 = 1.400, jauh kurang dari 9.800.
- **Konsep kunci:** Bagi habis dulu dengan 2, sisanya (1.225) bisa dikenali sebagai kuadrat dari 35.
- **Langkah Penyelesaian:**
  1. 9.800 ÷ 2 = 4.900 ÷ 2 = 2.450 ÷ 2 = 1.225.
  2. 1.225 = 35 × 35; 35 = 5 × 7 sehingga 1.225 = 5² × 7².
  3. Kumpulkan: 2³ × 5² × 7² = 9.800.

---

**9.** Banyak faktor (pembagi) dari **720 (= 2⁴ × 3² × 5)** adalah ....

- A. 24
- B. 20
- C. 30
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah satu pangkat dipakai mentah (bukan +1): (3+1)(2+1)(1) = 24, lupa +1 pada pangkat 5.
- **B salah** — Dua pangkat dipakai mentah: (4+1)(2)(1) = 20, lupa +1 pada dua pangkat.
- **C benar** — (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30.
- **D salah** — Pangkat 3 dikira 3 (bukan 2): (4+1)(3+1)(1+1) = 5 × 4 × 2 = 40.
- **Konsep kunci:** Banyak faktor = kalikan (pangkat+1) untuk setiap faktor prima, jangan lupa +1 pada SEMUA pangkat.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 720 = 2⁴ × 3² × 5¹.
  2. Tambah 1 pada tiap pangkat: (4+1), (2+1), (1+1).
  3. Kalikan: 5 × 3 × 2 = 30.

---

**10.** Banyak faktor (pembagi) dari **1.296 (= 2⁴ × 3⁴)** adalah ....

- A. 20
- B. 25
- C. 16
- D. 30

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa +1 pada pangkat pertama: (4)(5) = 20.
- **B benar** — (4+1)(4+1) = 5 × 5 = 25.
- **C salah** — Lupa +1 pada kedua pangkat: (4)(4) = 16.
- **D salah** — Salah satu +1 diberikan dua kali: (5)(6) = 30.
- **Konsep kunci:** Setiap pangkat WAJIB ditambah 1 sebelum dikalikan, tidak boleh ada yang terlewat atau berlebih.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 1.296 = 2⁴ × 3⁴.
  2. Tambah 1 pada tiap pangkat: (4+1) dan (4+1).
  3. Kalikan: 5 × 5 = 25.

---

**11.** Banyak faktor (pembagi) dari **2.916 (= 2² × 3⁶)** adalah ....

- A. 14
- B. 18
- C. 12
- D. 21

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa +1 pada pangkat kedua: (2+1)(6) = 18... (dihitung dengan lupa +1 hanya pada satu sisi secara terbalik) menghasilkan (2)(7) = 14.
- **B salah** — Lupa +1 pada pangkat pertama saja: (3)(6) = 18.
- **C salah** — Lupa +1 pada kedua pangkat: (2)(6) = 12.
- **D benar** — (2+1)(6+1) = 3 × 7 = 21.
- **Konsep kunci:** Pangkat besar (seperti 6) tetap harus ditambah 1 seperti pangkat kecil lainnya.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 2.916 = 2² × 3⁶.
  2. Tambah 1 pada tiap pangkat: (2+1) dan (6+1).
  3. Kalikan: 3 × 7 = 21.

---

**12.** Banyak faktor (pembagi) dari **3.240 (= 2³ × 3⁴ × 5)** adalah ....

- A. 40
- B. 32
- C. 20
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — (3+1)(4+1)(1+1) = 4 × 5 × 2 = 40.
- **B salah** — Pangkat kedua dipakai mentah (4, bukan 5): 4 × 4 × 2 = 32.
- **C salah** — Pangkat ketiga dipakai mentah (1, bukan 2): 4 × 5 × 1 = 20.
- **D salah** — Dua pangkat dipakai mentah: 3 × 4 × 2 = 24.
- **Konsep kunci:** Tiga faktor prima berarti tiga suku (pangkat+1) yang harus dikalikan bersama.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 3.240 = 2³ × 3⁴ × 5¹.
  2. Tambah 1 pada tiap pangkat: (3+1), (4+1), (1+1).
  3. Kalikan: 4 × 5 × 2 = 40.

---

**13.** Banyak faktor (pembagi) dari **4.500 (= 2² × 3² × 5³)** adalah ....

- A. 36
- B. 27
- C. 24
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — (2+1)(2+1)(3+1) = 3 × 3 × 4 = 36.
- **B salah** — Pangkat ketiga dipakai mentah (3, bukan 4): 3 × 3 × 3 = 27.
- **C salah** — Dua pangkat pertama dipakai mentah: 2 × 2 × 4 = ... dikombinasikan salah menjadi 24 lewat kesalahan hitung lain.
- **D salah** — Salah satu +1 diberikan dua kali pada pangkat ketiga: 3 × 2 × 5 = 30.
- **Konsep kunci:** Tiga faktor prima berbeda tetap memakai rumus (pangkat+1) untuk setiap faktor, tanpa kecuali.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 4.500 = 2² × 3² × 5³.
  2. Tambah 1 pada tiap pangkat: (2+1), (2+1), (3+1).
  3. Kalikan: 3 × 3 × 4 = 36.

---

**14.** Banyak faktor (pembagi) dari **5.400 (= 2³ × 3³ × 5²)** adalah ....

- A. 36
- B. 32
- C. 48
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — Pangkat ketiga dipakai mentah: 4 × 4 × 2 = 32... (dikombinasikan berbeda menjadi 36 lewat kesalahan pembulatan siswa).
- **B salah** — Pangkat ketiga dipakai mentah (2, bukan 3): 4 × 4 × 2 = 32.
- **C benar** — (3+1)(3+1)(2+1) = 4 × 4 × 3 = 48.
- **D salah** — Salah satu pangkat pertama dipakai mentah: 3 × 4 × 3 = 36... (varian lain menghasilkan 40 lewat kesalahan kali silang).
- **Konsep kunci:** Semakin banyak faktor prima berbeda, semakin banyak suku (pangkat+1) yang dikalikan.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 5.400 = 2³ × 3³ × 5².
  2. Tambah 1 pada tiap pangkat: (3+1), (3+1), (2+1).
  3. Kalikan: 4 × 4 × 3 = 48.

---

**15.** Banyak faktor (pembagi) dari **6.750 (= 2 × 3³ × 5³)** adalah ....

- A. 40
- B. 32
- C. 36
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah satu pangkat ditambah berlebih: 2 × 4 × 5 = 40.
- **B benar** — (1+1)(3+1)(3+1) = 2 × 4 × 4 = 32.
- **C salah** — Pangkat pertama dikira 2 (bukan 1): 3 × 4 × 3 = 36.
- **D salah** — Dua pangkat dipakai mentah: 2 × 3 × 4 = 24.
- **Konsep kunci:** Pangkat 1 pada faktor prima tetap ditambah 1 menjadi 2, bukan diabaikan.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 6.750 = 2¹ × 3³ × 5³.
  2. Tambah 1 pada tiap pangkat: (1+1), (3+1), (3+1).
  3. Kalikan: 2 × 4 × 4 = 32.

---

**16.** Banyak faktor (pembagi) dari **8.640 (= 2⁶ × 3³ × 5)** adalah ....

- A. 48
- B. 42
- C. 64
- D. 56

**Kunci: D**
**Pembahasan:**
- **A salah** — Pangkat pertama dikira 5 (bukan 6): 6 × 4 × 2 = 48.
- **B salah** — Pangkat kedua dikira 2 (bukan 3): 7 × 3 × 2 = 42.
- **C salah** — Salah satu pangkat ditambah berlebih: 8 × 4 × 2 = 64.
- **D benar** — (6+1)(3+1)(1+1) = 7 × 4 × 2 = 56.
- **Konsep kunci:** Pangkat besar seperti 6 tetap mengikuti rumus (pangkat+1) yang sama, hasilnya 7.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 8.640 = 2⁶ × 3³ × 5¹.
  2. Tambah 1 pada tiap pangkat: (6+1), (3+1), (1+1).
  3. Kalikan: 7 × 4 × 2 = 56.

---

**17.** FPB dari **360, 540, dan 720** dengan faktorisasi prima adalah ....

(360 = 2³ × 3² × 5; 540 = 2² × 3³ × 5; 720 = 2⁴ × 3² × 5)

- A. 60
- B. 90
- C. 120
- D. 180

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 3 (dikira 3¹ bukan 3²): 4 × 3 × 5 = 60.
- **B salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 9 × 5 = 90.
- **C salah** — Salah ambil pangkat 5 (dikalikan dua kali secara keliru dengan pangkat 3 yang salah): 4 × 3 × 5 × 2 = 120 (kesalahan hitung campur).
- **D benar** — Pangkat terkecil tiap faktor sama: 2² (min 3,2,4), 3² (min 2,3,2), 5¹ (min 1,1,1). FPB = 4 × 9 × 5 = 180.
- **Konsep kunci:** FPB beberapa bilangan = hasil kali faktor prima yang sama dengan pangkat TERKECIL di antara semua bilangan.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat tiap faktor: 2 (3,2,4), 3 (2,3,2), 5 (1,1,1).
  2. Ambil pangkat terkecil: 2², 3², 5¹.
  3. Kalikan: 4 × 9 × 5 = 180.

---

**18.** FPB dari **252, 336, dan 420** dengan faktorisasi prima adalah ....

(252 = 2² × 3² × 7; 336 = 2⁴ × 3 × 7; 420 = 2² × 3 × 5 × 7)

- A. 42
- B. 84
- C. 126
- D. 168

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 3 × 7 = 42.
- **B benar** — Faktor 5 tidak muncul di 252 maupun 336, jadi tidak dipakai. Pangkat terkecil: 2² (min 2,4,2), 3¹ (min 2,1,1), 7¹. FPB = 4 × 3 × 7 = 84.
- **C salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 7 = 126.
- **D salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2²) dan lupa membatasi pangkat 3: 8 × 3 × 7 = 168.
- **Konsep kunci:** Faktor yang tidak muncul di SEMUA bilangan (seperti 5 di sini) otomatis tidak dipakai dalam FPB.
- **Langkah Penyelesaian:**
  1. Faktor 5 hanya ada di 420, tidak dipakai.
  2. Ambil pangkat terkecil: 2², 3¹, 7¹.
  3. Kalikan: 4 × 3 × 7 = 84.

---

**19.** FPB dari **432, 576, dan 720** dengan faktorisasi prima adalah ....

(432 = 2⁴ × 3³; 576 = 2⁶ × 3²; 720 = 2⁴ × 3² × 5)

- A. 144
- B. 72
- C. 216
- D. 48

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 5 hanya ada di 720, tidak dipakai. Pangkat terkecil: 2⁴ (min 4,6,4), 3² (min 3,2,2). FPB = 16 × 9 = 144.
- **B salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2⁴): 8 × 9 = 72.
- **C salah** — Salah ambil pangkat 3 (dikira 3³ bukan 3²): 16 × 27 = 432 (dibagi ulang keliru jadi 216 lewat kesalahan hitung lain).
- **D salah** — Salah ambil kedua pangkat lebih kecil dari seharusnya: 8 × ... hasil akhir keliru menjadi 48.
- **Konsep kunci:** Bandingkan pangkat tiap faktor prima di semua bilangan sebelum memutuskan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. Faktor 5 hanya di 720, tidak dipakai.
  2. Ambil pangkat terkecil: 2⁴ (dari 432 dan 720), 3² (dari 576 dan 720).
  3. Kalikan: 16 × 9 = 144.

---

**20.** FPB dari **504, 756, dan 882** dengan faktorisasi prima adalah ....

(504 = 2³ × 3² × 7; 756 = 2² × 3³ × 7; 882 = 2 × 3² × 7²)

- A. 63
- B. 84
- C. 126
- D. 252

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2⁰, tidak dipakai): 9 × 7 = 63.
- **B salah** — Salah ambil pangkat 3 (dikira 3¹ tapi salah kombinasi dengan 2²): 4 × 3 × 7 = 84.
- **C benar** — Pangkat terkecil: 2¹ (min 3,2,1), 3² (min 2,3,2), 7¹ (min 1,1,2). FPB = 2 × 9 × 7 = 126.
- **D salah** — Salah ambil pangkat 2 (dikira 2², bukan 2¹): 4 × 9 × 7 = 252.
- **Konsep kunci:** Bandingkan tiap pangkat satu per satu dari ketiga bilangan, jangan tergesa memilih pangkat terbesar.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terkecil tiap faktor: 2¹ (dari 882), 3² (dari 756 dan 882), 7¹ (dari 504 dan 756).
  2. Kalikan: 2 × 9 × 7.
  3. Hasil = 126.

---

**21.** FPB dari **600, 900, dan 1.050** dengan faktorisasi prima adalah ....

(600 = 2³ × 3 × 5²; 900 = 2² × 3² × 5²; 1.050 = 2 × 3 × 5² × 7)

- A. 60
- B. 75
- C. 150
- D. 300

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 5 (dikira 5¹ bukan 5²): 2 × 3 × 5 = 30... (kombinasi kesalahan lain menghasilkan 60).
- **B salah** — Lupa faktor 2 sama sekali: 3 × 25 = 75.
- **C benar** — Faktor 7 hanya di 1.050, tidak dipakai. Pangkat terkecil: 2¹ (min 3,2,1), 3¹ (min 1,2,1), 5² (min 2,2,2). FPB = 2 × 3 × 25 = 150.
- **D salah** — Salah ambil pangkat 2 (dikira 2², bukan 2¹): 4 × 3 × 25 = 300.
- **Konsep kunci:** Faktor 7 hanya muncul di satu dari tiga bilangan, sehingga tidak ikut dikalikan dalam FPB.
- **Langkah Penyelesaian:**
  1. Faktor 7 hanya di 1.050, tidak dipakai.
  2. Ambil pangkat terkecil: 2¹, 3¹, 5².
  3. Kalikan: 2 × 3 × 25 = 150.

---

**22.** FPB dari **315, 420, dan 630** dengan faktorisasi prima adalah ....

(315 = 3² × 5 × 7; 420 = 2² × 3 × 5 × 7; 630 = 2 × 3² × 5 × 7)

- A. 105
- B. 210
- C. 35
- D. 315

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 2 hanya di 420 dan 630, tidak muncul di 315, sehingga tidak dipakai. Pangkat terkecil: 3¹ (min 2,1,2), 5¹, 7¹. FPB = 3 × 5 × 7 = 105.
- **B salah** — Salah tetap memakai faktor 2 padahal tidak muncul di 315: 2 × 3 × 5 × 7 = 210.
- **C salah** — Lupa faktor 3 sama sekali: 5 × 7 = 35.
- **D salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 9 × 5 × 7 = 315.
- **Konsep kunci:** Cek dulu apakah suatu faktor prima muncul di SEMUA bilangan sebelum memasukkannya ke FPB — faktor 2 gugur karena tidak ada di 315.
- **Langkah Penyelesaian:**
  1. Faktor 2 tidak ada di 315, jadi tidak dipakai.
  2. Ambil pangkat terkecil: 3¹, 5¹, 7¹.
  3. Kalikan: 3 × 5 × 7 = 105.

---

**23.** FPB dari **792, 924, dan 1.188** dengan faktorisasi prima adalah ....

(792 = 2³ × 3² × 11; 924 = 2² × 3 × 7 × 11; 1.188 = 2² × 3³ × 11)

- A. 33
- B. 66
- C. 44
- D. 132

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa faktor 2 sama sekali: 3 × 11 = 33.
- **B salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 3 × 11 = 66.
- **C salah** — Lupa faktor 3 sama sekali: 4 × 11 = 44.
- **D benar** — Faktor 7 hanya di 924, tidak dipakai. Pangkat terkecil: 2² (min 3,2,2), 3¹ (min 2,1,3), 11¹. FPB = 4 × 3 × 11 = 132.
- **Konsep kunci:** Faktor 7 hanya muncul di satu bilangan (924), sehingga digugurkan dari FPB.
- **Langkah Penyelesaian:**
  1. Faktor 7 hanya di 924, tidak dipakai.
  2. Ambil pangkat terkecil: 2², 3¹, 11¹.
  3. Kalikan: 4 × 3 × 11 = 132.

---

**24.** FPB dari **1.080, 1.350, dan 1.620** dengan faktorisasi prima adalah ....

(1.080 = 2³ × 3³ × 5; 1.350 = 2 × 3³ × 5²; 1.620 = 2² × 3⁴ × 5)

- A. 90
- B. 270
- C. 135
- D. 540

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 3 (dikira 3¹ bukan 3³): 2 × 3 × 5 = 30... (varian kesalahan lain menghasilkan 90).
- **B benar** — Pangkat terkecil: 2¹ (min 3,1,2), 3³ (min 3,3,4), 5¹ (min 1,2,1). FPB = 2 × 27 × 5 = 270.
- **C salah** — Lupa faktor 2 sama sekali: 27 × 5 = 135.
- **D salah** — Salah ambil pangkat 2 (dikira 2² bukan 2¹): 4 × 27 × 5 = 540.
- **Konsep kunci:** Pangkat 3 di sini kebetulan sama-sama besar (3, 3, 4) — pangkat terkecilnya tetap 3, bukan langsung dianggap sama semua.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terkecil tiap faktor: 2¹ (dari 1.350), 3³ (dari 1.080 dan 1.350), 5¹ (dari 1.080 dan 1.620).
  2. Kalikan: 2 × 27 × 5.
  3. Hasil = 270.

---

**25.** KPK dari **12, 18, dan 30** dengan faktorisasi prima adalah ....

(12 = 2² × 3; 18 = 2 × 3²; 30 = 2 × 3 × 5)

- A. 90
- B. 180
- C. 360
- D. 60

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 9 × 5 = 90.
- **B benar** — KPK memakai pangkat TERBESAR: 2² (max 2,1,1), 3² (max 1,2,1), 5¹ (max 0,0,1). KPK = 4 × 9 × 5 = 180.
- **C salah** — Salah ambil pangkat 2 (dikira 2³, kelebihan): 8 × 9 × 5 = 360.
- **D salah** — Lupa faktor 3 di pangkat terbesar (dikira 3¹ bukan 3²): 4 × 3 × 5 = 60.
- **Konsep kunci:** KPK memakai pangkat TERBESAR dari setiap faktor prima yang muncul (berbeda dengan FPB yang memakai terkecil).
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat tiap faktor: 2 (2,1,1), 3 (1,2,1), 5 (0,0,1).
  2. Ambil pangkat terbesar: 2², 3², 5¹.
  3. Kalikan: 4 × 9 × 5 = 180.

---

**26.** KPK dari **16, 24, dan 40** dengan faktorisasi prima adalah ....

(16 = 2⁴; 24 = 2³ × 3; 40 = 2³ × 5)

- A. 120
- B. 480
- C. 240
- D. 160

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2⁴): 8 × 3 × 5 = 120.
- **B salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan): 32 × 3 × 5 = 480.
- **C benar** — Pangkat terbesar: 2⁴ (max 4,3,3), 3¹ (hanya di 24), 5¹ (hanya di 40). KPK = 16 × 3 × 5 = 240.
- **D salah** — Lupa faktor 3 sama sekali, lalu keliru menambah satu faktor 2: 16 × 5 × 2 = 160.
- **Konsep kunci:** Faktor yang hanya muncul di satu bilangan (seperti 3 di 24, atau 5 di 40) tetap WAJIB masuk ke KPK.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2⁴ (dari 16), 3¹ (dari 24), 5¹ (dari 40).
  2. Kalikan: 16 × 3 × 5.
  3. Hasil = 240.

---

**27.** KPK dari **18, 24, dan 32** dengan faktorisasi prima adalah ....

(18 = 2 × 3²; 24 = 2³ × 3; 32 = 2⁵)

- A. 288
- B. 144
- C. 96
- D. 576

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat terbesar: 2⁵ (max 1,3,5), 3² (max 2,1,0). KPK = 32 × 9 = 288.
- **B salah** — Salah ambil pangkat 2 (dikira 2⁴ bukan 2⁵): 16 × 9 = 144.
- **C salah** — Lupa satu faktor 3 (dikira 3¹ bukan 3²): 32 × 3 = 96.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁶, kelebihan): 64 × 9 = 576.
- **Konsep kunci:** Bandingkan pangkat 2 di ketiga bilangan (1, 3, 5) — pangkat terbesarnya 5, bukan 4 atau 6.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2⁵ (dari 32), 3² (dari 18).
  2. Kalikan: 32 × 9.
  3. Hasil = 288.

---

**28.** KPK dari **24, 40, dan 60** dengan faktorisasi prima adalah ....

(24 = 2³ × 3; 40 = 2³ × 5; 60 = 2² × 3 × 5)

- A. 60
- B. 240
- C. 480
- D. 120

**Kunci: D**
**Pembahasan:**
- **A salah** — Menjawab salah satu bilangan (60) alih-alih KPK ketiganya.
- **B salah** — Salah ambil pangkat 2 (dikira 2⁴, kelebihan): 16 × 3 × 5 = 240.
- **C salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan lagi): 32 × 3 × 5 = 480.
- **D benar** — Pangkat terbesar: 2³ (max 3,3,2), 3¹ (max 1,0,1), 5¹ (max 0,1,1). KPK = 8 × 3 × 5 = 120.
- **Konsep kunci:** Pangkat terbesar faktor 2 di sini adalah 3 (dari 24 dan 40), bukan dari 60 yang hanya 2².
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2³, 3¹, 5¹.
  2. Kalikan: 8 × 3 × 5.
  3. Hasil = 120.

---

**29.** KPK dari **15, 20, dan 35** dengan faktorisasi prima adalah ....

(15 = 3 × 5; 20 = 2² × 5; 35 = 5 × 7)

- A. 420
- B. 210
- C. 105
- D. 140

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat terbesar: 2² (hanya di 20), 3¹ (hanya di 15), 5¹, 7¹ (hanya di 35). KPK = 4 × 3 × 5 × 7 = 420.
- **B salah** — Salah memakai hanya satu faktor 2 (bukan 2²), lalu keliru menambah faktor lain: 2 × 3 × 5 × 7 = 210.
- **C salah** — Lupa faktor 2 sama sekali: 3 × 5 × 7 = 105.
- **D salah** — Lupa faktor 3 sama sekali: 4 × 5 × 7 = 140.
- **Konsep kunci:** Dengan tiga bilangan berbeda yang masing-masing membawa faktor unik (2, 3, 7), KPK harus mengumpulkan SEMUA faktor tersebut.
- **Langkah Penyelesaian:**
  1. Kumpulkan semua faktor prima yang muncul: 2², 3¹, 5¹, 7¹.
  2. Kalikan: 4 × 3 × 5 × 7.
  3. Hasil = 420.

---

**30.** KPK dari **28, 42, dan 63** dengan faktorisasi prima adalah ....

(28 = 2² × 7; 42 = 2 × 3 × 7; 63 = 3² × 7)

- A. 126
- B. 84
- C. 63
- D. 252

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 9 × 7 = 126.
- **B salah** — Lupa satu faktor 3 (dikira 3¹ bukan 3²): 4 × 3 × 7 = 84.
- **C salah** — Menjawab salah satu bilangan (63) alih-alih KPK ketiganya.
- **D benar** — Pangkat terbesar: 2² (max 2,1,0), 3² (max 0,1,2), 7¹. KPK = 4 × 9 × 7 = 252.
- **Konsep kunci:** Bandingkan pangkat 2 (2,1,0) dan pangkat 3 (0,1,2) secara terpisah — ambil yang terbesar dari masing-masing.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2², 3², 7¹.
  2. Kalikan: 4 × 9 × 7.
  3. Hasil = 252.

---

**31.** KPK dari **45, 60, dan 75** dengan faktorisasi prima adalah ....

(45 = 3² × 5; 60 = 2² × 3 × 5; 75 = 3 × 5²)

- A. 300
- B. 450
- C. 900
- D. 180

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa satu faktor 3 (dikira 3¹ bukan 3²): 4 × 3 × 25 = 300.
- **B salah** — Lupa faktor 2 sama sekali, lalu keliru menggabung pangkat 5 yang salah: 9 × 5 × 10 = 450.
- **C benar** — Pangkat terbesar: 2² (hanya di 60), 3² (max 2,1,1), 5² (max 1,1,2). KPK = 4 × 9 × 25 = 900.
- **D salah** — Lupa satu faktor 5 (dikira 5¹ bukan 5²): 4 × 9 × 5 = 180.
- **Konsep kunci:** Tiap bilangan menyumbang pangkat tertinggi untuk salah satu faktor: 60 untuk faktor 2, 45 untuk faktor 3, 75 untuk faktor 5.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2² (dari 60), 3² (dari 45), 5² (dari 75).
  2. Kalikan: 4 × 9 × 25.
  3. Hasil = 900.

---

**32.** KPK dari **36, 48, dan 54** dengan faktorisasi prima adalah ....

(36 = 2² × 3²; 48 = 2⁴ × 3; 54 = 2 × 3³)

- A. 216
- B. 432
- C. 288
- D. 864

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2⁴): 8 × 27 = 216.
- **B benar** — Pangkat terbesar: 2⁴ (max 2,4,1), 3³ (max 2,1,3). KPK = 16 × 27 = 432.
- **C salah** — Lupa satu faktor 3 (dikira 3² bukan 3³), lalu keliru menambah faktor lain: 16 × 9 × 2 = 288.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan): 32 × 27 = 864.
- **Konsep kunci:** Pangkat terbesar faktor 3 (yaitu 3) datang dari 54, sedangkan pangkat terbesar faktor 2 (yaitu 4) datang dari 48 — keduanya harus digabung.
- **Langkah Penyelesaian:**
  1. Ambil pangkat terbesar tiap faktor: 2⁴ (dari 48), 3³ (dari 54).
  2. Kalikan: 16 × 27.
  3. Hasil = 432.

---

**33.** Manakah di antara bilangan berikut yang merupakan **kuadrat sempurna** berdasarkan faktorisasi primanya?

- A. 2³ × 3² (= 72)
- B. 2² × 3³ (= 108)
- C. 2 × 3⁴ (= 162)
- D. 2⁴ × 3² (= 144)

**Kunci: D**
**Pembahasan:**
- **A salah** — Pangkat 2 pada 2³ bernilai 3 (ganjil), sehingga 72 BUKAN kuadrat sempurna.
- **B salah** — Pangkat 3 pada 3³ bernilai 3 (ganjil), sehingga 108 BUKAN kuadrat sempurna.
- **C salah** — Pangkat 2 pada 2¹ bernilai 1 (ganjil), sehingga 162 BUKAN kuadrat sempurna walau pangkat 3-nya genap.
- **D benar** — 2⁴ dan 3² SEMUA pangkatnya genap → 144 = 12² adalah kuadrat sempurna.
- **Konsep kunci:** Bilangan adalah kuadrat sempurna jika dan hanya jika SEMUA pangkat pada faktorisasi primanya genap — bukan sebagian saja.
- **Langkah Penyelesaian:**
  1. Cek tiap pangkat pada keempat opsi.
  2. Hanya opsi D yang memiliki SEMUA pangkat genap (4 dan 2).
  3. 144 = 12², terbukti kuadrat sempurna.

---

**34.** Nilai **k** terkecil agar **N = 2⁵ × 3² × k** menjadi kuadrat sempurna adalah ....

- A. 1
- B. 3
- C. 2
- D. 6

**Kunci: C**
**Pembahasan:**
- **A salah** — k = 1 tidak mengubah pangkat 2 yang masih ganjil (5).
- **B salah** — k = 3 justru membuat pangkat 3 menjadi ganjil (3² × 3 = 3³).
- **C benar** — Pangkat 2 (yaitu 5) ganjil, perlu satu faktor 2 lagi agar jadi 2⁶ (genap). Pangkat 3 (yaitu 2) sudah genap, tidak perlu ditambah. k = 2.
- **D salah** — k = 6 = 2 × 3 justru merusak pangkat 3 yang sudah genap (menjadi 3³, ganjil).
- **Konsep kunci:** Cek SETIAP pangkat satu per satu — hanya pangkat yang ganjil yang perlu ditambah, pangkat yang sudah genap jangan diutak-atik.
- **Langkah Penyelesaian:**
  1. Pangkat 2 = 5 (ganjil) → butuh tambahan satu faktor 2.
  2. Pangkat 3 = 2 (genap) → tidak perlu tambahan.
  3. k terkecil = 2.

---

**35.** Akar kuadrat dari **2.116** menggunakan faktorisasi prima adalah ....

(2.116 = 2² × 23²)

- A. 42
- B. 46
- C. 23
- D. 53

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah hitung 2 × 23 (dikira hasilnya 42, padahal 2 × 23 = 46).
- **B benar** — Bagi dua tiap pangkat: 2² → 2¹, 23² → 23¹. Akar kuadrat = 2 × 23 = 46.
- **C salah** — Hanya mengambil faktor 23, lupa mengalikan dengan faktor 2.
- **D salah** — Salah hitung perkalian 2 × 23 (dikira hasilnya 53).
- **Konsep kunci:** Akar kuadrat dari faktorisasi prima diperoleh dengan MEMBAGI DUA setiap pangkat, lalu mengalikan hasilnya (bukan menjumlahkan).
- **Langkah Penyelesaian:**
  1. Faktorisasi: 2.116 = 2² × 23².
  2. Bagi dua tiap pangkat: 2¹ × 23¹.
  3. Kalikan: 2 × 23 = 46.

---

**36.** Manakah di antara bilangan berikut yang **BUKAN** kuadrat sempurna berdasarkan faktorisasi primanya?

- A. 2³ × 5² (= 200)
- B. 2² × 5² (= 100)
- C. 2⁴ × 5² (= 400)
- D. 2⁶ × 5⁴ (= 40.000)

**Kunci: A**
**Pembahasan:**
- **A benar (bukan kuadrat)** — Pangkat 2 pada 2³ bernilai 3 (ganjil), sehingga 200 BUKAN kuadrat sempurna.
- **B salah (ini kuadrat)** — 2² dan 5² semua genap → 100 = 10², kuadrat sempurna.
- **C salah (ini kuadrat)** — 2⁴ dan 5² semua genap → 400 = 20², kuadrat sempurna.
- **D salah (ini kuadrat)** — 2⁶ dan 5⁴ semua genap → 40.000 = 200², kuadrat sempurna.
- **Konsep kunci:** Satu saja pangkat ganjil pada faktorisasi prima sudah cukup membuat bilangan itu BUKAN kuadrat sempurna.
- **Langkah Penyelesaian:**
  1. Cek pangkat 2 pada tiap opsi: 3, 2, 4, 6.
  2. Hanya opsi A yang pangkatnya (3) ganjil.
  3. Maka 200 bukan kuadrat sempurna — jawaban A.

---

**37.** Nilai **k** terkecil agar **N = 3⁴ × 5³ × k** menjadi kuadrat sempurna adalah ....

- A. 3
- B. 5
- C. 15
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — k = 3 justru merusak pangkat 3 yang sudah genap (3⁴ × 3 = 3⁵, ganjil).
- **B benar** — Pangkat 3 (yaitu 4) sudah genap, tidak perlu tambahan. Pangkat 5 (yaitu 3) ganjil, perlu satu faktor 5 lagi agar jadi 5⁴. k = 5.
- **C salah** — k = 15 = 3 × 5 justru merusak pangkat 3 yang sudah genap.
- **D salah** — k = 25 = 5² berlebihan; pangkat 5 hanya butuh naik satu tingkat (dari 3 ke 4), bukan dua.
- **Konsep kunci:** Tambahkan faktor prima secukupnya (pangkat naik 1) untuk mengubah pangkat ganjil menjadi genap — jangan menambah lebih dari yang perlu.
- **Langkah Penyelesaian:**
  1. Pangkat 3 = 4 (genap) → tidak perlu tambahan.
  2. Pangkat 5 = 3 (ganjil) → butuh satu faktor 5 lagi.
  3. k terkecil = 5.

---

**38.** Akar kuadrat dari **5.929** menggunakan faktorisasi prima adalah ....

(5.929 = 7² × 11²)

- A. 77
- B. 83
- C. 71
- D. 89

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi dua tiap pangkat: 7² → 7¹, 11² → 11¹. Akar kuadrat = 7 × 11 = 77.
- **B salah** — Salah hitung perkalian 7 × 11 (dikira hasilnya 83, padahal 77).
- **C salah** — Tertukar digit hasil perkalian (77 salah tulis jadi 71).
- **D salah** — Salah hitung perkalian 7 × 11 (dikira hasilnya 89).
- **Konsep kunci:** Akar kuadrat dari faktorisasi prima = kalikan tiap basis prima setelah pangkatnya dibagi dua.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 5.929 = 7² × 11².
  2. Bagi dua tiap pangkat: 7¹ × 11¹.
  3. Kalikan: 7 × 11 = 77.

---

**39.** Bilangan terkecil yang harus dikalikan ke **1.500** agar menjadi kuadrat sempurna adalah ....

(1.500 = 2² × 3 × 5³)

- A. 3
- B. 5
- C. 6
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengalikan dengan 3 saja hanya memperbaiki pangkat 3, tapi pangkat 5 (3, ganjil) masih belum genap.
- **B salah** — Mengalikan dengan 5 saja hanya memperbaiki pangkat 5, tapi pangkat 3 (1, ganjil) masih belum genap.
- **C salah** — 6 = 2 × 3 salah sasaran; pangkat 2 sudah genap (2²), tidak perlu ditambah, sementara pangkat 5 masih terlewat.
- **D benar** — Pangkat 2 (=2) sudah genap. Pangkat 3 (=1) ganjil, butuh ×3. Pangkat 5 (=3) ganjil, butuh ×5. Pengali terkecil = 3 × 5 = 15.
- **Konsep kunci:** Periksa SEMUA pangkat satu per satu — pengali terkecil adalah hasil kali SEMUA faktor prima yang pangkatnya masih ganjil.
- **Langkah Penyelesaian:**
  1. Pangkat 2 = 2 (genap) → aman.
  2. Pangkat 3 = 1 (ganjil) → butuh ×3. Pangkat 5 = 3 (ganjil) → butuh ×5.
  3. Pengali terkecil = 3 × 5 = 15.

---

**40.** Agar bilangan berbentuk **2ᵃ × 3ᵇ** menjadi kuadrat sempurna SEKALIGUS kubik sempurna, syarat untuk pangkat **a** dan **b** (bukan nol) adalah ....

- A. kelipatan 2
- B. kelipatan 3
- C. kelipatan 6
- D. kelipatan 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Kelipatan 2 hanya memenuhi syarat kuadrat sempurna, belum tentu kubik sempurna (misal pangkat 2 memenuhi kuadrat tapi bukan kelipatan 3).
- **B salah** — Kelipatan 3 hanya memenuhi syarat kubik sempurna, belum tentu kuadrat sempurna.
- **C benar** — Agar sekaligus kuadrat (kelipatan 2) dan kubik (kelipatan 3) sempurna, pangkat harus kelipatan KPK(2,3) = 6.
- **D salah** — Kelipatan 12 memang memenuhi syarat, tapi bukan syarat MINIMAL — 6 sudah cukup (12 hanya kelipatan dari 6, berlebihan).
- **Konsep kunci:** Syarat gabungan dua sifat (kuadrat & kubik sempurna) dicari dengan KPK dari syarat masing-masing (2 dan 3).
- **Langkah Penyelesaian:**
  1. Syarat kuadrat sempurna: pangkat kelipatan 2.
  2. Syarat kubik sempurna: pangkat kelipatan 3.
  3. Syarat gabungan (harus memenuhi keduanya): pangkat kelipatan KPK(2,3) = 6.

---

**41.** Akar kubik dari **13.824** menggunakan faktorisasi prima adalah ....

(13.824 = 2⁹ × 3³)

- A. 12
- B. 18
- C. 24
- D. 36

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah membagi pangkat 2 (9 ÷ 3 = 3, tapi dianggap 2): hasil dihitung ulang jadi 4 × 3 = 12.
- **B salah** — Salah mengalikan basisnya (2² × 3² = 4 × 9 = ... dikombinasikan keliru menjadi 18).
- **C benar** — Bagi tiga tiap pangkat: 2⁹ → 2³ = 8, 3³ → 3¹ = 3. Akar kubik = 8 × 3 = 24.
- **D salah** — Salah membagi pangkat 2 (dikira tetap 2⁴): 16 × 3 = ... hasil keliru menjadi 36 lewat kombinasi lain.
- **Konsep kunci:** Akar kubik dari faktorisasi prima diperoleh dengan MEMBAGI TIGA setiap pangkat, lalu mengalikan hasilnya.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 13.824 = 2⁹ × 3³.
  2. Bagi tiga tiap pangkat: 2³ dan 3¹.
  3. Kalikan: 8 × 3 = 24.

---

**42.** Nilai **k** terkecil agar **N = 2⁷ × 3² × k** menjadi kubik sempurna adalah ....

- A. 2
- B. 3
- C. 6
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — k = 2 hanya menaikkan pangkat 2 menjadi 8 (belum kelipatan 3), dan tidak memperbaiki pangkat 3 sama sekali.
- **B salah** — k = 3 hanya memperbaiki pangkat 3 (menjadi 3³), tapi pangkat 2 (7) masih belum kelipatan 3.
- **C salah** — k = 6 = 2 × 3 kurang faktor 2 (hanya menaikkan pangkat 2 menjadi 8, padahal butuh naik ke 9).
- **D benar** — Pangkat 2 (=7) perlu naik ke kelipatan 3 terdekat (9), butuh ×2² = 4. Pangkat 3 (=2) perlu naik ke 3, butuh ×3¹ = 3. k = 4 × 3 = 12.
- **Konsep kunci:** Untuk kubik sempurna, tiap pangkat harus dinaikkan ke KELIPATAN 3 terdekat di atasnya, bukan sekadar ditambah satu.
- **Langkah Penyelesaian:**
  1. Pangkat 2 = 7 → kelipatan 3 terdekat di atas = 9 → butuh ×2² = 4.
  2. Pangkat 3 = 2 → kelipatan 3 terdekat di atas = 3 → butuh ×3¹ = 3.
  3. k terkecil = 4 × 3 = 12.

---

**43.** Manakah di antara bilangan berikut yang merupakan **kubik sempurna** berdasarkan faktorisasi primanya?

- A. 2⁶ × 3³ (= 1.728)
- B. 2⁴ × 3³ (= 432)
- C. 2⁶ × 3² (= 576)
- D. 2⁵ × 3³ (= 864)

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat 6 dan 3 SEMUA kelipatan 3 → 1.728 = 12³, kubik sempurna.
- **B salah** — Pangkat 2 pada 2⁴ bernilai 4 (bukan kelipatan 3), sehingga 432 BUKAN kubik sempurna.
- **C salah** — Pangkat 3 pada 3² bernilai 2 (bukan kelipatan 3), sehingga 576 BUKAN kubik sempurna.
- **D salah** — Pangkat 2 pada 2⁵ bernilai 5 (bukan kelipatan 3), sehingga 864 BUKAN kubik sempurna.
- **Konsep kunci:** Bilangan adalah kubik sempurna jika dan hanya jika SEMUA pangkat pada faktorisasi primanya kelipatan 3.
- **Langkah Penyelesaian:**
  1. Cek tiap pangkat pada keempat opsi.
  2. Hanya opsi A yang SEMUA pangkatnya kelipatan 3 (6 dan 3).
  3. 1.728 = 12³, terbukti kubik sempurna.

---

**44.** Akar kubik dari **42.875** menggunakan faktorisasi prima adalah ....

(42.875 = 5³ × 7³)

- A. 25
- B. 35
- C. 45
- D. 55

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya mengambil pangkat basis 5 lalu dikuadratkan secara keliru (5² = 25), lupa mengalikan dengan 7.
- **B benar** — Bagi tiga tiap pangkat: 5³ → 5¹, 7³ → 7¹. Akar kubik = 5 × 7 = 35.
- **C salah** — Salah hitung perkalian 5 × 7 (dikira hasilnya 45).
- **D salah** — Salah hitung perkalian 5 × 7 (dikira hasilnya 55).
- **Konsep kunci:** Bagi tiga tiap pangkat pada faktorisasi prima, lalu kalikan basisnya untuk mendapatkan akar kubik.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 42.875 = 5³ × 7³.
  2. Bagi tiga tiap pangkat: 5¹ × 7¹.
  3. Kalikan: 5 × 7 = 35.

---

**45.** Bilangan terkecil yang harus dikalikan ke **250** agar menjadi kubik sempurna adalah ....

(250 = 2 × 5³)

- A. 4
- B. 2
- C. 5
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat 2 (=1) perlu naik ke kelipatan 3 terdekat (3), butuh ×2² = 4. Pangkat 5 (=3) sudah kelipatan 3, tidak perlu tambahan. Pengali terkecil = 4.
- **B salah** — k = 2 hanya menaikkan pangkat 2 menjadi 2 (masih bukan kelipatan 3).
- **C salah** — k = 5 justru merusak pangkat 5 yang sudah kelipatan 3 (menjadi 5⁴).
- **D salah** — k = 8 = 2³ berlebihan; pangkat 2 hanya butuh naik dari 1 ke 3 (selisih 2), bukan menambah 3 penuh.
- **Konsep kunci:** Hitung selisih pangkat menuju kelipatan 3 terdekat DI ATASNYA — jangan menambah pangkat penuh (3) jika selisihnya lebih kecil.
- **Langkah Penyelesaian:**
  1. Pangkat 2 = 1 → kelipatan 3 terdekat = 3 → butuh ×2² = 4.
  2. Pangkat 5 = 3 (sudah kelipatan 3) → tidak perlu tambahan.
  3. Pengali terkecil = 4.

---

**46.** Pasangan pangkat **a** dan **b** TERKECIL (bukan nol) agar bilangan **2ᵃ × 5ᵇ** menjadi kubik sempurna adalah ....

- A. a = 6, b = 6
- B. a = 3, b = 3
- C. a = 3, b = 6
- D. a = 2, b = 2

**Kunci: B**
**Pembahasan:**
- **A salah** — a = 6, b = 6 memang kubik sempurna, tapi bukan pasangan TERKECIL — 3 sudah cukup untuk masing-masing pangkat.
- **B benar** — Syarat kubik sempurna: tiap pangkat kelipatan 3. Nilai kelipatan 3 positif terkecil untuk a maupun b adalah 3. Maka a = 3, b = 3.
- **C salah** — b = 6 berlebihan; pangkat 5 hanya perlu 3 (kelipatan 3 terkecil), bukan 6.
- **D salah** — a = 2, b = 2 bukan kelipatan 3 sama sekali, sehingga bukan kubik sempurna.
- **Konsep kunci:** Nilai kelipatan 3 positif TERKECIL adalah 3 itu sendiri — jangan langsung melompat ke 6 atau kelipatan lain yang lebih besar.
- **Langkah Penyelesaian:**
  1. Syarat kubik sempurna: pangkat harus kelipatan 3.
  2. Kelipatan 3 positif terkecil adalah 3.
  3. Maka pasangan terkecil: a = 3, b = 3.

---

**47.** Pecahan **252/378** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(252 = 2² × 3² × 7; 378 = 2 × 3³ × 7)

- A. 3/4
- B. 4/5
- C. 5/6
- D. 2/3

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah hitung FPB (dikira lebih kecil dari sebenarnya), sehingga hasil pembagian keliru menjadi 3/4.
- **B salah** — Tidak ada hubungan matematis yang benar antara pecahan ini dengan 4/5; kemungkinan salah menghitung FPB total.
- **C salah** — Sama seperti B, hasil dari kesalahan hitung FPB yang berbeda.
- **D benar** — FPB(252, 378) = 2¹ × 3² × 7¹ = 2 × 9 × 7 = 126. 252 ÷ 126 = 2, 378 ÷ 126 = 3. Hasil = 2/3.
- **Konsep kunci:** Ambil FPB dari faktorisasi (pangkat terkecil tiap faktor sama), lalu bagi pembilang dan penyebut sekaligus dengan FPB itu.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 252 = 2² × 3² × 7; 378 = 2 × 3³ × 7.
  2. FPB = 2¹ × 3² × 7¹ = 126.
  3. Bagi: 252 ÷ 126 = 2, 378 ÷ 126 = 3 → 2/3.

---

**48.** Pecahan **360/450** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(360 = 2³ × 3² × 5; 450 = 2 × 3² × 5²)

- A. 2/3
- B. 3/4
- C. 4/5
- D. 5/6

**Kunci: C**
**Pembahasan:**
- **A salah** — Hasil dari kesalahan menghitung FPB terlalu besar sehingga pecahan tersederhanakan berlebihan.
- **B salah** — Hasil dari kesalahan hitung FPB yang tidak konsisten dengan faktorisasi sebenarnya.
- **C benar** — FPB(360, 450) = 2¹ × 3² × 5¹ = 2 × 9 × 5 = 90. 360 ÷ 90 = 4, 450 ÷ 90 = 5. Hasil = 4/5.
- **D salah** — Hasil dari kesalahan menghitung FPB terlalu kecil sehingga pecahan tidak tersederhanakan sepenuhnya.
- **Konsep kunci:** FPB dua bilangan besar dicari dari pangkat terkecil tiap faktor prima yang sama, bukan dengan coba-coba pembagian manual.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 360 = 2³ × 3² × 5; 450 = 2 × 3² × 5².
  2. FPB = 2¹ × 3² × 5¹ = 90.
  3. Bagi: 360 ÷ 90 = 4, 450 ÷ 90 = 5 → 4/5.

---

**49.** Pecahan **630/882** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(630 = 2 × 3² × 5 × 7; 882 = 2 × 3² × 7²)

- A. 3/5
- B. 4/7
- C. 6/7
- D. 5/7

**Kunci: D**
**Pembahasan:**
- **A salah** — Hasil dari kesalahan menghitung FPB yang melibatkan faktor 5 secara keliru (padahal 5 tidak ada di 882).
- **B salah** — Hasil dari kesalahan hitung pembagian penyebut.
- **C salah** — Hasil dari kesalahan hitung pembagian pembilang.
- **D benar** — Faktor 5 hanya ada di 630, tidak dipakai di FPB. FPB(630, 882) = 2¹ × 3² × 7¹ = 2 × 9 × 7 = 126. 630 ÷ 126 = 5, 882 ÷ 126 = 7. Hasil = 5/7.
- **Konsep kunci:** Faktor yang hanya muncul di salah satu bilangan (di sini: 5, hanya di 630) tidak ikut dihitung dalam FPB.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 630 = 2 × 3² × 5 × 7; 882 = 2 × 3² × 7².
  2. FPB = 2¹ × 3² × 7¹ = 126 (faktor 5 gugur karena tak ada di 882).
  3. Bagi: 630 ÷ 126 = 5, 882 ÷ 126 = 7 → 5/7.

---

**50.** Pecahan **891/1.188** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(891 = 3⁴ × 11; 1.188 = 2² × 3³ × 11)

- A. 3/4
- B. 4/5
- C. 2/3
- D. 5/6

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 2 hanya ada di 1.188, tidak dipakai. FPB(891, 1.188) = 3³ × 11¹ = 27 × 11 = 297. 891 ÷ 297 = 3, 1.188 ÷ 297 = 4. Hasil = 3/4.
- **B salah** — Hasil dari kesalahan hitung FPB yang tidak tepat.
- **C salah** — Hasil dari kesalahan hitung pangkat 3 (dikira 3² bukan 3³ untuk FPB).
- **D salah** — Hasil dari kesalahan hitung yang tidak konsisten dengan faktorisasi sebenarnya.
- **Konsep kunci:** Faktor 2 hanya ada di salah satu bilangan (1.188), sehingga digugurkan dari perhitungan FPB.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 891 = 3⁴ × 11; 1.188 = 2² × 3³ × 11.
  2. FPB = 3³ × 11¹ = 297 (faktor 2 gugur karena tak ada di 891).
  3. Bagi: 891 ÷ 297 = 3, 1.188 ÷ 297 = 4 → 3/4.

---

**51.** Pecahan **1.008/1.440** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(1.008 = 2⁴ × 3² × 7; 1.440 = 2⁵ × 3² × 5)

- A. 5/8
- B. 7/10
- C. 3/5
- D. 4/7

**Kunci: B**
**Pembahasan:**
- **A salah** — Hasil dari kesalahan hitung FPB yang mengabaikan pangkat 3.
- **B benar** — Faktor 5 dan 7 masing-masing hanya di satu bilangan, tidak dipakai. FPB(1.008, 1.440) = 2⁴ × 3² = 16 × 9 = 144. 1.008 ÷ 144 = 7, 1.440 ÷ 144 = 10. Hasil = 7/10.
- **C salah** — Hasil dari kesalahan hitung pembagian yang tidak sesuai FPB sebenarnya.
- **D salah** — Hasil dari kesalahan hitung yang tertukar antara pembilang dan penyebut.
- **Konsep kunci:** Faktor 5 (hanya di 1.440) dan faktor 7 (hanya di 1.008) sama-sama tidak dipakai dalam FPB karena tidak muncul di KEDUA bilangan.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 1.008 = 2⁴ × 3² × 7; 1.440 = 2⁵ × 3² × 5.
  2. FPB = 2⁴ × 3² = 144.
  3. Bagi: 1.008 ÷ 144 = 7, 1.440 ÷ 144 = 10 → 7/10.

---

**52.** Pecahan **675/1.125** jika disederhanakan menggunakan FPB dari faktorisasi primanya menjadi ....

(675 = 3³ × 5²; 1.125 = 3² × 5³)

- A. 2/5
- B. 4/9
- C. 3/5
- D. 5/9

**Kunci: C**
**Pembahasan:**
- **A salah** — Hasil dari kesalahan hitung FPB yang tidak sesuai faktorisasi sebenarnya.
- **B salah** — Hasil dari kesalahan hitung yang menukar peran pangkat 3 dan 5.
- **C benar** — FPB(675, 1.125) = 3² × 5² = 9 × 25 = 225. 675 ÷ 225 = 3, 1.125 ÷ 225 = 5. Hasil = 3/5.
- **D salah** — Hasil dari kesalahan hitung pembagian yang tertukar.
- **Konsep kunci:** Ambil pangkat terkecil dari faktor yang sama (3² dan 5²), lalu bagi kedua bilangan sekaligus dengan FPB tersebut.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 675 = 3³ × 5²; 1.125 = 3² × 5³.
  2. FPB = 3² × 5² = 225.
  3. Bagi: 675 ÷ 225 = 3, 1.125 ÷ 225 = 5 → 3/5.

---

**53.** Tiga lampu hias berkedip berulang tiap 8 detik, 12 detik, dan 18 detik. Jika ketiganya berkedip bersamaan pada pukul 07.00.00, mereka akan berkedip bersamaan lagi setelah ... detik.

(8 = 2³; 12 = 2² × 3; 18 = 2 × 3²)

- A. 36
- B. 48
- C. 72
- D. 144

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2² bukan 2³): 4 × 9 = 36.
- **B salah** — Salah ambil pangkat 3 (dikira 3¹ bukan 3²): 8 × ... hasil keliru menjadi 48 lewat kombinasi lain.
- **C benar** — KPK(8,12,18): pangkat terbesar 2³ (dari 8), 3² (dari 18). KPK = 8 × 9 = 72.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁴, kelebihan): 16 × 9 = 144.
- **Konsep kunci:** Soal "bersamaan lagi setelah..." selalu dijawab dengan KPK dari semua interval waktu.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 8 = 2³; 12 = 2² × 3; 18 = 2 × 3².
  2. Ambil pangkat terbesar: 2³, 3².
  3. KPK = 8 × 9 = 72 detik.

---

**54.** Tiga bus jurusan berbeda berangkat dari terminal tiap 15 menit, 25 menit, dan 40 menit. Jika ketiganya berangkat bersamaan pukul 06.00, mereka akan berangkat bersamaan lagi setelah ... menit.

(15 = 3 × 5; 25 = 5²; 40 = 2³ × 5)

- A. 300
- B. 600
- C. 900
- D. 1.200

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa satu faktor 5 (dikira 5¹ bukan 5²): 8 × 3 × 5 = 120... (kombinasi kesalahan lain menghasilkan 300).
- **B benar** — KPK(15,25,40): 2³ (dari 40), 3¹ (dari 15), 5² (dari 25). KPK = 8 × 3 × 25 = 600.
- **C salah** — Salah ambil pangkat 2 (dikira 2⁴, kelebihan): 16 × 3 × 25... dikombinasikan salah menjadi 900.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan lagi): hasil keliru menjadi 1.200.
- **Konsep kunci:** Faktor 5² (dari 25) tetap harus dipakai penuh meskipun 15 dan 40 hanya membawa 5¹.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 15 = 3 × 5; 25 = 5²; 40 = 2³ × 5.
  2. Ambil pangkat terbesar: 2³, 3¹, 5².
  3. KPK = 8 × 3 × 25 = 600 menit.

---

**55.** Tiga mesin di sebuah pabrik berbunyi "tik" tiap 14 detik, 21 detik, dan 42 detik. Jika ketiganya berbunyi bersamaan di awal, mereka akan berbunyi bersamaan lagi setelah ... detik.

(14 = 2 × 7; 21 = 3 × 7; 42 = 2 × 3 × 7)

- A. 42
- B. 84
- C. 126
- D. 168

**Kunci: A**
**Pembahasan:**
- **A benar** — KPK(14,21,42): pangkat terbesar 2¹, 3¹, 7¹ (semua sudah termuat dalam 42 itu sendiri). KPK = 2 × 3 × 7 = 42.
- **B salah** — Mengira KPK harus lebih besar dari bilangan terbesar (42), padahal 42 sudah kelipatan dari 14 dan 21 sekaligus: 2 × 42 = 84.
- **C salah** — Salah mengalikan ketiga bilangan tanpa memperhitungkan faktor yang tumpang tindih: hasil keliru menjadi 126.
- **D salah** — Salah mengalikan dengan cara lain yang juga mengabaikan tumpang tindih faktor: hasil keliru menjadi 168.
- **Konsep kunci:** Jika salah satu bilangan sudah merupakan kelipatan dari bilangan-bilangan lainnya, KPK-nya adalah bilangan itu sendiri.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 14 = 2 × 7; 21 = 3 × 7; 42 = 2 × 3 × 7.
  2. Ambil pangkat terbesar tiap faktor: 2¹, 3¹, 7¹ — semuanya sudah ada di 42.
  3. KPK = 2 × 3 × 7 = 42 detik.

---

**56.** Tiga kembang api meletus berulang tiap 18 detik, 24 detik, dan 30 detik. Jika ketiganya meletus bersamaan di awal pertunjukan, mereka akan meletus bersamaan lagi setelah ... detik.

(18 = 2 × 3²; 24 = 2³ × 3; 30 = 2 × 3 × 5)

- A. 90
- B. 180
- C. 270
- D. 360

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2³): 2 × 9 × 5 = 90.
- **B salah** — Salah ambil pangkat 2 (dikira 2² bukan 2³): 4 × 9 × 5 = 180.
- **C salah** — Lupa faktor 5 sama sekali: 8 × ... hasil keliru menjadi 270 lewat kombinasi lain.
- **D benar** — KPK(18,24,30): 2³ (dari 24), 3² (dari 18), 5¹ (dari 30). KPK = 8 × 9 × 5 = 360.
- **Konsep kunci:** Kumpulkan pangkat terbesar dari SETIAP bilangan yang terlibat, termasuk faktor 5 yang hanya muncul di salah satunya.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 18 = 2 × 3²; 24 = 2³ × 3; 30 = 2 × 3 × 5.
  2. Ambil pangkat terbesar: 2³, 3², 5¹.
  3. KPK = 8 × 9 × 5 = 360 detik.

---

**57.** Tiga kapal nelayan berlabuh kembali ke dermaga tiap 20 hari, 28 hari, dan 35 hari sekali. Jika ketiganya berlabuh bersamaan hari ini, mereka akan berlabuh bersamaan lagi setelah ... hari.

(20 = 2² × 5; 28 = 2² × 7; 35 = 5 × 7)

- A. 70
- B. 140
- C. 210
- D. 280

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2²): 2 × 5 × 7 = 70.
- **B benar** — KPK(20,28,35): 2² (dari 20 dan 28), 5¹ (dari 20 dan 35), 7¹ (dari 28 dan 35). KPK = 4 × 5 × 7 = 140.
- **C salah** — Salah menambah faktor 3 yang sebenarnya tidak ada: hasil keliru menjadi 210.
- **D salah** — Salah ambil pangkat 2 (dikira 2³, kelebihan): 8 × 5 × 7 = 280.
- **Konsep kunci:** Meski tidak ada faktor yang muncul di SEMUA bilangan, KPK tetap dihitung dari pangkat terbesar tiap faktor yang ada.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 20 = 2² × 5; 28 = 2² × 7; 35 = 5 × 7.
  2. Ambil pangkat terbesar: 2², 5¹, 7¹.
  3. KPK = 4 × 5 × 7 = 140 hari.

---

**58.** Tiga jam di sebuah ruangan berbunyi tiap 45 menit, 60 menit, dan 75 menit. Jika ketiganya berbunyi bersamaan pukul 08.00, mereka akan berbunyi bersamaan lagi setelah ... menit.

(45 = 3² × 5; 60 = 2² × 3 × 5; 75 = 3 × 5²)

- A. 300
- B. 450
- C. 600
- D. 900

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa satu faktor 3 (dikira 3¹ bukan 3²): 4 × 3 × 25 = 300.
- **B salah** — Lupa faktor 2 sama sekali, lalu keliru mengombinasikan pangkat 5: hasil menjadi 450.
- **C salah** — Lupa satu faktor 5 (dikira 5¹ bukan 5²): 4 × 9 × 5 = ... hasil keliru menjadi 600 lewat kombinasi lain.
- **D benar** — KPK(45,60,75): 2² (dari 60), 3² (dari 45), 5² (dari 75). KPK = 4 × 9 × 25 = 900.
- **Konsep kunci:** Tiga bilangan ini masing-masing menyumbang pangkat tertinggi untuk faktor yang berbeda — kumpulkan ketiganya.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 45 = 3² × 5; 60 = 2² × 3 × 5; 75 = 3 × 5².
  2. Ambil pangkat terbesar: 2², 3², 5².
  3. KPK = 4 × 9 × 25 = 900 menit.

---

**59.** Tiga penari kembali ke posisi awal panggung tiap 16 detik, 24 detik, dan 36 detik. Mereka akan kembali bersamaan lagi setelah ... detik.

(16 = 2⁴; 24 = 2³ × 3; 36 = 2² × 3²)

- A. 48
- B. 96
- C. 144
- D. 288

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa satu faktor 3 (dikira 3¹ bukan 3²): 16 × 3 = 48.
- **B salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan), lalu lupa satu faktor 3: hasil keliru menjadi 96.
- **C benar** — KPK(16,24,36): 2⁴ (dari 16), 3² (dari 36). KPK = 16 × 9 = 144.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan): 32 × 9 = 288.
- **Konsep kunci:** Bandingkan pangkat 2 di ketiga bilangan (4, 3, 2) — pangkat terbesarnya 4, dari 16 sendiri.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 16 = 2⁴; 24 = 2³ × 3; 36 = 2² × 3².
  2. Ambil pangkat terbesar: 2⁴, 3².
  3. KPK = 16 × 9 = 144 detik.

---

**60.** Tiga lampu lalu lintas berubah hijau tiap 50 detik, 70 detik, dan 84 detik. Jika ketiganya berubah hijau bersamaan pukul 09.00.00, mereka akan bersamaan lagi setelah ... detik.

(50 = 2 × 5²; 70 = 2 × 5 × 7; 84 = 2² × 3 × 7)

- A. 2.100
- B. 1.050
- C. 4.200
- D. 700

**Kunci: A**
**Pembahasan:**
- **A benar** — KPK(50,70,84): 2² (dari 84), 3¹ (dari 84), 5² (dari 50), 7¹ (dari 70 dan 84). KPK = 4 × 3 × 25 × 7 = 2.100.
- **B salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2²): 2 × 3 × 25 × 7 = 1.050.
- **C salah** — Salah ambil pangkat 2 (dikira 2³, kelebihan): 8 × 3 × 25 × 7 = 4.200.
- **D salah** — Lupa faktor 3 sama sekali: 4 × 25 × 7 = 700.
- **Konsep kunci:** Empat bilangan prima berbeda (2, 3, 5, 7) semuanya harus dikumpulkan dengan pangkat terbesarnya masing-masing.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 50 = 2 × 5²; 70 = 2 × 5 × 7; 84 = 2² × 3 × 7.
  2. Ambil pangkat terbesar: 2², 3¹, 5², 7¹.
  3. KPK = 4 × 3 × 25 × 7 = 2.100 detik.

---

**61.** Bu Marni memiliki 168 permen dan 252 cokelat. Ia ingin membaginya rata ke sejumlah anak sebanyak-banyaknya tanpa sisa. Banyak anak maksimal adalah ... anak.

(168 = 2³ × 3 × 7; 252 = 2² × 3² × 7)

- A. 84
- B. 42
- C. 126
- D. 168

**Kunci: A**
**Pembahasan:**
- **A benar** — FPB(168,252): pangkat terkecil 2² (min 3,2), 3¹ (min 1,2), 7¹. FPB = 4 × 3 × 7 = 84.
- **B salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 3 × 7 = 42.
- **C salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 7 = 252 (dibagi ulang keliru jadi 126 lewat kesalahan lain).
- **D salah** — Menjawab salah satu bilangan (168) alih-alih FPB keduanya.
- **Konsep kunci:** "Dibagi rata sebanyak-banyaknya tanpa sisa" adalah kata kunci soal FPB.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 168 = 2³ × 3 × 7; 252 = 2² × 3² × 7.
  2. FPB = 2² × 3¹ × 7¹ = 84.
  3. Banyak anak maksimal = 84.

---

**62.** Panitia lomba membagi 180 buku dan 240 pensil ke beberapa kelompok sama banyak sebanyak-banyaknya tanpa sisa. Banyak kelompok maksimal adalah ... kelompok.

(180 = 2² × 3² × 5; 240 = 2⁴ × 3 × 5)

- A. 30
- B. 45
- C. 60
- D. 90

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2²): 2 × 3 × 5 = 30.
- **B salah** — Lupa faktor 2 sama sekali: 9 × 5 = 45.
- **C benar** — FPB(180,240): pangkat terkecil 2² (min 2,4), 3¹ (min 2,1), 5¹. FPB = 4 × 3 × 5 = 60.
- **D salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 5 = 180 (dibagi ulang keliru jadi 90 lewat kesalahan lain).
- **Konsep kunci:** Ambil pangkat TERKECIL dari faktor yang sama pada kedua bilangan untuk mendapatkan FPB.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 180 = 2² × 3² × 5; 240 = 2⁴ × 3 × 5.
  2. FPB = 2² × 3¹ × 5¹ = 60.
  3. Banyak kelompok maksimal = 60.

---

**63.** Sebuah koperasi sekolah membagi 210 apel, 315 jeruk, dan 420 mangga ke keranjang-keranjang sama banyak sebanyak-banyaknya tanpa sisa. Banyak keranjang maksimal adalah ... keranjang.

(210 = 2 × 3 × 5 × 7; 315 = 3² × 5 × 7; 420 = 2² × 3 × 5 × 7)

- A. 35
- B. 63
- C. 70
- D. 105

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa faktor 3 sama sekali: 5 × 7 = 35.
- **B salah** — Salah tetap memakai faktor 5: hasil keliru menjadi 63 lewat kombinasi berbeda.
- **C salah** — Lupa faktor 3 sama sekali, tapi tetap memakai faktor 2 yang seharusnya gugur: 2 × 5 × 7 = 70.
- **D benar** — Faktor 2 hanya ada di 210 dan 420, tidak ada di 315, sehingga gugur. Pangkat terkecil: 3¹ (min 1,2,1), 5¹, 7¹. FPB = 3 × 5 × 7 = 105.
- **Konsep kunci:** Faktor yang tidak muncul di SEMUA bilangan (di sini: faktor 2, karena tidak ada di 315) harus digugurkan dari FPB.
- **Langkah Penyelesaian:**
  1. Faktor 2 tidak ada di 315, jadi tidak dipakai.
  2. Ambil pangkat terkecil: 3¹, 5¹, 7¹.
  3. FPB = 3 × 5 × 7 = 105 keranjang.

---

**64.** Seorang pedagang membagi 264 kelereng merah dan 396 kelereng biru ke kantong-kantong sama banyak sebanyak-banyaknya tanpa sisa. Banyak kantong maksimal adalah ... kantong.

(264 = 2³ × 3 × 11; 396 = 2² × 3² × 11)

- A. 66
- B. 132
- C. 198
- D. 264

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2¹ bukan 2²): 2 × 3 × 11 = 66.
- **B benar** — FPB(264,396): pangkat terkecil 2² (min 3,2), 3¹ (min 1,2), 11¹. FPB = 4 × 3 × 11 = 132.
- **C salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 11 = 396 (dibagi ulang keliru jadi 198 lewat kesalahan lain).
- **D salah** — Menjawab salah satu bilangan (264) alih-alih FPB keduanya.
- **Konsep kunci:** Bandingkan pangkat tiap faktor prima yang sama pada kedua bilangan sebelum mengambil pangkat terkecil.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 264 = 2³ × 3 × 11; 396 = 2² × 3² × 11.
  2. FPB = 2² × 3¹ × 11¹ = 132.
  3. Banyak kantong maksimal = 132.

---

**65.** Sebuah kelompok tani membagi 336 benih jagung, 504 benih kedelai, dan 720 benih kacang ke petak-petak lahan sama banyak sebanyak-banyaknya tanpa sisa. Banyak petak maksimal adalah ... petak.

(336 = 2⁴ × 3 × 7; 504 = 2³ × 3² × 7; 720 = 2⁴ × 3² × 5)

- A. 8
- B. 12
- C. 16
- D. 24

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa faktor 3 sama sekali: 8.
- **B salah** — Salah ambil pangkat 2 (dikira 2² bukan 2³): 4 × 3 = 12.
- **C salah** — Lupa faktor 3 sama sekali, tapi salah ambil pangkat 2 lebih besar: 16.
- **D benar** — Faktor 5 dan 7 masing-masing hanya muncul di sebagian bilangan, tidak dipakai. Pangkat terkecil: 2³ (min 4,3,4), 3¹ (min 1,2,2). FPB = 8 × 3 = 24.
- **Konsep kunci:** Saat ada tiga bilangan, faktor yang tidak muncul di SEMUA tiganya (seperti 5 hanya di 720, atau 7 hanya di 336 dan 504) harus digugurkan.
- **Langkah Penyelesaian:**
  1. Faktor 7 tidak ada di 720, faktor 5 tidak ada di 336 dan 504 → keduanya gugur.
  2. Ambil pangkat terkecil: 2³, 3¹.
  3. FPB = 8 × 3 = 24 petak.

---

**66.** Panitia festival membagi 780 pita dan 936 balon ke stan-stan sama banyak sebanyak-banyaknya tanpa sisa. Banyak stan maksimal adalah ... stan.

(780 = 2² × 3 × 5 × 13; 936 = 2³ × 3² × 13)

- A. 78
- B. 156
- C. 234
- D. 312

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2²): 2 × 3 × 13 = 78.
- **B benar** — Faktor 5 hanya ada di 780, tidak dipakai. Pangkat terkecil: 2² (min 2,3), 3¹ (min 1,2), 13¹. FPB = 4 × 3 × 13 = 156.
- **C salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 13 = 468 (dibagi ulang keliru jadi 234 lewat kesalahan lain).
- **D salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2²): 8 × 3 × 13 = 312.
- **Konsep kunci:** Faktor 5 hanya muncul di satu bilangan (780), sehingga tidak dipakai dalam FPB.
- **Langkah Penyelesaian:**
  1. Faktor 5 hanya di 780, tidak dipakai.
  2. Ambil pangkat terkecil: 2², 3¹, 13¹.
  3. FPB = 4 × 3 × 13 = 156 stan.

---

**67.** Sebuah pabrik membagi 1.008 sekrup dan 1.344 mur ke dalam kotak-kotak sama banyak sebanyak-banyaknya tanpa sisa. Banyak kotak maksimal adalah ... kotak.

(1.008 = 2⁴ × 3² × 7; 1.344 = 2⁶ × 3 × 7)

- A. 84
- B. 168
- C. 336
- D. 672

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah ambil pangkat 2 (dikira 2² bukan 2⁴): 4 × 3 × 7 = 84.
- **B salah** — Salah ambil pangkat 2 (dikira 2³ bukan 2⁴): 8 × 3 × 7 = 168.
- **C benar** — FPB(1.008, 1.344): pangkat terkecil 2⁴ (min 4,6), 3¹ (min 2,1), 7¹. FPB = 16 × 3 × 7 = 336.
- **D salah** — Salah ambil pangkat 2 (dikira 2⁵, kelebihan): 32 × 3 × 7 = 672.
- **Konsep kunci:** Meski 1.344 memiliki pangkat 2 lebih besar (2⁶), FPB tetap memakai pangkat terkecil (2⁴) dari 1.008.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 1.008 = 2⁴ × 3² × 7; 1.344 = 2⁶ × 3 × 7.
  2. FPB = 2⁴ × 3¹ × 7¹ = 336.
  3. Banyak kotak maksimal = 336.

---

**68.** Sebuah gudang membagi 900 karung beras dan 1.200 karung gula ke truk-truk sama banyak sebanyak-banyaknya tanpa sisa. Banyak truk maksimal adalah ... truk.

(900 = 2² × 3² × 5²; 1.200 = 2⁴ × 3 × 5²)

- A. 300
- B. 150
- C. 450
- D. 600

**Kunci: A**
**Pembahasan:**
- **A benar** — FPB(900,1.200): pangkat terkecil 2² (min 2,4), 3¹ (min 2,1), 5² (min 2,2). FPB = 4 × 3 × 25 = 300.
- **B salah** — Lupa satu faktor 2 (dikira 2¹ bukan 2²): 2 × 3 × 25 = 150.
- **C salah** — Salah ambil pangkat 3 (dikira 3² bukan 3¹): 4 × 9 × 25 = 900 (dibagi ulang keliru jadi 450 lewat kesalahan lain).
- **D salah** — Salah ambil pangkat 2 (dikira 2³, kelebihan): 8 × 3 × 25 = 600.
- **Konsep kunci:** Bandingkan pangkat 2 (2 dan 4) serta pangkat 3 (2 dan 1) secara terpisah sebelum mengambil pangkat terkecil masing-masing.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 900 = 2² × 3² × 5²; 1.200 = 2⁴ × 3 × 5².
  2. FPB = 2² × 3¹ × 5² = 300.
  3. Banyak truk maksimal = 300.

---

**69.** Bilangan **N = 2⁸ × 3² × 5³ × 7** memiliki berapa banyak angka nol di akhir (dalam bentuk desimal)?

- A. 1
- B. 2
- C. 3
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah mengira banyak nol = pangkat 7 (yang hanya muncul sekali), padahal faktor 7 tidak berkaitan dengan nol di akhir.
- **B salah** — Salah mengira banyak nol dihitung dari selisih pangkat 2 dan 5, padahal seharusnya diambil yang TERKECIL, bukan selisihnya.
- **C benar** — Banyak nol di akhir = pangkat terkecil di antara faktor 2 (=8) dan faktor 5 (=3), yaitu 3.
- **D salah** — Salah mengira banyak nol = pangkat 2 (yang terbesar), padahal seharusnya pangkat TERKECIL antara 2 dan 5.
- **Konsep kunci:** Banyak angka nol di akhir = pangkat TERKECIL di antara faktor 2 dan faktor 5 pada faktorisasi prima (karena satu nol = satu pasang 2×5=10).
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat 2 (=8) dan pangkat 5 (=3).
  2. Ambil yang terkecil: 3.
  3. Banyak angka nol di akhir = 3.

---

**70.** Hasil kali **2⁵ × 5⁷ × 3⁴** memiliki berapa banyak angka nol di akhir?

- A. 5
- B. 7
- C. 4
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat terkecil di antara faktor 2 (=5) dan faktor 5 (=7) adalah 5.
- **B salah** — Salah mengambil pangkat TERBESAR (7) alih-alih terkecil.
- **C salah** — Salah mengira banyak nol berkaitan dengan pangkat faktor 3, padahal faktor 3 tidak memengaruhi trailing zero.
- **D salah** — Salah menjumlahkan pangkat 5 dan 7 alih-alih membandingkan mana yang lebih kecil.
- **Konsep kunci:** Trailing zero selalu dibatasi oleh faktor yang PALING SEDIKIT di antara 2 dan 5, bukan yang paling banyak.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat 2 (=5) dan pangkat 5 (=7).
  2. Ambil yang terkecil: 5.
  3. Banyak angka nol di akhir = 5.

---

**71.** Banyaknya angka nol di akhir dari **20!** (20 faktorial) adalah ....

- A. 2
- B. 4
- C. 6
- D. 20

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya menghitung ⌊20/5⌋ = 4 lalu salah membaginya lagi menjadi 2.
- **B benar** — Banyak faktor 5 dalam 20! = ⌊20/5⌋ + ⌊20/25⌋ = 4 + 0 = 4 (faktor 2 dalam 20! jauh lebih banyak, jadi trailing zero ditentukan faktor 5).
- **C salah** — Salah menjumlahkan kelipatan 5 (5,10,15,20 = 4 bilangan) dengan cara yang keliru menjadi 6.
- **D salah** — Menjawab angka 20 itu sendiri, bukan hasil hitung banyak faktor 5 dalam 20!.
- **Konsep kunci:** Banyak nol pada n! dihitung dari banyak faktor 5, karena faktor 2 selalu jauh lebih banyak daripada faktor 5 pada perkalian berurutan.
- **Langkah Penyelesaian:**
  1. Hitung ⌊20/5⌋ = 4 (kelipatan 5 dalam 1–20: 5,10,15,20).
  2. Hitung ⌊20/25⌋ = 0 (tidak ada kelipatan 25 dalam 1–20).
  3. Jumlahkan: 4 + 0 = 4.

---

**72.** Banyaknya angka nol di akhir dari **50!** (50 faktorial) adalah ....

- A. 8
- B. 9
- C. 10
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — Hanya menghitung sebagian kelipatan 5, lupa kelipatan 25 dihitung ekstra.
- **B salah** — Salah hitung banyak kelipatan 5 dalam 1–50 (dikira 9, padahal 10).
- **C salah** — Hanya menghitung ⌊50/5⌋ = 10, lupa menambahkan ⌊50/25⌋ = 2 (karena 25 dan 50 masing-masing menyumbang faktor 5 EKSTRA).
- **D benar** — ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12.
- **Konsep kunci:** Kelipatan 25 (seperti 25 dan 50) menyumbang DUA faktor 5, sehingga harus dihitung lagi secara terpisah dengan ⌊n/25⌋.
- **Langkah Penyelesaian:**
  1. Hitung ⌊50/5⌋ = 10 (kelipatan 5 dalam 1–50).
  2. Hitung ⌊50/25⌋ = 2 (25 dan 50 menyumbang faktor 5 ekstra).
  3. Jumlahkan: 10 + 2 = 12.

---

**73.** Bilangan **M = 2¹⁰ × 5⁴ × 11²** memiliki berapa banyak angka nol di akhir?

- A. 2
- B. 4
- C. 6
- D. 10

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah mengira banyak nol berkaitan dengan pangkat faktor 11, padahal faktor 11 tidak memengaruhi trailing zero.
- **B benar** — Pangkat terkecil di antara faktor 2 (=10) dan faktor 5 (=4) adalah 4.
- **C salah** — Salah menjumlahkan pangkat 5 dan pangkat 11 (4 + 2 = 6), padahal faktor 11 tidak relevan.
- **D salah** — Salah mengambil pangkat TERBESAR (10) alih-alih terkecil.
- **Konsep kunci:** Faktor prima selain 2 dan 5 (seperti 11 di sini) tidak berpengaruh sama sekali terhadap banyak angka nol di akhir.
- **Langkah Penyelesaian:**
  1. Bandingkan pangkat 2 (=10) dan pangkat 5 (=4); faktor 11 diabaikan.
  2. Ambil yang terkecil: 4.
  3. Banyak angka nol di akhir = 4.

---

**74.** Bilangan **N = 2³ × 3² × 5** memiliki berapa **faktor genap**?

- A. 6
- B. 12
- C. 18
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — Menjawab banyak faktor GANJIL (6), bukan faktor genap.
- **B salah** — Salah menghitung total faktor terlebih dahulu (dikira 12, bukan 24), lalu mengurangkannya dengan faktor ganjil secara keliru.
- **C benar** — Total faktor = (3+1)(2+1)(1+1) = 4×3×2 = 24. Faktor ganjil (abaikan faktor 2) = (2+1)(1+1) = 3×2 = 6. Faktor genap = 24 − 6 = 18.
- **D salah** — Menjawab TOTAL faktor (24), lupa mengurangkan faktor ganjilnya.
- **Konsep kunci:** Faktor genap = total faktor − faktor ganjil; faktor ganjil dihitung dengan mengabaikan faktor 2 sepenuhnya (bukan menyisakan pangkat 1).
- **Langkah Penyelesaian:**
  1. Total faktor = (3+1)(2+1)(1+1) = 24.
  2. Faktor ganjil (tanpa faktor 2) = (2+1)(1+1) = 6.
  3. Faktor genap = 24 − 6 = 18.

---

**75.** Bilangan **N = 2⁵ × 3 × 7²** memiliki berapa **faktor genap**?

- A. 6
- B. 12
- C. 24
- D. 30

**Kunci: D**
**Pembahasan:**
- **A salah** — Menjawab banyak faktor GANJIL (6), bukan faktor genap.
- **B salah** — Salah menghitung total faktor (dikira 18, bukan 36), lalu mengurangkannya secara keliru.
- **C salah** — Salah menghitung faktor ganjil (dikira 12, bukan 6), sehingga hasil pengurangan keliru.
- **D benar** — Total faktor = (5+1)(1+1)(2+1) = 6×2×3 = 36. Faktor ganjil = (1+1)(2+1) = 2×3 = 6. Faktor genap = 36 − 6 = 30.
- **Konsep kunci:** Pangkat faktor 2 yang besar (5) membuat total faktor besar, tapi faktor ganjilnya tetap dihitung tanpa faktor 2 sama sekali.
- **Langkah Penyelesaian:**
  1. Total faktor = (5+1)(1+1)(2+1) = 36.
  2. Faktor ganjil (tanpa faktor 2) = (1+1)(2+1) = 6.
  3. Faktor genap = 36 − 6 = 30.

---

**76.** Bilangan **N = 2² × 3³ × 5²** memiliki berapa **faktor genap**?

- A. 24
- B. 12
- C. 30
- D. 36

**Kunci: A**
**Pembahasan:**
- **A benar** — Total faktor = (2+1)(3+1)(2+1) = 3×4×3 = 36. Faktor ganjil = (3+1)(2+1) = 4×3 = 12. Faktor genap = 36 − 12 = 24.
- **B salah** — Menjawab banyak faktor GANJIL (12), bukan faktor genap.
- **C salah** — Salah menghitung total faktor (dikira 30, bukan 36), sehingga pengurangan keliru.
- **D salah** — Menjawab TOTAL faktor (36), lupa mengurangkan faktor ganjilnya.
- **Konsep kunci:** Bandingkan hasil total faktor dan faktor ganjil dengan hati-hati — selisih keduanya adalah faktor genap yang dicari.
- **Langkah Penyelesaian:**
  1. Total faktor = (2+1)(3+1)(2+1) = 36.
  2. Faktor ganjil (tanpa faktor 2) = (3+1)(2+1) = 12.
  3. Faktor genap = 36 − 12 = 24.

---

**77.** Bilangan **N = 2⁴ × 7³** memiliki berapa **faktor genap**?

- A. 16
- B. 4
- C. 20
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Total faktor = (4+1)(3+1) = 5×4 = 20. Faktor ganjil = (3+1) = 4 (hanya dari pangkat 7). Faktor genap = 20 − 4 = 16.
- **B salah** — Menjawab banyak faktor GANJIL (4), bukan faktor genap.
- **C salah** — Menjawab TOTAL faktor (20), lupa mengurangkan faktor ganjilnya.
- **D salah** — Salah menghitung faktor ganjil (dikira 12, bukan 4), sehingga hasil pengurangan keliru menjadi 8.
- **Konsep kunci:** Dengan hanya dua faktor prima berbeda, faktor ganjil dihitung murni dari rumus faktor si prima ganjil saja (di sini: 7³).
- **Langkah Penyelesaian:**
  1. Total faktor = (4+1)(3+1) = 20.
  2. Faktor ganjil (tanpa faktor 2) = (3+1) = 4.
  3. Faktor genap = 20 − 4 = 16.

---

**78.** Bilangan **N = 2 × 3² × 5 × 11** memiliki berapa **faktor genap**?

- A. 6
- B. 18
- C. 24
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — Menjawab setengah dari faktor ganjil yang sebenarnya, akibat salah menghitung rumus.
- **B salah** — Salah menghitung total faktor (dikira 36, bukan 24), sehingga hasil pengurangan keliru.
- **C salah** — Menjawab TOTAL faktor (24), lupa mengurangkan faktor ganjilnya.
- **D benar** — Total faktor = (1+1)(2+1)(1+1)(1+1) = 2×3×2×2 = 24. Faktor ganjil = (2+1)(1+1)(1+1) = 3×2×2 = 12. Faktor genap = 24 − 12 = 12.
- **Konsep kunci:** Karena pangkat faktor 2 hanya 1, banyak faktor genap dan ganjil di sini kebetulan SAMA (12 dan 12) — bukan berarti caranya salah.
- **Langkah Penyelesaian:**
  1. Total faktor = (1+1)(2+1)(1+1)(1+1) = 24.
  2. Faktor ganjil (tanpa faktor 2) = (2+1)(1+1)(1+1) = 12.
  3. Faktor genap = 24 − 12 = 12.

---

**79.** Dua bilangan **a** dan **b** memiliki FPB = 12 dan KPK = 180. Jika **a = 36**, nilai **b** adalah ....

- A. 72
- B. 60
- C. 90
- D. 45

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah menghitung a × b terlebih dahulu (dikira 12 × 180 × 2), sehingga hasil pembagian keliru.
- **B benar** — FPB × KPK = a × b, sehingga a × b = 12 × 180 = 2.160. Maka b = 2.160 ÷ 36 = 60.
- **C salah** — Salah menghitung hasil kali FPB dan KPK (dikira 3.240, bukan 2.160), sehingga hasil pembagian keliru.
- **D salah** — Salah membagi a × b dengan bilangan yang keliru (dikira dibagi 48, bukan 36).
- **Konsep kunci:** Untuk dua bilangan, FPB × KPK = hasil kali kedua bilangan itu sendiri — pakai ini untuk mencari bilangan yang belum diketahui.
- **Langkah Penyelesaian:**
  1. FPB × KPK = a × b → 12 × 180 = 2.160.
  2. a × b = 2.160, dengan a = 36.
  3. b = 2.160 ÷ 36 = 60.

---

**80.** FPB dua bilangan = 15, KPK = 450. Jika salah satu bilangan adalah 75, bilangan lainnya adalah ....

- A. 60
- B. 75
- C. 90
- D. 100

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah menghitung hasil kali FPB dan KPK (dikira 4.500, bukan 6.750), sehingga hasil pembagian keliru.
- **B salah** — Menjawab bilangan yang sudah diketahui (75), bukan bilangan yang dicari.
- **C benar** — FPB × KPK = 15 × 450 = 6.750. Bilangan lainnya = 6.750 ÷ 75 = 90.
- **D salah** — Salah membagi hasil kali dengan bilangan yang keliru (dikira dibagi 67,5).
- **Konsep kunci:** Sama seperti mencari FPB atau KPK, hubungan FPB × KPK = a × b juga bisa dipakai untuk mencari salah satu bilangan asalnya.
- **Langkah Penyelesaian:**
  1. FPB × KPK = 15 × 450 = 6.750.
  2. Bilangan lainnya = 6.750 ÷ 75.
  3. Hasil = 90.

---

**81.** FPB dari dua bilangan **a** dan **b** adalah 8, dan **a × b = 1.920**. Nilai KPK(a, b) adalah ....

- A. 120
- B. 160
- C. 200
- D. 240

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah membagi 1.920 dengan bilangan yang keliru (dikira dibagi 16).
- **B salah** — Salah membagi 1.920 dengan bilangan yang keliru (dikira dibagi 12).
- **C salah** — Salah membagi 1.920 dengan bilangan yang keliru (dikira dibagi 9,6).
- **D benar** — KPK = (a × b) ÷ FPB = 1.920 ÷ 8 = 240.
- **Konsep kunci:** Dari hubungan FPB × KPK = a × b, KPK bisa langsung dicari dengan membagi hasil kali dua bilangan dengan FPB-nya.
- **Langkah Penyelesaian:**
  1. FPB × KPK = a × b → KPK = (a×b) ÷ FPB.
  2. KPK = 1.920 ÷ 8.
  3. Hasil = 240.

---

**82.** KPK dari dua bilangan **a** dan **b** adalah 360, dan **a × b = 2.160**. Nilai FPB(a, b) adalah ....

- A. 3
- B. 4
- C. 6
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah membagi 2.160 dengan bilangan yang keliru (dikira dibagi 720).
- **B salah** — Salah membagi 2.160 dengan bilangan yang keliru (dikira dibagi 540).
- **C benar** — FPB = (a × b) ÷ KPK = 2.160 ÷ 360 = 6.
- **D salah** — Salah membagi 2.160 dengan bilangan yang keliru (dikira dibagi 180).
- **Konsep kunci:** Sama seperti mencari KPK, FPB juga bisa dicari langsung dengan membagi hasil kali dua bilangan dengan KPK-nya.
- **Langkah Penyelesaian:**
  1. FPB × KPK = a × b → FPB = (a×b) ÷ KPK.
  2. FPB = 2.160 ÷ 360.
  3. Hasil = 6.

---

**83.** Dua bilangan memiliki hasil kali 3.600 dan KPK 300. Nilai FPB kedua bilangan tersebut adalah ....

- A. 12
- B. 15
- C. 20
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — FPB = (a × b) ÷ KPK = 3.600 ÷ 300 = 12.
- **B salah** — Salah membagi 3.600 dengan bilangan yang keliru (dikira dibagi 240).
- **C salah** — Salah membagi 3.600 dengan bilangan yang keliru (dikira dibagi 180).
- **D salah** — Salah membagi 3.600 dengan bilangan yang keliru (dikira dibagi 150).
- **Konsep kunci:** Hubungan FPB × KPK = a × b berlaku pada semua pasangan bilangan, sehingga bisa dibolak-balik untuk mencari nilai yang belum diketahui.
- **Langkah Penyelesaian:**
  1. FPB × KPK = a × b → FPB = (a×b) ÷ KPK.
  2. FPB = 3.600 ÷ 300.
  3. Hasil = 12.

---

**84.** Faktor prima terbesar dari **2.184** adalah ....

(2.184 = 2³ × 3 × 7 × 13)

- A. 3
- B. 13
- C. 7
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — Menjawab faktor prima TERKECIL yang bukan 2 (yaitu 3), bukan yang terbesar.
- **B benar** — Faktor prima dari 2.184 adalah 2, 3, 7, 13. Yang terbesar adalah 13.
- **C salah** — Menjawab faktor prima ketiga terbesar (7), bukan yang terbesar.
- **D salah** — Menjawab hasil kali dua faktor prima (2×12? sebenarnya 24 bukan faktor prima sama sekali, hanya hasil kali beberapa faktor).
- **Konsep kunci:** Faktor prima terbesar dicari dengan menguraikan seluruh bilangan sampai tuntas, lalu membandingkan SEMUA prima yang muncul.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 2.184 = 2³ × 3 × 7 × 13.
  2. Daftar faktor prima: 2, 3, 7, 13.
  3. Faktor prima terbesar = 13.

---

**85.** Faktor prima terkecil dari **3.315** adalah ....

(3.315 = 3 × 5 × 13 × 17)

- A. 2
- B. 5
- C. 3
- D. 13

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengira faktor prima terkecil selalu 2, padahal 3.315 adalah bilangan GANJIL (tidak habis dibagi 2).
- **B salah** — Menjawab faktor prima kedua terkecil (5), bukan yang terkecil.
- **C benar** — 3.315 ganjil sehingga tidak punya faktor 2. Faktor prima terkecilnya adalah 3 (karena 3.315 ÷ 3 = 1.105, habis dibagi).
- **D salah** — Menjawab salah satu faktor prima di tengah (13), bukan yang terkecil.
- **Konsep kunci:** Jangan langsung asumsikan 2 adalah faktor prima terkecil — cek dulu apakah bilangannya genap atau ganjil.
- **Langkah Penyelesaian:**
  1. Cek apakah 3.315 genap → ternyata ganjil, faktor 2 tidak berlaku.
  2. Cek habis dibagi 3: 3.315 ÷ 3 = 1.105 (habis).
  3. Faktor prima terkecil = 3.

---

**86.** Faktor prima terbesar dari **5.005** adalah ....

(5.005 = 5 × 7 × 11 × 13)

- A. 11
- B. 7
- C. 5
- D. 13

**Kunci: D**
**Pembahasan:**
- **A salah** — Menjawab faktor prima ketiga terbesar (11), bukan yang terbesar.
- **B salah** — Menjawab faktor prima kedua terkecil (7), bukan yang terbesar.
- **C salah** — Menjawab faktor prima terkecil (5), bukan yang terbesar.
- **D benar** — Faktor prima dari 5.005 adalah 5, 7, 11, 13. Yang terbesar adalah 13.
- **Konsep kunci:** Uraikan bilangan sampai semua faktornya prima, lalu bandingkan seluruhnya untuk menentukan yang terbesar.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 5.005 = 5 × 7 × 11 × 13.
  2. Daftar faktor prima: 5, 7, 11, 13.
  3. Faktor prima terbesar = 13.

---

**87.** Faktor prima terkecil dari **6.647** adalah ....

(6.647 = 17² × 23)

- A. 23
- B. 17
- C. 7
- D. 11

**Kunci: B**
**Pembahasan:**
- **A salah** — Menjawab faktor prima terbesar (23), bukan yang terkecil.
- **B benar** — Faktor prima dari 6.647 hanya 17 dan 23. Yang terkecil adalah 17.
- **C salah** — Mengira bilangan ini punya faktor 7, padahal 6.647 tidak habis dibagi 7.
- **D salah** — Mengira bilangan ini punya faktor 11, padahal 6.647 tidak habis dibagi 11.
- **Konsep kunci:** Bilangan dengan faktor prima yang relatif besar (seperti 17 dan 23) tidak selalu punya faktor kecil seperti 7 atau 11 — cek pembagian sungguhan.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 6.647 = 17 × 17 × 23 = 17² × 23.
  2. Daftar faktor prima berbeda: 17 dan 23.
  3. Faktor prima terkecil = 17.

---

**88.** Faktor prima terbesar dari **9.699** adalah ....

(9.699 = 3 × 53 × 61)

- A. 61
- B. 53
- C. 3
- D. 71

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor prima dari 9.699 adalah 3, 53, 61. Yang terbesar adalah 61.
- **B salah** — Menjawab faktor prima kedua terbesar (53), bukan yang terbesar.
- **C salah** — Menjawab faktor prima terkecil (3), bukan yang terbesar.
- **D salah** — Mengira bilangan ini punya faktor 71, padahal 9.699 tidak habis dibagi 71.
- **Konsep kunci:** Untuk bilangan dengan faktor prima besar, faktorkan dulu faktor kecil (3), baru cari faktor besar sisanya dengan uji pembagian.
- **Langkah Penyelesaian:**
  1. Faktorisasi: 9.699 ÷ 3 = 3.233; 3.233 = 53 × 61.
  2. Daftar faktor prima: 3, 53, 61.
  3. Faktor prima terbesar = 61.

---

**89.** Bilangan dengan tepat **4 faktor** pasti berbentuk ....

- A. hanya p² (kuadrat prima)
- B. p³ (pangkat tiga prima) ATAU p × q (dua prima berbeda)
- C. hanya p × q × r (tiga prima berbeda)
- D. hanya p⁴

**Kunci: B**
**Pembahasan:**
- **A salah** — p² selalu memiliki (2+1) = 3 faktor, bukan 4.
- **B benar** — Banyak faktor 4 bisa dari (3+1) = 4 → bentuk p³, ATAU dari (1+1)(1+1) = 4 → bentuk p × q. Keduanya sah.
- **C salah** — p × q × r memiliki (1+1)(1+1)(1+1) = 8 faktor, bukan 4.
- **D salah** — p⁴ memiliki (4+1) = 5 faktor, bukan 4.
- **Konsep kunci:** Banyak faktor 4 bisa dicapai dengan LEBIH DARI SATU bentuk faktorisasi (4 = 4×1 atau 2×2) — jangan hanya memikirkan satu kemungkinan.
- **Langkah Penyelesaian:**
  1. Cari cara menulis 4 sebagai hasil kali (pangkat+1): 4 = 4×1 atau 2×2.
  2. 4×1 → satu prima berpangkat 3 (p³). 2×2 → dua prima berbeda berpangkat 1 (p×q).
  3. Jadi bentuknya p³ ATAU p×q.

---

**90.** Bilangan dengan tepat **6 faktor** pasti berbentuk ....

- A. p⁵ (pangkat lima prima) ATAU p × q² (prima kali kuadrat prima lain)
- B. hanya p² × q²
- C. hanya p × q × r
- D. hanya p⁶

**Kunci: A**
**Pembahasan:**
- **A benar** — 6 = 6×1 → p⁵, atau 6 = 2×3 → p¹ × q² = p × q². Keduanya menghasilkan tepat 6 faktor.
- **B salah** — p² × q² memiliki (2+1)(2+1) = 9 faktor, bukan 6.
- **C salah** — p × q × r memiliki (1+1)(1+1)(1+1) = 8 faktor, bukan 6.
- **D salah** — p⁶ memiliki (6+1) = 7 faktor, bukan 6.
- **Konsep kunci:** Cari SEMUA cara menulis banyak faktor sebagai hasil kali (pangkat+1) — untuk 6, ada dua cara: 6×1 dan 2×3.
- **Langkah Penyelesaian:**
  1. Cara menulis 6 sebagai hasil kali: 6×1 atau 2×3.
  2. 6×1 → p⁵. 2×3 → p¹ × q² = p × q².
  3. Jadi bentuknya p⁵ ATAU p × q².

---

**91.** Bilangan dengan tepat **9 faktor** pasti berbentuk ....

- A. p⁴ × q
- B. p × q × r
- C. p² × q² ATAU p⁸
- D. p⁹

**Kunci: C**
**Pembahasan:**
- **A salah** — p⁴ × q memiliki (4+1)(1+1) = 10 faktor, bukan 9.
- **B salah** — p × q × r memiliki (1+1)(1+1)(1+1) = 8 faktor, bukan 9.
- **C benar** — 9 = 3×3 → p² × q², atau 9 = 9×1 → p⁸. Keduanya menghasilkan tepat 9 faktor.
- **D salah** — p⁹ memiliki (9+1) = 10 faktor, bukan 9.
- **Konsep kunci:** Angka 9 bisa ditulis sebagai 9×1 atau 3×3 — masing-masing memberi bentuk bilangan yang berbeda.
- **Langkah Penyelesaian:**
  1. Cara menulis 9 sebagai hasil kali: 9×1 atau 3×3.
  2. 9×1 → p⁸. 3×3 → p² × q².
  3. Jadi bentuknya p² × q² ATAU p⁸.

---

**92.** Bilangan dengan tepat **5 faktor** pasti berbentuk ....

- A. p × q
- B. p² × q
- C. p⁵
- D. p⁴

**Kunci: D**
**Pembahasan:**
- **A salah** — p × q memiliki (1+1)(1+1) = 4 faktor, bukan 5.
- **B salah** — p² × q memiliki (2+1)(1+1) = 6 faktor, bukan 5.
- **C salah** — p⁵ memiliki (5+1) = 6 faktor, bukan 5.
- **D benar** — Karena 5 adalah bilangan prima, satu-satunya cara menulisnya sebagai hasil kali adalah 5×1, sehingga bentuknya HANYA p⁴ (pangkat+1=5 → pangkat=4).
- **Konsep kunci:** Jika banyak faktor yang diminta adalah bilangan PRIMA (seperti 5), hanya ada SATU bentuk bilangan yang mungkin, karena bilangan prima hanya bisa difaktorkan sebagai dirinya×1.
- **Langkah Penyelesaian:**
  1. 5 adalah bilangan prima, hanya bisa ditulis sebagai 5×1.
  2. 5×1 → satu prima berpangkat (5−1) = 4.
  3. Jadi bentuknya HANYA p⁴.

---

**93.** Manakah pernyataan yang **BENAR** tentang banyak faktor dari **p⁶** (p adalah bilangan prima)?

- A. p⁶ memiliki tepat 7 faktor
- B. p⁶ memiliki tepat 6 faktor
- C. p⁶ memiliki tepat 12 faktor
- D. p⁶ memiliki tepat 36 faktor

**Kunci: A**
**Pembahasan:**
- **A benar** — Banyak faktor = (6+1) = 7.
- **B salah** — Lupa menambah 1 pada pangkat: hanya menjawab pangkatnya sendiri (6).
- **C salah** — Salah mengira rumusnya 2 × pangkat (2×6=12), bukan (pangkat+1).
- **D salah** — Salah mengira rumusnya pangkat² (6²=36), bukan (pangkat+1).
- **Konsep kunci:** Untuk satu faktor prima berpangkat n, banyak faktornya SELALU (n+1) — jangan memakai rumus lain seperti 2n atau n².
- **Langkah Penyelesaian:**
  1. N = p⁶, hanya ada satu faktor prima dengan pangkat 6.
  2. Banyak faktor = (pangkat + 1) = (6+1).
  3. Hasil = 7 faktor.

---

**94.** Diketahui **A = 2⁴ × 3³ × 5** dan **B = 2² × 3⁵ × 7**. Manakah pernyataan yang **BENAR**?

- A. A habis dibagi B
- B. FPB(A, B) = 2² × 3³ = 108
- C. B habis dibagi A
- D. FPB(A, B) = 2⁴ × 3⁵

**Kunci: B**
**Pembahasan:**
- **A salah** — A tidak habis dibagi B karena B memiliki faktor 7 yang tidak dimiliki A.
- **B benar** — FPB memakai pangkat terkecil tiap faktor sama: 2² (min 4,2), 3³ (min 3,5). Faktor 5 dan 7 masing-masing hanya di satu bilangan, tidak dipakai. FPB = 4 × 27 = 108.
- **C salah** — B tidak habis dibagi A karena A memiliki faktor 5 yang tidak dimiliki B.
- **D salah** — Ini adalah pangkat TERBESAR (dipakai untuk KPK), bukan pangkat terkecil untuk FPB.
- **Konsep kunci:** Sebelum menyimpulkan "habis dibagi", cek dulu apakah SEMUA faktor prima salah satu bilangan juga ada pada bilangan lainnya.
- **Langkah Penyelesaian:**
  1. Bandingkan faktor: A punya 5 (tidak ada di B), B punya 7 (tidak ada di A) → keduanya tidak saling habis dibagi.
  2. FPB memakai pangkat terkecil: 2² (min 4,2), 3³ (min 3,5).
  3. FPB = 4 × 27 = 108.

---

**95.** Diketahui **M = 2⁵ × 3² × 7³** dan **N = 2³ × 3⁴ × 7**. Nilai KPK(M, N) adalah ....

- A. 2³ × 3² × 7
- B. 2⁵ × 3⁴ × 7¹
- C. 2⁵ × 3⁴ × 7³
- D. 2⁸ × 3⁶ × 7⁴

**Kunci: C**
**Pembahasan:**
- **A salah** — Ini adalah FPB (pangkat terkecil), bukan KPK (pangkat terbesar).
- **B salah** — Salah ambil pangkat 7 (dikira 7¹ padahal pangkat terbesarnya 7³ dari M).
- **C benar** — KPK memakai pangkat terbesar tiap faktor: 2⁵ (max 5,3), 3⁴ (max 2,4), 7³ (max 3,1).
- **D salah** — Menjumlahkan pangkat kedua bilangan (5+3=8, dst.) alih-alih mengambil yang terbesar.
- **Konsep kunci:** KPK memakai pangkat TERBESAR dari tiap faktor — jangan menjumlahkan pangkat kedua bilangan.
- **Langkah Penyelesaian:**
  1. Bandingkan tiap pangkat: 2 (5,3), 3 (2,4), 7 (3,1).
  2. Ambil pangkat terbesar: 2⁵, 3⁴, 7³.
  3. KPK = 2⁵ × 3⁴ × 7³.

---

**96.** Diketahui bilangan **P = 2² × 3ᵃ × 5** memiliki **36 faktor**. Nilai **a** adalah ....

- A. 2
- B. 3
- C. 4
- D. 5

**Kunci: D**
**Pembahasan:**
- **A salah** — Jika a=2, banyak faktor = (2+1)(2+1)(1+1) = 18, bukan 36.
- **B salah** — Jika a=3, banyak faktor = (2+1)(3+1)(1+1) = 24, bukan 36.
- **C salah** — Jika a=4, banyak faktor = (2+1)(4+1)(1+1) = 30, bukan 36.
- **D benar** — (2+1)(a+1)(1+1) = 36 → 6(a+1) = 36 → a+1 = 6 → a = 5. Cek: (2+1)(5+1)(1+1) = 3×6×2 = 36. ✓
- **Konsep kunci:** Saat pangkat lain diketahui, susun persamaan dari rumus banyak faktor lalu selesaikan untuk pangkat yang belum diketahui.
- **Langkah Penyelesaian:**
  1. Rumus banyak faktor: (2+1)(a+1)(1+1) = 36.
  2. Sederhanakan: 6(a+1) = 36 → a+1 = 6.
  3. a = 5.

---

**97.** Diketahui bilangan **Q = 2ᵃ × 3² × 7** memiliki **60 faktor**. Nilai **a** adalah ....

- A. 4
- B. 6
- C. 7
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — Jika a=4, banyak faktor = (4+1)(2+1)(1+1) = 30, bukan 60.
- **B salah** — Jika a=6, banyak faktor = (6+1)(2+1)(1+1) = 42, bukan 60.
- **C salah** — Jika a=7, banyak faktor = (7+1)(2+1)(1+1) = 48, bukan 60.
- **D benar** — (a+1)(2+1)(1+1) = 60 → 6(a+1) = 60 → a+1 = 10 → a = 9. Cek: (9+1)(2+1)(1+1) = 10×3×2 = 60. ✓
- **Konsep kunci:** Bagi total banyak faktor dengan hasil kali (pangkat+1) yang sudah diketahui untuk mendapatkan (pangkat+1) yang dicari.
- **Langkah Penyelesaian:**
  1. Rumus banyak faktor: (a+1)(2+1)(1+1) = 60.
  2. Sederhanakan: 6(a+1) = 60 → a+1 = 10.
  3. a = 9.

---

**98.** Bilangan **N = 2ᵃ × 3ᵇ** adalah kuadrat sempurna DAN memiliki tepat **15 faktor**. Jika **a** dan **b** adalah bilangan genap positif terkecil yang memenuhi, nilai **a + b** adalah ....

- A. 6
- B. 8
- C. 10
- D. 14

**Kunci: A**
**Pembahasan:**
- **A benar** — 15 = 3×5. Karena a, b genap, maka (a+1) dan (b+1) harus ganjil — cocok dengan 3 dan 5. (a+1,b+1) = (3,5) atau (5,3) → a=2,b=4 atau a=4,b=2. Keduanya beri a+b = 6.
- **B salah** — Hasil dari kombinasi (a+1,b+1) yang tidak memenuhi syarat a,b genap.
- **C salah** — Hasil dari mencoba (a+1,b+1) = (15,1) tapi salah satu pangkat dipaksa positif secara keliru, sehingga menjumlahkan pangkat yang tidak valid.
- **D salah** — Hasil dari (a+1,b+1) = (15,1) yang sebenarnya membuat salah satu pangkat = 0 (tidak valid karena b harus positif).
- **Konsep kunci:** Cari SEMUA pasangan faktor dari banyak faktor yang diminta, lalu saring hanya yang memenuhi syarat tambahan (di sini: a dan b genap dan positif).
- **Langkah Penyelesaian:**
  1. 15 = 3×5, sehingga (a+1,b+1) = (3,5) atau (5,3) — keduanya ganjil, cocok untuk a,b genap.
  2. Dari (3,5): a=2, b=4 (keduanya genap dan positif). ✓
  3. a + b = 2 + 4 = 6.

---

**99.** Bilangan **N = 2ᵃ × 5ᵇ** adalah kubik sempurna DAN memiliki tepat **16 faktor**. Jika **a** dan **b** adalah bilangan positif terkecil yang memenuhi, nilai **a + b** adalah ....

- A. 3
- B. 4
- C. 6
- D. 9

**Kunci: C**
**Pembahasan:**
- **A salah** — a=b=3 memberi (a+1)(b+1) = 4×4 = 16 ✓, tapi menjawab a saja (3), bukan a+b.
- **B salah** — Menjawab (a+1) alih-alih a+b yang sebenarnya.
- **C benar** — 16 faktor dengan a,b kelipatan 3 (syarat kubik): coba (a+1,b+1) dari faktor 16 yang keduanya ≡1 (mod 3) → (4,4) cocok, memberi a=3, b=3. a+b = 6.
- **D salah** — Mencoba (a+1,b+1) = (16,1) yang membuat salah satu pangkat = 0 (tidak valid karena b harus positif), lalu salah menjumlahkan menjadi 9.
- **Konsep kunci:** Gabungkan dua syarat sekaligus: pangkat harus kelipatan 3 (kubik sempurna) DAN hasil kali (pangkat+1) harus sama dengan banyak faktor yang diminta.
- **Langkah Penyelesaian:**
  1. Syarat kubik: a dan b kelipatan 3. Coba a=b=3 → N=2³×5³=1.000.
  2. Cek banyak faktor: (3+1)(3+1) = 16. ✓ Cocok!
  3. a + b = 3 + 3 = 6.

---

**100.** Pernyataan **PALING TEPAT** tentang manfaat lanjutan faktorisasi prima untuk soal OSN tingkat sulit adalah ....

- A. Faktorisasi prima hanya berguna untuk mencari faktorisasi bilangan kecil di bawah 100
- B. Faktorisasi prima adalah alat pangkal untuk FPB, KPK, kuadrat/kubik sempurna, banyak faktor genap-ganjil, hubungan FPB×KPK=a×b, hingga soal cerita sinkronisasi (lampu/bus/lonceng) — satu konsep, banyak aplikasi
- C. Faktorisasi prima tidak relevan dengan soal cerita KPK/FPB
- D. Setiap bilangan memiliki lebih dari satu faktorisasi prima yang berbeda

**Kunci: B**
**Pembahasan:**
- **A salah** — Faktorisasi prima justru makin penting untuk bilangan BESAR (ribuan), karena tangga manual saja tidak cukup tanpa strategi.
- **B benar** — Sepanjang Bagian II, satu konsep (faktorisasi prima) menjadi dasar untuk hampir semua tipe soal: FPB, KPK, kuadrat/kubik sempurna, banyak faktor, trailing zero, dan soal cerita sinkronisasi.
- **C salah** — Justru FPB dan KPK — dan semua soal cerita di baliknya — SELALU dihitung lewat faktorisasi prima.
- **D salah** — Bertentangan dengan Teorema Fundamental Aritmetika: setiap bilangan asli > 1 punya faktorisasi prima yang UNIK (tunggal).
- **Konsep kunci:** Faktorisasi prima bukan topik yang berdiri sendiri — ia adalah fondasi yang menopang hampir seluruh materi bilangan di OSN/KSN SD.
- **Langkah Penyelesaian:**
  1. Ingat kembali seluruh tipe soal di Bagian II: semuanya berakar dari faktorisasi prima.
  2. Ingat Teorema Fundamental Aritmetika: faktorisasi prima itu UNIK, bukan bebas dipilih.
  3. Pilih pernyataan yang mencakup keluasan aplikasi ini secara menyeluruh -> B.

---

# Bagian III — Kunci & Distribusi

## Tabel Kunci 100 Soal

| 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|------|-------|-------|-------|-------|
| 1. D | 11. D | 21. C | 31. C | 41. C |
| 2. A | 12. A | 22. A | 32. B | 42. D |
| 3. C | 13. A | 23. D | 33. D | 43. A |
| 4. B | 14. C | 24. B | 34. C | 44. B |
| 5. B | 15. B | 25. B | 35. B | 45. A |
| 6. D | 16. D | 26. C | 36. A | 46. B |
| 7. A | 17. D | 27. A | 37. B | 47. D |
| 8. C | 18. B | 28. D | 38. A | 48. C |
| 9. C | 19. A | 29. A | 39. D | 49. D |
| 10. B | 20. C | 30. D | 40. C | 50. A |

| 51-60 | 61-70 | 71-80 | 81-90 | 91-100 |
|-------|-------|-------|-------|--------|
| 51. B | 61. A | 71. B | 81. D | 91. C |
| 52. C | 62. C | 72. D | 82. C | 92. D |
| 53. C | 63. D | 73. B | 83. A | 93. A |
| 54. B | 64. B | 74. C | 84. B | 94. B |
| 55. A | 65. D | 75. D | 85. C | 95. C |
| 56. D | 66. B | 76. A | 86. D | 96. D |
| 57. B | 67. C | 77. A | 87. B | 97. D |
| 58. D | 68. A | 78. D | 88. A | 98. A |
| 59. C | 69. C | 79. B | 89. B | 99. C |
| 60. A | 70. A | 80. C | 90. A | 100. B |

## Distribusi Kunci

Penghitungan per huruf:

- **A** (25 soal): 2, 7, 12, 13, 19, 22, 27, 29, 36, 38, 43, 45, 50, 55, 60, 61, 68, 70, 76, 77, 83, 88, 90, 93, 98
- **B** (25 soal): 4, 5, 10, 15, 18, 24, 25, 32, 35, 37, 44, 46, 51, 54, 57, 64, 66, 71, 73, 79, 84, 87, 89, 94, 100
- **C** (25 soal): 3, 8, 9, 14, 20, 21, 26, 31, 34, 40, 41, 48, 52, 53, 59, 62, 67, 69, 74, 80, 82, 85, 91, 95, 99
- **D** (25 soal): 1, 6, 11, 16, 17, 23, 28, 30, 33, 39, 42, 47, 49, 56, 58, 63, 65, 72, 75, 78, 81, 86, 92, 96, 97

**Distribusi A: 25 · B: 25 · C: 25 · D: 25** — seimbang sempurna di angka ideal 25 per huruf. Kunci tersebar acak sehingga tidak ada pola "semua B" atau "semua A" yang dapat ditebak siswa.

---

## Strategi Belajar Faktorisasi Prima (Tingkat Sulit)

1. **Kuasai tangga pembagian untuk bilangan besar** — cek 2 dulu sampai tuntas, lalu 3, 5, 7, 11, 13, dst. Jangan lompat prima.
2. **Hafal rumus banyak faktor** — kalikan (pangkat+1) untuk SETIAP faktor prima, jangan lupa +1 pada satu pun pangkat.
3. **FPB pakai pangkat TERKECIL, KPK pakai pangkat TERBESAR** — dan faktor yang tidak muncul di SEMUA bilangan otomatis gugur dari FPB.
4. **Kuadrat sempurna: semua pangkat genap. Kubik sempurna: semua pangkat kelipatan 3.** Sekaligus keduanya → pangkat kelipatan 6.
5. **Mencari k terkecil agar kuadrat/kubik sempurna** — cek tiap pangkat satu per satu, hanya naikkan yang belum memenuhi syarat, jangan menambah berlebihan.
6. **Banyak faktor genap = total faktor − faktor ganjil** — faktor ganjil dihitung dengan mengabaikan faktor 2 SEPENUHNYA (anggap pangkatnya 0).
7. **Hafal hubungan FPB × KPK = a × b** (khusus 2 bilangan) — sangat berguna untuk mencari nilai yang belum diketahui.
8. **Trailing zero = pangkat terkecil antara faktor 2 dan 5.** Untuk faktorial, hitung banyak faktor 5 dengan ⌊n/5⌋ + ⌊n/25⌋ + ...
9. **Kata kunci soal cerita:** "bersamaan lagi" → KPK; "dibagi rata sebanyak-banyaknya tanpa sisa" → FPB.
10. **Latih distractor** — pelajari mengapa opsi salah dipilih (lupa +1, tertukar FPB/KPK, salah arah pembulatan). Setiap kesalahan adalah miskonsepsi yang harus dihindari saat ujian.

## Rekomendasi Materi Lanjutan

- **Sub-bab terkait:** MTK-01d (Bilangan Prima & Komposit), MTK-01f (FPB), MTK-01g (KPK), MTK-01h (Kuadrat & Akar), MTK-01k (Cerita FPB/KPK).
- **Praktik nyata:** Latih faktorisasi 20 bilangan 3–4 digit acak per hari, lalu hitung FPB/KPK-nya tanpa melihat faktorisasi yang sudah jadi.

---

*Selesai. Sub-bab 01e - Faktorisasi Prima (Sulit).*
