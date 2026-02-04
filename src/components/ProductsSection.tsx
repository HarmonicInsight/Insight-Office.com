import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const flagshipSlugs = ["insight-slide", "insight-office-sheet"];
const otherSlugs = [
  "insight-bot",
  "insight-nocode-analyzer",
  "insight-py",
  "insight-office-doc",
  "interview-insight",
  "insight-movie",
  "insight-image-gen",
];

export default function ProductsSection({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const flagships = flagshipSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);
  const others = otherSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const hooks = [t.products.flagshipSlideHook, t.products.flagshipSheetHook];

  return (
    <section id="products" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Flagship 2-top */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            {t.products.flagshipTitle}
          </h3>
          <p className="text-sm text-gray-500 text-center mb-8">
            {t.products.flagshipSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {flagships.map((product, i) => (
            <div key={product!.slug} className="relative">
              {/* Hook line */}
              <p className="text-sm font-medium text-accent-600 mb-3 italic">
                {hooks[i]}
              </p>
              {/* Large flagship card */}
              <div
                className={`group relative bg-white rounded-2xl border-2 ${
                  i === 0 ? "border-orange-200" : "border-green-200"
                } p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product!.color} flex items-center justify-center flex-shrink-0`}
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
                        d={product!.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {product!.name[locale]}
                    </h4>
                    <p className="text-sm font-medium text-primary-600">
                      {product!.tagline[locale]}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product!.description[locale]}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product!.features[locale].slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
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

                <Link
                  href={`/${locale}/products/${product!.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {t.products.learnMore}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other 7 products */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-8 text-center">
            {t.products.otherProducts}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {others.map((product) => (
              <ProductCard
                key={product!.slug}
                product={product!}
                locale={locale}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/products`} className="btn-secondary">
            {t.products.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
