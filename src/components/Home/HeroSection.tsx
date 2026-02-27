import { homeHeroData } from "@/constants/content";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFBF7] overflow-hidden font-sans">
      {/* Background Dot Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Soft Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 blur-[120px] rounded-full -mr-48 -mt-24"></div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT SIDE CONTENT */}
          <div className="lg:w-1/2">
            {/* Live Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-[#FFF4E0] border border-orange-200 px-3 py-2 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-[#B08A4D] uppercase tracking-wider">
                {homeHeroData.badge}
              </span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-medium text-[#1A1A1A] leading-[1.05] tracking-tight mb-8">
              {homeHeroData.headingMain} <br />
              <span className="text-[#F1A529] font-serif italic">
                {homeHeroData.headingItalic}
              </span>{" "}
              {homeHeroData.headingEnd}
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-normal">
              {homeHeroData.subtext}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <button className="bg-[#d99421] hover:bg-[#F1A529] text-[#1A1A1A] font-bold py-3 px-6 rounded-xl transition-all flex items-center shadow-lg shadow-orange-300">
                <Link to="/contact"> Get a Free Audit</Link>{" "}
                <span className="ml-2 text-xl">→</span>
              </button>
              <button className="flex items-center gap-2 text-[#1A1A1A] font-bold hover:opacity-70 transition-opacity">
                <span className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <Link to="/services/full-service-management">
                  Schedule an Icebreaker
                </Link>
              </button>
            </div>

            {/* Brand Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["NL", "HW", "DW", "CH"].map((inits, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-[10px] font-black text-white"
                  >
                    {inits}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#F1A529] border-2 border-white flex items-center justify-center text-sm font-black text-[#1A1A1A]">
                  +
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium">
                {homeHeroData.brandsTrustText}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="lg:w-1/2 flex flex-col gap-5 w-full">
            {/* Top Stat Card (Agency Overview) */}
            <div className="bg-white rounded-[32px] p-10 border border-border border-orange-400 shadow-sm">
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-6 block">
                {homeHeroData.statsCards[0].label}
              </span>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#F1A529] mb-1">
                    {homeHeroData.statsCards[0].metric}
                  </h2>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    {homeHeroData.statsCards[0].subMetric}
                  </p>
                </div>
                <div className="text-right">
                  <h2 className="text-2xl md:text-5xl tracking-wide font-serif font-bold text-[#F1A529] mb-1">
                    {homeHeroData.statsCards[0].specialists}
                  </h2>
                  <p className="text-[10px] tracking-wide font-bold text-gray-400 uppercase">
                    {homeHeroData.statsCards[0].specialistsLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Client Win Cards */}
            {homeHeroData.statsCards.slice(1).map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-10 border border-border border-t-xl border-orange-400 shadow-sm relative overflow-hidden group"
              >
                <span className="text-[10px] font-bold text-orange-400 tracking-[0.1em] uppercase mb-6 flex items-center gap-2">
                  <span className="text-xs">{card.icon}</span> {card.type}
                </span>
                <h2 className="text-[80px] font-serif font-medium text-[#1A1A1A] leading-none mb-2">
                  {card.metric}
                </h2>
                <p className="text-lg text-gray-500 mb-6">{card.subMetric}</p>
                <div className="inline-flex items-center gap-2 bg-[#F1FFF7] border border-green-100 px-4 py-1.5 rounded-full">
                  <span className="text-green-500 text-xs">▲</span>
                  <span className="text-green-600 text-[11px] font-bold uppercase tracking-wide">
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
