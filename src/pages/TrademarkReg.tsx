import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import {
  trademarkBenefitsCardsData as cardData,
  tradeMarkHeroData,
  tradeMarkhighjackerProtectionCards as cardsData,
  tradeMarkRegisteredBrandCardData,
} from "@/constants/content";
import { Link } from "react-router-dom";

const TrademarkReg = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={tradeMarkHeroData} />
      <div className="w-full md:px-16 flex flex-col gap-2 mt-6 md:mt-0">
        <div className="flex justify-start items-center gap-2">
          <ArrowIcon />
          <a className="hover:underline" href="faqs">
            Frequently asked questions
          </a>
        </div>
        <div className="flex justify-start items-center gap-2">
          <ArrowIcon />
          <Link className="hover:underline" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="h-[1px] bg-zinc-400 mt-12" />

      <CommonHeading
        heading={"Access tools that increase sales"}
        description={
          "Gain access exclusive tools designed to get you more sales and grow your business on Amazon."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <CommonHeading
        heading={"Must-have protection against hijackers"}
        description={
          "Defend your products from unauthorized sellers and ensure only you profit from your brand."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 md:mt-12">
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

      <CommonHeading
        heading={"Get Brand Registered in 3 steps​"}
        description={
          "Defend your products from unauthorized sellers and ensure only you profit from your brand."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {tradeMarkRegisteredBrandCardData.map((data, index) => {
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

      {/* FAQS Container */}
      <div className="w-full px-2 md:px-8 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="wfull md:w-2/4">
          <FAQAccordion />
        </div>
        <div className="flex flex-col gap-2 md:mt-16 w-full md:w-2/4">
          <h2 className="text-xl font-semibold">
            Upgrade your Amazon listings
          </h2>
          <p className="text-sm font-light">
            If you already have a DTC website up and running, here are additions
            that can help bring more shoppers to your site and grow loyal
            customers:
          </p>
          {[
            {
              href: "/services/listing-optimization/end-to-end-listing",
              text: "Full listing optimization",
            },
            {
              href: "/services/design/listing-images-design",
              text: "Listing images",
            },
            {
              href: "/services/design/amazon-brand-store",
              text: "Brand store",
            },
            {
              href: "/services/design/amazon-main-image-ctr-upgrade",
              text: "Main image CTR hack",
            },
          ].map((linksData, index) => {
            const { text, href } = linksData;
            return (
              <Link to={href} key={index} className="mt-4 flex justify-start items-center gap-2">
                <ArrowIcon />
                <span className="hover:underline hover:text-orange-400 transition-colors duration-300">{text}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrademarkReg;
