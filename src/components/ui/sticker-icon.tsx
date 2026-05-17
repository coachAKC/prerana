'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StickerIconProps {
  icon: LucideIcon
  className?: string
  size?: number
  color?: string
}

export function StickerIcon({ icon: Icon, className, size = 24, color }: StickerIconProps) {
  return (
    <motion.div
      whileHover={{ 
        rotate: [0, -10, 10, -10, 0],
        scale: 1.2,
        transition: { duration: 0.5 }
      }}
      className={className}
      style={{ color }}
    >
      <Icon size={size} strokeWidth={2.5} />
    </motion.div>
  )
}
