import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import {
  amazonBrandNameChangeCardsData as cardsData,
  amazonBrandNameChangeHeroData as heroData,
} from "@/constants/content";

const BrandNameChange = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={heroData} />
      <hr className="h-[1px] bg-zinc-300 m-12" />

      <CommonHeading
        heading={"Seamless Amazon brand name change"}
        description={
          "Don’t face Amazon’s confusing systems alone. We understand how to get brand name changes approved and fix related catalog issues."
        }
      />
      <div className="w-full flex justify-center items-center gap-2 ">
        <ArrowIcon />
        <a href="#faqs" className="cursor-pointer hover:underline">
          Frequently asked questions
        </a>
      </div>

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

      <div id="faqs">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default BrandNameChange;
