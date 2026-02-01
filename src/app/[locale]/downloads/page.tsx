import { locales, translations, type Locale } from "@/i18n/translations";
import { products, categoryNames, type ProductCategory } from "@/data/products";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const categoryOrder: ProductCategory[] = ["rpa", "consulting", "content"];

const GITHUB_DL_BASE =
  "https://github.com/HarmonicInsight/releases/releases/download";

const releaseMap: Record<string, { tag: string; file: string; version: string }> = {
  INBT: { tag: "INBT-v1.0.0", file: "InsightBotRPA_Setup_1.0.0.exe", version: "1.0.0" },
  INCA: { tag: "INCA-v1.0.0", file: "InsightNoCodeAnalyzer-v1.0.0-win-x64.zip", version: "1.0.0" },
  INPY: { tag: "INPY-v1.0.0", file: "InsightPy-v1.0.0-win-x64.zip", version: "1.0.0" },
  HMSH: { tag: "IOSH-v1.0.0", file: "InsightOfficeSheet-v1.0.0-win-x64.zip", version: "1.0.0" },
  INSS: { tag: "INSS-v1.0.0", file: "InsightSlide-v1.0.0-win-x64.zip", version: "1.0.0" },
  IVIN: { tag: "", file: "", version: "" },
  INMV: { tag: "INMV-v1.0.0", file: "InsightMovie-v1.0.0-win-x64.zip", version: "1.0.0" },
  INIG: { tag: "INIG-v1.0.0", file: "InsightImageGen-v1.0.0-win-x64.zip", version: "1.0.0" },
};

export default async function DownloadsPage({
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.downloads.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.downloads.subtitle}
          </p>
        </div>

        {/* Products by category */}
        {categoryOrder.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat);
          if (catProducts.length === 0) return null;
          return (
            <div key={cat} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-bold text-primary-700 mb-6 border-b border-ivory-300 pb-2">
                {categoryNames[cat][locale]}
              </h2>
              <div className="space-y-4">
                {catProducts.map((product) => {
                  const release = releaseMap[product.code];
                  const isAvailable = release && release.tag !== "";
                  const downloadUrl = isAvailable
                    ? `${GITHUB_DL_BASE}/${release.tag}/${release.file}`
                    : undefined;

                  return (
                    <div
                      key={product.slug}
                      className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-xl border transition-colors ${
                        isAvailable
                          ? "bg-white border-ivory-200 hover:border-primary-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                            isAvailable ? product.color : "from-gray-300 to-gray-400"
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <svg
                            className="w-6 h-6 text-white"
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
                        <div>
                          <h3
                            className={`text-lg font-semibold ${
                              isAvailable ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {product.name[locale]}
                          </h3>
                          <p
                            className={`text-sm ${
                              isAvailable ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            {product.tagline[locale]}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                        {isAvailable ? (
                          <>
                            <div className="text-sm text-gray-500">
                              <span className="font-medium text-gray-700">
                                {t.downloads.version}
                              </span>{" "}
                              {release.version}
                            </div>
                            <a
                              href={downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-500 text-white font-medium text-sm hover:bg-primary-600 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                              {t.downloads.download}
                            </a>
                          </>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-200 text-gray-400 font-medium text-sm cursor-not-allowed">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {t.downloads.comingSoon}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* System Requirements & Notes */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-ivory-100 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t.downloads.systemReq}
            </h3>
            <ul className="space-y-2">
              {t.downloads.systemReqItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-ivory-100 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.downloads.notes}
            </h3>
            <ul className="space-y-2">
              {t.downloads.notesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
