import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Prerana. | Solving People Problems', template: '%s | Prerana.' },
  description: 'Prerana delivers value by creating tools that remove friction from human effort. Explore the suite of professional instruments including Vanta. and Krea.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className={`antialiased font-sans bg-background text-foreground`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
