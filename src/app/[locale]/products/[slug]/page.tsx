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
