import { finalReviewsData } from "@/constants/content";

const ReviewCard = ({ data, isFullWidth = false }) => {
  const isDark = data.isDark;

  return (
    <div
      className={`relative rounded-lg flex flex-col p-8 shadow-sm border transition-all duration-300 hover:shadow-lg ${
        isDark
          ? "bg-[#1A1612] border-transparent text-white"
          : "bg-white border-orange-100 text-gray-800"
      } ${isFullWidth ? "w-full mb-8" : "h-full"}`}
    >
      <div className="flex text-[#F1A529] text-[10px] mb-6">
        {"★".repeat(data.stars)}
      </div>

      {data.tag && (
        <div className="mb-6 self-start">
          <span
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold border flex items-center gap-2 ${
              isDark
                ? "bg-[#2A241E] border-[#F1A529]/30 text-[#F1A529]"
                : "bg-[#FFF9F0] border-[#F1A529]/20 text-[#B08A4D]"
            }`}
          >
            {data.tag}
          </span>
        </div>
      )}

      {!isFullWidth && (
        <div className="mb-4 text-[#F1A529] opacity-30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21Z" />
          </svg>
        </div>
      )}

      <p
        className={`italic mb-8 leading-relaxed ${
          isFullWidth
            ? "text-gray-600 text-[15px]"
            : "text-[13px] " + (isDark ? "text-gray-300" : "text-gray-500")
        }`}
      >
        "{data.quote}"
      </p>

      <div
        className={`w-full h-[1px] mb-6 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
      ></div>

      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black ${
            isDark
              ? "bg-[#FFF4E0] text-[#1A1612]"
              : "bg-[#FFF4E0] text-[#1A1612]"
          }`}
        >
          {data.initials}
        </div>
        <div>
          <h4 className="font-black text-xs uppercase tracking-tight">
            {data.author}
          </h4>
          <p className="text-[10px] text-gray-400 font-medium">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialGrid = () => {
  return (
    <div className="bg-[#FCFAF7] py-16 px-6">
        <div className="mb-14 px-2 md:px-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-[2px] bg-[#F1A529]"></div>
          <span className="text-[#F1A529] text-[11px] font-bold tracking-[0.25em] uppercase">
            {finalReviewsData.label}
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-5 tracking-tight">
          {finalReviewsData.heading}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-normal">
          {finalReviewsData.subHeading}
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <ReviewCard data={finalReviewsData.mainReview} isFullWidth={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {finalReviewsData.bottomCards.map((card) => (
            <ReviewCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
