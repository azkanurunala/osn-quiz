// osn-app/src/features/astronomy/registry.js
import { SolarSystemScene } from '../solar-system';
import { EarthLayersScene } from './earth-layers';
import { EarthMotionScene } from './earth-motion';
import { MoonPhasesScene } from './moon-phases';
import { EclipseScene } from './eclipse';
import { AtmosphereScene } from './atmosphere';
import { DigestiveScene } from '../human-body/digestive';
import { RespiratoryScene } from '../human-body/respiratory';
import { CirculatoryScene } from '../human-body/circulatory';
import { ExcretoryScene } from '../human-body/excretory';
import { NervousScene } from '../human-body/nervous';
import { SkeletalScene } from '../human-body/skeletal';

export const SCENE_REGISTRY = {
  'ipa-05a': { component: SolarSystemScene, label: 'Tata Surya' },
  'ipa-05b': { component: EarthLayersScene, label: 'Lapisan Bumi' },
  'ipa-05c': { component: EarthMotionScene, label: 'Rotasi & Revolusi Bumi' },
  'ipa-05d': { component: MoonPhasesScene, label: 'Fase Bulan' },
  'ipa-05e': { component: EclipseScene, label: 'Gerhana' },
  'ipa-05k': { component: AtmosphereScene, label: 'Atmosfer' },
  'ipa-02a': { component: DigestiveScene, label: 'Sistem Pencernaan' },
  'ipa-02b': { component: RespiratoryScene, label: 'Sistem Pernapasan' },
  'ipa-02c': { component: CirculatoryScene, label: 'Sistem Peredaran Darah' },
  'ipa-02d': { component: ExcretoryScene, label: 'Sistem Ekskresi' },
  'ipa-02e': { component: NervousScene, label: 'Sistem Saraf & Indera' },
  'ipa-02f': { component: SkeletalScene, label: 'Sistem Rangka & Otot' },
};
