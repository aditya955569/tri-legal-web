import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogsPage from "./components/BlogsPage";
import ProBono from "./components/ProBono";
import BlogDetailPage from "./components/blogs/BlogDetailPage";
import CriminalLaw from "./components/practiceAreas/CriminalLaw";
import CivilLaw from "./components/practiceAreas/CivilLaw";
import CommercialLaw from "./components/practiceAreas/CommercialLaw";
import BankingLaw from "./components/practiceAreas/BankingLaw";
import MatrimonialLaw from "./components/practiceAreas/MatrimonialLaw";
import IntellectualPropertyRights from "./components/practiceAreas/IntellectualPropertyRights";
import LabourAndIndustrialLaw from "./components/practiceAreas/LabourAndIndustriallaw";
import ServiceLaw from "./components/practiceAreas/ServiceLaw";
import AboutUs from "./components/AboutUs";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LegalDisclaimer from "./components/LegalDisclaimer";
import TeamWithUs from "./components/TeamWithUs";
import Internship from "./components/Internship";
import OurTeam from "./components/OurTeam";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/blogs" element={<BlogsPage />} />
    <Route path="/probono" element={<ProBono />} />
    <Route path="/criminal-law" element={<CriminalLaw />} />
    <Route path="/civil-law" element={<CivilLaw />} />
    <Route path="/commercial-law" element={<CommercialLaw />} />
    <Route path="/banking-law" element={<BankingLaw />} />
    <Route path="/matrimonial-law" element={<MatrimonialLaw />} />
    <Route path="/service-law" element={<ServiceLaw />} />
    <Route
      path="/labour-and-industrial-law"
      element={<LabourAndIndustrialLaw />}
    />
    <Route
      path="/intellectual-property-rights"
      element={<IntellectualPropertyRights />}
    />
    <Route path="/blogPost/:id" element={<BlogDetailPage />} />
    <Route path="/about-us" element={<AboutUs />} />

    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />

    <Route path="/join-us" element={<TeamWithUs />} />
    <Route path="/careers-internship" element={<Internship />} />

    <Route path="/attorneys" element={<OurTeam />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
