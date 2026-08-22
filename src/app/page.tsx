"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SourcingInfographic from "@/components/SourcingInfographic";
import { ShieldCheck, Clock, Globe2, ArrowRight, Timer } from "lucide-react";

// Dynamically import the background CAD to keep the page fast
const BackgroundCAD = dynamic(() => import("@/components/BackgroundCAD"), { ssr: false });

// 24-Hour Urgency Timer Component
function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 3600 - 1500); // Starts at ~23.5 hours for realism

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3 font-mono">
      <div className="flex flex-col items-center">
        <span className="bg-slate-900/80 border border-slate-700 text-cyan-400 px-3 py-2 rounded-md text-2xl font-bold">{h}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase">Hours</span>
      </div>
      <span className="text-cyan-400 text-xl font-bold -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-900/80 border border-slate-700 text-cyan-400 px-3 py-2 rounded-md text-2xl font-bold">{m}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase">Minutes</span>
      </div>
      <span className="text-cyan-400 text-xl font-bold -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-900/80 border border-slate-700 text-cyan-400 px-3 py-2 rounded-md text-2xl font-bold">{s}</span>
        <span className="text-[10px] text-slate-500 mt-1 uppercase">Seconds</span>
      </div>
    </div>
  );
}

export default function SyntrelHomePage() {
  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* HEADER (Original Layout) */}
      <header className="relative z-50 w-full px-6 py-5 flex items-center justify-between border-b border-slate-800/50 bg-[#050811]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-cyan-500 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
          </div>
          <span className="font-bold tracking-widest text-lg text-white">SYNTREL <span className="text-cyan-500 font-normal">GLOBAL</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition">Component Library</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition"><ShieldCheck className="w-4 h-4" /> QA Vault</a>
          <a href="#" className="hover:text-white transition">CEPA Logistics</a>
          <a href="#" className="hover:text-white transition">Supplier Portal</a>
        </div>
      </header>

      {/* SECTION 1: THE HERO (Restored Design) */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center pt-10 pb-20 px-4">
        {/* Absolute Background 3D Model */}
        <BackgroundCAD />

        {/* Foreground Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-[10px] font-mono tracking-widest uppercase flex items-center shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              UAE Data Center Infrastructure
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-[5.5rem] font-black text-white leading-[1.1] tracking-tight"
          >
            Zero-Spill. Zero-<br />Tariff. <br/>
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">Zero-Friction.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#rfq" className="px-8 py-4 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2">
              Order Engineering Pilot <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 rounded bg-[#050811]/50 backdrop-blur border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-400"/> Enter QA Ledger
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: URGENCY PUSH */}
      <section className="relative z-20 py-10 border-y border-cyan-900/40 bg-[#070b17]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Timer className="w-5 h-5 text-cyan-400" />
            <span className="tracking-wide">Q3 ALLOCATED MANUFACTURING CAPACITY CLOSES IN:</span>
          </div>
          <UrgencyTimer />
        </div>
      </section>

      {/* SECTION 3: ENGINEERING METRICS */}
      <section className="relative z-20 py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Uncompromising Precision</h2>
          <p className="text-slate-400">Audited, traceable, and scalable production metrics.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "±0.005mm", label: "CNC Tolerance", sub: "Zeiss CMM Verified" },
            { value: "99.82%", label: "First-Pass Yield", sub: "Zero-defect inspection" },
            { value: "48 Hrs", label: "DFM Turnaround", sub: "Actionable CAD feedback" },
            { value: "32-40%", label: "Cost Reduction", sub: "Versus US/EU Domestic" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-900 transition-colors"
            >
              <p className="text-4xl font-black font-mono text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-sm font-bold text-slate-200">{stat.label}</p>
              <p className="text-xs text-slate-500 mt-2">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PIPELINE INFOGRAPHIC */}
      <SourcingInfographic />

      {/* SECTION 5: THE ALTERNATIVE (COMPARISON) */}
      <section className="relative z-20 py-24 px-4 sm:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Tier-1 Scale With Syntrel</h2>
          <p className="text-slate-400">Total supply chain visibility vs traditional opaque brokerages.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30"
        >
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-900/80 text-xs font-mono uppercase text-slate-300 border-b border-slate-800">
              <tr>
                <th className="p-6">Procurement Parameter</th>
                <th className="p-6 text-cyan-400 bg-cyan-950/20 font-bold border-x border-cyan-900/50">Syntrel Global CaaS</th>
                <th className="p-6 text-slate-500">Traditional Brokers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-base">
              <tr>
                <td className="p-6 font-medium text-white flex items-center gap-3"><Clock className="w-5 h-5 text-cyan-500" /> Delivery Speed</td>
                <td className="p-6 font-bold text-cyan-300 bg-cyan-950/10 border-x border-cyan-900/50">3 - 5 Days (Pilot)</td>
                <td className="p-6 text-slate-500">3+ Weeks</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-white flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-cyan-500" /> Quality Control</td>
                <td className="p-6 font-bold text-cyan-300 bg-cyan-950/10 border-x border-cyan-900/50">100% CMM Traceability</td>
                <td className="p-6 text-slate-500">2% Random Sampling</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-white flex items-center gap-3"><Globe2 className="w-5 h-5 text-cyan-500" /> Export Tariffs</td>
                <td className="p-6 font-bold text-cyan-300 bg-cyan-950/10 border-x border-cyan-900/50">DDP (Zero-Tariff via CEPA)</td>
                <td className="p-6 text-slate-500">FOB (Buyer Pays Customs)</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* SECTION 6: THE RFQ CLOSE (FUNNEL BOTTOM) */}
      <section id="rfq" className="relative z-20 py-24 px-4 sm:px-8 border-t border-slate-800 bg-[#03050a]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-cyan-950/20 to-[#050811] border border-cyan-900/50 text-center shadow-[0_0_50px_rgba(6,182,212,0.05)]"
        >
          <div className="w-16 h-16 bg-cyan-950/50 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Secure Your Allocation</h2>
          <p className="text-slate-400 text-lg mb-10">
            Upload your technical drawing. Receive actionable DFM feedback and a zero-friction landed quote within 48 hours.
          </p>
          
          <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Corporate Email Address" 
              className="w-full px-5 py-4 rounded-xl bg-[#050811] border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" 
              required 
            />
            <button className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              Initiate RFQ Protocol
            </button>
            <p className="text-xs text-slate-600 font-mono mt-4 uppercase">Direct NDA On File • 256-bit AES Encryption</p>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-[#020306] py-10 text-center text-xs text-slate-600 font-mono">
        © 2026 SYNTREL GLOBAL • B2B PRECISION CONTRACT SOURCING PLATFORM • ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
