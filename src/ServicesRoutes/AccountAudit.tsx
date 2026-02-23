import AuditBenefitsSection from "@/components/AuditBenefitsSection";
import AuditFeatureCard from "@/components/AuditFeatureCard";
import CommonHeading from "@/components/CommonHeading";
import { accountAuditData, auditFeatures } from "@/constants/content";
import { Link } from "react-router-dom";

const AccountAudit = () => {
  const { description, heading, auditList, imgSrc } = accountAuditData;
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 justify-center md:grid-cols-2 gap-12 py-20 mx-auto md:px-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-semibold">{heading}</h1>
          {/* <p className="font-semibold">{title}</p> */}
          <p className="text-md max-w-3xl font-light">{description}</p>
          <ul className=" flex flex-col gap-2 mt-4">
            {auditList.map((auditData, index) => {
              const { icon: Icon, audit } = auditData;
              return (
                <li
                  key={index}
                  className="flex justify-start items-center gap-2"
                >
                  <Icon className="text-green-600 font-bold" />
                  <span className="text-sm">{audit}</span>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#FFD200] hover:bg-green-500 hover:text-white hover:underline transition-colors text-black font-bold py-3 px-8 rounded-full w-fit text-sm mt-2">
            <Link to="/contact">Get an Account Audit</Link>
          </button>
        </div>
        <div className="w-3/2 overflow-hidden">
          <img src={imgSrc} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Audit Benifit Section */}
      <div className="w-full px-12 py-12 md:px-16">
        <AuditBenefitsSection />
      </div>

      {/* Heading */}
      <CommonHeading
        heading={"Enhance overall performance"}
        description={
          "An Amazon account audit reviews your seller account to optimize performance, ensure compliance, and maximize sales while preventing costly issues."
        }
      />
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {auditFeatures.map((feature) => {
            const { id, title, description, imgSrc } = feature;
            return (
              <AuditFeatureCard
                key={id}
                title={title}
                description={description}
                imgSrc={imgSrc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccountAudit;
