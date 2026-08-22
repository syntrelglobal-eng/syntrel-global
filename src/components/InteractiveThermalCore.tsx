// @ts-nocheck
"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeMatrix() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll progress across a deep 5000px timeline
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = window.scrollY / (totalHeight || 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current || !ringRef.current) return;

    const t = scrollProgress.current;

    // Smooth continuous rotation blended with scroll momentum
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + (t * Math.PI * 3);
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + (t * Math.PI * 4);

    // Expand or contract geometry based on scroll depth
    const targetScale = 1.2 + (t * 1.5);
    meshRef.current.scale.set(targetScale, targetScale, targetScale);

    ringRef.current.rotation.z -= delta * 0.4;
    ringRef.current.rotation.y += delta * 0.2;
  });

  const neonWireframe = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });

  const outerRingMat = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });

  return (
    <group>
      {/* Central 8bit.ai style Torus Knot / Complex Matrix */}
      <mesh ref={meshRef} material={neonWireframe}>
        <torusKnotGeometry args={[1.8, 0.6, 128, 32, 2, 3]} />
      </mesh>

      {/* Surrounding Dynamic Wireframe Rings */}
      <group ref={ringRef}>
        <mesh material={outerRingMat} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3.8, 0.05, 16, 64]} />
        </mesh>
        <mesh material={outerRingMat} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[4.5, 0.05, 16, 64]} />
        </mesh>
      </group>
    </group>
  );
}

export default function InteractiveThermalCore() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#03050a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#03050a] to-[#03050a]" />
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <WireframeMatrix />
      </Canvas>
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
    </div>
  );
}
