import { resultsStats, reviewsData } from "@/constants/content";

const ResultsSection = () => {
  return (
    <section className="px-4 md:px-10 py-20">
      <div className="relative overflow-hidden rounded-2xl">
        {/* TOP YELLOW */}
        <div className="bg-yellow-400 px-6 md:px-16 pt-16 pb-28 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            It’s all about results
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-black/80">
            Our success is directly tied to the growth and expansion of our
            amazing clients.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {resultsStats.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center text-black"
              >
                <span className="text-5xl md:text-6xl font-bold">
                  {item.value}
                </span>
                <p className="mt-3 text-lg">{item.label}</p>

                {index !== resultsStats.length - 1 && (
                  <span className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2 h-20 w-px bg-black/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* NOTCH */}
        <div className="absolute left-1/2 top-[calc(50%+40px)] -translate-x-1/2 z-10">
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[30px] border-l-transparent border-r-transparent border-t-yellow-400" />
        </div>

        {/* BOTTOM BLACK */}
        <div className="bg-[#2e2e2e] px-6 md:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
            {reviewsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 text-white text-center sm:text-left"
              >
                {/* LOGO WRAPPER */}
                <div className="w-[140px] h-[48px] md:w-[160px] md:h-[56px] flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* STARS + TEXT */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="w-[120px] h-[24px] mb-1 flex items-center justify-center">
                    <img
                      src={item.stars}
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <p className="text-sm opacity-90">
                    {item.rating} • {item.reviews}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
