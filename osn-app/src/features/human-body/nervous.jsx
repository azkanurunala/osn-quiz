import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { NERVOUS_PARTS, SENSE_MARKERS, NERVOUS_DETAIL_TARGET, NERVOUS_DETAIL_CAMERA } from './nervous-data';

export function NervousScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = NERVOUS_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? NERVOUS_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? NERVOUS_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Saraf & Indera" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {NERVOUS_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl, i) => (
          <OrganModel
            key={`${part.id}-${i}`}
            id={part.id}
            url={modelUrl}
            // Mirror the second copy of the eye model across X for the other eye — the source
            // dataset only ships one eye, avoiding loading a second ~9MB source file for a
            // near-symmetric part. useGLTF caches by URL, so the second OrganModel here reuses
            // the already-fetched/parsed scene rather than downloading it again.
            scale={part.id === 'mata' && i === 1 ? [-1, 1, 1] : 1}
            onSelect={handleSelect}
          />
        ))
      )}
      {SENSE_MARKERS.map((marker) => (
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
