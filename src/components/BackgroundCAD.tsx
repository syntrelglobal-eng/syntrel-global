"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Top heatsink fins */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 1, 32, 15]} />
        <meshBasicMaterial color="#06b6d4" wireframe={true} transparent opacity={0.2} />
      </mesh>
      {/* Main body / Spool */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 32, 25]} />
        <meshBasicMaterial color="#1e3a8a" wireframe={true} transparent opacity={0.3} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 1, 32, 15]} />
        <meshBasicMaterial color="#06b6d4" wireframe={true} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function BackgroundCAD() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-80 mix-blend-screen overflow-hidden">
      <div className="w-full h-[800px]">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
          <WireframeModel />
        </Canvas>
      </div>
      {/* Heavy bottom gradient to blend the 3D model into the rest of the funnel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/10 via-[#050811]/60 to-[#050811]"></div>
    </div>
  );
}
