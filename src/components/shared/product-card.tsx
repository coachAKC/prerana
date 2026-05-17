'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  badge: string
  href: string
  icon?: LucideIcon
  className?: string
  vibe?: string
}

export function ProductCard({
  name,
  tagline,
  description,
  badge,
  href,
  icon: Icon,
  className,
  vibe
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col h-full bg-white border border-slate-200 rounded-3xl p-8 transition-all hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50",
        className
      )}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-4xl font-bold tracking-tight text-slate-900 leading-none">
            {name}
          </h3>
          {vibe && (
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {vibe}
            </span>
          )}
        </div>
        <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {badge}
        </Badge>
      </div>

      <div className="flex-grow">
        <p className="text-xl font-semibold text-slate-800 mb-4 leading-tight italic">
          {tagline}
        </p>
        <p className="text-slate-500 leading-relaxed text-sm max-w-[90%]">
          {description}
        </p>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <Link 
          href={href}
          className="group/btn flex items-center gap-2 text-sm font-bold text-slate-900"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
        
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}
