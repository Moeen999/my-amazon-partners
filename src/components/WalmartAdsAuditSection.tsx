import { walmartAdsAuditContent } from "@/constants/content";

const WalmartAdsAuditSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">
              {walmartAdsAuditContent.mainTitle}
            </h2>
            <p className="text-zinc-600 text-[16px] leading-relaxed max-w-2xl">
              {walmartAdsAuditContent.mainDescription}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-900">
                {walmartAdsAuditContent.positiveAudit.title}
              </h3>
              <p className="text-zinc-500 text-[14px]">
                {walmartAdsAuditContent.positiveAudit.subtitle}
              </p>
            </div>
            <ul className="space-y-3">
              {walmartAdsAuditContent.positiveAudit.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#34C759] mt-1 flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-zinc-700 text-[15px]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-900">
                {walmartAdsAuditContent.negativeAudit.title}
              </h3>
              <p className="text-zinc-500 text-[14px]">
                {walmartAdsAuditContent.negativeAudit.subtitle}
              </p>
            </div>
            <ul className="space-y-3">
              {walmartAdsAuditContent.negativeAudit.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#FF3B30] mt-1 flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M12 8v4M12 16h.01"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <span className="text-zinc-700 text-[15px]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px]">
            <img
              src="/walmartAdAuditImages/seller.png"
              alt="Walmart Seller Central PPC Audit Mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalmartAdsAuditSection;
