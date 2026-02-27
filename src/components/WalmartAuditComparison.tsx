import { walmartAccAuditComparisonContent } from "@/constants/content";
import React from "react";

const WalmartAuditComparison = () => {
  return (
    <section className="max-w-7xl py-16 px-8 bg-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900">
            {walmartAccAuditComparisonContent.success.title}
          </h3>
          <p className="text-zinc-600 text-[15px] leading-relaxed">
            {walmartAccAuditComparisonContent.success.description}
          </p>

          <ul className="space-y-3 pt-2">
            {walmartAccAuditComparisonContent.success.points.map(
              (point, index) => (
                <li key={index} className="flex items-start gap-3">
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
              ),
            )}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900">
            {walmartAccAuditComparisonContent.failure.title}
          </h3>
          <p className="text-zinc-600 text-[15px] leading-relaxed">
            {walmartAccAuditComparisonContent.failure.description}
          </p>

          <ul className="space-y-3 pt-2">
            {walmartAccAuditComparisonContent.failure.points.map(
              (point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FF3B30] mt-1 flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  </span>
                  <span className="text-zinc-700 text-[15px]">{point}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WalmartAuditComparison;
