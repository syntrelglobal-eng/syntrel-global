"use client";
import React from "react";
import { Network, FileKey, Factory, Ship } from "lucide-react";

export default function SourcingInfographic() {
  const steps = [
    {
      icon: <FileKey className="w-6 h-6 text-cyan-400" />,
      title: "1. Secure Intake",
      metric: "Strict NDA & NCND",
      desc: "Your CAD files and intellectual property are locked behind ironclad non-disclosure agreements before sourcing begins."
    },
    {
      icon: <Network className="w-6 h-6 text-blue-400" />,
      title: "2. Algorithmic Match",
      metric: "Tier-1 Network",
      desc: "We route your specific material and tolerance requirements to pre-vetted, ISO-certified facilities."
    },
    {
      icon: <Factory className="w-6 h-6 text-emerald-400" />,
      title: "3. Production & QA",
      metric: "CMM Verified",
      desc: "Final batches undergo strict dimensional inspection with provided test certificates (MTC 3.1)."
    },
    {
      icon: <Ship className="w-6 h-6 text-indigo-400" />,
      title: "4. Global Export",
      metric: "Zero Friction",
      desc: "We handle all complex export paperwork, HS classifications, and freight forwarding to deliver DDP directly."
    }
  ];

  return (
    <section className="py-12 bg-slate-950/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Secure Sourcing Pipeline</h2>
          <p className="text-slate-400 text-sm">End-to-end contract manufacturing with zero supply chain friction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 -z-10 -translate-y-1/2"></div>
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 relative hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <p className="text-xs font-mono text-slate-500 mb-1">{step.metric}</p>
              <h3 className="text-lg font-bold text-slate-200 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
