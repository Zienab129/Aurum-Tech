import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // سجل لتصحيح الأخطاء
    console.log('Received request to /api/send')

    // تحويل البيانات من النموذج
    const data = await request.json()

    // سجل البيانات المستلمة
    console.log('Request data:', data)

    const { name, phone, subject, message, company, service, formType } = data

    // التحقق من وجود البيانات المطلوبة
    if (!name) {
      console.log('Missing required field: name')
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!phone) {
      console.log('Missing required field: phone')
      return NextResponse.json(
        { error: 'WhatsApp number is required' },
        { status: 400 },
      )
    }

    // استخدام نفس البريد الإلكتروني لجميع النماذج
    const toEmail = 'contact@aurum-tech.net'

    console.log('Sending email to:', toEmail)

    // تنسيق عنوان البريد
    const emailSubject = subject
      ? `${formType === 'support' ? 'Support Request' : 'Contact Form'}: ${subject}`
      : `New ${formType === 'support' ? 'Support' : 'Contact'} Form Submission from ${name}`

    console.log('Email subject:', emailSubject)

    // إعداد بيانات الرسالة
    const emailData = {
      from: 'Aurum Tech <onboarding@resend.dev>',
      to: [toEmail],
      subject: emailSubject,
      react: EmailTemplate({
        name,
        email: 'Not provided',
        company,
        phone,
        message,
        service,
        subject,
        formType,
      }),
    }

    try {
      // محاولة إرسال البريد
      console.log('Attempting to send email with data:', {
        to: toEmail,
        subject: emailSubject,
        from: emailData.from,
      })

      const { data, error } = await resend.emails.send(emailData)

      if (error) {
        console.error('Resend API error details:', error)
        return NextResponse.json({ error: error.message }, { status: 400 })
      }

      console.log('Email sent successfully:', data)
      return NextResponse.json({ success: true, data })
    } catch (emailError) {
      console.error('Email sending error (catch block):', emailError)
      return NextResponse.json(
        { error: 'Failed to send email - please try contacting us directly.' },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
