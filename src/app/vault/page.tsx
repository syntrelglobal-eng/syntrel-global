"use client"
import { useState } from 'react';
import { ShieldAlert, Search, CheckCircle } from 'lucide-react';

export default function Vault() {
  const [searched, setSearched] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <ShieldAlert className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white">Zero-Trust QA Ledger</h1>
        <p className="text-slate-400 mt-4">Immutable CMM inspection reports and EN 10204 3.1 Material Certificates for every shipped batch.</p>
      </div>

      <div className="bg-[#111] border border-white/10 p-2 flex gap-2 rounded-sm mb-12">
        <input type="text" placeholder="Enter Batch ID (e.g. BATCH-UQD-2026A)" className="w-full bg-transparent text-white px-4 outline-none font-mono text-sm" />
        <button onClick={() => setSearched(true)} className="bg-cyan-600 px-6 py-3 text-white flex gap-2 items-center hover:bg-cyan-500 transition-colors">
          <Search className="w-4 h-4" /> Verify
        </button>
      </div>

      {searched && (
        <div className="border border-cyan-500/30 bg-cyan-900/10 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <CheckCircle className="text-emerald-400 w-6 h-6" />
            <h3 className="text-xl text-white font-mono">BATCH-UQD-2026A Authenticated</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-slate-400 mb-2">Metallurgical Audit</h4>
              <p className="text-white">EN 10204 3.1 Certified SS316L.</p>
              <button className="text-cyan-400 mt-2 underline">Download Spectrometer PDF</button>
            </div>
            <div>
              <h4 className="text-slate-400 mb-2">Dimensional Tolerance (CMM)</h4>
              <p className="text-white">100% of batch cleared = 10-micron radial deviation limits.</p>
              <button className="text-cyan-400 mt-2 underline">Download CMM Output Logs</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
