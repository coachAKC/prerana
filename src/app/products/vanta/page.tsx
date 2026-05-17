import type { Metadata } from 'next'
import { VantaContent } from './vanta-content'

export const metadata: Metadata = {
  title: 'Vanta. | The Frictionless Workspace for High-Value Freelancers',
  description: 'Reclaim your billable hours. Vanta. is a minimalist, high-performance desktop app for freelancers that aggregates tasks, AI-enriched notes, and encrypted credentials into a single, lightning-fast workbench.',
}

export default function VantaPage() {
  return <VantaContent />
}
