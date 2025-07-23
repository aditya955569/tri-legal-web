import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";
import { BadgeCheck, Users, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const labourLawHighlights = [
  {
    icon: Users,
    title: "Employment & HR Compliance",
    description:
      "We help companies stay compliant with Indian labour laws, offering legal guidance on contracts, working conditions, employee benefits, and Human Resources (HR) policies.",
  },
  {
    icon: ClipboardList,
    title: "Industrial Disputes",
    description:
      "Our team represents employers and employees in conciliation, tribunal hearings, and labor court cases concerning wages, retrenchment, strikes, and termination.",
  },
  {
    icon: BadgeCheck,
    title: "Regulatory Filings & Audits",
    description:
      "We assist with Provident Fund (PF), Employees' State Insurance (ESI), gratuity, maternity, and wage filings. Our team also ensures readiness for statutory audits and inspections.",
  },
];

const LabourAndIndustrialLaw = () => {
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
        className="relative py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.TextColor1}, ${Colors.TextColor1}, ${Colors.TextColor1})`,
        }}
      >
        {/* Background SVG – representing documents & compliance */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={Colors.TextColor4}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M9 2H5a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8z" />
          <path d="M16 2v6h6" />
        </svg>

        <div className="relative z-10 container mx-auto px-6">
          <div className="mb-16 px-4 md:px-0">
            <div
              className="relative shadow-xl rounded-2xl p-8 md:p-10 z-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                backgroundColor: Colors.TextColor2,
                borderLeft: `6px solid ${Colors.TextColor3}`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={Colors.TextColor3}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: Colors.TextColor3 }}
                >
                  Labour & Industrial Law
                </h2>
              </div>

              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ color: Colors.TextColor5 }}
              >
                At <strong>VidhiVidh</strong>, we offer end-to-end legal support
                in labour and industrial law, helping both employers and
                employees navigate regulatory frameworks, workplace disputes,
                and compliance issues with confidence and clarity.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: Colors.TextColor5 }}
              >
                Our practice spans workforce management, dispute resolution,
                employment contracts, union negotiations, and labor code audits.
                We ensure lawful practices that foster productive, fair, and
                compliant workplaces.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labourLawHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.025]"
                  style={{
                    zIndex: 1,
                    backgroundColor: Colors.CardBgSecondaryColor,
                    borderColor: Colors.BorderLineColor2,
                  }}
                >
                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0"
                    style={{
                      background: `radial-gradient(circle at top left, ${Colors.HoverButtonColor1}33, transparent 80%)`,
                      filter: "blur(20px)",
                    }}
                  ></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4">
                      <div
                        className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${Colors.TextColor3}, ${Colors.TextColor3})`,
                        }}
                      >
                        <Icon
                          className="h-8 w-8"
                          style={{ color: Colors.TextColor1 }}
                        />
                      </div>
                      <CardTitle
                        className="text-xl font-bold group-hover:transition-colors"
                        style={{ color: Colors.TextColor3 }}
                      >
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-4 pb-6">
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
                  </div>
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

export default LabourAndIndustrialLaw;
