import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useTranslation } from '@/localization/client'
import Image from 'next/image'

function WhatsAppIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      {...props}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  )
}

export function Footer() {
  const { t } = useTranslation()

  // Navigation links grouped by sections
  const quickLinks = [
    { title: t('footer.quickLinks.company'), href: '/about' },
    { title: t('footer.quickLinks.services'), href: '/#services' },
    { title: t('footer.quickLinks.contact'), href: '/contact' },
  ]

  const supportLinks = [
    { title: t('footer.supportLinks.faqs'), href: '/faqs' },
    { title: t('footer.supportLinks.privacy'), href: '/privacy' },
    { title: t('footer.supportLinks.terms'), href: '/terms' },
    { title: t('footer.supportLinks.technical'), href: '/support' },
    { title: t('footer.supportLinks.emails'), href: '/emails' },
  ]

  return (
    <footer className="mt-32 border-t border-neutral-200 bg-neutral-50">
      <Container className="py-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-12">
            {/* Logo Section */}
            <div className="md:col-span-1 lg:col-span-2">
              <Link href="/" aria-label="Home" className="flex flex-col">
                <Image
                  src="/images/logo.png"
                  width={100}
                  height={100}
                  alt="Aurum Tech"
                  className="size-20"
                />
                <h2 className="-mt-1.5 text-base font-semibold text-neutral-900">
                  Aurum Tech
                </h2>
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-8 md:col-span-1 lg:col-span-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-neutral-900">
                  {t('footer.quickLinksHeading')}
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Links Section */}
            <div className="space-y-8 md:col-span-1 lg:col-span-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-neutral-900">
                  {t('footer.supportHeading')}
                </h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="space-y-8 md:col-span-1 lg:col-span-4">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-neutral-900">
                  {t('footer.connectHeading')}
                </h3>
                <p className="mb-6 text-sm text-neutral-600">
                  {t('footer.connectText')}
                </p>
                <a
                  href="https://wa.me/966550959456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pulse-button inline-flex items-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                >
                  <WhatsAppIcon className="size-5 ltr:mr-1.5 rtl:ml-1.5" />
                  {t('footer.whatsappButton')}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 flex flex-col items-center justify-between border-t border-neutral-200 pt-6 md:flex-row">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  )
}
