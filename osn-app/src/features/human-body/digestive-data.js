// mulut, kerongkongan, lambung tidak punya model asli — primitif yang menyambung ke usus halus asli.
// Posisi direvisi 2026-09-23 setelah review visual menemukan gap terlihat antar segmen: usus halus
// asli (gltf-transform inspect) punya bboxMin y=0.09983, bboxMax y=0.3652 — rantai
// mulut->kerongkongan->lambung->usus sekarang tumpang tindih sedikit tiap sambungan, bukan
// mengambang terpisah seperti sebelumnya.
// lambung direvisi 2026-09-24: dari 1 sphere oval polos (terlihat seperti telur) jadi 3 sphere
// bertumpuk yg melengkung dari kiri-atas (fundus, dekat sambungan kerongkongan) turun ke
// kanan-bawah (antrum, dekat sambungan ke usus halus) — lebih mirip bentuk J lambung sungguhan.
export const DIGESTIVE_PRIMITIVES = {
  mulut: { position: [0, 0.83, 0.09], radius: 0.02 },
  kerongkongan: { from: [0, 0.8, 0.06], to: [0, 0.5, 0.02], radius: 0.012 },
  lambung: [
    { id: 'fundus', position: [0, 0.49, 0.025], radius: 0.055 },
    { id: 'body', position: [0.035, 0.41, 0.02], radius: 0.05 },
    { id: 'antrum', position: [0.055, 0.35, 0.015], radius: 0.032 },
  ],
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
