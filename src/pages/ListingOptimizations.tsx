import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import {
  heroContent,
  listingOptCardsData,
  listingOptimizationBenefits as listOpt,
} from "@/constants/content";

const ListingOptimizations = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={heroContent} />

      <CommonHeading
        heading={"Rank higher. Convert faster. Sell more."}
        description={
          "We arm your listing with effective SEO, sales-driving copy, and professional design to capture market share and outsell your top competitors."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
        {listingOptCardsData.map((serviceData, index) => {
          const { title, description, image } = serviceData;
          return (
            <ServiceCard
              key={index}
              title={title}
              imgSrc={image}
              description={description}
            />
          );
        })}
      </div>

      <CommonHeading
        heading={"A proven plan to increase sales"}
        description={
          "By applying Amazon’s best practices, we use expertly-made copy, keywords, and images to improve all key metrics, leading to one ultimate goal: increasing your sales."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listOpt.map((data, index) => {
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
            Make improvements step-by-step
          </h3>
          <p className="font-semibold text-start">
            Improve and optimize you listings in different ways, based on your needs.
          </p>
          {[
            "Product photography",
            "Listing images",
            "A+ content",
            "Brand stroy",
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

export default ListingOptimizations;
