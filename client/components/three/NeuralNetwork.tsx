import { Canvas, useFrame } from "@react-three/fiber";
import { Line, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

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
  // Connect all points sequentially for a full network
  const edges: [THREE.Vector3, THREE.Vector3, number][] = [];
  for (let i = 0; i < points.length - 1; i++) {
    edges.push([points[i], points[i + 1], i]);
  }
  // Optionally, connect last to first for a closed loop
  // edges.push([points[points.length - 1], points[0], points.length - 1]);
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

  // Animated links state
  const [visibleLinks, setVisibleLinks] = useState(0);
  useEffect(() => {
    setVisibleLinks(0);
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame <= count - 1) {
        setVisibleLinks(frame);
      } else if (frame === count) {
        // Connect last to first for circle
        setVisibleLinks(count);
      } else {
        clearInterval(interval);
      }
    }, 60); // Slow speed
    return () => clearInterval(interval);
  }, [count]);

  const links = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Math.min(visibleLinks, count - 1); i++) {
      arr.push([pts[i], pts[i + 1]]);
    }
    // Add circular link at end
    if (visibleLinks === count) {
      arr.push([pts[count - 1], pts[0]]);
    }
    return arr;
  }, [pts, count, visibleLinks]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.06;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  // Color gradient for mysterious effect
  const colors = ["#38bdf8", "#a78bfa", "#f472b6", "#c026d3", "#22d3ee"];
  return (
    <group ref={group}>
      <Points positions={pos} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      {links.map((l, i) => (
        <Line
          key={i}
          points={[l[0], l[1]]}
          color={colors[i % colors.length]}
          transparent
          opacity={0.38}
          lineWidth={1.2}
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
