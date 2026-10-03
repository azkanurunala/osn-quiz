// Diagram table for question illustrations (10s phase) and explanation animations (15s phase).
//
// Keywords live in diagram-data.js so the matcher stays testable without a JSX toolchain.

import { DIAGRAM_DATA } from './diagram-data';
import { Tuas, Katrol, BidangMiring, RodaPoros, GayaResultan } from './families/mekanika';
import { RangkaianSeri, RangkaianParalel, KonduktorIsolator, Magnetik } from './families/listrik';
import { RantaiMakanan, SiklusAir, Metamorfosis, Ekosistem } from './families/ekologi';
import { SaluranPencernaan, PenyerapanNutrisi, OrganEkskresi, PernapasanParu, PeredaranDarah } from './families/tubuh';
import {
  PerambatanCahaya, PemantulanCahaya, PembiasanCahaya, PerpindahanPanas, PemantulanBunyi, PemisahanCampuran,
} from './families/fisika';
import { TataSurya, RotasiRevolusi, Gerhana, FaseBulan, LapisanAtmosfer, SiklusBatu } from './families/bumi';
import { KeanekaragamanHayati, VariabelPenelitian, AlatPengukuran, MetodeIlmiah } from './families/sains';
import { PohonFaktor, GarisBilangan, PolaBilangan } from './families/bilangan';
import { Pecahan } from './families/pecahan';
import { BangunDatar, LingkaranUnsur, Sudut } from './families/geometri-datar';
import { BangunRuang, JaringJaring, BangunRuangGabungan } from './families/geometri-ruang';
import { TanggaSatuan, KecepatanJarakWaktu, Debit, SkalaPeta } from './families/pengukuran';
import { DiagramBatang, DiagramLingkaran, MeanMedianModus, PeluangDadu } from './families/statistika';
import { DiskonPPN, TimbanganAljabar } from './families/aljabar';

const COMPONENTS = {
  tuas: Tuas,
  katrol: Katrol,
  'bidang-miring': BidangMiring,
  'roda-poros': RodaPoros,
  'gaya-resultan': GayaResultan,
  'rangkaian-seri': RangkaianSeri,
  'rangkaian-paralel': RangkaianParalel,
  'konduktor-isolator': KonduktorIsolator,
  magnet: Magnetik,
  'rantai-makanan': RantaiMakanan,
  'siklus-air': SiklusAir,
  metamorfosis: Metamorfosis,
  ekosistem: Ekosistem,
  'saluran-pencernaan': SaluranPencernaan,
  'penyerapan-nutrisi': PenyerapanNutrisi,
  'organ-ekskresi': OrganEkskresi,
  'pernapasan-paru': PernapasanParu,
  'peredaran-darah': PeredaranDarah,
  'perambatan-cahaya': PerambatanCahaya,
  'pemantulan-cahaya': PemantulanCahaya,
  'pembiasan-cahaya': PembiasanCahaya,
  'perpindahan-panas': PerpindahanPanas,
  'pemantulan-bunyi': PemantulanBunyi,
  'pemisahan-campuran': PemisahanCampuran,
  'tata-surya': TataSurya,
  'rotasi-revolusi': RotasiRevolusi,
  gerhana: Gerhana,
  'fase-bulan': FaseBulan,
  'lapisan-atmosfer': LapisanAtmosfer,
  'siklus-batu': SiklusBatu,
  'keanekaragaman-hayati': KeanekaragamanHayati,
  'variabel-penelitian': VariabelPenelitian,
  'alat-pengukuran': AlatPengukuran,
  'metode-ilmiah': MetodeIlmiah,

  // ---------------------------------------------------------------- MTK
  'pohon-faktor': PohonFaktor,
  'garis-bilangan': GarisBilangan,
  'pola-bilangan': PolaBilangan,
  pecahan: Pecahan,
  'bangun-datar': BangunDatar,
  'lingkaran-unsur': LingkaranUnsur,
  sudut: Sudut,
  'bangun-ruang': BangunRuang,
  'jaring-jaring': JaringJaring,
  'bangun-ruang-gabungan': BangunRuangGabungan,
  'tangga-satuan': TanggaSatuan,
  'kecepatan-jarak-waktu': KecepatanJarakWaktu,
  debit: Debit,
  'skala-peta': SkalaPeta,
  'diagram-batang': DiagramBatang,
  'diagram-lingkaran': DiagramLingkaran,
  'mean-median-modus': MeanMedianModus,
  'peluang-dadu': PeluangDadu,
  'diskon-ppn': DiskonPPN,
  'timbangan-aljabar': TimbanganAljabar,
};

export const DIAGRAMS = DIAGRAM_DATA.map((d) => ({ ...d, component: COMPONENTS[d.id] }));

const missing = DIAGRAMS.filter((d) => !d.component);
if (missing.length) {
  throw new Error(`Diagram tanpa komponen: ${missing.map((d) => d.id).join(', ')}`);
}

export const DIAGRAM_BY_ID = Object.fromEntries(DIAGRAMS.map((d) => [d.id, d]));