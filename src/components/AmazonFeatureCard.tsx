import { amazonFeatureCards } from "@/constants/content";

const AmazonFeatureCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {amazonFeatureCards.map((data, index) => {
        const { heading, description, imgSrc } = data;
        return (
          <div
            key={index}
            className="border border-gray-300 p-8 flex flex-col items-start rounded-tr-[20px]"
          >
            <div className="mb-6 h-12 w-12 flex items-center justify-center">
              <div className="w-12 h-12 rounded-sm relative">
                <img src={imgSrc} alt="" />
              </div>
            </div>

            <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-4 leading-tight">
              {heading}
            </h3>

            {/* Separator Line */}
            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

            <p className="text-[14px] leading-[1.6] text-gray-600 font-medium">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AmazonFeatureCard;
