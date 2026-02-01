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
    pricing: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    trustedBy: string;
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
  stats: {
    enterprises: string;
    countries: string;
    uptime: string;
    support: string;
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
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Build Smarter Enterprise Solutions with Insight Office",
      subtitle:
        "Accelerate development with our comprehensive suite of enterprise tools — from AI-powered learning platforms to intelligent automation and cross-platform integrations.",
      cta: "Start Free Trial",
      ctaSecondary: "Request Demo",
      trustedBy: "Trusted by enterprises worldwide",
    },
    products: {
      title: "Our Products",
      subtitle:
        "A comprehensive suite of enterprise tools designed to accelerate your digital transformation",
      viewAll: "View All Products",
      learnMore: "Learn More",
      features: "Features",
      keyFeatures: "Key Features",
      useCases: "Use Cases",
      backToProducts: "Back to Products",
    },
    stats: {
      enterprises: "Enterprises",
      countries: "Countries",
      uptime: "Uptime",
      support: "Support",
    },
    features: {
      title: "Why Choose Insight Office?",
      subtitle:
        "Enterprise-grade tools with the simplicity your team deserves",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Join thousands of enterprises already using Insight Office to build better software, faster.",
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
      copyright: "Insight Office. All rights reserved.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      products: "製品",
      solutions: "ソリューション",
      pricing: "料金",
      contact: "お問い合わせ",
      getStarted: "今すぐ始める",
    },
    hero: {
      title: "Insight Officeで、よりスマートなエンタープライズソリューションを構築",
      subtitle:
        "AI搭載の学習プラットフォームからインテリジェントな自動化、クロスプラットフォーム統合まで — 包括的なエンタープライズツールで開発を加速させます。",
      cta: "無料トライアル開始",
      ctaSecondary: "デモを依頼",
      trustedBy: "世界中の企業に信頼されています",
    },
    products: {
      title: "製品ラインナップ",
      subtitle:
        "デジタルトランスフォーメーションを加速させるために設計された、包括的なエンタープライズツール群",
      viewAll: "すべての製品を見る",
      learnMore: "詳しく見る",
      features: "機能",
      keyFeatures: "主な機能",
      useCases: "ユースケース",
      backToProducts: "製品一覧に戻る",
    },
    stats: {
      enterprises: "導入企業",
      countries: "対応国",
      uptime: "稼働率",
      support: "サポート",
    },
    features: {
      title: "Insight Officeが選ばれる理由",
      subtitle:
        "チームが求めるシンプルさを備えたエンタープライズグレードのツール",
    },
    cta: {
      title: "ビジネスの変革を始めませんか？",
      subtitle:
        "すでに数千の企業がInsight Officeを使用して、より良いソフトウェアをより速く構築しています。",
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
      copyright: "Insight Office. All rights reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品",
      solutions: "解决方案",
      pricing: "价格",
      contact: "联系我们",
      getStarted: "立即开始",
    },
    hero: {
      title: "使用Insight Office构建更智能的企业解决方案",
      subtitle:
        "从AI驱动的学习平台到智能自动化和跨平台集成 — 利用我们全面的企业工具套件加速开发。",
      cta: "开始免费试用",
      ctaSecondary: "请求演示",
      trustedBy: "全球企业的信赖之选",
    },
    products: {
      title: "我们的产品",
      subtitle: "专为加速数字化转型而设计的全面企业工具套件",
      viewAll: "查看所有产品",
      learnMore: "了解更多",
      features: "功能",
      keyFeatures: "核心功能",
      useCases: "使用场景",
      backToProducts: "返回产品列表",
    },
    stats: {
      enterprises: "企业客户",
      countries: "覆盖国家",
      uptime: "运行时间",
      support: "技术支持",
    },
    features: {
      title: "为什么选择Insight Office？",
      subtitle: "具备团队所需简洁性的企业级工具",
    },
    cta: {
      title: "准备好转型您的业务了吗？",
      subtitle:
        "加入数千家已经在使用Insight Office构建更好、更快软件的企业。",
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
      copyright: "Insight Office. 保留所有权利。",
    },
  },
};
