'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RotatingTextProps {
  phrases: string[]
  displayDuration?: number
  fadeDuration?: number
  className?: string
}

export function RotatingText({
  phrases,
  displayDuration = 4000,
  fadeDuration = 500,
  className = '',
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Handle the visibility toggle for fade effect
    const intervalId = setInterval(
      () => {
        setIsVisible(false)

        // Wait for fade out, then change the text and fade in
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          setIsVisible(true)
        }, fadeDuration)
      },
      displayDuration + fadeDuration * 2,
    )

    return () => clearInterval(intervalId)
  }, [phrases.length, displayDuration, fadeDuration])

  return (
    <div className={`relative h-[3.5rem] overflow-hidden ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: fadeDuration / 1000 }}
            className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white"
          >
            {phrases[currentIndex]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
