'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  coinName: z.string().min(1),
  blockchain: z.string().min(1),
  meetingDate: z.date(),
})

export async function submitConsultationForm(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  const { name, email, coinName, blockchain, meetingDate } = result.data

  try {
    // Send email to the user
    await resend.emails.send({
      from: 'CryptoConsult <bongbang0101@yourcryptocompany.com>',
      to: email,
      subject: 'Your Consultation Request',
      html: `
        <h1>Thank you for your consultation request, ${name}!</h1>
        <p>We have received your request for a consultation about ${coinName} on the ${blockchain} blockchain.</p>
        <p>Your meeting is scheduled for: ${meetingDate.toLocaleString()}</p>
        <p>We will be in touch shortly to confirm the details of your consultation.</p>
        <p>Best regards,<br>The CryptoConsult Team</p>
      `
    })

    // Send email to the admin
    await resend.emails.send({
      from: 'CryptoConsult <noreply@yourcryptocompany.com>',
      to: 'bongbang0101@gmail.com',
      subject: 'New Consultation Request',
      html: `
        <h1>New Consultation Request</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Coin Name: ${coinName}</p>
        <p>Blockchain: ${blockchain}</p>
        <p>Meeting Date: ${meetingDate.toLocaleString()}</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}

