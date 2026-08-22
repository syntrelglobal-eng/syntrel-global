// @ts-nocheck
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeCoolingArray() {
  const groupRef = useRef<THREE.Group>(null);
  const fan1Ref = useRef<THREE.Mesh>(null);
  const fan2Ref = useRef<THREE.Mesh>(null);
  
  // Track scroll target and current position for smooth interpolation (Lerp)
  const scrollTarget = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll over a massive 4000px height for deep scrolling
      scrollTarget.current = window.scrollY / 4000; 
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smoothly ease the current scroll value towards the target scroll value
    currentScroll.current = THREE.MathUtils.lerp(currentScroll.current, scrollTarget.current, 0.05);
    const t = currentScroll.current;

    // 1. SCROLL-LOCKED ROTATION: The entire array flips and spins based purely on scroll depth
    groupRef.current.rotation.x = t * Math.PI * 4; 
    groupRef.current.rotation.y = t * Math.PI * 2;
    
    // 2. SCROLL-LOCKED EXPLOSION: The components separate as you scroll deeper
    if (fan1Ref.current && fan2Ref.current) {
      fan1Ref.current.position.x = -1.5 - (t * 3);
      fan2Ref.current.position.x = 1.5 + (t * 3);
      
      // Fans spin constantly, but spin FASTER when scrolling
      const baseSpin = state.clock.elapsedTime * 2;
      const scrollSpin = t * 50;
      fan1Ref.current.rotation.z = baseSpin + scrollSpin;
      fan2Ref.current.rotation.z = -(baseSpin + scrollSpin);
    }
  });

  // 8bit.ai style glowing wireframe materials
  const wireframeMaterial = new THREE.LineBasicMaterial({ 
    color: 0x06b6d4, // Cyan glow
    transparent: true, 
    opacity: 0.6 
  });
  
  const coreMaterial = new THREE.LineBasicMaterial({ 
    color: 0xffffff, // White core
    transparent: true, 
    opacity: 0.8 
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Central Heatsink Block */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2, 4, 4, 4)]} />
        <primitive object={coreMaterial} attach="material" />
      </lineSegments>

      {/* Left Cooling Fan Array */}
      <mesh ref={fan1Ref} position={[-1.5, 0, 0]}>
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(1.2, 1.2, 0.4, 32, 1)]} />
          <primitive object={wireframeMaterial} attach="material" />
        </lineSegments>
        <lineSegments rotation={[Math.PI / 2, 0, 0]}>
           <edgesGeometry args={[new THREE.TorusGeometry(0.8, 0.2, 8, 24)]} />
           <primitive object={wireframeMaterial} attach="material" />
        </lineSegments>
      </mesh>

      {/* Right Cooling Fan Array */}
      <mesh ref={fan2Ref} position={[1.5, 0, 0]}>
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(1.2, 1.2, 0.4, 32, 1)]} />
          <primitive object={wireframeMaterial} attach="material" />
        </lineSegments>
        <lineSegments rotation={[Math.PI / 2, 0, 0]}>
           <edgesGeometry args={[new THREE.TorusGeometry(0.8, 0.2, 8, 24)]} />
           <primitive object={wireframeMaterial} attach="material" />
        </lineSegments>
      </mesh>
      
      {/* Surrounding Data Rings */}
      <lineSegments rotation={[Math.PI/2, 0, 0]}>
        <edgesGeometry args={[new THREE.TorusGeometry(4, 0.01, 4, 64)]} />
        <primitive object={new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.4 })} attach="material" />
      </lineSegments>
    </group>
  );
}

export default function InteractiveThermalCore() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      {/* Massive background gradient to simulate depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#050505] to-[#050505] opacity-50" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <WireframeCoolingArray />
      </Canvas>
      
      {/* Vignette overlay for cinematic darkness around edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
