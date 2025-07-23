import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Colors } from "@/styles/global";
import { proBonoData } from "@/mockData/probono";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const ProBono = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
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

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <CustomizedNavigation />
      <section
        ref={sectionRef}
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.CardBgSecondaryColor}11, ${Colors.TextColor1}, ${Colors.TextColor3}11)`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: Colors.TextColor2 }}
            >
              Pro Bono Commitment
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: Colors.TextColor6 }}
            >
              At VidhiVidh, we believe justice should be accessible to everyone.
              Our Pro Bono initiatives serve those in need and reflect our
              dedication to social responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proBonoData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  style={{ backgroundColor: Colors.CardBgSecondaryColor }}
                  className="group border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(to bottom right, ${Colors.HoverButtonColor3}, ${Colors.HoverButtonColor1})`,
                      }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: Colors.TextColor1 }}
                      />
                    </div>
                    <CardTitle
                      className="text-xl font-bold group-hover:transition-colors"
                      style={{
                        color: Colors.TextColor3,
                      }}
                    >
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p
                      style={{
                        color: Colors.TextColor5,
                        textAlign: "justify",
                      }}
                      className="leading-relaxed"
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProBono;
