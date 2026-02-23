import BeforeAfterSection from "@/components/Testimonials/BeforeAfterSection";
import CaseStudyCard from "@/components/Testimonials/CaseStudyCard";
import ClientTestimonial from "@/components/Testimonials/ClientTestimonial";
import ClientVoicesSection from "@/components/Testimonials/ClientVoicesSection";
import FinalCTA from "@/components/Testimonials/FinalCTA";
import ReviewCard from "@/components/Testimonials/ReviewCard";
import TestimonialGrid from "@/components/Testimonials/TestimonialGrid";
import TestimonialHero from "@/components/Testimonials/TestimonialHero";
import TestimonialStatsBar from "@/components/Testimonials/TestimonialStatsBar";
import TrustedBrands from "@/components/TrustedBrands";
import { caseStudiesData, reviewCardsData } from "@/constants/content";

const Testimonials = () => {
  return (
    <div>
      <TestimonialHero />
      <TestimonialStatsBar />
      <TrustedBrands />
      <ClientTestimonial />

      {/* Review Cards Grid */}
      <div className="bg-[#FCFAF7] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewCardsData.map((card) => (
            <ReviewCard key={card.id} data={card} />
          ))}
        </div>
      </div>

      <BeforeAfterSection />

      {/* Case Study Data */}
      <div className="bg-[#FCFAF7] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Final Testimonials Grid  */}
      <TestimonialGrid />

      {/* CLient Voices Section */}
      <ClientVoicesSection />

      {/* Final CTA section */}
      <FinalCTA />
    </div>
  );
};

export default Testimonials;

