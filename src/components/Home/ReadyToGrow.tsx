import { homeCtaContent } from "@/constants/content";
import { Link } from "react-router-dom";

const ReadyToGrow = () => {
  return (
    <div>
      <section className="bg-[#FBF7EF] px-6 py-24">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] px-6 py-20 text-center shadow-sm">
          <span className="text-sm tracking-widest text-orange-500 font-semibold">
            {homeCtaContent.label}
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight">
            {homeCtaContent.headingStart}
            <br />
            {homeCtaContent.headingMiddle}{" "}
            <span className="font-serif italic text-orange-500">
              {homeCtaContent.headingAccent}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            {homeCtaContent.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#F5A623] text-black font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition hover:-translate-y-1 duration-300">
              <Link to="/contact">
              {homeCtaContent.primaryBtn}
              </Link>
              <span>→</span>
            </button>

            <button className="border border-[#E2D7C7] text-[#1A1A1A] font-semibold px-8 py-4 rounded-xl hover:bg-[#FBF7EF] transition hover:border-black">
                <Link to="/services">
                {homeCtaContent.secondaryBtn}
                </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToGrow;
