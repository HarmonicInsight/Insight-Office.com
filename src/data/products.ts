import type { Locale } from "@/i18n/translations";

export type ProductCategory = "office" | "ai" | "rpa" | "sales";

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
  office: { en: "Office Suite", ja: "オフィススイート", zh: "办公套件" },
  ai: { en: "AI & Creative", ja: "AI・クリエイティブ", zh: "AI与创意" },
  rpa: { en: "Automation & RPA", ja: "自動化・RPA", zh: "自动化与RPA" },
  sales: { en: "Business Intelligence", ja: "ビジネスインテリジェンス", zh: "商业智能" },
};

export const products: Product[] = [
  // === Office Suite ===
  {
    slug: "harmonic-slide",
    code: "HMSL",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "from-amber-500 to-amber-700",
    category: "office",
    name: { en: "HarmonicSlide", ja: "HarmonicSlide", zh: "HarmonicSlide" },
    tagline: {
      en: "PowerPoint Presentation Automation",
      ja: "PowerPointプレゼンテーション自動化",
      zh: "PowerPoint演示文稿自动化",
    },
    description: {
      en: "Automate PowerPoint presentation creation and management. Generate slides from templates, apply consistent branding, and streamline your presentation workflow with intelligent automation.",
      ja: "PowerPointプレゼンテーションの作成と管理を自動化。テンプレートからスライドを生成し、一貫したブランディングを適用し、インテリジェントな自動化でプレゼンテーションワークフローを効率化します。",
      zh: "自动化PowerPoint演示文稿的创建和管理。从模板生成幻灯片，应用一致的品牌标识，通过智能自动化简化演示工作流程。",
    },
    features: {
      en: [
        "Template-based slide generation",
        "Brand consistency enforcement",
        "Batch presentation processing",
        "Custom layout automation",
        "Multi-format export support",
        "Team collaboration features",
      ],
      ja: [
        "テンプレートベースのスライド生成",
        "ブランド一貫性の適用",
        "バッチプレゼンテーション処理",
        "カスタムレイアウト自動化",
        "マルチフォーマットエクスポート対応",
        "チームコラボレーション機能",
      ],
      zh: [
        "基于模板的幻灯片生成",
        "品牌一致性保障",
        "批量演示处理",
        "自定义布局自动化",
        "多格式导出支持",
        "团队协作功能",
      ],
    },
    useCases: {
      en: ["Client proposal deck automation", "Standardized deliverable templates", "Multi-client branding management", "Batch report generation for engagements"],
      ja: ["クライアント提案資料の自動化", "納品物テンプレートの標準化", "マルチクライアントのブランド管理", "案件ごとのバッチレポート生成"],
      zh: ["客户提案资料自动化", "交付物模板标准化", "多客户品牌管理", "项目批量报告生成"],
    },
  },
  {
    slug: "harmonic-doc",
    code: "HMDC",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "from-blue-500 to-blue-700",
    category: "office",
    name: { en: "HarmonicDoc", ja: "HarmonicDoc", zh: "HarmonicDoc" },
    tagline: {
      en: "Word Document Operations & Automation",
      ja: "Word文書操作と自動化",
      zh: "Word文档操作与自动化",
    },
    description: {
      en: "Streamline Word document operations with intelligent automation. Generate, edit, and transform documents at scale with template processing, mail merge, and advanced formatting capabilities.",
      ja: "インテリジェントな自動化でWord文書操作を効率化。テンプレート処理、差し込み印刷、高度な書式設定機能を使用して、文書の生成、編集、変換を大規模に実行します。",
      zh: "通过智能自动化简化Word文档操作。使用模板处理、邮件合并和高级格式化功能大规模生成、编辑和转换文档。",
    },
    features: {
      en: [
        "Template-based document generation",
        "Advanced mail merge processing",
        "Document format conversion",
        "Automated content insertion",
        "Style and formatting management",
        "PDF export with fidelity",
      ],
      ja: [
        "テンプレートベースの文書生成",
        "高度な差し込み処理",
        "文書フォーマット変換",
        "自動コンテンツ挿入",
        "スタイルと書式管理",
        "高精度PDF出力",
      ],
      zh: [
        "基于模板的文档生成",
        "高级邮件合并处理",
        "文档格式转换",
        "自动内容插入",
        "样式和格式管理",
        "高保真PDF导出",
      ],
    },
    useCases: {
      en: ["Client contract automation", "Consulting deliverable generation", "Compliance document packages", "Multi-tenant document workflows"],
      ja: ["クライアント契約書の自動化", "コンサルティング納品物の生成", "コンプライアンス文書パッケージ", "マルチテナント文書ワークフロー"],
      zh: ["客户合同自动化", "咨询交付物生成", "合规文档包", "多租户文档工作流"],
    },
  },
  {
    slug: "harmonic-sheet",
    code: "HMSH",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "from-green-500 to-green-700",
    category: "office",
    name: { en: "HarmonicSheet", ja: "HarmonicSheet", zh: "HarmonicSheet" },
    tagline: {
      en: "Excel Version Control & Team Collaboration",
      ja: "Excelバージョン管理とチームコラボレーション",
      zh: "Excel版本控制与团队协作",
    },
    description: {
      en: "Bring Git-like version control to Excel spreadsheets. Track changes, manage versions, resolve conflicts, and enable seamless team collaboration on spreadsheet data with full audit trails.",
      ja: "ExcelスプレッドシートにGitのようなバージョン管理を導入。変更の追跡、バージョン管理、競合の解決を行い、完全な監査証跡を備えたスプレッドシートデータのシームレスなチームコラボレーションを実現します。",
      zh: "为Excel电子表格带来类似Git的版本控制。跟踪更改、管理版本、解决冲突，并通过完整的审计跟踪实现无缝的团队协作。",
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
      en: ["Client financial model governance", "Multi-stakeholder data management", "Regulatory reporting for client audits", "Cross-department budget consolidation projects"],
      ja: ["クライアント財務モデルのガバナンス", "複数ステークホルダーのデータ管理", "クライアント監査向け規制報告", "部門横断予算統合プロジェクト"],
      zh: ["客户财务模型治理", "多利益相关方数据管理", "客户审计监管报告", "跨部门预算整合项目"],
    },
  },

  // === AI & Creative ===
  {
    slug: "insight-slide",
    code: "INSS",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    color: "from-orange-400 to-amber-600",
    category: "ai",
    name: { en: "InsightSlide", ja: "InsightSlide", zh: "InsightSlide" },
    tagline: {
      en: "PowerPoint Content Extraction & AI Enhancement",
      ja: "PowerPointコンテンツ抽出とAI強化",
      zh: "PowerPoint内容提取与AI增强",
    },
    description: {
      en: "Extract, analyze, and enhance PowerPoint content with AI. Automatically extract text, images, and structure from presentations, then enhance them with AI-powered suggestions, auto-generation, and speech coaching.",
      ja: "AIでPowerPointコンテンツを抽出、分析、強化。プレゼンテーションからテキスト、画像、構造を自動抽出し、AIによる提案、自動生成、スピーチコーチングで強化します。",
      zh: "使用AI提取、分析和增强PowerPoint内容。自动从演示文稿中提取文本、图像和结构，然后通过AI建议、自动生成和演讲指导进行增强。",
    },
    features: {
      en: [
        "AI-powered content extraction",
        "Slide structure analysis",
        "Auto-generation from outlines",
        "Speech coaching and rehearsal",
        "Design suggestion engine",
        "Batch processing support",
      ],
      ja: [
        "AI搭載コンテンツ抽出",
        "スライド構造分析",
        "アウトラインからの自動生成",
        "スピーチコーチングとリハーサル",
        "デザイン提案エンジン",
        "バッチ処理対応",
      ],
      zh: [
        "AI驱动的内容提取",
        "幻灯片结构分析",
        "从大纲自动生成",
        "演讲指导和排练",
        "设计建议引擎",
        "批处理支持",
      ],
    },
    useCases: {
      en: ["Client presentation quality enhancement", "Deliverable content repurposing across projects", "Client training material creation", "Executive steering committee briefings"],
      ja: ["クライアント向けプレゼン品質の強化", "プロジェクト間の納品コンテンツ再活用", "クライアント研修資料の作成", "経営ステアリング委員会向け報告"],
      zh: ["客户演示质量提升", "跨项目交付内容再利用", "客户培训资料创建", "经营指导委员会汇报"],
    },
  },
  {
    slug: "insight-image-gen",
    code: "INIG",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-purple-500 to-pink-600",
    category: "ai",
    name: { en: "InsightImageGen", ja: "InsightImageGen", zh: "InsightImageGen" },
    tagline: {
      en: "AI Image & Audio Generation",
      ja: "AI画像・音声生成",
      zh: "AI图像与音频生成",
    },
    description: {
      en: "Generate high-quality images and audio with AI. Powered by Stable Diffusion and VOICEVOX, create stunning visuals and natural-sounding voiceovers for your enterprise content with an intuitive interface.",
      ja: "AIで高品質な画像と音声を生成。Stable DiffusionとVOICEVOXを活用し、直感的なインターフェースでエンタープライズコンテンツ向けの美しいビジュアルと自然な音声を作成します。",
      zh: "使用AI生成高质量图像和音频。基于Stable Diffusion和VOICEVOX，通过直观界面为企业内容创建精美视觉效果和自然语音。",
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
      en: ["Client marketing asset delivery", "E-learning content for client training programs", "Product/service visualization for client launches", "Client digital presence setup"],
      ja: ["クライアント向けマーケティングアセット納品", "クライアント研修プログラム向けEラーニング制作", "クライアントの製品・サービスローンチのビジュアル制作", "クライアントのデジタルプレゼンス構築"],
      zh: ["客户营销素材交付", "客户培训项目电子学习内容", "客户产品/服务发布可视化", "客户数字化品牌构建"],
    },
  },
  {
    slug: "insight-movie",
    code: "INMV",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "from-red-500 to-rose-600",
    category: "ai",
    name: { en: "InsightMovie", ja: "InsightMovie", zh: "InsightMovie" },
    tagline: {
      en: "AI Video Creation from Any Content",
      ja: "あらゆるコンテンツからAI動画作成",
      zh: "从任意内容创建AI视频",
    },
    description: {
      en: "Transform images, text, and PowerPoint presentations into professional videos with AI. Automated editing, transitions, voiceover, and music generation for rapid video content production.",
      ja: "画像、テキスト、PowerPointプレゼンテーションをAIでプロフェッショナルな動画に変換。自動編集、トランジション、ナレーション、音楽生成で迅速な動画コンテンツ制作を実現します。",
      zh: "使用AI将图像、文本和PowerPoint演示转化为专业视频。自动编辑、转场、旁白和音乐生成，实现快速视频内容制作。",
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
      en: ["Client onboarding video production", "Client marketing video delivery", "Solution demo creation for prospects", "Client internal communication tools"],
      ja: ["クライアント向けオンボーディング動画制作", "クライアントのマーケティング動画納品", "見込み客向けソリューションデモ制作", "クライアントの社内コミュニケーション支援"],
      zh: ["客户入职视频制作", "客户营销视频交付", "潜在客户解决方案演示", "客户内部沟通工具"],
    },
  },

  // === Automation & RPA ===
  {
    slug: "insight-py",
    code: "INPY",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-sky-500 to-cyan-600",
    category: "rpa",
    name: { en: "InsightPy", ja: "InsightPy", zh: "InsightPy" },
    tagline: {
      en: "Python Execution for Windows Automation",
      ja: "Windows自動化のためのPython実行環境",
      zh: "面向Windows自动化的Python执行环境",
    },
    description: {
      en: "A specialized Python execution environment designed for Windows automation. Run Python scripts seamlessly on Windows with built-in support for office automation, data processing, and system integration tasks.",
      ja: "Windows自動化に特化したPython実行環境。オフィス自動化、データ処理、システム統合タスクの組み込みサポートにより、Windows上でPythonスクリプトをシームレスに実行できます。",
      zh: "专为Windows自动化设计的Python执行环境。内置支持办公自动化、数据处理和系统集成任务，在Windows上无缝运行Python脚本。",
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
      en: ["Client desktop workflow automation", "Data pipeline setup for client systems", "Automated reporting for client operations", "Client IT infrastructure management"],
      ja: ["クライアントのデスクトップ業務自動化", "クライアントシステム向けデータパイプライン構築", "クライアント業務の自動レポーティング", "クライアントITインフラ管理"],
      zh: ["客户桌面工作流自动化", "客户系统数据管道搭建", "客户运营自动报告", "客户IT基础设施管理"],
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
      en: "Python-Based RPA Automation Bot",
      ja: "PythonベースのRPA自動化ボット",
      zh: "基于Python的RPA自动化机器人",
    },
    description: {
      en: "Build and deploy intelligent RPA bots with Python. Automate repetitive business processes with a visual designer, AI-assisted workflow creation, and robust error handling for enterprise reliability.",
      ja: "Pythonでインテリジェントな RPAボットを構築・展開。ビジュアルデザイナー、AI支援ワークフロー作成、エンタープライズの信頼性のための堅牢なエラーハンドリングで、反復的なビジネスプロセスを自動化します。",
      zh: "使用Python构建和部署智能RPA机器人。通过可视化设计器、AI辅助工作流创建和健壮的错误处理，自动化重复性业务流程，确保企业级可靠性。",
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
      en: ["Client back-office process automation", "Invoice/AP automation for client finance teams", "Client email workflow optimization", "Legacy system migration and integration projects"],
      ja: ["クライアントのバックオフィス業務自動化", "クライアント経理部門の請求書・AP自動化", "クライアントのメールワークフロー最適化", "レガシーシステム移行・統合プロジェクト"],
      zh: ["客户后台业务流程自动化", "客户财务部门发票/AP自动化", "客户邮件工作流优化", "遗留系统迁移和集成项目"],
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
      en: "RPA & Low-Code Migration Assessment",
      ja: "RPA・ローコードプラットフォーム移行評価",
      zh: "RPA与低代码平台迁移评估",
    },
    description: {
      en: "Assess and plan migrations from RPA and low-code platforms. Analyze existing automation workflows, identify optimization opportunities, and generate detailed migration roadmaps with effort estimates.",
      ja: "RPAおよびローコードプラットフォームからの移行を評価・計画。既存の自動化ワークフローを分析し、最適化の機会を特定し、工数見積もり付きの詳細な移行ロードマップを生成します。",
      zh: "评估和规划RPA及低代码平台的迁移。分析现有自动化工作流，识别优化机会，并生成带有工作量估算的详细迁移路线图。",
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
      en: ["Client platform modernization assessments", "RPA consolidation consulting", "Vendor evaluation for client procurement", "Client DX roadmap and planning engagements"],
      ja: ["クライアントのプラットフォーム近代化アセスメント", "RPA統合コンサルティング", "クライアント調達向けベンダー評価", "クライアントのDXロードマップ策定支援"],
      zh: ["客户平台现代化评估", "RPA整合咨询", "客户采购供应商评估", "客户DX路线图规划"],
    },
  },

  // === Business Intelligence ===
  {
    slug: "sales-insight",
    code: "SLIN",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-primary-400 to-primary-700",
    category: "sales",
    name: { en: "SalesInsight", ja: "SalesInsight", zh: "SalesInsight" },
    tagline: {
      en: "AI-Powered Sales Support & Real-Time Analysis",
      ja: "AI搭載営業支援とリアルタイム分析",
      zh: "AI驱动的销售支持与实时分析",
    },
    description: {
      en: "Empower your sales team with real-time AI analysis and CRM integration. Get intelligent lead scoring, conversation insights, deal predictions, and automated reporting to close more deals faster.",
      ja: "リアルタイムAI分析とCRM統合で営業チームを強化。インテリジェントなリードスコアリング、会話インサイト、商談予測、自動レポーティングで、より多くの商談をより速くクロージングします。",
      zh: "通过实时AI分析和CRM集成赋能销售团队。智能线索评分、对话洞察、交易预测和自动报告，助您更快达成更多交易。",
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
      en: ["Client sales team optimization projects", "Revenue forecasting system implementation", "Customer intelligence platform delivery", "Sales performance consulting engagements"],
      ja: ["クライアント営業チーム最適化プロジェクト", "売上予測システムの導入支援", "顧客インテリジェンス基盤の構築", "営業パフォーマンスコンサルティング"],
      zh: ["客户销售团队优化项目", "营收预测系统实施", "客户智能平台交付", "销售绩效咨询"],
    },
  },
  {
    slug: "interview-insight",
    code: "IVIN",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-teal-500 to-cyan-600",
    category: "sales",
    name: { en: "InterviewInsight", ja: "InterviewInsight", zh: "InterviewInsight" },
    tagline: {
      en: "AI-Powered Recruitment Interview Support",
      ja: "AI搭載採用面接支援",
      zh: "AI驱动的招聘面试支持",
    },
    description: {
      en: "Transform your hiring process with objective, AI-powered interview evaluation. Structured interview frameworks, real-time assessment guidance, bias detection, and comprehensive candidate scoring for fair and effective recruitment.",
      ja: "客観的なAI搭載面接評価で採用プロセスを変革。構造化面接フレームワーク、リアルタイム評価ガイダンス、バイアス検出、包括的な候補者スコアリングで、公平で効果的な採用を実現します。",
      zh: "通过客观的AI面试评估变革招聘流程。结构化面试框架、实时评估指导、偏见检测和全面的候选人评分，实现公平高效的招聘。",
    },
    features: {
      en: [
        "Structured interview frameworks",
        "Real-time evaluation guidance",
        "AI bias detection and alerts",
        "Candidate scoring and ranking",
        "Interview analytics dashboard",
        "ATS integration support",
      ],
      ja: [
        "構造化面接フレームワーク",
        "リアルタイム評価ガイダンス",
        "AIバイアス検出とアラート",
        "候補者スコアリングとランキング",
        "面接分析ダッシュボード",
        "ATS統合サポート",
      ],
      zh: [
        "结构化面试框架",
        "实时评估指导",
        "AI偏见检测和警报",
        "候选人评分和排名",
        "面试分析仪表板",
        "ATS集成支持",
      ],
    },
    useCases: {
      en: ["Client HR transformation projects", "Large-scale recruitment process consulting", "Executive search firm digitalization", "DE&I hiring program implementation"],
      ja: ["クライアントの人事変革プロジェクト", "大規模採用プロセスコンサルティング", "エグゼクティブサーチ企業のDX化", "DE&I採用プログラムの導入支援"],
      zh: ["客户HR转型项目", "大规模招聘流程咨询", "高管搜索公司数字化", "DE&I招聘项目实施"],
    },
  },
];
