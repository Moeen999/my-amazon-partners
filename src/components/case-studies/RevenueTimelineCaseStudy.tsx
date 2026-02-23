import { revenueCaseStudy as data } from "@/constants/content";

const RevenueTimelineCaseStudy = () => {
  return (
    <section className="w-full bg-white border border-orange-200 rounded-2xl overflow-hidden mt-4 hover:shadow-xl hover:border-orange-300 transition-colors duration-300">
      <div className="px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest font-semibold text-gray-500 mb-3">
            {data.category}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            <span className="text-orange-500">{data.title.highlight}</span>{" "}
            {data.title.normal}
          </h2>
        </div>

        <span className="inline-flex rounded-full border border-orange-300 px-6 py-2 text-xs font-semibold tracking-wide text-orange-600">
          {data.badge}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-orange-200">
        <div className="px-8 py-12 space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xs tracking-widest font-semibold text-gray-600">
                CORE PROBLEMS
              </h4>
              <div className="flex-1 h-px bg-orange-200" />
            </div>

            <ul className="space-y-4">
              {data.coreProblems.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start text-sm text-gray-700"
                >
                  <span className="w-5 h-5 flex items-center justify-center rounded-full border border-red-300 text-red-500 text-xs">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xs tracking-widest font-semibold text-gray-600">
                TWO-PHASE STRATEGY
              </h4>
              <div className="flex-1 h-px bg-orange-200" />
            </div>

            <div className="space-y-6 relative pl-6">
              <div className="absolute left-[27px] md:left-[28px] top-0 bottom-0 w-px bg-orange-300"></div>

              {data.strategy.map((step, i) => (
                <div key={i} className="flex gap-4 relative">
                  <span className="mt-1 w-3 h-3 rounded-full bg-white border-2 border-orange-500 z-10" />
                  <div>
                    <p className="text-xs font-bold tracking-widest text-orange-500 mb-1">
                      {step.phase}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 py-12">
          <img
            src="/casestudiesImages/revenue-growth-timeline.png"
            alt="Revenue Growth Timeline"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default RevenueTimelineCaseStudy;
