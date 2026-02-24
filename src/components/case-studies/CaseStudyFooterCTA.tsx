import { caseStudyCtaContent } from "@/constants/content";
import { Link } from "react-router-dom";

const CaseStudyFooterCTA = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-8 border-t border-zinc-200 mt-4 mb-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
          {caseStudyCtaContent.overline}
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
          {caseStudyCtaContent.heading}{" "}
          <span className="text-amber-500">
            {caseStudyCtaContent.headingAccent}
          </span>
        </h2>

        <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {caseStudyCtaContent.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-amber-200/50 flex items-center">
            <Link to="/contact">{caseStudyCtaContent.primaryBtn}</Link>
          </button>

          <button className="px-8 py-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-bold border border-zinc-300 rounded-full transition-all duration-300">
            <Link to="/services">{caseStudyCtaContent.secondaryBtn}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyFooterCTA;
