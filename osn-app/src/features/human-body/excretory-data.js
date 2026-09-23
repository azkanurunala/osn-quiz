export const EXCRETORY_PARTS = [
  {
    id: 'ginjal',
    name: 'Ginjal',
    models: ['/models/kidney_l.glb', '/models/kidney_r.glb'],
    fact: 'Menyaring darah dan membuang zat sisa sebagai urine. Manusia punya sepasang ginjal. Selain ginjal, kulit (lewat keringat), paru-paru (lewat karbon dioksida), dan hati (lewat empedu) juga ikut membuang zat sisa dari tubuh.',
  },
  {
    id: 'ureter',
    name: 'Ureter',
    models: ['/models/ureter_l.glb', '/models/ureter_r.glb'],
    fact: 'Saluran yang mengalirkan urine dari ginjal menuju kandung kemih.',
  },
  {
    id: 'kandung-kemih',
    name: 'Kandung Kemih',
    models: ['/models/urinary_bladder.glb'],
    fact: 'Kantung tempat urine ditampung sementara sebelum dikeluarkan dari tubuh.',
  },
];

// Kamera "Detail Organ": pusat kira-kira di tengah area ginjal-ureter-kandung kemih
// (dihitung dari bounding box asli tiap model — lihat spec untuk data lengkapnya).
export const EXCRETORY_DETAIL_TARGET = [0, 0.18, 0];
export const EXCRETORY_DETAIL_CAMERA = [0, 0.18, 0.55];
