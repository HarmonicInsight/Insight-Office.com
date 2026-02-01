import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection({ locale }: { locale: Locale }) {
  const t = translations[locale];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/products`}
            className="btn-secondary"
          >
            {t.products.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
