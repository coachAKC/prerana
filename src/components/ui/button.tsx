import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, MouseEvent } from 'react'

type Variant = 'primary' | 'secondary' | 'amber' | 'teal' | 'pink' | 'ghost' | 'outline' | 'dark'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: 'default' | 'lg' | 'sm'
  asChild?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white border-2 border-black shadow-nb-md hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-nb-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  secondary: 'bg-secondary text-white border-2 border-black shadow-nb-md hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-nb-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  amber: 'bg-accent-1 text-black border-2 border-black shadow-nb-md',
  teal: 'bg-accent-2 text-black border-2 border-black shadow-nb-md',
  pink: 'bg-accent-3 text-white border-2 border-black shadow-nb-md',
  ghost: 'bg-transparent text-slate-600 hover:text-primary transition-colors',
  outline: 'bg-transparent border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all',
  dark: 'bg-slate-900 text-white hover:bg-slate-800 transition-colors',
}

const sizeStyles = {
  default: 'px-6 py-2 text-sm',
  sm: 'px-4 py-1.5 text-xs',
  lg: 'px-10 py-4 text-base',
}

export function Button({
  variant = 'ghost',
  size = 'default',
  asChild = false,
  className,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  const interactiveProps = asChild
    ? {
        'aria-disabled': disabled || undefined,
        onClick: disabled
          ? (e: MouseEvent<HTMLButtonElement>) => e.preventDefault()
          : onClick,
      }
    : { disabled, onClick, type: 'button' as const }

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold transition-all rounded-full cursor-pointer',
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      {...interactiveProps}
      {...props}
    />
  )
}
