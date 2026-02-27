import {
  brandGlFaqData,
  bsFaqData,
  faqData,
  homeFaqData,
  brandShowcaseFaqData,
  listingImagesFaqData1,
  enhancedContentFaqData,
  listingOptFaqData,
  tsFaqsData,
  reInstFaqsData,
  accSuspensionFaqData,
  advertisingAuditFaqData,
  amazonBrandNameChangeFaqsData,
  barcodeChangeServiceFaqsData,
  otherServicesFaqsData,
  amazonDspFaqsdata,
  trademarkRegFaqsData,
  vendroCentralFaqsData,
  walmartAccAuditFaqsData,
} from "@/constants/content";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Link, useLocation } from "react-router-dom";

const FAQAccordion = () => {
  const { pathname } = useLocation();
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight">
        {pathname === "/services/design"
          ? faqData.mainHeading
          : pathname === "/services/design/amazon-brand-guidelines"
            ? brandGlFaqData.mainHeading
            : pathname === "/services/design/amazon-brand-story"
              ? bsFaqData.mainHeading
              : pathname === "/services/design/amazon-brand-store"
                ? brandShowcaseFaqData.mainHeading
                : pathname === "/services/design/listing-images-design"
                  ? listingImagesFaqData1.mainHeading
                  : pathname ===
                      "/services/design/amazon-enhanced-brand-a-plus-content"
                    ? enhancedContentFaqData.mainHeading
                    : pathname === "/services/listing-optimization"
                      ? listingOptFaqData.mainHeading
                      : pathname ===
                          "/services/other-services/amazon-troubleshooting"
                        ? tsFaqsData.mainHeading
                        : pathname ===
                            "/services/account-suspension-reinstatement/amazon-listing-reinstatement"
                          ? reInstFaqsData.mainHeading
                          : pathname ===
                              "/services/account-suspension-reinstatement"
                            ? accSuspensionFaqData.mainHeading
                            : pathname ===
                                "/services/other-services/advertising-audit"
                              ? advertisingAuditFaqData.mainHeading
                              : pathname ===
                                  "/services/listing-optimization/amazon-brand-name-change"
                                ? amazonBrandNameChangeFaqsData.mainHeading
                                : pathname ===
                                    "/services/listing-optimization/listing-optimization/upc-change-gs1-amazon"
                                  ? barcodeChangeServiceFaqsData.mainHeading
                                  : pathname === "/services/other-services"
                                    ? otherServicesFaqsData.mainHeading
                                    : pathname === "/amazon-dsp"
                                      ? amazonDspFaqsdata.mainHeading
                                      : pathname ===
                                          "/services/trademark-registration"
                                        ? trademarkRegFaqsData.mainHeading
                                        : pathname ===
                                            "/services/other-services/vendor-central"
                                          ? vendroCentralFaqsData.mainHeading : pathname ===
                                            "/services/other-services/walmart-account-audit"
                                          ? walmartAccAuditFaqsData.mainHeading
                                          : homeFaqData.mainHeading}
      </h2>
      <p className="m-6">
        Feel free to{" "}
        <Link
          to="/contact"
          className="underline transition-colors duration-300 hover:text-orange-400"
        >
          Contact Us{" "}
        </Link>
        for other questions or concerns.
      </p>
      <div className="border-t border-gray-200">
        {(pathname === "/services/design"
          ? faqData.questions
          : pathname === "/services/design/amazon-brand-guidelines"
            ? brandGlFaqData.questions
            : pathname === "/services/design/amazon-brand-story"
              ? bsFaqData.questions
              : pathname === "/services/design/amazon-brand-store"
                ? brandShowcaseFaqData.questions
                : pathname === "/services/design/listing-images-design"
                  ? listingImagesFaqData1.questions
                  : pathname ===
                      "/services/design/amazon-enhanced-brand-a-plus-content"
                    ? enhancedContentFaqData.questions
                    : pathname === "/services/listing-optimization"
                      ? listingOptFaqData.questions
                      : pathname ===
                          "/services/other-services/amazon-troubleshooting"
                        ? tsFaqsData.questions
                        : pathname ===
                            "/services/account-suspension-reinstatement/amazon-listing-reinstatement"
                          ? reInstFaqsData.questions
                          : pathname ===
                              "/services/account-suspension-reinstatement"
                            ? accSuspensionFaqData.questions
                            : pathname ===
                                "/services/other-services/advertising-audit"
                              ? advertisingAuditFaqData.questions
                              : pathname ===
                                  "/services/listing-optimization/amazon-brand-name-change"
                                ? amazonBrandNameChangeFaqsData.questions
                                : pathname ===
                                    "/services/listing-optimization/listing-optimization/upc-change-gs1-amazon"
                                  ? barcodeChangeServiceFaqsData.questions
                                  : pathname === "/services/other-services"
                                    ? otherServicesFaqsData.questions
                                    : pathname === "/amazon-dsp"
                                      ? amazonDspFaqsdata.questions
                                      : pathname ===
                                          "/services/trademark-registration"
                                        ? trademarkRegFaqsData.questions
                                        : pathname ===
                                            "/services/other-services/vendor-central"
                                          ? vendroCentralFaqsData.questions: pathname ===
                                            "/services/other-services/walmart-account-audit"
                                          ? walmartAccAuditFaqsData.questions
                                          : homeFaqData.questions
        ).map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            items={item.items}
            isOpen={openId === item.id}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
