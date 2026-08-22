"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Clock, Globe2, ArrowRight, Timer, Cpu, Activity, Minimize2 } from "lucide-react";

// Dynamically import the photorealistic 3D Coupler
const Coupler3D = dynamic(() => import("@/components/Coupler3D"), { ssr: false });

// Urgency Timer
function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 3600 - 1500);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3 font-mono mt-4">
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-red-900/50 text-red-500 px-4 py-2 rounded-md text-3xl font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)]">{h}</span>
        <span className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">Hours</span>
      </div>
      <span className="text-red-500 text-2xl font-bold -mt-6">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-red-900/50 text-red-500 px-4 py-2 rounded-md text-3xl font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)]">{m}</span>
        <span className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">Mins</span>
      </div>
      <span className="text-red-500 text-2xl font-bold -mt-6">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-slate-950 border border-red-900/50 text-red-500 px-4 py-2 rounded-md text-3xl font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)]">{s}</span>
        <span className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">Secs</span>
      </div>
    </div>
  );
}

// FIXED: TypeScript Interface for the Interactive Data Card Props
interface InteractiveDataCardProps {
  icon: React.ElementType;
  title: string;
  metric: string;
  hiddenData: React.ReactNode;
  delay: number;
}

// Hover-Expandable Interactive Data Card with explicit types
function InteractiveDataCard({ icon: Icon, title, metric, hiddenData, delay }: InteractiveDataCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden flex flex-col justify-center h-full group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <Icon className="w-8 h-8 text-cyan-400 mb-4" />
        <h3 className="text-3xl font-black font-mono text-white mb-1">{metric}</h3>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</p>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="text-xs text-slate-300 leading-relaxed overflow-hidden border-t border-slate-800 pt-4 w-full text-left"
            >
              {hiddenData}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SyntrelHomePage() {
  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-20 px-4">
        <Coupler3D />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/40 text-cyan-400 text-[10px] font-mono tracking-widest uppercase flex items-center shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              UAE Data Center Infrastructure • Approved Supply Partner
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-[6rem] font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl"
          >
            Zero-Spill. <br/>Zero-Tariff. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">Zero-Friction.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
          >
            Pre-certified, OCP V1.0 compliant thermal cooling components bridging India's precision AS9100 CNC capacity with the Middle East's AI infrastructure boom.
          </motion.p>
        </div>
      </section>

      <section className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered For Mission-Critical Loads</h2>
          <p className="text-slate-400 text-sm">Hover over specific metrics to reveal underlying technical capacities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InteractiveDataCard 
            icon={Minimize2} 
            title="Machining Tolerance" 
            metric="±0.005mm" 
            delay={0.1}
            hiddenData={
              <ul className="space-y-2 list-disc pl-4 text-cyan-100/70">
                <li><strong className="text-cyan-400">Surface Roughness:</strong> Ra 0.4 µm</li>
                <li><strong className="text-cyan-400">Verification:</strong> 100% Zeiss CMM</li>
                <li><strong className="text-cyan-400">Alloys:</strong> SS316L, 17-4PH, AL6061</li>
              </ul>
            }
          />
          <InteractiveDataCard 
            icon={Activity} 
            title="Fluid Pressure Rating" 
            metric="2,500 PSI" 
            delay={0.2}
            hiddenData={
              <ul className="space-y-2 list-disc pl-4 text-cyan-100/70">
                <li><strong className="text-cyan-400">Leak Rate:</strong> 1x10⁻⁹ atm cc/sec (Helium)</li>
                <li><strong className="text-cyan-400">Thermal Shock:</strong> -40°C to +150°C</li>
                <li><strong className="text-cyan-400">O-Ring:</strong> Double EPDM Viton Seals</li>
              </ul>
            }
          />
          <InteractiveDataCard 
            icon={Cpu} 
            title="Yield Consistency" 
            metric="99.82%" 
            delay={0.3}
            hiddenData={
              <ul className="space-y-2 list-disc pl-4 text-cyan-100/70">
                <li><strong className="text-cyan-400">Scrap Rate:</strong> &lt; 0.18% average</li>
                <li><strong className="text-cyan-400">Audit:</strong> ISO 9001:2015 / IATF 16949</li>
                <li><strong className="text-cyan-400">Traceability:</strong> Laser etched batch logic</li>
              </ul>
            }
          />
        </div>
      </section>

      <section className="relative z-20 py-24 px-4 sm:px-8 bg-slate-900/20 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mb-12 space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Scale Without The Broker Margin</h2>
            <p className="text-slate-400">Compare the Syntrel CaaS model against traditional supply chains.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur-sm"
          >
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-900 border-b border-slate-800">
                <tr>
                  <th className="p-6 text-slate-400 font-mono text-xs uppercase tracking-widest">Metric</th>
                  <th className="p-6 text-cyan-400 font-bold border-x border-cyan-900/50 bg-cyan-950/20 text-base">Syntrel Direct Hub</th>
                  <th className="p-6 text-slate-500 text-base font-normal">Traditional Sourcing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-base">
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-3"><Clock className="w-5 h-5 text-cyan-500" /> Delivery Speed</td>
                  <td className="p-6 font-bold text-white bg-cyan-950/10 border-x border-cyan-900/50">3 - 5 Days (Rapid Pilot)</td>
                  <td className="p-6 text-slate-500">21 - 45 Days</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-3"><Globe2 className="w-5 h-5 text-cyan-500" /> Landed Tariffs</td>
                  <td className="p-6 font-bold text-emerald-400 bg-cyan-950/10 border-x border-cyan-900/50">0% (CEPA Trade Agreement)</td>
                  <td className="p-6 text-slate-500">5% - 15% Customs Duty</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-cyan-500" /> Pricing Structure</td>
                  <td className="p-6 font-bold text-white bg-cyan-950/10 border-x border-cyan-900/50">Open-Book Factory Cost</td>
                  <td className="p-6 text-slate-500">25%+ Opaque Markup</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section id="rfq" className="relative z-20 py-24 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-[#050811] to-[#050811]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border border-cyan-900/50 bg-[#070b14] overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.07)]"
        >
          <div className="w-full bg-red-950/20 border-b border-red-900/30 py-6 text-center">
            <h3 className="text-red-400 font-bold tracking-widest text-sm uppercase mb-2">Q3 Manufacturing Allocation Closing</h3>
            <UrgencyTimer />
          </div>

          <div className="p-10 sm:p-14 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Secure Your Engineering Pilot</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Upload your technical drawing. Receive actionable DFM feedback, a definitive timeline, and a zero-friction landed quote within 48 hours.
            </p>
            
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Corporate Email Address" 
                className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors shadow-inner" 
                required 
              />
              <button className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Initiate RFQ Protocol
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <p className="text-xs font-mono uppercase">Direct NDA On File • 256-bit AES Encryption</p>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-900 bg-[#020306] py-10 text-center text-xs text-slate-600 font-mono">
        © 2026 SYNTREL GLOBAL • B2B PRECISION CONTRACT SOURCING PLATFORM • ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
