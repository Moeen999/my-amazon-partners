import { vendorCentralReportingContent } from "@/constants/content";
import { Link } from "react-router-dom";

const ReportingMonitoringSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            {vendorCentralReportingContent.title}
          </h2>

          <div className="space-y-6">
            <p className="text-zinc-600 text-[16px] leading-relaxed italic">
              {vendorCentralReportingContent.subHeading}
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-zinc-900">
                {vendorCentralReportingContent.monitoringTitle}
              </h3>
              <p className="text-zinc-600 text-[15px] leading-relaxed max-w-xl">
                {vendorCentralReportingContent.monitoringDescription}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#FFD700] hover:bg-[#F0C800] text-zinc-900 font-bold rounded-full transition-all shadow-md"
            >
              {vendorCentralReportingContent.btnText}
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[550px]">
            <img
              src="/vendorCntralImages/reporting.png"
              alt="Amazon Seller Central Reporting Dashboard and Growth Analytics"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingMonitoringSection;
