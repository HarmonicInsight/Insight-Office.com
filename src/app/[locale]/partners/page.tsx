import { locales, type Locale } from "@/i18n/translations";
import { partnerTranslations } from "@/i18n/partner-translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : "en") as Locale;
  const t = partnerTranslations[locale];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary-300 blur-3xl" />
        </div>
        <div className="section-container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="-mt-8 relative z-10 pb-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[t.highlights.investment, t.highlights.discount, t.highlights.products, t.highlights.quota].map(
              (item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl shadow-lg p-6 text-center border border-ivory-200"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 bg-ivory-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t.tiers.title}
            </h2>
            <p className="text-gray-600">{t.tiers.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.tiers.items.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                  i === 1
                    ? "border-primary-500 shadow-lg"
                    : "border-ivory-200"
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {t.tiers.recommended}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {tier.name}
                </h3>
                <p className="text-lg font-semibold text-primary-600 mb-2">
                  {tier.discount}
                </p>
                <p className="text-sm text-gray-500 mb-6">{tier.requirement}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-ivory-200 pt-4 space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{t.commission.renewalHeader}</span>
                    <span className="font-semibold text-gray-900">
                      {tier.renewal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.commission.referralHeader}</span>
                    <span className="font-semibold text-gray-900">
                      {tier.referral}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t.products.title}
            </h2>
            <p className="text-gray-600">{t.products.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {t.products.items.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl border border-ivory-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {product.price}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{t.products.annual}</span>
                  <span className="text-green-600 font-medium">
                    {t.products.freeTrial}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Table */}
      <section className="py-16 bg-ivory-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t.commission.title}
            </h2>
            <p className="text-gray-600">{t.commission.subtitle}</p>
          </div>
          <div className="overflow-x-auto mb-10">
            <table className="w-full bg-white rounded-xl border border-ivory-200 overflow-hidden">
              <thead>
                <tr className="bg-primary-50 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {t.commission.tierHeader}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {t.commission.discountHeader}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {t.commission.marginHeader}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {t.commission.renewalHeader}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {t.commission.referralHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.commission.rows.map((row) => (
                  <tr key={row.tier} className="border-t border-ivory-200">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {row.tier}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.discount}</td>
                    <td className="px-6 py-4 text-gray-700">{row.margin}</td>
                    <td className="px-6 py-4 text-gray-700">{row.renewal}</td>
                    <td className="px-6 py-4 text-gray-700">{row.referral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Revenue simulation */}
          <div className="bg-white rounded-xl border border-ivory-200 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {t.commission.example.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.commission.example.scenarios.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-sm text-gray-500 mb-1">{s.label}</div>
                  <div className="text-2xl font-bold text-primary-600">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.steps.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.steps.items.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < t.steps.items.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-primary-200" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Support */}
      <section className="py-16 bg-ivory-100">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.support.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.support.items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-ivory-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Terms */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {t.terms.title}
          </h2>
          <ul className="space-y-4">
            {t.terms.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-ivory-100 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container">
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-primary-200 mb-8 max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
            <a
              href={`mailto:${t.cta.email}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              {t.cta.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
