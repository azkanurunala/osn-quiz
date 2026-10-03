/* topics/ipa-03d-tuas-campur.js — scene ids dari assets/scenes/mekanika.js
   Istilah B, K, LK, LB, KM mengikuti packages/data/ipa-03d-tuas-campur.json */
window.TOPICS = window.TOPICS || {};

const tuasJenis = (tipe, kind, title, caption) => ({
  scene: 'tuas-3-jenis',
  params: { tipe },
  kind,
  title,
  dur: 10,
  hold: 2,
  caption,
  hotspots: {
    tumpuan: {
      n: 1,
      label: 'Titik tumpu',
      text: 'Titik tempat batang berputar, bukan titik yang ditekankan.\n\nSemua lengan dihitung dari titik ini.',
    },
    beban: {
      n: 2,
      label: 'Beban (B)',
      text: 'Gaya yang mau diangkat. Makin jauh dari tumpuan, makin panjang lengan bebannya.',
    },
    kuasa: {
      n: 3,
      label: 'Kuasa (K)',
      text: 'Gaya yang kita berikan untuk menggerakkan tuas.\n\nMakin panjang lengan kuasa, makin kecil gaya yang dipakai.',
    },
  },
});

window.TOPICS['ipa-03d-tuas-campur'] = {
  accent: '#60a5fa',
  accentSoft: 'rgba(96,165,250,.16)',
  kind: 'IPA · Pesawat sederhana',
  headline: 'Tuas: tangan kecil, gaya besar',
  subtitle: 'Tiga jenis tuas, hukum tuas B × LB = K × LK, dan keuntungan mekanis',
  intro: [
    '**Tuas** adalah pesawat sederhana berupa batang yang berputar pada titik tumpu untuk mengangkat beban.',
    '**Hukum tuas**: `B × LB = K × LK`. Selama hasil kali itu sama, tuas-nya seimbang.',
    '**KM = LK / LB**. KM lebih besar dari 1 berarti hemat gaya; kurang dari 1 berarti untung kecepatan.',
    'Jenis tuas ditentukan oleh **pola di tengah**, yaitu bagian yang berada di tengah batang.',
  ],

  scenes: [
    tuasJenis(
      1,
      'Tuas 1',
      'Tuas jenis 1 — tumpuan di tengah',
      (k) =>
        k < 0.5 ? 'Beban dan kuasa di dua sisi, tumpuan di tengah: pola B — T — K.'
        : 'Karena tumpuan di tengah, KM bisa lebih besar dari 1, sama dengan 1, atau kurang dari 1.',
    ),
    tuasJenis(
      2,
      'Tuas 2',
      'Tuas jenis 2 — beban di tengah',
      (k) =>
        k < 0.5 ? 'Tumpuan di ujung, beban di tengah, kuasa di ujung lain: pola T — B — K.'
        : 'Lengan kuasa selalu lebih panjang, jadi KM selalu lebih besar dari 1.',
    ),
    tuasJenis(
      3,
      'Tuas 3',
      'Tuas jenis 3 — kuasa di tengah',
      (k) =>
        k < 0.5 ? 'Tumpuan di ujung, kuasa di tengah, beban paling jauh: pola T — K — B.'
        : 'Lengan kuasa lebih pendek, jadi KM kurang dari 1: rugi gaya, untung kecepatan.',
    ),
    {
      scene: 'tuas-ideal',
      kind: 'Hukum tuas',
      title: 'Menyeimbangkan tuas: B × LB = K × LK',
      dur: 12,
      hold: 2.4,
      caption: (k) =>
        k < 0.4 ? 'Batang berputar pada tumpuan, lalu kita hitung kedua sisinya.'
        : k < 0.7 ? 'Untuk K = 200 cm: K × LK = B × LB = 30.000.'
        : 'Gaya yang kita pakai jauh lebih kecil dari bebannya. Inilah untung gaya.',
      hotspots: {
        tumpuan: {
          n: 1,
          label: 'Titik tumpu',
          text: 'Semua ukuran diambil dari titik tumpu. Kalau tumpuan pindah, semua lengan ikut berubah.',
        },
        beban: {
          n: 2,
          label: 'Lengan beban (LB)',
          text: 'Jarak titik tumpu ke beban, dalam sentimeter. Makin panjang, makin ringan beban yang harus diangkat.',
        },
        kuasa: {
          n: 3,
          label: 'Lengan kuasa (LK)',
          text: 'Jarak titik tumpu ke titik kita menekan. Makin panjang, makin sedikit gaya yang kita perlukan.',
        },
        km: {
          n: 4,
          label: 'Keuntungan mekanis (KM)',
          text: '**KM = LK / LB**\n\nKalau KM = 4, kita cukup memakai seperempat beban untuk mengangkatnya.',
        },
      },
    },
    {
      scene: 'katrol-tetap',
      kind: 'Katrol tetap',
      title: 'Katrol tetap: hanya arah gaya yang berubah',
      dur: 9,
      hold: 1.8,
      caption: (k) =>
        k < 0.5 ? 'Katrol tetap mengubah arah gaya, bukan besarnya.'
        : 'Tarik ke bawah, beban terangkat ke atas dengan gaya yang sama besar.',
      hotspots: {
        katrol: {
          n: 1,
          label: 'Katrol tetap',
          text: 'Katrol tetap hanya **mengubah arah gaya**.\n\nPanjang tali tetap, jadi besar gaya yang kita pakai sama dengan gaya yang menahan beban.',
        },
        arah: {
          n: 2,
          label: 'Arah gaya berubah',
          text: 'Tarik tali ke bawah, beban naik ke atas.\n\nArahnya berubah, besar gaya tetap sama. Karena itu katrol tetap tidak menambah keuntungan mekanis.',
        },
      },
    },
    {
      scene: 'tuas-APL',
      kind: 'Alat penerus',
      title: 'Alat penerus: gaya kecil jadi gaya besar',
      dur: 9,
      hold: 1.8,
      caption: (k) =>
        k < 0.5 ? 'Alat penerus memusatkan gaya kecil pada ujung yang dekat dengan poros.'
        : 'Contohnya tang, gunting, dan dongkaran.',
      hotspots: {
        tumpuan: {
          n: 1,
          label: 'Poros',
          text: 'Alat penerus bekerja dengan titik tumpu sebagai poros gaya.\n\nSemakin dekat titik tumpu kita menekan, semakin besar gaya yang terkumpul di ujung lain.',
        },
        'lengan-beban': {
          n: 2,
          label: 'Lengan beban',
          text: 'Bagian alat yang menyentuh benda yang hendak digerakkan. Lengan ini sengaja dibuat pendek supaya gaya di ujung lain menjadi besar.',
        },
        tips: {
          n: 3,
          label: 'Mudah diingat',
          text: 'Alat **penerus** membuat gaya besar. Alat **pengubah arah** hanya memutar arah gaya.\n\nPenerus: tang, gunting, dongkaran.\n\nPengubah arah: katrol, timba.',
        },
      },
    },
  ],
};