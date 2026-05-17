'use client'

import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface CardProps extends HTMLMotionProps<'div'> {
  shadow?: 'sm' | 'md' | 'lg' | 'none' | 'stacked-primary' | 'stacked-secondary' | 'stacked-accent'
  hover?: boolean
}

const shadowStyles = {
  sm: 'shadow-nb-sm',
  md: 'shadow-nb-md',
  lg: 'shadow-nb-lg',
  'stacked-primary': 'shadow-[var(--shadow-nb-stacked-primary)]',
  'stacked-secondary': 'shadow-[var(--shadow-nb-stacked-secondary)]',
  'stacked-accent': 'shadow-[var(--shadow-nb-stacked-accent)]',
  none: '',
}

export function Card({ shadow = 'md', hover = false, className, children, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, x: -6, transition: { type: 'spring', stiffness: 300, damping: 10 } } : undefined}
      whileTap={hover ? { y: 2, x: 2 } : undefined}
      className={cn(
        'border-[2.5px] border-border rounded-[var(--radius)] bg-white',
        shadowStyles[shadow],
        hover && 'hover:shadow-nb-lg transition-all',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
