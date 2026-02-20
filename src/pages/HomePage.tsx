import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Search, Palette, Settings, CheckCircle } from "lucide-react";
import TrustLogos from "@/components/TrustLogos";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Amazon PPC",
    desc: "The key to driving traffic to your listings lies in Amazon PPC. Higher revenue, lower ACOS, and transparent ad management.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Our 4-phase Amazon SEO plan is best-in-class and can show dramatic results in search rankings in 90 days.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Stand out from the competition and showcase your brand with top-tier A+ content, Brand Stores, and graphics that convert.",
  },
  {
    icon: Settings,
    title: "Platform Management",
    desc: "We optimize your Amazon brand continually to maintain the gains we achieve, and build more moving forward.",
  },
];

const caseStudies = [
  { brand: "Stamp Hub", metric: "293% higher monthly revenue", desc: "A huge jump in sales coming from a revamp of various creative assets and improved PPC ads." },
  { brand: "Chirp", metric: "519% growth to date", desc: "We were able to produce more success for a well-known brand, in a loaded market." },
];

const testimonials = [
  {
    quote: "I thought it was time for a little thank you. I'm just feeling extra grateful, and I just sent the survey over, just tens all across the board…",
    name: "Chad Littlefield",
    role: "Co-founder, We and Me",
  },
  {
    quote: "Honestly the only team that I speak to about Amazon and the only people I trust.",
    name: "Matt",
    role: "Amazon Seller",
  },
  {
    quote: "We started to make 80% growth in four months… over 200 percent growth compared to the previous period.",
    name: "Cynthia Li",
    role: "Founder and co-owner, Whole Parts",
  },
];

const steps = [
  { num: "1", title: "Onboarding", desc: "Setting expectations and goals", items: ["Onboarding Survey", "Kick Off", "Competitor Analysis", "Account Audit"] },
  { num: "2", title: "Optimization", desc: "Never-ending cycle of work", items: ["Catalog", "PPC", "SEO", "Design"] },
  { num: "3", title: "Results", desc: "Watch growth", items: ["Traffic", "Conversion", "Sales"] },
];

const HomePage = () => (
  <>
    {/* Hero - white bg, text left, image right */}
    <section className="bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground leading-tight">
              The Amazon agency that gets your products seen and sold
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Have great products, but sales are sluggish? We understand the struggle—and our Amazon agency is here to make it easier.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up-delay">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">
                  Get a free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="cta-outline" size="lg">
                <Link to="/contact">
                  Schedule an Icebreaker <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground animate-fade-up-delay-2">
              Not sure where to start? Get a{" "}
              <Link to="/contact" className="text-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors">
                FREE listing audit
              </Link>.
            </p>
          </div>
          <div className="animate-fade-up-delay">
            <img
              src={heroBg}
              alt="Amazon growth analytics showing upward trending sales"
              className="rounded-xl w-full shadow-card"
            />
          </div>
        </div>
      </div>
    </section>

    <TrustLogos />

    {/* How we help - service pillars */}
    <section className="bg-background section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            How our Amazon agency experts help grow your brand
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We have a holistic approach to drive traffic to your listing and boost your conversions. By building your PPC campaigns, developing your SEO, enhancing your images, and curating your catalogs, our agency strengthens your brand on Amazon.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent hover:text-amber-hover transition-colors">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="inline-flex items-center mt-4 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.brand} className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-heading font-bold text-foreground text-lg">{cs.brand}</h3>
              <p className="text-2xl font-heading font-bold text-accent mt-1">{cs.metric}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cs.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground text-sm">
          Our Amazon agency has helped bring growth to hundreds of businesses, and we want you to be our next success story.
        </p>
        <Link to="/results" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-accent hover:text-amber-hover transition-colors">
          More case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* Stats - dark bg */}
    <section className="bg-dark">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-sm text-primary-foreground/60 mb-2 font-medium">It's all about results</p>
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-10">
          Our success is directly tied to the growth of our amazing clients.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">450+</div>
            <div className="mt-2 text-sm text-primary-foreground/70">Brands currently managed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">$1.2B+</div>
            <div className="mt-2 text-sm text-primary-foreground/70">Revenue generated on Amazon annually</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">460+</div>
            <div className="mt-2 text-sm text-primary-foreground/70">Employees</div>
          </div>
        </div>

        {/* Review badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-lg font-heading font-bold text-primary-foreground">Trustpilot</div>
            <div className="flex items-center gap-1 mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg">★</span>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/60 mt-1">4.5 Stars • 443 Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-heading font-bold text-primary-foreground">Google</div>
            <div className="flex items-center gap-1 mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg">★</span>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/60 mt-1">4.6 Stars • 133 Reviews</div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-background section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-muted-foreground mb-1">Client Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
          Hear it from people we've helped
        </h2>
        <p className="text-muted-foreground mb-10">
          See how our Amazon experts helped clients reach their full potential and solved their Amazon problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center mb-4">
                <span className="text-accent text-lg font-bold">"</span>
              </div>
              <p className="text-foreground leading-relaxed text-sm italic">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/results" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:text-amber-hover transition-colors">
          More testimonials from clients <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* Heavy lifting section */}
    <section className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            We do the heavy lifting so you can take it light and easy
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With over 500 employees, our Amazon agency can lift a lot off of your business's shoulders. Amazon is not set and forget – there will always be competition, and Amazon's policies constantly change. Our Amazon specialists can take care of all the hard work so that you can enjoy all the results.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Start simple – Get a{" "}
            <Link to="/contact" className="text-foreground font-semibold underline underline-offset-2">
              FREE listing audit
            </Link>{" "}
            where we check your listing on Amazon and give suggestions for improvements.
          </p>
        </div>
      </div>
    </section>

    {/* 3-part process */}
    <section className="bg-background section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Our 3-part process</h2>
        <p className="text-muted-foreground mb-10">
          Our Amazon agency works hard to get a full understanding of your business. After identifying your needs and goals, we begin our work on Amazon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <span className="text-accent-foreground font-heading font-bold">{step.num}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{step.desc}</p>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection />

    <CTASection
      title="Increase your reach and revenue the right way"
      subtitle="With our full service Amazon agency — we understand what it takes to drive growth on Amazon."
    />
  </>
);

export default HomePage;
