import { translations, type Locale } from "@/i18n/translations";

export default function OutcomesSection({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section id="outcomes" className="py-20 bg-ivory-100">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.outcomes.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.outcomes.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {t.outcomes.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 text-center border border-ivory-200"
            >
              <p className="text-sm font-medium text-gray-500 mb-3">
                {card.title}
              </p>
              <p className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                {card.metric}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 text-center leading-relaxed border-t border-ivory-200 pt-6">
            {t.outcomes.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
