import CommonHeader from "@/components/CommonHeader";
import { ctrSectionContent, mainImageCtrData } from "@/constants/content";

const MainImageCtrUpgrade = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={mainImageCtrData} />
      <section className="max-w-7xl mx-auto py-16 px-6 font-sans bg-white">
        {/* Improvement 1 */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
            {ctrSectionContent.mainHeading}
          </h2>
          <p className="text-lg text-zinc-600 max-w-4xl leading-relaxed mb-10">
            {ctrSectionContent.subDescription}
          </p>

          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-zinc-900">
              {ctrSectionContent.productName}
            </h3>
            <p className="text-zinc-600 text-lg">
              {ctrSectionContent.improvementNote}
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
          <img
            src="/ctrImages/exImage1.png"
            alt="Manuka Oil Before and After CTR Comparison"
            className="w-3/4 h-3/4 object-cover"
          />
        </div>

        {/* Improvement 2 */}
        <div className="m-12">
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-zinc-900">
              Non-stick mat
            </h3>
            <p className="text-zinc-600 text-lg">
              Added 2 pack symbol, packaging, a microwave and keywords.
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
          <img
            src="/ctrImages/exImage2.png"
            alt="Manuka Oil Before and After CTR Comparison"
            className="w-3/4 h-3/4 object-cover"
          />
        </div>

         {/* Improvement 3 */}
        <div className="m-12">
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-zinc-900">
              Knee brace
            </h3>
            <p className="text-zinc-600 text-lg">
              Added packaging, a better model, and big emphasis on large size.
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
          <img
            src="/ctrImages/exImage3.png"
            alt="Manuka Oil Before and After CTR Comparison"
            className="w-3/4 h-3/4 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default MainImageCtrUpgrade;
