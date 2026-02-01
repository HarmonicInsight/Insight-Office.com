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
      title: "Strengthen Your Clients' DX with AI-Powered Office Tools",
      subtitle:
        "Enhance your SI/consulting proposals with HARMONIC insight's suite — document automation, AI creative tools, and intelligent RPA that deliver measurable ROI to your clients.",
      cta: "Request Partner Consultation",
      ctaSecondary: "View Products",
    },
    products: {
      title: "Solution Lineup",
      subtitle:
        "11 products across office automation, AI creation, RPA, and BI — ready to embed in your client proposals",
      viewAll: "View All Solutions",
      learnMore: "Learn More",
      features: "Features",
      keyFeatures: "Key Features",
      useCases: "Client Delivery Scenarios",
      backToProducts: "Back to Solutions",
    },
    features: {
      title: "Why SIers and Consultants Choose HARMONIC insight",
      subtitle:
        "Proven tools that enhance your delivery capabilities and create recurring revenue opportunities",
    },
    cta: {
      title: "Add HARMONIC insight to Your Solution Portfolio",
      subtitle:
        "Join our partner network and deliver proven Office automation solutions to your clients. Dedicated SI/consultant support included.",
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
      title: "貴社の提案力を強化する、AI搭載オフィス自動化ソリューション",
      subtitle:
        "ドキュメント自動化、AIクリエイティブツール、インテリジェントRPA — クライアントのDX推進に確かなROIをもたらすHARMONIC insightの製品群を、貴社のソリューションに組み込めます。",
      cta: "パートナー相談を申し込む",
      ctaSecondary: "製品を見る",
    },
    products: {
      title: "ソリューションラインナップ",
      subtitle:
        "オフィス自動化、AIクリエーション、RPA、BIを網羅する11製品 — クライアント提案にすぐ組み込み可能",
      viewAll: "すべてのソリューションを見る",
      learnMore: "詳しく見る",
      features: "機能",
      keyFeatures: "主な機能",
      useCases: "クライアント導入シナリオ",
      backToProducts: "ソリューション一覧に戻る",
    },
    features: {
      title: "SIer・コンサルティング企業がHARMONIC insightを選ぶ理由",
      subtitle:
        "貴社のデリバリー力を強化し、継続的な収益機会を生み出す実績あるツール群",
    },
    cta: {
      title: "HARMONIC insightを貴社のソリューションに加えませんか",
      subtitle:
        "パートナーネットワークに参加し、実績あるオフィス自動化ソリューションをクライアントに提供しましょう。SI・コンサル専任サポート付き。",
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
      title: "用AI办公自动化工具增强贵司的客户提案能力",
      subtitle:
        "将HARMONIC insight的文档自动化、AI创意工具和智能RPA融入贵司的SI/咨询方案，为客户数字化转型带来可量化的投资回报。",
      cta: "申请合作伙伴咨询",
      ctaSecondary: "查看产品",
    },
    products: {
      title: "解决方案阵容",
      subtitle: "涵盖办公自动化、AI创作、RPA和BI的11款产品 — 可直接嵌入客户提案",
      viewAll: "查看所有解决方案",
      learnMore: "了解更多",
      features: "功能",
      keyFeatures: "核心功能",
      useCases: "客户交付场景",
      backToProducts: "返回解决方案列表",
    },
    features: {
      title: "SI企业和咨询公司选择HARMONIC insight的理由",
      subtitle: "提升贵司交付能力并创造持续性收入机会的成熟工具",
    },
    cta: {
      title: "将HARMONIC insight加入贵司的解决方案组合",
      subtitle:
        "加入我们的合作伙伴网络，为客户提供成熟的办公自动化解决方案。提供SI/咨询专属支持。",
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
