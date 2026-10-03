/* topics/mtk-02a-pecahan-senilai-campur.js — scene ids dari assets/scenes/pecahan.js */
window.TOPICS = window.TOPICS || {};

window.TOPICS['mtk-02a-pecahan-senilai-campur'] = {
  accent: '#a78bfa',
  accentSoft: 'rgba(167,139,250,.16)',
  kind: 'MTK · Pecahan',
  headline: 'Pecahan bernilai sama',
  subtitle: 'Batang, penyederhanaan, dan perbandingan nilai',
  intro: [
    '**Pecahan** ditulis sebagai `p/q` dengan `p` pembilang dan `q` penyebut.',
    '**Penyebut** menyatakan jumlah bagian sama yang harus dibuat.',
    'Semakin besar pembilang dengan penyebut tetap, semakin besar pula nilainya.',
    'Pecahan bernilai sama bila batangnya sama panjang.',
  ],

  scenes: [
    {
      scene: 'pecahan-model-batang',
      kind: 'Model batang',
      title: 'Pecahan sebagai bagian dari satu kesatuan',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.4 ? 'Batang sama panjang, jadi setiap bagian bernilai sama.'
        : 'Bagian yang terarsir adalah bagian yang diambil.',
      hotspots: {
        'per-satuan': { n: 1, label: 'Pembagian sama besar', text: 'Satu kesatuan dibagi menjadi beberapa bagian yang sama besar.\n\nJumlah bagian itu disebut penyebut.' },
        pecahan: { n: 2, label: 'Bagian yang diambil', text: 'Bagian yang diambil berperan sebagai pembilang.\n\nJadi 3 dari 8 bagian berarti 3 per 8.' },
      },
    },
    {
      scene: 'pecahan-sederhana',
      kind: 'Menyederhanakan',
      title: 'Menyederhanakan pecahan',
      dur: 10,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Pembilang dan penyebutnya dipisahkan oleh faktor persamaan yang sama.'
        : 'Setelah dipabatkan, pecahan menjadi paling sederhana.',
      hotspots: {
        fpb: { n: 1, label: 'Cari faktor persamaan', text: 'Pecahan dapat disederhanakan bila pembilang dan penyebutnya punya faktor persamaan.\n\nContohnya 6 per 8 sama-sama bisa dibagi 2.' },
        hasil: { n: 2, label: 'Hasil paling sederhana', text: 'Setelah dibagi, 6 per 8 menjadi 3 per 4.\n\nNilai pecahan tidak berubah, hanya bentuknya yang lebih ringkas.' },
      },
    },
    {
      scene: 'pecahan-bandingkan',
      kind: 'Membandingkan',
      title: 'Membandingkan dua pecahan',
      dur: 12,
      hold: 2.2,
      caption: (k) =>
        k < 0.35 ? 'Bandingkan panjang batangnya, bukan besar angkanya.'
        : k < 0.7 ? 'Batang yang lebih panjang berarti pecahan yang lebih besar.'
        : 'Penyamaan penyebut memudahkan perbandingan.',
      hotspots: {
        garis: { n: 1, label: 'Garis bilangan', text: 'Letakkan kedua pecahan pada garis bilangan yang sama.\n\nPosisi yang lebih tinggi berarti nilainya lebih besar.' },
        besar: { n: 2, label: 'Mana yang lebih besar?', text: 'Bandingkan pembilang bila penyebutnya sama.\n\nDengan penyebut sama, pembilang yang lebih besar nilainya lebih besar.' },
      },
    },
    {
      scene: 'pecahan-sama-denom',
      kind: 'Penyamaan',
      title: 'Mencari penyamaan penyebut',
      dur: 11,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Penyebut yang sama membuat pembilang bisa langsung dijumlahkan.'
        : 'Jumlahkan pembilangnya, penyebutnya tetap sama.',
      hotspots: {
        pembilang: { n: 1, label: 'Pembilang langsung dijumlahkan', text: 'Jika penyebutnya sama, pembilangnya bisa langsung dijumlahkan.\n\nContohnya 1/4 + 2/4 berarti 3/4.' },
        campuran: { n: 2, label: 'Sisakan penyebut yang sama', text: 'Penyebut tidak ikut dijumlahkan.\n\nJadi hasilnya 3 per 4, belum tentu paling sederhana.' },
      },
    },
  ],
};