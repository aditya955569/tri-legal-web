import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const attorneys = [
  {
    name: "Sarah Mitchell",
    title: "Senior Partner",
    specialization: "Corporate Law & Litigation",
    experience: "15 Years",
    image:
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James Rodriguez",
    title: "Partner",
    specialization: "Criminal Defense",
    experience: "12 Years",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emily Chen",
    title: "Senior Associate",
    specialization: "Constitutional Law",
    experience: "8 Years",
    image:
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=400&q=80",
  },
];

const Attorneys = () => {
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
    <section
      className="py-20"
      style={{ backgroundColor: Colors.LightGrayBackground }}
    >
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.Slate700 }}
          >
            Our Legal Team
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: Colors.Slate600 }}
          >
            Meet our experienced attorneys who bring decades of combined
            expertise to every case, ensuring the highest quality legal
            representation.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
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
  );
};

export default Attorneys;
