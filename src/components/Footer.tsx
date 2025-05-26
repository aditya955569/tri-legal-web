
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">LegalExcel</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing exceptional legal services with integrity, expertise, 
              and unwavering commitment to our clients' success for over two decades.
            </p>
            <div className="text-amber-400 font-semibold">
              Excellence • Integrity • Results
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Corporate Law</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Criminal Defense</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Civil Litigation</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Constitutional Law</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Case Results</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LegalExcel Law Firm. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm hover:text-amber-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-gray-400 text-sm hover:text-amber-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="text-gray-400 text-sm hover:text-amber-400 cursor-pointer transition-colors">Legal Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
