import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSkeleton from "@/components/PageSkeleton";

/* Lazy Pages */
const HomePage = lazy(() => import("@/pages/HomePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const DesignPage = lazy(() => import("./pages/DesignPage"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const Testimonials = lazy(() => import("./pages/Testimonials"));

/* Services */
const FullServiceManagement = lazy(
  () => import("./ServicesRoutes/FullServiceManagement"),
);
const PpcManagement = lazy(() => import("./ServicesRoutes/PpcManagement"));
const AmazonSEO = lazy(() => import("./ServicesRoutes/AmazonSEO"));
const AccountAudit = lazy(() => import("./ServicesRoutes/AccountAudit"));
const Consulting = lazy(() => import("./ServicesRoutes/Consulting"));

/* Design */
const BrandGuideLines = lazy(() => import("./pages/BrandGuideLines"));
const BrandStory = lazy(() => import("./pages/BrandStory"));
const BrandStore = lazy(() => import("./pages/BrandStore"));
const ListingImages = lazy(() => import("./pages/ListingImages"));
const EnhancedBrandContent = lazy(() => import("./pages/EnhancedBrandContent"));
const MainImageCtrUpgrade = lazy(() => import("./pages/MainImageCtrUpgrade"));

/* Listing & Other */
const ListingOptimizations = lazy(() => import("./pages/ListingOptimizations"));
const FullListingOptimizations = lazy(
  () => import("./pages/FullListingOptimizations"),
);
const TroubleShooting = lazy(() => import("./pages/TroubleShooting"));
const ListingReinstatement = lazy(() => import("./pages/ListingReinstatement"));
const AccSuspension = lazy(() => import("./pages/AccSuspension"));
const AdvertisingAudit = lazy(() => import("./pages/AdvertisingAudit"));
const BrandNameChange = lazy(() => import("./pages/BrandNameChange"));
const BarcodeChangeService = lazy(() => import("./pages/BarcodeChangeService"));
const OtherServices = lazy(() => import("./pages/OtherServices"));
const AmazonDsp = lazy(() => import("./pages/AmazonDsp"));
const TrademarkReg = lazy(() => import("./pages/TrademarkReg"));
const VendorCentral = lazy(() => import("./pages/VendorCentral"));
const WalmartAccAudit = lazy(() => import("./pages/WalmartAccAudit"));
const WalmartAdAudit = lazy(() => import("./pages/WalmartAdAudit"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1">
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route
                  path="/services/full-service-management"
                  element={<FullServiceManagement />}
                />
                <Route
                  path="/services/advertising-management"
                  element={<PpcManagement />}
                />
                <Route path="/services/amazon-seo" element={<AmazonSEO />} />
                <Route
                  path="/services/amazon-account-audit"
                  element={<AccountAudit />}
                />
                <Route
                  path="/services/amazon-brand-growth-consulting"
                  element={<Consulting />}
                />

                <Route path="/about" element={<AboutPage />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="/services/design" element={<DesignPage />} />
                <Route
                  path="/services/design/amazon-brand-guidelines"
                  element={<BrandGuideLines />}
                />
                <Route
                  path="/services/design/amazon-brand-story"
                  element={<BrandStory />}
                />
                <Route
                  path="/services/design/amazon-brand-store"
                  element={<BrandStore />}
                />
                <Route
                  path="/services/design/listing-images-design"
                  element={<ListingImages />}
                />
                <Route
                  path="/services/design/amazon-enhanced-brand-a-plus-content"
                  element={<EnhancedBrandContent />}
                />
                <Route
                  path="/services/design/amazon-main-image-ctr-upgrade"
                  element={<MainImageCtrUpgrade />}
                />

                <Route
                  path="/services/listing-optimization"
                  element={<ListingOptimizations />}
                />
                <Route
                  path="/services/listing-optimization/end-to-end-listing"
                  element={<FullListingOptimizations />}
                />
                <Route
                  path="/services/listing-optimization/amazon-brand-name-change"
                  element={<BrandNameChange />}
                />
                <Route
                  path="/services/listing-optimization/listing-optimization/upc-change-gs1-amazon"
                  element={<BarcodeChangeService />}
                />

                <Route
                  path="/services/other-services"
                  element={<OtherServices />}
                />
                <Route
                  path="/services/other-services/amazon-troubleshooting"
                  element={<TroubleShooting />}
                />
                <Route
                  path="/services/other-services/advertising-audit"
                  element={<AdvertisingAudit />}
                />
                <Route
                  path="/services/other-services/vendor-central"
                  element={<VendorCentral />}
                />
                <Route
                  path="/services/other-services/walmart-account-audit"
                  element={<WalmartAccAudit />}
                />
                <Route
                  path="/services/other-services/walmart-advertising-audit"
                  element={<WalmartAdAudit />}
                />

                <Route
                  path="/services/account-suspension-reinstatement"
                  element={<AccSuspension />}
                />
                <Route
                  path="/services/account-suspension-reinstatement/amazon-listing-reinstatement"
                  element={<ListingReinstatement />}
                />

                <Route path="/amazon-dsp" element={<AmazonDsp />} />
                <Route
                  path="/services/trademark-registration"
                  element={<TrademarkReg />}
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
