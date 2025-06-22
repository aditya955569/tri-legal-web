import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";
import { ShieldAlert, Gavel, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomizedNavigation from "../customized/CustomizedNavigation";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const criminalLawHighlights = [
  {
    icon: ShieldAlert,
    title: "Defending Your Rights",
    description:
      "We provide strategic and aggressive defense representation in all criminal matters, from minor infractions to serious felony charges. Our goal is to protect your rights and secure the best possible outcome.",
  },
  {
    icon: Gavel,
    title: "Trial Expertise",
    description:
      "Our seasoned criminal defense lawyers are experienced litigators who prepare every case as if it will go to trial, ensuring that our clients are always a step ahead in the courtroom.",
  },
  {
    icon: Scale,
    title: "Justice with Integrity",
    description:
      "We uphold the principle of fair treatment under the law. Our team is dedicated to providing ethical, transparent, and effective legal counsel to those facing criminal allegations.",
  },
];

const CriminalLaw = () => {
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
          background: `linear-gradient(to bottom right, ${Colors.Slate100}, ${Colors.White}, ${Colors.Slate200})`,
        }}
      >
        {/* Background Scales of Justice SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={Colors.Slate300}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M7 20h10M6 6h12M12 6v14M9 6l-3 6 3 6M15 6l3 6-3 6" />
        </svg>

        <div className="relative z-10 container mx-auto px-6">
          <div className="mb-16 px-4 md:px-0">
            <div
              className="relative bg-white shadow-xl rounded-2xl p-8 md:p-10 z-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                borderLeft: `6px solid ${Colors.PrimaryColor}`,
              }}
            >
              {/* Heading with icon */}
              <div className="flex items-center gap-4 mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={Colors.PrimaryColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: Colors.Slate700 }}
                >
                  Criminal Law
                </h2>
              </div>

              {/* Description paragraphs */}
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ color: Colors.Slate600 }}
              >
                At <strong>VidhiVidh</strong>, we recognize the life-altering
                impact that criminal charges can have. Our dedicated Criminal
                Law practice is committed to defending your rights, upholding
                justice, and guiding you through every stage of the legal
                process with clarity and confidence. Whether it’s a misdemeanor
                or a serious felony, we are by your side to offer strategic
                counsel and unwavering support.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: Colors.Slate600 }}
              >
                With extensive experience across white-collar offenses,
                cybercrime, narcotics cases, domestic disputes, and more — our
                legal team crafts powerful, personalized defense strategies. We
                believe in meticulous investigation, sharp courtroom advocacy,
                and above all, protecting your future with integrity and
                dedication.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {criminalLawHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.025]"
                  style={{
                    zIndex: 1,
                  }}
                >
                  {/* Gradient glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-300 opacity-0 group-hover:opacity-30 blur-xl rounded-xl transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4">
                      <div
                        className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${Colors.PrimaryColor}, ${Colors.PrimaryColorLight})`,
                        }}
                      >
                        <Icon
                          className="h-8 w-8"
                          style={{ color: Colors.White }}
                        />
                      </div>
                      <CardTitle
                        className="text-xl font-bold group-hover:transition-colors"
                        style={{ color: Colors.Slate700 }}
                      >
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-4 pb-6">
                      <p
                        style={{ color: Colors.Slate600 }}
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

export default CriminalLaw;
