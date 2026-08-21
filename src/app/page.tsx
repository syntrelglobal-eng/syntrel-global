"use client"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Clock, Cpu, CheckCircle2, 
  Zap, Layers, AlertTriangle, ChevronDown, Gauge,
  Activity, ThermometerSnowflake, Droplet
} from "lucide-react";
import SourcingInfographic from "@/components/SourcingInfographic";

// OPTIMIZATION: Reduced polygon geometry (from 32 down to 16/24 segments) for massive mobile performance gains.
function CADCouplerModel() {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.1}>
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.6, 6]} />
        <meshStandardMaterial color="#0284c7" wireframe wireframeLinewidth={1.5} />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 1.0, 24]} />
        <meshStandardMaterial color="#38bdf8" wireframe wireframeLinewidth={1} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[1.05, 0.12, 12, 24]} />
        <meshStandardMaterial color="#0ea5e9" wireframe />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[1.08, 1.08, 0.8, 24]} />
        <meshStandardMaterial color="#0284c7" wireframe wireframeLinewidth={1.2} />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.8, 24]} />
        <meshStandardMaterial color="#0ea5e9" wireframe wireframeLinewidth={1.5} />
      </mesh>
    </group>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", volume: "2500", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToRFQ = () => {
    document.getElementById("rfq-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#0a0a0a] text-slate-300 overflow-x-hidden w-full">
      
      {/* ---------------- SECTION 1: HERO (MOBILE OPTIMIZED) ---------------- */}
      <section className="relative min-h-[95vh] md:min-h-[92vh] flex flex-col items-center justify-center px-4 md:px-6">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          {/* OPTIMIZATION: dpr cap ensures mobile GPUs aren't overloaded rendering retina 3D */}
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={2.5} color="#0ea5e9" />
            <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#38bdf8" />
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
              <CADCouplerModel />
            </Float>
            {/* OPTIMIZATION: enableZoom={false} prevents mobile users from accidentally zooming the canvas while scrolling */}
            <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mt-[-1rem] md:mt-[-2rem]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] md:text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 rounded-full border border-cyan-500/30 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              UAE AI DATA CENTER INFRASTRUCTURE
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
              Zero-Spill. Zero-Tariff. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Zero-Friction.
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
              Pre-certified, OCP V1.0 compliant thermal components bridging India's precision AS9100 CNC capacity with the Middle East's high-density computing boom.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <button onClick={scrollToRFQ} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 text-white font-bold text-sm tracking-wide rounded-sm transition-all shadow-lg shadow-cyan-950/50">
              Order Engineering Pilot <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/vault" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-sm tracking-wide border border-white/10 rounded-sm transition-all backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Enter QA Ledger
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SECTION 2: THERMAL PERFORMANCE INFOGRAPHIC (NEW) ---------------- */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Hyperscale Readiness</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">Engineered for 120kW+ Rack Densities</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              As the UAE transitions to massive NVIDIA GB200 NVL72 architectures, legacy air cooling fails. Our UQDs maintain precision flow rates required for direct-to-chip liquid loops without catastrophic pressure drops.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-[#111827] border border-cyan-500/20 p-5 md:p-6 rounded-sm">
              <ThermometerSnowflake className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">1.15</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Target PUE Enabled</div>
            </div>
            <div className="bg-[#111827] border border-cyan-500/20 p-5 md:p-6 rounded-sm">
              <Activity className="w-6 h-6 text-emerald-400 mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">&gt;99.9%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Uptime Reliability (MTBF)</div>
            </div>
            <div className="bg-[#111827] border border-cyan-500/20 p-5 md:p-6 rounded-sm">
              <Droplet className="w-6 h-6 text-blue-400 mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">35 L/min</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Max Flow Rate (Cv)</div>
            </div>
            <div className="bg-[#111827] border border-cyan-500/20 p-5 md:p-6 rounded-sm">
              <Cpu className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">AI Chipset Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: TECHNICAL MATRIX ---------------- */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16">
            <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Hardware Specifications</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-white mt-2">OCP V1.0+ Norms</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="border border-white/10 bg-white/[0.02] p-4 md:p-6">
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3 md:mb-4" />
              <h4 className="text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-wider">Base Material</h4>
              <div className="text-lg md:text-2xl font-bold text-white mt-1">SS316L</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-4 md:p-6">
              <Gauge className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3 md:mb-4" />
              <h4 className="text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-wider">Pressure Rating</h4>
              <div className="text-lg md:text-2xl font-bold text-white mt-1">10 Bar</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-4 md:p-6">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3 md:mb-4" />
              <h4 className="text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-wider">Spill Tolerance</h4>
              <div className="text-lg md:text-2xl font-bold text-white mt-1">&lt; 0.05 cc</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-4 md:p-6">
              <Cpu className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3 md:mb-4" />
              <h4 className="text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-wider">Radial Drift</h4>
              <div className="text-lg md:text-2xl font-bold text-white mt-1">Â±0.8 mm</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: RFQ FUNNEL ---------------- */}
      <section id="rfq-section" className="py-16 md:py-24 px-4 md:px-6 bg-[#0d1117] relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto border border-cyan-500/30 bg-[#0a0a0a] p-6 md:p-12 rounded-sm shadow-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 text-[10px] md:text-xs font-mono font-semibold rounded-full mb-6">
            <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 text-cyan-400" /> GUARANTEED 24-HOUR RFQ
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 md:mb-8">Request Pilot Allocation</h2>
          {submitted ? (
            <div className="bg-cyan-950/40 border border-cyan-500/50 p-6 md:p-8 text-center rounded-sm">
              <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Pilot Request Initiated</h3>
              <p className="text-slate-300 text-xs md:text-sm mt-2">An engineering manager will dispatch landed CEPA quotes to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-mono uppercase text-slate-400 mb-1 md:mb-2">Lead Name</label>
                  <input type="text" required placeholder="e.g. Tariq Al-Mansoor" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-cyan-400" />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-mono uppercase text-slate-400 mb-1 md:mb-2">Corporate Email</label>
                  <input type="email" required placeholder="tariq@datacenter.ae" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-cyan-400" />
                </div>
              </div>
              <button type="submit" className="w-full px-6 md:px-8 py-3.5 md:py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded-sm mt-2 md:mt-4">
                Transmit RFQ Specification
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
