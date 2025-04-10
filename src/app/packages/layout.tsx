import { type Metadata } from 'next'

// We're using static metadata values since the metadata is server-side rendered
// For a full i18n metadata implementation, you would need a server-side translation solution
// This is a simplification for the current context
export const metadata: Metadata = {
  title: 'Website Packages - AURUM TECH',
  description:
    'Choose from our curated packages to bring your digital vision to life. We offer affordable solutions tailored to your business needs.',
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
