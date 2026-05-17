'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sun, 
  ArrowUpRight,
  Database,
  Monitor,
  Sparkles,
  ChevronRight,
  Minus
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const SUITE_DATA = [
  {
    name: 'Krea.',
    logo: '/krea_logo.png',
    href: '/products/krea',
    status: 'Active',
    pain: 'The "Silence of the Room" and the friction of passive listening in training environments.',
    offering: 'A high-energy interactive platform that transforms presentations into multi-directional discovery sessions.',
    theme: 'bg-[#FFFAF0] border-orange-200/50 text-slate-900',
    accent: 'text-orange-600',
    icon: Sparkles
  },
  {
    name: 'Vanta.',
    logo: '/vanta_logo.png',
    href: '/products/vanta',
    status: 'Active',
    pain: 'The "Meta-Work Tax"—losing billable hours to tool management, time tracking, and admin overhead.',
    offering: 'A zero-latency, local-first desktop workbench built with Rust for absolute focus and flow-state.',
    theme: 'bg-[#050505] border-white/10 text-white',
    accent: 'text-white/60',
    icon: Monitor,
    invert: true
  },
  {
    name: 'Selaras.',
    logo: null,
    href: '#',
    status: 'Coming Soon',
    pain: 'The fragmentation of engineering knowledge and the risk of digital loss in complex projects.',
    offering: 'An engineering-grade document management system focused on version integrity and secure collaboration.',
    theme: 'bg-white border-slate-100 text-slate-900',
    accent: 'text-slate-400',
    icon: Database
  }
]

export default function SuitePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden font-sans">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-orange-100/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
              <Sun className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 italic">Prerana.</span>
          </Link>
          <nav className="flex items-center gap-6">
             <Link href="/mission" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">Mission</Link>
             <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">Back Home</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* ── Hero ── */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-900 mb-8"
          >
            The <span className="italic text-orange-600 font-serif">Suite.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A family of professional instruments engineered to solve specific moments of friction.
          </motion.p>
        </section>

        {/* ── The Suite Cards ── */}
        <section className="max-w-7xl mx-auto px-6 py-12 pb-48">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SUITE_DATA.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`${product.theme} rounded-[3rem] p-10 border shadow-2xl shadow-orange-900/[0.03] flex flex-col justify-between min-h-[560px] relative group overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-sm relative overflow-hidden">
                        {product.logo ? (
                          <Image src={product.logo} alt={product.name} fill className={`object-contain p-2 ${product.invert ? 'invert' : ''}`} />
                        ) : (
                          <product.icon className={`w-6 h-6 ${product.accent}`} />
                        )}
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${product.theme.includes('050505') ? 'border-white/10 text-white/40' : 'border-slate-100 text-slate-400'}`}>
                        {product.status}
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight mb-12 italic">{product.name}</h2>

                    <div className="space-y-10">
                       <div>
                          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50`}>The Pain</p>
                          <p className="text-lg font-medium leading-relaxed opacity-80">{product.pain}</p>
                       </div>
                       <div className="flex items-center gap-4 opacity-20">
                          <Minus className="w-8 h-8" />
                       </div>
                       <div>
                          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${product.accent}`}>The Offering</p>
                          <p className="text-lg font-bold leading-relaxed">{product.offering}</p>
                       </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-16">
                    {product.status === 'Active' ? (
                      <Button asChild size="lg" className={`${product.name === 'Vanta.' ? 'bg-white text-black hover:bg-white/90' : 'bg-orange-600 text-white hover:bg-orange-700'} rounded-2xl w-full h-16 text-sm font-bold shadow-xl transition-transform active:scale-95`}>
                        <Link href={product.href} className="flex items-center justify-center gap-2">
                           Explore {product.name}
                           <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
                      <div className="h-16 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300">
                        Stay Tuned
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute bottom-[-10%] right-[-10%] w-48 h-48 rounded-full blur-3xl opacity-20 ${product.name === 'Krea.' ? 'bg-orange-400' : product.name === 'Vanta.' ? 'bg-blue-400' : 'bg-slate-400'}`} />
                </motion.div>
              ))}
           </div>
        </section>

      </main>

      {/* ── Footer Link ── */}
      <footer className="py-20 border-t border-orange-100/30 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 hover:text-orange-600 transition-all group">
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Prerana Home
        </Link>
      </footer>
    </div>
  )
}
