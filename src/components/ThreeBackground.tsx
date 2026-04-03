'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function Particles({ count = 150 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

function FloatingShape({ position, color, scale = 0.5, speed = 2 }: { position: [number, number, number], color: string, scale?: number, speed?: number }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={0.5}
          radius={1}
          transparent
          opacity={0.08}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <Particles count={200} />
        
        {/* Main large shapes */}
        <FloatingShape position={[-5, 3, -5]} color="#8b5cf6" scale={1.2} speed={1.5} />
        <FloatingShape position={[6, -4, -3]} color="#06b6d4" scale={1} speed={2} />
        <FloatingShape position={[2, 5, -6]} color="#ec4899" scale={0.8} speed={1.8} />
        
        {/* Smaller accent shapes */}
        <FloatingShape position={[-8, -2, -8]} color="#8b5cf6" scale={0.4} speed={2.5} />
        <FloatingShape position={[8, 2, -10]} color="#06b6d4" scale={0.5} speed={2.2} />
        <FloatingShape position={[-2, -6, -4]} color="#ec4899" scale={0.3} speed={3} />
      </Canvas>
    </div>
  );
}
