// tengkorak, tulang lengan, tulang kaki tidak punya model asli — primitif, diposisikan relatif
// terhadap tulang belakang & panggul asli. Tulang rusuk direpresentasikan sbg beberapa garis
// lengkung (bukan satu bola besar spt sebelumnya, yg terlihat seperti noda melayang di dada).
export const SKELETAL_PRIMITIVES = {
  tengkorak: { position: [0, 0.83, 0], radius: 0.09 },
  tulangLenganKiri: { from: [0.2, 0.58, 0], to: [0.22, 0.15, 0] },
  tulangLenganKanan: { from: [-0.2, 0.58, 0], to: [-0.22, 0.15, 0] },
  tulangKakiKiri: { from: [0.08, -0.03, 0], to: [0.09, -0.85, 0] },
  tulangKakiKanan: { from: [-0.08, -0.03, 0], to: [-0.09, -0.85, 0] },
};

const RIB_Y_SPAN = [0.4, 0.62];
const RIB_COUNT = 5;
const RIB_RADIUS_X = 0.14;
const RIB_RADIUS_Z = 0.09;
const RIB_ARC_ANGLE = Math.PI * 0.9;
const RIB_ARC_SEGMENTS = 16;

function ribArcPoints(y) {
  const points = [];
  for (let i = 0; i <= RIB_ARC_SEGMENTS; i += 1) {
    const t = i / RIB_ARC_SEGMENTS;
    const angle = -RIB_ARC_ANGLE / 2 + t * RIB_ARC_ANGLE;
    points.push([Math.sin(angle) * RIB_RADIUS_X, y, Math.cos(angle) * RIB_RADIUS_Z]);
  }
  return points;
}

export const RIB_ARCS = Array.from({ length: RIB_COUNT }, (_, i) => {
  const t = i / (RIB_COUNT - 1);
  return ribArcPoints(RIB_Y_SPAN[0] + t * (RIB_Y_SPAN[1] - RIB_Y_SPAN[0]));
});

export const SKELETAL_PARTS = [
  { id: 'tengkorak', name: 'Tengkorak', real: false, fact: 'Melindungi otak, tersusun dari tulang-tulang yang menyatu erat.' },
  { id: 'tulang-belakang', name: 'Tulang Belakang', real: true, models: ['/models/vertebrae.glb'], tint: '#f0e6d2', fact: 'Menopang tubuh & melindungi sumsum tulang belakang, tersusun dari ruas-ruas tulang (vertebra).' },
  { id: 'panggul', name: 'Panggul', real: true, models: ['/models/pelvis.glb'], tint: '#f0e6d2', fact: 'Menopang berat tubuh bagian atas dan menghubungkan tulang belakang dengan tulang kaki.' },
  { id: 'tulang-rusuk', name: 'Tulang Rusuk', real: false, fact: 'Membentuk rongga dada untuk melindungi jantung dan paru-paru.' },
  { id: 'tulang-lengan', name: 'Tulang Lengan', real: false, fact: 'Memungkinkan gerakan tangan, digerakkan oleh otot yang menempel di tulang.' },
  { id: 'tulang-kaki', name: 'Tulang Kaki', real: false, fact: 'Tulang terpanjang & terkuat di tubuh, menopang berat badan saat berdiri dan berjalan.' },
  { id: 'otot', name: 'Otot', real: false, fact: 'Jaringan yang menempel pada tulang dan berkontraksi untuk menggerakkan tubuh.' },
];

export const SKELETAL_DETAIL_TARGET = [0, 0.1, 0];
export const SKELETAL_DETAIL_CAMERA = [0, 0.1, 1.6];
