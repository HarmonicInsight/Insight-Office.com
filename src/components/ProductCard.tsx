import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  const t = translations[locale];

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-300">
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
      >
        <svg
          className="w-7 h-7 text-white"
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

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {product.name[locale]}
      </h3>
      <p className="text-sm font-medium text-primary-600 mb-3">
        {product.tagline[locale]}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {product.description[locale].slice(0, 150)}...
      </p>

      {/* Features preview */}
      <ul className="space-y-2 mb-6">
        {product.features[locale].slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0"
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

      {/* Link */}
      <Link
        href={`/${locale}/products/${product.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
      >
        {t.products.learnMore}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
