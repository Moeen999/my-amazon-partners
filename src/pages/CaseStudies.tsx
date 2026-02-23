import CaseStudyBreakdown from "@/components/case-studies/CaseStudyBreakdown";
import Hero from "../components/case-studies/Hero";
import Stats from "../components/case-studies/Stats";
import LaunchCaseStudySection from "@/components/case-studies/LaunchCaseStudySection";
import RevenueTimelineCaseStudy from "@/components/case-studies/RevenueTimelineCaseStudy";
import PerformanceMetricsCaseStudy from "@/components/case-studies/PerformanceMetricsCaseStudy";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyOutdoor from "@/components/case-studies/CaseStudyOutdoor";
import CaseStudyLandscaping from "@/components/case-studies/CaseStudyLandscaping";
import CaseStudyApparel from "@/components/case-studies/CaseStudyApparel";
import CaseStudyKoala from "@/components/case-studies/CaseStudyKoala";
import CaseStudyFooterCTA from "@/components/case-studies/CaseStudyFooterCTA";
const CaseStudies = () => {
  return (
    <div className="w-full md:px-16 px-4">
      <Hero />
      <Stats />
      <CaseStudyBreakdown />
      <LaunchCaseStudySection />
      <RevenueTimelineCaseStudy />
      <PerformanceMetricsCaseStudy />
      <CaseStudyCard />
      <CaseStudyOutdoor/>
      <CaseStudyLandscaping/>
      <CaseStudyApparel/>
      <CaseStudyKoala/>
      <CaseStudyFooterCTA/>
    </div>
  );
};

export default CaseStudies;
