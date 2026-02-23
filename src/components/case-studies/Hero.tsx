import { caseStudiesHeroContent as content } from "@/constants/content";
const CaseStudiesHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <p className="text-sm font-semibold tracking-widest text-orange-500">
                {content.tag}
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6">
              {content.heading}
            </h1>

            <p className="text-gray-600 max-w-xl mb-8">{content.description}</p>

            <div className="flex flex-wrap gap-6">
              {content.points.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <p className="text-sm font-medium text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          {/* <div className="w-full h-[420px] bg-gray-100 rounded-xl"></div> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
