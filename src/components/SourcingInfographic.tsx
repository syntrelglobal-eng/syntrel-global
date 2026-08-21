"use client";
import React from "react";
import { motion } from "framer-motion";
import { Network, FileKey, Factory, Ship } from "lucide-react";

export default function SourcingInfographic() {
  const steps = [
    { icon: <FileKey className="w-6 h-6 text-cyan-400" />, title: "1. Secure Intake", metric: "Strict NDA", desc: "Your CAD files are locked behind ironclad non-disclosure agreements." },
    { icon: <Network className="w-6 h-6 text-blue-400" />, title: "2. Algorithmic Match", metric: "Tier-1 Network", desc: "We route requirements to pre-vetted, ISO-certified facilities." },
    { icon: <Factory className="w-6 h-6 text-emerald-400" />, title: "3. Production & QA", metric: "CMM Verified", desc: "Final batches undergo strict dimensional inspection with MTC 3.1." },
    { icon: <Ship className="w-6 h-6 text-indigo-400" />, title: "4. Global Export", metric: "Zero Friction", desc: "We handle all complex export paperwork and deliver DDP." }
  ];

  return (
    <section className="py-16 bg-slate-950/50 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-2"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white">The Secure Sourcing Pipeline</h2>
          <p className="text-slate-400 text-sm">End-to-end contract manufacturing with zero supply chain friction.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 -z-10 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <p className="text-xs font-mono text-slate-500 mb-1">{step.metric}</p>
              <h3 className="text-lg font-bold text-slate-200 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
