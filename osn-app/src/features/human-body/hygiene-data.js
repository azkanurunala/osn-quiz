// osn-app/src/features/human-body/hygiene-data.js
// Tidak ada model organ asli yang relevan — semua penanda kebersihan adalah primitif,
// pola sama persis dgn SENSE_MARKERS di nervous-data.js (batch sebelumnya).
export const HYGIENE_MARKERS = [
  { id: 'tangan', position: [0.22, 0.15, 0.02], radius: 0.025, color: '#7ec8e3' },
  { id: 'gigi', position: [0, 0.79, 0.075], radius: 0.015, color: '#ffffff' },
  { id: 'kuku', position: [0.24, 0.13, 0.04], radius: 0.012, color: '#f5c6a5' },
  { id: 'rambut', position: [0, 0.91, 0], radius: 0.02, color: '#6b4a3a' },
  { id: 'kulit', position: [-0.22, 0.5, 0.04], radius: 0.025, color: '#f0c9a0' },
];

export const HYGIENE_PARTS = [
  { id: 'tangan', name: 'Cuci Tangan', fact: 'Cuci tangan pakai sabun & air mengalir minimal 20 detik, terutama sebelum makan dan setelah dari toilet, mencegah kuman berpindah dari tangan ke mulut/makanan.' },
  { id: 'gigi', name: 'Sikat Gigi', fact: 'Sikat gigi minimal 2x sehari (pagi & sebelum tidur) mencegah kerusakan gigi (karies) akibat sisa makanan & bakteri di mulut.' },
  { id: 'kuku', name: 'Potong Kuku', fact: 'Kuku yang panjang jadi tempat kuman & kotoran menumpuk — potong kuku rutin membantu mencegah penyakit menyebar lewat tangan.' },
  { id: 'rambut', name: 'Keramas', fact: 'Keramas rutin menjaga kulit kepala bersih dari minyak berlebih, kotoran, dan mencegah kutu rambut.' },
  { id: 'kulit', name: 'Mandi', fact: 'Mandi 2x sehari membersihkan keringat, debu, dan kuman dari permukaan kulit, mencegah bau badan & penyakit kulit.' },
];

export const HYGIENE_DETAIL_TARGET = [0, 0.4, 0];
export const HYGIENE_DETAIL_CAMERA = [0, 0.4, 1.3];
