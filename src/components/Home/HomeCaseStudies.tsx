import { homeCaseStudies } from "@/constants/content";
import { Link } from "react-router-dom";

const HomeCaseStudies = () => {
  return (
    <section className="bg-[#FBF7EF] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm tracking-widest text-orange-500 font-semibold">
          — CASE STUDIES
        </span>

        <h2 className="mt-4 text-5xl font-extrabold text-[#1A1A1A] leading-tight">
          Results that do{" "}
          <span className="font-serif italic text-orange-500">
            the talking.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-gray-600">
          We've helped hundreds of businesses grow on Amazon. We want you to be
          our next success story.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeCaseStudies.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-10 shadow-sm"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-2xl" />

              <div className="flex justify-between items-start">
                <span className="text-xs tracking-widest text-gray-400 font-semibold">
                  {item.brand}
                </span>

                <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  ▲ {item.badge}
                </span>
              </div>

              <div className="mt-6 text-6xl font-serif font-bold text-orange-500">
                {item.metric}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <button className="mt-6 text-orange-500 font-semibold hover:underline">
                <Link to="/case-studies">
                Read full case study →
                </Link>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-gray-600 font-medium hover:text-orange-500">
            <Link to="/case-studies">
            View all case studies →
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
