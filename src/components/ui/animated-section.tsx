'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
