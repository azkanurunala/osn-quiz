// osn-app/src/features/astronomy/moon-phases-data.js
export const MOON_PHASES_LAYOUT = {
  earth: { texture: '/textures/2k_earth_daymap.jpg', radius: 1.1 },
  moon: { texture: '/textures/2k_moon.jpg', radius: 0.35, orbitRadius: 4, orbitSpeed: 0.4 },
};

export const PHASE_NAMES = [
  'Bulan Baru', 'Sabit Awal', 'Kuartir Awal', 'Cembung Awal',
  'Purnama', 'Cembung Akhir', 'Kuartir Akhir', 'Sabit Akhir',
];

export function getMoonOrbitPosition(elapsedSeconds) {
  const angle = elapsedSeconds * MOON_PHASES_LAYOUT.moon.orbitSpeed;
  return {
    x: Math.cos(angle) * MOON_PHASES_LAYOUT.moon.orbitRadius,
    z: Math.sin(angle) * MOON_PHASES_LAYOUT.moon.orbitRadius,
    angle,
  };
}

export function getPhaseNameAtAngle(angleRad) {
  const twoPi = Math.PI * 2;
  const normalized = ((angleRad % twoPi) + twoPi) % twoPi;
  const index = Math.round(normalized / (twoPi / 8)) % 8;
  return PHASE_NAMES[index];
}
