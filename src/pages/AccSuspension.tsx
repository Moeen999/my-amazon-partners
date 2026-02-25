import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import {
  accSuspensionsCardData as cardData,
  accountSusReinstData as heroData,
  reinstatementContent,
} from "@/constants/content";

const AccSuspension = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <div className="w-full flex flex-col md:flex-row gap-2 px-4 md:px-20 py-4 md:py-12">
        <CommonHeader content={heroData} />
        <div className="flex flex-col gap-3 w-full md:w-1/2 mt-4">
          <h4 className="">
            We are not limited to these issues and can assist with any
            suspension type.
          </h4>
          <p>
            MPORTANT: We provide third-party assistance for the reinstatement of
            deactivated Amazon Seller Central Accounts. Please be aware, account
            reactivation relies solely on Amazon’s instructions. If no guidance
            for reinstatement is provided by Amazon, there will be no pathway to
            reactivate the account.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto my-12 overflow-hidden rounded-[24px] flex flex-col md:flex-row shadow-2xl">
        {/* Left Side: Dark Content Area */}
        <div className="bg-[#2D2D2D] text-white p-10 md:p-16 flex-[1.5] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {reinstatementContent.title}
          </h2>

          <p className="text-zinc-300 text-[15px] leading-relaxed mb-8">
            {reinstatementContent.description}
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-10">
            {reinstatementContent.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[14px] text-zinc-100"
              >
                <span className="text-green-500 mt-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <p className="font-semibold text-zinc-100 border-b border-zinc-600 pb-4 inline-block">
              {reinstatementContent.guarantee}
            </p>

            <div className="flex items-center gap-2 text-amber-500 font-bold cursor-pointer hover:underline text-sm uppercase tracking-wide">
              <span className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center text-[10px]">
                ❯
              </span>
              Frequently asked questions
            </div>
          </div>
        </div>

        <div className="bg-[#FFD700] p-12 md:p-16 flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)",
              backgroundSize: "4px 4px",
            }}
          ></div>

          <div className="relative z-10 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                {reinstatementContent.statsTitle}
              </h3>
              <p className="text-zinc-800 text-sm font-medium">
                {reinstatementContent.statsSubtitle}
              </p>
            </div>

            <div className="space-y-10">
              {reinstatementContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className={
                    index !== reinstatementContent.stats.length - 1
                      ? "border-b border-black/10 pb-8"
                      : ""
                  }
                >
                  <div className="text-5xl font-black text-zinc-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-zinc-800">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CommonHeading
        heading={"Expert help for tough Amazon issues"}
        description={
          "Get reliable support to keep your Amazon account compliant and selling uninterruptedly."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {cardData.map((data, index) => {
            const { title, description, image } = data;
            return (
              <ServiceCard
                key={index}
                title={title}
                imgSrc={image}
                description={description}
              />
            );
          })}
        </div>
      </div>

      <FAQAccordion/>
    </div>
  );
};

export default AccSuspension;
