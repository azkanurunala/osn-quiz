import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { ViewToggle } from './ViewToggle';
import { SKELETAL_PARTS, SKELETAL_PRIMITIVES, SKELETAL_DETAIL_TARGET, SKELETAL_DETAIL_CAMERA } from './skeletal-data';

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
          underneath — no dedicated muscle model exists in the source dataset. */}
      <OrganModel id="otot" url="/models/skin.glb" opacity={0.35} tint="#c0392b" scale={1.03} onSelect={handleSelect} />

      {SKELETAL_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}

      <mesh position={SKELETAL_PRIMITIVES.tengkorak.position} onClick={onClickFor('tengkorak')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tengkorak.radius, 20, 20]} />
        <meshStandardMaterial color="#f5f0e6" />
      </mesh>
      <mesh position={SKELETAL_PRIMITIVES.tulangRusuk.position} onClick={onClickFor('tulang-rusuk')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tulangRusuk.radiusX, 20, 20]} />
        <meshStandardMaterial color="#f5f0e6" transparent opacity={0.6} />
      </mesh>
      {[SKELETAL_PRIMITIVES.tulangLenganKiri, SKELETAL_PRIMITIVES.tulangLenganKanan].map((bone, i) => (
        <Line key={`lengan-${i}`} points={[bone.from, bone.to]} color="#f5f0e6" lineWidth={8} onClick={onClickFor('tulang-lengan')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangKakiKiri, SKELETAL_PRIMITIVES.tulangKakiKanan].map((bone, i) => (
        <Line key={`kaki-${i}`} points={[bone.from, bone.to]} color="#f5f0e6" lineWidth={10} onClick={onClickFor('tulang-kaki')} />
      ))}
    </SceneCanvas>
  );
}
