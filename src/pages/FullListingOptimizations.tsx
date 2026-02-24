import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FeatureHighlightCard from "@/components/FullServiceCard";
import {
  fullListingOptHeroContent as content,
  fullListAPlusAndSEOBenefits as cardData,
  optimizingResultData as results,
  shopperInformingData,
} from "@/constants/content";

const FullListingOptimizations = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={content} />

      <CommonHeading
        heading={"What is a full listing optimization?"}
        description={
          "Full listing optimization is the process of updating and changing the listings product detail pages to improve search visibility, click-through rate and conversion rates to help generate more sales."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <CommonHeader content={results}/>
        <hr className="h-[1px] bg-zinc-400 mt-12 mb-12" />

      <CommonHeader content={shopperInformingData}/>
    </div>
  );
};

export default FullListingOptimizations;
