// Penanda gejala umum di tubuh — pengantar visual sebelum soal studi kasus gejala->diagnosis.
// Bukan alat diagnosis; tiap fact menyebutkan beberapa kemungkinan penyakit, bukan jawaban tunggal.
export const SYMPTOM_MARKERS = [
  { id: 'demam', position: [0, 0.87, 0.08], radius: 0.02, color: '#ff7043' },
  { id: 'batuk', position: [0, 0.65, 0.09], radius: 0.025, color: '#ffa726' },
  { id: 'sakit-perut', position: [0, 0.42, 0.09], radius: 0.03, color: '#ab47bc' },
  { id: 'ruam', position: [0.22, 0.5, 0.05], radius: 0.02, color: '#ec407a' },
  { id: 'pusing', position: [0, 0.91, 0], radius: 0.025, color: '#42a5f5' },
];

export const SYMPTOM_PARTS = [
  { id: 'demam', name: 'Demam', fact: 'Suhu tubuh naik di atas normal, biasanya tanda tubuh sedang melawan infeksi — bisa muncul pada flu, demam berdarah, tifus, dan banyak penyakit lain. Perlu gejala lain utk memastikan penyebabnya.' },
  { id: 'batuk', name: 'Batuk', fact: 'Refleks tubuh mengeluarkan sesuatu dari saluran napas — bisa tanda flu biasa, radang tenggorokan, atau (jika berkepanjangan) TBC.' },
  { id: 'sakit-perut', name: 'Sakit Perut', fact: 'Bisa disebabkan banyak hal: masuk angin, diare, tipes, hingga maag. Lokasi & jenis nyerinya membantu menentukan penyebab.' },
  { id: 'ruam', name: 'Ruam Kulit', fact: 'Bintik atau kemerahan di kulit bisa tanda alergi, cacar air, campak, atau demam berdarah — pola dan sebarannya di kulit jadi petunjuk penting.' },
  { id: 'pusing', name: 'Pusing', fact: 'Bisa disebabkan kurang tidur, dehidrasi, tekanan darah rendah, hingga demam tinggi.' },
];

export const SYMPTOM_DETAIL_TARGET = [0, 0.55, 0];
export const SYMPTOM_DETAIL_CAMERA = [0, 0.55, 1.3];
