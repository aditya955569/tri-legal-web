import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What types of cases does your law firm handle?",
    answer:
      "We handle a wide range of legal matters including civil litigation, criminal defense, family law, property disputes, corporate law, and more. Our experienced team is equipped to guide you through complex legal processes.",
  },
  {
    question: "How do I schedule a consultation with your firm?",
    answer:
      "You can schedule a consultation by filling out the contact form on our website, calling us directly, or visiting our office during business hours. We offer both in-person and virtual consultations.",
  },
  {
    question: "What documents should I bring to my first legal consultation?",
    answer:
      "Please bring any relevant documents such as ID proof, case-related papers, legal notices, contracts, or any correspondence related to your legal issue. This helps us assess your case effectively.",
  },
  {
    question: "How are legal fees structured?",
    answer:
      "Our fees depend on the type and complexity of the case. We offer transparent pricing and will provide a clear fee structure during your initial consultation. In certain cases, we may offer flexible payment plans.",
  },
  {
    question: "How long will my case take to resolve?",
    answer:
      "The duration varies depending on the nature of the case, court schedules, and legal procedures involved. During your consultation, we can give you an estimate based on similar cases we’ve handled.",
  },
  {
    question: "Will my personal information remain confidential?",
    answer:
      "Absolutely. Client confidentiality is a top priority. All information shared with us is treated with the utmost discretion and protected under attorney-client privilege.",
  },
];

const FAQs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      style={{
        background: `linear-gradient(to bottom right, ${Colors.White}, ${Colors.Slate100})`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: Colors.Slate700 }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-2 text-base md:text-lg"
            style={{ color: Colors.Slate600 }}
          >
            {/* Clear answers to commonly asked legal and service-related questions. */}
            Brief answer to common queries.
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
              className="rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-1 text-slate-600 text-sm md:text-base leading-relaxed">
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
