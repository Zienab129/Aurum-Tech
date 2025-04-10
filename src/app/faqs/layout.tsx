import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AURUM TECH',
  description:
    'Common questions about our services, delivery times, payment methods, and support options.',
}

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
