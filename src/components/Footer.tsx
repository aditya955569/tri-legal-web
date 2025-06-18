import { practiceAreas } from "@/mockData/practiceAreas";
import OfficeInformation from "./officeInformation";

const quickLinks = ["About Us", "Our Team", "Contact Us"];

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <OfficeInformation />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif tracking-tight">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              {practiceAreas.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm font-light">
              © 2024 VidhiVidh Law Firm. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Legal Disclaimer"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="text-slate-400 text-sm hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
