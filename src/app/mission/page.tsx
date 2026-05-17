'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Compass, 
  Search, 
  Wrench, 
  Share2, 
  Heart,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MissionPage() {
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
             <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">Back Home</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* ── Hero: The Identity ── */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full mb-12 border border-orange-100 shadow-sm"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-widest">The Core Mission</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-900 mb-12"
          >
            I am a <br />
            <span className="italic text-orange-600 font-serif">Pain Point Seeker.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic"
          >
            &quot;Every tool I build starts with a moment of frustration in my own life. I don&apos;t look for markets; I look for friction.&quot;
          </motion.p>
        </section>

        {/* ── The Philosophy: 3-Step Process ── */}
        <section className="max-w-7xl mx-auto px-6 py-24">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Identify',
                  desc: 'I live my life with a heightened sensitivity to friction. If a task feels heavier than it should, I pause and observe.',
                  icon: Search,
                  step: '01'
                },
                {
                  title: 'Solve',
                  desc: 'I engineer high-performance instruments to remove that friction. If I can&apos;t find a tool that works at the speed of thought, I build it.',
                  icon: Wrench,
                  step: '02'
                },
                {
                  title: 'Share',
                  desc: 'A solution is only truly valuable when it helps others overcome the same barriers. Prerana is the vessel for that sharing.',
                  icon: Share2,
                  step: '03'
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 border border-orange-100 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-black text-slate-50 italic opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* ── The Manifesto: Big Type ── */}
        <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-5xl mx-auto relative z-10">
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col gap-12"
             >
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">The Manifesto</h2>
                <p className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1] italic">
                   We believe that digital tools should feel like <span className="text-orange-500">professional instruments</span>—weightless, responsive, and invisible—allowing human inspiration to flow without interruption.
                </p>
                <div className="h-px w-32 bg-orange-500/30" />
                <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-medium leading-relaxed">
                   Prerana isn&apos;t a company that makes apps. It&apos;s a practice of identifying the small, ignored pains of modern work and solving them with uncompromising engineering.
                </p>
             </motion.div>
          </div>
          {/* Abstract background element */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        </section>

        {/* ── Call to Action: The Suite ── */}
        <section className="max-w-7xl mx-auto px-6 py-48 text-center">
           <Heart className="w-12 h-12 text-orange-600 mx-auto mb-10 animate-pulse" />
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              Solving problems, <br />
              <span className="italic text-slate-300 font-serif text-5xl md:text-8xl">one click at a time.</span>
           </h2>
           <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 font-medium">
              Explore the tools born from these moments of friction.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-12 h-16 text-base font-bold shadow-2xl">
                <Link href="/suite">View The Suite</Link>
              </Button>
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
