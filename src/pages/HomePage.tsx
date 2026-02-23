import FAQSection from "@/components/Home/FAQSection";
import HeroSection from "@/components/Home/HeroSection";
import HomeCaseStudies from "@/components/Home/HomeCaseStudies";
import ServicesSection from "@/components/Home/HomeServicesSection";
import HomeTestimonials from "@/components/Home/HomeTestimonials";
import HowItWorks from "@/components/Home/HowItWorks";
import ReadyToGrow from "@/components/Home/ReadyToGrow";
import TestimonialStatsBar from "@/components/Testimonials/TestimonialStatsBar";
import TrustedBrands from "@/components/TrustedBrands";

const HomePage = () => (
  <>
    <HeroSection />
    <TrustedBrands />
    <ServicesSection />
    <TestimonialStatsBar />
    <HowItWorks />
    <HomeCaseStudies />
    <HomeTestimonials />
    <FAQSection />
    <ReadyToGrow />
  </>
);

export default HomePage;
