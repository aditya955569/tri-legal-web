import { Shield, Gavel, Handshake } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center"
    >
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield
              className="h-8 w-8"
              style={{ color: Colors.PrimaryColor }}
            />
            <span
              className="font-semibold tracking-wide"
              style={{ color: Colors.PrimaryColor }}
            >
              TRUSTED LEGAL COUNSEL
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg font-serif"
            style={{ color: Colors.Slate700 }}
          >
            VidhiVidh
            <span
              className="block font-sans"
              style={{ color: Colors.PrimaryColor }}
            >
              Empowering Justice with Experience and Integrity.
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-xl mb-8 max-w-2xl leading-relaxed prose prose-slate prose-lg font-light"
            style={{ color: Colors.Slate600 }}
          >
            With over 20 years of experience and a legacy rooted in legal
            excellence, we deliver strategic, commercial, and client-focused
            solutions across diverse sectors.
          </p>

          <div ref={btnRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-white font-semibold px-8 py-4 text-lg shadow-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: Colors.PrimaryColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Colors.PrimaryColorHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = Colors.PrimaryColor)
              }
              onClick={() => scrollToSection("#contact")}
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border text-slate-600 hover:bg-slate-100 px-8 py-4 text-lg transition-transform duration-300 hover:scale-105"
              style={{ borderColor: Colors.Slate400 }}
              onClick={() => scrollToSection("#practice-areas")}
            >
              Our Practice Areas
            </Button>
          </div>

          <div
            className="flex items-center gap-8 mt-12"
            style={{ color: Colors.Slate600 }}
          >
            <div className="flex items-center gap-2">
              <Gavel
                className="h-5 w-5"
                style={{ color: Colors.PrimaryColor }}
              />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Handshake
                className="h-5 w-5"
                style={{ color: Colors.PrimaryColor }}
              />
              <span>Built on Trust & Integrity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: Colors.Slate400 }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: Colors.Slate400 }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
