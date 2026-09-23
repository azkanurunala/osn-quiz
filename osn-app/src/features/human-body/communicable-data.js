// osn-app/src/features/human-body/communicable-data.js
// TBC reuses the real lung.glb (tinted). Flu/Diare/Cacar have no organ-level real model — represented
// as primitive pathogen markers (virus/bakteri/ruam) at their typical entry/symptom point on the body.
export const PATHOGEN_MARKERS = {
  flu: { position: [0, 0.8, 0.09], radius: 0.018 },
  diare: { position: [0.03, 0.42, 0.04], radius: 0.02 },
  cacar: {
    position: [0.22, 0.5, 0.05],
    radius: 0.012,
    spots: [
      [0, 0, 0],
      [0.02, 0.015, 0],
      [-0.015, -0.02, 0],
    ],
  },
};

export const COMMUNICABLE_PARTS = [
  {
    id: 'tbc',
    name: 'TBC (Tuberkulosis)',
    real: true,
    models: ['/models/lung.glb'],
    tint: '#4a4a4a',
    fact: 'Tuberkulosis (TBC) disebabkan bakteri Mycobacterium tuberculosis yang menyerang paru-paru, menular lewat percikan batuk/bersin orang yang terinfeksi (penularan lewat udara).',
  },
  {
    id: 'flu',
    name: 'Flu / Pilek',
    real: false,
    fact: 'Disebabkan virus yang menyerang saluran pernapasan, menular lewat percikan bersin/batuk (droplet) atau menyentuh permukaan yang terkontaminasi lalu menyentuh wajah.',
  },
  {
    id: 'diare',
    name: 'Diare',
    real: false,
    fact: 'Sering disebabkan bakteri atau virus yang masuk lewat makanan/minuman yang tidak bersih — makanya penting mencuci tangan & memasak makanan sampai matang.',
  },
  {
    id: 'cacar',
    name: 'Cacar / Campak',
    real: false,
    fact: 'Disebabkan virus yang menular lewat kontak langsung dengan kulit penderita atau percikan napas, ditandai bintik-bintik merah di kulit.',
  },
];

export const COMMUNICABLE_DETAIL_TARGET = [0, 0.55, 0];
export const COMMUNICABLE_DETAIL_CAMERA = [0, 0.55, 0.8];
