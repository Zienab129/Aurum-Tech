'use client'

import { Border } from '@/components/Border'
import { FadeIn } from '@/components/FadeIn'
import { AnimatedCounter } from '@/components/AnimatedCounter'

interface AnimatedStatListItemProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  icon?: React.ReactNode
}

export function AnimatedStatListItem({
  label,
  value,
  suffix = '',
  prefix = '',
  icon,
}: AnimatedStatListItemProps) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 flex items-center gap-2 text-base text-neutral-600">
        {icon && <span className="text-2xl">{icon}</span>}
        {label}
      </dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </dd>
    </Border>
  )
}
