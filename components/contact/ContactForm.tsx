'use client';

import * as React from 'react';
import { Send, AlertCircle, Copy, Check } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';
import { contact } from '@/lib/site';
import { copyText } from '@/lib/clipboard';
import { cn } from '@/lib/utils';

const LIMITS = { name: 80, subject: 120, messageMin: 10, messageMax: 1500 };

type Field = 'name' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;
  if (!subject) errors.subject = 'Please add a subject line.';
  else if (subject.length > LIMITS.subject) errors.subject = `Please keep the subject under ${LIMITS.subject} characters.`;
  if (!message) errors.message = 'Please write a message.';
  else if (message.length < LIMITS.messageMin) errors.message = `Please write at least ${LIMITS.messageMin} characters.`;
  else if (message.length > LIMITS.messageMax) errors.message = `Please keep the message under ${LIMITS.messageMax} characters so it fits in an email link.`;
  return errors;
}

/** Plain-text body; RFC 6068 line breaks are CRLF. */
function buildBody(name: string, message: string) {
  return [name ? `From: ${name}` : '', message].filter(Boolean).join('\r\n\r\n');
}

function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputStyles =
  'w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors duration-200 focus:border-accent-from focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2';

/**
 * Composes an email in the visitor's own mail app via a mailto: link.
 * Nothing is sent by this site, so the UI never claims a message was sent.
 */
export function ContactForm() {
  const [values, setValues] = React.useState<Record<Field, string>>({
    name: '',
    subject: contact.emailSubject,
    message: ''
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [launched, setLaunched] = React.useState(false);
  const [copied, setCopied] = React.useState<'idle' | 'copied' | 'error'>('idle');
  const nameRef = React.useRef<HTMLInputElement>(null);
  const subjectRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  const update = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    setLaunched(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (['name', 'subject', 'message'] as const).find((field) => nextErrors[field]);
    if (firstInvalid) {
      const refs = { name: nameRef, subject: subjectRef, message: messageRef };
      refs[firstInvalid].current?.focus();
      setLaunched(false);
      return;
    }

    const body = buildBody(values.name.trim(), values.message.trim());
    window.location.href = buildMailtoUrl(values.subject.trim(), body);
    setLaunched(true);
  };

  const handleCopyMessage = async () => {
    const text = `To: ${contact.email}\r\nSubject: ${values.subject.trim()}\r\n\r\n${buildBody(values.name.trim(), values.message.trim())}`;
    setCopied((await copyText(text)) ? 'copied' : 'error');
    setTimeout(() => setCopied('idle'), 2500);
  };

  const describedBy = (field: Field, hint?: string) =>
    [hint, errors[field] ? `${field}-error` : undefined].filter(Boolean).join(' ') || undefined;

  const fieldError = (field: Field) =>
    errors[field] && (
      <p id={`${field}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
        <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
        <span>{errors[field]}</span>
      </p>
    );

  const messageLength = values.message.trim().length;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="sender-name" className="mb-1.5 block text-sm font-medium text-heading">
          Your name <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          ref={nameRef}
          id="sender-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          placeholder="e.g. Alex Smith"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy('name')}
          className={cn(inputStyles, errors.name ? 'border-danger' : 'border-line')}
        />
        {fieldError('name')}
      </div>

      <div>
        <label htmlFor="email-subject" className="mb-1.5 block text-sm font-medium text-heading">
          Subject
        </label>
        <input
          ref={subjectRef}
          id="email-subject"
          type="text"
          required
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={describedBy('subject')}
          className={cn(inputStyles, errors.subject ? 'border-danger' : 'border-line')}
        />
        {fieldError('subject')}
      </div>

      <div>
        <label htmlFor="email-message" className="mb-1.5 block text-sm font-medium text-heading">
          Message
        </label>
        <textarea
          ref={messageRef}
          id="email-message"
          rows={5}
          required
          value={values.message}
          onChange={update('message')}
          placeholder="Hi Sibin, I came across your portfolio and wanted to discuss..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message', 'message-hint')}
          className={cn(inputStyles, 'resize-y', errors.message ? 'border-danger' : 'border-line')}
        />
        <p id="message-hint" className="mt-1.5 text-right font-mono text-[11px] text-muted">
          {messageLength}/{LIMITS.messageMax}
        </p>
        {fieldError('message')}
      </div>

      <GradientButton type="submit" variant="primary" className="w-full" innerClassName="py-3">
        <Send className="size-4" aria-hidden="true" />
        <span>Open in Email App</span>
      </GradientButton>

      <p className="text-center text-xs text-muted">
        Opens your default mail app addressed to <span className="font-medium text-text">{contact.email}</span>. Nothing is sent until you send it there.
      </p>

      <div role="status" aria-live="polite">
        {launched && (
          <div className="rounded-lg border border-line bg-surface-2 p-4 text-sm text-text">
            <p>
              Your email app should now be open with this message ready to send. If nothing opened, copy the message and email{' '}
              <a href={`mailto:${contact.email}`} className="font-medium text-heading underline underline-offset-4">
                {contact.email}
              </a>{' '}
              directly.
            </p>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-heading transition-colors duration-200 hover:bg-surface"
            >
              {copied === 'copied' ? (
                <Check className="size-3.5 text-success" aria-hidden="true" />
              ) : (
                <Copy className="size-3.5" aria-hidden="true" />
              )}
              <span>
                {copied === 'copied' ? 'Message copied' : copied === 'error' ? 'Copy failed, please select the text manually' : 'Copy message'}
              </span>
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
