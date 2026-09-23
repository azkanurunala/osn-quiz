import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import {
  BIOTECH_PARTS,
  DNA_STRAND_A_POINTS,
  DNA_STRAND_B_POINTS,
  DNA_RUNGS,
  FERMENTATION_JAR,
} from './biotech-data';

export function BiotechScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = BIOTECH_PARTS.find((p) => p.id === selectedId) || null;
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={[0, 0, 2.2]}
      target={[0.3, 0, 0]}
      minDistance={1}
      maxDistance={4}
      overlay={
        selected && (
          <InfoPanel eyebrow="Bioteknologi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
        )
      }
    >
      <group onClick={onClickFor('dna')}>
        <Line points={DNA_STRAND_A_POINTS} color="#4a90d9" lineWidth={6} />
        <Line points={DNA_STRAND_B_POINTS} color="#e0668a" lineWidth={6} />
        {DNA_RUNGS.map((rung, i) => (
          <Line key={`rung-${i}`} points={[rung.from, rung.to]} color="#c9c9c9" lineWidth={3} />
        ))}
      </group>
      <mesh position={FERMENTATION_JAR.position} onClick={onClickFor('fermentasi')}>
        <cylinderGeometry args={[FERMENTATION_JAR.radius, FERMENTATION_JAR.radius, FERMENTATION_JAR.height, 24]} />
        <meshStandardMaterial color="#d4a843" transparent opacity={0.5} />
      </mesh>
    </SceneCanvas>
  );
}
