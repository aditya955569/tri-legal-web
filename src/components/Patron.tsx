import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const patrons = [
  {
    name: "Adv. Amol Kumar",
    title: "Raj Kumar & Co.",
    specialization: "Renowned Litigator of Uttar Pradesh",
    experience: "25 Years",
    image: "https://example.com/realistic-indian-advocate.jpg",
  },
];

const Patron = () => {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      const cards = gsap.utils.toArray<HTMLDivElement>(
        cardRef.current.querySelectorAll(".attorney-card")
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
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-[#0B1C2C]">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Patron
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Our esteemed patron provides invaluable guidance and leadership to
            our legal team, setting the benchmark for excellence and dedication
            in the legal field.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`grid gap-8 ${
            patrons.length === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {patrons.map((patron, index) => (
            <Card
              key={index}
              className="attorney-card border border-[#1F2D3A] overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full max-w-sm bg-[#14283c]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={patron.image}
                  alt={patron.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {patron.name}
                </h3>
                <p className="font-semibold mb-2 text-[#CBA14A]">
                  {patron.title}
                </p>
                <p className="mb-3 text-gray-300">{patron.specialization}</p>
                <div className="rounded-full px-4 py-2 inline-block bg-[#1F2D3A]">
                  <span className="text-sm font-medium text-gray-300">
                    {patron.experience} Experience
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

export default Patron;
