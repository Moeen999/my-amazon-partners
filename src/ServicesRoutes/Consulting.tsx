import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import {
  brandConsultingContent,
  servicesContent,
  tagetedSolutions,
} from "@/constants/content";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <div className="w-full py-8 md:py-12">
      <CommonHeader content={brandConsultingContent} />
      <div className="w-full flex px-4 md:px-36 mt-4 justify-start md:justify-center items-center">
        <Link to="/contact">
          <button className="text-foreground font-semibold hover:underline-offset-2 border px-5 py-4 rounded-full bg-yellow-500 text-black hover:bg-green-500 hover:text-white">
            View consultation options
          </button>
        </Link>
      </div>

      {/* Common Heading */}
      <CommonHeading
        heading={"Brand growth consulting for Amazon sellers"}
        description={
          "You bring the problems, your coach brings the solutions. We don’t just hand out advice, we work with you step-by-step to fix the core issues holding your brand back."
        }
      />

      {/* brand growth consulting Section */}

      <section id="brandGrowth" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.map((services, index) => {
            return <ServiceCard {...services} key={index} />;
          })}
        </div>
      </section>

      {/* common heading */}
      <CommonHeading
        heading={"Targeted solutions for better sales"}
        description={
          "Stop navigating blindly. Our Amazon agency experts deliver focused, actionable plans that help drive more sales."
        }
      />

      {/* tagetedSolution cards */}
      <div id="targetedSolutions" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tagetedSolutions.map((tagetedSolution, index) => {
            const { title, description } = tagetedSolution;
            return (
              <FeatureHighlightCard title={title} description={description} />
            );
          })}
        </div>
      </div>

      {/* Custom Solutions Section */}
      <section id="customSolutions" className="max-w-7xl mx-auto px-6 py-24">
        <CustomSolutionsSection />
      </section>

      {/* Common Heading */}
      <CommonHeading
        heading={"Turn Amazon challenges into growth opportunities"}
        description={
          "Get the strategic help you need to manage the hurdles of Amazon selling and business ownership."
        }
      />
      <div className="w-full flex justify-center items-center">
        <Link to="/contact">
          <button className="text-foreground font-semibold hover:underline-offset-2 border px-5 py-4 rounded-full bg-yellow-500 text-black hover:bg-green-500 hover:text-white">
            View consultation options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Consulting;
