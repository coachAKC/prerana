'use client'
import * as RadixDialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Dialog({ open, onOpenChange, title, description, children, className }: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <RadixDialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
            'bg-surface border-[2.5px] border-border rounded-[var(--radius)]',
            'shadow-nb-lg w-full max-w-md p-6',
            className
          )}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <RadixDialog.Title className="text-lg font-black">
              {title}
            </RadixDialog.Title>
            <RadixDialog.Close
              aria-label="Close dialog"
              className="nb-interactive flex items-center justify-center w-8 h-8 font-bold text-lg leading-none bg-white flex-shrink-0"
            >
              ×
            </RadixDialog.Close>
          </div>
          {description && (
            <RadixDialog.Description className="text-sm text-text-muted mb-4">
              {description}
            </RadixDialog.Description>
          )}
          {!description && (
            <RadixDialog.Description className="sr-only">
              {title}
            </RadixDialog.Description>
          )}
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
