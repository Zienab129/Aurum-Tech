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

export default function PrivacyPage() {
  const { t } = useTranslation()

  const renderHtml = (html: string) => {
    return <span dangerouslySetInnerHTML={{ __html: html }} />
  }

  // Helper function to safely get translation arrays
  const getTranslationArray = (key: string): string[] => {
    const value = t(key, { returnObjects: true })
    return Array.isArray(value)
      ? value.map((item) => (typeof item === 'string' ? item : String(item)))
      : []
  }

  const dataCollectionItems = getTranslationArray(
    'privacy.sections.dataCollection.items',
  )
  const dataUsageItems = getTranslationArray('privacy.sections.dataUsage.items')
  const thirdPartyItems = getTranslationArray(
    'privacy.sections.thirdParty.items',
  )
  const rightsItems = getTranslationArray('privacy.sections.rights.items')

  return (
    <>
      <PageIntro
        eyebrow={t('privacy.pageIntro.eyebrow')}
        title={t('privacy.pageIntro.title')}
      >
        <p>{t('privacy.pageIntro.intro')}</p>
        <p className="mt-4">{t('privacy.pageIntro.lastUpdated')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="prose prose-neutral max-w-3xl">
            <Section title={t('privacy.sections.dataCollection.title')}>
              <p>{t('privacy.sections.dataCollection.intro')}</p>
              <ul className="list-disc pl-6">
                {dataCollectionItems.map((item, index) => (
                  <li key={index}>{renderHtml(item)}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('privacy.sections.dataUsage.title')}>
              <p>{t('privacy.sections.dataUsage.intro')}</p>
              <ul className="list-disc pl-6">
                {dataUsageItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('privacy.sections.dataUsage.retention')}</p>
            </Section>

            <Section title={t('privacy.sections.thirdParty.title')}>
              <p>{t('privacy.sections.thirdParty.para1')}</p>
              <p>{t('privacy.sections.thirdParty.para2')}</p>
              <p>{t('privacy.sections.thirdParty.intro')}</p>
              <ul className="list-disc pl-6">
                {thirdPartyItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('privacy.sections.rights.title')}>
              <p>{t('privacy.sections.rights.intro')}</p>
              <ul className="list-disc pl-6">
                {rightsItems.map((item, index) => (
                  <li key={index}>{renderHtml(item)}</li>
                ))}
              </ul>
              <p>{t('privacy.sections.rights.exercise')}</p>
            </Section>

            <Section title={t('privacy.sections.security.title')}>
              <p>{t('privacy.sections.security.para1')}</p>
              <p>{t('privacy.sections.security.para2')}</p>
            </Section>

            <Section title={t('privacy.sections.changes.title')}>
              <p>{t('privacy.sections.changes.para1')}</p>
              <p>{t('privacy.sections.changes.para2')}</p>
            </Section>

            <Section title={t('privacy.sections.contact.title')}>
              <p>{t('privacy.sections.contact.intro')}</p>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  <strong>Email:</strong> {t('privacy.sections.contact.email')}
                </li>
              </ul>
            </Section>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
