import { translations, type Locale } from "@/i18n/translations";

export default function CTASection({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section id="cta" className="py-20">
      <div className="section-container">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              {t.cta.subtitle}
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary-700 font-semibold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t.cta.button}
            </button>
            <p className="mt-4 text-sm text-primary-200">
              {t.cta.noCreditCard}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
