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

        {/* ── Pricing ── */}
        <section className="bg-slate-50 py-24 px-6 border-t border-slate-200 relative">
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Mulai gratis. Upgrade kapan saja.</h2>
              <p className="text-lg text-slate-500">Pilih paket yang sesuai dengan ukuran tim dan kebutuhan proyek Anda.<br/>Tidak ada biaya tersembunyi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Paket Gratis */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-md mb-4">Free</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Paket Gratis</h3>
                  <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
                    Cocok untuk tim kecil yang baru memulai pengelolaan dokumen engineering secara digital.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-slate-900">Rp</span>
                    <span className="text-5xl font-bold text-slate-900 tracking-tighter">0</span>
                    <span className="text-sm text-slate-400">/ 3 bulan</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    '6 pengguna (seats)',
                    '100 MB penyimpanan',
                    'Masa aktif 3 bulan',
                    'Master Document Register (MDR)',
                    'Review & Approval workflow',
                    'Transmittal management',
                    'Audit log lengkap'
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-green-100 p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full h-12 rounded-md font-bold border-slate-300 text-slate-900 hover:bg-slate-50">
                  <Link href="https://selaras.prerana.id">Mulai Gratis</Link>
                </Button>
              </div>

              {/* Paket Pro */}
              <div className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg flex flex-col relative">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-md mb-4">Pro</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Paket Pro</h3>
                  <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
                    Untuk tim engineering yang aktif — kapasitas lebih besar, masa aktif lebih panjang, dan akses fitur lengkap.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="text-sm text-slate-400 line-through mb-1">Rp 2.000.000 / bulan</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-bold text-slate-900">Rp</span>
                    <span className="text-5xl font-bold text-blue-600 tracking-tighter">999.000</span>
                    <span className="text-sm text-slate-400">/ bulan</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded border border-red-100">
                    Harga Promo — Hemat 50%
                  </span>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    '15 pengguna (seats)',
                    '5 GB penyimpanan',
                    'Masa aktif 1 tahun',
                    'Semua fitur Free',
                    'Multi-project support',
                    'Client portal access',
                    'Priority support via email'
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-green-100 p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full h-12 rounded-md font-bold bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="https://selaras.prerana.id">Mulai Paket Pro</Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed font-mono">
              Harga belum termasuk PPN 11%. Pembayaran melalui Virtual Account, QRIS, atau e-wallet. Butuh lebih banyak seats atau storage? <a href="#" className="text-blue-600 hover:underline">Hubungi kami</a>.
            </p>
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
