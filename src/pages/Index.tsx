import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Attorneys from "@/components/Attorneys";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Phone, Plus, X, MessageCircle } from "lucide-react";
import { Colors } from "@/styles/global";
import FAQs from "@/components/FAQs";
import DisclaimerModal from "@/components/DisclaimerModal";
import Patron from "@/components/Patron";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false); // Initialize as false
  const fabRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const phoneNumber = "919450411390";

  // Check local storage on component mount
  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (disclaimerAccepted !== "true") {
      setShowDisclaimer(true);
    }
  }, []);

  // Auto-close FAB after 2.5 seconds
  useEffect(() => {
    if (isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsOpen(false), 2500);
    }
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [isOpen]);

  // Close FAB on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDisclaimerResponse = (accept: boolean) => {
    if (accept) {
      // Store acceptance in local storage
      localStorage.setItem("disclaimerAccepted", "true");
    }
    setShowDisclaimer(false);
    if (!accept) {
      window.location.href = "https://www.google.com";
    }
  };

  if (showDisclaimer) {
    return (
      <DisclaimerModal handleDisclaimerResponse={handleDisclaimerResponse} />
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />

      <section id="home">
        <Hero />
      </section>

      <section id="practice-areas">
        <PracticeAreas />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="patron">
        <Patron />
      </section>

      <section id="attorneys">
        <Attorneys />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <FAQs />

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      {/* Floating Action Buttons */}
      <div
        ref={fabRef}
        className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-4 max-w-[100vw]"
      >
        {isOpen && (
          <>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: Colors.WhatsAppColor }}
              className="hover:scale-110 hover:brightness-90 text-white p-4 rounded-full shadow-md transition-transform"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Phone Call */}
            <a
              href={`tel:+${phoneNumber}`}
              style={{ backgroundColor: Colors.PrimaryColorLight }}
              className="hover:scale-110 hover:brightness-90 text-white p-4 rounded-full shadow-md transition-transform"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
          </>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ backgroundColor: Colors.DarkGray }}
          className="hover:scale-110 hover:brightness-90 text-white p-4 rounded-full shadow-lg transition-transform"
          title="Contact Options"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default Index;
