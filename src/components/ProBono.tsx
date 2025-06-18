import { HeartHandshake, HelpingHand, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CustomizedNavigation from "./CustomizedNavigation";

gsap.registerPlugin(ScrollTrigger);

// Define Pro Bono Data
const proBonoData = [
  {
    icon: HeartHandshake,
    title: "Access to Justice",
    description:
      "We offer legal aid to underserved communities, ensuring that no one is denied legal support due to financial constraints.",
  },
  {
    icon: HelpingHand,
    title: "Community Impact",
    description:
      "Our lawyers actively volunteer for NGOs, helping with legal frameworks, training, and representation to amplify their missions.",
  },
  {
    icon: Globe,
    title: "Legal Literacy",
    description:
      "We conduct awareness drives, workshops, and seminars to educate citizens about their legal rights and responsibilities.",
  },
];

const ProBono = () => {
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
        className="py-20 bg-gradient-to-br from-indigo-50 via-white to-slate-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
              Pro Bono Commitment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At VidhiVidh, we believe justice should be accessible to everyone.
              Our Pro Bono initiatives serve those in need and reflect our
              dedication to social responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proBonoData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white hover:shadow-lg border-0 hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
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

export default ProBono;
