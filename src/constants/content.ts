import { FaCheck } from "react-icons/fa6";
import { Search, BarChart3, ShieldCheck, FileWarning, ListRestart, Palette, Wrench, Stamp, Globe, Package, Monitor } from "lucide-react"

export const growthAreaContent = [
  {
    id: 1,
    imgSrc: "/rank.png",
    title: "Client growth = company growth",
    description:
      "We are proud to be the 334th Fastest Growing Company in the USA with over 500 employees, providing top-tier service to over 400 Amazon brands.",
  },
  {
    id: 2,
    imgSrc: "/girl.png",
    title: "Hear it from people we've helped",
    description:
      "See how our services have helped clients reach their full potential and solved their Amazon problems.",
  },
];

export const services = [
  {
    imgSrc: "/allServicesImgs/fullService.png",
    title: "Full Service Management",
    desc: "As a full service amazon agency, we manage all the pillars of Amazon – SEO, PPC, catalog, design, and others – to have them work in sync with each other for a better chance at getting success.",
    features: ["Click through rate", "Platform management", "Brand and content optimization", "Search engine optimization", "Paid advertising (PPC)", "Troubleshooting", "Reporting and monitoring"],
  },
  {
    imgSrc: "/allServicesImgs/searchEngine.png",
    title: "Search Engine Optimization",
    desc: "Our Amazon SEO experts identify the best keywords to use and optimize listings for improved organic ranking to make it easier for shoppers to find your products.",
    features: ["4-phase SEO plan", "Keyword & Competitor Research", "Targeted Keyword Selection", "Ongoing Rank Tracking", "Optimized listings for SEO"],
  },
  {
    imgSrc: "/allServicesImgs/accAudit.png",
    title: "Amazon Account Audit",
    desc: "Get a thorough analysis of your seller central account to identify areas of improvement and avoid costly mistakes.",
    features: ["Advertising (PPC) segmentation, structure, and bidding", "SEO indexing and rankings", "Product listings – merchandising and design", "Brand registry", "Account Health", "Growth Areas"],
  },
  {
    imgSrc: "/allServicesImgs/accSuspension.png",
    title: "Account Suspensions",
    desc: "Has your seller listing or account been suspended or deactivated? We can help get things back up and running with our expert Amazon specialists.",
    features: ["Metrics (order defect) suspensions", "Copyright, trademark, patent suspensions", "Validation Issue Suspensions", "Multiple account suspensions"],
  },
  {
    imgSrc: "/allServicesImgs/reinstatement.png",
    title: "Listing Reinstatement",
    desc: "Has Amazon deactivated your top-selling ASIN? Need help reinstating the yanked listing? We can assist quickly and efficiently.",
    features: ["Copyright claims takedown", "Trademark infringement yank", "Medical claims takedown", "Listing condition complaints", "Restricted item type claims"],
  },
  {
    imgSrc: "/allServicesImgs/design.png",
    title: "Design",
    desc: "Engage and inform shoppers with captivating imagery. Showcase your products with professional design to help boost conversion rates.",
    features: ["Brand guidelines", "Brand story", "Brand storefront", "Enhanced brand content A+", "Full listing optimization", "Listing images design", "Main image CTR hack"],
  },
  {
    imgSrc: "/allServicesImgs/troubleshooting.png",
    title: "Troubleshooting",
    desc: "Everything from UPC issues, page updates, catalog problems, brand changes — we help get things right and identify areas of improvement.",
    features: ["Brand name change", "UPC to GS1 changes", "Gated categories", "Catalog problems", "Hazmat review errors", "Account and listing reinstatement"],
  },
  {
    imgSrc: "/allServicesImgs/trademark.png",
    title: "Trademark Registration",
    desc: "We file your trademark for your brand and sign you up for Amazon Brand Registry — protecting your products from infringement.",
    features: ["Free trademark assessment", "Trademark search", "Trademark filing", "Dedicated trademark attorney", "Assistance in Amazon Brand Registry"],
  },
  {
    imgSrc: "/allServicesImgs/seoforsites.png",
    title: "SEO for Websites",
    desc: "Effective website search engine optimization (SEO) is the key to getting your products seen online beyond Amazon.",
    features: ["On-page SEO optimization", "Content strategy", "Technical SEO audit", "Link building"],
  },
  {
    imgSrc: "/allServicesImgs/FBARETURNS.png",
    title: "FBA Returns",
    desc: "Amazon owes 99% of sellers money for lost/damaged units, refunds and mishandled returns. We make the process of getting your money back quick and easy.",
    features: ["Lost and damaged inventory", "Lost inbound shipment", "Destroyed units"],
  },
  {
    imgSrc: "/allServicesImgs/vendorservice.png",
    title: "Vendor Central Full Service",
    desc: "Get expert help managing Vendor Central and sell your products directly to Amazon with confidence.",
    features: ["PPC", "SEO", "A+ Content", "Brand Store", "Listing optimization", "Logistics", "Reporting", "Troubleshooting"],
  },
];

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  cta: string;
}

export const servicesCards: ServiceCard[] = [
  {
    id: 1,
    title: "PPC",
    description:
      "Boost sales, cut costs. We’re your partner in transparent, high-performing Amazon advertising.",
    imgSrc: "/pointer.png",
    cta: "Learn more",
  },
  {
    id: 2,
    title: "SEO",
    description:
      "Watch your search rankings soar with our proven 4-phase Amazon SEO plan. Results in just 90 days.",
    imgSrc: "/seo.png",
    cta: "Learn more",
  },
  {
    id: 3,
    title: "Design",
    description:
      "CTR-optimized Amazon listing images, compelling A+ Content, and high-converting Brand Stores.",
    imgSrc: "/design.png",
    cta: "Learn more",
  },
  {
    id: 4,
    title: "Merchandising",
    description:
      "Your product catalog, perfected. We optimize listings, attributes, and more to ensure customers love what they see.",
    imgSrc: "/merchandising.png",
    cta: "Learn more",
  },
  {
    id: 5,
    title: "Catalog Troubleshooting",
    description:
      "Having trouble with your catalog? We’ll handle it.",
    imgSrc: "/ctTroubleShooting.png",
    cta: "Learn more",
  },
  {
    id: 6,
    title: "Main Image CTR Hack",
    description:
      "Ready to increase your Amazon traffic? Our CTR-optimized image design is the key.",
    imgSrc: "/ctrhack.png",
    cta: "Learn more",
  },
  {
    id: 7,
    title: "Reporting and Monitoring",
    description:
      "Stay ahead of the Amazon game. We track updates, monitor your account, and optimize for peak performance.",
    imgSrc: "/reportnmonitor.png",
    cta: "Learn more",
  },
  {
    id: 8,
    title: "Platform Management",
    description:
      "Stress-free Amazon selling. Our Amazon experts take care of everything, from A to Z.",
    imgSrc: "/platformmanagement.png",
    cta: "Learn more",
  },
  {
    id: 9,
    title: "Audit",
    description:
      "A deep dive into your Amazon listing performance. Our audit will pinpoint areas for improvement.",
    imgSrc: "/audit.png",
    cta: "Learn more",
  },
  {
    id: 10,
    title: "Shipping Plans",
    description:
      "Avoid FBA pitfalls. Our expert IPI management and strategic planning will keep your inventory flowing smoothly.",
    imgSrc: "/shippingPlans.png",
    cta: "Learn more",
  },
  {
    id: 11,
    title: "Copywriting",
    description:
      "Want your product to stand out? Our expert copywriting and Amazon SEO services will make it a top contender.",
    imgSrc: "/copyright.png",
    cta: "Learn more",
  },
  {
    id: 12,
    title: "Market Share Growth",
    description:
      "Win more customers and outpace rivals with optimization, ads, and catalog growth on Amazon.",
    imgSrc: "/marketgrowth.png",
    cta: "Learn more",
  },
];


export const fullServiceFeatures = [
  {
    id: 1,
    title: "Ads and Catalog Backup",
    description:
      "Never lose crucial data. We back up your Amazon ads and catalog for easy rollbacks and thorough performance analysis.",
  },
  {
    id: 2,
    title: "Amazon Case Log Management",
    description:
      "Your Amazon case management, our expertise. We’ll handle communication with seller support and resolve issues efficiently.",
  },
  {
    id: 3,
    title: "Bi-Weekly Client Calls",
    description:
      "No communication gaps. Bi-weekly conference calls and flexible communication options keep you informed and supported.",
  },
  {
    id: 4,
    title: "Proactive Restock Recommendations",
    description:
      "Avoid stockouts and overstock. Our restock reports deliver the data you need to make smart inventory decisions.",
  },
  {
    id: 5,
    title: "Expert Seller Central Assistance",
    description:
      "From crafting FBA reports to monitoring suppressed listings, we handle all the details that drive your Amazon success.",
  },
];

export const trustedBrands = [
  { id: 1, imgSrc: "/brandImages/blum.png" },
  { id: 2, imgSrc: "/brandImages/epicdrops.png" },
  { id: 3, imgSrc: "/brandImages/popana.png" },
  { id: 4, imgSrc: "/brandImages/mantra.png" },
  { id: 5, imgSrc: "/brandImages/starbaby.png" },
  { id: 6, imgSrc: "/brandImages/gps.png" },
  { id: 7, imgSrc: "/brandImages/luxonthego.png" },
  { id: 8, imgSrc: "/brandImages/koala.png" },
  { id: 9, imgSrc: "/brandImages/essexware.png" },
];


export const aiExplanationButtons = [
  {
    id: 1,
    label: "Ask ChatGPT",
    imageSrc: "/gpt.png",
    href: "https://chatgpt.com/?prompt=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
  {
    id: 2,
    label: "Ask Claude",
    imageSrc: "/claude.png",
    href: "https://claude.ai/new?q=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
  {
    id: 3,
    label: "Ask Perplexity",
    imageSrc: "/perplexity.png",
    href: "https://www.perplexity.ai/search/new?q=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
];

export const adManagementFeatures = [
  {
    id: 1,
    label: "Keyword research",
    imageSrc: "/ppcImages/research.png",
    description: "Performing comprehensive keyword research is crucial for targeting the right audience and boosting ad visibility."
  },
  {
    id: 2,
    label: "Optimized campaigns",
    imageSrc: "/ppcImages/campaign.png",
    description: "To optimize campaigns, we set goals, allocate budgets, use targeted bids, manage keywords, and monitor key metrics."
  },
  {
    id: 3,
    label: "Reduce ACOS",
    imageSrc: "/ppcImages/reduceacos.png",
    description: "Reduce ACOS and boost sales by harvesting profitable keywords, using exact match targeting."
  },
  {
    id: 4,
    label: "Increase sales",
    imageSrc: "/ppcImages/increasesales.png",
    description: "Increase sales with PPC by auditing ads, optimizing listings, and using strategic pricing for product launches."
  },
  {
    id: 5,
    label: "Weekly reporting",
    imageSrc: "/ppcImages/reporting.png",
    description: "We deliver weekly reports to keep you updated on your ad performance, ensuring transparency and ongoing optimization."
  },
  {
    id: 6,
    label: "Design",
    imageSrc: "/ppcImages/design.png",
    description: "Well-crafted creatives can build a strong brand identity and set your products apart from the competition."
  },
]

export const amazonSeoContent = {
  title: "Amazon SEO",
  description: "With years of knowledge and experience  and over 3,000 customers served, Amazon SEO has become second nature to us. Our best-in-class 4-phase SEO plan can help your listing rank better and make it easier for shoppers to find your products on Amazon:",
  phaseList: [
    {
      id: 1,
      icon: FaCheck,
      phase: "Phase 1: Search term optimization"
    },
    {
      id: 2,
      icon: FaCheck,
      phase: "Phase 2: Copy and pink keyword update"
    },
    {
      id: 3,
      icon: FaCheck,
      phase: "Phase 3: Strike zone keywords"
    },
    {
      id: 4,
      icon: FaCheck,
      phase: "Phase 4: Search query report"
    },
  ],
  phases: "* SEO Phases 2, 3, and 4 are available for full service management only.",
  imgSrc: "/seoImages/hero.png"
}

export const seoPhasesData = [
  {
    id: 1,
    phaseNumber: "SEO Phase 1",
    heading: "Search term optimization",
    description: "Get expert Search Term Optimization starting at $1,000. Supercharge your product listings with our Phase 1 Amazon SEO. We’ll optimize back-end search terms to drive more traffic and sales. Each order will cover up to 10 ASINs. You’ll also get before and after drafts for your approval.",
    phaseList: [
      { icon: FaCheck, text: "Keyword and competitor research in your category" },
      { icon: FaCheck, text: "Ranking for keywords organically over time" },
      { icon: FaCheck, text: "Hand selecting the most effective keywords" },
      { icon: FaCheck, text: "Increased visibility for your products, leading to higher sales" },
      { icon: FaCheck, text: "Help your customers to find your product" }
    ]
  },
  {
    id: 2,
    phaseNumber: "SEO Phase 2",
    heading: "Incremental indexing",
    description: "Optimize your backend search terms for your Amazon listings. Phase 2 of our SEO service offering includes:",
    phaseList: [
      { icon: FaCheck, text: "Title and bullets point features adjusted for additional keyword inclusions" },
      { icon: FaCheck, text: "We update for “pink” keywords – words already in the title/bullets are removed to make room for additional indexing opportunities in the search term field." }
    ]
  },
  {
    id: 3,
    phaseNumber: "SEO Phase 3",
    heading: "Strike zone keywords",
    description: "Optimize your back end search terms for your listings on Amazon. In our Phase 3 of our SEO service, we do the following tasks.",
    phaseList: [
      { icon: FaCheck, text: "Keyword & competitor research in your category" },
      { icon: FaCheck, text: "Effectively, hand select the best relevant keywords" },
      { icon: FaCheck, text: "Ranking for keywords organically, overtime" },
      { icon: FaCheck, text: "Increase visibility for your products, leading to higher clicks" },
      { icon: FaCheck, text: "Help your customers to find your product!" }
    ]
  },
  {
    id: 4,
    phaseNumber: "SEO Phase 4",
    heading: "Search query report",
    description: "This is the Market Share Indexing phase where it increases market share for top ranking keywords determined by Amazon’s search query report, by inputting these exact match phrases into our SEO strategy. For mature listings already eligible for the phase 3 strikezone strategy.",
    phaseList: []
  }
];

export const amazonFeatureCards = [
  {
    id: 1,
    imgSrc: "/seoImages/effectivekwtools.png",
    heading: "Effective keyword tools",
    description: "We use best-in-class tools to find top keywords, analyze competitors, and optimize your Amazon listings."
  },
  {
    id: 2,
    imgSrc: "/seoImages/optclicks.png",
    heading: "Optimized for more clicks",
    description: "Optimize backend search fields to enhance product discoverability, including key attributes like subject matter and audience."
  },
  {
    id: 3,
    imgSrc: "/seoImages/visibilityrank.png",
    heading: "Better visibility and rank",
    description: "Phase 1 prioritizes getting your product indexed, laying the foundation for your product to appear in the top 300 search results."
  },
  {
    id: 4,
    imgSrc: "/seoImages/strategykw.png",
    heading: "Strategic keyword usage",
    description: "Boost indexing by repeating crucial keywords in your title and backend search terms, maximizing Amazon’s algorithm recognition."
  }
];

export const accountAuditData = {
  heading: "Amazon account audit",
  title: "Get a full account audit for $1,000.",
  description: "Have an Amazon expert review your account to know the strengths and weaknesses of your account and how they stack against competitors.",
  auditList: [
    {
      id: 1,
      icon: FaCheck,
      audit: "Advertising: segmentation, structure, and bidding"
    },
    {
      id: 2,
      icon: FaCheck,
      audit: "Search engine optimization (SEO): indexing and rankings"
    },
    {
      id: 3,
      icon: FaCheck,
      audit: "Product listings: merchandising and design"
    },
    {
      id: 4,
      icon: FaCheck,
      audit: "Brand registry"
    },
    {
      id: 5,
      icon: FaCheck,
      audit: "Account health"
    },
    {
      id: 6,
      icon: FaCheck,
      audit: "Growth areas"
    },
    {
      id: 7,
      icon: FaCheck,
      audit: "Logistics – IPI scores"
    },
    {
      id: 8,
      icon: FaCheck,
      audit: "International expansion"
    },
    {
      id: 9,
      icon: FaCheck,
      audit: "Customer service"
    },
  ],
  imgSrc: "/accAuditImages/hero.png"
}

export const auditBenefits = [
  {
    id: 1,
    title: "Maximize profits",
    description:
      "Our experts will go through your account with the goal of spotting areas of improvement to help drive more sales for your listings:",
    points: [
      {
        id: 1,
        icon: FaCheck,
        text: "Detailed 75 point analysis",
      },
      {
        id: 2,
        icon: FaCheck,
        text: "Our recommendations for your account",
      },
      {
        id: 3,
        icon: FaCheck,
        text: "High level summary for growth opportunities",
      },
    ],
  },
  {
    id: 2,
    title: "Avoid costly mistakes",
    description:
      "Mistakes on Amazon can cost you more than just sales—they can jeopardize your account. Our audit service ensures your store is error-free and compliant:",
    points: [
      {
        id: 1,
        icon: FaCheck,
        text: "Address potential policy violations",
      },
      {
        id: 2,
        icon: FaCheck,
        text: "Correct performance metric weaknesses",
      },
      {
        id: 3,
        icon: FaCheck,
        text: "Maintain strong account health metrics",
      },
    ],
  },
];


export const auditFeatures = [
  {
    id: 1,
    title: "Account health check",
    description:
      "Review of performance metric, identifying and addressing policy violations or warnings.",
    imgSrc: "/accAuditImages/health.png",
  },
  {
    id: 2,
    title: "Detailed listing optimization",
    description:
      "Evaluation of product titles, descriptions, bullet points, images, SEO effectiveness, and more.",
    imgSrc: "/accAuditImages/listingOpt.png",
  },
  {
    id: 3,
    title: "Inventory management",
    description:
      "Assess inventory levels to avoid stockouts or overstocking and identify slow-moving or unsellable inventory.",
    imgSrc: "/accAuditImages/inventory.png",
  },
  {
    id: 4,
    title: "Advertising performance",
    description:
      "Review of PPC campaigns and other advertising efforts to optimize ad spend and assess ROI.",
    imgSrc: "/accAuditImages/performance.png",
  },
  {
    id: 5,
    title: "Customer experience",
    description:
      "Analyze reviews and feedback. Address negative reviews or issues impacting customer satisfaction.",
    imgSrc: "/accAuditImages/customerExp.png",
  },
  {
    id: 6,
    title: "Analysis of profitability",
    description:
      "Review fees, costs, and pricing strategies to spot areas to reduce expenses or increase margins.",
    imgSrc: "/accAuditImages/profitAnalysis.png",
  },
  {
    id: 7,
    title: "Full compliance review",
    description:
      "Ensure compliance with Amazon’s policies and guidelines, and verify that all documentation and legal requirements are up-to-date.",
    imgSrc: "/accAuditImages/compliance.png",
  },
];

export const brandConsultingContent = {
  heading: "Amazon brand growth consulting",

  subHeading: "Vetted coaches, with more call session options",

  description:
    "We’ll find growth gaps, fix catalog issues, sharpen PPC, and guide your tariff strategy. Every session is about moving your brand forward. Let’s fix what’s broken and fuel what’s working.",

  ctaText: "View consultation options",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Amazon brand growth",
      href: "brandGrowth"
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Drive sales, fix issues",
      href: "targetedSolutions"
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Strategic business considerations",
      href: "customSolutions"
    },
  ],

  rightImageSrc: "/consultingImages/hero.jpeg",
};

export const servicesContent = [
  {
    id: 1,
    imgSrc: "/consultingImages/design.png",
    title: "Design, SEO, and listing optimization",
    description:
      "Make your listings rank and convert. From keyword indexing to A+ visuals, we help you optimize every part of your product pages to boost traffic and increase conversion rates.",
  },
  {
    id: 2,
    imgSrc: "/consultingImages/catalog.png",
    title: "Catalog management",
    description:
      "Clean up the chaos. We troubleshoot and restructure messy catalogs, merge duplicate listings, fix parent/child errors, and ensure your backend is set up for smooth scaling.",
  },
  {
    id: 3,
    imgSrc: "/consultingImages/brand.png",
    title: "Brand registry",
    description:
      "Get protected, stay in control. We walk you through the full Brand Registry process, help fix brand errors, and support reinstatement if your brand gets revoked.",
  },
  {
    id: 4,
    imgSrc: "/consultingImages/brandgrowth.png",
    title: "Amazon brand growth strategy",
    description:
      "Build a brand, not just a product. From initial setup to future growth, we develop your Amazon brand’s roadmap, including pricing, product lines, and visibility.",
  },
  {
    id: 5,
    imgSrc: "/consultingImages/brandexpansion.png",
    title: "International brand expansion",
    description:
      "Expand globally with confidence. Get expert coaching to protect your brand, optimize listings for different regions, and seamlessly translate your catalog for global expansion.",
  },
];

export const tagetedSolutions = [
  {
    id: 1,
    title: "Troubleshooting product suppression and listing issues",
    description:
      "Get your listings back on track. We identify and fix the root causes of product suppressions, listing errors, and compliance issues—so your products stay visible and active on Amazon.",
  },
  {
    id: 2,
    title: "PPC optimization and troubleshooting",
    description:
      "Maximize ad performance, minimize waste. We optimize your PPC campaigns, improve targeting, and troubleshoot underperforming ads to drive more sales at a lower cost-per-click.",
  },
  {
    id: 3,
    title: "Conversion rate optimization",
    description:
      "Turn more clicks into sales. We analyze your listings and implement strategies—from better images and copy to testing layouts—to increase your conversion rate and boost sales.",
  },
  {
    id: 4,
    title: "Seller Central account management",
    description:
      "Maintain a healthy, efficient account. We ensure your Seller Central account stays in top shape by monitoring for warnings, addressing policy issues, and managing account health to avoid suspensions.",
  },
  {
    id: 5,
    title: "Cart abandonment solutions",
    description:
      "Bring back lost sales. We study cart abandonment patterns and implement targeted solutions, like retargeting strategies and offering incentives, to recover those lost opportunities.",
  },
  {
    id: 6,
    title: "Performance metrics analysis and strategy",
    description:
      "Data-driven decisions for growth. We review your Amazon performance metrics, identify opportunities, and adjust strategies based on insights to improve sales velocity, conversion rates, and overall profitability.",
  },
]

export const customSolutionsContent = {
  heading: "Custom solutions to scale on Amazon",
  subheading:
    "My Amazon Partners tackles your unique challenges, from growth to tariffs, step-by-step.",

  points: [
    {
      id: 1,
      title: "Business growth strategies",
      description:
        "Grow smarter, not harder. We help you map out actionable business strategies, identify expansion opportunities, and create a plan for scaling your brand both within Amazon and beyond.",
    },
    {
      id: 2,
      title: "Tariff strategy",
      description:
        "Stay profitable despite tariff hikes. We guide you through tariff challenges, offering cost-saving strategies and alternatives to maintain your margins in global markets.",
    },
    {
      id: 3,
      title: "Supplements and health categories",
      description:
        "Stay compliant and competitive. We steer you through compliance and listing optimization to succeed in the health and supplements industry.",
    },
    {
      id: 4,
      title: "Product compliance and regulatory requirements",
      description:
        "Avoid costly compliance mistakes. Our team helps ensure your products, especially in strict categories, meet Amazon and legal standards.",
    },
    {
      id: 5,
      title: "Custom marketing by category",
      description:
        "Right audience, right message. Fueling your growth with laser-targeted campaigns specific to your category.",
    },
    {
      id: 6,
      title: "Off-Amazon marketing and diversification",
      description:
        "Expand beyond Amazon’s walls. Escape Amazon dependency by building your off-platform presence and diversifying income with our guidance.",
    },
  ],

  rightSide: {
    imgSrc: "/consultingImages/customSolutions.png",
    title: "Feeling the pressure of rising tariffs?",
    description:
      "You are not alone. Businesses across the country rely on foreign manufacturing for their success, and tariff changes have major impact to business operations. Talk to an expert who’ll help you plan smarter shipping, sourcing, and pricing strategies.",
  },
};

export const resultsStats = [
  {
    id: 1,
    value: "450+",
    label: "Brands currently managed",
  },
  {
    id: 2,
    value: "$1.2+ Billion",
    label: "Revenue generated on Amazon annually",
  },
  {
    id: 3,
    value: "460+",
    label: "Employees",
  },
];

export const reviewsData = [
  {
    id: 1,
    platform: "trustpilot",
    rating: "4.5 Stars",
    reviews: "443 Reviews",
    logo: "/allServicesImgs/trustpilot.png",
    stars: "/allServicesImgs/4p5stars.png",
  },
  {
    id: 2,
    platform: "google",
    rating: "4.6 Stars",
    reviews: "133 Reviews",
    logo: "/allServicesImgs/google.png",
    stars: "/allServicesImgs/4p6stars.png",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Brand guidelines",
    description: "Build trust, attract customers, and stand out from the competition. Our Amazon experts create brand design guidelines for a cohesive, professional look that works.",
    image: "/designImages/brandgl.png",
    isNew: true,

  },
  {
    id: 2,
    title: "Brand story",
    description: "Your Brand Story is your chance to shine. Make it memorable, build trust, and keep customers coming back. Let us help you craft a story worth sharing.",
    image: "/designImages/brandstory.png",
    isNew: true,

  },
  {
    id: 3,
    title: "Brand storefront",
    description: "Stand out with an Amazon storefront that does more than just list products. Have a branded shopping experience that builds trust and drives sales.",
    image: "/designImages/brandstorefront.png",
    isNew: true,

  },
  {
    id: 4,
    title: "Listing images",
    description: "Get high-quality visuals that show off your product in the best light. Your product may be amazing, but if your listing images don't do it justice, no one will know.",
    image: "/designImages/listingimages.png",
    isNew: true,

  },
  {
    id: 5,
    title: "Enhanced brand content A+",
    description: "A+ content is a proven sales booster. If your listing isn't giving customers the full picture, they'll probably look elsewhere. Get A+ content that builds trust and drives more sales.",
    image: "/designImages/brandcontent.png",
    isNew: true,
  },
  {
    id: 6,
    title: "Full listing optimization",
    description: "An optimized listing is the difference between getting lost in the crowd and getting noticed. Keywords, images, descriptions — these elements work together to boost sales.",
    image: "/designImages/fulllisting.png",
    isNew: true,
  },
  {
    id: 7,
    title: "Main image CTR hack",
    description: "Make a good first impression and have more Amazon shoppers discover your products. Turn your main image into the attention-grabber it should be and start driving those clicks.",
    image: "/designImages/ctrhack.png",
    isNew: true,
  }
];

export const betterDesignData = [
  {
    id: 1,
    title: "Higher visibility and CTR",
    description: 'Let’s face it—Amazon is a crowded marketplace, and blending in won’t do you any favors. Eye-catching visuals is the way to get noticed and clicked on. Because if shoppers don’t click, they don’t buy.',
  },
  {
    id: 2,
    title: "Communicate features and benefits",
    description: 'No one’s reading that long description if your visuals don’t grab them first. Infographics and sharp layouts do the heavy lifting, so shoppers get the point without breaking a sweat.',
  },
  {
    id: 3,
    title: "Enhanced appeal and perceived value",
    description: 'High-quality, professional images showcase your products in the best light, increasing their perceived value and making them more attractive to buyers.',
  },
  {
    id: 4,
    title: "Increased trust and brand recognition",
    description: 'No communication gaps. Bi-weekly conference calls and flexible communication options keep you informed and supported.',
  },
  {
    id: 5,
    title: "Better engagement",
    description: 'Your story matters—but not if it’s buried under amateur design. pro-level visuals keeps shoppers scrolling, learning, and clicking “Add to Cart.',
  },
  {
    id: 6,
    title: "Beat the competition",
    description: 'Professional graphic design helps your listings outperform competitors, making your products more memorable and appealing to buyers.',
  },
]


//! Testimonials Section Data
export const testimonialAgencyData = {
  header: {
    badge: "CLIENT TESTIMONIALS & REVIEWS",
    headingMain: "Real brands.",
    headingHighlight: "Real results.",
    description: "See how we’ve helped brands reach their full potential and solve their Amazon problems. Don’t take our word for it, hear it directly from our clients."
  },
  stats: [
    {
      platform: "Trustpilot",
      stars: 5,
      rating: "4.5 Stars",
      reviews: "443+ Reviews"
    },
    {
      platform: "Google Reviews",
      stars: 5,
      rating: "4.6 Stars",
      reviews: "133+ Reviews"
    }
  ]
};

export const testimonialStatsData = [
  { value: "450+", label: "Brands Managed" },
  { value: "$1.2B+", label: "Revenue on Amazon Annually" },
  { value: "460+", label: "Team Members" },
  { value: "★★★★★", label: "5-Star Rated Agency" }
];

export const testimonialData = {
  label: "WHAT OUR CLIENTS SAY",
  mainHeading: "Trusted across every category on Amazon",
  subHeading: "From new launches to established sellers here’s what working with My Amazon Partners actually looks like.",
  review: {
    growthTag: "📈 340% Sales Growth · 6 Months",
    comment: "My Amazon Partners transformed our Amazon presence completely. Before working with them, we were losing ranking every time we ran out of stock. They fixed our catalog, sorted our compliance issues, and built an ad structure that actually works. Sales increased 340% in just 6 months. Their SEO and PPC strategies are next level.",
    author: "Sarah Mitchell",
    designation: "CEO, NatureBrand",
    initials: "SM",
    stars: 5
  }
};

export const reviewCardsData = [
  {
    id: 1,
    stars: 5,
    tag: "🔍 Page 5 → Page 1",
    quote: "We went from page 5 to page 1 for our main keywords. The team’s expertise in Amazon’s algorithm is unmatched. They knew exactly which levers to pull and when. Highly recommend!",
    author: "James Rodriguez",
    role: "Founder, TechGear Pro",
    initials: "JR",
    theme: "light"
  },
  {
    id: 2,
    stars: 5,
    tag: "⚡ Full Account Rebuild",
    quote: "Professional, responsive, and results-driven. They handle everything so we can focus on product development. From catalog cleanup to ad restructure it’s been seamless. Best decision we made.",
    author: "Emily Chen",
    role: "Brand Manager, FitLife",
    initials: "EC",
    theme: "dark"
  },
  {
    id: 3,
    stars: 5,
    tag: "🚀 $333 → $100K/Month",
    quote: "In 14 months, my account went from $333 a month to over $100,000. I couldn’t believe how structured and methodical their process was. Every step made sense and the results followed.",
    author: "Jeffrey L.",
    role: "Amazon FBA Seller",
    initials: "JL",
    theme: "light"
  }
];

export const beforeAfterData = {
  label: "BEFORE & AFTER",
  heading: "Numbers that speak for themselves",
  subHeading: "Real results from real clients built on structure and discipline, not inflated ad spend.",
  stats: [
    {
      id: 1,
      percentage: "293%",
      description: "Monthly revenue increase for a Home & Consumer Goods brand"
    },
    {
      id: 2,
      percentage: "$333 → $100K",
      description: "Monthly sales growth achieved in just 14 months for an FBA seller"
    },
    {
      id: 3,
      percentage: "225% + 106%",
      description: "Year-over-year growth across two consecutive years for one client"
    }
  ]
};

export const caseStudiesData = [
  {
    id: 1,
    category: "FITNESS RECOVERY BRAND",
    duration: "6 Months",
    metricLeft: "~$0",
    labelLeft: "STARTING REVENUE",
    metricRight: "$100K",
    labelRight: "MONTH 6",
    quote: "We were constantly getting suppressed listings and running out of stock. MAP stabilized everything first before even thinking about scaling. By month 6 we'd hit $100K. I wish we'd found them sooner.",
    author: "Zachary Quinn",
    role: "Founder, Fitness Recovery Brand",
    initials: "ZQ"
  },
  {
    id: 2,
    category: "POWER SOLUTIONS BRAND",
    duration: "30 Days",
    metricLeft: "Base",
    labelLeft: "MONTHLY REVENUE",
    metricRight: "+37%",
    labelRight: "FIRST MONTH",
    quote: "Buy Box losses and compliance issues were killing our momentum. MAP restructured our campaigns, fixed our catalog, and we hit a record $223K month. The B2B side grew 122% year over year.",
    author: "Michael R.",
    role: "VP Operations, Power Solutions Brand",
    initials: "MR"
  },
  {
    id: 3,
    category: "OUTDOOR CANOPY BRAND",
    duration: "Buy Box Control",
    metricLeft: "Lost",
    labelLeft: "BUY BOX STATUS",
    metricRight: "95%",
    labelRight: "WIN RATE",
    quote: "We were losing the Buy Box constantly to third-party resellers. MAP took control of our listings, rebuilt our storefront, and fixed our pricing. Revenue went up 243% and we've held that ground since.",
    author: "Tom L.",
    role: "CEO, Outdoor Canopy Brand",
    initials: "TL"
  },
  {
    id: 4,
    category: "LANDSCAPING BRAND",
    duration: "90 Days",
    metricLeft: "$245K",
    labelLeft: "STARTING REVENUE",
    metricRight: "$512K",
    labelRight: "MONTH 3",
    quote: "Over 1,300 SKUs and 350+ campaigns but most of it wasn't performing. MAP identified our best opportunities, restructured everything, and doubled revenue in 90 days while keeping TACoS under 11%.",
    author: "Amanda P.",
    role: "E-Commerce Manager, Landscaping Brand",
    initials: "AP"
  }
];

export const finalReviewsData = {
  label: "In Their Own Words",
  heading: "What long-term partnership looks like",
  subHeading: "Some of our strongest relationships have been built over years, not weeks.",

  mainReview: {
    stars: 5,
    quote: "I truly appreciate the way you have embraced my vision as if it were your own. Your commitment to the success of my business is evident in every task you undertake. You consistently go above and beyond, demonstrating a genuine care for not only the work but also for the well-being of the business as a whole. It is rare to find someone who possesses such a strong sense of ownership and responsibility. Your insights and contributions have been invaluable, and I am continually impressed by your ability to navigate challenges with grace and efficiency. You have become a huge asset to me, and I am grateful for your support and the positive energy you bring.",
    author: "Curt Harden",
    role: "Owner, TwinTech LLC",
    initials: "CH"
  },
  bottomCards: [
    {
      id: 1,
      stars: 5,
      tag: "🛡️ Brand Protection",
      quote: "We were constantly hit with listing suppressions and patent infringement from copycats. MAP navigated Brand Registry, got infringers removed, and cleaned up our account health. Revenue stabilized almost immediately after.",
      author: "Nicole B.",
      role: "Brand Director, Consumer Goods",
      initials: "NB",
      isDark: false
    },
    {
      id: 2,
      stars: 5,
      tag: "📉 ACoS 19.5% → 6.7%",
      quote: "In 15 days our ACoS dropped from nearly 20% to under 7%. Same budget, almost 3x the return. The keyword precision they brought to our campaigns was something we simply couldn't figure out on our own.",
      author: "Kevin T.",
      role: "Founder, Outdoor Apparel Brand",
      initials: "KT",
      isDark: true
    },
    {
      id: 3,
      stars: 5,
      tag: "🌍 5 Years of Partnership",
      quote: "I've worked with MAP for about five years. They're the only team I go to when it comes to Amazon. They've earned that trust over time not just from results, but from how they communicate and how genuinely they care.",
      author: "Rustu S.",
      role: "Long-term Client · 5 Years with MAP",
      initials: "RS",
      isDark: false
    }
  ]
};

export const clientVoicesData = {
  label: "CLIENT VOICES",
  heading: "From the brands behind the results",
  subHeading: "Across every category from outdoor gear to pet supplies here’s the consistent theme.",
  reviews: [
    {
      id: 1,
      brandName: "Clam.",
      quote: "They didn't pitch us a one-size-fits-all plan. They understood our distribution challenges and built a strategy specifically around them. The results followed naturally 243% revenue growth and 95% Buy Box control.",
      author: "Tom L.",
      role: "CEO, Clam Outdoors",
      stars: 5
    },
    {
      id: 2,
      brandName: "Koala+",
      quote: "Our best sellers were losing ground and we couldn't figure out why. MAP ran a full audit, rebuilt our PPC, and within 8 weeks we saw $275K in incremental revenue. The $4.7M YoY increase across Q1 and Q2 validated everything they committed to.",
      author: "Rachel S.",
      role: "Head of Growth, Koala",
      stars: 5
    },
    {
      id: 3,
      brandName: "NatureBrand",
      quote: "I was skeptical about outsourcing our Amazon management but the team earned our trust quickly. They're proactive, transparent, and genuinely invested in our growth not just hitting short-term numbers. We felt like we finally found the right fit.",
      author: "Sarah Mitchell",
      role: "CEO, NatureBrand",
      stars: 5
    },
    {
      id: 4,
      brandName: "Pet&Horse",
      quote: "Over two years working together our units sold grew 83% and revenue is up 28% year over year. It's not flashy it's consistent, disciplined management that compounds over time. That's exactly what our brand needed.",
      author: "Linda K.",
      role: "Owner, Pet & Equestrian Brand",
      stars: 5
    }
  ]
};

export const designBenefitsData = [
  {
    id: 1,
    title: "Time and efficiency",
    description: "You’ve got a business to run. Let a pro handle the design while you focus on scaling.",
    imgSrc: "/designImages/timenefficiency.png",
  },
  {
    id: 2,
    title: "Consistent branding",
    description: "Ensure that your listings stay sharp and on-brand across the board, building trust with customers.",
    imgSrc: "/designImages/consistbranding.png",
  },
  {
    id: 3,
    title: "Stand out from competitors",
    description: "Make your listings pop. If you’re not standing out, you’re blending in. A designer makes sure you stand tall.",
    imgSrc: "/designImages/standout.png",
  },
  {
    id: 4,
    title: "Expertise that works",
    description: "We’ve crafted our design service across five years and more than 500 clients. We understand what works on Amazon.",
    imgSrc: "/designImages/expertise.png",
  },
];

// ! FAQ's Data
export const faqData = {
  mainHeading: "Frequently Asked Questions",
  questions: [
    {
      id: 1,
      question: "Why is professional graphic design important for my Amazon listings?",
      description: "High-quality visuals grab shoppers’ attention, communicate product features quickly, and increase perceived value. Great design improves click-through rates (CTR) and conversion, helping your listings stand out in Amazon’s crowded marketplace.",
      items: [],
    },
    {
      id: 2,
      question: "What design services do you offer specifically for Amazon sellers?",
      description: "We provide a full suite of design services, including:",
      items: [
        "Brand design guidelines for a cohesive, professional look",
        "Brand storytelling to engage and build trust",
        "Amazon storefront design for a branded shopping experience",
        "Listing image design to showcase your product in the best light",
        "Enhanced Brand Content (A+ content) to provide richer product details",
        "Main image CTR optimization for catching shoppers’ eyes",
        "Full listing optimization integrating keywords, images, and descriptions"
      ],
    },
    {
      id: 3,
      question: "How does good design increase my sales on Amazon?",
      description: "Eye-catching product images and well-structured A+ content help shoppers quickly understand your product benefits and trust your brand, leading to higher sales. Listings with poor visuals often get overlooked, no matter how great the product is.",
      items: [],
    },
    {
      id: 4,
      question: "Can you help create or improve my Amazon storefront?",
      description: "Yes, we design Amazon storefronts that provide a branded, seamless shopping experience to boost trust and customer loyalty beyond just listing products.",
      items: [],
    },
    {
      id: 5,
      question: "What is Enhanced Brand Content (A+ content), and why do I need it?",
      description: "A+ content lets you add detailed images, comparison charts, and rich copy to your product pages. This helps educate shoppers and builds confidence, increasing sales and reducing returns.",
      items: [],
    },
    {
      id: 6,
      question: "How do you ensure my brand looks consistent across all listings?",
      description: "We create brand design guidelines tailored to your identity and apply them across images, storefront, and content for a unified, professional look that builds recognition and trust.",
      items: [],
    },
    {
      id: 7,
      question: "Is it better to hire a professional designer or do the design myself?",
      description: "While DIY may seem cheaper, a professional designer versed in Amazon’s requirements brings expertise that leads to higher sales and saves you time. It’s a valuable investment for serious sellers.",
      items: [],
    },
    {
      id: 8,
      question: "How long does it take to get design assets completed?",
      description: "Typical turnaround depends on your project size, but we offer efficient workflows and flexible communication options to keep you informed, often completing projects within 1–3 weeks.",
      items: [],
    },
    {
      id: 9,
      question: "Will better design improve my product’s visibility on Amazon?",
      description: "Yes, improved images and enhanced content can increase your listing’s CTR, leading to better Amazon algorithm signals and higher ranking potential.",
      items: [],
    },
    {
      id: 10,
      question: "How do you work with clients during the design process?",
      description: "We hold regular bi-weekly calls and offer flexible communication to review progress, gather feedback, and ensure your vision aligns with the final design.",
      items: [],
    },
  ]
}

// ! Brand GL Data
export const brandGlData = {
  heading: "Brand guidelines",

  subHeading: "",

  description:
    "Tired of blending in? Strong branding creates trust, boosts sales, and sets you apart. Our Amazon experts craft clear guidelines for a consistent, professional brand image. ",

  ctaText: "View consultation options",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Define your brand's personality, values, and mission to ensure a unified and consistent message.",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Drive sales, fix issues",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Create a consistent brand image for instant recognition and trustworthiness across all touch points.",
      href: ""
    },
  ],

  rightImageSrc: "/brandGlImages/hero.png",
}

export const brandGlFeatureCardData = [
  {
    id: 1,
    title: "Consistency builds trust",
    description: "Customers trust brands they recognize. Consistent branding across listings, ads, and packaging builds trust as well as familiarity."
  },
  {
    id: 2,
    title: "Professionalism matters",
    description: "Clear guidelines ensure all your Amazon content appear professional and high-quality, setting you apart from less-polished competitors."
  },
  {
    id: 3,
    title: "Save time and resources",
    description: "Brand guidelines streamline content creation by providing a clear framework for design and messaging. No more guesswork."
  },
  {
    id: 4,
    title: "Empower your team",
    description: "Equip everyone involved in your Amazon business with the knowledge and tools to represent your brand accurately."
  },
  {
    id: 5,
    title: "Future-proof your brand",
    description: "Brand guidelines evolve alongside your brand, ensuring your image stays fresh and relevant."
  },
  {
    id: 6,
    title: "Clear and concise documentation",
    description: "Our brand guidelines come in a user-friendly format for easy access and implementation."
  },
]

export const brandGlQsData = {
  heading: "What are brand guidelines?",

  subHeading: "",

  description:
    "Brand guidelines are a roadmap for using your brand effectively. They outline the visual and verbal elements that define your brand, ensuring a consistent and professional experience for your customers. ",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Logo Usage - Proper logo placement, sizing, and color variations.",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Color Palette - Primary, secondary, and accent colors with hex codes for perfect color consistency.",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Typography - Defined fonts for headlines, body text, and other elements to maintain a unified look.",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Imagery Style - Preferred photography styles, illustrations, and graphic elements that reflect your brand personality.",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Voice and tone - Guidelines for the language and tone you use in your marketing materials, and customer interactions.",
      href: ""
    },
  ],

  rightImageSrc: "/brandGlImages/brandGlQs.png",
}


//! HOME PAGE CONTENT

export const homeHeroData = {
  badge: "Full-Service Amazon Agency · Atlanta, GA",
  headingMain: "Your Amazon",
  headingItalic: "growth",
  headingEnd: "starts right here.",
  subtext: "Have great products but sluggish sales? Our 460+ Amazon specialists handle PPC, SEO, design & platform management — so you scale faster, with less stress.",
  brandsTrustText: "450+ brands trust us including Nestlé & Honeywell",
  statsCards: [
    {
      label: "AGENCY OVERVIEW",
      metric: "$1.2B+",
      subMetric: "Revenue generated on Amazon",
      specialists: "460+",
      specialistsLabel: "Full-time Amazon specialists"
    },
    {
      type: "STAMP HUB — CLIENT WIN",
      metric: "293%",
      subMetric: "Higher monthly revenue",
      tag: "Creative refresh + PPC rebuild",
      icon: "⚡"
    },
    {
      type: "CHIRP — CLIENT WIN",
      metric: "519%",
      subMetric: "Growth in a loaded market",
      tag: "Full-service strategy",
      icon: "🚀"
    }
  ]
};

export const homeServicesData = {
  label: "WHAT WE DO",
  headingMain: "Your Amazon presence,",
  headingItalic: "fully handled.",
  description: "A holistic approach that drives traffic, boosts conversions, and builds long-term brand equity on Amazon.",
  services: [
    {
      id: 1,
      title: "Amazon PPC",
      desc: "Higher revenue, lower ACOS, fully transparent ad management. We build campaigns that actually convert and scale.",
      icon: "Pulse",
      bgColor: "bg-[#FFF4E0]"
    },
    {
      id: 2,
      title: "SEO",
      desc: "Our 4-phase SEO plan is best-in-class and delivers dramatic search ranking improvements within 90 days.",
      icon: "Search", // Magnifying glass icon
      bgColor: "bg-[#FFF9F0]"
    },
    {
      id: 3,
      title: "Design",
      desc: "Top-tier A+ content, Brand Stores, and product graphics that make customers stop scrolling and start buying.",
      icon: "Layout", // Dashboard/Layout icon
      bgColor: "bg-[#FFF9F0]"
    },
    {
      id: 4,
      title: "Platform Management",
      desc: "We optimize your brand continuously — maintaining gains and building forward momentum month after month.",
      icon: "Pencil", // Edit/Pencil icon
      bgColor: "bg-[#FFF9F0]"
    }
  ],
  footerLink: "Explore all 7 services →"
};

export const homeProcessData = {
  label: "HOW IT WORKS",
  headingMain: "Simple 3-step process,",
  headingItalic: "serious results.",
  steps: [
    {
      id: "01",
      title: "Onboarding",
      description: "We start with an onboarding survey, a kick-off call, deep competitor analysis, and a full account audit to understand exactly where you stand.",
      rightSide: {
        stepLabel: "Step 01 — Onboarding",
        heading: "Setting the foundation for growth.",
        list: ["Onboarding Survey", "Strategy Kick-Off Call", "Competitor Analysis", "Full Account Audit"]
      }
    },
    {
      id: "02",
      title: "Optimization",
      description: "A never-ending cycle of improvement across your catalog, PPC campaigns, SEO, and creative — always pushing the needle forward.",
      rightSide: {
        stepLabel: "Step 02 — Optimization",
        heading: "A never-ending cycle of improvement.",
        list: ["Catalog Optimization", "PPC Campaign Build", "SEO & Keyword Strategy", "Design & Creative"]
      }
    },
    {
      id: "03",
      title: "Results",
      description: "Watch your traffic, conversion rates, and sales climb — with fully transparent reporting so you always know exactly what's happening.",
      rightSide: {
        stepLabel: "Step 03 — Results",
        heading: "Watch your sales climb and scale.",
        list: ["Traffic Growth", "Conversion Uplift", "Revenue Increase", "Sales Momentum"]
      }
    }
  ]
};

export const homeCaseStudies = [
  {
    brand: "STAMP HUB",
    metric: "293%",
    badge: "Revenue Growth",
    title: "293% higher monthly revenue after creative + PPC overhaul",
    description:
      "A dramatic jump in sales driven by a complete revamp of creative assets — improved listing images, A+ content, and a fully restructured PPC strategy that finally put them in front of the right buyers.",
  },
  {
    brand: "CHIRP",
    metric: "519%",
    badge: "Market Growth",
    title: "519% growth for a well-known brand in a saturated market",
    description:
      "We were able to produce more success for a recognizable brand in a highly competitive category — proving our full-service strategy works even when the marketplace is crowded and the odds are stacked.",
  },
];

export const homeTestimonialsData = [
  {
    rating: 5,
    text:
      "I thought it was time for a little thank you. I'm just feeling extra grateful — I sent the survey over, just tens all across the board. You guys are incredible.",
    name: "Chad Littlefield",
    role: "Co-Founder, We and Me",
    initials: "CL",
  },
  {
    rating: 5,
    text:
      "Honestly the only team that I speak to about Amazon and the only people I trust. They've completely changed the trajectory of my business.",
    name: "Matt",
    role: "Amazon FBA Seller",
    initials: "MT",
  },
  {
    rating: 5,
    text:
      "We started to make 80% growth in just four months — over 200% compared to the previous period. Results we never thought were possible so quickly.",
    name: "Cynthia Li",
    role: "Founder & Co-owner, Whole Parts",
    initials: "CL",
  },
];

export const homeCtaContent = {
  label: "— READY TO GROW?",
  headingStart: "Increase your reach",
  headingMiddle: "and revenue",
  headingAccent: "the right way.",
  description:
    "With our full-service Amazon agency, we understand exactly what it takes to drive meaningful, lasting growth on Amazon.",
  primaryBtn: "Contact Us to Get Started",
  secondaryBtn: "View Our Services",
};

// ! HOME FAQ Section
export const homeFaqData = {
  mainHeading: "",
  questions: [
    {
      id: 1,
      question: "What is an Amazon Agency?",
      description: "An Amazon agency specializes in managing and growing brands on Amazon — handling advertising, SEO, design, and strategy. Hiring one simplifies selling, boosts growth, and frees you to focus on building your business.",
      items: [],
    },
    {
      id: 2,
      question: "How do you optimize product listings?",
      description: "We combine keyword research, competitor analysis, compelling copywriting, and premium creative assets. Our 4-phase SEO plan delivers measurable ranking improvements within 90 days.",
      items: [],
    },
    {
      id: 3,
      question: "How do you manage advertising campaigns?",
      description: "Our PPC team builds and continuously optimizes Sponsored Products, Sponsored Brands, and Sponsored Display campaigns — targeting higher revenue and lower ACOS with full transparency.",
      items: [],
    },
    {
      id: 4,
      question: "Can you improve our search rankings?",
      description: "Absolutely. Our SEO specialists use proven techniques to improve organic visibility, driving more traffic to your listings without relying purely on paid ads.",
      items: [],
    },
    {
      id: 5,
      question: "How do I get started?",
      description: "Start with a free listing audit — we'll review your Amazon presence and provide actionable suggestions. Then we'll schedule an icebreaker call to understand your goals and build a tailored plan.",
      items: [],
    },
    {
      id: 6,
      question: "Do you provide reporting and analytics?",
      description: "Yes — you'll receive detailed, fully transparent reporting on all efforts. You'll always know exactly what we're doing, why we're doing it, and what results it's generating.",
      items: [],
    },
  ]
}

export const designServicesData = [
  {
    id: 1,
    title: "Professional design service",
    description: "We handle the hard work of logo design, crafting a perfect fit for your brand and audience, complete with a comprehensive Brand Guideline.",
    image: "/brandGlImages/designservice.png"
  },
  {
    id: 2,
    title: "Trust with consistency",
    description: "A brand guidelines ensures consistent, professional marketing—from Amazon listings to social media—boosting trust and sales.",
    image: "/brandGlImages/trust.png"
  },
  {
    id: 3,
    title: "Strong logo, stronger brand",
    description: "A strong logo is essential for brand consistency, helping shoppers recognize your business, whether on Amazon or social media.",
    image: "/brandGlImages/strongbrand.png"
  }
];

export const brandGlForBusiness = [
  {
    id: 1,
    icon: FaCheck,
    description: "Serious sellers: You’re committed to building a strong brand presence on Amazon and want to elevate your customer experience."
  },
  {
    id: 2,
    icon: FaCheck,
    description: "Growing businesses: Your brand is expanding, and you need a system to maintain consistency across multiple product lines."
  },
  {
    id: 3,
    icon: FaCheck,
    description: "Multi-channel sellers: You sell across various platforms, and you need brand guidelines to ensure a unified brand image everywhere."
  }
]

// ! brandGL FAQ Data

export const brandGlFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What are the key steps involved in your standard process for branding?",
      description: "The standard process we have for branding includes the following steps:",
      items: [
        "Gathering information: Ask client to answer a survey or questionnaire to gather relevant information about the client's industry, competitors, and market trends.",
        "Research and analysis: Conduct research to understand the market, competitors, and target audience.",
        "Define brand elements: Define the core elements that make up the brand, such as its values, mission, and vision.",
        "Logo design: Create a logo that rep  resents the brand's identity and values.",
        "Voice and tone guidelines: Establish guidelines for the brand's voice and tone in communications.",
        "Imagery style: Define the style of imagery that will be used to represent the brand.",
        "Typography: Select fonts that reflect the brand's personality and values.",
        "Color palette: Choose a color palette that evokes the desired emotions and aligns with the brand's identity.",
        "Brand application: Apply the brand elements across various touchpoints, such as packaging, website, and marketing materials.",
        "Review and update: Review the brand application to ensure consistency and relevance.",
        "Approval and finalization: Get approval from the client on the final brand elements.",
        "Implementation: Implement the brand elements across all relevant platforms and materials.",
      ],
    },
    {
      id: 2,
      question: "What key information do you gather from clients during the branding process?",
      description: "During the branding process, we gather crucial information through a series of questions:",
      items: [
        "Your Brand Story: Understanding the inspiration behind your brand's inception.",
        "Target Audience: Describing your ideal customers in terms of demographics and interests.",
        "Brand Personality: Imagining your brand as a person and defining their personality.",
        "Brand Values: Identifying the values your brand stands for and wants to convey.",
        "Brand Voice: Determining the tone and style of communication your brand will use.",
        "Competitive Landscape: Identifying your main competitors and your unique selling points.",
        "Visual Preferences: Gathering your preferences for visual elements like colors, fonts, and imagery.",
        "Existing Brand Assets: If you already have a logo or tagline, we'll assess them.",
        "Brand Usage: Understanding how and where you plan to use your brand assets.",
        "Additional Comments: Providing an opportunity for you to share any specific requirements or preferences for your branding guidelines."
      ],
    },
    {
      id: 3,
      question: "How do you initiate the branding process with a client?",
      description: "We send a survey or questionnaire to gather pertinent information about the client's industry, competitors, and market trends.",
      items: [],
    },
    {
      id: 4,
      question: "What steps are involved in researching and analyzing a client's brand?",
      description: "We conduct in-depth research on their target audience, competitors, and industry landscape. This analysis helps us identify key insights that inform the branding strategy.",
      items: [],
    },
    {
      id: 5,
      question: "How do you define the core elements of a brand?",
      description: "We determine the logo, color palette, typography, and imagery style, ensuring they align with the brand's personality, values, and target audience preferences.",
      items: [],
    },
    {
      id: 6,
      question: "What is involved in designing a logo for a client?",
      description: "We create or refine the client's logo design, ensuring it is versatile, memorable, and representative of the brand. We also provide clear guidelines for logo usage.",
      items: [],
    },
    {
      id: 7,
      question: "What is involved in designing a logo for a client?",
      description: "We create or refine the client's logo design, ensuring it is versatile, memorable, and representative of the brand. We also provide clear guidelines for logo usage.",
      items: [
        "Essential Brand Kit: Includes main logos and variations, a color palette, and typography selections, sometimes with additional graphical elements or patterns.",
        "Professional Brand Kit Offers detailed specifications for logo usage, color codes, typography guidelines, imagery styles, and voice/tone recommendations."
      ],
    },
    {
      id: 8,
      question: "How do you select a color palette for a brand?",
      description: "We choose a cohesive color palette that reflects the brand identity and evokes the desired emotions. We define primary and secondary colors and provide guidance on their usage.",
      items: [],
    },
    {
      id: 9,
      question: "What is the process for selecting typography for a brand?",
      description: "We choose fonts that complement the brand personality and enhance readability. We establish guidelines for headline, subheadline, body text, and other typographic elements.",
      items: [],
    },
    {
      id: 10,
      question: "How do you determine the imagery style for a brand?",
      description: "We define the visual style for images, illustrations, and graphics that align with the brand aesthetic. We specify preferred photography techniques and image types.",
      items: [],
    },
    {
      id: 11,
      question: "How do you establish voice and tone guidelines for a brand?",
      description: "We define the tone of voice that reflects the brand personality and resonates with the target audience. We provide examples of appropriate language and communication styles.",
      items: [],
    },
    {
      id: 12,
      question: "How do you demonstrate brand application across various touch points?",
      description: "We show how to apply brand elements consistently across print, digital, and other touch points. We include examples of stationery, marketing materials, website layouts, and social media posts.",
      items: [],
    },
    {
      id: 13,
      question: "How do you specify usage restrictions and permissions for a brand?",
      description: "We specify restrictions on brand usage and outline permissions for third-party use, including guidelines for co-branding and partnerships.",
      items: [],
    },
    {
      id: 14,
      question: "What is involved in documenting and disseminating branding guidelines?",
      description: "We compile all guidelines into a comprehensive document and conduct training sessions to ensure understanding and adherence across the organization.",
      items: [],
    },
    {
      id: 15,
      question: "How do you review and update branding guidelines?",
      description: "We regularly review and update guidelines to ensure they remain relevant and aligned with the brand's evolving needs. We solicit feedback from stakeholders and make necessary revisions.",
      items: [],
    },
    {
      id: 16,
      question: "How do you finalize branding guidelines with a client?",
      description: "We present the finalized guidelines to the client for approval and obtain their sign-off to signify their agreement and acceptance.",
      items: [],
    },
    {
      id: 17,
      question: "How do you implement branding guidelines?",
      description: "We implement the guidelines across all communication channels and touch points, monitoring adherence and addressing any deviations or issues.",
      items: [],
    },
    {
      id: 18,
      question: "What support do you provide for maintaining branding guidelines?",
      description: "We offer ongoing support for implementing and maintaining guidelines, assisting with questions or challenges that may arise.",
      items: [],
    },
    {
      id: 19,
      question: "How do you archive branding guidelines?",
      description: "We maintain a digital and physical archive of guidelines for future reference and use.",
      items: [],
    },
  ]
}


// ! CASE STUDEIS Content

export const caseStudiesHeroContent = {
  tag: "CASE STUDIES",
  heading: "Transformative Amazon Growth",
  description:
    "We work hand in hand with brands to create tailor-made strategies that help drive growth and hit new heights on Amazon.",
  points: [
    "Brand case studies",
    "Performance success stories",
  ],
};

export const caseStudiesStats = [
  {
    value: "450+",
    label: "Brands Currently Managed",
  },
  {
    value: "$1.2B+",
    label: "Revenue Generated on Amazon Annually",
  },
  {
    value: "460+",
    label: "Employees",
  },
  {
    value: "95%",
    label: "Buy Box Win Rate",
  },
  {
    value: "243%",
    label: "Peak Revenue Growth",
  },
];

export const caseStudyDetail = {
  category: "HOME & CONSUMER GOODS",
  headline: "+$7.5M Annual Sales Increase",
  badge: "FULL ACCOUNT TURNAROUND",

  topStats: [
    {
      icon: "📈",
      value: "293%",
      title: "Higher Monthly Revenue",
      desc: "Monthly avg grew from $9,100K to $35,800K",
    },
    {
      icon: "🧠",
      value: "20%",
      title: "Increased Market Share",
      desc: "Market share grew from 1% to 20% since onboarding",
    },
    {
      icon: "🚀",
      value: "15",
      title: "New Products Launched",
      desc: "Successfully launched products boosting revenue and share",
    },
  ],

  challenges: [
    "Inconsistent catalog health & broken store connections",
    "Recurring account health & policy violations",
    "Rampant brand infringement from copycat sellers",
    "Unclear profitability — SFP vs FBA cost unknown",
    "High return rates triggering investigations",
    "Failing international expansion (Canada/NARF)",
    "Inventory blind spots & aging storage fees",
    "Unstructured advertising — reactive spending",
    "Lightning Deals & PEDs suppressed repeatedly",
    "Utility patent & trade dress infringement unchecked",
    "Amazon return rate 2–4× higher than website",
  ],

  revenueNote:
    "Revenue uplift achieved through structural discipline and full account rebuild — not inflated ad spend.",
};

export const launchCaseStudy = {
  category: "NICHE COLLECTIBLES & STAMPS BRAND",
  title: {
    normal: "Zero to",
    highlight: "Full Market Presence",
  },
  badge: "BRAND NEW LAUNCH",

  startingChallenges: [
    "Brand-new catalog — parentages incorrect, products in wrong categories",
    "Below-average conversion rate despite unique product proposition",
    "Creative assets not retail-ready — failed to explain product value on Amazon",
    "No advertising infrastructure — campaigns built entirely from scratch",
    "Messaging not aligned with broader audience potential",
  ],

  fixes: [
    "Rebuilt catalog architecture — correct parentages & category placement",
    "Redesigned creative assets to clearly communicate product value",
    "Rewrote messaging to appeal to a wider audience segment",
    "Built full PPC campaign structure from the ground up",
    "Optimized conversion rate through listing + creative alignment",
  ],

  roadmap: [
    {
      title: "FOUNDATION",
      desc: "Catalog cleanup — fixed parentages, corrected categories, removed misplaced listings across the full SKU range",
    },
    {
      title: "CREATIVE OVERHAUL",
      desc: "Produced retail-ready assets explaining product value. Infographics, lifestyle imagery, and A+ Content rebuilt to convert",
    },
    {
      title: "MESSAGING REFINEMENT",
      desc: "Repositioned brand messaging to connect with a wider audience — moving beyond the core collector niche",
    },
    {
      title: "AD INFRASTRUCTURE",
      desc: "Built campaign architecture from scratch — keyword research, match-type segmentation, and structured scaling",
    },
    {
      title: "CONVERSION OPTIMIZATION",
      desc: "Aligned listing copy, visuals, and targeting to close the gap with — and surpass — category CVR averages",
    },
  ],

  resultCards: [
    { title: "Fixed", desc: "Catalog Architecture from Day 1", color: "green" },
    { title: "Built", desc: "Full Ad Stack from Scratch", color: "blue" },
    { title: "Above Avg", desc: "Category CVR Achieved", color: "orange" },
    { title: "Wider", desc: "Audience Reach Unlocked", color: "red" },
  ],
};

export const revenueCaseStudy = {
  category: "FITNESS RECOVERY — OCEANFOAM™",
  title: {
    highlight: "$100K",
    normal: "in 6 Months",
  },
  badge: "STRUCTURAL TURNAROUND",

  coreProblems: [
    "Frequent stockouts damaging organic ranking",
    "Patent flags & listing suppressions freezing revenue",
    "Unsustainable TACoS from rank-recovery campaigns",
    "Merged SKUs corrupting catalog architecture",
  ],

  strategy: [
    {
      phase: "PHASE 1 — STABILIZE",
      desc: "Resolved compliance flags, rebuilt variation architecture, established SEO baseline & inventory planning",
    },
    {
      phase: "PHASE 2 — SCALE",
      desc: "Brand tailored promotions, lifecycle monetization, competitor & keyword gap analysis, Q1 demand capture",
    },
  ],
};

export const performanceCaseStudy = {
  category: "POWER SOLUTIONS — IRON BOX ELECTRIC",
  title: {
    highlight: "37%",
    normal: "Revenue in 30 Days",
  },
  badge: "RECORD MONTH",

  coreProblems: [
    "Unstable ad performance eating margin",
    "Compliance disruptions & Buy Box losses",
    "Catalog structure limiting scale",
    "No unified A+ Content or Brand Story",
  ],

  actions: [
    "Restructured PPC with match-type segmentation & dayparting",
    "Deployed SEO master keyword + backend indexing strategy",
    "Competitor conquesting campaigns launched",
    "B2B-focused promotions with tiered discounts",
  ],
};

export const caseStudyData = {
  category: "PET & EQUESTRIAN — MULTI-CATEGORY BRAND",
  headline: "28% YoY + 83% More Units Sold",
  daysManaged: "780+ DAYS MANAGED",
  coreProblems: [
    "Fragmented catalog with redundant \"used\" listings",
    "Broken variation logic across size & color SKUs",
    "Search suppression & category misclassification",
    "Seasonal inventory gaps eroding margins",
    "High ad spend without structured targeting"
  ],
  strategicReset: [
    "Catalog & compliance cleanup — removed redundant listings",
    "Phase 1 backend keyword overhaul + infographic stacks",
    "PPC reorganized to eliminate waste & protect margins",
    "Brand Stories unified across all product lines"
  ]
};

export const caseStudyOutdoor = {
  category: "OUTDOOR / CANOPY — CLAM OUTDOORS",
  headline: "243% Revenue + 95% Buy Box Control",
  badgeText: "MARKET DOMINATION",
  coreProblems: [
    "Revenue leakage from inconsistent 3P partnerships",
    "Pricing instability causing Buy Box losses",
    "Stockouts on top pop-up canopy SKUs",
    "Weak content positioning & unclear differentiation"
  ],
  strategicIntervention: [
    "Back-fill fulfillment partner — eliminated stockouts",
    "Stabilized pricing to lock in Buy Box ownership",
    "Rebuilt full Amazon storefront & pop-up listing control",
    "Expanded into additional major marketplaces"
  ]
};

export const caseStudyLandscaping = {
  category: "LANDSCAPING — 1,300 SKU BRAND",
  headline: "110% Revenue Growth in 90 Days",
  badgeText: "TACOS CONTROLLED",
  coreProblems: [
    "85% of revenue from just 8 of 100+ categories",
    "35-40% YoY keyword search volume decline",
    "350+ campaigns with inefficient ASIN grouping",
    "FBM-heavy listings struggling to rank competitively"
  ],
  execution: [
    "Identified top 10 scalable ASINs by Sales, TACoS & CVR",
    "Precision keyword expansion via SQP & Brand Analytics",
    "Rebuilt 350+ campaigns with controlled segmentation",
    "Sponsored Brand Video on high-intent long-tail terms"
  ]
};

export const caseStudyApparel = {
  category: "OUTDOOR APPAREL — NICHE PREMIUM BRAND",
  headline: "ACoS Reduced 65% in Just 15 Days",
  badgeText: "15× ROAS BOOST",
  coreProblems: [
    "Small niche limiting discoverability",
    "Semi-relevant keywords diluting targeting precision",
    "45% price premium vs. market average",
    "Inefficient match-type usage reducing ad efficiency"
  ],
  precisionExecution: [
    {
      step: "STEP 1",
      text: "Advanced keyword expansion via SQP & competitor click-share targeting in a low-volume niche"
    },
    {
      step: "STEP 2",
      text: "Match-type funnel: Phrase → Exact migration → selective Broad expansion for reach"
    },
    {
      step: "STEP 3",
      text: "Spend concentrated only on high-intent terms capable of supporting the premium price point"
    }
  ]
};

export const caseStudyKoala = {
  category: "MULTI-PARENT ASIN BRAND — KOALA",
  headline: "$4.7M YoY + $275K in 8 Weeks",
  badgeText: "LARGEST SCALE",
  coreProblems: [
    "Market share eroding to smaller competitors",
    "TACoS rising with flat revenue — strategic misalignment",
    "Organic keyword rankings declining across catalog",
    "New product launches failing to gain traction",
    "No structured product-level profitability targets"
  ],
  growthBlueprint: [
    "Product-level custom strategies for 10+ parent ASINs",
    "Conversion-focused content — benefits over features",
    "Clear TACoS targets per SKU; rebuilt PPC architecture",
    "Placement domination: Top of Search, RoS & Product Pages"
  ]
};

export const caseStudyCtaContent = {
  overline: "MY AMAZON PARTNERS",
  heading: "Want to be our next",
  headingAccent: "success story?",
  description: "Contact us to get started with a free strategy call and discover how we can help you grow.",
  primaryBtn: "Contact Us to Get Started →",
  secondaryBtn: "View Our Services"
};