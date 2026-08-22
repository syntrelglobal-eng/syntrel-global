// @ts-nocheck
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Server, Activity, ThermometerSnowflake } from "lucide-react";

// The new Immersive Particle Engine
const BackgroundFlow3D = dynamic(() => import("@/components/BackgroundFlow3D"), { ssr: false });

// Cinematic text fade-in component
function FadeSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center text-center px-4"
    >
      {children}
    </motion.div>
  );
}

export default function SyntrelHomePage() {
  return (
    <main className="relative bg-transparent text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Fixed 3D Particle Tunnel */}
      <BackgroundFlow3D />

      {/* 
        THE DEEP SCROLL FOREGROUND 
        Using massive vertical spacing (min-h-screen) to simulate flying through the content.
      */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* SCENE 1: The Hero */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center pt-20">
          <FadeSection>
            <div className="px-4 py-1.5 mb-8 rounded-full border border-cyan-900/60 bg-cyan-950/20 text-cyan-400 text-[10px] font-mono tracking-widest uppercase flex items-center backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse" />
              Next-Gen AI Infrastructure Sourcing
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-[7rem] font-black text-white leading-[1.0] tracking-tighter">
              Accelerating <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Superintelligence.</span>
            </h1>
          </FadeSection>
        </section>

        {/* SCENE 2: The Core Value */}
        <section className="w-full min-h-[80vh] flex flex-col justify-center items-center">
          <FadeSection>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              Zero-Spill. <br/> Zero-Tariff. <br/>
              <span className="text-cyan-400">Zero-Friction.</span>
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed bg-[#020308]/40 p-4 rounded-xl backdrop-blur-sm">
              Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom.
            </p>
          </FadeSection>
        </section>

        {/* SCENE 3: The Deep Content Overlays (Like 8bit.ai features) */}
        <section className="w-full min-h-[100vh] flex flex-col justify-center items-center gap-32 py-32">
          
          <FadeSection>
            <ThermometerSnowflake className="w-16 h-16 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">Thermodynamic Precision</h3>
            <p className="text-slate-400 text-lg max-w-2xl bg-[#020308]/40 p-4 rounded-xl backdrop-blur-sm">
              Engineered for extreme fluid barrier ratings up to 2,500 PSI with 1x10⁻⁹ atm cc/sec helium leak tolerances. Built to handle the massive thermal loads of next-generation Exaflop clusters.
            </p>
          </FadeSection>

          <FadeSection>
            <Server className="w-16 h-16 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">Rack-Scale Deployment</h3>
            <p className="text-slate-400 text-lg max-w-2xl bg-[#020308]/40 p-4 rounded-xl backdrop-blur-sm">
              Launch hyper-agile compute clusters. We match workloads to specialized 5-axis CNC facilities across verified tier-1 corridors, delivering 99.82% yield consistency.
            </p>
          </FadeSection>

        </section>

        {/* SCENE 4: The Action Funnel */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center pb-20">
          <FadeSection>
            <div className="max-w-2xl w-full mx-4 rounded-3xl border border-cyan-900/50 bg-[#070b14]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.1)]">
              <div className="p-10 sm:p-14 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Initiate Engineering Pilot</h2>
                <p className="text-slate-400 text-base mb-10">
                  Secure your Q3 allocation. Upload technical drawings and receive a formal DFM feasibility report and DDP pricing within 48 hours.
                </p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Corporate Email Address" className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors shadow-inner text-sm" required />
                  <button className="w-full py-4 rounded-xl bg-cyan-400 text-slate-950 font-bold text-base hover:bg-cyan-300 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(34,211,238,0.25)] flex justify-center items-center gap-2">
                    Submit For DFM Review <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs font-mono uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>NDA & NCND Protected • 256-Bit Encrypted Transfer</span>
                  </div>
                </form>
              </div>
            </div>
          </FadeSection>
        </section>

      </div>
    </main>
  );
}
