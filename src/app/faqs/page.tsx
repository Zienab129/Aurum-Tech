'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { useTranslation } from '@/localization/client'
import Link from 'next/link'

function Faq({
  question,
  answer,
}: {
  question: string
  answer: string | React.ReactNode
}) {
  return (
    <div className="border-b border-neutral-200 py-8">
      <h3 className="font-display text-lg font-semibold text-neutral-950">
        {question}
      </h3>
      <div className="mt-4 text-base text-neutral-600">{answer}</div>
    </div>
  )
}

export default function FAQsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('faqs.pageIntro.eyebrow')}
        title={t('faqs.pageIntro.title')}
      >
        <p>{t('faqs.pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl">
            <Faq
              question={t('faqs.questions.services.question')}
              answer={t('faqs.questions.services.answer')}
            />

            <Faq
              question={t('faqs.questions.timeline.question')}
              answer={t('faqs.questions.timeline.answer')}
            />

            <Faq
              question={t('faqs.questions.payment.question')}
              answer={t('faqs.questions.payment.answer')}
            />

            <Faq
              question={t('faqs.questions.maintenance.question')}
              answer={t('faqs.questions.maintenance.answer')}
            />

            <Faq
              question={t('faqs.questions.revisions.question')}
              answer={t('faqs.questions.revisions.answer')}
            />

            <Faq
              question={t('faqs.questions.support.question')}
              answer={t('faqs.questions.support.answer')}
            />

            <Faq
              question={t('faqs.questions.guarantees.question')}
              answer={t('faqs.questions.guarantees.answer')}
            />

            <Faq
              question={t('faqs.questions.getStarted.question')}
              answer={
                <>
                  {t('faqs.questions.getStarted.answer')
                    .split('contact us')
                    .map((part, i, arr) => {
                      if (i === 0 && arr.length > 1) {
                        return (
                          <>
                            {part}
                            <Link
                              href="/contact"
                              className="font-medium text-blue-600 hover:underline"
                            >
                              {t('header.contactUs')}
                            </Link>
                          </>
                        )
                      }
                      return part
                    })}
                </>
              }
            />
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
