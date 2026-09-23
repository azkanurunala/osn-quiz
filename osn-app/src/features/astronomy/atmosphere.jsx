import { useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { CelestialBody } from './CelestialBody';
import { ConcentricLayers } from './ConcentricLayers';
import { InfoPanel } from './InfoPanel';
import { ATMOSPHERE_EARTH, ATMOSPHERE_LAYERS } from './atmosphere-data';

export function AtmosphereScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = ATMOSPHERE_LAYERS.find((l) => l.id === selectedId) || null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [0, 3, 10] : [0, 2.5, 8]}
      minDistance={5}
      maxDistance={16}
      overlay={selected && (
        <InfoPanel eyebrow="Lapisan Atmosfer" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
      )}
    >
      <CelestialBody id="bumi" position={[0, 0, 0]} radius={ATMOSPHERE_EARTH.radius} texture={ATMOSPHERE_EARTH.texture} spinSpeed={0.01} />
      <ConcentricLayers layers={ATMOSPHERE_LAYERS} mode="shell" onSelect={interactive ? setSelectedId : undefined} />
    </SceneCanvas>
  );
}
