// telinga, hidung, lidah, kulit(peraba) tidak punya model asli — penanda primitif di sekitar kepala.
export const SENSE_MARKERS = [
  { id: 'telinga', position: [0.08, 0.82, 0], radius: 0.02, color: '#e8a87c' },
  { id: 'hidung', position: [0, 0.8, 0.09], radius: 0.018, color: '#e29b73' },
  { id: 'lidah', position: [0, 0.78, 0.07], radius: 0.02, color: '#d9718a' },
  { id: 'kulit', position: [0.25, 0.5, 0.03], radius: 0.025, color: '#f0c9a0' },
];

export const NERVOUS_PARTS = [
  { id: 'otak', name: 'Otak', real: true, models: ['/models/brain.glb'], tint: '#c9a8b8', fact: 'Pusat kendali tubuh — mengatur pikiran, gerakan, dan semua indera.' },
  { id: 'sumsum-tulang-belakang', name: 'Sumsum Tulang Belakang', real: true, models: ['/models/spinal_cord.glb'], tint: '#ede0c8', fact: 'Jalur utama sinyal saraf antara otak dan seluruh tubuh, dilindungi oleh tulang belakang.' },
  // eye.glb listed twice deliberately: the source dataset only ships one eye model, so the scene
  // renders it a second time mirrored (scale=[-1,1,1]) for the other eye — see Step 4 below.
  { id: 'mata', name: 'Mata (Penglihatan)', real: true, models: ['/models/eye.glb', '/models/eye.glb'], tint: '#dce8f0', fact: 'Indera penglihatan — menangkap cahaya dan mengirim sinyal gambar ke otak.' },
  { id: 'telinga', name: 'Telinga (Pendengaran)', real: false, fact: 'Indera pendengaran — menangkap getaran suara dan membantu keseimbangan tubuh.' },
  { id: 'hidung', name: 'Hidung (Penciuman)', real: false, fact: 'Indera penciuman — mendeteksi partikel bau di udara.' },
  { id: 'lidah', name: 'Lidah (Pengecap)', real: false, fact: 'Indera pengecap — mendeteksi rasa manis, asin, asam, pahit, dan umami.' },
  { id: 'kulit', name: 'Kulit (Peraba)', real: false, fact: 'Indera peraba — mendeteksi sentuhan, tekanan, suhu, dan rasa sakit. Menutupi seluruh permukaan tubuh, bukan cuma satu titik.' },
];

// Rentang lebih luas dari scene lain karena mencakup otak (atas) sampai ujung bawah sumsum tulang
// belakang (lihat spec: brain y=0.76-0.90, spinal_cord y=0.28-0.75).
export const NERVOUS_DETAIL_TARGET = [0, 0.6, 0];
export const NERVOUS_DETAIL_CAMERA = [0, 0.6, 1.1];
