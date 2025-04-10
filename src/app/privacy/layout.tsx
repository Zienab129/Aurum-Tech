import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AURUM TECH',
  description:
    'Learn about how AURUM TECH collects, uses, and protects your personal information.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
