
import { Button } from "@/components/ui/button";
import { Shield, Gavel } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-amber-400" />
            <span className="text-amber-400 font-semibold tracking-wide">TRUSTED LEGAL COUNSEL</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence in
            <span className="text-amber-400 block">Legal Representation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            With over two decades of experience, we provide comprehensive legal solutions 
            tailored to protect your interests and secure your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              onClick={() => scrollToSection('#practice-areas')}
            >
              Our Practice Areas
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-gray-300">
            <div className="flex items-center gap-2">
              <Gavel className="h-5 w-5 text-amber-400" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-amber-400" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
