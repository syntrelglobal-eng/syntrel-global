"use client"
import { useState } from 'react';

export default function Calculator() {
  const [units, setUnits] = useState(2500);
  const unitPrice = 50;
  const baseValue = units * unitPrice;
  const standardDuty = baseValue * 0.05;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">India-UAE CEPA Arbitrage</h1>
      <p className="text-slate-400 mb-12">Calculate your immediate tariff savings on precision thermal infrastructure.</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <label className="block text-sm text-slate-400 mb-2">Order Volume (UQD Sets)</label>
          <input type="range" min="500" max="10000" step="500" value={units} onChange={(e) => setUnits(Number(e.target.value))} className="w-full accent-cyan-500" />
          <div className="mt-4 text-2xl text-white font-mono">{units.toLocaleString()} Units</div>
        </div>

        <div className="bg-[#111] border border-white/10 p-6 space-y-4">
          <div className="flex justify-between text-slate-400"><span>Hardware Value:</span> <span>${baseValue.toLocaleString()}</span></div>
          <div className="flex justify-between text-red-400"><span>Standard 5% Duty:</span> <span>+ ${standardDuty.toLocaleString()}</span></div>
          <div className="flex justify-between text-emerald-400 font-bold border-t border-white/10 pt-4"><span>Syntrel CEPA Duty:</span> <span>$0 (0%)</span></div>
          <div className="bg-cyan-900/30 text-cyan-400 p-4 mt-4 text-center font-bold text-xl">
            Net Savings: ${standardDuty.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
