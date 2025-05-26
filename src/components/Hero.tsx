import { Shield, Gavel } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power3.out" }
      );
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-blue-600 font-semibold tracking-wide">TRUSTED LEGAL COUNSEL</span>
          </div>
          
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-extrabold text-slate-700 mb-6 leading-tight tracking-tight drop-shadow-lg font-serif"
          >
            Excellence in
            <span className="text-blue-600 block font-sans">Legal Representation</span>
          </h1>
          
          <p
            ref={subRef}
            className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed prose prose-slate prose-lg font-light"
          >
            With over two decades of experience, we provide <b>comprehensive legal solutions</b> 
            tailored to protect your interests and secure your future.
          </p>
          
          <div ref={btnRef} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-400 text-slate-600 hover:bg-slate-100 px-8 py-4 text-lg transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToSection('#practice-areas')}
            >
              Our Practice Areas
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-slate-600">
            <div className="flex items-center gap-2">
              <Gavel className="h-5 w-5 text-blue-600" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
