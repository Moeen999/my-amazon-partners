const AdServiceCard = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col text-left space-y-4">
      {/* Icon Area */}
      <img
        src={imgSrc}
        alt=""
        className="w-12 h-12 flex items-center justify-start"
      />

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>

      {/* Thin Divider Line */}
      <hr className="border-gray-200 w-full" />

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default AdServiceCard;
