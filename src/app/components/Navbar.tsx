import Link from "next/link";
import { ShieldCheck, Cpu, Anchor, Database } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Cpu className="text-cyan-400 w-6 h-6" />
          <span className="text-white font-bold tracking-widest text-lg">SYNTREL <span className="text-cyan-500">GLOBAL</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <Link href="/library" className="hover:text-cyan-400 transition-colors">Component Library</Link>
          <Link href="/vault" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> QA Vault</Link>
          <Link href="/calculator" className="hover:text-cyan-400 transition-colors">CEPA Logistics</Link>
          <Link href="/supplier" className="hover:text-cyan-400 transition-colors">Supplier Portal</Link>
        </div>
      </div>
    </nav>
  )
}
