import { aiExplanationButtons } from "@/constants/content";
import AIAskButton from "./AiAskButton";


const WhyBestAgency = () => {
  return (
    <section className="container-main py-24 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why is My Amazon Partners the best Full Service Agency?
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-muted-foreground mb-12">
        Let ChatGPT, Claude, and Perplexity explain why brands choose My Amazon Partners.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {aiExplanationButtons.map((btn) => (
          <AIAskButton
            key={btn.id}
            label={btn.label}
            imgSrc={btn.imageSrc}
            href={btn.href}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyBestAgency;
