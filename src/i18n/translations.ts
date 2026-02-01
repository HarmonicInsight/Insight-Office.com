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
      getStarted: "Get Started",
    },
    hero: {
      title: "Unlock Business Potential with AI-Powered Office Tools",
      subtitle:
        "From document automation to AI creative tools and intelligent RPA — HARMONIC insight's comprehensive suite empowers every business professional.",
      cta: "Start Free Trial",
      ctaSecondary: "Request Demo",
    },
    products: {
      title: "Our Products",
      subtitle:
        "11 desktop and mobile applications spanning office automation, AI creation, RPA, and business intelligence",
      viewAll: "View All Products",
      learnMore: "Learn More",
      features: "Features",
      keyFeatures: "Key Features",
      useCases: "Use Cases",
      backToProducts: "Back to Products",
    },
    features: {
      title: "Why Choose HARMONIC insight?",
      subtitle:
        "Professional intelligence — a sophisticated yet approachable partner for business professionals",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Start with a free trial and discover how HARMONIC insight's tools can accelerate your workflows.",
      button: "Start Free Trial",
      noCreditCard: "No credit card required",
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
      getStarted: "今すぐ始める",
    },
    hero: {
      title: "AIの力で、すべてのビジネスパーソンの可能性を解き放つ",
      subtitle:
        "ドキュメント自動化からAIクリエイティブツール、インテリジェントRPAまで — HARMONIC insightの包括的なスイートがビジネスを加速します。",
      cta: "無料トライアル開始",
      ctaSecondary: "デモを依頼",
    },
    products: {
      title: "製品ラインナップ",
      subtitle:
        "オフィス自動化、AIクリエーション、RPA、ビジネスインテリジェンスを網羅する11のデスクトップ・モバイルアプリケーション",
      viewAll: "すべての製品を見る",
      learnMore: "詳しく見る",
      features: "機能",
      keyFeatures: "主な機能",
      useCases: "ユースケース",
      backToProducts: "製品一覧に戻る",
    },
    features: {
      title: "HARMONIC insightが選ばれる理由",
      subtitle:
        "洗練されたプロフェッショナルインテリジェンス — ビジネスパーソンに寄り添う信頼のパートナー",
    },
    cta: {
      title: "ビジネスの変革を始めませんか？",
      subtitle:
        "無料トライアルから始めて、HARMONIC insightのツールがワークフローをどう加速させるかをお確かめください。",
      button: "無料トライアル開始",
      noCreditCard: "クレジットカード不要",
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
      getStarted: "立即开始",
    },
    hero: {
      title: "用AI释放每一位商务人士的无限潜能",
      subtitle:
        "从文档自动化到AI创意工具和智能RPA — HARMONIC insight的全面套件为每位商务专业人士赋能。",
      cta: "开始免费试用",
      ctaSecondary: "请求演示",
    },
    products: {
      title: "我们的产品",
      subtitle: "涵盖办公自动化、AI创作、RPA和商业智能的11款桌面和移动应用",
      viewAll: "查看所有产品",
      learnMore: "了解更多",
      features: "功能",
      keyFeatures: "核心功能",
      useCases: "使用场景",
      backToProducts: "返回产品列表",
    },
    features: {
      title: "为什么选择HARMONIC insight？",
      subtitle: "专业智能 — 精致而平易近人的商务专业人士伙伴",
    },
    cta: {
      title: "准备好转型您的业务了吗？",
      subtitle:
        "从免费试用开始，了解HARMONIC insight的工具如何加速您的工作流程。",
      button: "开始免费试用",
      noCreditCard: "无需信用卡",
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
