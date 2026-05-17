import { useId } from 'react'
import { cn } from '@/lib/utils'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, id: idProp, className, ...props }: InputProps) {
  const generatedId = useId()
  const id = idProp ?? (label ? generatedId : undefined)
  const errorId = id ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-text-muted">
          {label}
        </label>
      )}
      <input
        id={id}
        aria-describedby={error && errorId ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        className={cn(
          'w-full px-4 py-3 text-sm font-bold bg-white',
          'border-[2.5px] border-border rounded-[var(--radius)] shadow-nb-sm',
          'transition-all duration-200 outline-none',
          'focus:border-primary focus:shadow-nb-md focus:-translate-y-0.5',
          'placeholder:text-text-muted/50 placeholder:font-medium',
          error && 'border-secondary',
          className
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-xs font-semibold text-secondary">
          {error}
        </p>
      )}
    </div>
  )
}
