export const CIRCULATORY_PARTS = [
  {
    id: 'jantung',
    name: 'Jantung',
    models: ['/models/heart.glb'],
    fact: 'Otot pemompa darah, berdetak sekitar 60-100 kali per menit, mengalirkan darah ke seluruh tubuh.',
  },
  {
    id: 'pembuluh-darah',
    name: 'Pembuluh Darah',
    models: ['/models/blood_vasculature_heart.glb'],
    fact: 'Arteri membawa darah kaya oksigen DARI jantung ke seluruh tubuh; vena membawa darah kembali KE jantung. Bersama-sama membentuk jaringan pembuluh yang mengalirkan darah ke seluruh tubuh.',
  },
];

export const CIRCULATORY_DETAIL_TARGET = [0, 0.45, 0];
export const CIRCULATORY_DETAIL_CAMERA = [0, 0.45, 0.65];
