import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { practiceAreas } from "@/utils/practiceAreas";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            delay: index * 0.1, // stagger manually for cascade effect
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reset", // animate on scroll down/up
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our firm provides comprehensive legal services across multiple
            practice areas, ensuring expert representation for all your legal
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* {practiceAreas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                {/* <div className="text-blue-600 font-semibold">{area.cases}</div>
              </CardContent>
            </Card>
          ))} */}

          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // assign each card to ref array
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
