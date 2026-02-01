export type Locale = "en" | "ja" | "zh";

export const locales: Locale[] = ["en", "ja", "zh"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
};

type TranslationSet = {
  nav: {
    home: string;
    products: string;
    solutions: string;
    partners: string;
    pricing: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  products: {
    title: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
    features: string;
    keyFeatures: string;
    useCases: string;
    backToProducts: string;
  };
  features: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    noCreditCard: string;
  };
  footer: {
    products: string;
    company: string;
    resources: string;
    legal: string;
    about: string;
    careers: string;
    blog: string;
    docs: string;
    support: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
};

export const translations: Record<Locale, TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      solutions: "Solutions",
      partners: "Partner Program",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Contact Us",
    },
    hero: {
      title: "Built by Consultants, for Consultants — AI Tools for Every Phase of Your Engagement",
      subtitle:
        "Born from real-world experience in accounting systems, customer platforms, and IT consulting — HARMONIC insight delivers purpose-built tools for business surveys, requirements definition quality, proposal pricing simulation, and user education.",
      cta: "Request Partner Consultation",
      ctaSecondary: "View Products",
    },
    products: {
      title: "Solution Lineup",
      subtitle:
        "9 tools covering every consulting phase — from automation and delivery to proposal pricing, business analysis, and content creation",
      viewAll: "View All Solutions",
      learnMore: "Learn More",
      features: "Features",
      keyFeatures: "Key Features",
      useCases: "Client Delivery Scenarios",
      backToProducts: "Back to Solutions",
    },
    features: {
      title: "Why Consultants & SIers Choose HARMONIC insight",
      subtitle:
        "Built from decades of accounting system development and IT consulting experience — tools that solve real problems at every engagement phase",
    },
    cta: {
      title: "Accelerate Your Consulting Engagements with HARMONIC insight",
      subtitle:
        "Purpose-built by consultants who've delivered accounting systems, customer platforms, and enterprise solutions. Join our partner network to transform your delivery.",
      button: "Request Partner Consultation",
      noCreditCard: "No commitment required",
    },
    footer: {
      products: "Products",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      about: "About Us",
      careers: "Careers",
      blog: "Blog",
      docs: "Documentation",
      support: "Support",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "HARMONIC insight Inc. All rights reserved.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      products: "製品",
      solutions: "ソリューション",
      partners: "パートナープログラム",
      pricing: "料金",
      contact: "お問い合わせ",
      getStarted: "お問い合わせ",
    },
    hero: {
      title: "コンサルタントが作った、コンサルタントのためのツール群",
      subtitle:
        "会計パッケージや顧客システムの企画・設計・開発の実績から生まれたHARMONIC insight — 業務調査の効率化、要件定義の品質向上、提案金額シミュレーション、ユーザー教育まで、案件の全フェーズをカバーします。",
      cta: "パートナー相談を申し込む",
      ctaSecondary: "製品を見る",
    },
    products: {
      title: "ソリューションラインナップ",
      subtitle:
        "自動化・デリバリーから提案シミュレーション、業務調査・要件定義、コンテンツ作成まで — コンサルティングの全フェーズをカバーする9ツール",
      viewAll: "すべてのソリューションを見る",
      learnMore: "詳しく見る",
      features: "機能",
      keyFeatures: "主な機能",
      useCases: "クライアント導入シナリオ",
      backToProducts: "ソリューション一覧に戻る",
    },
    features: {
      title: "コンサルタント・SIerがHARMONIC insightを選ぶ理由",
      subtitle:
        "会計システムや顧客システムの企画・設計・開発の豊富な実績から生まれた、案件の全フェーズで使える実践的ツール群",
    },
    cta: {
      title: "HARMONIC insightで貴社の案件デリバリーを加速しませんか",
      subtitle:
        "会計パッケージ、顧客システム、エンタープライズソリューションの開発実績を持つコンサルタントが作ったツール群。パートナーネットワークに参加して、貴社のデリバリーを変革しましょう。",
      button: "パートナー相談を申し込む",
      noCreditCard: "お気軽にご相談ください",
    },
    footer: {
      products: "製品",
      company: "会社情報",
      resources: "リソース",
      legal: "法的情報",
      about: "会社概要",
      careers: "採用情報",
      blog: "ブログ",
      docs: "ドキュメント",
      support: "サポート",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      copyright: "HARMONIC insight Inc. All rights reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品",
      solutions: "解决方案",
      partners: "合作伙伴计划",
      pricing: "价格",
      contact: "联系我们",
      getStarted: "联系我们",
    },
    hero: {
      title: "咨询师打造，为咨询师而生的AI工具套件",
      subtitle:
        "源自会计系统和客户平台的企划、设计、开发实战经验 — HARMONIC insight覆盖业务调研效率化、需求定义质量提升、提案报价模拟到用户教育的全项目周期。",
      cta: "申请合作伙伴咨询",
      ctaSecondary: "查看产品",
    },
    products: {
      title: "解决方案阵容",
      subtitle: "从自动化交付、提案模拟到业务调研、需求定义和内容创作 — 覆盖咨询全阶段的9款工具",
      viewAll: "查看所有解决方案",
      learnMore: "了解更多",
      features: "功能",
      keyFeatures: "核心功能",
      useCases: "客户交付场景",
      backToProducts: "返回解决方案列表",
    },
    features: {
      title: "咨询师和SI企业选择HARMONIC insight的理由",
      subtitle: "源自会计系统和客户系统企划、设计、开发的丰富实战经验，覆盖项目全阶段的实用工具",
    },
    cta: {
      title: "用HARMONIC insight加速贵司的咨询项目交付",
      subtitle:
        "由具有会计系统、客户平台和企业解决方案开发经验的咨询师打造。加入合作伙伴网络，变革贵司的项目交付。",
      button: "申请合作伙伴咨询",
      noCreditCard: "无需承诺",
    },
    footer: {
      products: "产品",
      company: "公司",
      resources: "资源",
      legal: "法律信息",
      about: "关于我们",
      careers: "招聘",
      blog: "博客",
      docs: "文档",
      support: "支持",
      privacy: "隐私政策",
      terms: "服务条款",
      copyright: "HARMONIC insight Inc. 保留所有权利。",
    },
  },
};
