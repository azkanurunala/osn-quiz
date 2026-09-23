import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

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
  const preparedScene = useMemo(() => {
    const clone = scene.clone();
    if (opacity !== undefined || tint) {
      clone.traverse((child) => {
        if (child.isMesh) {
          child.material = child.material.clone();
          if (opacity !== undefined) {
            child.material.transparent = true;
            child.material.opacity = opacity;
            child.material.depthWrite = false;
          }
          if (tint) {
            child.material.color.set(tint);
          }
        }
      });
    }
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
