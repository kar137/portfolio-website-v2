import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Orbiting() {
  const ref = useRef<THREE.Points>(null!);
  const pts = useMemo(() => new Float32Array(2000), []);
  useMemo(() => {
    for (let i = 0; i < pts.length; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.4 + Math.random() * 1.0;
      const y = (Math.random() - 0.5) * 0.8;
      pts[i] = Math.cos(angle) * radius;
      pts[i + 1] = y;
      pts[i + 2] = Math.sin(angle) * radius;
    }
  }, [pts]);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });
  return (
    <Points ref={ref} positions={pts} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function AIOrbit() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 55 }}>
        <Orbiting />
      </Canvas>
    </div>
  );
}
