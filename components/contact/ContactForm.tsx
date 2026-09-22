'use client';

import * as React from 'react';
import { Mail, Phone, Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [subject, setSubject] = React.useState('Portfolio Contact');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');

  const recipientEmail = 'puthramannilshibin@gmail.com';

  const buildMailtoUrl = () => {
    const finalSubject = subject.trim() || 'Portfolio Contact';
    const bodyContent = [
      name.trim() ? `From: ${name.trim()}` : '',
      message.trim() ? `\n\n${message.trim()}` : ''
    ].filter(Boolean).join('');

    const params: string[] = [];
    if (finalSubject) params.push(`subject=${encodeURIComponent(finalSubject)}`);
    if (bodyContent) params.push(`body=${encodeURIComponent(bodyContent)}`);

    return `mailto:${recipientEmail}${params.length > 0 ? `?${params.join('&')}` : ''}`;
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject.trim() && !message.trim()) {
      setError('Please provide a subject or message to compose your email.');
      return;
    }

    setError('');
    const mailtoUrl = buildMailtoUrl();
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-6">
      {/* Quick Direct Actions Bar */}
      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Immediate Action:
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="mailto:puthramannilshibin@gmail.com?subject=Portfolio%20Contact"
            aria-label="Send email to Sibin P"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Email</span>
          </a>
          <a
            href="tel:+918590675644"
            aria-label="Call Sibin P"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span>Call Me</span>
          </a>
        </div>
      </div>

      {/* Direct Email Client Launcher Form */}
      <form onSubmit={handleLaunchEmailClient} className="space-y-4 text-left">
        <div>
          <label
            htmlFor="sender-name"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Your Name (Optional)
          </label>
          <input
            id="sender-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Smith"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email-subject"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Subject Line
          </label>
          <input
            id="email-subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (error) setError('');
            }}
            placeholder="Portfolio Contact"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email-message"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Message Body
          </label>
          <textarea
            id="email-message"
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (error) setError('');
            }}
            placeholder="Hi Sibin, I came across your portfolio and wanted to discuss..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
          />
        </div>

        {error && (
          <p className="flex items-center gap-1.5 text-xs text-rose-500">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          aria-label="Send email to Sibin P"
          className="w-full py-3 text-sm font-semibold rounded-xl"
        >
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>Open in Email App</span>
          </span>
        </Button>

        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center font-mono">
          Recipient: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{recipientEmail}</span> &bull; Opens directly in your default mail client
        </div>
      </form>
    </div>
  );
}
