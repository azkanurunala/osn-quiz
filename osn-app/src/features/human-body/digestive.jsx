import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  DIGESTIVE_PARTS,
  DIGESTIVE_PRIMITIVES,
  DIGESTIVE_DETAIL_TARGET,
  DIGESTIVE_DETAIL_CAMERA,
} from './digestive-data';

export function DigestiveScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = DIGESTIVE_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? DIGESTIVE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? DIGESTIVE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 2.5 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Pencernaan" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {DIGESTIVE_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}
      <mesh position={DIGESTIVE_PRIMITIVES.mulut.position} onClick={onClickFor('mulut')}>
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.mulut.radius, 16, 16]} />
        <meshStandardMaterial color="#e8a87c" />
      </mesh>
      <Line
        points={[DIGESTIVE_PRIMITIVES.kerongkongan.from, DIGESTIVE_PRIMITIVES.kerongkongan.to]}
        color="#e8967a"
        lineWidth={6}
        onClick={onClickFor('kerongkongan')}
      />
      <mesh
        position={DIGESTIVE_PRIMITIVES.lambung.position}
        scale={[
          1,
          DIGESTIVE_PRIMITIVES.lambung.radiusY / DIGESTIVE_PRIMITIVES.lambung.radiusX,
          DIGESTIVE_PRIMITIVES.lambung.radiusZ / DIGESTIVE_PRIMITIVES.lambung.radiusX,
        ]}
        onClick={onClickFor('lambung')}
      >
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.lambung.radiusX, 20, 20]} />
        <meshStandardMaterial color="#d98c5f" />
      </mesh>
    </SceneCanvas>
  );
}
