import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Prerana. | Solving People Problems', template: '%s | Prerana.' },
  description: 'Prerana delivers value by creating tools that remove friction from human effort. Explore the suite of professional instruments including Vanta. and Krea.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  )
}
