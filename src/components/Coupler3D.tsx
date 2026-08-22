"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function StainlessSteelCoupler() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    }
  });

  const steelMat = new THREE.MeshStandardMaterial({
    color: "#c8d1d9",
    metalness: 0.95,
    roughness: 0.12,
    envMapIntensity: 1.8,
  });

  const darkGasketMat = new THREE.MeshStandardMaterial({
    color: "#0f172a",
    metalness: 0.8,
    roughness: 0.35,
  });

  return (
    <group ref={groupRef} scale={1.35} rotation={[0.35, 0, 0]}>
      {/* Precision Machined Barrel */}
      <mesh position={[0, 0, 0]} material={steelMat}>
        <cylinderGeometry args={[0.82, 0.82, 2.6, 64]} />
      </mesh>

      {/* Hexagonal Grip Nut */}
      <mesh position={[0, -0.45, 0]} material={steelMat}>
        <cylinderGeometry args={[1.08, 1.08, 0.65, 6]} />
      </mesh>

      {/* Quick-Disconnect Locking Collar */}
      <mesh position={[0, 0.85, 0]} material={steelMat}>
        <cylinderGeometry args={[0.98, 0.98, 0.75, 64]} />
      </mesh>

      {/* Internal Valve Core */}
      <mesh position={[0, 1.35, 0]} material={darkGasketMat}>
        <cylinderGeometry args={[0.62, 0.62, 0.35, 64]} />
      </mesh>

      {/* Threaded Fluid Base */}
      <mesh position={[0, -1.45, 0]} material={steelMat}>
        <cylinderGeometry args={[0.52, 0.52, 0.65, 32]} />
      </mesh>

      {/* High-Pressure O-Ring Seals */}
      <mesh position={[0, 0.35, 0]} material={darkGasketMat}>
        <torusGeometry args={[0.83, 0.045, 16, 64]} />
      </mesh>
      <mesh position={[0, 1.15, 0]} material={darkGasketMat}>
        <torusGeometry args={[0.99, 0.04, 16, 64]} />
      </mesh>
    </group>
  );
}

export default function Coupler3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-70 mix-blend-lighten overflow-hidden">
      <div className="w-full h-[900px]">
        <Canvas 
          camera={{ position: [0, 0, 5.8], fov: 45 }} 
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[8, 12, 8]} angle={0.25} penumbra={1} intensity={2.5} />
          <directionalLight position={[-8, -5, -5]} intensity={0.9} color="#38bdf8" />
          
          <PresentationControls 
            global 
            rotation={[0, 0.3, 0]} 
            polar={[-Math.PI / 4, Math.PI / 4]} 
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
              <StainlessSteelCoupler />
            </Float>
          </PresentationControls>

          <Environment preset="studio" />
          <ContactShadows position={[0, -2.4, 0]} opacity={0.6} scale={9} blur={2.2} far={3.5} color="#06b6d4" />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/60 to-[#050811]" />
    </div>
  );
}
