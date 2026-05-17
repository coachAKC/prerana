import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export type BadgeVariant = 'live' | 'draft' | 'success' | 'warning' | 'default' | 'secondary'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  live: 'bg-secondary text-white',
  draft: 'bg-white text-black',
  success: 'bg-accent-2 text-black',
  warning: 'bg-accent-1 text-black',
  default: 'bg-primary text-white',
  secondary: 'bg-slate-100 text-slate-600 border-none shadow-none',
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1',
        'text-xs font-bold uppercase tracking-wider',
        'border-[2px] border-border rounded-full',
        variant !== 'secondary' && 'shadow-nb-sm',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
