import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";
import { Globe, Home, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const nriLegalHighlights = [
  {
    icon: Home,
    title: "Property & Inheritance Disputes",
    description:
      "We assist NRIs in resolving disputes related to ancestral property, illegal possession, and property inheritance across India.",
  },
  // {
  //   icon: FileText,
  //   title: "Power of Attorney Services",
  //   description:
  //     "Expert drafting, attestation, and execution of Power of Attorney documents for managing property, finances, and legal matters remotely.",
  // },
  {
    icon: Users,
    title: "Family & Matrimonial Matters",
    description:
      "Handling NRI divorce, child custody, maintenance, and family court proceedings with cultural sensitivity and confidentiality.",
  },
  {
    icon: Globe,
    title: "Cross-Border Legal Assistance",
    description:
      "End-to-end legal support for international documentation, visa & immigration issues, and coordination with Indian embassies abroad.",
  },
];

const NRILegalServices = () => {
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
        <div className="relative z-10 container mx-auto px-6">
          <div className="mb-16 px-4 md:px-0">
            <div
              className="relative bg-white shadow-xl rounded-2xl p-8 md:p-10 z-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                borderLeft: `6px solid ${Colors.TextColor2}`,
                backgroundColor: Colors.TextColor2,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Globe
                  width={36}
                  height={36}
                  stroke={Colors.TextColor3}
                  strokeWidth="2"
                />
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: Colors.TextColor3 }}
                >
                  NRI Legal Services
                </h2>
              </div>

              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ color: Colors.TextColor5 }}
              >
                At <strong>VidhiVidh</strong>, we provide specialized legal
                assistance tailored for Non-Resident Indians (NRIs) to resolve
                legal complexities in India while residing abroad. Our services
                focus on convenience, transparency, and trustworthy
                representation.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: Colors.TextColor5 }}
              >
                From property disputes and Power of Attorney to matrimonial and
                cross-border documentation issues, our experienced team ensures
                peace of mind for NRIs navigating the Indian legal system.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nriLegalHighlights.map((item, index) => {
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

export default NRILegalServices;
