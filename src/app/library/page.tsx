import { Server, Droplets } from "lucide-react";

export default function Library() {
  const components = [
    { id: "UQD-316L", title: "Universal Quick Disconnect (UQD)", material: "SS316L Stainless", spec: "OCP V1.0+ Compliant", desc: "Zero-spill dry-break couplers with EPDM dual seals. Tested to 10 Bar operating pressure.", lead: "4 Weeks (Air Freight)" },
    { id: "MC-CP", title: "Micro-Channel Cold Plate", material: "Oxygen-Free Copper", spec: "Friction Stir Welded", desc: "5-axis machined internal skived fins for maximum thermal dissipation on NVIDIA H100 arrays.", lead: "5 Weeks (Air Freight)" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Pre-Certified Component Library</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">Bypass the 20-week legacy backlog. Access vetted, aerospace-machined thermal hardware ready for immediate UAE pilot deployment.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {components.map(c => (
          <div key={c.id} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-cyan-500/50 transition-colors relative group">
            <div className="absolute top-8 right-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
              <Server className="w-24 h-24" />
            </div>
            <span className="text-cyan-400 text-sm font-mono">{c.id}</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">{c.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300 mb-6">
              <li><strong className="text-white">Material:</strong> {c.material}</li>
              <li><strong className="text-white">Standard:</strong> {c.spec}</li>
              <li><strong className="text-white">Capacity:</strong> {c.lead}</li>
            </ul>
            <p className="text-slate-400 text-sm mb-8">{c.desc}</p>
            <button className="bg-white/10 hover:bg-cyan-600 text-white px-6 py-2 text-sm font-medium transition-colors">
              Request DHL Sample
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
