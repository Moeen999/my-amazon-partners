import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import DesignPage from "./pages/DesignPage";
import FullServiceManagement from "./ServicesRoutes/FullServiceManagement";
import PpcManagement from "./ServicesRoutes/PpcManagement";
import AmazonSEO from "./ServicesRoutes/AmazonSEO";
import AccountAudit from "./ServicesRoutes/AccountAudit";
import Consulting from "./ServicesRoutes/Consulting";
import CaseStudies from "@/pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import BrandGuideLines from "./pages/BrandGuideLines";
import BrandStory from "./pages/BrandStory";
import BrandStore from "./pages/BrandStore";
import ListingImages from "./pages/ListingImages";
import EnhancedBrandContent from "./pages/EnhancedBrandContent";
import ListingOptimizations from "./pages/ListingOptimizations";
import FullListingOptimizations from "./pages/FullListingOptimizations";
import MainImageCtrUpgrade from "./pages/MainImageCtrUpgrade";
import TroubleShooting from "./pages/TroubleShooting";
import ListingReinstatement from "./pages/ListingReinstatement";
import AccSuspension from "./pages/AccSuspension";
import AdvertisingAudit from "./pages/AdvertisingAudit";
import BrandNameChange from "./pages/BrandNameChange";
import BarcodeChangeService from "./pages/BarcodeChangeService";
import OtherServices from "./pages/OtherServices";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/full-service-management" element={<FullServiceManagement />} />
              <Route path="/services/advertising-management" element={<PpcManagement />} />
              <Route path="/services/amazon-seo/" element={<AmazonSEO />} />
              <Route path="/services/amazon-account-audit" element={<AccountAudit />} />
              <Route path="/services/amazon-brand-growth-consulting" element={<Consulting />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services/design" element={<DesignPage />} />
              <Route path="/services/design/amazon-brand-guidelines" element={<BrandGuideLines />} />
              <Route path="/services/design/amazon-brand-story" element={<BrandStory />} />
              <Route path="/services/design/amazon-brand-store" element={<BrandStore />} />
              <Route path="/services/design/listing-images-design" element={<ListingImages />} />
              <Route path="/services/design/amazon-enhanced-brand-a-plus-content" element={<EnhancedBrandContent />} />
              <Route path="/services/listing-optimization" element={<ListingOptimizations />} />
              <Route path="/services/listing-optimization/end-to-end-listing" element={<FullListingOptimizations />} />
              <Route path="/services/design/amazon-main-image-ctr-upgrade" element={<MainImageCtrUpgrade />} />
              <Route path="/services/other-services/amazon-troubleshooting" element={<TroubleShooting />} />
              <Route path="/services/account-suspension-reinstatement/amazon-listing-reinstatement" element={<ListingReinstatement />} />
              <Route path="/services/account-suspension-reinstatement" element={<AccSuspension />} />
              <Route path="/services/other-services/advertising-audit" element={<AdvertisingAudit />} />
              <Route path="/services/listing-optimization/amazon-brand-name-change" element={<BrandNameChange />} />
              <Route path="/services/listing-optimization/listing-optimization/upc-change-gs1-amazon" element={<BarcodeChangeService />} />
              <Route path="/services/other-services" element={<OtherServices />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
