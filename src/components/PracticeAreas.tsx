import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { practiceAreas } from "@/mockData/practiceAreas";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Colors } from "@/styles/global";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PracticeAreas = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
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
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.TextColor1 }}
          >
            Practice Areas
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: Colors.TextColor5 }}
          >
            Our firm provides comprehensive legal services across multiple
            practice areas, ensuring expert representation for all your legal
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.slice(0, 8).map((area, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative border rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.025] cursor-pointer"
              style={{
                zIndex: 1,
                borderColor: Colors.BorderLineColor2,
                backgroundColor: Colors.CardBgPrimaryColor,
              }}
              onClick={() => navigate(area.href)}
            >
              {/* Gold glow effect on hover */}
              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-opacity duration-500 z-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${Colors.HoverButtonColor3}, ${Colors.HoverButtonColor1})`,
                }}
              ></div>

              <div className="relative z-10">
                <CardHeader className="text-center pb-4">
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${Colors.HoverButtonColor3}, ${Colors.HoverButtonColor1})`,
                    }}
                  >
                    <area.icon
                      className={`h-8 w-8 text-${Colors.TextColor2}`}
                    />
                  </div>
                  <CardTitle
                    className={`text-xl font-bold text-${Colors.TextColor1} group-hover:text-${Colors.TextColor3} transition-colors`}
                  >
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 pb-6">
                  <p
                    style={{ color: Colors.TextColor5 }}
                    className="leading-relaxed"
                  >
                    {area.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-right mt-10">
          <Link
            to="/practice-areas"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered
                ? Colors.ButtonBgColor1
                : Colors.CardBgSecondaryColor, // Convert "/10" to rgba
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

export default PracticeAreas;
