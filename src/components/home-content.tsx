'use client'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { ShapingFuture } from '@/components/ShapingFuture'
import logoAurum from '@/images/Aurum logo.png'
import { useTranslation } from '@/localization/client'

function ServicesShowcase() {
  const { t } = useTranslation()

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      title: t('home.services.websiteDev.title'),
      description: t('home.services.websiteDev.description'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: t('home.services.ecommerce.title'),
      description: t('home.services.ecommerce.description'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
          <line x1="2" y1="20" x2="2" y2="20" />
        </svg>
      ),
      title: t('home.services.socialMedia.title'),
      description: t('home.services.socialMedia.description'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: t('home.services.contentCreation.title'),
      description: t('home.services.contentCreation.description'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient5"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: t('home.services.consulting.title'),
      description: t('home.services.consulting.description'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#serviceGradient6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <defs>
            <linearGradient
              id="serviceGradient6"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M5 3a2 2 0 0 0-2 2" />
          <path d="M19 3a2 2 0 0 1 2 2" />
          <path d="M21 19a2 2 0 0 1-2 2" />
          <path d="M5 21a2 2 0 0 1-2-2" />
          <path d="M9 3h1" />
          <path d="M9 21h1" />
          <path d="M14 3h1" />
          <path d="M14 21h1" />
          <path d="M3 9v1" />
          <path d="M21 9v1" />
          <path d="M3 14v1" />
          <path d="M21 14v1" />
        </svg>
      ),
      title: t('home.services.brandIdentity.title'),
      description: t('home.services.brandIdentity.description'),
    },
  ]

  return (
    <div className="mt-24 rounded-4xl bg-[#121212] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <h2 className="mb-4 text-center font-display text-3xl font-semibold tracking-tight text-white">
            {t('home.services.title')}
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700 to-blue-900"></div>
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={index}>
                <div className="group relative flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:scale-105 hover:border-blue-700/50 hover:bg-neutral-800 hover:shadow-[0_0_15px_rgba(29,78,216,0.2)]">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:from-neutral-700 group-hover:to-neutral-800 group-hover:shadow-[0_0_10px_rgba(30,64,175,0.15)]">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-center text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-center text-sm text-neutral-400 group-hover:text-neutral-300">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  const { t } = useTranslation()

  return (
    <>
      <SectionIntro
        title={t('home.digitalGrowth.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('home.digitalGrowth.description')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-start lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="-mt-8 w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="/images/laptop.jpg.png"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                width={2400}
                height={1600}
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t('home.results.transformation.title')}>
              {t('home.results.transformation.description')}
            </ListItem>
            <ListItem title={t('home.results.webSolutions.title')}>
              {t('home.results.webSolutions.description')}
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• {t('home.results.webSolutions.points.0')}</li>
                <li>• {t('home.results.webSolutions.points.1')}</li>
                <li>• {t('home.results.webSolutions.points.2')}</li>
              </ul>
            </ListItem>
            <ListItem title={t('home.results.ecommercePlatforms.title')}>
              {t('home.results.ecommercePlatforms.description')}
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• {t('home.results.ecommercePlatforms.points.0')}</li>
                <li>• {t('home.results.ecommercePlatforms.points.1')}</li>
                <li>• {t('home.results.ecommercePlatforms.points.2')}</li>
              </ul>
            </ListItem>
            <ListItem title={t('home.results.contentManagement.title')}>
              {t('home.results.contentManagement.description')}
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• {t('home.results.contentManagement.points.0')}</li>
                <li>• {t('home.results.contentManagement.points.1')}</li>
                <li>• {t('home.results.contentManagement.points.2')}</li>
              </ul>
            </ListItem>
            <ListItem title={t('home.results.opportunities.title')}>
              {t('home.results.opportunities.description')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default function HomeContent({ caseStudies }: { caseStudies: any[] }) {
  const { t } = useTranslation()

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-5xl">
          <h2 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            {t('home.hero.title')}
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            {t('home.hero.description')}
          </p>
        </FadeIn>
      </Container>

      <ServicesShowcase />

      <ShapingFuture />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'ZIENAB ABOELDAHAB', logo: logoAurum }}
      >
        {t('home.testimonial')}
      </Testimonial>

      <Services />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {t('home.globalPresence.title')}
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700 to-blue-900"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              {t('home.globalPresence.description')}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-950">
                  {t('home.globalPresence.regions.arab.title')}
                </h3>
                <p className="text-neutral-700">
                  {t('home.globalPresence.regions.arab.description')}
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-950">
                  {t('home.globalPresence.regions.europe.title')}
                </h3>
                <p className="text-neutral-700">
                  {t('home.globalPresence.regions.europe.description')}
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-950">
                  {t('home.globalPresence.regions.worldwide.title')}
                </h3>
                <p className="text-neutral-700">
                  {t('home.globalPresence.regions.worldwide.description')}
                </p>
              </div>
            </div>

            <p className="mt-12 text-center text-neutral-700">
              {t('home.globalPresence.footer')}
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
