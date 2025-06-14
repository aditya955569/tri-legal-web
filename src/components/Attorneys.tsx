import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

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

  // useEffect(() => {
  //   if (cardsRef.current) {
  //     const cards = gsap.utils.toArray<HTMLDivElement>(
  //       cardsRef.current.querySelectorAll(".attorney-card")
  //     );

  //     gsap.fromTo(
  //       cards,
  //       { y: 50, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.8,
  //         ease: "power3.out",
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: cardsRef.current,
  //           start: "top 85%",
  //           toggleActions: "play none none reset",
  //         },
  //       }
  //     );
  //   }
  // }, []);

  useEffect(() => {
    // Animate heading and subheading
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

    // Animate cards as before...
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
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our experienced attorneys who bring decades of combined
            expertise to every case, ensuring the highest quality legal
            representation.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card
              key={index}
              className="attorney-card bg-white border-0 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  {attorney.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {attorney.title}
                </p>
                <p className="text-slate-600 mb-3">{attorney.specialization}</p>
                <div className="bg-slate-100 rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-medium text-slate-600">
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
