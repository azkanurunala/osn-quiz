export const ECLIPSE_BODIES = {
  sun: { texture: '/textures/2k_sun.jpg', radius: 1.2 },
  earth: { texture: '/textures/2k_earth_daymap.jpg', radius: 0.9 },
  moon: { texture: '/textures/2k_moon.jpg', radius: 0.3 },
};

// Posisi sepanjang garis lurus Matahari-Bumi-Bulan untuk tiap mode (semua di sumbu X, y=z=0).
export const ECLIPSE_LAYOUTS = {
  solar: {
    label: 'Gerhana Matahari',
    sun: [-8, 0, 0],
    earth: [4, 0, 0],
    moon: [1, 0, 0], // di antara Matahari & Bumi
    blockerId: 'moon',
    fact: 'Gerhana Matahari terjadi saat Bulan berada tepat di antara Matahari dan Bumi, sehingga bayangan Bulan jatuh ke sebagian permukaan Bumi. Ini hanya terjadi saat Bulan Baru.',
  },
  lunar: {
    label: 'Gerhana Bulan',
    sun: [-8, 0, 0],
    earth: [0, 0, 0],
    moon: [4, 0, 0], // di belakang Bumi dari sudut pandang Matahari
    blockerId: 'earth',
    fact: 'Gerhana Bulan terjadi saat Bumi berada tepat di antara Matahari dan Bulan, sehingga bayangan Bumi jatuh ke permukaan Bulan. Ini hanya terjadi saat Bulan Purnama.',
  },
};

export const ECLIPSE_ALIGNMENT_FACT = 'Gerhana tidak terjadi setiap bulan karena orbit Bulan miring sekitar 5° terhadap orbit Bumi mengelilingi Matahari — jadi ketiga benda jarang benar-benar sejajar.';
