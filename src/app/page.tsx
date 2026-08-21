"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SourcingInfographic from "@/components/SourcingInfographic";
import { ShieldCheck, Clock, Globe2, ArrowRight, Cpu } from "lucide-react";

const InteractiveHero3D = dynamic(
  () =>
    Promise.resolve(() => (
      <div className="w-full h-full bg-slate-900/30" />
    )),
  { ssr: false }
);

export default function SyntrelHomePage() {
  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050811]/80 border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black text-lg">S</div>
          <span className="font-bold tracking-tight text-lg text-white">SYNTREL<span className="text-cyan-400">.GLOBAL</span></span>
        </div>
        <a href="#rfq" className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-400 text-black hover:bg-cyan-300 transition-all">
          Submit CAD
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" /> Component-as-a-Service Execution
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Precision Contract <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Manufacturing & Export
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Eliminate supply chain middle-layers. Connect engineering designs directly to verified tier-1 Asian precision factories with certified QA.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a href="#rfq" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all">
              Get Instant Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 h-[340px] sm:h-[420px] w-full rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 p-2 relative overflow-hidden"
        >
          <InteractiveHero3D />
        </motion.div>
      </section>

      {/* KPI STRIP */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-y border-slate-800 bg-slate-950/40 py-10 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono text-cyan-400">±0.005mm</p>
            <p className="text-xs sm:text-sm font-medium text-slate-200">CNC Tolerance</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono text-emerald-400">99.82%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-200">Yield Rate</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono text-blue-400">48 Hrs</p>
            <p className="text-xs sm:text-sm font-medium text-slate-200">DFM Analysis</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono text-indigo-400">32-40%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-200">Cost Reduction</p>
          </div>
        </div>
      </motion.section>

      {/* SOURCING INFOGRAPHIC WITH ANIMATIONS */}
      <SourcingInfographic />

      {/* RFQ SECTION */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        id="rfq" 
        className="py-16 px-4 sm:px-8 max-w-4xl mx-auto text-center space-y-6"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-cyan-950/30 to-slate-900/60 border border-cyan-500/30 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Ready for Production?</h2>
          <form className="max-w-md mx-auto space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Corporate procurement email" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:border-cyan-400" />
            <button className="w-full py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300">Request Quote & DFM</button>
          </form>
        </div>
      </motion.section>
    </main>
  );
}
