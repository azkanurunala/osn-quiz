// osn-app/src/features/human-body/biotech-data.js
// DNA double helix dibangun murni dari matematika (dua kurva sinus offset + "rungs" penghubung
// berkala) - tanpa model/library baru. Titik-titik dihitung sekali di sini (deterministik, bisa
// dites), component tinggal render via <Line> dari @react-three/drei.
const HELIX_TURNS = 3;
const HELIX_HEIGHT = 1.2;
const HELIX_RADIUS = 0.15;
const STRAND_SEGMENTS = 40;
const RUNG_COUNT = 18;

function helixPoint(t, phase) {
  const angle = t * HELIX_TURNS * Math.PI * 2 + phase;
  const y = t * HELIX_HEIGHT - HELIX_HEIGHT / 2;
  return [Math.cos(angle) * HELIX_RADIUS, y, Math.sin(angle) * HELIX_RADIUS];
}

export const DNA_STRAND_A_POINTS = Array.from({ length: STRAND_SEGMENTS }, (_, i) => helixPoint(i / (STRAND_SEGMENTS - 1), 0));
export const DNA_STRAND_B_POINTS = Array.from({ length: STRAND_SEGMENTS }, (_, i) => helixPoint(i / (STRAND_SEGMENTS - 1), Math.PI));
export const DNA_RUNGS = Array.from({ length: RUNG_COUNT }, (_, i) => {
  const t = i / (RUNG_COUNT - 1);
  return { from: helixPoint(t, 0), to: helixPoint(t, Math.PI) };
});

export const BIOTECH_PARTS = [
  {
    id: 'dna',
    name: 'DNA (Materi Genetik)',
    fact: 'DNA adalah materi genetik yang menyimpan "resep" tubuh makhluk hidup, diwariskan dari orang tua ke anak. Bioteknologi modern seperti rekayasa genetika memanfaatkan DNA utk menciptakan bibit unggul atau obat-obatan.',
  },
  {
    id: 'fermentasi',
    name: 'Fermentasi',
    fact: 'Bioteknologi konvensional memanfaatkan mikroorganisme (jamur/bakteri) utk mengubah bahan makanan — contohnya tempe (jamur Rhizopus), tape (ragi), yogurt (bakteri asam laktat), dan oncom.',
  },
];

export const FERMENTATION_JAR = { position: [0.9, -0.3, 0], radius: 0.28, height: 0.5 };
