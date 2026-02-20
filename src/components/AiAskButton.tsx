interface AIAskButtonProps {
  label: string;
  imgSrc: string;
  href: string;
}

const AIAskButton = ({ label, imgSrc, href }: AIAskButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-foreground hover:bg-gray-200 transition"
    >
      <img
        src={imgSrc}
        alt={label}
        className="w-8 h-8 object-cover mix-blend-multiply"
      />
      {label}
    </a>
  );
};

export default AIAskButton;
