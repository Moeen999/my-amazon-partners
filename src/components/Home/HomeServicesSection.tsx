import { homeServicesData } from "@/constants/content";
import HomeServiceCard from "./HomeServiceCard";

const ServicesSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-[2px] bg-[#F1A529]"></div>
              <span className="text-[#F1A529] text-[11px] font-bold tracking-[0.25em] uppercase">
                {homeServicesData.label}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] leading-tight">
              {homeServicesData.headingMain} <br />
              <span className="text-[#F1A529] font-serif italic">
                {homeServicesData.headingItalic}
              </span>
            </h2>
          </div>

          <div className="lg:w-2/3 w-full h-full">
            <img
            className="w-full bg-transparent"
              src={homeServicesData.logoImage}
            >
            </img>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {homeServicesData.services.map((service) => (
            <HomeServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Link */}
        {/* <div className="text-center">
          <a href="#" className="text-gray-400 font-bold text-sm hover:text-[#F1A529] transition-colors">
            {homeServicesData.footerLink}
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
