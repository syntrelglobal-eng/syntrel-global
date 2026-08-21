"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import SourcingInfographic from "@/components/SourcingInfographic";
import { 
  ShieldCheck, Zap, TrendingDown, Layers, CheckCircle2, ArrowRight, 
  Cpu, Award, Clock, Globe2, FileSpreadsheet, ChevronRight 
} from "lucide-react";

// Dynamically import 3D Canvas to guarantee instant mobile load speeds
const InteractiveHero3D = dynamic(
  () => import("@/components/InteractiveHero3D").catch(() => () => <div className="w-full h-full bg-slate-900/30" />),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-slate-950">
        <div className="h-10 w-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    ) 
  }
);

export default function SyntrelHomePage() {
  const [activeTab, setActiveTab] = useState<"tolerance" | "materials" | "logistics">("tolerance");

  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 font-sans antialiased overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-cyan-950/40 border-b border-cyan-500/20 py-2 px-4 text-xs font-mono text-cyan-300 text-center flex items-center justify-center gap-3">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Q3 Global Sourcing Capacity Open • ISO 9001:2015 & IATF 16949 Audited Facilities</span>
      </div>

      {/* 2. MOBILE-FIRST NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050811]/80 border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black text-lg">S</div>
          <span className="font-bold tracking-tight text-lg text-white">SYNTREL<span className="text-cyan-400">.GLOBAL</span></span>
        </div>
        <a href="#rfq" className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-cyan-400 text-black hover:bg-cyan-300 transition-all">
          Submit CAD for RFQ
        </a>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" /> Component-as-a-Service (CaaS) Execution
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Precision Contract <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Manufacturing & Export
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Eliminate supply chain middle-layers. Connect engineering designs directly to verified tier-1 Asian precision factories with certified QA inspection reports and DDP international delivery.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a href="#rfq" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all">
              Get Instant DFM & Quote <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full NDA & IP Protection Guaranteed</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-[340px] sm:h-[420px] w-full rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 p-2 relative overflow-hidden shadow-2xl">
          <InteractiveHero3D />
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-lg p-3 text-xs flex justify-between items-center text-slate-300">
            <div>
              <p className="font-mono text-cyan-400 font-bold">LIVE CAD VIEWER</p>
              <p className="text-[11px] text-slate-400">STEP, IGES, DXF, SLDPRT</p>
            </div>
            <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded">VERIFIED 3D</span>
          </div>
        </div>
      </section>

      {/* 4. KPI INFOGRAPHIC STRIP */}
      <section className="border-y border-slate-800 bg-slate-950/40 py-10 px-4 sm:px-8">
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
      </section>

      {/* 5. BUYER DECISION MATRIX */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Why Tier-1 Importers Choose Syntrel</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80 text-xs font-mono uppercase text-slate-300 border-b border-slate-800">
              <tr>
                <th className="p-4">Procurement Parameter</th>
                <th className="p-4 text-cyan-400 bg-cyan-950/20">Syntrel Global CaaS</th>
                <th className="p-4 text-slate-400">Traditional Brokers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="p-4 font-medium text-white flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Lead Time</td>
                <td className="p-4 font-bold text-cyan-300 bg-cyan-950/10">3 - 5 Days</td>
                <td className="p-4 text-slate-400">2 - 3 Weeks</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Quality Assurance</td>
                <td className="p-4 font-bold text-cyan-300 bg-cyan-950/10">100% CMM Batch Inspection</td>
                <td className="p-4 text-slate-400">Random 2% sampling</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white flex items-center gap-2"><Globe2 className="w-4 h-4 text-indigo-400" /> Logistics</td>
                <td className="p-4 font-bold text-cyan-300 bg-cyan-950/10">DDP / Door-to-Door Cleared</td>
                <td className="p-4 text-slate-400">FOB Only (Buyer handles customs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. SOURCING INFOGRAPHIC */}
      <SourcingInfographic />

      {/* 7. RFQ FOOTER */}
      <section id="rfq" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-cyan-950/30 to-slate-900/60 border border-cyan-500/30 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Ready for Production?</h2>
          <form className="max-w-md mx-auto space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Corporate procurement email" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:border-cyan-400" />
            <button className="w-full py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300">Request Quote & DFM</button>
          </form>
        </div>
      </section>
    </main>
  );
}
