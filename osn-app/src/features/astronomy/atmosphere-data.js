// osn-app/src/features/astronomy/atmosphere-data.js
export const ATMOSPHERE_EARTH = { texture: '/textures/2k_earth_daymap.jpg', radius: 1.6 };

// Radius sekolastik (altitude asli ada di nama/fact tiap lapisan) — urutan dari permukaan Bumi keluar.
export const ATMOSPHERE_LAYERS = [
  { id: 'troposfer', name: 'Troposfer (0-12 km)', radius: 1.9, color: '#7ec8e3', opacity: 0.35, fact: 'Tempat terjadinya cuaca — awan, hujan, dan angin. Berisi sekitar 75% massa atmosfer Bumi.' },
  { id: 'stratosfer', name: 'Stratosfer (12-50 km)', radius: 2.3, color: '#4a90d9', opacity: 0.28, fact: 'Berisi lapisan ozon yang menyerap radiasi ultraviolet (UV) berbahaya dari Matahari.' },
  { id: 'mesosfer', name: 'Mesosfer (50-85 km)', radius: 2.7, color: '#5c6bc0', opacity: 0.22, fact: 'Lapisan tempat sebagian besar meteor terbakar habis sebelum mencapai permukaan Bumi.' },
  { id: 'termosfer', name: 'Termosfer (85-600 km)', radius: 3.2, color: '#7e57c2', opacity: 0.18, fact: 'Tempat terjadinya aurora dan tempat Stasiun Luar Angkasa (ISS) mengorbit. Suhunya sangat tinggi, tapi terasa dingin karena partikelnya sangat jarang.' },
  { id: 'eksosfer', name: 'Eksosfer (600-10.000 km)', radius: 3.8, color: '#ab47bc', opacity: 0.12, fact: 'Lapisan terluar atmosfer, batas transisi menuju luar angkasa. Partikelnya sangat jarang dan sebagian bisa lepas ke luar angkasa.' },
];
