'use client'

import { motion } from 'framer-motion'

export function LiveIndicator({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 bg-accent-3/10 border-2 border-accent-3 rounded-full">
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-2 h-2 bg-accent-3 rounded-full shadow-[0_0_8px_var(--color-accent-3)]"
      />
      <span className="text-[10px] font-black uppercase tracking-widest text-accent-3">
        {label || 'Live'}
      </span>
    </div>
  )
}
