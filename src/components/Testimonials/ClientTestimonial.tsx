import { testimonialData } from '@/constants/content';

const ClientTestimonial = () => {
  return (
    <div className="bg-white w-full py-16 px-6 font-sans">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-[2px] bg-[#F1A529]"></div>
          <span className="text-[#F1A529] text-[10px] font-bold tracking-[0.2em] uppercase">
            {testimonialData.label}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
          {testimonialData.mainHeading}
        </h2>
        <p className="text-gray-500 text-lg">
          {testimonialData.subHeading}
        </p>
      </div>

      {/* Main Dark Testimonial Card */}
      <div className="max-w-7xl mx-auto bg-[#1A1612] rounded-[32px] p-10 md:p-16 relative overflow-hidden">
        {/* Decorative Quote Mark (Top Right) */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#F1A529">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21Z" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          {/* Left Content */}
          <div className="md:w-3/4">
            {/* Growth Badge */}
            <div className="inline-block bg-[#2A241E] border border-[#F1A529]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[#F1A529] text-xs font-bold tracking-wide">
                {testimonialData.review.growthTag}
              </span>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-white text-2xl md:text-3xl font-serif italic leading-snug mb-8">
              "{testimonialData.review.comment}"
            </blockquote>

            {/* Stars */}
            <div className="flex text-[#F1A529] text-sm">
              {"★".repeat(testimonialData.review.stars)}
            </div>
          </div>

          {/* Right Content (Profile) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            {/* Initials Circle */}
            <div className="w-20 h-20 bg-[#FFF4E0] rounded-full flex items-center justify-center mb-6 border-4 border-[#2A241E]">
              <span className="text-[#1A1612] text-xl font-bold uppercase">
                {testimonialData.review.initials}
              </span>
            </div>
            <h4 className="text-white font-bold text-lg mb-1">
              {testimonialData.review.author}
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              {testimonialData.review.designation}
            </p>
            {/* Small Profile Stars */}
            <div className="flex text-[#F1A529] text-[10px]">
              {"★".repeat(testimonialData.review.stars)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;