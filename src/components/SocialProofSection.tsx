import { translations, type Locale } from "@/i18n/translations";

export default function SocialProofSection({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const sp = t.socialProof;

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {sp.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {sp.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-14">
          {sp.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {sp.industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
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
                    d={ind.icon}
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-600 text-center font-medium">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
