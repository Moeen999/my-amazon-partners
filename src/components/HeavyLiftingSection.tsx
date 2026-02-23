import { Link } from "react-router-dom";

const HeavyLiftingSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-2 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden">

        {/* LEFT CONTENT */}
        <div className=" p-12 flex flex-col justify-between">
          <div>
            <p className="mt-0 md:mt-6 text-base text-zinc-600 max-w-md">
              Get your products seen and sold
            </p>
            <h2 className="text-4xl font-bold leading-tight text-black">
             Amazon advertising management
            </h2>


            <p className="md:mt-4 text-sm text-black/70 max-w-md">
              We build and manage PPC campaigns that convert without draining your budget. From pinpointing effective keywords to staying ahead of competitors, we make sure you get the most our of every ad dollar
            </p>

            <button className="mt-8 inline-flex items-center justify-center bg-yellow-400 text-black font-semibold px-8 py-2.5 rounded-full transition hover:bg-green-500 hover:text-white">
              <Link to="/contact">Let's talk results</Link>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (FULL FIT) */}
        <div className="relative w-full h-[420px]">
          <img
            src="/ppcImages/heroad.png"
            alt=""
            className="absolute inset-0 w-4/4 md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeavyLiftingSection;
