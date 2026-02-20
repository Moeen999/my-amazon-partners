interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

const AuditFeatureCard = ({ title, description, imgSrc }: Props) => {
  return (
    <div className="border rounded-tr-xl border-zinc-500 bg-white p-8 flex flex-col">
      <img src={imgSrc} alt="" className="mb-6 w-12 h-12" />
      <h3 className="text-xl font-semibold text-foreground leading-snug">
        {title}
      </h3>
      <div className="my-4 h-px w-full bg-border" />
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AuditFeatureCard;
