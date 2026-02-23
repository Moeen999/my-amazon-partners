import { caseStudyDetail as data } from "@/constants/content";

const CaseStudyBreakdown = () => {
  return (
    <section className="w-full bg-[#faf9f6] border border-gray-200 rounded-2xl overflow-hidden mt-6 hover:shadow-xl hover:border-orange-300 transition-colors duration-300">
      {/* Top Header */}
      <div className="px-8 py-10 bg-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest font-semibold text-gray-500 mb-2">
            {data.category}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            <span className="text-orange-500">+</span>
            {data.headline}
          </h2>
        </div>

        <span className="inline-flex items-center justify-center rounded-full border border-orange-300 px-6 py-2 text-sm font-semibold text-orange-600">
          {data.badge}
        </span>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-[#f6f3ec]">
        {data.topStats.map((item, index) => (
          <div key={index} className="px-8 py-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{item.icon}</span>
              <h3 className="text-4xl font-bold text-orange-500">
                {item.value}
              </h3>
            </div>
            <p className="font-semibold text-black mb-1">{item.title}</p>
            <p className="text-sm text-gray-600 max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-14 bg-white">
        {/* Left – Challenges */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h4 className="text-sm tracking-widest font-semibold text-gray-600">
              11 CORE CHALLENGES
            </h4>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.challenges.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-start bg-[#faf9f6] border border-gray-200 rounded-xl px-4 py-4"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-red-300 text-red-500 text-xs font-bold">
                  ×
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Image Placeholder */}
        <div className="w-full h-full">
          <img
            src="/casestudiesImages/revenue-transformation.png"
            alt="Revenue Transformation"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBreakdown;
