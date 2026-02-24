import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import { brandGlData, brandStoryData, bsFeatureCardData, bsStoryTellingData } from "@/constants/content";

const BrandStory = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      {/* HERO SECTION */}
      <CommonHeader content={brandStoryData} />
      {/* <div className="px-6 flex gap-2 justify-start items-start">
        <ArrowIcon />
        <button className="hover:underline">{brandGlData.ctaText}</button>
      </div> */}
      <hr className="w-full mx-auto mt-6" />

      <CommonHeading
        heading={"Why every listing needs a Brand Story"}
        description={
          "Give your Brand Story the edge it needs to elevate your listing. Attract more shoppers, and turns clicks into sales."
        }
      />

     <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bsFeatureCardData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>


      <CommonHeader content={bsStoryTellingData}/>

      <FAQAccordion />
    </div>
  );
};

export default BrandStory;
