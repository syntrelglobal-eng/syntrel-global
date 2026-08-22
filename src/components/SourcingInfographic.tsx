"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, FileKey, Factory, Ship } from "lucide-react";

interface PipelineStep {
  icon: React.ElementType;
  title: string;
  metric: string;
  desc: string;
}

const steps: PipelineStep[] = [
  { 
    icon: FileKey, 
    title: "1. Encrypted Intake", 
    metric: "Strict NDA / NCND", 
    desc: "CAD files and engineering schematics are protected under enforceable non-circumvention protocols before routing." 
  },
  { 
    icon: Network, 
    title: "2. Precision Matching", 
    metric: "AS9100 / IATF Hub", 
    desc: "Workloads are algorithmically matched to specialized 5-axis CNC facilities across verified tier-1 corridors." 
  },
  { 
    icon: Factory, 
    title: "3. QA Verification", 
    metric: "100% CMM Inspected", 
    desc: "Every production lot includes dimensional verification, surface roughness certification, and MTC 3.1 reports." 
  },
  { 
    icon: Ship, 
    title: "4. DDP Logistics", 
    metric: "0% Duty (CEPA)", 
    desc: "Seamless door-to-door freight forwarding, HS classification, and customs clearance straight to regional facilities." 
  }
];

export default function SourcingInfographic() {
  return (
    <section className="py-20 bg-slate-950/40 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Secure Sourcing Pipeline</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">Full-stack contract manufacturing execution with zero supply chain leakage.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-900/60 via-blue-900/60 to-indigo-900/60 -z-10 -translate-y-1/2" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-xs font-mono text-cyan-400/80 font-semibold mb-1">{step.metric}</p>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
