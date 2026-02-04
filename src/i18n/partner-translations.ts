import type { Locale } from "./translations";

export type CompetitorEntry = {
  product: string;
  vendor: string;
  license: string;
  price: string;
};

export type CompetitorInfo = {
  hasCompetitors: boolean;
  competitors: CompetitorEntry[];
};

export const competitorLabels: Record<Locale, {
  buttonLabel: string;
  dialogTitle: string;
  productHeader: string;
  vendorHeader: string;
  licenseHeader: string;
  priceHeader: string;
  noSimilar: string;
  close: string;
}> = {
  ja: {
    buttonLabel: "同業他社製品例",
    dialogTitle: "同業他社製品との比較",
    productHeader: "製品名",
    vendorHeader: "製造元",
    licenseHeader: "ライセンス体系",
    priceHeader: "参考価格",
    noSimilar: "類似商品なし — HARMONIC insightオリジナル製品です",
    close: "閉じる",
  },
  en: {
    buttonLabel: "Competitor Examples",
    dialogTitle: "Competitor Product Comparison",
    productHeader: "Product",
    vendorHeader: "Vendor",
    licenseHeader: "License Model",
    priceHeader: "Reference Price",
    noSimilar: "No similar products — HARMONIC insight original",
    close: "Close",
  },
  zh: {
    buttonLabel: "同类竞品参考",
    dialogTitle: "同类竞品对比",
    productHeader: "产品名称",
    vendorHeader: "厂商",
    licenseHeader: "许可模式",
    priceHeader: "参考价格",
    noSimilar: "无同类产品 — HARMONIC insight原创产品",
    close: "关闭",
  },
};

export const competitorData: Record<string, CompetitorInfo> = {
  InsightBot: {
    hasCompetitors: true,
    competitors: [
      {
        product: "UiPath Platform",
        vendor: "UiPath Inc.",
        license: "SaaS / Per-user subscription",
        price: "$420/month〜 (Pro)",
      },
      {
        product: "WinActor",
        vendor: "NTT DATA / NTT-AT",
        license: "Node-lock / Annual subscription",
        price: "¥908,000/year〜 (Full)",
      },
      {
        product: "BizRobo! mini",
        vendor: "RPA Technologies",
        license: "Client / Annual subscription",
        price: "¥900,000/year〜",
      },
    ],
  },
  InsightNoCodeAnalyzer: { hasCompetitors: false, competitors: [] },
  InsightPy: { hasCompetitors: false, competitors: [] },
  InsightOfficeSheet: { hasCompetitors: false, competitors: [] },
  InsightSlide: { hasCompetitors: false, competitors: [] },
  InterviewInsight: { hasCompetitors: false, competitors: [] },
  InsightMovie: { hasCompetitors: false, competitors: [] },
  InsightImageGen: { hasCompetitors: false, competitors: [] },
};

type PartnerTier = {
  name: string;
  discount: string;
  requirement: string;
  features: string[];
  renewal: string;
  referral: string;
};

type PricingCategory = {
  category: string;
  products: string[];
  priceRange: string;
};

type PartnerTranslations = {
  hero: {
    title: string;
    subtitle: string;
  };
  highlights: {
    investment: { value: string; label: string };
    discount: { value: string; label: string };
    products: { value: string; label: string };
    quota: { value: string; label: string };
  };
  tiers: {
    title: string;
    subtitle: string;
    recommended: string;
    items: PartnerTier[];
  };
  products: {
    title: string;
    subtitle: string;
    licenseNote: string;
    licenseBase: string;
    licenseBasePrice: string;
    aiTicketLabel: string;
    aiTicketDesc: string;
    aiTicketPrices: string;
    consulting: string;
    consultingPrice: string;
    supportLabel: string;
    supportPrice: string;
    categories: PricingCategory[];
    note: string;
  };
  roi: {
    title: string;
    subtitle: string;
    withoutLabel: string;
    withLabel: string;
    savingsLabel: string;
    qualityNote: string;
    scenarios: {
      title: string;
      without: string;
      withTool: string;
      savings: string;
    }[];
  };
  commission: {
    title: string;
    subtitle: string;
    tierHeader: string;
    discountHeader: string;
    marginHeader: string;
    renewalHeader: string;
    referralHeader: string;
    rows: { tier: string; discount: string; margin: string; renewal: string; referral: string }[];
    example: {
      title: string;
      scenarios: { label: string; value: string }[];
    };
  };
  steps: {
    title: string;
    items: { step: string; title: string; description: string }[];
  };
  support: {
    title: string;
    items: { title: string; description: string }[];
  };
  terms: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    email: string;
  };
};

export const partnerTranslations: Record<Locale, PartnerTranslations> = {
  ja: {
    hero: {
      title: "HARMONIC insight パートナープログラム",
      subtitle: "初期投資ゼロ・在庫リスクなしで、業務改善・コンサルティングツールの販売パートナーとして安定した収益を得られます。",
    },
    highlights: {
      investment: { value: "¥0", label: "初期投資" },
      discount: { value: "20〜40%", label: "仕入れ割引" },
      products: { value: "9製品", label: "取扱製品数" },
      quota: { value: "¥0", label: "初年度ノルマ" },
    },
    tiers: {
      title: "パートナーティア",
      subtitle: "ビジネス規模に合わせた3つのパートナーレベル",
      recommended: "おすすめ",
      items: [
        {
          name: "Registered",
          discount: "20%割引",
          requirement: "参加条件なし",
          features: [
            "パートナーポータルアクセス",
            "製品トレーニング",
            "デモライセンス提供",
            "基本マーケティング素材",
          ],
          renewal: "10%",
          referral: "15%",
        },
        {
          name: "Silver",
          discount: "30%割引",
          requirement: "年間5件以上の販売 or 売上¥100万以上",
          features: [
            "専任アカウントマネージャー",
            "リード共有プログラム",
            "年間¥20万の共同マーケティング予算",
            "優先テクニカルサポート",
          ],
          renewal: "15%",
          referral: "20%",
        },
        {
          name: "Gold",
          discount: "40%割引",
          requirement: "年間20件以上の販売 or 売上¥500万以上",
          features: [
            "テリトリー独占オプション",
            "年間¥100万の共同マーケティング予算",
            "製品ロードマップへのアクセス",
            "共同ブランディング権",
          ],
          renewal: "20%",
          referral: "25%",
        },
      ],
    },
    products: {
      title: "価格体系",
      subtitle: "製品単体販売の場合は各レンジの上限目安、コンサルティング支援とセットの場合はご相談に応じて柔軟に対応いたします",
      licenseNote: "ライセンス＋AIチケット制で継続収益を構築",
      licenseBase: "基本ライセンス",
      licenseBasePrice: "¥39,800/製品/ユーザー/年（チーム割引あり）",
      aiTicketLabel: "AIアシスタントチケット（追加収益源）",
      aiTicketDesc: "Claude搭載AIアシスタント — 顧客が使うほどパートナー収益も増加",
      aiTicketPrices: "200回 ¥10,000 / 500回 ¥20,000 / 2,000回 ¥60,000",
      consulting: "導入前コンサルティング支援＋教育",
      consultingPrice: "1日20万円〜",
      supportLabel: "保守サポート",
      supportPrice: "20〜100万円/年",
      categories: [
        { category: "自動化・RPA", products: ["InsightBot"], priceRange: "80〜150万円/年" },
        { category: "調査・要件定義支援", products: ["InsightNoCodeAnalyzer", "InsightPy", "InterviewInsight"], priceRange: "50〜120万円/年" },
        { category: "スライド／資料効率化", products: ["InsightOfficeSheet", "InsightOfficeDoc", "InsightSlide"], priceRange: "40〜90万円/年" },
        { category: "コンテンツ生成", products: ["InsightMovie", "InsightImageGen"], priceRange: "30〜80万円/年" },
      ],
      note: "※ 上記はすべて年間ライセンスの参考価格帯です。導入規模・ご利用形態に応じてお見積りいたします。",
    },
    roi: {
      title: "導入効果の試算",
      subtitle: "コンサルタント・SEを投入した場合のコストと比較 — ツール導入による削減効果と品質向上を同時に実現",
      withoutLabel: "従来（人手のみ）",
      withLabel: "ツール導入後",
      savingsLabel: "削減効果",
      qualityNote: "※ コスト削減に加え、AIによるチェック・自動化で成果物の品質も向上します",
      scenarios: [
        {
          title: "業務調査・要件定義",
          without: "コンサルタント3名 × 20日 = 1,200万円",
          withTool: "2名 × 12日 + ツール = 約600万円",
          savings: "約50%削減",
        },
        {
          title: "RPA導入・マイグレーション",
          without: "SE 2名 × 30日 = 1,200万円",
          withTool: "1名 × 15日 + ツール = 約450万円",
          savings: "約60%削減",
        },
        {
          title: "提案資料・ドキュメント作成",
          without: "コンサルタント2名 × 10日 = 400万円",
          withTool: "1名 × 5日 + ツール = 約190万円",
          savings: "約50%削減",
        },
        {
          title: "経営シミュレーション・予実管理",
          without: "アナリスト2名 × 15日 = 600万円",
          withTool: "1名 × 8日 + ツール = 約250万円",
          savings: "約60%削減",
        },
      ],
    },
    commission: {
      title: "収益モデル",
      subtitle: "仕入れ価格と販売価格の差額がパートナー様の利益となります",
      tierHeader: "ティア",
      discountHeader: "仕入れ割引",
      marginHeader: "利益率目安",
      renewalHeader: "更新手数料",
      referralHeader: "紹介手数料",
      rows: [
        { tier: "Registered", discount: "20%", margin: "15〜20%", renewal: "10%", referral: "15%" },
        { tier: "Silver", discount: "30%", margin: "20〜30%", renewal: "15%", referral: "20%" },
        { tier: "Gold", discount: "40%", margin: "30〜40%", renewal: "20%", referral: "25%" },
      ],
      example: {
        title: "収益シミュレーション（Silverティアの場合）",
        scenarios: [
          { label: "月2件販売", value: "年間約¥120万" },
          { label: "月5件販売", value: "年間約¥300万" },
          { label: "月10件販売", value: "年間約¥360万以上" },
        ],
      },
    },
    steps: {
      title: "パートナー登録の流れ",
      items: [
        { step: "01", title: "お申し込み", description: "Webフォームまたはメールでパートナー申請" },
        { step: "02", title: "審査・契約", description: "1〜3営業日で審査完了、契約締結" },
        { step: "03", title: "トレーニング", description: "製品研修とポータルアクセスの付与" },
        { step: "04", title: "販売開始", description: "デモライセンスを活用して営業活動を開始" },
      ],
    },
    support: {
      title: "パートナーサポート",
      items: [
        { title: "パートナーポータル", description: "案件管理、見積作成、ライセンス発行をワンストップで" },
        { title: "製品トレーニング", description: "オンラインおよびオンサイトでの包括的な研修プログラム" },
        { title: "営業資料", description: "提案書テンプレート、事例集、デモ動画を提供" },
        { title: "テクニカルサポート", description: "パートナー専用のサポート窓口で技術的な質問に対応" },
        { title: "共同マーケティング", description: "セミナー共催、Web広告、コンテンツ制作を支援" },
        { title: "リード共有", description: "Silver以上のパートナー様にリードを優先的に共有" },
      ],
    },
    terms: {
      title: "契約条件",
      items: [
        "契約期間：12ヶ月（自動更新）",
        "最低販売数：Registeredは条件なし",
        "支払いサイクル：月末締め翌月末払い（30日サイクル）",
        "エンドユーザーサポート：一次対応はパートナー様、二次対応は当社",
        "競合制限：同カテゴリ製品の取扱いに制限なし",
        "解約：30日前の書面通知で解約可能",
      ],
    },
    cta: {
      title: "パートナーになりませんか？",
      subtitle: "まずはお気軽にお問い合わせください。担当者がご説明いたします。",
      email: "partner@h-insight.jp",
    },
  },
  en: {
    hero: {
      title: "HARMONIC insight Partner Program",
      subtitle: "Earn stable revenue as a sales partner for AI-powered consulting tools — with zero upfront investment and no inventory risk.",
    },
    highlights: {
      investment: { value: "¥0", label: "Initial Investment" },
      discount: { value: "20–40%", label: "Wholesale Discount" },
      products: { value: "9", label: "Products" },
      quota: { value: "¥0", label: "First-Year Quota" },
    },
    tiers: {
      title: "Partner Tiers",
      subtitle: "Three partner levels to match your business scale",
      recommended: "Recommended",
      items: [
        {
          name: "Registered",
          discount: "20% discount",
          requirement: "No entry requirements",
          features: [
            "Partner portal access",
            "Product training",
            "Demo license provision",
            "Basic marketing materials",
          ],
          renewal: "10%",
          referral: "15%",
        },
        {
          name: "Silver",
          discount: "30% discount",
          requirement: "5+ annual sales or ¥1M revenue",
          features: [
            "Dedicated account manager",
            "Lead sharing program",
            "¥200K annual co-marketing budget",
            "Priority technical support",
          ],
          renewal: "15%",
          referral: "20%",
        },
        {
          name: "Gold",
          discount: "40% discount",
          requirement: "20+ annual sales or ¥5M revenue",
          features: [
            "Territory exclusivity option",
            "¥1M annual co-marketing budget",
            "Product roadmap access",
            "Co-branding rights",
          ],
          renewal: "20%",
          referral: "25%",
        },
      ],
    },
    products: {
      title: "Pricing Structure",
      subtitle: "Product-only sales are priced at the upper end of each range. Bundled with consulting engagement, pricing is flexible.",
      licenseNote: "License + AI Ticket model for recurring partner revenue",
      licenseBase: "Base License",
      licenseBasePrice: "¥39,800/product/user/year (team discounts available)",
      aiTicketLabel: "AI Assistant Tickets (additional revenue stream)",
      aiTicketDesc: "Claude-powered AI assistant — the more customers use it, the more partners earn",
      aiTicketPrices: "200 queries ¥10,000 / 500 queries ¥20,000 / 2,000 queries ¥60,000",
      consulting: "Pre-deployment consulting & training",
      consultingPrice: "From ¥200,000/day",
      supportLabel: "Maintenance & Support",
      supportPrice: "¥200K–1M/year",
      categories: [
        { category: "Automation & RPA", products: ["InsightBot"], priceRange: "¥800K–1.5M/year" },
        { category: "Survey & Requirements", products: ["InsightNoCodeAnalyzer", "InsightPy", "InterviewInsight"], priceRange: "¥500K–1.2M/year" },
        { category: "Slides & Documentation", products: ["InsightOfficeSheet", "InsightOfficeDoc", "InsightSlide"], priceRange: "¥400K–900K/year" },
        { category: "Content Generation", products: ["InsightMovie", "InsightImageGen"], priceRange: "¥300K–800K/year" },
      ],
      note: "All prices are annual license reference ranges. Final quotes are based on deployment scale and usage requirements.",
    },
    roi: {
      title: "ROI Estimation",
      subtitle: "Compare the cost of deploying consultants and engineers manually vs. with HARMONIC insight tools — achieve cost reduction and quality improvement simultaneously",
      withoutLabel: "Traditional (Manual Only)",
      withLabel: "With Tools",
      savingsLabel: "Savings",
      qualityNote: "In addition to cost savings, AI-powered checks and automation also improve deliverable quality",
      scenarios: [
        {
          title: "Business Survey & Requirements",
          without: "3 consultants × 20 days = ¥12M",
          withTool: "2 consultants × 12 days + tools = ~¥6M",
          savings: "~50% reduction",
        },
        {
          title: "RPA Deployment & Migration",
          without: "2 engineers × 30 days = ¥12M",
          withTool: "1 engineer × 15 days + tools = ~¥4.5M",
          savings: "~60% reduction",
        },
        {
          title: "Proposals & Documentation",
          without: "2 consultants × 10 days = ¥4M",
          withTool: "1 consultant × 5 days + tools = ~¥1.9M",
          savings: "~50% reduction",
        },
        {
          title: "Management Simulation & Budgeting",
          without: "2 analysts × 15 days = ¥6M",
          withTool: "1 analyst × 8 days + tools = ~¥2.5M",
          savings: "~60% reduction",
        },
      ],
    },
    commission: {
      title: "Revenue Model",
      subtitle: "Your profit is the difference between wholesale and retail pricing",
      tierHeader: "Tier",
      discountHeader: "Wholesale Discount",
      marginHeader: "Margin Estimate",
      renewalHeader: "Renewal Commission",
      referralHeader: "Referral Commission",
      rows: [
        { tier: "Registered", discount: "20%", margin: "15–20%", renewal: "10%", referral: "15%" },
        { tier: "Silver", discount: "30%", margin: "20–30%", renewal: "15%", referral: "20%" },
        { tier: "Gold", discount: "40%", margin: "30–40%", renewal: "20%", referral: "25%" },
      ],
      example: {
        title: "Revenue Simulation (Silver tier)",
        scenarios: [
          { label: "2 sales/month", value: "~¥1.2M/year" },
          { label: "5 sales/month", value: "~¥3.0M/year" },
          { label: "10 sales/month", value: "¥3.6M+/year" },
        ],
      },
    },
    steps: {
      title: "How to Get Started",
      items: [
        { step: "01", title: "Apply", description: "Submit your partner application via web form or email" },
        { step: "02", title: "Review & Contract", description: "Review completed within 1–3 business days" },
        { step: "03", title: "Training", description: "Product training and portal access granted" },
        { step: "04", title: "Start Selling", description: "Begin sales activities with demo licenses" },
      ],
    },
    support: {
      title: "Partner Support",
      items: [
        { title: "Partner Portal", description: "One-stop deal management, quotes, and license issuance" },
        { title: "Product Training", description: "Comprehensive online and on-site training programs" },
        { title: "Sales Materials", description: "Proposal templates, case studies, and demo videos" },
        { title: "Technical Support", description: "Dedicated partner support channel for technical inquiries" },
        { title: "Co-Marketing", description: "Joint seminars, web advertising, and content creation support" },
        { title: "Lead Sharing", description: "Priority lead sharing for Silver and Gold partners" },
      ],
    },
    terms: {
      title: "Contract Terms",
      items: [
        "Contract period: 12 months (auto-renewal)",
        "Minimum sales: None for Registered tier",
        "Payment cycle: Monthly, net 30 days",
        "End-user support: First-line by partner, second-line by us",
        "Competition: No restrictions on competing products",
        "Termination: 30-day written notice required",
      ],
    },
    cta: {
      title: "Become a Partner",
      subtitle: "Contact us to learn more. Our team will walk you through the details.",
      email: "partner@h-insight.jp",
    },
  },
  zh: {
    hero: {
      title: "HARMONIC insight 合作伙伴计划",
      subtitle: "零初始投资、零库存风险，成为咨询AI工具的销售合作伙伴，获取稳定收入。",
    },
    highlights: {
      investment: { value: "¥0", label: "初始投资" },
      discount: { value: "20–40%", label: "批发折扣" },
      products: { value: "9款", label: "产品数量" },
      quota: { value: "¥0", label: "首年配额" },
    },
    tiers: {
      title: "合作伙伴等级",
      subtitle: "三个合作伙伴级别，匹配您的业务规模",
      recommended: "推荐",
      items: [
        {
          name: "Registered",
          discount: "20%折扣",
          requirement: "无入门要求",
          features: [
            "合作伙伴门户访问",
            "产品培训",
            "演示许可证",
            "基础营销材料",
          ],
          renewal: "10%",
          referral: "15%",
        },
        {
          name: "Silver",
          discount: "30%折扣",
          requirement: "年销售5笔以上或营收¥100万以上",
          features: [
            "专属客户经理",
            "潜在客户共享计划",
            "年度¥20万联合营销预算",
            "优先技术支持",
          ],
          renewal: "15%",
          referral: "20%",
        },
        {
          name: "Gold",
          discount: "40%折扣",
          requirement: "年销售20笔以上或营收¥500万以上",
          features: [
            "区域独家代理选项",
            "年度¥100万联合营销预算",
            "产品路线图访问权",
            "联合品牌权",
          ],
          renewal: "20%",
          referral: "25%",
        },
      ],
    },
    products: {
      title: "价格体系",
      subtitle: "单独购买产品时按各区间上限定价，配合咨询服务可灵活调整",
      licenseNote: "许可证 + AI工单制，为合作伙伴构建持续收入",
      licenseBase: "基础许可证",
      licenseBasePrice: "¥39,800/产品/用户/年（团队折扣可用）",
      aiTicketLabel: "AI助手工单（额外收入来源）",
      aiTicketDesc: "搭载Claude的AI助手 — 客户使用越多，合作伙伴收入越高",
      aiTicketPrices: "200次 ¥10,000 / 500次 ¥20,000 / 2,000次 ¥60,000",
      consulting: "导入前咨询支持及培训",
      consultingPrice: "每日20万日元起",
      supportLabel: "维护支持",
      supportPrice: "20〜100万日元/年",
      categories: [
        { category: "自动化・RPA", products: ["InsightBot"], priceRange: "80〜150万日元/年" },
        { category: "调研・需求定义支持", products: ["InsightNoCodeAnalyzer", "InsightPy", "InterviewInsight"], priceRange: "50〜120万日元/年" },
        { category: "幻灯片／文档效率化", products: ["InsightOfficeSheet", "InsightOfficeDoc", "InsightSlide"], priceRange: "40〜90万日元/年" },
        { category: "内容生成", products: ["InsightMovie", "InsightImageGen"], priceRange: "30〜80万日元/年" },
      ],
      note: "以上均为年度许可参考价格区间。最终报价根据部署规模和使用需求确定。",
    },
    roi: {
      title: "导入效果试算",
      subtitle: "与纯人工投入顾问和工程师的成本对比 — 工具导入同时实现成本削减和品质提升",
      withoutLabel: "传统方式（纯人工）",
      withLabel: "导入工具后",
      savingsLabel: "削减效果",
      qualityNote: "※ 除成本削减外，AI驱动的审查与自动化还能提升交付物品质",
      scenarios: [
        {
          title: "业务调研・需求定义",
          without: "顾问3人 × 20天 = 1,200万日元",
          withTool: "2人 × 12天 + 工具 = 约600万日元",
          savings: "约50%削减",
        },
        {
          title: "RPA导入・迁移",
          without: "工程师2人 × 30天 = 1,200万日元",
          withTool: "1人 × 15天 + 工具 = 约450万日元",
          savings: "约60%削减",
        },
        {
          title: "提案资料・文档制作",
          without: "顾问2人 × 10天 = 400万日元",
          withTool: "1人 × 5天 + 工具 = 约190万日元",
          savings: "约50%削减",
        },
        {
          title: "经营模拟・预实管理",
          without: "分析师2人 × 15天 = 600万日元",
          withTool: "1人 × 8天 + 工具 = 约250万日元",
          savings: "约60%削减",
        },
      ],
    },
    commission: {
      title: "收益模式",
      subtitle: "批发价与零售价之间的差额即为您的利润",
      tierHeader: "等级",
      discountHeader: "批发折扣",
      marginHeader: "利润率参考",
      renewalHeader: "续约佣金",
      referralHeader: "推荐佣金",
      rows: [
        { tier: "Registered", discount: "20%", margin: "15–20%", renewal: "10%", referral: "15%" },
        { tier: "Silver", discount: "30%", margin: "20–30%", renewal: "15%", referral: "20%" },
        { tier: "Gold", discount: "40%", margin: "30–40%", renewal: "20%", referral: "25%" },
      ],
      example: {
        title: "收入模拟（Silver等级）",
        scenarios: [
          { label: "月销2笔", value: "年约¥120万" },
          { label: "月销5笔", value: "年约¥300万" },
          { label: "月销10笔", value: "年¥360万以上" },
        ],
      },
    },
    steps: {
      title: "注册流程",
      items: [
        { step: "01", title: "申请", description: "通过网页表单或邮件提交合作伙伴申请" },
        { step: "02", title: "审核与签约", description: "1-3个工作日内完成审核并签署合同" },
        { step: "03", title: "培训", description: "产品培训及门户访问权限开通" },
        { step: "04", title: "开始销售", description: "利用演示许可证开展销售活动" },
      ],
    },
    support: {
      title: "合作伙伴支持",
      items: [
        { title: "合作伙伴门户", description: "一站式商机管理、报价和许可证发放" },
        { title: "产品培训", description: "全面的线上及现场培训项目" },
        { title: "销售资料", description: "提案模板、案例集和演示视频" },
        { title: "技术支持", description: "合作伙伴专属技术支持通道" },
        { title: "联合营销", description: "联合研讨会、网络广告和内容创作支持" },
        { title: "潜客共享", description: "为Silver及以上合作伙伴优先共享潜在客户" },
      ],
    },
    terms: {
      title: "合同条款",
      items: [
        "合同期限：12个月（自动续约）",
        "最低销售量：Registered等级无要求",
        "支付周期：月结，30天付款期",
        "终端用户支持：一线由合作伙伴负责，二线由我方负责",
        "竞争限制：无竞品代理限制",
        "终止：提前30天书面通知即可终止",
      ],
    },
    cta: {
      title: "成为合作伙伴",
      subtitle: "欢迎联系我们了解更多详情，我们的团队将为您详细介绍。",
      email: "partner@h-insight.jp",
    },
  },
};
