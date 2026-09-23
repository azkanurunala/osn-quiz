// osn-app/src/features/human-body/nutrition-data.js
// "Isi Piringku" - pedoman gizi seimbang resmi Indonesia (pengganti "4 Sehat 5 Sempurna").
// Piring dibagi 4 wedge pakai CircleGeometry(radius, segments, thetaStart, thetaLength) - lihat
// component utk render. thetaLength dlm radian, total 4 wedge harus = 2*Math.PI (lingkaran penuh).
export const PLATE_RADIUS = 0.9;

export const NUTRITION_WEDGES = [
  {
    id: 'karbohidrat',
    name: 'Karbohidrat (Makanan Pokok)',
    thetaStart: 0,
    thetaLength: (2 * Math.PI) / 3,
    color: '#f0c14b',
    fact: 'Sumber energi utama tubuh — nasi, jagung, kentang, roti, mi. Porsinya paling besar di piring (sekitar sepertiga), karena tubuh butuh energi paling banyak dari kelompok ini.',
  },
  {
    id: 'sayur',
    name: 'Sayur-Sayuran',
    thetaStart: (2 * Math.PI) / 3,
    thetaLength: (2 * Math.PI) / 3,
    color: '#4caf50',
    fact: 'Sumber vitamin, mineral, dan serat — bayam, wortel, brokoli, kangkung. Porsinya juga besar (sekitar sepertiga piring) utk menjaga pencernaan & daya tahan tubuh.',
  },
  {
    id: 'protein',
    name: 'Protein (Lauk-Pauk)',
    thetaStart: (4 * Math.PI) / 3,
    thetaLength: Math.PI / 3,
    color: '#c0392b',
    fact: 'Membangun & memperbaiki sel tubuh — ikan, telur, ayam, tahu, tempe. Porsi lebih kecil dibanding karbohidrat/sayur (sekitar seperenam piring), tapi tetap wajib ada.',
  },
  {
    id: 'buah',
    name: 'Buah-Buahan',
    thetaStart: (4 * Math.PI) / 3 + Math.PI / 3,
    thetaLength: Math.PI / 3,
    color: '#e67e22',
    fact: 'Sumber vitamin & serat tambahan — pisang, jeruk, pepaya, apel. Porsi kecil (sekitar seperenam piring), biasanya sbg pelengkap/penutup makan.',
  },
];

export const WATER_GLASS = {
  position: [1.3, -0.1, 0],
  radiusTop: 0.18,
  radiusBottom: 0.15,
  height: 0.5,
  fact: 'Air putih minimal 8 gelas sehari membantu pencernaan, menjaga suhu tubuh, dan mengangkut nutrisi ke seluruh sel tubuh. Bukan bagian dari piring, tapi wajib ada di setiap waktu makan.',
};
