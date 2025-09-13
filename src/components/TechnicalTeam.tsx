import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "@/styles/global";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

// 👨‍💻 Team Members Data
const teamMembers = [
  {
    name: "Aditya Kandpal",
    email: "john.doe@example.com",
    linkedin: "https://in.linkedin.com/in/aditya-kandpal-1959681b8",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE-esvHw6vZOA/profile-displayphoto-shrink_200_200/B56ZZUHwMsHQAY-/0/1745168041277?e=2147483647&v=beta&t=dxSvCqw0Pt8lg345iuQ1eQC3W0PFxycart7V5saivt8",
  },
  {
    name: "Ahzam Naseem Kidwai",
    email: "ahzamnaseem.kidwai@gmail.com",
    linkedin: "https://in.linkedin.com/in/ahzam-naseem-kidwai-54b998242",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFIeNqyl5QsnA/profile-displayphoto-scale_200_200/B56ZjcMAt6IEAY-/0/1756040795543?e=2147483647&v=beta&t=rRKlYdFzOJ8yYjAhg6arH2gIuBoJRjkVHxJzOYJHixY",
  },
];

const TechnicalTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <CustomizedNavigation />

      <section
        ref={sectionRef}
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background: `linear-gradient(to bottom right, ${Colors.CardBgSecondaryColor}11, ${Colors.TextColor1}, ${Colors.TextColor3}11)`,
        }}
      >
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: Colors.TextColor2 }}
          >
            Technical Team
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: Colors.TextColor6, lineHeight: "1.8" }}
          >
            Meet the brilliant minds powering our technology. Together, they
            ensure our digital presence remains innovative and secure.
          </p>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              style={{ backgroundColor: Colors.CardBgSecondaryColor }}
              className="border-0 shadow-lg transition-transform duration-300 p-6 hover:-translate-y-2"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-md"
                />
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle
                      className="text-xl sm:text-2xl font-semibold"
                      style={{ color: Colors.TextColor3 }}
                    >
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center sm:justify-start gap-2 transition-colors duration-300 break-all text-sm md:text-base lg:text-lg xl:text-lg"
                      style={{ color: Colors.TextColor5 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = Colors.TextColor3)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = Colors.TextColor5)
                      }
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />{" "}
                      {member.email}
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 transition-colors duration-300 break-all text-sm md:text-base lg:text-lg xl:text-lg"
                      style={{ color: Colors.TextColor5 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = Colors.TextColor3)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = Colors.TextColor5)
                      }
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />{" "}
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalTeam;
