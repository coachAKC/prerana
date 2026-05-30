'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isProductPage = pathname.startsWith('/products/')

  if (isProductPage) {
    return null
  }

  if (isHome) {
    return (
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-white px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-2xl tracking-tight italic">Prerana.</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 font-bold text-[10px] uppercase tracking-widest pointer-events-auto">
            <Link href="/mission" className="hover:opacity-70 transition-opacity">Mission</Link>
            <Link href="/suite" className="hover:opacity-70 transition-opacity">The Suite</Link>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4 text-slate-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
            <Sun className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-slate-800 italic">Prerana.</span>
        </Link>
        <nav className="flex items-center gap-6">
           <Link href="/mission" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors">Mission</Link>
           <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors">Back to Home</Link>
        </nav>
      </div>
    </header>
  )
}
