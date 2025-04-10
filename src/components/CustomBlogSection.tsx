'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { GridPattern } from '@/components/GridPattern'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

interface BlogPost {
  title: string
  date: string
  description: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Remote Work, Real Results: How We Deliver Across Borders',
    date: 'March 10, 2025',
    description:
      'Discover how AURUM TECH successfully builds and manages high-performing remote teams — and why clients love our efficient, cross-border workflows.',
    href: '/blog/remote-work-real-results',
  },
  {
    title: 'Top 5 Web Trends Businesses Can&apos;t Ignore in 2025',
    date: 'February 25, 2025',
    description:
      'From AI-driven interfaces to ultra-fast websites — explore the digital trends shaping online success this year, and how your business can stay ahead.',
    href: '/blog/web-trends-2025',
  },
  {
    title: 'From Brief to Brand: How We Bring Ideas to Life',
    date: 'January 12, 2025',
    description:
      'A behind-the-scenes look at how our fully remote team transforms raw concepts into polished digital platforms using collaborative design sprints.',
    href: '/blog/brief-to-brand',
  },
]

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-neutral-950">
          {post.title}
        </h3>
        <time
          dateTime={post.date}
          className="order-first text-sm text-neutral-600"
        >
          {post.date}
        </time>
        <p className="mt-2.5 text-base text-neutral-600">{post.description}</p>
        <Link
          href={post.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: ${post.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </motion.article>
  )
}

export function CustomBlogSection({ className }: { className?: string }) {
  return (
    <div className={`relative pt-24 sm:pt-32 lg:pt-40 ${className || ''}`}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro title="From the blog" smaller>
        <p>
          Our remote team of developers, designers, and strategists share
          insights, experiences, and innovations from projects across the Arab
          world and Europe. Whether it&apos;s building brands or optimizing
          platforms, we&apos;re always learning — and sharing.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.href} post={post} index={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}
