import { locales, translations, type Locale } from "@/i18n/translations";
import { products, categoryNames, type ProductCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const categoryOrder: ProductCategory[] = ["rpa", "proposal", "research", "content"];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : "en") as Locale;
  const t = translations[locale];

  return (
    <section className="pt-28 pb-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {categoryOrder.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat);
          if (catProducts.length === 0) return null;
          return (
            <div key={cat} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-bold text-primary-700 mb-6 border-b border-ivory-300 pb-2">
                {categoryNames[cat][locale]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} locale={locale} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
