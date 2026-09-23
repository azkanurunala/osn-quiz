// osn-app/src/features/astronomy/earth-layers-data.js
// Radius sekolastik (bukan proporsi asli) supaya ke-4 lapisan tetap jelas beda ukurannya di layar.
// Urutan dari terluar ke terdalam. mode='shell' (transparan bertingkat) dipakai, bukan 'cutaway':
// sebuah wedge-cutout di tiap lapisan konsentris pada sudut yang sama akan menembus lurus ke
// belakang scene (semua lapisan "berlubang" di titik yang sama), bukan memperlihatkan lapisan di
// dalamnya — jadi transparansi bertingkat (pola yang sama seperti atmosphere-data.js) lebih akurat
// menunjukkan struktur berlapis Bumi.
// Warna & opacity dipilih dengan kontras value besar (gelap->terang), bukan cuma beda hue tipis,
// karena SceneCanvas menaruh pointLight persis di titik pusat (sama seperti pusat tiap lapisan) —
// itu membuat tiap lapisan ter-render nyaris tanpa gradasi shading (cahaya lurus keluar radial =
// tanpa bayangan), jadi lapisan HARUS terpisah oleh warna/opacity itu sendiri, bukan oleh shading.
export const EARTH_LAYERS = [
  { id: 'kerak', name: 'Kerak Bumi', radius: 3.0, color: '#5d4a3a', opacity: 0.18, fact: 'Lapisan terluar tempat kita tinggal. Tebalnya rata-rata sekitar 35 km di daratan — sangat tipis dibanding lapisan lain.' },
  { id: 'mantel', name: 'Mantel', radius: 2.5, color: '#d6431f', opacity: 0.3, fact: 'Lapisan terbesar Bumi, sekitar 2.900 km tebalnya. Batuannya sangat panas dan bergerak sangat lambat (semi-plastis).' },
  { id: 'inti-luar', name: 'Inti Luar', radius: 1.6, color: '#ffa726', opacity: 0.55, fact: 'Besi dan nikel dalam keadaan cair. Pergerakannya menghasilkan medan magnet yang melindungi Bumi.' },
  { id: 'inti-dalam', name: 'Inti Dalam', radius: 0.9, color: '#fff59d', opacity: 0.95, fact: 'Pusat Bumi, besi-nikel padat meski suhunya 5.000-6.000°C — tetap padat karena tekanan yang sangat besar.' },
];
