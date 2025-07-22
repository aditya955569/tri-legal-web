import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { attorneys } from "@/mockData/legalTeamDetails";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const Attorneys = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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
      style={{ backgroundColor: Colors.PrimaryBgColor }}
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.TextColor1 }}
          >
            Our Legal Team
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: Colors.TextColor5 }}
          >
            Meet our experienced attorneys who bring decades of combined
            expertise to every case, ensuring the highest quality legal
            representation.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {attorneys.slice(0, 3).map((attorney, index) => (
            <Card
              key={index}
              className="attorney-card border overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: Colors.CardBgSecondaryColor,
                backgroundColor: Colors.CardBgPrimaryColor,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    attorney.image?.startsWith("http") ||
                    attorney.image?.startsWith("/")
                      ? attorney.image
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  }
                  alt={attorney.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: Colors.TextColor1 }}
                >
                  {attorney.name}
                </h3>
                <p
                  className="font-semibold mb-2"
                  style={{ color: Colors.TextColor3 }}
                >
                  {attorney.title}
                </p>
                <p className="mb-3" style={{ color: Colors.TextColor5 }}>
                  {attorney.specialization}
                </p>
                {/* <div
                  className="rounded-full px-4 py-2 inline-block"
                  style={{ backgroundColor: Colors.CardBgSecondaryColor }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: Colors.TextColor5 }}
                  >
                    {attorney.experience} Experience
                  </span>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More link */}
        <div className="text-right mt-10">
          <Link
            to="/attorneys"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered
                ? Colors.ButtonBgColor1
                : Colors.CardBgSecondaryColor,
              borderColor: Colors.BorderLineColor1,
              color: isHovered
                ? Colors.CardBgSecondaryColor
                : Colors.IconsColor,
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
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
