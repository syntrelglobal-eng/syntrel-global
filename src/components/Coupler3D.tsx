"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function StainlessSteelCoupler() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; 
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: "#b0b5b9",
    metalness: 1.0,
    roughness: 0.15,
    envMapIntensity: 1.5,
  });

  const darkMetal = new THREE.MeshStandardMaterial({
    color: "#222222",
    metalness: 0.9,
    roughness: 0.4,
  });

  return (
    <group ref={groupRef} scale={1.4} rotation={[0.4, 0, 0]}>
      <mesh position={[0, 0, 0]} material={steelMaterial}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
      </mesh>
      <mesh position={[0, -0.5, 0]} material={steelMaterial}>
        <cylinderGeometry args={[1.05, 1.05, 0.6, 6]} />
      </mesh>
      <mesh position={[0, 0.8, 0]} material={steelMaterial}>
        <cylinderGeometry args={[0.95, 0.95, 0.8, 64]} />
      </mesh>
      <mesh position={[0, 1.3, 0]} material={darkMetal}>
        <cylinderGeometry args={[0.6, 0.6, 0.4, 64]} />
      </mesh>
      <mesh position={[0, -1.4, 0]} material={steelMaterial}>
        <cylinderGeometry args={[0.5, 0.5, 0.6, 32]} />
      </mesh>
      <mesh position={[0, 0.4, 0]} material={darkMetal}>
        <torusGeometry args={[0.81, 0.05, 16, 64]} />
      </mesh>
      <mesh position={[0, 1.1, 0]} material={darkMetal}>
        <torusGeometry args={[0.96, 0.04, 16, 64]} />
      </mesh>
    </group>
  );
}

export default function Coupler3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60 mix-blend-lighten overflow-hidden">
      <div className="w-full h-[900px]">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          
          {/* FIXED: Removed the deprecated 'config' and 'snap' props causing the TS error */}
          <PresentationControls 
            global 
            rotation={[0, 0.3, 0]} 
            polar={[-Math.PI / 3, Math.PI / 3]} 
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <StainlessSteelCoupler />
            </Float>
          </PresentationControls>

          <Environment preset="studio" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#06b6d4" />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/60 to-[#050811]"></div>
    </div>
  );
}
