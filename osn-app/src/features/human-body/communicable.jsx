import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  COMMUNICABLE_PARTS,
  PATHOGEN_MARKERS,
  COMMUNICABLE_DETAIL_TARGET,
  COMMUNICABLE_DETAIL_CAMERA,
} from './communicable-data';

export function CommunicableScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = COMMUNICABLE_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? COMMUNICABLE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? COMMUNICABLE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2.5 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Penyakit Menular" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {COMMUNICABLE_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}
      <mesh position={PATHOGEN_MARKERS.flu.position} onClick={onClickFor('flu')}>
        <icosahedronGeometry args={[PATHOGEN_MARKERS.flu.radius, 0]} />
        <meshStandardMaterial color="#8bc34a" />
      </mesh>
      <mesh position={PATHOGEN_MARKERS.diare.position} scale={[1, 1.8, 1]} onClick={onClickFor('diare')}>
        <sphereGeometry args={[PATHOGEN_MARKERS.diare.radius, 12, 12]} />
        <meshStandardMaterial color="#9c6b98" />
      </mesh>
      {PATHOGEN_MARKERS.cacar.spots.map((offset, i) => (
        <mesh
          key={`cacar-${i}`}
          position={[
            PATHOGEN_MARKERS.cacar.position[0] + offset[0],
            PATHOGEN_MARKERS.cacar.position[1] + offset[1],
            PATHOGEN_MARKERS.cacar.position[2] + offset[2],
          ]}
          onClick={onClickFor('cacar')}
        >
          <sphereGeometry args={[PATHOGEN_MARKERS.cacar.radius, 12, 12]} />
          <meshStandardMaterial color="#e0668a" />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
