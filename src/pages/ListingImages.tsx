import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import {
  imageBenefits,
  listingImagesData,
  threeDRenderBenefits,
  threeDsecData,
} from "@/constants/content";

const ListingImages = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={listingImagesData} />
      {/* <div className="px-6 flex flex-col gap-2 justify-start items-start">
        <div className="flex gap-2 justify-start items-center">
          <ArrowIcon />
          <button className="hover:underline">Sample listing images</button>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <ArrowIcon />
          <button className="hover:underline">Level up with 3D images</button>
        </div>
      </div> */}
      <hr className="w-full mx-auto mt-6" />

      <CommonHeading
        heading={"There's no space for boring on Amazon"}
        description={
          "Shoppers buy with their eyes first. With competition always present, your listing images should raise your product above the rest, or join other listings that lack appeal and are forgotten."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageBenefits.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <div className="w-full flex md:flex-row flex-col gap-3 justify-center items-center">
        <div className="md:w-3/4 w-full">
          <FAQAccordion />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-start">
            Need more than just listing images?
          </h3>
          <p className="font-semibold text-start">
            Improve and optimize you listings further with more Seller Central
            features that can help convert more shoppers:
          </p>
          {[
            "A+ content",
            "Brand story",
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
      <hr className="w-full mx-auto mt-6 mb-6" />

      <CommonHeader content={threeDsecData} />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {threeDRenderBenefits.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingImages;
