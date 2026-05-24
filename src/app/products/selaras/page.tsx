import type { Metadata } from 'next'
import { SelarasContent } from './selaras-content'

export const metadata: Metadata = {
  title: 'Selaras. | Secure Engineering Document Management',
  description: 'Selaras is an enterprise-grade EDMS designed to help small to medium companies manage their engineering documents securely and efficiently.',
}

export default function SelarasPage() {
  return <SelarasContent />
}
