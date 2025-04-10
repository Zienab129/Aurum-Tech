'use client'
import clsx from 'clsx'
import { useTranslation } from '@/localization/client'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  const { t } = useTranslation()

  return (
    <ul role="list" {...props}>
      <li>
        <Office name={t('footer.middleEast')} invert={invert}>
          {t('footer.middleEastRegions')}
        </Office>
      </li>
      <li>
        <Office name={t('footer.europe')} invert={invert}>
          {t('footer.europeRegions')}
        </Office>
      </li>
      <li>
        <Office name={t('footer.worldwide')} invert={invert}>
          {t('footer.worldwideRegions')}
        </Office>
      </li>
    </ul>
  )
}
