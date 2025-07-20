import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/mockData/dummyFAQs";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const FAQs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: Colors.TextColor1 }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-2 text-base md:text-lg"
            style={{ color: Colors.TextColor5 }}
          >
            Brief answers to common queries
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-2xl space-y-4"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              style={{
                borderColor: Colors.BorderLineColor2,
                backgroundColor: Colors.CardBgPrimaryColor,
              }}
              className="rounded-lg border transition-all hover:shadow-lg"
            >
              {/* <AccordionTrigger
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  color: Colors.TextColor1,
                  backgroundColor: isHovered
                    ? "rgba(31, 45, 58, 0.5)"
                    : "transparent",
                }}
                className="px-5 py-4 text-left text-base md:text-lg font-medium transition-colors"
              > */}
              <AccordionTrigger
                style={{
                  color: Colors.TextColor1,
                }}
                className="px-5 py-4 text-left text-base md:text-lg font-medium transition-colors hover:bg-[rgba(31,45,58,0.05)]"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="px-5 pb-5 pt-1text-sm md:text-base leading-relaxed"
                style={{ color: Colors.TextColor5 }}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
