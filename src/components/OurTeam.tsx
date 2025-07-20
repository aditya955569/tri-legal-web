import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";
import { attorneys } from "@/mockData/legalTeamDetails";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const [heading, paragraph] = titleRef.current.children;

      gsap.fromTo(
        heading,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        paragraph,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

    if (cardsRef.current) {
      const cards = gsap.utils.toArray<HTMLDivElement>(
        cardsRef.current.querySelectorAll(".attorney-card")
      );

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
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
        className="py-20 relative"
        style={{ backgroundColor: Colors.LightGrayBackground }}
      >
        <div className="container mx-auto px-6">
          <div ref={titleRef} className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: Colors.Slate700 }}
            >
              Meet the Entire Team
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: Colors.Slate600 }}
            >
              A diverse group of legal professionals who are passionate about
              justice and committed to providing the best legal service.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {attorneys.map((attorney, index) => (
              <Card
                key={index}
                className="attorney-card border-0 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: Colors.White }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: Colors.Slate700 }}
                  >
                    {attorney.name}
                  </h3>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: Colors.PrimaryColor }}
                  >
                    {attorney.title}
                  </p>
                  <p className="mb-3" style={{ color: Colors.Slate600 }}>
                    {attorney.specialization}
                  </p>
                  <div
                    className="rounded-full px-4 py-2 inline-block"
                    style={{ backgroundColor: Colors.LightGrayBackground }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: Colors.Slate600 }}
                    >
                      {attorney.experience} Experience
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurTeam;
