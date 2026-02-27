import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import WalmartAuditComparison from "@/components/WalmartAuditComparison";
import {
  walmartAccountAuditHeroData as heroData,
  walmartAccAuditAmazonAuditFeatureCardData as cardsData,
} from "@/constants/content";

const WalmartAccAudit = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12 overflow-x-hidden">
      <div className="w-full h-full md:h-[90vh] bg-blue-500 py-4">
        <CommonHeader content={heroData} />
      </div>
      <div className="w-full px-0 md:px-20 py-4 md:py-12">
        <CommonHeading
          heading={"Walmart Account Services"}
          description={
            "Our Walmart experts handle the heavy lifting so you can focus on growing your business, while your listings, ads, and account perform at their best"
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
        <CommonHeading
          heading={"Smarter Walmart Selling for Better Sales"}
          description={
            "A focused Walmart strategy brings clarity to what drives sales. Our audit highlights gaps across listings, ads, and content that often go unchecked."
          }
        />

        <WalmartAuditComparison />
        
        <hr className="h-[1px] w-full bg-zinc-300 m-12" />

        <FAQAccordion/>
      </div>
    </div>
  );
};

export default WalmartAccAudit;
