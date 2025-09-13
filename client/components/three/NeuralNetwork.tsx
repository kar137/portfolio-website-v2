import { Canvas, useFrame } from "@react-three/fiber";
import { Line, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function genSpherePoints(count: number, radius: number) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * (0.8 + Math.random() * 0.2);
    pts.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ),
    );
  }
  return pts;
}

function nearestNeighbors(points: THREE.Vector3[], k = 3) {
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  for (let i = 0; i < points.length; i++) {
    const dists = points.map((p, idx) => ({ idx, d: points[i].distanceTo(p) }));
    dists.sort((a, b) => a.d - b.d);
    for (let j = 1; j <= k; j++) edges.push([points[i], points[dists[j].idx]]);
  }
  return edges;
}

function Network({
  count = 250,
  radius = 1.6,
}: {
  count?: number;
  radius?: number;
}) {
  const group = useRef<THREE.Group>(null!);
  const pts = useMemo(() => genSpherePoints(count, radius), [count, radius]);
  const pos = useMemo(() => {
    const arr = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [pts]);
  const links = useMemo(() => nearestNeighbors(pts, 2), [pts]);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.06;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={group}>
      <Points positions={pos} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      {links.map((l, i) => (
        <Line
          key={i}
          points={[l[0], l[1]]}
          color="#a78bfa"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export function NeuralNetworkBackground({
  count,
  radius,
}: {
  count?: number;
  radius?: number;
}) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <color attach="background" args={["#0b0c12"]} />
        <Network count={count} radius={radius} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
    </div>
  );
}

export function NeuralNetworkInline({
  count = 160,
  radius = 1.2,
}: {
  count?: number;
  radius?: number;
}) {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <Network count={count} radius={radius} />
      </Canvas>
    </div>
  );
}
