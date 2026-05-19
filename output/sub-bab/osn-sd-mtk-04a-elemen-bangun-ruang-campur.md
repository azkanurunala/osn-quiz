# OSN/KSN SD — MTK · Sub-Bab 04a: Elemen Bangun Ruang (Tingkat Campur)

> **Profil**: 50 soal Kab + 30 soal Prov + 20 soal Nas · Total **100 soal PG**
> **Fokus**: Rusuk, sisi (face), titik sudut (vertex), diagonal sisi & diagonal ruang · Kubus, balok, prisma, limas, tabung, kerucut, bola · Rumus Euler V − E + F = 2
> **Target audiens**: SD kelas 5–6 siap OSN/KSN

---

## BAGIAN I · TEORI ESENSIAL

### 1. Istilah Dasar
- **Sisi (face)** = bidang batas bangun ruang. Bisa datar (kubus, balok) atau lengkung (selimut tabung, bola).
- **Rusuk (edge)** = garis pertemuan dua sisi.
- **Titik sudut (vertex)** = titik pertemuan tiga rusuk atau lebih.
- **Diagonal sisi (face diagonal)** = ruas garis yang menghubungkan dua titik sudut yang **tidak bersebelahan** pada **satu sisi** (di permukaan).
- **Diagonal ruang (space diagonal)** = ruas garis yang menghubungkan dua titik sudut yang **tidak terletak pada satu sisi** (menembus ruang dalam).
- **Bidang diagonal** = bidang yang dibatasi oleh dua rusuk sejajar yang tidak bertetangga dan dua diagonal sisi yang sejajar.

### 2. Tabel Elemen 8 Bangun Ruang Penting
| Bangun | Sisi | Rusuk | Titik sudut | Diagonal ruang | Diagonal sisi |
|---|---|---|---|---|---|
| **Kubus** | 6 (persegi sama) | 12 (sama panjang) | 8 | **4** | **12** (2 per sisi × 6 sisi) |
| **Balok** | 6 (3 pasang persegi panjang) | 12 (3 panjang berbeda) | 8 | **4** | **12** |
| **Prisma segitiga** | 5 (2 segitiga + 3 persegi panjang) | 9 | 6 | 0* | beberapa pada sisi persegi panjang |
| **Limas segitiga (tetrahedron)** | 4 (semua segitiga) | 6 | 4 | 0 | 0 |
| **Limas segiempat** | 5 (1 alas + 4 segitiga) | 8 | 5 | 0 | 2 (pada alas) |
| **Tabung** | 3 (2 lingkaran + 1 selimut) | 2 (lingkaran) | 0 | — | — |
| **Kerucut** | 2 (1 lingkaran + 1 selimut) | 1 (lingkaran) | 1 (puncak) | — | — |
| **Bola** | 1 (lengkung) | 0 | 0 | — | — |

*Prisma segitiga tidak punya diagonal ruang karena semua pasang titik sudut sudah terhubung lewat sisi.

### 3. Ciri Khas Tiap Bangun
- **Kubus**: 6 sisi **persegi yang kongruen** (sama bentuk & ukuran). Semua rusuk sama panjang.
- **Balok**: 6 sisi persegi panjang, **tiga pasang sisi yang sehadap** kongruen. Ada **tiga ukuran rusuk berbeda**: panjang (p), lebar (l), tinggi (t) — masing-masing 4 rusuk.
- **Prisma segi-n**: dua **alas sejajar** berbentuk segi-n + n sisi tegak (persegi panjang jika tegak). Jumlah sisi = n + 2, rusuk = 3n, titik sudut = 2n.
- **Limas segi-n**: satu alas segi-n + n sisi tegak segitiga yang bertemu di **puncak**. Jumlah sisi = n + 1, rusuk = 2n, titik sudut = n + 1.
- **Tabung**: prisma "segi-tak-hingga" → alas dan tutup **lingkaran**, selimut lengkung. Dua **rusuk lingkaran**, tanpa titik sudut.
- **Kerucut**: limas "segi-tak-hingga" → alas **lingkaran**, selimut lengkung, **satu titik puncak**.
- **Bola**: bidang lengkung tertutup, hanya **satu sisi**, tanpa rusuk/titik sudut.

### 4. Rumus Euler (untuk polihedron)
**V − E + F = 2**, dengan
- V = jumlah titik sudut (vertices)
- E = jumlah rusuk (edges)
- F = jumlah sisi (faces)

Contoh cek:
- Kubus: 8 − 12 + 6 = 2 ✓
- Limas segitiga: 4 − 6 + 4 = 2 ✓
- Prisma segitiga: 6 − 9 + 5 = 2 ✓

Tabung, kerucut, bola **tidak masuk** rumus Euler karena bukan polihedron (punya sisi lengkung).

### 5. Diagonal Sisi & Diagonal Ruang pada Kubus/Balok
- **Diagonal sisi**: 2 per sisi × 6 sisi = **12**.
- **Diagonal ruang**: hubungkan titik-titik sudut yang berhadapan menembus bagian dalam. Kubus/balok punya **4 diagonal ruang**.
- **Bidang diagonal** kubus: ada **6** (tiap bidang berbentuk persegi panjang).

### 6. Trik Cepat Menghitung
- **Sisi prisma segi-n** = n + 2; **rusuk** = 3n; **titik sudut** = 2n.
- **Sisi limas segi-n** = n + 1; **rusuk** = 2n; **titik sudut** = n + 1.
- Jika diberi V dan F polihedron → cari E dengan E = V + F − 2.
- Hati-hati membedakan **kerucut (1 titik sudut)** vs **tabung (0 titik sudut)**.

### 7. Kesalahan Umum
- Bilang kubus punya **6 rusuk** (padahal 6 = jumlah sisi, rusuk = 12).
- Bilang tabung punya **titik sudut** (tidak ada, karena rusuknya lengkung).
- Lupa **puncak kerucut** sebagai 1 titik sudut.
- Mengira **diagonal ruang = diagonal sisi** (beda: ruang menembus dalam, sisi di permukaan).
- Mengira **limas segiempat = piramida = tetrahedron** (tetrahedron adalah limas segitiga, 4 sisi; piramida Mesir = limas segiempat, 5 sisi).
- Lupa **bola punya 1 sisi**, sering dijawab 0.

---

## BAGIAN II · 100 SOAL PG (Tingkat Campur)

### 🟢 SEKSI A · 50 Soal Tingkat Kabupaten (No. 1–50)

**1.** Banyak rusuk pada sebuah kubus adalah ...
- A. 12
- B. 8
- C. 6
- D. 24

**Kunci: A**
**Pembahasan:**
- **A** — Benar. Kubus memiliki **12 rusuk** sama panjang (4 di alas, 4 di tutup, 4 tegak). ✅
- **B** — 8 adalah jumlah **titik sudut** kubus, bukan rusuk.
- **C** — 6 itu jumlah **sisi** kubus, tertukar dengan rusuk.
- **D** — 24 = 12 × 2, mungkin menghitung tiap rusuk dua kali.

---

**2.** Banyak sisi pada sebuah kubus adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: B**
**Pembahasan:**
- **A** — 4 adalah jumlah sisi pada **limas segitiga (tetrahedron)**.
- **B** — Benar. Kubus mempunyai **6 sisi** berbentuk persegi yang kongruen (atas, bawah, depan, belakang, kanan, kiri). ✅
- **C** — 8 = jumlah titik sudut kubus, bukan sisi.
- **D** — 12 = jumlah rusuk, bukan sisi.

---

**3.** Banyak titik sudut pada sebuah balok adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: C**
**Pembahasan:**
- **A** — 4 adalah jumlah titik sudut **limas segitiga**.
- **B** — 6 adalah titik sudut **prisma segitiga** (bukan balok).
- **C** — Benar. Balok memiliki **8 titik sudut** (4 di sisi alas + 4 di sisi tutup). ✅
- **D** — 12 = jumlah rusuk balok, bukan titik sudut.

---

**4.** Bangun ruang yang memiliki 1 sisi, 0 rusuk, dan 0 titik sudut adalah ...
- A. Tabung
- B. Kerucut
- C. Limas
- D. Bola

**Kunci: D**
**Pembahasan:**
- **A** — Tabung: 3 sisi, 2 rusuk, 0 titik sudut. Sisi-nya lebih dari satu.
- **B** — Kerucut: 2 sisi, 1 rusuk, 1 titik sudut.
- **C** — Limas selalu punya banyak sisi, rusuk, dan titik sudut.
- **D** — Benar. **Bola** hanya memiliki satu permukaan lengkung tertutup, tanpa rusuk atau titik sudut. ✅

---

**5.** Banyak sisi pada sebuah tabung adalah ...
- A. 2
- B. 3
- C. 4
- D. 6

**Kunci: B**
**Pembahasan:**
- **A** — 2 hanya menghitung alas dan tutup, lupa selimut.
- **B** — Benar. Tabung memiliki **3 sisi**: 1 alas lingkaran, 1 tutup lingkaran, dan 1 selimut lengkung. ✅
- **C** — Salah hitung, tidak ada 4 sisi pada tabung.
- **D** — 6 adalah sisi kubus/balok, bukan tabung.

---

**6.** Bangun ruang dengan 6 sisi berbentuk persegi yang semuanya sama besar disebut ...
- A. Kubus
- B. Balok
- C. Prisma segi-empat
- D. Limas segi-empat

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Kubus** adalah bangun ruang 6 sisi persegi yang semuanya kongruen. ✅
- **B** — Balok juga 6 sisi, tapi berbentuk **persegi panjang** dan tidak semua sama besar.
- **C** — Prisma segi-empat bisa berarti balok atau kubus, jawaban paling spesifik adalah kubus.
- **D** — Limas segi-empat punya 5 sisi (1 alas + 4 segitiga), bukan 6.

---

**7.** Banyak rusuk pada sebuah limas segitiga (tetrahedron) adalah ...
- A. 4
- B. 5
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- **A** — 4 itu jumlah **sisi** dan **titik sudut** limas segitiga.
- **B** — 5 itu jumlah **sisi prisma segitiga**.
- **C** — Benar. Limas segitiga punya **6 rusuk**: 3 di alas segitiga + 3 ke puncak. ✅
- **D** — 8 itu jumlah rusuk **limas segi-empat**.

---

**8.** Bangun ruang yang memiliki 5 sisi, 9 rusuk, dan 6 titik sudut adalah ...
- A. Prisma segitiga
- B. Limas segiempat
- C. Balok
- D. Limas segitiga

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Prisma segitiga**: 2 alas segitiga + 3 sisi tegak = 5 sisi; 3 + 3 + 3 = 9 rusuk; 3 + 3 = 6 titik sudut. ✅
- **B** — Limas segiempat: 5 sisi, **8** rusuk, **5** titik sudut.
- **C** — Balok: 6 sisi, 12 rusuk, 8 titik sudut.
- **D** — Limas segitiga: 4 sisi, 6 rusuk, 4 titik sudut.

---

**9.** Sebuah kerucut memiliki ... titik sudut.
- A. 0
- B. 1
- C. 2
- D. 3

**Kunci: B**
**Pembahasan:**
- **A** — 0 itu untuk **tabung** atau bola.
- **B** — Benar. Kerucut memiliki **1 titik sudut**, yaitu titik puncak di atas. ✅
- **C** — 2 tidak benar; kerucut hanya satu puncak.
- **D** — 3 tidak ada hubungannya dengan kerucut.

---

**10.** Banyak rusuk pada tabung adalah ...
- A. 0
- B. 1
- C. 2
- D. 3

**Kunci: C**
**Pembahasan:**
- **A** — 0 itu untuk **bola**.
- **B** — 1 itu untuk **kerucut** (lingkaran alas).
- **C** — Benar. Tabung memiliki **2 rusuk** berbentuk lingkaran (di alas dan di tutup). ✅
- **D** — 3 tidak benar; selimut bukan rusuk, melainkan sisi.

---

**11.** Banyak sisi pada limas segiempat adalah ...
- A. 4
- B. 8
- C. 6
- D. 5

**Kunci: D**
**Pembahasan:**
- **A** — 4 itu jumlah sisi limas **segitiga**.
- **B** — 8 itu jumlah rusuk limas segiempat, bukan sisi.
- **C** — 6 itu sisi kubus/balok.
- **D** — Benar. Limas segiempat: **1 alas persegi + 4 sisi tegak segitiga = 5 sisi**. ✅

---

**12.** Pernyataan yang benar tentang bola adalah ...
- A. Memiliki 2 sisi
- B. Memiliki 1 rusuk
- C. Tidak memiliki rusuk
- D. Memiliki 1 titik sudut

**Kunci: C**
**Pembahasan:**
- **A** — Salah. Bola hanya **1 sisi** lengkung tertutup.
- **B** — Salah. Bola sama sekali tanpa rusuk.
- **C** — Benar. Bola **tidak memiliki rusuk** karena tidak ada pertemuan antar sisi. ✅
- **D** — Salah. Bola tidak memiliki titik sudut.

---

**13.** Kubus yang panjang rusuknya 5 cm mempunyai sisi berbentuk ...
- A. Lingkaran berdiameter 5 cm
- B. Persegi dengan sisi 5 cm
- C. Segitiga sama sisi 5 cm
- D. Persegi panjang 5 × 10 cm

**Kunci: B**
**Pembahasan:**
- **A** — Lingkaran ada pada tabung/kerucut/bola, bukan kubus.
- **B** — Benar. Sisi kubus adalah **persegi** dengan panjang sisi sama dengan panjang rusuk, yaitu 5 cm. ✅
- **C** — Segitiga adalah sisi pada limas/prisma segitiga, bukan kubus.
- **D** — Persegi panjang dengan sisi tidak sama itu sisi balok, bukan kubus.

---

**14.** Jika balok mempunyai panjang 8 cm, lebar 5 cm, dan tinggi 3 cm, maka banyak rusuk yang panjangnya 5 cm adalah ...
- A. 2
- B. 3
- C. 4
- D. 6

**Kunci: C**
**Pembahasan:**
- **A** — 2 salah, harus 4 rusuk sejajar.
- **B** — 3 salah; balok punya 12 rusuk, dibagi 3 kelompok @ 4 rusuk.
- **C** — Benar. Balok memiliki **4 rusuk panjang, 4 rusuk lebar, dan 4 rusuk tinggi**. Rusuk yang panjangnya = lebar (5 cm) ada **4**. ✅
- **D** — 6 keliru, mungkin menghitung setengah dari 12.

---

**15.** Banyak titik sudut pada bangun ruang berikut yang paling banyak adalah ...
- A. Kerucut
- B. Limas segitiga
- C. Tabung
- D. Limas segiempat

**Kunci: D**
**Pembahasan:**
- **A** — Kerucut: 1 titik sudut.
- **B** — Limas segitiga: 4 titik sudut.
- **C** — Tabung: 0 titik sudut.
- **D** — Benar. **Limas segiempat**: 4 di alas + 1 puncak = **5 titik sudut** (paling banyak di antara opsi). ✅

---

**16.** Banyak diagonal ruang pada sebuah kubus adalah ...
- A. 2
- B. 12
- C. 6
- D. 4

**Kunci: D**
**Pembahasan:**
- **A** — 2 terlalu sedikit; kubus punya 4 pasangan titik sudut berseberangan.
- **B** — 12 itu jumlah **diagonal sisi** kubus, bukan diagonal ruang.
- **C** — 6 itu jumlah **bidang diagonal**, bukan diagonal ruang.
- **D** — Benar. Kubus memiliki **4 diagonal ruang** yang menghubungkan titik sudut yang berhadapan menembus pusat. ✅

---

**17.** Banyak diagonal sisi pada sebuah kubus adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: D**
**Pembahasan:**
- **A** — 4 itu jumlah diagonal ruang, bukan diagonal sisi.
- **B** — 6 itu jumlah sisi kubus.
- **C** — 8 itu jumlah titik sudut.
- **D** — Benar. Tiap sisi persegi punya **2 diagonal**, kubus punya 6 sisi, jadi 6 × 2 = **12 diagonal sisi**. ✅

---

**18.** Bangun ruang dengan 4 sisi yang semuanya berbentuk segitiga disebut ...
- A. Limas segitiga (tetrahedron)
- B. Prisma segitiga
- C. Limas segiempat
- D. Oktahedron

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Limas segitiga (tetrahedron)** punya 4 sisi, semuanya segitiga. ✅
- **B** — Prisma segitiga: 5 sisi (2 segitiga + 3 persegi panjang), bukan semua segitiga.
- **C** — Limas segiempat: 5 sisi (1 persegi alas + 4 segitiga), bukan semua segitiga.
- **D** — Oktahedron memiliki 8 sisi segitiga, bukan 4.

---

**19.** Berikut yang **bukan** ciri-ciri tabung adalah ...
- A. Memiliki 2 sisi berbentuk lingkaran
- B. Memiliki 1 sisi selimut lengkung
- C. Memiliki 2 rusuk lengkung
- D. Memiliki 2 titik sudut

**Kunci: D**
**Pembahasan:**
- **A** — Benar untuk tabung: alas dan tutup berbentuk lingkaran sama besar.
- **B** — Benar: selimut tabung adalah satu sisi melengkung.
- **C** — Benar: dua rusuk berupa keliling lingkaran alas dan tutup.
- **D** — **Bukan ciri tabung**, karena tabung **tidak memiliki titik sudut**. ✅

---

**20.** Banyak rusuk pada limas segiempat adalah ...
- A. 4
- B. 6
- C. 8
- D. 10

**Kunci: C**
**Pembahasan:**
- **A** — 4 itu rusuk alas saja, lupa 4 rusuk tegak.
- **B** — 6 itu rusuk limas **segitiga**.
- **C** — Benar. Limas segiempat: **4 rusuk alas + 4 rusuk tegak = 8 rusuk**. ✅
- **D** — 10 keliru hitung; tidak ada bangun limas segiempat dengan 10 rusuk.

---

**21.** Sebuah bangun ruang memiliki 6 sisi, 12 rusuk, dan 8 titik sudut dengan sisi berbentuk persegi panjang yang tidak semuanya sama. Bangun tersebut adalah ...
- A. Balok
- B. Kubus
- C. Prisma segitiga
- D. Limas segiempat

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Balok** punya 6 sisi persegi panjang yang **tidak semuanya sama** (3 pasang berbeda). ✅
- **B** — Kubus juga 6 sisi, 12 rusuk, 8 titik sudut, **tapi semua sisinya persegi sama besar**.
- **C** — Prisma segitiga punya 5 sisi, bukan 6.
- **D** — Limas segiempat punya 5 sisi, bukan 6.

---

**22.** Berapa banyak sisi yang berbentuk segitiga pada prisma segitiga?
- A. 0
- B. 2
- C. 3
- D. 5

**Kunci: B**
**Pembahasan:**
- **A** — Salah; jelas ada sisi segitiga.
- **B** — Benar. Prisma segitiga punya **2 sisi segitiga** (alas dan tutup) + 3 sisi persegi panjang. ✅
- **C** — 3 itu jumlah sisi persegi panjang, bukan segitiga.
- **D** — 5 itu total seluruh sisi prisma segitiga.

---

**23.** Sebuah kubus mempunyai panjang rusuk 7 cm. Jumlah panjang seluruh rusuknya adalah ...
- A. 28 cm
- B. 49 cm
- C. 84 cm
- D. 168 cm

**Kunci: C**
**Pembahasan:**
- **A** — 28 = 4 × 7, salah; itu menghitung 4 rusuk saja.
- **B** — 49 = 7 × 7, itu luas satu sisi, bukan jumlah rusuk.
- **C** — Benar. Kubus punya **12 rusuk**, jumlah panjangnya = 12 × 7 = **84 cm**. ✅
- **D** — 168 = 24 × 7, salah menghitung 24 rusuk (kubus hanya 12).

---

**24.** Bangun ruang yang **tidak** termasuk polihedron adalah ...
- A. Kubus
- B. Limas segitiga
- C. Prisma segitiga
- D. Bola

**Kunci: D**
**Pembahasan:**
- **A** — Kubus polihedron (semua sisi datar).
- **B** — Limas segitiga polihedron.
- **C** — Prisma segitiga polihedron.
- **D** — Benar. **Bola** punya sisi lengkung, sehingga **bukan polihedron** (begitu juga tabung dan kerucut). ✅

---

**25.** Banyak rusuk pada prisma segilima adalah ...
- A. 10
- B. 12
- C. 15
- D. 20

**Kunci: C**
**Pembahasan:**
Rumus: rusuk prisma segi-n = 3n. Untuk n = 5: 3 × 5 = 15.
- **A** — 10 = 2 × 5, hanya menghitung rusuk alas + tutup, lupa rusuk tegak.
- **B** — 12 itu rusuk kubus/balok.
- **C** — Benar. Prisma segilima: 5 rusuk alas + 5 rusuk tutup + 5 rusuk tegak = **15 rusuk**. ✅
- **D** — 20 = 4 × 5, keliru hitung.

---

**26.** Banyak titik sudut pada prisma segienam adalah ...
- A. 6
- B. 8
- C. 10
- D. 12

**Kunci: D**
**Pembahasan:**
Rumus: titik sudut prisma segi-n = 2n. Untuk n = 6: 2 × 6 = 12.
- **A** — 6 itu jumlah titik sudut alas saja, lupa tutup.
- **B** — 8 itu titik sudut kubus/balok.
- **C** — 10 itu titik sudut prisma segi-lima.
- **D** — Benar. Prisma segienam: 6 di alas + 6 di tutup = **12 titik sudut**. ✅

---

**27.** Banyak sisi pada limas segilima adalah ...
- A. 5
- B. 10
- C. 7
- D. 6

**Kunci: D**
**Pembahasan:**
Rumus: sisi limas segi-n = n + 1. Untuk n = 5: 5 + 1 = 6.
- **A** — 5 itu jumlah sisi tegak, lupa alas.
- **B** — 10 itu jumlah rusuk limas segilima, bukan sisi.
- **C** — 7 keliru hitung.
- **D** — Benar. Limas segilima: 1 alas segilima + 5 sisi segitiga tegak = **6 sisi**. ✅

---

**28.** Bangun ruang dengan 2 sisi (1 lingkaran + 1 selimut), 1 rusuk, dan 1 titik sudut adalah ...
- A. Kerucut
- B. Tabung
- C. Bola
- D. Limas

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Kerucut**: alas lingkaran + selimut lengkung = 2 sisi; rusuknya 1 (lingkaran alas); titik puncak = 1 titik sudut. ✅
- **B** — Tabung: 3 sisi, 2 rusuk, 0 titik sudut.
- **C** — Bola: 1 sisi, 0 rusuk, 0 titik sudut.
- **D** — Limas tidak punya sisi lengkung.

---

**29.** Berapa banyak rusuk yang sejajar dengan rusuk AB pada balok ABCD.EFGH?
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: C**
**Pembahasan:**
- **A** — 1 salah; sejajar AB ada lebih dari satu rusuk.
- **B** — 2 lupa salah satu rusuk sejajar.
- **C** — Benar. Sejajar AB ada **DC, EF, dan HG**, jumlahnya **3 rusuk**. ✅
- **D** — 4 keliru; AB sendiri tidak dihitung sebagai sejajar dengan dirinya.

---

**30.** Rumus Euler untuk polihedron tertutup adalah ...
- A. V + E + F = 2
- B. V − E + F = 2
- C. V + E − F = 2
- D. V × E × F = 2

**Kunci: B**
**Pembahasan:**
- **A** — Salah tanda; bukan penjumlahan semua.
- **B** — Benar. Rumus Euler: **V − E + F = 2** (titik sudut − rusuk + sisi). ✅
- **C** — Salah tanda; F harus ditambahkan, bukan dikurangi.
- **D** — Bukan rumus apa pun.

---

**31.** Pada kubus, jumlah sisi (F), rusuk (E), dan titik sudut (V) berturut-turut adalah ...
- A. F = 6, E = 8, V = 12
- B. F = 6, E = 12, V = 8
- C. F = 8, E = 6, V = 12
- D. F = 12, E = 6, V = 8

**Kunci: B**
**Pembahasan:**
- **A** — Tertukar antara E dan V.
- **B** — Benar. **F = 6, E = 12, V = 8** untuk kubus. ✅
- **C** — Posisi semua kacau.
- **D** — Posisi semua kacau.

---

**32.** Sebuah polihedron memiliki 12 titik sudut dan 18 rusuk. Banyak sisinya adalah ...
- A. 6
- B. 7
- C. 8
- D. 9

**Kunci: C**
**Pembahasan:**
Pakai Euler: V − E + F = 2 → 12 − 18 + F = 2 → F = 8.
- **A** — 6 lupa menambahkan 2 di rumus.
- **B** — 7 hasil dari salah hitung tanda.
- **C** — Benar. F = 2 − 12 + 18 = **8**. ✅
- **D** — 9 keliru penjumlahan.

---

**33.** Banyak rusuk pada limas segi-7 adalah ...
- A. 7
- B. 8
- C. 14
- D. 21

**Kunci: C**
**Pembahasan:**
Rumus: rusuk limas segi-n = 2n. Untuk n = 7: 2 × 7 = 14.
- **A** — 7 itu jumlah rusuk alas saja.
- **B** — 8 itu titik sudut limas segi-7 (n + 1 = 8).
- **C** — Benar. 7 rusuk alas + 7 rusuk tegak = **14 rusuk**. ✅
- **D** — 21 = 3 × 7 itu rumus rusuk **prisma** segi-7, bukan limas.

---

**34.** Pernyataan berikut yang **salah** tentang kubus adalah ...
- A. Mempunyai 6 sisi berbentuk persegi
- B. Mempunyai 12 rusuk sama panjang
- C. Mempunyai 8 titik sudut
- D. Mempunyai 4 diagonal sisi

**Kunci: D**
**Pembahasan:**
- **A** — Benar; semua sisi kubus persegi.
- **B** — Benar; kubus rusuknya sama panjang.
- **C** — Benar; titik sudut kubus 8.
- **D** — **Salah**. Diagonal sisi kubus berjumlah **12**, bukan 4. (Yang 4 adalah diagonal ruang.) ✅

---

**35.** Banyak diagonal pada satu sisi kubus berbentuk persegi adalah ...
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: B**
**Pembahasan:**
- **A** — 1 keliru; persegi punya 2 diagonal.
- **B** — Benar. Tiap persegi (sisi kubus) memiliki **2 diagonal** yang berpotongan di tengah. ✅
- **C** — 3 tidak ada hubungannya.
- **D** — 4 itu jumlah sisi persegi, bukan diagonal.

---

**36.** Banyak sisi balok yang berbentuk **kongruen** dengan sisi alas adalah ...
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: A**
**Pembahasan:**
- **A** — Benar. Sisi alas balok kongruen dengan **1 sisi**, yaitu **sisi tutup** (di atasnya). ✅
- **B** — 2 keliru; tidak ada 2 sisi kongruen dengan alas selain dirinya.
- **C** — 3 keliru.
- **D** — 4 itu jumlah sisi tegak balok.

---

**37.** Banyak rusuk tegak pada prisma segitiga adalah ...
- A. 2
- B. 3
- C. 4
- D. 6

**Kunci: B**
**Pembahasan:**
- **A** — 2 keliru; sisi tegak prisma segitiga ada 3.
- **B** — Benar. Prisma segitiga punya **3 rusuk tegak** (yang menghubungkan tiap titik sudut alas dengan tutup). ✅
- **C** — 4 keliru.
- **D** — 6 itu total rusuk alas + tutup (3 + 3), bukan rusuk tegak.

---

**38.** Pernyataan berikut yang benar tentang kerucut adalah ...
- A. Memiliki 2 rusuk
- B. Memiliki 2 titik sudut
- C. Memiliki 1 sisi alas berbentuk lingkaran
- D. Memiliki sisi alas berbentuk persegi

**Kunci: C**
**Pembahasan:**
- **A** — Salah; kerucut **1 rusuk** (lingkaran alas).
- **B** — Salah; kerucut **1 titik sudut** (puncak).
- **C** — Benar. Alas kerucut berbentuk **lingkaran**. ✅
- **D** — Salah; alas kerucut bukan persegi.

---

**39.** Banyak sisi pada limas segi-10 adalah ...
- A. 10
- B. 11
- C. 12
- D. 20

**Kunci: B**
**Pembahasan:**
Rumus: sisi limas segi-n = n + 1. Untuk n = 10: 11.
- **A** — 10 itu jumlah sisi tegak saja, lupa alas.
- **B** — Benar. 10 sisi segitiga + 1 alas segi-10 = **11 sisi**. ✅
- **C** — 12 keliru hitung.
- **D** — 20 itu rusuk limas segi-10 (2n).

---

**40.** Pada balok ABCD.EFGH, rusuk yang berhimpit dengan titik sudut B adalah ...
- A. AB, BC, BF
- B. AB, BC, BD
- C. AB, BF, BG
- D. BC, BD, BH

**Kunci: A**
**Pembahasan:**
- **A** — Benar. Tiap titik sudut balok bertemu **3 rusuk**. Di titik B bertemu **AB, BC, dan BF**. ✅
- **B** — BD adalah **diagonal sisi**, bukan rusuk.
- **C** — BG adalah **diagonal ruang**, bukan rusuk.
- **D** — BD diagonal sisi, BH diagonal ruang.

---

**41.** Banyak diagonal ruang pada balok adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: A**
**Pembahasan:**
- **A** — Benar. Balok memiliki **4 diagonal ruang**: AG, BH, CE, DF (jika diberi nama ABCD.EFGH). ✅
- **B** — 6 itu jumlah bidang diagonal, bukan diagonal ruang.
- **C** — 8 itu jumlah titik sudut, bukan diagonal ruang.
- **D** — 12 itu jumlah rusuk balok.

---

**42.** Bangun ruang yang memenuhi rumus Euler V − E + F = 2 dengan V = 5, E = 8 adalah ...
- A. Kubus
- B. Limas segiempat
- C. Prisma segitiga
- D. Limas segitiga

**Kunci: B**
**Pembahasan:**
F = 2 + E − V = 2 + 8 − 5 = 5. Bangun dengan 5 titik sudut, 8 rusuk, 5 sisi → **limas segiempat**.
- **A** — Kubus: V=8, E=12, F=6, tidak cocok.
- **B** — Benar. Limas segiempat: V=5, E=8, F=5. ✅
- **C** — Prisma segitiga: V=6, E=9, F=5, V dan E beda.
- **D** — Limas segitiga: V=4, E=6, F=4, tidak cocok.

---

**43.** Sebuah bangun ruang memiliki 6 titik sudut. Jika bangun tersebut adalah prisma, maka alasnya berbentuk ...
- A. Segitiga
- B. Segiempat
- C. Segilima
- D. Segienam

**Kunci: A**
**Pembahasan:**
Prisma segi-n punya 2n titik sudut. 2n = 6 → n = 3.
- **A** — Benar. Alas prisma adalah **segitiga** (n = 3). ✅
- **B** — Segiempat berarti 8 titik sudut.
- **C** — Segilima berarti 10 titik sudut.
- **D** — Segienam berarti 12 titik sudut.

---

**44.** Banyak rusuk pada bangun ruang berikut yang **paling banyak** adalah ...
- A. Limas segiempat
- B. Prisma segitiga
- C. Kubus
- D. Limas segitiga

**Kunci: C**
**Pembahasan:**
- **A** — Limas segiempat: 8 rusuk.
- **B** — Prisma segitiga: 9 rusuk.
- **C** — Benar. **Kubus: 12 rusuk** — paling banyak. ✅
- **D** — Limas segitiga: 6 rusuk.

---

**45.** Sisi yang **tegak lurus** dengan sisi alas pada balok berjumlah ...
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: D**
**Pembahasan:**
- **A** — 1 keliru.
- **B** — 2 hanya menghitung depan-belakang.
- **C** — 3 keliru.
- **D** — Benar. Balok memiliki **4 sisi tegak** (depan, belakang, kiri, kanan) yang tegak lurus dengan alas. ✅

---

**46.** Pasangan sisi balok yang saling **berhadapan dan sejajar** ada sebanyak ...
- A. 1 pasang
- B. 2 pasang
- C. 3 pasang
- D. 6 pasang

**Kunci: C**
**Pembahasan:**
- **A** — 1 pasang hanya alas–tutup.
- **B** — 2 pasang melupakan satu pasang sisi tegak.
- **C** — Benar. Balok punya **3 pasang sisi berhadapan**: alas–tutup, depan–belakang, kiri–kanan. ✅
- **D** — 6 pasang artinya semua sisi sebagai pasangan dengan dirinya, tidak masuk akal.

---

**47.** Banyak titik sudut pada limas segi-8 adalah ...
- A. 8
- B. 9
- C. 16
- D. 24

**Kunci: B**
**Pembahasan:**
Rumus: titik sudut limas segi-n = n + 1. Untuk n = 8: 9.
- **A** — 8 lupa puncak.
- **B** — Benar. 8 titik sudut alas + 1 puncak = **9 titik sudut**. ✅
- **C** — 16 itu titik sudut prisma segi-8 (2n).
- **D** — 24 = 3 × 8, tidak sesuai rumus.

---

**48.** Sebuah balok memiliki rusuk panjang 10 cm sebanyak 4 buah, rusuk lebar 6 cm sebanyak 4 buah, dan rusuk tinggi 4 cm sebanyak 4 buah. Total panjang seluruh rusuknya adalah ...
- A. 20 cm
- B. 40 cm
- C. 60 cm
- D. 80 cm

**Kunci: D**
**Pembahasan:**
Total = 4(10) + 4(6) + 4(4) = 40 + 24 + 16 = 80 cm.
- **A** — 20 = 10 + 6 + 4, hanya menjumlahkan satu set rusuk.
- **B** — 40 = 4 × 10, hanya rusuk panjang.
- **C** — 60 = 40 + 16 + 4 (salah hitung), atau 6 × 10.
- **D** — Benar. **80 cm** total rusuk. ✅

---

**49.** Bangun yang **bukan** prisma adalah ...
- A. Kubus
- B. Balok
- C. Tabung
- D. Kerucut

**Kunci: D**
**Pembahasan:**
- **A** — Kubus = prisma segiempat sama sisi.
- **B** — Balok = prisma segiempat.
- **C** — Tabung sering disebut "prisma" dengan alas tak hingga (lingkaran).
- **D** — Benar. **Kerucut** termasuk **limas** (punya puncak), bukan prisma. ✅

---

**50.** Banyak sisi pada bola adalah ...
- A. 0
- B. 1
- C. 2
- D. tak hingga

**Kunci: B**
**Pembahasan:**
- **A** — 0 salah; bola tetap punya permukaan.
- **B** — Benar. Bola memiliki **1 sisi** lengkung tertutup. ✅
- **C** — 2 salah; tidak ada pemisahan alas dan tutup.
- **D** — Salah; sisi tetap satu kesatuan utuh.

---

### 🟡 SEKSI B · 30 Soal Tingkat Provinsi (No. 51–80)

**51.** Sebuah polihedron memiliki 20 sisi dan 30 titik sudut. Banyak rusuknya adalah ...
- A. 30
- B. 40
- C. 48
- D. 60

**Kunci: C**
**Pembahasan:**
Euler: V − E + F = 2 → 30 − E + 20 = 2 → E = 48.
- **A** — 30 = V saja, salah pakai rumus.
- **B** — 40 mendekat tapi keliru aritmetik.
- **C** — Benar. E = V + F − 2 = 30 + 20 − 2 = **48**. ✅
- **D** — 60 keliru kelipatan.

---

**52.** Sebuah prisma memiliki 30 rusuk. Bentuk alasnya adalah segi-...
- A. 6
- B. 8
- C. 10
- D. 12

**Kunci: C**
**Pembahasan:**
Prisma segi-n: rusuk = 3n. 3n = 30 → n = 10.
- **A** — n = 6 berarti rusuk 18.
- **B** — n = 8 berarti rusuk 24.
- **C** — Benar. n = **10** → segi-10. ✅
- **D** — n = 12 berarti rusuk 36.

---

**53.** Sebuah limas memiliki 16 rusuk. Bentuk alasnya adalah segi-...
- A. 4
- B. 6
- C. 8
- D. 16

**Kunci: C**
**Pembahasan:**
Limas segi-n: rusuk = 2n. 2n = 16 → n = 8.
- **A** — n = 4 berarti rusuk 8.
- **B** — n = 6 berarti rusuk 12.
- **C** — Benar. n = **8** → limas segi-8 (oktagonal). ✅
- **D** — n = 16 berarti rusuk 32.

---

**54.** Pada balok ABCD.EFGH, garis AC merupakan ...
- A. Rusuk
- B. Diagonal sisi
- C. Diagonal ruang
- D. Bidang diagonal

**Kunci: B**
**Pembahasan:**
A dan C terletak pada sisi yang sama (ABCD = alas), tidak bersebelahan → diagonal sisi.
- **A** — AC bukan rusuk; rusuk pada alas adalah AB, BC, CD, DA.
- **B** — Benar. AC adalah **diagonal sisi** alas ABCD. ✅
- **C** — Diagonal ruang menembus dalam balok (mis. AG).
- **D** — Bidang diagonal adalah bidang, bukan garis.

---

**55.** Pada kubus ABCD.EFGH, garis AG merupakan ...
- A. Rusuk
- B. Diagonal sisi
- C. Diagonal ruang
- D. Tinggi kubus

**Kunci: C**
**Pembahasan:**
A di alas dan G di tutup yang berseberangan → diagonal ruang.
- **A** — AG bukan rusuk.
- **B** — A dan G tidak satu sisi.
- **C** — Benar. AG adalah **diagonal ruang** karena menghubungkan dua titik sudut yang berseberangan menembus dalam. ✅
- **D** — Tinggi kubus adalah rusuk tegak (mis. AE), bukan AG.

---

**56.** Banyak bidang diagonal pada kubus adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: B**
**Pembahasan:**
- **A** — 4 itu diagonal ruang, bukan bidang diagonal.
- **B** — Benar. Kubus memiliki **6 bidang diagonal** (semua berbentuk persegi panjang). ✅
- **C** — 8 itu titik sudut.
- **D** — 12 itu rusuk atau diagonal sisi.

---

**57.** Banyak titik sudut pada limas segi-12 adalah ...
- A. 12
- B. 13
- C. 24
- D. 25

**Kunci: B**
**Pembahasan:**
Limas segi-n: titik sudut = n + 1. n = 12 → 13.
- **A** — 12 lupa puncak.
- **B** — Benar. 12 titik alas + 1 puncak = **13**. ✅
- **C** — 24 itu titik sudut prisma segi-12 (2n).
- **D** — 25 keliru.

---

**58.** Sebuah polihedron memiliki sisi berupa 8 segitiga dan 6 persegi. Banyak rusuk total bangun tersebut adalah ... (tip: jumlah rusuk = setengah dari jumlah seluruh sisi-sisi dijumlahkan)
- A. 12
- B. 18
- C. 24
- D. 30

**Kunci: C**
**Pembahasan:**
Total tepi-sisi = 8(3) + 6(4) = 24 + 24 = 48. Tiap rusuk dibagi 2 sisi → rusuk = 48 ÷ 2 = 24.
- **A** — 12 keliru, tidak menggunakan rumus.
- **B** — 18 hasil pembagian salah.
- **C** — Benar. **24 rusuk**. ✅
- **D** — 30 hanya menjumlahkan sebelum dibagi 2.

---

**59.** Sebuah kubus dipotong tepat di tengah secara horizontal, menghasilkan 2 balok identik. Banyak sisi tambahan yang muncul akibat pemotongan ini adalah ...
- A. 1
- B. 2
- C. 4
- D. 6

**Kunci: B**
**Pembahasan:**
Pemotongan menciptakan 2 permukaan baru (atas balok bawah & bawah balok atas).
- **A** — 1 hanya menghitung satu sisi potongan.
- **B** — Benar. Tiap pemotongan satu kali menambah **2 sisi baru** (satu di setiap potongan). ✅
- **C** — 4 keliru hitung.
- **D** — 6 itu jumlah sisi kubus utuh.

---

**60.** Sebuah balok berukuran 8 × 6 × 4 cm. Banyak rusuk yang panjangnya **bukan** 4 cm adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: C**
**Pembahasan:**
Total rusuk 12; rusuk 4 cm ada 4. Sisanya 12 − 4 = 8 rusuk (4 rusuk 8 cm + 4 rusuk 6 cm).
- **A** — 4 itu yang panjangnya 4 cm, bukan "bukan 4 cm".
- **B** — 6 keliru.
- **C** — Benar. 4 + 4 = **8 rusuk** bukan 4 cm. ✅
- **D** — 12 itu total rusuk semuanya.

---

**61.** Pernyataan yang **benar** mengenai limas dan prisma adalah ...
- A. Limas memiliki dua alas
- B. Prisma memiliki satu puncak
- C. Limas memiliki sisi tegak berbentuk segitiga
- D. Prisma memiliki sisi tegak berbentuk segitiga

**Kunci: C**
**Pembahasan:**
- **A** — Salah; limas hanya 1 alas, prisma yang 2.
- **B** — Salah; puncak ciri **limas**, prisma tidak punya.
- **C** — Benar. Sisi tegak **limas** selalu berbentuk **segitiga** karena bertemu di puncak. ✅
- **D** — Salah; sisi tegak prisma tegak berupa persegi panjang.

---

**62.** Sebuah bangun memiliki F = 7, V = 7. Banyak rusuk (E) berdasarkan rumus Euler adalah ...
- A. 10
- B. 12
- C. 14
- D. 16

**Kunci: B**
**Pembahasan:**
E = V + F − 2 = 7 + 7 − 2 = 12.
- **A** — 10 salah aritmetik.
- **B** — Benar. **12 rusuk** (cocok dengan limas segi-6: V=7, E=12, F=7). ✅
- **C** — 14 = V + F.
- **D** — 16 keliru penjumlahan.

---

**63.** Kubus dengan rusuk 6 cm dipotong oleh sebuah bidang yang melewati 3 titik sudut sehingga membentuk segitiga sama sisi. Sisi segitiga tersebut adalah ...
- A. 6 cm (rusuk)
- B. 6√2 cm (diagonal sisi)
- C. 6√3 cm (diagonal ruang)
- D. 12 cm

**Kunci: B**
**Pembahasan:**
Bidang yang memotong 3 titik sudut yang saling berdekatan (mis. B, D, E pada ABCD.EFGH) membentuk segitiga sama sisi dengan tiap sisi = **diagonal sisi kubus** = sisi × √2 = 6√2 cm.
- **A** — Sisi segitiga lebih panjang dari rusuk.
- **B** — Benar. **6√2 cm** (diagonal sisi). ✅
- **C** — 6√3 cm itu diagonal ruang, bukan sisi segitiga ini.
- **D** — 12 cm sembarangan.

---

**64.** Limas segiempat ABCD.T memiliki alas persegi. Banyak rusuk yang sama panjang (tegak) adalah ...
- A. 0
- B. 2
- C. 4
- D. 5

**Kunci: C**
**Pembahasan:**
Rusuk tegak (TA, TB, TC, TD) pada limas segiempat **beraturan** sama panjang, jumlahnya 4.
- **A** — 0 salah; semua rusuk tegak identik panjang.
- **B** — 2 lupa dua rusuk tegak lain.
- **C** — Benar. **4 rusuk tegak** sama panjang. ✅
- **D** — 5 keliru, total rusuk 8 (4 alas + 4 tegak).

---

**65.** Pada prisma segi-6, banyak sisi berbentuk persegi panjang adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: B**
**Pembahasan:**
Sisi tegak prisma segi-n = n. n = 6 → 6 sisi persegi panjang.
- **A** — 4 itu sisi balok yang tegak, bukan prisma segi-6.
- **B** — Benar. Prisma segi-6 punya **6 sisi tegak persegi panjang** + 2 alas segi-6. ✅
- **C** — 8 keliru hitung.
- **D** — 12 keliru.

---

**66.** Jika sebuah balok memiliki diagonal ruang d, panjang p, lebar l, dan tinggi t, maka rumus diagonal ruangnya adalah ...
- A. d = p + l + t
- B. d = √(p² + l²)
- C. d = √(p² + l² + t²)
- D. d = √(p² − l² − t²)

**Kunci: C**
**Pembahasan:**
- **A** — Bukan rumus jarak.
- **B** — Itu rumus diagonal sisi alas, bukan ruang.
- **C** — Benar. Diagonal ruang balok = **√(p² + l² + t²)**, hasil dari Phytagoras dua kali. ✅
- **D** — Tanda minus tidak benar.

---

**67.** Diagonal ruang sebuah kubus berusuk 4 cm adalah ...
- A. 4 cm
- B. 4√2 cm
- C. 4√3 cm
- D. 12 cm

**Kunci: C**
**Pembahasan:**
Diagonal ruang kubus = s√3. s = 4 → 4√3 cm.
- **A** — 4 itu rusuk.
- **B** — 4√2 itu diagonal sisi.
- **C** — Benar. **4√3 cm** ≈ 6,93 cm. ✅
- **D** — 12 = 3 × 4, salah konsep.

---

**68.** Sebuah polihedron beraturan dengan 12 sisi pentagon (segi lima), 20 titik sudut, dan 30 rusuk dikenal sebagai ...
- A. Dodekahedron beraturan
- B. Ikosahedron beraturan
- C. Oktahedron beraturan
- D. Heksahedron beraturan

**Kunci: A**
**Pembahasan:**
- **A** — Benar. **Dodekahedron** = polihedron beraturan dengan 12 sisi pentagon. ✅
- **B** — Ikosahedron: 20 sisi segitiga.
- **C** — Oktahedron: 8 sisi segitiga.
- **D** — Heksahedron = kubus (6 sisi persegi).

---

**69.** Banyak diagonal sisi pada **balok** adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: D**
**Pembahasan:**
Sama seperti kubus: tiap sisi persegi panjang punya 2 diagonal, total 6 × 2 = 12.
- **A** — 4 itu diagonal ruang.
- **B** — 6 itu jumlah sisi.
- **C** — 8 itu titik sudut.
- **D** — Benar. **12 diagonal sisi** pada balok. ✅

---

**70.** Sebuah kubus memiliki jumlah sisi, rusuk, dan titik sudut = 6 + 12 + 8 = 26. Untuk limas segiempat, jumlah ketiganya adalah ...
- A. 14
- B. 16
- C. 18
- D. 20

**Kunci: C**
**Pembahasan:**
Limas segiempat: 5 sisi + 8 rusuk + 5 titik sudut = 18.
- **A** — 14 keliru hitung.
- **B** — 16 keliru.
- **C** — Benar. 5 + 8 + 5 = **18**. ✅
- **D** — 20 keliru.

---

**71.** Bangun ruang berikut yang merupakan **polihedron beraturan** (semua sisi dan titik sudut identik) adalah ...
- A. Balok
- B. Kubus
- C. Prisma segitiga
- D. Limas segiempat

**Kunci: B**
**Pembahasan:**
Polihedron beraturan (regular polyhedron / Platonic solid): kubus, tetrahedron, oktahedron, dodekahedron, ikosahedron.
- **A** — Balok punya sisi berbeda ukuran.
- **B** — Benar. **Kubus** = heksahedron beraturan; semua sisi & titik identik. ✅
- **C** — Prisma segitiga: sisi segitiga ≠ persegi panjang.
- **D** — Limas segiempat: alas ≠ sisi tegak.

---

**72.** Sebuah benda berbentuk gabungan tabung dan kerucut (mirip cone es krim). Banyak titik sudut total benda tersebut adalah ...
- A. 0
- B. 1
- C. 2
- D. 3

**Kunci: B**
**Pembahasan:**
Tabung 0 titik sudut + kerucut 1 puncak = 1.
- **A** — Lupa puncak kerucut.
- **B** — Benar. **1 titik sudut** (puncak kerucut di dasar es krim). ✅
- **C** — Salah konsep; lingkaran pertemuan bukan titik sudut.
- **D** — 3 sembarangan.

---

**73.** Sebuah prisma segi-n memiliki 15 rusuk. Banyak titik sudut bangun tersebut adalah ...
- A. 8
- B. 10
- C. 12
- D. 16

**Kunci: B**
**Pembahasan:**
3n = 15 → n = 5. Titik sudut = 2n = 10.
- **A** — 8 cocok dengan kubus, bukan prisma segi-5.
- **B** — Benar. 2 × 5 = **10 titik sudut**. ✅
- **C** — 12 untuk prisma segi-6 (rusuk 18).
- **D** — 16 keliru.

---

**74.** Pernyataan yang **salah** tentang prisma segitiga adalah ...
- A. Memiliki 2 sisi berbentuk segitiga
- B. Memiliki 3 sisi berbentuk persegi panjang
- C. Memiliki 9 rusuk
- D. Memiliki 5 titik sudut

**Kunci: D**
**Pembahasan:**
- **A** — Benar (alas dan tutup).
- **B** — Benar (3 sisi tegak).
- **C** — Benar (3 alas + 3 tutup + 3 tegak).
- **D** — **Salah**. Prisma segitiga punya **6 titik sudut**, bukan 5. ✅

---

**75.** Sebuah limas segitiga (tetrahedron) beraturan memiliki ... rusuk yang sama panjang.
- A. 3
- B. 4
- C. 6
- D. 9

**Kunci: C**
**Pembahasan:**
- **A** — 3 lupa 3 rusuk tegak.
- **B** — 4 keliru, total rusuk 6.
- **C** — Benar. Tetrahedron beraturan semua **6 rusuk** sama panjang. ✅
- **D** — 9 keliru.

---

**76.** Sebuah jaring-jaring kubus terdiri atas ... persegi.
- A. 4
- B. 5
- C. 6
- D. 8

**Kunci: C**
**Pembahasan:**
- **A** — 4 keliru, kubus 6 sisi.
- **B** — 5 lupa satu sisi.
- **C** — Benar. Jaring-jaring kubus terdiri dari **6 persegi** sama besar. ✅
- **D** — 8 keliru, mungkin dengan tutup ekstra.

---

**77.** Sebuah limas segitiga memiliki alas segitiga dengan panjang 3 rusuk. Selain itu ada 3 rusuk tegak. Total rusuk = 6. Jika dipilih satu titik sudut puncak, banyak rusuk yang bertemu di titik itu adalah ...
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: C**
**Pembahasan:**
Di puncak limas segitiga bertemu 3 rusuk tegak (T-A, T-B, T-C).
- **A** — 1 keliru.
- **B** — 2 lupa satu rusuk.
- **C** — Benar. **3 rusuk** bertemu di puncak. ✅
- **D** — 4 keliru, hanya 3 rusuk tegak.

---

**78.** Sebuah polihedron memiliki F = 12 dan V = 20. Banyak rusuknya adalah ...
- A. 24
- B. 30
- C. 32
- D. 60

**Kunci: B**
**Pembahasan:**
E = V + F − 2 = 20 + 12 − 2 = 30.
- **A** — 24 keliru aritmetik.
- **B** — Benar. **30 rusuk** (cocok dengan dodekahedron). ✅
- **C** — 32 = V + F, lupa kurangi 2.
- **D** — 60 keliru kelipatan.

---

**79.** Pada balok ABCD.EFGH, garis FH adalah ...
- A. Rusuk
- B. Diagonal sisi
- C. Diagonal ruang
- D. Sumbu simetri

**Kunci: B**
**Pembahasan:**
F dan H sama-sama di sisi tutup EFGH, tidak bersebelahan → diagonal sisi tutup.
- **A** — FH bukan rusuk (rusuk tutup: EF, FG, GH, HE).
- **B** — Benar. **Diagonal sisi** pada bidang tutup EFGH. ✅
- **C** — Diagonal ruang menembus ke alas (mis. AG).
- **D** — Bukan sumbu simetri tertentu.

---

**80.** Total banyak diagonal sisi kubus + diagonal ruang kubus + bidang diagonal kubus = ...
- A. 18
- B. 22
- C. 24
- D. 26

**Kunci: B**
**Pembahasan:**
Diagonal sisi 12 + diagonal ruang 4 + bidang diagonal 6 = 22.
- **A** — 18 = 12 + 4 + 2, salah hitung bidang diagonal.
- **B** — Benar. 12 + 4 + 6 = **22**. ✅
- **C** — 24 = 12 + 8 + 4, kacau.
- **D** — 26 = 6 + 12 + 8, ini total sisi+rusuk+titik kubus.

---

### 🔴 SEKSI C · 20 Soal Tingkat Nasional (No. 81–100)

**81.** Sebuah polihedron memiliki sisi yang terdiri atas 20 segitiga sama sisi. Setiap titik sudut dikelilingi tepat 5 segitiga. Banyak titik sudut dan rusuknya adalah ...
- A. V = 10, E = 20
- B. V = 12, E = 30
- C. V = 15, E = 30
- D. V = 20, E = 30

**Kunci: B**
**Pembahasan:**
Bangun = ikosahedron beraturan. Jumlah total sudut sisi = 20 × 3 = 60. Karena tiap titik sudut dikelilingi 5 segitiga: V = 60/5 = 12. E = (20 × 3)/2 = 30. Cek Euler: 12 − 30 + 20 = 2 ✓.
- **A** — V tidak benar.
- **B** — Benar. V = 12, E = 30. ✅
- **C** — V salah hitung.
- **D** — V = 20 itu untuk dodekahedron.

---

**82.** Jika sebuah prisma segitiga memiliki alas segitiga siku-siku berusuk 3, 4, 5 cm dan tingginya 10 cm, banyak titik sudut, rusuk, dan sisinya adalah ...
- A. 6, 9, 5
- B. 8, 12, 6
- C. 5, 8, 5
- D. 6, 10, 5

**Kunci: A**
**Pembahasan:**
Bangunnya tetap prisma segitiga (hanya alas bukan beraturan). V = 6, E = 9, F = 5.
- **A** — Benar. **V = 6, E = 9, F = 5**. ✅
- **B** — Itu balok.
- **C** — Itu limas segiempat.
- **D** — Rusuk salah.

---

**83.** Sebuah polihedron memiliki sisi yang terdiri atas 4 segitiga dan 1 persegi (limas segiempat). Banyak diagonal sisinya (hanya di alas persegi) adalah ...
- A. 0
- B. 1
- C. 2
- D. 4

**Kunci: C**
**Pembahasan:**
Hanya alas persegi yang punya diagonal. Persegi punya 2 diagonal. Sisi segitiga tidak punya diagonal (segitiga = 3 titik sudut, tidak ada diagonal).
- **A** — Salah; alas persegi pasti punya diagonal.
- **B** — 1 lupa satu diagonal.
- **C** — Benar. **2 diagonal sisi**, semua di alas. ✅
- **D** — 4 itu jumlah sisi alas.

---

**84.** Sebuah kubus mempunyai panjang rusuk a. Jumlah panjang seluruh diagonal ruangnya adalah ...
- A. a√3
- B. 2a√3
- C. 4a√3
- D. 6a√3

**Kunci: C**
**Pembahasan:**
Tiap diagonal ruang = a√3. Ada 4 diagonal ruang. Jumlah = 4a√3.
- **A** — Hanya satu diagonal.
- **B** — 2 diagonal, lupa setengah lainnya.
- **C** — Benar. **4 × a√3 = 4a√3**. ✅
- **D** — 6 = jumlah bidang diagonal, salah kategori.

---

**85.** Pada limas segi-n, jumlah F + V = 2 + E. Jika F = 11, maka n = ...
- A. 8
- B. 10
- C. 11
- D. 12

**Kunci: B**
**Pembahasan:**
Limas segi-n: F = n + 1 → 11 = n + 1 → n = 10.
- **A** — n = 8 → F = 9.
- **B** — Benar. **n = 10**, limas segi-10. ✅
- **C** — n = 11 → F = 12.
- **D** — n = 12 → F = 13.

---

**86.** Sebuah bangun gabungan terdiri atas kubus (rusuk 4 cm) di atas balok (10 × 6 × 5 cm). Sisi alas kubus dan sisi tutup balok menyatu dan tidak nampak sebagai sisi luar. Banyak sisi luar bangun gabungan adalah ...
- A. 8
- B. 9
- C. 10
- D. 12

**Kunci: C**
**Pembahasan:**
Kubus 6 sisi + balok 6 sisi = 12. Dua sisi yang menempel (alas kubus + tutup balok) tidak terlihat → 12 − 2 = 10.
- **A** — 8 keliru hitung.
- **B** — 9 lupa satu sisi.
- **C** — Benar. **10 sisi luar** terlihat. ✅
- **D** — 12 jika tanpa pengurangan.

---

**87.** Sebuah prisma segitiga sama sisi (alas segitiga sama sisi, sisi tegak persegi) jumlah rusuknya semua sama panjang. Banyak rusuk yang sama panjang = ...
- A. 3
- B. 6
- C. 9
- D. 12

**Kunci: C**
**Pembahasan:**
Prisma segitiga punya 9 rusuk. Jika sisi tegak berbentuk persegi (panjang = sisi alas), maka **semua 9 rusuk sama panjang**.
- **A** — Hanya 3 lupa lainnya.
- **B** — 6 hanya alas + tutup.
- **C** — Benar. **9 rusuk** sama panjang. ✅
- **D** — 12 itu kubus.

---

**88.** Banyak diagonal sisi pada **prisma segitiga** adalah ...
- A. 0
- B. 3
- C. 6
- D. 9

**Kunci: C**
**Pembahasan:**
Sisi segitiga tidak punya diagonal (0). Sisi persegi panjang ada 3, masing-masing punya 2 diagonal: 3 × 2 = 6.
- **A** — Salah; sisi persegi panjang punya diagonal.
- **B** — 3 lupa setengah diagonal lainnya.
- **C** — Benar. **6 diagonal sisi** (semua di sisi tegak). ✅
- **D** — 9 keliru hitung.

---

**89.** Sebuah polihedron memiliki 6 sisi segitiga dan 5 titik sudut. Banyak rusuknya adalah ...
- A. 8
- B. 9
- C. 10
- D. 12

**Kunci: B**
**Pembahasan:**
Total sudut sisi = 6 × 3 = 18. Tiap rusuk dibagi 2 sisi → rusuk = 18 ÷ 2 = 9. Cek Euler: 5 − 9 + 6 = 2 ✓.
- **A** — 8 keliru rumus.
- **B** — Benar. **9 rusuk** (cocok dengan dipiramida segitiga = gabungan 2 limas segitiga di alas). ✅
- **C** — 10 keliru.
- **D** — 12 keliru.

---

**90.** Sebuah balok dengan ukuran 12 × 9 × 8 cm memiliki diagonal ruang sepanjang ...
- A. 13 cm
- B. 15 cm
- C. 17 cm
- D. 19 cm

**Kunci: C**
**Pembahasan:**
d = √(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17 cm.
- **A** — 13 = √(144 + 25), salah angka.
- **B** — 15 = √(225), bukan rumus diagonal ruang ini.
- **C** — Benar. **17 cm**. ✅
- **D** — 19 keliru.

---

**91.** Banyak rusuk pada bangun yang sisinya terdiri dari 8 segitiga (octahedron beraturan) adalah ...
- A. 8
- B. 10
- C. 12
- D. 16

**Kunci: C**
**Pembahasan:**
Total sudut sisi = 8 × 3 = 24. Rusuk = 24 ÷ 2 = 12. Cek Euler: V − 12 + 8 = 2 → V = 6 ✓.
- **A** — 8 keliru.
- **B** — 10 keliru.
- **C** — Benar. **12 rusuk** untuk oktahedron beraturan. ✅
- **D** — 16 keliru.

---

**92.** Pada kubus ABCD.EFGH, banyak segitiga sama sisi yang dapat dibentuk dengan menghubungkan 3 titik sudut kubus adalah ...
- A. 4
- B. 6
- C. 8
- D. 12

**Kunci: C**
**Pembahasan:**
Segitiga sama sisi terbentuk dari 3 titik sudut yang saling berjarak = diagonal sisi. Ada 8 segitiga sama sisi seperti itu (BDE, BDG, ACF, ACH, dll.).
- **A** — 4 sangat kurang.
- **B** — 6 mendekati tapi belum tepat.
- **C** — Benar. **8 segitiga sama sisi** terbentuk. ✅
- **D** — 12 terlalu banyak (cocok dengan rusuk, bukan segitiga).

---

**93.** Sebuah limas segi-n memiliki jumlah F + V + E = 50. Nilai n adalah ...
- A. 10
- B. 12
- C. 14
- D. 16

**Kunci: B**
**Pembahasan:**
Limas segi-n: F = n + 1, V = n + 1, E = 2n. Total = (n+1) + (n+1) + 2n = 4n + 2 = 50 → 4n = 48 → n = 12.
- **A** — n = 10 → total 42.
- **B** — Benar. **n = 12**. ✅
- **C** — n = 14 → total 58.
- **D** — n = 16 → total 66.

---

**94.** Sebuah prisma segi-n memiliki jumlah F + V + E = 50. Nilai n adalah ...
- A. 6
- B. 7
- C. 8
- D. 10

**Kunci: C**
**Pembahasan:**
Prisma: F = n + 2, V = 2n, E = 3n. Total = (n+2) + 2n + 3n = 6n + 2 = 50 → 6n = 48 → n = 8.
- **A** — n = 6 → total 38.
- **B** — n = 7 → total 44.
- **C** — Benar. **n = 8**, prisma segi-8 (oktagonal). ✅
- **D** — n = 10 → total 62.

---

**95.** Pada balok ABCD.EFGH (bukan kubus), dengan AB = AD ≠ AE, banyak segitiga sama kaki yang terbentuk dari 3 rusuk yang bertemu di titik sudut A (yaitu AB, AD, AE) — yakni segitiga ABD, ABE, ADE — adalah ...
- A. 0
- B. 1
- C. 2
- D. 3

**Kunci: B**
**Pembahasan:**
Jika AB = AD ≠ AE, maka segitiga ABD adalah sama kaki (dengan diagonal sisi sebagai alas). Segitiga ABE dan ADE adalah segitiga siku-siku tidak sama kaki.
- **A** — Setidaknya ada satu segitiga sama kaki.
- **B** — Benar. **1 segitiga** (ABD) sama kaki, karena AB = AD. ✅
- **C** — Hanya satu pasangan rusuk yang sama.
- **D** — Terlalu banyak.

---

**96.** Sebuah polihedron memiliki sisi yang terdiri atas 6 persegi dan 8 segitiga sama sisi (cuboctahedron). Banyak rusuknya adalah ...
- A. 18
- B. 20
- C. 24
- D. 30

**Kunci: C**
**Pembahasan:**
Total sudut sisi = 6(4) + 8(3) = 24 + 24 = 48. Rusuk = 48 ÷ 2 = 24.
- **A** — 18 keliru.
- **B** — 20 keliru.
- **C** — Benar. **24 rusuk** (cuboctahedron). ✅
- **D** — 30 keliru.

---

**97.** Sebuah kubus mempunyai rusuk 6 cm. Banyak titik sudut yang berjarak √72 cm dari titik sudut A adalah ... (jarak √72 = diagonal sisi)
- A. 1
- B. 3
- C. 6
- D. 7

**Kunci: B**
**Pembahasan:**
Diagonal sisi kubus berusuk 6 = 6√2 = √72. Titik sudut yang berjarak diagonal sisi dari A adalah titik sudut yang **se-sisi dan berseberangan** dengan A, yaitu pada 3 sisi yang mengandung A. Pada tiap sisi, ada **1 titik diagonal dari A** → total 3.
- **A** — 1 keliru; ada 3 sisi yang mengandung A.
- **B** — Benar. **3 titik sudut** (C, F, H). ✅
- **C** — 6 = titik yang sejarak rusuk (3 titik) atau diagonal sisi (3 titik). Hanya 3 berjarak diagonal sisi.
- **D** — 7 itu jumlah seluruh titik sudut kubus selain A.

---

**98.** Banyak titik sudut yang berjarak **diagonal ruang** dari titik sudut A pada kubus adalah ...
- A. 1
- B. 2
- C. 3
- D. 4

**Kunci: A**
**Pembahasan:**
Tiap titik sudut kubus punya **tepat satu titik yang berseberangan menembus dalam** (mis. A ↔ G).
- **A** — Benar. **1 titik sudut** berjarak diagonal ruang dari A. ✅
- **B** — 2 keliru.
- **C** — 3 itu jumlah titik yang sejarak diagonal sisi.
- **D** — 4 itu jumlah diagonal ruang kubus secara keseluruhan.

---

**99.** Sebuah polihedron dengan 32 sisi (12 pentagon + 20 segitiga sama sisi) adalah **icosidodecahedron**. Banyak rusuk dan titik sudutnya adalah ...
- A. E = 60, V = 30
- B. E = 60, V = 40
- C. E = 90, V = 60
- D. E = 80, V = 40

**Kunci: A**
**Pembahasan:**
Total sudut sisi = 12(5) + 20(3) = 60 + 60 = 120. Rusuk = 120/2 = 60. Euler: V − 60 + 32 = 2 → V = 30.
- **A** — Benar. **E = 60, V = 30**. ✅
- **B** — V salah hitung.
- **C** — E salah.
- **D** — Total keliru.

---

**100.** Sebuah kubus dipotong di salah satu sudutnya sehingga muncul sisi segitiga baru (memotong tepat di tengah 3 rusuk yang bertemu di sudut tersebut). Jumlah sisi (F), rusuk (E), dan titik sudut (V) bangun baru adalah ...
- A. F = 7, E = 15, V = 10
- B. F = 7, E = 14, V = 9
- C. F = 6, E = 12, V = 8
- D. F = 8, E = 18, V = 12

**Kunci: A**
**Pembahasan:**
Kubus mula-mula: F=6, E=12, V=8.
Pemotongan menambah:
- F: +1 sisi segitiga baru → F = 7.
- E: +3 rusuk baru (sisi segitiga) → E = 12 + 3 = 15.
- V: +3 titik baru (tengah rusuk) − 1 titik lama hilang = +2 → V = 8 + 2 = 10.
Cek Euler: 10 − 15 + 7 = 2 ✓.
- **A** — Benar. **F = 7, E = 15, V = 10**. ✅
- **B** — Salah hitung E dan V.
- **C** — Lupa pengaruh pemotongan.
- **D** — Berlebihan; tidak konsisten dengan Euler.

---

## RINGKASAN

### Distribusi Soal
- 🟢 **Kabupaten (50 soal)**: Konsep dasar tiap bangun, hitungan sederhana, identifikasi bentuk.
- 🟡 **Provinsi (30 soal)**: Aplikasi rumus Euler, diagonal sisi/ruang, hitungan beberapa langkah, gabungan bangun.
- 🔴 **Nasional (20 soal)**: Polihedron beraturan (Platonic solids), pemotongan bangun, hitungan vektor 3D, kombinatorika titik sudut.

### Kunci Lompatan ke Kelas Selanjutnya
- Pastikan **hafal tabel 8 bangun ruang** (sisi, rusuk, titik sudut).
- Pahami **rumus Euler** V − E + F = 2 untuk polihedron.
- Bedakan **diagonal sisi** (di permukaan) vs **diagonal ruang** (menembus dalam).
- Ingat: **kerucut punya 1 titik sudut (puncak)**, tabung dan bola tidak punya.
- Pahami pola **prisma segi-n** (3n rusuk, 2n titik, n+2 sisi) dan **limas segi-n** (2n rusuk, n+1 titik, n+1 sisi).

**Selamat berlatih!**
