'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export function DigitalSolutions() {
  const solutions = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern technologies',
      details:
        'Our development team creates scalable websites optimized for performance, user experience, and conversion, utilizing the latest frameworks and technologies.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      title: 'Digital Consulting',
      description: 'Strategic guidance for digital transformation initiatives',
      details:
        'Our consulting services help businesses identify opportunities, overcome challenges, and implement effective digital strategies aligned with business goals.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
      title: 'UX/UI Design',
      description: 'Intuitive, engaging interfaces that users love',
      details:
        'Our design team creates user-centered interfaces that balance aesthetics with functionality, resulting in delightful experiences that drive engagement and conversion.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that deliver measurable results',
      details:
        'Our marketing experts leverage analytics, SEO, content marketing, and paid media to increase your visibility, attract qualified leads, and boost conversion rates.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient5"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'E-Commerce Solutions',
      description: 'Custom online stores that convert visitors into customers',
      details:
        'We build secure, scalable e-commerce platforms with streamlined checkout processes, product management systems, and integrations with payment gateways and shipping providers.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#solutionGradient6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <defs>
            <linearGradient
              id="solutionGradient6"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: 'Content Creation',
      description: 'Compelling content that tells your brand story',
      details:
        'Our creative team produces high-quality written and visual content that resonates with your target audience, builds trust, and strengthens your brand identity.',
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
            Our Digital Solutions
          </h2>
          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-400">
            Comprehensive digital services tailored to elevate your brand and
            drive business growth
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-500 hover:border-[#FFD700]/30">
                <div className="absolute -top-20 -right-20 z-0 h-40 w-40 rounded-full bg-gradient-to-b from-[#FFD700]/10 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-70"></div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-lg shadow-[#FFD700]/5 transition-all duration-300 group-hover:shadow-[#FFD700]/20">
                    {solution.icon}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {solution.title}
                  </h3>

                  <div className="h-20 overflow-hidden transition-all duration-500 group-hover:h-auto">
                    <p className="text-sm text-neutral-400 transition-all duration-300 group-hover:text-white">
                      {solution.description}
                    </p>
                    <div className="max-h-0 overflow-hidden pt-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:pt-4 group-hover:opacity-100">
                      <p className="text-sm text-neutral-500">
                        {solution.details}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center text-sm font-semibold text-[#FFD700]">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
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
          <motion.button
            className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] px-8 py-4 font-bold text-neutral-900 shadow-lg shadow-[#FFD700]/20"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.button>
        </motion.div>
      </Container>
    </div>
  )
}
