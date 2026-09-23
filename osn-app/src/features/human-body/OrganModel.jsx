import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshToonMaterial } from 'three';

export function OrganModel({
  id,
  url,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  opacity,
  tint,
  onSelect,
}) {
  const { scene } = useGLTF(url);

  // useGLTF caches and shares one scene graph per URL across every consumer — clone it so
  // this instance can have its own material overrides (and so the same model can be mounted
  // more than once at a time, e.g. mirroring one eye model for both eyes).
  //
  // Every mesh gets a FRESH MeshToonMaterial rather than a clone of the original baked
  // material. The original HuBMAP materials carry per-vertex/texture-baked detail (measurement
  // markings, research-reference coloring) meant for professional anatomical software, not a
  // children's illustration — a fresh material discards that entirely and replaces it with a
  // flat, toon-shaded solid color, which is also how the marking artifacts get removed (see
  // design spec's live-prototype comparison). `tint` is now effectively required — every real
  // organ usage across the app passes one — with a neutral gray fallback so a caller that
  // forgets doesn't crash, just renders plain.
  const preparedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshToonMaterial({ color: tint || '#9e9e9e' });
        if (opacity !== undefined) {
          child.material.transparent = true;
          child.material.opacity = opacity;
          child.material.depthWrite = false;
        }
      }
    });
    return clone;
  }, [scene, opacity, tint]);

  return (
    <primitive
      object={preparedScene}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={onSelect ? (e) => { e.stopPropagation(); onSelect(id); } : undefined}
    />
  );
}
