import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  containerClasses?: string;
  priority?: boolean;
  withBlur?: boolean;
}

/**
 * OptimizedImage component that implements best practices for image loading:
 * - Proper lazy loading
 * - WebP/AVIF format support
 * - Blur-up loading effect
 * - Proper sizing
 * - Fallback handling
 * - Accessible alt text
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
  sizes = '(min-width: 1024px) 50vw, 100vw',
  quality = 90,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string | undefined>(undefined);

  // Generate blur placeholder if needed
  useEffect(() => {
    if (withBlur && typeof src === 'string' && !priority) {
      // Simple blur data URL - in production you'd want to generate this server-side
      setBlurDataUrl('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==');
    }
  }, [src, withBlur, priority]);

  return (
    <div className={containerClasses}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt || ''}
        width={width}
        height={height}
        className={clsx(
          className,
          isLoading && withBlur && !priority && 'blur-sm transition-all duration-300'
        )}
        sizes={sizes}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
        placeholder={blurDataUrl ? 'blur' : undefined}
        blurDataURL={blurDataUrl}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
} 