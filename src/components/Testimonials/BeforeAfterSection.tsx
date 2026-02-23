import { beforeAfterData } from "@/constants/content";

const BeforeAfterSection = () => {
  return (
    <div className="bg-white w-full py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-[2px] bg-[#F1A529]"></div>
            <span className="text-[#F1A529] text-[11px] font-bold tracking-[0.25em] uppercase">
              {beforeAfterData.label}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-5 tracking-tight">
            {beforeAfterData.heading}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-normal">
            {beforeAfterData.subHeading}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beforeAfterData.stats.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#1A1612] rounded-[24px] py-4 px-4 flex flex-col items-center justify-center text-center"
            >
              {/* Large Gold Percentage/Number */}
              <h3 className="text-[#F1A529] text-2xl md:text-3xl font-black mb-6 tracking-tighter">
                {item.percentage}
              </h3>
              
              {/* Description Text */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BeforeAfterSection;