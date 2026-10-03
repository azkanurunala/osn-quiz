/* topics/mtk-06c-diskon-campur.js — scene ids dari assets/scenes/bisnis.js */
window.TOPICS = window.TOPICS || {};

window.TOPICS['mtk-06c-diskon-campur'] = {
  accent: '#34d399',
  accentSoft: 'rgba(52,211,153,.16)',
  kind: 'MTK · Diskon',
  headline: 'Diskon, harga jual, dan kembalian',
  subtitle: 'Hitung harga akhir dengan teliti',
  intro: [
    'Besaran diskon = persentase diskon × harga awal.',
    'Harga akhir = harga awal − besaran diskon.',
    'Diskon berlapis dihitung berurutan, bukan dijumlahkan.',
    'Markup dihitung dari harga beli, hasilnya disebut harga jual.',
  ],

  scenes: [
    {
      scene: 'diskon-potong',
      kind: 'Diskon dasar',
      title: 'Diskon: potong harga dari harga awal',
      dur: 10,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Harga awal dikurangi nilai diskon.'
        : 'Besaran diskon diperoleh dari persentase harga awal.',
      hotspots: {
        'harga-awal': { n: 1, label: 'Harga awal', text: 'Mulai dari harga yang tertera di label atau daftar harga.\n\nSemua perhitungan diskon memakai harga awal ini.' },
        potongan: { n: 2, label: 'Nilai diskon', text: 'Kalikan harga awal dengan persentase diskon.\n\nContohnya 10 persen dari 80.000 adalah 8.000.' },
        'harga-bayar': { n: 3, label: 'Harga akhir', text: 'Kurangi nilai diskon dari harga awal.\n\n80.000 dikurangi 8.000 menjadi 72.000.' },
      },
    },
    {
      scene: 'diskon-berlapis',
      kind: 'Diskon berlapis',
      title: 'Dua diskon berturutan',
      dur: 12,
      hold: 2.2,
      caption: (k) =>
        k < 0.35 ? 'Diskon pertama berlaku untuk harga awal.'
        : k < 0.7 ? 'Diskon kedua berlaku untuk harga setelah diskon pertama.'
        : 'Diskon kedua tidak bisa langsung memakai persentase harga awal.',
      hotspots: {
        kedua: { n: 1, label: 'Perhatikan basisnya', text: 'Diskon kedua berlaku untuk harga yang sudah dikurangi diskon pertama.\n\nJadi persentasenya dihitung dari harga baru itu.' },
        jahat: { n: 2, label: 'Jumlahkan akan salah', text: 'Menjumlahkan kedua persentase langsung dari harga awal menghasilkan hasil yang keliru.\n\nHasil yang benar selalu lebih kecil.' },
      },
    },
    {
      scene: 'diskon-harga-jual',
      kind: 'Harga jual',
      title: 'Menentukan harga jual dari markup',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.4 ? 'Markup adalah untung yang ditambahkan ke harga beli.'
        : 'Harga jual sama dengan harga beli ditambah markup.',
      hotspots: {
        rumus: { n: 1, label: 'Rumus harga jual', text: 'Harga jual = harga beli + markup.\n\nMarkup menyatakan besar untung yang ditambahkan ke harga beli.' },
        persen: { n: 2, label: 'Markup persen', text: 'Bila markup dalam persen, kalikan harga beli dengan persentase itu.\n\nHasilnya ditambahkan, bukan dikalikan lagi.' },
      },
    },
    {
      scene: 'diskon-kembalian',
      kind: 'Kembalian',
      title: 'Kembalian saat belanja',
      dur: 10,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Uang yang dibayar dikurangi nilai barang yang dibeli.'
        : 'Sisanya adalah kembalian yang diterima.',
      hotspots: {
        harga: { n: 1, label: 'Uang yang dibayar', text: 'Kembalian dihitung dari uang yang dikeluarkan dan nilai barang yang dibeli.\n\nKeduanya selalu berupa bilangan bulat.' },
        kembalian: { n: 2, label: 'Uang kembali', text: 'Kurangi nilai belanja dari uang yang dibayar.\n\nSisa uang itulah kembalian yang diterima.' },
      },
    },
  ],
};