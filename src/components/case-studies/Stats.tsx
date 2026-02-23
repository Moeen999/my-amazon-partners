import { caseStudiesStats } from "@/constants/content";

const CaseStudiesStats = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {caseStudiesStats.map((item, index) => (
            <div
              key={index}
              className="py-6 px-6 flex flex-col gap-2 hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-orange-500">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 max-w-[160px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStats;
