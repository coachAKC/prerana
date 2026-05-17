import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
}

export function Pagination({ currentPage, totalPages, baseUrl, className }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    const url = new URL(baseUrl, 'http://localhost') // dummy base for URL parsing
    url.searchParams.set('page', page.toString())
    return `${url.pathname}${url.search}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className={cn("flex items-center justify-center gap-2 mt-8", className)}>
      <Link
        href={getPageUrl(currentPage - 1)}
        className={cn(
          "p-2 nb-interactive bg-surface-raised",
          currentPage <= 1 && "pointer-events-none opacity-50"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      <div className="flex items-center gap-1">
        {pages.map(page => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={cn(
              "w-10 h-10 flex items-center justify-center font-black transition-colors",
              "nb-interactive",
              currentPage === page 
                ? "bg-black text-white" 
                : "bg-surface-raised hover:bg-white/10"
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={getPageUrl(currentPage + 1)}
        className={cn(
          "p-2 nb-interactive bg-surface-raised",
          currentPage >= totalPages && "pointer-events-none opacity-50"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </nav>
  )
}

interface ClientPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function ClientPagination({ currentPage, totalPages, onPageChange, className }: ClientPaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className={cn("flex items-center justify-center gap-2 mt-8", className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={cn(
          "p-2 nb-interactive bg-surface-raised",
          currentPage <= 1 && "pointer-events-none opacity-50"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-10 h-10 flex items-center justify-center font-black transition-colors",
              "nb-interactive",
              currentPage === page 
                ? "bg-black text-white" 
                : "bg-surface-raised hover:bg-white/10"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={cn(
          "p-2 nb-interactive bg-surface-raised",
          currentPage >= totalPages && "pointer-events-none opacity-50"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  )
}
