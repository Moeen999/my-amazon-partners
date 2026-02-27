import { vendorCentralAmazonDesignContent as data } from "@/constants/content";
import { Link } from "react-router-dom";

const AmazonDesignSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">{data.title}</h2>

          <p className="text-zinc-600 text-[15px] leading-relaxed">
            {data.mainDescription}
          </p>

          <div className="space-y-6">
            {data.services.map((service, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-[15px] font-bold text-zinc-900">
                  {service.label}
                </h4>
                <p className="text-zinc-600 text-[14px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-zinc-800 font-medium pt-4">{data.footerNote}</p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#FFD700] hover:bg-green-400 hover:text-white/90 font-bold rounded-full transition-all shadow-md"
            >
              {data.btnText}
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[550px]">
            <img
              src="/vendorCntralImages/amazondesign.png"
              alt="Amazon Brand Design Showcase on Monitor"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonDesignSection;
