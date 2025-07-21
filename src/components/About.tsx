import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Colors } from "@/styles/global";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Block */}
          <div ref={leftRef}>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: Colors.TextColor4 }}
            >
              Committed to{" "}
              <span style={{ color: Colors.TextColor3 }}>
                Justice & Excellence
              </span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: Colors.TextColor4 }}
            >
              For over two decades, our firm has been at the forefront of legal
              excellence, providing unparalleled representation to clients
              across diverse legal matters. We combine traditional legal
              expertise with innovative approaches to deliver results that
              exceed expectations.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: Colors.TextColor4 }}
            >
              Our commitment extends beyond individual cases to strengthening
              the fabric of justice in our community. We believe that
              exceptional legal representation should be accessible,
              transparent, and focused on achieving the best possible outcomes
              for our clients.
            </p>

            <Button
              size="lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                color: Colors.TextColor2,
                backgroundColor: hovered
                  ? Colors.HoverButtonColor1
                  : Colors.SecondaryBgColor,
              }}
              className={`font-semibold px-8 shadow-md transition-colors`}
              onClick={() => {
                navigate("/about-us");
              }}
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Image Block */}
          <div ref={rightRef} className="relative">
            <div
              className="rounded-2xl p-8 transform rotate-3"
              style={{
                background: `linear-gradient(to bottom right, ${Colors.HoverButtonColor3}, ${Colors.HoverButtonColor1})`,
              }}
            >
              <div
                style={{
                  backgroundColor: Colors.CardBgPrimaryColor,
                  borderColor: Colors.BorderLineColor2,
                }}
                className=" rounded-xl p-6 transform -rotate-3 border"
              >
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                  alt="Law firm office"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3
                    style={{ color: Colors.TextColor1 }}
                    className="font-bold text-lg"
                  >
                    Our Downtown Office
                  </h3>
                  <p style={{ color: Colors.TextColor5 }}>
                    Where excellence meets accessibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
