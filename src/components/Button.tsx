import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
  variant?: 'primary' | 'secondary' | 'white'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    {
      'bg-white text-neutral-950 hover:bg-neutral-200':
        invert || variant === 'white',
      'bg-neutral-950 text-white hover:bg-neutral-800':
        !invert && variant === 'primary',
      'bg-neutral-100 text-neutral-950 hover:bg-neutral-200':
        !invert && variant === 'secondary',
    },
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
