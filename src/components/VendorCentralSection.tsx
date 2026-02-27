import { vendorCentralContent } from "@/constants/content";
import { Link } from "react-router-dom";

const VendorCentralSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            {vendorCentralContent.mainHeading}
          </h2>

          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p>{vendorCentralContent.description1}</p>
            <p>{vendorCentralContent.description2}</p>
          </div>

          <div className="pt-6">
            <Link
              to="/contact"
              className="flex items-center gap-3 text-zinc-900 font-bold hover:opacity-80 transition-opacity"
            >
              <span className="w-6 h-6 rounded-full bg-[#F36F21] flex items-center justify-center text-white text-[10px]">
                ❯
              </span>
              {vendorCentralContent.ctaText}
            </Link>
          </div>
        </div>

        <div className="flex-[1.5]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {vendorCentralContent.services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[#34C759] flex-shrink-0">
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
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorCentralSection;
