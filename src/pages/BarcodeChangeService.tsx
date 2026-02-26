import CommonHeader from "@/components/CommonHeader";
import CommonHeading from "@/components/CommonHeading";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import {
  barcodeChangeIssuesCardsData as cardsData,
  barcodeChangeServiceHeroData as heroData, barcodeChangeServiceInfoCards as infoCards
} from "@/constants/content";

const BarcodeChangeService = () => {
  return (
    <div className="w-full px-4 md:px-20 py-4 md:py-12">
      <CommonHeader content={heroData} />
      <hr className="h-[1px] bg-zinc-300 m-12" />

      <CommonHeading
        heading={"Your ASINs might be at risk​"}
        description={
          "Amazon has started taking down listings without GS1 certified barcodes in the listing. Make the switch now to avoid lost sales and other interruptions to your Amazon business."
        }
      />

      <div className="w-full md:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-12">
          {cardsData.map((data, index) => {
            const { title, description, image } = data;
            return (
              <ServiceCard
                key={index}
                title={title}
                imgSrc={image}
                description={description}
              />
            );
          })}
        </div>
      </div>
      <hr className="h-[1px] bg-zinc-300 m-12" />

      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {infoCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {card.description}
            </p>

            {card.list.length > 0 && (
              <ul className="text-left space-y-3 mb-6">
                {card.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-green-600 mt-1">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.note && (
              <p className="text-xs text-gray-500">{card.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>

    <FAQAccordion/>
    </div>
  );
};

export default BarcodeChangeService;
