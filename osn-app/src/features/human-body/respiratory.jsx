import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  RESPIRATORY_PARTS,
  NOSE_MARKER,
  RESPIRATORY_DETAIL_TARGET,
  RESPIRATORY_DETAIL_CAMERA,
} from './respiratory-data';

export function RespiratoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = RESPIRATORY_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? RESPIRATORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? RESPIRATORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Pernapasan" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {RESPIRATORY_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}
      <mesh
        position={NOSE_MARKER.position}
        onClick={handleSelect ? (e) => { e.stopPropagation(); handleSelect('hidung'); } : undefined}
      >
        <sphereGeometry args={[NOSE_MARKER.radius, 16, 16]} />
        <meshStandardMaterial color={NOSE_MARKER.color} />
      </mesh>
    </SceneCanvas>
  );
}
