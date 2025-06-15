import { practiceAreas } from "@/utils/practiceAreas";
import OfficeInformation from "./officeInformation";

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
              {practiceAreas.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Our Team
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Case Results
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm font-light">
              © 2024 VidhiVidh Law Firm. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-slate-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="text-slate-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
                Legal Disclaimer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold font-serif tracking-tight">LegalExcel</span>
            </div>
            <p>
              Providing exceptional legal services with integrity, expertise, 
              and unwavering commitment to our clients' success for over two decades.
            </p>
            <div className="text-blue-400 font-semibold mt-4">
              <strong>Excellence</strong> • <strong>Integrity</strong> • <strong>Results</strong>
            </div> */
}
