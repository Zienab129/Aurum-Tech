'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { useTranslation } from '@/localization/client'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-neutral-200 py-8">
      <h2 className="font-display text-xl font-semibold text-neutral-950">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base text-neutral-600">
        {children}
      </div>
    </div>
  )
}

export default function TermsPage() {
  const { t } = useTranslation()

  // Helper function to safely get translation arrays
  const getTranslationArray = (key: string): string[] => {
    const value = t(key, { returnObjects: true })
    return Array.isArray(value)
      ? value.map((item) => (typeof item === 'string' ? item : String(item)))
      : []
  }

  // Get all list arrays from translations
  const userObligationsItems = getTranslationArray(
    'terms.sections.userObligations.items',
  )
  const paymentTermsItems = getTranslationArray(
    'terms.sections.paymentTerms.items',
  )
  const intellectualPropertyItems = getTranslationArray(
    'terms.sections.intellectualProperty.items',
  )
  const terminationItems = getTranslationArray(
    'terms.sections.termination.items',
  )
  const liabilityItems = getTranslationArray('terms.sections.liability.items')

  return (
    <>
      <PageIntro
        eyebrow={t('terms.pageIntro.eyebrow')}
        title={t('terms.pageIntro.title')}
      >
        <p>{t('terms.pageIntro.intro')}</p>
        <p className="mt-4">{t('terms.pageIntro.lastUpdated')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="prose prose-neutral max-w-3xl">
            <Section title={t('terms.sections.introduction.title')}>
              <p>{t('terms.sections.introduction.para1')}</p>
              <p>{t('terms.sections.introduction.para2')}</p>
              <p>{t('terms.sections.introduction.para3')}</p>
            </Section>

            <Section title={t('terms.sections.userObligations.title')}>
              <p>{t('terms.sections.userObligations.intro')}</p>
              <ul className="list-disc pl-6">
                {userObligationsItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('terms.sections.paymentTerms.title')}>
              <p>{t('terms.sections.paymentTerms.intro')}</p>
              <ul className="list-disc pl-6">
                {paymentTermsItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('terms.sections.intellectualProperty.title')}>
              <p>{t('terms.sections.intellectualProperty.intro')}</p>
              <ul className="list-disc pl-6">
                {intellectualPropertyItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('terms.sections.intellectualProperty.indemnity')}</p>
            </Section>

            <Section title={t('terms.sections.termination.title')}>
              <p>{t('terms.sections.termination.intro')}</p>
              <ul className="list-disc pl-6">
                {terminationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('terms.sections.termination.rights')}</p>
            </Section>

            <Section title={t('terms.sections.liability.title')}>
              <p>{t('terms.sections.liability.intro')}</p>
              <ul className="list-disc pl-6">
                {liabilityItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('terms.sections.liability.limit')}</p>
            </Section>

            <Section title={t('terms.sections.governingLaw.title')}>
              <p>{t('terms.sections.governingLaw.text')}</p>
            </Section>

            <Section title={t('terms.sections.contact.title')}>
              <p>{t('terms.sections.contact.intro')}</p>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  <strong>Email:</strong> {t('terms.sections.contact.email')}
                </li>
              </ul>
            </Section>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
