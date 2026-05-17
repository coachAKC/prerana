'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Users, 
  BarChart3, 
  Globe,
  LayoutDashboard,
  MessageSquare,
  Award,
  LineChart,
  Play,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function KreaContent() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden font-sans">
      {/* ── Navbar Wrapper ── */}
      <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-orange-100/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform overflow-hidden p-1.5 border border-orange-100">
              <Image src="/k_logo.png" alt="Krea Logo" width={24} height={24} className="object-contain" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 italic">Krea.</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">Back Home</Link>
            <Button asChild size="sm" className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-6 h-9 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-200">
              <Link href="https://krea.prerana.id">Start Free</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* ── Hero: The Helping Spark ── */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 pl-1 pr-4 py-1 rounded-full self-start border border-orange-100"
              >
                <div className="w-6 h-6 bg-white rounded-full overflow-hidden border border-orange-100 relative">
                  <Image src="/k_logo.png" alt="Krea Logo" fill className="object-contain p-1" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Inspiration Simplified</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-900"
              >
                Break the <br />
                <span className="italic text-orange-600 font-serif">Silence.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
              >
                Krea. is the high-energy, collaborative digital workspace designed to bridge the engagement gap between trainers and participants.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Button asChild size="lg" className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-10 h-14 text-base font-bold shadow-2xl shadow-orange-200 transition-transform active:scale-95">
                  <Link href="https://krea.prerana.id">Start Free Session</Link>
                </Button>
                <Link href="#demo" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-orange-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-orange-100 flex items-center justify-center group-hover:border-orange-200 transition-colors">
                    <Play className="w-3 h-3 fill-slate-400 group-hover:fill-orange-600" />
                  </div>
                  Watch interactive demo
                </Link>
              </motion.div>
            </div>

            {/* Hero Visualization: Asymmetric Bento Style with Neo-Brutalist Bridge */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="col-span-2 aspect-[16/10] bg-white rounded-[2.5rem] border-2 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden"
              >
                <div className="flex justify-between mb-8">
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 border border-orange-100">
                      <Globe className="w-5 h-5" />
                   </div>
                   <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Live Syncing</span>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-3/4 bg-slate-100 rounded-lg" />
                   <div className="h-4 w-1/2 bg-slate-100 rounded-lg" />
                   <div className="h-4 w-5/6 bg-orange-100 rounded-lg" />
                </div>
                <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-orange-100/30 rounded-full blur-3xl" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#FFFAF0] rounded-[2rem] p-6 border-2 border-slate-900 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
              >
                 <Zap className="w-6 h-6 text-orange-500" />
                 <span className="text-xs font-black uppercase tracking-widest text-slate-900">Interactive Quizzes</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[2rem] p-6 border-2 border-slate-900 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
              >
                 <Users className="w-6 h-6 text-orange-500" />
                 <span className="text-xs font-black uppercase tracking-widest text-slate-900">20+ Participants</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Problem & Mission: Refined Neo-Brutalist Layout ── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[4rem] p-12 md:p-24 border-[3px] border-slate-900 shadow-[16px_16px_0px_0px_rgba(234,88,12,0.1)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-8 px-3 py-1 border border-orange-200 inline-block rounded-md">The Challenge</h2>
                  <p className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-10 leading-[0.9]">
                    From passive listening <br />
                    <span className="italic text-slate-300">to active discovery.</span>
                  </p>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                    Traditional presentations are a one-way street. Krea. transforms them into multi-directional discovery sessions where every student becomes an active participant, solving the &quot;silence of the room&quot; and the friction of passive learning.
                  </p>
                  <ul className="space-y-5">
                    {[
                      'Eliminate digital friction in classrooms',
                      'Real-time feedback loops for trainers',
                      'Gamified learning mechanics baked-in'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-900">
                        <div className="w-6 h-6 rounded-md bg-orange-600 flex items-center justify-center text-white flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-12">
                  {[
                    { label: 'Real-time Sync', icon: Globe, desc: 'Across all devices' },
                    { label: 'Live Quizzes', icon: Zap, desc: 'Instant gamification' },
                    { label: 'Collaborative', icon: Users, desc: 'Group simulations' },
                    { label: 'Analytics', icon: BarChart3, desc: 'Instant reporting' },
                  ].map((item, i) => (
                    <div key={i} className="bg-orange-50/50 p-8 rounded-3xl border-2 border-slate-900 flex flex-col gap-4 group hover:bg-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                      <item.icon className="w-8 h-8 text-orange-600" />
                      <div>
                        <span className="block text-sm font-black uppercase tracking-widest text-slate-900 mb-1">{item.label}</span>
                        <span className="text-[10px] font-bold text-slate-400">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Blur */}
              <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/20 rounded-full blur-[120px]" />
            </div>
          </div>
        </section>

        {/* ── Capabilities: Bento Grid with Brutalist Edge ── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
               <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6 px-3 py-1 border border-orange-200 inline-block rounded-md">Capabilities</h2>
                  <p className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                    Professional instruments <br />
                    <span className="italic text-slate-300 font-serif">for trainers.</span>
                  </p>
               </div>
               <div className="hidden md:flex gap-4">
                  <div className="w-14 h-14 rounded-2xl border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] bg-white">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-900 max-w-[180px] leading-relaxed tracking-tight">
                    Every feature is optimized for sub-100ms response time.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Live Sync', 
                  desc: 'Real-time synchronization of PDFs and training content across all devices.', 
                  icon: Globe,
                  color: 'bg-blue-50 text-blue-600'
                },
                { 
                  title: 'Interactive Quizzes', 
                  desc: 'Gamified live scoring with instant leaderboards to drive competition.', 
                  icon: Zap,
                  color: 'bg-orange-50 text-orange-600'
                },
                { 
                  title: 'Simulations', 
                  desc: 'Built-in PMI-standard templates for hands-on group work.', 
                  icon: LayoutDashboard,
                  color: 'bg-purple-50 text-purple-600'
                },
                { 
                  title: 'Icebreakers', 
                  desc: 'Dynamic audience tools like real-time word clouds and mood checks.', 
                  icon: MessageSquare,
                  color: 'bg-pink-50 text-pink-600'
                },
                { 
                  title: 'Certification', 
                  desc: 'Automated grading and instant certificate generation.', 
                  icon: Award,
                  color: 'bg-emerald-50 text-emerald-600'
                },
                { 
                  title: 'Insights', 
                  desc: 'Comprehensive session reports and attendance tracking.', 
                  icon: LineChart,
                  color: 'bg-slate-100 text-slate-600'
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(234,88,12,1)] transition-all duration-300 group flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} border-2 border-slate-900 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 tracking-tight">{feature.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-colors">
                     Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing: Integrated ── */}
        <section id="pricing" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
               <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6 px-3 py-1 border border-orange-200 inline-block rounded-md">Simple Pricing</h2>
                  <p className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                    Choose your <br />
                    <span className="italic text-slate-300 font-serif">energy level.</span>
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Tier */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-12 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-3xl font-black uppercase tracking-widest text-slate-900">Free</h3>
                    <div className="text-2xl font-black italic">Rp 0</div>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {[
                      'Session Management',
                      '3 Screen Control',
                      'PDF Broadcast',
                      'Quiz & Test Features',
                      '100 MB Storage'
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" variant="outline" className="w-full rounded-2xl h-16 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                  <Link href="https://krea.prerana.id">Get Started Free</Link>
                </Button>
              </motion.div>

              {/* Pro Tier */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-orange-600 rounded-[3rem] p-12 border-2 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between text-white"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-3xl font-black uppercase tracking-widest">Pro</h3>
                    <div className="text-right">
                      <div className="text-2xl font-black italic">Rp 49k</div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Per Month</div>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {[
                      'Everything in Free',
                      'Interactive Simulations',
                      'Icebreaking Tools',
                      'PMI-Standard Templates',
                      '200 MB Storage'
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white">
                        <div className="w-5 h-5 rounded bg-white flex items-center justify-center text-orange-600">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full rounded-2xl h-16 bg-slate-900 text-white font-black uppercase tracking-widest border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:bg-slate-800 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  <Link href="https://krea.prerana.id">Go Pro Now</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Final CTA: High Contrast Neo-Brutalist ── */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center border-[4px] border-slate-900 shadow-[24px_24px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85]">
                READY TO <br />
                <span className="text-orange-500 italic font-serif">ENERGIZE?</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-12 font-black uppercase tracking-widest">
                Join thousands of trainers delivering high-impact sessions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button asChild size="lg" className="bg-orange-600 text-white hover:bg-orange-700 rounded-2xl px-12 h-20 text-xl font-black uppercase tracking-widest border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                  <Link href="https://krea.prerana.id">Start Now</Link>
                </Button>
              </div>
            </div>
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
