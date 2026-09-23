// mulut, kerongkongan, lambung tidak punya model asli — primitif yang menyambung ke usus halus asli
// (usus halus dari dataset dimulai sekitar y=0.10-0.13, lihat spec).
export const DIGESTIVE_PRIMITIVES = {
  mulut: { position: [0, 0.83, 0.09], radius: 0.02 },
  kerongkongan: { from: [0, 0.8, 0.06], to: [0, 0.55, 0.02], radius: 0.012 },
  lambung: { position: [0.03, 0.42, 0.03], radiusX: 0.06, radiusY: 0.09, radiusZ: 0.05 },
};

export const DIGESTIVE_PARTS = [
  { id: 'mulut', name: 'Mulut', real: false, fact: 'Tempat makanan mulai dicerna secara mekanik (dikunyah) dan kimiawi (enzim ptialin memecah karbohidrat).' },
  { id: 'kerongkongan', name: 'Kerongkongan (Esofagus)', real: false, fact: 'Saluran yang mendorong makanan dari mulut ke lambung dengan gerakan meremas (peristaltik).' },
  { id: 'lambung', name: 'Lambung', real: false, fact: 'Mencerna makanan dengan asam lambung dan enzim pepsin, mengubahnya jadi bubur (kim).' },
  { id: 'usus-halus', name: 'Usus Halus', real: true, models: ['/models/small_intestine.glb'], fact: 'Tempat pencernaan selesai & sebagian besar nutrisi diserap ke darah. Panjangnya bisa mencapai 6-7 meter.' },
  { id: 'usus-besar', name: 'Usus Besar', real: true, models: ['/models/large_intestine.glb'], fact: 'Menyerap air dari sisa makanan & membentuk feses, dibantu bakteri baik.' },
];

export const DIGESTIVE_DETAIL_TARGET = [0, 0.35, 0];
export const DIGESTIVE_DETAIL_CAMERA = [0, 0.35, 0.85];
