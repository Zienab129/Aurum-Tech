'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { useTranslation } from '@/localization/client'

export function ShapingFuture() {
  const { t } = useTranslation()

  const techSolutions = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: t('shapingFuture.solutions.ai.title'),
      description: t('shapingFuture.solutions.ai.description'),
      details: t('shapingFuture.solutions.ai.details'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: t('shapingFuture.solutions.webDesign.title'),
      description: t('shapingFuture.solutions.webDesign.description'),
      details: t('shapingFuture.solutions.webDesign.details'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('shapingFuture.solutions.security.title'),
      description: t('shapingFuture.solutions.security.description'),
      details: t('shapingFuture.solutions.security.details'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      ),
      title: t('shapingFuture.solutions.cloud.title'),
      description: t('shapingFuture.solutions.cloud.description'),
      details: t('shapingFuture.solutions.cloud.details'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient5"
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
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: t('shapingFuture.solutions.global.title'),
      description: t('shapingFuture.solutions.global.description'),
      details: t('shapingFuture.solutions.global.details'),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#techGradient6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="techGradient6"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: t('shapingFuture.solutions.analytics.title'),
      description: t('shapingFuture.solutions.analytics.description'),
      details: t('shapingFuture.solutions.analytics.details'),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <div className="mt-24 rounded-4xl bg-[#121212] py-20 sm:mt-32 sm:py-32 lg:mt-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('shapingFuture.heading')}
          </h2>
          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-700 to-blue-900"></div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-400">
            {t('shapingFuture.subheading')}
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {techSolutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-500">
                <div className="absolute -top-20 -right-20 z-0 h-40 w-40 rounded-full bg-gradient-to-b from-blue-700/10 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-70"></div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-lg shadow-blue-700/5 transition-all duration-300 group-hover:shadow-blue-700/20">
                    {solution.icon}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {solution.title}
                  </h3>

                  <div className="h-16 overflow-hidden transition-all duration-500 group-hover:h-auto">
                    <p className="text-sm text-neutral-400 transition-all duration-300 group-hover:text-white">
                      {solution.description}
                    </p>
                    <div className="max-h-0 overflow-hidden pt-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:pt-4 group-hover:opacity-100">
                      <p className="text-sm text-neutral-500">
                        {solution.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/contact">
            <motion.button
              className="rounded-full bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-4 font-bold text-white shadow-lg shadow-blue-700/20"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              {t('shapingFuture.cta')}
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </div>
  )
}
