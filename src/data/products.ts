import type { Locale } from "@/i18n/translations";

export type ProductCategory = "rpa" | "consulting" | "content";

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
  consulting: {
    en: "Business Analysis, Requirements, Proposal & Strategy Simulation",
    ja: "業務調査・要件定義・提案・経営シミュレーション",
    zh: "业务调研・需求定义・提案・经营模拟",
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
    slug: "insight-bot",
    code: "INBT",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "from-emerald-500 to-teal-600",
    category: "rpa",
    name: { en: "InsightBot", ja: "InsightBot", zh: "InsightBot" },
    tagline: {
      en: "AI-Powered Business Optimization RPA",
      ja: "AIを活用した業務最適化RPA製品",
      zh: "AI驱动的业务优化RPA产品",
    },
    description: {
      en: "Turn AI-generated Python scripts into production bots and visually orchestrate them into automated workflows. From bot creation to visual job design, InsightBot streamlines business process automation delivery.",
      ja: "AIで作成したPythonをボット化し、開発したボットをビジュアルにJOB化して業務を自動化。ボット作成からビジュアルなJOB設計まで、業務プロセス自動化のデリバリーを効率化します。",
      zh: "将AI生成的Python脚本转化为生产机器人，并通过可视化编排实现业务流程自动化。从机器人创建到可视化JOB设计，全面简化业务流程自动化交付。",
    },
    features: {
      en: [
        "Python-to-bot conversion",
        "Visual job orchestration designer",
        "AI-assisted bot creation",
        "Web and desktop automation",
        "Scheduled and triggered execution",
        "Centralized bot management",
      ],
      ja: [
        "Pythonからボットへの変換",
        "ビジュアルJOBオーケストレーション設計",
        "AI支援ボット作成",
        "Web・デスクトップ自動化",
        "スケジュール・トリガー実行",
        "集中ボット管理",
      ],
      zh: [
        "Python转机器人",
        "可视化JOB编排设计",
        "AI辅助机器人创建",
        "Web和桌面自动化",
        "定时和触发执行",
        "集中式机器人管理",
      ],
    },
    useCases: {
      en: [
        "Convert AI-generated Python into production bots",
        "Visual job design for business process automation",
        "Client back-office workflow automation delivery",
        "Managed RPA service as recurring revenue",
      ],
      ja: [
        "AIで作成したPythonを本番ボットに変換",
        "業務プロセス自動化のビジュアルJOB設計",
        "クライアントのバックオフィス業務自動化の納品",
        "継続収益としてのマネージドRPAサービス",
      ],
      zh: [
        "将AI生成的Python转化为生产机器人",
        "业务流程自动化的可视化JOB设计",
        "客户后台业务流程自动化交付",
        "作为经常性收入的托管RPA服务",
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
      en: "Automate the migration of clients' existing RPA and low-code environments to other platforms. From complexity analysis and effort estimation of original logic, to migration strategy proposals and automated process conversion — end-to-end migration support.",
      ja: "クライアント既存のRPA・ローコード環境の他プラットフォームへの移行を自動化。元ロジックの複雑性分析による見積もり、移行方針提案から、プロセスの自動変換作業まで対応します。",
      zh: "自动化客户现有RPA和低代码环境向其他平台的迁移。从原始逻辑的复杂性分析与估算、迁移方针提案，到流程的自动转换作业，提供端到端迁移支持。",
    },
    features: {
      en: [
        "Original logic complexity analysis",
        "Automated migration effort estimation",
        "Migration strategy proposal generation",
        "Cross-platform process auto-conversion",
        "Risk and dependency mapping",
        "Detailed migration roadmap",
      ],
      ja: [
        "元ロジックの複雑性分析",
        "移行工数の自動見積もり",
        "移行方針の提案生成",
        "プラットフォーム間プロセス自動変換",
        "リスクと依存関係マッピング",
        "詳細な移行ロードマップ",
      ],
      zh: [
        "原始逻辑复杂性分析",
        "迁移工作量自动估算",
        "迁移方针提案生成",
        "跨平台流程自动转换",
        "风险和依赖关系映射",
        "详细的迁移路线图",
      ],
    },
    useCases: {
      en: [
        "RPA platform migration with automated process conversion",
        "Migration effort estimation from original logic analysis",
        "Migration strategy proposals for client decision-making",
        "Low-code environment modernization projects",
      ],
      ja: [
        "プロセス自動変換によるRPAプラットフォーム移行",
        "元ロジック分析に基づく移行工数見積もり",
        "クライアント意思決定向け移行方針提案",
        "ローコード環境の近代化プロジェクト",
      ],
      zh: [
        "通过自动流程转换进行RPA平台迁移",
        "基于原始逻辑分析的迁移工作量估算",
        "面向客户决策的迁移方针提案",
        "低代码环境现代化项目",
      ],
    },
  },
  {
    slug: "insight-py",
    code: "INPY",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-sky-500 to-cyan-600",
    category: "rpa",
    name: { en: "InsightPy", ja: "InsightPy", zh: "InsightPy" },
    tagline: {
      en: "Python Execution Platform for Business Survey & Data Collection",
      ja: "業務調査・データ収集のためのPython実行基盤",
      zh: "面向业务调研与数据收集的Python执行平台",
    },
    description: {
      en: "Run Python without the hassle of setting up execution environments. From client device automation and citizen development to Python language education — a versatile platform applicable across a wide range of fields.",
      ja: "手間のかかるPython実行環境なしでPythonの実行が可能に。クライアント端末の自動化、民主化開発から、Pythonの言語教育まで、幅広い分野での活用が可能です。",
      zh: "无需繁琐的Python执行环境搭建即可运行Python。从客户终端自动化、全民开发到Python语言教育，可在广泛领域中灵活运用。",
    },
    features: {
      en: [
        "Zero-setup Python execution",
        "AI-powered code generation",
        "Client device automation",
        "Citizen development enablement",
        "Data analysis toolkit",
        "Python education platform",
      ],
      ja: [
        "環境構築不要のPython実行",
        "AI搭載コード生成",
        "クライアント端末の自動化",
        "民主化開発の実現",
        "データ分析ツールキット",
        "Python言語教育基盤",
      ],
      zh: [
        "零配置Python执行",
        "AI驱动的代码生成",
        "客户终端自动化",
        "全民开发赋能",
        "数据分析工具包",
        "Python语言教育平台",
      ],
    },
    useCases: {
      en: [
        "Client device automation without environment setup",
        "Citizen development for non-engineers",
        "Python language education and training",
        "Business survey data collection and analysis",
      ],
      ja: [
        "環境構築不要のクライアント端末自動化",
        "非エンジニア向け民主化開発",
        "Pythonの言語教育・研修",
        "業務調査のデータ収集・分析",
      ],
      zh: [
        "无需环境搭建的客户终端自动化",
        "面向非工程师的全民开发",
        "Python语言教育与培训",
        "业务调研数据收集与分析",
      ],
    },
  },

  // === 2. Business Analysis, Requirements, Proposal & Strategy Simulation ===
  {
    slug: "insight-office-sheet",
    code: "HMSH",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "from-green-500 to-green-700",
    category: "consulting",
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
    slug: "insight-slide",
    code: "INSS",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    color: "from-orange-400 to-amber-600",
    category: "consulting",
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
    category: "consulting",
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

  // === 3. Content Creation ===
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
