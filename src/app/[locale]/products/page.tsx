import { locales, translations, type Locale } from "@/i18n/translations";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
