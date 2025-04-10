'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { useTranslation } from '@/localization/client'
import { useState, useEffect, useId, useRef } from 'react'
import { z } from 'zod'
import { PhoneInput as ReactPhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

function ContactCard({
  title,
  description,
  icon,
  actionText,
  actionLink,
  email,
}: {
  title: string
  description: string
  icon: React.ReactNode
  actionText: string
  actionLink: string
  email?: string
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-neutral-950">
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      {email && (
        <p className="mt-2 text-sm font-medium text-blue-600">{email}</p>
      )}
      <div className="mt-6 flex grow items-end">
        <a
          href={actionLink}
          target={actionLink.startsWith('http') ? '_blank' : undefined}
          rel={
            actionLink.startsWith('http') ? 'noopener noreferrer' : undefined
          }
          className="inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-800"
        >
          {actionText}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  )
}

// styles for phone input (same as in contact page)
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

// Phone input component similar to contact page
function PhoneInput({ label }: { label: string }) {
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
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-neutral-900"
      >
        {label} <span className="text-red-500">*</span>
      </label>
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
            className: `block w-full rounded-md border-0 bg-neutral-50 px-4 py-3 text-neutral-900 shadow-sm ring-1 ${
              error ? 'ring-red-500' : 'ring-neutral-200'
            } ring-inset focus:ring-2 focus:ring-blue-600 focus:ring-inset rtl:text-right`,
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
    </div>
  )
}

function SupportForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  // Agregado para debugging - botón directo
  const submitForm = async () => {
    console.log('Manual form submission triggered')
    setIsSubmitting(true)
    setSubmitError('')
    setErrors({})

    try {
      // Obtener el número de teléfono del input oculto
      const fullPhoneNumber = document.querySelector<HTMLInputElement>(
        'input[name="fullPhoneNumber"]',
      )?.value
      const phoneCountry = document.querySelector<HTMLInputElement>(
        'input[name="phoneCountry"]',
      )?.value

      // Validar datos requeridos
      if (
        !formData.name ||
        !fullPhoneNumber ||
        !formData.subject ||
        !formData.message
      ) {
        const validationErrors: { [key: string]: string } = {}
        if (!formData.name)
          validationErrors.name = t('support.form.validation.nameRequired')
        if (!fullPhoneNumber)
          validationErrors.phone = t('support.form.validation.phoneRequired')
        if (!formData.subject)
          validationErrors.subject = t(
            'support.form.validation.subjectRequired',
          )
        if (!formData.message)
          validationErrors.message = t(
            'support.form.validation.messageRequired',
          )

        setErrors(validationErrors)
        setIsSubmitting(false)
        return
      }

      const requestData = {
        name: formData.name,
        phone: fullPhoneNumber,
        phoneCountry,
        subject: formData.subject,
        message: formData.message,
        formType: 'support',
      }

      console.log('Sending request data:', requestData)

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      console.log('Response received:', response.status)

      let responseData
      try {
        responseData = await response.json()
        console.log('Response data:', responseData)
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError)
        throw new Error('Failed to parse server response')
      }

      if (response.ok) {
        console.log('Form submission successful')
        resetForm()
        setSubmitSuccess(true)
      } else {
        const errorMessage = responseData?.error || 'Failed to send message'
        console.error('Server error response details:', {
          status: response.status,
          statusText: response.statusText,
          data: responseData,
        })
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(
        error instanceof Error ? error.message : 'An unknown error occurred',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const formSchema = z.object({
    name: z.string().min(1, t('support.form.validation.nameRequired')),
    phone: z
      .string()
      .min(10, t('support.form.validation.phoneRequired'))
      .nonempty(t('support.form.validation.phoneRequired')),
    subject: z.string().min(1, t('support.form.validation.subjectRequired')),
    message: z.string().min(1, t('support.form.validation.messageRequired')),
  })

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = z.object({
        [name]: formSchema.shape[name as keyof typeof formSchema.shape],
      })
      fieldSchema.parse({ [name]: value })

      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message
        setErrors((prev) => ({ ...prev, [name]: fieldError }))
      }
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    const fieldName = name === 'whatsapp' ? 'phone' : name

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))

    if (value.trim()) {
      validateField(fieldName, value)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      subject: '',
      message: '',
    })
    setErrors({})
    setSubmitError('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submit event triggered')
    submitForm()
  }

  if (submitSuccess) {
    return (
      <div className="mt-10 mb-32 w-full rounded-xl border border-green-100 bg-green-50 p-10 text-center">
        <h3 className="mb-2 text-xl font-semibold text-green-800">
          {t('support.form.successTitle')}
        </h3>
        <p className="text-green-700">{t('support.form.successMessage')}</p>
        <Button
          className="mt-6"
          onClick={() => {
            resetForm()
            setSubmitSuccess(false)
          }}
        >
          {t('support.form.sendAnother')}
        </Button>
      </div>
    )
  }

  return (
    <form
      className="mt-10 mb-32 w-full"
      onSubmit={handleSubmit}
      ref={formRef}
      noValidate
    >
      <div className="relative w-full rounded-xl border border-neutral-100 bg-white px-6 py-10 shadow-xl shadow-neutral-800/5">
        <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-b from-neutral-50 to-white" />
        <div className="space-y-8">
          {submitError && (
            <div className="rounded-md border border-red-100 bg-red-50 p-3 text-sm text-red-700">
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium">{submitError}</p>
                  <p className="mt-1">
                    {t(
                      'support.form.errorAlternative',
                      'Please try again or contact us via WhatsApp at +966 55 095 9456',
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              {t('support.form.name')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`block w-full rounded-md border-0 bg-neutral-50 px-4 py-3 text-neutral-900 shadow-sm ring-1 ${
                errors.name ? 'ring-red-500' : 'ring-neutral-200'
              } ring-inset focus:ring-2 focus:ring-blue-600 focus:ring-inset`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <PhoneInput label={t('support.form.whatsapp')} />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              {t('support.form.subject')}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`block w-full rounded-md border-0 bg-neutral-50 px-4 py-3 text-neutral-900 shadow-sm ring-1 ${
                errors.subject ? 'ring-red-500' : 'ring-neutral-200'
              } ring-inset focus:ring-2 focus:ring-blue-600 focus:ring-inset`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              {t('support.form.message')}{' '}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`block w-full rounded-md border-0 bg-neutral-50 px-4 py-3 text-neutral-900 shadow-sm ring-1 ${
                errors.message ? 'ring-red-500' : 'ring-neutral-200'
              } ring-inset focus:ring-2 focus:ring-blue-600 focus:ring-inset`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className="w-full justify-center rounded-xl px-8 py-3.5 text-base font-semibold transition-all hover:scale-[1.02]"
              disabled={isSubmitting}
            >
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
                  {t('support.form.submittingButton') || 'Sending...'}
                </span>
              ) : (
                t('support.form.submitButton')
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default function SupportPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('support.pageIntro.eyebrow')}
        title={t('support.pageIntro.title')}
      >
        <p>{t('support.pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ContactCard
              title={t('support.cards.whatsapp.title')}
              description={t('support.cards.whatsapp.description')}
              icon={<WhatsAppIcon />}
              actionText={t('support.cards.whatsapp.actionText')}
              actionLink="https://wa.me/966550959456"
            />
            <ContactCard
              title={t('support.cards.email.title')}
              description={t('support.cards.email.description')}
              icon={<EmailIcon />}
              actionText={t('support.cards.email.actionText')}
              actionLink="mailto:support@aurum-tech.net"
              email="support@aurum-tech.net"
            />
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              {t('support.requestForm.title')}
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              {t('support.requestForm.description')}
            </p>
            <SupportForm />
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
