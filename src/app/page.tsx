'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Target, 
  ShieldCheck, 
  HelpingHand,
  Sun,
  ArrowUpRight,
  Database,
  Cpu,
  Layout,
  ChevronDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function PreranaHome() {
  const [isSuiteOpen, setIsSuiteOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* ── Background Illumination ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-200/5 rounded-full blur-[100px]" />
      </div>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-orange-100/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 italic">Prerana.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/mission" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">Mission</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsSuiteOpen(true)}
              onMouseLeave={() => setIsSuiteOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">
                The Suite
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isSuiteOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isSuiteOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 z-50"
                >
                  <div className="bg-white rounded-3xl border border-orange-100/50 shadow-2xl p-3 flex flex-col gap-1">
                    <Link href="/products/krea" className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-orange-50 group transition-colors">
                      <div>
                        <span className="block text-xs font-bold text-slate-900">Krea.</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">Training Platform</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-600 transition-colors" />
                    </Link>
                    <Link href="/products/vanta" className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-slate-50 group transition-colors">
                      <div>
                        <span className="block text-xs font-bold text-slate-900">Vanta.</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">Solo Workbench</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                    </Link>
                    <Link href="/products/selaras" className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-blue-50 group transition-colors">
                      <div>
                        <span className="block text-xs font-bold text-slate-900">Selaras.</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">EDMS System</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <Button asChild variant="outline" className="rounded-full border-orange-200 text-orange-700 hover:bg-orange-50 px-6">
              <Link href="/suite">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* ── The Bento Grid ── */}
        <div id="suite" className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* 1. Hero Block: The Core Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 md:row-span-2 bg-white rounded-[3rem] p-10 md:p-12 flex flex-col justify-between border border-orange-100/50 shadow-xl shadow-orange-900/5 relative overflow-hidden group min-h-[500px]"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full mb-8 border border-orange-100">
                <HelpingHand className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Built to serve</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-slate-900 mb-8">
                We solve <br />
                <span className="italic text-orange-600">People Problems.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-sm font-medium leading-relaxed">
                Prerana creates professional instruments that remove friction from human effort. We focus on the &quot;how&quot; so you can excel at the &quot;what&quot;.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap items-center gap-6 mt-12">
              <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-10 h-14 text-base font-bold shadow-2xl shadow-slate-200 transition-transform active:scale-95">
                <Link href="/suite">Explore The Suite</Link>
              </Button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 leading-none">2,400+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Users Served</span>
                </div>
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

          {/* 2. Krea Block: The Engagement Gap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#FFFAF0] rounded-[3rem] p-10 flex flex-col justify-between border border-orange-200/20 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-500 min-h-[320px]"
          >
            <Link href="https://krea.prerana.id" className="absolute inset-0 z-20" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200/50 overflow-hidden p-2.5 relative transition-transform group-hover:scale-110 duration-500">
                  <Image src="/krea_logo.png" alt="Krea Logo" fill className="object-contain p-2" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-orange-100 flex items-center justify-center text-orange-300 group-hover:text-orange-600 group-hover:bg-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-1 italic">Krea.</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600/80 mb-4">Empowering Engagement</p>
                <p className="text-base text-slate-500 font-medium leading-relaxed max-w-md">
                  Transform passive presentations into multi-directional discovery sessions.
                </p>
              </div>
            </div>
            <div className="flex gap-2 relative z-10 mt-6">
              <span className="px-3 py-1 bg-white rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 border border-orange-100 shadow-sm">Training</span>
              <span className="px-3 py-1 bg-white rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 border border-orange-100 shadow-sm">Real-time</span>
            </div>
          </motion.div>

          {/* 3. Selaras Block: The EDMS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 min-h-[280px] relative overflow-hidden"
          >
            <Link href="https://selaras.prerana.id" className="absolute inset-0 z-20" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 transition-colors relative overflow-hidden p-2 group-hover:scale-110 duration-500">
                  <Image src="/icon-512.png" alt="Selaras Logo" fill className="object-contain p-2" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-white group-hover:border-blue-100 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 italic tracking-tight">Selaras.</h3>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600/80 mb-4">EDMS System</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Enterprise-grade engineering document management.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 mt-4 relative z-10">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure Vault
            </div>
          </motion.div>

          {/* 4. Vanta Block: The High-Performance Workbench */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#050505] rounded-[3rem] p-10 flex flex-col justify-between border border-white/10 relative overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:bg-[#0A0A0A] min-h-[320px]"
          >
            <Link href="https://vanta.prerana.id" className="absolute inset-0 z-20" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden p-2.5 relative transition-transform group-hover:scale-110 duration-500">
                  <Image src="/vanta_logo.png" alt="Vanta Logo" fill className="object-contain p-2 invert" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-1 italic">Vanta.</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">Work at the speed of thought</p>
                <p className="text-base text-white/50 font-medium leading-relaxed max-w-md">
                  A frictionless freelance workspace. Built with Rust for professionals who value speed.
                </p>
              </div>
            </div>
            <div className="font-mono text-[8px] text-white/10 uppercase tracking-[0.4em] mt-6">
              RUST_CORE // TAURI_ENGINE // LOCAL_FIRST
            </div>
          </motion.div>

          {/* 5. Mission Block (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 bg-orange-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-orange-200 min-h-[280px]"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-3 opacity-60">Our Focus</p>
              <p className="text-xl font-bold leading-[1.1] tracking-tight italic">
                Removing friction <br /> from every click.
              </p>
            </div>
          </motion.div>

          {/* 6. Performance Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-500 min-h-[280px]"
          >
            <div className="flex justify-between items-start">
              <Cpu className="w-6 h-6 text-slate-200 group-hover:text-slate-900 transition-colors" />
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Architecture</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 italic tracking-tight">Engineered for Flow.</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Speed as a Foundation</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Sub-100ms interaction baseline. No loading spinners. Just pure, uninterrupted momentum across every tool.
              </p>
            </div>
          </motion.div>

          {/* 7. Design System Block (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-1 bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-500 min-h-[280px]"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-200 group-hover:text-orange-600 group-hover:bg-orange-50 transition-all duration-500">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 italic">Principles</p>
              <p className="text-base font-bold text-slate-900 leading-snug tracking-tight">
                Design-first, <br /> Engineering-led.
              </p>
            </div>
          </motion.div>

        </div>

      </main>

      <footer className="bg-white border-t border-orange-100/30 py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-orange-600 rounded-full flex items-center justify-center">
                <Sun className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight italic">Prerana.</span>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-sm">
              We build tools that stay out of your way so you can do your best work. Removing digital friction, one instrument at a time.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Products</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              <li><Link href="/suite" className="hover:text-orange-600 transition-colors">The Suite</Link></li>
              <li><Link href="https://krea.prerana.id" className="hover:text-orange-600 transition-colors">Krea.</Link></li>
              <li><Link href="https://vanta.prerana.id" className="hover:text-orange-600 transition-colors">Vanta.</Link></li>
              <li><Link href="https://selaras.prerana.id" className="hover:text-orange-600 transition-colors">Selaras.</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Email</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">© 2026 Prerana. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">All Systems Nominal</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
