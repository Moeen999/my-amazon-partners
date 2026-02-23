import { homeProcessData } from "@/constants/content";
import { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-[2px] bg-[#F1A529]"></div>
            <span className="text-[#F1A529] text-[11px] font-bold tracking-[0.25em] uppercase">
              {homeProcessData.label}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] leading-tight">
            {homeProcessData.headingMain} <br />
            <span className="text-[#F1A529] font-serif italic">
              {homeProcessData.headingItalic}
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT SIDE - TABS */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {homeProcessData.steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`group cursor-pointer border-b border-gray-100 py-8 transition-all duration-300 ${
                  activeStep === index
                    ? "opacity-100 bg-orange-100 px-3 rounded-xl"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className={`text-xl font-bold ${activeStep === index ? "text-[#F1A529]" : "text-gray-400"}`}
                  >
                    {step.id}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                      {step.title}
                    </h3>
                    {/* Collapsible Description */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-500 text-sm leading-relaxed pr-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - CONTENT CARD */}
          <div className="w-full lg:w-2/3 relative">
            <div className="bg-[#FFF9F1] rounded-[40px] p-10 md:p-16 relative z-10 min-h-[500px] flex flex-col justify-center transition-all duration-500">
              <span className="text-[10px] font-bold text-[#F1A529] tracking-[0.2em] uppercase mb-6 block">
                {homeProcessData.steps[activeStep].rightSide.stepLabel}
              </span>

              <h3 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-10 max-w-lg">
                {homeProcessData.steps[activeStep].rightSide.heading}
              </h3>

              {/* List Items */}
              <div className="space-y-3">
                {homeProcessData.steps[activeStep].rightSide.list.map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-5 flex items-center gap-4 border border-orange-50/50 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#F1A529] flex items-center justify-center text-white">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-bold text-[#1A1A1A] text-sm tracking-tight">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Float Badge (90 Days) */}
              <div className="absolute -bottom-8 -right-2 md:right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce">
                <div className="w-10 h-10 rounded-xl bg-[#FFF9F1] flex items-center justify-center">
                  <span className="text-[#F1A529] text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#1A1A1A] leading-none">
                    90
                  </h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                    Days to see results
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
