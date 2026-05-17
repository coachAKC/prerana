'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-react'

interface CTASectionProps {
  headline: string
  subcopy: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  githubHref?: string
  className?: string
}

export function CTASection({
  headline,
  subcopy,
  primaryCTA,
  secondaryCTA,
  githubHref,
  className
}: CTASectionProps) {
  return (
    <section className={className}>
      <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
          >
            {headline}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 mb-12 font-medium"
          >
            {subcopy}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-10 h-14 text-base font-bold">
              <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 rounded-full px-10 h-14 text-base font-bold">
              <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
            </Button>
          </motion.div>
          
          {githubHref && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link 
                href={githubHref}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-semibold"
              >
                <Terminal className="w-4 h-4" />
                View on GitHub
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
