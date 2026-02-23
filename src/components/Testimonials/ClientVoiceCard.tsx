

const ClientVoiceCard = ({ review }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[24px] p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Brand Name with Custom Coloring */}
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-baseline">
        {review.brandName === "NatureBrand" ? (
          <>Nature<span className="text-[#F1A529]">Brand</span></>
        ) : review.brandName === "Koala+" ? (
          <>Koala<span className="text-[#F1A529]">+</span></>
        ) : review.brandName === "Pet&Horse" ? (
          <>Pet<span className="text-[#F1A529]">&</span>Horse</>
        ) : (
          review.brandName
        )}
      </h3>

      {/* Quote */}
      <div className="flex-grow mb-10">
        <p className="text-gray-500 text-[15px] leading-relaxed italic">
          <span className="text-[#F1A529] text-xl font-serif mr-1">"</span>
          {review.quote}
          <span className="text-[#F1A529] text-xl font-serif ml-1">"</span>
        </p>
      </div>

      {/* Footer: Author & Stars */}
      <div className="pt-6 border-t border-gray-50 flex justify-between items-end">
        <div>
          <h4 className="font-bold text-sm text-gray-900 mb-1">{review.author}</h4>
          <p className="text-[11px] text-gray-400 font-medium tracking-tight">{review.role}</p>
        </div>
        <div className="flex text-[#F1A529] text-[10px]">
          {"★".repeat(review.stars)}
        </div>
      </div>
    </div>
  );
};

export default ClientVoiceCard;