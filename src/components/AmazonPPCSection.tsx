import { vendorCentralPpcManagementContent as data } from "@/constants/content"
import { Link } from "react-router-dom"


const AmazonPPCSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            {data.title}
          </h2>
          
          <p className="text-zinc-600 text-[15px] leading-relaxed">
            {data.mainDescription}
          </p>

          {/* Expert Sections */}
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">
                {section.heading}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-zinc-700 text-[14px] leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-zinc-800 font-medium pt-4">
            {data.footerText}
          </p>

          {/* Yellow Action Button */}
          <div className="pt-4">
            <Link to="/contact" className="px-10 py-4 bg-[#FFD700] hover:bg-green-400 hover:text-white/90 font-bold rounded-full transition-all shadow-md">
              {data.btnText}
            </Link>
          </div>
        </div>

        {/* Right Side: Product Spotlight Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative group">            
            <div className="bg-white p-2 rounded-xl">
               <img 
                src="/vendorCntralImages/expertamazon.png" 
                alt="Amazon PPC Listing Example" 
                className="w-full max-w-[450px] h-auto object-contain rounded-lg"
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AmazonPPCSection
