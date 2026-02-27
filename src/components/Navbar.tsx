import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "./ArrowIcon";

const topNav = [{ label: "Contact Us", path: "/contact" }];

const bottomNav = [
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "About Us", path: "/about" },
  { label: "Coaching", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Mobile states
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !servicesButtonRef.current?.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedSection(null);
    setMobileServicesExpanded(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border font-sans">
      {/* Top bar */}
      <div className="border-b border-border bg-white">
        <div className="container-main flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-red-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
            </div>
            <span
              className="text-xl font-heading font-bold ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              My Amazon Partners
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {topNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="sm">
              <Link to="/contact">Get a Free Audit</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* DESKTOP BOTTOM NAV */}
      <div className="hidden md:block relative bg-white">
        <div className="container-main flex items-center gap-8 px-4 h-12">
          {bottomNav.map((item) =>
            item.hasDropdown ? (
              <button
                ref={servicesButtonRef}
                key={item.label}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium hover:text-accent"
              >
                Services <ChevronDown size={16} />
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium hover:text-accent ${location.pathname === item.path ? "text-accent" : "text-foreground"}`}
              >
                {item.label}
              </Link>
            ),
          )}
          {/* <Link
            to="/contact"
            className="text-sm font-medium text-red-accent ml-auto"
          >
            Free Audit
          </Link> */}
        </div>

        {/* DESKTOP MEGA DROPDOWN */}
        {servicesOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 w-full bg-white border-t-[4px] border-orange-500 shadow-2xl z-50"
          >
            <div className="container-main px-8 py-10 grid grid-cols-4 text-sm text-gray-800">
              {/* Column 1: Main Management */}
              <div className="space-y-4 pr-6 border-r border-dashed">
                {[
                  {
                    title: "Full service management",
                    link: "/services/full-service-management",
                  },
                  {
                    title: "Advertising (PPC) management",
                    link: "/services/advertising-management",
                  },
                  { title: "Amazon SEO", link: "/services/amazon-seo" },
                  {
                    title: "Amazon account audit",
                    link: "/services/amazon-account-audit",
                  },
                  { title: "All services", link: "/services" },
                  {
                    title: "Consulting",
                    link: "/services/amazon-brand-growth-consulting",
                  },
                  { title: "Book a coaching call", link: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-2 rounded-md transition-colors"
                  >
                    <ArrowIcon /> <p className="font-bold">{item.title}</p>
                  </Link>
                ))}
              </div>

              {/* Column 2: Design */}
              <div className="space-y-3 px-6 border-r border-dashed">
                <Link
                  to="/services/design"
                  className="flex items-center gap-3 font-bold mb-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <ArrowIcon /> Design
                </Link>
                {[
                  {
                    title: "Brand guidelines",
                    link: "/services/design/amazon-brand-guidelines",
                  },
                  {
                    title: "Brand story",
                    link: "/services/design/amazon-brand-story",
                  },
                  {
                    title: "Brand store",
                    link: "/services/design/amazon-brand-store",
                  },
                  {
                    title: "Listing images",
                    link: "/services/design/listing-images-design",
                  },
                  {
                    title: "Enhanced brand content A+",
                    link: "/services/design/amazon-enhanced-brand-a-plus-content",
                  },
                  {
                    title: "Main image CTR hack",
                    link: "/services/design/amazon-main-image-ctr-upgrade",
                  },
                  {
                    title: "Listing optimization",
                    link: "/services/listing-optimization",
                  },
                  {
                    title: "Full listing optimization",
                    link: "/services/listing-optimization/end-to-end-listing",
                  },
                ].map((sub) => (
                  <Link
                    key={sub.title}
                    to={sub.link}
                    onClick={() => setServicesOpen(false)}
                    className="block pl-8 py-1 hover:underline text-zinc-600 hover:text-black"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>

              {/* Column 3: Troubleshooting */}
              <div className="space-y-3 px-6 border-r border-dashed">
                <Link
                  to="/services/other-services/amazon-troubleshooting"
                  className="flex items-center gap-3 font-bold mb-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <ArrowIcon /> Troubleshooting
                </Link>
                {[
                  {
                    title: "Listing reinstatement",
                    link: "/services/account-suspension-reinstatement/amazon-listing-reinstatement",
                  },
                  {
                    title: "Account suspension",
                    link: "/services/account-suspension-reinstatement",
                  },
                  {
                    title: "PPC Advertising audit",
                    link: "/services/other-services/advertising-audit",
                  },
                  {
                    title: "Brand name change",
                    link: "/services/listing-optimization/amazon-brand-name-change",
                  },
                  {
                    title: "Troubleshooting hours",
                    link: "/services/other-services/amazon-troubleshooting",
                  },
                  {
                    title: "UPC to GS1 change",
                    link: "/services/listing-optimization/listing-optimization/upc-change-gs1-amazon",
                  },
                ].map((sub) => (
                  <Link
                    key={sub.title}
                    to={sub.link}
                    onClick={() => setServicesOpen(false)}
                    className="block pl-8 py-1 hover:underline text-zinc-600 hover:text-black"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>

              {/* Column 4: Others */}
              <div className="space-y-3 pl-6">
                <Link
                  to="/services/other-services"
                  className="flex items-center gap-3 font-bold mb-2 p-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <ArrowIcon /> Other Services
                </Link>
                {[
                  { title: "Amazon DSP", link: "/amazon-dsp" },
                  {
                    title: "Trademark registration",
                    link: "/services/trademark-registration",
                  },
                  {
                    title: "Vendor Central full service",
                    link: "/services/other-services/vendor-central",
                  },
                  {
                    title: "Walmart Account Audit",
                    link: "/services/other-services/walmart-account-audit",
                    isNew: true,
                  },
                  {
                    title: "Walmart Advertising Audit",
                    link: "/services/other-services/walmart-advertising-audit",
                    isNew: true,
                  },
                ].map((sub) => (
                  <Link
                    key={sub.title}
                    to={sub.link}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 pl-8 py-1 hover:underline text-zinc-600 hover:text-black"
                  >
                    {sub.title}{" "}
                    {sub.isNew && (
                      <span className="text-red-500 text-[10px] font-bold">
                        NEW
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU (FULL ROUTES INTEGRATED) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-[60] overflow-y-auto pb-32">
          <div className="flex flex-col">
            {bottomNav.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileServicesExpanded(!mobileServicesExpanded)
                      }
                      className="w-full flex justify-between items-center px-6 py-5 text-lg font-bold text-gray-900"
                    >
                      {item.label}{" "}
                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${mobileServicesExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileServicesExpanded && (
                      <div className="bg-zinc-50 transition-all animate-in slide-in-from-top-2 duration-300">
                        {/* Management Section */}
                        <div className="px-6 py-2 space-y-4 border-b border-zinc-200 pb-4">
                          <Link
                            to="/services/full-service-management"
                            onClick={closeMobile}
                            className="block font-semibold"
                          >
                            Full service management
                          </Link>
                          <Link
                            to="/services/advertising-management"
                            onClick={closeMobile}
                            className="block font-semibold"
                          >
                            Advertising (PPC) management
                          </Link>
                          <Link
                            to="/services/amazon-seo"
                            onClick={closeMobile}
                            className="block font-semibold"
                          >
                            Amazon SEO
                          </Link>
                          <Link
                            to="/services/amazon-account-audit"
                            onClick={closeMobile}
                            className="block font-semibold"
                          >
                            Full account audit
                          </Link>
                        </div>

                        {/* DESIGN ACCORDION */}
                        <div className="border-b border-zinc-200">
                          <button
                            onClick={() => toggleSection("design")}
                            className="w-full flex justify-between items-center px-8 py-4 font-bold text-zinc-800"
                          >
                            Design{" "}
                            {expandedSection === "design" ? (
                              <Minus size={20} className="text-orange-500" />
                            ) : (
                              <Plus size={20} className="text-orange-500" />
                            )}
                          </button>
                          {expandedSection === "design" && (
                            <div className="pl-12 pr-6 pb-6 space-y-4 text-[15px] text-zinc-600 animate-in fade-in duration-300">
                              <Link
                                to="/services/design"
                                onClick={closeMobile}
                                className="block font-medium text-black"
                              >
                                Design Overview
                              </Link>
                              <Link
                                to="/services/design/amazon-brand-guidelines"
                                onClick={closeMobile}
                                className="block"
                              >
                                Brand guidelines
                              </Link>
                              <Link
                                to="/services/design/amazon-brand-story"
                                onClick={closeMobile}
                                className="block"
                              >
                                Brand story
                              </Link>
                              <Link
                                to="/services/design/amazon-brand-store"
                                onClick={closeMobile}
                                className="block"
                              >
                                Brand store
                              </Link>
                              <Link
                                to="/services/design/listing-images-design"
                                onClick={closeMobile}
                                className="block"
                              >
                                Listing images
                              </Link>
                              <Link
                                to="/services/design/amazon-enhanced-brand-a-plus-content"
                                onClick={closeMobile}
                                className="block"
                              >
                                Enhanced brand content A+
                              </Link>
                              <Link
                                to="/services/design/amazon-main-image-ctr-upgrade"
                                onClick={closeMobile}
                                className="block"
                              >
                                Main image CTR hack
                              </Link>
                              <Link
                                to="/services/listing-optimization"
                                onClick={closeMobile}
                                className="block"
                              >
                                Listing optimization
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* TROUBLESHOOTING ACCORDION */}
                        <div className="border-b border-zinc-200">
                          <button
                            onClick={() => toggleSection("trouble")}
                            className="w-full flex justify-between items-center px-8 py-4 font-bold text-zinc-800"
                          >
                            Troubleshooting{" "}
                            {expandedSection === "trouble" ? (
                              <Minus size={20} className="text-orange-500" />
                            ) : (
                              <Plus size={20} className="text-orange-500" />
                            )}
                          </button>
                          {expandedSection === "trouble" && (
                            <div className="pl-12 pr-6 pb-6 space-y-4 text-[15px] text-zinc-600 animate-in fade-in duration-300">
                              <Link
                                to="/services/account-suspension-reinstatement/amazon-listing-reinstatement"
                                onClick={closeMobile}
                                className="block"
                              >
                                Listing reinstatement
                              </Link>
                              <Link
                                to="/services/account-suspension-reinstatement"
                                onClick={closeMobile}
                                className="block"
                              >
                                Account suspension
                              </Link>
                              <Link
                                to="/services/other-services/advertising-audit"
                                onClick={closeMobile}
                                className="block"
                              >
                                PPC Advertising audit
                              </Link>
                              <Link
                                to="/services/listing-optimization/amazon-brand-name-change"
                                onClick={closeMobile}
                                className="block"
                              >
                                Brand name change
                              </Link>
                              <Link
                                to="/services/other-services/amazon-troubleshooting"
                                onClick={closeMobile}
                                className="block"
                              >
                                Troubleshooting hours
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* OTHER SERVICES ACCORDION */}
                        <div className="border-b border-zinc-200">
                          <button
                            onClick={() => toggleSection("other")}
                            className="w-full flex justify-between items-center px-8 py-4 font-bold text-zinc-800"
                          >
                            Other Services{" "}
                            {expandedSection === "other" ? (
                              <Minus size={20} className="text-orange-500" />
                            ) : (
                              <Plus size={20} className="text-orange-500" />
                            )}
                          </button>
                          {expandedSection === "other" && (
                            <div className="pl-12 pr-6 pb-6 space-y-4 text-[15px] text-zinc-600 animate-in fade-in duration-300">
                              <Link
                                to="/amazon-dsp"
                                onClick={closeMobile}
                                className="block"
                              >
                                Amazon DSP
                              </Link>
                              <Link
                                to="/services/trademark-registration"
                                onClick={closeMobile}
                                className="block"
                              >
                                Trademark registration
                              </Link>
                              <Link
                                to="/services/other-services/vendor-central"
                                onClick={closeMobile}
                                className="block"
                              >
                                Vendor Central full service
                              </Link>
                              <Link
                                to="/services/other-services/walmart-account-audit"
                                onClick={closeMobile}
                                className="block flex items-center gap-2"
                              >
                                Walmart Account Audit{" "}
                                <span className="text-red-500 font-bold text-[10px]">
                                  NEW
                                </span>
                              </Link>
                              <Link
                                to="/services/other-services/walmart-advertising-audit"
                                onClick={closeMobile}
                                className="block flex items-center gap-2"
                              >
                                Walmart Advertising Audit{" "}
                                <span className="text-red-500 font-bold text-[10px]">
                                  NEW
                                </span>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMobile}
                    className="block px-6 py-5 text-lg font-bold text-gray-900 border-b border-zinc-100"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            {/* TopNav Items */}
            {topNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMobile}
                className="block px-6 py-5 text-lg font-bold text-gray-900 border-b border-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="p-6 mt-4">
              <Button
                asChild
                variant="cta"
                className="w-full py-7 text-xl shadow-lg"
              >
                <Link to="/contact" onClick={closeMobile}>
                  Get a Free Audit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
