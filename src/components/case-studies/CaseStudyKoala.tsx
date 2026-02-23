import { caseStudyKoala } from "@/constants/content";

const CaseStudyKoala = () => {
  return (
    <div className="w-full p-8 bg-white border border-zinc-200 rounded-xl shadow-sm font-sans hover:shadow-xl hover:border-orange-300 transition-colors duration-300 mt-4">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-start mb-10">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-2 uppercase">
            {caseStudyKoala.category}
          </p>
          <h1 className="text-4xl font-extrabold text-zinc-900">
            <span className="text-amber-500">$4.7M YoY</span> + $275K in 8 Weeks
          </h1>
        </div>
        <div className="px-5 py-2 border border-amber-200 bg-amber-50/50 rounded-full text-[10px] font-bold text-amber-700 tracking-widest uppercase">
          {caseStudyKoala.badgeText}
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
              {caseStudyKoala.coreProblems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[14px] text-zinc-600 leading-relaxed"
                >
                  <span className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-500 text-[10px] font-bold font-sans">
                    ✕
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* 6-Month Growth Blueprint Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase whitespace-nowrap">
                6-Month Growth Blueprint
              </span>
              <div className="h-[1px] w-full bg-zinc-200"></div>
            </div>
            <ul className="space-y-5">
              {caseStudyKoala.growthBlueprint.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[14px] text-zinc-600 leading-relaxed"
                >
                  <span className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-500 text-[10px] font-bold">
                    ✓
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Scale of Impact (FULL IMAGE) */}
        <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col">
          <div className="w-full">
            {/* The Graphic Image Container */}
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src="/casestudiesImages/koala-impact.png"
                alt="Scale of Impact Chart and Revenue Cards"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyKoala;
