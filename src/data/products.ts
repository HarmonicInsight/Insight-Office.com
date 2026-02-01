import type { Locale } from "@/i18n/translations";

export type Product = {
  slug: string;
  icon: string;
  color: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  useCases: Record<Locale, string[]>;
};

export const products: Product[] = [
  {
    slug: "insight-learning",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "from-blue-500 to-indigo-600",
    name: {
      en: "Insight Learning",
      ja: "Insight Learning",
      zh: "Insight Learning",
    },
    tagline: {
      en: "AI-Powered 1-on-1 Teaching Platform",
      ja: "AI搭載の1対1教育プラットフォーム",
      zh: "AI驱动的一对一教学平台",
    },
    description: {
      en: "A comprehensive learning management system featuring real-time video sessions, mobile-first design, and AI-driven personalized learning paths. Built with TypeScript for maximum reliability and developer experience.",
      ja: "リアルタイムビデオセッション、モバイルファーストデザイン、AI駆動のパーソナライズされた学習パスを特徴とする包括的な学習管理システム。最大限の信頼性と開発者エクスペリエンスのためにTypeScriptで構築されています。",
      zh: "一个全面的学习管理系统，具备实时视频会话、移动优先设计和AI驱动的个性化学习路径。使用TypeScript构建，确保最大的可靠性和开发者体验。",
    },
    features: {
      en: [
        "Real-time video conferencing with screen sharing",
        "AI-powered adaptive learning paths",
        "Mobile-native apps for iOS and Android",
        "Progress tracking and analytics dashboard",
        "Interactive whiteboard and code editor",
        "Multi-language content support",
      ],
      ja: [
        "画面共有機能付きリアルタイムビデオ会議",
        "AI搭載のアダプティブ学習パス",
        "iOS・Androidネイティブモバイルアプリ",
        "進捗追跡と分析ダッシュボード",
        "インタラクティブホワイトボードとコードエディタ",
        "多言語コンテンツ対応",
      ],
      zh: [
        "支持屏幕共享的实时视频会议",
        "AI驱动的自适应学习路径",
        "iOS和Android原生移动应用",
        "进度跟踪和分析仪表板",
        "交互式白板和代码编辑器",
        "多语言内容支持",
      ],
    },
    useCases: {
      en: [
        "Corporate training programs",
        "Online tutoring services",
        "Remote education institutions",
        "Professional certification courses",
      ],
      ja: [
        "企業研修プログラム",
        "オンライン家庭教師サービス",
        "リモート教育機関",
        "専門資格認定コース",
      ],
      zh: [
        "企业培训项目",
        "在线辅导服务",
        "远程教育机构",
        "专业认证课程",
      ],
    },
  },
  {
    slug: "insight-image-gen",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-purple-500 to-pink-600",
    name: {
      en: "Insight Image Gen",
      ja: "Insight Image Gen",
      zh: "Insight Image Gen",
    },
    tagline: {
      en: "Enterprise-Grade AI Image Generation",
      ja: "エンタープライズグレードAI画像生成",
      zh: "企业级AI图像生成",
    },
    description: {
      en: "High-performance image generation engine built on cutting-edge AI models. Generate, edit, and transform images at scale with our enterprise API. Built with C# for maximum performance and Windows/cross-platform compatibility.",
      ja: "最先端のAIモデルに基づく高性能画像生成エンジン。エンタープライズAPIで画像の生成、編集、変換を大規模に実行。最大限のパフォーマンスとWindows/クロスプラットフォーム互換性のためにC#で構築されています。",
      zh: "基于尖端AI模型构建的高性能图像生成引擎。通过我们的企业API大规模生成、编辑和转换图像。使用C#构建，确保最大性能和Windows/跨平台兼容性。",
    },
    features: {
      en: [
        "Text-to-image generation with style control",
        "Batch processing for enterprise workflows",
        "RESTful API with comprehensive SDK",
        "Custom model fine-tuning support",
        "Image editing and inpainting capabilities",
        "High-resolution output up to 4K",
      ],
      ja: [
        "スタイル制御付きテキストから画像生成",
        "エンタープライズワークフロー向けバッチ処理",
        "包括的なSDK付きRESTful API",
        "カスタムモデルファインチューニング対応",
        "画像編集とインペインティング機能",
        "最大4Kの高解像度出力",
      ],
      zh: [
        "带风格控制的文本生成图像",
        "面向企业工作流的批处理",
        "附带综合SDK的RESTful API",
        "自定义模型微调支持",
        "图像编辑和修复功能",
        "最高4K高分辨率输出",
      ],
    },
    useCases: {
      en: [
        "Marketing asset creation",
        "Product visualization",
        "Content creation at scale",
        "Design prototyping",
      ],
      ja: [
        "マーケティングアセット制作",
        "製品ビジュアライゼーション",
        "大規模コンテンツ制作",
        "デザインプロトタイピング",
      ],
      zh: [
        "营销素材创建",
        "产品可视化",
        "大规模内容创作",
        "设计原型制作",
      ],
    },
  },
  {
    slug: "insight-sns-connect",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "from-green-500 to-teal-600",
    name: {
      en: "Insight SNS Connect",
      ja: "Insight SNS Connect",
      zh: "Insight SNS Connect",
    },
    tagline: {
      en: "Unified Messaging Platform Integration",
      ja: "統合メッセージングプラットフォーム連携",
      zh: "统一消息平台集成",
    },
    description: {
      en: "Seamlessly integrate with LINE, Microsoft Teams, Slack, and more. Build unified communication workflows that connect your enterprise messaging across all major platforms with a single API.",
      ja: "LINE、Microsoft Teams、Slackなどとシームレスに統合。単一のAPIで、すべての主要プラットフォームにわたるエンタープライズメッセージングを接続する統合コミュニケーションワークフローを構築します。",
      zh: "与LINE、Microsoft Teams、Slack等无缝集成。通过单一API构建统一的通信工作流，连接所有主要平台上的企业消息传递。",
    },
    features: {
      en: [
        "LINE, Teams, and Slack integration",
        "Unified message routing and handling",
        "Bot framework with natural language processing",
        "Webhook management and event handling",
        "Message analytics and reporting",
        "Enterprise SSO and security compliance",
      ],
      ja: [
        "LINE、Teams、Slack統合",
        "統合メッセージルーティングとハンドリング",
        "自然言語処理を備えたボットフレームワーク",
        "Webhook管理とイベントハンドリング",
        "メッセージ分析とレポーティング",
        "エンタープライズSSOとセキュリティコンプライアンス",
      ],
      zh: [
        "LINE、Teams和Slack集成",
        "统一消息路由和处理",
        "带自然语言处理的机器人框架",
        "Webhook管理和事件处理",
        "消息分析和报告",
        "企业SSO和安全合规",
      ],
    },
    useCases: {
      en: [
        "Customer support automation",
        "Internal communication hub",
        "Marketing campaign delivery",
        "Cross-platform notifications",
      ],
      ja: [
        "カスタマーサポート自動化",
        "社内コミュニケーションハブ",
        "マーケティングキャンペーン配信",
        "クロスプラットフォーム通知",
      ],
      zh: [
        "客户支持自动化",
        "内部通信中心",
        "营销活动推送",
        "跨平台通知",
      ],
    },
  },
  {
    slug: "insight-auto-fix",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-orange-500 to-red-600",
    name: {
      en: "Insight Auto Fix",
      ja: "Insight Auto Fix",
      zh: "Insight Auto Fix",
    },
    tagline: {
      en: "Automated Error Detection & Resolution",
      ja: "自動エラー検出と修復",
      zh: "自动错误检测与修复",
    },
    description: {
      en: "AI-powered automated error correction tool that detects, diagnoses, and resolves software issues in real-time. Reduce debugging time by up to 80% with intelligent code analysis and automated fix suggestions.",
      ja: "ソフトウェアの問題をリアルタイムで検出、診断、解決するAI搭載の自動エラー修正ツール。インテリジェントなコード分析と自動修正提案により、デバッグ時間を最大80%削減します。",
      zh: "AI驱动的自动错误修正工具，实时检测、诊断和解决软件问题。通过智能代码分析和自动修复建议，将调试时间减少高达80%。",
    },
    features: {
      en: [
        "Real-time error detection and classification",
        "AI-powered root cause analysis",
        "Automated fix generation and testing",
        "CI/CD pipeline integration",
        "Historical error pattern recognition",
        "Multi-language code support (Python, JS, C#, etc.)",
      ],
      ja: [
        "リアルタイムエラー検出と分類",
        "AI搭載の根本原因分析",
        "自動修正生成とテスト",
        "CI/CDパイプライン統合",
        "過去のエラーパターン認識",
        "多言語コード対応（Python、JS、C#など）",
      ],
      zh: [
        "实时错误检测和分类",
        "AI驱动的根因分析",
        "自动修复生成和测试",
        "CI/CD管道集成",
        "历史错误模式识别",
        "多语言代码支持（Python、JS、C#等）",
      ],
    },
    useCases: {
      en: [
        "Development workflow automation",
        "Production monitoring and healing",
        "Code review assistance",
        "Legacy code maintenance",
      ],
      ja: [
        "開発ワークフロー自動化",
        "本番環境監視と自動修復",
        "コードレビュー支援",
        "レガシーコードメンテナンス",
      ],
      zh: [
        "开发工作流自动化",
        "生产环境监控和自修复",
        "代码审查辅助",
        "遗留代码维护",
      ],
    },
  },
  {
    slug: "insight-slide-tools",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "from-cyan-500 to-blue-600",
    name: {
      en: "Insight Slide Tools",
      ja: "Insight Slide Tools",
      zh: "Insight Slide Tools",
    },
    tagline: {
      en: "Intelligent Document & Presentation Processing",
      ja: "インテリジェントドキュメント＆プレゼンテーション処理",
      zh: "智能文档与演示处理",
    },
    description: {
      en: "Extract, transform, and analyze presentation content from PDF documents. Convert slides, extract key insights, and generate summaries automatically with our Python-based document intelligence engine.",
      ja: "PDFドキュメントからプレゼンテーションコンテンツを抽出、変換、分析します。Pythonベースのドキュメントインテリジェンスエンジンで、スライドの変換、重要なインサイトの抽出、サマリーの自動生成を行います。",
      zh: "从PDF文档中提取、转换和分析演示内容。使用我们基于Python的文档智能引擎，自动转换幻灯片、提取关键洞察并生成摘要。",
    },
    features: {
      en: [
        "PDF to slide extraction and conversion",
        "AI-powered content summarization",
        "Batch document processing",
        "OCR and text extraction",
        "Template-based output formatting",
        "REST API for system integration",
      ],
      ja: [
        "PDFからスライドの抽出と変換",
        "AI搭載コンテンツ要約",
        "バッチドキュメント処理",
        "OCRとテキスト抽出",
        "テンプレートベースの出力フォーマット",
        "システム統合向けREST API",
      ],
      zh: [
        "PDF到幻灯片的提取和转换",
        "AI驱动的内容摘要",
        "批量文档处理",
        "OCR和文本提取",
        "基于模板的输出格式化",
        "用于系统集成的REST API",
      ],
    },
    useCases: {
      en: [
        "Meeting notes extraction",
        "Training material digitization",
        "Research paper analysis",
        "Compliance document processing",
      ],
      ja: [
        "会議ノート抽出",
        "研修資料のデジタル化",
        "研究論文分析",
        "コンプライアンス文書処理",
      ],
      zh: [
        "会议记录提取",
        "培训材料数字化",
        "研究论文分析",
        "合规文件处理",
      ],
    },
  },
];
