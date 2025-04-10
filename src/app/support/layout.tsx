import { type Metadata } from 'next'

// We need to use static metadata because metadata generation happens at build time
// For a complete i18n solution, we would need server components with middleware or a more complex setup
export const metadata: Metadata = {
  title: 'Technical Support | AURUM TECH',
  description:
    'Get technical support for your AURUM TECH services and products.',
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
