'use client'

import { useTranslation } from '@/localization/client'
import { PageIntro } from '@/components/PageIntro'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

// Email category icons
function SalesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function ContactIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}

function SupportIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.9L12 5l4.1 3H20c.83 0 1.54.5 1.84 1.22" />
      <path d="M12 12a2 2 0 0 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  )
}

function CareIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function CustomerIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function AdminIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-2 size-6 text-teal-500"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
}

export default function EmailsPage() {
  const { t } = useTranslation()

  // Define email categories and their respective email addresses
  const emailCategories = [
    {
      title: t('emails.categories.sales'),
      description: t('emails.categories.salesDescription'),
      email: 'sales@aurum-tech.net',
      icon: <SalesIcon />,
    },
    {
      title: t('emails.categories.contact'),
      description: t('emails.categories.contactDescription'),
      email: 'contact@aurum-tech.net',
      icon: <ContactIcon />,
    },
    {
      title: t('emails.categories.support'),
      description: t('emails.categories.supportDescription'),
      email: 'support@aurum-tech.net',
      icon: <SupportIcon />,
    },
    {
      title: t('emails.categories.care'),
      description: t('emails.categories.careDescription'),
      email: 'care@aurum-tech.net',
      icon: <CareIcon />,
    },
    {
      title: t('emails.categories.customer'),
      description: t('emails.categories.customerDescription'),
      email: 'customer@aurum-tech.net',
      icon: <CustomerIcon />,
    },
    {
      title: t('emails.categories.admin'),
      description: t('emails.categories.adminDescription'),
      email: 'admin@aurum-tech.net',
      icon: <AdminIcon />,
    },
  ]

  return (
    <>
      <PageIntro
        eyebrow={t('emails.pageIntro.eyebrow')}
        title={t('emails.pageIntro.title')}
      >
        <p>{t('emails.pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {emailCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 p-6 shadow-sm transition-all hover:shadow-md"
              >
                {category.icon}
                <h3 className="text-lg font-semibold text-neutral-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {category.description}
                </p>
                <a
                  href={`mailto:${category.email}`}
                  className="mt-4 inline-flex items-center font-medium text-teal-600 hover:text-teal-700"
                >
                  <span>{category.email}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1.5 size-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
