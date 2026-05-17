'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Bot, 
  Lock, 
  Wallet,
  Monitor,
  Play,
  Download,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function VantaContent() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 font-sans overflow-x-hidden">
      {/* ── Navbar Wrapper ── */}
      <header className="sticky top-0 z-50 bg-[#050505]/40 backdrop-blur-xl border-b border-white/[0.05] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden p-1.5">
              <Image src="/vanta_logo.png" alt="Vanta Logo" width={24} height={24} className="object-contain invert" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white italic">Vanta.</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Back Home</Link>
            <Button asChild size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-6 h-9 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-white/5">
              <Link href="https://vanta.prerana.id">Get Vanta</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* Ambient background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8 flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] pl-1.5 pr-4 py-1.5 rounded-full">
                <div className="w-5 h-5 bg-white/10 rounded-full overflow-hidden border border-white/10 relative">
                  <Image src="/vanta_logo.png" alt="Vanta Logo" fill className="object-contain p-1 invert" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Desktop App · macOS · Windows</span>
              </div>
              
              <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8">
                Work at the <br />
                <span className="text-white/40 italic">speed of thought.</span>
              </h1>
              
              <p className="max-w-2xl text-lg md:text-xl text-white/50 mb-12 font-medium leading-relaxed">
                Vanta. is the frictionless freelance workspace designed for flow-state professionals. Eliminate the &quot;Meta-Work Tax&quot; and reclaim your focus with a desktop-native workbench that stays out of your way.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 text-base font-bold transition-transform active:scale-95 shadow-xl shadow-white/5">
                  <Link href="https://vanta.prerana.id">Download Vanta.</Link>
                </Button>
                <Link 
                  href="#demo" 
                  className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <Play className="w-3 h-3 fill-white/60 group-hover:fill-white transition-all" />
                  </div>
                  Watch App Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Problem & Solution ── */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  Stop being your own <br />
                  <span className="text-white/30 italic font-serif">administrator.</span>
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  High-value freelancers spend up to 20% of their billable potential managing tools, capturing minutes, and hunting for credentials. Traditional enterprise SaaS is slow, bloated, and distracting. Vanta. changes the math.
                </p>
              </div>
              <div className="pt-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  A professional instrument <br />
                  <span className="text-white/30 italic font-serif">for your solo career.</span>
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  Vanta. isn&apos;t just another project manager. It&apos;s a high-performance desktop environment built with Rust and Tauri. It offers near-zero latency, local-first privacy, and AI-enriched automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features: Bento Layout ── */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
              {/* AI Inbox */}
              <div className="md:col-span-8 bg-white/[0.03] border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-white/[0.05] transition-all">
                <div className="max-w-md">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 italic">The Inbox that settles itself.</h3>
                  <p className="text-white/50 font-medium leading-relaxed">Capture ideas instantly via our Telegram bot or the in-app Capture Bar. Vanta&apos;s AI engine automatically enriches these fragments—suggesting project tags and summaries.</p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                  <span>Telegram Sync</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span>AI Engine</span>
                </div>
              </div>

              {/* Tech Specs Summary */}
              <div className="md:col-span-4 bg-white/[0.03] border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8 px-3 py-1 border border-white/5 inline-block self-start rounded-md">Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-mono font-bold italic tracking-tighter">100ms</div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Interaction Baseline</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold italic tracking-tighter">0kb</div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Mandatory Cloud Storage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold italic tracking-tighter">RUST</div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Binary Core Engine</div>
                  </div>
                </div>
              </div>

              {/* Encrypted Vault */}
              <div className="md:col-span-4 bg-white/[0.03] border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-white/[0.05] transition-all">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 italic">Local-first. Privacy.</h3>
                  <p className="text-sm text-white/50 font-medium leading-relaxed">Your data stays on your machine. Stored in a local SQLite database, encrypted with AES-256-GCM.</p>
                </div>
              </div>

              {/* Financial Velocity */}
              <div className="md:col-span-8 bg-white/[0.03] border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-white/[0.05] transition-all overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="max-w-md relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 italic">Timer to invoice in 60s.</h3>
                    <p className="text-white/50 font-medium leading-relaxed">Precision time tracking baked into the core. Log billable hours and generate PDF invoices instantly.</p>
                  </div>
                  {/* Abstract visualization of a chart */}
                  <div className="hidden lg:flex items-end gap-1 h-32 relative z-10">
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-white/10 group-hover:bg-white/30 transition-all duration-500 rounded-t-sm" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Integrated Pricing Section ── */}
        <section id="download" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden text-slate-900 shadow-2xl">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-400 px-4 py-1.5 rounded-full mb-8 border border-slate-100">
                  <Download className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">One-Time Purchase</span>
                </div>
                
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                  Get the license. <br />
                  <span className="italic text-orange-600 font-serif">Own the tool.</span>
                </h2>
                
                <p className="max-w-2xl text-lg text-slate-400 mb-12 font-medium leading-relaxed mx-auto">
                  No monthly subscriptions. No recurring fees. One payment for a lifetime of focus and high-performance productivity.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 mb-12 max-w-md mx-auto relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-8 relative z-10">
                     <h3 className="text-2xl font-black uppercase tracking-widest text-slate-900 italic">Vanta. Pro</h3>
                     <div className="text-right">
                        <div className="text-3xl font-black tracking-tighter">Rp 199k</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">~ $12 USD</div>
                     </div>
                  </div>
                  
                  <ul className="space-y-4 text-left relative z-10">
                    {[
                      'Lifetime Software License',
                      'macOS & Windows Support',
                      'Rust Core High-Performance Engine',
                      'Local Encryption (AES-256)',
                      'All Future Core Updates'
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative */}
                  <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-orange-100/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-12 h-20 text-xl font-bold shadow-2xl transition-transform active:scale-95 w-full sm:w-auto">
                    <Link href="https://vanta.prerana.id">Buy Vanta. License</Link>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                   <div className="flex items-center gap-2"><Monitor className="w-3 h-3" /> Universal macOS</div>
                   <div className="w-1 h-1 rounded-full bg-slate-200" />
                   <div className="flex items-center gap-2"><Cpu className="w-3 h-3" /> x64/ARM Windows</div>
                </div>
              </div>
              
              {/* Subtle grid pattern for white block */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="grid grid-cols-12 h-full border-slate-900 border-l">
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => <div key={i} className="border-slate-900 border-r h-full" />)}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer Link ── */}
      <footer className="py-20 border-t border-white/[0.05] text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-all group">
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Prerana Home
        </Link>
      </footer>
    </div>
  )
}
