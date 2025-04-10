'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useTranslation } from '@/localization/client'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageHover = {
  rest: { scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  hover: { scale: 1.05, transition: { duration: 0.5, ease: 'easeInOut' } },
}

// Our custom case studies data
interface CaseStudy {
  id: 'ecommerce' | 'marketing' | 'branding'
  imagePath: string
}

const customCaseStudies: CaseStudy[] = [
  {
    id: 'ecommerce',
    imagePath: '/images/our-work/ecommerce.png',
  },
  {
    id: 'marketing',
    imagePath: '/images/our-work/marketing-campaign.png',
  },
  {
    id: 'branding',
    imagePath: '/images/our-work/brand-identity.png',
  },
]

export function EnhancedCaseStudies() {
  const { t } = useTranslation()

  // Helper function to get features array from translation
  const getFeatures = (studyId: string): string[] => {
    const featuresKey = `work.caseStudies.cases.${studyId}.features`
    const features = t(featuresKey, { returnObjects: true })
    return Array.isArray(features)
      ? features.map((item) => (typeof item === 'string' ? item : String(item)))
      : []
  }

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center"
      >
        <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-white px-4 py-1 text-sm font-medium text-blue-800 shadow-sm">
          {t('work.caseStudies.badge')}
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          {t('work.caseStudies.title')}
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700 to-blue-900"></div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-600">
          {t('work.caseStudies.description')}
        </p>
      </motion.div>

      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 gap-16">
          {customCaseStudies.map((study) => (
            <motion.div key={study.id} variants={fadeInUp}>
              <div
                className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-96 w-full overflow-hidden bg-white lg:h-[500px]">
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="relative h-full w-full"
                    >
                      <motion.div
                        variants={imageHover}
                        className="relative h-full w-full overflow-hidden"
                      >
                        <Image
                          src={study.imagePath}
                          alt={`${t(`work.caseStudies.cases.${study.id}.client`)} - ${t(`work.caseStudies.cases.${study.id}.title`)}`}
                          fill
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          className="object-contain p-4"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-block rounded-full bg-black/70 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                        {t(`work.caseStudies.cases.${study.id}.client`)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-8 lg:p-10">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold text-neutral-950 transition-colors duration-300 sm:text-3xl">
                        {t(`work.caseStudies.cases.${study.id}.title`)}
                      </h3>
                      <p className="mb-8 leading-relaxed text-neutral-700">
                        {t(`work.caseStudies.cases.${study.id}.description`)}
                      </p>

                      <div className="mb-8">
                        <h4 className="mb-4 text-sm font-semibold tracking-wider text-neutral-950 uppercase">
                          {t('work.caseStudies.keyFeatures')}
                        </h4>
                        <ul className="space-y-3">
                          {getFeatures(study.id).map((feature, featIndex) => (
                            <motion.li
                              key={featIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="mt-1 mr-3 flex-shrink-0 text-blue-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-neutral-700">
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
                      <blockquote className="mb-3 text-neutral-700 italic">
                        &ldquo;
                        {t(`work.caseStudies.cases.${study.id}.testimonial`)}
                        &rdquo;
                      </blockquote>
                      <div className="flex items-center justify-end">
                        <div>
                          <div className="text-right text-sm font-semibold text-neutral-950">
                            {t(`work.caseStudies.cases.${study.id}.author`)}
                          </div>
                          <div className="text-right text-xs text-neutral-500">
                            {t(`work.caseStudies.cases.${study.id}.role`)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 left-0 h-1.5 origin-left scale-x-0 transform bg-gradient-to-r from-gray-800 to-gray-600 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 px-8 py-4 text-lg font-medium text-white shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-1">
                {t('work.caseStudies.cta')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
