import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { NUTRITION_WEDGES, WATER_GLASS, PLATE_RADIUS } from './nutrition-data';

export function NutritionScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const allParts = [...NUTRITION_WEDGES, { id: 'air', name: 'Air Minum', fact: WATER_GLASS.fact }];
  const selected = allParts.find((p) => p.id === selectedId) || null;
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={[0, 1.6, 1.8]}
      target={[0.3, 0, 0]}
      minDistance={1}
      maxDistance={4}
      overlay={
        selected && (
          <InfoPanel eyebrow="Gizi Seimbang (Isi Piringku)" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
        )
      }
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[PLATE_RADIUS + 0.08, 48]} />
        <meshToonMaterial color="#f5f5f0" />
      </mesh>
      {NUTRITION_WEDGES.map((wedge) => (
        <mesh
          key={wedge.id}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, 0]}
          onClick={onClickFor(wedge.id)}
        >
          <circleGeometry args={[PLATE_RADIUS, 32, wedge.thetaStart, wedge.thetaLength]} />
          <meshToonMaterial color={wedge.color} />
        </mesh>
      ))}
      <mesh position={WATER_GLASS.position} onClick={onClickFor('air')}>
        <cylinderGeometry args={[WATER_GLASS.radiusTop, WATER_GLASS.radiusBottom, WATER_GLASS.height, 24]} />
        <meshToonMaterial color="#bcd8e8" transparent opacity={0.6} />
      </mesh>
    </SceneCanvas>
  );
}
