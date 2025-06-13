import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Gavel } from "lucide-react";
import { ThemeColors } from "@/styles/global";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "About", href: "#about" },
    { name: "Attorneys", href: "#attorneys" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-backgroundDark/90 backdrop-blur-md shadow-md"
          : "bg-backgroundDark backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Gavel className="h-8 w-8 text-highlight" />
            <span className="text-xl font-bold text-textLight">VidhiVidh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-textLight hover:text-highlight transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-highlight hover:bg-highlightHover text-backgroundDark font-semibold shadow-md"
              onClick={() => scrollToSection("#contact")}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-textLight" />
            ) : (
              <Menu className="h-6 w-6 text-textLight" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-backgroundDark border-t border-borderDark shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-textLight hover:text-highlight hover:bg-backgroundDarkSoft transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  className="w-full bg-highlight hover:bg-highlightHover text-backgroundDark font-semibold"
                  onClick={() => scrollToSection("#contact")}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
