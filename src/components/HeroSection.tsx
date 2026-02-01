import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";

export default function HeroSection({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}#cta`} className="btn-primary text-lg px-8 py-4">
              {t.hero.cta}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">{t.hero.trustedBy}</p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: t.stats.enterprises },
            { value: "40+", label: t.stats.countries },
            { value: "99.9%", label: t.stats.uptime },
            { value: "24/7", label: t.stats.support },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
