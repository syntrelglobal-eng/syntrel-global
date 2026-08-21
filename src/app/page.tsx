"use client"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Clock, Cpu, CheckCircle2, 
  Zap, Layers, AlertTriangle, ChevronDown, Gauge 
} from "lucide-react";

// Procedural Precision CAD Coupler (Multi-stage Machined Assembly)
function CADCouplerModel() {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  // FIX: Using manual delta accumulation to bypass the deprecated THREE.Clock warning
  useFrame((_, delta) => {
    time.current += delta;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.1}>
      {/* Hexagonal Grip Base */}
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.6, 6]} />
        <meshStandardMaterial color="#0284c7" wireframe wireframeLinewidth={1.5} />
      </mesh>

      {/* Main Valve Body Barrel */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 1.0, 32]} />
        <meshStandardMaterial color="#38bdf8" wireframe wireframeLinewidth={1} />
      </mesh>

      {/* Locking Sleeve Ring */}
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[1.05, 0.12, 16, 32]} />
        <meshStandardMaterial color="#0ea5e9" wireframe />
      </mesh>

      {/* Quick-Release Slider Collar */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[1.08, 1.08, 0.8, 32]} />
        <meshStandardMaterial color="#0284c7" wireframe wireframeLinewidth={1.2} />
      </mesh>

      {/* Double O-Ring Sealing Grooves */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.3, 32]} />
        <meshStandardMaterial color="#38bdf8" wireframe />
      </mesh>

      {/* Precision Mating Plug */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.8, 32]} />
        <meshStandardMaterial color="#0ea5e9" wireframe wireframeLinewidth={1.5} />
      </mesh>

      {/* Internal Fluid Valve Core */}
      <mesh position={[0, 2.0, 0]}>
        <coneGeometry args={[0.4, 0.5, 16]} />
        <meshStandardMaterial color="#e0f2fe" wireframe />
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
    <div className="relative bg-[#0a0a0a] text-slate-300">
      
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={2.5} color="#0ea5e9" />
            <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#38bdf8" />
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
              <CADCouplerModel />
            </Float>
            <OrbitControls autoRotate speed={0.4} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-[-2rem]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 rounded-full border border-cyan-500/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              UAE DATA CENTER INFRASTRUCTURE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08]">
              Zero-Spill. Zero-Tariff. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Zero-Friction.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={scrollToRFQ} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 text-white font-bold text-sm tracking-wide rounded-sm transition-all shadow-lg shadow-cyan-950/50">
              Order Engineering Pilot <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/vault" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-sm tracking-wide border border-white/10 rounded-sm transition-all backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Enter QA Ledger
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* ---------------- SECTION 2: BOTTLENECK ARBITRAGE ---------------- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10 bg-[#0a0a0a]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">The Geopolitical Vacuum</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">Solving the UAE AI Cooling Squeeze</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Western Lead-Time Backlog</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Monopolized European manufacturers cannot match hyperscale build rates, holding up AI rack deployments.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">The "China+1" Imperative</h3>
            <p className="text-slate-400 text-sm leading-relaxed">To secure export clearances for top-tier US AI hardware, UAE infrastructure must purge Chinese components.</p>
          </div>
          <div className="bg-cyan-950/20 border border-cyan-500/40 p-8 rounded-sm">
            <h3 className="text-xl font-bold text-white mb-2">The Syntrel CEPA Wedge</h3>
            <p className="text-slate-300 text-sm leading-relaxed">4-week air freight delivery from India's AS9100 clusters. 100% US-chip compliant with 0% import duty into the UAE.</p>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: TECHNICAL MATRIX ---------------- */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Hardware Specifications</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">Engineered to OCP V1.0+ Norms</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <Layers className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Base Material</h4>
              <div className="text-2xl font-bold text-white mt-1">SS316L</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <Gauge className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Pressure Rating</h4>
              <div className="text-2xl font-bold text-white mt-1">10 Bar (150 PSI)</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Spill Tolerance</h4>
              <div className="text-2xl font-bold text-white mt-1">&lt; 0.05 cc / cycle</div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Radial Drift</h4>
              <div className="text-2xl font-bold text-white mt-1">±0.8 mm Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: RFQ FUNNEL ---------------- */}
      <section id="rfq-section" className="py-24 px-6 bg-[#0d1117] relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto border border-cyan-500/30 bg-[#0a0a0a] p-8 md:p-12 rounded-sm shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold rounded-full mb-6">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> GUARANTEED 24-HOUR RFQ RESPONSE
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-8">Request Pilot Allocation</h2>
          {submitted ? (
            <div className="bg-cyan-950/40 border border-cyan-500/50 p-8 text-center rounded-sm">
              <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Pilot Request Initiated</h3>
              <p className="text-slate-300 text-sm mt-2">An engineering manager will dispatch landed CEPA quotes to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Lead Name</label>
                  <input type="text" required placeholder="e.g. Tariq Al-Mansoor" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Corporate Email</label>
                  <input type="email" required placeholder="tariq@datacenter.ae" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400" />
                </div>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-sm mt-4">
                Transmit RFQ Specification
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}