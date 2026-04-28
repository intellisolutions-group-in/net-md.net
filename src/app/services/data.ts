import {
  BarChart,
  Cloud,
  Code,
  Search,
  Globe,
  Layers,
} from 'lucide-react';

export const services = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: BarChart,
    description: "Strategic technology planning to align your IT infrastructure with your long-term business goals.",
    fullDescription: "In today's rapidly evolving digital landscape, having a robust IT strategy is no longer optional—it's a critical component of business success. Our IT consulting services provide the strategic guidance you need to navigate complexity and leverage technology for competitive advantage.",
    features: [
      "IT Infrastructure Audit",
      "Digital Transformation Roadmap",
      "Security & Compliance Assessment",
      "Cost Optimization Strategies",
      "Disaster Recovery Planning",
      "Technology Stack Modernization"
    ],
    benefits: [
      "Align technology with business objectives",
      "Reduce operational costs through efficiency",
      "Minimize risks and downtime",
      "Scale with confidence"
    ],
    image: "/images/services/it-consulting/card.png",
    heroImage: "/images/services/it-consulting/hero.png"
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Seamless migration, management, and optimization of your cloud infrastructure for maximum scalability.",
    fullDescription: "Transitioning to the cloud is a journey, not just a destination. We help you navigate every step of this journey, from initial strategy and migration to ongoing management and optimization of your cloud environment.",
    features: [
      "Cloud Migration Services",
      "Multi-Cloud Management (AWS, Azure, GCP)",
      "Cloud Security Hardening",
      "Serverless Architecture Design",
      "Cost Monitoring & Management",
      "High Availability Setup"
    ],
    benefits: [
      "Unmatched scalability and flexibility",
      "Enhanced data security and resilience",
      "Reduced capital expenditure",
      "Improved collaboration and accessibility"
    ],
    image: "/images/services/cloud-solutions/card.png",
    heroImage: "/images/services/cloud-solutions/hero.png"
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code,
    description: "Custom, high-performance web applications built with modern frameworks to drive user engagement.",
    fullDescription: "Your website is often the first point of contact for your customers. We build high-performance, responsive, and secure web applications that not only look great but also deliver exceptional user experiences and drive business results.",
    features: [
      "Custom Web Application Development",
      "E-commerce Platform Building",
      "Progressive Web Apps (PWA)",
      "CMS Implementation & Customization",
      "Performance Optimization",
      "Third-party API Integration"
    ],
    benefits: [
      "Increased user engagement and retention",
      "Mobile-first responsive designs",
      "Faster load times and better performance",
      "Secure and scalable architectures"
    ],
    image: "/images/services/web-development/card.png",
    heroImage: "/images/services/web-development/hero.png"
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: Search,
    description: "Data-driven strategies to boost your organic visibility and drive high-quality traffic to your site.",
    fullDescription: "Visibility in search engines is paramount in the digital age. Our data-driven SEO strategies are designed to improve your organic rankings, increase high-quality traffic, and deliver a strong return on investment.",
    features: [
      "Comprehensive SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Content Optimization",
      "Technical SEO Enhancements",
      "Authority Building & Link Strategy",
      "Local SEO Management"
    ],
    benefits: [
      "Increased organic search visibility",
      "Higher quality lead generation",
      "Sustainable long-term growth",
      "Enhanced brand credibility"
    ],
    image: "/images/services/seo-optimization/card.png",
    heroImage: "/images/services/seo-optimization/hero.png"
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Globe,
    description: "Building brand authority and community engagement through targeted social media campaigns.",
    fullDescription: "Social media is where your customers live. We help you build meaningful connections with your audience, increase brand awareness, and drive engagement through targeted social media campaigns and strategic community management.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Outreach",
      "Social Analytics & Reporting"
    ],
    benefits: [
      "Increased brand awareness and loyalty",
      "Direct engagement with your target audience",
      "Improved customer insights",
      "Highly targeted advertising opportunities"
    ],
    image: "/images/services/social-media-marketing/card.png",
    heroImage: "/images/services/social-media-marketing/hero.png"
  },
  {
    slug: "api-integration",
    title: "API Integration",
    icon: Layers,
    description: "Connecting your software ecosystem with robust, secure, and efficient API solutions.",
    fullDescription: "In a connected world, your software shouldn't live in isolation. We specialize in building and integrating APIs that allow your different software systems to talk to each other seamlessly, improving efficiency and data accuracy.",
    features: [
      "Custom API Development (REST/GraphQL)",
      "Third-party Service Integration",
      "Legacy System Connectivity",
      "API Security & Authentication",
      "Data Synchronization Services",
      "API Performance Monitoring"
    ],
    benefits: [
      "Eliminated data silos",
      "Automated business processes",
      "Enhanced system functionality",
      "Improved data accuracy and visibility"
    ],
    image: "/images/services/api-integration/card.png",
    heroImage: "/images/services/api-integration/hero.png"
  }
];

