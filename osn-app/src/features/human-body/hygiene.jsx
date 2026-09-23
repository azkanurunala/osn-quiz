import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { HYGIENE_PARTS, HYGIENE_MARKERS, HYGIENE_DETAIL_TARGET, HYGIENE_DETAIL_CAMERA } from './hygiene-data';

export function HygieneScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = HYGIENE_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? HYGIENE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? HYGIENE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Kebersihan Diri" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {HYGIENE_MARKERS.map((marker) => (
        <mesh
          key={marker.id}
          position={marker.position}
          onClick={handleSelect ? (e) => { e.stopPropagation(); handleSelect(marker.id); } : undefined}
        >
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshStandardMaterial color={marker.color} />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
