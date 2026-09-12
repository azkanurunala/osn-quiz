# OSN/KSN SD — MTK · Sub-Bab 01b: Urutan Operasi (Tingkat Sulit)

> **Profil**: 100 Nas = 100 soal PG
> **Fokus**: hierarki operasi (kurung, pangkat, kali/bagi, tambah/kurang)
> **Target**: SD 5-6 OSN/KSN

---

## BAGIAN I · KONSEP & STRATEGI

### 1. Urutan Operasi (KPKBTK / BODMAS / PEMDAS)

Saat kita melihat soal seperti `5 + 3 × 2`, ada **dua kemungkinan** kalau kita asal hitung:

- Kalau kita kerjakan dari kiri ke kanan saja: `(5 + 3) × 2 = 16`.
- Kalau kita kerjakan perkalian dulu: `5 + (3 × 2) = 5 + 6 = 11`.

Jawaban yang benar adalah **11**. Mengapa? Karena ada **aturan internasional** yang menentukan urutan operasi:

| Urutan | Operasi | Singkatan Indonesia | Singkatan Inggris |
|:------:|---------|---------------------|-------------------|
| 1 | **K**urung `( )` `[ ]` `{ }` | **K** | **B**rackets / **P**arentheses |
| 2 | **P**angkat & akar `xⁿ`, `√x` | **P** | **O**rders / **E**xponents |
| 3 | **K**ali `×` & **B**agi `÷` (kiri → kanan) | **KB** | **DM** / **MD** |
| 4 | **T**ambah `+` & **K**urang `−` (kiri → kanan) | **TK** | **AS** |

Akronim populer:
- **KPKBTK** (Indonesia) — Kurung, Pangkat, Kali, Bagi, Tambah, Kurang
- **BODMAS** — Brackets, Orders, Division, Multiplication, Addition, Subtraction
- **PEMDAS** — Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

Ketiganya **artinya sama persis**.

### 2. Mengapa Urutan Penting?

Bayangkan kamu di toko jajan. Kamu beli **5 permen** seharga Rp1.000 dan **3 cokelat** seharga Rp2.000 per buah. Kalimat matematikanya:

`5 × 1.000 + 3 × 2.000`

- Kalau kiri-ke-kanan tanpa hierarki: `5 × 1.000 = 5.000`, lalu `5.000 + 3 = 5.003`, lalu `5.003 × 2.000 = 10.006.000`. **Absurd!**
- Kalau hierarki KPKBTK: kerjakan dua perkalian dulu → `5.000 + 6.000 = 11.000`. **Masuk akal.**

Tanpa aturan urutan operasi, setiap orang akan dapat jawaban berbeda untuk soal yang sama. Aturan KPKBTK adalah **bahasa universal matematika** — dan soal tingkat Nasional hampir selalu mengujinya dalam bentuk **ekspresi bertingkat panjang** yang memaksa siswa menerapkan seluruh hierarki sekaligus.

### 3. Tingkatan Kurung (Hierarki Bracket)

Kalau ada kurung di dalam kurung (nested), urutannya:

```
{ [ ( ... ) ] }
```

1. **Kurung biasa `( )`** — paling dalam, dikerjakan pertama.
2. **Kurung siku `[ ]`** — di tengah.
3. **Kurung kurawal `{ }`** — paling luar.

Contoh:
`100 − {50 + [20 − (5 × 2)]}`
- Langkah 1 (kurung biasa): `5 × 2 = 10` → `100 − {50 + [20 − 10]}`
- Langkah 2 (kurung siku): `20 − 10 = 10` → `100 − {50 + 10}`
- Langkah 3 (kurung kurawal): `50 + 10 = 60` → `100 − 60 = 40`. **Jawaban: 40.**

Di tingkat sulit, kurung bisa berlapis tiga sampai empat tingkat, misalnya `{[(2+3)² − 4²] × 3}`. Prinsipnya tetap: **yang paling dalam dulu, dikerjakan satu pintu demi satu pintu ke luar**.

### 4. Aturan "Kiri ke Kanan" untuk Kali/Bagi & Tambah/Kurang

Ini sering disalahpahami: **kali tidak lebih tinggi dari bagi**, juga **tambah tidak lebih tinggi dari kurang**. Mereka **sederajat** — kerjakan dari **kiri ke kanan** sesuai urutan munculnya.

Contoh 1: `12 ÷ 4 × 3`
- Benar: `(12 ÷ 4) × 3 = 3 × 3 = 9`. (kiri dulu)
- Salah: `12 ÷ (4 × 3) = 12 ÷ 12 = 1`. ✗

Contoh 2: `36 ÷ 6 × 3`
- Benar: `36 ÷ 6 = 6`, lalu `6 × 3 = 18`.
- Salah: `36 ÷ (6 × 3) = 36 ÷ 18 = 2`. ✗

Contoh 3: `20 − 8 + 3`
- Benar: `(20 − 8) + 3 = 12 + 3 = 15`.
- Salah: `20 − (8 + 3) = 20 − 11 = 9`. ✗

### 5. Pangkat, Akar, dan Tanda Negatif

Untuk tingkat sulit, kuadrat/kubik hampir selalu **dipasangkan dengan tanda negatif**. Bedakan dengan tegas:

- `−2²` = `−(2²)` = **−4** — tanda minus **tidakikut** dikuadratkan.
- `(−2)²` = `(−2) × (−2)` = **4** — tandanya ikut, dua negatif jadi positif.
- `(−2)³` = `(−2) × (−2) × (−2)` = **−8** — pangkat ganjil tetap negatif.
- `(−1)²⁰²⁴` = **1** (pangkat genap); `(−1)²⁰²⁵` = **−1** (pangkat ganjil).

Singkatnya: **pangkat genap menghapus tanda negatif, pangkat ganjil mempertahankannya**.

Contoh lain:
`5 + 2³` = `5 + 8 = 13` (pangkat dulu).
`(5 + 2)³` = `7³ = 343` (kurung dulu).
`√(9 + 16)` = `√25 = 5` (isi akar = isi kurung).
`√9 + √16` = `3 + 4 = 7`.

### 6. Membangun Ekspresi dari Kalimat Kompleks

Soal tipe ini membalik arah: **kalimat → ekspresi**. Hafalkan penerjemahan kata-kunci:

| Kata | Operasi | Contoh penerjemahan |
|------|---------|---------------------|
| jumlah a dan b | `(a + b)` | "jumlah 5 dan 2" → `(5 + 2)` |
| selisih a dan b | `(a − b)` | "selisih 9 dan 4" → `(9 − 4)` |
| hasil kali a dan b | `(a × b)` | "hasil kali 5 dan 2" → `(5 × 2)` |
| hasil bagi a dan b | `(a ÷ b)` | "hasil bagi 12 dan 3" → `(12 ÷ 3)` |
| kuadrat dari a | `a²` | "kuadrat 3" → `3²` |
| kuadrat dari jumlah a dan b | `(a + b)²` | "kuadrat jumlah 4 dan 3" → `(4 + 3)²` |
| dua kali kuadrat a | `2 × a²` | "dua kali kuadrat 3" → `2 × 3²` |

Aturan emas: frasa **"jumlah/selisih/hasil kali dari …"** hampir selalu menuntut **kurung**, karena yang disebut belakangan harus dikerjakan lebih dulu.

### 7. Menempatkan Kurung agar Hasil Tertentu

Soal tipe ini menyajikan operasi seperti `5 + 3 × 2`, lalu bertanya: *kurung di mana agar hasilnya 16 (atau 11)?*

Strategi:
1. Hitung nilai **tanpa kurung** dulu (jadikan acuan).
2. Coba pasang kurung di setiap lokasi yang mungkin, satu per satu.
3. Hitung masing-masing, cocokkan dengan nilai sasaran.
4. Pasangan kurung boleh memberi nilai negatif (misalnya `8 + 4 × (2 − 5) = −4`) — jangan menolak jawaban negatif.

Contoh: `8 + 4 × 2 − 5` → `19`.
- `(8 + 4) × 2 − 5 = 19` ✓ (kurung di penjumlahan pertama)
- `8 + (4 × 2) − 5 = 11`
- `8 + 4 × (2 − 5) = −4`

### 8. Menemukan Letak Kesalahan Penghitungan

Di soal tipe ini, pekerjaan siswa ditampilkan langkah demi langkah dan kita harus **mencari di langkah mana kekeliruannya**. Periksa empat hal:

1. **Urutan KPKBTK** di setiap baris — apakah ada bilangan yang dihitung sebelum waktunya (misalnya penjumlahan mendahului perkalian)?
2. **Kurung** — apakah kurung pada baris itu dikerjakan paling dalam, atau malah dari luar?
3. **Tanda negatif** — apakah `−(−a)` dibalik menjadi `+a`? Apakah `−2²` dibaca `(−2)²`?
4. **Hitung ulang tiap baris** — periksa apakah penjumlahannya sendiri benar, karena kesalahan bisa juga murni hitung dasar.

Langkah pertama yang salah tidak harus di baris terakhir: sekali satu langkah keliru, baris berikutnya otomatis ikut salah meski hitungannya "rapi".

### 9. Kesalahan Umum yang Dipakai sebagai Distractor

| No | Kesalahan | Contoh |
|:--:|-----------|--------|
| 1 | Mengabaikan hierarki, hitung kiri-ke-kanan | `5 + 3 × 2 = 16` (seharusnya 11) |
| 2 | Kurung bersarang dikerjakan dari luar | `100 − {50 + [20 − (5×2)]} ≠ 100 − 50` |
| 3 | Mengeser kurung sendiri | `(30−8)×3 − 6` untuk `30 − (8×3−6)` |
| 4 | `−2²` dibaca `(−2)²` | `−2² + 9 = 13` (seharusnya `−4 + 9 = 5`) |
| 5 | Kali didahulukan dari bagi (padahal sederajat) | `36 ÷ 6 × 3 = 2` (seharusnya 18) |
| 6 | Pangkat disebar ke tiap bilangan dalam kurung | `(2+3)² = 4 + 9` (seharusnya 25) |
| 7 | Lupa `−(−a) = +a` | `9 − (−4) = 5` (seharusnya 13) |
| 8 | Kalimat "hasil kali/jumlah" diterjemahkan tanpa kurung | `2 × 8 + 12` untuk "dua kali jumlah 8 dan 12" |

### 10. Strategi Mengerjakan Soal Tingkat Nasional (C4–C5)

1. **Lingkari setiap pasangan kurung** dan tulis nomor kedalaman (1 = paling dalam).
2. **Salin ulang baris** setiap selesai satu langkah — jangan meloncat dua-tiga langkah sekaligus.
3. **Tanda negatif**: kerjakan kuadrat/kubiknya dulu dalam kurung kecil, baru urus tanda di luarnya.
4. **Soal cerita**: terjemahkan seluruh kalimat jadi satu ekspresi **sebelum** menghitung; jangan menebak-nebak.
5. **Soal "menempatkan kurung"**: evaluasi setiap opsi satu per satu sampai ketemu nilai sasaran.
6. **Soal "letak kesalahan"**: hitung ulang dari langkah pertama; jangan pernah menilai hasil akhir tanpa menelusuri setiap baris.
7. **Cek balik dengan estimasi** (pembulatan) setelah selesai.

### 11. Tabel Cepat Pangkat untuk SD

| n | n² | n³ |
|:-:|:--:|:--:|
| 2 | 4  | 8  |
| 3 | 9  | 27 |
| 4 | 16 | 64 |
| 5 | 25 | 125 |
| 6 | 36 | 216 |
| 10| 100| 1000|

Tambah juga: `4⁴ = 256`, `2⁴ = 16`, `2⁵ = 32`, `(−1)ᵏ = 1` jika k genap, `−1` jika k ganjil. Hafalkan ini — soal pangkat di OSN Nasional hampir selalu memakai bilangan kecil.

---

## BAGIAN II · 100 SOAL PG

## NAS · Soal 1-100 (Tingkat Nasional, C4-C5)

*Ekspresi bertingkat panjang, kurung bersarang dalam, kuadrat/kubik dengan tanda negatif, membangun ekspresi dari kalimat kompleks, menempatkan kurung agar hasil tertentu, dan menganalisis letak kesalahan hitung. Setiap soal membutuhkan 3–5 langkah berpikir.*

---

**1.** Hitunglah: `120 ÷ [30 − (8 × 3 − 6)] = ....`
- A. 10
- B. 20
- C. 2
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung biasa dulu: `8 × 3 = 24`, `24 − 6 = 18`. Kurung siku: `30 − 18 = 12`. Akhir: `120 ÷ 12 = 10`.
- **B salah** — Mengabaikan `−6` di dalam kurung: `30 − 8×3 = 6`, lalu `120 ÷ 6 = 20`.
- **C salah** — Mengeser kurung sendiri: `(30 − 8) × 3 − 6 = 60`, lalu `120 ÷ 60 = 2`.
- **D salah** — Berhenti di hasil kurung `30 − 18 = 12` dan lupa membaginya dengan 120.
- **Konsep kunci:** Pada kurung bersarang, kerjakan kurung paling dalam dulu, sampai ke paling luar, baru operasi terakhir.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `8 × 3 = 24`, lalu `24 − 6 = 18`
  2. Kurung siku: `30 − 18 = 12`
  3. Akhir: `120 ÷ 12 = 10`

---

**2.** Hitunglah: `18 + 24 ÷ [4 × (7 − 4)] = ....`
- A. 26
- B. 20
- C. 14
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — Menghitung `24 ÷ (7 − 4) = 8` (melupakan ×4 di siku): `18 + 8 = 26`.
- **B benar** — Kurung biasa: `7 − 4 = 3`. Siku: `4 × 3 = 12`. Bagi: `24 ÷ 12 = 2`. Akhir: `18 + 2 = 20`.
- **C salah** — Mengubah `+` menjadi `−` setelah pembagian: `18 − 2 = 16`? Bukan; `18 − 4 = 14` (salah angka 2 jadi 4).
- **D salah** — Mengambil angka pembilang `24` sebagai jawaban tanpa menyelesaikan perhitungan.
- **Konsep kunci:** Kurung dalam dulu, lalu kali/bagi baru tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `7 − 4 = 3`
  2. Siku: `4 × 3 = 12`
  3. Bagi: `24 ÷ 12 = 2`
  4. Akhir: `18 + 2 = 20`

---

**3.** Hitunglah: `(36 ÷ 4 + 5) × (12 − 3²) = ....`
- A. 27
- B. 21
- C. 42
- D. 84

**Kunci: C**
**Pembahasan:**
- **A salah** — Melupakan `+5`: `36 ÷ 4 = 9`, lalu `9 × (12 − 9) = 27`.
- **B salah** — Umpan dekat: hasil yang benar dibagi 2 (42 ÷ 2 = 21); tebakan tanpa alur hitung yang konsisten.
- **C benar** — Kurung kiri: `36 ÷ 4 + 5 = 9 + 5 = 14`. Kurung kanan: `3² = 9`, `12 − 9 = 3`. Kali: `14 × 3 = 42`.
- **D salah** — Salah pangkat `3² = 6`: kurung kanan `12 − 6 = 6`, lalu `14 × 6 = 84`.
- **Konsep kunci:** Di dalam kurung tetap berlaku urutan pangkat dulu, baru bagi/tambah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `36 ÷ 4 + 5 = 9 + 5 = 14`
  2. Kurung kanan: `3² = 9`, `12 − 9 = 3`
  3. Kali: `14 × 3 = 42`

---

**4.** Hitunglah: `1/2 × [48 ÷ (2 + 4)] − 3 = ....`
- A. 5
- B. 3
- C. 7
- D. 1

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan `1/2 ×`: `48 ÷ 6 = 8`, lalu `8 − 3 = 5`.
- **B salah** — Menghitung `1/2 × 8 = 4` dengan benar, tapi salah mengurangi: `4 − 1 = 3` (mengira pengurangnya 1).
- **C salah** — Mengabaikan `1/2 ×` dan mengira pengurangnya 1: `8 − 1 = 7`.
- **D benar** — `2 + 4 = 6`, `48 ÷ 6 = 8`, `1/2 × 8 = 4`, `4 − 3 = 1`.
- **Konsep kunci:** Urutan operasi tetap berlaku meski ada pecahan: kurung lalu kali/bagi lalu tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kurung: `2 + 4 = 6`
  2. Bagi: `48 ÷ 6 = 8`
  3. Kali: `1/2 × 8 = 4`
  4. Akhir: `4 − 3 = 1`

---

**5.** Hitunglah: `3 × 4² − 2³ ÷ 4 = ....`
- A. 44
- B. 46
- C. 50
- D. 22

**Kunci: B**
**Pembahasan:**
- **A salah** — `2³ ÷ 4` dianggap `8 − 4 = 4`: `48 − 4 = 44`.
- **B benar** — Pangkat dulu: `4² = 16`, `2³ = 8`. Kali & bagi: `3 × 16 = 48`, `8 ÷ 4 = 2`. Kurang: `48 − 2 = 46`.
- **C salah** — `48 + 2 = 50` (tambah bukan kurang).
- **D salah** — Salah `4² = 8`: `3 × 8 = 24`, lalu `24 − 2 = 22`.
- **Konsep kunci:** Pangkat dikerjakan sebelum kali/bagi; kali/bagi sebelum tambah/kurang.
- **Langkah Penyelesaian:**
  1. Pangkat: `4² = 16`, `2³ = 8`
  2. Kali & bagi: `3 × 16 = 48`, `8 ÷ 4 = 2`
  3. Kurang: `48 − 2 = 46`

---

**6.** Hitunglah: `100 − [40 − (3 × 5)² ÷ 9] = ....`
- A. 85
- B. 75
- C. 35
- D. 15

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung biasa: `3 × 5 = 15`, `15² = 225`, `225 ÷ 9 = 25`. Siku: `40 − 25 = 15`. Akhir: `100 − 15 = 85`.
- **B salah** — Lupa `40 −` di dalam siku: `(3 × 5)² ÷ 9 = 25`, lalu `100 − 25 = 75`.
- **C salah** — Salah kuadrat `15² = 45` (dikali 3): `45 ÷ 9 = 5`, `40 − 5 = 35`, lalu lupa mengurangkan dari 100.
- **D salah** — Menghitung siku dengan benar (`40 − 25 = 15`) tapi lupa mengurangkan dari 100.
- **Konsep kunci:** Kurung biasa di dalam siku dikerjakan pertama; pangkat di dalamnya sebelum bagi.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `3 × 5 = 15`, pangkat `15² = 225`
  2. Bagi: `225 ÷ 9 = 25`
  3. Siku: `40 − 25 = 15`
  4. Akhir: `100 − 15 = 85`

---

**7.** Hitunglah: `(4 + 6) × 3 − 8 ÷ (4 − 2) = ....`
- A. 22
- B. 34
- C. 30
- D. 26

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `÷ 2`: `30 − 8 = 22`.
- **B salah** — `30 + 4 = 34` (tambah bukan kurang).
- **C salah** — Hanya `(4 + 6) × 3 = 30`, melupakan seluruh bagian `− 8 ÷ (4 − 2)`.
- **D benar** — Kurung kiri: `4 + 6 = 10`, kali: `10 × 3 = 30`. Kurung kanan: `4 − 2 = 2`, bagi: `8 ÷ 2 = 4`. Kurang: `30 − 4 = 26`.
- **Konsep kunci:** Dua kurung dikerjakan dulu; kali & bagi sama-sama mendahului tambah/kurang.
- **Langkah Penyelesaian:**
  1. Dua kurung: `4 + 6 = 10`, `4 − 2 = 2`
  2. Kali & bagi: `10 × 3 = 30`, `8 ÷ 2 = 4`
  3. Kurang: `30 − 4 = 26`

---

**8.** Hitunglah: `5 × (2 + 3) + 4 × (10 − 2²) = ....`
- A. 65
- B. 45
- C. 49
- D. 59

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `−2²` pada kurung kedua: `4 × 10 = 40`, lalu `25 + 40 = 65`.
- **B salah** — Salah kuadrat `2² = 5`: `10 − 5 = 5`, `4 × 5 = 20`, lalu `25 + 20 = 45`.
- **C benar** — Kurung pertama: `2 + 3 = 5`, kali: `5 × 5 = 25`. Kurung kedua: `2² = 4`, `10 − 4 = 6`, kali: `4 × 6 = 24`. Jumlah: `25 + 24 = 49`.
- **D salah** — Salah hitung kurung kedua (dianggap 34): `25 + 34 = 59`.
- **Konsep kunci:** Pangkat di dalam kurung dikerjakan sebelum pengurangan di dalam kurung itu.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `2 + 3 = 5`, lalu `5 × 5 = 25`
  2. Kurung kedua: `2² = 4`, `10 − 4 = 6`, lalu `4 × 6 = 24`
  3. Jumlah: `25 + 24 = 49`

---

**9.** Pada operasi `8 + 4 × 2 − 5`, tanda kurung ditempatkan di lokasi tertentu agar hasilnya 19. Penempatan yang benar adalah ....
- A. `(8 + 4) × 2 − 5`
- B. `8 + (4 × 2) − 5`
- C. `8 + 4 × (2 − 5)`
- D. `(8 + 4) × (2 − 5)`

**Kunci: A**
**Pembahasan:**
- **A benar** — `(8 + 4) × 2 − 5 = 12 × 2 − 5 = 24 − 5 = 19`. Cocok dengan sasaran.
- **B salah** — `8 + (4 × 2) − 5 = 8 + 8 − 5 = 11`. Nilainya 11, bukan 19.
- **C salah** — `8 + 4 × (2 − 5) = 8 + 4 × (−3) = 8 − 12 = −4`. Nilainya negatif.
- **D salah** — `(8 + 4) × (2 − 5) = 12 × (−3) = −36`.
- **Konsep kunci:** Cara menemukan lokasi kurung: pasang di setiap lokasi yang mungkin, evaluasi, lalu cocokkan dengan nilai sasaran.
- **Langkah Penyelesaian:**
  1. Uji A: `(8 + 4) × 2 − 5 = 24 − 5 = 19`
  2. Uji sisa opsi: B = 11, C = −4, D = −36
  3. Hanya A yang menghasilkan 19, jadi jawaban A

---

**10.** Jika tanda kurung pada `12 ÷ 4 + 2` ditempatkan menjadi `12 ÷ (4 + 2)`, maka hasilnya adalah ....
- A. 5
- B. 3
- C. 2
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — Ini hasil kurung pada pembagian dulu: `(12 ÷ 4) + 2 = 3 + 2 = 5`.
- **B salah** — `12 ÷ 4 = 3` lalu lupa menambahkan 2.
- **C benar** — Kurung dulu: `4 + 2 = 6`, lalu `12 ÷ 6 = 2`.
- **D salah** — Umpan dari `12 − 4 = 8` (membaca tanda operasi keliru).
- **Konsep kunci:** Kurung mengubah nilai seluruh ekspresi; di sini `4 + 2` dijumlahkan lebih dulu, barulah 12 dibagi.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 2 = 6`
  2. Bagi: `12 ÷ 6 = 2`

---

**11.** Pada operasi `6 + 2 × 3 − 1`, kurung ditempatkan agar hasilnya 10. Penempatan yang benar adalah ....
- A. `(6 + 2) × 3 − 1`
- B. `6 + (2 × 3) − 1`
- C. `6 × (2 + 3) − 1`
- D. `6 + 2 × (3 − 1)`

**Kunci: D**
**Pembahasan:**
- **A salah** — `(6 + 2) × 3 − 1 = 8 × 3 − 1 = 23`.
- **B salah** — `6 + (2 × 3) − 1 = 6 + 6 − 1 = 11`.
- **C salah** — `6 × (2 + 3) − 1 = 6 × 5 − 1 = 29`.
- **D benar** — `6 + 2 × (3 − 1) = 6 + 2 × 2 = 6 + 4 = 10`. Cocok dengan sasaran.
- **Konsep kunci:** Evaluasi keempat opsi; opsi yang nilainya 10 adalah lokasi kurung yang diminta.
- **Langkah Penyelesaian:**
  1. Uji A = 23, B = 11, C = 29
  2. Uji D: `6 + 2 × (3 − 1) = 6 + 2 × 2 = 10`
  3. Jawaban D

---

**12.** Pada operasi `5 + 3 × 4 − 2`, kurung ditempatkan agar hasilnya 30. Penempatan yang benar adalah ....
- A. `5 + 3 × (4 − 2)`
- B. `(5 + 3) × 4 − 2`
- C. `(5 + 3 × 4) − 2`
- D. `(5 + 3) × (4 − 2)`

**Kunci: B**
**Pembahasan:**
- **A salah** — `5 + 3 × (4 − 2) = 5 + 3 × 2 = 5 + 6 = 11`.
- **B benar** — `(5 + 3) × 4 − 2 = 8 × 4 − 2 = 32 − 2 = 30`. Cocok dengan sasaran.
- **C salah** — `(5 + 3 × 4) − 2 = (5 + 12) − 2 = 15`.
- **D salah** — `(5 + 3) × (4 − 2) = 8 × 2 = 16`.
- **Konsep kunci:** Saat kurung dipasang, isi kurung dikerjakan lebih dulu dan mengubah hasil seluruh ekspresi.
- **Langkah Penyelesaian:**
  1. Uji A = 11, C = 15, D = 16
  2. Uji B: `(5 + 3) × 4 − 2 = 32 − 2 = 30`
  3. Jawaban B

---

**13.** Pada operasi `10 + 20 ÷ 5 − 3`, kurung ditempatkan agar hasilnya 3. Penempatan yang benar adalah ....
- A. `10 + 20 ÷ (5 − 3)`
- B. `10 + (20 ÷ 5) − 3`
- C. `(10 + 20) ÷ (5 − 3)`
- D. `(10 + 20) ÷ 5 − 3`

**Kunci: D**
**Pembahasan:**
- **A salah** — `10 + 20 ÷ (5 − 3) = 10 + 20 ÷ 2 = 10 + 10 = 20`.
- **B salah** — `10 + (20 ÷ 5) − 3 = 10 + 4 − 3 = 11`.
- **C salah** — `(10 + 20) ÷ (5 − 3) = 30 ÷ 2 = 15`.
- **D benar** — `(10 + 20) ÷ 5 − 3 = 30 ÷ 5 − 3 = 6 − 3 = 3`. Cocok dengan sasaran.
- **Konsep kunci:** Kurung dulu, lalu bagi tetap mendahului kurang.
- **Langkah Penyelesaian:**
  1. Uji A = 20, B = 11, C = 15
  2. Uji D: `(10 + 20) ÷ 5 − 3 = 6 − 3 = 3`
  3. Jawaban D

---

**14.** Angka pada operasi `9 − 3 + 2` dikelompokkan menjadi `9 − (3 + 2)`. Hasilnya adalah ....
- A. 8
- B. 10
- C. 4
- D. 6

**Kunci: C**
**Pembahasan:**
- **A salah** — Tanpa kurung (kiri ke kanan): `(9 − 3) + 2 = 8`. Ini nilai tanpa pengelompokan.
- **B salah** — Salah tanda: `9 + 3 − 2 = 10`.
- **C benar** — Kurung dulu: `3 + 2 = 5`, lalu `9 − 5 = 4`.
- **D salah** — `9 − 3 = 6` sambil melupakan `+ 2` yang ada di dalam kurung.
- **Konsep kunci:** Tanda kurung membuat `3 + 2` dijumlahkan dahulu, sehingga 9 dikurangi satu bilangan utuh (5).
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3 + 2 = 5`
  2. Kurang: `9 − 5 = 4`

---

**15.** Hitunglah: `(15 − 5) × (8 ÷ 2) = ....`
- A. 40
- B. 10
- C. 4
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung kiri: `15 − 5 = 10`. Kurung kanan: `8 ÷ 2 = 4`. Kali: `10 × 4 = 40`.
- **B salah** — Hanya hasil kurung kiri `15 − 5 = 10` yang diambil, lupa mengalikan dengan kurung kanan.
- **C salah** — Hanya hasil kurung kanan `8 ÷ 2 = 4` yang diambil, lupa kurung kiri.
- **D salah** — Salah bagi `8 ÷ 2 = 3`: `10 × 3 = 30`.
- **Konsep kunci:** Dua kurung dikerjakan dulu, hasil keduanya dikalikan.
- **Langkah Penyelesaian:**
  1. Dua kurung: `15 − 5 = 10`, `8 ÷ 2 = 4`
  2. Kali: `10 × 4 = 40`

---

**16.** Dimas mengerjakan `24 ÷ 3 + 5 × 2` dengan langkah:
Langkah 1: `24 ÷ 3 = 8`
Langkah 2: `8 + 5 = 13`
Langkah 3: `13 × 2 = 26`
Analisis yang benar tentang pekerjaan Dimas adalah ....
- A. Ia salah di Langkah 1
- B. Ia salah di Langkah 2
- C. Ia salah di Langkah 3
- D. Langkah-langkahnya benar semua

**Kunci: B**
**Pembahasan:**
- **A salah** — Langkah 1 benar: `24 ÷ 3 = 8`.
- **B benar** — Setelah `24 ÷ 3 = 8`, seharusnya `5 × 2 = 10` dikerjakan lebih dulu, lalu `8 + 10 = 18`. Ia menjumlah `8 + 5 = 13` sebelum mengalikan 5 × 2.
- **C salah** — Langkah 3 (`13 × 2 = 26`) benar secara hitung, tetapi kekeliruan sudah terjadi sejak Langkah 2.
- **D salah** — Urutan kali/bagi mendahului tambah/kurang tidak diterapkan; jawaban yang benar adalah 18.
- **Konsep kunci:** Tambah/kurang dikerjakan setelah semua kali/bagi selesai, tidak boleh menyelip di tengah.
- **Langkah Penyelesaian:**
  1. Kali & bagi dulu: `24 ÷ 3 = 8`, `5 × 2 = 10`
  2. Tambah: `8 + 10 = 18`
  3. Kesalahan Dimas ada di Langkah 2, jawaban B

---

**17.** Sinta menghitung `(30 − 5)² ÷ 25` dengan langkah:
Langkah 1: `30 − 5 = 25`
Langkah 2: `25 ÷ 25 = 1`
Langkah 3: `1² = 1`
Analisis yang benar tentang pekerjaan Sinta adalah ....
- A. Salah di Langkah 3
- B. Jawaban Sinta benar
- C. Salah di Langkah 1
- D. Salah di Langkah 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Langkah 3 tidak perlu dinilai tersendiri; kekeliruan dimulai dari Langkah 2.
- **B salah** — Hasil yang benar adalah `25² = 625`, lalu `625 ÷ 25 = 25`, bukan 1.
- **C salah** — Langkah 1 benar: `30 − 5 = 25`.
- **D benar** — Setelah kurung `30 − 5 = 25`, seharusnya diangkatkan lebih dulu: `25² = 625`, baru dibagi 25.
- **Konsep kunci:** Pangkat mendahului bagi, meskipun keduanya berada setelah kurung selesai.
- **Langkah Penyelesaian:**
  1. Kurung: `30 − 5 = 25`
  2. Pangkat dulu: `25² = 625`
  3. Bagi: `625 ÷ 25 = 25`
  4. Sinta salah di Langkah 2, jawaban D

---

**18.** Bagas mengerjakan `36 ÷ 6 × 3` dan memperoleh 2 dengan cara `6 × 3 = 18`, lalu `36 ÷ 18 = 2`. Pernyataan yang tepat adalah ....
- A. Ia salah mengelompokkan: bagi dan kali sederajat, harus dari kiri ke kanan, jadi hasilnya 18
- B. Ia salah membagi `36 ÷ 6`
- C. Perkalian harus selalu didahulukan dari pembagian, jadi caranya benar
- D. Hasil 2 sudah benar

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi dan kali sederajat; `36 ÷ 6 = 6` dulu, lalu `6 × 3 = 18`. Mengelompokkan `6 × 3` dulu melanggar aturan kiri ke kanan.
- **B salah** — `36 ÷ 6 = 6` justru benar; kekeliruannya adalah pengelompokan `6 × 3`.
- **C salah** — Kali tidak lebih tinggi dari bagi; keduanya sama tinggi.
- **D salah** — Jawaban yang benar adalah 18, bukan 2.
- **Konsep kunci:** Operasi sederajat (× dan ÷) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri ke kanan: `36 ÷ 6 = 6`
  2. Lalu: `6 × 3 = 18`
  3. Hasil 18, jadi jawaban A

---

**19.** Ratih menyalin soal `8 + 4 × 3` menjadi `(8 + 4) × 3 = 36`. Pernyataan yang tepat adalah ....
- A. Benar, karena kurung menandakan `8 + 4` dikerjakan lebih dulu
- B. Salah, tetapi `8 + 4` memang harus dikerjakan lebih dulu dari perkalian
- C. Salah, karena `4 × 3` harus dikerjakan dulu sehingga hasilnya `8 + 12 = 20`
- D. Salah, karena hasilnya seharusnya 60

**Kunci: C**
**Pembahasan:**
- **A salah** — Menambahkan kurung **mengubah makna soal**. Tanpa kurung, `8 + 4 × 3` tidak otomatis mengerjakan `8 + 4`.
- **B salah** — Penjumlahan tidak mendahului perkalian; urutannya justru kebalikannya.
- **C benar** — `4 × 3 = 12` dikerjakan lebih dulu, lalu `8 + 12 = 20`.
- **D salah** — Nilai yang benar 20, bukan 60.
- **Konsep kunci:** Kurung yang tidak ada di soal tidak boleh "ditambahkan sendiri" — ia mengubah struktur operasi.
- **Langkah Penyelesaian:**
  1. Kali dulu: `4 × 3 = 12`
  2. Tambah: `8 + 12 = 20`
  3. Ratih keliru karena memasang kurung yang mengubah hasil, jawaban C

---

**20.** Dewi mengerjakan `100 − 25 ÷ 5` dengan langkah:
Langkah 1: `100 − 25 = 75`
Langkah 2: `75 ÷ 5 = 15`
Kesimpulan yang benar adalah ....
- A. Dewi benar, hasil 15 benar
- B. Dewi salah di Langkah 1; seharusnya `25 ÷ 5 = 5` dulu, lalu `100 − 5 = 95`
- C. Dewi hanya salah di Langkah 2
- D. Urutan Dewi sudah benar

**Kunci: B**
**Pembahasan:**
- **A salah** — Hasil 15 salah; jawaban yang benar 95.
- **B benar** — Bagi mendahului kurang: `25 ÷ 5 = 5`, lalu `100 − 5 = 95`. Mengurang 100 − 25 lebih dulu melanggar hierarki.
- **C salah** — Langkah 1 tidak mungkin dibetulkan tanpa mengubah Langkah 2; kekeliruan justru berawal di Langkah 1.
- **D salah** — Urutan harusnya bagi dulu.
- **Konsep kunci:** Bagi mendahului kurang bahkan ketika angka pembaginya tampak "kecil".
- **Langkah Penyelesaian:**
  1. Bagi dulu: `25 ÷ 5 = 5`
  2. Kurang: `100 − 5 = 95`
  3. Kesalahan di Langkah 1, jawaban B

---

**21.** Hitunglah: `(−3)² − (−2)³ = ....`
- A. 17
- B. 1
- C. −17
- D. 25

**Kunci: A**
**Pembahasan:**
- **A benar** — `(−3)² = 9`, `(−2)³ = −8`, lalu `9 − (−8) = 9 + 8 = 17`.
- **B salah** — `9 − 8 = 1`: lupa bahwa mengurangkan bilangan negatif berarti menambah.
- **C salah** — `(−3)²` dianggap `−9`: `−9 − 8 = −17`.
- **D salah** — `(−2)³` dianggap `16` (tertukar sifat pangkat): `9 + 16 = 25`.
- **Konsep kunci:** Pangkat genap membuat bilangan negatif jadi positif; `a − (−b) = a + b`.
- **Langkah Penyelesaian:**
  1. Pangkat: `(−3)² = 9`, `(−2)³ = −8`
  2. Kurang: `9 − (−8) = 9 + 8`
  3. Hasil = 17

---

**22.** Hitunglah: `−2² + (−3)² × 2 = ....`
- A. 22
- B. 2
- C. 10
- D. 14

**Kunci: D**
**Pembahasan:**
- **A salah** — `−2²` dibaca `(−2)² = 4`: `4 + 18 = 22`. Ini kesalahan klasik tanda vs pangkat.
- **B salah** — Umpan dekat: tebakan hasil campuran tanpa alur konsisten.
- **C salah** — Mengabaikan kuadrat pada `(−3)²`: `(−2)² = 4`, lalu `4 + 3 × 2 = 10`.
- **D benar** — `−2² = −4` (tanda minus tidak ikut kuadrat), `(−3)² = 9`, `9 × 2 = 18`, lalu `−4 + 18 = 14`.
- **Konsep kunci:** Bedakan `−2²` (minus di luar) dan `(−2)²` (minus di dalam kuadrat).
- **Langkah Penyelesaian:**
  1. `−2² = −(2²) = −4`
  2. `(−3)² × 2 = 9 × 2 = 18`
  3. Jumlah: `−4 + 18 = 14`

---

**23.** Hitunglah: `(12 ÷ 4)³ − 2⁴ = ....`
- A. 43
- B. 5
- C. 11
- D. 19

**Kunci: C**
**Pembahasan:**
- **A salah** — `27 + 16 = 43` (tambah bukan kurang).
- **B salah** — Umpan dekat: tebakan di sekitar selisih dua bilangan kecil.
- **C benar** — Kurung: `12 ÷ 4 = 3`, pangkat: `3³ = 27`. Pangkat: `2⁴ = 16`. Kurang: `27 − 16 = 11`.
- **D salah** — `2⁴` dihitung setengah (8): `27 − 8 = 19`.
- **Konsep kunci:** Kurung dulu, lalu semua pangkat sebelum pengurangan.
- **Langkah Penyelesaian:**
  1. Kurung: `12 ÷ 4 = 3`
  2. Pangkat: `3³ = 27`, `2⁴ = 16`
  3. Kurang: `27 − 16 = 11`

---

**24.** Hitunglah: `(−5)² × (−2) ÷ 10 = ....`
- A. 5
- B. −5
- C. 10
- D. −10

**Kunci: B**
**Pembahasan:**
- **A salah** — `−50 ÷ 10` ditulis `5`: tanda negatif hilang di langkah terakhir.
- **B benar** — `(−5)² = 25`, `25 × (−2) = −50`, `−50 ÷ 10 = −5`.
- **C salah** — Umpan dekat: angka 10 (pembagi) ditebak sebagai hasil.
- **D salah** — Salah memilih pembagi: `−50 ÷ 5 = −10`.
- **Konsep kunci:** Perkalian dua tanda (sama/beda) menentukan tanda hasil; pembagian membawa tanda yang sama seperti perkalian.
- **Langkah Penyelesaian:**
  1. Pangkat: `(−5)² = 25`
  2. Kali: `25 × (−2) = −50`
  3. Bagi: `−50 ÷ 10 = −5`

---

**25.** Hitunglah: `5 − 3² × (−2) ÷ 3 = ....`
- A. 11
- B. −1
- C. 23
- D. 1

**Kunci: A**
**Pembahasan:**
- **A benar** — `3² = 9`, `9 × (−2) = −18`, `−18 ÷ 3 = −6`, lalu `5 − (−6) = 11`.
- **B salah** — `5 − 6 = −1`: menganggap `−(−6)` tetap `−6`.
- **C salah** — Membaca `−2` sebagai `+2` dan melupakan `÷3`: `5 + 9 × 2 = 23`.
- **D salah** — Umpan dekat hasil campuran; label tebakan.
- **Konsep kunci:** Rantai kali/bagi di sisi kanan dikerjakan penuh sebelum pengurangan; `a − (−b) = a + b`.
- **Langkah Penyelesaian:**
  1. Pangkat: `3² = 9`
  2. Kali & bagi: `9 × (−2) = −18`, `−18 ÷ 3 = −6`
  3. Kurang: `5 − (−6) = 11`

---

**26.** Hitunglah: `2 × (−3)² − (−4) = ....`
- A. 14
- B. 50
- C. 22
- D. 34

**Kunci: C**
**Pembahasan:**
- **A salah** — `18 − 4 = 14`: lupa bahwa `−(−4) = +4`.
- **B salah** — Umpan lebar: tebakan tanpa alur konsisten.
- **C benar** — `(−3)² = 9`, `2 × 9 = 18`, lalu `18 − (−4) = 22`.
- **D salah** — Mengkuadratkan pengurang: `18 + (−4)² = 18 + 16 = 34`.
- **Konsep kunci:** Mengurangkan bilangan negatif = menambah; jangan memangkatkan pengurang tanpa kurung.
- **Langkah Penyelesaian:**
  1. Pangkat: `(−3)² = 9`
  2. Kali: `2 × 9 = 18`
  3. Kurang: `18 − (−4) = 22`

---

**27.** Hitunglah: `(−2)³ + 4² ÷ (−2) = ....`
- A. 16
- B. 0
- C. −8
- D. −16

**Kunci: D**
**Pembahasan:**
- **A salah** — `(−2)³` dianggap `8` (lupa ganjil → negatif): `8 + 8 = 16`.
- **B salah** — `4² ÷ (−2)` dianggap `8` bukan `−8`: `−8 + 8 = 0`.
- **C salah** — Hanya `(−2)³ = −8`; suku `4² ÷ (−2)` tidak dihitung.
- **D benar** — `(−2)³ = −8`, `4² = 16`, `16 ÷ (−2) = −8`, lalu `−8 + (−8) = −16`.
- **Konsep kunci:** Pangkat ganjil mempertahankan tanda negatif; ada dua suku yang masing-masing −8.
- **Langkah Penyelesaian:**
  1. Pangkat: `(−2)³ = −8`, `4² = 16`
  2. Bagi: `16 ÷ (−2) = −8`
  3. Jumlah: `−8 + (−8) = −16`

---

**28.** Hitunglah: `3 × (−2)² − (−5) × 2 + (−1)³ = ....`
- A. −3
- B. 21
- C. −21
- D. 3

**Kunci: B**
**Pembahasan:**
- **A salah** — `(−2)²` dianggap `−4`: `3 × (−4) = −12`, lalu `−12 − (−10) + (−1) = −3`.
- **B benar** — `(−2)² = 4`, `3 × 4 = 12`; `(−5) × 2 = −10`; `(−1)³ = −1`. Maka `12 − (−10) + (−1) = 12 + 10 − 1 = 21`.
- **C salah** — `(−2)²` dianggap `−4` dan `(−1)³` dianggap `1`: `−12 − 10 + 1 = −21`.
- **D salah** — `(−5) × 2` dianggap `−10` lalu semua dikurang: `12 − 10 + 1 = 3` (tanda `−(−10)` dan `(−1)³` salah).
- **Konsep kunci:** Kuadrat genap membuat positif; tiga suku dengan tanda berbeda harus dijumlahkan satu per satu dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kali semua suku: `3 × 4 = 12`, `−5 × 2 = −10`, `(−1)³ = −1`
  2. Susun: `12 − (−10) + (−1)`
  3. Selanjutnya: `12 + 10 − 1 = 21`

---

**29.** Hitunglah: `(−6) ÷ 2 × (−3) − 4 = ....`
- A. 5
- B. −13
- C. 13
- D. 1

**Kunci: A**
**Pembahasan:**
- **A benar** — Kiri ke kanan: `−6 ÷ 2 = −3`, `−3 × (−3) = 9`, lalu `9 − 4 = 5`.
- **B salah** — Salah tanda perkalian: `−3 × 3 = −9`, lalu `−9 − 4 = −13`.
- **C salah** — `9 + 4 = 13` (kurang diubah menjadi tambah).
- **D salah** — Mengelompokkan `2 × (−3)` dulu: `−6 ÷ (−6) = 1`; ini melanggar aturan kiri ke kanan.
- **Konsep kunci:** Bagi dan kali sederajat — kerjakan kiri ke kanan, jangan membuat kurung sendiri.
- **Langkah Penyelesaian:**
  1. Kiri ke kanan: `−6 ÷ 2 = −3`
  2. Kali: `−3 × (−3) = 9`
  3. Kurang: `9 − 4 = 5`

---

**30.** Hitunglah: `7 − (−2)² × 3 + (−3) = ....`
- A. 8
- B. 4
- C. −8
- D. 16

**Kunci: C**
**Pembahasan:**
- **A salah** — Umpan dekat: tebakan hasil campuran.
- **B salah** — Berhenti di `(−2)² = 4` dan menjadikannya jawaban.
- **C benar** — `(−2)² = 4`, `4 × 3 = 12`, `7 − 12 = −5`, lalu `−5 + (−3) = −8`.
- **D salah** — `(−2)²` dianggap `−4`: `7 − (−4 × 3) + (−3) = 7 + 12 − 3 = 16`.
- **Konsep kunci:** Kuadrat genap membuat suku positif, lalu pengurangan menghasilkan bilangan negatif yang kemudian ditambah lagi.
- **Langkah Penyelesaian:**
  1. Pangkat & kali: `(−2)² = 4`, `4 × 3 = 12`
  2. Kurang: `7 − 12 = −5`
  3. Tambah: `−5 + (−3) = −8`

---

**31.** Kalimat "dua kali kuadrat dari 3 ditambah hasil kali 5 dan 2" ditulis menjadi ....
- A. `(2 × 3)² + 5 × 2`
- B. `2 × 3² + 5 × 2`
- C. `2 × (3² + 5) × 2`
- D. `2 × 3² + (5 + 2)`

**Kunci: B**
**Pembahasan:**
- **A salah** — "dua kali kuadrat" diterjemahkan sebagai kuadrat dari `(2 × 3)`; seharusnya 2 dikali `3²`, bukan `(2×3)²`.
- **B benar** — "dua kali kuadrat 3" → `2 × 3²`; "hasil kali 5 dan 2" → `5 × 2`. Jadi `2 × 3² + 5 × 2`.
- **C salah** — "hasil kali 5 dan 2" menempel sebagai pengali luar; urutan baca kacau.
- **D salah** — "hasil kali" diterjemahkan sebagai "jumlah": `(5 + 2)`.
- **Konsep kunci:** "dua kali kuadrat a" = `2 × a²`; "hasil kali a dan b" = `a × b`, keduanya perlu kurung bila menjadi satu kesatuan.
- **Langkah Penyelesaian:**
  1. "dua kali kuadrat 3" → `2 × 3²`
  2. "hasil kali 5 dan 2" → `5 × 2`
  3. "ditambah" → gabung: `2 × 3² + 5 × 2`

---

**32.** Kalimat "selisih kuadrat 9 dan kuadrat 4, lalu dibagi 5" ditulis menjadi ....
- A. `9² − (4 ÷ 5)`
- B. `(9 − 4)² ÷ 5`
- C. `9² − 4² − 5`
- D. `(9² − 4²) ÷ 5`

**Kunci: D**
**Pembahasan:**
- **A salah** — "dibagi 5" diterapkan hanya ke 4; struktur kalimat salah dibaca.
- **B salah** — "selisih kuadrat" dibaca "kuadrat dari selisih" `(9 − 4)²`.
- **C salah** — "dibagi 5" diubah menjadi "dikurang 5".
- **D benar** — "selisih kuadrat 9 dan kuadrat 4" → `9² − 4²`, "lalu dibagi 5" → `(9² − 4²) ÷ 5`.
- **Konsep kunci:** Frasa "selisih kuadrat a dan kuadrat b" menuntut kurung: `(a² − b²)`, baru operasi berikutnya.
- **Langkah Penyelesaian:**
  1. "selisih kuadrat 9 dan kuadrat 4" → `9² − 4²`
  2. "lalu dibagi 5" → `(9² − 4²) ÷ 5`
  3. Nilainya: `(81 − 16) ÷ 5 = 65 ÷ 5 = 13`

---

**33.** Kalimat "tiga dikali jumlah tujuh dan dua, dikurangi kuadrat lima" ditulis menjadi ....
- A. `3 × (7 + 2) − 5²`
- B. `3 × 7 + 2 − 5²`
- C. `3 × (7 + 2 − 5²)`
- D. `3 + 7 × 2 − 5²`

**Kunci: A**
**Pembahasan:**
- **A benar** — "jumlah 7 dan 2" dikurung: `3 × (7 + 2)`, "dikurangi kuadrat lima" → `− 5²`. Nilai: `27 − 25 = 2`.
- **B salah** — Kurung hilang: `3 × 7 + 2 − 25 = −2`.
- **C salah** — `5²` ikut masuk ke dalam kurung: `3 × (7 + 2 − 25) = −48`.
- **D salah** — "tiga dikali" diterapkan ke 7 saja: `3 + 14 − 25 = −8`.
- **Konsep kunci:** "jumlah … dan …" setelah kata "kali" wajib dikurung.
- **Langkah Penyelesaian:**
  1. "jumlah 7 dan 2" → `(7 + 2)`
  2. "tiga kali jumlah" → `3 × (7 + 2)`
  3. "dikurangi kuadrat lima" → `3 × (7 + 2) − 5²`
  4. Nilai: `3 × 9 − 25 = 27 − 25 = 2`

---

**34.** Kalimat "tiga puluh dibagi lima, dikurangi dua kali kuadrat tiga" ditulis menjadi ....
- A. `(30 ÷ 5 − 2) × 3²`
- B. `30 ÷ (5 − 2) × 3²`
- C. `(30 ÷ 5) − 2 × 3²`
- D. `30 ÷ 5 − (2 × 3)²`

**Kunci: C**
**Pembahasan:**
- **A salah** — Hasil pengurangan `30 ÷ 5 − 2` dikalikan `3²`; tanda koma bacaan dipindah.
- **B salah** — "lima, dikurangi dua" digabung dalam kurung pembagi.
- **C benar** — "tiga puluh dibagi lima" → `30 ÷ 5`; "dikurangi dua kali kuadrat tiga" → `− 2 × 3²`. Jadi `(30 ÷ 5) − 2 × 3² = 6 − 18 = −12`.
- **D salah** — "dua kali kuadrat tiga" dibaca "kuadrat hasil kali 2 dan 3" `(2 × 3)²`.
- **Konsep kunci:** "dua kali kuadrat a" = `2 × a²`, bukan `(2a)²`.
- **Langkah Penyelesaian:**
  1. "tiga puluh dibagi lima" → `30 ÷ 5 = 6`
  2. "dua kali kuadrat tiga" → `2 × 3² = 18`
  3. Kurang: `6 − 18 = −12`

---

**35.** Kalimat "kuadrat dari jumlah 4 dan 3, dikali 3" ditulis menjadi ....
- A. `4² + 3² × 3`
- B. `(4 + 3)² × 3`
- C. `4² × 3 + 3²`
- D. `(4² + 3²) × 3`

**Kunci: B**
**Pembahasan:**
- **A salah** — "kuadrat dari jumlah" diterjemahkan sebagai "4 dikuadratkan + 3 dikuadratkan": `4² + 3²`, lalu dikali 3.
- **B benar** — "jumlah 4 dan 3" dikurung lalu dikuadratkan: `(4 + 3)²`, lalu "dikali 3".
- **C salah** — Mencampur urutan: `4² × 3` ditambah `3²`.
- **D salah** — Kuadrat diterapkan ke masing-masing bilangan, padahal harus ke jumlahnya dulu.
- **Konsep kunci:** "kuadrat dari jumlah a dan b" = `(a + b)²`, bukan `a² + b²`.
- **Langkah Penyelesaian:**
  1. "jumlah 4 dan 3" → `(4 + 3)`
  2. "kuadrat dari jumlah" → `(4 + 3)²`
  3. "dikali 3" → `(4 + 3)² × 3 = 49 × 3 = 147`

---

**36.** Kalimat "jumlah dari dua per tiga dan satu per empat, dikali dua belas" ditulis menjadi ....
- A. `2/3 + 1/4 × 12`
- B. `(2/3 + 1/4) + 12`
- C. `2/3 × (1/4 + 12)`
- D. `(2/3 + 1/4) × 12`

**Kunci: D**
**Pembahasan:**
- **A salah** — "dikali 12" diterapkan hanya ke `1/4` (kali mendahului tambah bila tanpa kurung).
- **B salah** — "dikali 12" dibaca "ditambah 12".
- **C salah** — Kurung salah tempat: `2/3` dikali seluruh kurung.
- **D benar** — "jumlah dari 2/3 dan 1/4" dikurung dulu: `(2/3 + 1/4)`, lalu "dikali 12" → `(2/3 + 1/4) × 12 = (8/12 + 3/12) × 12 = 11`.
- **Konsep kunci:** "jumlah dari a dan b, dikali c" = `(a + b) × c` — kurung wajib agar penjumlahan mendahului perkalian.
- **Langkah Penyelesaian:**
  1. "jumlah 2/3 dan 1/4" → `2/3 + 1/4 = 11/12`
  2. "dikali 12" → `11/12 × 12`
  3. Hasil = 11

---

**37.** Diberikan kalimat terbuka `24 = 4 × (… + 2)`. Bilangan yang tepat mengisi titik-titik adalah ....
- A. 4
- B. 6
- C. 22
- D. 2

**Kunci: A**
**Pembahasan:**
- **A benar** — `4 × (4 + 2) = 4 × 6 = 24`. Cocok.
- **B salah** — `24 ÷ 4 = 6` lalu lupa mengurangkan 2: jawaban 6 tanpa pengurangan.
- **C salah** — `24 − 2 = 22`: membagi dengan 4 dilompati.
- **D salah** — `4 × (2 + 2) = 16`, tidak cocok dengan 24.
- **Konsep kunci:** Selesaikan kurung dulu sebagai bilangan utuh: `(… + 2) = 24 ÷ 4 = 6`, maka titik-titik = 4.
- **Langkah Penyelesaian:**
  1. Bagi kedua ruas dengan 4: `4 × (… + 2) = 24` → `… + 2 = 6`
  2. Kurangi 2: `… = 4`
  3. Cek: `4 × (4 + 2) = 24` ✓

---

**38.** Kalimat "delapan ditambah hasil bagi dua belas dan tiga" ditulis menjadi ....
- A. `8 ÷ (12 + 3)`
- B. `(8 + 12) ÷ 3`
- C. `8 + 12 ÷ 3`
- D. `(8 + 12 ÷ 3)²`

**Kunci: C**
**Pembahasan:**
- **A salah** — "delapan ditambah" dibaca "delapan dibagi jumlah dua belas dan tiga".
- **B salah** — "ditambah hasil bagi" dibaca "jumlah delapan dan dua belas lalu dibagi tiga".
- **C benar** — "hasil bagi 12 dan 3" = `12 ÷ 3`, "delapan ditambah" → `8 + 12 ÷ 3 = 8 + 4 = 12`.
- **D salah** — Hasilnya dikuadratkan, tidak ada kata "kuadrat" di kalimat.
- **Konsep kunci:** "a ditambah hasil bagi b dan c" = `a + b ÷ c` (bagi lebih dulu, jadi tanpa kurung sudah benar).
- **Langkah Penyelesaian:**
  1. "hasil bagi 12 dan 3" → `12 ÷ 3 = 4`
  2. "delapan ditambah" → `8 + 4 = 12`

---

**39.** Kalimat "dua kali jumlah dari 8 dan 12, lalu dibagi 5" ditulis menjadi ....
- A. `2 × 8 + 12 ÷ 5`
- B. `(2 × 8 + 12) ÷ 5`
- C. `2 × (8 + 12 ÷ 5)`
- D. `2 × (8 + 12) ÷ 5`

**Kunci: D**
**Pembahasan:**
- **A salah** — "dua kali" diterapkan hanya ke 8, bukan ke jumlah.
- **B salah** — Kurung kelompokkan `2 × 8 + 12` lalu dibagi 5, struktur baca salah.
- **C salah** — "dibagi 5" menempel ke 12 saja.
- **D benar** — "jumlah 8 dan 12" dikurung: `(8 + 12)`, "dua kali" → `2 × (8 + 12)`, "dibagi 5" → `2 × (8 + 12) ÷ 5 = 40 ÷ 5 = 8`.
- **Konsep kunci:** "dua kali jumlah a dan b" = `2 × (a + b)` — kurung paling penting.
- **Langkah Penyelesaian:**
  1. "jumlah 8 dan 12" → `(8 + 12)`
  2. "dua kali jumlah" → `2 × (8 + 12)`
  3. "dibagi 5" → `2 × (8 + 12) ÷ 5 = 40 ÷ 5 = 8`

---

**40.** Kalimat "kuadrat enam dikali jumlah dua dan tiga, lalu dibagi lima" ditulis menjadi ....
- A. `6² × 2 + 3 ÷ 5`
- B. `(6² × (2 + 3)) ÷ 5`
- C. `6² × (2 + 3 ÷ 5)`
- D. `(6 × (2 + 3)) ÷ 5`

**Kunci: B**
**Pembahasan:**
- **A salah** — "jumlah 2 dan 3" tidak dikurung, kali hanya mengenai 2.
- **B benar** — "kuadrat enam" → `6²`, "dikali jumlah 2 dan 3" → `6² × (2 + 3)`, "dibagi lima" → `(6² × (2 + 3)) ÷ 5 = 36 × 5 ÷ 5 = 36`.
- **C salah** — "dibagi 5" menempel ke 3 saja: `6² × (2 + 3 ÷ 5)`.
- **D salah** — Kuadrat diterapkan ke 6, bukan ke hasil kali; curiga "kuadrat enam" hilang.
- **Konsep kunci:** Urutan: kuadrat → kurung jumlah → kali → bagi, sesuai kata-kata kalimat.
- **Langkah Penyelesaian:**
  1. "kuadrat enam" → `6² = 36`
  2. "jumlah 2 dan 3" → `(2 + 3) = 5`
  3. "dikali, lalu dibagi lima" → `36 × 5 ÷ 5 = 36`

---

**41.** Hitunglah: `{48 − [4 × (5 + 3)]} ÷ 8 = ....`
- A. 2
- B. 4
- C. 8
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung biasa: `5 + 3 = 8`, kali: `4 × 8 = 32`, siku: `48 − 32 = 16`, bagi: `16 ÷ 8 = 2`.
- **B salah** — `16 ÷ 4 = 4`: salah pembagi (8 diganti 4).
- **C salah** — Menjawab hasil kurung terdalam `5 + 3 = 8`, lupa melanjutkan.
- **D salah** — Hasil kurawal `48 − 32 = 16`, lupa dibagi 8.
- **Konsep kunci:** Kurung tiga lapis dikerjakan dari dalam ke luar, satu operasi per lapis.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `5 + 3 = 8`
  2. Kali: `4 × 8 = 32`
  3. Siku: `48 − 32 = 16`
  4. Bagi: `16 ÷ 8 = 2`

---

**42.** Hitunglah: `8 + 2 × (3 + 4 × 5 − 4) − 6 ÷ 3 = ....`
- A. 40
- B. 44
- C. 50
- D. 38

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `÷ 3`: `8 + 38 − 6 = 40`.
- **B benar** — Dalam kurung: `4 × 5 = 20`, `3 + 20 − 4 = 19`. Lalu `2 × 19 = 38`, `6 ÷ 3 = 2`, akhir `8 + 38 − 2 = 44`.
- **C salah** — Umpan dekat: campuran hasil antara `8 + 38` dengan tanda `− 6 ÷ 3` yang salah baca.
- **D salah** — Hanya menghitung `2 × 19 = 38` lalu menjadikannya jawaban (lupa `8 +` dan `−2`).
- **Konsep kunci:** Di dalam kurung tetap KPKBTK; setelah kurung, kali/bagi mendahului tambah/kurang.
- **Langkah Penyelesaian:**
  1. Dalam kurung: `4 × 5 = 20`, `3 + 20 − 4 = 19`
  2. Kali & bagi luar: `2 × 19 = 38`, `6 ÷ 3 = 2`
  3. Kiri ke kanan: `8 + 38 − 2 = 44`

---

**43.** Hitunglah: `5 × [9 − (6 + 3) ÷ 3] + 7 = ....`
- A. 23
- B. 43
- C. 37
- D. 7

**Kunci: C**
**Pembahasan:**
- **A salah** — `5 × (9 − 3) − 7 = 23` (tanda akhir kurang).
- **B salah** — Umpan dekat: hasil `30 + 13` dengan pengelompokan yang salah.
- **C benar** — Kurung biasa: `6 + 3 = 9`, bagi: `9 ÷ 3 = 3`, siku: `9 − 3 = 6`, kali: `5 × 6 = 30`, tambah: `30 + 7 = 37`.
- **D salah** — Mengabaikan `÷ 3` sehingga siku menjadi `9 − 9 = 0`: `5 × 0 + 7 = 7`.
- **Konsep kunci:** Bagi di dalam siku dikerjakan setelah kurung biasa selesai.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `6 + 3 = 9`
  2. Bagi: `9 ÷ 3 = 3`
  3. Siku: `9 − 3 = 6`, lalu `5 × 6 = 30`
  4. Tambah: `30 + 7 = 37`

---

**44.** Hitunglah: `3 + [2 × (5² − 4²)] − 1 = ....`
- A. 22
- B. 26
- C. 18
- D. 20

**Kunci: D**
**Pembahasan:**
- **A salah** — `3 + 18 + 1 = 22` (tanda akhir kurang).
- **B salah** — Umpan lebar: campuran hasil antara tanpa alur konsisten.
- **C salah** — `2 × (25 − 16) = 18` saja, lupa `3 +` dan `−1`.
- **D benar** — `5² = 25`, `4² = 16`, `25 − 16 = 9`, `2 × 9 = 18`, lalu `3 + 18 − 1 = 20`.
- **Konsep kunci:** Pangkat di dalam kurung dulu, barulah operasi di luar.
- **Langkah Penyelesaian:**
  1. Pangkat: `5² = 25`, `4² = 16`
  2. Kurung: `25 − 16 = 9`, kali: `2 × 9 = 18`
  3. Akhir: `3 + 18 − 1 = 20`

---

**45.** Hitunglah: `(1/3 × 9 + 5) × (3² − 2²) = ....`
- A. 40
- B. 24
- C. 45
- D. 32

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung kiri: `1/3 × 9 = 3`, `3 + 5 = 8`. Kurung kanan: `3² = 9`, `2² = 4`, `9 − 4 = 5`. Kali: `8 × 5 = 40`.
- **B salah** — `2²` dianggap 6: `9 − 6 = 3`, lalu `8 × 3 = 24`.
- **C salah** — Mengganti 8 dengan 9 (dari pecahan): `5 × 9 = 45`.
- **D salah** — Faktor kedua hanya `2² = 4`: `8 × 4 = 32`.
- **Konsep kunci:** Pecahan di dalam kurung tetap mengikuti urutan operasi; satu kurung bernilai lebih dulu, baru dikalikan.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `1/3 × 9 = 3`, `3 + 5 = 8`
  2. Kurung kanan: `3² = 9`, `2² = 4`, `9 − 4 = 5`
  3. Kali: `8 × 5 = 40`

---

**46.** Hitunglah: `12 × (2³ − 5) ÷ (16 ÷ 4) = ....`
- A. 36
- B. 9
- C. 18
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — `12 × 3 = 36`, lupa membagi dengan `(16 ÷ 4)`.
- **B benar** — `2³ = 8`, `8 − 5 = 3`, `12 × 3 = 36`; `16 ÷ 4 = 4`; `36 ÷ 4 = 9`.
- **C salah** — `36 ÷ 2 = 18`: `16 ÷ 4` dihitung 2.
- **D salah** — Menjawab hasil kurung kanan `16 ÷ 4 = 4` saja.
- **Konsep kunci:** Kedua kurung dikerjakan dulu, kemudian kali dan bagi berurutan.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `2³ = 8`, `8 − 5 = 3`
  2. Kali: `12 × 3 = 36`
  3. Kurung kanan: `16 ÷ 4 = 4`
  4. Bagi: `36 ÷ 4 = 9`

---

**47.** Hitunglah: `8 − {[4 + (6 ÷ 2)] × 2} + 5 = ....`
- A. 17
- B. −11
- C. 3
- D. −1

**Kunci: D**
**Pembahasan:**
- **A salah** — `8 + 14 − 5 = 17` (tanda kurawal diubah jadi tambah).
- **B salah** — `8 − 14 − 5 = −11` (tanda `+5` diubah jadi kurang).
- **C salah** — Umpan dekat hasil campuran.
- **D benar** — Kurung biasa: `6 ÷ 2 = 3`, siku: `4 + 3 = 7`, kali: `7 × 2 = 14`, kurangi: `8 − 14 = −6`, tambah: `−6 + 5 = −1`.
- **Konsep kunci:** Kurung tiga lapis dari dalam; pengurangan di depan kurawal memengaruhi seluruh isinya.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `6 ÷ 2 = 3`
  2. Siku: `4 + 3 = 7`, kali: `7 × 2 = 14`
  3. Kurang: `8 − 14 = −6`
  4. Tambah: `−6 + 5 = −1`

---

**48.** Hitunglah: `(2³ + 4²) ÷ (5 − 3²) = ....`
- A. 24
- B. 6
- C. −6
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — `2³ + 4² = 24` saja, lupa membagi.
- **B salah** — `5 − 3²` dihitung `9 − 5 = 4` (terbalik): `24 ÷ 4 = 6`.
- **C benar** — `2³ = 8`, `4² = 16`, jumlah `24`; `3² = 9`, `5 − 9 = −4`; `24 ÷ (−4) = −6`.
- **D salah** — Menjawab `2³ = 8` saja.
- **Konsep kunci:** Pangkat dikerjakan di dalam kurung dan bisa menghasilkan pengurangan negatif.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `2³ = 8`, `4² = 16`, jumlah `24`
  2. Kurung kanan: `3² = 9`, `5 − 9 = −4`
  3. Bagi: `24 ÷ (−4) = −6`

---

**49.** Hitunglah: `10 − 3 × (4 − 2²) + 2³ ÷ 4 = ....`
- A. 12
- B. 9
- C. 0
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — `2² = 4`, `4 − 4 = 0`, `3 × 0 = 0`; `2³ = 8`, `8 ÷ 4 = 2`; `10 + 2 = 12`.
- **B salah** — `10 − 3 + 2 = 9`: mengabaikan kurung yang bernilai 0.
- **C salah** — Berhenti di hasil kali nol `3 × (4 − 4) = 0`.
- **D salah** — Salah menempatkan `2³`: `10 + 8 − 2 = 16`.
- **Konsep kunci:** Kurung yang menghasilkan nol tetap harus dihitung; operasi lain tetap berlanjut.
- **Langkah Penyelesaian:**
  1. `2² = 4`, kurung `4 − 4 = 0`, kali `3 × 0 = 0`
  2. `2³ = 8`, bagi `8 ÷ 4 = 2`
  3. `10 − 0 + 2 = 12`

---

**50.** Hitunglah: `2 × [3 × (4 + 1) − 5²] + 1 = ....`
- A. 19
- B. −19
- C. 31
- D. −21

**Kunci: B**
**Pembahasan:**
- **A salah** — Hasil benar tanpa tanda negatif (19 dibaca sebagai 19 positif).
- **B benar** — `4 + 1 = 5`, `3 × 5 = 15`, `5² = 25`, siku `15 − 25 = −10`, kali `2 × (−10) = −20`, tambah `−20 + 1 = −19`.
- **C salah** — `2 × 15 + 1 = 31`: lupa mengurangkan `5²`.
- **D salah** — `−20 − 1 = −21`: tanda `+1` dibaca kurang.
- **Konsep kunci:** Di dalam siku, pengurangan bisa menghasilkan negatif; hasil itu dibawa ke operasi luar.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `4 + 1 = 5`, kali `3 × 5 = 15`
  2. Pangkat: `5² = 25`, siku `15 − 25 = −10`
  3. Kali: `2 × (−10) = −20`
  4. Tambah: `−20 + 1 = −19`

---

**51.** Hitunglah: `5 × (3 + 2)² − 4 × 10 + 12 = ....`
- A. 85
- B. 153
- C. 97
- D. 125

**Kunci: C**
**Pembahasan:**
- **A salah** — `125 − 40 = 85`: suku `+12` dilupakan.
- **B salah** — `125 + 40 − 12 = 153`: tanda minus dan plus dipertukarkan.
- **C benar** — `(3 + 2)² = 25`, `5 × 25 = 125`, `4 × 10 = 40`, `125 − 40 + 12 = 97`.
- **D salah** — berhenti di `5 × (3 + 2)² = 125`, mengabaikan seluruh ekspresi setelahnya.
- **Konsep kunci:** Kurung dan pangkat dulu, lalu kali, baru tambah/kurang; setiap suku dihitung sebelum digabung.
- **Langkah Penyelesaian:**
  1. `(3 + 2)² = 5² = 25`
  2. `5 × 25 = 125`
  3. `4 × 10 = 40`
  4. `125 − 40 + 12 = 97`

---

**52.** "Tiga kali kuadrat jumlah 2 dan 1, dikurangi dua kali kuadrat 3." Nilai dari kalimat matematika tersebut adalah ....
- A. 63
- B. 27
- C. 3
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — `[3 × (2 + 1)]² − 2 × 9 = 81 − 18 = 63`: pangkat diterapkan ke seluruh `3 × (2 + 1)`, padahal hanya isi kurung yang dikuadratkan.
- **B salah** — hanya suku pertama `3 × (2 + 1)² = 27` yang dihitung.
- **C salah** — lupa mengkuadratkan: `3 × 3 − 2 × 3 = 9 − 6 = 3`.
- **D benar** — `3 × 9 − 2 × 9 = 27 − 18 = 9`.
- **Konsep kunci:** Frasa "kuadrat jumlah" menuntut kurung yang dikuadratkan; "dua kali kuadrat 3" berarti `2 × 3²`.
- **Langkah Penyelesaian:**
  1. Terjemahkan: `3 × (2 + 1)² − 2 × 3²`
  2. `(2 + 1)² = 3² = 9`, maka `3 × 9 = 27`
  3. `2 × 3² = 2 × 9 = 18`
  4. `27 − 18 = 9`

---

**53.** Budi menulis `7 + 3 × 4² = 100`. Di manakah letak kesalahan Budi?
- A. Ia menjumlahkan `7 + 3` lebih dulu, lalu mengkuadratkan hasilnya.
- B. Ia mengalikan `3 × 4²` terlebih dahulu sebelum menjumlahkan.
- C. Ia menghitung `4² = 8`.
- D. Perhitungan Budi sepenuhnya benar.

**Kunci: A**
**Pembahasan:**
- **A benar** — Budi menghitung `(7 + 3)² = 100`; seharusnya `3 × 4² = 48`, lalu `7 + 48 = 55`.
- **B salah** — Mengalikan `3 × 16` sebelum menjumlahkan justru adalah langkah yang benar.
- **C salah** — `4² = 16`, bukan 8.
- **D salah** — 100 bukan hasil yang benar; hitungan yang benar adalah 55.
- **Konsep kunci:** Untuk mencari letak kesalahan, bandingkan urutan pengerjaan siswa dengan aturan KPKBTK, bukan hanya menebak nilainya.
- **Langkah Penyelesaian:**
  1. Cari rute Budi: 100 = `(7 + 3)²`
  2. Bandingkan: pangkat harus mendahului penjumlahan
  3. Hitung benar: `7 + 3 × 16 = 55`

---

**54.** "Kuadrat jumlah 6 dan 4 dikurangi dua kali hasil kali 6 dan 4." Nilainya adalah ....
- A. 100
- B. 52
- C. 48
- D. 76

**Kunci: B**
**Pembahasan:**
- **A salah** — hanya `(6 + 4)² = 100` dihitung, suku kedua diabaikan.
- **B benar** — `(6 + 4)² = 100`, `2 × 6 × 4 = 48`, `100 − 48 = 52`.
- **C salah** — hanya `2 × 6 × 4 = 48` dijawab.
- **D salah** — `100 − 24 = 76`: `2 × 6 × 4` dihitung `6 × 4 = 24`, faktor `× 2` terlupa.
- **Konsep kunci:** Kalimat panjang diterjemahkan suku demi suku; setiap "hasil kali dari" dilindungi kurung agar dikerjakan lebih dulu.
- **Langkah Penyelesaian:**
  1. `(6 + 4)² = 100`
  2. `2 × 6 × 4 = 48`
  3. `100 − 48 = 52`

---

**55.** Pada operasi `24 ÷ 6 + 2 × 3`, tanda kurung ditempatkan agar hasilnya 18. Penempatan yang benar adalah ....
- A. `24 ÷ (6 + 2) × 3`
- B. `24 ÷ 6 + (2 × 3)`
- C. `(24 ÷ 6 + 2) × 3`
- D. `24 ÷ (6 + 2 × 3)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `24 ÷ 8 × 3 = 3 × 3 = 9`.
- **B salah** — `4 + 6 = 10` (sama dengan tanpa kurung).
- **C benar** — `24 ÷ 6 = 4`, `4 + 2 = 6`, `6 × 3 = 18`. Cocok dengan sasaran.
- **D salah** — `6 + 2 × 3 = 12`, `24 ÷ 12 = 2`.
- **Konsep kunci:** Uji setiap lokasi kurung dengan menghitung nilainya; kurung mengubah bagian yang dikerjakan paling dulu.
- **Langkah Penyelesaian:**
  1. Uji A = 9, B = 10, D = 2
  2. Uji C: `(24 ÷ 6 + 2) × 3 = 6 × 3 = 18`
  3. Jawaban C

---

**56.** Hitunglah: `16 − {4 × [9 − (2 + 1)³]} = ....`
- A. −56
- B. 72
- C. 27
- D. 88

**Kunci: D**
**Pembahasan:**
- **A salah** — `16 − 72 = −56`: `16 − (−72)` dibaca `16 − 72`, padahal mengurangkan bilangan negatif berarti menambahkan.
- **B salah** — menjawab `4 × (−18) = 72`: tanda negatif hasil diabaikan.
- **C salah** — menjawab isi kurung paling dalam `(2 + 1)³ = 27` saja.
- **D benar** — `(2+1)³ = 27`, `9 − 27 = −18`, `4 × (−18) = −72`, `16 − (−72) = 88`.
- **Konsep kunci:** Sekali lagi aturan minus: `a − (−b) = a + b`. Kurung tiga lapis dikerjakan dari dalam.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `(2 + 1)³ = 27`
  2. Siku: `9 − 27 = −18`, kali: `4 × (−18) = −72`
  3. Kurawal: `16 − (−72) = 16 + 72 = 88`

---

**57.** Hitunglah: `3 × 4² − 2 × (5 + 1)² ÷ 4 = ....`
- A. 30
- B. 66
- C. 48
- D. 18

**Kunci: A**
**Pembahasan:**
- **A benar** — `3 × 16 = 48`, `(5+1)² = 36`, `2 × 36 = 72`, `72 ÷ 4 = 18`, `48 − 18 = 30`.
- **B salah** — `48 + 18 = 66`: tanda minus dibaca tambah.
- **C salah** — hanya suku `3 × 4² = 48` dihitung.
- **D salah** — hanya hasil `72 ÷ 4 = 18` dijawab.
- **Konsep kunci:** Bagian dengan pangkat dipecah dulu; lalu sisa operasi mengikuti urutan tanpa melompat.
- **Langkah Penyelesaian:**
  1. `4² = 16`, `3 × 16 = 48`
  2. `(5 + 1)² = 36`, `2 × 36 = 72`
  3. `72 ÷ 4 = 18`
  4. `48 − 18 = 30`

---

**58.** Rani menghitung `(10 − 2)³ − 4 × 6 = 488`. Bagaimana perhitungan Rani?
- A. Salah pada `(10 − 2)³ = 8³`.
- B. Salah pada `4 × 6 = 24`.
- C. Tidak ada langkah yang salah.
- D. Salah urutan: `4 × 6` harus dikerjakan sebelum `(10 − 2)³`.

**Kunci: C**
**Pembahasan:**
- **A salah** — `10 − 2 = 8` dan `8³ = 512` sudah benar.
- **B salah** — `4 × 6 = 24` benar.
- **C benar** — `512 − 24 = 488`; kurung, pangkat, lalu kali, lalu kurang — semuanya sesuai aturan.
- **D salah** — `4 × 6` berada di luar kurung, tidak berhak mendahului isi kurung.
- **Konsep kunci:** Analisis "letak kesalahan" dimulai dari memeriksa urutan, kemudian mengecek angka; bila keduanya benar, maka hasilnya benar.
- **Langkah Penyelesaian:**
  1. `(10 − 2)³ = 8³ = 512`
  2. `4 × 6 = 24`
  3. `512 − 24 = 488` — benar semua

---

**59.** Pada operasi `15 − 3 × 4 + 2`, tanda kurung ditempatkan agar hasilnya 50. Penempatan yang benar adalah ....
- A. `15 − (3 × 4 + 2)`
- B. `(15 − 3) × 4 + 2`
- C. `15 − 3 × (4 + 2)`
- D. `(15 − 3 × 4) + 2`

**Kunci: B**
**Pembahasan:**
- **A salah** — `15 − (12 + 2) = 15 − 14 = 1`.
- **B benar** — `(15 − 3) × 4 + 2 = 12 × 4 + 2 = 48 + 2 = 50`. Cocok dengan sasaran.
- **C salah** — `15 − 3 × 6 = 15 − 18 = −3`.
- **D salah** — `15 − 12 + 2 = 5`.
- **Konsep kunci:** Kurung dibuat agar operasi di dalamnya dikerjakan lebih dulu; evaluasi semua opsi sampai bertemu nilai sasaran.
- **Langkah Penyelesaian:**
  1. Uji A = 1, C = −3, D = 5
  2. Uji B: `12 × 4 + 2 = 50`
  3. Jawaban B

---

**60.** Hitunglah: `(−2)² × 3³ ÷ (−6) = ....`
- A. 18
- B. −108
- C. 108
- D. −18

**Kunci: D**
**Pembahasan:**
- **A salah** — `108 ÷ 6 = 18`: tanda negatif pembagi diabaikan.
- **B salah** — `(−2)²` dibaca `−4`: `−4 × 27 = −108`.
- **C salah** — `4 × 27 = 108`, berhenti sebelum dibagi.
- **D benar** — `(−2)² = 4`, `3³ = 27`, `4 × 27 = 108`, `108 ÷ (−6) = −18`.
- **Konsep kunci:** Pangkat genap membuat bilangan negatif di dalam kurung menjadi positif; tanda hasil bagi ditentukan oleh banyaknya tanda negatif.
- **Langkah Penyelesaian:**
  1. `(−2)² = 4`
  2. `3³ = 27`
  3. `4 × 27 = 108`
  4. `108 ÷ (−6) = −18`

---

**61.** "Tiga kali kuadrat 4, dikurangi dua kali kuadrat 3, lalu ditambah hasil kali 5 dan 7." Nilainya adalah ....
- A. 65
- B. 30
- C. 83
- D. 101

**Kunci: A**
**Pembahasan:**
- **A benar** — `3 × 16 − 2 × 9 + 5 × 7 = 48 − 18 + 35 = 65`.
- **B salah** — `48 − 18 = 30`: hasil kali `5 × 7` dilupakan.
- **C salah** — `48 + 35 = 83`: suku `−18` diabaikan.
- **D salah** — semua tanda dibaca tambah: `48 + 18 + 35 = 101`.
- **Konsep kunci:** Suku-suku dihitung dulu, baru digabung dengan tanda masing-masing; pastikan tidak ada suku terlewat.
- **Langkah Penyelesaian:**
  1. `3 × 4² = 3 × 16 = 48`
  2. `2 × 3² = 2 × 9 = 18`
  3. `5 × 7 = 35`
  4. `48 − 18 + 35 = 65`

---

**62.** Pada operasi `12 ÷ 3 × 2 + 4`, tanda kurung ditempatkan agar hasilnya 24. Penempatan yang benar adalah ....
- A. `12 ÷ (3 × 2) + 4`
- B. `12 ÷ 3 × (2 + 4)`
- C. `(12 ÷ 3 × 2) + 4`
- D. `12 ÷ (3 × 2) × 4`

**Kunci: B**
**Pembahasan:**
- **A salah** — `12 ÷ 6 + 4 = 2 + 4 = 6`.
- **B benar** — `12 ÷ 3 = 4`, `4 × (2 + 4) = 4 × 6 = 24`. Cocok dengan sasaran.
- **C salah** — kurung pada bagian `12 ÷ 3 × 2` tidak mengubah apa pun: `8 + 4 = 12`.
- **D salah** — `12 ÷ 6 × 4 = 2 × 4 = 8`.
- **Konsep kunci:** Kurung yang hanya mengapit bagian yang sudah mengikuti urutan tidak mengubah nilai; yang mengubah nilai adalah kurung di lokasi lain.
- **Langkah Penyelesaian:**
  1. Uji A = 6, C = 12, D = 8
  2. Uji B: `12 ÷ 3 = 4`, `4 × 6 = 24`
  3. Jawaban B

---

**63.** Hitunglah: `(−3)² × 2 − 4³ ÷ 8 + 5 = ....`
- A. 5
- B. 31
- C. 21
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — `18 − 8 − 5 = 5`: tanda `+5` dibaca kurang.
- **B salah** — `18 + 8 + 5 = 31`: dua tanda sekaligus dibalik.
- **C salah** — `18 + 8 − 5 = 21`: hasil `−8` dibaca tambah.
- **D benar** — `(−3)² = 9`, `9 × 2 = 18`, `4³ = 64`, `64 ÷ 8 = 8`, `18 − 8 + 5 = 15`.
- **Konsep kunci:** Setiap suku dihitung dengan tanda aslinya; tanda operasi di antara suku adalah bagian dari susunan.
- **Langkah Penyelesaian:**
  1. `(−3)² = 9`, `9 × 2 = 18`
  2. `4³ = 64`, `64 ÷ 8 = 8`
  3. `18 − 8 + 5 = 15`

---

**64.** "Hasil bagi antara jumlah kuadrat 6 dan kuadrat 8 dengan 10." Nilainya adalah ....
- A. 100
- B. 50
- C. 10
- D. 36

**Kunci: C**
**Pembahasan:**
- **A salah** — `36 + 64 = 100`: lupa membagi dengan 10.
- **B salah** — `100 ÷ 2 = 50`: "dengan 10" dituliskan sebagai `÷ 2`.
- **C benar** — `(6² + 8²) ÷ 10 = (36 + 64) ÷ 10 = 100 ÷ 10 = 10`.
- **D salah** — menjawab `6² = 36` saja.
- **Konsep kunci:** "Jumlah kuadrat a dan b" berarti `(a² + b²)` — kurung wajib agar penjumlahan selesai sebelum dibagi.
- **Langkah Penyelesaian:**
  1. `6² = 36`, `8² = 64`
  2. `36 + 64 = 100`
  3. `100 ÷ 10 = 10`

---

**65.** Doni menghitung `2 + 3 × 4 − 5` dan menulis langkah pertama `2 + 3 = 5`. Apa yang perlu diperbaiki Doni?
- A. `3 × 4` harus dikerjakan sebelum `2 + 3`.
- B. Ia seharusnya tetap menambah dulu lalu mengalikan.
- C. Hasil `3 × 4` seharusnya 14.
- D. Tidak ada kesalahan; langkah pertama boleh ditambah dulu.

**Kunci: A**
**Pembahasan:**
- **A benar** — tanpa kurung, perkalian mendahului penjumlahan: `3 × 4 = 12`, `2 + 12 = 14`, `14 − 5 = 9`.
- **B salah** — menambah dulu mengikuti kiri-ke-kanan tanpa hierarki, itu keliru.
- **C salah** — `3 × 4 = 12`, bukan 14.
- **D salah** — soal tanpa kurung tidak boleh dijumlahkan lebih dulu.
- **Konsep kunci:** KPMBTK memastikan satu aturan universal; tidak ada kebebasan urutan kecuali ada kurung.
- **Langkah Penyelesaian:**
  1. Perhatikan: tidak ada kurung
  2. Kerjakan `3 × 4 = 12`
  3. `2 + 12 − 5 = 9`

---

**66.** Tanpa tanda kurung, hasil dari `18 ÷ 2 × 3` adalah ....
- A. 3
- B. 27
- C. 9
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — `18 ÷ (2 × 3) = 3`: membayangkan kurung yang tidak ada.
- **B benar** — pembagian dan perkalian sederajat, kerjakan kiri ke kanan: `18 ÷ 2 = 9`, `9 × 3 = 27`.
- **C salah** — berhenti di `18 ÷ 2 = 9`, perkalian belum dikerjakan.
- **D salah** — menjawab nilai `2 × 3 = 6` saja.
- **Konsep kunci:** Kali dan bagi sama tinggi; yang menentukan adalah urutan kemunculan dari kiri.
- **Langkah Penyelesaian:**
  1. `18 ÷ 2 = 9`
  2. `9 × 3 = 27`

---

**67.** Hitunglah: `3 × {2 + [4 × (5 − 3)]} − 7 = ....`
- A. 30
- B. 37
- C. 23
- D. 17

**Kunci: C**
**Pembahasan:**
- **A salah** — berhenti di `3 × 10 = 30`, lupa mengurangkan 7.
- **B salah** — `30 + 7 = 37`: tanda minus dibaca tambah.
- **C benar** — `5 − 3 = 2`, `4 × 2 = 8`, `2 + 8 = 10`, `3 × 10 = 30`, `30 − 7 = 23`.
- **D salah** — `3 × [4 × (5 − 3)] − 7 = 24 − 7 = 17`: angka 2 di dalam kurawal diabaikan.
- **Konsep kunci:** Setiap lapis kurung dibuka satu per satu dan nilai lama diganti hasil hitungnya.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `5 − 3 = 2`, lalu `4 × 2 = 8`
  2. Siku ke kurawal: `2 + 8 = 10`, lalu `3 × 10 = 30`
  3. `30 − 7 = 23`

---

**68.** Hitunglah: `(−3)² + (−4)³ ÷ (−2)² = ....`
- A. 25
- B. 7
- C. −16
- D. −7

**Kunci: D**
**Pembahasan:**
- **A salah** — `9 + 16 = 25`: tanda hasil bagi `−16` diabaikan.
- **B salah** — `9 − 16 = −7` lalu tanda negatif dibuang menjadi 7.
- **C salah** — menjawab hasil bagi `(−4)³ ÷ (−2)² = −16` saja.
- **D benar** — `(−3)² = 9`, `(−4)³ = −64`, `(−2)² = 4`, `−64 ÷ 4 = −16`, `9 + (−16) = −7`.
- **Konsep kunci:** Pangkat genap → positif, pangkat ganjil → negatif; pemangkatan mendahului bagi.
- **Langkah Penyelesaian:**
  1. `(−3)² = 9`
  2. `(−4)³ = −64`, `(−2)² = 4`
  3. `−64 ÷ 4 = −16`, lalu `9 − 16 = −7`

---

**69.** Kalimat "kuadrat dari dua kali jumlah 5 dan 3" paling tepat ditulis sebagai ....
- A. `2 × (5 + 3²)`
- B. `[2 × (5 + 3)]²`
- C. `(2 × 5 + 3)²`
- D. `2 × (5 + 3)²`

**Kunci: B**
**Pembahasan:**
- **A salah** — kuadrat hanya mengenai 3, bukan seluruh bagian dalam.
- **B benar** — "dua kali jumlah 5 dan 3" dulu: `2 × (5 + 3)`, lalu seluruhnya dikuadratkan: `[2 × (5 + 3)]²`.
- **C salah** — `2 × 5` ditambah 3 lalu dikuadratkan; susunan yang salah.
- **D salah** — hanya `(5 + 3)` yang dikuadratkan, faktor 2 dikalikan di luar.
- **Konsep kunci:** Kata "dari dua kali … dikuadratkan" berarti kuadrat berlaku untuk seluruh kumpulan sebelumnya — butuh kurung siku.
- **Langkah Penyelesaian:**
  1. Terjemahkan bertahap: dua kali jumlah → `2 × (5 + 3)`
  2. Kuadratkan seluruhnya → `[2 × (5 + 3)]²`
  3. Bandingkan dengan opsi

---

**70.** Hitunglah: `(5² − 3²) × (2³ − 2) ÷ 4 = ....`
- A. 24
- B. 96
- C. 6
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — `25 − 9 = 16`, `8 − 2 = 6`, `16 × 6 = 96`, `96 ÷ 4 = 24`.
- **B salah** — berhenti di `16 × 6 = 96`, lupa membagi 4.
- **C salah** — menjawab `2³ − 2 = 6` saja.
- **D salah** — menjawab `5² − 3² = 16` saja.
- **Konsep kunci:** Dua kurung masing-masing dihitung dulu, lalu dikalikan, baru dibagi.
- **Langkah Penyelesaian:**
  1. `5² − 3² = 25 − 9 = 16`
  2. `2³ − 2 = 8 − 2 = 6`
  3. `16 × 6 = 96`, `96 ÷ 4 = 24`

---

**71.** Pada operasi `20 − 4 × 3 + 8`, tanda kurung ditempatkan agar hasilnya 56. Penempatan yang benar adalah ....
- A. `20 − (4 × 3 + 8)`
- B. `(20 − 4) × (3 + 8)`
- C. `20 − 4 × (3 + 8)`
- D. `(20 − 4) × 3 + 8`

**Kunci: D**
**Pembahasan:**
- **A salah** — `20 − (12 + 8) = 20 − 20 = 0`.
- **B salah** — `16 × 11 = 176`.
- **C salah** — `20 − 4 × 11 = 20 − 44 = −24`.
- **D benar** — `(20 − 4) × 3 + 8 = 16 × 3 + 8 = 48 + 8 = 56`. Cocok dengan sasaran.
- **Konsep kunci:** Menempatkan kurung di lokasi yang tepat mengubah urutan; evaluasi semua opsi untuk menemukan yang 56.
- **Langkah Penyelesaian:**
  1. Uji A = 0, B = 176, C = −24
  2. Uji D: `16 × 3 + 8 = 56`
  3. Jawaban D

---

**72.** Tono menulis langkah-langkah berikut untuk `5 + 3 × 4`:
(1) `5 + 3 × 4 = 8 × 4`
(2) `8 × 4 = 32`
Kesalahan Tono dimulai dari ....
- A. Tidak ada kesalahan.
- B. Langkah 2.
- C. Langkah 1.
- D. Hasil 32 memang benar.

**Kunci: C**
**Pembahasan:**
- **A salah** — `5 + 3 × 4` tidak boleh dijumlahkan lebih dulu.
- **B salah** — `8 × 4 = 32` hanya mengikuti nilai yang sudah keliru dari langkah 1.
- **C benar** — harusnya `3 × 4 = 12`, lalu `5 + 12 = 17`.
- **D salah** — 32 bukan nilai yang benar.
- **Konsep kunci:** Mencari letak kesalahan = menemukan langkah pertama yang melanggar aturan; langkah berikutnya bisa "benar" bagi angka yang salah.
- **Langkah Penyelesaian:**
  1. Periksa langkah 1: melanggar KPKBTK (menjumlah dulu)
  2. Perbaiki: `3 × 4 = 12`
  3. `5 + 12 = 17`

---

**73.** "Selisih kuadrat 13 dan kuadrat 12, dibagi kuadrat 5." Nilainya adalah ....
- A. 1
- B. 25
- C. 5
- D. 0

**Kunci: A**
**Pembahasan:**
- **A benar** — `(13² − 12²) ÷ 5² = (169 − 144) ÷ 25 = 25 ÷ 25 = 1`.
- **B salah** — `169 − 144 = 25`: lupa membagi dengan 25.
- **C salah** — `25 ÷ 5 = 5`: pembagi dianggap `5`, bukan `5² = 25`.
- **D salah** — `25 − 25 = 0`: operasi bagi dibaca kurang.
- **Konsep kunci:** "Kuadrat 5" adalah `5²`, bukan `5`; seluruh kalimat diterjemahkan dengan kurung sebelum dihitung.
- **Langkah Penyelesaian:**
  1. `13² = 169`, `12² = 144`; selisihnya `25`
  2. `5² = 25`
  3. `25 ÷ 25 = 1`

---

**74.** Hitunglah: `(−1)³ × (3 + 2 × 5) − 4² = ....`
- A. 3
- B. −29
- C. 29
- D. −3

**Kunci: B**
**Pembahasan:**
- **A salah** — `−4²` dibaca `(−4)²` sehingga menjadi +16: `−13 + 16 = 3`.
- **B benar** — `(−1)³ = −1`, `2 × 5 = 10`, `3 + 10 = 13`, `−1 × 13 = −13`, `4² = 16`, `−13 − 16 = −29`.
- **C salah** — semua tanda dibalik: `13 + 16 = 29`.
- **D salah** — tanda `(−1)³` diabaikan: `13 − 16 = −3`.
- **Konsep kunci:** `−4²` berarti `−(4²)`, sedangkan `(−1)³` bernilai negatif; kalikan hasilnya baru kurangi.
- **Langkah Penyelesaian:**
  1. `(−1)³ = −1` (pangkat ganjil)
  2. `(3 + 2 × 5) = 13`
  3. `−1 × 13 = −13`, `4² = 16`
  4. `−13 − 16 = −29`

---

**75.** Hitunglah: `4 × 3 + 12 ÷ 4 × 2 − 5 = ....`
- A. 31
- B. 21
- C. 13
- D. −2

**Kunci: C**
**Pembahasan:**
- **A salah** — `12 + 12 × 2 − 5 = 31`: `12 ÷ 4` dilewati dan 3 dianggap 12 kembali.
- **B salah** — `12 + 3 + 6 = 21`: suku `−5` dilupakan.
- **C benar** — `4 × 3 = 12`, `12 ÷ 4 = 3`, `3 × 2 = 6`, `12 + 6 − 5 = 13`.
- **D salah** — `(4 × 3 + 12) ÷ (4 × 2) − 5 = 24 ÷ 8 − 5 = 3 − 5 = −2`: menambahkan dulu dan membayangkan kurung.
- **Konsep kunci:** Ekspresi panjang: kelola operasi kuat (kali/bagi) dulu berurutan kiri–kanan, baru gabungkan dengan tambah/kurang.
- **Langkah Penyelesaian:**
  1. `4 × 3 = 12`
  2. `12 ÷ 4 = 3`, `3 × 2 = 6`
  3. `12 + 6 − 5 = 13`

---

**76.** "Kuadrat dari jumlah dua kali 3 dan dua kali 4." Nilainya adalah ....
- A. 14
- B. 28
- C. 100
- D. 196

**Kunci: D**
**Pembahasan:**
- **A salah** — `6 + 8 = 14`: lupa mengkuadratkan hasilnya.
- **B salah** — `14 × 2 = 28`: kuadrat dianggap "dikalikan 2".
- **C salah** — `(2 × 3)² + (2 × 4)² = 36 + 64 = 100`: mengkuadratkan masing-masing, bukan kuadrat jumlah.
- **D benar** — `2 × 3 = 6`, `2 × 4 = 8`, `6 + 8 = 14`, `14² = 196`.
- **Konsep kunci:** "Kuadrat dari jumlah" = kurung dulu lalu kuadrat; berbeda dengan "jumlah kuadrat".
- **Langkah Penyelesaian:**
  1. `2 × 3 = 6`, `2 × 4 = 8`
  2. `6 + 8 = 14`
  3. `14² = 196`

---

**77.** Bayu menghitung `12 ÷ 3 + 2 × 2` dengan langkah:
(1) `12 ÷ (3 + 2) = 12 ÷ 5`
(2) `12 ÷ 5 = 2,4`
(3) `2,4 × 2 = 4,8`
Kesalahan Bayu pertama kali terjadi pada ....
- A. Langkah 1.
- B. Langkah 2.
- C. Langkah 3.
- D. Tidak ada kesalahan.

**Kunci: A**
**Pembahasan:**
- **A benar** — tidak ada kurung, jadi `12 ÷ 3 = 4` lebih dulu; lalu `4 + 2 × 2 = 4 + 4 = 8`.
- **B salah** — `12 ÷ 5 = 2,4` benar bagi asumsi yang salah di langkah 1.
- **C salah** — `2,4 × 2` mengikuti nilai dari langkah sebelumnya.
- **D salah** — jawaban yang benar 8, bukan 4,8.
- **Konsep kunci:** Bayu menulis kurung imajiner; temukan langkah pertama yang melanggar aturan, bukan langkah yang salah menghitung.
- **Langkah Penyelesaian:**
  1. Periksa langkah 1: `÷ (3 + 2)` tidak ada dalam soal
  2. Hitung benar: `12 ÷ 3 = 4`, `2 × 2 = 4`
  3. `4 + 4 = 8`

---

**78.** Pada operasi `10 + 5 × 2 − 3`, tanda kurung ditempatkan agar hasilnya 27. Penempatan yang benar adalah ....
- A. `10 + (5 × 2) − 3`
- B. `(10 + 5) × 2 − 3`
- C. `10 + 5 × (2 − 3)`
- D. `(10 + 5 × 2) − 3`

**Kunci: B**
**Pembahasan:**
- **A salah** — `10 + 10 − 3 = 17`.
- **B benar** — `(10 + 5) × 2 − 3 = 15 × 2 − 3 = 30 − 3 = 27`. Cocok dengan sasaran.
- **C salah** — `10 + 5 × (−1) = 10 − 5 = 5`.
- **D salah** — `(10 + 10) − 3 = 17`.
- **Konsep kunci:** Kurung memaksa penjumlahan di dalamnya mendahului perkalian; uji nilai tiap opsi.
- **Langkah Penyelesaian:**
  1. Uji A = 17, C = 5, D = 17
  2. Uji B: `15 × 2 − 3 = 27`
  3. Jawaban B

---

**79.** Hitunglah: `(−2)³ + (−3)² × 5 = ....`
- A. 49
- B. −53
- C. 37
- D. 45

**Kunci: C**
**Pembahasan:**
- **A salah** — `(−2)³` dibaca `(−2)² = 4`: `4 + 45 = 49`.
- **B salah** — `(−3)²` dibaca `−9`: `−8 + (−9) × 5 = −8 − 45 = −53`.
- **C benar** — `(−2)³ = −8`, `(−3)² = 9`, `9 × 5 = 45`, `−8 + 45 = 37`.
- **D salah** — menjawab `(−3)² × 5 = 45` saja (suku pertama diabaikan).
- **Konsep kunci:** Pangkat ganjil mempertahankan tanda negatif, pangkat genap menghapusnya; pasangkan dengan perkalian yang mendahului penjumlahan.
- **Langkah Penyelesaian:**
  1. `(−2)³ = −8`, `(−3)² = 9`
  2. `9 × 5 = 45`
  3. `−8 + 45 = 37`

---

**80.** "Selisih antara hasil bagi 36 dengan 4 dan hasil kali 2 dengan 3, lalu hasilnya dikuadratkan." Nilainya adalah ....
- A. 3
- B. 15
- C. 81
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — `9 − 6 = 3`: lupa mengkuadratkan hasil akhir.
- **B salah** — `36 ÷ 4 + 2 × 3 = 9 + 6 = 15`: "selisih" dibaca "jumlah".
- **C salah** — `(36 ÷ 4)² = 81`: hanya bagian pertama yang dikuadratkan.
- **D benar** — `(36 ÷ 4 − 2 × 3)² = (9 − 6)² = 3² = 9`.
- **Konsep kunci:** Kurung dibangun dari struktur kalimat; kuadrat dikerjakan terakhir pada seluruh hasil selisih.
- **Langkah Penyelesaian:**
  1. `36 ÷ 4 = 9`, `2 × 3 = 6`
  2. `9 − 6 = 3`
  3. `3² = 9`

---

**81.** Lina menulis `(−4)² = −16` dan `−4² = 16`. Pernyataan yang benar adalah ....
- A. Keduanya salah.
- B. Keduanya benar.
- C. `(−4)² = −16` benar dan `−4² = 16` salah.
- D. `−4² = 16` benar dan `(−4)² = −16` salah.

**Kunci: A**
**Pembahasan:**
- **A benar** — `(−4)² = 16` karena tandanya ikut dikuadratkan; `−4² = −16` karena minus tidak ikut dikuadratkan. Keduanya justru terbalik.
- **B salah** — kedua jawaban Lina bertentangan dengan aturan pangkat.
- **C salah** — `(−4)²` seharusnya 16.
- **D salah** — `−4²` seharusnya −16.
- **Konsep kunci:** Perbedaan penempatan tanda minus adalah inti soal ini: `−a²` vs `(−a)²`.
- **Langkah Penyelesaian:**
  1. `(−4)² = (−4) × (−4) = 16`
  2. `−4² = −(4 × 4) = −16`
  3. Cocokkan dengan tulisan Lina — keduanya keliru

---

**82.** Pada operasi `8 × 4 − 3 × 6`, tanda kurung ditempatkan agar hasilnya 48. Penempatan yang benar adalah ....
- A. `8 × 4 − (3 × 6)`
- B. `(8 × 4 − 3) × 6`
- C. `8 × (4 − 3) × 6`
- D. `8 × (4 − 3 × 6)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `32 − 18 = 14`.
- **B salah** — `(32 − 3) × 6 = 29 × 6 = 174`.
- **C benar** — `8 × (4 − 3) × 6 = 8 × 1 × 6 = 48`. Cocok dengan sasaran.
- **D salah** — `8 × (4 − 18) = 8 × (−14) = −112`.
- **Konsep kunci:** Temukan lokasi kurung dengan mengevaluasi tiap opsi sampai nilai sasaran tercapai.
- **Langkah Penyelesaian:**
  1. Uji A = 14, B = 174, D = −112
  2. Uji C: `8 × 1 × 6 = 48`
  3. Jawaban C

---

**83.** Hitunglah: `2 × 3² + 4 × 5 − 6 × 7 ÷ 2 = ....`
- A. 21
- B. 17
- C. 35
- D. 59

**Kunci: B**
**Pembahasan:**
- **A salah** — menjawab hasil `6 × 7 ÷ 2 = 21` saja.
- **B benar** — `2 × 9 = 18`, `4 × 5 = 20`, `6 × 7 = 42`, `42 ÷ 2 = 21`, `18 + 20 − 21 = 17`.
- **C salah** — `2 × 3²` dibaca `(2 × 3)² = 36`: `36 + 20 − 21 = 35`.
- **D salah** — `18 + 20 + 21 = 59`: tanda minus dibaca tambah.
- **Konsep kunci:** Pangkat dihitung sebelum kali; lalu kali/bagi berurutan kiri–kanan; baru semua suku digabung.
- **Langkah Penyelesaian:**
  1. `2 × 3² = 2 × 9 = 18`
  2. `4 × 5 = 20`
  3. `6 × 7 ÷ 2 = 42 ÷ 2 = 21`
  4. `18 + 20 − 21 = 17`

---

**84.** Hitunglah: `(−2)⁴ − 3 × [2 + (8 − 5)²] = ....`
- A. 17
- B. 33
- C. −49
- D. −17

**Kunci: D**
**Pembahasan:**
- **A salah** — `33 − 16 = 17`: urutan suku dibalik, tanda tidak diperhatikan.
- **B salah** — menjawab `3 × 11 = 33` saja.
- **C salah** — `(−2)⁴` dibaca `−16`: `−16 − 33 = −49` (padahal pangkat genap → positif).
- **D benar** — `(−2)⁴ = 16`, `(8 − 5)² = 9`, `2 + 9 = 11`, `3 × 11 = 33`, `16 − 33 = −17`.
- **Konsep kunci:** Pangkat genap menjamin hasil positif; siku-siku dikerjakan dari dalam, lalu suku gabungan dihitung.
- **Langkah Penyelesaian:**
  1. `(−2)⁴ = 16`
  2. `(8 − 5)² = 3² = 9`, `2 + 9 = 11`
  3. `3 × 11 = 33`
  4. `16 − 33 = −17`

---

**85.** "Kuadrat jumlah 3 dan 2, dikali kuadrat selisih 3 dan 2." Nilainya adalah ....
- A. 5
- B. 26
- C. 25
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — `(3 + 2)(3 − 2) = 5 × 1 = 5`: kuadrat tidak diterapkan.
- **B salah** — `25 + 1 = 26`: "dikali" dibaca "ditambah".
- **C benar** — `(3 + 2)² × (3 − 2)² = 25 × 1 = 25`.
- **D salah** — `25 − 1 = 24`: "dikali" dibaca "dikurang".
- **Konsep kunci:** Gabungan "kuadrat jumlah" dan "kuadrat selisih" masing-masing dihitung lalu dikalikan.
- **Langkah Penyelesaian:**
  1. `(3 + 2)² = 25`
  2. `(3 − 2)² = 1`
  3. `25 × 1 = 25`

---

**86.** Raka mengerjakan `2 + 3 × 4 − 1` dengan menulis `2 + 3 = 5`, lalu `5 × 4 = 20`, lalu `20 − 1 = 19`. Hal pertama yang perlu diperbaiki Raka adalah ....
- A. mengerjakan `3 × 4` sebelum `2 + 3`.
- B. menghitung `5 × 4` dengan benar.
- C. menghitung `20 − 1` dengan benar.
- D. tidak ada yang salah; 19 memang benar.

**Kunci: A**
**Pembahasan:**
- **A benar** — `3 × 4 = 12`, `2 + 12 = 14`, `14 − 1 = 13`.
- **B salah** — `5 × 4 = 20` berasal dari `(2 + 3) × 4` yang keliru; perkaliannya sendiri benar untuk angka itu.
- **C salah** — `20 − 1 = 19` konsisten dengan hasil langkah yang salah.
- **D salah** — jawaban yang benar 13.
- **Konsep kunci:** Untuk membenahi kesalahan, perbaiki akar masalah pertama (urutan), bukan hasil turunannya.
- **Langkah Penyelesaian:**
  1. Lihat langkah pertama: penjumlahan tidak berhak mendahului perkalian
  2. `3 × 4 = 12`
  3. `2 + 12 − 1 = 13`

---

**87.** Pada operasi `6 × 3 + 4 ÷ 2`, tanda kurung ditempatkan agar hasilnya 21. Penempatan yang benar adalah ....
- A. `(6 × 3) + 4 ÷ 2`
- B. `6 × (3 + 4) ÷ 2`
- C. `6 × (3 + 4 ÷ 2)`
- D. `(6 × 3 + 4) ÷ 2`

**Kunci: B**
**Pembahasan:**
- **A salah** — `18 + 2 = 20` (sama dengan tanpa kurung).
- **B benar** — `6 × 7 = 42`, `42 ÷ 2 = 21`. Cocok dengan sasaran.
- **C salah** — `6 × (3 + 2) = 6 × 5 = 30`.
- **D salah** — `(18 + 4) ÷ 2 = 22 ÷ 2 = 11`.
- **Konsep kunci:** Kurung bisa mengubah urutan ÷ dan ×; kiri–kanan tetap berlaku di luar kurung.
- **Langkah Penyelesaian:**
  1. Uji A = 20, C = 30, D = 11
  2. Uji B: `6 × 7 = 42`, `42 ÷ 2 = 21`
  3. Jawaban B

---

**88.** Hitunglah: `(1/2 × 8² − 1/4 × 4³) ÷ 2 = ....`
- A. 48
- B. 24
- C. 16
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — `32 + 16 = 48`: tanda minus dibaca tambah.
- **B salah** — `32 − (16 ÷ 2) = 24`: pembagian 2 hanya diterapkan pada suku kedua.
- **C salah** — berhenti di isi kurung `32 − 16 = 16`, tidak dibagi 2.
- **D benar** — `1/2 × 64 = 32`, `1/4 × 64 = 16`, `32 − 16 = 16`, `16 ÷ 2 = 8`.
- **Konsep kunci:** Pangkat dihitung dulu, pecahan mengalikan hasil pangkat, selisih dalam kurung selesai sebelum dibagi.
- **Langkah Penyelesaian:**
  1. `8² = 64`, `1/2 × 64 = 32`
  2. `4³ = 64`, `1/4 × 64 = 16`
  3. `32 − 16 = 16`
  4. `16 ÷ 2 = 8`

---

**89.** Pada operasi `24 ÷ 4 − 2 × 3`, tanda kurung ditempatkan agar hasilnya 36. Penempatan yang benar adalah ....
- A. `(24 ÷ 4 − 2) × 3`
- B. `24 ÷ (4 − 2 × 3)`
- C. `24 ÷ (4 − 2) × 3`
- D. `24 ÷ 4 − (2 × 3)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `(6 − 2) × 3 = 4 × 3 = 12`.
- **B salah** — `24 ÷ (4 − 6) = 24 ÷ (−2) = −12`.
- **C benar** — `24 ÷ 2 = 12`, `12 × 3 = 36`. Cocok dengan sasaran.
- **D salah** — `6 − 6 = 0` (sama dengan tanpa kurung).
- **Konsep kunci:** Kurung memengaruhi hasil paling kuat ketika ia mengubah urutan bagi; uji semua lokasi.
- **Langkah Penyelesaian:**
  1. Uji A = 12, B = −12, D = 0
  2. Uji C: `24 ÷ 2 = 12`, `12 × 3 = 36`
  3. Jawaban C

---

**90.** "Jumlah kuadrat 5 dan dua kali hasil kali 5 dan 2." Nilainya adalah ....
- A. 45
- B. 25
- C. 20
- D. 49

**Kunci: A**
**Pembahasan:**
- **A benar** — `5² + 2 × 5 × 2 = 25 + 20 = 45`.
- **B salah** — hanya `5² = 25` dihitung.
- **C salah** — hanya `2 × 5 × 2 = 20` dihitung.
- **D salah** — `(5 + 2)² = 49`: `5² + 2 × 5 × 2` disamakan dengan `(5 + 2)²`.
- **Konsep kunci:** Jangan menyamakan `a² + 2ab` dengan `(a + b)²`; keduanya berbeda.
- **Langkah Penyelesaian:**
  1. `5² = 25`
  2. `2 × 5 × 2 = 20`
  3. `25 + 20 = 45`

---

**91.** Andi mengerjakan `18 − 6 ÷ 2 + 4` dan menulis `18 − 6 = 12`, lalu `12 ÷ 2 + 4 = 10`. Mengapa langkah pertama Andi keliru?
- A. Karena `12 ÷ 2 = 6` salah dihitung.
- B. Karena `6 ÷ 2` harus dikerjakan sebelum `18 − 6`.
- C. Karena urutan `18 − 6` dulu memang boleh.
- D. Tidak keliru; 10 memang benar.

**Kunci: B**
**Pembahasan:**
- **A salah** — `12 ÷ 2 = 6` benar bagi angka 12; masalahnya 12 diperoleh dari langkah yang melanggar aturan.
- **B benar** — bagi mendahului kurang: `6 ÷ 2 = 3`, `18 − 3 + 4 = 19`.
- **C salah** — tanpa kurung, `÷` lebih kuat dari `−`.
- **D salah** — jawaban yang benar 19.
- **Konsep kunci:** Kali/bagi lebih tinggi dari tambah/kurang; perbaiki urutan, bukan angkanya.
- **Langkah Penyelesaian:**
  1. `6 ÷ 2 = 3`
  2. `18 − 3 = 15`
  3. `15 + 4 = 19`

---

**92.** Pada operasi `15 + 6 − 3 × 2`, tanda kurung ditempatkan agar hasilnya 36. Penempatan yang benar adalah ....
- A. `15 + (6 − 3) × 2`
- B. `15 + 6 − (3 × 2)`
- C. `(15 + 6) − 3 × 2`
- D. `(15 + 6 − 3) × 2`

**Kunci: D**
**Pembahasan:**
- **A salah** — `15 + 3 × 2 = 15 + 6 = 21`.
- **B salah** — `15 + 6 − 6 = 15`.
- **C salah** — kurung tidak mengubah urutan: `21 − 6 = 15`.
- **D benar** — `(15 + 6 − 3) × 2 = 18 × 2 = 36`. Cocok dengan sasaran.
- **Konsep kunci:** Kurung yang hanya mengapit operasi yang sudah lebih dulu tidak mengubah nilai; kurung terluar yang mengelompokkan semuanya yang bekerja.
- **Langkah Penyelesaian:**
  1. Uji A = 21, B = 15, C = 15
  2. Uji D: `18 × 2 = 36`
  3. Jawaban D

---

**93.** Hitunglah: `30 − {2 × [20 − (3² + 2)]} ÷ 6 = ....`
- A. 27
- B. 12
- C. 3
- D. 48

**Kunci: A**
**Pembahasan:**
- **A benar** — `30 − 18 ÷ 6 = 30 − 3 = 27`.
- **B salah** — `30 − 18 = 12`: pembagian dengan 6 dihilangkan.
- **C salah** — menjawab hasil `18 ÷ 6 = 3` saja.
- **D salah** — `30 + 18 = 48`: tanda minus dibaca tambah.
- **Konsep kunci:** Kurawal dihitung dulu menghasilkan satu angka, lalu pembagian, lalu pengurangan; semua bertahap.
- **Langkah Penyelesaian:**
  1. `(3² + 2) = 9 + 2 = 11`
  2. `20 − 11 = 9`, lalu `2 × 9 = 18`
  3. `18 ÷ 6 = 3`
  4. `30 − 3 = 27`

---

**94.** Pada operasi `36 ÷ 6 + 3 × 2`, tanda kurung ditempatkan agar hasilnya 18. Penempatan yang benar adalah ....
- A. `36 ÷ (6 + 3) × 2`
- B. `36 ÷ 6 + (3 × 2)`
- C. `(36 ÷ 6 + 3) × 2`
- D. `36 ÷ (6 + 3 × 2)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `36 ÷ 9 × 2 = 4 × 2 = 8`.
- **B salah** — `6 + 6 = 12` (kurung tak mengubah nilai).
- **C benar** — `36 ÷ 6 = 6`, `6 + 3 = 9`, `9 × 2 = 18`. Cocok dengan sasaran.
- **D salah** — `36 ÷ (6 + 6) = 36 ÷ 12 = 3`.
- **Konsep kunci:** Uji tiap penempatan nada; kurung mengubah bagian yang dikerjakan pertama.
- **Langkah Penyelesaian:**
  1. Uji A = 8, B = 12, D = 3
  2. Uji C: `(6 + 3) × 2 = 18`
  3. Jawaban C

---

**95.** Kalimat "hasil bagi jumlah 12 dan 8 terhadap selisih 7 dan 2" ditulis Rina sebagai `12 + 8 ÷ 7 − 2`. Pernyataan yang benar adalah ....
- A. Tulisan Rina tepat.
- B. Rina keliru; yang benar `(12 + 8) ÷ (7 − 2)`.
- C. Yang benar `12 + 8 ÷ (7 − 2)`.
- D. Yang benar `(12 + 8 ÷ 7) − 2`.

**Kunci: B**
**Pembahasan:**
- **A salah** — tanpa kurung, `8 ÷ 7` dikerjakan lebih dulu; struktur "hasil bagi … terhadap …" hilang.
- **B benar** — pembilang `(12 + 8)` dan penyebut `(7 − 2)` masing-masing dijumlah, lalu dibagi: `20 ÷ 5 = 4`.
- **C salah** — hanya penyebut yang dikelompokkan; pembilang tetap terurai.
- **D salah** — urutan bagi disusun ulang keliru.
- **Konsep kunci:** "Hasil bagi A terhadap B" selalu berarti `(A) ÷ (B)` dengan dua kurung.
- **Langkah Penyelesaian:**
  1. Terjemahkan: `(12 + 8) ÷ (7 − 2)`
  2. `12 + 8 = 20`, `7 − 2 = 5`
  3. `20 ÷ 5 = 4`

---

**96.** Hitunglah: `14 × (9 − 4²) ÷ 7 + 2³ = ....`
- A. 6
- B. 8
- C. −14
- D. −6

**Kunci: D**
**Pembahasan:**
- **A salah** — `−14 + 8 = −6`, tanda negatif dibuang menjadi 6.
- **B salah** — menjawab `2³ = 8` saja.
- **C salah** — berhenti di `14 × (−7) ÷ 7 = −14`, lupa menambahkan `2³`.
- **D benar** — `(9 − 16) = −7`, `14 × (−7) = −98`, `−98 ÷ 7 = −14`, `2³ = 8`, `−14 + 8 = −6`.
- **Konsep kunci:** Nilai negatif dari kurung dibawa sampai akhir; pangkat ditambahkan terakhir.
- **Langkah Penyelesaian:**
  1. `9 − 4² = 9 − 16 = −7`
  2. `14 × (−7) = −98`, `−98 ÷ 7 = −14`
  3. `2³ = 8`
  4. `−14 + 8 = −6`

---

**97.** Pada operasi `30 − 12 ÷ 3 − 2`, tanda kurung ditempatkan agar hasilnya 4. Penempatan yang benar adalah ....
- A. `(30 − 12) ÷ 3 − 2`
- B. `30 − 12 ÷ (3 − 2)`
- C. `30 − (12 ÷ 3 − 2)`
- D. `30 − 12 ÷ 3 − 2`

**Kunci: A**
**Pembahasan:**
- **A benar** — `18 ÷ 3 = 6`, `6 − 2 = 4`. Cocok dengan sasaran.
- **B salah** — `30 − 12 ÷ 1 = 30 − 12 = 18`.
- **C salah** — `30 − (4 − 2) = 30 − 2 = 28`.
- **D salah** — tanpa kurung nilainya `30 − 4 − 2 = 24`.
- **Konsep kunci:** Kurung yang mengapit pengurangan mengubah urutan bagi; evaluasi semua lokasi.
- **Langkah Penyelesaian:**
  1. Uji B = 18, C = 28, D = 24
  2. Uji A: `18 ÷ 3 = 6`, `6 − 2 = 4`
  3. Jawaban A

---

**98.** "Dua kali selisih kuadrat 6 dan kuadrat 4." Nilainya adalah ....
- A. 20
- B. 40
- C. 4
- D. 52

**Kunci: B**
**Pembahasan:**
- **A salah** — `6² − 4² = 20`: lupa dikalikan 2.
- **B benar** — `2 × (6² − 4²) = 2 × 20 = 40`.
- **C salah** — `2 × (6 − 4) = 4`: kuadrat diabaikan, selisih dihitung langsung.
- **D salah** — `6² + 4² = 52`: "selisih" dibaca "jumlah".
- **Konsep kunci:** "Selisih kuadrat" berarti `a² − b²` di dalam kurung, baru dikalikan 2.
- **Langkah Penyelesaian:**
  1. `6² = 36`, `4² = 16`
  2. `36 − 16 = 20`
  3. `2 × 20 = 40`

---

**99.** Hitunglah: `(5 × 4 − 3²)² − (6 ÷ 2)³ + 2 = ....`
- A. 121
- B. 94
- C. 96
- D. 92

**Kunci: C**
**Pembahasan:**
- **A salah** — hanya `(20 − 9)² = 121` yang dihitung.
- **B salah** — `121 − 27 = 94`: suku `+ 2` dilupakan.
- **C benar** — `(5 × 4 − 3²)² = (20 − 9)² = 121`, `(6 ÷ 2)³ = 3³ = 27`, `121 − 27 + 2 = 96`.
- **D salah** — `121 − 27 − 2 = 92`: tanda `+ 2` dibaca kurang.
- **Konsep kunci:** Dua kurung bernilai dulu (kuadrat dan pangkat tiga), lalu sisa operasi digabungkan.
- **Langkah Penyelesaian:**
  1. `5 × 4 − 3² = 20 − 9 = 11`, lalu `11² = 121`
  2. `6 ÷ 2 = 3`, lalu `3³ = 27`
  3. `121 − 27 + 2 = 96`

---

**100.** Hitunglah: `{[(7 − 3)² + 2³] ÷ (−4)} + 3 × 5 = ....`
- A. 21
- B. 15
- C. −6
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — `24 ÷ 4 = 6`, lalu `6 + 15 = 21`: tanda negatif pembagi diabaikan.
- **B salah** — menjawab `3 × 5 = 15` saja.
- **C salah** — menjawab hasil `24 ÷ (−4) = −6` saja.
- **D benar** — `(7 − 3)² = 16`, `16 + 8 = 24`, `24 ÷ (−4) = −6`, `3 × 5 = 15`, `−6 + 15 = 9`.
- **Konsep kunci:** Kurung tiga lapis dibuka dari dalam; pembagian menghasilkan negatif yang ditambahkan ke hasil kali.
- **Langkah Penyelesaian:**
  1. Kurung dalam: `(7 − 3)² = 16`, `2³ = 8`, jumlah `24`
  2. `24 ÷ (−4) = −6`
  3. `3 × 5 = 15`
  4. `−6 + 15 = 9`

---

# Bagian III - Kunci & Distribusi

## Tabel Kunci 100 Soal

| 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|------|-------|-------|-------|-------|
| 1. A | 11. D | 21. A | 31. B | 41. A |
| 2. B | 12. B | 22. D | 32. D | 42. B |
| 3. C | 13. D | 23. C | 33. A | 43. C |
| 4. D | 14. C | 24. B | 34. C | 44. D |
| 5. B | 15. A | 25. A | 35. B | 45. A |
| 6. A | 16. B | 26. C | 36. D | 46. B |
| 7. D | 17. D | 27. D | 37. A | 47. D |
| 8. C | 18. A | 28. B | 38. C | 48. C |
| 9. A | 19. C | 29. A | 39. D | 49. A |
| 10. C | 20. B | 30. C | 40. B | 50. B |

| 51-60 | 61-70 | 71-80 | 81-90 | 91-100 |
|-------|-------|-------|-------|--------|
| 51. C | 61. A | 71. D | 81. A | 91. B |
| 52. D | 62. B | 72. C | 82. C | 92. D |
| 53. A | 63. D | 73. A | 83. B | 93. A |
| 54. B | 64. C | 74. B | 84. D | 94. C |
| 55. C | 65. A | 75. C | 85. C | 95. B |
| 56. D | 66. B | 76. D | 86. A | 96. D |
| 57. A | 67. C | 77. A | 87. B | 97. A |
| 58. C | 68. D | 78. B | 88. D | 98. B |
| 59. B | 69. B | 79. C | 89. C | 99. C |
| 60. D | 70. A | 80. D | 90. A | 100. D |

## Distribusi Kunci

Penghitungan per huruf (hasil akhir setelah perencanaan kunci agar seimbang):

- **A** (25 soal): 1, 6, 9, 15, 18, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 70, 73, 77, 81, 86, 90, 93, 97
- **B** (25 soal): 2, 5, 12, 16, 20, 24, 28, 31, 35, 40, 42, 46, 50, 54, 59, 62, 66, 69, 74, 78, 83, 87, 91, 95, 98
- **C** (25 soal): 3, 8, 10, 14, 19, 23, 26, 30, 34, 38, 43, 48, 51, 55, 58, 64, 67, 72, 75, 79, 82, 85, 89, 94, 99
- **D** (25 soal): 4, 7, 11, 13, 17, 22, 27, 32, 36, 39, 44, 47, 52, 56, 60, 63, 68, 71, 76, 80, 84, 88, 92, 96, 100

**Distribusi A: 25 · B: 25 · C: 25 · D: 25** — seimbang sempurna di angka ideal 25 per huruf. Kunci tersebar acak sehingga tidak ada pola yang dapat ditebak siswa.

---

## Strategi Belajar Urutan Operasi

1. **Hafalkan KPKBTK** — Kurung, Pangkat, Kali/Bagi, Tambah/Kurang. Kurung dikerjakan dari paling dalam ke luar.
2. **Tulislah langkah per baris** — jangan kerjakan dua operasi sekaligus; setiap baris boleh berisi satu operasi saja.
3. **Kali/bagi sederajat, tambah/kurang sederajat** — kerjakan dari kiri ke kanan; jangan mendahulukan "kali" atas "bagi" tanpa alasan.
4. **Bedakan `−a²` dan `(−a)²`** — minus di luar pangkat tetap negatif, minus di dalam kurung ikut dipangkatkan; pangkat genap → positif, ganjil → tetap negatif.
5. **Buka kurung bersarang satu lapis sekali** — dari `( )` ke `[ ]` ke `{ }`, salin ulang sisa ekspresi tiap lapis.
6. **Kata "jumlah/selisih/hasil kali dari …" berarti kurung** — terjemahkan kalimat ke ekspresi dengan menambah kurung di frasa itu.
7. **Cek tanda di depan kurung negatif** — mengurangkan hasil kurung yang bernilai negatif sama dengan menambahkan; jangan jatuhkan tanda.
8. **Uji letak kurung dengan menghitung semua kemungkinan** — pasang di tiap lokasi, hitung, cocokkan dengan nilai sasaran.
9. **Saat mencari letak kesalahan, cek urutan dulu** — kesalahan urutan operasi lebih sering ditemukan daripada kesalahan hitung.
10. **Latih distractor** — setiap opsi salah mewakili satu miskonsepsi (tanda, urutan, pangkat); pelajari mengapa ia salah agar tidak terjebak di olimpiade.

---

*Selesai. Sub-bab 01b - Urutan Operasi (Sulit).*