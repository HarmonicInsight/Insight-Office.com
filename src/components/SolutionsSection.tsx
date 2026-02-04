import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";

const cardIcons = [
  // Excel/spreadsheet
  "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  // Robot/automation
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  // Knowledge/book
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  // Speed/lightning
  "M13 10V3L4 14h7v7l9-11h-7z",
];

const cardColors = [
  "bg-emerald-50 text-emerald-600",
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-violet-50 text-violet-600",
];

export default function SolutionsSection({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section id="solutions" className="py-20 bg-ivory-100">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.solutions.cards.map((card, i) => (
            <Link
              key={i}
              href={`/${locale}${card.link}`}
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-ivory-200 hover:border-primary-200"
            >
              <div className={`w-12 h-12 rounded-lg ${cardColors[i]} flex items-center justify-center mb-5`}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={cardIcons[i]}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
              <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                {translations[locale].products.learnMore}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
