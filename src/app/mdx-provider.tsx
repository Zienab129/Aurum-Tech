'use client'

import { MDXProvider } from '@mdx-js/react'
import React from 'react'

// تعريف مكونات مخصصة لاستخدامها في ملفات MDX
const components = {
  h1: (props: any) => <h1 className="mt-10 mb-6 text-4xl font-bold" {...props} />,
  h2: (props: any) => (
    <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-6 mb-3 text-2xl font-semibold" {...props} />
  ),
  p: (props: any) => <p className="mb-4 text-lg text-neutral-600" {...props} />,
  ul: (props: any) => <ul className="mb-6 list-disc pl-6" {...props} />,
  ol: (props: any) => <ol className="mb-6 list-decimal pl-6" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-neutral-300 pl-4 italic" {...props} />
  ),
  pre: (props: any) => (
    <pre className="mb-6 rounded bg-gray-800 p-4 text-white" {...props} />
  ),
  code: (props: any) => (
    <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-sm" {...props} />
  ),
}

export default function MDXProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>
} 