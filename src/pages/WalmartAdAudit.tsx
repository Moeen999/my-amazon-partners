import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import WalmartAdsAuditSection from "@/components/WalmartAdsAuditSection";
import {
  walmartAdAuditHeroData as heroData,
  walmartAdAuditCampaignAuditFeatureCardsData as cardsData,
} from "@/constants/content";

const WalmartAdAudit = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12 overflow-x-hidden">
      <div className="w-full h-full md:h-[70vh] bg-blue-500 py-4">
        <CommonHeader content={heroData} />
      </div>
      <CommonHeading
        heading={"Maximize Your Walmart Ad Performance"}
        description={
          "Our Walmart Advertising Audit provides a clear, data-driven view of your campaigns, showing exactly where every ad dollar goes and uncovering opportunities for improved ROI."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {cardsData.map((data, index) => {
            const { title, description, image } = data;
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
      </div>

      <hr className="h-[1px] w-full bg-zinc-300 m-12" />

      <WalmartAdsAuditSection/>
      <hr className="h-[1px] w-full bg-zinc-300 m-12" />

      <FAQAccordion />
    </div>
  );
};

export default WalmartAdAudit;
