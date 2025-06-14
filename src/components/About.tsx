import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Block */}
          <div ref={leftRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">
              Committed to
              <span className="text-blue-600 block">Justice & Excellence</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over two decades, our firm has been at the forefront of legal
              excellence, providing unparalleled representation to clients
              across diverse legal matters. We combine traditional legal
              expertise with innovative approaches to deliver results that
              exceed expectations.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment extends beyond individual cases to strengthening
              the fabric of justice in our community. We believe that
              exceptional legal representation should be accessible,
              transparent, and focused on achieving the best possible outcomes
              for our clients.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  1000+
                </div>
                <div className="text-slate-600 font-medium">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-slate-600 font-medium">Success Rate</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 shadow-md"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Image Block */}
          <div ref={rightRef} className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                  alt="Law firm office"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-slate-700 text-lg">
                    Our Downtown Office
                  </h3>
                  <p className="text-slate-600">
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
