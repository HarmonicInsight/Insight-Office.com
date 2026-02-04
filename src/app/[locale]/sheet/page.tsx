import Link from "next/link";
import { locales, translations, type Locale } from "@/i18n/translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/* ─── icon helper ─── */
function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const base = className ?? "w-6 h-6";
  switch (name) {
    case "sparkles":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "history":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      );
    case "chat":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "message":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      );
    case "users":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default async function SheetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "en") as Locale;
  const s = translations[locale].sheetLP;

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-ivory-50 to-emerald-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl" />

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Product badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">S</span>
              </div>
              InsightOfficeSheet
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {s.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              {s.heroSubtitle}
            </p>
            <p className="text-sm text-green-600 font-medium mb-10">
              {s.heroTagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/downloads`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {s.heroCta}
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-green-600 text-green-700 font-semibold text-lg hover:bg-green-50 transition-all duration-200"
              >
                {s.heroCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM ═══════ */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {s.problemTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {s.problemSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {s.problems.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section id="features" className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {s.featuresTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {s.featuresSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {s.features.map((f, i) => (
              <div key={i} className="relative rounded-2xl bg-white p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5 text-green-600">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 bg-green-50/50">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {s.howTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {s.howSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {s.howSteps.map((st, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{st.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {s.pricingTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {s.pricingSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{s.freeLabel}</h3>
              <p className="text-sm text-gray-500 mb-4">{s.freeDesc}</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                {s.freePrice}
              </p>
              <ul className="space-y-3 mb-8">
                {s.freeFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/downloads`}
                className="block w-full text-center px-6 py-3 rounded-lg border-2 border-green-600 text-green-700 font-semibold hover:bg-green-50 transition-all"
              >
                {s.downloadCta}
              </Link>
            </div>

            {/* Standard */}
            <div className="rounded-2xl bg-green-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-lg font-bold mb-1">{s.standardLabel}</h3>
              <p className="text-sm text-green-100 mb-4">{s.standardDesc}</p>
              <p className="text-4xl font-bold mb-1">
                {s.standardPrice}
              </p>
              <p className="text-sm text-green-200 mb-6">{s.standardPer}</p>
              <ul className="space-y-3 mb-8">
                {s.standardFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-50">
                    <svg className="w-5 h-5 text-green-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="block w-full text-center px-6 py-3 rounded-lg bg-white text-green-700 font-semibold hover:bg-green-50 transition-all"
              >
                {s.contactCta}
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">{s.taxNote}</p>
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="py-20">
        <div className="section-container">
          <div className="relative rounded-3xl bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative px-8 py-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {s.ctaTitle}
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
                {s.ctaSubtitle}
              </p>
              <Link
                href={`/${locale}/downloads`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-green-700 font-semibold text-lg hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {s.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
