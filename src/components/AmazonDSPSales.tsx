import { amazonDspSalesContent } from "@/constants/content";

const AmazonDSPSales = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          {amazonDspSalesContent.heading}
        </h2>
        <p className="text-gray-600 max-w-3xl">{amazonDspSalesContent.intro}</p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left column */}
        <div className="space-y-16">
          {amazonDspSalesContent.left.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {section.description}
              </p>

              {section.bulletsIntro && (
                <p className="text-gray-700 font-medium mb-4">
                  {section.bulletsIntro}
                </p>
              )}

              <ul className="space-y-3">
                {section.bullets.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-16 border-l pl-12">
          {amazonDspSalesContent.right.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {section.description}
              </p>

              {section.bulletsIntro && (
                <p className="text-gray-700 font-medium mb-4">
                  {section.bulletsIntro}
                </p>
              )}

              <ul className="space-y-3">
                {section.bullets.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazonDSPSales;
