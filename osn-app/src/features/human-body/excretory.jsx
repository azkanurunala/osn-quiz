import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data';

export function ExcretoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = EXCRETORY_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? EXCRETORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? EXCRETORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Ekskresi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {EXCRETORY_PARTS.map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel
            key={modelUrl}
            id={part.id}
            url={modelUrl}
            onSelect={interactive ? setSelectedId : undefined}
          />
        ))
      )}
    </SceneCanvas>
  );
}
