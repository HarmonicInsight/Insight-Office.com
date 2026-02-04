export type Locale = "en" | "ja" | "zh";

export const locales: Locale[] = ["en", "ja", "zh"];
export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
};

type SolutionCard = {
  title: string;
  description: string;
  link: string;
};

type OutcomeCard = {
  title: string;
  metric: string;
  description: string;
};

type TranslationSet = {
  nav: {
    home: string;
    products: string;
    solutions: string;
    partners: string;
    pricing: string;
    downloads: string;
    contact: string;
    getStarted: string;
  };
  downloads: {
    title: string;
    subtitle: string;
    version: string;
    releaseDate: string;
    download: string;
    comingSoon: string;
    systemReq: string;
    systemReqItems: string[];
    notes: string;
    notesItems: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  solutions: {
    title: string;
    subtitle: string;
    cards: SolutionCard[];
  };
  rpaAuthority: {
    title: string;
    subtitle: string;
    uipathTitle: string;
    uipathDesc: string;
    bpoTitle: string;
    bpoDesc: string;
    cta: string;
  };
  outcomes: {
    title: string;
    subtitle: string;
    disclaimer: string;
    cards: OutcomeCard[];
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
  pricing: {
    title: string;
    subtitle: string;
    perMonth: string;
    perYear: string;
    trialLabel: string;
    trialDesc: string;
    standardLabel: string;
    standardPrice: string;
    standardDesc: string;
    enterpriseLabel: string;
    enterpriseDesc: string;
    contactSales: string;
    startTrial: string;
    taxNote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    subjectLabel: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successMessage: string;
  };
  socialProof: {
    title: string;
    subtitle: string;
    industries: { name: string; icon: string }[];
    stats: { value: string; label: string }[];
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
      partners: "About",
      pricing: "Pricing",
      downloads: "Downloads",
      contact: "Contact",
      getStarted: "Get in Touch",
    },
    downloads: {
      title: "Downloads",
      subtitle: "Download the latest versions of HARMONIC insight products",
      version: "Version",
      releaseDate: "Release Date",
      download: "Download",
      comingSoon: "Coming Soon",
      systemReq: "System Requirements",
      systemReqItems: [
        "Windows 10 / 11 (64-bit)",
        "8 GB RAM or more",
        "2 GB available disk space",
        "Internet connection required for activation",
      ],
      notes: "Notes",
      notesItems: [
        "A license key is required after the trial period. Contact me directly for licensing.",
        "Please review the release notes before updating from a previous version.",
      ],
    },
    hero: {
      title: "Ship Projects Faster with AI-Powered Consulting Tools",
      subtitle:
        "Scattered Excel files. Ballooning RPA costs. Knowledge walking out the door. I built 9 tools over 28 years of hands-on consulting to fix exactly these problems.",
      cta: "Let's Talk",
      ctaSecondary: "Explore Products",
    },
    solutions: {
      title: "What's Slowing You Down?",
      subtitle: "Pick your biggest pain point — we probably built a tool for it",
      cards: [
        {
          title: "Excel chaos across the organization",
          description: "Version control, AI-assisted analysis, and structured management for Excel-heavy operations — without forcing anyone to change how they work.",
          link: "/products/insight-office",
        },
        {
          title: "RPA costs spiraling out of control",
          description: "Cut UiPath licensing costs by up to 70% with migration support, or leapfrog to AI-powered automation with InsightBot.",
          link: "/products/insight-bot",
        },
        {
          title: "Tribal knowledge walking out the door",
          description: "Turn business processes, system docs, and expert know-how into structured training materials and walkthrough videos — automatically.",
          link: "/products/insight-movie",
        },
        {
          title: "Deliverables taking forever to produce",
          description: "Speed up business surveys, requirements docs, and proposals with AI tools built by consultants who've been in your shoes.",
          link: "/products/insight-survey",
        },
      ],
    },
    rpaAuthority: {
      title: "RPA Expertise Since Day One",
      subtitle: "I've been in the Japanese RPA market from the beginning — advising on UiPath rollouts, standing up automation CoEs, and delivering BPO transformation projects firsthand.",
      uipathTitle: "UiPath Migration",
      uipathDesc: "Enterprise UiPath licenses can top $20K/year. I help you evaluate alternatives, migrate workflows, and cut automation costs by up to 70% — without losing what works.",
      bpoTitle: "BPO Meets AI",
      bpoDesc: "BPO is being reshaped by AI. I help operators modernize service delivery with intelligent automation that reduces manual work while keeping quality high.",
      cta: "Discuss Your RPA Strategy",
    },
    outcomes: {
      title: "What You Can Expect",
      subtitle: "Estimates based on 100+ consulting and system development engagements I've delivered",
      disclaimer: "These are projections drawn from my experience. Actual results depend on project scope, team makeup, and organizational readiness.",
      cards: [
        {
          title: "As-Is Analysis",
          metric: "40–60%",
          description: "Less time on business surveys through AI-assisted document analysis and structured interview capture",
        },
        {
          title: "Requirements & Alignment",
          metric: "50–70%",
          description: "Fewer revision rounds thanks to visual walkthroughs that get stakeholders on the same page faster",
        },
        {
          title: "Training & Onboarding",
          metric: "80%+",
          description: "Less manual effort producing user education materials via automated video and document generation",
        },
      ],
    },
    products: {
      title: "Our Product Suite",
      subtitle:
        "9 purpose-built tools spanning the full consulting lifecycle — from analysis and automation to proposals, training content, and delivery",
      viewAll: "See All Products",
      learnMore: "Learn More",
      features: "Features",
      keyFeatures: "Key Features",
      useCases: "Real-World Use Cases",
      backToProducts: "Back to Products",
    },
    features: {
      title: "Built by a Consultant, for Consultants",
      subtitle:
        "Whether your team is onshore, offshore, senior, or junior — these tools meet people where they are and make the whole team more effective.",
    },
    cta: {
      title: "Ready to Deliver Faster?",
      subtitle:
        "I've shipped accounting systems, CRM platforms, and enterprise solutions over 28 years. Let me show you what these tools can do for your next engagement.",
      button: "Get in Touch",
      noCreditCard: "No commitment required",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Simple, transparent pricing",
      perMonth: "/month",
      perYear: "/year",
      trialLabel: "Free Trial",
      trialDesc: "30-day full-featured trial. No credit card required.",
      standardLabel: "Standard",
      standardPrice: "$35",
      standardDesc: "Per-user license for teams. Volume discounts available.",
      enterpriseLabel: "Custom",
      enterpriseDesc: "Flexible licensing for larger deployments. Let's discuss your needs.",
      contactSales: "Contact Me",
      startTrial: "Start Free Trial",
      taxNote: "All prices exclude tax. Contact me for volume pricing and annual discounts.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Tell me about your project and I'll get back to you within 1 business day.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      subjectLabel: "What can we help with?",
      subjectOptions: ["Product inquiry", "Free trial request", "RPA migration consultation", "Other"],
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project or challenge...",
      submit: "Send Message",
      successTitle: "Message sent!",
      successMessage: "Thank you for reaching out. I'll get back to you within 1 business day.",
    },
    socialProof: {
      title: "Cross-Industry Experience",
      subtitle: "28 years of consulting across diverse sectors — I understand your industry's specific challenges",
      industries: [
        { name: "Financial Services", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { name: "Manufacturing", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
        { name: "Retail & Distribution", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
        { name: "IT & System Integration", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { name: "BPO & Shared Services", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { name: "Public Sector", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      ],
      stats: [
        { value: "100+", label: "Projects delivered personally" },
        { value: "28", label: "Years in the field" },
        { value: "9", label: "Tools I built" },
      ],
    },
    footer: {
      products: "Products",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      about: "About",
      careers: "Background",
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
      partners: "プロフィール",
      pricing: "料金",
      downloads: "ダウンロード",
      contact: "お問い合わせ",
      getStarted: "相談する",
    },
    downloads: {
      title: "ダウンロード",
      subtitle: "HARMONIC insight 製品の最新バージョンをダウンロードいただけます",
      version: "バージョン",
      releaseDate: "リリース日",
      download: "ダウンロード",
      comingSoon: "開発中",
      systemReq: "システム要件",
      systemReqItems: [
        "Windows 10 / 11（64ビット）",
        "8 GB 以上のRAM",
        "2 GB 以上の空きディスク容量",
        "アクティベーションにインターネット接続が必要",
      ],
      notes: "ご注意",
      notesItems: [
        "トライアル期間終了後はライセンスキーが必要です。ライセンスについてはお問い合わせください。",
        "旧バージョンからアップデートされる場合は、リリースノートをご確認ください。",
      ],
    },
    hero: {
      title: "AIツールでプロジェクトの納期とコストを削減",
      subtitle:
        "Excel管理の煩雑さ、RPAの維持コスト増大、人材流出によるナレッジ喪失 — 28年の業務コンサルティング・システム開発の現場経験から、私が自ら開発した9つのツールが貴社の課題を解決します。",
      cta: "相談する",
      ctaSecondary: "製品を見る",
    },
    solutions: {
      title: "どのような課題をお持ちですか？",
      subtitle: "貴社の課題に合わせたソリューションをご提案します",
      cards: [
        {
          title: "Excelファイルが散在し、管理しきれない",
          description: "InsightOfficeがバージョン管理、AI支援の分析、構造化された管理をExcel業務にもたらします — 既存のワークフローを変えることなく。",
          link: "/products/insight-office",
        },
        {
          title: "RPAのコストが上がり続け、ROIが見えない",
          description: "高額なUiPathライセンスからコスト効率の高い代替案への移行、またはAI搭載のInsightBotによる自動化の刷新を支援します。",
          link: "/products/insight-bot",
        },
        {
          title: "人が辞めるとナレッジが消える",
          description: "業務プロセス、システムドキュメント、専門知識を構造化された研修コンテンツや動画に自動変換します。",
          link: "/products/insight-movie",
        },
        {
          title: "コンサルティング成果物の作成に時間がかかりすぎる",
          description: "業務調査、要件定義、提案書作成を、コンサルタントがコンサルタントのために設計したAIツールで加速します。",
          link: "/products/insight-survey",
        },
      ],
    },
    rpaAuthority: {
      title: "日本のRPA市場の立ち上げ期から見てきた知見",
      subtitle: "UiPath導入支援、自動化CoE構築、BPO変革プロジェクトなど、日本のRPA市場黎明期から第一線で関わってきました。",
      uipathTitle: "UiPath移行サポート",
      uipathDesc: "エンタープライズ向けUiPathライセンスは年間200万円超になることも。代替案の評価、既存ワークフローの移行、自動化コストの最大70%削減を支援します — 機能を損なうことなく。",
      bpoTitle: "BPO + AI変革",
      bpoDesc: "BPO業界は急速なAI変革の渦中にあります。AI活用の自動化により、手作業を削減しつつ品質を維持するサービスデリバリーの刷新を支援します。",
      cta: "RPA戦略をご相談ください",
    },
    outcomes: {
      title: "想定される導入効果",
      subtitle: "一般的なコンサルティング・システム開発プロジェクトに基づく理論上の試算",
      disclaimer: "これらは100件以上のプロジェクト実績に基づく理論上の効果試算です。実際の効果は、プロジェクトの規模、チーム構成、組織の準備状況により異なります。",
      cards: [
        {
          title: "業務調査フェーズ",
          metric: "40〜60%",
          description: "AI支援のドキュメント分析とインタビュー構造化により、As-Is分析にかかる時間を削減",
        },
        {
          title: "要件定義",
          metric: "50〜70%",
          description: "ビジュアルウォークスルー生成によりステークホルダーの合意形成が向上し、修正サイクルを削減",
        },
        {
          title: "研修コンテンツ作成",
          metric: "80%以上",
          description: "動画・ドキュメントの自動生成により、ユーザー教育資料の手作業を削減",
        },
      ],
    },
    products: {
      title: "ソリューションラインナップ",
      subtitle:
        "自動化・デリバリーから業務調査・要件定義・提案・経営シミュレーション、コンテンツ作成まで — AI活用のノウハウを詰めた9つのツール。これらのパッケージ群を元に、各社の特性・業務に最適なソリューションを構築します。",
      viewAll: "すべてのソリューションを見る",
      learnMore: "詳しく見る",
      features: "機能",
      keyFeatures: "主な機能",
      useCases: "クライアント導入シナリオ",
      backToProducts: "ソリューション一覧に戻る",
    },
    features: {
      title: "現場を知るコンサルタントが作ったツール",
      subtitle:
        "ジュニアメンバ、オフショアメンバ等、今のメンバで業務改善・システム開発案件の工数を試算してください。次に、私のツールでどこまで作業が効率化できるか試算してみてください。違いが分かる人には分かるはずです。",
    },
    cta: {
      title: "貴社の案件デリバリーを加速しませんか",
      subtitle:
        "会計パッケージ、顧客システム、エンタープライズソリューションの開発実績を持つコンサルタントが自ら作ったツール群。まずはお気軽にご相談ください。",
      button: "無料相談を申し込む",
      noCreditCard: "お気軽にどうぞ",
    },
    pricing: {
      title: "料金プラン",
      subtitle: "シンプルで分かりやすい料金体系",
      perMonth: "/月",
      perYear: "/年",
      trialLabel: "無料トライアル",
      trialDesc: "30日間の全機能トライアル。クレジットカード不要。",
      standardLabel: "スタンダード",
      standardPrice: "¥5,000",
      standardDesc: "チーム向けユーザー単位ライセンス。ボリュームディスカウントあり。",
      enterpriseLabel: "カスタム",
      enterpriseDesc: "大規模導入向けの柔軟なライセンス。お気軽にご相談ください。",
      contactSales: "相談する",
      startTrial: "無料トライアルを始める",
      taxNote: "表示価格は税別です。ボリューム価格や年間割引についてはご相談ください。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "プロジェクトについてお聞かせください。1営業日以内にご返信いたします。",
      nameLabel: "お名前",
      namePlaceholder: "お名前",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@company.com",
      companyLabel: "会社名",
      companyPlaceholder: "会社名",
      subjectLabel: "ご相談内容",
      subjectOptions: ["製品についてのお問い合わせ", "無料トライアルのお申し込み", "RPA移行のご相談", "その他"],
      messageLabel: "メッセージ",
      messagePlaceholder: "プロジェクトや課題についてお聞かせください...",
      submit: "送信する",
      successTitle: "送信完了",
      successMessage: "お問い合わせありがとうございます。1営業日以内にご返信いたします。",
    },
    socialProof: {
      title: "幅広い業種での経験",
      subtitle: "28年間、様々な業種のプロジェクトに第一線で携わってきました",
      industries: [
        { name: "金融・保険", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { name: "製造業", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
        { name: "小売・流通", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
        { name: "IT・システムインテグレーション", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { name: "BPO・シェアードサービス", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { name: "公共・行政", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      ],
      stats: [
        { value: "100+", label: "携わったプロジェクト" },
        { value: "28年", label: "現場経験" },
        { value: "9種", label: "自作ツール" },
      ],
    },
    footer: {
      products: "製品",
      company: "会社情報",
      resources: "リソース",
      legal: "法的情報",
      about: "プロフィール",
      careers: "経歴",
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
      partners: "关于我",
      pricing: "价格",
      downloads: "下载",
      contact: "联系",
      getStarted: "咨询",
    },
    downloads: {
      title: "下载",
      subtitle: "下载HARMONIC insight产品的最新版本",
      version: "版本",
      releaseDate: "发布日期",
      download: "下载",
      comingSoon: "即将推出",
      systemReq: "系统要求",
      systemReqItems: [
        "Windows 10 / 11（64位）",
        "8 GB以上RAM",
        "2 GB以上可用磁盘空间",
        "激活需要互联网连接",
      ],
      notes: "注意事项",
      notesItems: [
        "试用期结束后需要许可证密钥。请直接与我联系获取授权。",
        "从旧版本更新前，请查阅发布说明。",
      ],
    },
    hero: {
      title: "用AI工具缩短项目交付时间、降低成本",
      subtitle:
        "Excel管理混乱、RPA维护成本攀升、人员流动导致知识流失 — 我用28年的一线咨询和系统开发经验，亲手打造了9款工具来解决这些问题。",
      cta: "聊一聊",
      ctaSecondary: "查看产品",
    },
    solutions: {
      title: "您面临什么挑战？",
      subtitle: "选择您的挑战，了解HARMONIC insight如何帮助您",
      cards: [
        {
          title: "Excel文件散乱、无法有效管理",
          description: "InsightOffice为您的Excel业务带来版本控制、AI辅助分析和结构化管理 — 无需改变现有工作流程。",
          link: "/products/insight-office",
        },
        {
          title: "RPA成本持续上升，ROI不明确",
          description: "从昂贵的UiPath许可证迁移到高性价比的替代方案，或使用AI驱动的InsightBot实现自动化升级。",
          link: "/products/insight-bot",
        },
        {
          title: "人员离职导致关键知识流失",
          description: "将业务流程、系统文档和专家知识自动转化为结构化的培训内容和视频。",
          link: "/products/insight-movie",
        },
        {
          title: "咨询交付物制作耗时太长",
          description: "使用由咨询师为咨询师设计的AI工具，加速业务调研、需求定义和方案编制。",
          link: "/products/insight-survey",
        },
      ],
    },
    rpaAuthority: {
      title: "从日本RPA市场的起步期一路走来",
      subtitle: "从日本RPA市场萌芽期起，我就在一线参与 — 提供UiPath部署咨询、建设自动化卓越中心、亲自交付BPO转型项目。",
      uipathTitle: "UiPath迁移支持",
      uipathDesc: "企业级UiPath许可证年费可超15万元人民币。我帮您评估替代方案、迁移现有工作流、降低自动化成本最高达70% — 且不损失功能。",
      bpoTitle: "BPO + AI转型",
      bpoDesc: "BPO行业正经历快速的AI转型。我帮助BPO运营商利用AI自动化升级服务交付，减少人工处理的同时保持质量。",
      cta: "讨论您的RPA战略",
    },
    outcomes: {
      title: "预期效果",
      subtitle: "基于典型咨询和系统开发项目的理论估算",
      disclaimer: "以上为基于我个人参与的100多个项目经验的理论预测。实际效果因项目范围、团队构成和组织准备程度而异。",
      cards: [
        {
          title: "业务调研阶段",
          metric: "40-60%",
          description: "通过AI辅助文档分析和访谈结构化，缩短现状分析所需时间",
        },
        {
          title: "需求定义",
          metric: "50-70%",
          description: "通过生成可视化演示提升利益相关方共识，减少修改迭代次数",
        },
        {
          title: "培训内容制作",
          metric: "80%以上",
          description: "通过自动生成视频和文档，减少用户教育材料的人工制作工作量",
        },
      ],
    },
    products: {
      title: "解决方案阵容",
      subtitle: "从自动化交付到业务调研、需求定义、提案、经营模拟和内容创作 — 覆盖咨询全阶段的9款工具",
      viewAll: "查看所有解决方案",
      learnMore: "了解更多",
      features: "功能",
      keyFeatures: "核心功能",
      useCases: "客户交付场景",
      backToProducts: "返回解决方案列表",
    },
    features: {
      title: "来自一线咨询师亲手打造的工具",
      subtitle: "请用您现有的团队成员——初级成员、离岸成员等——估算一下业务改善或系统开发项目的工时。然后再估算一下使用我的工具能提效多少。懂的人自然会懂。",
    },
    cta: {
      title: "想加速项目交付吗？",
      subtitle:
        "我亲手打造的工具，源自会计系统、客户平台和企业解决方案的开发经验。欢迎随时咨询。",
      button: "免费咨询",
      noCreditCard: "无需承诺",
    },
    pricing: {
      title: "价格方案",
      subtitle: "简单透明的价格体系",
      perMonth: "/月",
      perYear: "/年",
      trialLabel: "免费试用",
      trialDesc: "30天全功能试用。无需信用卡。",
      standardLabel: "标准版",
      standardDesc: "按用户许可证，适合团队使用。批量折扣可议。",
      standardPrice: "¥5,000",
      enterpriseLabel: "定制",
      enterpriseDesc: "大规模部署的灵活授权方案。欢迎咨询。",
      contactSales: "咨询",
      startTrial: "开始免费试用",
      taxNote: "所有价格不含税。批量价格和年度折扣请与我联系。",
    },
    contact: {
      title: "联系我",
      subtitle: "请告诉我您的项目需求，我会在1个工作日内回复。",
      nameLabel: "姓名",
      namePlaceholder: "您的姓名",
      emailLabel: "邮箱",
      emailPlaceholder: "you@company.com",
      companyLabel: "公司名称",
      companyPlaceholder: "公司名称",
      subjectLabel: "咨询内容",
      subjectOptions: ["产品咨询", "免费试用申请", "RPA迁移咨询", "其他"],
      messageLabel: "留言",
      messagePlaceholder: "请描述您的项目或需求...",
      submit: "发送",
      successTitle: "发送成功",
      successMessage: "感谢您的咨询。我会在1个工作日内回复。",
    },
    socialProof: {
      title: "跨行业经验",
      subtitle: "28年来，我亲身参与了各行业的项目，深谙各行业的独特挑战",
      industries: [
        { name: "金融服务", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { name: "制造业", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
        { name: "零售与分销", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
        { name: "IT与系统集成", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { name: "BPO与共享服务", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { name: "公共部门", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      ],
      stats: [
        { value: "100+", label: "亲自交付的项目" },
        { value: "28年", label: "一线经验" },
        { value: "9款", label: "我开发的工具" },
      ],
    },
    footer: {
      products: "产品",
      company: "公司",
      resources: "资源",
      legal: "法律信息",
      about: "关于我",
      careers: "经历",
      blog: "博客",
      docs: "文档",
      support: "支持",
      privacy: "隐私政策",
      terms: "服务条款",
      copyright: "HARMONIC insight Inc. 保留所有权利。",
    },
  },
};
