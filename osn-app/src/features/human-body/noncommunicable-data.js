// osn-app/src/features/human-body/noncommunicable-data.js
// Reuse 4 organ model asli dari Batch 3a, ditampilkan dgn tint gelap utk merepresentasikan
// kerusakan akibat penyakit tidak menular (bukan infeksi, tapi gaya hidup/faktor internal).
export const NONCOMMUNICABLE_PARTS = [
  {
    id: 'jantung',
    name: 'Jantung (Penyakit Jantung Koroner)',
    models: ['/models/heart.glb'],
    tint: '#5c2a2a',
    fact: 'Penyakit Jantung Koroner terjadi saat pembuluh darah yang memberi makan jantung menyempit akibat penumpukan lemak (plak). Disebut "tidak menular" karena penyebabnya bukan kuman, melainkan gaya hidup seperti merokok, kurang olahraga, dan makanan berlemak tinggi.',
  },
  {
    id: 'paru-paru',
    name: 'Paru-paru (PPOK)',
    models: ['/models/lung.glb'],
    tint: '#3a3a3a',
    fact: 'PPOK (Penyakit Paru Obstruktif Kronis) sering terjadi pada perokok jangka panjang — asap rokok merusak kantong-kantong udara kecil di paru-paru sehingga makin sulit bernapas seiring waktu.',
  },
  {
    id: 'otak',
    name: 'Otak (Stroke)',
    models: ['/models/brain.glb'],
    tint: '#4a3a52',
    fact: 'Stroke terjadi saat aliran darah ke sebagian otak terhenti (tersumbat atau pembuluh darahnya pecah), merusak sel-sel otak di area tersebut. Risikonya meningkat karena tekanan darah tinggi & kolesterol tinggi.',
  },
  {
    id: 'ginjal',
    name: 'Ginjal (Gagal Ginjal Kronis)',
    models: ['/models/kidney_l.glb', '/models/kidney_r.glb'],
    tint: '#5c4a2a',
    fact: 'Gagal Ginjal Kronis terjadi saat ginjal kehilangan kemampuan menyaring darah secara bertahap, sering dipicu oleh diabetes & tekanan darah tinggi yang tidak terkontrol dalam waktu lama.',
  },
];

export const NONCOMMUNICABLE_DETAIL_TARGET = [0, 0.45, 0];
export const NONCOMMUNICABLE_DETAIL_CAMERA = [0, 0.45, 1.4];
