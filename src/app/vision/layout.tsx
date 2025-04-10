import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vision',
  description:
    "At AURUM TECH, we don't just build websites – we craft digital experiences that make a difference.",
}

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
