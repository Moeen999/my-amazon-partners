import { seoPhasesData } from "@/constants/content";
import ArrowIcon from "./ArrowIcon";
import { Link } from "react-router-dom";

const SeoServices = () => {
  return (
    <>
      {/* Top Section (Phase 1) */}
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="md:w-1/2">
          <p className="font-bold text-sm mb-1">
            {seoPhasesData[0].phaseNumber}
          </p>
          <h2 className="text-4xl font-bold mb-4">
            {seoPhasesData[0].heading}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {/* <span className="font-bold">
              {seoPhasesData[0].description.split(".")[0]}.
            </span> */}
            {seoPhasesData[0].description.split(".").slice(1).join(".")}
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-start">
          <ul className="space-y-2 mb-6">
            {seoPhasesData[0].phaseList.map((item, idx) => {
              const { icon: Icon, text } = item;
              return (
                <li key={idx} className="flex items-start gap-2">
                  <Icon className="text-green-500 mt-1" />
                  <span className="text-[15px]">{text}</span>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#FFD200] hover:bg-green-500 hover:text-white hover:underline transition-colors text-black font-bold py-3 px-8 rounded-full w-fit text-sm">
            <Link to="/contact">
            Get Search Term Optimization
            </Link>
          </button>
        </div>
      </div>

      <hr className="border-gray-200 mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-12">
        {seoPhasesData.slice(1).map((phase, index) => (
          <div
            key={phase.id}
            className={`flex flex-col px-8 ${
              index !== 0 ? "md:border-l border-gray-200" : "pl-0"
            } ${
              index !== seoPhasesData.slice(1).length - 1
                ? "border-b md:border-b-0 pb-12 md:pb-0"
                : ""
            }`}
          >
            <p className="font-bold text-[11px] uppercase tracking-wider mb-2 text-gray-600">
              {phase.phaseNumber}
            </p>
            <h3 className="text-3xl font-bold mb-4 leading-tight tracking-tight">
              {phase.heading}
            </h3>
            <p className="text-[14px] leading-relaxed mb-6 text-gray-700">
              {phase.description}
            </p>

            {phase.phaseList.length > 0 && (
              <ul className="space-y-3 mb-8">
                {phase.phaseList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-sm font-bold">
                      ✔
                    </span>
                    <span className="text-[13.5px] leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#"
              className="mt-auto flex items-center gap-2 text-[13px] font-bold text-black hover:opacity-70 transition-opacity"
            >
              <ArrowIcon />
              More about {phase.phaseNumber}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeoServices;
