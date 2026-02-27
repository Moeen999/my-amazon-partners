import { vendorCentralLogisticsContent } from "@/constants/content";
import { Link } from "react-router-dom";

const LogisticsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-10">
          <h2 className="text-3xl font-bold text-zinc-900">
            {vendorCentralLogisticsContent.title}
          </h2>

          <div className="space-y-8">
            {vendorCentralLogisticsContent.services.map((service, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900">
                  {service.heading}
                </h3>
                <p className="text-zinc-600 text-[15px] leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <ul className="space-y-3">
            {vendorCentralLogisticsContent.checkPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-[#34C759]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-zinc-700 text-[15px] font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link to="/contact" className="px-10 py-4 bg-[#FFD700] hover:bg-[#F0C800] text-zinc-900 font-bold rounded-full transition-all shadow-md">
              {vendorCentralLogisticsContent.btnText}
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[550px]">
            <img
              src="/vendorCntralImages/logistics.png"
              alt="Amazon Seller Central Logistics and Inventory Management"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
