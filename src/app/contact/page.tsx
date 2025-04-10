'use client'
import { useId, useRef, useState, useEffect } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { useTranslation } from '@/localization/client'
import { PhoneInput as ReactPhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

const phoneInputStyles = `
  .react-international-phone-input {
    height: 76px !important;
    direction: ltr !important;
    border-radius: 1rem !important;
  }
  html[dir="rtl"] .react-international-phone-input {
    border-radius: 1rem !important;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05) !important;
  }
  .react-international-phone-country-selector-button {
    border-right: 1px solid #d4d4d4 !important;
    background-color: transparent !important;
    height: 100% !important;
    width: 80px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  html[dir="rtl"] .react-international-phone-country-selector-button {
    border-right: none !important;
    border-left: 1px solid #d4d4d4 !important;
    margin-right: 0 !important;
    margin-left: 8px !important;
  }
  .react-international-phone-input-container {
    height: 100% !important;
    padding-bottom: 0 !important;
    width: 100% !important;
  }
  html[dir="rtl"] .react-international-phone-input-container input {
    text-align: right !important;
    direction: rtl !important;
    padding-right: 16px !important;
  }
  .react-international-phone-country-selector-dropdown {
    border-radius: 8px !important;
    margin-top: 10px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
    border: 1px solid #e5e5e5 !important;
    max-height: 300px !important;
    overflow-y: auto !important;
    z-index: 50 !important;
  }
  html[dir="rtl"] .react-international-phone-country-selector-dropdown {
    right: 0 !important;
    left: auto !important;
  }
  .phone-input-wrapper {
    position: relative;
    width: 100% !important;
    border-radius: 1rem !important;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05) !important;
  }
  html[dir="rtl"] .phone-input-wrapper {
    display: flex !important;
  }
  .react-international-phone-flag-emoji {
    font-size: 1.2rem !important;
  }
  .react-international-phone-country-selector-list-item {
    padding: 10px !important;
  }
  .error-message {
    color: #e11d48;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    position: absolute;
    bottom: -1.25rem;
    left: 6px;
  }
  html[dir="rtl"] .error-message {
    left: auto;
    right: 6px;
  }
  .react-international-phone-country-selector-button-flag {
    margin-right: 0 !important;
  }
  .react-international-phone-selected-country-flag {
    font-size: 1.2rem !important;
  }
  .react-international-phone-dial-code {
    color: #737373 !important;
    font-weight: 500 !important;
  }
  html[dir="rtl"] .react-international-phone-dial-code {
    margin-right: 5px !important;
    margin-left: 0 !important;
  }
  .react-international-phone-country-selector-list {
    scrollbar-width: thin !important;
  }
  .react-international-phone-country-selector-list::-webkit-scrollbar {
    width: 6px !important;
  }
  .react-international-phone-country-selector-list::-webkit-scrollbar-thumb {
    background-color: #d4d4d4 !important;
    border-radius: 3px !important;
  }
  @media (max-width: 640px) {
    .react-international-phone-country-selector-button {
      width: 70px !important;
    }
  }
`

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={`peer block w-full border border-neutral-300 bg-transparent ${
          isRTL ? 'pr-6 pl-4' : 'pr-4 pl-6'
        } pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden ${
          isRTL ? 'text-right' : 'text-left'
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute top-1/2 ${
          isRTL ? 'right-6 origin-right' : 'left-6 origin-left'
        } -mt-3 text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950`}
      >
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-neutral-950/0 via-neutral-950/40 to-neutral-950/0" />
    </div>
  )
}

function PhoneInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const { i18n, t } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('ae') // Default to UAE
  const [error, setError] = useState<string | null>(null)
  const id = useId()

  // Add custom styles for react-international-phone
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleElement = document.createElement('style')
      styleElement.textContent = phoneInputStyles
      document.head.appendChild(styleElement)

      return () => {
        document.head.removeChild(styleElement)
      }
    }
  }, [])

  // Get preferred countries based on user's language
  const getPreferredCountries = () => {
    const commonCountries = [
      'ae', // UAE
      'sa', // Saudi Arabia
      'eg', // Egypt
      'jo', // Jordan
      'kw', // Kuwait
      'qa', // Qatar
      'bh', // Bahrain
      'om', // Oman
      'gb', // UK
      'us', // USA
    ]
    return commonCountries as any[]
  }

  // Get placeholder based on selected country and language
  const getPlaceholder = (countryCode: string) => {
    if (isRTL) {
      return 'اكتب رقم الواتساب'
    }

    const placeholders: Record<string, string> = {
      ae: '5XXXXXXXX', // UAE format
      sa: '5XXXXXXXX', // Saudi format
      eg: '10XXXXXXXX', // Egypt format
      jo: '7XXXXXXXX', // Jordan format
      kw: '5XXXXXXX', // Kuwait format
      qa: '3XXXXXXX', // Qatar format
      bh: '3XXXXXXX', // Bahrain format
      om: '9XXXXXXX', // Oman format
    }
    return placeholders[countryCode] || 'XXXXXXXXX'
  }

  // Validate phone number against country-specific rules
  const validatePhoneNumber = (phoneNumber: string, countryCode: string) => {
    if (!phoneNumber) return null

    // Strip the country code and any non-digit characters
    const nationalNumber = phoneNumber
      .replace(/^\+\d+\s/, '')
      .replace(/\D/g, '')

    const validationRules: Record<
      string,
      { pattern: RegExp; message: string }
    > = {
      ae: {
        pattern: /^5\d{8}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم الإمارات من 9 أرقام تبدأ بـ 5'
          : 'UAE numbers must be 9 digits starting with 5',
      },
      sa: {
        pattern: /^5\d{8}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم السعودية من 9 أرقام تبدأ بـ 5'
          : 'Saudi Arabia numbers must be 9 digits starting with 5',
      },
      eg: {
        pattern: /^(10|11|12|15)\d{8}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم مصر من 11 رقمًا تبدأ بـ 10 أو 11 أو 12 أو 15'
          : 'Egypt numbers must be 11 digits starting with 10, 11, 12, or 15',
      },
      jo: {
        pattern: /^7\d{8}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم الأردن من 9 أرقام تبدأ بـ 7'
          : 'Jordan numbers must be 9 digits starting with 7',
      },
      kw: {
        pattern: /^[569]\d{7}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم الكويت من 8 أرقام تبدأ بـ 5 أو 6 أو 9'
          : 'Kuwait numbers must be 8 digits starting with 5, 6, or 9',
      },
      qa: {
        pattern: /^[3456]\d{7}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم قطر من 8 أرقام تبدأ بـ 3 أو 4 أو 5 أو 6'
          : 'Qatar numbers must be 8 digits starting with 3, 4, 5, or 6',
      },
      bh: {
        pattern: /^[3]\d{7}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم البحرين من 8 أرقام تبدأ بـ 3'
          : 'Bahrain numbers must be 8 digits starting with 3',
      },
      om: {
        pattern: /^[9]\d{7}$/,
        message: isRTL
          ? 'يجب أن يتكون رقم عُمان من 8 أرقام تبدأ بـ 9'
          : 'Oman numbers must be 8 digits starting with 9',
      },
    }

    // Get validation rule for the selected country
    const rule = validationRules[countryCode]
    if (!rule) return null // No specific validation for this country

    // Test the phone number against the pattern
    if (!rule.pattern.test(nationalNumber)) {
      return rule.message
    }

    return null // Phone is valid
  }

  const handlePhoneChange = (phone: string, data: any) => {
    setPhone(phone)
    if (data?.country) {
      setCountry(data.country)
      setError(validatePhoneNumber(phone, data.country))
    }
  }

  // When the input loses focus, validate the number
  const handleBlur = () => {
    if (phone) {
      setError(validatePhoneNumber(phone, country))
    }
  }

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <div className="phone-input-wrapper">
        <ReactPhoneInput
          defaultCountry={country}
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handleBlur}
          inputProps={{
            id,
            name: 'phone',
            required: true,
            placeholder: getPlaceholder(country),
            className: `peer block w-full border ${error ? 'border-red-500' : 'border-neutral-300'} bg-transparent py-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden ${
              isRTL ? 'text-right' : 'text-left'
            }`,
          }}
          preferredCountries={getPreferredCountries()}
          style={
            {
              '--react-international-phone-height': '76px',
            } as React.CSSProperties
          }
          showDisabledDialCodeAndPrefix={false}
          hideDropdown={false}
          disableDialCodeAndPrefix={false}
          disableFormatting={false}
          forceDialCode={true}
        />
        <input type="hidden" name="fullPhoneNumber" value={phone} />
        <input type="hidden" name="phoneCountry" value={country} />
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-neutral-950/0 via-neutral-950/40 to-neutral-950/0" />
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [validationError, setValidationError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationError(false)

    // Check if required fields are filled
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const phone = formData.get('fullPhoneNumber') as string

    if (!name || !phone) {
      setValidationError(true)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const data = {
        name,
        company: (formData.get('company') as string) || '',
        phone,
        message: (formData.get('message') as string) || '',
        service: (formData.get('service') as string) || '',
        formType: 'contact',
      }

      console.log('Submitting contact form with data:', data)

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error('Form submission error:', responseData)
        throw new Error(responseData.error || 'Failed to send email')
      }

      console.log('Form submission successful:', responseData)

      // Reset form on success
      formRef.current?.reset()
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('contact.form.title')}
        </h2>
        {validationError && (
          <div className="mt-6 rounded-md bg-yellow-50 p-4">
            <div className="flex items-center gap-x-2">
              <div className="flex-shrink-0">
                {/* Warning icon */}
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-yellow-800">
                {t(
                  'contact.form.validation.requiredFields',
                  'Please fill in all required fields.',
                )}
              </p>
            </div>
          </div>
        )}
        {submitStatus === 'success' && (
          <div className="mt-6 rounded-md bg-green-50 p-4">
            <div className="flex items-center gap-x-2">
              <div className="flex-shrink-0">
                {/* Success icon */}
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-green-800">
                {t('contact.form.successMessage')}
              </p>
            </div>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-6 rounded-md bg-red-50 p-4">
            <div className="flex items-center gap-x-2">
              <div className="flex-shrink-0">
                {/* Error icon */}
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-red-800">
                  {t('contact.form.errorMessage')}
                </p>
                <p className="mt-1 text-sm text-red-700">
                  {t(
                    'contact.form.errorAlternative',
                    'Please try again or contact us via WhatsApp at +966 55 095 9456',
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label={t('contact.form.name')}
            name="name"
            autoComplete="name"
            required
          />
          <TextInput
            label={t('contact.form.company')}
            name="company"
            autoComplete="organization"
          />
          <PhoneInput
            label={t('contact.form.whatsapp', 'WhatsApp Number')}
            name="phone"
            autoComplete="tel"
            required
          />
          <TextInput label={t('contact.form.message')} name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                {t('contact.form.serviceType')}
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label={t('contact.form.serviceOptions.website')}
                  name="service"
                  value="website"
                />
                <RadioInput
                  label={t('contact.form.serviceOptions.ecommerce')}
                  name="service"
                  value="ecommerce"
                />
                <RadioInput
                  label={t('contact.form.serviceOptions.marketing')}
                  name="service"
                  value="marketing"
                />
                <RadioInput
                  label={t('contact.form.serviceOptions.branding')}
                  name="service"
                  value="branding"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="size-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t('contact.form.submittingButton')}
            </span>
          ) : (
            t('contact.form.submitButton')
          )}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        {t('contact.details.title')}
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        {t('contact.details.description')}
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('contact.details.emailUs')}
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          {t('contact.details.emailDescription')}
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            [
              isRTL
                ? 'التواصل'
                : t('contact.details.emailLabels.contact', 'Contact'),
              'contact@aurum-tech.net',
            ],
            [
              isRTL
                ? 'المبيعات'
                : t('contact.details.emailLabels.sales', 'Sales'),
              'sales@aurum-tech.net',
            ],
          ].map(([label, email]) => (
            <div key={email + String(label)}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('contact.details.followUs')}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('contact.pageIntro.eyebrow')}
        title={t('contact.pageIntro.title')}
      >
        <p>{t('contact.pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
