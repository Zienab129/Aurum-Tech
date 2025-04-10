import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    "Explore AURUM TECH's case studies showcasing innovative digital solutions that drive measurable results for our clients across diverse industries.",
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
