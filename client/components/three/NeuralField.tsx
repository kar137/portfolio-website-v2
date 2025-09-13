import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => new Float32Array(6000), []);

  // Populate points in a sphere
  useMemo(() => {
    const r = 1.2;
    for (let i = 0; i < sphere.length; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      sphere[i] = x + (Math.random() - 0.5) * 0.3;
      sphere[i + 1] = y + (Math.random() - 0.5) * 0.3;
      sphere[i + 2] = z + (Math.random() - 0.5) * 0.3;
    }
  }, [sphere]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.y = t * 0.06;
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.1;
  });

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={"#7dd3fc"}
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function NeuralField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <color attach="background" args={["#0b0c12"]} />
        <fog attach="fog" args={["#0b0c12", 1.5, 8]} />
        <Particles />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
    </div>
  );
}
