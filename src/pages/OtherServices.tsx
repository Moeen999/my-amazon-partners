import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import TrustedBrands from "@/components/TrustedBrands";
import { otherServicesCardsData as cardsData } from "@/constants/content";

const OtherServices = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <div className="max-w-7xl md:px-16 py-4 w-full flex flex-col gap-2 items-start">
        <h1 className="text-2xl md:text-5xl font-bold">Other Services</h1>
        <p className="font-light tracking-tight">
          We offer more services to make selling on Amazon better for you.
        </p>
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
      <hr className="h-[1px] bg-zinc-300 m-12" />

      <TrustedBrands />

      <FAQAccordion/>
    </div>
  );
};

export default OtherServices;
