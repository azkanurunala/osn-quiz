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
            tint={part.tint}
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
          <meshToonMaterial color={marker.color} />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
