// osn-app/src/features/astronomy/earth-layers-data.js
// Radius sekolastik (bukan proporsi asli) supaya ke-4 lapisan tetap jelas beda ukurannya di layar.
// Urutan dari terluar ke terdalam — cocok dengan cara ConcentricLayers 'cutaway' merender (radius terbesar duluan).
export const EARTH_LAYERS = [
  { id: 'kerak', name: 'Kerak Bumi', radius: 3.0, color: '#8a6d4b', opacity: 1, fact: 'Lapisan terluar tempat kita tinggal. Tebalnya rata-rata sekitar 35 km di daratan — sangat tipis dibanding lapisan lain.' },
  { id: 'mantel', name: 'Mantel', radius: 2.5, color: '#c1440e', opacity: 1, fact: 'Lapisan terbesar Bumi, sekitar 2.900 km tebalnya. Batuannya sangat panas dan bergerak sangat lambat (semi-plastis).' },
  { id: 'inti-luar', name: 'Inti Luar', radius: 1.6, color: '#f4a11d', opacity: 1, fact: 'Besi dan nikel dalam keadaan cair. Pergerakannya menghasilkan medan magnet yang melindungi Bumi.' },
  { id: 'inti-dalam', name: 'Inti Dalam', radius: 0.9, color: '#fff2b8', opacity: 1, fact: 'Pusat Bumi, besi-nikel padat meski suhunya 5.000-6.000°C — tetap padat karena tekanan yang sangat besar.' },
];
