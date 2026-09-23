// mulut, kerongkongan, lambung tidak punya model asli — primitif yang menyambung ke usus halus asli.
// Posisi direvisi 2026-09-23 setelah review visual menemukan gap terlihat antar segmen: usus halus
// asli (gltf-transform inspect) punya bboxMin y=0.09983, bboxMax y=0.3652 — rantai
// mulut->kerongkongan->lambung->usus sekarang tumpang tindih sedikit tiap sambungan, bukan
// mengambang terpisah seperti sebelumnya.
export const DIGESTIVE_PRIMITIVES = {
  mulut: { position: [0, 0.83, 0.09], radius: 0.02 },
  kerongkongan: { from: [0, 0.8, 0.06], to: [0, 0.5, 0.02], radius: 0.012 },
  lambung: { position: [0.02, 0.4, 0.03], radiusX: 0.06, radiusY: 0.1, radiusZ: 0.05 },
};

export const DIGESTIVE_PARTS = [
  { id: 'mulut', name: 'Mulut', real: false, fact: 'Tempat makanan mulai dicerna secara mekanik (dikunyah) dan kimiawi (enzim ptialin memecah karbohidrat).' },
  { id: 'kerongkongan', name: 'Kerongkongan (Esofagus)', real: false, fact: 'Saluran yang mendorong makanan dari mulut ke lambung dengan gerakan meremas (peristaltik).' },
  { id: 'lambung', name: 'Lambung', real: false, fact: 'Mencerna makanan dengan asam lambung dan enzim pepsin, mengubahnya jadi bubur (kim).' },
  { id: 'usus-halus', name: 'Usus Halus', real: true, models: ['/models/small_intestine.glb'], tint: '#e0a898', fact: 'Tempat pencernaan selesai & sebagian besar nutrisi diserap ke darah. Panjangnya bisa mencapai 6-7 meter.' },
  { id: 'usus-besar', name: 'Usus Besar', real: true, models: ['/models/large_intestine.glb'], tint: '#c9967a', fact: 'Menyerap air dari sisa makanan & membentuk feses, dibantu bakteri baik.' },
];

// Target/camera re-centered on the taller mulut(~0.85)-to-usus-bottom(~0.10) span (~0.75 units) —
// previously centered too low/too close, contributing to the disconnected-looking framing.
export const DIGESTIVE_DETAIL_TARGET = [0, 0.48, 0];
export const DIGESTIVE_DETAIL_CAMERA = [0, 0.48, 1.25];
