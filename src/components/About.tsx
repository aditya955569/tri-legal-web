import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20" style={{ backgroundColor: Colors.White }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Block */}
          <div ref={leftRef}>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: Colors.Slate700 }}
            >
              Committed to{" "}
              <span style={{ color: Colors.PrimaryColor }}>
                Justice & Excellence
              </span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: Colors.Slate600 }}
            >
              For over two decades, our firm has been at the forefront of legal
              excellence, providing unparalleled representation to clients
              across diverse legal matters. We combine traditional legal
              expertise with innovative approaches to deliver results that
              exceed expectations.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: Colors.Slate600 }}
            >
              Our commitment extends beyond individual cases to strengthening
              the fabric of justice in our community. We believe that
              exceptional legal representation should be accessible,
              transparent, and focused on achieving the best possible outcomes
              for our clients.
            </p>

            {/* Example Button */}
            {/* 
            <Button
              size="lg"
              className="text-white px-8 shadow-md"
              style={{
                backgroundColor: Colors.DarkGray,
                hover: { backgroundColor: Colors.DarkGrayHover },
              }}
            >
              Learn More About Us
            </Button> 
            */}
          </div>

          {/* Right Image Block */}
          <div ref={rightRef} className="relative">
            <div
              className="rounded-2xl p-8 transform rotate-3"
              style={{
                background: `linear-gradient(to bottom right, ${Colors.PrimaryColorLight}, ${Colors.PrimaryColor})`,
              }}
            >
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                  alt="Law firm office"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: Colors.Slate700 }}
                  >
                    Our Downtown Office
                  </h3>
                  <p style={{ color: Colors.Slate600 }}>
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
