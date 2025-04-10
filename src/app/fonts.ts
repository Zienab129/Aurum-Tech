import localFont from 'next/font/local'

// Define Mona Sans as a local font with various weights
export const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap', // Use 'swap' to ensure text remains visible during font loading
  preload: true,
  variable: '--font-mona-sans',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
})
