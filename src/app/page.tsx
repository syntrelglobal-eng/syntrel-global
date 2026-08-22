// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

// The Interactive Wireframe Engine
const InteractiveThermalCore = dynamic(() => import("@/components/InteractiveThermalCore"), { ssr: false });

export default function SyntrelHomePage() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-transparent text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. FIXED 3D ENGINE */}
      <InteractiveThermalCore />

      {/* 2. THE DEEP SCROLL TIMELINE */}
      <div className="relative z-10 w-full">
        
        {/* ================= SCENE 1: THE HERO ================= */}
        <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <div className="px-4 py-1.5 rounded-full border border-slate-700/60 bg-black/40 text-slate-300 text-[10px] font-mono tracking-widest uppercase flex items-center backdrop-blur-md">
                <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-3 animate-pulse" />
                Advanced CaaS Infrastructure
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-black text-white leading-[1.05] tracking-tighter">
              Accelerated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600">
                Thermal Computing.
              </span>
            </h1>
            <p className="mt-8 text-slate-400 font-mono text-sm tracking-widest uppercase">
              Scroll Down To Initialize Sequence ↓
            </p>
          </motion.div>
        </section>

        {/* ================= SCENE 2: TENSE DATA DENSITY ================= */}
        {/* Notice the huge min-h-[150vh] to force the user to scroll deeply to reveal the text */}
        <section className="w-full min-h-[150vh] flex flex-col justify-center px-6 sm:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30%" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-black/40 p-8 sm:p-12 border border-slate-800/50 rounded-2xl backdrop-blur-md"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Sovereign GPU Infrastructure
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              India’s AI Factory. Launch rack-scale GB300, B200, H200, and H100 liquid-cooled clusters in minutes. Built to handle immense thermal loads with precision AS9100 CNC manifolds, petabyte-scale distributed storage, and 99.95% uptime SLAs. From single edge nodes to exaflop supercomputing clusters, bypass legacy silos and operational inefficiencies.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 border-t border-slate-800 pt-8">
              <div>
                <p className="text-cyan-400 font-mono text-2xl font-bold">2,500 PSI</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Fluid Barrier Rating</p>
              </div>
              <div>
                <p className="text-cyan-400 font-mono text-2xl font-bold">Ra 0.4 µm</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Surface Roughness</p>
              </div>
            </div>
            <a href="#services" className="inline-flex items-center gap-3 text-white font-bold hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-full text-sm uppercase tracking-wider">
              View Services <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* ================= SCENE 3: RIGHT-ALIGNED DENSE TEXT ================= */}
        <section className="w-full min-h-[150vh] flex flex-col justify-center items-end px-6 sm:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30%" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-black/40 p-8 sm:p-12 border border-slate-800/50 rounded-2xl backdrop-blur-md text-left"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              End-to-End Enterprise Automation
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              Purpose-built Component-as-a-Service (CaaS) frameworks designed for your domain, compliance requirements, and exact physical architecture. From advanced fluid dynamics to predictive maintenance at petabyte scale, deployed directly on sovereign infrastructure with 100% CMM traceability and zero-defect yield consistency.
            </p>
            <a href="#explore" className="inline-flex items-center gap-3 text-white font-bold hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-full text-sm uppercase tracking-wider">
              Explore CaaS Platform <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* ================= SCENE 4: THE FUNNEL CLOSE ================= */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <div className="p-10 sm:p-16 rounded-[2rem] border border-cyan-900/50 bg-black/60 backdrop-blur-2xl text-center shadow-[0_0_100px_rgba(6,182,212,0.15)] relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/20 blur-[100px]" />
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">
                Initiate Engineering Pilot
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
                Upload technical drawings (STEP, IGES). Receive a formal DFM feasibility report and DDP zero-tariff pricing within 48 hours.
              </p>
              
              <form className="space-y-5 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  className="w-full px-6 py-4 rounded-full bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors shadow-inner text-sm text-center" 
                  required 
                />
                <button className="w-full py-4 rounded-full bg-cyan-400 text-black font-bold text-sm uppercase tracking-wider hover:bg-cyan-300 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  Submit For DFM Review
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-xs font-mono uppercase">
                  <ShieldCheck className="w-4 h-4 text-slate-600" />
                  <span>NDA Protected • 256-Bit Encrypted</span>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
