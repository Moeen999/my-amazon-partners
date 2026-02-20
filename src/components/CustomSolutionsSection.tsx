import { customSolutionsContent } from "@/constants/content";

const CustomSolutionsSection = () => {
  const { heading, subheading, points, rightSide } =
    customSolutionsContent;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            {heading}
          </h2>

          <p className="text-muted-foreground mb-4 max-w-2xl">
            {subheading}
          </p>

          <div className="space-y-2">
            {points.map((item) => (
                <div key={item.id}>
                <h4 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src={rightSide.imgSrc}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>

          <h4 className="font-semibold text-foreground mb-2">
            {rightSide.title}
          </h4>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {rightSide.description}
          </p>
        </div>
      </div>

      <div className="mt-24 h-px w-full bg-border" />
              </>
  );
};

export default CustomSolutionsSection;
