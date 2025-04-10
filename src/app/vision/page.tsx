'use client'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import { useTranslation } from '@/localization/client'

function Feature({
  title,
  children,
  icon: Icon,
}: {
  title: string
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <FadeIn>
      <div className="group relative h-full rounded-2xl border border-neutral-200 p-8 shadow-sm transition-all duration-200 hover:bg-gradient-to-br hover:from-neutral-50 hover:to-neutral-100 hover:shadow-md">
        <div className="relative z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 shadow-md">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
            {title}
          </h3>
          <div className="mt-4 text-base leading-relaxed text-neutral-600">
            {children}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function UnderstandIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function DesignIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  )
}

function ServiceIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    </svg>
  )
}

function CustomerIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function TeamIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}

function TechIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  )
}

export default function Vision() {
  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('vision.pageIntro.eyebrow')}
        title={t('vision.pageIntro.title')}
      >
        <p className="text-lg leading-relaxed">
          {t('vision.pageIntro.description')}
        </p>
      </PageIntro>

      <Container className="mt-20">
        <SectionIntro title={t('vision.approach.title')} smaller>
          <p className="text-lg">{t('vision.approach.description')}</p>
        </SectionIntro>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
          <Feature
            title={t('vision.features.understanding.title')}
            icon={UnderstandIcon}
          >
            {t('vision.features.understanding.description')}
          </Feature>
          <Feature title={t('vision.features.design.title')} icon={DesignIcon}>
            {t('vision.features.design.description')}
          </Feature>
          <Feature
            title={t('vision.features.service.title')}
            icon={ServiceIcon}
          >
            {t('vision.features.service.description')}
          </Feature>
        </div>
      </Container>

      <Container className="mt-32 sm:mt-40 lg:mt-48">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-4xl py-24 sm:py-32">
              <div className="via-neutral-850 absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_80%)]"></div>
              <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="mb-4 inline-flex items-center rounded-full bg-neutral-800/40 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-sm">
                    {t('vision.standOut.badge')}
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    {t('vision.standOut.title')}
                  </h2>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-2xl border border-neutral-700/30 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-neutral-600/50 sm:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 to-neutral-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="relative z-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-neutral-200 shadow-lg shadow-neutral-950/20">
                          <CustomerIcon
                            className="h-7 w-7 text-neutral-950"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl leading-7 font-semibold text-white">
                          {t(
                            'vision.standOut.valueProps.customerCentric.title',
                          )}
                        </h3>
                        <p className="mt-4 leading-relaxed text-neutral-300">
                          {t(
                            'vision.standOut.valueProps.customerCentric.description',
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-neutral-700/30 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-neutral-600/50 sm:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 to-neutral-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="relative z-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-neutral-200 shadow-lg shadow-neutral-950/20">
                          <TeamIcon
                            className="h-7 w-7 text-neutral-950"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl leading-7 font-semibold text-white">
                          {t('vision.standOut.valueProps.expertTeam.title')}
                        </h3>
                        <p className="mt-4 leading-relaxed text-neutral-300">
                          {t(
                            'vision.standOut.valueProps.expertTeam.description',
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-neutral-700/30 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-neutral-600/50 sm:p-8 md:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 to-neutral-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="relative z-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-neutral-200 shadow-lg shadow-neutral-950/20">
                          <TechIcon
                            className="h-7 w-7 text-neutral-950"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl leading-7 font-semibold text-white">
                          {t('vision.standOut.valueProps.innovativeTech.title')}
                        </h3>
                        <p className="mt-4 leading-relaxed text-neutral-300">
                          {t(
                            'vision.standOut.valueProps.innovativeTech.description',
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-32 sm:mt-40 lg:mt-48">
        <FadeInStagger>
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 px-8 py-16 text-center shadow-sm">
              <h2 className="font-display text-3xl font-semibold text-neutral-950">
                {t('vision.cta.title')}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                {t('vision.cta.description')}
              </p>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>

      <ContactSection />
    </>
  )
}
