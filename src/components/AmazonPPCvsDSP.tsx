import { amazonPpcVsDspContent } from "@/constants/content";

const AmazonPPCvsDSP = () => {
  const { heading, intro, left, right } = amazonPpcVsDspContent;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-3xl">{intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {left.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {left.description}
          </p>

          <p className="font-medium text-gray-800 mb-4">{left.listIntro}</p>

          <ol className="space-y-4 list-decimal list-inside">
            {left.list.map((item) => (
              <li key={item.id} className="text-sm text-gray-700">
                <span className="font-semibold">{item.title}</span> –{" "}
                {item.text}
              </li>
            ))}
          </ol>
        </div>

        <div className="border-l pl-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {right.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {right.description}
          </p>

          <p className="font-medium text-gray-800 mb-4">{right.listIntro}</p>

          <ol className="space-y-4 list-decimal list-inside">
            {right.list.map((item) => (
              <li key={item.id} className="text-sm text-gray-700">
                <span className="font-semibold">{item.title}</span> –{" "}
                {item.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AmazonPPCvsDSP;
