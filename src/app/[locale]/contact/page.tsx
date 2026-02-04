"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { locales, translations, type Locale } from "@/i18n/translations";

export default function ContactPage() {
  const params = useParams();
  const rawLocale = params.locale as string;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : "en") as Locale;
  const t = translations[locale];
  const c = t.contact;

  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState(c.subjectOptions[0]);

  if (submitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="section-container max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{c.successTitle}</h1>
          <p className="text-gray-600 mb-8">{c.successMessage}</p>
          <Link href={`/${locale}`} className="btn-primary">
            {t.nav.home}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="section-container max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {c.title}
        </h1>
        <p className="text-gray-600 mb-10">{c.subtitle}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = data.get("name") as string;
            const email = data.get("email") as string;
            const company = data.get("company") as string;
            const message = data.get("message") as string;

            // Build mailto with form data as fallback
            const mailSubject = encodeURIComponent(`[${subject}] from ${name}`);
            const mailBody = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nSubject: ${subject}\n\n${message}`
            );
            window.location.href = `mailto:info@h-insight.jp?subject=${mailSubject}&body=${mailBody}`;
            setSubmitted(true);
          }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {c.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={c.namePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {c.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={c.emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              {c.companyLabel}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder={c.companyPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              {c.subjectLabel}
            </label>
            <select
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
            >
              {c.subjectOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {c.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={c.messagePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-vertical"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-lg py-4">
            {c.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
