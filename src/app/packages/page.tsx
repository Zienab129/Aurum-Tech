'use client'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { useTranslation } from '@/localization/client'
import { useEffect } from 'react'

function PriceTag({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={`mt-3 font-display text-5xl font-medium tracking-tight text-neutral-950 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

function Plan({
  name,
  oldPrice,
  price,
  children,
}: {
  name: string
  oldPrice: string
  price: string
  children: React.ReactNode
}) {
  const { t } = useTranslation()

  return (
    <FadeIn className="h-full">
      <Border className="flex h-full flex-col p-8 shadow-lg">
        <h3 className="font-display text-2xl font-semibold text-neutral-950">
          {name}
        </h3>
        <div className="mt-6 flex items-end gap-x-3">
          <span className="text-lg text-neutral-500 line-through">
            {oldPrice}
          </span>
          <PriceTag>{price}</PriceTag>
        </div>
        <div className="mt-6 flex grow flex-col">
          <div className="flex grow flex-col justify-between gap-y-6 text-base text-neutral-600">
            {children}
          </div>
          <Button
            href="https://wa.me/+966550959456"
            className="mx-auto mt-8 w-fit px-6 py-2.5"
            aria-label={`${t('packages.getStarted')} ${name}`}
          >
            {t('packages.contactViaWhatsApp')}
          </Button>
        </div>
      </Border>
    </FadeIn>
  )
}

export default function Packages() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  // Force rerender on component mount and prevent caching
  useEffect(() => {
    // This will force a re-evaluation of the component when it mounts
    console.log('Packages component mounted at:', new Date().toISOString())

    // Force browser to reload the page without cache
    const disableCache = () => {
      if (typeof window !== 'undefined') {
        // Force page to load without cache when clicking back button
        window.onpageshow = function (event) {
          if (event.persisted) {
            window.location.reload()
          }
        }
      }
    }

    disableCache()
  }, [])

  return (
    <>
      <PageIntro
        eyebrow={t('packages.pageIntro.eyebrow')}
        title={t('packages.pageIntro.title')}
      >
        <p>{t('packages.pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <Plan
            name={isArabic ? 'الباقة المبتدئة' : 'Starter Plan'}
            oldPrice="$500"
            price="$270"
          >
            <p className="text-sm text-neutral-500 italic">
              {t('packages.plans.details')}
            </p>
          </Plan>
          <Plan
            name={isArabic ? 'باقة الأعمال' : 'Business Plan'}
            oldPrice="$700"
            price="$450"
          >
            <p className="text-sm text-neutral-500 italic">
              {t('packages.plans.details')}
            </p>
          </Plan>
          <Plan
            name={isArabic ? 'الباقة المتميزة' : 'Premium Plan'}
            oldPrice="$1000"
            price="$650"
          >
            <p className="text-sm text-neutral-500 italic">
              {t('packages.plans.details')}
            </p>
          </Plan>
        </FadeInStagger>

        <div className="mt-24 text-center">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            {isArabic ? 'هل أنت جاهز للبدء معنا؟' : 'Ready to start with us?'}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t('packages.contactInfo')}
          </p>
          <Button href="https://wa.me/+966550959456" className="mt-10">
            {t('packages.contactUs')}
          </Button>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
