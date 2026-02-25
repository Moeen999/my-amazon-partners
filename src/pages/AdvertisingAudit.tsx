import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import TrustedBrands from "@/components/TrustedBrands";
import {
  advertisingAuditCardData as cardData,
  advertisingAuditData,
} from "@/constants/content";

const AdvertisingAudit = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={advertisingAuditData} />
      <hr className="h-[1px] bg-gray-300 m-12" />
      <CommonHeading
        description={
          "Our goal is to see where every ad dollar goes, focus on high-performing keywords, and eliminate waste for measurable growth."
        }
        heading={"Smarter PPC Ads, Better Results"}
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {cardData.map((data, index) => {
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

      <TrustedBrands />

      <FAQAccordion/>
    </div>
  );
};

export default AdvertisingAudit;
