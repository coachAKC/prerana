import type { Metadata } from 'next'
import { KreaContent } from './krea-content'

export const metadata: Metadata = {
  title: 'Krea. | Interactive Trainer Platform for Active Discovery',
  description: 'Krea is a high-energy, collaborative digital workspace designed to bridge the engagement gap between trainers and participants.',
}

export default function KreaPage() {
  return <KreaContent />
}
