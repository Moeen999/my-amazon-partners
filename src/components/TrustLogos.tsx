import { Link } from "react-router-dom";

const brandLogos = [
  "Nestlé", "Honeywell", "Death Wish Coffee", "Chirp", "Alen", 
  "Chinook Seedery", "Rare Beauty", "MacuHealth", "Heavenly Hunks", "Revel Nail"
];

const TrustLogos = () => (
  <section className="bg-background py-10 border-b border-border">
    <div className="container-main px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-muted-foreground mb-6">
        <Link to="/results" className="hover:underline">
          Trusted by major brands and Amazon FBA sellers:
        </Link>
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {brandLogos.map((name) => (
          <span key={name} className="text-lg md:text-xl font-heading font-bold text-muted-foreground/40 select-none">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;
