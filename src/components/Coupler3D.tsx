"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function RealisticCoupler() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15; // Smooth, premium spin
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Pure mathematical materials (Zero download time)
  const polishedSteel = new THREE.MeshStandardMaterial({
    color: "#e2e8f0",
    metalness: 0.95,
    roughness: 0.15,
  });

  const darkAnodized = new THREE.MeshStandardMaterial({
    color: "#0f172a",
    metalness: 0.8,
    roughness: 0.4,
  });

  const brassValve = new THREE.MeshStandardMaterial({
    color: "#fbbf24",
    metalness: 0.9,
    roughness: 0.2,
  });

  return (
    <group ref={groupRef} scale={1.2} rotation={[0.4, -0.5, 0]}>
      {/* 1. Hex Nut Base (For Wrenching) */}
      <mesh position={[0, -1.2, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.9, 0.9, 0.6, 6]} />
      </mesh>
      
      {/* 2. Threaded Base Placeholder */}
      <mesh position={[0, -1.7, 0]} material={darkAnodized}>
        <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
      </mesh>

      {/* 3. Main Outer Body */}
      <mesh position={[0, -0.4, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.75, 0.75, 1.0, 64]} />
      </mesh>

      {/* 4. Locking Sleeve / Collar */}
      <mesh position={[0, 0.5, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.95, 0.95, 1.2, 32]} />
      </mesh>
      
      {/* 5. Knurled Grooves on Sleeve */}
      <mesh position={[0, 0.2, 0]} material={darkAnodized}>
        <torusGeometry args={[0.95, 0.03, 16, 64]} />
      </mesh>
      <mesh position={[0, 0.5, 0]} material={darkAnodized}>
        <torusGeometry args={[0.95, 0.03, 16, 64]} />
      </mesh>
      <mesh position={[0, 0.8, 0]} material={darkAnodized}>
        <torusGeometry args={[0.95, 0.03, 16, 64]} />
      </mesh>

      {/* 6. Male Insert / Nozzle */}
      <mesh position={[0, 1.4, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.55, 0.55, 0.8, 64]} />
      </mesh>

      {/* 7. Dual Viton O-Rings */}
      <mesh position={[0, 1.5, 0]} material={darkAnodized}>
        <torusGeometry args={[0.56, 0.06, 16, 64]} />
      </mesh>
      <mesh position={[0, 1.7, 0]} material={darkAnodized}>
        <torusGeometry args={[0.56, 0.06, 16, 64]} />
      </mesh>

      {/* 8. Internal Exposed Valve Pin */}
      <mesh position={[0, 1.8, 0]} material={brassValve}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
      </mesh>
    </group>
  );
}

export default function Coupler3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-85 mix-blend-lighten overflow-hidden">
      <div className="w-full h-[600px] sm:h-[800px]">
        {/* dpr throttled for speed, antialiasing optimized */}
        <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }}>
          
          {/* NATIVE LIGHTING: 0 network requests, loads instantly */}
          <ambientLight intensity={1.5} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={500} color="#ffffff" />
          <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={1} intensity={300} color="#22d3ee" />
          <pointLight position={[0, -5, 5]} intensity={200} color="#0ea5e9" />

          <PresentationControls global rotation={[0, 0, 0]} polar={[-Math.PI/4, Math.PI/4]} azimuth={[-Math.PI/2, Math.PI/2]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
              <RealisticCoupler />
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/60 to-[#050811]" />
    </div>
  );
}
