import { useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { ConcentricLayers } from './ConcentricLayers';
import { InfoPanel } from './InfoPanel';
import { EARTH_LAYERS } from './earth-layers-data';

export function EarthLayersScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = EARTH_LAYERS.find((l) => l.id === selectedId) || null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [4, 3, 6] : [3, 2.5, 4.5]}
      minDistance={3}
      maxDistance={12}
      overlay={selected && (
        <InfoPanel eyebrow="Lapisan Bumi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
      )}
    >
      <ConcentricLayers layers={EARTH_LAYERS} mode="cutaway" onSelect={interactive ? setSelectedId : undefined} />
    </SceneCanvas>
  );
}
