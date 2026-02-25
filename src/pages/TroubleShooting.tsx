import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { tsHeroContent, tsIssuesCardsData } from "@/constants/content";

const TroubleShooting = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={tsHeroContent} />
      <hr className="h-[1px] bg-zinc-400 m-12" />
      <CommonHeading
        heading={"Expert help for tough Amazon issues"}
        description={
          "Get reliable support to keep your Amazon listings compliant, visible, and selling uninterruptedly."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {tsIssuesCardsData.map((data, index) => {
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

      <FAQAccordion/>
    </div>
  );
};

export default TroubleShooting;
