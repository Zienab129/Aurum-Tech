'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { SocialMedia } from '@/components/SocialMedia'
import { LanguageToggle } from '@/components/LanguageToggle'
import { LocalBusinessStructuredData } from './StructuredData'

// Import i18n configuration
import '@/localization/i18n'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  const context = useContext(RootLayoutContext)
  const setLogoHovered = context?.setLogoHovered ?? (() => {})
  const { t } = useTranslation()

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Aurum Tech"
            className="size-20"
          />
        </Link>

        <div className="flex items-center gap-x-4">
          <LanguageToggle invert={invert} />
          <Button href="/contact" invert={invert}>
            {t('header.contactUs')}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div
          className={clsx(
            'grid grid-cols-1',
            isRTL ? 'sm:grid-flow-dense sm:grid-cols-2' : 'sm:grid-cols-2',
          )}
        >
          {children}
        </div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <Link
      href={href}
      className={clsx(
        'group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:even:mt-0',
        isRTL
          ? 'sm:odd:pl-16 sm:even:border-r sm:even:border-neutral-800 sm:even:pr-16'
          : 'sm:odd:pr-16 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16',
      )}
    >
      {children}
      <span
        className={clsx(
          'absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-hover:opacity-100',
          isRTL
            ? 'group-odd:left-0 group-even:right-0'
            : 'group-odd:right-0 group-even:left-0',
        )}
      />
    </Link>
  )
}

function Navigation() {
  const { t } = useTranslation()

  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">{t('header.ourWork')}</NavigationItem>
        <NavigationItem href="/about">{t('header.aboutUs')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/packages">{t('header.packages')}</NavigationItem>
        <NavigationItem href="/vision">{t('header.vision')}</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const router = useRouter()
  const context = useContext(RootLayoutContext)

  // Use separate useEffect for document updates to avoid hydration mismatches
  useEffect(() => {
    if (i18n.language) {
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = i18n.language
    }
  }, [i18n.language])

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <LocalBusinessStructuredData
        data={{
          name: 'Aurum Tech',
          description:
            'Aurum Tech provides premium digital solutions for businesses across the Middle East, Europe, and globally.',
          url: 'https://aurumtech.com',
          logo: 'https://aurumtech.com/images/logo.png',
          address: {
            streetAddress: 'Business Bay',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            postalCode: '00000',
            addressCountry: 'UAE',
          },
          contactPoint: {
            telephone: '+971 4 123 4567',
            contactType: 'customer service',
            email: 'contact@aurumtech.com',
          },
          sameAs: [
            'https://facebook.com/aurumtech',
            'https://twitter.com/aurumtech',
            'https://instagram.com/aurumtech',
            'https://linkedin.com/company/aurumtech',
          ],
        }}
      />

      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <header>
          <div
            className="absolute top-2 right-0 left-0 z-40 pt-14"
            aria-hidden={expanded ? 'true' : undefined}
            // @ts-ignore (https://github.com/facebook/react/issues/17157)
            inert={expanded ? '' : undefined}
          >
            <Header
              panelId={panelId}
              icon={MenuIcon}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                )
              }}
            />
          </div>

          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? 'auto' : '0.5rem' }}
            className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
            aria-hidden={expanded ? undefined : 'true'}
            // @ts-ignore (https://github.com/facebook/react/issues/17157)
            inert={expanded ? undefined : ''}
          >
            <motion.div layout className="bg-neutral-800">
              <div ref={navRef} className="bg-neutral-950 pt-14 pb-16">
                <Header
                  invert
                  panelId={panelId}
                  icon={XIcon}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded)
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true }),
                    )
                  }}
                />
              </div>
              <Navigation />
              <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                <Container>
                  <div
                    className={clsx(
                      'grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:pt-16',
                      isRTL
                        ? 'sm:grid-flow-dense sm:grid-cols-2'
                        : 'sm:grid-cols-2',
                    )}
                  >
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        {t('footer.offices')}
                      </h2>
                      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                          <h3 className="font-display text-sm font-medium text-white">
                            {t('footer.middleEast')}
                          </h3>
                          <p className="mt-2 text-sm text-neutral-300">
                            {t('footer.middleEastRegions')}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-medium text-white">
                            {t('footer.europe')}
                          </h3>
                          <p className="mt-2 text-sm text-neutral-300">
                            {t('footer.europeRegions')}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-medium text-white">
                            {t('footer.worldwide')}
                          </h3>
                          <p className="mt-2 text-sm text-neutral-300">
                            {t('footer.worldwideRegions')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        'sm:border-transparent',
                        i18n.language === 'ar'
                          ? 'sm:border-r sm:pr-16'
                          : 'sm:border-l sm:pl-16',
                      )}
                    >
                      <h2 className="font-display text-base font-semibold text-white">
                        {t('footer.followUs')}
                      </h2>
                      <SocialMedia className="mt-6" invert />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

        <motion.div
          layout
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden bg-white pt-14"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
              yOffset={-96}
              interactive
            />

            <main className="w-full flex-auto">{children}</main>

            <Footer />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
