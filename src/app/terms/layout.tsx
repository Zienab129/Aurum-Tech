import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AURUM TECH',
  description:
    'Terms and conditions governing the use of AURUM TECH services and website.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
