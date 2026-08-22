"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function ScrollDrivenCoupler() {
  const baseRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const collarRef = useRef<THREE.Mesh>(null);
  const valveRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  // Track scroll position seamlessly
  const scrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll between 0 and 1 based on first 1200px of the page
      scrollY.current = Math.min(window.scrollY / 1200, 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    const t = scrollY.current;
    
    // Smoothly interpolate positions for the Exploded View effect based on scroll
    // THREE.MathUtils.lerp(current, target, speed)
    if (collarRef.current) collarRef.current.position.y = THREE.MathUtils.lerp(collarRef.current.position.y, 0.5 + (t * 1.5), 0.1);
    if (ring1Ref.current) ring1Ref.current.position.y = THREE.MathUtils.lerp(ring1Ref.current.position.y, 1.5 + (t * 2.5), 0.1);
    if (ring2Ref.current) ring2Ref.current.position.y = THREE.MathUtils.lerp(ring2Ref.current.position.y, 1.7 + (t * 2.8), 0.1);
    if (valveRef.current) valveRef.current.position.y = THREE.MathUtils.lerp(valveRef.current.position.y, 1.4 + (t * 3.5), 0.1);
    if (baseRef.current) baseRef.current.position.y = THREE.MathUtils.lerp(baseRef.current.position.y, -1.2 - (t * 1.0), 0.1);
    
    // Continuous premium rotation
    state.scene.rotation.y += delta * 0.2;
    state.scene.rotation.x = THREE.MathUtils.lerp(state.scene.rotation.x, 0.4 + (t * 0.5), 0.05);
  });

  // Materials
  const polishedSteel = new THREE.MeshStandardMaterial({ color: "#e2e8f0", metalness: 0.9, roughness: 0.1 });
  const darkAnodized = new THREE.MeshStandardMaterial({ color: "#0f172a", metalness: 0.8, roughness: 0.3 });
  const neonCyan = new THREE.MeshStandardMaterial({ color: "#06b6d4", emissive: "#06b6d4", emissiveIntensity: 0.8, metalness: 0.8 });

  return (
    <group scale={1.3} rotation={[0, 0, 0]}>
      {/* 1. Hex Nut Base (Moves Down on Scroll) */}
      <mesh ref={baseRef} position={[0, -1.2, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.9, 0.9, 0.6, 6]} />
        <mesh position={[0, -0.5, 0]} material={darkAnodized}>
          <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
        </mesh>
      </mesh>

      {/* 2. Main Outer Body (Stays Static as Anchor) */}
      <mesh ref={bodyRef} position={[0, -0.4, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.75, 0.75, 1.0, 64]} />
      </mesh>

      {/* 3. Locking Collar (Moves Up on Scroll) */}
      <mesh ref={collarRef} position={[0, 0.5, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.95, 0.95, 1.2, 32]} />
        {/* Glow rings embedded in collar */}
        <mesh position={[0, -0.3, 0]} material={neonCyan}><torusGeometry args={[0.96, 0.02, 16, 64]} /></mesh>
        <mesh position={[0, 0, 0]} material={darkAnodized}><torusGeometry args={[0.95, 0.03, 16, 64]} /></mesh>
        <mesh position={[0, 0.3, 0]} material={neonCyan}><torusGeometry args={[0.96, 0.02, 16, 64]} /></mesh>
      </mesh>

      {/* 4. Internal Valve Insert (Moves Far Up on Scroll) */}
      <mesh ref={valveRef} position={[0, 1.4, 0]} material={polishedSteel}>
        <cylinderGeometry args={[0.55, 0.55, 0.8, 64]} />
        {/* Internal Pin */}
        <mesh position={[0, 0.4, 0]} material={neonCyan}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
        </mesh>
      </mesh>

      {/* 5. Dual Viton O-Rings (Separate from valve to show assembly) */}
      <mesh ref={ring1Ref} position={[0, 1.5, 0]} material={darkAnodized}>
        <torusGeometry args={[0.56, 0.06, 16, 64]} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 1.7, 0]} material={darkAnodized}>
        <torusGeometry args={[0.56, 0.06, 16, 64]} />
      </mesh>
    </group>
  );
}

export default function Coupler3D() {
  return (
    // 'fixed' locks the canvas to the background, 'pointer-events-none' ensures the buyer can click HTML buttons
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-80 mix-blend-lighten overflow-hidden">
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 0, 7.5], fov: 35 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }}>
          
          <ambientLight intensity={1.5} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={300} color="#ffffff" />
          <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={1} intensity={200} color="#06b6d4" />
          
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <ScrollDrivenCoupler />
          </Float>

          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#06b6d4" />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/40 to-[#050811] h-screen" />
    </div>
  );
}
