// osn-app/src/features/astronomy/registry.js
import { SolarSystemScene } from '../solar-system';
import { EarthLayersScene } from './earth-layers';
import { EarthMotionScene } from './earth-motion';
import { MoonPhasesScene } from './moon-phases';
import { EclipseScene } from './eclipse';
import { AtmosphereScene } from './atmosphere';

export const SCENE_REGISTRY = {
  'ipa-05a': { component: SolarSystemScene, label: 'Tata Surya' },
  'ipa-05b': { component: EarthLayersScene, label: 'Lapisan Bumi' },
  'ipa-05c': { component: EarthMotionScene, label: 'Rotasi & Revolusi Bumi' },
  'ipa-05d': { component: MoonPhasesScene, label: 'Fase Bulan' },
  'ipa-05e': { component: EclipseScene, label: 'Gerhana' },
  'ipa-05k': { component: AtmosphereScene, label: 'Atmosfer' },
};
