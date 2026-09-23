import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { ViewToggle } from './ViewToggle';
import {
  SKELETAL_PARTS,
  SKELETAL_PRIMITIVES,
  RIB_ARCS,
  SKELETAL_DETAIL_TARGET,
  SKELETAL_DETAIL_CAMERA,
} from './skeletal-data';

export function SkeletalScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = SKELETAL_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? SKELETAL_DETAIL_CAMERA : [0, 0, 2.6]}
      target={isDetail ? SKELETAL_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.6 : 1.4}
      maxDistance={isDetail ? 4 : 6}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Rangka & Otot" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {/* Otot: reuses the real skin mesh, tinted red and made translucent, wrapping the bones
          underneath. Hidden in Detail Organ mode — like HumanBody is hidden elsewhere — so
          zooming in on a bone isn't cluttered by the full-body overlay. Trade-off: Otot itself is
          only inspectable (click-to-info) from Dalam Tubuh mode as a result (see design spec). */}
      {!isDetail && (
        <OrganModel id="otot" url="/models/skin.glb" opacity={0.35} tint="#c0392b" scale={1.03} onSelect={handleSelect} />
      )}

      {SKELETAL_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}

      <mesh position={SKELETAL_PRIMITIVES.tengkorak.position} onClick={onClickFor('tengkorak')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tengkorak.radius, 20, 20]} />
        <meshToonMaterial color="#f0e6d2" />
      </mesh>
      {RIB_ARCS.map((points, i) => (
        <Line key={`rib-${i}`} points={points} color="#f0e6d2" lineWidth={4} onClick={onClickFor('tulang-rusuk')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangLenganKiri, SKELETAL_PRIMITIVES.tulangLenganKanan].map((bone, i) => (
        <Line key={`lengan-${i}`} points={[bone.from, bone.to]} color="#f0e6d2" lineWidth={8} onClick={onClickFor('tulang-lengan')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangKakiKiri, SKELETAL_PRIMITIVES.tulangKakiKanan].map((bone, i) => (
        <Line key={`kaki-${i}`} points={[bone.from, bone.to]} color="#f0e6d2" lineWidth={10} onClick={onClickFor('tulang-kaki')} />
      ))}
    </SceneCanvas>
  );
}
