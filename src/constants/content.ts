import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";


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

// ! Brand Story Data
export const brandStoryData = {
  heading: "Sell more with an Amazon Brand Story",

  subHeading: "",

  description:
    "Captivate more shoppers with a Brand Story — a proven way to build trust, increase conversions, and drive more sales on Amazon.",

  ctaText: "View consultation options",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Showcase your brand's identity in a captivating way",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Feature your best products and build trust with shoppers",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Designed by Amazon experts who know what works",
      href: ""
    },
  ],

  rightImageSrc: "/brandStoryImages/hero.png",
};

export const bsFeatureCardData = [
  {
    id: 1,
    title: "Rank higher in search results",
    description: "Boost rankings with keyword-rich content, increase engagement, and improve conversion — factors favored by  Amazon’s algorithm."
  },
  {
    id: 2,
    title: "Increase conversion rate",
    description: "Turn browsers into buyers by using informative content, building trust by showcasing product benefits to keep shoppers engaged."
  },
  {
    id: 3,
    title: "Showcase more products",
    description: "The scrollable carousel of Brand Stories allow sellers to highlight multiple items, cross-sell, and drive traffic across their catalog."
  },
  {
    id: 4,
    title: "Tell a story that sells",
    description: "Blend visuals, text, and your brand’s unique messaging to create a memorable shopping experience for shoppers."
  }
];

export const bsStoryTellingData = {
  heading: "Engage and convert with storytelling",

  subHeading: "",

  description:
    "Done right, Brand Stories are a proven way to boost engagement and conversion on Amazon, while subtly strengthening your search rankings with the right keywords. A weak or missing Brand Story is a missed sale, and having one craft well can be the thing that pushes customers to choose you over the competition.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Keyword-rich copywriting for better discoverability",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "professional design tailored to your brand",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Image editing for enhanced visuals",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Fast turnaround of under 5 business days",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "3 rounds of revisions to ensure perfection",
      href: ""
    },
    {
      id: 6,
      icon: FaCheck,
      text: "Seamless Seller Central publishing",
      href: ""
    },
    {
      id: 7,
      icon: FaCheck,
      text: "Alt text optimization for added search visibility",
      href: ""
    },
  ],

  rightImageSrc: "/brandStoryImages/storytelling.png",
}

export const bsFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What do you need to make an Amazon Brand Story?",
      description: "We'll need any existing graphics, logos, photos/images, text or documents, and other assets that could be helpful for us to make your Brand Story.",
      items: [],
    },
    {
      id: 2,
      question: "How can we handover files that you can use to make a Brand Story?",
      description: "We can make use of different platforms such as Google Drive, Dropbox, WeTransfer, or other similar services that make file transfer convenient for images, documents, videos, and other files.",
      items: [],
    },
    {
      id: 3,
      question: "Will I get the source files for all graphics made for the Brand Story?",
      description: "Yes. All source files can be provided to you upon completion of your Brand Story.",
      items: [],
    },
    {
      id: 4,
      question: "How many ASINs can the Brand Story be applied to?",
      description: "We will publish the Amazon Brand Story to a list of up to 20 ASINs. Should you need to apply it to more than 20 ASINs, we charge $100 per template load required. Each template can load up to 10,000 ASINs per batch.",
      items: [],
    },
    {
      id: 5,
      question: "Will having Brand Registry issues affect my ability to use a Brand Story?",
      description: "Yes. Brand Registry is required for sellers to use a Brand Story in Seller Central. Any existing issues that should be resolved related to Brand Registry in your Seller Central account fall outside the scope of our Brand Story service. Below are examples of issues that could prevent an account's ability to use a Brand Story:",
      items: ["incorrect or missing Brand Node ID", "any system or SKU restrictions, and", "other issues"],
    },
  ]
}


// ! Brand Store Data

export const brandStoreData = {
  heading: "Your Amazon brand store, done right",

  subHeading: "",

  description:
    "Go beyond templates. Our Amazon agency creates custom brand stores to showcase your products, boost sales, and build loyalty. ",

  ctaText: "View consultation options",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Guide shoppers to buy with a strategic design",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Turn your Amazon store into a sales machine",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Build customer confidence and conversion",
      href: ""
    },
  ],

  rightImageSrc: "/brandStoreImages/hero.png",
};

export const brandStoreFeatureCardData = [
  {
    id: 1,
    title: "Build a stronger brand presence",
    description: "A professional store reinforces your brand, builds trust and credibility, and differentiates you from the competition."
  },
  {
    id: 2,
    title: "Generate higher conversions",
    description: "Guide shoppers to buy with a clear, structured layout with smooth navigation, highlighting key products to boosts sales."
  },
  {
    id: 3,
    title: "Have better product visibility",
    description: "Feature your full catalog in your own space without competitor ads to keep customers focused on your brand."
  },
  {
    id: 4,
    title: "Improve customer experience",
    description: "With high-quality images, videos, and a seamless design, you engage buyers, flaunt your brand, and encourage repeat purchases."
  },
  {
    id: 5,
    title: "Insightful metrics",
    description: "Brand stores come with built-in analytics to help you track and optimize performance so you can optimize it and sell more products."
  },
]

export const brandShowCaseData = {
  heading: "Showcase your brand on Amazon",

  subHeading: "With over six years of helping Amazon business grow, we understand what makes a Brand Store work for sellers.",

  description:
    "A professional store has your products in full display, strengthens your brand, and improves the shopping experience. We design custom stores that boost visibility, drive conversions, and keep customers focused on your catalog. We can also design additional category pages to better organize your products and improve navigation for customers.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Customized page templates",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Professional store design",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Image editing for enhanced visuals",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Vanity URL creation (amazon.com/brandname)",
      href: ""
    },
  ],

  rightImageSrc: "/brandStoreImages/brandshowcase.png",
}

export const brandShowcaseFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "Why is the Amazon Brand Store homepage so important?",
      description: "Your homepage is often the first stop for customers exploring your brand. It should be designed for easy shopping, showcasing trending and best-selling products to drive conversions.",
      items: [],
    },
    {
      id: 2,
      question: "How do I find an Amazon brand store?",
      description: 'On the product detail page, click the hyperlinked "Visit the (brand name) store"',
      items: [],
    },
    {
      id: 3,
      question: "Are Amazon brand store and Amazon storefront the same?",
      description: "No, they are not the same. An Amazon Brand Store is fully customizable to reflect a seller’s brand, while a storefront is not. Learn more about the key differences in this article.",
      items: [],
    },
    {
      id: 4,
      question: "How do I check my Amazon Brand Store metrics?",
      description: "Go to your Seller Central Dashboard → Stores → Manage Stores → Select your store → Click See Insights (if available). This will show key performance metrics like visitors, sales, and unit orders.",
      items: [],
    },
    {
      id: 5,
      question: "How does a well-designed Brand Store increase sales?",
      description: "A strategic layout ensures high-demand products are front and center, makes it easy for shoppers to add to cart, and encourages cross-selling of related items.",
      items: [],
    },
    {
      id: 6,
      question: "What are the key elements of a high-performing Amazon Brand Store?",
      description: "Effective Brand Stores include the following characteristics:",
      items: [
        "A clear and compelling banner featuring your brand name and product offerings.",
        "A well-crafted meta description to improve discoverability and encourage clicks.",
        "Multiple subpages for different product categories to mimic a real website experience.",
        "Engaging videos, such as unboxings, to increase conversions.",
        "Optimized social posts that reinforce brand messaging and appear in your store.",
        "Follower engagement tools that allow you to market directly to potential customers."
      ],
    },
    {
      id: 7,
      question: "How does a strong Brand Store impact my SEO and discoverability?",
      description: "Your Brand Store’s meta description is indexed by Google, meaning it can help your store rank for branded and non-branded keywords. By optimizing your meta description with high-intent keywords, your store can appear in top search results, bringing more organic traffic to your listings.",
      items: [],
    },
  ]
}


// ! Listing Images Data
export const listingImagesData = {
  heading: "High-impact Amazon listing images",

  subHeading: "",

  description:
    "Top sellers don’t rely on average images. They use professionally designed visuals that drive more conversions. Our expert designers specialize in crafting Amazon listing images that look great and helps generate more sales.",

  ctaText: "View Listing Images Options",

  checklist: [],

  rightImageSrc: "/listingImages/hero.png",
};

export const imageBenefits = [
  {
    id: 1,
    title: "Grab attention, generate sales",
    description:
      "Buyers judge by images. Dull photos lose sales. Compelling visuals convert clicks and help increase your sales.",
  },
  {
    id: 2,
    title: "Showcase products’ best features",
    description:
      "Images highlighting key features help shoppers understand your product and how it can benefit them.",
  },
  {
    id: 3,
    title: "Build trust with shoppers",
    description:
      "Detailed images build trust and show product value. Building buyer confidence contributes to more purchases.",
  },
  {
    id: 4,
    title: "Improve customer experience",
    description:
      "Clear and understandable images make shopping easier. Use proper visuals and text to accurately inform shoppers and avoid confusion.",
  },
  {
    id: 5,
    title: "Communicate with style",
    description:
      "Dull doesn’t drive clicks. Images that communicate your product’s value and appeal turn viewers into buyers.",
  },
  {
    id: 6,
    title: "Expert photo editing and design",
    description:
      "Our skilled graphic designers can help elevate your Amazon listing images design for maximum impact.",
  },
];


export const listingImagesFaqData1 = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What do you require to get started?",
      description: "We'll need existing product images that are available, and details/information about your product that can be useful to design images. If possible, explain how your product is different from other sellers. Reference images or listings that you like. We recommend taking product images by a professional photographer. Supplier-provided photos can be used, too. If none are available, you can also take photos using your camera phone.",
      items: [],
    },
    {
      id: 2,
      question: "Do you also do photo manipulation?",
      description: "Yes. Our expert graphic designers can edit existing photos to create the images that you need. From seamless photo manipulation to realistic lifestyle edits, we enhance every detail to create better images for your listings. Whether you need models showcasing your product or a polished final touch, we bring your vision to life.",
      items: [],
    },
    {
      id: 3,
      question: "What if I need something made that's not included in any of the packages?",
      description: "Let us know what you need in detail, and we'll provide quality service to help you out. Feel free to contact us for any questions or clarification needed.",
      items: [],
    },
    {
      id: 4,
      question: "Is it possible to request a quantity of images different from what are in the packages?",
      description: "If you need more than seven images, let us know and we'll get back to with the appropriate fee for the quantity you need.",
      items: [],
    },
  ]
}

export const threeDsecData = {
  heading: "Bring product packaging to life with versatile 3D renders",

  subHeading: "",

  description:
    "3D-rendered images give you the realism of photography with the flexibility of digital design. With a 3D model, you can generate high-quality visuals from any angle, with ideal lighting and a clean, professional backdrop—every time. Showcase your packaging in the best possible light to attract more shoppers.",

  ctaText: "Get 3D images",

  checklist: [],

  rightImageSrc: "/listingImages/threeD.png",
};

export const threeDRenderBenefits = [
  {
    id: 1,
    title: "Complete control",
    description:
      "Unlike photography where lighting and angles can be tricky, 3D renders let you showcase your packaging flawlessly in any way you need, highlighting every feature.",
  },
  {
    id: 2,
    title: "Cost-effective",
    description:
      "While initial setup require an investment, 3D renders can save you money on professional photography in the long run, especially for variations of the same packaging.",
  },
  {
    id: 3,
    title: "Versatility",
    description:
      "Need a close-up of a specific detail? Want to show the packaging in different colors or settings? Easy! 3D renders allow for endless customization.",
  },
  {
    id: 4,
    title: "Increased clicks",
    description:
      "Eye-catching and informative, 3D renders grab attention and make shoppers want to learn more about your packaging and building trust with them.",
  },
];

// ! Enhanced Content Data 


export const enhancedContentData = {
  heading: "Stand out from your competition with A+ Content",

  subHeading: "",

  description:
    "With smart design and integrated SEO elements, A+ content helps your product shine, while also helping Amazon show it to more shoppers.",

  ctaText: "View A+ Content Options",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Improve conversion rates",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Showcase product features and benefits",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Helps improve SEO ranking",
      href: ""
    },
  ],

  rightImageSrc: "/enhancedBrandImages/hero.png",
};

export const imageListingBenefits = [
  {
    id: 1,
    title: "Grab attention, generate sales",
    description:
      "Buyers judge by images. Dull photos lose sales. Compelling visuals convert clicks and help increase your sales.",
  },
  {
    id: 2,
    title: "Showcase products’ best features",
    description:
      "Images highlighting key features help shoppers understand your product and how it can benefit them.",
  },
  {
    id: 3,
    title: "Build trust with shoppers",
    description:
      "Detailed images build trust and show product value. Building buyer confidence contributes to more purchases.",
  },
  {
    id: 4,
    title: "Improve customer experience",
    description:
      "Clear and understandable images make shopping easier. Use proper visuals and text to accurately inform shoppers and avoid confusion.",
  },
  {
    id: 5,
    title: "Communicate with style",
    description:
      "Dull doesn’t drive clicks. Images that communicate your product’s value and appeal turn viewers into buyers.",
  },
  {
    id: 6,
    title: "Expert photo editing and design",
    description:
      "Our skilled graphic designers can help elevate your Amazon listing images design for maximum impact.",
  },
];

export const enhancedCardsContentData = [
  {
    id: 1,
    heading: "Improve search rankings",
    description: "Boost listings’ visibility, rank higher on Amazon, and get found by more shoppers.",
    imgSrc: "/enhancedBrandImages/rankings.png"
  },
  {
    id: 2,
    heading: "Increase conversion rate",
    description: "Turn browsers into buyers. A+ Content helps seal the deal with better presentation.",
    imgSrc: "/enhancedBrandImages/conversionrate.png"
  },
  {
    id: 3,
    heading: "Share your brand story",
    description: "Build trust and customer loyalty by showcasing your brand’s journey creatively..",
    imgSrc: "/enhancedBrandImages/brandstory.png"
  },
  {
    id: 4,
    heading: "Showcase products",
    description: "Highlight features, demonstrate uses, and display products beautifully.",
    imgSrc: "/enhancedBrandImages/products.png"
  },
];


export const enhancedContentCopyWriteContent = {
  heading: "Copywriting for Amazon",

  subHeading: "",

  description:
    "Great copy turns browsers into buyers. Our copywriting service helps your Amazon listings stand out with clear, persuasive descriptions that highlight your product’s benefits and connect with customers on a personal level.We combine strong messaging with SEO-boosting keywords in your titles, bullets, and descriptions to help your products rank higher and get seen more often. That means more clicks, more conversions, and better sales. If your current listing feels flat, vague, or forgettable, we’ll fix that. From compelling product copy to effective backend keywords, we craft listings that convert and speak directly to your target audience. Whether you’re launching a new product or refreshing an old listing, our expert writers are ready to create listings that drive results.",

  ctaText: "",

  checklist: [],

  rightImageSrc: "/enhancedBrandImages/copywrite.png",
}

export const enhancedContentFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What files do you need from us to get started?",
      description: "Any graphics, logos, pictures, images, or copy that you would prefer to use and placed into your A+ Content.",
      items: [],
    },
    {
      id: 2,
      question: "How do we send over files to you that you can use?",
      description: "We can use common tools online such as Google Drive to Dropbox, WeTransfer and Sigma Files.",
      items: [],
    },
    {
      id: 3,
      question: "Can I get the source files for what you make for us?",
      description: "Yes. Upon request we are happy to provide the source files to you.",
      items: [],
    },
    {
      id: 4,
      question: "What if we're experiencing some brand registry issues?",
      description: "If you have any brand registry issues, the brand is not set with a proper brand node ID, or the A+ content won’t be attached to the SKU, or any other issues that prevent A+ content from publishing, this is out of scope for this service. You will need to avail of additional troubleshooting services to get the existing issues resolved. In any case, we can still deliver the A+ content to you on the account and you can decide how to move forward with it while you have existing brand registry issues to resolve.",
      items: [],
    },
  ]
}
// ! Main Image CTR hack

// ! Lsiting Optimizations
export const heroContent = {
  heading: "Amazon listing optimization",

  subHeading: "",

  description:
    " We apply this same expert approach to your product page, overhauling copy and graphics to turn more clicks into customers.",

  ctaText: "Optimize your listing",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Strategically selected backend search terms",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Data-driven SEO for titles, bullets, and descriptions",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Click-generating main and secondary images",
      href: ""
    },
  ],

  rightImageSrc: "/listingOptImages/hero.png",
}

export const listingOptCardsData = [
  {
    id: 1,
    title: "Effective SEO",
    description: "For us, SEO is second nature. Our 4-phase plan, proven on 3,000+ brands, drives visibility from initial keywords to SQR analysis.",
    image: "/listingOptImages/effectiveseo.png"
  },
  {
    id: 2,
    title: "Keyword research",
    description: "We find untapped keywords by analyzing competitors and integrate them in your listing to capture sales and rank higher.",
    image: "/listingOptImages/kwresearch.png"
  },
  {
    id: 3,
    title: "Professional images",
    description: "Our images stop the scroll to win the click, then use compelling infographics to explain benefits and secure the sale.",
    image: "/listingOptImages/profimages.png"
  },
  {
    id: 4,
    title: "Engaging A+ Content",
    description: "We design immersive A+ Content that visually dominates the page, keeping shoppers focused solely on your brand.",
    image: "/listingOptImages/engagingcontent.png"
  },
  {
    id: 5,
    title: "Crafted copywriting",
    description: "Our copy expertly weaves in keywords favorable for Amazon search results, and helps convert shoppers by being informative and clear.",
    image: "/listingOptImages/copywriting.png"
  },
  {
    id: 6,
    title: "Impactful brand story",
    description: "We tell your unique story to move beyond a transaction, building the customer trust that creates long-term loyalty.",
    image: "/listingOptImages/brandstory.png"
  },
];

export const listingOptimizationBenefits = [
  {
    id: 1,
    title: "Improve sessions & CTR",
    description:
      "Through intensive keyword research and effective copy, we drive more relevant traffic and increase your click-through rate on Amazon.",
  },
  {
    id: 2,
    title: "Boost conversion rates",
    description:
      "By highlighting your product’s features with effective copy and informational listing images, we guide more visitors to make a purchase.",
  },
  {
    id: 3,
    title: "Engage and educate buyers",
    description:
      "Custom-made graphics and clear, benefit-driven copy keep shoppers on your page longer and answer their questions before they ask.",
  },
  {
    id: 4,
    title: "Achieve higher sales",
    description:
      "Every aspect of our service, from copy to keywords, is aligned with applying best practices to achieve significant sales growth.",
  },
];

export const listingOptFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "How do I know if my listing actually needs optimization?",
      description: "If your product isn’t ranking, getting clicks, or converting consistently, there’s likely an issue with your listing that you aren't aware of. Start with our free ASIN review, where are Amazon specialists take a look in to your listing and identify exactly which parts of your listing need improvement.",
      items: [],
    },
    {
      id: 2,
      question: "Can you help if my listing has already been optimized before?",
      description: "Yes. Most of the listings we check, even those previously “optimized”, can still have major gaps in keyword indexing, copy strategy, and backend setup. We fix what others miss.",
      items: [],
    },
    {
      id: 3,
      question: "How quickly will I see results after optimization?",
      description: "Improvements in indexing and visibility can happen within days, but ranking and conversion gains typically build over 2–6 weeks. We provide recommendations to maintain momentum post-optimization.",
      items: [],
    },
    {
      id: 4,
      question: "Is this service for new products or for improving existing ones?",
      description: "It’s essential for both.For new products, our optimization provides a solid foundation to ensure you launch with the best possible visibility and conversion potential. For existing products, it’s a vital tool to diagnose performance issues, boost stagnant sales, improve ranking, and gain a competitive edge over other sellers.",
      items: [],
    },
  ]
}

// ! FUll Listing Opt
export const fullListingOptHeroContent = {
  heading: "Full listing optimization",

  subHeading: "",

  description:
    "Give your underperforming listings an overhaul and convert more shoppers. Let are team of Amazon specialists take it to the next level:",

  ctaText: "Optimize your listing",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Title, bullets, and product description optimization",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "A+ Content design with 500 words of crawlable text",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Professional brand story",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "6 fully optimized graphics images",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Improved backend search terms",
      href: ""
    },
    {
      id: 6,
      icon: FaCheck,
      text: "Competitor report",
      href: ""
    },
  ],

  rightImageSrc: "/listingOptImages/hero.png",
}

export const fullListAPlusAndSEOBenefits = [
  {
    id: 1,
    title: "Professional A+ content",
    description:
      "Boost conversions with bespoke A+ Content, featuring crawlable text, alt text, and compelling visuals that drive sales.",
  },
  {
    id: 2,
    title: "SEO optimization",
    description:
      "Improve rankings with our 4-phase Amazon SEO — optimized search terms, keyword updates, strike zone targeting, and query analysis.",
  },
  {
    id: 3,
    title: "Backend search terms",
    description:
      "We have a structured SEO approach for optimizing search terms to boost indexing, rankings, and product visibility.",
  },
  {
    id: 4,
    title: "Competitor research",
    description:
      "Stay ahead of the competition with detailed research on prices, rankings, sales, and reviews to optimize your listings for success.",
  },
  {
    id: 5,
    title: "Brand story module",
    description:
      "Add a compelling brand story to connect with customers, showcase your mission, and build trust for stronger brand loyalty.",
  },
  {
    id: 6,
    title: "Optimized listing images",
    description:
      "Enhance CTR, conversion rates, and rankings with optimized Amazon images—main, infographics, lifestyle, and 3D rendered visuals.",
  },
];

export const optimizingResultData = {
  heading: "Optimized listing images",

  subHeading: "",

  description:
    "Impress and inform shoppers with optimized listing images designed by our expert designers.",

  ctaText: "Optimize your listing",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Six listing images",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Improved main image",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Lifestyle images",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Infographics",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Professional graphic design",
      href: ""
    },
  ],

  rightImageSrc: "/fullListOptImages/listingres.png",
}

export const shopperInformingData = {
  heading: "Optimized listing images",

  subHeading: "",

  description:
    "Impress and inform shoppers with optimized listing images designed by our expert designers.",

  ctaText: "Optimize your listing",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Use an attractive background image that goes well with the overall look of the various modules.",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Use the text modules to tell the story behind your company or brand.",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Use the Brand ASIN and Store Showcase module where you can show four different products that will be linked to their listing page.",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Brand Stories scroll horizontally, so using more modules won’t eat up more space in the page.",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "They display differently when viewed from a computer and a mobile phone, so plan your design accordingly.",
      href: ""
    },
  ],

  rightImageSrc: "/fullListOptImages/brandstory.png",
}


// ! Main Image CTR Data

export const mainImageCtrData = {
  heading: "Upgrade your Amazon main image CTR",

  subHeading: "",

  description:
    "Is your Amazon main image attractive enough to generate clicks from the search page? Make a good first impression and have more shoppers discover your products on Amazon.",

  ctaText: "Get a Main Image Upgrade",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "fixed price per main image",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Photo editing and compositing",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Deliverables: final main image and all raw and edited files used",
      href: ""
    }
  ],

  rightImageSrc: "/ctrImages/hero.png",
}

export const ctrSectionContent = {
  mainHeading: "More image examples that 2x CTR on Amazon",
  subDescription: "Having an improved Amazon main image will help not just your CTR. With more shoppers viewing your listing, the more chances there are of people buying your product.",
  productName: "Manuka oil",
  improvementNote: "Added packaging and a live ingredient."
};


// ! TROUBLESHOOTING Content

export const tsHeroContent = {
  heading: "Troubleshooting Hours for Amazon",

  subHeading: "",

  description:
    "Whether it’s UPC mismatches, catalog glitches, or listing update failures, we help solve Amazon problems while identifying improvement opportunities to avoid potential issues. We can diagnose and fix issues slowing your Amazon sales.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "UPC issues",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Inventory issues",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Catalog problems",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Page updates",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Buy box loss",
      href: ""
    },
    {
      id: 6,
      icon: FaCheck,
      text: "And more",
      href: ""
    }
  ],

  rightImageSrc: "/troubleshootingImages/hero.png",
}

export const tsIssuesCardsData = [
  {
    id: 1,
    title: "Extensive experience",
    description: "We have a long track record of helping Amazon sellers, gaining deep knowledge of Amazon policies, best practices, and effective solutions to seller’s problems.",
    image: "/troubleshootingImages/experience.png"
  },
  {
    id: 2,
    title: "Dedicated specialists",
    description: "Our team of over 300 Amazon specialists work together to tackle your toughest problems effectively to help your business run uninterrupted and stress-free.",
    image: "/troubleshootingImages/specialists.png"
  },
  {
    id: 3,
    title: "Tailored solutions",
    description: "Get a tailored approach to solving specific Amazon problems you encounter. No guesswork here, just reliable strategies that work.",
    image: "/troubleshootingImages/solutions.png"
  },
];

export const tsFaqsData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What is the 5-Hour Amazon Catalog Troubleshooting Service?",
      description: "This service provides five hours of dedicated support to diagnose and resolve various Amazon seller account and catalog challenges, including suppressed listings, brand name changes, UPC issues, page updates, and other backend issues. Our team of over 300 specialists stays fully aligned with Amazon Seller Central policies, Amazon FBA best practices, and Amazon fulfillment center requirements to ensure accurate and timely resolutions.",
      items: [],
    },
    {
      id: 2,
      question: "What types of issues are included in the service?",
      description: "The 5-hour package covers troubleshooting for:",
      items: [
        "Brand name changes",
        "UPC issues",
        "Page updates",
        "Catalog problems",
        "Issues affecting your Amazon",
        "storefront, Amazon store, or Amazon seller account"
      ],
    },
    {
      id: 3,
      question: "What is not included in the service?",
      description: "This service does not cover calls, listing creation, or account reinstatement. However, we offer specialized services tailored to those needs if required.",
      items: [],
    },
    {
      id: 4,
      question: "How do you communicate updates?",
      description: "Our team conducts structured email check-ins every Monday, Wednesday, and Friday (EST) to keep you informed of progress, hours used, and next steps. Consistent communication is central to our service, keeping your Amazon Seller Central login, Amazon seller account, and catalog fully up-to-date.",
      items: [],
    },
    {
      id: 5,
      question: "What if my issue takes less than 5 hours?",
      description: "Any unused hours can be applied to additional tasks within the project scope. There is a two-week window after the initial request completion to submit extra tasks. If no further tasks are submitted, the project is officially closed. We maximize every hour to improve your Amazon storefront, Amazon FBA, and listings.",
      items: [],
    },
    {
      id: 6,
      question: "What if I need more than 5 troubleshooting hours?",
      description: "If additional time is needed, we offer an optional 6-hour package at a supplementary cost.",
      items: [],
    },
    {
      id: 7,
      question: "Can you guarantee that Amazon will approve the changes?",
      description: "While we follow Amazon Seller Central, Amazon FBA, Amazon logistics, and Amazon fulfillment center best practices to maximize approval, final decisions rest with Amazon. Some back-and-forth may occur, as reopened cases are often reviewed by different agents.Rest assured, our team leverages knowledge of Amazon US, Amazon online, and Amazon storefront processes to tackle challenges efficiently.",
      items: [],
    },
    {
      id: 8,
      question: "Will you interact with Amazon on my behalf?",
      description: "Yes, we handle case submissions, escalations, and communication with Seller Support so you can focus on your business. We take care of the technical side while you manage your Amazon store, Amazon FBA, and Amazon seller account.",
      items: [],
    },
    {
      id: 9,
      question: "Do you support brand-registered listings?",
      description: "Yes. We work with both brand-registered and unregistered ASINs. If Amazon requires verification, we’ll help gather and submit the proper documentation.Your brand integrity is our priority, protected across your Amazon storefront, Amazon seller account, and Amazon store.",
      items: [],
    },
    {
      id: 10,
      question: "How long will the project take to complete?",
      description: "Projects operate Monday through Friday. Completion times vary depending on the complexity of issues, but most finish within 4–5 weeks after onboarding. Timelines may differ based on your unique challenges.We proactively manage your project to ensure smooth results for your Amazon US listings, Amazon FBA, and Amazon seller account.",
      items: [],
    },
    {
      id: 11,
      question: "What challenges could arise during the troubleshooting process?",
      description: "Unexpected issues may occur, such as platform changes, technical problems, or delayed information. Our team has a proven track record of navigating these challenges. We turn obstacles into actionable solutions for your Amazon seller central login, Amazon store, and catalog.",
      items: [],
    },
    {
      id: 12,
      question: "What happens after my 5 troubleshooting hours are completed?",
      description: "Once your initial 5 hours are used, you have a two-week window to submit additional tasks. If no further requests are submitted, the project is closed. Additional 6-hour packages are available if needed. We ensure continuity and flexibility to resolve all Amazon FBA, Amazon storefront, and Amazon seller account issues.",
      items: [],
    },
    {
      id: 13,
      question: "Can I submit multiple issues at once during the troubleshooting hours?",
      description: "Yes, you can submit multiple catalog or listing issues within your 5-hour package. Our team prioritizes tasks by urgency and complexity. Every issue is handled efficiently, maximizing impact on your Amazon seller account.",
      items: [],
    },
  ]
}


// ! Listing ReInstatement

export const listingReinstHeroContent = {
  heading: "Amazon Listing Reinstatement",

  subHeading: "",

  description:
    "We help reinstate deactivated Amazon listings, taking them from “Page Not Found” to back in business to restore selling momentum. We handle various types of listing take-downs quickly and efficiently:",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Copyright claims takedowns",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Trademark infringement yanks",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Medical claims takedowns",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Listing condition complaint takedowns",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Restricted item/ingredient takedowns type claims",
      href: ""
    },
    {
      id: 6,
      icon: FaCheck,
      text: "Brand takedowns",
      href: ""
    },
    {
      id: 7,
      icon: FaCheck,
      text: "Item safety breakdowns",
      href: ""
    },
    {
      id: 8,
      icon: FaCheck,
      text: "And more, not limited to categories above",
      href: ""
    },
  ],

  rightImageSrc: "/listingReinstImages/hero.png",
}

export const reInstProcessCardData = [
  {
    id: 1,
    title: "Extensive experience",
    description: "We have a long track record of helping Amazon sellers, gaining deep knowledge of Amazon policies and the best practices for getting listings reinstated.",
    image: "/listingReinstImages/experience.png"
  },
  {
    id: 2,
    title: "Full Amazon compliance",
    description: "With experience across hundreds of accounts, we remove the uncertainty from Amazon compliance, making sure listings are , approved, and ready to sell.",
    image: "/listingReinstImages/compilance.png"
  },
  {
    id: 3,
    title: "Over 90% success rate",
    description: "Our team’s structured approach and deep expertise consistently lead to over 90% of listings being successfully reinstated.",
    image: "/listingReinstImages/success.png"
  },
];

export const reInstFaqsData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "What is listing reinstatement in Amazon?",
      description: 'Listing reinstatement is the process of reactivating a suppressed or "yanked" ASIN after Amazon removes it for policy violations. We identify the specific root cause and submit a compliant Plan of Action (POA) to restore your listing to active status.',
      items: [],
    },
    {
      id: 2,
      question: "Do I really need professional help when reinstating a product listing?",
      description: "While you can do the appeal yourself, professional help prevents lost revenue and weeks of trial and error. We navigate Amazon’s complex internal systems to get your listing back faster, avoiding the frustration of repeated rejections.",
      items: [],
    },
    {
      id: 3,
      question: "Is your service guaranteed to work?",
      description: "We do not offer a guarantee, due to not being able to control Amazon’s response. But we average a 90% success rate and have a very public reputation to uphold. We would not offer this service if we were not confident we could do it.",
      items: [],
    },
    {
      id: 4,
      question: "Are there kinds of listings that you're not able to reinstate?",
      description: "We are not able to reinstate the following kinds of products:",
      items: [
        "Children’s toys that contain water beads",
        "Crib bumpers",
        "Assault rifles and explosives"
      ],
    },
    {
      id: 5,
      question: "How long does the listing reinsatement process take?",
      description: "With our approach, most listings (70%) return within 72 hours, though the overall timeline depends on multiple factors and can differ from case to case.",
      items: [],
    },
  ]
}

// ! Account Suspension  Data

export const accountSusReinstData = {
  heading: "Account Reinstatement",

  subHeading: "",

  description:
    "We help restore suspended and deactivated Amazon accounts so your Amazon account gets back online and selling again.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Metrics (order defect) suspensions",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Copyright, trademark, patent or product authenticity suspensions",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Safety suspensions",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Validation issue suspensions",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "And others",
      href: ""
    },
  ],

  rightImageSrc: "",
}


export const reinstatementContent = {
  title: "Scope of Account Reinstatement",
  description: "We handle the full reinstatement process from start to finish, keeping you informed at every step. Every action is done to meet Amazon's policies and maximize your chances of success. Here's what's included:",
  features: [
    "Initial consultation and research",
    "Creating and submitting a plan of action to the correct Amazon team.",
    "Following up and managing cases",
    "Making any catalog changes to listings when applicable in order for listing to be in compliance with Amazon policies"
  ],
  guarantee: "We do not stop working until your account is active.*",
  statsTitle: "Success in numbers",
  statsSubtitle: "Trusted by sellers, proven by results.",
  stats: [
    { label: "Success rate", value: "94%" },
    { label: "Total orders", value: "68" },
    { label: "Successful Reinstatements", value: "64" }
  ]
};

export const accSuspensionsCardData = [
  {
    id: 1,
    title: "Extensive experience",
    description: "We have a long track record of helping Amazon sellers, gaining deep knowledge of Amazon policies, best practices, and effective solutions to seller’s problems.",
    image: "/accSuspensionImages/experience.png"
  },
  {
    id: 2,
    title: "Dedicated specialists",
    description: "Our team of over 300 Amazon specialists work together to tackle your toughest problems effectively to help your business run uninterrupted and stress-free.",
    image: "/accSuspensionImages/specialists.png"
  },
  {
    id: 3,
    title: "Tailored solutions",
    description: "Get a tailored approach to solving specific Amazon problems you encounter. No guesswork here, just reliable strategies that work.",
    image: "/accSuspensionImages/solutions.png"
  },
]

export const accSuspensionFaqData = {
  mainHeading: "Frequently asked questions",
  questions: [
    {
      id: 1,
      question: "How long does Amazon take to respond to suspension appeals?",
      description: 'A variable depending on each situation. If suspension is fresh on a active high producing account a response within 48 hours is common. But on non active or new accounts if frequently takes 7-14 days to get an initial response.',
      items: [],
    },
    {
      id: 2,
      question: "Is your account reinstatement service guaranteed to work?",
      description: "No. Each reinstatement process is unique, and many factors are involved in the nature of the account suspension and appeal process needed.Nonetheless, we are proud to have a 94% success rate with our account reinstatement service. ",
      items: [],
    },
    {
      id: 3,
      question: "What types of Amazon account suspensions can My Amazon Partners help reinstate?",
      description: "We fix suspensions for order mistakes like late shipping or bad feedback. We also resolve complex issues like fraud claims, linked accounts, and trademark violations.",
      items: [],
    },
    {
      id: 4,
      question: "What is included in the My Amazon Partners reinstatement process?",
      description: "We research your issue and write a Plan of Action to send to Amazon. We also manage the case logs and fix your listings to follow the rules.",
      items: [],
    },
    {
      id: 5,
      question: "What is the success rate for your reinstatement services?",
      description: "We have a 94% success rate for bringing accounts back online. Our team uses past data to help solve hard cases.",
      items: [],
    },
    {
      id: 6,
      question: "Is there a guarantee that my Amazon account will be reinstated?",
      description: "No, we cannot guarantee your account will come back. Amazon has the final say on all decisions",
      items: [],
    },
    {
      id: 7,
      question: "How long does the reinstatement process take?",
      description: "Active accounts often get an answer from Amazon within 48 hours. We will keep working on your case for up to 45 days.",
      items: [],
    },
    {
      id: 8,
      question: "What happens if Amazon rejects the initial Plan of Action (POA)?",
      description: "We will keep trying and send new plans to Amazon. We work on your case until the account is fixed or 45 days pass.",
      items: [],
    },
  ]
}


// ! Advertising Audit Data

export const advertisingAuditData = {
  heading: "Advertising Audit",

  subHeading: "400+ Advertising Accounts Managed",

  description:
    "Effective Amazon PPC campaigns start with understanding what’s not working. Our Advertising Audit helps uncover weak and faulty campaigns, then rebuild stronger, more profitable PPC ads.",

  ctaText: "Get Advertising Audit",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "In depth SKU analysis",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Ad spend breakdown",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Missed opportunities",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Ad type check (running all types and targets?)",
      href: ""
    },
  ],

  rightImageSrc: "/advertisingAuditImages/hero.png",
}

export const advertisingAuditCardData = [
  {
    id: 1,
    title: "Full SKU Analysis",
    description: "See exactly how much ad spend goes to each SKU. Our audit shows how each product performs and whether it delivers a strong ROI, giving you the clarity to plan smarter and optimize campaigns.",
    image: "/advertisingAuditImages/skuanalysis.png"
  },
  {
    id: 2,
    title: "PPC Ad Spend Breakdown",
    description: "Keyword targets need adjustment to prevent PPC ads from showing on irrelevant searches. We’ll shift to highly relevant terms that support ranking and tighten ACOS for more efficient spend.",
    image: "/advertisingAuditImages/adspendbreakdown.png"
  },
  {
    id: 3,
    title: "Cut Weak Keywords",
    description: "Keywords that don’t generate impressions, sales, or clicks should be paused to effectively cut down on ad spending. We’ll optimize click-through rates and target CTR of over 1%.",
    image: "/advertisingAuditImages/cutweakkw.png"
  },
]

export const advertisingAuditFaqData = {
  mainHeading: "Frequently asked questions",
  subHeading: "Feel free to contact us for other questions or concerns.",
  questions: [
    {
      id: 1,
      question: "Why is an Amazon PPC account audit necessary?",
      description: 'An audit is the specific diagnostic tool we use to identify wasted spend on underperforming targets and uncover gaps in your current campaign coverage. It provides a data-driven roadmap to fix inefficiencies, such as high CPCs with low returns, ensuring your budget actually drives growth.',
      items: [],
    },
    {
      id: 2,
      question: "How do I know if my budget is being spent efficiently?",
      description: "We analyze your budget allocation to ensure the majority of your spend funds top-performing targets rather than being drained by broad, automated testing. We also review your balance of manual versus auto campaigns to ensure you have the granular control needed to optimize bids and RoAS.",
      items: [],
    },
    {
      id: 3,
      question: "Can an audit help fix inconsistent ad performance?",
      description: 'Yes, we identify significant variations in Cost Per Click (CPC) and Click-Through Rate (CTR) to flag "bleeding" targets that drain your budget. By cutting these outliers, we redirect funds toward keywords that have a conversion rate higher than your account average.',
      items: [],
    },
    {
      id: 4,
      question: "How does product coverage and listing quality affect my ads?",
      description: "We verify that all your products have adequate campaign coverage and ensure your conversion rate is higher than the category median. If your listings are underperforming, we recommend optimizing your content first so you don't pay for traffic that fails to convert.",
      items: [],
    },
    {
      id: 5,
      question: "Will an audit help improve my Brand metrics and Satisfaction numbers?",
      description: "We benchmark your Branded search volume and Detail Page Views against the category to see if you are capturing enough market share. We also analyze your Sales and Satisfaction (S and S) metrics to build a plan that improves your search ranking and long-term customer retention.",
      items: [],
    },
  ]
}


// ! Amazon Brand Name Change Data

export const amazonBrandNameChangeHeroData = {
  heading: "Amazon Brand Name Change",

  subHeading: "",

  description:
    "Changing your Amazon brand name can be complex, and often rejected if done wrong. We can handle the process ensuring full compliance to avoid errors and lost sales.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Protect your listing information from other sellers",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Gain access to exclusive Sponsored Brand advertising",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Access brand building tools: A+ content, brand stores, virtual bundles, and more",
      href: ""
    },
  ],

  rightImageSrc: "/bnChangeImages/hero.png",
}

export const amazonBrandNameChangeCardsData = [
  {
    id: 1,
    title: "95% success rate",
    description: "We secure Amazon brand name changes with a 95% success rate in our seven years as a Full Service Amazon agency.",
    image: "/bnChangeImages/successrate.png"
  },
  {
    id: 2,
    title: "Full Amazon compliance",
    description: "Every submission strictly follows Amazon policies to help reduce risk of rejections and ensuring a smooth approval process for your brand name updates.",
    image: "/bnChangeImages/compilance.png"
  },
  {
    id: 3,
    title: "Over 400 clients served",
    description: "We’ve helped over 400 brands with a full range of services, from catalog management to PPC, providing expert guidance and measurable results.",
    image: "/bnChangeImages/servedpeople.png"
  },
]

export const amazonBrandNameChangeFaqsData = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "What is a Brand Name Change?",
      description: 'An Amazon brand name change is the process of changing the brand node on your product from one to another.',
      items: [],
    },
    {
      id: 2,
      question: "Let's assume we file a new trademark for a new brand name what happens during the period of changing over to the new brand name and brand registry?",
      description: "There is no impact to your listing. The Brand store needs to be built so your brand name can get linked to the brand store.",
      items: [],
    },
    {
      id: 3,
      question: "Is there an impact on sales?",
      description: 'In usual conditions there are zero impact to sales during the brand name change process.',
      items: [],
    },
    {
      id: 4,
      question: "Do my ads stop running during the brand name change process?",
      description: "There is zero impact to ads. Ads are done on the SKU level. It has nothing to do with brand. However, Brand ads “could” be slightly affected and may need to be set up again. This work is out of scope but is likely not needed. There will be no issues with Sponsored Products ads.",
      items: [],
    },
    {
      id: 5,
      question: "How long does the process take?",
      description: "It depends. On average it takes 3-30 days, but can take much longer. Every case varies",
      items: [],
    },
    {
      id: 6,
      question: "Will there be any issues with inventory and the old branding being in amazon's warehouse?",
      description: "There is zero impact. This is a data point and not a logistics issue.",
      items: [],
    },
    {
      id: 7,
      question: "Are there any risks involved in changing a brand name?",
      description: "Minimal. If there is a parentage involved, the parentage must be rebuilt and reviews may not recombine. But no reviews are ever lost. FBA inventory is untouched. Luckily, we’ve never seen pushback from Amazon on a successful brand name change. Amazon’s public policies and copy-paste support tickets claim you can’t change a brand name but this is simply not true.",
      items: [],
    },
    {
      id: 8,
      question: "How long does it take to change a brand name on Amazon?",
      description: "More simple cases can be completed within 7 days. We pledge 10-30 days as a service level agreement.",
      items: [],
    },
    {
      id: 9,
      question: "Will the service work?",
      description: "We don’t offer a warranty, due to not being able to control Amazon’s response. But we average a 95% success rate and have a very public reputation to uphold. We would not offer this service if we didn’t have the confidence in our abilities.",
      items: [],
    },
    {
      id: 10,
      question: "What documents do you recommend to have handy for a brand name change request?",
      description: "To expedite the brand name change process, you will need to prepare or provide the following documents:",
      items: [
        "Real-world images of the product with the desired brand name and/or UPC barcode clearly visible.",
        "A link to the website where the product is showcased, featuring a visible UPC barcode (not on the product but on the website itself).",
        "Trademark number",
        "GS1 Certificate."
      ],
    },
  ]
}

// ! Barcode Name Change Data

export const barcodeChangeServiceHeroData = {
  heading: "UPC to GS1 Barcode Change Service",

  subHeading: "",

  description:
    "It’s estimated that 100,000’s of listings are suppressed every day, worldwide, on Amazon, at times with no warning or explanation. If your UPCs don’t match GS1’s database, your listing could be taken down. Amazon is cracking down hard. Using incompatible barcodes on Amazon can lead to:",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaExclamation,
      text: "Listing suppression",
      href: ""
    },
    {
      id: 2,
      icon: FaExclamation,
      text: "Denied Brand Registry or A+ Content submissions",
      href: ""
    },
    {
      id: 3,
      icon: FaExclamation,
      text: "Erasing rankings and reviews after catalog merges",
      href: ""
    },
    {
      id: 4,
      icon: FaExclamation,
      text: "Drastic revenue drops during peak sales periods",
      href: ""
    },
  ],

  rightImageSrc: "/barcodeChangeServiceImages/hero.png",
}

export const barcodeChangeIssuesCardsData = [
  {
    id: 1,
    title: "Amazon's bulldog at work",
    description:
      "A new AI system automatically flags and suppresses listings with non-compliant barcodes, creating chaos for sellers.",
    image: '/barcodeChangeServiceImages/bulldog.png'
  },
  {
    id: 2,
    title: "Daily listing suppressions",
    description:
      "Hundreds of thousands of listings are suppressed daily with no warning; just gone because of invalid UPCs.",
    image: '/barcodeChangeServiceImages/listingsuppressions.png'
  },
  {
    id: 3,
    title: "Brand Registry denied",
    description:
      "Amazon rejects A+ Content and Brand Story updates when your UPC doesn’t prove you are the rightful brand owner.",
    image: '/barcodeChangeServiceImages/brandregistry.png'
  },
  {
    id: 4,
    title: "Lost reviews and rankings",
    description:
      "Forced catalog merges can wipe out your product reviews and sales history, destroying years of your hard work instantly.",
    image: '/barcodeChangeServiceImages/lostRR.png'
  },
  {
    id: 5,
    title: "Sudden revenue drops",
    description:
      "A single suppressed ASIN means an instant halt in sales. This can cripple your cash flow and destroy your product rank.",
    image: '/barcodeChangeServiceImages/revenuedrops.png'
  },
  {
    id: 6,
    title: "Vulnerable old listings",
    description:
      "Even listings active for years are at risk. Amazon’s AI is auditing the entire catalog for GS1 compliance right now.",
    image: '/barcodeChangeServiceImages/oldlistings.png'
  },
];

export const barcodeChangeServiceInfoCards = [
  {
    id: 1,
    title: "Time Frame",
    description:
      "My Amazon Partners will work on your listing and update the existing UPC barcode to your registered GS1 barcode within 5–45 days.",
    note:
      "*Time frame might vary depending on specific factors such as brand registry on Amazon, etc.",
    list: [],
  },
  {
    id: 1,
    title: "Experience",
    description:
      "Besides a deep understanding of the Amazon Catalog System, we’ve also worked on thousands of listing updates including:",
    note: "",
    list: [
      "Brand Name Change",
      "Manufacturer Change",
      "Title, Size/Color Name Changes",
    ],
  },
  {
    id: 1,
    title: "Process",
    description:
      "We will merge and do a full update on your listings for the GS1 code to reflect instead of the old UPC. In 90% of the cases we handled, there is no downtime in the process and you can still sell while we’re making the changes. Inventory will not be affected.",
    note: "*Please check FAQs",
    list: [],
  },
];

export const barcodeChangeServiceFaqsData = {
  mainHeading: "Barcode Change FAQs",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "What documents or information should I provide ordering?",
      description: 'GS1 Certified UPC Barcodes',
      items: [],
    },
    {
      id: 2,
      question: "How long does it take to make the change on Amazon?",
      description: "Generally, it would take 3 to 4 weeks. It might change depending on several factors. It usually involves filing a lot of tickets.",
      items: [],
    },
    {
      id: 3,
      question: "If the original ASINs change, will the new ASIN have different inventory?",
      description: 'No. The inventory will not be affected by the ASIN change.',
      items: [],
    },
    {
      id: 4,
      question: "Is the service guaranteed to work?",
      description: "Our proven track record speaks for itself. We have been helping clients successfully change their UPCs. We’re confident in our ability to deliver results.",
      items: [],
    },
    {
      id: 5,
      question: "What impact does changing the UPC have?",
      description: " Minimal. There are no impacts to Reviews and BSR.Labels – We recommend changing your UPC barcodes on your boxes, but you can also simply print Amazon barcode labels (FNSKU oklabels). From our experience, the old UPCs still associate with the ASINs, and still scan into FBA. But as a proactive measure in case this changes, we suggest you update your labels. Inventory – All current inventory at FBA is unaffected.",
      items: [],
    },
    {
      id: 6,
      question: "What is the scope of work for this service?",
      description: "We will only change the UPC field for this service. Any issues such as a removed or yanked ASIN that needs reinstatement require an additional purchase from our website",
      items: [],
    },
    {
      id: 7,
      question: "Will my listings be down while the change is being made?",
      description: "We don’t need to take down an ASIN to change a UPC, but there are times when Amazon will create a new ASIN to remove the incorrect UPC from the original listing. We rarely encounter this nowadays. But should this happen, we would just re-list your ASIN with everything intact and a very small chance of 24 hours of downtime.",
      items: [],
    },
    {
      id: 8,
      question: "Will the old UPC section just update to the new GS1 in Seller Central?",
      description: "Yes.",
      items: [],
    },
    {
      id: 9,
      question: "After the conversion , do we just send in our products with the new GS1 code and it will scan through as well with no FNSKU?",
      description: "Yes. We recommend updating labels to new GS1 on next manufacturing run.",
      items: [],
    },
    {
      id: 10,
      question: "Will the mix of products that have the old UPC barcodes and the same products with the new GS1 barcodes cause any inventory issues? Will any inventory in FBA warehouses that still use the old UPC barcodes be discarded?",
      description: "No. The old UPC and new GS1 will exist on the same ASIN and both are usable. They can check both in and it won’t cause any stock or inventory issues. Just remember to use the new GS1 barcodes in succeeding manufacturing runs.",
      items: [],
    },
    {
      id: 11,
      question: "Will updating the UPC in the US market automatically update the UPC in the Canada market?",
      description: "Yes. UPC is universal, and changing it in the US market will cause it to update in other markets as well, but the update in other markets may take some time to take effect .",
      items: [],
    },
    {
      id: 12,
      question: "When going through the UPC to GS 1 change process, will it interrupt my listing placement?",
      description: "Since a UPC change is done by merger into another ASIN it does not disrupt the listing. Any inventory at FBA and all data will be transferred to the new ASIN and the Product Detail Page will remain live throughout the process.",
      items: [],
    },
    {
      id: 13,
      question: "After the change is made, will I be able to use my printed GS1 barcode and no longer apply the Amazon barcode sticker to each box? Or should I still apply the Amazon barcode sticker to each box?",
      description: "You can use the old bar code but we advise swapping it with the new one on the next manufacturer run. FNSKU also works, but it’s best to use use the new one. Most importantly, make sure only 1 barcode is scannable, do not use both printed GS1 barcode and Amazon barcode.",
      items: [],
    },
    {
      id: 14,
      question: "When I put stickers on the box in the meantime with the Amazon barcode, do I need to cover the GS1 barcode until the process is done?",
      description: "If Amazon has not accepted your GS1 barcode, yes, you do need to cover that with the amazon barcode. Amazon requires that there is only one scannable barcode on incoming units.",
      items: [],
    },
  ]
}

// ! Other Services Cards Data
export const otherServicesCardsData = [
  {
    id: 1,
    title: "Ad Cost Reduction",
    description:
      "We work to decrease your ACOS and overall ad spend. Once optimized, it paves the way for profitable and scalable growth.",
    image: "/otherServicesImages/costreduction.png",
  },
  {
    id: 2,
    title: "Advertising Audit",
    description:
      "Identify why your campaigns are underperforming and uncover opportunities to improve effectiveness and ROI.",
    image: "/otherServicesImages/adAudit.png",
  },
  {
    id: 3,
    title: "Amazon DSP",
    description:
      "We manage and optimize Amazon DSP ads across multiple formats to expand reach, refine targeting, and boost visibility.",
    image: "/otherServicesImages/amazonDsp.png",
  },
  {
    id: 4,
    title: "Parentage Setup",
    description:
      "Link variations like size or color under one parent listing to improve customer experience and conversions.",
    image: "/otherServicesImages/parentageSetup.png",
  },
  {
    id: 5,
    title: "PickFu A/B Testing",
    description:
      "Certified PickFu testing to gather reliable A/B insights and make data-driven decisions that increase sales.",
    image: "/otherServicesImages/abTesting.png",
  },
  {
    id: 6,
    title: "Trademark Registration",
    description:
      "Protect your brand and unlock A+ Content, Stores, and full Brand Registry benefits on Amazon.",
    image: "/otherServicesImages/tradeMarkReg.png",
  },
  {
    id: 7,
    title: "Remote Fulfillment",
    description:
      "Expand to Amazon Canada and Mexico without sending inventory outside the US.",
    image: "/otherServicesImages/remoteFullFilment.png",
  },
  {
    id: 8,
    title: "Vendor Central Full Service",
    description:
      "End-to-end Vendor Central support, from eligibility prep to resolving chargebacks for smoother operations.",
    image: "/otherServicesImages/vendorservice.png",
  },
  {
    id: 9,
    title: "Walmart Account Audit",
    description:
      "A comprehensive Walmart account review highlighting risks, opportunities, and competitive gaps.",
    image: "/otherServicesImages/walmartAccAudit.png",
  },
  {
    id: 10,
    title: "Walmart Advertising Audit",
    description:
      "Analyze Walmart PPC campaigns to improve ad efficiency, targeting accuracy, and overall performance.",
    image: "/otherServicesImages/walmartAdAudit.png",
  },
];

export const otherServicesFaqsData = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "How can I protect my brand on Amazon marketplaces outside of the United States?",
      description: 'My Amazon Partners offers trademark registration services specifically for Canada and international markets (via the Madrid Protocol). These services provide a serial number quickly, allowing you to remove hijackers on foreign marketplaces often within 24 hours of the order.',
      items: [],
    },
    {
      id: 2,
      question: "Is there a way to sell in Canada and Mexico without shipping inventory to those countries?",
      description: "Yes. The Remote Fulfillment service enables you to list and sell items on Amazon Canada and Amazon Mexico while fulfilling those orders directly from your existing inventory stored in US warehouses.",
      items: [],
    },
    {
      id: 3,
      question: "How can I test different product images or concepts before making them live?",
      description: 'The agency offers certified PickFu A/B testing. This service gathers real consumer feedback on your creative assets, helping you make data-backed decisions to improve conversion rates and sales.',
      items: [],
    },
    {
      id: 4,
      question: "What service helps organize listings that have multiple sizes or colors?",
      description: "The Parentage service (Connect Variations) merges related items into a single family listing. This consolidates reviews and allows customers to easily select between different options like size, color, or flavor on one page.",
      items: [],
    },
    {
      id: 5,
      question: "My advertising costs are too high; can My Amazon Partners help lower them?",
      description: "Yes. The Ad Cost Reduction service focuses on optimizing your campaigns to decrease your Advertising Cost of Sales (ACoS) and total ad spend, creating a more profitable foundation for future growth.",
      items: [],
    },
    {
      id: 6,
      question: "What is included in an Advertising Audit?",
      description: "An Advertising Audit provides a comprehensive review of your current PPC campaigns to diagnose why they may be underperforming. It identifies inefficiencies and offers actionable insights to increase campaign effectiveness.",
      items: [],
    },
    {
      id: 7,
      question: "How does the agency determine the overall health of an Amazon account?",
      description: "They perform a detailed 75-point account analysis. This covers everything from product listings to backend settings, providing a high-level summary of growth opportunities and specific recommendations for improvement.",
      items: [],
    },
  ]
}

// ! Amazon DSP Content
export const amazonDspHeroData = {
  heading: "Smarter ads, better sales with Amazon DSP",

  subHeading: "Buy and manage display, video, and audio ads both on and off Amazon. We optimize Amazon DSP campaigns to deliver smarter ads, increase listing visibility, and boost your sales using Amazon’s powerful audience data and insights.",

  description:
    "Let’s build an Amazon DSP strategy that works for you.",

  ctaText: "Schedule Your Discovery Call",

  checklist: [],

  rightImageSrc: "/amazonDspImages/hero.png",
}

export const amazonDspFeatureCardsData = [
  {
    id: 1,
    title: "Video ads",
    description:
      "Shown on Streaming TV (OTT/Over-The-Top) and third-party sites (OLV – online video) to boost brand awareness. OLV ads are clickable, while OTT ads are not.",
  },
  {
    id: 2,
    title: "Dynamic eCommerce ads (RECs)",
    description:
      "Auto-generated ads featuring up to 20 in-stock products, optimized using machine learning for better performance.",
  },
  {
    id: 3,
    title: "Audio ads",
    description:
      "Non-skippable ads played on Amazon Music, Alexa devices, and Fire TV to increase brand awareness.",
  },
  {
    id: 4,
    title: "Static ads (image and mobile banners)",
    description:
      "Clickable image ads with CTAs like “Shop Now,” displayed across websites and mobile apps.",
  },
];

export const amazonDspSalesContent = {
  id: 1,
  heading: "How Amazon DSP helps generate sales",
  intro:
    "Amazon DSP offers unique and powerful tools that are a step up from conventional PPC ads on Amazon, with results that generate more sales.",

  left: {
    id: 2,
    sections: [
      {
        id: 3,
        title: "Advanced targeting",
        description:
          "Amazon’s self-serve ad types—Sponsored Products, Sponsored Brands, and Sponsored Display—offer some level of targeting, but they lack the granular controls that drive true performance optimization. That’s where Amazon DSP (Demand-Side Platform) comes in. With advanced targeting capabilities, sellers can refine their advertising strategy and reach high-intent shoppers with greater precision.",
        bulletsIntro:
          "Our DSP specialists leverage a suite of advanced targeting features that go beyond basic keyword and product targeting, allowing sellers to:",
        bullets: [
          "Reach shoppers in specific cities, states, or even ZIP codes",
          "Adjust campaigns based on age, income, or other demographic factors",
          "Ensure ads run when targeted audiences are most active",
          "Retarget high-value shoppers based on their browsing and purchase behavior",
          "Serve different creatives for mobile and desktop users",
          "Compare multiple ad variations to optimize performance",
          "Limit impressions per unique visitor to avoid ad fatigue",
          "Ensure ads appear above or below the fold based on engagement goals",
          "Exclude or include specific websites for better ad placement",
          "Reach shoppers who are actively looking for similar products",
        ],
      },
      {
        id: 4,
        title: "Dynamic targeting",
        description:
          "With dynamic targeting, we ensure your ads adapt in real time to market changes, trends, and unexpected shifts. Whether it’s an influencer shoutout, a stockout issue, or changing algorithms, our Amazon agency fine-tunes your campaigns to keep them effective.",
        bulletsIntro: "How we optimize with dynamic targeting:",
        bullets: [
          "Shift ad placements and budgets based on performance trends",
          "Test and adjust ad formats, messaging, and call-to-action elements to maximize conversions",
          "Adapt targeting to ensure your ads reach the right shoppers at the right time",
        ],
      },
    ],
  },

  right: {
    id: 5,
    sections: [
      {
        id: 6,
        title: "Custom audiences",
        description:
          "At My Amazon Partners, we leverage Amazon DSP’s powerful audience-building capabilities to deliver highly customized advertising strategies. By tapping into Amazon’s vast first- and third-party data, we help sellers and brands reach their ideal customers at every stage of the funnel.",
        bulletsIntro: "Here’s how we build high-impact custom audiences:",
        bullets: [
          "Engage shoppers based on their buying habits and interests to reach those most likely to convert",
          "Attract high-intent shoppers who have recently searched for or purchased similar products",
          "Capture real-time demand by placing ads on relevant content or targeting competitor shoppers",
          "Re-engage visitors who viewed your product but didn’t purchase",
          "Encourage repeat purchases from past buyers",
        ],
      },
      {
        id: 7,
        title: "Maintaining repeat customers",
        description:
          "We help brands retain customers and drive repeat purchases through Amazon DSP’s powerful retargeting tools. Retaining existing customers is more cost-effective than acquiring new ones, and we optimize campaigns to encourage loyalty and repeat sales.",
        bullets: [
          "Re-engage past buyers by showing them relevant ads based on their purchase history",
          "Track site visitors and remind them of your products on and off Amazon",
          "Promote complementary products to past customers for higher lifetime value",
          "Time ads strategically to prompt reorders when customers are likely to buy again",
        ],
      },
    ],
  },
};

export const amazonAdReachData = {
  heading: "Maximize ad reach with Amazon DSP",

  subHeading: "Amazon Demand-Side Platform (DSP) is the ultimate tool for brands looking to scale beyond PPC. With DSP, you can target high-intent shoppers, retarget lost customers, and expand your brand’s visibility—both on and off Amazon.",

  description:
    "Amazon DSP works best for brands already seeing success with PPC. If you’re generating strong PPC sales, DSP can take your advertising to the next level—driving long-term growth and increasing brand dominance. Tap into Amazon’s massive shopper network Reach millions of active Amazon shoppers—buyers who are already searching for products like yours. Amazon DSP puts your brand in front of the right audience at the right time.",

  ctaText: "Schedule Your Discovery Call",

  checklist: [],

  rightImageSrc: "/amazonDspImages/adReach.png",
}

export const amazonDspBenefitsCardsData = [
  {
    id: 1,
    title: "Hyper-targeted advertising for maximum impact",
    description:
      "Leverage Amazon’s first-party data to precisely target the shoppers who matter most. Reach audiences based on demographics, shopping behavior, and interests to drive higher engagement and conversions.",
    image: "/amazonDspImages/maxImpact.png",
  },
  {
    id: 2,
    title: "Seamless cross-device reach",
    description:
      "Connect with customers wherever they are—desktop, mobile, or connected TVs—so your brand stays top-of-mind across every screen.",
    image: "/amazonDspImages/crossdevice.png",
  },
  {
    id: 3,
    title: "Engaging, high-impact ad formats",
    description:
      "Capture attention using display, video, and audio ads to build compelling campaigns that stand out and drive action.",
    image: "/amazonDspImages/formats.png",
  },
  {
    id: 4,
    title: "Data-driven insights and real-time optimization",
    description:
      "Access precise reporting and analytics to monitor campaign performance and continuously optimize for the best possible ROI.",
    image: "/amazonDspImages/optimization.png",
  },
  {
    id: 5,
    title: "A fully integrated Amazon advertising solution",
    description:
      "Integrate DSP campaigns with Sponsored Products and Sponsored Brands to create a cohesive strategy that maximizes reach and sales.",
    image: "/amazonDspImages/amazonadsol.png",
  },
  {
    id: 6,
    title: "Full control and brand safety",
    description:
      "Maintain brand integrity by controlling where your ads appear. Amazon DSP gives you placement and targeting control to ensure alignment with your brand values.",
    image: "/amazonDspImages/brandsafty.png",
  },
];

export const amazonPpcVsDspContent = {
  id: 1,
  heading: "Amazon PPC vs. Amazon DSP",
  intro:
    "Amazon PPC and DSP are both powerful advertising tools, but they serve different purposes. Understanding their differences will help you decide which one fits your business needs.",

  left: {
    id: 2,
    title: "What is Amazon DSP?",
    description:
      "Amazon DSP allows advertisers to target audiences on and off Amazon using behavioral data. While PPC is the main tool for all sellers, DSP is a strong next step if you already have a solid PPC foundation and want to expand your reach. If your goal is growth beyond keyword targeting, DSP can be a game-changer.",
    listIntro: "Amazon DSP is best used for:",
    list: [
      {
        id: 3,
        title: "Retargeting",
        text: "People who viewed your product but didn’t buy.",
      },
      {
        id: 4,
        title: "Loyalty campaigns",
        text: "Re-engaging past customers (great for consumables).",
      },
      {
        id: 5,
        title: "Competitor targeting",
        text: "Showing ads to users who visited competitor listings.",
      },
      {
        id: 6,
        title: "Top-of-funnel awareness",
        text: "Reaching new audiences beyond search results.",
      },
    ],
  },

  right: {
    id: 7,
    title: "What is Amazon PPC?",
    description:
      "Amazon PPC (Pay-Per-Click) is the foundation of Amazon advertising. PPC is essential before considering DSP. If your PPC campaigns are profitable, well-optimized, and converting at a strong rate, then you can consider adding DSP.",
    listIntro: "There are three major types of PPC ads:",
    list: [
      {
        id: 8,
        title: "Sponsored Products",
        text: "Appear in search results and product detail pages (best for conversions).",
      },
      {
        id: 9,
        title: "Sponsored Brands",
        text: "Banner ads and video ads that increase brand visibility.",
      },
      {
        id: 10,
        title: "Sponsored Display",
        text: "Retargeting ads shown on and off Amazon.",
      },
    ],
  },
};

export const amazonDspFaqsdata = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "Who can use Amazon DSP?",
      description: 'Amazon DSP is available to advertisers who meet certain eligibility criteria, such as having a registered business entity and complying with Amazon’s advertising policies. Both large and small advertisers can use Amazon DSP to reach their target audience and drive sales.',
      items: [],
    },
    {
      id: 2,
      question: "How do I target my ads on Amazon DSP?",
      description: "Advertisers can target their ads on Amazon DSP using Amazon’s rich customer data, which includes information on demographics, shopping behavior, and interests. Advertisers can create custom audience segments and use advanced targeting options to reach their ideal audience effectively.",
      items: [],
    },
    {
      id: 3,
      question: "Can I split my DSP budget across multiple hero products?",
      description: 'Yes, let us know how you’d like to allocate your budget between different products for optimized ad performance.',
      items: [],
    },
    {
      id: 4,
      question: "Do I need a Seller Central or Vendor Central account to use Amazon DSP?",
      description: "No, you don’t need a Seller or Vendor Central account to use Amazon DSP, but having one helps optimize your campaigns with first-party data.",
      items: [],
    },
    {
      id: 5,
      question: "What information do I need to provide to start Amazon DSP with My Amazon Partners?",
      description: "We need the following information to get started:",
      items: ["Seller Central Display Name & Business Name",
        "Merchant Token (if applicable)",
        "Selling Category",
        "Brand Name & Brand Store Link",
        "Hero Products & Competitor List",
        "Monthly DSP Budget",
        "Access to Creative Assets (videos, banners, etc.)"
      ],
    },
    {
      id: 6,
      question: "Will I receive real-time updates on my Amazon DSP campaigns?",
      description: "Yes, we offer the option to create a dedicated Slack channel for DSP updates and email correspondence for your team.",
      items: [],
    },
    {
      id: 7,
      question: "Can I target my competitors’ customers with Amazon DSP?",
      description: "Yes! We can run campaigns targeting shoppers who viewed or purchased from your competitors.",
      items: [],
    },
    {
      id: 8,
      question: "I have run Amazon DSP ads before. Can you optimize my existing campaigns?",
      description: "Yes. Provide us with past DSP performance reports, campaign structures, audience segments, and creatives, and we’ll improve your results.",
      items: [],
    },
    {
      id: 9,
      question: "What creative assets do I need for Amazon DSP?",
      description: "Videos, banners, and high-quality images help maximize engagement. If you have existing assets, share them, or we can help create new ones.",
      items: [],
    },
    {
      id: 10,
      question: "How do I get started with Amazon DSP through My Amazon Partners?",
      description: "Get started with Amazon DSP by contacting the My Amazon Partners",
      items: [],
    },
  ]
}

// ! TradeMark Reg Data
export const tradeMarkHeroData = {
  heading: "Global trademark registration",

  subHeading: "",

  description:
    "Protect your brand and grow sales with Amazon Brand Registry. A registered trademark unlocks A+ Content, Brand Stores, and tools to stop unauthorized sellers.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Get brand registry in seven countries",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Brand Registry and tool access",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Stronger listing protection vs highjackers",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Better visibility and sales on Amazon",
      href: ""
    },
  ],

  rightImageSrc: "/tradeMarkImages/hero.png",
}

export const trademarkBenefitsCardsData = [
  {
    id: 1,
    title: "Your claim of ownership",
    description:
      "Before you can defend your brand, you must legally own it. Registration is your official and undeniable proof of ownership.",
  },
  {
    id: 2,
    title: "Control over listings",
    description:
      "Trademark holders gain the ability to edit and protect product listings without constant interference.",
  },
  {
    id: 3,
    title: "Activate Amazon’s shield",
    description:
      "Your brand remains invisible to Amazon’s protection tools until it is registered. Trademark registration activates your defenses.",
  },
  {
    id: 4,
    title: "Act before a crisis",
    description:
      "Don’t wait for a hijacker to take over your listing. Secure your trademark early so you have the power to act immediately.",
  },
  {
    id: 5,
    title: "Build on solid ground",
    description:
      "Every successful brand is built on a secure foundation. A trademark is the first essential block for safe and sustainable growth.",
  },
  {
    id: 6,
    title: "Lock in your asset",
    description:
      "Your brand name’s value grows over time. Registration is the critical first step in protecting your most valuable asset.",
  },
];

export const tradeMarkhighjackerProtectionCards = [
  {
    id: 1,
    title: "Remove fake sellers fast",
    description:
      "A trademark lets you quickly report and get hijackers removed from your listings.",
    image: "/tradeMarkImages/fakesellers.png",
  },
  {
    id: 2,
    title: "Block counterfeit listings",
    description:
      "A trademark gives you the legal grounds to take down knockoff products.",
    image: "/tradeMarkImages/counterfeit.png",
  },
  {
    id: 3,
    title: "Gain Amazon’s backing",
    description:
      "Amazon prioritizes cases from sellers with registered trademarks in disputes.",
    image: "/tradeMarkImages/amazonbacking.png",
  },
  {
    id: 4,
    title: "Stop price undercutting",
    description:
      "Trademark protection helps prevent hijackers from selling cheaper knockoffs.",
    image: "/tradeMarkImages/undercutting.png",
  },
]

export const tradeMarkRegisteredBrandCardData = [
  {
    id: 1,
    title: "Complete the form",
    description:
      "Complete our quick questionnaire to begin the process. Submit an image of your name or logo mark, if applicable.",
    image: "/tradeMarkImages/one.png",
  },
  {
    id: 2,
    title: "We search and compile",
    description:
      "We’ll conduct a search to make sure your trademark isn’t too similar to existing trademarks or already in use. Then, we’ll compile your official application.",
    image: "/tradeMarkImages/two.png",
  },
  {
    id: 1,
    title: "Filing at trademark office",
    description:
      "Once your trademark application is correctly completed and signed, we’ll file it for you through the appropriate trademark office.",
    image: "/tradeMarkImages/three.png",
  },
]

export const trademarkRegFaqsData = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "What is a trademark?",
      description: 'Trademarks give you legal claim over your brand names, slogans, and logos. Trademarks are for protecting brand identity; they do not protect inventions or original works such as art or music. Trademarks give you nationwide protection for your brand. Other sellers will not be able to use your trademarked brand name or logo to sell products, unless it’s with your permission.',
      items: [],
    },
    {
      id: 2,
      question: "Should I purchase a word or logo design TM?",
      description: "We highly recommend word mark. It’s easier and cleaner and best for Amazon. Sometimes Amazon will interpret a design logo mark with slightly different punctuation or spacing. But a word mark gets exact match every time. We can file both a Word and a Logo mark but this requires a 2nd order.",
      items: [],
    },
    {
      id: 3,
      question: "How long does a trademark last?",
      description: 'Trademarks can last indefinitely as long as you continue to use the mark in commerce. A statement of use needs to be filed 5 years after the registration of your trademark.',
      items: [],
    },
    {
      id: 4,
      question: "Why do you conduct a trademark search?",
      description: "We run a direct-hit trademark search to make sure that your trademark is not already in use. This saves you the money and trouble of filing and being rejected for “likelihood of confusion”, meaning that your mark is too similar or even identical to an existing trademark. Please be aware that our trademark search is a direct-hit search, and not a comprehensive search.",
      items: [],
    },
    {
      id: 5,
      question: "How long does trademark registration take?",
      description: "It can take 6-9 months before your trademark is officially registered. You should receive your initial response from the USPTO within 3 months. You can speed up the process by making sure your application is accurate and responding promptly to any office actions sent to you by the USPTO. Amazon recently started allowing brands to get their brand registry faster with a Pending Trademark and you no longer have to wait until final approval.",
      items: [],
    },
    {
      id: 6,
      question: "My business is outside the USA (international). Is that okay?",
      description: "Yes. Any business filing a trademark in the USA from an international location must hire an attorney, which we provide. This is due to an update in 2019 from the USPTO. So this is a great net benefit of using My Amazon Partners!",
      items: [],
    },
    {
      id: 7,
      question: "Does this service use a lawyer?",
      description: "Yes. The lawyer files the trademark directly in your name or business name, domestic or international.",
      items: [],
    },
    {
      id: 8,
      question: "Do I need a trademark to list on Amazon?",
      description: "No. You can upload to Amazon immediately. You do not need a TM to sell on Amazon. You just need the TM to get the brand registry to get access to A+ content and the brand dashboard. It is wise for you to file the TM now so that over the next few months while your items go through the supply chain you’ll have the TM quicker.",
      items: [],
    },
    {
      id: 9,
      question: "Does my trademark need to have words?",
      description: "Yes. We recommend using a word mark for the purposes of Amazon. Design marks don’t need words, but it’s anybody’s guess how they get interpreted by Amazon on brand registry. And the reason you need is it because without a word mark the brand name has to match the TM or you don’t get brand registry recognition. By using a word mark you avoid having a brand name that doesn’t make sense or is truncated in the brand attribute of Seller Central.",
      items: [],
    },
    {
      id: 10,
      question: "What's included in the trademark registration service?",
      description: "You are purchasing a TM from us to do a search on the USPTO, file the mark, get you quick serial number, and then you can file brand registry and complete it in under 7 days. After the TM is on the principal registry, our work is done and managing your TM following the filing is your obligation. If the USPTO requests an action prior to the mark being accepted on the principal registry we will action it on your behalf.",
      items: [
        "A USPTO search to make sure the TM will be accepted and isn’t too similar. ",
        "A review of the wording/mark to make sure it passes UPTO requirements.",
        "The filing of the TM.",
        "Any non-complex responses required from the UPSTO to get the mark approved",
        "If you are not actively selling your product, we can create a page for you to clear USPTO requirements.",
      ],
    },

    {
      id: 11,
      question: "How fast do I get brand registry after placing an order?",
      description: 'Within about 7 days. You can go to brandregistry.amazon.com and use the pending TM serial number and file the mark. The fastest we’ve seen is 2 days. But 5-7 days is the average.',
      items: [],
    },
    {
      id: 12,
      question: "When should I file my trademark?",
      description: "We recommend filing for your Trademark as soon as you have a sample on hand with your brand name affixed to it. Just take a cell phone picture and file your mark with us.",
      items: [],
    },
    {
      id: 13,
      question: "What is a specimen?",
      description: 'A specimen is a real-world example of how you are using your trademark on goods or in the offer of services. A specimen is more than just a picture of your trademark or logo. For goods (products), acceptable specimens include labels, tags, packaging material, instruction manuals and containers that display the trademark. Please note that brochures, business cards, catalogs, and stationery are generally not acceptable specimens for goods. Take a cell phone picture of your product in it’s packaging to submit a specimen to My Amazon Partners.',
      items: [],
    },
    {
      id: 14,
      question: "Does it matter what category the mark is in?",
      description: "Yes. If you aren’t sure what category to pick, leave this blank on your application and we will pick a category that broadly meets your item so you can protect it as much as possible.",
      items: [],
    },
    {
      id: 15,
      question: "Is an EIN or business number required?",
      description: "No. EIN is not needed. Just legal name and address are required if filing a mark under a business. If filing under a person, just your name and address are required. No other personal identification required.",
      items: [],
    },
    {
      id: 16,
      question: "What paperwork do I receive post order?",
      description: "We send you the filing paperwork and a serial number in under 1 business day (24 hours). We also send you a full guide to register brand registry step by step on Amazon.",
      items: [],
    },
    {
      id: 17,
      question: "What if my item is not in use?",
      description: "Legally you need to have an item available for sale, and your brand name in use, to file on the principal registry with the USPTO. For Amazon Brand Registry requirements we’ve seen the ability to place a sticker on an item with a brand name affixed. It is ideal if you also have a website page with the item listed (on or off Amazon). ",
      items: [],
    },
    {
      id: 18,
      question: "I sell my product in 2 color variations, would you need photos of both colors?",
      description: "Just photos of 1 of the variation would be good enough.",
      items: [],
    },
    {
      id: 19,
      question: "Is there any difference if I register the trademark under my own name or my business name for example regarding liability?",
      description: "Liability is not a play here. You should go with company because IP owned by a company makes the company more valuable.",
      items: [],
    },
    {
      id: 20,
      question: "What is the 'approximate first date of use anywhere' and 'approximate first date of Use in commerce'?",
      description: "You can input the date on which the listing was created on Amazon for both approximate first date of use anywhere and approximate first date of use in commerce.",
      items: [],
    },
    {
      id: 21,
      question: "I'm looking to file a trademark - at what point in the process should I do this? Right before launch with all of my units ready, or while my manufacturer is making it for me?",
      description: "The moment you have a product with packaging that has the logo on it. You want to reserve the name to protect it. But you also need a cell phone picture of said item to file the TM easily.",
      items: [],
    },
  ]
}

// ! Vendor Central Data
export const vendorCentralHeroData = {
  heading: "Amazon Vendor Central Full Service",

  subHeading: "",

  description:
    "From preparing your Seller Central account for Vendor Central eligibility to fixing vendor-side issues like chargebacks and delivery claims, we’re here to give you expert management to keep your operations running smoothly.",

  ctaText: "Contact us to get started",

  checklist: [],

  rightImageSrc: "/vendorCntralImages/hero.png",
}

export const vendorCentralContent = {
  mainHeading: "What is Vendor Central?",
  description1: "Unlike Seller Central, Vendor Central is used by first-party sellers. This invite-only program allows you to directly sell your products to Amazon in bulk to be \"shipped and sold by Amazon\", which displays on the product listing.",
  description2: "This can be a great option to increase confidence in your brand, access more powerful advertising strategies, and deal with fewer merchandising issues, since Amazon is your primary buyer.",
  ctaText: "Talk to us about Vendor Central",
  services: [
    "A+ Content",
    "Full listing optimization",
    "Catalog management",
    "Chargebacks",
    "Open statements",
    "Cases",
    "Reports",
    "Advertising",
    "VC Brand Store creation",
    "Compliance document filing",
    "Coupons and promotion",
    "Setup and management",
    "Vine program setup",
    "AB testing",
    "Dispute management",
    "Product upload",
    "VC PPC management",
    "VC Transfer to SC",
    "Purchase order management assistance",
    "Direct fulfillment setup and management"
  ]
};

export const vendorCentralFeatures = [
  {
    id: 1,
    title: "Competitor Research",
    description: "Launching more products generates more sales. You bring us any category or item, and we can tell you how it stacks up against the competition.",
    image: "/vendorCntralImages/research.png",
  },
  {
    id: 2,
    image: "/vendorCntralImages/caselogs.png",
    title: "Managing Case Logs",
    description: "We can manage your Amazon cases and talk to Amazon’s seller support for you."
  },
  {
    id: 3,
    image: "/vendorCntralImages/inventory.png",
    title: "PO Tracking and Inventory",
    description: "We monitor incoming purchase orders, analyze demand trends, and help you stay stocked so you never miss Amazon’s buying cycles."
  },
  {
    id: 4,
    image: "/vendorCntralImages/conferencecall.png",
    title: "Regular Conference Calls",
    description: "You will have an open line of communication with your Amazon Account Specialist, whether you prefer to communicate through e-mail, phone calls, or video calls."
  },
  {
    id: 5,
    image: "/vendorCntralImages/salesreporting.png",
    title: "PPC and Sales Reporting",
    description: "Our weekly reports will give you the fastest snapshot of your Amazon performance, including your sales, conversion rates, and advertising performance."
  },
  {
    id: 6,
    image: "/vendorCntralImages/additionalitems.png",
    title: "Additional Items within VC",
    description: "We can assist with anything that will help your sales grow, including generating FBA reports, inventory reports and generating FBA shipments, and monitoring suppressed listings."
  }
];

export const vendorCentralPpcManagementContent = {
  title: "Expert Amazon PPC Management",
  mainDescription: "The key to driving traffic to your listings lies in Amazon PPC. We've helped hundreds of clients set up proper advertising campaigns that produce impressive results. Our PPC management involves a series of techniques combined with advanced macros to optimize current advertising efforts. We'll update your advertising faster, more frequently, and more holistically. In addition, we store bid adjustments for your viewing pleasure at any time. Everything we do prioritizes transparency.",
  sections: [
    {
      heading: "Top-Tier Expertise",
      points: [
        "Accredited & Certified: Benefit from our Sponsored Ads and DSP certifications.",
        "Ahead of the Curve: We deploy new ad types before they're publicly available."
      ]
    },
    {
      heading: "Effective Campaign Management",
      points: [
        "Custom Strategies: Tailored campaigns to target all potential customers.",
        "Advanced Optimization: Cutting-edge techniques and regular updates for peak performance.",
        "Full Transparency: Access bid adjustments and detailed performance insights anytime."
      ]
    }
  ],
  footerText: "Choose us for impactful, transparent Amazon PPC management.",
  btnText: "Talk to Us"
};

export const vendorCentralAmazonSEOContent = {
  title: "Amazon SEO",
  mainDescription: "With years of knowledge and experience behind us, SEO has become second nature to us. We've unearthed the ins and outs when it comes to selecting and implementing keywords for your product listings. Our best-in-class 4-phase SEO plan will help your products rank on the first page and sell in just a few clicks.",
  sections: [
    {
      heading: "Proven Expertise",
      points: [
        "Years of Experience: Our deep knowledge turns Amazon SEO into a science.",
        "4-Phase SEO Plan: A strategic approach to push your products to the first page."
      ]
    },
    {
      heading: "Comprehensive SEO Services",
      points: [
        "Keyword & Competitor Research: Identify the best keywords and understand your competition.",
        "Targeted Keyword Selection: Choose the most effective keywords for optimal results.",
        "Ongoing Rank Tracking: Monitor keyword performance to ensure continuous improvement."
      ]
    }
  ],
  footerText: "Elevate your product visibility and sales with our expert Amazon SEO.",
  btnText: "Talk to Us"
};

export const vendorCentralAmazonDesignContent = {
  title: "Amazon Design",
  mainDescription: "Stunning visuals to help increase click-through rates, drive conversions, and stand out from all the competition. Quality content has been proven to catch the attention of customers, always. With hundreds of copy projects under our belts, we know what it takes to create and publish gold standard content.",
  services: [
    {
      label: "Brand Storefront",
      description: "Showcase Products to Attract customers and highlight your product range."
    },
    {
      label: "Enhanced Brand Content (A+)",
      description: "Drive Conversions with Engaging A+ Content enhances product appeal."
    },
    {
      label: "Brand Story",
      description: "Build Connection. Share your brand's story to engage and convert customers."
    },
    {
      label: "Main Image Amazon CTR Hack",
      description: "Increase Clicks with Optimized main images for higher visibility."
    },
    {
      label: "Listing Images",
      description: "We create professional listing images that inform and engage shoppers."
    }
  ],
  footerNote: "Make your listings stand out. Contact us for top-tier Amazon design services.",
  btnText: "Talk to Us"
};
export const vendorCentralLogisticsContent = {
  title: "Logistics",
  services: [
    {
      heading: "Shipping Plan Generation",
      description: "We'll generate a shipping plan to keep your business on track and your customers satisfied."
    },
    {
      heading: "Restock Suggestions",
      description: "Keep your Inventory Performance Index (IPI) healthy, which is the metric used by Amazon that measures how efficiently sellers manage their inventory in FBA."
    }
  ],
  checkPoints: [
    "Manage restock limitations",
    "Keep your IPI healthy"
  ],
  btnText: "Talk to Us"
};

export const vendorCentralReportingContent = {
  title: "Reporting and Monitoring",
  subHeading: "Weekly reporting so you know how your traffic and conversion rates are growing market share.",
  monitoringTitle: "Monitoring",
  monitoringDescription: "We continuously keep an eye out for stranded inventory, hijacker alerts, and issues related to Account Health Management to avoid interruptions and make sure our strategies are effective and avoid setbacks.",
  btnText: "Talk to Us"
};

export const vendroCentralFaqsData = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "What is a trademark?",
      description: "We act as your dedicated account manager for Amazon’s 1P platform, handling all daily operations—from catalog troubleshooting to logistics—so you don't need an in-house team.",
      items: [],
    },
    {
      id: 2,
      question: "How do you handle Purchase Orders and logistics?",
      description: "We manage the entire order lifecycle, including confirming Purchase Orders, overseeing Direct Fulfillment, and ensuring accurate delivery documentation to prevent friction.",
      items: [],
    },
    {
      id: 3,
      question: "Do you assist with financial disputes?",
      description: 'Yes. We aggressively fight Chargebacks and Shortage Claims by investigating discrepancies and submitting "Proof of Delivery" to recover your revenue.',
      items: [],
    },
    {
      id: 4,
      question: "What marketing strategies do you offer?",
      description: "We drive growth through A+ Content creation, PPC advertising, Brand Store optimization, and managing the Amazon Vine program for reviews.",
      items: [],
    },
    {
      id: 5,
      question: "How do you manage catalog health?",
      description: "We take ownership of Item Management, fixing complex errors like variations 'twisters' and suppressed listings while handling compliance documentation to keep you live.",
      items: [],
    },
    {
      id: 6,
      question: "What reporting do I get?",
      description: "You receive daily account health checks, weekly sales and advertising reports, and full management of all Amazon Support case logs.",
      items: [],
    },
  ]
}

// ! Walmart Account Audit
export const walmartAccountAuditHeroData = {
  heading: "Walmart Account Audit",

  subHeading: "",

  description:
    "Have our Walmart experts conduct a full review your Walmart account to know the strengths and weaknesses of your account and how you stack against competitors.",

  ctaText: "",

  checklist: [
    {
      id: 1,
      icon: FaCheck,
      text: "Advertising: segmentation, structure, and bidding",
      href: ""
    },
    {
      id: 2,
      icon: FaCheck,
      text: "Search engine optimization (SEO): indexing and rankings",
      href: ""
    },
    {
      id: 3,
      icon: FaCheck,
      text: "Product listings: merchandising and design",
      href: ""
    },
    {
      id: 4,
      icon: FaCheck,
      text: "Account health",
      href: ""
    },
    {
      id: 5,
      icon: FaCheck,
      text: "Growth areas",
      href: ""
    },
    {
      id: 6,
      icon: FaCheck,
      text: "Logistics gaps and opportunities",
      href: ""
    },
    {
      id: 7,
      icon: FaCheck,
      text: "Customer service review health",
      href: ""
    },
  ],

  rightImageSrc: "/walmartAccAuditImages/hero.png",
}

export const walmartAccAuditAmazonAuditFeatureCardData = [
  {
    id: 1,
    image: "/walmartAccAuditImages/compilance.png",
    title: "Account health and compliance",
    description: "Review of performance metrics, spotting and addressing policy violations, ensuring compliance, and checking documentation and legal requirements."
  },
  {
    id: 2,
    image: "/walmartAccAuditImages/optimization.png",
    title: "Detailed listing optimization",
    description: "Evaluation of product titles, descriptions, bullet points, images, SEO effectiveness, and more."
  },
  {
    id: 3,
    image: "/walmartAccAuditImages/inventory.png",
    title: "Inventory management",
    description: "Assess inventory levels to avoid stockouts or overstocking and identify slow-moving or unsellable inventory."
  },
  {
    id: 4,
    image: "/walmartAccAuditImages/performance.png",
    title: "Advertising performance",
    description: "Review of PPC campaigns and other advertising efforts to optimize ad spend and assess ROI."
  },
  {
    id: 5,
    image: "/walmartAccAuditImages/experience.png",
    title: "Customer experience",
    description: "Analyze reviews and feedback. Address negative reviews or issues impacting customer satisfaction."
  },
  {
    id: 6,
    image: "/walmartAccAuditImages/analysis.png",
    title: "Analysis of profitability",
    description: "Review fees, costs, and pricing strategies to spot areas to reduce expenses or increase margins."
  }
];

export const walmartAccAuditComparisonContent = {
  success: {
    title: "Strategy That Strengthens Walmart Results",
    description: "Our experts go through your account to spot areas of improvement to help drive more sales for your listings.",
    points: [
      "Listings gain consistent visibility and keyword reach",
      "Ads are optimized for ROAS, not wasted spend",
      "Content is conversion-focused and mobile-friendly",
      "Account health stays compliant and scalable",
      "Performance is tracked with clear, actionable data"
    ]
  },
  failure: {
    title: "Growth Stalls Without a Walmart Strategy",
    description: "Sellers often face issues that limit growth and waste resources, making it hard to maximize sales and account potential.",
    points: [
      "Advertising: segmentation, structure, and bidding",
      "Ads spend increases with little to no return",
      "Weak content reduces conversion rates",
      "Account issues block scaling opportunities",
      "No clear visibility into what drives sales"
    ]
  }
};

export const walmartAccAuditFaqsData = {
  mainHeading: "Frequently asked questions",
  subHeading: "",
  questions: [
    {
      id: 1,
      question: "What is a Walmart account audit?",
      description: "A Walmart account audit is a thorough review of your seller account, listings, ads, and performance metrics to identify growth opportunities and fix issues limiting sales.",
      items: [],
    },
    {
      id: 2,
      question: "What does your Walmart account audit include?",
      description: "Our audit covers all critical aspects of your Walmart account, including the following:",
      items: [
        "Account Health Check – Review performance metrics and resolve policy warnings.",
        "Detailed Listing Optimization – Evaluate titles, descriptions, bullet points, images, and SEO effectiveness.",
        "Inventory Management – Prevent stockouts, overstocking, and identify slow-moving inventory.",
        "Advertising Performance – Assess PPC campaigns and ad ROI for better returns.",
        "Customer Experience – Analyze reviews, address negative feedback, and improve satisfaction.",
        "Profitability Analysis – Review fees, costs, and pricing strategies to increase margins.",
        "Full Compliance Review – Ensure all Walmart policies and documentation are up-to-date."
      ],
    },
    {
      id: 3,
      question: "How many accounts can you audit at once?",
      description: 'We typically audit one account per service order to provide a detailed and customized analysis. If you have multiple accounts, please email us at sales@myamazonpartners.com for a custom quote.',
      items: [],
    },

  ]
}