import { vendorCentralAmazonSEOContent } from "@/constants/content";
import { Link } from "react-router-dom";

const AmazonSEOSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            {vendorCentralAmazonSEOContent.title}
          </h2>

          <p className="text-zinc-600 text-[15px] leading-relaxed">
            {vendorCentralAmazonSEOContent.mainDescription}
          </p>

          {vendorCentralAmazonSEOContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">
                {section.heading}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {section.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-zinc-700 text-[14px] leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-zinc-800 font-medium pt-4">
            {vendorCentralAmazonSEOContent.footerText}
          </p>

          <div className="pt-4">
            <Link to="/contact" className="px-4 md:px-10 py-2 md:py-4 bg-[#FFD700] hover:bg-green-400 hover:text-white/90 font-bold rounded-full transition-all shadow-md">
              {vendorCentralAmazonSEOContent.btnText}
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative max-w-[500px]">
            <img
              src="/vendorCntralImages/amazonseo.png"
              alt="Amazon SEO Keyword Research Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonSEOSection;
