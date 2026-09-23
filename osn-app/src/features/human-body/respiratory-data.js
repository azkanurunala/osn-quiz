// hidung tidak punya model asli di dataset — direpresentasikan sebagai penanda primitif kecil di posisi kepala.
export const NOSE_MARKER = { position: [0, 0.83, 0.09], radius: 0.02, color: '#e8a87c' };

export const RESPIRATORY_PARTS = [
  {
    id: 'hidung',
    name: 'Hidung',
    real: false,
    fact: 'Menyaring, menghangatkan, dan melembapkan udara sebelum masuk ke paru-paru.',
  },
  {
    id: 'trakea',
    name: 'Trakea (Batang Tenggorok)',
    real: true,
    models: ['/models/trachea.glb'],
    fact: 'Saluran udara utama menuju paru-paru, dilapisi cincin tulang rawan agar tetap terbuka.',
  },
  {
    id: 'bronkus',
    name: 'Bronkus',
    real: true,
    models: ['/models/main_bronchus.glb'],
    fact: 'Cabang trakea yang mengalirkan udara ke masing-masing paru-paru kanan dan kiri.',
  },
  {
    id: 'paru-paru',
    name: 'Paru-paru',
    real: true,
    models: ['/models/lung.glb'],
    fact: 'Tempat pertukaran oksigen dan karbon dioksida terjadi di kantung-kantung kecil bernama alveolus.',
  },
];

export const RESPIRATORY_DETAIL_TARGET = [0, 0.52, 0];
export const RESPIRATORY_DETAIL_CAMERA = [0, 0.52, 0.6];
