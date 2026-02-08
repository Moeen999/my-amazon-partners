import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import TrustLogos from "@/components/TrustLogos";
import CTASection from "@/components/CTASection";

const caseStudies = [
  {
    brand: "Stamp Hub",
    category: "Home & Office",
    metric: "293% higher monthly revenue",
    desc: "A huge jump in sales coming from a revamp of various creative assets and improved PPC ads.",
    details: ["Listing optimization & A+ Content", "PPC restructuring", "Brand Store redesign"],
  },
  {
    brand: "Chirp",
    category: "Health & Wellness",
    metric: "519% growth to date",
    desc: "We were able to produce more success for a well-known brand, in a loaded market.",
    details: ["SEO keyword optimization", "Competitive positioning", "Advertising expansion"],
  },
  {
    brand: "Premium Kitchen Co.",
    category: "Home & Kitchen",
    metric: "400% revenue increase",
    desc: "Launched to $100K/month in 90 days through strategic PPC, review generation, and SEO optimization.",
    details: ["Product launch strategy", "Review generation campaigns", "Ranking acceleration"],
  },
  {
    brand: "Wellness Brand",
    category: "Health Supplements",
    metric: "180% sales recovery",
    desc: "Reversed a declining account by overhauling listing strategy and implementing brand defense tactics.",
    details: ["Listing overhaul", "Campaign restructuring", "Brand defense tactics"],
  },
];

const testimonials = [
  {
    quote: "We do what we do best, they take care of Amazon.",
    name: "Mark Pettyjohn",
    role: "Chief Seed Enthusiast, Chinook Seedery",
  },
  {
    quote: "I thought it was time for a little thank you. I'm just feeling extra grateful, and I just sent the survey over, just tens all across the board.",
    name: "Chad Littlefield",
    role: "Co-founder, We and Me",
  },
  {
    quote: "We started to make 80% growth in four months… over 200 percent growth compared to the previous period.",
    name: "Cynthia Li",
    role: "Founder, Whole Parts",
  },
];

const ResultsPage = () => (
  <>
    {/* Hero */}
    <section className="bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
            Transformative Amazon Growth
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We work hand in hand with brands to create tailor-made strategies that help drive growth and hit new heights on Amazon.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="#brand" className="inline-flex items-center text-sm font-semibold text-accent hover:text-amber-hover">
              <span className="mr-2">●</span> Brand case studies
            </Link>
            <Link to="#growth" className="inline-flex items-center text-sm font-semibold text-accent hover:text-amber-hover">
              <span className="mr-2">●</span> Performance success stories
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Recognition */}
    <section className="bg-section-alt py-10 border-y border-border">
      <div className="container-main px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-foreground">Client growth = company growth</h3>
          <p className="text-sm text-muted-foreground mt-1">
            We are honored to be recognized as one of the fastest growing companies in the USA.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-foreground">Get insights from our clients</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Get an inside look at what our clients have to say about their experience working with us.
          </p>
        </div>
      </div>
    </section>

    <TrustLogos />

    {/* Stats */}
    <section className="bg-dark">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-center text-sm text-primary-foreground/60 mb-2">It's all about results</p>
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
      </div>
    </section>

    {/* Case Studies */}
    <section id="brand" className="bg-background section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Brand Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.brand} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cs.category}</span>
              <h3 className="text-xl font-heading font-bold text-foreground mt-1">{cs.brand}</h3>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-lg font-heading font-bold text-accent">{cs.metric}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{cs.desc}</p>
              <ul className="mt-4 space-y-2">
                {cs.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section id="testimonials" className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-muted-foreground mb-1">Client Testimonials</p>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Hear it from people we've helped</h2>
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
      </div>
    </section>

    <CTASection
      title="Want to be our next success story?"
      subtitle="Contact us to get started with a free strategy call and discover how we can help you grow."
    />
  </>
);

export default ResultsPage;
