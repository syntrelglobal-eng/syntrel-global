// @ts-nocheck
"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleTunnel() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Track scroll velocity and position for interactive physics
  const scrollData = useRef({ y: 0, velocity: 0 });
  
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollData.current.velocity = currentY - lastY;
      scrollData.current.y = currentY;
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate 8,000 particles in a deep cylindrical tunnel
  const particleCount = 8000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color("#06b6d4"); // Neon Cyan
    const colorB = new THREE.Color("#1e3a8a"); // Deep Blue

    for (let i = 0; i < particleCount; i++) {
      // Cylinder distribution
      const radius = 3 + Math.random() * 5;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 100; // Deep Z-axis tunnel

      pos[i * 3 + 0] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = z;

      // Mix colors based on position
      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      col[i * 3 + 0] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Base forward movement simulating fluid flow
    let speed = 2.0; 
    
    // Add scroll velocity to speed (The 8bit.ai "warp" effect)
    if (Math.abs(scrollData.current.velocity) > 0) {
      speed += scrollData.current.velocity * 0.05;
      scrollData.current.velocity *= 0.9; // Friction decay
    }

    // Move particles toward the camera
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 2] += speed * delta * 10;
      
      // Gentle wave distortion based on time (thermodynamic turbulence)
      positions[i * 3 + 0] += Math.sin(state.clock.elapsedTime + positions[i * 3 + 2] * 0.1) * 0.01;

      // Loop particles back to the start of the tunnel when they pass the camera
      if (positions[i * 3 + 2] > 10) {
        positions[i * 3 + 2] = -90;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire tunnel
    pointsRef.current.rotation.z -= delta * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function BackgroundFlow3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020308]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <fog attach="fog" args={["#020308", 10, 60]} /> {/* Fade to black in the distance */}
        <ParticleTunnel />
      </Canvas>
    </div>
  );
}
