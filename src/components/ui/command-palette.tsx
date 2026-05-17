'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { Search, Command, Calendar, BookOpen, User, ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SearchResult {
  id: string
  title: string
  type: 'nav'
  href: string
  icon: LucideIcon
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const staticLinks: SearchResult[] = useMemo(() => [
    { id: 'nav-home', title: 'Home', type: 'nav', href: '/', icon: Command },
    { id: 'nav-suite', title: 'The Suite', type: 'nav', href: '/suite', icon: BookOpen },
    { id: 'nav-mission', title: 'Our Mission', type: 'nav', href: '/mission', icon: Calendar },
    { id: 'nav-krea', title: 'Krea.', type: 'nav', href: '/products/krea', icon: User },
    { id: 'nav-vanta', title: 'Vanta.', type: 'nav', href: '/products/vanta', icon: User },
  ], [])

  // Handle shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filteredResults = useMemo(() => {
    const res = query 
      ? staticLinks.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))
      : staticLinks
    return res
  }, [query, staticLinks])

  const navigate = useCallback((href: string) => {
    setOpen(false)
    setQuery('')
    router.push(href)
  }, [router])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(i => (i + 1) % filteredResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(i => (i - 1 + filteredResults.length) % filteredResults.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredResults[selectedIndex]) {
        navigate(filteredResults[selectedIndex].href)
      }
    }
  }, [filteredResults, selectedIndex, navigate])

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setSelectedIndex(0)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] outline-none px-4">
          <Dialog.Title className="sr-only">Command Palette</Dialog.Title>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white border-2 border-slate-200 shadow-2xl overflow-hidden rounded-[2rem]"
          >
            <div className="flex items-center px-4 border-b border-slate-100 bg-slate-50/50">
              <Search className="w-5 h-5 text-slate-400 ml-2" strokeWidth={2} />
              <input
                autoFocus
                placeholder="Search the suite... (Cmd+K)"
                className="w-full p-6 text-lg font-medium outline-none bg-transparent text-slate-900"
                value={query}
                onChange={handleQueryChange}
                onKeyDown={onKeyDown}
              />
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded border border-slate-200">
                ESC
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto p-3 flex flex-col gap-1">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => navigate(result.href)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={cn(
                      'flex items-center gap-4 p-4 w-full text-left rounded-2xl transition-all border border-transparent',
                      selectedIndex === index 
                        ? 'bg-orange-50 border-orange-100' 
                        : 'bg-white'
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-xl border transition-colors",
                      selectedIndex === index ? "bg-white text-orange-600 border-orange-100 shadow-sm" : "bg-slate-50 text-slate-400 border-slate-100"
                    )}>
                      <result.icon size={18} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className={cn(
                        "font-bold tracking-tight leading-none",
                        selectedIndex === index ? "text-orange-900" : "text-slate-700"
                      )}>{result.title}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest mt-1.5 opacity-40">
                        Quick Link
                      </p>
                    </div>
                    {selectedIndex === index && <ArrowRight className="w-4 h-4 text-orange-400 animate-in slide-in-from-left-2" />}
                  </button>
                ))
              ) : (
                <div className="p-12 text-center flex flex-col items-center gap-4 text-slate-300">
                   <Search className="w-8 h-8 opacity-20" />
                   <div>
                     <p className="font-bold text-lg tracking-tight text-slate-400">No results</p>
                     <p className="text-xs font-medium opacity-60">Try searching for products or mission</p>
                   </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between text-slate-300">
               <div className="flex gap-6">
                 <div className="flex items-center gap-2">
                   <span className="px-1.5 py-0.5 border border-slate-200 bg-white rounded text-[9px] font-black">↑↓</span>
                   <span className="text-[9px] font-black uppercase tracking-widest">Navigate</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="px-1.5 py-0.5 border border-slate-200 bg-white rounded text-[9px] font-black text-slate-900">ENTER</span>
                   <span className="text-[9px] font-black uppercase tracking-widest">Select</span>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <Command className="w-3.5 h-3.5" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em]">PRERANA.HUB</span>
               </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
