import { useLocation } from "react-router-dom";

const SplitTestimonialSection = () => {
  const { pathname } = useLocation();
  return (
    <section className="w-full min-h-screen md:h-auto flex flex-col md:flex-row rounded-3xl">
      <div className="md:w-2/4 w-full bg-yellow-400 px-10 py-16 flex flex-col justify-between">
        <div
          className={`${pathname === "/services/advertising-management" && "flex flex-col gap-8 relative top-16"}`}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
            {pathname === "/services/advertising-management"
              ? "MAP Ads - PPC advertising upgrade"
              : "We do the heavy lifting so you can take it light and easy "}
          </h1>

          <p className="mt-6 text-black/80 max-w-md">
            {pathname === "/services/advertising-management"
              ? "We’re excited to introduce our enhanced advertising management service."
              : "With over 500 employees, we can lift a lot off of your business’s shoulders."}
          </p>

          <p className="mt-4 text-black/80 max-w-md">
            {pathname === "/services/advertising-management"
              ? "By combining proven strategies with advanced macros, we optimize your Amazon PPC campaigns more efficiently and frequently, delivering comprehensive updates that drive results—all while keeping costs under control."
              : "Amazon is not set and forget – there will always be competition, and policies are constantly changing."}
          </p>
        </div>

        <div className="mb-10">
          {pathname !== "/services/advertising-management" && (
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-sm">
              Request for a quote
            </button>
          )}
          {pathname !== "/services/advertising-management" && (
            <p className="mt-6 text-sm text-black/70 max-w-sm">
              Start simple – Get a FREE listing audit where we check your
              listing and suggest improvements.
            </p>
          )}
        </div>
      </div>

      <div className="md:w-3/4 w-full relative min-h-[320px] md:min-h-0">
        <img
          src={`${pathname === "/services/advertising-management" ? "/ppcImages/magadsimage.png" : "/chinookLogo.png"}`}
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/20" />

        {pathname !== "/services/advertising-management" && (
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 text-white">
            <h2 className="text-3xl md:text-5xl font-light leading-snug max-w-2xl">
              “We do what we do best, they take care of Amazon”
            </h2>

            <p className="mt-6 text-sm opacity-90">
              Mark Pettyjohn
              <br />
              Chief Seed Enthusiast, Chinook Seedery
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitTestimonialSection;
