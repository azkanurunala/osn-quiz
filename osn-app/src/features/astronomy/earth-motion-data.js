// osn-app/src/features/astronomy/earth-motion-data.js
export const EARTH_MOTION = {
  sun: { texture: '/textures/2k_sun.jpg', radius: 1.6 },
  earth: {
    texture: '/textures/2k_earth_daymap.jpg',
    radius: 0.8,
    orbitRadius: 6,
    orbitSpeed: 0.5, // sekolastik: beberapa detik per putaran, bukan 365 hari asli
    spinSpeed: 0.03,
    axialTiltRad: 0.41, // ~23.5°
  },
  facts: {
    rotasi: 'Rotasi: Bumi berputar pada porosnya 1 kali setiap 24 jam. Ini menyebabkan pergantian siang dan malam.',
    revolusi: 'Revolusi: Bumi mengelilingi Matahari 1 kali setiap 365,25 hari. Karena porosnya miring 23,5°, revolusi ini menyebabkan pergantian musim.',
  },
};

export function getEarthOrbitPosition(elapsedSeconds) {
  const angle = elapsedSeconds * EARTH_MOTION.earth.orbitSpeed;
  return {
    x: Math.cos(angle) * EARTH_MOTION.earth.orbitRadius,
    z: Math.sin(angle) * EARTH_MOTION.earth.orbitRadius,
  };
}
