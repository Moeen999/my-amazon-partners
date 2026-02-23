import { clientVoicesData } from "@/constants/content";
import ClientVoiceCard from "./ClientVoiceCard";

const ClientVoicesSection = () => {
  return (
    <div className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-[2px] bg-[#F1A529]"></div>
            <span className="text-[#F1A529] text-[11px] font-bold tracking-[0.25em] uppercase">
              {clientVoicesData.label}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-5 tracking-tight">
            {clientVoicesData.heading}
          </h2>
          <p className="text-gray-400 text-lg">
            {clientVoicesData.subHeading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientVoicesData.reviews.map((review) => (
            <ClientVoiceCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientVoicesSection;