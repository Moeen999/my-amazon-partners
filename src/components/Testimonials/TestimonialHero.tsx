import { testimonialAgencyData } from "@/constants/content";

const TestimonialHero = () => {
  return (
    <div className="relative w-full bg-[#FCFAF7] py-20 px-10 overflow-hidden font-sans">
      {/* Background Decorative Circles (SVG) */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-40">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle
            cx="450"
            cy="150"
            r="180"
            fill="none"
            stroke="#F1A529"
            strokeWidth="0.5"
          />
          <circle
            cx="450"
            cy="150"
            r="140"
            fill="none"
            stroke="#F1A529"
            strokeWidth="0.5"
          />
          <path
            d="M350 50 L450 250"
            stroke="#F1A529"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Yellow Badge */}
        <div className="mb-6">
          <span className="bg-[#FFF4E0] text-[#B08A4D] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-[#FBEACD]">
            {testimonialAgencyData.header.badge}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[80px] leading-[0.9] font-black text-[#1A1A1A] mb-4">
          {testimonialAgencyData.header.headingMain} <br />
          <span className="text-[#F1A529] italic font-serif font-medium">
            {testimonialAgencyData.header.headingHighlight}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-500 text-lg leading-relaxed mb-12">
          {testimonialAgencyData.header.description}
        </p>

        {/* Review Cards */}
        <div className="flex gap-4">
          {testimonialAgencyData.stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm w-48 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                {item.platform}
              </h3>
              <div className="flex text-[#F1A529] text-xs mb-2">
                {"★".repeat(item.stars)}
              </div>
              <p className="text-[11px] text-gray-400 font-medium">
                {item.rating} • {item.reviews}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialHero;
