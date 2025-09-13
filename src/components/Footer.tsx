import { practiceAreas } from "@/mockData/practiceAreas";
import OfficeInformation from "./officeInformation";
import { useNavigate } from "react-router-dom";
import { Colors } from "@/styles/global";
import { useState } from "react";

const quickLinks = [
  { title: "About Us", path: "/about-us" },
  { title: "Our Team", path: "/attorneys" },
  { title: "Contact Us", path: "/contact" },
  { title: "Join Us", path: "/join-us" },
  { title: "Internship", path: "/careers-internship" },
  { title: "Technical Team", path: "/technical-team" },
];

const Footer = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredQuickLinkIndex, setHoveredQuickLinkIndex] = useState(null);
  const [hoveredFooterIndex, setHoveredFooterIndex] = useState(null);

  return (
    <footer
      style={{
        backgroundColor: Colors.PrimaryBgColor,
        color: Colors.TextColor1,
      }}
      className="py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <OfficeInformation />
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4 font-serif tracking-tight"
              style={{ color: Colors.TextColor3 }}
            >
              Practice Areas
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: Colors.TextColor5 }}
            >
              {practiceAreas.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    color:
                      hoveredIndex === index
                        ? Colors.TextColor3
                        : Colors.TextColor5,
                  }}
                  className="cursor-pointer transition-colors"
                  onClick={() => navigate(item.href)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4 font-serif tracking-tight"
              style={{ color: Colors.TextColor3 }}
            >
              Quick Links
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: Colors.TextColor5 }}
            >
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredQuickLinkIndex(index)}
                  onMouseLeave={() => setHoveredQuickLinkIndex(null)}
                  style={{
                    color:
                      hoveredQuickLinkIndex === index
                        ? "#CBA14A"
                        : Colors.TextColor5,
                  }}
                  className="cursor-pointer transition-colors"
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

        <div
          className="pt-8 border-t"
          style={{ borderColor: Colors.BorderLineColor2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-sm font-light"
              style={{ color: Colors.TextColor5 }}
            >
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
                  onMouseEnter={() => setHoveredFooterIndex(index)}
                  onMouseLeave={() => setHoveredFooterIndex(null)}
                  onClick={() => navigate(item.to)}
                  className="text-sm cursor-pointer transition-colors"
                  style={{
                    color: hoveredFooterIndex === index ? "#CBA14A" : "#9CA3AF", // tailwind's text-gray-400
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
