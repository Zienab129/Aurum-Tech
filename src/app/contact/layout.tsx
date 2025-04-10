import { type Metadata } from 'next'

// We're using static metadata values since the metadata is server-side rendered
// For a full i18n metadata implementation, you would need a server-side translation solution
// This is a simplification for the current context
export const metadata: Metadata = {
  title: 'Contact AURUM TECH',
  description:
    'Connect with our global team for exceptional digital solutions tailored to your business needs.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
