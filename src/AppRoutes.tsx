import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogsPage from "./components/BlogsPage";

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
import NRILegalServices from "./components/practiceAreas/NRILegalServices";
import ProBono from "./components/practiceAreas/ProBono";
import DetailsPracticeAreas from "./components/DetailsPracticeAreas";
import ContactUs from "./components/ContactUs";
import OurPatron from "./components/OurPatron";
import AIRelatedLegalServices from "./components/practiceAreas/AIRelatedLegalServices";
import TechnicalTeam from "./components/TechnicalTeam";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/blogs" element={<BlogsPage />} />
    <Route path="/probono" element={<ProBono />} />
    <Route path="/our-patron" element={<OurPatron />} />
    <Route path="/practice-areas" element={<DetailsPracticeAreas />} />
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
    <Route path="/nri-legal-services" element={<NRILegalServices />} />
    <Route path="/ai-legal-services" element={<AIRelatedLegalServices />} />
    <Route path="/blogPost/:id" element={<BlogDetailPage />} />
    <Route path="/about-us" element={<AboutUs />} />

    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />

    <Route path="/join-us" element={<TeamWithUs />} />
    <Route path="/careers-internship" element={<Internship />} />
    <Route path="/technical-team" element={<TechnicalTeam />} />

    <Route path="/attorneys" element={<OurTeam />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
