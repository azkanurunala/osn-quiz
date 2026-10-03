/* topics/ipa-01k-rantai-makanan-campur.js — ilustrasi + caption + titik info.
   Scene ids di.register oleh assets/scenes/ekologi.js                        */
window.TOPICS = window.TOPICS || {};

window.TOPICS['ipa-01k-rantai-makanan-campur'] = {
  accent: '#4ade80',
  accentSoft: 'rgba(74,222,128,.16)',
  kind: 'IPA · Ekologi',
  headline: 'Rantai dan jaring-jaring makanan',
  subtitle: 'Siapa memakan siapa, dan kenapa energi selalu berkurang di setiap tingkat',
  intro: [
    '**Produsen** membuat makanan sendiri dengan bantuan cahaya matahari. Itulah satu-satunya pintu masuk energi ke sebuah ekosistem.',
    '**Konsumen** tidak bisa membuat makanan sendiri, jadi dia memakai energi yang sudah disimpan di tubuh organisme lain.',
    'Energi hilang sekitar 90% di setiap tingkat (**kaidah 10%**), sehingga rantai makanan tidak bisa terlalu panjang.',
    '**Jaring-jaring makanan** adalah gabungan beberapa rantai yang saling bertemu — karena itu ekosistem lebih stabil.',
  ],

  scenes: [
    {
      scene: 'rantai-makanan',
      kind: 'Rantai',
      title: 'Produsen → Konsumen I → II → III',
      dur: 11,
      hold: 2.2,
      caption: (k) =>
        k < 0.2 ? 'Mulai dari tumbuhan: produsen yang membuat makanannya sendiri.'
        : k < 0.4 ? 'Panah pertama: belalang memakan tumbuhan, jadi konsumen tingkat satu.'
        : k < 0.6 ? 'Burung memakan belalang, jadi konsumen tingkat dua.'
        : k < 0.8 ? 'Elang memakan burung, jadi konsumen tingkat tiga.'
        : 'Energi menyusut di setiap tingkat: 100% → ±10% → ±1% → ±0,1%.',
      hotspots: {
        produsen: {
          n: 1,
          label: 'Produsen (tumbuhan)',
          text: 'Tumbuhan membuat makanan sendiri lewat **fotosintesis**: cahaya matahari, air, dan karbon dioksida diubah menjadi makanan (glukosa).\n\nKarena itulah semua energi dalam rantai makanan selalu bermula dari matahari.',
        },
        'konsumen-1': {
          n: 2,
          label: 'Konsumen tingkat satu',
          text: 'Konsumen I adalah **herbivora**, yaitu organisme yang memakan tumbuhan: belalang, kelinci, sapi, ikan kecil.\n\nMakanannya langsung dari produsen, jadi energi yang tersedia masih paling banyak.',
        },
        'konsumen-3': {
          n: 3,
          label: 'Konsumen tingkat tiga',
          text: 'Konsumen III adalah predator puncak, yaitu yang memangsa konsumen tingkat dua.\n\nEnergi yang tersisa sudah sangat sedikit, sehingga jumlahnya di alam juga paling sedikit.',
        },
        energi: {
          n: 4,
          label: 'Energi berkurang tiap tingkat',
          text: 'Aturan praktis **kaidah 10%**: hanya sekitar 10% energi yang diteruskan ke tingkat berikutnya.\n\nSisanya dipakai untuk bernapas, bergerak, dan mengatur suhu tubuh. Karena itu rantai makanan jarang lebih dari 4–5 tingkat.',
        },
      },
    },
    {
      scene: 'jaring-jaring',
      kind: 'Jaring',
      title: 'Jaring-jaring makanan dan akibatnya',
      dur: 12,
      hold: 2.4,
      caption: (k) =>
        k < 0.35 ? 'Satu organisme bisa punya beberapa sumber makanan.'
        : k < 0.55 ? 'Karena itu jaring-jaring makanan lebih stabil daripada satu rantai.'
        : k < 0.75 ? 'Sekarang kelinci menghilang dari jaring.'
        : 'Ular dan elang ikut kehilangan makanan — inilah efek berantai.',
      hotspots: {
        jaring: {
          n: 1,
          label: 'Apa itu jaring makanan?',
          text: 'Jaring-jaring makanan adalah gabungan beberapa rantai makanan yang saling bertemu.\n\nDi sini kelinci memakan rumput **dan** daun, sementara katak memakan belalang, kelinci, dan ular kecil. Satu organisme terhubung ke banyak relasi.',
        },
        hilang: {
          n: 2,
          label: 'Efek berantai',
          text: 'Begitu satu organisme hilang, semua organisme yang bergantung padanya ikut kehilangan sumber makanan.\n\nDi sini kelinci hilang, sehingga ular dan elang ikut kelaparan. Dalam soal OSN, jaring makanan dipakai untuk menguji **dampak kehilangan satu organisme** terhadap organisme lain.',
        },
      },
    },
    {
      scene: 'energi-rantai',
      kind: 'Energi',
      title: 'Kenapa energi selalu berkurang',
      dur: 10,
      hold: 2,
      caption: (k) =>
        k < 0.4 ? 'Setiap tingkat hanya menerima sekitar sepersepuluh energi dari tingkat sebelumnya.'
        : 'Energi tidak pernah berputar: ia berpindah bentuk, lalu hilang sebagai panas.',
      hotspots: {
        penurunan: {
          n: 1,
          label: 'Penurunan energi',
          text: 'Kaidah 10% punya alasan yang masuk akal: dari energi yang diterima, sekitar 90% dipakai untuk bernapas, bergerak, dan menghasilkan panas. Hanya sekitar 10% yang tersimpan di tubuh dan diteruskan ke tingkat berikutnya.',
        },
        habis: {
          n: 2,
          label: 'Energi habis, zat kembali',
          text: 'Energi **berakhir** di setiap tingkat karena keluar ke lingkungan sebagai panas. Tapi **zat** berputar terus: sisa-sisa organisme diurai oleh pengurai menjadi zat hara, lalu diserap tumbuhan lagi.',
        },
      },
    },
  ],
};