import AmazonDSPSales from "@/components/AmazonDSPSales";
import AmazonPPCvsDSP from "@/components/AmazonPPCvsDSP";
import CommonHeader from "@/components/CommonHeader";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import TrustedBrands from "@/components/TrustedBrands";
import {
  amazonDspFeatureCardsData as featureData,
  amazonDspHeroData,
  amazonAdReachData,
  amazonDspBenefitsCardsData as cardsData,
} from "@/constants/content";

import { Link } from "react-router-dom";

const AmazonDsp = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={amazonDspHeroData} />
      <div className="w-full flex justify-center md:justify-start items-center md:px-16 mt-6 md:mt-0">
        <Link
          className="px-6 bg-yellow-400 py-4 rounded-full font-bold hover:bg-green-400 hover:text-white/90"
          to="/contact"
        >
          Schedule Your Discovery Call
        </Link>
      </div>
      <hr className="h-[1px] bg-zinc-300 m-12" />

      <div className="w-full px-6 md:px-16">
        <h1 className="text-2xl md:text-4xl font-semibold">
          What is Amazon DSP?
        </h1>
        <p className="text-md font-light mt-4 w-3/4">
          Amazon DSP (Demand Side Platform) lets sellers and vendors reach
          potential customers outside of Amazon and bring them to your product
          listings. If you struggle to attract shoppers with normal Amazon PPC
          ads, Amazon DSP is for you.
        </p>
        <p className="mt-12">
          Amazon DSP offers various ad formats to engage audiences on and off
          Amazon:
        </p>
      </div>

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <AmazonDSPSales />
      <hr className="h-[1px] bg-zinc-400 mt-12" />

      <CommonHeader content={amazonAdReachData} />

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

      <AmazonPPCvsDSP />

      <FAQAccordion />

      <TrustedBrands />
    </div>
  );
};

export default AmazonDsp;
