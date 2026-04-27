export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  overview: { problem: string; audience: string; solution: string };
  features: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  useCases: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "cms-development",
    title: "CMS Development",
    tagline: "Content-Driven Platforms Built for Scale",
    intro: "We build powerful, content-driven platforms using WordPress, Headless CMS, and modern content management systems that give you full control over your digital presence.",
    overview: {
      problem: "Managing website content shouldn't require a developer for every update. Most businesses struggle with rigid, outdated CMS platforms.",
      audience: "Content-heavy businesses, publishers, e-commerce brands, and enterprises needing scalable content workflows.",
      solution: "We deliver flexible CMS solutions that empower your team to publish, update, and manage content independently.",
    },
    features: ["WordPress & Headless CMS", "Custom Theme Development", "Plugin & Module Integration", "Content Workflow Automation", "Multi-Language Support", "Role-Based Access Control"],
    benefits: ["Publish content without developer dependency", "Faster time-to-market for campaigns", "SEO-optimized content architecture", "Scalable to millions of pages"],
    process: [
      { step: "Requirement Analysis", desc: "Understanding your content workflows and business goals." },
      { step: "Architecture Planning", desc: "Selecting the right CMS stack and designing the content model." },
      { step: "Development", desc: "Building custom themes, plugins, and integrations." },
      { step: "Testing & QA", desc: "Ensuring performance, security, and cross-browser compatibility." },
      { step: "Launch & Training", desc: "Deploying and training your team on content management." },
    ],
    useCases: ["Corporate websites with frequent content updates", "Multi-author blog and news platforms", "E-commerce product catalogs", "Multi-site enterprise networks"],
  },
  {
    slug: "website-revamp-performance",
    title: "Website Revamp & Performance Optimization",
    tagline: "Transform Your Digital Presence",
    intro: "Turn your outdated website into a high-speed, modern digital experience. We redesign for visual impact, optimize Core Web Vitals, and enhance UX to boost conversions.",
    overview: {
      problem: "Slow, outdated websites drive visitors away. Poor Core Web Vitals hurt search rankings and conversion rates.",
      audience: "Businesses with legacy websites, brands experiencing high bounce rates, and companies preparing for growth.",
      solution: "We perform complete redesigns paired with deep performance optimization — improving speed, UX, and SEO.",
    },
    features: ["Complete UI/UX Redesign", "Core Web Vitals Optimization", "Mobile-First Responsiveness", "Speed & Load Time Improvement", "Accessibility Compliance", "Analytics & Conversion Tracking"],
    benefits: ["Up to 3x faster page load times", "Improved Google search rankings", "Lower bounce rates and higher engagement", "Modern design that builds trust"],
    process: [
      { step: "Site Audit", desc: "Comprehensive analysis of current performance, UX, and SEO." },
      { step: "Design Strategy", desc: "Wireframing and prototyping the new user experience." },
      { step: "Development", desc: "Building the optimized, responsive front-end." },
      { step: "Performance Tuning", desc: "Optimizing Core Web Vitals, images, and code." },
      { step: "Launch & Monitor", desc: "Go-live with continuous performance monitoring." },
    ],
    useCases: ["Legacy website modernization", "E-commerce speed optimization", "Mobile experience overhaul", "Pre-launch performance preparation"],
  },
  {
    slug: "product-design-prototyping",
    title: "Product Design & Prototyping",
    tagline: "From Concept to Clickable Prototype",
    intro: "We translate your product vision into tangible, user-tested designs. Our design-first approach ensures your product is built on a foundation of validated user experience.",
    overview: {
      problem: "Building a product without validated design leads to wasted development time and poor user adoption.",
      audience: "Startups validating ideas, product teams planning new features, and enterprises launching internal tools.",
      solution: "We deliver end-to-end design — from user research and wireframes to high-fidelity prototypes.",
    },
    features: ["Wireframing & User Flows", "High-Fidelity UI Design", "Interactive MVP Prototyping", "Usability Testing & Iteration", "Design System Creation", "Developer Handoff Documentation"],
    benefits: ["Validate ideas before writing code", "Reduce development rework by up to 60%", "Faster stakeholder alignment", "User-centered product decisions"],
    process: [
      { step: "Discovery", desc: "Understanding users, competitors, and product goals." },
      { step: "Wireframing", desc: "Mapping user flows and low-fidelity layouts." },
      { step: "UI Design", desc: "Creating pixel-perfect, brand-aligned interfaces." },
      { step: "Prototyping", desc: "Building interactive, clickable prototypes." },
      { step: "Testing & Handoff", desc: "User testing, iteration, and developer-ready specs." },
    ],
    useCases: ["Startup MVP validation", "Feature redesign for existing products", "Internal enterprise tool design", "Investor-ready product demos"],
  },
  {
    slug: "saas-application-development",
    title: "SaaS Application Development",
    tagline: "Scalable Software, Subscription-Ready",
    intro: "We design and build scalable SaaS platforms from the ground up — multi-tenant architectures, subscription billing, and user management systems built for growth.",
    overview: {
      problem: "Building a SaaS product requires expertise in multi-tenancy, billing, and scalable infrastructure.",
      audience: "Startups launching SaaS products, businesses transitioning to subscription models, and enterprises building internal platforms.",
      solution: "We deliver production-ready SaaS platforms with built-in billing, user management, and analytics.",
    },
    features: ["Multi-Tenant Architecture", "Subscription & Billing Systems", "User Dashboard & Analytics", "Startup-Ready MVP Launches", "Role-Based Permissions", "API-First Design"],
    benefits: ["Launch your SaaS product in weeks, not months", "Built-in recurring revenue infrastructure", "Scales from 10 to 100,000+ users", "Investor-ready technical foundation"],
    process: [
      { step: "Product Scoping", desc: "Defining features, user roles, and business model." },
      { step: "Architecture Design", desc: "Planning multi-tenant infrastructure and tech stack." },
      { step: "Sprint Development", desc: "Agile sprints with regular demos and feedback." },
      { step: "Integration & Testing", desc: "Payment, auth, and third-party integrations." },
      { step: "Launch & Scale", desc: "Production deployment with monitoring and scaling." },
    ],
    useCases: ["B2B SaaS platforms", "Subscription-based marketplaces", "Internal enterprise tools", "Vertical industry solutions"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Solutions",
    tagline: "Drive Growth with Data-Driven Marketing",
    intro: "Our comprehensive digital marketing solutions combine SEO, social media strategy, and content marketing to create a powerful engine for lead generation and brand authority.",
    overview: {
      problem: "Fragmented marketing efforts often lead to inconsistent brand messaging and poor ROI on advertising spend.",
      audience: "Businesses seeking multi-channel growth, e-commerce brands, and startups looking to build awareness.",
      solution: "We provide an integrated marketing approach that aligns SEO, social presence, and content to drive conversion across all touchpoints.",
    },
    features: ["Full-Scale SEO Strategy", "Social Media Management", "Content Marketing & Authority", "Paid Advertising (SEM/PPC)", "Conversion Rate Optimization", "Influencer & PR Strategy"],
    benefits: ["Unified brand presence across all channels", "Higher search visibility and engagement", "Data-driven ROI tracking", "Sustainable long-term growth"],
    process: [
      { step: "Audit & Research", desc: "Analyzing current performance and market opportunities." },
      { step: "Strategy Development", desc: "Building a multi-channel growth roadmap." },
      { step: "Content & Campaign", desc: "Executing high-impact marketing initiatives." },
      { step: "Optimization", desc: "Continuous testing and refinement for better performance." },
      { step: "Reporting", desc: "Detailed analytics and measurable business impact." },
    ],
    useCases: ["Brand awareness campaigns", "Lead generation for B2B", "E-commerce sales growth", "Product launch promotion"],
  },
  {
    slug: "stock-market-insights",
    title: "Stock Market Insights & Analysis",
    tagline: "Institutional-Grade Financial Intelligence",
    intro: "Stay ahead of the curve with our expert financial analysis. We provide real-time market data, technical reports, and deep fundamental insights for informed decision-making.",
    overview: {
      problem: "Financial markets are volatile and information-dense, making it difficult to distinguish signal from noise.",
      audience: "Active traders, portfolio managers, and businesses requiring financial market visibility.",
      solution: "We deliver clear, actionable market intelligence through automated reporting and expert technical analysis.",
    },
    features: ["Technical Analysis Reports", "Fundamental Market Research", "Real-Time Market Dashboards", "Sector Performance Tracking", "Risk Assessment Models", "Global Trend Forecasting"],
    benefits: ["Data-driven decision making", "Real-time visibility into market shifts", "Reduced emotional trading risk", "Institutional-quality financial research"],
    process: [
      { step: "Data Integration", desc: "Connecting to global real-time financial feeds." },
      { step: "Analysis & Modeling", desc: "Applying technical and fundamental analytical frameworks." },
      { step: "Insight Generation", desc: "Producing structured, actionable market reports." },
      { step: "Alerting & Distribution", desc: "Delivering instant updates on market-moving events." },
      { step: "Performance Review", desc: "Continuous calibration of analysis models." },
    ],
    useCases: ["Trading desk market monitoring", "Executive financial planning", "Investor education and reporting", "Portfolio risk management"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
