import AmazonDesignSection from "@/components/AmazonDesignSection";
import AmazonPPCSection from "@/components/AmazonPPCSection";
import AmazonSEOSection from "@/components/AmazonSEOSection";
import ArrowIcon from "@/components/ArrowIcon";
import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LogisticsSection from "@/components/LogisticsSection";
import ReportingMonitoringSection from "@/components/ReportingMonitoringSection";
import ServiceCard from "@/components/ServiceCard";
import VendorCentralSection from "@/components/VendorCentralSection";
import {
  vendorCentralFeatures,
  vendorCentralHeroData,
} from "@/constants/content";
import { Link } from "react-router-dom";

const VendorCentral = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12 ">
      <CommonHeader content={vendorCentralHeroData} />
      <div className="w-full px-16 md:relative bottom-16">
        <Link
          to="/contact"
          className="px-2 py-2 mt-2 md:py-4 md:px-6 rounded-full transition-colors duration-300 bg-yellow-400 hover:bg-green-400 hover:text-white/90 font-semibold"
        >
          Contact us to get started
        </Link>
      </div>
      <div className="w-full flex flex-col gap-2 mt-12 md:px-16">
        <div className="flex gap-2 justify-start items-center">
          <ArrowIcon />
          <a href="#vendor-central" className="hover:underline">
            What is Vendor Central
          </a>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <ArrowIcon />
          <a href="#vendor-central-management" className="hover:underline">
            Vendor Central Management
          </a>
        </div>
      </div>

      <hr className="h-[1px] bg-zinc-400 m-6" />

      <div id="vendor-central">
        <VendorCentralSection />
      </div>

      <hr className="h-[1px] bg-zinc-400 m-6" />

      <CommonHeading
        heading={"Vendor Central Management"}
        description={
          "Listing optimization strengthens visibility and conversions through better product detail pages. We optimize all items, both new and existing, with improved copy, strategic keywords, and compelling infographics."
        }
      />

      <div id="vendor-central-management">
        <div className="w-full md:px-16 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
            {vendorCentralFeatures.map((data, index) => {
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
        <AmazonPPCSection />
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <AmazonSEOSection />
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <AmazonDesignSection />
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <div className="w-full flex justify-center items-center">
          <div
            className="flex
           flex-col w-full md:px-16 gap-2"
          >
            <h2 className="font-bold text-center text-2xl md:text-4xl ">
              Listing Optimizations
            </h2>
            <p className="font-light tracking-tight">
              Listing optimization describes the process of updating and
              changing the listing’s product detail pages. The earlier this
              happens, the more likely you’ll improve your search visibility,
              click-through rates, and conversation rates. All in all, listing
              optimization helps generate more sales.
            </p>
            <p className="mt-6 font-light tracking-tight">
              We’ll pore over your existing catalog to make sure it’s optimized.
              Any new items or items that need updating will be reworked. Our
              listing optimization includes writing titles, bullet points,
              descriptions, keyword research, and infographic design.
            </p>
            <Link to="/contact" className="px-2 py-2 mt-6 md:py-4 md:px-6 rounded-full transition-colors duration-300 bg-yellow-400 hover:bg-green-400 hover:text-white/90 font-semibold w-fit">
            Talk to Us
            </Link>
          </div>
        </div>
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <LogisticsSection/>
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <ReportingMonitoringSection/>
        <hr className="h-[1 px] bg-zinc-300 m-12" />
        <FAQAccordion/>
      </div>
    </div>
  );
};

export default VendorCentral;
