import Image, { ImageProps } from 'next/image'
import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  containerClasses?: string
  priority?: boolean
  withBlur?: boolean
  eager?: boolean // For above-the-fold images
  lazyBoundary?: string // Customize lazy loading boundary
  preload?: boolean // Whether to preload the image
}

/**
 * High-performance image component optimized for Core Web Vitals
 * - Prioritizes LCP images automatically
 * - Prevents layout shifts (CLS)
 * - Optimizes loading strategy based on viewport position
 * - Uses AVIF/WebP formats with fallbacks
 * - Implements blur-up loading pattern
 * - Handles errors gracefully
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/images/placeholder.jpg',
  containerClasses,
  priority = false,
  withBlur = true,
  eager = false,
  lazyBoundary = '200px',
  preload = false,
  sizes = '(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 100vw',
  quality = 90,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [blurDataUrl, setBlurDataUrl] = useState<string | undefined>(undefined)
  const imgRef = useRef<HTMLImageElement>(null)
  const isAboveTheFold = eager || priority

  // Generate blur placeholder for smoother loading
  useEffect(() => {
    if (withBlur && typeof src === 'string' && !isAboveTheFold) {
      // Simple blur data URL for quick display
      setBlurDataUrl(
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==',
      )
    }
  }, [src, withBlur, isAboveTheFold])

  // Preload critical images to improve LCP
  useEffect(() => {
    if (preload && typeof src === 'string' && typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    }
  }, [preload, src])

  // Implement intersection observer for smart loading
  useEffect(() => {
    if (
      !isAboveTheFold &&
      imgRef.current &&
      typeof IntersectionObserver !== 'undefined'
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Set higher priority when in viewport
              if (imgRef.current) {
                imgRef.current.loading = 'eager'
                imgRef.current.fetchPriority = 'high'
              }
              observer.disconnect()
            }
          })
        },
        {
          rootMargin: lazyBoundary,
          threshold: 0.1,
        },
      )

      observer.observe(imgRef.current)
      return () => observer.disconnect()
    }
  }, [isAboveTheFold, lazyBoundary])

  return (
    <div
      className={clsx(
        containerClasses,
        'relative overflow-hidden', // Prevent layout shifts
        typeof width === 'number' &&
          typeof height === 'number' &&
          `aspect-w-${width} aspect-h-${height}`, // Maintain aspect ratio
      )}
      style={{
        // Reserve space to prevent layout shifts (CLS)
        aspectRatio:
          typeof width === 'number' && typeof height === 'number'
            ? `${width} / ${height}`
            : undefined,
      }}
    >
      <Image
        ref={imgRef}
        src={error ? fallbackSrc : src}
        alt={alt || ''}
        width={width}
        height={height}
        className={clsx(
          className,
          'transition-opacity duration-300',
          isLoading && withBlur && !isAboveTheFold
            ? 'opacity-60'
            : 'opacity-100',
        )}
        sizes={sizes}
        quality={quality}
        loading={isAboveTheFold ? 'eager' : 'lazy'}
        fetchPriority={isAboveTheFold ? 'high' : 'auto'}
        placeholder={blurDataUrl ? 'blur' : undefined}
        blurDataURL={blurDataUrl}
        priority={priority}
        // Prevent CLS by handling load complete
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        {...props}
      />
    </div>
  )
}
