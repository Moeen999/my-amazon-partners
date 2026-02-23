import { testimonialStatsData } from "@/constants/content";
import React from "react";

const TestimonialStatsBar = () => {
  return (
    <div className="bg-[#F1A529] w-full py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8 md:gap-4">
        {testimonialStatsData.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-3">
              {/* Value (Bold & Black) */}
              <span className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-normal">
                {stat.value}
              </span>
              {/* Label (Bold & Small) */}
              <span className="text-[11px] font-semibold text-[#1A1A1A] leading-tight max-w-[100px] uppercase">
                {stat.label}
              </span>
            </div>

            {/* Vertical Divider (Only between items) */}
            {i < testimonialStatsData.length - 1 && (
              <div className="hidden md:block h-10 w-[1.5px] bg-[#1A1A1A] opacity-20"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TestimonialStatsBar;
