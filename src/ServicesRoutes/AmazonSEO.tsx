import AmazonFeatureCard from "@/components/AmazonFeatureCard";
import ArrowIcon from "@/components/ArrowIcon";
import CommonHeading from "@/components/CommonHeading";
import SeoServices from "@/components/SeoServices";
import { amazonFeatureCards, amazonSeoContent } from "@/constants/content";
import { Link } from "react-router-dom";

const AmazonSEO = () => {
  const { title, description, phaseList, phases, imgSrc } = amazonSeoContent;
  return (
    <div className="w-full py-8 md:py-12">
      {/* Hero section */}
      <section className="container grid grid-cols-1 justify-center md:grid-cols-2 gap-12 py-8 mx-auto md:px-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
          <p className="font-light">{description}</p>
          <ul>
            {phaseList.map((list, index) => {
              const { icon: Icon, phase } = list;
              return (
                <li
                  key={index}
                  className="flex justify-start items-center gap-2"
                >
                  <Icon className="text-green-600 text-sm font-semibold" />
                  <span className="font-light">{phase}</span>
                </li>
              );
            })}
          </ul>
          <p>{phases}</p>
          <div className="flex gap-2">
            <ArrowIcon />
            <Link to="/contact" className="cursor-pointer hover:underline">
              <b className="text-sm md:text-lg">
                Contact us to improve your Amazon SEO
              </b>
            </Link>
          </div>
        </div>
        {/* Image Container */}
        <div className="hidden md:block w-full relative min-h-[320px] md:min-h-0">
          <img src={imgSrc} alt="" />
        </div>
      </section>
      <hr />

      <div className="max-w-7xl mx-auto p-8 font-sans text-[#1a1a1a]">
        <SeoServices />
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <CommonHeading
          heading={"Win on Amazon, dominate Amazon SEO"}
          description={
            "Amazon’s complex SEO can be daunting, but it’s key to getting your products seen. With an effective Amazon SEO strategy, your listings will shine where customers are searching."
          }
        />
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <AmazonFeatureCard content={amazonFeatureCards} />
      </div>

      {/* Listing Section */}
      <div className="max-w-7xl mx-auto md:p-6 h-auto">
        <div className="w-full bg-yellow-400 flex flex-col md:flex-row justify-center items-center gap-2 h-full p-2 md:p-8 rounded-lg">
          <div className="w-3/4 text-start flex flex-col ">
            <h2 className="sm:lg: md:text-2xl tracking-wide font-semibold">
              Is your listing not shown in search results?
            </h2>
            <span className="text-sm">
              We deal with SEO problems like this everyday, and with over five
              years Amazon experience, you can bet we know how to fix it.
            </span>
            <li className="flex gap-2 justify-start items-center hover:underline mt-4">
              <ArrowIcon />
              <span className="font-semibold">Solve my Amazon problem</span>
            </li>
            <li className="flex gap-2 justify-start items-center hover:underline mt-4">
              <ArrowIcon />
              <span className="font-semibold">
                Get help with troubleshooting hours
              </span>
            </li>
          </div>
          <div className="hidden md:block w-1/2">
            <img src="/seoImages/listing.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonSEO;
