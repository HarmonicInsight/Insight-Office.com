import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";

export default function RPAAuthoritySection({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section id="rpa-authority" className="py-20">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.rpaAuthority.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.rpaAuthority.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* UiPath Migration */}
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 border border-blue-100">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.rpaAuthority.uipathTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.rpaAuthority.uipathDesc}
            </p>
          </div>

          {/* BPO + AI */}
          <div className="relative rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100/50 p-8 border border-violet-100">
            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.rpaAuthority.bpoTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.rpaAuthority.bpoDesc}
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/contact`}
            className="btn-secondary"
          >
            {t.rpaAuthority.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
