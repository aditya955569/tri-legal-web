import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { attorneys } from "@/mockData/legalTeamDetails";

gsap.registerPlugin(ScrollTrigger);

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
    <section className="py-20 relative bg-[#0B1C2C]">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Legal Team
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Meet our experienced attorneys who bring decades of combined
            expertise to every case, ensuring the highest quality legal
            representation.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {attorneys.slice(0, 5).map((attorney, index) => (
            <Card
              key={index}
              className="attorney-card border border-[#1F2D3A] overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#14283c]"
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
                <h3 className="text-xl font-bold mb-2 text-white">
                  {attorney.name}
                </h3>
                <p className="font-semibold mb-2 text-[#CBA14A]">
                  {attorney.title}
                </p>
                <p className="mb-3 text-gray-300">{attorney.specialization}</p>
                <div className="rounded-full px-4 py-2 inline-block bg-[#1F2D3A]">
                  <span className="text-sm font-medium text-gray-300">
                    {attorney.experience} Experience
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More link */}
        <div className="text-right mt-10">
          <Link
            to="/attorneys"
            className="inline-flex items-center gap-2 px-5 py-2 border border-[#CBA14A] rounded-full bg-transparent text-sm font-medium transition-all duration-300 hover:bg-[#CBA14A]/10 text-[#CBA14A]"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
