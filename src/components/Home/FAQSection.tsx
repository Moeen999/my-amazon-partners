import React from "react";
import FAQAccordion from "../FAQAccordion";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqLeftContent = {
    label: "— FAQ",
    titleStart: "Frequently",
    titleAccent: "asked questions.",
    description:
      "Everything you need to know about working with our Amazon agency. Can't find the answer?",
    buttonText: "Talk to us directly",
  };

  return (
    <section className="bg-[#FBF7EF] px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div>
          <span className="text-sm tracking-widest text-orange-500 font-semibold">
            {faqLeftContent.label}
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-[#1A1A1A] leading-tight">
            {faqLeftContent.titleStart}{" "}
            <span className="font-serif italic text-orange-500">
              {faqLeftContent.titleAccent}
            </span>
          </h2>

          <p className="mt-6 max-w-md text-gray-600 text-lg">
            {faqLeftContent.description}
          </p>

          <button className="mt-10 bg-[#F5A623] text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-yellow-400/90 transition">
            <Link to="/contact">
            {faqLeftContent.buttonText}
            </Link>
            <span>→</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
