import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/mockData/dummyFAQs";
import { Colors } from "@/styles/global";

const FAQs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
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
              <AccordionTrigger
                style={{
                  color: Colors.TextColor1,
                }}
                className="px-5 py-4 text-left text-base md:text-lg font-medium transition-colors hover:bg-[rgba(31,45,58,0.05)]"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="px-5 pb-5 pt-1 text-sm md:text-base leading-relaxed"
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
