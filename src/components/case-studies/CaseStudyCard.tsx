import { caseStudyData } from "@/constants/content";

const CaseStudyCard = () => {
  return (
    <div className="w-full p-8 bg-white border border-zinc-200 rounded-xl shadow-sm font-sans hover:shadow-xl hover:border-orange-300 transition-colors duration-300 mt-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-2 uppercase">
            {caseStudyData.category}
          </p>
          <h1 className="text-xl md:text-4xl font-extrabold text-zinc-900">
            28% YoY +{" "}
            <span className="text-amber-500">83% More Units Sold</span>
          </h1>
        </div>
        <div className="px-4 py-1 md:py-1.5 border border-amber-200 bg-amber-50/50 rounded-full text-[8px] md:text-[10px] font-bold text-amber-700 tracking-wider">
          {caseStudyData.daysManaged}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-400">
              <span className="text-[10px] font-bold tracking-widest uppercase">
                Core Problems
              </span>
              <div className="h-[1px] flex-grow bg-zinc-200"></div>
            </div>
            <ul className="space-y-4">
              {caseStudyData.coreProblems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[13px] text-zinc-600"
                >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-500 text-[10px]">
                    ✕
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-400">
              <span className="text-[10px] font-bold tracking-widest uppercase">
                Strategic Reset
              </span>
              <div className="h-[1px] flex-grow bg-zinc-200"></div>
            </div>
            <ul className="space-y-4">
              {caseStudyData.strategicReset.map((step, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[13px] text-zinc-600"
                >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-500 text-[10px]">
                    ✓
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex flex-col justify-center">
          <img
            src="/casestudiesImages/path-your-result.png"
            alt="YoY Results Dashboard"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
