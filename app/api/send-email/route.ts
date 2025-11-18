import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, comments } = body;

    // Validación básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with Resend...');

    const { data, error } = await resend.emails.send({
      from: 'New Contact <noreply@evolvetaxdubai.com>',
      to: ['hello@evolvetaxdubai.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B2C2C;">New Contact Form Submission</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Comments:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${comments || 'No comments provided'}</p>
          </div>

          <p style="color: #666; font-size: 12px;">
            This email was sent from your EvolveTax contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('✅ Email sent successfully! Email ID:', data?.id);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
