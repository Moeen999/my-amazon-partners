import { auditBenefits } from "@/constants/content";

const AuditBenefitsSection = () => {
  return (
    <section className="w-full border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Center Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

          {auditBenefits.map((item) => (
            <div
              key={item.id}
              className={`${item.id === 1 ? "md:pr-12" : "md:pl-12"}`}
            >
              <h3 className="text-3xl font-semibold text-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6 max-w-xl">{item.description}</p>

              <ul className="space-y-3">
                {item.points.map((point) => {
                  const { icon: Icon, text } = point;
                  return (
                    <li
                      key={point.id}
                      className="flex justify-start items-center gap-3"
                    >
                      <Icon className="text-green-500 font-bold" />
                      <span className="text-gray-800">{point.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditBenefitsSection;
