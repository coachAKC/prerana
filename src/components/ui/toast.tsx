'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react'
import { useState, createContext, useContext } from 'react'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: string
  type: ToastType
  message: string
}

interface ToastContextType {
  toast: (type: ToastType, message: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (type: ToastType, message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, type, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <div className={`
                flex items-center gap-4 px-6 py-4 rounded-[var(--radius)] border-[2.5px] border-black shadow-nb-lg min-w-[300px]
                ${t.type === 'success' ? 'bg-accent-2' : t.type === 'error' ? 'bg-accent-3' : 'bg-accent-1'}
              `}>
                {t.type === 'success' && <CheckCircle2 className="w-6 h-6" />}
                {t.type === 'error' && <AlertCircle className="w-6 h-6" />}
                {t.type === 'info' && <Info className="w-6 h-6" />}
                
                <p className="font-black uppercase italic tracking-tight text-sm flex-1">
                  {t.message}
                </p>

                <button 
                  onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
                  className="hover:scale-125 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within ToastProvider')
  return context
}
