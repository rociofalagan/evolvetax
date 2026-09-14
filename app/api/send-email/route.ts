import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTH = 4000;

// Todo lo que llega del formulario se escapa antes de meterlo en el HTML del email.
function clean(value: unknown): string {
  return String(value ?? '')
    .slice(0, MAX_LENGTH)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name).trim();
    const email = String(body.email ?? '').trim();

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const rows: [string, string][] = [
      ['Nombre', name],
      ['Email', clean(email)],
      ['Teléfono', clean(body.phone) || '—'],
      ['Residencia actual', clean(body.residence) || '—'],
      ['Necesita', clean(body.need) || '—'],
      ['Idioma de la web', body.lang === 'es' ? 'Español' : 'Inglés'],
    ];

    const { data, error } = await resend.emails.send({
      from: 'Web Evolve Tax <noreply@evolvetaxdubai.com>',
      to: ['hello@evolvetaxdubai.com'],
      replyTo: email,
      subject: `Nueva solicitud web: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #161211;">
          <h2 style="color: #6B2C2C;">Nueva solicitud desde la web</h2>
          <div style="background-color: #f7f5f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('')}
            <p><strong>Situación:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${clean(body.comments) || 'Sin comentarios'}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
