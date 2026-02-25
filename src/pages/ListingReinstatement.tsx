import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import {
  listingReinstHeroContent as data,
  reInstProcessCardData as cardData,
} from "@/constants/content";

const ListingReinstatement = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={data} />

      <hr className="h-[1px] bg-zinc-400 mt-12" />

      <CommonHeading
        heading={"Why our reinstatement process works"}
        description={
          "With over 400 brands managed on Amazon, we know what’s needed to solve Amazon problems. "
        }
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

      <FAQAccordion/>
    </div>
  );
};

export default ListingReinstatement;
