import ArrowIcon from "./ArrowIcon";

const AccordionItem = ({ item, isOpen, onClick, items }) => {
  const { question, description } = item;
  return (
    <div className="border-b border-gray-200 w-full">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center py-5 px-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-[#E5E5E5]" : "bg-white hover:bg-gray-50"
        }`}
      >
        <span
          className={`text-[15px] font-semibold ${isOpen ? "text-black" : "text-gray-800"}`}
        >
          {question}
        </span>
        <span className="text-xl font-bold ml-4">
          {isOpen ? (
            <span className="text-black text-2xl leading-none">−</span>
          ) : (
            <span className="text-[#F1A529] text-2xl leading-none">+</span>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-height-auto py-6 px-8" : "max-height-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <ul className=" md:mt-4 flex flex-col gap-2">
          {items &&
            items.map((item, index) => {
              return (
                <li
                  className="flex gap-1 md:gap-2 justify-start items-center"
                  key={index}
                >
                  <span className="hidden md:block">
                    <ArrowIcon />
                  </span>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AccordionItem;
