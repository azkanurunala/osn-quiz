// tengkorak, tulang rusuk, tulang lengan, tulang kaki tidak punya model asli — primitif,
// diposisikan relatif terhadap tulang belakang & panggul asli (lihat komentar per bagian).
export const SKELETAL_PRIMITIVES = {
  tengkorak: { position: [0, 0.83, 0], radius: 0.09 },
  tulangRusuk: { position: [0, 0.5, 0], radiusX: 0.16, radiusY: 0.14, radiusZ: 0.1 },
  tulangLenganKiri: { from: [0.2, 0.58, 0], to: [0.22, 0.15, 0] },
  tulangLenganKanan: { from: [-0.2, 0.58, 0], to: [-0.22, 0.15, 0] },
  tulangKakiKiri: { from: [0.08, -0.03, 0], to: [0.09, -0.85, 0] },
  tulangKakiKanan: { from: [-0.08, -0.03, 0], to: [-0.09, -0.85, 0] },
};

export const SKELETAL_PARTS = [
  { id: 'tengkorak', name: 'Tengkorak', real: false, fact: 'Melindungi otak, tersusun dari tulang-tulang yang menyatu erat.' },
  { id: 'tulang-belakang', name: 'Tulang Belakang', real: true, models: ['/models/vertebrae.glb'], fact: 'Menopang tubuh & melindungi sumsum tulang belakang, tersusun dari ruas-ruas tulang (vertebra).' },
  { id: 'panggul', name: 'Panggul', real: true, models: ['/models/pelvis.glb'], fact: 'Menopang berat tubuh bagian atas dan menghubungkan tulang belakang dengan tulang kaki.' },
  { id: 'tulang-rusuk', name: 'Tulang Rusuk', real: false, fact: 'Membentuk rongga dada untuk melindungi jantung dan paru-paru.' },
  { id: 'tulang-lengan', name: 'Tulang Lengan', real: false, fact: 'Memungkinkan gerakan tangan, digerakkan oleh otot yang menempel di tulang.' },
  { id: 'tulang-kaki', name: 'Tulang Kaki', real: false, fact: 'Tulang terpanjang & terkuat di tubuh, menopang berat badan saat berdiri dan berjalan.' },
  { id: 'otot', name: 'Otot', real: false, fact: 'Jaringan yang menempel pada tulang dan berkontraksi untuk menggerakkan tubuh.' },
];

// Skeleton spans nearly the full body (skull to feet) — wider view than the organ-cluster scenes.
export const SKELETAL_DETAIL_TARGET = [0, 0.1, 0];
export const SKELETAL_DETAIL_CAMERA = [0, 0.1, 1.6];
