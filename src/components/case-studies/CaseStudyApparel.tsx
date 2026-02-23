import { caseStudyApparel } from "@/constants/content";

const CaseStudyApparel = () => {
  return (
    <div className="w-full p-8 bg-white border border-zinc-200 rounded-xl shadow-sm font-sans hover:shadow-xl hover:border-orange-300 transition-colors duration-300 mt-4">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-start mb-10">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-2 uppercase">
            {caseStudyApparel.category}
          </p>
          <h1 className="text-xl md:text-4xl font-extrabold text-zinc-900">
            ACoS <span className="text-amber-500">Reduced 65%</span> in Just 15
            Days
          </h1>
        </div>
        <div className="px-5 py-2 border border-amber-200 bg-amber-50/50 rounded-full text-[10px] font-bold text-amber-700 tracking-widest uppercase">
          {caseStudyApparel.badgeText}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase whitespace-nowrap">
                Core Problems
              </span>
              <div className="h-[1px] w-full bg-zinc-200"></div>
            </div>
            <ul className="space-y-5">
              {caseStudyApparel.coreProblems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[14px] text-zinc-600 leading-relaxed"
                >
                  <span className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-500 text-[10px] font-bold">
                    ✕
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase whitespace-nowrap">
                Precision Execution
              </span>
              <div className="h-[1px] w-full bg-zinc-200"></div>
            </div>
            <div className="space-y-6 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200">
              {caseStudyApparel.precisionExecution.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-[19px] h-[19px] rounded-full bg-white border-2 border-amber-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  </div>
                  <h4 className="text-[10px] font-bold text-amber-500 tracking-widest mb-1">
                    {item.step}
                  </h4>
                  <p className="text-[13px] text-zinc-600 leading-relaxed italic">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col">
          <div className="w-full">
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src="/casestudiesImages/path-to-your-acos-reduction.png"
                alt="ACoS and ROAS Before vs After Chart"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyApparel;
