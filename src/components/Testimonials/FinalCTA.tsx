import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <div className="bg-[#FCFAF7] w-full py-24 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-8 tracking-tight">
          Want to be our next{" "}
          <span className="text-[#F1A529] italic">success story?</span>
        </h2>

        {/* Sub-description */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Contact us to get started with a free strategy call and discover{" "}
          <br className="hidden md:block" />
          how we can help you grow on Amazon.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            to="/contact"
            className="bg-[#F1A529] hover:bg-[#d99421] text-[#1A1A1A] font-bold py-5 px-10 rounded-full transition-all duration-300 flex items-center group shadow-sm"
          >
            Contact Us to Get Started
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          {/* Secondary Button */}
          <Link
            to="/services"
            className="bg-transparent hover:bg-gray-50 text-[#1A1A1A] font-bold py-5 px-10 rounded-full border border-gray-200 transition-all duration-300"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
