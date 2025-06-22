import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { practiceAreas } from "@/mockData/practiceAreas";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const PracticeAreas = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: Colors.LightGrayBackground }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.Slate700 }}
          >
            Practice Areas
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: Colors.Slate600 }}
          >
            Our firm provides comprehensive legal services across multiple
            practice areas, ensuring expert representation for all your legal
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.025]"
              style={{ zIndex: 1 }}
            >
              {/* Gradient glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-300 opacity-0 group-hover:opacity-30 blur-xl rounded-xl transition-opacity duration-500 z-0"></div>

              <div className="relative z-10">
                <CardHeader className="text-center pb-4">
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${Colors.PrimaryColorLight}, ${Colors.PrimaryColor})`,
                    }}
                  >
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle
                    className="text-xl font-bold group-hover:transition-colors"
                    style={{ color: Colors.Slate700 }}
                  >
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 pb-6">
                  <p
                    className="leading-relaxed"
                    style={{ color: Colors.Slate600 }}
                  >
                    {area.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
