import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import {
  brandGlData,
  brandGlFeatureCardData,
  brandGlForBusiness,
  brandGlQsData,
  designServicesData,
} from "@/constants/content";

const BrandGuideLines = () => {
  return (
    <div className="w-full py-8 md:py-12">
      <CommonHeader content={brandGlData} />
      {/* <div className="flex justify-start items-center gap-1 px-4 md:px-32 py-4">
        <ArrowIcon />
        <h3>Select the brand guideline for you</h3>
      </div> */}
      <hr className="border-gray-200 max-w-6xl mx-auto" />

      <div className="w-full px-4 md:px-32 py-12">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Why do Amazon sellers need brand guidelines?
        </h1>
        <p className="text-sm font-light max-w-2xl mt-4">
          A scattered brand presence confuses customers, while consistency turns
          them into loyal fans
        </p>
      </div>

      <div className="w-full px-4 md:px-20 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandGlFeatureCardData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      {/* What are brand GL */}
      <CommonHeader content={brandGlQsData} />
      <ul className="w-full px-4 md:px-36">
        {[
          "Essential brand guidelines example",
          "Premium brand guidelines example",
        ].map((item, index) => {
          return (
            <li key={index} className="flex gap-2 items-center mt-4 mb-4">
              <ArrowIcon />
              {item}
            </li>
          );
        })}
      </ul>
      <hr className="border-gray-200 max-w-6xl mx-auto" />

      <div className="w-full px-4 md:px-32 py-12">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Have a logo that builds trust
        </h1>
        <p className="text-sm font-light max-w-2xl mt-4">
          Great logos aren’t accidents. They require research to understand your
          audience and hard work to craft a design that truly resonates. But who
          has the time for that? We can do the hard work for you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {designServicesData.map((serviceData, index) => {
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
      </div>

      <div className="w-full px-4 md:px-32 py-12">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Brand guidelines for any business
        </h1>
        <div className="mt-4">
          {brandGlForBusiness.map((gl, index) => {
            const { icon: Icon, description } = gl;
            return (
              <div
                className="flex  justify-start items-center gap-2"
                key={index}
              >
                <span className="text-green-500">
                  <Icon />
                </span>
                <p className="text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ's */}
      <div className="w-full px-4 md:px-32 py-12">
          <FAQAccordion />
      </div>
    </div>
  );
};

export default BrandGuideLines;
