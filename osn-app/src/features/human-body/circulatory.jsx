import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { CIRCULATORY_PARTS, CIRCULATORY_DETAIL_TARGET, CIRCULATORY_DETAIL_CAMERA } from './circulatory-data';

export function CirculatoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = CIRCULATORY_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';

  return (
    <SceneCanvas
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? CIRCULATORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? CIRCULATORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.15 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Peredaran Darah" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {CIRCULATORY_PARTS.map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={interactive ? setSelectedId : undefined} />
        ))
      )}
    </SceneCanvas>
  );
}
