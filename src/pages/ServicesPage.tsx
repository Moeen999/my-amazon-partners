import { Search, BarChart3, ShieldCheck, FileWarning, ListRestart, Palette, Wrench, Stamp, Globe, Package, Monitor, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TrustLogos from "@/components/TrustLogos";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: Monitor,
    title: "Full Service Management",
    desc: "As a full service amazon agency, we manage all the pillars of Amazon – SEO, PPC, catalog, design, and others – to have them work in sync with each other for a better chance at getting success.",
    features: ["Click through rate", "Platform management", "Brand and content optimization", "Search engine optimization", "Paid advertising (PPC)", "Troubleshooting", "Reporting and monitoring"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Our Amazon SEO experts identify the best keywords to use and optimize listings for improved organic ranking to make it easier for shoppers to find your products.",
    features: ["4-phase SEO plan", "Keyword & Competitor Research", "Targeted Keyword Selection", "Ongoing Rank Tracking", "Optimized listings for SEO"],
  },
  {
    icon: ShieldCheck,
    title: "Amazon Account Audit",
    desc: "Get a thorough analysis of your seller central account to identify areas of improvement and avoid costly mistakes.",
    features: ["Advertising (PPC) segmentation, structure, and bidding", "SEO indexing and rankings", "Product listings – merchandising and design", "Brand registry", "Account Health", "Growth Areas"],
  },
  {
    icon: FileWarning,
    title: "Account Suspensions",
    desc: "Has your seller listing or account been suspended or deactivated? We can help get things back up and running with our expert Amazon specialists.",
    features: ["Metrics (order defect) suspensions", "Copyright, trademark, patent suspensions", "Validation Issue Suspensions", "Multiple account suspensions"],
  },
  {
    icon: ListRestart,
    title: "Listing Reinstatement",
    desc: "Has Amazon deactivated your top-selling ASIN? Need help reinstating the yanked listing? We can assist quickly and efficiently.",
    features: ["Copyright claims takedown", "Trademark infringement yank", "Medical claims takedown", "Listing condition complaints", "Restricted item type claims"],
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Engage and inform shoppers with captivating imagery. Showcase your products with professional design to help boost conversion rates.",
    features: ["Brand guidelines", "Brand story", "Brand storefront", "Enhanced brand content A+", "Full listing optimization", "Listing images design", "Main image CTR hack"],
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    desc: "Everything from UPC issues, page updates, catalog problems, brand changes — we help get things right and identify areas of improvement.",
    features: ["Brand name change", "UPC to GS1 changes", "Gated categories", "Catalog problems", "Hazmat review errors", "Account and listing reinstatement"],
  },
  {
    icon: Stamp,
    title: "Trademark Registration",
    desc: "We file your trademark for your brand and sign you up for Amazon Brand Registry — protecting your products from infringement.",
    features: ["Free trademark assessment", "Trademark search", "Trademark filing", "Dedicated trademark attorney", "Assistance in Amazon Brand Registry"],
  },
  {
    icon: Globe,
    title: "SEO for Websites",
    desc: "Effective website search engine optimization (SEO) is the key to getting your products seen online beyond Amazon.",
    features: ["On-page SEO optimization", "Content strategy", "Technical SEO audit", "Link building"],
  },
  {
    icon: Package,
    title: "FBA Returns",
    desc: "Amazon owes 99% of sellers money for lost/damaged units, refunds and mishandled returns. We make the process of getting your money back quick and easy.",
    features: ["Lost and damaged inventory", "Lost inbound shipment", "Destroyed units"],
  },
  {
    icon: BarChart3,
    title: "Vendor Central Full Service",
    desc: "Get expert help managing Vendor Central and sell your products directly to Amazon with confidence.",
    features: ["PPC", "SEO", "A+ Content", "Brand Store", "Listing optimization", "Logistics", "Reporting", "Troubleshooting"],
  },
];

const ServicesPage = () => (
  <>
    {/* Hero */}
    <section className="bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground mb-2">Amazon Services</p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
            The support you need to succeed on Amazon
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            With over 400 brands currently managed, we know what it takes to be successful on Amazon. From SEO to PPC, design, and troubleshooting, our Amazon experts can provide the service you need to grow.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Contact Us to Get Started</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Start easy with our{" "}
            <Link to="/contact" className="text-foreground font-semibold underline underline-offset-2">
              FREE listing checkup
            </Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Service cards */}
    <section className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center mt-4 text-sm font-semibold text-accent hover:text-amber-hover transition-colors">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <TrustLogos />

    <CTASection />
  </>
);

export default ServicesPage;
