import { homeServicesData } from "@/constants/content";
import { Activity, Search, Layout, Pencil } from "lucide-react";

const HomeServiceCard = ({ service }) => {
  // Mapping icons to strings for the dynamic object
  const IconMap = {
    Pulse: <Activity size={20} />,
    Search: <Search size={20} />,
    Layout: <Layout size={20} />,
    Pencil: <Pencil size={20} />,
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-200  border border-gray-100 rounded-[32px] p-10 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center mb-8 bg-orange-50 group-hover:bg-orange-300`}
      >
        {IconMap[service.icon]}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>

      {/* Learn More Link */}
      <button className="flex items-center text-[#F1A529] font-bold text-xs uppercase tracking-wider group">
        Learn more{" "}
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
};

export default HomeServiceCard;
