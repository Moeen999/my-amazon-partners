const ReviewCard = ({ data }) => {
  const isDark = data.theme === 'dark';

  return (
    <div className={`relative flex flex-col p-8 rounded-[24px] shadow-sm border ${
      isDark ? 'bg-[#1A1612] border-transparent text-white' : 'bg-white border-orange-100 text-gray-800'
    } h-full transition-transform hover:scale-[1.02]`}>
      
      {/* Star Rating */}
      <div className="flex text-[#F1A529] text-sm mb-6">
        {"★".repeat(data.stars)}
      </div>

      {/* Tag Badge */}
      <div className="mb-6 self-start">
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
          isDark 
          ? 'bg-[#2A241E] border-[#F1A529]/30 text-[#F1A529]' 
          : 'bg-[#FFF9F0] border-[#F1A529]/20 text-[#B08A4D]'
        }`}>
          {data.tag}
        </span>
      </div>

      {/* Quote Icon SVG */}
      <div className="mb-6 opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#F1A529">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 3 21V21C3 22.1046 3.89543 23 5 23H8C9.10457 23 10 22.1046 10 21V18C10 16.8954 9.10457 16 8 16H5C3.89543 16 3 16.8954 3 18V21Z" />
        </svg>
      </div>

      {/* Review Text */}
      <p className={`text-base leading-relaxed mb-10 flex-grow font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {data.quote}
      </p>

      {/* Divider */}
      <div className={`w-full h-[1px] mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}></div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
          isDark ? 'bg-[#FFF4E0] text-[#1A1612]' : 'bg-[#EBF3F5] text-[#1A1612]'
        }`}>
          {data.initials}
        </div>
        <div>
          <h4 className="font-bold text-sm">{data.author}</h4>
          <p className="text-xs text-gray-500">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;