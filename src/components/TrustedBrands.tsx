import { trustedBrands } from "@/constants/content";

const TrustedBrands = () => {
  const duplicatedBrands = [
    ...trustedBrands,
    ...trustedBrands,
    ...trustedBrands,
    ...trustedBrands,
  ];

  return (
    <section className="container py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        <div className="whitespace-nowrap bg-white z-10 pr-8">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">
            Trusted By:
          </p>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex gap-16 animate-infinite-scroll group-hover:[animation-play-state:paused] py-4">
            {duplicatedBrands.map((brand, index) => (
              <img
                key={`${brand.id}-${index}`}
                src={brand.imgSrc}
                alt="Brand Logo"
                className="h-24 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
