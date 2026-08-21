import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Syntrel Global | DeepTech Component-as-a-Service',
  description: 'Zero-spill thermal components for high-density AI data centers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-slate-300 min-h-screen selection:bg-cyan-900 selection:text-cyan-50 font-sans">
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
