/* topics/ipa-05j-siklus-air-campur.js — scene ids dari assets/scenes/air.js */
window.TOPICS = window.TOPICS || {};

window.TOPICS['ipa-05j-siklus-air-campur'] = {
  accent: '#38bdf8',
  accentSoft: 'rgba(56,189,248,.16)',
  kind: 'IPA · Air',
  headline: 'Siklus air',
  subtitle: 'Empat tahap yang membuat air terus berputar',
  intro: [
    '**Evaporasi** mengubah air cair jadi uap air.',
    '**Kondensasi** mengubah uap air jadi titik-titik air di dalam awan.',
    '**Presipitasi** adalah air yang jatuh dari awan: hujan, salju, atau es.',
    '**Infiltrasi dan perkolasi** mengembalikan air ke tanah dan sungai.',
  ],

  scenes: [
    {
      scene: 'siklus-air-putaran',
      kind: 'Siklus',
      title: 'Perputaran air di alam',
      dur: 14,
      hold: 2.4,
      caption: (k) =>
        k < 0.25 ? 'Air di laut menguap jadi uap dan naik ke langit.'
        : k < 0.45 ? 'Uap yang dingin berubah menjadi titik air di dalam awan.'
        : k < 0.7 ? 'Titik air makin besar lalu jatuh sebagai hujan.'
        : 'Air mengalir kembali ke laut lewat sungai dan tanah.',
      hotspots: {
        evaporasi: { n: 1, label: 'Evaporasi', text: 'Panas matahari mengubah air di permukaan menjadi uap air.\n\nUap itu lebih ringan dari air cair, jadi naik ke atas.' },
        kondensasi: { n: 2, label: 'Kondensasi', text: 'Di ketinggian yang lebih dingin, uap air berubah menjadi titik-titik air.\n\nTitik-titik air ini berkumpul dan membentuk awan.' },
        presipitasi: { n: 3, label: 'Presipitasi', text: 'Presipitasi adalah segala bentuk air yang jatuh dari atmosfer.\n\nBentuknya bisa hujan, salju, atau es.' },
        aliran: { n: 4, label: 'Kembali ke laut', text: 'Sebagian air merembes ke tanah, sebagian mengalir lewat sungai.\n\nAkhirnya semua air itu kembali ke laut dan menguap lagi.' },
      },
    },
    {
      scene: 'air-evaporasi',
      kind: 'Evaporasi',
      title: 'Evaporasi: air cair jadi uap',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.4 ? 'Panas membuat air menguap dari permukaan.'
        : k < 0.75 ? 'Semakin luas permukaan, semakin cepat penguapan.'
        : 'Angin dan udara lembap juga memengaruhi kecepatan penguapan.',
      hotspots: {
        cairan: { n: 1, label: 'Air cair', text: 'Air di permukaan daratan dipanaskan oleh matahari atau panas tanah.\n\nBagian yang paling hangat menguap lebih dulu.' },
        uap: { n: 2, label: 'Uap air', text: 'Uap air adalah air dalam bentuk gas.\n\nUap tidak dapat dilihat langsung, tetapi membuat udara terasa lembap.' },
        faktor: { n: 3, label: 'Faktor kecepatan', text: 'Evaporasi makin cepat bila suhunya lebih tinggi, permukaannya lebih luas, dan udaranya lebih kering serta berhembus.' },
      },
    },
    {
      scene: 'air-kondensasi',
      kind: 'Kondensasi',
      title: 'Kondensasi: uap kembali jadi air',
      dur: 10,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Uap yang naik ke tempat yang lebih dingin berubah jadi titik air.'
        : 'Titik air terkumpul di dalam awan, lalu jatuh sebagai presipitasi.',
      hotspots: {
        dingin: { n: 1, label: 'Suhu yang menurun', text: 'Naik ke ketinggian yang lebih dingin, uap air kehilangan panas.\n\nKarena itu di lantai langit uap berubah menjadi titik air.' },
        hujan: { n: 2, label: 'Presipitasi', text: 'Titik air menggumpal menjadi tetesan yang makin berat.\n\nKetika cukup berat, tetesan itu jatuh sebagai hujan.' },
      },
    },
  ],
};