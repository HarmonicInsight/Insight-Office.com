/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { locales, translations, type Locale } from "@/i18n/translations";
import { products } from "@/data/products";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const product of products) {
      params.push({ locale, slug: product.slug });
    }
  }
  return params;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : "en") as Locale;
  const t = translations[locale];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <div className="section-container">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href={`/${locale}/products`} className="text-primary-600 mt-4 inline-block">
            {t.products.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="section-container">
        {/* Back link */}
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t.products.backToProducts}
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={product.icon}
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {product.name[locale]}
            </h1>
            <p className="text-lg text-primary-600 font-medium mb-6">
              {product.tagline[locale]}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description[locale]}
            </p>
            <div className="mt-8 flex gap-4">
              <button className="btn-primary">
                {t.hero.cta}
              </button>
              <button className="btn-secondary">
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Product screenshot */}
          <div className={`rounded-2xl bg-gradient-to-br ${product.color} p-1`}>
            <div className="bg-white rounded-xl p-4">
              <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={`/images/products/${product.slug}.png`}
                  alt={product.name[locale]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t.products.keyFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features[locale].map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-6"
              >
                <svg
                  className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t.products.useCases}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases[locale].map((useCase) => (
              <div
                key={useCase}
                className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16" id="pricing">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-gray-600 mb-8">{t.pricing.subtitle}</p>

          {/* Software License Section */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {t.pricing.licenseSectionTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {/* Trial */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
              <h4 className="text-base font-bold text-gray-900 mb-2">{t.pricing.trialLabel}</h4>
              <p className="text-3xl font-bold text-primary-700 mb-1">{t.pricing.trialPrice}</p>
              <p className="text-gray-600 text-sm mb-4">{t.pricing.trialDesc}</p>
              <ul className="space-y-2 mb-6">
                {t.pricing.trialFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={`/${locale}/downloads`} className="block text-center btn-primary w-full text-sm">
                {t.pricing.startTrial}
              </a>
            </div>
            {/* Standard */}
            <div className="border-2 border-primary-300 rounded-xl p-6 relative shadow-md">
              <h4 className="text-base font-bold text-gray-900 mb-2">{t.pricing.standardLabel}</h4>
              <p className="text-3xl font-bold text-primary-700 mb-0">
                {t.pricing.standardPrice}
              </p>
              <p className="text-xs text-gray-500 mb-4">{t.pricing.standardUnit}</p>
              <p className="text-gray-600 text-sm mb-4">{t.pricing.standardDesc}</p>
              <ul className="space-y-2 mb-6">
                {t.pricing.standardFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={`/${locale}/contact`} className="block text-center btn-primary w-full text-sm">
                {t.pricing.contactSales}
              </a>
            </div>
            {/* Team 5 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all relative">
              <span className="absolute -top-3 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {t.pricing.team5Discount}
              </span>
              <h4 className="text-base font-bold text-gray-900 mb-2">{t.pricing.team5Label}</h4>
              <p className="text-3xl font-bold text-primary-700 mb-0">
                {t.pricing.team5Price}
              </p>
              <p className="text-xs text-gray-500 mb-4">{t.pricing.team5Unit}</p>
              <p className="text-gray-600 text-sm mb-6">{t.pricing.team5Desc}</p>
              <a href={`/${locale}/contact`} className="block text-center btn-secondary w-full text-sm">
                {t.pricing.contactSales}
              </a>
            </div>
            {/* Team 10 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all relative">
              <span className="absolute -top-3 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {t.pricing.team10Discount}
              </span>
              <h4 className="text-base font-bold text-gray-900 mb-2">{t.pricing.team10Label}</h4>
              <p className="text-3xl font-bold text-primary-700 mb-0">
                {t.pricing.team10Price}
              </p>
              <p className="text-xs text-gray-500 mb-4">{t.pricing.team10Unit}</p>
              <p className="text-gray-600 text-sm mb-6">{t.pricing.team10Desc}</p>
              <a href={`/${locale}/contact`} className="block text-center btn-secondary w-full text-sm">
                {t.pricing.contactSales}
              </a>
            </div>
          </div>

          {/* AI Ticket Section */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            {t.pricing.aiSectionTitle}
          </h3>
          <p className="text-gray-500 text-sm mb-5">{t.pricing.aiSectionSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-5 mb-4">
            {t.pricing.aiTickets.map((ticket, i) => (
              <div
                key={ticket.name}
                className={`rounded-xl p-6 transition-all ${
                  i === 1
                    ? "border-2 border-accent-300 shadow-md relative"
                    : "border border-gray-200 hover:border-accent-200 hover:shadow-md"
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-3 left-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.pricing.recommended}
                  </span>
                )}
                <h4 className="text-base font-bold text-gray-900 mb-1">{ticket.name}</h4>
                <p className="text-3xl font-bold text-primary-700 mb-0">{ticket.price}</p>
                <p className="text-xs text-gray-500 mb-1">{ticket.queries}{t.pricing.perQuery}</p>
                <p className="text-sm font-medium text-accent-600 mb-3">
                  1{t.pricing.perQuery} {ticket.perQuery}
                </p>
                <p className="text-gray-600 text-sm mb-5">{ticket.desc}</p>
                <a href={`/${locale}/contact`} className="block text-center btn-secondary w-full text-sm">
                  {t.pricing.contactSales}
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mb-1">{t.pricing.aiModelNote}</p>
          <p className="text-xs text-gray-400">{t.pricing.taxNote}</p>
        </div>

        {/* CTA */}
        <div className={`rounded-2xl bg-gradient-to-br ${product.color} p-12 text-center`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg">
            {t.cta.button}
          </button>
          <p className="mt-3 text-sm text-white/60">{t.cta.noCreditCard}</p>
        </div>
      </div>
    </div>
  );
}
