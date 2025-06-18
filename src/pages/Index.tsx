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

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const phoneNumber = "919876543210"; // Replace with actual number

  useEffect(() => {
    if (isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
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
      <section id="attorneys">
        <Attorneys />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      {/* Floating Action Buttons */}
      <div
        ref={fabRef}
        className="fixed bottom-10 right-8 z-50 flex flex-col items-end space-y-4"
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
