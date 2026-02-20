import { Search, BarChart3, ShieldCheck, FileWarning, ListRestart, Palette, Wrench, Stamp, Globe, Package, Monitor, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TrustLogos from "@/components/TrustLogos";
import CTASection from "@/components/CTASection";
import { services } from "@/constants/content";
import ArrowIcon from "@/components/ArrowIcon";
import { FaCheck } from "react-icons/fa6";
import TrustedBrands from "@/components/TrustedBrands";
import ResultsSection from "@/components/AllServicesResult";



const ServicesPage = () => (
  <>
    {/* Hero */}
    <section className="bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground mb-2">Amazon Services</p>
          <h1 className="text-2xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
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
        <div>
        </div>

        <div className="md:w-1/2">
          <img src="/agency.png" alt=""  className="mt-4"/>
        </div>
      </div>
    </section>

    {/* Service cards */}
    <section className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service,index) => {
            const {title,desc,features,imgSrc} = service;
            return(
              (
            <div key={title} className="bg-card rounded-xl p-6 border border-border flex flex-col gap-1">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <img src={imgSrc} alt=""/>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">{title}</h3>
              <hr className="h-[1.5px] bg-zinc-400" />
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <ul className="mt-4 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <FaCheck className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5"/>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex gap-2 items-center mt-4 text-sm font-semibold hover:underline transition-colors">
                <ArrowIcon/>Learn more
              </Link>
            </div>
          )
            )
          })}
        </div>
      </div>
    </section>

    <TrustedBrands />

    <ResultsSection/>

    <CTASection />
  </>
);

export default ServicesPage;
