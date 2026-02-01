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
      en: "Excel-Based Management Metrics, Budget Tracking & Planning Simulation",
      ja: "経営数値管理・予実管理・計画シミュレーション",
      zh: "经营数值管理・预实管理・计划模拟",
    },
    description: {
      en: "Open your existing Excel files with InsightOfficeSheet to unlock version control, cell-level change history, a built-in bulletin board, and AI chat — all on top of your familiar Excel workflow. No cloud environment required: simply place the file on a shared server and multiple people can collaborate on a single file, tracking who changed what and when as they work.",
      ja: "今お使いのExcelファイルをこのツールで開くだけで、バージョン管理、セル単位の変更履歴管理、掲示板機能、AIチャットが実現できます。クラウドのような環境も不要で、共有サーバーに置いておけば1つのファイルを複数の人とコラボレーションし、誰がいつ何を変更したかを確認しながら作業を進められます。",
      zh: "只需用InsightOfficeSheet打开您现有的Excel文件，即可实现版本控制、单元格级别的变更历史管理、公告板功能和AI聊天。无需云环境，只需将文件放在共享服务器上，多人即可协作编辑同一文件，并随时确认谁在何时更改了什么。",
    },
    features: {
      en: [
        "Version control for Excel files",
        "Cell-level change history tracking",
        "Built-in bulletin board for team communication",
        "AI chat integration",
        "Shared server collaboration (no cloud required)",
        "Full audit trail — who changed what and when",
      ],
      ja: [
        "Excelファイルのバージョン管理",
        "セル単位の変更履歴管理",
        "掲示板機能によるチームコミュニケーション",
        "AIチャット統合",
        "共有サーバーでのコラボレーション（クラウド不要）",
        "誰がいつ何を変更したかの完全な監査証跡",
      ],
      zh: [
        "Excel文件版本控制",
        "单元格级别的变更历史管理",
        "内置公告板团队沟通功能",
        "AI聊天集成",
        "共享服务器协作（无需云环境）",
        "完整审计跟踪——谁在何时更改了什么",
      ],
    },
    useCases: {
      en: [
        "Management metrics tracking and budget vs. actual reporting",
        "Planning simulation and scenario analysis on Excel",
        "Multi-person Excel collaboration on shared server",
        "Cell-level change review for financial models and proposals",
      ],
      ja: [
        "経営数値管理・予実管理レポーティング",
        "Excelでの計画シミュレーション・シナリオ分析",
        "共有サーバー上での複数人によるExcelコラボレーション",
        "財務モデル・提案書のセル単位の変更レビュー",
      ],
      zh: [
        "经营数值管理与预实管理报告",
        "Excel上的计划模拟与场景分析",
        "共享服务器上多人Excel协作",
        "财务模型和提案的单元格级别变更审阅",
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
      en: "PowerPoint Text Extraction & Excel-Based Review Tool",
      ja: "PowerPointテキスト抽出・Excel編集レビューツール",
      zh: "PowerPoint文本提取与Excel编辑审阅工具",
    },
    description: {
      en: "Extract all text from PowerPoint slides and export it to a screen view or Excel for efficient editing. Reviewing hundreds of PowerPoint pages is extremely inefficient — by exporting to Excel, you can easily check the overall structure, catch typos, and review content at scale. Speech notes can also be registered from Excel, making presentation preparation much smoother. Additionally, by translating the exported Excel into other languages and re-importing, multilingual translation of presentation materials becomes remarkably easy.",
      ja: "PowerPointのテキストを全て抽出し、画面上もしくはExcelに落として編集できるツールです。何百ページものPowerPointのレビューは非常に作業効率が悪いため、Excelに出力することで全体の骨子確認や誤字脱字のチェックが格段に容易になります。スピーチノートもExcelから登録できるため、プレゼンテーションの準備も楽になります。さらに、Excelに落としたテキストを多言語に翻訳して取り込むことで、資料の多言語翻訳もとても簡単に行えます。",
      zh: "提取PowerPoint中的所有文本，导出到屏幕视图或Excel进行高效编辑。审阅数百页PowerPoint效率极低，导出到Excel后可以轻松检查整体结构、发现错别字并大规模审阅内容。还可以从Excel注册演讲备注，使演示准备更加顺畅。此外，将导出的Excel翻译成其他语言后重新导入，即可轻松实现演示资料的多语言翻译。",
    },
    features: {
      en: [
        "Full text extraction from PowerPoint",
        "Export to Excel for bulk editing",
        "On-screen text review and editing",
        "Typo and content structure checking",
        "Speech notes registration from Excel",
        "Multilingual translation via Excel export/import",
      ],
      ja: [
        "PowerPointからの全テキスト抽出",
        "Excelへのエクスポートで一括編集",
        "画面上でのテキストレビュー・編集",
        "誤字脱字・構成チェック",
        "Excelからのスピーチノート登録",
        "Excel経由の多言語翻訳・取り込み",
      ],
      zh: [
        "PowerPoint全文本提取",
        "导出到Excel进行批量编辑",
        "屏幕上文本审阅与编辑",
        "错别字和内容结构检查",
        "从Excel注册演讲备注",
        "通过Excel导出导入实现多语言翻译",
      ],
    },
    useCases: {
      en: [
        "Efficient review of large PowerPoint decks (100+ pages)",
        "Bulk typo and terminology checking via Excel export",
        "Presentation preparation with speech notes from Excel",
        "Multilingual presentation translation via Excel workflow",
      ],
      ja: [
        "大量PowerPoint資料（100ページ超）の効率的レビュー",
        "Excelエクスポートによる誤字脱字・用語の一括チェック",
        "Excelからのスピーチノート登録でプレゼン準備の効率化",
        "Excel経由のプレゼン資料多言語翻訳",
      ],
      zh: [
        "大量PowerPoint资料（100页以上）的高效审阅",
        "通过Excel导出进行错别字和术语批量检查",
        "从Excel注册演讲备注高效准备演示",
        "通过Excel工作流实现演示资料多语言翻译",
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
      en: "Auto Video Creation from Images & Text",
      ja: "画像とテキストから動画を自動作成",
      zh: "从图像和文本自动创建视频",
    },
    description: {
      en: "Enter descriptive text for images and InsightMovie automatically converts it to speech and produces a video. Turn presentation materials into videos for playback, or create educational content with ease. It can also convert PowerPoint slides into images and turn speech notes into narration to automatically generate videos — dramatically improving the efficiency of presentation preparation and review.",
      ja: "画像に説明用のテキストを入力するだけで、自動で音声化して動画を作成。プレゼンテーション資料を動画にして流したり、教育用の教材を動画にするのも簡単です。さらに、PowerPointの資料をスライド画像に変換し、スピーチノートを音声化して自動で動画を作成する機能も搭載。プレゼンテーションの準備やレビューの効率が格段に向上します。",
      zh: "只需输入图像的说明文字，即可自动转换为语音并生成视频。轻松将演示资料制作成视频播放，或将教育教材转换为视频。还可以将PowerPoint资料转换为图像，将演讲备注转换为语音，自动生成视频——大幅提升演示准备和审阅的效率。",
    },
    features: {
      en: [
        "Image + text to video auto-generation",
        "Automatic text-to-speech conversion",
        "PowerPoint slides to video conversion",
        "Speech notes to narration automation",
        "Presentation review video creation",
        "Multi-format video export",
      ],
      ja: [
        "画像＋テキストからの動画自動生成",
        "テキストの自動音声変換",
        "PowerPointスライドから動画変換",
        "スピーチノートの自動ナレーション化",
        "プレゼンテーションレビュー動画の作成",
        "マルチフォーマット動画出力",
      ],
      zh: [
        "图像+文本自动生成视频",
        "文本自动语音转换",
        "PowerPoint幻灯片转视频",
        "演讲备注自动旁白化",
        "演示审阅视频创建",
        "多格式视频导出",
      ],
    },
    useCases: {
      en: [
        "Presentation materials converted to video for playback",
        "Educational and training content video creation",
        "PowerPoint to narrated video for review efficiency",
        "Client-facing business process explanation videos",
      ],
      ja: [
        "プレゼンテーション資料を動画化して配信",
        "教育・研修コンテンツの動画作成",
        "PowerPointからナレーション付き動画でレビュー効率化",
        "クライアント向け業務プロセス説明動画の作成",
      ],
      zh: [
        "将演示资料转换为视频播放",
        "教育培训内容的视频制作",
        "PowerPoint转带旁白视频提升审阅效率",
        "面向客户的业务流程说明视频制作",
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
      en: "Batch AI Image Generation for Business Materials",
      ja: "業務資料向けAI画像の大量自動生成ツール",
      zh: "面向业务资料的AI图像批量自动生成工具",
    },
    description: {
      en: "AI image generation often requires extensive trial and error — the same prompt rarely produces the perfect result on the first try. InsightImageGen lets you define prompts in JSON and automatically generate dozens or hundreds of images in batch. A built-in management tool makes it easy to review, compare, and delete generated images to find the perfect visual for your deliverables.",
      ja: "AI画像生成は同じプロンプトでも思い通りの結果になることは稀で、何十回・何百回もの試行錯誤が欠かせません。InsightImageGenはJSONにプロンプトを記述し、何十枚・何百枚もの画像を自動で大量生成。作成した画像は管理ツールで一覧確認でき、不要な画像の削除も簡単に行えます。",
      zh: "AI图像生成即使使用相同提示词也很难一次得到理想结果，需要反复数十次甚至数百次的试错。InsightImageGen让您在JSON中编写提示词，自动批量生成数十张乃至数百张图像。通过内置管理工具，可以轻松浏览、比较和删除生成的图像。",
    },
    features: {
      en: [
        "JSON-based prompt batch definition",
        "Bulk image generation (dozens to hundreds)",
        "Built-in image management and review tool",
        "Easy deletion and filtering of results",
        "Stable Diffusion integration",
        "High-resolution 4K output",
      ],
      ja: [
        "JSONベースのプロンプト一括定義",
        "大量画像の自動バッチ生成（数十〜数百枚）",
        "生成画像の管理・確認ツール内蔵",
        "不要画像の簡単削除・フィルタリング",
        "Stable Diffusion統合",
        "4K高解像度出力",
      ],
      zh: [
        "基于JSON的提示词批量定义",
        "自动批量生成大量图像（数十至数百张）",
        "内置生成图像管理与浏览工具",
        "轻松删除和筛选结果",
        "Stable Diffusion集成",
        "4K高分辨率输出",
      ],
    },
    useCases: {
      en: [
        "Batch generation of visuals for consulting deliverables",
        "Trial-and-error image creation for proposal materials",
        "Concept illustration generation with prompt iteration",
        "Visual asset library building for recurring projects",
      ],
      ja: [
        "コンサルティング納品物向けビジュアルの大量生成",
        "提案資料向け画像の試行錯誤的な作成",
        "プロンプト反復によるコンセプトイラスト生成",
        "継続案件向けビジュアルアセットライブラリの構築",
      ],
      zh: [
        "咨询交付物视觉素材批量生成",
        "提案资料图像的反复试错创作",
        "通过提示词迭代生成概念插图",
        "为持续项目构建视觉素材库",
      ],
    },
  },
];
