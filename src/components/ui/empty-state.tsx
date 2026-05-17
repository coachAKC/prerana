'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-12 text-center bg-white/30 border-dashed border-[3px] border-black/10 rounded-[var(--radius)]"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-accent-1 opacity-20 blur-xl rounded-full scale-150" />
        <Icon className="w-20 h-20 text-text-muted relative z-10" strokeWidth={1} />
      </div>
      <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">{title}</h3>
      <p className="text-sm font-bold text-text-muted/60 uppercase tracking-widest max-w-xs mb-8">
        {description}
      </p>
      {action}
    </motion.div>
  )
}
