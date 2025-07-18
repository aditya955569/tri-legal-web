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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
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

      {/* Hero Section */}
      {/* <section
        className="relative py-24"
        style={{
          background: `linear-gradient(to right, ${Colors.PrimaryColorLight}, ${Colors.White})`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: Colors.Slate800 }}
          >
            About VidhiVidh
          </h1>
          <p
            className="mt-6 text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: Colors.Slate600 }}
          >
            Two decades of justice, integrity, and unwavering legal commitment.
          </p>
        </div>
      </section> */}

      {/* About Content Section */}
      <section
        ref={sectionRef}
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.PrimaryColorLight}11, ${Colors.White}, ${Colors.Slate400}11)`,
        }}
      >
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

        <div className="container mx-auto px-6">
          <Card
            ref={contentRef}
            className="bg-white border-0 shadow-lg transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center px-8 py-10">
              {/* Image Section */}
              <div className="w-full">
                <img
                  src="/images/about-vidhividh.jpg"
                  alt="VidhiVidh Office"
                  className="rounded-xl shadow-md w-full object-cover h-72 md:h-full"
                />
              </div>

              {/* Text Section */}
              <div>
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-3xl font-semibold mb-4"
                    style={{ color: Colors.Slate700 }}
                  >
                    Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="px-0 text-lg space-y-5"
                  style={{ color: Colors.Slate600 }}
                >
                  <p>
                    Established 20 years ago in the culturally vibrant city of
                    Lucknow, VidhiVidh has evolved into a renowned legal
                    institution known for its deep-rooted values and
                    client-first approach. From a modest beginning, we have
                    grown to serve individuals, businesses, and institutions
                    with steadfast dedication.
                  </p>
                  <p>
                    Our philosophy blends traditional ethics with modern legal
                    strategy. Whether it’s resolving complex disputes or
                    offering proactive legal advice, we bring clarity,
                    compassion, and competence to every case. We don’t just
                    provide legal service — we stand as pillars of justice.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
