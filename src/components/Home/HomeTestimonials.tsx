import { homeTestimonialsData } from "@/constants/content";
import { Link } from "react-router-dom";

const HomeTestimonials = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm tracking-widest text-orange-500 font-semibold">
          — CLIENT TESTIMONIALS
        </span>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="text-5xl font-extrabold text-[#1A1A1A] leading-tight max-w-xl">
            Hear it from brands{" "}
            <span className="font-serif italic text-orange-500">
              we’ve helped.
            </span>
          </h2>

          <p className="text-gray-600 max-w-sm">
            See how our Amazon experts helped clients reach their full
            potential.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeTestimonialsData.map((t, i) => (
            <div
              key={i}
              className="bg-[#FBF7EF] hover:bg-white hover:border-orange-300 border rounded-2xl p-10 flex flex-col justify-between"
            >
              <div>
                <div className="text-sm mb-6">{"★★★★★"}</div>

                <div className="flex gap-4">
                  <div className="w-1 bg-orange-500 rounded-full" />
                  <p className="text-[#1A1A1A] leading-relaxed">{t.text}</p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#E8E1D6] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="bg-[#FBF7EF] hover:border-orange-300 border hover:shadow-md shadow-zinc-300 rounded-xl px-8 py-6">
            <p className="font-semibold">Trustpilot</p>
            <p className="mt-2">★★★★★</p>
            <p className="text-sm text-gray-600 mt-1">
              4.5 Stars · 443 Reviews
            </p>
          </div>

          <div className="bg-[#FBF7EF] rounded-xl px-8 py-6 hover:border-orange-300 border hover:shadow-md">
            <p className="font-semibold">Google</p>
            <p className="mt-2">★★★★★</p>
            <p className="text-sm text-gray-600 mt-1">
              4.6 Stars · 133 Reviews
            </p>
          </div>

          <button className="text-gray-600 font-medium hover:text-orange-500">
            <Link to="/testimonials">More testimonials →</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
