import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Particle network background. Renders a field of glowing points and
 * faint lines between near neighbors — a "neural net" feel. Reacts to
 * pointer with a soft parallax.
 */
function ParticleNetwork({ count = 90 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const { viewport, pointer } = useThree();

  // Generate stable random positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  // Compute initial line connections (near neighbors)
  const linePositions = useMemo(() => {
    const segs: number[] = [];
    const maxDist = 2.2;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < maxDist) {
          segs.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          );
        }
      }
    }
    return new Float32Array(segs);
  }, [positions, count]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
      // Pointer parallax
      const tx = (pointer.x * viewport.width) * 0.02;
      const ty = (pointer.y * viewport.height) * 0.02;
      groupRef.current.position.x += (tx - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (ty - groupRef.current.position.y) * 0.05;
    }
    if (pointsRef.current) {
      const t = state.clock.getElapsedTime();
      (pointsRef.current.material as THREE.PointsMaterial).opacity =
        0.6 + Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#a78bfa"
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/**
 * Central rotating wireframe "brain" — an icosahedron with extra pulsing
 * core and orbiting nodes. Replaces the static system mockup.
 */
function BrainCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x =
        groupRef.current.rotation.x + (pointer.y * 0.3 - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.z =
        groupRef.current.rotation.z + (pointer.x * 0.2 - groupRef.current.rotation.z) * 0.04;
    }
    if (coreRef.current) {
      const t = state.clock.getElapsedTime();
      const s = 1 + Math.sin(t * 1.4) * 0.08;
      coreRef.current.scale.setScalar(s);
    }
  });

  // Orbiting nodes
  const orbits = useMemo(() => {
    return new Array(8).fill(0).map((_, i) => ({
      radius: 1.6 + (i % 3) * 0.25,
      speed: 0.3 + (i % 4) * 0.15,
      offset: (i / 8) * Math.PI * 2,
      tilt: (i / 8) * Math.PI,
      color: i % 2 === 0 ? "#a78bfa" : "#60a5fa",
    }));
  }, []);

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Outer wireframe shell */}
        <Icosahedron args={[1.4, 1]}>
          <meshBasicMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.55}
          />
        </Icosahedron>
        {/* Mid shell */}
        <Icosahedron args={[1.1, 2]}>
          <meshBasicMaterial
            color="#2563eb"
            wireframe
            transparent
            opacity={0.35}
          />
        </Icosahedron>
        {/* Pulsing core */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.85} />
        </mesh>
        {/* Inner glow */}
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
        </mesh>

        {/* Orbiting nodes */}
        {orbits.map((o, i) => (
          <OrbitNode key={i} {...o} />
        ))}
      </group>
    </Float>
  );
}

function OrbitNode({
  radius,
  speed,
  offset,
  tilt,
  color,
}: {
  radius: number;
  speed: number;
  offset: number;
  tilt: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t + tilt) * radius * 0.4;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/**
 * Combined scene. Hero3DBackground covers the hero as a background,
 * Hero3DCore is the central "brain" rendered in its own canvas where
 * the SystemPreview used to be.
 */
export function Hero3DBackground() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(window.innerWidth >= 768 && !reduce);
  }, []);

  if (!enabled) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ParticleNetwork count={90} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function Hero3DCore() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(window.innerWidth >= 768 && !reduce);
  }, []);

  if (!enabled) {
    // Light fallback for mobile / reduced motion
    return (
      <div className="relative mt-24 mx-auto max-w-5xl h-[280px] flex items-center justify-center">
        <div
          className="h-48 w-48 rounded-full blur-2xl opacity-60"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute h-32 w-32 rounded-full border border-hairline"
          style={{ boxShadow: "0 0 60px -10px #7c3aed" }}
        />
      </div>
    );
  }

  return (
    <div className="relative mt-16 mx-auto max-w-5xl h-[480px] sm:h-[560px]">
      {/* Glow behind */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #7c3aed, transparent 60%)" }}
        aria-hidden
      />
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />
          <pointLight position={[-5, -3, 2]} intensity={0.6} color="#2563eb" />
          <BrainCore />
        </Suspense>
      </Canvas>
      {/* Caption */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
          ismind.ai · neural core · live
        </span>
      </div>
    </div>
  );
}
