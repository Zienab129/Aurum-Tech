'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList } from '@/components/StatList'
import { AnimatedStatListItem } from '@/components/AnimatedStatListItem'
import { RotatingText } from '@/components/RotatingText'
import { ContactSection } from '@/components/ContactSection'
import { useTranslation } from '@/localization/client'

function Culture() {
  const { t } = useTranslation()
  const inspirationalPhrases = t('about.culture.inspirationalPhrases', {
    returnObjects: true,
  }) as string[]

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow={t('about.culture.eyebrow')}
        title={t('about.culture.title')}
        invert
      >
        <p>{t('about.culture.description')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t('about.culture.values.growth.title')} invert>
            {t('about.culture.values.growth.description')}
          </GridListItem>
          <GridListItem title={t('about.culture.values.trust.title')} invert>
            {t('about.culture.values.trust.description')}
          </GridListItem>
          <GridListItem title={t('about.culture.values.empathy.title')} invert>
            {t('about.culture.values.empathy.description')}
          </GridListItem>
        </GridList>
        <div className="mt-16 overflow-hidden">
          <FadeIn>
            <div className="mb-8 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
            <RotatingText
              phrases={inspirationalPhrases}
              displayDuration={4000}
              fadeDuration={500}
              className="mx-auto max-w-3xl px-4 text-center"
            />
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('about.pageIntro.eyebrow')}
        title={t('about.pageIntro.title')}
      >
        <p>{t('about.pageIntro.description')}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>{t('about.history.foundingMission')}</p>
          <p>{t('about.history.buildingExperiences')}</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <AnimatedStatListItem
            value={Number(t('about.stats.experts.value'))}
            suffix={t('about.stats.experts.suffix')}
            label={t('about.stats.experts.label')}
            icon={t('about.stats.experts.icon')}
          />
          <AnimatedStatListItem
            value={Number(t('about.stats.projects.value'))}
            suffix={t('about.stats.projects.suffix')}
            label={t('about.stats.projects.label')}
            icon={t('about.stats.projects.icon')}
          />
          <AnimatedStatListItem
            value={Number(t('about.stats.retention.value'))}
            suffix={t('about.stats.retention.suffix')}
            label={t('about.stats.retention.label')}
            icon={t('about.stats.retention.icon')}
          />
        </StatList>
      </Container>

      <Culture />

      <ContactSection />
    </>
  )
}
