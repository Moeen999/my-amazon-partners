import { trustedBrands } from "@/constants/content";

const TrustedBrands = () => {
  return (
    <section className="container py-12">
      <p className="text-center text-sm font-medium mb-12">
        Trusted by major brands and Amazon FBA sellers:
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {trustedBrands.map((brand) => (
          <img
            key={brand.id}
            src={brand.imgSrc}
            alt="Trusted brand"
            className="h-16 object-contain "
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
