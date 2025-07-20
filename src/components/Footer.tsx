import { practiceAreas } from "@/mockData/practiceAreas";
import OfficeInformation from "./officeInformation";
import { Colors } from "@/styles/global";
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
    <footer
      style={{ backgroundColor: Colors.Slate700 }}
      className="text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <OfficeInformation />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif tracking-tight text-white">
              Practice Areas
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: Colors.Slate400 }}
            >
              {practiceAreas.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-colors"
                  style={{ color: Colors.Slate400 }}
                  onClick={() => navigate(item.href)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = Colors.PrimaryColorLight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = Colors.Slate400)
                  }
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif tracking-tight text-white">
              Quick Links
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: Colors.Slate400 }}
            >
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-colors"
                  style={{ color: Colors.Slate400 }}
                  onClick={() => {
                    if (window.location.pathname === link.path) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      navigate(link.path);
                    }
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = Colors.PrimaryColorLight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = Colors.Slate400)
                  }
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: Colors.Slate600 }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              style={{ color: Colors.Slate400 }}
              className="text-sm font-light"
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
                  className="text-sm cursor-pointer transition-colors"
                  style={{ color: Colors.Slate400 }}
                  onClick={() => {
                    navigate(item.to);
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = Colors.PrimaryColorLight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = Colors.Slate400)
                  }
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
