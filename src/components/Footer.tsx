import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { products } from "@/data/products";

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.products}</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {product.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.about}
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.careers}
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.blog}
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.docs}
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.support}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.privacy}
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">
                  {t.footer.terms}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center">
              <span className="text-white font-bold text-xs">IO</span>
            </div>
            <span className="font-semibold text-white">InsightOffice</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
