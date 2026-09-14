'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { legalPaths } from '../lib/routes';
import type { Dictionary, Lang } from '../lib/i18n';
import { site } from '../lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 outline-none transition focus:border-wine focus:ring-4 focus:ring-wine/10';

export default function ContactForm({
  t,
  lang,
  defaultNeed = '',
}: {
  t: Dictionary['contact']['form'];
  lang: Lang;
  defaultNeed?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = { ...Object.fromEntries(new FormData(form).entries()), lang };

    setStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('send failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center">
        <img src="/favicon.svg" alt="" aria-hidden className="h-16 w-16" />
        <h3 className="mt-6 text-2xl font-bold tracking-tight">{t.successTitle}</h3>
        <p className="mt-3 max-w-sm text-muted">{t.successText}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_80px_-40px_rgba(22,18,17,0.35)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.name} htmlFor="name">
          <input id="name" name="name" required autoComplete="name" placeholder={t.namePh} className={fieldClass} />
        </Field>
        <Field label={t.email} htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder={t.emailPh} className={fieldClass} />
        </Field>
        <Field label={t.phone} htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phonePh} className={fieldClass} />
        </Field>
        <Field label={t.residence} htmlFor="residence">
          <input id="residence" name="residence" placeholder={t.residencePh} className={fieldClass} />
        </Field>
        <Field label={t.need} htmlFor="need" className="sm:col-span-2">
          <select id="need" name="need" required defaultValue={defaultNeed} className={`${fieldClass} appearance-none`}>
            <option value="" disabled>{t.needPh}</option>
            {t.needs.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>
        <Field label={t.comments} htmlFor="comments" className="sm:col-span-2">
          <textarea
            id="comments"
            name="comments"
            rows={4}
            placeholder={t.commentsPh}
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-wine px-6 py-4 text-[15px] font-semibold text-cream transition-all hover:bg-wine-deep disabled:opacity-60"
      >
        {status === 'sending' ? t.sending : t.submit}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>

      {status === 'error' && (
        <p className="mt-4 text-center text-sm text-wine" role="alert">
          {t.error} {site.email}.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-muted/80">
        {t.privacy}{' '}
        <Link href={legalPaths.privacy[lang]} className="underline underline-offset-2 hover:text-wine">
          {t.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className = '',
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
