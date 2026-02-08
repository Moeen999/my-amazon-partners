import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const CTASection = ({
  title = "Ready to Scale Your Amazon Business?",
  subtitle = "Contact us to get started with a free listing audit and discover how we can help you grow.",
  dark = false,
}: CTASectionProps) => (
  <section className={dark ? "bg-dark" : "bg-section-alt"}>
    <div className="container-main section-padding text-center">
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <p className={`max-w-2xl mx-auto mb-8 text-lg ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="cta" size="lg">
          <Link to="/contact">
            Contact Us to Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="cta-outline" size="lg">
          <Link to="/services">View Our Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
