'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Database, 
  Lock,
  History,
  Users,
  Search,
  Check,
  ChevronRight,
  ArrowRight,
  FileCheck2,
  FolderTree,
  Command
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SelarasContent() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 selection:bg-blue-100 selection:text-blue-900 font-sans relative">
      
      {/* ── Engineering Grid Background ── */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* ── Navbar: Blueprint Style ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-300 px-6 h-16 flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-6 h-6 border border-slate-800 flex items-center justify-center bg-slate-900 text-white">
              <Database className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">Selaras</span>
            <span className="hidden md:inline font-mono text-[10px] text-slate-400 border-l border-slate-300 pl-3 ml-1">
              SYS.VER.1.0
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">Return</Link>
            <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-700 rounded-none px-6 h-8 font-mono text-[10px] uppercase tracking-widest">
              <Link href="https://selaras.prerana.id">Initialize</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 border-l border-r border-slate-300 max-w-screen-2xl mx-auto bg-white/50 backdrop-blur-3xl min-h-screen flex flex-col">
        
        {/* ── Hero: Schematic Split ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-300">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-300 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-b border-r border-slate-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-slate-300" />
            
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-2 py-1 text-[10px] font-mono uppercase tracking-widest mb-10 self-start border border-slate-300">
              <Command className="w-3 h-3" />
              Document Control Protocol
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-8 uppercase">
              Order <br />
              <span className="text-slate-400">From Chaos.</span>
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed max-w-lg mb-12 font-medium">
              A meticulously structured Electronic Document Management System designed for engineering precision. Eliminate fragmented drives and enforce absolute version control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 rounded-none px-10 h-14 font-mono text-xs uppercase tracking-widest border border-slate-900">
                <Link href="https://selaras.prerana.id">Deploy Vault</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100 rounded-none px-10 h-14 font-mono text-xs uppercase tracking-widest">
                <Link href="#architecture">Read Specs</Link>
              </Button>
            </div>
          </div>

          {/* Right Hero Column: Data Visualization UI */}
          <div className="lg:col-span-5 bg-slate-50 p-8 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Grid Lines */}
             <div className="absolute top-1/3 left-0 w-full h-[1px] bg-slate-200" />
             <div className="absolute top-2/3 left-0 w-full h-[1px] bg-slate-200" />
             <div className="absolute top-0 left-1/3 w-[1px] h-full bg-slate-200" />
             <div className="absolute top-0 left-2/3 w-[1px] h-full bg-slate-200" />
             
             <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-end border-b border-slate-300 pb-2">
                   <span className="font-mono text-[10px] uppercase text-slate-400 tracking-widest">System Status</span>
                   <span className="font-mono text-[10px] uppercase text-blue-600 tracking-widest flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                     Encrypted & Active
                   </span>
                </div>
                
                {/* Mockup Folder Structure */}
                <div className="bg-white border border-slate-300 p-4 font-mono text-xs text-slate-700 shadow-sm">
                   <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold">
                     <FolderTree className="w-4 h-4" /> root/projects/alpha
                   </div>
                   <div className="pl-6 border-l border-slate-200 space-y-2">
                     <div className="flex justify-between hover:bg-slate-50 cursor-pointer p-1">
                        <span>├─ structural_v2.dwg</span>
                        <span className="text-slate-400">REV.B</span>
                     </div>
                     <div className="flex justify-between bg-blue-50 text-blue-800 p-1 font-bold">
                        <span>├─ specs_final.pdf</span>
                        <span className="text-blue-500">APPROVED</span>
                     </div>
                     <div className="flex justify-between hover:bg-slate-50 cursor-pointer p-1 text-slate-400">
                        <span>└─ mechanical_v1.dwg</span>
                        <span className="text-red-400">OBSOLETE</span>
                     </div>
                   </div>
                </div>
             </div>

             <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
                <div className="bg-white border border-slate-300 p-4">
                   <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">Total Assets</div>
                   <div className="text-2xl font-bold text-slate-900 font-mono">14,204</div>
                </div>
                <div className="bg-slate-900 border border-slate-900 p-4 text-white">
                   <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">Compliance</div>
                   <div className="text-2xl font-bold font-mono text-emerald-400">ISO-9001</div>
                </div>
             </div>
          </div>
        </section>

        {/* ── Architecture (Features): Table Layout ── */}
        <section id="architecture" className="border-b border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-slate-300 bg-slate-50">
               <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-200 pb-2">
                 System Modules
               </h2>
               <p className="text-sm text-slate-600 font-medium">
                 Core capabilities engineered to enforce data integrity and team synchronization.
               </p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Version Control', desc: 'Immutable revision histories.', icon: History },
                { title: 'Access Control', desc: 'Granular user permission matrices.', icon: Lock },
                { title: 'Audit Ledger', desc: 'Cryptographic logs of all activity.', icon: FileCheck2 },
                { title: 'Routing', desc: 'Linear approval workflows.', icon: Users },
                { title: 'Deep Search', desc: 'OCR metadata indexing.', icon: Search },
                { title: 'Compliance', desc: 'Automated ISO standard adherence.', icon: ShieldCheck },
              ].map((feature, i) => (
                <div key={i} className="p-8 border-b sm:border-r sm:border-b border-slate-300 hover:bg-slate-50 transition-colors group flex flex-col justify-between">
                  <div>
                    <feature.icon className="w-5 h-5 text-slate-900 mb-6 group-hover:text-blue-600 transition-colors" />
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing: Technical Specification Sheet ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-300 bg-white">
          <div className="lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-300 bg-slate-900 text-white flex flex-col justify-between">
             <div>
                <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-800 pb-2">
                  Licensing Parameters
                </h2>
                <h3 className="text-4xl font-bold tracking-tight uppercase mb-6">Allocation</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  Transparent resource allocation models designed for engineering firms scaling their infrastructure.
                </p>
             </div>
             <ShieldCheck className="w-16 h-16 text-slate-800 mt-12" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
            {/* Free Trial Spec */}
            <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-slate-300 flex flex-col">
               <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Evaluation Phase</div>
               <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-2">Paket Gratis</h4>
               <div className="font-mono text-xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-8">
                 Rp 0 <span className="text-[10px] text-slate-400 tracking-normal uppercase ml-1">/ 3 Bulan</span>
               </div>
               
               <div className="space-y-4 mb-12 flex-grow">
                  {[
                    ['Seats', '6 Pengguna'],
                    ['Storage', '100 MB'],
                    ['Masa Aktif', '3 Bulan'],
                    ['Features', 'MDR, Workflows, Transmittal, Audit']
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs font-mono border-b border-slate-100 pb-2">
                      <span className="text-slate-500 uppercase">{label}</span>
                      <span className="text-slate-900 font-bold text-right">{val}</span>
                    </div>
                  ))}
               </div>
               
               <Button asChild className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200 rounded-none h-12 font-mono text-[10px] uppercase tracking-widest">
                  <Link href="https://selaras.prerana.id">Mulai Gratis</Link>
               </Button>
            </div>

            {/* Pro Spec */}
            <div className="p-8 lg:p-12 bg-blue-50/30 flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-600 text-white font-mono text-[8px] uppercase tracking-widest px-2 py-1">
                 HEMAT 50%
               </div>
               
               <div className="font-mono text-[10px] uppercase tracking-widest text-blue-600 mb-2">Production Phase</div>
               <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-2">Paket Pro</h4>
               <div className="font-mono text-xl font-bold text-slate-900 mb-8 border-b border-blue-200 pb-8">
                 <span className="text-sm line-through text-slate-400 mr-2">Rp 2.000.000</span>
                 Rp 999.000 <span className="text-[10px] text-slate-400 tracking-normal uppercase ml-1">/ Bulan</span>
               </div>
               
               <div className="space-y-4 mb-12 flex-grow">
                  {[
                    ['Seats', '15 Pengguna'],
                    ['Storage', '5 GB'],
                    ['Masa Aktif', '1 Tahun'],
                    ['Features', 'Multi-Project, Client Portal, Priority']
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs font-mono border-b border-blue-100/50 pb-2">
                      <span className="text-slate-600 uppercase">{label}</span>
                      <span className="text-slate-900 font-bold text-right">{val}</span>
                    </div>
                  ))}
               </div>
               
               <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-none h-12 font-mono text-[10px] uppercase tracking-widest shadow-md">
                  <Link href="https://selaras.prerana.id">Mulai Paket Pro</Link>
               </Button>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer: Data Tape Style ── */}
      <footer className="border-t-4 border-slate-900 bg-white h-12 flex items-center px-6 max-w-screen-2xl mx-auto overflow-hidden">
         <div className="w-full flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-slate-500">
            <Link href="/" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <ChevronRight className="w-3 h-3 rotate-180" />
              Terminate Session (Home)
            </Link>
            <div className="hidden sm:flex gap-6">
              <span>PRERANA INC // 2026</span>
              <span>SYS.SECURE</span>
            </div>
         </div>
      </footer>
    </div>
  )
}
