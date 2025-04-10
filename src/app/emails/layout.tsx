import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Official Emails | Aurum Tech',
  description:
    'Contact Aurum Tech via our official email addresses at aurum-tech.net for sales, support, customer service, and general inquiries. Our teams are ready to assist you with any questions or concerns.',
}

export default function EmailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="relative">{children}</div>
}
