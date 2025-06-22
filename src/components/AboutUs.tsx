import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "./Footer";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import { Colors } from "@/styles/global";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

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
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.PrimaryColorLight}11, ${Colors.White}, ${Colors.Slate400}11)`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: Colors.Slate700 }}
            >
              About Us
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: Colors.Slate600 }}
            >
              Learn more about our legacy and commitment to legal excellence.
            </p>
          </div>

          <Card
            ref={cardRef}
            className="bg-white border-0 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader className="text-center pb-4">
              <CardTitle
                className="text-2xl font-semibold"
                style={{ color: Colors.Slate700 }}
              >
                Our Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6">
              <p
                className="mb-4 text-lg leading-relaxed"
                style={{ color: Colors.Slate600 }}
              >
                Founded in the historic and culturally rich city of Lucknow two
                decades ago, VidhiVidh has become a trusted name in legal
                counsel across Uttar Pradesh and beyond. Built on the principles
                of integrity, diligence, and accessibility, our firm has
                consistently provided high-quality legal services with a
                human-centric approach.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: Colors.Slate600 }}
              >
                With deep roots in the community and a vision for progress,
                VidhiVidh blends traditional values with modern legal practices.
                Our experienced team is committed to empowering individuals,
                businesses, and institutions by offering reliable solutions
                tailored to each client’s unique needs. We don't just practice
                law—we uphold justice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
