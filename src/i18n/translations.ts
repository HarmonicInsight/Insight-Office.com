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
    standardDesc: string;
    enterpriseLabel: string;
    enterpriseDesc: string;
    contactSales: string;
    startTrial: string;
    taxNote: string;
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
      downloads: "Downloads",
      contact: "Contact",
      getStarted: "Contact Us",
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
        "A license key is required after the trial period. Contact your partner or our sales team.",
        "Please review the release notes before updating from a previous version.",
      ],
    },
    hero: {
      title: "Reduce Project Delivery Time and Cost with AI-Powered Tools",
      subtitle:
        "Excel sprawl, RPA maintenance costs, knowledge loss from staff turnover — solve the challenges that slow down your business with purpose-built tools born from 28 years of consulting and system development experience.",
      cta: "Contact Us",
      ctaSecondary: "View Products",
    },
    solutions: {
      title: "What Challenge Are You Facing?",
      subtitle: "Select your challenge to see how HARMONIC insight can help",
      cards: [
        {
          title: "Excel files are scattered and unmanageable",
          description: "InsightOffice brings version control, AI-assisted analysis, and structured management to your Excel-based operations — without changing your workflow.",
          link: "/products/insight-office",
        },
        {
          title: "RPA costs keep rising with no clear ROI",
          description: "Migrate from expensive UiPath licenses to cost-effective alternatives, or modernize your automation with AI-powered InsightBot.",
          link: "/products/insight-bot",
        },
        {
          title: "Key knowledge disappears when people leave",
          description: "Automatically convert business processes, system documentation, and expert knowledge into structured training content and videos.",
          link: "/products/insight-movie",
        },
        {
          title: "Consulting deliverables take too long to produce",
          description: "Accelerate business surveys, requirements definition, and proposal creation with AI tools designed for consultants by consultants.",
          link: "/products/insight-survey",
        },
      ],
    },
    rpaAuthority: {
      title: "From the Early Days of RPA in Japan",
      subtitle: "Our founder has been involved in the Japanese RPA market since its inception — advising on UiPath deployments, building automation centers of excellence, and delivering BPO transformation projects.",
      uipathTitle: "UiPath Migration Support",
      uipathDesc: "Enterprise UiPath licenses can exceed $20,000/year. We help you evaluate alternatives, migrate existing workflows, and reduce automation costs by up to 70% — without losing functionality.",
      bpoTitle: "BPO + AI Transformation",
      bpoDesc: "The BPO industry is undergoing rapid AI transformation. We help BPO operators modernize their service delivery with AI-powered automation that reduces manual processing while maintaining quality.",
      cta: "Discuss Your RPA Strategy",
    },
    outcomes: {
      title: "Expected Impact",
      subtitle: "Theoretical estimates based on typical consulting and system development projects",
      disclaimer: "These are theoretical projections based on our experience across 100+ projects. Actual results vary depending on project scope, team composition, and organizational readiness.",
      cards: [
        {
          title: "Business Survey Phase",
          metric: "40-60%",
          description: "Reduction in time spent on As-Is analysis through AI-assisted document analysis and interview structuring",
        },
        {
          title: "Requirements Definition",
          metric: "50-70%",
          description: "Fewer revision cycles through visual walkthrough generation that improves stakeholder alignment",
        },
        {
          title: "Training Content Creation",
          metric: "80%+",
          description: "Reduction in manual effort for producing user education materials through automated video and document generation",
        },
      ],
    },
    products: {
      title: "Solution Lineup",
      subtitle:
        "9 tools covering every consulting phase — from automation and delivery to business analysis, requirements, proposals, strategy simulation, and content creation",
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
        "Estimate the effort for your next business improvement or system development project with your current team — junior members, offshore members, and all. Then estimate how much our tools can streamline that work. Those who get it, get it.",
    },
    cta: {
      title: "Accelerate Your Consulting Engagements with HARMONIC insight",
      subtitle:
        "Purpose-built by consultants who've delivered accounting systems, customer platforms, and enterprise solutions. Join our partner network to transform your delivery.",
      button: "Request Partner Consultation",
      noCreditCard: "No commitment required",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose the plan that fits your organization",
      perMonth: "/month",
      perYear: "/year",
      trialLabel: "Free Trial",
      trialDesc: "30-day full-featured trial. No credit card required.",
      standardLabel: "Standard",
      standardDesc: "Per-user license for teams. Volume discounts available.",
      enterpriseLabel: "Enterprise",
      enterpriseDesc: "Unlimited users, dedicated support, and custom integrations.",
      contactSales: "Contact Sales",
      startTrial: "Start Free Trial",
      taxNote: "All prices exclude tax. Contact us for volume pricing and annual discounts.",
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
      downloads: "ダウンロード",
      contact: "お問い合わせ",
      getStarted: "お問い合わせ",
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
        "トライアル期間終了後はライセンスキーが必要です。パートナー様または弊社営業担当までお問い合わせください。",
        "旧バージョンからアップデートされる場合は、リリースノートをご確認ください。",
      ],
    },
    hero: {
      title: "AIツールでプロジェクトの納期とコストを削減",
      subtitle:
        "Excel管理の煩雑さ、RPAの維持コスト増大、人材流出によるナレッジ喪失 — 28年の業務コンサルティング・システム開発の実績から生まれたツール群が、貴社の課題を解決します。",
      cta: "お問い合わせ",
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
      subtitle: "創業者はUiPath導入支援、自動化CoE構築、BPO変革プロジェクトなど、日本のRPA市場黎明期から関わってきました。",
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
      title: "コンサルタント・SIerがHARMONIC insightを選ぶ理由",
      subtitle:
        "ジュニアメンバ、オフショアメンバ等、今のメンバで業務改善・システム開発案件の工数を試算してください。次に、私のツールでどこまで作業が効率化できるか試算してみてください。違いが分かる人には分かるはずです。",
    },
    cta: {
      title: "HARMONIC insightで貴社の案件デリバリーを加速しませんか",
      subtitle:
        "会計パッケージ、顧客システム、エンタープライズソリューションの開発実績を持つコンサルタントが作ったツール群。パートナーネットワークに参加して、貴社のデリバリーを変革しましょう。",
      button: "パートナー相談を申し込む",
      noCreditCard: "お気軽にご相談ください",
    },
    pricing: {
      title: "料金プラン",
      subtitle: "貴社に最適なプランをお選びください",
      perMonth: "/月",
      perYear: "/年",
      trialLabel: "無料トライアル",
      trialDesc: "30日間の全機能トライアル。クレジットカード不要。",
      standardLabel: "スタンダード",
      standardDesc: "チーム向けユーザー単位ライセンス。ボリュームディスカウントあり。",
      enterpriseLabel: "エンタープライズ",
      enterpriseDesc: "ユーザー数無制限、専任サポート、カスタム連携。",
      contactSales: "営業に問い合わせる",
      startTrial: "無料トライアルを始める",
      taxNote: "表示価格は税別です。ボリューム価格や年間割引についてはお問い合わせください。",
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
      downloads: "下载",
      contact: "联系我们",
      getStarted: "联系我们",
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
        "试用期结束后需要许可证密钥。请联系您的合作伙伴或我们的销售团队。",
        "从旧版本更新前，请查阅发布说明。",
      ],
    },
    hero: {
      title: "用AI工具缩短项目交付时间、降低成本",
      subtitle:
        "Excel管理混乱、RPA维护成本攀升、人员流动导致知识流失 — 源自28年咨询和系统开发经验的工具套件，为您解决这些业务难题。",
      cta: "联系我们",
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
      subtitle: "创始人从日本RPA市场萌芽期就深度参与 — 提供UiPath部署咨询、建设自动化卓越中心、交付BPO转型项目。",
      uipathTitle: "UiPath迁移支持",
      uipathDesc: "企业级UiPath许可证年费可超15万元人民币。我们帮助您评估替代方案、迁移现有工作流、降低自动化成本最高达70% — 且不损失功能。",
      bpoTitle: "BPO + AI转型",
      bpoDesc: "BPO行业正经历快速的AI转型。我们帮助BPO运营商利用AI自动化升级服务交付，减少人工处理的同时保持质量。",
      cta: "讨论您的RPA战略",
    },
    outcomes: {
      title: "预期效果",
      subtitle: "基于典型咨询和系统开发项目的理论估算",
      disclaimer: "以上为基于100多个项目经验的理论预测。实际效果因项目范围、团队构成和组织准备程度而异。",
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
      title: "咨询师和SI企业选择HARMONIC insight的理由",
      subtitle: "请用您现有的团队成员——初级成员、离岸成员等——估算一下业务改善或系统开发项目的工时。然后再估算一下使用我们的工具能提效多少。懂的人自然会懂。",
    },
    cta: {
      title: "用HARMONIC insight加速贵司的咨询项目交付",
      subtitle:
        "由具有会计系统、客户平台和企业解决方案开发经验的咨询师打造。加入合作伙伴网络，变革贵司的项目交付。",
      button: "申请合作伙伴咨询",
      noCreditCard: "无需承诺",
    },
    pricing: {
      title: "价格方案",
      subtitle: "选择适合贵司的方案",
      perMonth: "/月",
      perYear: "/年",
      trialLabel: "免费试用",
      trialDesc: "30天全功能试用。无需信用卡。",
      standardLabel: "标准版",
      standardDesc: "按用户许可证，适合团队使用。批量折扣可议。",
      enterpriseLabel: "企业版",
      enterpriseDesc: "无限用户、专属支持、定制集成。",
      contactSales: "联系销售",
      startTrial: "开始免费试用",
      taxNote: "所有价格不含税。批量价格和年度折扣请联系我们。",
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
