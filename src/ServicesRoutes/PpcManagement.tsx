import AdServiceCard from "@/components/AdServiceCard";
import HeavyLiftingSection from "@/components/HeavyLiftingSection";
import SplitTestimonialSection from "@/components/SplitTestimonialSection";
import TrustedBrands from "@/components/TrustedBrands";
import { adManagementFeatures } from "@/constants/content";

const PpcManagement = () => {
  return (
    <div className="w-full py-8 md:py-12">
      {/* hero page */}
      <HeavyLiftingSection />

      <div className="text-start md:text-center border-t border-zinc-400 px-8 md:px-12 py-10 flex flex-col gap-2.5 ">
        <h2 className="text-3xl">Go beyond clicks and get results</h2>
        <span className="text-sm md:max-w-[53%] self-center font-thin text-black/80 ">
          Top Amazon sellers know the secret: smart PPC. Our Amazon experts
          target high-value shoppers with campaigns built for conversions, not
          just clicks. With data-backed strategies, every ad dollar you invest
          works harder to maximize visibility and boost your sales.
        </span>
      </div>

      {/* service management */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {adManagementFeatures.map((service, index) => (
          <AdServiceCard 
            key={index}
            title={service.label}
            description={service.description}
            imgSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>

    <section className="w-full px-12 py-12 md:px-16">
      <TrustedBrands/>
    </section>

    {/* <section className="w-full px-0 py-12 md:px-16">
      <SplitTestimonialSection/>
    </section> */}
    </div>
  );
};

export default PpcManagement;
