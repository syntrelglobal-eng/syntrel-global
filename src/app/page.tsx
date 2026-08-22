// @ts-nocheck
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Database, Network } from "lucide-react";

const InteractiveThermalCore = dynamic(() => import("@/components/InteractiveThermalCore"), { ssr: false });

export default function SyntrelHomePage() {
  return (
    <main className="relative bg-transparent text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. FIXED 3D BACKGROUND ENGINE */}
      <InteractiveThermalCore />

      {/* 2. STORYTELLING SCROLL TIMELINE */}
      <div className="relative z-10 w-full">
        
        {/* ================= SCENE 1: HERO ================= */}
        <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex justify-center mb-6">
              <div className="px-4 py-1.5 rounded-full border border-cyan-900/60 bg-black/60 text-cyan-400 text-[10px] font-mono tracking-widest uppercase flex items-center backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 animate-pulse" />
                Next-Gen AI Infrastructure Sourcing
              </div>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-[7rem] font-black text-white leading-[1.0] tracking-tighter">
              Accelerating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                Superintelligence.
              </span>
            </h1>

            <p className="mt-8 text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
              Scroll Down To Initialize Sequence ↓
            </p>
          </motion.div>
        </section>

        {/* ================= SCENE 2: CORE VALUE PROPOSITION ================= */}
        <section className="w-full min-h-[120vh] flex flex-col justify-center px-6 sm:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-black/50 p-8 sm:p-14 border border-slate-800/80 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Cpu className="w-4 h-4" /> Component-as-a-Service Execution
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Zero-Spill. <br /> Zero-Tariff. <br />
              <span className="text-cyan-400">Zero-Friction.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom. Bypass legacy supply chain silos and opaque broker markups with verified open-book factory manufacturing.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-slate-800 pt-6">
              <div>
                <p className="text-cyan-400 font-mono text-3xl font-black">2,500 PSI</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Fluid Barrier Rating</p>
              </div>
              <div>
                <p className="text-cyan-400 font-mono text-3xl font-black">Ra 0.4 µm</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Surface Roughness</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================= SCENE 3: SOVEREIGN GPU INFRASTRUCTURE ================= */}
        <section className="w-full min-h-[120vh] flex flex-col justify-center items-end px-6 sm:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-black/50 p-8 sm:p-14 border border-slate-800/80 rounded-3xl backdrop-blur-xl shadow-2xl text-left"
          >
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Database className="w-4 h-4" /> Rack-Scale Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Sovereign GPU Infrastructure
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              India’s AI Factory. Launch rack-scale GB300, B200, H200, and H100 liquid-cooled clusters in minutes. Built to handle immense thermal loads with precision AS9100 CNC manifolds, petabyte-scale distributed storage, and 99.95% uptime SLAs.
            </p>
            <a href="#rfq" className="inline-flex items-center gap-3 text-black font-bold bg-cyan-400 hover:bg-cyan-300 transition-all px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              View Services & Specs <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* ================= SCENE 4: END-TO-END AUTOMATION ================= */}
        <section className="w-full min-h-[120vh] flex flex-col justify-center px-6 sm:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-black/50 p-8 sm:p-14 border border-slate-800/80 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Network className="w-4 h-4" /> Autonomous Frameworks
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              End-to-End Enterprise Automation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Purpose-built Component-as-a-Service (CaaS) frameworks designed for your domain, compliance requirements, and exact physical architecture. From advanced fluid dynamics to predictive maintenance at petabyte scale, deployed directly on sovereign infrastructure with 100% CMM traceability.
            </p>
            <a href="#rfq" className="inline-flex items-center gap-3 text-white font-bold border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all">
              Explore CaaS Platform <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* ================= SCENE 5: HIGH-CONVERSION RFQ FUNNEL ================= */}
        <section id="rfq" className="w-full min-h-screen flex flex-col justify-center items-center px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <div className="p-10 sm:p-16 rounded-[2.5rem] border border-cyan-900/60 bg-black/80 backdrop-blur-2xl text-center shadow-[0_0_100px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/15 blur-[120px]" />
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">
                Initiate Engineering Pilot
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto relative z-10">
                Upload technical drawings (STEP, IGES, DXF). Receive formal DFM feasibility reports and DDP zero-tariff pricing within 48 hours.
              </p>
              
              <form className="space-y-4 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  className="w-full px-6 py-4 rounded-full bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors shadow-inner text-sm text-center" 
                  required 
                />
                <button className="w-full py-4 rounded-full bg-cyan-400 text-slate-950 font-bold text-base uppercase tracking-wider hover:bg-cyan-300 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  Submit For DFM Review
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-xs font-mono uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NDA & NCND Protected • 256-Bit Encrypted Transfer</span>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
