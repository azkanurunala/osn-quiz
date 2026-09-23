import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { BACKGROUND_TEXTURE } from './constants';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export function SceneCanvas({
  size = 'inline',
  interactive = true,
  cameraPosition,
  minDistance = 8,
  maxDistance = 45,
  showPointLight = true,
  overlay = null,
  children,
}) {
  const [webglOk] = useState(() => isWebGLAvailable());
  const heightClass = size === 'full' ? 'h-[70vh] min-h-[420px]' : 'h-72 md:h-96';
  const defaultCameraPosition = size === 'full' ? [0, 22, 30] : [0, 16, 22];

  if (!webglOk) {
    return (
      <div className={`glass-card rounded-3xl flex items-center justify-center text-center p-8 ${heightClass}`}>
        <p className="text-sm text-gray-500 font-semibold">Visualisasi 3D tidak didukung di browser ini.</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-3xl overflow-hidden glass-card ${heightClass}`}>
      <Canvas camera={{ position: cameraPosition || defaultCameraPosition, fov: 50 }}>
        <Suspense fallback={null}>
          <Environment files={BACKGROUND_TEXTURE} background />
          <ambientLight intensity={0.7} />
          {/* decay=0: keeps consistent shading regardless of how far a body sits from the
              origin, instead of Three's physically-correct inverse-square falloff washing
              distant objects out to flat ambient light (see solar-system.jsx's fix). */}
          {showPointLight && <pointLight position={[0, 0, 0]} intensity={6} color="#fff6d8" decay={0} />}
          {children}
          {interactive && <OrbitControls enablePan={false} minDistance={minDistance} maxDistance={maxDistance} />}
        </Suspense>
      </Canvas>
      {overlay}
    </div>
  );
}
