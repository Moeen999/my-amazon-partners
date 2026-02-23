const CaseStudyCard = ({ study }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* Top Header Row */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-50">
        <span className="text-[10px] font-black tracking-widest text-gray-800 uppercase">
          {study.category}
        </span>
        <span className="px-3 py-1 rounded-full border border-orange-200 bg-[#FFF9F0] text-[#B08A4D] text-[10px] font-bold">
          {study.duration}
        </span>
      </div>

      {/* Metrics Section */}
      <div className="px-8 py-10 flex items-center justify-between relative">
        <div className="text-center flex-1">
          <h4 className="text-3xl font-black text-gray-800 mb-1">
            {study.metricLeft}
          </h4>
          <p className="text-[9px] font-bold text-gray-400 tracking-tighter uppercase">
            {study.labelLeft}
          </p>
        </div>

        {/* Center Arrow */}
        <div className="px-4 text-orange-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        <div className="text-center flex-1">
          <h4 className="text-3xl font-black text-[#F1A529] mb-1">
            {study.metricRight}
          </h4>
          <p className="text-[9px] font-bold text-gray-400 tracking-tighter uppercase">
            {study.labelRight}
          </p>
        </div>
      </div>

      {/* Quote Section with Left Border */}
      <div className="px-8 pb-8 flex-grow">
        <div className="border-l-2 border-orange-400 pl-4 py-1">
          <p className="text-gray-600 text-[13px] leading-relaxed italic font-medium">
            "{study.quote}"
          </p>
        </div>
      </div>

      {/* Author Profile */}
      <div className="px-8 pb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#EBF3F5] flex items-center justify-center text-[#1A1612] font-bold text-xs">
          {study.initials}
        </div>
        <div>
          <h5 className="text-xs font-black text-gray-800 leading-none mb-1">
            {study.author}
          </h5>
          <p className="text-[10px] text-gray-400 font-medium">{study.role}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
