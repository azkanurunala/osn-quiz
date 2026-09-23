export { BACKGROUND_TEXTURE } from './astronomy/constants.js';

export const SUN = {
  name: 'Matahari',
  color: '#ffcc33',
  radius: 2.2,
  texture: '/textures/2k_sun.jpg',
};

// order = urutan dari Matahari. orbitSpeed proporsional dengan 1/periode-orbit-nyata
// (dalam tahun Bumi) supaya planet lebih dekat memang terlihat lebih cepat mengorbit.
export const PLANETS = [
  { id: 'merkurius', name: 'Merkurius', order: 1, color: '#9c9c9c', radius: 0.35, orbitRadius: 4, orbitSpeed: 4.15, texture: '/textures/2k_mercury.jpg', fact: 'Planet terdekat dari Matahari. Permukaannya penuh kawah, mirip Bulan, karena nyaris tidak punya atmosfer pelindung.' },
  { id: 'venus', name: 'Venus', order: 2, color: '#e8c27a', radius: 0.55, orbitRadius: 5.5, orbitSpeed: 1.62, texture: '/textures/2k_venus_surface.jpg', fact: 'Planet terpanas di tata surya. Awan tebal gas rumah kacanya menjebak panas Matahari.' },
  { id: 'bumi', name: 'Bumi', order: 3, color: '#4a90d9', radius: 0.6, orbitRadius: 7, orbitSpeed: 1, texture: '/textures/2k_earth_daymap.jpg', fact: 'Satu-satunya planet yang diketahui punya kehidupan. Sekitar 70% permukaannya tertutup air.' },
  { id: 'mars', name: 'Mars', order: 4, color: '#c1440e', radius: 0.4, orbitRadius: 8.5, orbitSpeed: 0.53, texture: '/textures/2k_mars.jpg', fact: 'Dijuluki Planet Merah karena tanahnya kaya oksida besi (karat).' },
  { id: 'jupiter', name: 'Jupiter', order: 5, color: '#d2a679', radius: 1.4, orbitRadius: 11, orbitSpeed: 0.084, texture: '/textures/2k_jupiter.jpg', fact: 'Planet terbesar di tata surya. Punya badai raksasa yang disebut Bintik Merah Besar.' },
  { id: 'saturnus', name: 'Saturnus', order: 6, color: '#e3c78a', radius: 1.2, orbitRadius: 13.5, orbitSpeed: 0.034, texture: '/textures/2k_saturn.jpg', ring: { texture: '/textures/2k_saturn_ring_alpha.png', innerRadius: 1.56, outerRadius: 2.76 }, fact: 'Terkenal karena cincin lebar yang tersusun dari es dan batuan.' },
  { id: 'uranus', name: 'Uranus', order: 7, color: '#7fd4d9', radius: 0.9, orbitRadius: 16, orbitSpeed: 0.0119, texture: '/textures/2k_uranus.jpg', fact: 'Berputar menyamping — porosnya miring sekitar 98 derajat, tidak seperti planet lain.' },
  { id: 'neptunus', name: 'Neptunus', order: 8, color: '#3a5fcd', radius: 0.85, orbitRadius: 18, orbitSpeed: 0.0061, texture: '/textures/2k_neptune.jpg', fact: 'Planet terjauh dari Matahari, dikenal karena angin terkencang di tata surya.' },
];

// Posisi planet di bidang X-Z pada waktu elapsedSeconds (pure, tidak butuh Three.js).
export function getPlanetPosition(planet, elapsedSeconds) {
  const angle = elapsedSeconds * planet.orbitSpeed;
  return {
    x: Math.cos(angle) * planet.orbitRadius,
    z: Math.sin(angle) * planet.orbitRadius,
  };
}
