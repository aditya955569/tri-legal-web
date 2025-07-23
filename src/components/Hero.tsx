import { Shield, Gavel, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [isHover, setIsHover] = useState(false);

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: Colors.PrimaryBgColor }}
      className="relative min-h-screen flex items-center py-28 md:py-20"
    >
      <div className="absolute inset-0 bg-[#0B1C2C]/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield
              style={{ color: Colors.SecondaryBgColor }}
              className="h-8 w-8"
            />
            <span
              style={{ color: Colors.SecondaryBgColor }}
              className="font-semibold tracking-wide "
            >
              TRUSTED LEGAL COUNSEL
            </span>
          </div>

          <h1
            ref={headlineRef}
            style={{ color: Colors.MainHeadingColor1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg font-serif "
          >
            VidhiVidh
            <span
              style={{ color: Colors.MainHeadingColor2 }}
              className="block font-sans text-5xl"
            >
              Empowering Justice with Experience and Integrity.
            </span>
          </h1>

          <p
            ref={subRef}
            style={{ color: Colors.TextColor1 }}
            className="text-xl mb-8 max-w-2xl leading-relaxed prose prose-lg font-light"
          >
            With over 20 years of experience and a legacy rooted in legal
            excellence, we deliver strategic, commercial, and client-focused
            solutions across diverse sectors.
          </p>

          <div ref={btnRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="font-semibold px-8 py-4 text-lg shadow-xl transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: Colors.SecondaryBgColor,
                color: Colors.TextColor2,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Colors.HoverButtonColor1)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Colors.TextButtonColor2)
              }
              onClick={() => scrollToSection("#contact")}
            >
              Schedule Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => scrollToSection("#practice-areas")}
              style={{
                borderColor: isHover ? "#CBA14A" : "#E2E2E2", // dynamic border color
                color: isHover
                  ? Colors.CardBgSecondaryColor
                  : Colors.SecondaryBgColor, // dynamic text color
                backgroundColor: isHover
                  ? Colors.SecondaryBgColor
                  : Colors.CardBgSecondaryColor, // dynamic bg
                transition: "all 0.3s ease",
                padding: "1rem 2rem",
                fontSize: "1.125rem",
                borderWidth: 2,
              }}
            >
              Our Practice Areas
            </Button>
          </div>

          <div
            className="flex items-center gap-8 mt-12"
            style={{ color: Colors.TextColor4 }}
          >
            <div className="flex items-center gap-2">
              <Gavel className="h-5 w-5" style={{ color: Colors.TextColor3 }} />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Handshake
                className="h-5 w-5"
                style={{ color: Colors.IconsColor }}
              />
              <span>Built on Trust & Integrity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
