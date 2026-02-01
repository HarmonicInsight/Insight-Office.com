import { translations, type Locale } from "@/i18n/translations";

const features = {
  en: [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Lightning Fast Performance",
      desc: "Optimized for enterprise-scale workloads with sub-millisecond response times and intelligent caching.",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Enterprise Security",
      desc: "SOC 2 compliant with end-to-end encryption, SSO integration, and advanced access controls.",
    },
    {
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      title: "Modular Architecture",
      desc: "Pick only what you need. Each product works standalone or integrates seamlessly with others.",
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Cloud Native",
      desc: "Deploy anywhere — AWS, Azure, GCP, or on-premises. Kubernetes-ready with auto-scaling.",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Developer First",
      desc: "Comprehensive APIs, SDKs for every major language, and extensive documentation with examples.",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "World-Class Support",
      desc: "24/7 dedicated support from our engineering team with guaranteed response times.",
    },
  ],
  ja: [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "超高速パフォーマンス",
      desc: "ミリ秒以下の応答時間とインテリジェントキャッシングで、エンタープライズ規模のワークロードに最適化。",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "エンタープライズセキュリティ",
      desc: "エンドツーエンド暗号化、SSO統合、高度なアクセス制御によるSOC 2準拠。",
    },
    {
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      title: "モジュラーアーキテクチャ",
      desc: "必要なものだけを選択。各製品は単体で動作し、他の製品ともシームレスに統合可能。",
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "クラウドネイティブ",
      desc: "AWS、Azure、GCP、オンプレミスなどどこにでもデプロイ可能。自動スケーリング対応のKubernetes対応。",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "開発者ファースト",
      desc: "包括的なAPI、主要言語向けSDK、サンプル付きの充実したドキュメント。",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "ワールドクラスのサポート",
      desc: "エンジニアリングチームによる24時間365日の専任サポートと保証付き応答時間。",
    },
  ],
  zh: [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "极速性能",
      desc: "针对企业级工作负载优化，毫秒级响应时间和智能缓存。",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "企业级安全",
      desc: "符合SOC 2标准，端到端加密、SSO集成和高级访问控制。",
    },
    {
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      title: "模块化架构",
      desc: "只选择您需要的。每个产品可独立运行，也可与其他产品无缝集成。",
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "云原生",
      desc: "随处部署 — AWS、Azure、GCP或本地环境。支持Kubernetes，自动扩展。",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "开发者优先",
      desc: "全面的API、支持所有主流语言的SDK，以及附带示例的丰富文档。",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "世界级支持",
      desc: "工程团队提供全天候专属支持，保证响应时间。",
    },
  ],
};

export default function FeaturesSection({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const featureList = features[locale];

  return (
    <section id="features" className="py-20 bg-ivory-100">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
