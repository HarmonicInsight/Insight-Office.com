import type { Locale } from "@/i18n/translations";

export type ProductCategory = "rpa" | "proposal" | "research" | "content";

export type Product = {
  slug: string;
  code: string;
  icon: string;
  color: string;
  category: ProductCategory;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  useCases: Record<Locale, string[]>;
};

export const categoryNames: Record<ProductCategory, Record<Locale, string>> = {
  rpa: {
    en: "Automation & Delivery",
    ja: "自動化・デリバリー",
    zh: "自动化与交付",
  },
  proposal: {
    en: "Proposal & Strategy Simulation",
    ja: "提案・経営シミュレーション",
    zh: "提案与经营模拟",
  },
  research: {
    en: "Business Analysis & Requirements",
    ja: "業務調査・要件定義",
    zh: "业务调研与需求定义",
  },
  content: {
    en: "Content Creation",
    ja: "コンテンツ作成",
    zh: "内容创作",
  },
};

export const products: Product[] = [
  // === 1. Automation & Delivery ===
  {
    slug: "insight-py",
    code: "INPY",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-sky-500 to-cyan-600",
    category: "rpa",
    name: { en: "InsightPy", ja: "InsightPy", zh: "InsightPy" },
    tagline: {
      en: "Python Automation for Business Survey & Data Collection",
      ja: "業務調査・データ収集のためのPython自動化",
      zh: "面向业务调研与数据收集的Python自动化",
    },
    description: {
      en: "A Python execution environment purpose-built for consultants. Automate data collection during business surveys, run analysis scripts on client systems, and build quick automation prototypes during requirements definition phases.",
      ja: "コンサルタント向けに特化したPython実行環境。業務調査時のデータ収集を自動化し、クライアントシステム上で分析スクリプトを実行し、要件定義フェーズでの自動化プロトタイプを迅速に構築します。",
      zh: "专为咨询师打造的Python执行环境。自动化业务调研中的数据收集，在客户系统上运行分析脚本，在需求定义阶段快速构建自动化原型。",
    },
    features: {
      en: [
        "Windows-native Python environment",
        "AI-powered code generation",
        "Office automation libraries",
        "Data analysis toolkit",
        "System integration helpers",
        "Scheduled task execution",
      ],
      ja: [
        "Windowsネイティブ Python環境",
        "AI搭載コード生成",
        "オフィス自動化ライブラリ",
        "データ分析ツールキット",
        "システム統合ヘルパー",
        "スケジュールタスク実行",
      ],
      zh: [
        "Windows原生Python环境",
        "AI驱动的代码生成",
        "办公自动化库",
        "数据分析工具包",
        "系统集成助手",
        "定时任务执行",
      ],
    },
    useCases: {
      en: [
        "Automated data collection during business surveys",
        "Client system analysis and data extraction",
        "Quick automation prototyping in requirements phase",
        "Bulk data processing for As-Is analysis",
      ],
      ja: [
        "業務調査時のデータ収集自動化",
        "クライアントシステムの分析とデータ抽出",
        "要件定義フェーズでの自動化プロトタイピング",
        "As-Is分析向け大量データ処理",
      ],
      zh: [
        "业务调研中的数据收集自动化",
        "客户系统分析与数据提取",
        "需求定义阶段的快速自动化原型",
        "现状分析批量数据处理",
      ],
    },
  },
  {
    slug: "insight-bot",
    code: "INBT",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "from-emerald-500 to-teal-600",
    category: "rpa",
    name: { en: "InsightBot", ja: "InsightBot", zh: "InsightBot" },
    tagline: {
      en: "RPA Delivery for Client Process Automation",
      ja: "クライアント業務自動化のRPAデリバリー",
      zh: "面向客户流程自动化的RPA交付",
    },
    description: {
      en: "Build and deliver RPA solutions to your clients. Design automation workflows visually, deploy bots for repetitive client processes, and provide ongoing managed automation services as a recurring revenue stream.",
      ja: "クライアントにRPAソリューションを構築・納品。ビジュアルにワークフローを設計し、クライアントの反復業務にボットを展開し、継続収益としてマネージド自動化サービスを提供します。",
      zh: "为客户构建和交付RPA解决方案。可视化设计自动化工作流，为客户重复性业务部署机器人，并提供持续的托管自动化服务作为经常性收入来源。",
    },
    features: {
      en: [
        "Visual workflow designer",
        "AI-assisted bot creation",
        "Web and desktop automation",
        "Scheduled and triggered execution",
        "Error recovery and retry logic",
        "Centralized bot management",
      ],
      ja: [
        "ビジュアルワークフローデザイナー",
        "AI支援ボット作成",
        "Web・デスクトップ自動化",
        "スケジュール・トリガー実行",
        "エラー復旧とリトライロジック",
        "集中ボット管理",
      ],
      zh: [
        "可视化工作流设计器",
        "AI辅助机器人创建",
        "Web和桌面自动化",
        "定时和触发执行",
        "错误恢复和重试逻辑",
        "集中式机器人管理",
      ],
    },
    useCases: {
      en: [
        "Client back-office process automation delivery",
        "Managed RPA service as recurring revenue",
        "PoC automation during requirements definition",
        "Legacy system data migration bots",
      ],
      ja: [
        "クライアントのバックオフィス業務自動化の納品",
        "継続収益としてのマネージドRPAサービス",
        "要件定義中のPoC自動化",
        "レガシーシステムのデータ移行ボット構築",
      ],
      zh: [
        "客户后台业务流程自动化交付",
        "作为经常性收入的托管RPA服务",
        "需求定义中的PoC自动化",
        "遗留系统数据迁移机器人",
      ],
    },
  },
  {
    slug: "insight-nocode-analyzer",
    code: "INCA",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "from-violet-500 to-indigo-600",
    category: "rpa",
    name: { en: "InsightNoCodeAnalyzer", ja: "InsightNoCodeAnalyzer", zh: "InsightNoCodeAnalyzer" },
    tagline: {
      en: "Migration Automation Tool for RPA & Low-Code Platforms",
      ja: "RPA・ローコードのマイグレーション自動化ツール",
      zh: "RPA与低代码平台的迁移自动化工具",
    },
    description: {
      en: "Automate the migration of clients' existing RPA and low-code environments to modern platforms. Analyze workflow complexity, auto-convert processes across platforms, estimate migration effort, and generate executable roadmaps — accelerating platform modernization delivery.",
      ja: "クライアント既存のRPA・ローコード環境のモダンプラットフォームへの移行を自動化。ワークフローの複雑性を分析し、プラットフォーム間のプロセスを自動変換し、移行工数を見積もり、実行可能なロードマップを生成 — プラットフォーム近代化デリバリーを加速します。",
      zh: "自动化客户现有RPA和低代码环境向现代平台的迁移。分析工作流复杂性，跨平台自动转换流程，估算迁移工作量，生成可执行路线图 — 加速平台现代化交付。",
    },
    features: {
      en: [
        "Automated workflow analysis",
        "Platform compatibility assessment",
        "Migration effort estimation",
        "Risk and dependency mapping",
        "Optimization recommendations",
        "Detailed migration roadmap",
      ],
      ja: [
        "自動ワークフロー分析",
        "プラットフォーム互換性評価",
        "移行工数見積もり",
        "リスクと依存関係マッピング",
        "最適化推奨事項",
        "詳細な移行ロードマップ",
      ],
      zh: [
        "自动化工作流分析",
        "平台兼容性评估",
        "迁移工作量估算",
        "风险和依赖关系映射",
        "优化建议",
        "详细的迁移路线图",
      ],
    },
    useCases: {
      en: [
        "Client RPA platform modernization assessment",
        "Migration effort estimation for client budgeting",
        "Vendor comparison analysis for client procurement",
        "DX roadmap generation for executive presentations",
      ],
      ja: [
        "クライアントRPAプラットフォーム近代化アセスメント",
        "クライアント予算策定向け移行工数見積もり",
        "クライアント調達向けベンダー比較分析",
        "エグゼクティブ向けDXロードマップ生成",
      ],
      zh: [
        "客户RPA平台现代化评估",
        "客户预算编制的迁移工作量估算",
        "客户采购的供应商比较分析",
        "面向高管的DX路线图生成",
      ],
    },
  },

  // === 2. Proposal & Strategy Simulation ===
  {
    slug: "insight-office-sheet",
    code: "HMSH",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "from-green-500 to-green-700",
    category: "proposal",
    name: { en: "InsightOfficeSheet", ja: "InsightOfficeSheet", zh: "InsightOfficeSheet" },
    tagline: {
      en: "Proposal Pricing & Strategy Simulation on Excel",
      ja: "提案金額シミュレーション・経営戦略策定Excel基盤",
      zh: "提案报价模拟与经营战略制定Excel平台",
    },
    description: {
      en: "Version-controlled Excel for pricing simulations, cost estimations, and strategic planning. Track changes across proposal iterations, manage multi-stakeholder reviews, and maintain audit trails for client-facing financial models.",
      ja: "金額シミュレーション、コスト見積、戦略策定のためのバージョン管理付きExcel基盤。提案の反復ごとの変更を追跡し、複数ステークホルダーのレビューを管理し、クライアント向け財務モデルの監査証跡を維持します。",
      zh: "用于报价模拟、成本估算和战略规划的版本控制Excel平台。跟踪提案迭代中的变更，管理多利益相关方审核，维护面向客户的财务模型审计跟踪。",
    },
    features: {
      en: [
        "Git-like version control for Excel",
        "Change tracking and diff visualization",
        "Conflict detection and resolution",
        "Team collaboration workflows",
        "Full audit trail and history",
        "Automated backup and recovery",
      ],
      ja: [
        "Excel向けGitライクなバージョン管理",
        "変更追跡と差分可視化",
        "競合検出と解決",
        "チームコラボレーションワークフロー",
        "完全な監査証跡と履歴",
        "自動バックアップとリカバリー",
      ],
      zh: [
        "Excel的Git式版本控制",
        "变更跟踪和差异可视化",
        "冲突检测与解决",
        "团队协作工作流",
        "完整的审计跟踪和历史记录",
        "自动备份和恢复",
      ],
    },
    useCases: {
      en: [
        "Proposal pricing and cost simulation",
        "Client management strategy financial modeling",
        "Multi-scenario ROI analysis for client presentations",
        "Version-controlled budget planning across engagements",
      ],
      ja: [
        "提案金額・コストシミュレーション",
        "クライアント経営戦略の財務モデリング",
        "クライアント提案向けマルチシナリオROI分析",
        "案件横断のバージョン管理付き予算策定",
      ],
      zh: [
        "提案报价与成本模拟",
        "客户经营战略财务建模",
        "面向客户演示的多场景ROI分析",
        "跨项目版本控制预算规划",
      ],
    },
  },
  {
    slug: "sales-insight",
    code: "SLIN",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-primary-400 to-primary-700",
    category: "proposal",
    name: { en: "SalesInsight", ja: "SalesInsight", zh: "SalesInsight" },
    tagline: {
      en: "Proposal Pricing Intelligence & Pipeline Analytics",
      ja: "提案金額インテリジェンスとパイプライン分析",
      zh: "提案报价智能与项目管道分析",
    },
    description: {
      en: "AI-powered analytics for your own consulting pipeline and proposal pricing. Optimize your pricing strategy with historical deal analysis, predict engagement success, and manage your consulting revenue forecasts with real-time intelligence.",
      ja: "自社のコンサルティングパイプラインと提案金額のAI分析。過去の商談分析で料金戦略を最適化し、案件の成約予測を行い、リアルタイムインテリジェンスでコンサル売上予測を管理します。",
      zh: "面向自身咨询项目管道和提案报价的AI分析。通过历史交易分析优化定价策略，预测项目成功率，用实时智能管理咨询收入预测。",
    },
    features: {
      en: [
        "Real-time sales analytics",
        "AI lead scoring and prediction",
        "CRM integration (Salesforce, HubSpot)",
        "Conversation intelligence",
        "Automated deal reporting",
        "Pipeline health monitoring",
      ],
      ja: [
        "リアルタイム営業分析",
        "AIリードスコアリングと予測",
        "CRM統合（Salesforce、HubSpot）",
        "会話インテリジェンス",
        "自動商談レポーティング",
        "パイプライン健全性モニタリング",
      ],
      zh: [
        "实时销售分析",
        "AI线索评分与预测",
        "CRM集成（Salesforce、HubSpot）",
        "对话智能",
        "自动交易报告",
        "管道健康监控",
      ],
    },
    useCases: {
      en: [
        "Proposal pricing optimization from historical data",
        "Consulting pipeline and revenue forecasting",
        "Win/loss analysis for proposal strategy improvement",
        "Client engagement health monitoring",
      ],
      ja: [
        "過去データに基づく提案金額の最適化",
        "コンサルティングパイプラインと売上予測",
        "提案戦略改善のための受注・失注分析",
        "クライアントエンゲージメントの健全性モニタリング",
      ],
      zh: [
        "基于历史数据的提案报价优化",
        "咨询项目管道与营收预测",
        "改善提案策略的中标/落标分析",
        "客户项目健康度监控",
      ],
    },
  },

  // === 3. Business Analysis & Requirements ===
  {
    slug: "insight-slide",
    code: "INSS",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    color: "from-orange-400 to-amber-600",
    category: "research",
    name: { en: "InsightSlide", ja: "InsightSlide", zh: "InsightSlide" },
    tagline: {
      en: "AI-Powered Business Analysis from Client Presentations",
      ja: "クライアント資料からのAI業務分析",
      zh: "从客户资料进行AI业务分析",
    },
    description: {
      en: "Extract and analyze content from client's existing PowerPoint materials to accelerate business research and requirements definition. AI automatically identifies business processes, pain points, and improvement opportunities from presentation decks.",
      ja: "クライアントの既存PowerPoint資料からコンテンツを抽出・分析し、業務調査と要件定義を加速。AIがプレゼン資料から業務プロセス、課題、改善機会を自動的に識別します。",
      zh: "从客户现有PowerPoint资料中提取和分析内容，加速业务调研和需求定义。AI自动从演示资料中识别业务流程、痛点和改善机会。",
    },
    features: {
      en: [
        "AI-powered content extraction",
        "Slide structure analysis",
        "Auto-generation from outlines",
        "Business process identification",
        "Design suggestion engine",
        "Batch processing support",
      ],
      ja: [
        "AI搭載コンテンツ抽出",
        "スライド構造分析",
        "アウトラインからの自動生成",
        "業務プロセスの自動識別",
        "デザイン提案エンジン",
        "バッチ処理対応",
      ],
      zh: [
        "AI驱动的内容提取",
        "幻灯片结构分析",
        "从大纲自动生成",
        "业务流程自动识别",
        "设计建议引擎",
        "批处理支持",
      ],
    },
    useCases: {
      en: [
        "Rapid business survey from client's existing materials",
        "Requirements definition acceleration via AI analysis",
        "As-Is process mapping from client decks",
        "Gap analysis between current and target state",
      ],
      ja: [
        "クライアント既存資料からの迅速な業務調査",
        "AI分析による要件定義の加速",
        "クライアント資料からのAs-Isプロセスマッピング",
        "現状とあるべき姿のギャップ分析",
      ],
      zh: [
        "从客户现有资料快速进行业务调研",
        "通过AI分析加速需求定义",
        "从客户资料进行现状流程映射",
        "现状与目标状态差距分析",
      ],
    },
  },
  {
    slug: "interview-insight",
    code: "IVIN",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-teal-500 to-cyan-600",
    category: "research",
    name: { en: "InterviewInsight", ja: "InterviewInsight", zh: "InterviewInsight" },
    tagline: {
      en: "AI Stakeholder Interview & Business Survey Support",
      ja: "AIステークホルダーヒアリング・業務調査支援",
      zh: "AI利益相关方访谈与业务调研支持",
    },
    description: {
      en: "AI-powered support for stakeholder interviews and business surveys during requirements definition. Structure your interview frameworks, get real-time guidance during hearings, and automatically extract insights and action items from interview sessions.",
      ja: "要件定義時のステークホルダーヒアリングと業務調査をAIで支援。インタビューフレームワークを構造化し、ヒアリング中にリアルタイムのガイダンスを受け、インタビューセッションからインサイトとアクションアイテムを自動抽出します。",
      zh: "AI支持需求定义阶段的利益相关方访谈和业务调研。构建访谈框架，在访谈中获得实时指导，自动从访谈会议中提取洞察和行动项。",
    },
    features: {
      en: [
        "Structured interview frameworks",
        "Real-time evaluation guidance",
        "AI bias detection and alerts",
        "Insight extraction and scoring",
        "Interview analytics dashboard",
        "ATS integration support",
      ],
      ja: [
        "構造化インタビューフレームワーク",
        "リアルタイム評価ガイダンス",
        "AIバイアス検出とアラート",
        "インサイト抽出とスコアリング",
        "インタビュー分析ダッシュボード",
        "ATS統合サポート",
      ],
      zh: [
        "结构化访谈框架",
        "实时评估指导",
        "AI偏见检测和警报",
        "洞察提取与评分",
        "访谈分析仪表板",
        "ATS集成支持",
      ],
    },
    useCases: {
      en: [
        "Stakeholder interview structuring and insight extraction",
        "Business survey automation during As-Is analysis",
        "Requirements hearing support with AI guidance",
        "Cross-department interview consistency management",
      ],
      ja: [
        "ステークホルダーインタビューの構造化とインサイト抽出",
        "As-Is分析時の業務調査自動化",
        "AIガイダンスによる要件ヒアリング支援",
        "部門横断インタビューの一貫性管理",
      ],
      zh: [
        "利益相关方访谈结构化与洞察提取",
        "现状分析中的业务调研自动化",
        "AI指导的需求访谈支持",
        "跨部门访谈一致性管理",
      ],
    },
  },

  // === 4. Content Creation ===
  {
    slug: "insight-movie",
    code: "INMV",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "from-red-500 to-rose-600",
    category: "content",
    name: { en: "InsightMovie", ja: "InsightMovie", zh: "InsightMovie" },
    tagline: {
      en: "AI Video for Requirements Clarity & User Education",
      ja: "要件定義の質向上・ユーザー教育のためのAI動画",
      zh: "提升需求定义质量与用户教育的AI视频",
    },
    description: {
      en: "Transform requirements definitions and business processes into clear, visual video content. Improve stakeholder alignment with video walkthroughs of To-Be designs, and create user training videos from system documentation automatically.",
      ja: "要件定義や業務プロセスを明確でわかりやすい動画コンテンツに変換。To-Be設計の動画ウォークスルーでステークホルダーの合意形成を促進し、システムドキュメントからユーザー向け研修動画を自動作成します。",
      zh: "将需求定义和业务流程转化为清晰直观的视频内容。通过目标设计视频演示促进利益相关方共识，从系统文档自动创建用户培训视频。",
    },
    features: {
      en: [
        "PowerPoint to video conversion",
        "AI-powered video editing",
        "Automated voiceover generation",
        "Smart transition effects",
        "Background music generation",
        "Multi-format video export",
      ],
      ja: [
        "PowerPointから動画変換",
        "AI搭載動画編集",
        "自動ナレーション生成",
        "スマートトランジション効果",
        "BGM自動生成",
        "マルチフォーマット動画出力",
      ],
      zh: [
        "PowerPoint转视频",
        "AI驱动的视频编辑",
        "自动旁白生成",
        "智能转场效果",
        "背景音乐生成",
        "多格式视频导出",
      ],
    },
    useCases: {
      en: [
        "To-Be design walkthroughs for stakeholder buy-in",
        "User training video from system requirements docs",
        "Business process visualization for requirements review",
        "Change management communication videos",
      ],
      ja: [
        "ステークホルダー合意形成のためのTo-Be設計ウォークスルー",
        "システム要件定義書からのユーザー研修動画作成",
        "要件レビュー向け業務プロセスの可視化動画",
        "チェンジマネジメント向けコミュニケーション動画",
      ],
      zh: [
        "面向利益相关方共识的目标设计演示",
        "从系统需求文档创建用户培训视频",
        "需求评审用业务流程可视化视频",
        "变革管理沟通视频",
      ],
    },
  },
  {
    slug: "insight-image-gen",
    code: "INIG",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-purple-500 to-pink-600",
    category: "content",
    name: { en: "InsightImageGen", ja: "InsightImageGen", zh: "InsightImageGen" },
    tagline: {
      en: "AI Visual & Voice Generation for Deliverables",
      ja: "納品物向けAIビジュアル・音声生成",
      zh: "面向交付物的AI视觉与语音生成",
    },
    description: {
      en: "Generate diagrams, illustrations, and voiceovers for consulting deliverables with AI. Produce professional visuals for requirements documents, architecture diagrams for proposals, and narration for client training materials.",
      ja: "AIでコンサルティング納品物向けの図解、イラスト、ナレーションを生成。要件定義書のビジュアル、提案書のアーキテクチャ図、クライアント研修資料のナレーションをプロ品質で制作します。",
      zh: "使用AI为咨询交付物生成图表、插图和旁白。为需求文档制作专业视觉效果，为提案制作架构图，为客户培训资料制作旁白。",
    },
    features: {
      en: [
        "Stable Diffusion image generation",
        "VOICEVOX voice synthesis",
        "Text-to-image with style control",
        "Batch generation workflows",
        "Custom model fine-tuning",
        "High-resolution 4K output",
      ],
      ja: [
        "Stable Diffusion画像生成",
        "VOICEVOX音声合成",
        "スタイル制御付きテキストから画像生成",
        "バッチ生成ワークフロー",
        "カスタムモデルファインチューニング",
        "4K高解像度出力",
      ],
      zh: [
        "Stable Diffusion图像生成",
        "VOICEVOX语音合成",
        "带风格控制的文本生成图像",
        "批量生成工作流",
        "自定义模型微调",
        "4K高分辨率输出",
      ],
    },
    useCases: {
      en: [
        "Architecture diagrams for proposals and deliverables",
        "Narration for client training and e-learning programs",
        "Visual assets for requirements documentation",
        "Concept illustrations for To-Be design presentations",
      ],
      ja: [
        "提案書・納品物向けアーキテクチャ図の生成",
        "クライアント研修・Eラーニング向けナレーション制作",
        "要件定義書向けビジュアルアセット制作",
        "To-Be設計プレゼン向けコンセプトイラスト制作",
      ],
      zh: [
        "提案与交付物架构图生成",
        "客户培训和电子学习旁白制作",
        "需求文档视觉素材制作",
        "目标设计演示概念插图制作",
      ],
    },
  },
];
