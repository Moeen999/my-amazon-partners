import AmazonFeatureCard from "@/components/AmazonFeatureCard";
import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import {
  enhancedCardsContentData,
  enhancedContentCopyWriteContent as copywrite,
  enhancedContentData,
  imageListingBenefits,
} from "@/constants/content";

const EnhancedBrandContent = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={enhancedContentData} />

      <CommonHeading
        heading={"There’s no room for dull listings on Amazon"}
        description={
          "A+ Content helps your product stand out with eye-catching visuals and clear value—while forgettable listings fade fast."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageListingBenefits.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <CommonHeading
        heading={"What is Enhanced Brand Content?"}
        description={
          "Tell your brand story, not just your product specs. Enhanced Brand Content (EBC) lets you upgrade plain listings with rich visuals, lifestyle imagery, and persuasive copy that connects with customers and drives more conversions."
        }
      />
      <AmazonFeatureCard content={enhancedCardsContentData} />
      <hr className="m-12" />
      <CommonHeader content={copywrite} />

      {/* FAQ's */}
      <div className="w-full flex md:flex-row flex-col gap-3 justify-center items-center">
        <div className="md:w-3/4 w-full">
          <FAQAccordion />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-start">
            Upgrade your Amazon listings
          </h3>
          <p className="font-semibold text-start">
            Improve your Amazon listings to bring more shoppers to your listings
            and get your products into their carts:
          </p>
          {[
            "Full listing optimization",
            "Listing images",
            "Brand store",
            "Main image CTR hack",
          ].map((lines, index) => {
            return (
              <div
                key={index}
                className=" flex gap-1 justify-start  items-center"
              >
                <ArrowIcon />
                <p className="hover:underline">{lines}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnhancedBrandContent;
