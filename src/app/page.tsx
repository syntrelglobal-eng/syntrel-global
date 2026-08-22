// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import SourcingInfographic from "@/components/SourcingInfographic";
import { ShieldCheck, Clock, Globe2, Activity, Minimize2, CheckCircle2 } from "lucide-react";

const Coupler3D = dynamic(() => import("@/components/Coupler3D"), { ssr: false });

function UrgencyCountdown() {
  const [remaining, setRemaining] = useState<number>(24 * 3600 - 1800);

  useEffect(() => {
    const timer = setInterval(() => setRemaining((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const hrs = Math.floor(remaining / 3600).toString().padStart(2, '0');
  const mins = Math.floor((remaining % 3600) / 60).toString().padStart(2, '0');
  const secs = (remaining % 60).toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3 font-mono mt-4">
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-cyan-900/60 text-cyan-400 px-4 py-2 rounded-lg text-2xl sm:text-3xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]">{hrs}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Hours</span>
      </div>
      <span className="text-cyan-400 text-2xl font-bold -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-cyan-900/60 text-cyan-400 px-4 py-2 rounded-lg text-2xl sm:text-3xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]">{mins}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Mins</span>
      </div>
      <span className="text-cyan-400 text-2xl font-bold -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-cyan-900/60 text-cyan-400 px-4 py-2 rounded-lg text-2xl sm:text-3xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]">{secs}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Secs</span>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, title, metric, detail, delay }) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden flex flex-col justify-center group backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <Icon className="w-8 h-8 text-cyan-400 mb-4" />
        <h3 className="text-3xl sm:text-4xl font-black font-mono text-white mb-1">{metric}</h3>
        <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</p>
        
        <AnimatePresence>
          {hovered && (
            <motion.div 
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="text-xs text-slate-300 leading-relaxed overflow-hidden border-t border-slate-800/80 pt-4 w-full text-left"
            >
              {detail}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SyntrelHomePage() {
  return (
    <main className="relative min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 3D Scroll Engine Locked in Background */}
      <Coupler3D />

      {/* Content Overlay */}
      <div className="relative z-10">
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 pt-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex justify-center mb-4"
            >
              <div className="px-4 py-1.5 rounded-full border border-cyan-900/60 bg-cyan-950/40 text-cyan-400 text-[10px] font-mono tracking-widest uppercase flex items-center shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
                <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse" />
                UAE AI Infrastructure Corridor • Approved Supply Node
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-[5.75rem] font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl"
            >
              Zero-Spill. <br/>Zero-Tariff. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Zero-Friction.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom.
            </motion.p>
          </div>
        </section>

        {/* Solid Backgrounds begin fading in here to ground the content */}
        <div className="bg-gradient-to-b from-transparent to-[#050811] pt-32">
          <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto bg-[#050811]">
            <div className="text-center mb-16 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered For Mission-Critical Thermal Loads</h2>
              <p className="text-slate-400 text-sm">Hover over telemetry points to examine manufacturing standards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard 
                icon={Minimize2} title="CNC Machining Tolerance" metric="±0.005mm" delay={0.1}
                detail={
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    <li><strong className="text-cyan-400">Surface Roughness:</strong> Ra 0.4 µm micro-finish</li>
                    <li><strong className="text-cyan-400">Metrology:</strong> Zeiss Multi-Axis CMM</li>
                    <li><strong className="text-cyan-400">Substrates:</strong> SS316L, 17-4PH, AL6061-T6</li>
                  </ul>
                }
              />
              <MetricCard 
                icon={Activity} title="Fluid Barrier Rating" metric="2,500 PSI" delay={0.2}
                detail={
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    <li><strong className="text-cyan-400">Leak Rate:</strong> 1x10⁻⁹ atm cc/sec</li>
                    <li><strong className="text-cyan-400">Thermal Envelope:</strong> -40°C to +150°C</li>
                    <li><strong className="text-cyan-400">Seal Profile:</strong> Dual Fluorocarbon Viton O-Rings</li>
                  </ul>
                }
              />
              <MetricCard 
                icon={CheckCircle2} title="Batch Yield Consistency" metric="99.82%" delay={0.3}
                detail={
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    <li><strong className="text-cyan-400">Scrap Rate:</strong> &lt; 0.18% cumulative average</li>
                    <li><strong className="text-cyan-400">Quality Certs:</strong> ISO 9001:2015 / IATF 16949</li>
                    <li><strong className="text-cyan-400">Verification:</strong> Laser-etched QR batch tracking</li>
                  </ul>
                }
              />
            </div>
          </section>

          <SourcingInfographic />

          <section id="rfq" className="py-24 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#050811] to-[#050811]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-3xl border border-cyan-900/50 bg-[#070b14] overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.06)] relative z-20"
            >
              <div className="w-full bg-cyan-950/30 border-b border-cyan-900/40 py-6 text-center">
                <h3 className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-1 font-mono">Q3 Manufacturing Allocation Closing</h3>
                <UrgencyCountdown />
              </div>

              <div className="p-8 sm:p-14 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Initiate Engineering Pilot</h2>
                <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                  Upload technical drawings (STEP, IGES, DXF). Receive formal DFM feasibility reports and DDP pricing within 48 hours.
                </p>
                
                <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Corporate Email Address" className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors shadow-inner text-sm" required />
                  <button className="w-full py-4 rounded-xl bg-cyan-400 text-slate-950 font-bold text-base hover:bg-cyan-300 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    Submit For DFM Review
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs font-mono uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>NDA & NCND Protected • 256-Bit Encrypted Transfer</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </section>
          
          <footer className="border-t border-slate-900 bg-[#020306] py-10 text-center text-xs text-slate-600 font-mono relative z-20">
            © 2026 SYNTREL GLOBAL • B2B PRECISION CONTRACT SOURCING PLATFORM • ALL RIGHTS RESERVED
          </footer>
        </div>
      </div>
    </main>
  );
}
