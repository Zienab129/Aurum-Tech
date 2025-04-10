import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string // البريد الإلكتروني قد يكون "Not provided"
  company?: string
  phone?: string
  message?: string
  service?: string
  subject?: string
  formType?: 'contact' | 'support'
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  phone,
  message,
  service,
  subject,
  formType = 'contact',
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1 style={{ color: '#000', marginBottom: '20px' }}>
      New{' '}
      {formType === 'support' ? 'Support Request' : 'Contact Form Submission'}
    </h1>
    <div style={{ marginBottom: '15px' }}>
      <strong>Name:</strong> {name}
    </div>
    <div style={{ marginBottom: '15px' }}>
      <strong>Email:</strong> {email}
    </div>
    {company && (
      <div style={{ marginBottom: '15px' }}>
        <strong>Company:</strong> {company}
      </div>
    )}
    {phone && (
      <div style={{ marginBottom: '15px' }}>
        <strong>Phone:</strong> {phone}
      </div>
    )}
    {subject && (
      <div style={{ marginBottom: '15px' }}>
        <strong>Subject:</strong> {subject}
      </div>
    )}
    {service && (
      <div style={{ marginBottom: '15px' }}>
        <strong>Service Requested:</strong> {service}
      </div>
    )}
    {message && (
      <div style={{ marginBottom: '15px' }}>
        <strong>Message:</strong>
        <br />
        <div style={{ whiteSpace: 'pre-wrap' }}>{message}</div>
      </div>
    )}
    <div style={{ marginTop: '30px', fontSize: '12px', color: '#666' }}>
      Sent from {formType === 'support' ? 'Support Form' : 'Contact Form'} on
      aurum-tech.net
    </div>
  </div>
)
