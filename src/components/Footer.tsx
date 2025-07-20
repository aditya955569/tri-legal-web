import { practiceAreas } from "@/mockData/practiceAreas";
import OfficeInformation from "./officeInformation";
import { useNavigate } from "react-router-dom";

const quickLinks = [
  { title: "About Us", path: "/about-us" },
  { title: "Our Team", path: "/attorneys" },
  { title: "Contact Us", path: "/contact" },
  { title: "Join Us", path: "/join-us" },
  { title: "Internship", path: "/careers-internship" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0B1C2C] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <OfficeInformation />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif tracking-tight text-[#CBA14A]">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {practiceAreas.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-colors hover:text-[#CBA14A]"
                  onClick={() => navigate(item.href)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif tracking-tight text-[#CBA14A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-colors hover:text-[#CBA14A]"
                  onClick={() => {
                    if (window.location.pathname === link.path) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      navigate(link.path);
                    }
                  }}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1F2D3A]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm font-light text-gray-400">
              © 2024 VidhiVidh Law Firm. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms-and-conditions" },
                { label: "Legal Disclaimer", to: "/legal-disclaimer" },
              ].map((item, index) => (
                <span
                  key={index}
                  className="text-sm cursor-pointer transition-colors text-gray-400 hover:text-[#CBA14A]"
                  onClick={() => {
                    navigate(item.to);
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
