import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { products, categoryNames, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";

const categoryOrder: ProductCategory[] = ["rpa", "proposal", "research", "content"];

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

        {categoryOrder.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat);
          if (catProducts.length === 0) return null;
          return (
            <div key={cat} className="mb-14 last:mb-0">
              <h3 className="text-xl font-bold text-primary-700 mb-6 border-b border-ivory-300 pb-2">
                {categoryNames[cat][locale]}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} locale={locale} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center mt-12">
          <Link href={`/${locale}/products`} className="btn-secondary">
            {t.products.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
