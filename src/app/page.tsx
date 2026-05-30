'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sun } from 'lucide-react'

export default function PreranaHome() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative bg-[#050505] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">


      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFCFB] sticky top-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none">
           {/* Glows */}
           <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
           <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-6xl md:text-[9rem] leading-[0.85] tracking-tighter text-slate-900 mb-8">
              We solve <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 drop-shadow-sm">People Problems.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Prerana creates professional instruments that remove friction from human effort.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-400"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* SECTION 2: KREA - NEO-BRUTALISM */}
      <section className="relative h-screen w-full flex items-center bg-[#FFDF00] sticky top-0 overflow-hidden border-b-8 border-black z-20">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative h-[40vh] md:h-[60vh] w-full bg-[#FFDF00] flex items-center justify-center p-8 md:p-12 overflow-hidden">
             <motion.div 
               initial={{ scale: 0.8, rotate: -5 }}
               whileInView={{ scale: 1, rotate: -2 }}
               viewport={{ once: true, margin: "-20%" }}
               transition={{ type: "spring", bounce: 0.5 }}
               className="relative w-full h-full bg-[#FF4D00] border-8 border-black rounded-xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden"
             >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
                <span className="font-black text-black text-[12rem] md:text-[18rem] leading-none tracking-tighter uppercase transform -rotate-12">K.</span>
             </motion.div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-start pt-20 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-block bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-2">
                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-black">Empowering Engagement</span>
              </div>
              <h2 className="font-black text-6xl md:text-8xl tracking-tighter text-black mb-6 uppercase leading-none">Krea.</h2>
              <p className="text-xl md:text-2xl text-black font-bold leading-relaxed mb-10 max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Transform passive presentations into multi-directional discovery sessions. High-energy. High-impact.
              </p>
              <Link href="https://krea.prerana.id" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00C2A8] text-black font-black uppercase text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all active:shadow-none active:translate-y-2 active:translate-x-2">
                <span>Discover Krea</span>
                <ArrowUpRight className="w-6 h-6 stroke-[3]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELARAS - MANTINE STYLE */}
      <section className="relative h-screen w-full flex items-center bg-[#E7F5FF] sticky top-0 overflow-hidden shadow-sm z-30">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col items-start pt-20 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E7F5FF] text-[#228BE6] rounded text-xs font-semibold mb-6">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#228BE6]" />
                 Secure Document Control
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#212529] mb-6 font-sans">Selaras.</h2>
              <p className="text-base md:text-lg text-[#868E96] font-normal leading-relaxed mb-10 max-w-md">
                Enterprise-grade engineering document management. Streamline workflows with secure versioning and automated approvals. Designed for precision and reliability.
              </p>
              <Link href="https://selaras.prerana.id" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#228BE6] hover:bg-[#1C7ED6] text-white rounded text-sm font-semibold shadow-sm hover:shadow-md transition-all gap-2">
                Explore Selaras
              </Link>
            </motion.div>
          </div>
          <div className="relative h-[40vh] md:h-[60vh] w-full bg-white rounded-lg border border-[#DEE2E6] shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center p-8 md:p-12 overflow-hidden">
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, margin: "-20%" }}
               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
               className="relative w-full bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#E9ECEF] flex flex-col p-6 gap-4"
             >
                {/* Mantine Mock UI Elements */}
                <div className="flex justify-between items-center mb-4 border-b border-[#F1F3F5] pb-4">
                  <div className="w-1/3 h-6 bg-[#F1F3F5] rounded" />
                  <div className="w-8 h-8 bg-[#E7F5FF] rounded text-[#228BE6] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#228BE6] rounded-sm opacity-20" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border border-[#F1F3F5] rounded-sm hover:bg-[#F8F9FA] transition-colors cursor-default">
                    <div className="w-8 h-8 bg-[#FFE8CC] rounded flex-shrink-0" />
                    <div className="space-y-2 w-full">
                      <div className="w-3/4 h-3 bg-[#DEE2E6] rounded" />
                      <div className="w-1/2 h-2 bg-[#F1F3F5] rounded" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 border border-[#F1F3F5] rounded-sm hover:bg-[#F8F9FA] transition-colors cursor-default">
                    <div className="w-8 h-8 bg-[#D3F9D8] rounded flex-shrink-0" />
                    <div className="space-y-2 w-full">
                      <div className="w-2/3 h-3 bg-[#DEE2E6] rounded" />
                      <div className="w-1/3 h-2 bg-[#F1F3F5] rounded" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <div className="w-24 h-8 bg-[#228BE6] rounded shadow-sm opacity-90" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VANTA */}
      <section className="relative h-screen w-full flex items-center bg-[#050505] sticky top-0 overflow-hidden shadow-2xl text-white z-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-[#050505] to-[#050505] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-[6rem] md:text-[12rem] font-bold tracking-tighter text-white mb-2 italic leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Vanta.
            </h2>
            <p className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.5em] mb-12">
              Work at the speed of thought
            </p>
            <p className="text-xl md:text-3xl text-white/60 font-medium leading-relaxed max-w-3xl mb-16">
              A frictionless freelance workspace built with Rust. Sub-100ms interaction baseline. No loading spinners. <span className="text-white">Just momentum.</span>
            </p>
            
            <Link href="https://vanta.prerana.id" className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white bg-white/10 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 border border-white/20 hover:border-white/40 backdrop-blur-md">
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Deploy Vanta
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: ABOUT & CONTACT */}
      <section className="relative min-h-screen py-32 w-full flex items-center bg-[#FDFCFB] overflow-hidden shadow-2xl z-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-200 mb-8 mx-auto">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[0.9]">
              Prerana means <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 drop-shadow-sm">Inspiration.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              We are a collective of designers and engineers dedicated to solving people problems. We build professional instruments that get out of your way so you can do your best work.
            </p>
            
            <form action="https://formsubmit.co/resha@prerana.id" method="POST" className="mt-8 w-full max-w-5xl mx-auto text-left relative z-20">
              <input type="hidden" name="_subject" value="New Prerana Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://prerana.id" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name</label>
                    <input type="text" id="name" name="name" required className="px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-900 text-sm shadow-sm font-medium" placeholder="Your name" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input type="email" id="email" name="email" required className="px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-900 text-sm shadow-sm font-medium" placeholder="you@company.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Area of Interest</label>
                    <select id="interest" name="interest" className="px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-900 text-sm shadow-sm font-medium appearance-none">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Krea">Krea (Engagement & Training)</option>
                      <option value="Selaras">Selaras (Document Control)</option>
                      <option value="Vanta">Vanta (Freelance Workspace)</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-2 h-full">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                  <textarea id="message" name="message" required className="flex-1 px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-slate-900 text-sm shadow-sm font-medium resize-none min-h-[200px]" placeholder="How can we solve it with you?"></textarea>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <button type="submit" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-colors flex items-center justify-center gap-3 group">
                  Solve it with us
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <Link href="/suite" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-colors text-center">
                  Explore suite
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 bg-[#050505] text-white/40 border-t border-white/10 z-[60]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-serif font-bold text-2xl tracking-tight italic text-white/20">Prerana.</span>
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Prerana. All Systems Nominal.</p>
        </div>
      </footer>
    </div>
  )
}
