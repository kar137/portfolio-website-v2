import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function WireSphere() {
  const ref = useRef<THREE.Group>(null!);
  const segments: [THREE.Vector3, THREE.Vector3][][] = useMemo(() => {
    const sets: [THREE.Vector3, THREE.Vector3][][] = [];
    const lat = 12,
      lon = 24,
      r = 1.3;
    // latitude rings
    for (let i = 0; i <= lat; i++) {
      const phi = (i / lat) * Math.PI - Math.PI / 2;
      const ring: [THREE.Vector3, THREE.Vector3][] = [];
      for (let j = 0; j <= lon; j++) {
        const theta1 = (j / lon) * Math.PI * 2;
        const theta2 = ((j + 1) / lon) * Math.PI * 2;
        const p1 = new THREE.Vector3(
          r * Math.cos(phi) * Math.cos(theta1),
          r * Math.sin(phi),
          r * Math.cos(phi) * Math.sin(theta1),
        );
        const p2 = new THREE.Vector3(
          r * Math.cos(phi) * Math.cos(theta2),
          r * Math.sin(phi),
          r * Math.cos(phi) * Math.sin(theta2),
        );
        ring.push([p1, p2]);
      }
      sets.push(ring);
    }
    return sets;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={ref}>
      {segments.map((ring, idx) => (
        <group key={idx}>
          {ring.map((seg, j) => (
            <Line
              key={j}
              points={[seg[0], seg[1]]}
              color="#8b5cf6"
              lineWidth={1}
              transparent
              opacity={0.35}
            />
          ))}
        </group>
      ))}
      <Line
        points={[new THREE.Vector3(-1.3, 0, 0), new THREE.Vector3(1.3, 0, 0)]}
        color="#22d3ee"
        lineWidth={1}
        transparent
        opacity={0.5}
      />
    </group>
  );
}

export default function HoloGlobe() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <color attach="background" args={["#0b0c12"]} />
        <WireSphere />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
    </div>
  );
}
