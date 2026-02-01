import { translations, type Locale } from "@/i18n/translations";

const features = {
  en: [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "Business Survey Acceleration",
      desc: "Rapidly analyze client materials, extract business processes, and structure stakeholder interviews — cutting weeks off your As-Is analysis phase.",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Requirements Definition Quality",
      desc: "Transform requirements into clear videos and visual walkthroughs. Stakeholder alignment improves dramatically when they can see the To-Be design.",
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Proposal Pricing Simulation",
      desc: "Version-controlled Excel for cost estimation and pricing models. Run multi-scenario simulations and track every iteration for audit compliance.",
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "User Education & Training",
      desc: "Auto-generate training videos and e-learning content from system documentation. Deliver higher-quality user education without the production overhead.",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Born from System Development",
      desc: "Created by consultants with hands-on experience in accounting packages and customer systems — from planning through design to development.",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Consultant Enablement",
      desc: "Not just tools — we provide know-how transfer and enablement support. Think of us as a consultant's consultant for your DX delivery capabilities.",
    },
  ],
  ja: [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "業務調査の高速化",
      desc: "クライアント資料を迅速に分析し、業務プロセスを抽出し、ステークホルダーインタビューを構造化 — As-Is分析フェーズを大幅に短縮します。",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "要件定義の質の向上",
      desc: "要件定義を明確な動画やビジュアルウォークスルーに変換。ステークホルダーがTo-Be設計を「見える化」することで、合意形成が劇的に向上します。",
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "提案金額シミュレーション",
      desc: "バージョン管理付きExcelで見積もり・金額モデルを管理。マルチシナリオのシミュレーションを実行し、すべての変更履歴を監査対応で追跡します。",
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "ユーザー教育・研修",
      desc: "システムドキュメントから研修動画やEラーニングコンテンツを自動生成。制作の手間なく、より高品質なユーザー教育を提供できます。",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "システム開発の現場から生まれたツール",
      desc: "会計パッケージや顧客システムの企画・設計・開発の実務経験を持つコンサルタントが、現場の課題解決のために作りました。",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "コンサルタントのためのイネーブルメント",
      desc: "ツールだけではありません。ノウハウ移転とイネーブルメント支援も提供。いわば「コンサルタントのコンサルタント」として、貴社のDXデリバリー力を強化します。",
    },
  ],
  zh: [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "业务调研加速",
      desc: "快速分析客户资料、提取业务流程、结构化利益相关方访谈 — 大幅缩短现状分析阶段。",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "需求定义质量提升",
      desc: "将需求定义转化为清晰的视频和可视化演示。当利益相关方能看到目标设计时，共识达成效率大幅提升。",
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "提案报价模拟",
      desc: "版本控制Excel管理成本估算和报价模型。运行多场景模拟，审计合规地跟踪每次迭代变更。",
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "用户教育与培训",
      desc: "从系统文档自动生成培训视频和电子学习内容。无需制作成本即可提供更高质量的用户教育。",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "源自系统开发实战",
      desc: "由具有会计系统和客户系统企划、设计、开发实务经验的咨询师为解决现场课题而打造。",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "咨询师赋能",
      desc: "不仅是工具，还提供知识转移和赋能支持。我们是「咨询师的咨询师」，强化贵司的DX交付能力。",
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
