import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import {
  brandShowCaseData,
  brandStoreData,
  brandStoreFeatureCardData as content,
} from "@/constants/content";

const BrandStore = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={brandStoreData} />
      {/* <div className="px-6 flex gap-2 justify-start items-start">
        <ArrowIcon />
        <button className="hover:underline"></button>
        <ArrowIcon/>
        <button className="hover:underline"></button>
      </div> */}
      <hr className="w-full mx-auto mt-6" />

      <CommonHeading
        heading={"Why Brand Stores matter on Amazon"}
        description={
          "Present your brand and products effectively, and create a more engaging shopping experience."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <CommonHeader content={brandShowCaseData} />
      <hr className="h-[1px] bg-zinc-400 mt-12" />

      <FAQAccordion />
    </div>
  );
};

export default BrandStore;
