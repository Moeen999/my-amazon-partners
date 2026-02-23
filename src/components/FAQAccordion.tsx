import { brandGlFaqData, faqData, homeFaqData } from "@/constants/content";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { useLocation } from "react-router-dom";

const FAQAccordion = () => {
  const { pathname } = useLocation();
  const [openId, setOpenId] = useState(null); // Pehla wala open rakha hai as per image

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
            : homeFaqData.mainHeading}
      </h2>

      <div className="border-t border-gray-200">
        {(pathname === "/services/design"
          ? faqData.questions
          : pathname === "/services/design/amazon-brand-guidelines"
            ? brandGlFaqData.questions
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
