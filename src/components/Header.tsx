"use client";

import { useState } from "react";
import Link from "next/link";
import { translations, localeNames, type Locale } from "@/i18n/translations";

export default function Header({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory-50/80 backdrop-blur-md border-b border-ivory-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">HI</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              <span className="tracking-wide">HARMONIC</span> <span className="text-primary-600 font-normal">insight</span>
            </span>
          </Link>

          {/* Desktop Nav — End-user links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t.nav.products}
            </Link>
            <Link
              href={`/${locale}#features`}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t.nav.solutions}
            </Link>
            <Link
              href={`/${locale}/downloads`}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t.nav.downloads}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              {(["en", "ja", "zh"] as Locale[]).map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`px-2 py-1 rounded ${
                    l === locale
                      ? "bg-primary-100 text-primary-700 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/contact`} className="btn-primary text-sm">
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3">
              <Link
                href={`/${locale}`}
                className="text-sm font-medium text-gray-600 hover:text-primary-600"
              >
                {t.nav.home}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="text-sm font-medium text-gray-600 hover:text-primary-600"
              >
                {t.nav.products}
              </Link>
              <Link
                href={`/${locale}#features`}
                className="text-sm font-medium text-gray-600 hover:text-primary-600"
              >
                {t.nav.solutions}
              </Link>
              <Link
                href={`/${locale}/downloads`}
                className="text-sm font-medium text-gray-600 hover:text-primary-600"
              >
                {t.nav.downloads}
              </Link>
              <div className="flex items-center gap-2 pt-2">
                {(["en", "ja", "zh"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`px-2 py-1 rounded text-sm ${
                      l === locale
                        ? "bg-primary-100 text-primary-700 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary text-sm mt-2"
              >
                {t.nav.getStarted}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
