/* topics/ipa-03j-listrik-seri-paralel-campur.js — scene ids dari assets/scenes/listrik.js */
window.TOPICS = window.TOPICS || {};

window.TOPICS['ipa-03j-listrik-seri-paralel-campur'] = {
  accent: '#fbbf24',
  accentSoft: 'rgba(251,191,36,.16)',
  kind: 'IPA · Listrik',
  headline: 'Rangkaian seri, paralel, dan arus listrik',
  subtitle: 'Bedanya hambatan total dan cara arus mengalir',
  intro: [
    '**Hukum Ohm**: `V = I × R`.',
    '**Seri**: `R_total = R₁ + R₂ + R₃`, hambatannya bertambah.',
    '**Paralel**: `1/R_total = 1/R₁ + 1/R₂`, hambatannya berkurang.',
    'Arus hanya mengalir kalau jalannya tertutup.',
  ],

  scenes: [
    {
      scene: 'listrik-seri',
      kind: 'Seri',
      title: 'Rangkaian seri: satu alur',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.4 ? 'Semua komponen berada pada satu alur.'
        : k < 0.65 ? 'Hambatan totalnya jumlah semua hambatan.'
        : 'Saklar diputus, maka semua lampu mati.',
      hotspots: {
        alur: { n: 1, label: 'Satu alur saja', text: 'Semua komponen disusun berurutan pada satu jalur.\n\nArus yang sama melewati setiap komponen, lalu kembali ke baterai.' },
        lampu: { n: 2, label: 'Arus sama untuk semua', text: 'Setiap lampu menerima arus yang sama besar.\n\nKalau satu lampu lebih redup, lampu yang lain juga ikut redup.' },
        saklar: { n: 3, label: 'Satu titik untuk diputus', text: 'Memutus di titik mana saja membuat seluruh rangkaian mati.\n\nSatu lampu padam, lampu lain ikut padam.' },
      },
    },
    {
      scene: 'listrik-paralel',
      kind: 'Paralel',
      title: 'Rangkaian paralel: banyak jalur',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.4 ? 'Setiap lampu punya jalur sendiri.'
        : k < 0.65 ? 'Hambatan total lebih kecil.'
        : 'Satu lampu mati, lampu lain tetap menyala.',
      hotspots: {
        cabang: { n: 1, label: 'Banyak cabang', text: 'Tiap komponen disambung pada jalur yang sama.\n\nKarena itu matinya satu lampu tidak berpengaruh pada yang lain.' },
        'lampu-1': { n: 2, label: 'Tiap lampu dapat tegangan penuh', text: 'Setiap cabang terhubung langsung ke kedua kutub baterai.\n\nJadi tiap lampu mendapat tegangan penuh dan tetap terang.' },
        mandi: { n: 3, label: 'Penerangan rumah', text: 'Lampu, kipas, dan stopkontak di rumah disambung paralel.\n\nSengaja begitu supaya satu lampu rusak tidak membuat seluruh rumah gelap.' },
      },
      },
    {
      scene: 'listrik-banding',
      kind: 'Perbandingan',
      title: 'Seri atau paralel?',
      dur: 12,
      hold: 2.4,
      caption: (k) =>
        k < 0.35 ? 'Kiri seri, kanan paralel.'
        : k < 0.7 ? 'Bandingkan jumlah jalur dan besar hambatannya.'
        : 'Cara cepatnya: lihat jalurnya, bukan bentuk gambarnya.',
      hotspots: {
        seri: { n: 1, label: 'Ciri rangkaian seri', text: 'Hanya ada satu jalur untuk arus.\n\n Hambatannya bertambah: R_total = R₁ + R₂ + …' },
        paralel: { n: 2, label: 'Ciri rangkaian paralel', text: 'Ada banyak jalur untuk arus.\n\nHambatannya berkurang: 1/R_total = 1/R₁ + 1/R₂ + …' },
      },
    },
    {
      scene: 'listrik-arus',
      kind: 'Arus',
      title: 'Arus listrik dan saklar',
      dur: 9,
      hold: 1.8,
      caption: (k) =>
        k < 0.4 ? 'Arus mengalir dari kutub negatif ke kutub positif.'
        : 'Saklar dibuka, jalannya putus, arus berhenti.',
      hotspots: {
        baterai: { n: 1, label: 'Baterai sebagai sumber', text: 'Baterai menyediakan gaya penggerak listrik, disebut tegangan.\n\nTanpa sumber tegangan, tidak ada aliran elektron.' },
        saklar: { n: 2, label: 'Saklar sebagai pintu', text: 'Saklar hanya membuka atau menutup jalannya.\n\nSaat ditutup, elektron berjalan mengitari seluruh rangkaian dan lampu menyala.' },
      },
    },
  ],
};