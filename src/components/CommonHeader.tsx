import ArrowIcon from "./ArrowIcon";

const CommonHeader = ({ content }) => {
  const {
    heading,
    subHeading,
    description,
    ctaText,
    checklist,
    rightImageSrc,
  } = content;
  return (
    <section className="w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-foreground leading-tight">
            {heading}
          </h1>

          {subHeading && (
            <p className="mt-2 font-semibold text-foreground">{subHeading}</p>
          )}

          {description && (
            <p className="mt-2 text-muted-foreground max-w-xl leading-relaxed">
              {description}
            </p>
          )}

          {checklist.length > 0 && (
            <ul className="mt-10 space-y-2">
              {checklist.map((item) => {
                const { href, icon: Icon, text } = item;
                return (
                  <a
                    href={`#${href}`}
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    {Icon ? (
                      <span className="text-green-600">
                        <Icon />
                      </span>
                    ) : (
                      <ArrowIcon />
                    )}
                    <span className="text-foreground text-sm">{text}</span>
                  </a>
                );
              })}
            </ul>
          )}
        </div>

        {rightImageSrc && (
          <div className="relative flex justify-center">
            <img
              src={rightImageSrc}
              alt=""
              className="w-full max-w-2xl object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CommonHeader;
